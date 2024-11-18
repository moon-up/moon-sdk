import { HumanMessage } from "@langchain/core/messages";

import * as dotenv from "dotenv";
import { resolve } from "node:path";
import { createAgent } from "./lib";
// Usage
import swagger from "./swagger.json";

// Load environment variables from .env file
dotenv.config({ path: resolve(__dirname, "./.env") });
const requiredEnvVars = ["OPENAI_API_KEY", "SUPABASE_API_KEY", "BEARER_TOKEN"];
for (const envVar of requiredEnvVars) {
	if (!process.env[envVar]) {
		throw new Error(`${envVar} is not set in the environment variables`);
	}
}
async function executeWorkflow(swagger: any) {
	console.log("Creating agent...");
	const runnable = await createAgent(swagger, {
		bearerToken: process.env.BEARER_TOKEN,
		supabase_api_key: process.env.SUPABASE_API_KEY,
		openai_api_key: process.env.OPENAI_API_KEY,
	});
	console.log("Agent created. Executing workflow...");

	const result = await runnable.invoke({
		messages: [
			new HumanMessage(
				"Use the available tools to perform using odos swap 1 eth to usdc on polygon and resolve any tools that you think is necessary",
			),
		],
		selectedTools: [],
	});

	console.log("Workflow execution completed. Result:");
	console.log(JSON.stringify(result, null, 2));
	console.log("All messages:");
	result.messages.forEach((message, index) => {
		console.log(`Message ${index}:`, JSON.stringify(message, null, 2));
	});
}

executeWorkflow(swagger).catch(console.error);
