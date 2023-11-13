import { MoonConfig } from '@moonup/moon-types';
export interface MoonProviderOptions {
  chainId: number;
  MoonSDKConfig: MoonConfig;
}

export interface ProviderRpcError extends Error {
  code: number;
  data?: unknown;
}
