import {
  TypedDataDomain,
  TypedDataField,
} from '@ethersproject/abstract-signer';
import { BytesLike, arrayify } from '@ethersproject/bytes';
import { hashMessage } from '@ethersproject/hash';
import {
  Aavepool,
  Aavev3Rewards,
  Accounts,
  ApiConfig,
  Bitcoin,
  Bitcoincash,
  ContentType,
  Cosmos,
  Dogecoin,
  Ens,
  Eos,
  Erc1155,
  Erc20,
  Erc4626,
  Erc721,
  HttpClient,
  InputBody,
  LendingPool,
  Leverager,
  Lifi,
  Litecoin,
  Transaction as MoonTransaction,
  Odos,
  Onramper,
  PoolAddressProvider,
  Pooladdressproviderregistry,
  Ripple,
  Solana,
  Thorswap,
  TransactionData,
  Tron,
} from '@moonup/moon-api';
import {
  PublicKeyCredentialCreationOptionsJSON,
  PublicKeyCredentialRequestOptionsJSON,
  RegistrationResponseJSON,
} from '@simplewebauthn/typescript-types';
import { Session, SupabaseClient, createClient } from '@supabase/supabase-js';
import { EventEmitter } from 'events';
import { SiweMessage } from 'siwe';

import { Chains } from './types';

/**
 * Configuration options for the MoonSDK class.
 * MoonSDK - A comprehensive SDK for blockchain interactions and authentication.
 *
 * This SDK provides a wide range of functionalities for interacting with various blockchain networks,
 * including Ethereum, Bitcoin, Solana, and others. It also includes authentication methods,
 * transaction signing, and integration with services like Aave, Uniswap, and Yearn.
 *
 * Key features:
 * - Multiple blockchain support (Ethereum, Bitcoin, Solana, Cosmos, EOS, etc.)
 * - Authentication methods (OAuth, magic link, email/password, passkeys)
 * - Transaction signing and sending
 * - Integration with DeFi protocols (Aave, Uniswap, Yearn)
 * - ENS support
 * - ERC20, ERC721, and ERC1155 token interactions
 * - Sign-in with Ethereum (SIWE) support
 *
 * The SDK is built on top of various APIs and uses Supabase for authentication management.
 * It extends EventEmitter to allow for event-based programming patterns.
 *
 * Usage:
 * const sdk = new MoonSDK(config);
 * await sdk.connect();
 * const accounts = await sdk.listAccounts();
 *
 * @class
 * @extends EventEmitter
 */
export interface MoonSDKConfig {
  /**
   * The API key to use for authentication with the Moon API.
   */
  apiKey?: string;

  /**
   * An instance of the Supabase client to use for authentication with the Moon API.
   */
  authInstance?: SupabaseClient;

  /**
   * Configuration options for the HTTP client used by the MoonSDK class.
   */
  httpParams?: ApiConfig;

  /**
   * An instance of the HttpClient class to use for making HTTP requests to the Moon API.
   */
  httpInstance?: HttpClient;

  clientId?: string;
}
interface User {
  address: string | null;
  auth: Auth | null;
  created_at: string;
  email: string | null;
  id: number;
  users: string | null;
}

interface Auth {
  genNonce: string; // Assuming genNonce should be a string. If it's meant to hold a different type, adjust accordingly.
  lastAuth: string; // ISO string format date
  lastAuthStatus: 'success' | 'failed'; // Assuming only 'success' or 'failed' are valid statuses. Adjust as necessary.
}

/**
 * A class that provides an interface to interact with various blockchain networks and services using the Moon API.
 */
export class MoonSDK extends EventEmitter {
  private AccountsSDK: Accounts;
  private ENSSDK: Ens;
  private Erc20SDK: Erc20;
  private Erc1155SDK: Erc1155;
  private Erc721SDK: Erc721;
  private BitcoinSDK: Bitcoin;
  private SolanaSDK: Solana;
  private CosmosSDK: Cosmos;
  private EosSDK: Eos;
  private LitecoinSDK: Litecoin;
  private RippleSDK: Ripple;
  private TronSDK: Tron;
  private BitcoincashSDK: Bitcoincash;
  private DogecoinSDK: Dogecoin;
  private MoonAPIClient: SupabaseClient;
  private http: HttpClient;
  private Erc4626SDK: Erc4626;
  private LendingPoolSDK: LendingPool;
  private LeveragerSDK: Leverager;
  private LifiSDK: Lifi;
  private OdosSDK: Odos;
  private OnramperSDK: Onramper;
  private ThorswapSDK: Thorswap;
  private AavepoolSDK: Aavepool;
  private Aavev3RewardsSDK: Aavev3Rewards;
  private Aavev3PoolAddressProvider: PoolAddressProvider;
  private Aavev3PoolAddressProviderRegistry: Pooladdressproviderregistry;
  isAuthenticated = false;
  private config: MoonSDKConfig;
  /**
   * Creates a new instance of the MoonSDK class.
   * @param config Configuration options for the MoonSDK class.
   */
  constructor(config?: MoonSDKConfig) {
    super();
    this.config = config || ({} as MoonSDKConfig);
    if (config) {
      this.config = config;
    }
    if (config && config.authInstance) {
      this.MoonAPIClient = config.authInstance;
    }
    if (config && config.apiKey) {
      this.MoonAPIClient = createClient(
        'https://api.usemoon.ai',
        config.apiKey,
        {}
      );
    } else {
      this.MoonAPIClient = createClient(
        'https://api.usemoon.ai',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogImFub24iLAogICJpc3MiOiAic3VwYWJhc2UiLAogICJpYXQiOiAxNzAzMTE2ODAwLAogICJleHAiOiAxODYwOTY5NjAwCn0.nA4p2oP7XNlo93VqnyOlwz_wy7pDXW3lUki1t_udpbA',
        {}
      );
    }
    this.MoonAPIClient.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case 'INITIAL_SESSION':
        case 'SIGNED_IN':
        case 'TOKEN_REFRESHED':
          this.http.setSecurityData({
            token: session?.access_token,
          });
          this.isAuthenticated = true;
          this.emit('connected');
          break;
        case 'SIGNED_OUT':
          this.isAuthenticated = false;
          this.http.setSecurityData({
            token: '',
          });
          this.emit('disconnected');
          break;
      }
    });

    if (config && config.httpInstance) {
      this.http = config.httpInstance;
    }

    if (config && config.httpParams) {
      this.http = new HttpClient(config.httpParams);
    } else {
      const baseApiParams: ApiConfig = {
        baseUrl: 'https://beta.usemoon.ai',
        baseApiParams: {
          secure: true,
          type: ContentType.Json,
          format: 'json',
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        securityWorker: async (securityData: any) => {
          return Promise.resolve({
            headers: {
              Authorization: `Bearer ${securityData.token}`,
            },
          });
        },
      };
      this.http = new HttpClient(baseApiParams);
    }
    this.AccountsSDK = new Accounts(this.http);

    this.ENSSDK = new Ens(this.http);

    this.Erc20SDK = new Erc20(this.http);

    this.Erc1155SDK = new Erc1155(this.http);

    this.Erc721SDK = new Erc721(this.http);

    this.BitcoinSDK = new Bitcoin(this.http);

    this.BitcoincashSDK = new Bitcoincash(this.http);

    this.DogecoinSDK = new Dogecoin(this.http);

    this.SolanaSDK = new Solana(this.http);
    this.CosmosSDK = new Cosmos(this.http);

    this.EosSDK = new Eos(this.http);

    this.LitecoinSDK = new Litecoin(this.http);

    this.RippleSDK = new Ripple(this.http);

    this.TronSDK = new Tron(this.http);
    this.Erc4626SDK = new Erc4626(this.http);
    this.LendingPoolSDK = new LendingPool(this.http);
    this.LeveragerSDK = new Leverager(this.http);
    this.LifiSDK = new Lifi(this.http);
    this.OdosSDK = new Odos(this.http);
    this.OnramperSDK = new Onramper(this.http);
    this.ThorswapSDK = new Thorswap(this.http);
    this.AavepoolSDK = new Aavepool(this.http);
    this.Aavev3RewardsSDK = new Aavev3Rewards(this.http);
    this.Aavev3PoolAddressProvider = new PoolAddressProvider(this.http);
    this.Aavev3PoolAddressProviderRegistry = new Pooladdressproviderregistry(
      this.http
    );

    this.connect();
  }
  /**
   * Returns the instance of the HttpClient class used by the MoonSDK class.
   */
  public getHttpClient(): HttpClient {
    return this.http;
  }
  public async connect(
    accessToken?: string,
    refreshToken?: string
  ): Promise<void> {
    try {
      if (accessToken && refreshToken) {
        this.MoonAPIClient.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });
        this.isAuthenticated = true;
        this.emit('connected');
      } else {
        const { data, error } = await this.MoonAPIClient.auth.getSession();
        if (data) {
          this.http.setSecurityData({
            token: data.session?.access_token,
          });
          this.isAuthenticated = true;
          this.emit('connected');
        }
        if (error) {
          this.isAuthenticated = false;
          throw new Error(error.message);
        }
      }
    } catch (error) {
      this.emit('error', error);
      throw error;
    }
  }

  public async disconnect(): Promise<void> {
    try {
      this.MoonAPIClient.auth.signOut();
      this.isAuthenticated = false;
      this.http.setSecurityData({
        token: '',
      });
      this.emit('disconnected');
    } catch (error) {
      this.emit('error', error);
      throw error;
    }
  }

  public getMoonAuth(): SupabaseClient {
    return this.MoonAPIClient;
  }
  public async getUserSession(): Promise<Session | null> {
    try {
      const { data, error } = await this.MoonAPIClient.auth.getSession();
      if (error) {
        throw new Error(error.message);
      }
      return data?.session || null;
    } catch (error) {
      this.emit('error', error);
      throw error;
    }
  }

  public getSolanaSDK(): Solana {
    return this.SolanaSDK;
  }

  public getBitcoinSDK(): Bitcoin {
    return this.BitcoinSDK;
  }

  public getCosmosSDK(): Cosmos {
    return this.CosmosSDK;
  }

  public getEosSDK(): Eos {
    return this.EosSDK;
  }

  public getLitecoinSDK(): Litecoin {
    return this.LitecoinSDK;
  }

  public getRippleSDK(): Ripple {
    return this.RippleSDK;
  }

  public getTronSDK(): Tron {
    return this.TronSDK;
  }

  public getBitcoincashSDK(): Bitcoincash {
    return this.BitcoincashSDK;
  }

  public getDogecoinSDK(): Dogecoin {
    return this.DogecoinSDK;
  }

  public getAccountsSDK(): Accounts {
    return this.AccountsSDK;
  }
  public getENSSDK(): Ens {
    return this.ENSSDK;
  }

  public getErc20SDK(): Erc20 {
    return this.Erc20SDK;
  }

  public getErc1155SDK(): Erc1155 {
    return this.Erc1155SDK;
  }

  public getErc721SDK(): Erc721 {
    return this.Erc721SDK;
  }
  public getErc4626SDK(): Erc4626 {
    return this.Erc4626SDK;
  }

  public getLendingPoolSDK(): LendingPool {
    return this.LendingPoolSDK;
  }

  public getLeveragerSDK(): Leverager {
    return this.LeveragerSDK;
  }

  public getLifiSDK(): Lifi {
    return this.LifiSDK;
  }

  public getOdosSDK(): Odos {
    return this.OdosSDK;
  }

  public getOnramperSDK(): Onramper {
    return this.OnramperSDK;
  }

  public getThorswapSDK(): Thorswap {
    return this.ThorswapSDK;
  }

  public getAavepoolSDK(): Aavepool {
    return this.AavepoolSDK;
  }

  public getAavev3RewardsSDK(): Aavev3Rewards {
    return this.Aavev3RewardsSDK;
  }
  public getAavev3PoolAddressProvider(): PoolAddressProvider {
    return this.Aavev3PoolAddressProvider;
  }

  public getAavev3PoolAddressProviderRegistry(): Pooladdressproviderregistry {
    return this.Aavev3PoolAddressProviderRegistry;
  }

  /**
   * Returns a list of Ethereum accounts managed by the Moon API.
   */
  public async listAccounts(): Promise<string[]> {
    try {
      const response = await this.getAccountsSDK().listAccounts();
      const accounts = response.data?.data.keys || [];
      this.emit('accountsListed', accounts);
      return accounts;
    } catch (error) {
      this.emit('error', error);
      throw error;
    }
  }
  /**
   * Creates a new Ethereum account and returns its address.
   */
  public async createAccount(): Promise<string> {
    try {
      const response = await this.getAccountsSDK().createAccount({});
      const account = response.data?.data.address || '';
      this.emit('accountCreated', account);
      return account;
    } catch (error) {
      this.emit('error', error);
      throw error;
    }
  }

  /**
   * Converts a MoonTransaction object to an array of TransactionData objects.
   * @param tx The MoonTransaction object to convert.
   */
  public moonTransactionResponseToTransactions(
    tx: MoonTransaction
  ): TransactionData[] {
    return tx.transactions || [];
  }

  /**
   * Signs a transaction using the private key of the specified Ethereum account.
   * @param wallet The address of the Ethereum account to use for signing the transaction.
   * @param transaction The transaction to sign.
   */
  public async SignTransaction(
    wallet: string,
    transaction: InputBody
  ): Promise<string> {
    try {
      const response = await this.getAccountsSDK().signTransaction(
        wallet,
        transaction
      );
      const signedTransaction =
        response?.data?.transactions?.at(0)?.raw_transaction || '';
      this.emit('transactionSigned', signedTransaction);
      return signedTransaction;
    } catch (error) {
      this.emit('error', error);
      throw error;
    }
  }
  /**
   * Signs a message using the private key of the specified Ethereum account.
   * @param wallet The address of the Ethereum account to use for signing the message.
   * @param message The message to sign.
   */
  public async SignMessage(
    wallet: string,
    message: BytesLike
  ): Promise<string> {
    try {
      const hash = new Uint8Array(arrayify(hashMessage(message)));
      const response = await this.getAccountsSDK().signMessage(wallet, {
        data: hash.toString(),
        encoding: 'utf-8',
      });
      const signedMessage = response?.data?.signed_message || '';
      this.emit('messageSigned', signedMessage);
      return signedMessage;
    } catch (error) {
      this.emit('error', error);
      throw error;
    }
  }
  /**
   * Signs a typed data object using the private key of the specified Ethereum account.
   * @param wallet The address of the Ethereum account to use for signing the typed data object.
   * @param domain The typed data domain object.
   * @param types The typed data types object.
   * @param value The typed data value object.
   */
  public async SignTypedData(
    wallet: string,
    domain: TypedDataDomain,
    types: Record<string, Array<TypedDataField>>,
    value: Record<string, string>
  ): Promise<string> {
    try {
      const response = await this.getAccountsSDK().signTypedData(wallet, {
        data: JSON.stringify({
          domain,
          types,
          value,
        }),
      });
      const signedTypedData = response?.data?.signed_message || '';
      this.emit('typedDataSigned', signedTypedData);
      return signedTypedData;
    } catch (error) {
      this.emit('error', error);
      throw error;
    }
  }
  /**
   * Sends a signed transaction to the specified blockchain network.
   * @param wallet The address of the Ethereum account that signed the transaction.
   * @param rawTransaction The signed transaction to send.
   * @param chain_id The ID of the blockchain network to send the transaction to.
   */
  public async SendTransaction(
    wallet: string,
    rawTransaction: string,
    chain_id: string
  ): Promise<string> {
    try {
      const response = await this.getAccountsSDK().broadcastTx(wallet, {
        rawTransaction: rawTransaction,
        chainId: chain_id,
      });
      const transactionHash = response.data?.data || '';
      this.emit('transactionSent', transactionHash);
      return transactionHash;
    } catch (error) {
      this.emit('error', error);
      throw error;
    }
  }

  /**
   * Returns a list of supported blockchain networks.
   */
  public async getChains(): Promise<Chains[]> {
    try {
      const { data, error } = await this.MoonAPIClient.from('chains').select(
        '*'
      );
      if (error) {
        throw new Error(error.message);
      }
      this.emit('chainsFetched', data);
      return data as Chains[];
    } catch (error) {
      this.emit('error', error);
      throw error;
    }
  }

  /**
   * Returns information about a specific blockchain network based on its ID.
   * @param id The ID of the blockchain network to retrieve information about.
   */
  public async getChainById(id: string): Promise<Chains> {
    try {
      const { data, error } = await this.MoonAPIClient.from('chains')
        .select('*')
        .eq('chain_id', id);
      if (error) {
        throw new Error(error.message);
      }
      this.emit('chainFetched', data[0]);
      return data[0] as Chains;
    } catch (error) {
      this.emit('error', error);
      throw error;
    }
  }
  public async performDiscordOAuth() {
    if (!this.config || !this.config.clientId) {
      throw new Error('Configuration is missing or clientId is not specified');
    }
    const provider = 'discord';
    const uri = `https://beta.usemoon.ai/auth/oauth2/${provider}?clientId=${this.config.clientId}`;
    window.location.href = uri;
  }

  public async performDiscordOauthCodeExchange(code: string) {
    const provider = 'discord';
    // Ensure clientId is accessed correctly from this.config
    const uri = `https://beta.usemoon.ai/auth/oauth2/${provider}/${this.config.clientId}/token?code=${code}`;

    const response = await fetch(uri, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(
        `Server responded with ${response.status}: ${response.statusText}`
      );
    }

    const token = await response.json();
    await this.connect(token.access_token, token.refresh_token);
    return token;
  }
  public async performGithubOAuth() {
    if (!this.config || !this.config.clientId) {
      throw new Error('Configuration is missing or clientId is not specified');
    }

    const provider = 'github';
    // Correctly construct the URI with clientId as a query parameter
    const uri = `https://beta.usemoon.ai/auth/oauth2/${provider}?clientId=${this.config.clientId}`;
    window.location.href = uri;
  }

  public async performGithubOauthCodeExchange(code: string) {
    const provider = 'github';
    // Correctly use POST method and include code in the body, not in the URL
    const uri = `https://beta.usemoon.ai/auth/oauth2/${provider}/${this.config.clientId}/token?code=${code}`;
    const response = await fetch(uri, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(
        `Server responded with ${response.status}: ${response.statusText}`
      );
    }

    const token = await response.json();
    await this.connect(token.access_token, token.refresh_token);
    return token;
  }
  public async performGoogleOAuth() {
    if (!this.config || !this.config.clientId) {
      throw new Error('Configuration is missing or clientId is not specified');
    }

    const provider = 'google';
    // Correctly construct the URI with clientId as a query parameter, not as part of the path
    const uri = `https://beta.usemoon.ai/auth/oauth2/${provider}?clientId=${this.config.clientId}`;
    window.location.href = uri;
  }

  public async performGoogleOauthCodeExchange(code: string) {
    const provider = 'google';
    // Correctly use POST method and include code in the body, not in the URL
    const uri = `https://beta.usemoon.ai/auth/oauth2/${provider}/${this.config.clientId}/token?code=${code}`;
    const response = await fetch(uri, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(
        `Server responded with ${response.status}: ${response.statusText}`
      );
    }

    const token = await response.json();
    await this.connect(token.access_token, token.refresh_token);
    return token;
  }

  public async performTwitterOauth() {
    if (!this.config || !this.config.clientId) {
      throw new Error('Configuration is missing or clientId is not specified');
    }

    const provider = 'twitter';
    // Correctly construct the URI with clientId as a query parameter, not as part of the path
    const uri = `https://beta.usemoon.ai/auth/oauth2/${provider}?clientId=${this.config.clientId}`;
    window.location.href = uri;
  }

  public async performTwitterOauthCodeExchange(code: string) {
    const provider = 'twitter';
    // Use POST method and include code in the body instead of the URL
    const uri = `https://beta.usemoon.ai/auth/oauth2/${provider}/${this.config.clientId}/token?code=${code}`;
    const response = await fetch(uri, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(
        `Server responded with ${response.status}: ${response.statusText}`
      );
    }

    const token = await response.json();
    await this.connect(token.access_token, token.refresh_token);
    return token;
  }

  public async sendMagicLink(email: string, redirectTo: string) {
    const { error } = await this.getMoonAuth().auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: redirectTo,
      },
    });

    if (error) throw error;
  }
  // Email

  public async signUp(email: string, password: string) {
    const { error } = await this.getMoonAuth().auth.signUp({
      email,
      password,
    });
    if (error) {
      throw error;
    }
  }

  public async signInWithPassword(email: string, password: string) {
    const { error } = await this.getMoonAuth().auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      throw error;
    }
  }
  public async signInWithPhone(phone: string, password: string) {
    const { error } = await this.getMoonAuth().auth.signInWithPassword({
      phone,
      password,
    });
    if (error) {
      throw error;
    }
  }

  public async handlePassKeyLogin(
    email: string
  ): Promise<PublicKeyCredentialRequestOptionsJSON> {
    try {
      const res = await fetch('https://dash.usemoon.ai/api/webauthn/login', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) {
        throw new Error(
          `Server responded with ${res.status}: ${res.statusText}`
        );
      }
      const data = await res.json();
      if (!data.optionsAuth) {
        throw new Error('optionsAuth is missing in the response');
      }
      return data.optionsAuth;
    } catch (error) {
      console.error('Failed to handle passkey login:', error);
      throw error; // Rethrow the error after logging it
    }
  }

  public async handlePasskeyLoginVerify(
    email: string,
    credential: PublicKeyCredentialRequestOptionsJSON
  ) {
    try {
      const res = await fetch(
        'https://dash.usemoon.ai/api/webauthn/login/verify',
        {
          method: 'POST',
          body: JSON.stringify({
            credential, // Wrap the credential object correctly
            email, // Use email directly
          }),
          headers: { 'Content-Type': 'application/json' },
        }
      );
      if (!res.ok) {
        throw new Error(
          `Server responded with ${res.status}: ${res.statusText}`
        );
      }
      const response = await res.json();
      return response;
    } catch (error) {
      console.error('Error during passkey login verification:', error);
      throw error; // Proper error handling with try-catch
    }
  }

  public async handleRegister(
    email: string
  ): Promise<PublicKeyCredentialCreationOptionsJSON> {
    const response = await fetch(
      'https://dash.usemoon.ai/api/webauthn/register',
      {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    if (!response.ok) {
      // Check if the fetch request was successful
      throw new Error(
        `Server responded with ${response.status}: ${response.statusText}`
      );
    }

    const data = await response.json(); // Parse the JSON response
    if (!data.options) {
      // Ensure the expected data is present
      throw new Error('options is missing in the response');
    }

    return data.options;
  }

  public async handleRegisterVerify(
    email: string,
    credential: RegistrationResponseJSON,
    options: PublicKeyCredentialCreationOptionsJSON
  ) {
    const res = await fetch(
      'https://dash.usemoon.ai/api/webauthn/register/verify',
      {
        method: 'POST',
        body: JSON.stringify({
          ...credential,
          email: email,
          user: {
            ...options.user,
          },
        }),
        headers: { 'Content-Type': 'application/json' },
      }
    );
    if (!res.ok) {
      throw new Error(`Server responded with ${res.status}: ${res.statusText}`);
    }
    const response = await res.json();
    return response;
  }

  public async getSIWENonce(address: string): Promise<string> {
    const nonceResponse = await fetch(
      `https://beta.usemoon.ai/auth/ethereum/nonce`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address: address,
        }),
      }
    );

    const data = await nonceResponse.json();
    if (!data.user || data.user.length === 0) {
      throw new Error('User data is missing or empty');
    }

    if (!data.user[0].auth) {
      throw new Error('Auth data is missing');
    }

    return data.user[0].auth.genNonce;
  }
  public async verifySIWESignature(
    address: string,
    signedMessage: string,
    nonce: string,
    message: SiweMessage
  ): Promise<{ token: Session }> {
    try {
      const response = await fetch(
        `https://beta.usemoon.ai/auth/ethereum/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            address,
            signedMessage,
            nonce,
            message: message.prepareMessage(),
          }),
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || 'Unknown error occurred');
      }

      if (
        !responseData.token ||
        !responseData.token.accessToken ||
        !responseData.token.refreshToken
      ) {
        throw new Error('Invalid token data received');
      }

      await this.connect(
        responseData.token.accessToken,
        responseData.token.refreshToken
      );

      return responseData;
    } catch (error) {
      console.error('Error in verifySIWESignature:', error);
      throw error;
    }
  }

  /**
   * Creates an embedded account for a user.
   * @param email The email address of the user.
   * @param uuid A unique identifier for the user.
   * @param domain The domain associated with the embedded account.
   * @returns A Promise that resolves to a Session object.
   */
  public async embeddedAccount(
    email: string,
    uuid: string,
    domain: string
  ): Promise<Session> {
    // Get the current user session
    const token = await this.getUserSession();
    if (!token?.access_token) {
      throw new Error('User session token is missing or invalid');
    }

    try {
      // Make a POST request to create the embedded account
      const response = await fetch('https://beta.usemoon.ai/client', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.access_token}`,
        },
        body: JSON.stringify({
          name: email,
          metadata: {
            from: domain,
            user: uuid,
          },
        }),
      });

      // Check if the response is successful
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || `Server responded with ${response.status}`
        );
      }

      // Parse the response data
      const data = await response.json();
      if (!data.token) {
        throw new Error('Token data is missing in the response');
      }

      // Return the token as a Session object
      return data.token as Session;
    } catch (error) {
      // Log and rethrow any errors that occur
      console.error('Error in embeddedAccount:', error);
      throw error;
    }
  }
}
