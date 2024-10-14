import {} from '@ethersproject/abstract-signer';
import { BytesLike } from '@ethersproject/bytes';
import * as MoonAPI from '@moonup/moon-api';
import { ApiConfig, HttpClient } from '@moonup/moon-api';
import {
  AuthenticationResponseJSON,
  PublicKeyCredentialCreationOptionsJSON,
  PublicKeyCredentialRequestOptionsJSON,
  RegistrationResponseJSON,
} from '@simplewebauthn/typescript-types';
import type { SupabaseClient } from '@supabase/supabase-js';
import { Session } from '@supabase/supabase-js';
import {
  BigNumberish,
  TransactionReceipt,
  TransactionRequest,
  TypedDataDomain,
  TypedDataField,
} from 'ethers';
import { SiweMessage } from 'siwe';

import { AuthService } from './services/AuthService';
import { CacheService } from './services/CacheService';

/**
 * Supported blockchain types in MoonSDK
 */

export type ChainType =
  | 'ethereum'
  | 'solana'
  | 'bitcoin'
  | 'cosmos'
  | 'eos'
  | 'litecoin'
  | 'ripple'
  | 'tron'
  | 'bitcoincash'
  | 'litecoin'
  | 'dogecoin';
/**
 * Configuration options for MoonSDK
 *
 */

export interface MoonSDKConfig {
  apiKey?: string;
  authInstance?: SupabaseClient;
  httpParams?: ApiConfig;
  httpInstance?: HttpClient;
  clientId?: string;
  supabaseUrl?: string;
  supabaseKey?: string;
  baseUrl?: string;
  solanaEndpoint?: string;
  supportedChains?: any[];
  cacheOptions?: {
    max: number;
    maxAge: number;
  };
  rateLimitOptions?: {
    tokensPerInterval: number;
    interval: string;
  };
  selectedChain?: any;
}
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Chains {
  chain: string | null;
  chain_id: number | null;
  config: Json | null;
  created_at: string;
  ens: Json | null;
  explorers: Json | null;
  features: Json | null;
  icon: string | null;
  id: string;
  index: number | null;
  info_url: string | null;
  name: string | null;
  native_currency: Json | null;
  network_id: number | null;
  rpc_urls: string[] | null;
  short_name: string | null;
  slip44: number | null;
  updated_at: string;
}

/**
 * Interface representing the Moon SDK.
 */
export interface IMoonSDK {
  /**
   * Supabase client instance.
   */
  supabase: SupabaseClient;

  /**
   * Authentication service instance.
   */
  auth: AuthService;

  /**
   * Cache service instance.
   */
  cache: CacheService;

  /**
   * Retrieves the current configuration.
   * @returns The current Moon SDK configuration.
   */
  getConfig(): MoonSDKConfig;

  /**
   * Updates the configuration with the provided partial configuration.
   * @param config - Partial configuration to update.
   */
  updateConfig(config: Partial<MoonSDKConfig>): void;

  /**
   * Retrieves the provider service.
   * @returns The provider service.
   */
  getProviderService(): any;

  /**
   * Retrieves the transaction service.
   * @returns The transaction service.
   */
  getTransactionService(): any;

  /**
   * Retrieves the event service.
   * @returns The event service.
   */
  getEventService(): any;

  /**
   * Retrieves the OAuth2 service.
   * @returns The OAuth2 service.
   */
  getOAuth2Service(): any;

  /**
   * Retrieves the Solana service.
   * @returns The Solana service.
   */
  getSolanaService(): any;

  /**
   * Retrieves the chain service.
   * @returns The chain service.
   */
  getChainService(): any;

  /**
   * Sets up the chains.
   * @returns A promise that resolves when the chains are set up.
   */
  setupChains(): Promise<void>;

  /**
   * Connects to the service with optional access and refresh tokens.
   * @param accessToken - Optional access token.
   * @param refreshToken - Optional refresh token.
   * @returns A promise that resolves when the connection is established.
   */
  connect(accessToken?: string, refreshToken?: string): Promise<void>;

  /**
   * Retrieves the list of chains.
   * @returns A promise that resolves to an array of chains.
   */
  getChains(): Promise<Chains[]>;

  /**
   * Disconnects from the service.
   * @returns A promise that resolves when the disconnection is complete.
   */
  disconnect(): Promise<void>;

  /**
   * Lists the accounts.
   * @returns A promise that resolves to an array of account strings.
   */
  listAccounts(): Promise<string[]>;

  /**
   * Creates a new account.
   * @returns A promise that resolves to the new account string.
   */
  createAccount(): Promise<string>;

  /**
   * Signs a transaction with the specified wallet.
   * @param wallet - The wallet to sign the transaction with.
   * @param transaction - The transaction to sign.
   * @returns A promise that resolves to the signed transaction string.
   */
  signTransaction(wallet: string, transaction: any): Promise<string>;

  /**
   * Signs a message with the specified wallet.
   * @param wallet - The wallet to sign the message with.
   * @param message - The message to sign.
   * @returns A promise that resolves to the signed message string.
   */
  signMessage(wallet: string, message: BytesLike): Promise<string>;

  /**
   * Signs typed data with the specified wallet.
   * @param wallet - The wallet to sign the typed data with.
   * @param domain - The domain of the typed data.
   * @param types - The types of the typed data.
   * @param value - The value of the typed data.
   * @returns A promise that resolves to the signed typed data string.
   */
  signTypedData(
    wallet: string,
    domain: TypedDataDomain,
    types: Record<string, Array<TypedDataField>>,
    value: Record<string, any>
  ): Promise<string>;

  /**
   * Sends a transaction with the specified wallet.
   * @param wallet - The wallet to send the transaction with.
   * @param rawTransaction - The raw transaction string.
   * @param chainId - The chain ID.
   * @returns A promise that resolves to the transaction hash string.
   */
  sendTransaction(
    wallet: string,
    rawTransaction: string,
    chainId: string
  ): Promise<string>;

  /**
   * Retrieves the Ethereum provider for the specified chain ID.
   * @param chainId - The chain ID.
   * @returns The Ethereum provider.
   */
  getEthereumProvider(chainId: number): any;

  /**
   * Retrieves the Solana provider.
   * @returns The Solana provider.
   */
  getSolanaProvider(): any;

  /**
   * Estimates the gas for the specified transaction.
   * @param transaction - The partial transaction request.
   * @returns A promise that resolves to the estimated gas.
   */
  estimateGas(transaction: Partial<TransactionRequest>): Promise<BigNumberish>;

  /**
   * Watches a transaction with the specified hash and optional confirmations.
   * @param txHash - The transaction hash.
   * @param confirmations - Optional number of confirmations.
   * @returns A promise that resolves to the transaction receipt.
   */
  watchTransaction(
    txHash: string,
    confirmations?: number
  ): Promise<TransactionReceipt>;

  /**
   * Signs in with email and password.
   * @param email - The email address.
   * @param password - The password.
   * @returns A promise that resolves to the session or null.
   */
  signInWithEmail(email: string, password: string): Promise<Session | null>;

  /**
   * Signs up with email and password.
   * @param email - The email address.
   * @param password - The password.
   * @returns A promise that resolves to the session or null.
   */
  signUpWithEmail(email: string, password: string): Promise<Session | null>;

  /**
   * Signs in with OAuth provider.
   * @param provider - The OAuth provider ('google', 'github', or 'discord').
   * @returns A promise that resolves when the sign-in is complete.
   */
  signInWithOAuth(provider: 'google' | 'github' | 'discord'): Promise<void>;

  /**
   * Retrieves the SIWE nonce for the specified address.
   * @param address - The address.
   * @returns A promise that resolves to the SIWE nonce string.
   */
  getSIWENonce(address: string): Promise<string>;

  /**
   * Verifies the SIWE signature.
   * @param address - The address.
   * @param signedMessage - The signed message.
   * @param nonce - The nonce.
   * @param message - The SIWE message.
   * @returns A promise that resolves to the session.
   */
  verifySIWESignature(
    address: string,
    signedMessage: string,
    nonce: string,
    message: SiweMessage
  ): Promise<Session>;

  /**
   * Retrieves the user session.
   * @returns A promise that resolves to the session or null.
   */
  getUserSession(): Promise<Session | null>;

  /**
   * Sets the provider.
   * @param provider - The provider ('moon', 'metamask', or 'walletconnect').
   */
  setProvider(provider: 'moon' | 'metamask' | 'walletconnect'): void;

  /**
   * Switches the chain.
   * @param chainId - The chain ID.
   * @returns A promise that resolves when the chain is switched.
   */
  switchChain(chainId: number): Promise<void>;

  /**
   * Adds a token.
   * @param address - The token address.
   * @param symbol - The token symbol.
   * @param decimals - The token decimals.
   * @param image - Optional token image.
   * @returns A promise that resolves to a boolean indicating success.
   */
  addToken(
    address: string,
    symbol: string,
    decimals: number,
    image?: string
  ): Promise<boolean>;

  /**
   * Retrieves the ENS name for the specified address.
   * @param address - The address.
   * @returns A promise that resolves to the ENS name or null.
   */
  getENSName(address: string): Promise<string | null>;

  /**
   * Resolves the ENS name to an address.
   * @param ensName - The ENS name.
   * @returns A promise that resolves to the address or null.
   */
  resolveENSName(ensName: string): Promise<string | null>;

  /**
   * Performs Discord OAuth.
   * @returns A promise that resolves when the OAuth is complete.
   */
  performDiscordOAuth(): Promise<void>;

  /**
   * Performs Discord OAuth code exchange.
   * @param code - The OAuth code.
   * @returns A promise that resolves to the result of the code exchange.
   */
  performDiscordOauthCodeExchange(code: string): Promise<any>;

  /**
   * Performs GitHub OAuth.
   * @returns A promise that resolves when the OAuth is complete.
   */
  performGithubOAuth(): Promise<void>;

  /**
   * Performs GitHub OAuth code exchange.
   * @param code - The OAuth code.
   * @returns A promise that resolves to the result of the code exchange.
   */
  performGithubOauthCodeExchange(code: string): Promise<any>;

  /**
   * Performs Google OAuth.
   * @returns A promise that resolves when the OAuth is complete.
   */
  performGoogleOAuth(): Promise<void>;

  /**
   * Performs Google OAuth code exchange.
   * @param code - The OAuth code.
   * @returns A promise that resolves to the result of the code exchange.
   */
  performGoogleOauthCodeExchange(code: string): Promise<any>;

  /**
   * Performs Twitter OAuth.
   * @returns A promise that resolves when the OAuth is complete.
   */
  performTwitterOauth(): Promise<void>;

  /**
   * Performs Twitter OAuth code exchange.
   * @param code - The OAuth code.
   * @returns A promise that resolves to the result of the code exchange.
   */
  performTwitterOauthCodeExchange(code: string): Promise<any>;

  /**
   * Sends a magic link to the specified email.
   * @param email - The email address.
   * @param redirectTo - The redirect URL.
   * @returns A promise that resolves when the magic link is sent.
   */
  sendMagicLink(email: string, redirectTo: string): Promise<void>;

  /**
   * Signs up with email and password.
   * @param email - The email address.
   * @param password - The password.
   * @returns A promise that resolves to the session or null.
   */
  signUp(email: string, password: string): Promise<Session | null>;

  /**
   * Signs in with email and password.
   * @param email - The email address.
   * @param password - The password.
   * @returns A promise that resolves to the session or null.
   */
  signInWithPassword(email: string, password: string): Promise<Session | null>;

  /**
   * Signs in with phone and password.
   * @param phone - The phone number.
   * @param password - The password.
   * @returns A promise that resolves when the sign-in is complete.
   */
  signInWithPhone(phone: string, password: string): Promise<void>;

  /**
   * Handles passkey login.
   * @param email - The email address.
   * @returns A promise that resolves to the public key credential request options.
   */
  handlePassKeyLogin(
    email: string
  ): Promise<PublicKeyCredentialRequestOptionsJSON>;

  /**
   * Verifies the passkey login.
   * @param email - The email address.
   * @param credential - The authentication response.
   * @returns A promise that resolves to the session.
   */
  handlePasskeyLoginVerify(
    email: string,
    credential: AuthenticationResponseJSON
  ): Promise<Session>;

  /**
   * Handles registration.
   * @param email - The email address.
   * @returns A promise that resolves to the public key credential creation options.
   */
  handleRegister(
    email: string
  ): Promise<PublicKeyCredentialCreationOptionsJSON>;

  /**
   * Verifies the registration.
   * @param email - The email address.
   * @param credential - The registration response.
   * @param options - The public key credential creation options.
   * @returns A promise that resolves when the registration is verified.
   */
  handleRegisterVerify(
    email: string,
    credential: RegistrationResponseJSON,
    options: PublicKeyCredentialCreationOptionsJSON
  ): Promise<void>;

  /**
   * Retrieves an embedded account.
   * @param email - The email address.
   * @param uuid - The UUID.
   * @param domain - The domain.
   * @returns A promise that resolves to the session.
   */
  embeddedAccount(
    email: string,
    uuid: string,
    domain: string
  ): Promise<Session>;

  /**
   * Retrieves the Solana SDK.
   * @returns The Solana SDK.
   */
  getSolanaSDK(): MoonAPI.Solana;

  /**
   * Retrieves the Bitcoin SDK.
   * @returns The Bitcoin SDK.
   */
  getBitcoinSDK(): MoonAPI.Bitcoin;

  /**
   * Retrieves the Cosmos SDK.
   * @returns The Cosmos SDK.
   */
  getCosmosSDK(): MoonAPI.Cosmos;

  /**
   * Retrieves the EOS SDK.
   * @returns The EOS SDK.
   */
  getEosSDK(): MoonAPI.Eos;

  /**
   * Retrieves the Litecoin SDK.
   * @returns The Litecoin SDK.
   */
  getLitecoinSDK(): MoonAPI.Litecoin;

  /**
   * Retrieves the Ripple SDK.
   * @returns The Ripple SDK.
   */
  getRippleSDK(): MoonAPI.Ripple;

  /**
   * Retrieves the Tron SDK.
   * @returns The Tron SDK.
   */
  getTronSDK(): MoonAPI.Tron;

  /**
   * Retrieves the Bitcoin Cash SDK.
   * @returns The Bitcoin Cash SDK.
   */
  getBitcoincashSDK(): MoonAPI.Bitcoincash;

  /**
   * Retrieves the Dogecoin SDK.
   * @returns The Dogecoin SDK.
   */
  getDogecoinSDK(): MoonAPI.Dogecoin;

  /**
   * Retrieves the Accounts SDK.
   * @returns The Accounts SDK.
   */
  getAccountsSDK(): MoonAPI.Accounts;

  /**
   * Retrieves the ENS SDK.
   * @returns The ENS SDK.
   */
  getENSSDK(): MoonAPI.Ens;

  /**
   * Retrieves the ERC20 SDK.
   * @returns The ERC20 SDK.
   */
  getErc20SDK(): MoonAPI.Erc20;

  /**
   * Retrieves the ERC1155 SDK.
   * @returns The ERC1155 SDK.
   */
  getErc1155SDK(): MoonAPI.Erc1155;

  /**
   * Retrieves the ERC721 SDK.
   * @returns The ERC721 SDK.
   */
  getErc721SDK(): MoonAPI.Erc721;

  /**
   * Retrieves the ERC4626 SDK.
   * @returns The ERC4626 SDK.
   */
  getErc4626SDK(): MoonAPI.Erc4626;

  /**
   * Retrieves the Lending Pool SDK.
   * @returns The Lending Pool SDK.
   */
  getLendingPoolSDK(): MoonAPI.LendingPool;

  /**
   * Retrieves the Leverager SDK.
   * @returns The Leverager SDK.
   */
  getLeveragerSDK(): MoonAPI.Leverager;

  /**
   * Retrieves the Lifi SDK.
   * @returns The Lifi SDK.
   */
  getLifiSDK(): MoonAPI.Lifi;

  /**
   * Retrieves the Odos SDK.
   * @returns The Odos SDK.
   */
  getOdosSDK(): MoonAPI.Odos;

  /**
   * Retrieves the Onramper SDK.
   * @returns The Onramper SDK.
   */
  getOnramperSDK(): MoonAPI.Onramper;

  /**
   * Retrieves the Thorswap SDK.
   * @returns The Thorswap SDK.
   */
  getThorswapSDK(): MoonAPI.Thorswap;

  /**
   * Retrieves the Aave SDK.
   * @returns The Aave SDK.
   */
  getAaveSDK(): MoonAPI.Aave;

  /**
   * Retrieves the MultiCall SDK.
   * @returns The MultiCall SDK.
   */
  getMultiCallSDK(): MoonAPI.Multicall;

  /**
   * Retrieves the Data SDK.
   * @returns The Data SDK.
   */
  getDataSDK(): MoonAPI.Data;

  /**
   * Retrieves the Thena SDK.
   * @returns The Thena SDK.
   */
  getThenaSDK(): MoonAPI.Thena;

  /**
   * Retrieves the Jupiter SDK.
   * @returns The Jupiter SDK.
   */
  getJupiterSDK(): MoonAPI.Jupiter;

  /**
   * Retrieves the Uniswap SDK.
   * @returns The Uniswap SDK.
   */
  getUniswapSDK(): MoonAPI.Uniswap;

  /**
   * Retrieves the Ramses SDK.
   * @returns The Ramses SDK.
   */
  getRamsesSDK(): MoonAPI.Ramses;

  /**
   * Retrieves the Polymarket SDK.
   * @returns The Polymarket SDK.
   */
  getPolymarketSDK(): MoonAPI.Polymarket;

  /**
   * Retrieves the Lynex SDK.
   * @returns The Lynex SDK.
   */
  getLynexSDK(): MoonAPI.Lynex;

  /**
   * Retrieves the Solana balance for the specified address.
   * @param address - The address.
   * @returns A promise that resolves to the Solana balance string.
   */
  getSolanaBalance(address: string): Promise<string>;

  /**
   * Registers an event listener.
   * @param event - The event name.
   * @param listener - The event listener.
   * @returns The current instance.
   */
  on(event: string, listener: (...args: any[]) => void): this;

  /**
   * Removes an event listener.
   * @param event - The event name.
   * @param listener - The event listener.
   * @returns The current instance.
   */
  off(event: string, listener: (...args: any[]) => void): this;

  /**
   * Registers a one-time event listener.
   * @param event - The event name.
   * @param listener - The event listener.
   * @returns The current instance.
   */
  once(event: string, listener: (...args: any[]) => void): this;
}
