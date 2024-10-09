import {
  TypedDataDomain,
  TypedDataField,
} from '@ethersproject/abstract-signer';
import { BytesLike } from '@ethersproject/bytes';
import * as MoonAPI from '@moonup/moon-api';
import {
  AuthenticationResponseJSON,
  PublicKeyCredentialCreationOptionsJSON,
  PublicKeyCredentialRequestOptionsJSON,
  RegistrationResponseJSON,
} from '@simplewebauthn/typescript-types';
import { createClient, Session, SupabaseClient } from '@supabase/supabase-js';
import { ethers } from 'ethers';
import { EventEmitter } from 'events';
import { SiweMessage } from 'siwe';

import { AuthenticationError, NetworkError } from './errors';
import { OAuth2Service } from './services';
import { AuthService } from './services/AuthService';
import { CacheService } from './services/CacheService';
import { ChainService } from './services/ChainService';
import { ConfigurationService } from './services/Configuration';
import { EventService } from './services/EventService';
import { MoonAPIService } from './services/MoonAPIService';
import { ProviderService } from './services/ProviderService';
import { SolanaService } from './services/SolanaService';
import { TransactionService } from './services/TransactionService';
import { Chains, MoonSDKConfig } from './types';

export class MoonSDK extends EventEmitter {
  public supabase: SupabaseClient;
  private configService: ConfigurationService;
  public auth: AuthService;
  public cache: CacheService;
  private chainService: ChainService;
  private eventService: EventService;
  private providerService: ProviderService;
  private transactionService: TransactionService;
  private moonAPIService: MoonAPIService;
  private solanaService: SolanaService;
  private oauth2Service: OAuth2Service;

  constructor(config?: MoonSDKConfig) {
    super();
    this.configService = new ConfigurationService(config);
    if (!this.configService.getConfig().authInstance) {
      this.supabase = createClient(
        this.configService.getConfig().supabaseUrl || '',
        this.configService.getConfig().supabaseKey || ''
      );
    } else {
      this.supabase = this.configService.getConfig()
        .authInstance as SupabaseClient;
    }
    this.cache = new CacheService(
      this.configService.getConfig().cacheOptions || {
        max: 1000,
        maxAge: 1000 * 60 * 60 * 24, // 24 hours
      }
    );
    this.chainService = new ChainService(this);
    this.eventService = new EventService();
    this.moonAPIService = new MoonAPIService(
      this,
      this.configService.getConfig().baseUrl
    );
    this.auth = new AuthService(this);
    this.providerService = new ProviderService(this);
    this.transactionService = new TransactionService(
      this,
      this.providerService
    );
    this.solanaService = new SolanaService(this.moonAPIService);
    this.oauth2Service = new OAuth2Service(
      this,
      this.configService.getConfig().clientId || ''
    );

    this.setupAuthListeners();
    this.setupChains();
  }
  public getConfig() {
    return this.configService.getConfig();
  }

  public updateConfig(config: Partial<MoonSDKConfig>) {
    this.configService.updateConfig(config);
  }

  public getProviderService(): ProviderService {
    return this.providerService;
  }
  private setupAuthListeners() {
    this.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case 'SIGNED_IN':
        case 'TOKEN_REFRESHED':
          this.auth.isAuthenticated = true;
          this.moonAPIService.setSecurityData(session?.access_token || '');
          this.eventService.emit('connected', session);
          break;
        case 'SIGNED_OUT':
          this.auth.isAuthenticated = false;
          this.moonAPIService.setSecurityData('');
          this.eventService.emit('disconnected');
          break;
      }
    });
  }
  public getSolanaService(): SolanaService {
    return this.solanaService;
  }

  public async setupChains() {
    await this.chainService.getChains();
  }
  async connect(accessToken?: string, refreshToken?: string): Promise<void> {
    try {
      await this.auth.connect(accessToken, refreshToken);
    } catch (error) {
      this.eventService.emit('error', { method: 'connect', error });
      if (error instanceof AuthenticationError) {
        throw error;
      } else {
        throw new AuthenticationError(`Failed to connect: ${error}`);
      }
    }
  }
  async getChains(): Promise<Chains[]> {
    return this.chainService.getChains();
  }

  public getChainService(): ChainService {
    return this.chainService;
  }
  async disconnect(): Promise<void> {
    try {
      await this.auth.logout();
    } catch (error) {
      this.eventService.emit('error', { method: 'disconnect', error });
      throw new AuthenticationError(`Failed to disconnect: ${error}`);
    }
  }

  async listAccounts(): Promise<string[]> {
    try {
      const accounts = await this.moonAPIService.listAccounts();
      this.eventService.emit('accountsListed', accounts);
      return accounts;
    } catch (error) {
      this.eventService.emit('error', { method: 'listAccounts', error });
      throw new NetworkError(`Failed to list accounts: ${error}`);
    }
  }

  async createAccount(): Promise<string> {
    try {
      const account = await this.moonAPIService.createAccount();
      this.eventService.emit('accountCreated', account);
      return account;
    } catch (error) {
      this.eventService.emit('error', { method: 'createAccount', error });
      throw new NetworkError(`Failed to create account: ${error}`);
    }
  }

  async signTransaction(wallet: string, transaction: any): Promise<string> {
    try {
      const signedTransaction = await this.moonAPIService.signTransaction(
        wallet,
        transaction
      );
      this.eventService.emit('transactionSigned', signedTransaction);
      return signedTransaction;
    } catch (error) {
      this.eventService.emit('error', { method: 'signTransaction', error });
      throw new NetworkError(`Failed to sign transaction: ${error}`);
    }
  }
  async signMessage(wallet: string, message: BytesLike): Promise<string> {
    try {
      const signedMessage = await this.moonAPIService
        .getAccountsSDK()
        .signMessage(wallet, { data: message.toString(), encoding: 'utf-8' });
      this.eventService.emit(
        'messageSigned',
        signedMessage.data?.signed_message
      );
      return signedMessage.data?.signed_message || '';
    } catch (error) {
      this.eventService.emit('error', { method: 'signMessage', error });
      throw new NetworkError(`Failed to sign message: ${error}`);
    }
  }

  async signTypedData(
    wallet: string,
    domain: TypedDataDomain,
    types: Record<string, Array<TypedDataField>>,
    value: Record<string, any>
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
        .signTypedData(wallet, { data });
      this.eventService.emit('typedDataSigned', response.data?.signature);
      return response.data?.signature || '';
    } catch (error) {
      this.eventService.emit('error', { method: 'signTypedData', error });
      throw new NetworkError(`Failed to sign typed data: ${error}`);
    }
  }

  async sendTransaction(
    wallet: string,
    rawTransaction: string,
    chainId: string
  ): Promise<string> {
    try {
      const transactionHash = await this.moonAPIService
        .getAccountsSDK()
        .broadcastTx(wallet, { rawTransaction, chainId });
      this.eventService.emit('transactionSent', transactionHash.data?.data);
      return transactionHash.data?.data || '';
    } catch (error) {
      this.eventService.emit('error', { method: 'sendTransaction', error });
      throw new NetworkError(`Failed to send transaction: ${error}`);
    }
  }

  getEthereumProvider(chainId: number) {
    return this.providerService.getEthereumProvider(chainId);
  }

  getSolanaProvider() {
    return this.providerService.getSolanaProvider();
  }

  async estimateGas(
    transaction: Partial<ethers.providers.TransactionRequest>
  ): Promise<ethers.BigNumber> {
    return this.transactionService.estimateGas(transaction);
  }

  async getGasPrice(): Promise<ethers.BigNumber> {
    return this.transactionService.getGasPrice();
  }

  watchTransaction(
    txHash: string,
    confirmations = 1
  ): Promise<ethers.providers.TransactionReceipt> {
    return this.transactionService.watchTransaction(txHash, confirmations);
  }

  async signInWithEmail(
    email: string,
    password: string
  ): Promise<Session | null> {
    return this.auth.signInWithEmail(email, password);
  }

  async signUpWithEmail(
    email: string,
    password: string
  ): Promise<Session | null> {
    return this.auth.signUpWithEmail(email, password);
  }

  async signInWithOAuth(
    provider: 'google' | 'github' | 'discord'
  ): Promise<void> {
    return this.auth.signInWithOAuth(provider);
  }

  async getSIWENonce(address: string): Promise<string> {
    return this.auth.getSIWENonce(address);
  }

  async verifySIWESignature(
    address: string,
    signedMessage: string,
    nonce: string,
    message: SiweMessage
  ): Promise<Session> {
    return this.auth.verifySIWESignature(
      address,
      signedMessage,
      nonce,
      message
    );
  }

  async getUserSession(): Promise<Session | null> {
    return this.auth.getUserSession();
  }

  setProvider(provider: 'moon' | 'metamask' | 'walletconnect') {
    this.getProviderService();
    this.eventService.emit('providerChanged', provider);
  }

  async switchChain(chainId: number): Promise<void> {
    try {
      const chain = await this.chainService.getChainById(chainId.toString());
      this.chainService.setSelectedChain(chain);
      if (this.getProviderService().getCurrentProvider() !== 'moon') {
        await (window as any).ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: `0x${chainId.toString(16)}` }],
        });
      }
      this.eventService.emit('chainSwitched', chain);
    } catch (error) {
      this.eventService.emit('error', {
        method: 'switchChain',
        error,
        chainId,
      });
      throw new NetworkError(`Failed to switch chain: ${error}`);
    }
  }
  async addToken(
    address: string,
    symbol: string,
    decimals: number,
    image?: string
  ): Promise<boolean> {
    try {
      await (window as any).ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: { address, symbol, decimals, image },
        },
      });
      this.eventService.emit('tokenAdded', {
        address,
        symbol,
        decimals,
        image,
      });
      return true;
    } catch (error) {
      this.eventService.emit('error', {
        method: 'addToken',
        error,
        address,
        symbol,
        decimals,
        image,
      });
      return false;
    }
  }

  async getENSName(address: string): Promise<string | null> {
    try {
      const provider = await this.getEthereumProvider(
        this.chainService.getSelectedChain()?.chain_id || 1
      );
      const ensName = await provider.lookupAddress(address);
      this.eventService.emit('ensNameFetched', { address, ensName });
      return ensName;
    } catch (error) {
      this.eventService.emit('error', { method: 'getENSName', error, address });
      throw new NetworkError(`Failed to fetch ENS name: ${error}`);
    }
  }

  async resolveENSName(ensName: string): Promise<string | null> {
    try {
      const provider = await this.getEthereumProvider(
        this.chainService.getSelectedChain()?.chain_id || 1
      );
      const address = await provider.resolveName(ensName);
      this.eventService.emit('ensNameResolved', { ensName, address });
      return address;
    } catch (error) {
      this.eventService.emit('error', {
        method: 'resolveENSName',
        error,
        ensName,
      });
      throw new NetworkError(`Failed to resolve ENS name: ${error}`);
    }
  }
  async performDiscordOAuth(): Promise<void> {
    return this.oauth2Service.initiateOAuth('discord');
  }

  async performDiscordOauthCodeExchange(code: string): Promise<any> {
    return this.oauth2Service.exchangeCodeForToken('discord', code);
  }

  async performGithubOAuth(): Promise<void> {
    return this.oauth2Service.initiateOAuth('github');
  }

  async performGithubOauthCodeExchange(code: string): Promise<any> {
    return this.oauth2Service.exchangeCodeForToken('github', code);
  }

  async performGoogleOAuth(): Promise<void> {
    return this.oauth2Service.initiateOAuth('google');
  }

  async performGoogleOauthCodeExchange(code: string): Promise<any> {
    return this.oauth2Service.exchangeCodeForToken('google', code);
  }

  async performTwitterOauth(): Promise<void> {
    return this.oauth2Service.initiateOAuth('twitter');
  }

  async performTwitterOauthCodeExchange(code: string): Promise<any> {
    return this.oauth2Service.exchangeCodeForToken('twitter', code);
  }

  async sendMagicLink(email: string, redirectTo: string): Promise<void> {
    return this.auth.sendMagicLink(email, redirectTo);
  }

  async signUp(email: string, password: string): Promise<Session | null> {
    return this.auth.signUpWithEmail(email, password);
  }

  async signInWithPassword(
    email: string,
    password: string
  ): Promise<Session | null> {
    return this.auth.signInWithEmail(email, password);
  }

  async signInWithPhone(phone: string, password: string): Promise<void> {
    return;
  }
  async handlePassKeyLogin(
    email: string
  ): Promise<PublicKeyCredentialRequestOptionsJSON> {
    return this.auth.initiatePasskeyLogin(email);
  }

  async handlePasskeyLoginVerify(
    email: string,
    credential: AuthenticationResponseJSON
  ): Promise<Session> {
    return this.auth.completePasskeyLogin(email, credential);
  }

  async handleRegister(
    email: string
  ): Promise<PublicKeyCredentialCreationOptionsJSON> {
    return this.auth.initiatePasskeyRegistration(email);
  }

  async handleRegisterVerify(
    email: string,
    credential: RegistrationResponseJSON,
    options: PublicKeyCredentialCreationOptionsJSON
  ): Promise<void> {
    return this.auth.completePasskeyRegistration(email, credential, options);
  }

  async embeddedAccount(
    email: string,
    uuid: string,
    domain: string
  ): Promise<Session> {
    return this.auth.createEmbeddedAccount(email, uuid, domain);
  }

  public getSolanaSDK(): MoonAPI.Solana {
    return this.moonAPIService.getSolanaSDK();
  }

  public getBitcoinSDK(): MoonAPI.Bitcoin {
    return this.moonAPIService.getBitcoinSDK();
  }

  public getCosmosSDK(): MoonAPI.Cosmos {
    return this.moonAPIService.getCosmosSDK();
  }

  public getEosSDK(): MoonAPI.Eos {
    return this.moonAPIService.getEosSDK();
  }

  public getLitecoinSDK(): MoonAPI.Litecoin {
    return this.moonAPIService.getLitecoinSDK();
  }

  public getRippleSDK(): MoonAPI.Ripple {
    return this.moonAPIService.getRippleSDK();
  }

  public getTronSDK(): MoonAPI.Tron {
    return this.moonAPIService.getTronSDK();
  }

  public getBitcoincashSDK(): MoonAPI.Bitcoincash {
    return this.moonAPIService.getBitcoincashSDK();
  }

  public getDogecoinSDK(): MoonAPI.Dogecoin {
    return this.moonAPIService.getDogecoinSDK();
  }

  public getAccountsSDK(): MoonAPI.Accounts {
    return this.moonAPIService.getAccountsSDK();
  }

  public getENSSDK(): MoonAPI.Ens {
    return this.moonAPIService.getENSSDK();
  }

  public getErc20SDK(): MoonAPI.Erc20 {
    return this.moonAPIService.getErc20SDK();
  }

  public getErc1155SDK(): MoonAPI.Erc1155 {
    return this.moonAPIService.getErc1155SDK();
  }

  public getErc721SDK(): MoonAPI.Erc721 {
    return this.moonAPIService.getErc721SDK();
  }

  public getErc4626SDK(): MoonAPI.Erc4626 {
    return this.moonAPIService.getErc4626SDK();
  }

  public getLendingPoolSDK(): MoonAPI.LendingPool {
    return this.moonAPIService.getLendingPoolSDK();
  }

  public getLeveragerSDK(): MoonAPI.Leverager {
    return this.moonAPIService.getLeveragerSDK();
  }

  public getLifiSDK(): MoonAPI.Lifi {
    return this.moonAPIService.getLifiSDK();
  }

  public getOdosSDK(): MoonAPI.Odos {
    return this.moonAPIService.getOdosSDK();
  }

  public getOnramperSDK(): MoonAPI.Onramper {
    return this.moonAPIService.getOnramperSDK();
  }

  public getThorswapSDK(): MoonAPI.Thorswap {
    return this.moonAPIService.getThorswapSDK();
  }

  public getAaveSDK(): MoonAPI.Aave {
    return this.moonAPIService.getAaveSDK();
  }

  public getMultiCallSDK(): MoonAPI.Multicall {
    return this.moonAPIService.getMultiCallSDK();
  }

  public getDataSDK(): MoonAPI.Data {
    return this.moonAPIService.getDataSDK();
  }

  public getThenaSDK(): MoonAPI.Thena {
    return this.moonAPIService.getThenaSDK();
  }

  public getJupiterSDK(): MoonAPI.Jupiter {
    return this.moonAPIService.getJupiterSDK();
  }

  public getUniswapSDK(): MoonAPI.Uniswap {
    return this.moonAPIService.getUniswapSDK();
  }

  public getRamsesSDK(): MoonAPI.Ramses {
    return this.moonAPIService.getRamsesSDK();
  }

  public getPolymarketSDK(): MoonAPI.Polymarket {
    return this.moonAPIService.getPolymarketSDK();
  }

  public getLynexSDK(): MoonAPI.Lynex {
    return this.moonAPIService.getLynexSDK();
  }
  // Solana-specific methods
  async getSolanaBalance(address: string): Promise<string> {
    return this.solanaService.getBalance(address);
  }

  // Event listener methods
  on(event: string, listener: (...args: any[]) => void): this {
    this.eventService.on(event, listener);
    return this;
  }

  off(event: string, listener: (...args: any[]) => void): this {
    this.eventService.off(event, listener);
    return this;
  }

  once(event: string, listener: (...args: any[]) => void): this {
    this.eventService.once(event, listener);
    return this;
  }
}
