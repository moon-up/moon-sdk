// import { MoonProvider } from '@moonup/ethers';
import type { MoonSDK } from "@moonup/moon-sdk";
import type { ethers } from "ethers";

export interface MoonSDKHook {
	moon: MoonSDK | null;
	initialize: () => Promise<void>;
	disconnect: () => Promise<void>;
}

export interface MoonEthersHook {
	moonProvider: null;
	moon: MoonSDK | null;
	initialize: () => Promise<void>;
	disconnect: () => Promise<void>;
}

export interface Transaction {
	from?: string;
	nonce?: ethers.BigNumberish;
	gasLimit?: ethers.BigNumberish;
	gasPrice?: ethers.BigNumberish;
}

export interface MoonSkaleEthersHook {
	moonProvider: null;
	moon: MoonSDK | null;
	initialize: () => Promise<void>;
	disconnect: () => Promise<void>;
	mineForGas: (contractAddress: string, address: string) => Promise<string>;
}
