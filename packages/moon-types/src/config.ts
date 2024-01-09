import { AUTH } from './auth';
import { Chain } from './chain';
import { MoonStorage, Storage } from './storage';

export interface Headers {
  Authorization: string;
}
export interface MoonAuthConfig {
  AuthType: AUTH;
  CLIENT_SECRET?: string;
  CLIENT_ID?: string;
  REDIRECT_URI?: string;
  X_API_KEY?: string;
}
export interface MoonStorageConfig {
  type: Storage;
  key: string;
}
export interface MoonConfig {
  Storage: MoonStorageConfig;
  Auth: MoonAuthConfig;
  Networks?: Chain[];
}

export interface MoonToken {
  type: AUTH;
  securityWorker?: (securityData: string) => Promise<Headers>;
  CLIENT_ID?: string;
  CLIENT_SECRET?: string;
  REDIRECT_URI?: string;
}
export interface MoonSDKConfig {
  Auth: MoonToken;
  Storage: MoonStorage;
  Networks: Chain[];
}
