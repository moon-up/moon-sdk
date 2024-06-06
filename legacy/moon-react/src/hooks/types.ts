import { MoonProvider } from '@moonup/ethers';
import { MoonSDK } from '@moonup/moon-sdk';
import { ethers } from 'ethers';

export interface MoonSDKHook {
  moon: MoonSDK | null;
  initialize: () => Promise<void>;
  disconnect: () => Promise<void>;
}

export interface MoonEthersHook {
  moonProvider: MoonProvider | null;
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
  moonProvider: MoonProvider | null;
  moon: MoonSDK | null;
  initialize: () => Promise<void>;
  disconnect: () => Promise<void>;
  mineForGas: (contractAddress: string, address: string) => Promise<string>;
}
