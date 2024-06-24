import {
  TypedDataDomain,
  TypedDataField,
} from '@ethersproject/abstract-signer';
import { BytesLike, arrayify } from '@ethersproject/bytes';
import { hashMessage } from '@ethersproject/hash';
import {
  Aave,
  Accounts,
  ApiConfig,
  Bitcoin,
  Bitcoincash,
  ContentType,
  Conveyorfinance,
  Cosmos,
  Dogecoin,
  Ens,
  Eos,
  Erc1155,
  Erc20,
  Erc721,
  HttpClient,
  InputBody,
  Litecoin,
  Transaction as MoonTransaction,
  Oneinch,
  Ripple,
  Solana,
  TransactionData,
  Tron,
  Uniswap,
  Yearn,
} from '@moonup/moon-api';
import {
  startAuthentication,
  startRegistration,
} from '@simplewebauthn/browser';
import { Session, SupabaseClient, createClient } from '@supabase/supabase-js';
import { EventEmitter } from 'events';
import { SiweMessage } from 'siwe';

import { Chains } from './types';

/**
 * Configuration options for the MoonSDK class.
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

/**
 * A class that provides an interface to interact with various blockchain networks and services using the Moon API.
 */
export class MoonSDK extends EventEmitter {
  private AccountsSDK: Accounts;
  private AaveSDK: Aave;
  private ConveyorfinanceSDK: Conveyorfinance;
  private ENSSDK: Ens;
  private Erc20SDK: Erc20;
  private Erc1155SDK: Erc1155;
  private Erc721SDK: Erc721;
  private OneinchSDK: Oneinch;
  private UniswapSDK: Uniswap;
  private YearnSDK: Yearn;
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

    this.AaveSDK = new Aave(this.http);

    this.ENSSDK = new Ens(this.http);

    this.Erc20SDK = new Erc20(this.http);

    this.Erc1155SDK = new Erc1155(this.http);

    this.Erc721SDK = new Erc721(this.http);

    this.OneinchSDK = new Oneinch(this.http);

    this.UniswapSDK = new Uniswap(this.http);

    this.YearnSDK = new Yearn(this.http);

    this.ConveyorfinanceSDK = new Conveyorfinance(this.http);

    this.BitcoinSDK = new Bitcoin(this.http);

    this.BitcoincashSDK = new Bitcoincash(this.http);

    this.DogecoinSDK = new Dogecoin(this.http);

    this.SolanaSDK = new Solana(this.http);
    this.CosmosSDK = new Cosmos(this.http);

    this.EosSDK = new Eos(this.http);

    this.LitecoinSDK = new Litecoin(this.http);

    this.RippleSDK = new Ripple(this.http);

    this.TronSDK = new Tron(this.http);

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

  public getAaveSDK(): Aave {
    return this.AaveSDK;
  }

  public getConveyorfinanceSDK(): Conveyorfinance {
    return this.ConveyorfinanceSDK;
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

  public getOneinchSDK(): Oneinch {
    return this.OneinchSDK;
  }

  public getUniswapSDK(): Uniswap {
    return this.UniswapSDK;
  }

  public getYearnSDK(): Yearn {
    return this.YearnSDK;
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
    // const response = await this.getAccountsSDK().createAccount({});
    // return response.data?.data.address || '';
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
  moonTransactionResponseToTransactions(
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
    // const response = await this.getAccountsSDK().signTransaction(
    //   wallet,
    //   transaction
    // );
    // return response?.data?.transactions?.at(0)?.raw_transaction || '';
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
    if (!this.config) {
      throw new Error('needs config');
    }
    if (!this.config.clientId) {
      throw new Error('needs clientId');
    }

    const provider = 'discord';
    const uri = `https://beta.usemoon.ai/auth/oauth2/${provider}/${this.config.clientId}`;
    window.location.href = uri;
  }

  public async performDiscordOauthCodeExchange(code: string) {
    const provider = 'discord';
    const uri = `https://beta.usemoon.ai/auth/oauth2/${provider}/${this.config.clientId}/token?code=${code}`;
    const response = await fetch(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { token } = await response.json();
    await this.connect(token.access_token, token.refresh_token);
    return token;
  }
  public async performGithubOAuth() {
    if (!this.config) {
      throw new Error('needs config');
    }
    if (!this.config.clientId) {
      throw new Error('needs clientId');
    }

    const provider = 'github';
    const uri = `https://beta.usemoon.ai/auth/oauth2/${provider}/${this.config.clientId}`;
    window.location.href = uri;
  }

  public async performGithubOauthCodeExchange(code: string) {
    const provider = 'github';
    const uri = `https://beta.usemoon.ai/auth/oauth2/${provider}/${this.config.clientId}/token?code=${code}`;
    const response = await fetch(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { token } = await response.json();
    await this.connect(token.access_token, token.refresh_token);
    return token;
  }
  public async performGoogleOAuth() {
    if (!this.config) {
      throw new Error('needs config');
    }
    if (!this.config.clientId) {
      throw new Error('needs clientId');
    }

    const provider = 'google';
    const uri = `https://beta.usemoon.ai/auth/oauth2/${provider}/${this.config.clientId}`;
    window.location.href = uri;
  }

  public async performGoogleOauthCodeExchange(code: string) {
    const provider = 'google';
    const uri = `https://beta.usemoon.ai/auth/oauth2/${provider}/${this.config.clientId}/token?code=${code}`;
    const response = await fetch(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { token } = await response.json();
    await this.connect(token.access_token, token.refresh_token);
    return token;
  }

  public async performTwitterOauth() {
    if (!this.config) {
      throw new Error('needs config');
    }
    if (!this.config.clientId) {
      throw new Error('needs clientId');
    }

    const provider = 'twitter';
    const uri = `https://beta.usemoon.ai/auth/oauth2/${provider}/${this.config.clientId}`;
    window.location.href = uri;
  }

  public async performTwitterOauthCodeExchange(code: string) {
    const provider = 'twitter';
    const uri = `https://beta.usemoon.ai/auth/oauth2/${provider}/${this.config.clientId}/token?code=${code}`;
    const response = await fetch(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { token } = await response.json();
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
  public async singInWithPhone(phone: string, password: string) {
    const { error } = await this.getMoonAuth().auth.signInWithPassword({
      phone,
      password,
    });
    if (error) {
      throw error;
    }
  }

  public async handlePassKeyLogin(email: string) {
    const publicKey = await fetch(
      'https://dash.usemoon.ai/api/webauthn/login',
      {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      }
    ).then((res) => res.json());

    const credential = await startAuthentication(publicKey.optionsAuth);

    await fetch('https://dash.usemoon.ai/api/webauthn/login/verify', {
      method: 'POST',
      body: JSON.stringify({
        ...credential,
        username: email,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  }

  handleRegister = async (email: string) => {
    const publicKey = await fetch(
      'https://dash.usemoon.ai/api/webauthn/register',
      {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      }
    ).then((res) => res.json());

    const credential = await startRegistration(publicKey.options);

    await fetch('https://dash.usemoon.ai/api/webauthn/register/verify', {
      method: 'POST',
      body: JSON.stringify({
        ...credential,
        email: email,
        user: {
          ...publicKey.options.user,
        },
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  };

  public async getSIWENonce(address: string) {
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

    const {
      user: [user],
    } = await nonceResponse.json();
    return user;
  }

  public async verifySIWESignature(
    address: string,
    signedMessage: string,
    user: any,
    message: SiweMessage
  ) {
    const response = await fetch(
      `https://beta.usemoon.ai/auth/ethereum/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address: address,
          signedMessage: signedMessage,
          nonce: user.auth.genNonce,
          message: message.prepareMessage(),
        }),
      }
    ).then((res) => res.json());
    if (response.error) {
      throw new Error(response.error);
    }

    this.connect(response.accessToken, response.refreshToken);

    return response;
  }

  public async embeddedAccount(email: string, uuid: string, domain: string) {
    const token = await this.getUserSession();
    const response = await fetch(
      `https://beta.usemoon.ai/auth/embedded/account`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token?.access_token}`,
        },
        body: JSON.stringify({
          name: email,
          metadata: {
            from: domain,
            user: uuid,
          },
        }),
      }
    ).then((res) => res.json());
    if (response.error) {
      throw new Error(response.error);
    }
    return response;
  }
}
