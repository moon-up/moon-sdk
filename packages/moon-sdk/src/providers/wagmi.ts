import {
  Chain,
  Client,
  createClient,
  custom,
  isAddress,
  type ProviderConnectInfo,
} from 'viem';
import { Address } from 'viem/accounts';
import { Connector, createConnector, type CreateConnectorFn } from 'wagmi';

import { MoonSDK } from '../moon';

/**
 * Interface representing the options for the MoonConnector.
 *
 * @property {Chain[]} [chains] - An optional array of Chain objects.
 * @property {MoonSDK} SDK - The MoonSDK instance.
 * @property {number} chainId - The ID of the chain.
 * @property {Connector[]} connectors - An array of Connector objects.
 */
export interface MoonConnectorOptions {
  chains?: Chain[];
  SDK: MoonSDK;
  chainId: number;
  connectors: Connector[];
}

/**
 * Creates a Moon Connector for the Moon SDK.
 *
 * @param options - The options for creating the Moon Connector.
 * @param options.SDK - An instance of MoonSDK.
 * @param options.chainId - The chain ID to connect to.
 * @param options.chains - An optional array of chain configurations.
 *
 * @returns A function that creates a connector with the specified configuration.
 *
 * @throws Will throw an error if the SDK is not an instance of MoonSDK.
 * @throws Will throw an error if the chainId is not a number.
 *
 * @example
 * ```typescript
 * const moonConnector = createMoonConnector({
 *   SDK: new MoonSDK(),
 *   chainId: 1,
 *   chains: [{ id: 1, name: 'Ethereum Mainnet' }],
 * });
 * ```
 */
export function createMoonConnector(
  options: MoonConnectorOptions
): CreateConnectorFn {
  const { SDK, chainId } = options;

  if (!(SDK instanceof MoonSDK)) {
    throw new Error('SDK must be an instance of MoonSDK');
  }

  if (typeof chainId !== 'number') {
    throw new Error('chainId must be a number');
  }

  let customPubKey: string | null = null;

  const provider = {
    request: async ({ method, params }: { method: string; params: any[] }) => {
      switch (method) {
        case 'eth_accounts':
          return customPubKey ? [customPubKey] : [];
        case 'eth_sendTransaction':
          // eslint-disable-next-line no-case-declarations
          const [txParams] = params;
          // eslint-disable-next-line no-case-declarations
          const signedTx = await SDK.signTransaction(txParams.from, txParams);
          return SDK.sendTransaction(
            txParams.from,
            signedTx,
            txParams.chain_id
          );
        case 'personal_sign':
        case 'eth_sign':
          // eslint-disable-next-line no-case-declarations
          const [message, address] = params;
          return SDK.signMessage(address, message);
        default:
          throw new Error(`Unsupported method: ${method}`);
      }
    },
  };

  return createConnector((config) => ({
    id: 'moon',
    name: 'Moon',
    type: 'wallet',
    connect: async ({ chainId }: { chainId?: number } = {}): Promise<{
      accounts: readonly Address[];
      chainId: number;
    }> => {
      const accounts = customPubKey ? [customPubKey as Address] : [];
      return { accounts, chainId: chainId || options.chainId };
    },
    disconnect: async (): Promise<void> => {
      await SDK.disconnect();
      customPubKey = null;
    },
    getAccounts: async (): Promise<readonly Address[]> => {
      return customPubKey ? [customPubKey as Address] : [];
    },
    getChainId: async () => options.chainId,
    getProvider: async () => provider,
    getClient: async ({ chainId }: { chainId?: number }): Promise<Client> => {
      return createClient({
        chain: options.chains?.find((x) => x.id === chainId),
        transport: custom(provider),
      });
    },
    isAuthorized: async () => {
      return SDK.auth.isAuthenticated && customPubKey !== null;
    },
    setup: async (): Promise<void> => {
      await SDK.connect();
    },
    switchChain: async ({ chainId }: { chainId: number }): Promise<Chain> => {
      const chain = options.chains?.find((x) => x.id === chainId);
      if (!chain) {
        throw new Error('Chain not found');
      }
      config.emitter.emit('change', { chainId });
      return chain;
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
      config.emitter.emit('connect', {
        accounts: customPubKey ? [customPubKey as Address] : [],
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
    setCustomPubKey: (pubKey: string): void => {
      if (!isAddress(pubKey)) {
        throw new Error('Invalid public key');
      }
      customPubKey = pubKey;
      config.emitter.emit('change', {
        accounts: [pubKey as Address],
      });
    },
  }));
}
