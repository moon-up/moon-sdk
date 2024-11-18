import {
	AIMessage,
	type BaseMessage,
	HumanMessage,
	SystemMessage,
	ToolMessage,
} from "@langchain/core/messages";
import { Annotation, StateGraph } from "@langchain/langgraph";
import { ToolNode } from "@langchain/langgraph/prebuilt";
import { ChatOpenAI } from "@langchain/openai";
import type { Tool } from "langchain/tools";

import { DynamicToolRegistry } from ".";
import type { MoonAPIConfig, State } from "./types";
export async function createAgent(swagger: any, config: MoonAPIConfig) {
	const toolRegistry = new DynamicToolRegistry(config, swagger);
	const tools = await toolRegistry.initialize();
	console.log("Tools initialized:", tools.length);

	const model = new ChatOpenAI({
		model: "gpt-4o",
		apiKey: process.env.OPENAI_API_KEY,
	});

	async function selectTools(state: State): Promise<Partial<State>> {
		console.log("Selecting tools...");

		const llm = new ChatOpenAI({
			model: "gpt-4o",
			apiKey: process.env.OPENAI_API_KEY,
		});

		const systemMessage = new SystemMessage(`
  Analyze the user's request and determine a query for selecting relevant tools and the number of tools needed.
  Ensure to include only what the user needs and requests.
  and return response in json format }
`);

		const humanMessage = new HumanMessage(
			state.messages[state.messages.length - 1].content as string,
		);

		const response = await llm.invoke([systemMessage, humanMessage], {
			response_format: { type: "json_object" },
			function_call: { name: "select_tools" },
			functions: [
				{
					name: "select_tools",
					description: "Select tools based on user request",
					parameters: {
						type: "object",
						properties: {
							query: {
								type: "string",
								description: "Query for selecting relevant tools",
							},
							toolCount: {
								type: "integer",
								description: "Number of tools needed (between 1 and 5)",
								minimum: 1,
								maximum: 5,
							},
						},
						required: ["query", "toolCount"],
					},
				},
			],
		});

		const functionCall = response.additional_kwargs.function_call;
		if (!functionCall || functionCall.name !== "select_tools") {
			throw new Error("Unexpected response format from LLM");
		}

		const { query, toolCount } = JSON.parse(functionCall.arguments);

		console.log(
			`Selecting up to ${toolCount} tools based on query: "${query}"`,
		);
		const selectedTools = await toolRegistry.selectTools(query, toolCount);
		console.log(`Selected ${selectedTools.length} tools.`);

		return { selectedTools };
	}
	// ... existing code ...

	async function agent(state: State): Promise<Partial<State>> {
		const selectedTools = state.selectedTools
			.map((id) => toolRegistry.getTool(id))
			.filter((tool): tool is Tool => tool !== undefined);

		console.log(
			"Selected tools:",
			selectedTools.map((tool) => tool.name),
		);

		const modelWithTools = model.bind({
			tools: selectedTools,
		});

		const systemMessage = new SystemMessage(`You are an AI assistant with access to the following tools:
${selectedTools.map((tool) => `- ${tool.name}: ${tool.description}`).join("\n")}

Your task is to use these tools to fulfill the user's request. If you need to use a tool, call it explicitly using its name.
Always provide a final response to the user after using the tools.`);

		const allMessages = [systemMessage, ...state.messages];
		let response;
		try {
			response = await modelWithTools.invoke(allMessages);
		} catch (error) {
			console.error("Error invoking model:", error);
			return {
				messages: [
					...state.messages,
					new AIMessage("An error occurred while processing your request."),
				],
			};
		}

		const updatedMessages = [...state.messages, response];

		if (response.additional_kwargs.tool_calls) {
			for (const toolCall of response.additional_kwargs.tool_calls) {
				console.log(`Processing tool call: ${toolCall.function.name}`);
				const tool = selectedTools.find(
					(t) => t.name === toolCall.function.name,
				);
				if (tool) {
					try {
						console.log(
							`Calling tool ${tool.name} with arguments:`,
							toolCall.function.arguments,
						);
						const toolResult = await tool.call(
							JSON.parse(toolCall.function.arguments),
						);
						const toolMessage = new ToolMessage({
							content: JSON.stringify(toolResult),
							tool_call_id: toolCall.id,
							name: tool.name,
						});
						updatedMessages.push(toolMessage);
					} catch (error) {
						console.error(`Error calling tool ${tool.name}:`, error);
						const errorMessage = `Error calling tool ${tool.name}: ${(error as Error).message}. Please try again or use a different approach.`;
						const errorResponse = new ToolMessage({
							content: errorMessage,
							tool_call_id: toolCall.id,
							name: tool.name,
						});
						updatedMessages.push(errorResponse);
					}
				} else {
					console.warn(`Tool '${toolCall.function.name}' not found.`);
					const errorResponse = new ToolMessage({
						content: `Error: Tool '${toolCall.function.name}' not found.`,
						tool_call_id: toolCall.id,
						name: toolCall.function.name,
					});
					updatedMessages.push(errorResponse);
				}
			}

			// Generate a final response after all tool calls have been processed
			try {
				console.log("Generating final response...");
				const finalResponse = await modelWithTools.invoke(updatedMessages);
				updatedMessages.push(finalResponse);
			} catch (error) {
				console.error("Error generating final response:", error);
				const errorMessage =
					"An error occurred while generating the final response. Here's a summary of what happened:\n\n" +
					updatedMessages
						.map((msg) => `${msg.type}: ${msg.content}`)
						.join("\n") +
					"\n\nPlease try your request again, or rephrase it if the issue persists.";
				updatedMessages.push(new AIMessage(errorMessage));
			}
		}

		return { messages: updatedMessages };
	}

	// ... existing code ...

	const StateAnnotation = Annotation.Root({
		messages: Annotation<BaseMessage[]>({
			reducer: (x, y) => x.concat(y),
		}),
		selectedTools: Annotation<string[]>({
			reducer: (x, y) => x.concat(y),
		}),
		agent_scratchpad: Annotation<string[]>({
			reducer: (x, y) => x.concat(y),
		}),
	});

	const loadedTools = tools
		.map((toolInfo) => {
			const tool = toolRegistry.getTool(toolInfo.id);
			if (!tool) {
				console.warn(`Tool not found for id: ${toolInfo.id}`);
				return null;
			}
			return tool as Tool;
		})
		.filter((tool): tool is Tool => tool !== null);

	console.log(
		`Loaded ${loadedTools.length} tools out of ${tools.length} total`,
	);
	console.log(
		"Available tools:",
		loadedTools.map((tool) => tool.name).join(", "),
	);

	const toolNode = new ToolNode(loadedTools);
	const graph = new StateGraph(StateAnnotation)
		.addNode("agent", agent)
		.addNode("selectTools", selectTools)
		.addNode("tools", toolNode)
		.addEdge("__start__", "selectTools")
		.addEdge("selectTools", "agent")
		.addConditionalEdges(
			"agent",
			(state) => {
				const lastMessage = state.messages[state.messages.length - 1];
				return lastMessage instanceof AIMessage &&
					lastMessage.additional_kwargs.tool_calls &&
					lastMessage.additional_kwargs.tool_calls.length > 0
					? "select_tools"
					: "end";
			},
			{
				select_tools: "selectTools",
				end: "__end__",
			},
		)
		.addEdge("agent", "tools");

	return graph.compile();
}
