import { announceProvider, createStore, EIP1193Provider, Store } from 'mipd';
import { Chain } from 'viem';
import type { Config, CreateConnectorFn } from 'wagmi';
import { createConfig, custom } from 'wagmi';
import { mainnet } from 'wagmi/chains';

import { MoonSDK } from '../moon';
import { MoonProvider, MoonSolanaProvider } from '../providers';
import { createMoonAccount, MoonAccountOptions } from '../providers/viem';
import { createMoonConnector, MoonConnectorOptions } from '../providers/wagmi';

export class ProviderService {
  private moonProvider: MoonProvider;
  private solanaProvider: MoonSolanaProvider;
  private store: Store;
  private wagmiConfig: Config | null;
  private currentProvider: 'moon' | 'external' = 'moon';

  constructor(private sdk: MoonSDK) {
    this.moonProvider = new MoonProvider(sdk, 'https://cloudflare-eth.com');
    this.solanaProvider = new MoonSolanaProvider(
      sdk,
      'https://api.mainnet-beta.solana.com'
    );
    this.store = createStore();
    this.wagmiConfig = null;
  }

  public initializeMIPD() {
    announceProvider({
      info: {
        icon: 'data:image/svg+xml,<svg width="32px" height="32px" viewBox="0 0 32 32"/>',
        name: 'Moon',
        rdns: 'ai.usemoon',
        uuid: '00000000-0000-0000-0000-000000000000',
      },
      provider: this.moonProvider as EIP1193Provider,
    });

    this.store.subscribe((providers) => {
      console.log('Providers updated:', providers);
      const moonProvider = providers.find((p) => p.info.rdns === 'ai.usemoon');
      if (moonProvider && this.currentProvider !== 'moon') {
        this.currentProvider = 'moon';
        console.log('Switched to Moon provider');
      } else if (!moonProvider && this.currentProvider !== 'external') {
        this.currentProvider = 'external';
        console.log('Switched to external provider');
      }
    });
  }
  async createWagmiConfig(options: { connectors: CreateConnectorFn[] }) {
    const provider = await this.getEthereumProvider(1);
    // const moonWagmiConnector = this.createWagmiConnector({
    //   SDK: this.sdk,
    // });

    this.wagmiConfig = createConfig({
      chains: [mainnet],
      connectors: [...options.connectors],
      transports: {
        [mainnet.id]: custom(provider),
      },
    });

    return this.wagmiConfig;
  }

  getWagmiConfig() {
    return this.wagmiConfig;
  }

  async getEthereumProvider(chainId: number): Promise<MoonProvider> {
    const result = await this.sdk
      .getChainService()
      .getChainById(chainId.toString());
    const rpcUrl = result.rpc_urls?.at(0);
    this.moonProvider = new MoonProvider(this.sdk, rpcUrl);
    return this.moonProvider;
  }

  getSolanaProvider(): MoonSolanaProvider {
    return this.solanaProvider;
  }

  createWagmiConnector(options: Omit<MoonConnectorOptions, 'SDK'>) {
    return createMoonConnector({
      ...options,
      SDK: this.sdk,
    });
  }

  async createViemAccount(ethereumAddress: string) {
    const options: MoonAccountOptions = {
      sdk: this.sdk,
      ethereumAddress,
    };
    return createMoonAccount(options);
  }

  async getViemChains(): Promise<Chain[]> {
    const result = await this.sdk.getChainService().getChains();
    return result.map((chain): Chain => {
      if (chain.network_id === null || chain.name === null) {
        throw new Error(`Invalid chain data: network_id or name is null`);
      }
      const nativeCurrency = JSON.parse(chain.native_currency as string);
      const blockExplorers = JSON.parse(chain.info_url as string);
      const rpcUrls = chain.rpc_urls as string[];
      return {
        id: chain.network_id,
        name: chain.name,
        nativeCurrency: {
          name: nativeCurrency.name,
          symbol: nativeCurrency.symbol || 'ETH',
          decimals: nativeCurrency.decimals || 18,
        },
        rpcUrls: {
          default: {
            http: rpcUrls,
          },
          public: {
            http: rpcUrls,
          },
        },
        blockExplorers: {
          default: {
            name: blockExplorers.name,
            url: blockExplorers.url,
          },
        },
      };
    });
  }

  getCurrentProvider(): 'moon' | 'external' {
    return this.currentProvider;
  }
}
