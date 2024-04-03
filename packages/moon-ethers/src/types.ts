import { MoonSDK } from '@moonup/moon-sdk';
export interface MoonProviderOptions {
  chainId: number;
  SDK: MoonSDK;
  address: string;
}

export interface ProviderRpcError extends Error {
  code: number;
  data?: unknown;
}
