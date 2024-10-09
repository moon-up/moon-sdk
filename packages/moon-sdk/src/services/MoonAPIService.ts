// MoonAPIService.ts

import * as MoonAPI from '@moonup/moon-api';
import { HttpClient } from '@moonup/moon-api';

export class MoonAPIService {
  private http: HttpClient;
  private sdkInstances: { [key: string]: any } = {};

  constructor(baseUrl = 'https://beta.usemoon.ai') {
    this.http = new HttpClient({
      baseUrl,
      baseApiParams: {
        secure: true,
        type: MoonAPI.ContentType.Json,
        format: 'json',
      },
      securityWorker: async (securityData: any) => ({
        headers: { Authorization: `Bearer ${securityData.token}` },
      }),
    });

    this.initializeSDKInstances();
  }

  private initializeSDKInstances() {
    const sdkClasses = [
      'Accounts',
      'Ens',
      'Erc20',
      'Erc1155',
      'Erc721',
      'Bitcoin',
      'Solana',
      'Cosmos',
      'Eos',
      'Litecoin',
      'Ripple',
      'Tron',
      'Bitcoincash',
      'Dogecoin',
      'Erc4626',
      'LendingPool',
      'Leverager',
      'Lifi',
      'Odos',
      'Onramper',
      'Thorswap',
      'Aave',
      'Multicall',
      'Data',
      'Thena',
      'Jupiter',
      'Uniswap',
      'Ramses',
      'Polymarket',
      'Lynex',
    ];

    sdkClasses.forEach((className) => {
      if (className in MoonAPI) {
        this.sdkInstances[className.toLowerCase()] = new (MoonAPI as any)[
          className
        ](this.http);
      }
    });
  }

  public getSDK(name: string): any {
    const sdkName = name.toLowerCase();
    if (!(sdkName in this.sdkInstances)) {
      throw new Error(`SDK '${name}' not found`);
    }
    return this.sdkInstances[sdkName];
  }

  public setSecurityData(token: string) {
    this.http.setSecurityData({ token });
  }

  // Add methods for each MoonAPI function you want to expose
  public async listAccounts(): Promise<string[]> {
    const response = await this.getSDK('Accounts').listAccounts();
    return response.data?.data.keys || [];
  }

  public async createAccount(): Promise<string> {
    const response = await this.getSDK('Accounts').createAccount({});
    return response.data?.data.address || '';
  }

  public async signTransaction(
    wallet: string,
    transaction: MoonAPI.InputBody
  ): Promise<string> {
    const response = await this.getSDK('Accounts').signTransaction(
      wallet,
      transaction
    );
    return response?.data?.transactions?.at(0)?.raw_transaction || '';
  }

  public getSolanaSDK(): MoonAPI.Solana {
    return this.getSDK('Solana') as MoonAPI.Solana;
  }

  public getBitcoinSDK(): MoonAPI.Bitcoin {
    return this.getSDK('Bitcoin') as MoonAPI.Bitcoin;
  }

  public getCosmosSDK(): MoonAPI.Cosmos {
    return this.getSDK('Cosmos') as MoonAPI.Cosmos;
  }

  public getEosSDK(): MoonAPI.Eos {
    return this.getSDK('Eos') as MoonAPI.Eos;
  }

  public getLitecoinSDK(): MoonAPI.Litecoin {
    return this.getSDK('Litecoin') as MoonAPI.Litecoin;
  }

  public getRippleSDK(): MoonAPI.Ripple {
    return this.getSDK('Ripple') as MoonAPI.Ripple;
  }

  public getTronSDK(): MoonAPI.Tron {
    return this.getSDK('Tron') as MoonAPI.Tron;
  }

  public getBitcoincashSDK(): MoonAPI.Bitcoincash {
    return this.getSDK('Bitcoincash') as MoonAPI.Bitcoincash;
  }

  public getDogecoinSDK(): MoonAPI.Dogecoin {
    return this.getSDK('Dogecoin') as MoonAPI.Dogecoin;
  }

  public getAccountsSDK(): MoonAPI.Accounts {
    return this.getSDK('Accounts') as MoonAPI.Accounts;
  }

  public getENSSDK(): MoonAPI.Ens {
    return this.getSDK('Ens') as MoonAPI.Ens;
  }

  public getErc20SDK(): MoonAPI.Erc20 {
    return this.getSDK('Erc20') as MoonAPI.Erc20;
  }

  public getErc1155SDK(): MoonAPI.Erc1155 {
    return this.getSDK('Erc1155') as MoonAPI.Erc1155;
  }

  public getErc721SDK(): MoonAPI.Erc721 {
    return this.getSDK('Erc721') as MoonAPI.Erc721;
  }

  public getErc4626SDK(): MoonAPI.Erc4626 {
    return this.getSDK('Erc4626') as MoonAPI.Erc4626;
  }

  public getLendingPoolSDK(): MoonAPI.LendingPool {
    return this.getSDK('LendingPool') as MoonAPI.LendingPool;
  }

  public getLeveragerSDK(): MoonAPI.Leverager {
    return this.getSDK('Leverager') as MoonAPI.Leverager;
  }

  public getLifiSDK(): MoonAPI.Lifi {
    return this.getSDK('Lifi') as MoonAPI.Lifi;
  }

  public getOdosSDK(): MoonAPI.Odos {
    return this.getSDK('Odos') as MoonAPI.Odos;
  }

  public getOnramperSDK(): MoonAPI.Onramper {
    return this.getSDK('Onramper') as MoonAPI.Onramper;
  }

  public getThorswapSDK(): MoonAPI.Thorswap {
    return this.getSDK('Thorswap') as MoonAPI.Thorswap;
  }

  public getAaveSDK(): MoonAPI.Aave {
    return this.getSDK('Aave') as MoonAPI.Aave;
  }

  public getMultiCallSDK(): MoonAPI.Multicall {
    return this.getSDK('Multicall') as MoonAPI.Multicall;
  }

  public getDataSDK(): MoonAPI.Data {
    return this.getSDK('Data') as MoonAPI.Data;
  }

  public getThenaSDK(): MoonAPI.Thena {
    return this.getSDK('Thena') as MoonAPI.Thena;
  }

  public getJupiterSDK(): MoonAPI.Jupiter {
    return this.getSDK('Jupiter') as MoonAPI.Jupiter;
  }

  public getUniswapSDK(): MoonAPI.Uniswap {
    return this.getSDK('Uniswap') as MoonAPI.Uniswap;
  }

  public getRamsesSDK(): MoonAPI.Ramses {
    return this.getSDK('Ramses') as MoonAPI.Ramses;
  }

  public getPolymarketSDK(): MoonAPI.Polymarket {
    return this.getSDK('Polymarket') as MoonAPI.Polymarket;
  }

  public getLynexSDK(): MoonAPI.Lynex {
    return this.getSDK('Lynex') as MoonAPI.Lynex;
  }
}
