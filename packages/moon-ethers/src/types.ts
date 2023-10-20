import { MoonSDKConfig } from '@moonup/types/src/types';
export interface MoonProviderOptions {
	rpcUrl: string;
	chainId: number;
	MoonSDKConfig: MoonSDKConfig;
}

export interface ProviderRpcError extends Error {
	code: number;
	data?: unknown;
}
