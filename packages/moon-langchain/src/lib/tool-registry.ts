import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { OpenAIEmbeddings } from "@langchain/openai";
import axios, { type AxiosInstance } from "axios";
import { Document } from "langchain/document";
import type { Tool } from "langchain/tools";

import { tool } from "@langchain/core/tools";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { MoonAPIConfig } from "./types";

export class DynamicToolRegistry {
	private client: AxiosInstance;
	private swagger: any;
	private toolRegistry: Record<string, any> = {};
	private vectorStore: SupabaseVectorStore;
	private embeddings: OpenAIEmbeddings;

	constructor(config: MoonAPIConfig, swagger: any) {
		this.swagger = swagger;
		this.client = axios.create({
			baseURL: config.baseUrl || "http://localhost:4001",
			headers: {
				"Content-Type": "application/json",
				...(config.apiKey && { "X-API-Key": config.apiKey }),
				...(config.bearerToken && {
					Authorization: `Bearer ${config.bearerToken}`,
				}),
			},
		});
		this.embeddings = new OpenAIEmbeddings({
			apiKey: config.openai_api_key,
		});
		const supabaseClient = createClient(
			"https://api.usemoon.ai",
			config.supabase_api_key,
		);

		this.vectorStore = new SupabaseVectorStore(this.embeddings, {
			client: supabaseClient,
			tableName: "documents",
			queryName: "match_documents",
		});

		console.log("DynamicToolRegistry initialized");
	}
	async initialize() {
		const toolCatalog = this.generateToolCatalog();
		console.log(
			"Generated tool catalog:",
			toolCatalog.map((t) => t.id),
		);

		const loadAndRegisterPromises = toolCatalog.map(async (toolInfo) => {
			const tool = this.loadTool(toolInfo.id);
			if (tool) {
				this.toolRegistry[toolInfo.id] = tool;
				return this.addToolToVectorStore(toolInfo.id, tool);
				// return null;
			} else {
				console.warn(`Failed to load tool: ${toolInfo.id}`);
				return null;
			}
		});

		await Promise.all(loadAndRegisterPromises);

		console.log("Registered tools:", Object.keys(this.toolRegistry));
		return toolCatalog;
	}

	private generateToolCatalog() {
		const catalog = [];
		for (const [path, methods] of Object.entries(this.swagger.paths)) {
			for (const [method, spec] of Object.entries(methods as any)) {
				const operationId = (spec as any).operationId;
				if (!operationId) {
					console.warn(`Missing operationId for ${method} ${path}`);
					continue;
				}

				// Keep original operationId without camelCase transformation
				catalog.push({
					id: operationId,
					name: operationId,
					description: this.generateToolDescription(spec as any, path, method),
					path,
					method,
				});
			}
		}
		return catalog;
	}
	private loadTool(toolId: string): any | null {
		for (const [path, methods] of Object.entries(this.swagger.paths)) {
			for (const [method, spec] of Object.entries(methods as any)) {
				if ((spec as any).operationId === toolId) {
					const { pathSchema, querySchema, bodySchema } =
						this.createParameterSchemas(
							(spec as any).parameters || [],
							(spec as any).requestBody,
						);

					const toolFunction = async (input: any) => {
						try {
							const formattedPath = input.pathParams
								? this.formatPath(path, input.pathParams)
								: path;

							return await this.makeRequest(
								method.toUpperCase(),
								formattedPath,
								input.queryParams,
								input.body,
							);
						} catch (error) {
							return `Error: ${(error as Error).message}`;
						}
					};

					// Create a valid JSON Schema
					const schema = {
						type: "object",
						properties: {},
						required: [],
					};

					// Add properties if they exist
					if (pathSchema) {
						schema.properties["pathParams"] = this.zodToJsonSchema(pathSchema);
						schema.required.push("pathParams");
					}
					if (querySchema) {
						schema.properties["queryParams"] =
							this.zodToJsonSchema(querySchema);
						schema.required.push("queryParams");
					}
					if (bodySchema) {
						schema.properties["body"] = this.zodToJsonSchema(bodySchema);
						schema.required.push("body");
					}

					// If no properties were added, add a dummy property
					if (Object.keys(schema.properties).length === 0) {
						schema.properties["dummy"] = {
							type: "string",
							description: "Dummy parameter for empty schema",
						};
					}

					const createdTool = tool(toolFunction, {
						name: toolId,
						description: this.generateToolDescription(
							spec as any,
							path,
							method,
						),
						schema: schema,
					});

					return createdTool;
				}
			}
		}
		console.warn(`Tool not found in swagger: ${toolId}`);
		return null;
	}

	private createZodSchema(schema: any): z.ZodType<any, any, any> {
		if (!schema || Object.keys(schema).length === 0) {
			return z.object({
				dummy: z
					.string()
					.optional()
					.describe("Dummy property for empty schema"),
			});
		}

		switch (schema.type) {
			case "object":
				const shape: Record<string, z.ZodType> = {};
				Object.entries(schema.properties || {}).forEach(
					([key, value]: [string, any]) => {
						shape[key] = this.createZodSchema(value);
					},
				);
				const baseSchema = z.object(shape);
				return schema.required
					? baseSchema.required(schema.required)
					: baseSchema.partial();

			case "array":
				return z.array(this.createZodSchema(schema.items));

			case "string":
				return z.string();

			case "number":
			case "integer":
				return z.number();

			case "boolean":
				return z.boolean();

			default:
				// Return a default object schema if the type is not recognized
				return z.object({
					dummy: z
						.string()
						.optional()
						.describe("Dummy property for unknown schema type"),
				});
		}
	}

	private zodToJsonSchema(schema: z.ZodType<any, any>): any {
		if (!schema) {
			return {
				type: "object",
				properties: {
					dummy: {
						type: "string",
						description: "Dummy property for undefined schema",
					},
				},
				required: [],
			};
		}

		if (schema instanceof z.ZodObject) {
			const properties = {};
			const required = [];
			for (const [key, value] of Object.entries(schema.shape)) {
				properties[key] = this.zodToJsonSchema(value as z.ZodType<any, any>);
				if (!(value instanceof z.ZodOptional)) {
					required.push(key);
				}
			}
			return { type: "object", properties, required };
		} else if (schema instanceof z.ZodArray) {
			return { type: "array", items: this.zodToJsonSchema(schema.element) };
		} else if (schema instanceof z.ZodString) {
			return { type: "string" };
		} else if (schema instanceof z.ZodNumber) {
			return { type: "number" };
		} else if (schema instanceof z.ZodBoolean) {
			return { type: "boolean" };
		} else if (schema instanceof z.ZodOptional) {
			return this.zodToJsonSchema(schema.unwrap());
		} else {
			// Default to empty object schema for unknown types
			return {
				type: "object",
				properties: {
					dummy: {
						type: "string",
						description: "Dummy property for unknown schema type",
					},
				},
				required: [],
			};
		}
	}
	getTool(id: string): Tool | undefined {
		const tool = this.toolRegistry[id];
		if (!tool) {
			console.warn(`Tool not found in registry: ${id}`);
			console.log("Available tools:", Object.keys(this.toolRegistry));
		}
		return tool;
	}

	private camelCase(str: string): string {
		return str.replace(/([-_][a-z])/gi, (group) =>
			group.toUpperCase().replace("-", "").replace("_", ""),
		);
	}

	private createParameterSchemas(parameters: any[], requestBody?: any) {
		const pathParams: Record<string, z.ZodType> = {};
		const queryParams: Record<string, z.ZodType> = {};

		parameters.forEach((param) => {
			const schema = this.createZodSchema(param.schema);

			if (param.in === "path") {
				pathParams[param.name] = schema;
			} else if (param.in === "query") {
				queryParams[param.name] = schema;
			}
		});

		let bodySchema: z.ZodType | undefined;
		if (
			requestBody &&
			requestBody.content &&
			requestBody.content["application/json"]
		) {
			bodySchema = this.createZodSchema(
				requestBody.content["application/json"].schema,
			);
		}

		return {
			pathSchema:
				Object.keys(pathParams).length > 0 ? z.object(pathParams) : undefined,
			querySchema:
				Object.keys(queryParams).length > 0 ? z.object(queryParams) : undefined,
			bodySchema,
		};
	}

	private generateToolDescription(
		spec: any,
		path: string,
		method: string,
	): string {
		const toolName = spec.operationId || `${method.toUpperCase()} ${path}`;
		let description = `Tool Name: ${toolName}\n`;
		description += `Endpoint: ${method.toUpperCase()} ${path}\n\n`;
		description += spec.summary ? `Summary: ${spec.summary}\n\n` : "";
		description += spec.description
			? `Description: ${spec.description}\n\n`
			: "";

		const params = spec.parameters || [];
		const pathParams = params.filter((p: any) => p.in === "path");
		const queryParams = params.filter((p: any) => p.in === "query");

		if (pathParams.length) {
			description += "Path Parameters:\n";
			pathParams.forEach((p: any) => {
				description += `- ${p.name} (${p.schema.type}): ${p.description || "No description"}\n`;
			});
			description += "\n";
		}

		if (queryParams.length) {
			description += "Query Parameters:\n";
			queryParams.forEach((p: any) => {
				description += `- ${p.name} (${p.schema.type}): ${p.description || "No description"}\n`;
			});
			description += "\n";
		}

		if (spec.requestBody) {
			description += "Request Body:\n";
			const content = spec.requestBody.content["application/json"];
			if (content && content.schema) {
				const components = this.swagger;
				const resolvedSchema = this.resolveSchemaRef(
					content.schema,
					components,
				);
				description += JSON.stringify(resolvedSchema, null, 2) + "\n\n";
			}
		}

		if (spec.responses) {
			description += "Responses:\n";
			Object.entries(spec.responses).forEach(
				([code, response]: [string, any]) => {
					description += `${code}: ${response.description || "No description"}\n`;
					if (response.content && response.content["application/json"]) {
						const components = this.swagger;
						const resolvedSchema = this.resolveSchemaRef(
							response.content["application/json"].schema,
							components,
						);
						description += JSON.stringify(resolvedSchema, null, 2) + "\n\n";
					}
				},
			);
		}

		return description.trim();
	}
	private formatSchema(schema: any, indent = 0): string {
		const indentStr = "  ".repeat(indent);
		let result = "";

		if (schema.type === "object" && schema.properties) {
			result += `${indentStr}type: object\n`;
			if (schema.description) {
				result += `${indentStr}description: ${schema.description}\n`;
			}
			result += `${indentStr}properties:\n`;
			for (const [key, value] of Object.entries(schema.properties)) {
				result += `${indentStr}  ${key}:\n`;
				result += this.formatSchema(value as any, indent + 2);
			}
		} else if (schema.type === "array" && schema.items) {
			result += `${indentStr}type: array\n`;
			if (schema.description) {
				result += `${indentStr}description: ${schema.description}\n`;
			}
			result += `${indentStr}items:\n`;
			result += this.formatSchema(schema.items, indent + 1);
		} else {
			if (schema.type) {
				result += `${indentStr}type: ${schema.type}\n`;
			}
			if (schema.description) {
				result += `${indentStr}description: ${schema.description}\n`;
			}
		}

		return result;
	}
	private resolveSchemaRef(
		schema: any,
		components: any,
		cache: Map<string, any> = new Map(),
	): any {
		if (!schema) return schema;

		if (schema.$ref) {
			const refPath = schema.$ref.replace("#/", "").split("/");
			if (cache.has(schema.$ref)) {
				return cache.get(schema.$ref);
			}

			let resolved: any = components;
			for (const segment of refPath) {
				if (!resolved || typeof resolved !== "object") {
					console.warn(`Unable to resolve schema reference: ${schema.$ref}`);
					return schema;
				}
				resolved = resolved[segment];
			}

			cache.set(schema.$ref, {});

			const fullyResolved = this.resolveSchemaRef(resolved, components, cache);
			cache.set(schema.$ref, fullyResolved);

			return fullyResolved;
		}

		if (schema.type === "object" && schema.properties) {
			const resolvedProperties: any = {};
			for (const [key, value] of Object.entries(schema.properties)) {
				resolvedProperties[key] = this.resolveSchemaRef(
					value as any,
					components,
					cache,
				);
			}
			return { ...schema, properties: resolvedProperties };
		}

		if (schema.type === "array" && schema.items) {
			return {
				...schema,
				items: this.resolveSchemaRef(schema.items, components, cache),
			};
		}

		return schema;
	}

	private simplifySchema(schema: any): any {
		if (typeof schema !== "object" || schema === null) {
			return schema;
		}

		if (Array.isArray(schema)) {
			return schema.map((item) => this.simplifySchema(item));
		}

		const simplified: any = {};
		for (const [key, value] of Object.entries(schema)) {
			if (
				key === "type" ||
				key === "description" ||
				key === "properties" ||
				key === "items"
			) {
				simplified[key] = this.simplifySchema(value as any);
			}
		}
		return simplified;
	}

	private formatPath(path: string, params: Record<string, any>): string {
		return path.replace(/{([^}]+)}/g, (_, param) => params[param]);
	}

	private async makeRequest(
		method: string,
		path: string,
		params?: any,
		body?: any,
	): Promise<string> {
		try {
			const response = await this.client({
				method,
				url: path,
				params,
				data: body || {},
			});
			return JSON.stringify(response.data);
		} catch (error) {
			console.error(`Error in makeRequest (${method} ${path}):`, error);
			if (error.response) {
				return JSON.stringify({
					error: `Request failed with status code ${error.response.status}`,
					message:
						error.response.data?.message ||
						"No additional error message provided",
				});
			} else if (error.request) {
				return JSON.stringify({
					error: "No response received from the server",
					message: "Please check your network connection and try again",
				});
			} else {
				return JSON.stringify({
					error: "Error setting up the request",
					message: error.message,
				});
			}
		}
	}
	private async addToolToVectorStore(id: string, tool: any) {
		const doc = new Document({
			pageContent: tool.description,
			metadata: { toolName: tool.name, toolId: id },
		});
		await this.vectorStore.addDocuments([doc]);
	}

	async selectTools(query: string, count = 1): Promise<string[]> {
		console.log("Selecting tools...");
		const results = await this.vectorStore.similaritySearch(query, count);
		console.log("Tools selected.");
		return results.map((doc) => doc.metadata.toolId);
	}
}

export default DynamicToolRegistry;
