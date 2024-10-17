import type { Signer } from "ethers";
import {
	type EIP1193Provider,
	type Store,
	announceProvider,
	createStore,
} from "mipd";
import type { Chain } from "viem";
import type { Config, CreateConnectorFn } from "wagmi";
import { createConfig } from "wagmi";

import type { MoonSDK } from "../moon";
import { MoonProvider, MoonSolanaProvider } from "../providers";
import { MoonSigner } from "../providers/signer";
import { type MoonAccountOptions, createMoonAccount } from "../providers/viem";
import {
	type MoonConnectorOptions,
	createMoonConnector,
} from "../providers/wagmi";

/**
 * The `ProviderService` class is responsible for managing and providing access to various blockchain providers,
 * including Ethereum and Solana providers, as well as handling the configuration for the Wagmi library.
 *
 * @remarks
 * This service initializes providers, manages provider switching, and creates configurations for blockchain interactions.
 *
 * @example
 * ```typescript
 * const providerService = new ProviderService(sdk);
 * const signer = await providerService.getMoonSigner('0xAddress', 1);
 * const wagmiConfig = await providerService.createWagmiConfig({ connectors: [] });
 * const solanaProvider = providerService.getSolanaProvider();
 * const chains = await providerService.getViemChains();
 * const currentProvider = providerService.getCurrentProvider();
 * ```
 *
 * @public
 */
export class ProviderService {
	private moonProvider: MoonProvider;
	private solanaProvider: MoonSolanaProvider;
	private store: Store;
	private wagmiConfig: Config | null;
	private currentProvider: "moon" | "external" = "moon";

	/**
	 * Constructs an instance of the ProviderService class.
	 *
	 * @param sdk - An instance of the MoonSDK class.
	 *
	 * Initializes the following properties:
	 * - `moonProvider`: An instance of MoonProvider initialized with the provided SDK and a default Ethereum endpoint.
	 * - `solanaProvider`: An instance of MoonSolanaProvider initialized with the provided SDK and a default Solana endpoint.
	 * - `store`: A store created using the `createStore` function.
	 * - `wagmiConfig`: Initially set to null.
	 */
	constructor(private sdk: MoonSDK) {
		this.moonProvider = new MoonProvider(sdk, "https://cloudflare-eth.com");
		this.solanaProvider = new MoonSolanaProvider(
			sdk,
			"https://api.mainnet-beta.solana.com",
		);
		this.store = createStore();
		this.wagmiConfig = null;
	}

	/**
	 * Retrieves a MoonSigner instance for the specified address and chain ID.
	 *
	 * @param address - The address for which to create the MoonSigner.
	 * @param chainId - The chain ID of the Ethereum network.
	 * @returns A promise that resolves to a MoonSigner instance.
	 */
	public async getMoonSigner(
		address: string,
		chainId: number,
	): Promise<Signer> {
		const provider = await this.getEthereumProvider(chainId);
		const signer = new MoonSigner(this.sdk, address, chainId, provider);
		return signer;
	}
	/**
	 * Initializes the Moon Integration Provider Data (MIPD) by announcing the Moon provider
	 * and subscribing to provider updates. This method sets up the provider information
	 * and listens for changes in the provider list to switch between the Moon provider
	 * and an external provider based on the presence of the Moon provider in the list.
	 *
	 * @remarks
	 * - The provider information includes an icon, name, reverse DNS (rdns), and a UUID.
	 * - The method subscribes to the store to monitor updates to the list of providers.
	 * - If the Moon provider is found in the list and the current provider is not 'moon',
	 *   it switches to the Moon provider.
	 * - If the Moon provider is not found and the current provider is not 'external',
	 *   it switches to an external provider.
	 */
	public initializeMIPD() {
		announceProvider({
			info: {
				icon: 'data:image/svg+xml,<svg width="32px" height="32px" viewBox="0 0 32 32"/>',
				name: "Moon",
				rdns: "ai.usemoon",
				uuid: "00000000-0000-0000-0000-000000000000",
			},
			provider: this.moonProvider as EIP1193Provider,
		});

		this.store.subscribe((providers) => {
			console.log("Providers updated:", providers);
			const moonProvider = providers.find((p) => p.info.rdns === "ai.usemoon");
			if (moonProvider && this.currentProvider !== "moon") {
				this.currentProvider = "moon";
				console.log("Switched to Moon provider");
			} else if (!moonProvider && this.currentProvider !== "external") {
				this.currentProvider = "external";
				console.log("Switched to external provider");
			}
		});
	}
	/**
	 * Asynchronously creates a Wagmi configuration.
	 *
	 * @param options - An object containing an array of connector creation functions.
	 * @returns A promise that resolves to the created Wagmi configuration.
	 */
	createWagmiConfig(options: {
		connectors: CreateConnectorFn[];
		chains: any;
		transports: any;
	}) {
		//
		this.wagmiConfig = createConfig({
			chains: options.chains,
			connectors: [...options.connectors],
			transports: options.transports,
		});

		return this.wagmiConfig;
	}

	/**
	 * Retrieves the current Wagmi configuration.
	 *
	 * @returns The Wagmi configuration object.
	 */
	getWagmiConfig() {
		return this.wagmiConfig;
	}

	/**
	 * Retrieves an Ethereum provider for the specified chain ID.
	 *
	 * @param chainId - The ID of the blockchain network to get the provider for.
	 * @returns A promise that resolves to a `MoonProvider` instance configured with the appropriate RPC URL.
	 *
	 * @throws Will throw an error if the chain service fails to retrieve the chain information.
	 */
	async getEthereumProvider(chainId: number): Promise<MoonProvider> {
		const result = await this.sdk
			.getChainService()
			.getChainById(chainId.toString());
		const rpcUrl = result.rpc_urls?.at(0);
		this.moonProvider = new MoonProvider(this.sdk, rpcUrl);
		return this.moonProvider;
	}

	/**
	 * Retrieves the Solana provider instance.
	 *
	 * @returns {MoonSolanaProvider} The Solana provider instance.
	 */
	getSolanaProvider(): MoonSolanaProvider {
		return this.solanaProvider;
	}

	/**
	 * Creates a new Wagmi connector using the provided options.
	 *
	 * @param options - The options for creating the Moon connector, excluding the SDK.
	 * @returns A new instance of the Moon connector.
	 */
	createWagmiConnector(options: Omit<MoonConnectorOptions, "SDK">) {
		return createMoonConnector({
			...options,
			SDK: this.sdk,
		});
	}

	/**
	 * Creates a new Viem account using the provided Ethereum address.
	 *
	 * @param ethereumAddress - The Ethereum address to associate with the new Viem account.
	 * @returns A promise that resolves to the created Moon account.
	 */
	async createViemAccount(ethereumAddress: string) {
		const options: MoonAccountOptions = {
			sdk: this.sdk,
			ethereumAddress,
		};
		return createMoonAccount(options);
	}

	/**
	 * Retrieves a list of chains from the SDK's ChainService and maps them to the Chain interface.
	 *
	 * @returns {Promise<Chain[]>} A promise that resolves to an array of Chain objects.
	 *
	 * @throws {Error} Throws an error if any chain has a null `network_id` or `name`.
	 *
	 * The returned Chain object includes:
	 * - `id`: The network ID of the chain.
	 * - `name`: The name of the chain.
	 * - `nativeCurrency`: An object containing the name, symbol, and decimals of the native currency.
	 * - `rpcUrls`: An object containing the default and public RPC URLs.
	 * - `blockExplorers`: An object containing the default block explorer's name and URL.
	 */
	async getViemChains(): Promise<Chain[]> {
		const result = await this.sdk.getChainService().getChains();
		return result.map((chain): Chain => {
			if (chain.network_id === null || chain.name === null) {
				throw new Error("Invalid chain data: network_id or name is null");
			}
			const nativeCurrency = JSON.parse(chain.native_currency as string);
			const blockExplorers = JSON.parse(chain.info_url as string);
			const rpcUrls = chain.rpc_urls as string[];
			return {
				id: chain.network_id,
				name: chain.name,
				nativeCurrency: {
					name: nativeCurrency.name,
					symbol: nativeCurrency.symbol || "ETH",
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

	/**
	 * Retrieves the current provider type.
	 *
	 * @returns {'moon' | 'external'} The current provider, which can be either 'moon' or 'external'.
	 */
	getCurrentProvider(): "moon" | "external" {
		return this.currentProvider;
	}
}
