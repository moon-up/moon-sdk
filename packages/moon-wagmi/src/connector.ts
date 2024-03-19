import { MoonProvider } from '@moonup/ethers';
import { MoonSDK } from '@moonup/moon-sdk';
import { createMoonAccount } from '@moonup/viem';
import { createConnector, type CreateConnectorFn } from '@wagmi/core';
import {
  Chain,
  Client,
  createClient,
  custom,
  isAddress,
  type ProviderConnectInfo,
} from 'viem';
import { Address } from 'viem/accounts';

export interface MoonConnectorOptions {
  chains?: Chain[];
  SDK: MoonSDK;
  address: string;
  chainId: number;
}

export function createMoonConnector(
  options: MoonConnectorOptions
): CreateConnectorFn {
  const { SDK, address, chainId } = options;
  // validate sdk and address and chainId
  // check if sdk is instance of MoonSDK
  if (!(SDK instanceof MoonSDK)) {
    throw new Error('SDK must be an instance of MoonSDK');
  }

  // check if address is a string
  if (typeof address !== 'string') {
    throw new Error('address must be a string');
  }

  // check if address is empty
  if (address === '') {
    throw new Error('address cannot be empty');
  }

  // check if address is a valid ethereum address
  if (!isAddress(address)) {
    throw new Error('address is not a valid ethereum address');
  }

  // check if chainId is a number
  if (typeof chainId !== 'number') {
    throw new Error('chainId must be a number');
  }
  const provider = new MoonProvider({ SDK, address, chainId });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return createConnector((config) => ({
    id: 'moon',
    name: 'Moon',
    type: 'wallet',
    connect: async (param: {
      chainId?: number;
      isReconnecting?: boolean;
    }): Promise<{
      accounts: readonly Address[];
      chainId: number;
    }> => {
      const chainId = param?.chainId || options.chainId;
      const accounts = (await SDK.listAccounts()) as readonly `0x${string}}`[];
      return { accounts, chainId };
    },
    disconnect: async (): Promise<void> => {
      await SDK.disconnect();
    },
    getAccounts: async (): Promise<readonly Address[]> => {
      return (await SDK.listAccounts()) as readonly Address[];
    },
    getChainId: async () => options.chainId,
    getProvider: async () => {
      return new MoonProvider({ SDK, address, chainId });
    },
    getClient: async (parameters: { chainId?: number }): Promise<Client> => {
      // create moon client
      const account = await createMoonAccount({
        sdk: SDK,
        ethereumAddress: address,
      });

      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      });

      return createClient({
        account: account,
        chain: options.chains?.find((x) => x.id === parameters.chainId),
        transport: custom(provider),
      });
    },
    isAuthorized: async () => {
      return SDK.isAuthenticated;
    },
    setup: async (): Promise<void> => {
      await SDK.connect();
    },
    switchChain: async (parameters: { chainId: number }): Promise<Chain> => {
      const chain = options.chains?.find((x) => x.id === parameters.chainId);
      if (!chain) {
        throw new Error('chain not found');
      }
      const provider = new MoonProvider({ SDK, address, chainId });
      await provider?.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      });
      config.emitter.emit('change', {
        chainId: parameters.chainId,
      });
      return { id: chainId } as Chain;
    },

    onAccountsChanged: (accounts: string[]): void => {
      config.emitter.emit('change', {
        accounts: accounts as readonly Address[],
      });
    },
    onChainChanged: (chainId: string): void => {
      config.emitter.emit('change', { chainId: parseInt(chainId, 16) });
    },

    onConnect: async (connectInfo: ProviderConnectInfo): Promise<void> => {
      // fetch accounts
      const accounts = (await SDK.listAccounts()) as readonly Address[];
      config.emitter.emit('connect', {
        accounts: accounts,
        chainId: Number(connectInfo.chainId),
      });
    },

    onDisconnect: (error?: Error): void => {
      config.emitter.emit('disconnect');
      console.error(error);
    },
    onMessage: (message: { type: string; data?: unknown }): void => {
      config.emitter.emit('message', message);
    },
  }));
}
