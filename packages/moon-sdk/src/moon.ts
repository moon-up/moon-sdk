import {
  TypedDataDomain,
  TypedDataField,
} from '@ethersproject/abstract-signer';
import { BigNumber } from '@ethersproject/bignumber';
import { BytesLike, arrayify } from '@ethersproject/bytes';
import { hashMessage } from '@ethersproject/hash';
import { JsonRpcProvider, TransactionResponse } from '@ethersproject/providers';
import {
  Aave,
  AccountControllerResponse,
  AccountResponse,
  Accounts,
  Auth,
  BroadCastRawTransactionResponse,
  ContentType,
  Conveyorfinance,
  Ens,
  Erc1155,
  Erc20,
  Erc4337,
  Erc721,
  InputBody,
  Oneinch,
  RefreshTokenResponse,
  Transaction,
  Uniswap,
  Yearn,
} from '@moonup/moon-api';
import {
  Chain,
  MOON_SUPPORTED_NETWORKS,
  MoonAccount,
  MoonConfig,
  MoonSDKConfig,
  MoonStorage,
} from '@moonup/moon-types';
import { useAuth } from './auth';
import { MoonMessageHandler } from './messages';
import { IframeController } from './viewController';

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
  MoonProvider: JsonRpcProvider | undefined;
  MoonSDKConfig: MoonSDKConfig;
  MoonAccount: MoonAccount;
  MoonMessageHandler: MoonMessageHandler;
  MoonIframe: IframeController | undefined;

  constructor(config: MoonConfig) {
    this.MoonSDKConfig = this.initialiseConfig(config);

    this.MoonAccount = new MoonAccount(this.MoonSDKConfig.Storage);
    this.MoonMessageHandler = new MoonMessageHandler();
    this.AccountsSDK = new Accounts({
      baseUrl: 'https://vault-api.usemoon.ai',
      baseApiParams: {
        secure: true,
        type: ContentType.Json,
        format: 'json',
      },
      securityWorker: this.MoonSDKConfig.Auth.securityWorker,
    });
    this.AuthSDK = new Auth({
      baseUrl: 'https://vault-api.usemoon.ai',
      baseApiParams: {
        secure: true,
        type: ContentType.Json,
        format: 'json',
      },
      securityWorker: this.MoonSDKConfig.Auth.securityWorker,
    });

    this.AaveSDK = new Aave({
      baseUrl: 'https://vault-api.usemoon.ai',
      baseApiParams: {
        secure: true,
        type: ContentType.Json,
        format: 'json',
      },
      securityWorker: this.MoonSDKConfig.Auth.securityWorker,
    });

    this.ENSSDK = new Ens({
      baseUrl: 'https://vault-api.usemoon.ai',
      baseApiParams: {
        secure: true,
        type: ContentType.Json,
        format: 'json',
      },
      securityWorker: this.MoonSDKConfig.Auth.securityWorker,
    });

    this.Erc20SDK = new Erc20({
      baseUrl: 'https://vault-api.usemoon.ai',
      baseApiParams: {
        secure: true,
        type: ContentType.Json,
        format: 'json',
      },
      securityWorker: this.MoonSDKConfig.Auth.securityWorker,
    });

    this.Erc1155SDK = new Erc1155({
      baseUrl: 'https://vault-api.usemoon.ai',
      baseApiParams: {
        secure: true,
        type: ContentType.Json,
        format: 'json',
      },
      securityWorker: this.MoonSDKConfig.Auth.securityWorker,
    });

    this.Erc721SDK = new Erc721({
      baseUrl: 'https://vault-api.usemoon.ai',
      baseApiParams: {
        secure: true,
        type: ContentType.Json,
        format: 'json',
      },
      securityWorker: this.MoonSDKConfig.Auth.securityWorker,
    });

    this.Erc4337SDK = new Erc4337({
      baseUrl: 'https://vault-api.usemoon.ai',
      baseApiParams: {
        secure: true,
        type: ContentType.Json,
        format: 'json',
      },
      securityWorker: this.MoonSDKConfig.Auth.securityWorker,
    });

    this.OneinchSDK = new Oneinch({
      baseUrl: 'https://vault-api.usemoon.ai',
      baseApiParams: {
        secure: true,
        type: ContentType.Json,
        format: 'json',
      },
      securityWorker: this.MoonSDKConfig.Auth.securityWorker,
    });

    this.UniswapSDK = new Uniswap({
      baseUrl: 'https://vault-api.usemoon.ai',
      baseApiParams: {
        secure: true,
        type: ContentType.Json,
        format: 'json',
      },
      securityWorker: this.MoonSDKConfig.Auth.securityWorker,
    });

    this.YearnSDK = new Yearn({
      baseUrl: 'https://vault-api.usemoon.ai',
      baseApiParams: {
        secure: true,
        type: ContentType.Json,
        format: 'json',
      },
      securityWorker: this.MoonSDKConfig.Auth.securityWorker,
    });

    this.ConveyorfinanceSDK = new Conveyorfinance({
      baseUrl: 'https://vault-api.usemoon.ai',
      baseApiParams: {
        secure: true,
        type: ContentType.Json,
        format: 'json',
      },
      securityWorker: this.MoonSDKConfig.Auth.securityWorker,
    });
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
    this.YearnSDK.setSecurityData({
      token: this.MoonAccount.getToken(),
    });
    return this.YearnSDK;
  }
  public getMoonAccount(): MoonAccount {
    return this.MoonAccount;
  }

  public updateRefreshToken(refreshToken: string) {
    this.MoonAccount.setRefreshToken(refreshToken);
  }

  public updateToken(token: string) {
    this.MoonAccount.setToken(token);
    this.AuthSDK.setSecurityData({
      token: this.MoonAccount.getToken(),
    });
    this.AccountsSDK.setSecurityData({
      token: this.MoonAccount.getToken(),
    });
    this.AaveSDK.setSecurityData({
      token: this.MoonAccount.getToken(),
    });
    this.ConveyorfinanceSDK.setSecurityData({
      token: this.MoonAccount.getToken(),
    });
    this.ENSSDK.setSecurityData({
      token: this.MoonAccount.getToken(),
    });
    this.Erc20SDK.setSecurityData({
      token: this.MoonAccount.getToken(),
    });
    this.Erc1155SDK.setSecurityData({
      token: this.MoonAccount.getToken(),
    });
    this.Erc721SDK.setSecurityData({
      token: this.MoonAccount.getToken(),
    });
    this.Erc4337SDK.setSecurityData({
      token: this.MoonAccount.getToken(),
    });
    this.OneinchSDK.setSecurityData({
      token: this.MoonAccount.getToken(),
    });
    this.UniswapSDK.setSecurityData({
      token: this.MoonAccount.getToken(),
    });
  }

  public async refreshAccount(token: string): Promise<RefreshTokenResponse> {
    const response = await this.getAuthSDK().refreshToken({
      refreshToken: token,
    });
    return response.data;
  }

  public async listAccounts(): Promise<AccountResponse> {
    const response = await this.getAccountsSDK().listAccounts();
    return response.data as AccountResponse;
  }
  transactionRequestToInputBody(tx: TransactionResponse): InputBody {
    return {
      chain_id: BigNumber.from(tx.chainId).toString(),
      data: tx.data,
      to: tx.to,
      gasPrice: BigNumber.from(tx.gasPrice).toString(),
      gas: BigNumber.from(tx.gasLimit).toString(),
      nonce: BigNumber.from(tx.nonce).toString(),
      value: tx.value && BigNumber.from(tx.value).toString(),
      encoding: 'other',
    };
  }

  public async SignTransaction(
    transaction: TransactionResponse
  ): Promise<Transaction> {
    const response = await this.getAccountsSDK().signTransaction(
      this.MoonAccount.getWallet(),
      this.transactionRequestToInputBody(transaction)
    );
    return response.data as Transaction;
  }

  public async SignMessage(
    message: BytesLike
  ): Promise<AccountControllerResponse> {
    const hash = new Uint8Array(arrayify(hashMessage(message)));
    const response = await this.getAccountsSDK().signMessage(
      this.MoonAccount.getWallet(),
      {
        data: hash.toString(),
      }
    );
    return response.data;
  }

  public async SignTypedData(
    domain: TypedDataDomain,
    types: Record<string, Array<TypedDataField>>,
    value: Record<string, any>
  ): Promise<AccountControllerResponse> {
    const response = await this.getAccountsSDK().signTypedData(
      this.MoonAccount.getWallet(),
      {
        data: JSON.stringify({
          domain,
          types,
          value,
        }),
      }
    );
    return response.data;
  }

  public async SendTransaction(
    rawTransaction: string
  ): Promise<BroadCastRawTransactionResponse> {
    const response = await this.getAccountsSDK().broadcastTx(
      this.MoonAccount.getWallet(),
      {
        rawTransaction: rawTransaction,
        chainId: this.MoonAccount.getNetwork().chainId,
      }
    );
    return response.data as BroadCastRawTransactionResponse;
  }
  private initialiseConfig(config: MoonConfig): MoonSDKConfig {
    const sdkConfig = {
      Auth: useAuth(config.Auth),
      Storage: new MoonStorage(config.Storage.type, config.Storage.key),
      Networks: config.Networks || MOON_SUPPORTED_NETWORKS,
    };

    return sdkConfig;
  }
  public updateConfig(config: MoonConfig) {
    this.MoonSDKConfig = this.initialiseConfig(config);
  }

  public getNetworks(): Chain[] {
    return this.MoonSDKConfig.Networks;
  }

  public updateAccount(account: MoonAccount) {
    this.MoonAccount = account;
    this.MoonSDKConfig.Storage.setItem(account);
  }

  public async connect(): Promise<MoonAccount> {
    const account = new MoonAccount(this.MoonSDKConfig.Storage);
    this.getMoonAccount().login();
    if (account.getToken() != '' && account.getRefreshToken() != '') {
      // check if account is expired
      if (account.getExpiry() < Date.now()) {
        // refresh account
        const refresh = await this.refreshAccount(account.getRefreshToken());
        this.updateToken(refresh.accessToken);
      }
    }

    return new MoonAccount(this.MoonSDKConfig.Storage);
  }

  public updateNetwork(network: Chain) {
    this.MoonAccount.setNetwork(network);
  }

  public async disconnect() {
    // this.MoonSDKConfig.Storage.removeItem();
    // this.MoonAccount = {
    //   token: '',
    //   email: '',
    //   expiry: 0,
    //   refreshToken: '',
    //   wallet: '',
    //   network: MOON_SUPPORTED_NETWORKS[0],
    // };
    // await this.MoonMessageHandler.handle({
    //   type: MoonMessageType.logout,
    //   data: this.MoonAccount,
    // });
    // return this.MoonAccount;
  }

  async logout(): Promise<void> {
    this.MoonAccount.logout();
  }
}
