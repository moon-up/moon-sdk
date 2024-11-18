import type { BaseMessage } from "@langchain/core/messages";

export interface MoonAPIConfig {
	baseUrl?: string;
	apiKey?: string;
	bearerToken?: string;
	supabase_api_key?: string;
	openai_api_key?: string;
}

export interface State {
	messages: BaseMessage[];
	selectedTools: string[];
}
