import { Chain } from './chains';
export enum Storage {
	LOCAL = 'local',
	SESSION = 'session',
}
export const MOON_SESSION_KEY = 'MoonSessionKey';
export interface MoonStorage {
	type: Storage;
	key: string;
	setItem(account: MoonAccount): void;
	getItem(): MoonAccount | null;
	removeItem(): void;
}

export interface MoonAccount {
	token: string;
	email: string;
	expiry: number;
	wallet: string;
	network: Chain;
}

export enum AUTH {
	OAUTH2 = 'oauth2',
	JWT = 'bearer',
	X_API_KEY = 'x-api-key',
}
export interface MoonToken {
	type: AUTH;
	MoonAccount: MoonAccount;
	securityWorker: (securityData: any) => Promise<any> | any;
	CLIENT_ID?: string;
	CLIENT_SECRET?: string;
	REDIRECT_URI?: string;
}
export interface MoonSDKConfig {
	Auth: MoonToken;
	Storage: MoonStorage;
	Networks: Chain[];
}
