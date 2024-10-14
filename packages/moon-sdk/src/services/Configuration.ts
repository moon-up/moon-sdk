// services/ConfigurationService.ts

import { MoonSDKConfig } from '../types';

/**
 * ConfigurationService class
 *
 * This class is responsible for managing the configuration settings for the Moon SDK.
 * It provides methods to initialize, retrieve, and update the configuration.
 *
 * The configuration is stored in a private property 'config' of type MoonSDKConfig.
 */
export class ConfigurationService {
  private config: MoonSDKConfig;

  /**
   * Constructs a new instance of the Configuration service.
   *
   * @param config - A partial or undefined configuration object of type `MoonSDKConfig`.
   *                 This configuration will be validated and set to the instance.
   */
  constructor(config: Partial<MoonSDKConfig> | undefined) {
    this.config = this.validateConfig(config);
  }

  /**
   * Validates and merges the provided configuration with the default configuration.
   *
   * @param config - A partial configuration object of type `MoonSDKConfig` or undefined.
   * @returns The merged configuration object of type `MoonSDKConfig`.
   *
   * @remarks
   * If the provided `config` is undefined, the function returns the default configuration.
   * Otherwise, it merges the provided `config` with the default configuration, giving precedence
   * to the properties in the provided `config`.
   *
   * @example
   * ```typescript
   * const userConfig = { apiKey: 'user-api-key' };
   * const fullConfig = validateConfig(userConfig);
   * console.log(fullConfig.apiKey); // Output: 'user-api-key'
   * ```
   */
  private validateConfig(
    config: Partial<MoonSDKConfig> | undefined
  ): MoonSDKConfig {
    const defaultConfig: MoonSDKConfig = {
      apiKey: '',
      supabaseUrl: 'https://api.usemoon.ai',
      supabaseKey: '',
      baseUrl: 'https://beta.usemoon.ai',
      solanaEndpoint: 'https://api.mainnet-beta.solana.com',
      supportedChains: [],
      cacheOptions: {
        max: 500,
        maxAge: 1000 * 60 * 5, // 5 minutes
      },
      rateLimitOptions: {
        tokensPerInterval: 10,
        interval: 'second',
      },
      selectedChain: {
        id: '005ced51-79aa-4e83-91f5-41f9f9940d73',
        created_at: '2024-03-13T04:16:09.372371+00:00',
        updated_at: '2024-03-13T04:16:09.372371+00:00',
        name: 'Ethereum Mainnet',
        chain: 'ETH',
        icon: 'ethereum',
        info_url: 'https://ethereum.org',
        short_name: 'eth',
        chain_id: 1,
        network_id: 1,
        slip44: 60,
        rpc_urls: [
          'https://cloudflare-eth.com',
          'https://ethereum-rpc.publicnode.com',
          'wss://ethereum-rpc.publicnode.com',
          'https://mainnet.gateway.tenderly.co',
          'wss://mainnet.gateway.tenderly.co',
          'https://rpc.blocknative.com/boost',
          'https://rpc.flashbots.net',
          'https://rpc.flashbots.net/fast',
          'https://rpc.mevblocker.io',
          'https://rpc.mevblocker.io/fast',
          'https://rpc.mevblocker.io/noreverts',
          'https://rpc.mevblocker.io/fullprivacy',
        ],
        features: [
          {
            name: 'EIP155',
          },
          {
            name: 'EIP1559',
          },
        ],
        native_currency: {
          name: 'Ether',
          symbol: 'ETH',
          decimals: 18,
        },
        ens: {
          registry: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
        },
        explorers: [
          {
            url: 'https://etherscan.io',
            name: 'etherscan',
            standard: 'EIP3091',
          },
          {
            url: 'https://eth.blockscout.com',
            icon: 'blockscout',
            name: 'blockscout',
            standard: 'EIP3091',
          },
          {
            url: 'https://ethereum.dex.guru',
            icon: 'dexguru',
            name: 'dexguru',
            standard: 'EIP3091',
          },
        ],
        index: null,
        config: null,
      },
    };
    if (!config) {
      return defaultConfig;
    }

    const mergedConfig = { ...defaultConfig, ...config };

    return mergedConfig;
  }

  /**
   * Retrieves the current configuration for the Moon SDK.
   *
   * @returns {MoonSDKConfig} The current configuration object.
   */
  getConfig(): MoonSDKConfig {
    return this.config;
  }

  /**
   * Updates the current configuration with the provided partial configuration.
   *
   * @param newConfig - A partial configuration object containing the properties to be updated.
   */
  updateConfig(newConfig: Partial<MoonSDKConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }
}
