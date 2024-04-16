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
import { SupabaseClient, createClient } from '@supabase/supabase-js';

import { Chains } from './types';

export class MoonSDK {
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

  constructor() {
    const baseApiParams: ApiConfig = {
      baseUrl:
        'https://moon-vault-api-git-ew-supabase-migration-moonup.vercel.app',
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
    this.MoonAPIClient = createClient(
      'https://api.usemoon.ai',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogImFub24iLAogICJpc3MiOiAic3VwYWJhc2UiLAogICJpYXQiOiAxNzEwNzIwMDAwLAogICJleHAiOiAxODY4NDg2NDAwCn0.am_Q1cqJ025FU-yEDXk5VDqv30DbOxw2hHb51YwRuaQ',
      {}
    );
    this.connect();
  }
  public async connect() {
    this.MoonAPIClient.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        this.setAccessToken(
          session?.access_token || '',
          session?.refresh_token || ''
        );
        this.isAuthenticated = true;
      }
      if (event === 'TOKEN_REFRESHED') {
        this.setAccessToken(
          session?.access_token || '',
          session?.refresh_token || ''
        );
        this.isAuthenticated = true;
      }
      if (event === 'SIGNED_OUT') {
        this.http.setSecurityData({
          token: '',
        });
        this.isAuthenticated = false;
      }
    });

    const { data, error } = await this.MoonAPIClient.auth.getSession();
    if (data) {
      this.setAccessToken(
        data.session?.access_token || '',
        data.session?.refresh_token || ''
      );
      this.isAuthenticated = true;
    }
    if (error) {
      this.isAuthenticated = false;
    }
  }
  public async disconnect() {
    this.MoonAPIClient.auth.signOut();
    this.isAuthenticated = false;

    this.http.setSecurityData({
      token: '',
    });
  }

  public async getUserSession() {
    return await this.MoonAPIClient.auth.getSession();
  }
  public async setAccessToken(token: string, refreshToken: string) {
    this.http.setSecurityData({
      token: token,
    });
    return await this.MoonAPIClient.auth.setSession({
      access_token: token,
      refresh_token: refreshToken,
    });
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

  public async listAccounts(): Promise<string[]> {
    const response = await this.getAccountsSDK().listAccounts();
    return response.data?.data.keys || [];
  }
  public async createAccount(): Promise<string> {
    const response = await this.getAccountsSDK().createAccount({});
    return response.data?.data.address || '';
  }

  moonTransactionResponseToTransactions(
    tx: MoonTransaction
  ): TransactionData[] {
    return tx.transactions || [];
  }

  public async SignTransaction(
    wallet: string,
    transaction: InputBody
  ): Promise<string> {
    const response = await this.getAccountsSDK().signTransaction(
      wallet,
      transaction
    );
    return response?.data?.transactions?.at(0)?.raw_transaction || '';
  }

  public async SignMessage(
    wallet: string,
    message: BytesLike
  ): Promise<string> {
    const hash = new Uint8Array(arrayify(hashMessage(message)));
    const response = await this.getAccountsSDK().signMessage(wallet, {
      data: hash.toString(),
      encoding: 'utf-8',
    });
    return response?.data?.signed_message || '';
  }

  public async SignTypedData(
    wallet: string,
    domain: TypedDataDomain,
    types: Record<string, Array<TypedDataField>>,
    value: Record<string, string>
  ): Promise<string> {
    const response = await this.getAccountsSDK().signTypedData(wallet, {
      data: JSON.stringify({
        domain,
        types,
        value,
      }),
    });
    return response?.data?.signed_message || '';
  }

  public async SendTransaction(
    wallet: string,
    rawTransaction: string,
    chain_id: string
  ): Promise<string> {
    const response = await this.getAccountsSDK().broadcastTx(wallet, {
      rawTransaction: rawTransaction,
      chainId: chain_id,
    });
    return response.data?.data || '';
  }

  public async getChains(): Promise<Chains[]> {
    const { data, error } = await this.MoonAPIClient.from('chains').select('*');
    if (error) {
      throw new Error(error.message);
    }
    return data as Chains[];
  }
  public async getChainById(id: string): Promise<Chains> {
    const { data, error } = await this.MoonAPIClient.from('chains')
      .select('*')
      .eq('chain_id', id);

    if (error) {
      throw new Error(error.message);
    }
    return data[0] as Chains;
  }
}
