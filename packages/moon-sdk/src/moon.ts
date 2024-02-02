import {
  TypedDataDomain,
  TypedDataField,
} from '@ethersproject/abstract-signer';
import { BytesLike, arrayify } from '@ethersproject/bytes';
import { hashMessage } from '@ethersproject/hash';
import {
  Aave,
  AccountResponse,
  Accounts,
  ApiConfig,
  Auth,
  Bitcoin,
  Bitcoincash,
  BroadCastRawTransactionResponse,
  ContentType,
  Conveyorfinance,
  Cosmos,
  Dogecoin,
  Ens,
  Eos,
  Erc1155,
  Erc20,
  Erc4337,
  Erc721,
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

export class MoonSDK {
  private AccountsSDK: Accounts;
  private AaveSDK: Aave;
  private ConveyorfinanceSDK: Conveyorfinance;
  private ENSSDK: Ens;
  private Erc20SDK: Erc20;
  private Erc1155SDK: Erc1155;
  private Erc721SDK: Erc721;
  private Erc4337SDK: Erc4337;
  private OneinchSDK: Oneinch;
  private UniswapSDK: Uniswap;
  private YearnSDK: Yearn;
  private AuthSDK: Auth;
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
    this.AccountsSDK = new Accounts(baseApiParams);

    this.AuthSDK = new Auth(baseApiParams);

    this.AaveSDK = new Aave(baseApiParams);

    this.ENSSDK = new Ens(baseApiParams);

    this.Erc20SDK = new Erc20(baseApiParams);

    this.Erc1155SDK = new Erc1155(baseApiParams);

    this.Erc721SDK = new Erc721(baseApiParams);

    this.Erc4337SDK = new Erc4337(baseApiParams);

    this.OneinchSDK = new Oneinch(baseApiParams);

    this.UniswapSDK = new Uniswap(baseApiParams);

    this.YearnSDK = new Yearn(baseApiParams);

    this.ConveyorfinanceSDK = new Conveyorfinance(baseApiParams);

    this.BitcoinSDK = new Bitcoin(baseApiParams);

    this.BitcoincashSDK = new Bitcoincash(baseApiParams);

    this.DogecoinSDK = new Dogecoin(baseApiParams);

    this.SolanaSDK = new Solana(baseApiParams);
    this.CosmosSDK = new Cosmos(baseApiParams);

    this.EosSDK = new Eos(baseApiParams);

    this.LitecoinSDK = new Litecoin(baseApiParams);

    this.RippleSDK = new Ripple(baseApiParams);

    this.TronSDK = new Tron(baseApiParams);
    this.MoonAPIClient = createClient('https://api.usemoon.ai', '', {});
    this.MoonAPIClient.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        this.updateToken(session?.access_token || '');
      }
      if (event === 'TOKEN_REFRESHED') {
        this.updateToken(session?.access_token || '');
      }
      if (event === 'SIGNED_OUT') {
        this.updateToken('');
      }
    });
  }
  public async getUserSession() {
    return await this.MoonAPIClient.auth.getSession();
  }
  public async setAccessToken(token: string, refreshToken: string) {
    this.updateToken(token);
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

  public getAuthSDK(): Auth {
    return this.AuthSDK;
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

  public getErc4337SDK(): Erc4337 {
    return this.Erc4337SDK;
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

  public updateToken(token: string) {
    this.BitcoinSDK.setSecurityData({
      token: token,
    });
    this.AccountsSDK.setSecurityData({
      token: token,
    });
    this.AaveSDK.setSecurityData({
      token: token,
    });
    this.ConveyorfinanceSDK.setSecurityData({
      token: token,
    });
    this.ENSSDK.setSecurityData({
      token: token,
    });
    this.Erc20SDK.setSecurityData({
      token: token,
    });
    this.Erc1155SDK.setSecurityData({
      token: token,
    });
    this.Erc721SDK.setSecurityData({
      token: token,
    });
    this.Erc4337SDK.setSecurityData({
      token: token,
    });
    this.OneinchSDK.setSecurityData({
      token: token,
    });
    this.UniswapSDK.setSecurityData({
      token: token,
    });
    this.SolanaSDK.setSecurityData({
      token: token,
    });

    this.CosmosSDK.setSecurityData({
      token: token,
    });

    this.EosSDK.setSecurityData({
      token: token,
    });

    this.LitecoinSDK.setSecurityData({
      token: token,
    });

    this.RippleSDK.setSecurityData({
      token: token,
    });

    this.TronSDK.setSecurityData({
      token: token,
    });

    this.BitcoincashSDK.setSecurityData({
      token: token,
    });

    this.DogecoinSDK.setSecurityData({
      token: token,
    });
  }

  public async listAccounts(): Promise<AccountResponse> {
    const response = await this.getAccountsSDK().listAccounts();
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.data as AccountResponse;
  }
  public async createAccount(): Promise<AccountResponse> {
    const response = await this.getAccountsSDK().createAccount({});
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.data as AccountResponse;
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
    const response = await this.getAccountsSDK()
      .signTransaction(wallet, transaction)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const transactions = this.moonTransactionResponseToTransactions(
          res.data.data as MoonTransaction
        );
        const rawTransaction = transactions?.at(0)?.raw_transaction;
        return rawTransaction as string;
      });
    return response || '';
  }

  public async SignMessage(
    wallet: string,
    message: BytesLike
  ): Promise<string> {
    const hash = new Uint8Array(arrayify(hashMessage(message)));
    const response = await this.getAccountsSDK()
      .signMessage(wallet, {
        data: hash.toString(),
        encoding: 'utf-8',
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.data.data as TransactionData;
      });
    return response.signed_message || '';
  }

  public async SignTypedData(
    wallet: string,
    domain: TypedDataDomain,
    types: Record<string, Array<TypedDataField>>,
    value: Record<string, string>
  ): Promise<string> {
    const response = await this.getAccountsSDK()
      .signTypedData(wallet, {
        data: JSON.stringify({
          domain,
          types,
          value,
        }),
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.data.data as TransactionData;
      });
    return response.signed_message || '';
  }

  public async SendTransaction(
    wallet: string,
    rawTransaction: string,
    chain_id: string
  ): Promise<BroadCastRawTransactionResponse> {
    const response = await this.getAccountsSDK().broadcastTx(wallet, {
      rawTransaction: rawTransaction,
      chainId: chain_id,
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.data.data as BroadCastRawTransactionResponse;
  }
}
