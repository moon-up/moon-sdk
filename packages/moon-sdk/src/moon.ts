import type { BigNumber } from "@ethersproject/bignumber";
import type { BytesLike } from "@ethersproject/bytes";
import type * as MoonAPI from "@moonup/moon-api";
import type {
	AuthenticationResponseJSON,
	PublicKeyCredentialCreationOptionsJSON,
	PublicKeyCredentialRequestOptionsJSON,
	RegistrationResponseJSON,
} from "@simplewebauthn/typescript-types";
import {
	type Session,
	type SupabaseClient,
	createClient,
} from "@supabase/supabase-js";
import type {
	BigNumberish,
	TransactionReceipt,
	TransactionRequest,
	TypedDataDomain,
	TypedDataField,
} from "ethers";
import { EventEmitter } from "events";
import type { SiweMessage } from "siwe";

import { AuthenticationError, NetworkError } from "./errors";
import { OAuth2Service } from "./services";
import { AuthService } from "./services/AuthService";
import { CacheService } from "./services/CacheService";
import { ChainService } from "./services/ChainService";
import { ConfigurationService } from "./services/Configuration";
import { ERC4337Service } from "./services/ERC4337Service";
import { EventService } from "./services/EventService";
import { MoonAPIService } from "./services/MoonAPIService";
import { ProviderService } from "./services/ProviderService";
import { SolanaService } from "./services/SolanaService";
import { TransactionService } from "./services/TransactionService";
import type { Chains, IMoonSDK, MoonSDKConfig } from "./types";

/**
 * MoonSDK Class
 *
 * This class represents the main SDK for interacting with the Moon platform.
 * It provides a wide range of functionalities including authentication,
 * blockchain interactions, transaction management, and integration with
 * various blockchain networks and protocols.
 *
 * The MoonSDK class extends EventEmitter and implements the IMoonSDK interface.
 * It initializes and manages various services such as authentication, caching,
 * chain management, event handling, provider management, transaction processing,
 * and interactions with specific blockchain networks like Ethereum and Solana.
 *
 * Key features include:
 * - Authentication and session management
 * - Blockchain account creation and management
 * - Transaction signing and sending
 * - Support for multiple blockchain networks
 * - OAuth2 integration
 * - ENS (Ethereum Name Service) resolution
 * - Event handling for various SDK operations
 *
 * The SDK also provides access to various blockchain-specific SDKs and services
 * for networks like Bitcoin, Cosmos, EOS, Litecoin, Ripple, Tron, and others.
 *
 * @class MoonSDK
 * @extends EventEmitter
 * @implements IMoonSDK
 *
 * @param {MoonSDKConfig} [config] - Optional configuration object for initializing the SDK.
 *
 * @property {SupabaseClient} supabase - The Supabase client instance for authentication and database operations.
 * @property {AuthService} auth - The authentication service for handling user authentication.
 * @property {CacheService} cache - The cache service for caching data.
 * @property {ChainService} chainService - The chain service for managing blockchain networks.
 * @property {EventService} eventService - The event service for emitting and listening to events.
 * @property {ProviderService} providerService - The provider service for managing blockchain providers.
 * @property {TransactionService} transactionService - The transaction service for handling blockchain transactions.
 * @property {MoonAPIService} moonAPIService - The Moon API service for interacting with the Moon API.
 * @property {SolanaService} solanaService - The Solana service for interacting with the Solana blockchain.
 * @property {OAuth2Service} oauth2Service - The OAuth2 service for handling OAuth2 authentication.
 * @property {ERC4337Service} erc4337 - The ERC4337 service for interacting with ERC4337 contracts.
 *
 * @constructor
 * @param {MoonSDKConfig} [config] - Optional configuration object for the SDK.
 *
 * @method getGasPrice - Get the current gas price.
 * @returns {Promise<BigNumber>} - The current gas price.
 *
 * @method getConfig - Get the current configuration of the SDK.
 * @returns {MoonSDKConfig} - The current SDK configuration.
 *
 * @method updateConfig - Update the SDK configuration.
 * @param {Partial<MoonSDKConfig>} config - The new configuration values.
 *
 * @method getProviderService - Get the provider service instance.
 * @returns {ProviderService} - The provider service instance.
 *
 * @method getTransactionService - Get the transaction service instance.
 * @returns {TransactionService} - The transaction service instance.
 *
 * @method getMoonAPIService - Get the Moon API service instance.
 * @returns {MoonAPIService} - The Moon API service instance.
 *
 * @method getEventService - Get the event service instance.
 * @returns {EventService} - The event service instance.
 *
 * @method getOAuth2Service - Get the OAuth2 service instance.
 * @returns {OAuth2Service} - The OAuth2 service instance.
 *
 * @method getSolanaService - Get the Solana service instance.
 * @returns {SolanaService} - The Solana service instance.
 *
 * @method setupChains - Set up blockchain networks.
 * @returns {Promise<void>} - A promise that resolves when the setup is complete.
 *
 * @method connect - Connect to the SDK with optional access and refresh tokens.
 * @param {string} [accessToken] - Optional access token.
 * @param {string} [refreshToken] - Optional refresh token.
 * @returns {Promise<void>} - A promise that resolves when the connection is successful.
 *
 * @method getChains - Get the list of supported blockchain networks.
 * @returns {Promise<Chains[]>} - A promise that resolves to the list of supported blockchain networks.
 *
 * @method getChainService - Get the chain service instance.
 * @returns {ChainService} - The chain service instance.
 *
 * @method disconnect - Disconnect from the SDK.
 * @returns {Promise<void>} - A promise that resolves when the disconnection is successful.
 *
 * @method listAccounts - List the accounts associated with the SDK.
 * @returns {Promise<string[]>} - A promise that resolves to the list of accounts.
 *
 * @method createAccount - Create a new account.
 * @returns {Promise<string>} - A promise that resolves to the new account identifier.
 *
 * @method signTransaction - Sign a transaction using the specified wallet.
 * @param {string} wallet - The wallet identifier to sign the transaction with.
 * @param {any} transaction - The transaction object to be signed.
 * @returns {Promise<string>} - A promise that resolves to the signed transaction string.
 *
 * @method signMessage - Sign a message using the specified wallet.
 * @param {string} wallet - The wallet address to sign the message with.
 * @param {BytesLike} message - The message to be signed.
 * @returns {Promise<string>} - A promise that resolves to the signed message string.
 *
 * @method signTypedData - Sign typed data using the specified wallet.
 * @param {string} wallet - The wallet address to sign the data with.
 * @param {TypedDataDomain} domain - The domain information for the typed data.
 * @param {Record<string, Array<TypedDataField>>} types - The types definition for the typed data.
 * @param {Record<string, any>} value - The actual data to be signed.
 * @returns {Promise<string>} - A promise that resolves to the signature string.
 *
 * @method sendTransaction - Send a transaction to the blockchain.
 * @param {string} wallet - The wallet address from which the transaction is sent.
 * @param {string} rawTransaction - The raw transaction data to be broadcasted.
 * @param {string} chainId - The ID of the blockchain network.
 * @returns {Promise<string>} - A promise that resolves to the transaction hash.
 *
 * @method getEthereumProvider - Get the Ethereum provider for a specified chain ID.
 * @param {number} chainId - The ID of the Ethereum chain.
 * @returns {any} - The Ethereum provider.
 *
 * @method getSolanaProvider - Get the Solana provider.
 * @returns {any} - The Solana provider.
 *
 * @method estimateGas - Estimate the gas required for a transaction.
 * @param {Partial<TransactionRequest>} transaction - The transaction object.
 * @returns {Promise<BigNumberish>} - A promise that resolves to the estimated gas.
 *
 * @method watchTransaction - Watch a transaction for confirmations.
 * @param {string} txHash - The transaction hash.
 * @param {number} [confirmations=1] - The number of confirmations to wait for.
 * @returns {Promise<TransactionReceipt>} - A promise that resolves to the transaction receipt.
 *
 * @method signInWithEmail - Sign in with email and password.
 * @param {string} email - The email address.
 * @param {string} password - The password.
 * @returns {Promise<Session | null>} - A promise that resolves to the user session.
 *
 * @method signUpWithEmail - Sign up with email and password.
 * @param {string} email - The email address.
 * @param {string} password - The password.
 * @returns {Promise<Session | null>} - A promise that resolves to the user session.
 *
 * @method signInWithOAuth - Sign in with an OAuth provider.
 * @param {'google' | 'github' | 'discord'} provider - The OAuth provider.
 * @returns {Promise<void>} - A promise that resolves when the sign-in is successful.
 *
 * @method getSIWENonce - Get the SIWE nonce for an address.
 * @param {string} address - The address.
 * @returns {Promise<string>} - A promise that resolves to the nonce.
 *
 * @method verifySIWESignature - Verify a SIWE signature.
 * @param {string} address - The address.
 * @param {string} signedMessage - The signed message.
 * @param {string} nonce - The nonce.
 * @param {SiweMessage} message - The SIWE message.
 * @returns {Promise<Session>} - A promise that resolves to the user session.
 *
 * @method getUserSession - Get the current user session.
 * @returns {Promise<Session | null>} - A promise that resolves to the user session.
 *
 * @method setProvider - Set the current provider.
 * @param {'moon' | 'metamask' | 'walletconnect'} provider - The provider.
 *
 * @method switchChain - Switch to a different blockchain network.
 * @param {number} chainId - The ID of the blockchain network.
 * @returns {Promise<void>} - A promise that resolves when the switch is successful.
 *
 * @method addToken - Add a token to the wallet.
 * @param {string} address - The token address.
 * @param {string} symbol - The token symbol.
 * @param {number} decimals - The token decimals.
 * @param {string} [image] - The token image URL.
 * @returns {Promise<boolean>} - A promise that resolves to true if the token is added successfully.
 *
 * @method getENSName - Get the ENS name for an address.
 * @param {string} address - The address.
 * @returns {Promise<string | null>} - A promise that resolves to the ENS name.
 *
 * @method resolveENSName - Resolve an ENS name to an address.
 * @param {string} ensName - The ENS name.
 * @returns {Promise<string | null>} - A promise that resolves to the address.
 *
 * @method performDiscordOAuth - Perform Discord OAuth authentication.
 * @returns {Promise<void>} - A promise that resolves when the authentication is successful.
 *
 * @method performDiscordOauthCodeExchange - Exchange a Discord OAuth code for a token.
 * @param {string} code - The OAuth code.
 * @returns {Promise<any>} - A promise that resolves to the token.
 *
 * @method performGithubOAuth - Perform GitHub OAuth authentication.
 * @returns {Promise<void>} - A promise that resolves when the authentication is successful.
 *
 * @method performGithubOauthCodeExchange - Exchange a GitHub OAuth code for a token.
 * @param {string} code - The OAuth code.
 * @returns {Promise<any>} - A promise that resolves to the token.
 *
 * @method performGoogleOAuth - Perform Google OAuth authentication.
 * @returns {Promise<void>} - A promise that resolves when the authentication is successful.
 *
 * @method performGoogleOauthCodeExchange - Exchange a Google OAuth code for a token.
 * @param {string} code - The OAuth code.
 * @returns {Promise<any>} - A promise that resolves to the token.
 *
 * @method performTwitterOauth - Perform Twitter OAuth authentication.
 * @returns {Promise<void>} - A promise that resolves when the authentication is successful.
 *
 * @method performTwitterOauthCodeExchange - Exchange a Twitter OAuth code for a token.
 * @param {string} code - The OAuth code.
 * @returns {Promise<any>} - A promise that resolves to the token.
 *
 * @method sendMagicLink - Send a magic link for authentication.
 * @param {string} email - The email address.
 * @param {string} redirectTo - The redirect URL.
 * @returns {Promise<void>} - A promise that resolves when the magic link is sent.
 *
 * @method signUp - Sign up with email and password.
 * @param {string} email - The email address.
 * @param {string} password - The password.
 * @returns {Promise<Session | null>} - A promise that resolves to the user session.
 *
 * @method signInWithPassword - Sign in with email and password.
 * @param {string} email - The email address.
 * @param {string} password - The password.
 * @returns {Promise<Session | null>} - A promise that resolves to the user session.
 *
 * @method signInWithPhone - Sign in with phone number and password.
 * @param {string} phone - The phone number.
 * @param {string} password - The password.
 * @returns {Promise<void>} - A promise that resolves when the sign-in is successful.
 *
 * @method handlePassKeyLogin - Initiate passkey login.
 * @param {string} email - The email address.
 * @returns {Promise<PublicKeyCredentialRequestOptionsJSON>} - A promise that resolves to the passkey request options.
 *
 * @method handlePasskeyLoginVerify - Verify passkey login.
 * @param {string} email - The email address.
 * @param {AuthenticationResponseJSON} credential - The authentication response.
 * @returns {Promise<Session>} - A promise that resolves to the user session.
 *
 * @method handleRegister - Initiate passkey registration.
 * @param {string} email - The email address.
 * @returns {Promise<PublicKeyCredentialCreationOptionsJSON>} - A promise that resolves to the passkey creation options.
 *
 * @method handleRegisterVerify - Verify passkey registration.
 * @param {string} email - The email address.
 * @param {RegistrationResponseJSON} credential - The registration response.
 * @param {PublicKeyCredentialCreationOptionsJSON} options - The passkey creation options.
 * @returns {Promise<void>} - A promise that resolves when the registration is complete.
 *
 * @method embeddedAccount - Create an embedded account.
 * @param {string} email - The email address.
 * @param {string} uuid - The UUID.
 * @param {string} domain - The domain.
 * @returns {Promise<Session>} - A promise that resolves to the user session.
 *
 * @method getSolanaSDK - Get the Solana SDK instance.
 * @returns {MoonAPI.Solana} - The Solana SDK instance.
 *
 * @method getBitcoinSDK - Get the Bitcoin SDK instance.
 * @returns {MoonAPI.Bitcoin} - The Bitcoin SDK instance.
 *
 * @method getCosmosSDK - Get the Cosmos SDK instance.
 * @returns {MoonAPI.Cosmos} - The Cosmos SDK instance.
 *
 * @method getEosSDK - Get the EOS SDK instance.
 * @returns {MoonAPI.Eos} - The EOS SDK instance.
 *
 * @method getLitecoinSDK - Get the Litecoin SDK instance.
 * @returns {MoonAPI.Litecoin} - The Litecoin SDK instance.
 *
 * @method getRippleSDK - Get the Ripple SDK instance.
 * @returns {MoonAPI.Ripple} - The Ripple SDK instance.
 *
 * @method getTronSDK - Get the Tron SDK instance.
 * @returns {MoonAPI.Tron} - The Tron SDK instance.
 *
 * @method getBitcoincashSDK - Get the Bitcoin Cash SDK instance.
 * @returns {MoonAPI.Bitcoincash} - The Bitcoin Cash SDK instance.
 *
 * @method getDogecoinSDK - Get the Dogecoin SDK instance.
 * @returns {MoonAPI.Dogecoin} - The Dogecoin SDK instance.
 *
 * @method getAccountsSDK - Get the Accounts SDK instance.
 * @returns {MoonAPI.Accounts} - The Accounts SDK instance.
 *
 * @method getENSSDK - Get the ENS SDK instance.
 * @returns {MoonAPI.Ens} - The ENS SDK instance.
 *
 * @method getErc20SDK - Get the ERC20 SDK instance.
 * @returns {MoonAPI.Erc20} - The ERC20 SDK instance.
 *
 * @method getErc1155SDK - Get the ERC1155 SDK instance.
 * @returns {MoonAPI.Erc1155} - The ERC1155 SDK instance.
 *
 * @method getErc721SDK - Get the ERC721 SDK instance.
 * @returns {MoonAPI.Erc721} - The ERC721 SDK instance.
 *
 * @method getErc4626SDK - Get the ERC4626 SDK instance.
 * @returns {MoonAPI.Erc4626} - The ERC4626 SDK instance.
 *
 * @method getLendingPoolSDK - Get the Lending Pool SDK instance.
 * @returns {MoonAPI.LendingPool} - The Lending Pool SDK instance.
 *
 * @method getLeveragerSDK - Get the Leverager SDK instance.
 * @returns {MoonAPI.Leverager} - The Leverager SDK instance.
 *
 * @method getLifiSDK - Get the Lifi SDK instance.
 * @returns {MoonAPI.Lifi} - The Lifi SDK instance.
 *
 * @method getOdosSDK - Get the Odos SDK instance.
 * @returns {MoonAPI.Odos} - The Odos SDK instance.
 *
 * @method getOnramperSDK - Get the Onramper SDK instance.
 * @returns {MoonAPI.Onramper} - The Onramper SDK instance.
 *
 * @method getThorswapSDK - Get the Thorswap SDK instance.
 * @returns {MoonAPI.Thorswap} - The Thorswap SDK instance.
 *
 * @method getAaveSDK - Get the Aave SDK instance.
 * @returns {MoonAPI.Aave} - The Aave SDK instance.
 *
 * @method getMultiCallSDK - Get the MultiCall SDK instance.
 * @returns {MoonAPI.Multicall} - The MultiCall SDK instance.
 *
 * @method getDataSDK - Get the Data SDK instance.
 * @returns {MoonAPI.Data} - The Data SDK instance.
 *
 * @method getThenaSDK - Get the Thena SDK instance.
 * @returns {MoonAPI.Thena} - The Thena SDK instance.
 *
 * @method getJupiterSDK - Get the Jupiter SDK instance.
 * @returns {MoonAPI.Jupiter} - The Jupiter SDK instance.
 *
 * @method getUniswapSDK - Get the Uniswap SDK instance.
 * @returns {MoonAPI.Uniswap} - The Uniswap SDK instance.
 *
 * @method getRamsesSDK - Get the Ramses SDK instance.
 * @returns {MoonAPI.Ramses} - The Ramses SDK instance.
 *
 * @method getPolymarketSDK - Get the Polymarket SDK instance.
 * @returns {MoonAPI.Polymarket} - The Polymarket SDK instance.
 *
 * @method getLynexSDK - Get the Lynex SDK instance.
 * @returns {MoonAPI.Lynex} - The Lynex SDK instance.
 *
 * @method getSolanaBalance - Get the balance of a Solana address.
 * @param {string} address - The Solana address.
 * @returns {Promise<string>} - A promise that resolves to the balance.
 *
 * @method on - Add an event listener.
 * @param {string} event - The event name.
 * @param {(...args: any[]) => void} listener - The event listener function.
 * @returns {this} - The MoonSDK instance.
 *
 * @method off - Remove an event listener.
 * @param {string} event - The event name.
 * @param {(...args: any[]) => void} listener - The event listener function.
 * @returns {this} - The MoonSDK instance.
 *
 * @method once - Add a one-time event listener.
 * @param {string} event - The event name.
 * @param {(...args: any[]) => void} listener - The event listener function.
 * @returns {this} - The MoonSDK instance.
 */
export class MoonSDK extends EventEmitter implements IMoonSDK {
	public supabase: SupabaseClient;
	public configService: ConfigurationService;
	public auth: AuthService;
	public cache: CacheService;
	public chainService: ChainService;
	public eventService: EventService;
	public providerService: ProviderService;
	public transactionService: TransactionService;
	public moonAPIService: MoonAPIService;
	public solanaService: SolanaService;
	public oauth2Service: OAuth2Service;
	public erc4337: ERC4337Service;

	constructor(config?: MoonSDKConfig) {
		super();
		this.configService = new ConfigurationService(config);
		if (!this.configService.getConfig().authInstance) {
			this.supabase = createClient(
				this.configService.getConfig().supabaseUrl || "",
				this.configService.getConfig().supabaseKey || "",
			);
		} else {
			this.supabase = this.configService.getConfig()
				.authInstance as SupabaseClient;
		}
		this.cache = new CacheService(
			this.configService.getConfig().cacheOptions || {
				max: 1000,
				maxAge: 1000 * 60 * 60 * 24, // 24 hours
			},
		);
		this.chainService = new ChainService(this);
		this.eventService = new EventService();
		this.moonAPIService = new MoonAPIService(
			this,
			this.configService.getConfig().baseUrl,
		);
		this.auth = new AuthService(this);
		this.providerService = new ProviderService(this);
		this.transactionService = new TransactionService(
			this,
			this.providerService,
		);
		this.solanaService = new SolanaService(this.moonAPIService);
		this.oauth2Service = new OAuth2Service(
			this,
			this.configService.getConfig().clientId || "",
		);

		this.erc4337 = new ERC4337Service(this);
	}
	signInWithPhone(phone: string, password: string): Promise<void> {
		throw new Error("Method not implemented.");
	}
	public getAuthService(): AuthService {
		return this.auth;
	}

	/**
	 * Get the current configuration of the SDK
	 * @returns {MoonSDKConfig} The current SDK configuration
	 */
	public getGasPrice(): Promise<BigNumber> {
		throw new Error("Method not implemented.");
	}
	/**
	 * Logs a message with optional data.
	 *
	 * @param message - The message to log.
	 * @param data - Optional additional data to log.
	 * @throws Will always throw an error indicating the method is not implemented.
	 */
	/**
	 * Logs a message with optional data.
	 *
	 * @param message - The message to log.
	 * @param data - Optional additional data to log.
	 * @throws Will always throw an error indicating the method is not implemented.
	 */
	/**
	 * Logs a message with optional data.
	 *
	 * @param message - The message to log.
	 * @param data - Optional additional data to log.
	 */
	private log(message: string, data?: any) {
		console.log(`[MoonSDK] ${message}`, data);
	}
	/**
	 * Retrieves the configuration settings.
	 *
	 * @returns The configuration settings from the config service.
	 */
	public getConfig() {
		return this.configService.getConfig();
	}

	/**
	 * Updates the configuration of the Moon SDK.
	 *
	 * @param config - A partial configuration object to update the existing configuration.
	 */
	public updateConfig(config: Partial<MoonSDKConfig>) {
		this.configService.updateConfig(config);
	}

	/**
	 * Retrieves the instance of `ProviderService`.
	 *
	 * @returns {ProviderService} The current instance of `ProviderService`.
	 */
	public getProviderService(): ProviderService {
		return this.providerService;
	}
	/**
	 * Retrieves the transaction service instance.
	 *
	 * @returns {TransactionService} The transaction service instance.
	 */
	public getTransactionService(): TransactionService {
		return this.transactionService;
	}
	/**
	 * Retrieves the instance of the MoonAPIService.
	 *
	 * @returns {MoonAPIService} The MoonAPIService instance.
	 */
	public getMoonAPIService(): MoonAPIService {
		return this.moonAPIService;
	}

	/**
	 * Retrieves the instance of the EventService.
	 *
	 * @returns {EventService} The event service instance.
	 */
	public getEventService(): EventService {
		return this.eventService;
	}

	/**
	 * Retrieves the OAuth2 service instance.
	 *
	 * @returns {OAuth2Service} The OAuth2 service instance.
	 */
	public getOAuth2Service(): OAuth2Service {
		return this.oauth2Service;
	}

	/**
	 * Retrieves the SolanaService instance.
	 *
	 * @returns {SolanaService} The instance of SolanaService.
	 */
	public getSolanaService(): SolanaService {
		return this.solanaService;
	}

	/**
	 * Sets up the chains by fetching the chain data from the chain service.
	 *
	 * @returns {Promise<void>} A promise that resolves when the chain data has been fetched.
	 */
	public async setupChains() {
		await this.chainService.getChains();
	}
	/**
	 * Connects to the authentication service using the provided access and refresh tokens.
	 *
	 * @param accessToken - Optional access token for authentication.
	 * @param refreshToken - Optional refresh token for authentication.
	 * @returns A promise that resolves when the connection is successful.
	 * @throws {AuthenticationError} Throws an AuthenticationError if the connection fails.
	 */
	async connect(accessToken?: string, refreshToken?: string): Promise<any> {
		try {
			return await this.auth.connect(accessToken, refreshToken);
		} catch (error) {
			console.error("Error connecting:", error);
			if (error instanceof AuthenticationError) {
				throw error;
			} else {
				throw new AuthenticationError(`Failed to connect: ${error}`);
			}
		}
	}
	/**
	 * Retrieves the list of blockchain chains.
	 *
	 * @returns {Promise<Chains[]>} A promise that resolves to an array of Chains.
	 */
	async getChains(): Promise<Chains[]> {
		return this.chainService.getChains();
	}

	/**
	 * Retrieves the instance of the ChainService.
	 *
	 * @returns {ChainService} The ChainService instance.
	 */
	public getChainService(): ChainService {
		return this.chainService;
	}
	/**
	 * Disconnects the current session by logging out the user.
	 *
	 * @returns {Promise<void>} A promise that resolves when the user is successfully logged out.
	 * @throws {AuthenticationError} If there is an error during the logout process.
	 */
	async disconnect(): Promise<void> {
		try {
			await this.auth.logout();
		} catch (error) {
			this.emit("error", { method: "disconnect", error });
			throw new AuthenticationError(`Failed to disconnect: ${error}`);
		}
	}

	/**
	 * Lists all accounts using the moonAPIService.
	 *
	 * @returns {Promise<string[]>} A promise that resolves to an array of account names.
	 *
	 * @throws {NetworkError} Throws a NetworkError if the accounts could not be listed.
	 *
	 * @emits {Event} Emits 'accountsListed' event with the list of accounts on success.
	 * @emits {Event} Emits 'error' event with the method name and error details on failure.
	 */
	async listAccounts(): Promise<string[]> {
		try {
			const accounts = await this.moonAPIService.listAccounts();
			return accounts;
		} catch (error) {
			throw new NetworkError(`Failed to list accounts: ${error}`);
		}
	}

	/**
	 * Asynchronously creates a new account using the moonAPIService.
	 *
	 * @returns {Promise<string>} A promise that resolves to the created account identifier.
	 *
	 * @throws {NetworkError} Throws a NetworkError if account creation fails.
	 *
	 * @emits {Event} Emits 'accountCreated' event with the created account on success.
	 * @emits {Event} Emits 'error' event with method name and error details on failure.
	 */
	async createAccount(): Promise<string> {
		try {
			const account = await this.moonAPIService.createAccount();
			this.emit("accountCreated", account);
			return account;
		} catch (error) {
			this.emit("error", { method: "createAccount", error });
			throw new NetworkError(`Failed to create account: ${error}`);
		}
	}

	/**
	 * Signs a transaction using the specified wallet.
	 *
	 * @param wallet - The wallet identifier to sign the transaction with.
	 * @param transaction - The transaction object to be signed.
	 * @returns A promise that resolves to the signed transaction string.
	 * @throws {NetworkError} If the transaction signing fails.
	 */
	async signTransaction(wallet: string, transaction: any): Promise<any> {
		try {
			const signedTransaction = await this.moonAPIService.signTransaction(
				wallet,
				transaction,
			);
			this.emit("transactionSigned", signedTransaction);
			return signedTransaction;
		} catch (error) {
			this.emit("error", { method: "signTransaction", error });
			throw new NetworkError(`Failed to sign transaction: ${error}`);
		}
	}
	/**
	 * Signs a message using the specified wallet.
	 *
	 * @param wallet - The wallet address to sign the message with.
	 * @param message - The message to be signed, represented as a BytesLike object.
	 * @returns A promise that resolves to the signed message as a string.
	 * @throws {NetworkError} If the message signing process fails.
	 *
	 * @fires eventService#messageSigned - When the message is successfully signed.
	 * @fires eventService#error - When an error occurs during the signing process.
	 */
	async signMessage(wallet: string, message: BytesLike): Promise<string> {
		try {
			const signedMessage = await this.moonAPIService
				.getAccountsSDK()
				.accountsSignEthreumMessage(wallet, {
					data: message.toString(),
					encoding: "utf-8",
				});
			this.emit("messageSigned", signedMessage.data?.signed_message);
			return signedMessage.data?.signed_message || "";
		} catch (error) {
			this.emit("error", { method: "signMessage", error });
			throw new NetworkError(`Failed to sign message: ${error}`);
		}
	}

	/**
	 * Signs typed data using the specified wallet.
	 *
	 * @param wallet - The wallet address to sign the data with.
	 * @param domain - The domain information for the typed data.
	 * @param types - The types definition for the typed data.
	 * @param value - The actual data to be signed.
	 * @returns A promise that resolves to the signature string.
	 * @throws {NetworkError} If there is an error during the signing process.
	 */
	async signTypedData(
		wallet: string,
		domain: TypedDataDomain,
		types: Record<string, Array<TypedDataField>>,
		value: Record<string, any>,
	): Promise<string> {
		try {
			const data = JSON.stringify({
				domain,
				types,
				primaryType: Object.keys(types)[0],
				message: value,
			});
			const response = await this.moonAPIService
				.getAccountsSDK()
				.accountsSignEthereumTypedData(wallet, { data });
			this.emit("typedDataSigned", response.data?.signature);
			return response.data?.signature || "";
		} catch (error) {
			this.emit("error", { method: "signTypedData", error });
			throw new NetworkError(`Failed to sign typed data: ${error}`);
		}
	}

	/**
	 * Sends a transaction to the blockchain.
	 *
	 * @param wallet - The wallet address from which the transaction is sent.
	 * @param rawTransaction - The raw transaction data to be broadcasted.
	 * @param chainId - The ID of the blockchain network.
	 * @returns A promise that resolves to the transaction hash as a string.
	 * @throws {NetworkError} If the transaction fails to send.
	 */
	async sendTransaction(
		wallet: string,
		rawTransaction: string,
		chainId: string,
	): Promise<string> {
		try {
			const transactionHash = await this.moonAPIService
				.getAccountsSDK()
				.accountsBroadcastEthreeumTransaction(wallet, {
					rawTransaction,
					chainId,
				});
			this.emit("transactionSent", transactionHash.data?.data);
			return transactionHash.data?.data || "";
		} catch (error) {
			this.emit("error", { method: "sendTransaction", error });
			throw new NetworkError(`Failed to send transaction: ${error}`);
		}
	}

	/**
	 * Retrieves the Ethereum provider for a specified chain ID.
	 *
	 * @param chainId - The ID of the Ethereum chain for which the provider is requested.
	 * @returns The Ethereum provider associated with the given chain ID.
	 */
	getEthereumProvider(chainId: number) {
		return this.providerService.getEthereumProvider(chainId);
	}

	/**
	 * Retrieves the Solana provider instance.
	 *
	 * @returns {SolanaProvider} The Solana provider instance.
	 */
	getSolanaProvider() {
		return this.providerService.getSolanaProvider();
	}

	/**
	 * Estimates the gas required for a given transaction.
	 *
	 * @param transaction - A partial transaction request object.
	 * @returns A promise that resolves to a BigNumberish value representing the estimated gas.
	 */
	async estimateGas(
		transaction: Partial<TransactionRequest>,
	): Promise<BigNumberish> {
		return this.transactionService.estimateGas("ethereum", transaction);
	}

	/**
	 * Watches a transaction until it reaches the specified number of confirmations.
	 *
	 * @param txHash - The hash of the transaction to watch.
	 * @param confirmations - The number of confirmations to wait for (default is 1).
	 * @returns A promise that resolves to the transaction receipt once the transaction has the specified number of confirmations.
	 */
	watchTransaction(
		txHash: string,
		confirmations = 1,
	): Promise<TransactionReceipt> {
		return this.transactionService.watchTransaction(txHash, confirmations);
	}

	/**
	 * Signs in a user using their email and password.
	 *
	 * @param email - The email address of the user.
	 * @param password - The password of the user.
	 * @returns A promise that resolves to a Session object if the sign-in is successful, or null if it fails.
	 */
	async signInWithEmail(
		email: string,
		password: string,
	): Promise<Session | null> {
		return this.auth.signInWithEmail(email, password);
	}

	/**
	 * Signs up a new user using their email and password.
	 *
	 * @param email - The email address of the user.
	 * @param password - The password for the user's account.
	 * @returns A promise that resolves to a `Session` object if the sign-up is successful, or `null` if it fails.
	 */
	async signUpWithEmail(
		email: string,
		password: string,
	): Promise<Session | null> {
		return this.auth.signUpWithEmail(email, password);
	}

	/**
	 * Signs in a user using OAuth with the specified provider.
	 *
	 * @param provider - The OAuth provider to use for sign-in.
	 *                   Can be 'google', 'github', or 'discord'.
	 * @returns A promise that resolves when the sign-in process is complete.
	 */
	async signInWithOAuth(
		provider: "google" | "github" | "discord",
	): Promise<void> {
		return this.auth.signInWithOAuth(provider);
	}

	/**
	 * Retrieves a Sign-In with Ethereum (SIWE) nonce for the specified address.
	 *
	 * @param address - The Ethereum address for which to retrieve the nonce.
	 * @returns A promise that resolves to the SIWE nonce as a string.
	 */
	async getSIWENonce(address: string): Promise<string> {
		return this.auth.getSIWENonce(address);
	}

	/**
	 * Verifies the SIWE (Sign-In with Ethereum) signature.
	 *
	 * @param address - The Ethereum address of the user.
	 * @param signedMessage - The signed message to verify.
	 * @param nonce - A unique nonce used for the verification process.
	 * @param message - The SIWE message object containing the details of the sign-in request.
	 * @returns A promise that resolves to a Session object if the verification is successful.
	 */
	async verifySIWESignature(
		address: string,
		signedMessage: string,
		nonce: string,
		message: SiweMessage,
	): Promise<Session> {
		return this.auth.verifySIWESignature(
			address,
			signedMessage,
			nonce,
			message,
		);
	}

	/**
	 * Retrieves the current user session.
	 *
	 * @returns {Promise<Session | null>} A promise that resolves to the current user session if available, or null if no session exists.
	 */
	async getUserSession(): Promise<Session | null> {
		return this.auth.getUserSession();
	}

	/**
	 * Sets the provider for the SDK and emits a 'providerChanged' event.
	 *
	 * @param provider - The provider to set. Can be 'moon', 'metamask', or 'walletconnect'.
	 */
	setProvider(provider: "moon" | "metamask" | "walletconnect") {
		this.emit("providerChanged", provider);
	}

	/**
	 * Switches the current blockchain network to the specified chain ID.
	 *
	 * @param chainId - The ID of the chain to switch to.
	 * @returns A promise that resolves when the chain has been switched.
	 *
	 * @throws {NetworkError} If the chain switch fails.
	 *
	 * This method performs the following steps:
	 * 1. Retrieves the chain information using the provided chain ID.
	 * 2. Sets the selected chain in the chain service.
	 * 3. If the current provider is not 'moon', it sends a request to the Ethereum provider to switch the chain.
	 * 4. Emits a 'chainSwitched' event with the chain information.
	 *
	 * If an error occurs during any of these steps, it emits an 'error' event with the method name, error details, and chain ID, and then throws a `NetworkError`.
	 */
	async switchChain(chainId: number): Promise<void> {
		try {
			const chain = await this.chainService.getChainById(chainId.toString());
			this.chainService.setSelectedChain(chain);
			if (this.getProviderService().getCurrentProvider() !== "moon") {
				await (window as any).ethereum.request({
					method: "wallet_switchEthereumChain",
					params: [{ chainId: `0x${chainId.toString(16)}` }],
				});
			}
			this.emit("chainSwitched", chain);
		} catch (error) {
			this.emit("error", {
				method: "switchChain",
				error,
				chainId,
			});
			throw new NetworkError(`Failed to switch chain: ${error}`);
		}
	}
	/**
	 * Adds a token to the user's wallet using the `wallet_watchAsset` method.
	 * Emits a 'tokenAdded' event if successful, or an 'error' event if an error occurs.
	 *
	 * @param address - The contract address of the token.
	 * @param symbol - The symbol of the token.
	 * @param decimals - The number of decimals the token uses.
	 * @param image - (Optional) A URL to an image representing the token.
	 * @returns A promise that resolves to `true` if the token was added successfully, or `false` if an error occurred.
	 */
	async addToken(
		address: string,
		symbol: string,
		decimals: number,
		image?: string,
	): Promise<boolean> {
		try {
			await (window as any).ethereum.request({
				method: "wallet_watchAsset",
				params: {
					type: "ERC20",
					options: { address, symbol, decimals, image },
				},
			});
			this.emit("tokenAdded", {
				address,
				symbol,
				decimals,
				image,
			});
			return true;
		} catch (error) {
			this.emit("error", {
				method: "addToken",
				error,
				address,
				symbol,
				decimals,
				image,
			});
			return false;
		}
	}

	/**
	 * Retrieves the ENS (Ethereum Name Service) name associated with a given Ethereum address.
	 *
	 * @param address - The Ethereum address for which to fetch the ENS name.
	 * @returns A promise that resolves to the ENS name if found, or `null` if not found.
	 * @throws {NetworkError} If there is an issue fetching the ENS name.
	 *
	 * @emits ensNameFetched - When the ENS name is successfully fetched.
	 * @emits error - When there is an error fetching the ENS name.
	 */
	async getENSName(address: string): Promise<string | null> {
		try {
			const provider = await this.getEthereumProvider(
				this.chainService.getSelectedChain()?.chain_id || 1,
			);
			const ensName = await provider.lookupAddress(address);
			this.emit("ensNameFetched", { address, ensName });
			return ensName;
		} catch (error) {
			this.emit("error", { method: "getENSName", error, address });
			throw new NetworkError(`Failed to fetch ENS name: ${error}`);
		}
	}

	/**
	 * Resolves an Ethereum Name Service (ENS) name to its corresponding Ethereum address.
	 *
	 * @param ensName - The ENS name to resolve.
	 * @returns A promise that resolves to the Ethereum address corresponding to the ENS name, or null if the name cannot be resolved.
	 * @throws {NetworkError} If there is an error during the resolution process.
	 *
	 * @emits ensNameResolved - When the ENS name is successfully resolved.
	 * @emits error - When there is an error during the resolution process.
	 */
	async resolveENSName(ensName: string): Promise<string | null> {
		try {
			const provider = await this.getEthereumProvider(
				this.chainService.getSelectedChain()?.chain_id || 1,
			);
			const address = await provider.resolveName(ensName);
			this.emit("ensNameResolved", { ensName, address });
			return address;
		} catch (error) {
			this.emit("error", {
				method: "resolveENSName",
				error,
				ensName,
			});
			throw new NetworkError(`Failed to resolve ENS name: ${error}`);
		}
	}
	/**
	 * Initiates the OAuth process for Discord.
	 *
	 * This method uses the OAuth2 service to start the OAuth flow specifically for Discord.
	 *
	 * @returns {Promise<void>} A promise that resolves when the OAuth process is initiated.
	 */
	async performDiscordOAuth(): Promise<void> {
		return this.oauth2Service.initiateOAuth("discord");
	}

	/**
	 * Exchanges a Discord OAuth code for an access token.
	 *
	 * @param code - The OAuth code received from Discord.
	 * @returns A promise that resolves with the token information.
	 */
	async performDiscordOauthCodeExchange(code: string): Promise<any> {
		return this.oauth2Service.exchangeCodeForToken("discord", code);
	}

	/**
	 * Initiates the OAuth2 authentication process for GitHub.
	 *
	 * This method uses the OAuth2 service to start the OAuth flow specifically for GitHub.
	 *
	 * @returns {Promise<void>} A promise that resolves when the OAuth process is initiated.
	 */
	async performGithubOAuth(): Promise<void> {
		return this.oauth2Service.initiateOAuth("github");
	}

	/**
	 * Exchanges a GitHub OAuth code for an access token.
	 *
	 * @param code - The GitHub OAuth code to exchange.
	 * @returns A promise that resolves with the access token or any other response from the OAuth service.
	 */
	async performGithubOauthCodeExchange(code: string): Promise<any> {
		return this.oauth2Service.exchangeCodeForToken("github", code);
	}

	/**
	 * Initiates the OAuth2 authentication process for Google.
	 *
	 * This method uses the OAuth2 service to start the authentication flow
	 * with Google as the provider.
	 *
	 * @returns {Promise<void>} A promise that resolves when the OAuth2 process is initiated.
	 */
	async performGoogleOAuth(): Promise<void> {
		return this.oauth2Service.initiateOAuth("google");
	}

	/**
	 * Exchanges a Google OAuth authorization code for an access token.
	 *
	 * @param code - The authorization code received from the Google OAuth flow.
	 * @returns A promise that resolves to the token information.
	 */
	async performGoogleOauthCodeExchange(code: string): Promise<any> {
		return this.oauth2Service.exchangeCodeForToken("google", code);
	}

	/**
	 * Initiates the OAuth process for Twitter.
	 *
	 * This method uses the OAuth2 service to start the OAuth flow specifically for Twitter.
	 *
	 * @returns {Promise<void>} A promise that resolves when the OAuth process is initiated.
	 */
	async performTwitterOauth(): Promise<void> {
		return this.oauth2Service.initiateOAuth("twitter");
	}

	/**
	 * Exchanges a Twitter OAuth code for an access token.
	 *
	 * @param code - The OAuth code received from Twitter.
	 * @returns A promise that resolves with the access token or any other response from the OAuth service.
	 */
	async performTwitterOauthCodeExchange(code: string): Promise<any> {
		return this.oauth2Service.exchangeCodeForToken("twitter", code);
	}

	/**
	 * Sends a magic link to the specified email address.
	 *
	 * @param email - The email address to send the magic link to.
	 * @param redirectTo - The URL to redirect to after the magic link is used.
	 * @returns A promise that resolves when the magic link has been sent.
	 */
	async sendMagicLink(email: string, redirectTo: string): Promise<void> {
		return this.auth.sendMagicLink(email, redirectTo);
	}

	/**
	 * Signs up a new user with the provided email and password.
	 *
	 * @param email - The email address of the user.
	 * @param password - The password for the user's account.
	 * @returns A promise that resolves to a `Session` object if the sign-up is successful, or `null` if it fails.
	 */
	async signUp(email: string, password: string): Promise<Session | null> {
		return this.auth.signUpWithEmail(email, password);
	}

	async signInWithPassword(
		email: string,
		password: string,
	): Promise<Session | null> {
		return this.auth.signInWithEmail(email, password);
	}

	// Removed unused signInWithPhone method
	/**
	 * Initiates the passkey login process for the given email.
	 *
	 * @param email - The email address of the user attempting to log in.
	 * @returns A promise that resolves to a `PublicKeyCredentialRequestOptionsJSON` object, which contains the options for the passkey login request.
	 */
	async handlePassKeyLogin(
		email: string,
	): Promise<PublicKeyCredentialRequestOptionsJSON> {
		return this.auth.initiatePasskeyLogin(email);
	}

	/**
	 * Verifies the passkey login for a given email and credential.
	 *
	 * @param email - The email address of the user attempting to log in.
	 * @param credential - The authentication response JSON containing the credential information.
	 * @returns A promise that resolves to a Session object upon successful verification.
	 *          The Session object contains information about the authenticated user session.
	 */
	async handlePasskeyLoginVerify(
		email: string,
		credential: AuthenticationResponseJSON,
	): Promise<Session> {
		return this.auth.completePasskeyLogin(email, credential);
	}

	/**
	 * Initiates the passkey registration process for a given email.
	 *
	 * @param email - The email address to register.
	 * @returns A promise that resolves to the PublicKeyCredentialCreationOptionsJSON object.
	 */
	async handleRegister(
		email: string,
	): Promise<PublicKeyCredentialCreationOptionsJSON> {
		return this.auth.initiatePasskeyRegistration(email);
	}

	/**
	 * Handles the verification process for user registration.
	 *
	 * @param email - The email address of the user.
	 * @param credential - The registration response in JSON format.
	 * @param options - The public key credential creation options in JSON format.
	 * @returns A promise that resolves to void when the registration verification is complete.
	 */
	async handleRegisterVerify(
		email: string,
		credential: RegistrationResponseJSON,
		options: PublicKeyCredentialCreationOptionsJSON,
	): Promise<void> {
		return this.auth.completePasskeyRegistration(email, credential, options);
	}

	/**
	 * Creates an embedded account session.
	 *
	 * @param email - The email address associated with the account.
	 * @param uuid - The unique identifier for the account.
	 * @param domain - The domain associated with the account.
	 * @returns A promise that resolves to a Session object.
	 */
	async embeddedAccount(
		email: string,
		uuid: string,
		domain: string,
	): Promise<Session> {
		return this.auth.createEmbeddedAccount(email, uuid, domain);
	}

	/**
	 * Retrieves the Solana SDK instance.
	 *
	 * @returns {MoonAPI.Solana} The Solana SDK instance.
	 */
	public getSolanaSDK(): MoonAPI.Solana {
		return this.moonAPIService.getSolanaSDK();
	}

	/**
	 * Retrieves the Bitcoin SDK instance from the Moon API service.
	 *
	 * @returns {MoonAPI.Bitcoin} The Bitcoin SDK instance.
	 */
	public getBitcoinSDK(): MoonAPI.Bitcoin {
		return this.moonAPIService.getBitcoinSDK();
	}

	/**
	 * Retrieves the Cosmos SDK instance from the Moon API service.
	 *
	 * @returns {MoonAPI.Cosmos} The Cosmos SDK instance.
	 */
	public getCosmosSDK(): MoonAPI.Cosmos {
		return this.moonAPIService.getCosmosSDK();
	}

	/**
	 * Retrieves the EOS SDK instance from the Moon API service.
	 *
	 * @returns {MoonAPI.Eos} The EOS SDK instance.
	 */
	public getEosSDK(): MoonAPI.Eos {
		return this.moonAPIService.getEosSDK();
	}

	/**
	 * Retrieves the Litecoin SDK instance.
	 *
	 * @returns {MoonAPI.Litecoin} The Litecoin SDK instance.
	 */
	public getLitecoinSDK(): MoonAPI.Litecoin {
		return this.moonAPIService.getLitecoinSDK();
	}

	/**
	 * Retrieves the Ripple SDK instance from the Moon API service.
	 *
	 * @returns {MoonAPI.Ripple} The Ripple SDK instance.
	 */
	public getRippleSDK(): MoonAPI.Ripple {
		return this.moonAPIService.getRippleSDK();
	}

	/**
	 * Retrieves the Tron SDK instance from the Moon API service.
	 *
	 * @returns {MoonAPI.Tron} The Tron SDK instance.
	 */
	public getTronSDK(): MoonAPI.Tron {
		return this.moonAPIService.getTronSDK();
	}

	/**
	 * Retrieves the Bitcoin Cash SDK instance.
	 *
	 * @returns {MoonAPI.Bitcoincash} The Bitcoin Cash SDK instance.
	 */
	public getBitcoincashSDK(): MoonAPI.Bitcoincash {
		return this.moonAPIService.getBitcoincashSDK();
	}

	/**
	 * Retrieves the Dogecoin SDK instance.
	 *
	 * @returns {MoonAPI.Dogecoin} The Dogecoin SDK instance.
	 */
	public getDogecoinSDK(): MoonAPI.Dogecoin {
		return this.moonAPIService.getDogecoinSDK();
	}

	/**
	 * Retrieves the Accounts SDK instance from the Moon API service.
	 *
	 * @returns {MoonAPI.Accounts} The Accounts SDK instance.
	 */
	public getAccountsSDK(): MoonAPI.Accounts {
		return this.moonAPIService.getAccountsSDK();
	}

	/**
	 * Retrieves the ENS SDK instance from the Moon API service.
	 *
	 * @returns {MoonAPI.Ens} The ENS SDK instance.
	 */
	public getENSSDK(): MoonAPI.Ens {
		return this.moonAPIService.getENSSDK();
	}

	/**
	 * Retrieves the ERC-20 SDK instance.
	 *
	 * @returns {MoonAPI.Erc20} The ERC-20 SDK instance.
	 */
	public getErc20SDK(): MoonAPI.Erc20 {
		return this.moonAPIService.getErc20SDK();
	}

	/**
	 * Retrieves the ERC-1155 SDK instance.
	 *
	 * @returns {MoonAPI.Erc1155} The ERC-1155 SDK instance.
	 */
	public getErc1155SDK(): MoonAPI.Erc1155 {
		return this.moonAPIService.getErc1155SDK();
	}

	/**
	 * Retrieves the ERC-721 SDK instance.
	 *
	 * @returns {MoonAPI.Erc721} The ERC-721 SDK instance.
	 */
	public getErc721SDK(): MoonAPI.Erc721 {
		return this.moonAPIService.getErc721SDK();
	}

	/**
	 * Retrieves the ERC-4626 SDK instance.
	 *
	 * @returns {MoonAPI.Erc4626} The ERC-4626 SDK instance.
	 */
	public getErc4626SDK(): MoonAPI.Erc4626 {
		return this.moonAPIService.getErc4626SDK();
	}

	/**
	 * Retrieves the LendingPool SDK instance from the MoonAPI service.
	 *
	 * @returns {MoonAPI.LendingPool} The LendingPool SDK instance.
	 */
	public getLendingPoolSDK(): MoonAPI.LendingPool {
		return this.moonAPIService.getLendingPoolSDK();
	}

	/**
	 * Retrieves an instance of the Leverager SDK from the Moon API service.
	 *
	 * @returns {MoonAPI.Leverager} An instance of the Leverager SDK.
	 */
	public getLeveragerSDK(): MoonAPI.Leverager {
		return this.moonAPIService.getLeveragerSDK();
	}

	/**
	 * Retrieves the Lifi SDK instance from the Moon API service.
	 *
	 * @returns {MoonAPI.Lifi} The Lifi SDK instance.
	 */
	public getLifiSDK(): MoonAPI.Lifi {
		return this.moonAPIService.getLifiSDK();
	}

	/**
	 * Retrieves the Odos SDK instance from the Moon API service.
	 *
	 * @returns {MoonAPI.Odos} The Odos SDK instance.
	 */
	public getOdosSDK(): MoonAPI.Odos {
		return this.moonAPIService.getOdosSDK();
	}

	/**
	 * Retrieves the Onramper SDK instance from the Moon API service.
	 *
	 * @returns {MoonAPI.Onramper} The Onramper SDK instance.
	 */
	public getOnramperSDK(): MoonAPI.Onramper {
		return this.moonAPIService.getOnramperSDK();
	}

	/**
	 * Retrieves the Thorswap SDK instance from the MoonAPI service.
	 *
	 * @returns {MoonAPI.Thorswap} The Thorswap SDK instance.
	 */
	public getThorswapSDK(): MoonAPI.Thorswap {
		return this.moonAPIService.getThorswapSDK();
	}

	/**
	 * Retrieves the Aave SDK instance from the Moon API service.
	 *
	 * @returns {MoonAPI.Aave} The Aave SDK instance.
	 */
	public getAaveSDK(): MoonAPI.Aave {
		return this.moonAPIService.getAaveSDK();
	}

	/**
	 * Retrieves the Multicall SDK instance from the MoonAPI service.
	 *
	 * @returns {MoonAPI.Multicall} The Multicall SDK instance.
	 */
	public getMultiCallSDK(): MoonAPI.Multicall {
		return this.moonAPIService.getMultiCallSDK();
	}

	/**
	 * Retrieves data from the Moon API service.
	 *
	 * @returns {MoonAPI.Data} The data retrieved from the Moon API service.
	 */
	public getDataSDK(): MoonAPI.Data {
		return this.moonAPIService.getDataSDK();
	}

	/**
	 * Retrieves the Thena SDK instance from the Moon API service.
	 *
	 * @returns {MoonAPI.Thena} The Thena SDK instance.
	 */
	public getThenaSDK(): MoonAPI.Thena {
		return this.moonAPIService.getThenaSDK();
	}

	/**
	 * Retrieves the Jupiter SDK instance from the Moon API service.
	 *
	 * @returns {MoonAPI.Jupiter} The Jupiter SDK instance.
	 */
	public getJupiterSDK(): MoonAPI.Jupiter {
		return this.moonAPIService.getJupiterSDK();
	}

	/**
	 * Retrieves the Uniswap SDK instance from the Moon API service.
	 *
	 * @returns {MoonAPI.Uniswap} The Uniswap SDK instance.
	 */
	public getUniswapSDK(): MoonAPI.Uniswap {
		return this.moonAPIService.getUniswapSDK();
	}

	/**
	 * Retrieves the Ramses SDK instance from the Moon API service.
	 *
	 * @returns {MoonAPI.Ramses} The Ramses SDK instance.
	 */
	public getRamsesSDK(): MoonAPI.Ramses {
		return this.moonAPIService.getRamsesSDK();
	}

	/**
	 * Retrieves the Polymarket SDK instance from the MoonAPI service.
	 *
	 * @returns {MoonAPI.Polymarket} The Polymarket SDK instance.
	 */
	public getPolymarketSDK(): MoonAPI.Polymarket {
		return this.moonAPIService.getPolymarketSDK();
	}

	public getLynexSDK(): MoonAPI.Lynex {
		return this.moonAPIService.getLynexSDK();
	}
	/**
	 * Retrieves the balance of a Solana account.
	 *
	 * @param address - The Solana account address to check the balance for.
	 * @returns A promise that resolves to the balance of the account as a string.
	 */
	async getSolanaBalance(address: string): Promise<string> {
		return this.solanaService.getBalance(address);
	}

	// Event listener methods
	/**
	 * Registers an event listener for the specified event.
	 *
	 * @param event - The name of the event to listen for.
	 * @param listener - The callback function to be invoked when the event is emitted.
	 * @returns The current instance for method chaining.
	 */
	on(event: string, listener: (...args: any[]) => void): this {
		this.on(event, listener);
		return this;
	}

	/**
	 * Removes the specified listener for the given event.
	 *
	 * @param event - The name of the event to remove the listener from.
	 * @param listener - The callback function to remove from the event.
	 * @returns The current instance for method chaining.
	 */
	off(event: string, listener: (...args: any[]) => void): this {
		this.off(event, listener);
		return this;
	}

	/**
	 * Registers a one-time listener for the specified event.
	 * The listener is invoked at most once after being registered.
	 *
	 * @param event - The name of the event to listen for.
	 * @param listener - The callback function to be invoked when the event is emitted.
	 * @returns The current instance for chaining.
	 */
	once(event: string, listener: (...args: any[]) => void): this {
		this.once(event, listener);
		return this;
	}
}
