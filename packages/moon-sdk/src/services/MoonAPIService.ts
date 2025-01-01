// MoonAPIService.ts

import * as MoonAPI from "@moonup/moon-api";
import { HttpClient } from "@moonup/moon-api";

import type { MoonSDK } from "../moon";

export class MoonAPIService {
  private http: HttpClient;
  private sdkInstances: { [ key: string ]: any; } = {};

  /**
   * Creates an instance of MoonAPIService.
   *
   * @param sdk - An instance of the MoonSDK.
   * @param baseUrl - The base URL for the API. Defaults to 'https://beta.usemoon.ai'.
   *
   * @remarks
   * This constructor initializes the HTTP client with the provided base URL and default API parameters.
   * It also sets up a security worker to include the Authorization header with a Bearer token.
   * Finally, it calls the `initializeSDKInstances` method to set up any necessary SDK instances.
   */
  constructor ( sdk: MoonSDK, baseUrl = "https://beta.usemoon.ai" ) {
    this.http = new HttpClient( {
      baseUrl,
      baseApiParams: {
        secure: true,
        type: MoonAPI.ContentType.Json,
        format: "json",
      },
      securityWorker: ( securityData: any ) => ( {
        headers: { Authorization: `Bearer ${ securityData.token }` },
      } ),
    } );

    this.initializeSDKInstances();
  }

  /**
   * Initializes instances of various SDK classes and stores them in the `sdkInstances` object.
   *
   * This method iterates over a predefined list of SDK class names. For each class name, it checks
   * if the class exists in the `MoonAPI` object. If the class exists, it creates a new instance of
   * the class, passing `this.http` as a parameter to the constructor, and stores the instance in
   * the `sdkInstances` object with a key that is the lowercase version of the class name.
   *
   * @private
   */
  private initializeSDKInstances() {
    const sdkClasses = [
      "Accounts",
      "Allora",
      "Cookiefun",
      "Ens",
      "Erc20",
      "Erc1155",
      "Components",
      "Opensea",
      "FinancialDatasets",
      "Erc721",
      "Bitcoin",
      "Solana",
      "Cosmos",
      "Eos",
      "Litecoin",
      "Ripple",
      "Tron",
      "Bitcoincash",
      "Dogecoin",
      "Erc4626",
      "LendingPool",
      "Leverager",
      "Lifi",
      "Odos",
      "Onramper",
      "Thorswap",
      "Aave",
      "Multicall",
      "Data",
      "Thena",
      "Jupiter",
      "Uniswap",
      "Ramses",
      "Polymarket",
      "Lynex",
    ];

    for ( const className of sdkClasses ) {
      if ( className in MoonAPI ) {
        this.sdkInstances[ className.toLowerCase() ] = new ( MoonAPI as any )[
          className
        ]( this.http );
      }
    }
  }

  /**
   * Retrieves an SDK instance by its name.
   *
   * @param name - The name of the SDK to retrieve.
   * @returns The SDK instance associated with the provided name.
   * @throws Will throw an error if the SDK with the specified name is not found.
   */
  public getSDK( name: string ): any {
    const sdkName = name.toLowerCase();
    if ( !( sdkName in this.sdkInstances ) ) {
      throw new Error( `SDK '${ name }' not found` );
    }
    return this.sdkInstances[ sdkName ];
  }

  /**
   * Sets the security data for the HTTP service.
   *
   * @param token - The security token to be set.
   */
  public setSecurityData( token: string ) {
    // console.log("setting security data", token);
    this.http.setSecurityData( { token: token } );
  }

  /**
   * Retrieves a list of account identifiers.
   *
   * @returns {Promise<string[]>} A promise that resolves to an array of account identifiers.
   */
  public async listAccounts(): Promise<string[]> {
    const response = await this.getSDK( "Accounts" ).listAccounts();
    return response.data?.data.keys || [];
  }

  /**
   * Creates a new account using the SDK.
   *
   * @returns {Promise<string>} A promise that resolves to the address of the newly created account.
   */
  public async createAccount(): Promise<string> {
    const response = await this.getSDK( "Accounts" ).createAccount( {} );
    return response.data?.data.address || "";
  }

  /**
   * Signs a transaction using the specified wallet and transaction details.
   *
   * @param wallet - The identifier of the wallet to use for signing the transaction.
   * @param transaction - The transaction details to be signed.
   * @returns A promise that resolves to the raw signed transaction as a string.
   */
  public async signTransaction( wallet: string, transaction: MoonAPI.InputBody ) {
    const response =
      await this.getAccountsSDK().accountsSignEthereumTransaction(
        wallet,
        transaction,
      );
    return response.data;
  }

  /**
   * Retrieves the Solana SDK instance.
   *
   * @returns {MoonAPI.Solana} The Solana SDK instance.
   */
  public getSolanaSDK(): MoonAPI.Solana {
    return this.getSDK( "Solana" ) as MoonAPI.Solana;
  }
  /**
   * Retrieves the Bitcoin SDK instance.
   *
   * @returns {MoonAPI.Bitcoin} The Bitcoin SDK instance.
   */
  public getBitcoinSDK(): MoonAPI.Bitcoin {
    return this.getSDK( "Bitcoin" ) as MoonAPI.Bitcoin;
  }
  /**
   * Retrieves the Cosmos SDK instance.
   *
   * @returns {MoonAPI.Cosmos} The Cosmos SDK instance.
   */
  public getCosmosSDK(): MoonAPI.Cosmos {
    return this.getSDK( "Cosmos" ) as MoonAPI.Cosmos;
  }
  /**
   * Retrieves the Eos SDK instance.
   *
   * @returns {MoonAPI.Eos} The Eos SDK instance.
   */
  public getEosSDK(): MoonAPI.Eos {
    return this.getSDK( "Eos" ) as MoonAPI.Eos;
  }
  /**
   * Retrieves the Litecoin SDK instance.
   *
   * @returns {MoonAPI.Litecoin} The Litecoin SDK instance.
   */
  public getLitecoinSDK(): MoonAPI.Litecoin {
    return this.getSDK( "Litecoin" ) as MoonAPI.Litecoin;
  }
  /**
   * Retrieves the Ripple SDK instance.
   *
   * @returns {MoonAPI.Ripple} The Ripple SDK instance.
   */
  public getRippleSDK(): MoonAPI.Ripple {
    return this.getSDK( "Ripple" ) as MoonAPI.Ripple;
  }
  /**
   * Retrieves the Tron SDK instance.
   *
   * @returns {MoonAPI.Tron} The Tron SDK instance.
   */
  public getTronSDK(): MoonAPI.Tron {
    return this.getSDK( "Tron" ) as MoonAPI.Tron;
  }
  /**
   * Retrieves the Bitcoin Cash SDK instance.
   *
   * @returns {MoonAPI.Bitcoincash} The Bitcoin Cash SDK instance.
   */
  public getBitcoincashSDK(): MoonAPI.Bitcoincash {
    return this.getSDK( "Bitcoincash" ) as MoonAPI.Bitcoincash;
  }
  /**
   * Retrieves the Dogecoin SDK instance.
   *
   * @returns {MoonAPI.Dogecoin} The Dogecoin SDK instance.
   */
  public getDogecoinSDK(): MoonAPI.Dogecoin {
    return this.getSDK( "Dogecoin" ) as MoonAPI.Dogecoin;
  }
  /**
   * Retrieves the Accounts SDK instance.
   *
   * @returns {MoonAPI.Accounts} The Accounts SDK instance.
   */
  public getAccountsSDK(): MoonAPI.Accounts {
    return this.getSDK( "Accounts" ) as MoonAPI.Accounts;
  }
  /**
   * Retrieves the ENS SDK instance.
   *
   * @returns {MoonAPI.Ens} The ENS SDK instance.
   */
  public getENSSDK(): MoonAPI.Ens {
    return this.getSDK( "Ens" ) as MoonAPI.Ens;
  }
  /**
   * Retrieves the ERC-20 SDK instance.
   *
   * @returns {MoonAPI.Erc20} The ERC-20 SDK instance.
   */
  public getErc20SDK(): MoonAPI.Erc20 {
    return this.getSDK( "Erc20" ) as MoonAPI.Erc20;
  }
  /**
   * Retrieves the ERC-1155 SDK instance.
   *
   * @returns {MoonAPI.Erc1155} The ERC-1155 SDK instance.
   */
  public getErc1155SDK(): MoonAPI.Erc1155 {
    return this.getSDK( "Erc1155" ) as MoonAPI.Erc1155;
  }
  /**
   * Retrieves the ERC-721 SDK instance.
   *
   * @returns {MoonAPI.Erc721} The ERC-721 SDK instance.
   */
  public getErc721SDK(): MoonAPI.Erc721 {
    return this.getSDK( "Erc721" ) as MoonAPI.Erc721;
  }
  /**
   * Retrieves the ERC-4626 SDK instance.
   *
   * @returns {MoonAPI.Erc4626} The ERC-4626 SDK instance.
   */
  public getErc4626SDK(): MoonAPI.Erc4626 {
    return this.getSDK( "Erc4626" ) as MoonAPI.Erc4626;
  }
  /**
   * Retrieves the LendingPool SDK instance.
   *
   * @returns {MoonAPI.LendingPool} The LendingPool SDK instance.
   */
  public getLendingPoolSDK(): MoonAPI.LendingPool {
    return this.getSDK( "LendingPool" ) as MoonAPI.LendingPool;
  }
  /**
   * Retrieves the Leverager SDK instance.
   *
   * @returns {MoonAPI.Leverager} The Leverager SDK instance.
   */
  public getLeveragerSDK(): MoonAPI.Leverager {
    return this.getSDK( "Leverager" ) as MoonAPI.Leverager;
  }
  /**
   * Retrieves the Lifi SDK instance.
   *
   * @returns {MoonAPI.Lifi} The Lifi SDK instance.
   */
  public getLifiSDK(): MoonAPI.Lifi {
    return this.getSDK( "Lifi" ) as MoonAPI.Lifi;
  }
  /**
   * Retrieves the Odos SDK instance.
   *
   * @returns {MoonAPI.Odos} The Odos SDK instance.
   */
  public getOdosSDK(): MoonAPI.Odos {
    return this.getSDK( "Odos" ) as MoonAPI.Odos;
  }
  /**
   * Retrieves the Onramper SDK instance.
   *
   * @returns {MoonAPI.Onramper} The Onramper SDK instance.
   */
  public getOnramperSDK(): MoonAPI.Onramper {
    return this.getSDK( "Onramper" ) as MoonAPI.Onramper;
  }
  /**
   * Retrieves the Thorswap SDK instance.
   *
   * @returns {MoonAPI.Thorswap} The Thorswap SDK instance.
   */
  public getThorswapSDK(): MoonAPI.Thorswap {
    return this.getSDK( "Thorswap" ) as MoonAPI.Thorswap;
  }
  /**
   * Retrieves the Aave SDK instance.
   *
   * @returns {MoonAPI.Aave} The Aave SDK instance.
   */
  public getAaveSDK(): MoonAPI.Aave {
    return this.getSDK( "Aave" ) as MoonAPI.Aave;
  }
  /**
   * Retrieves the Multicall SDK instance.
   *
   * @returns {MoonAPI.Multicall} The Multicall SDK instance.
   */
  public getMultiCallSDK(): MoonAPI.Multicall {
    return this.getSDK( "Multicall" ) as MoonAPI.Multicall;
  }
  /**
   * Retrieves the SDK data as a `MoonAPI.Data` type.
   *
   * @returns {MoonAPI.Data} The SDK data.
   */
  public getDataSDK(): MoonAPI.Data {
    return this.getSDK( "Data" ) as MoonAPI.Data;
  }
  /**
   * Retrieves the Thena SDK instance.
   *
   * @returns {MoonAPI.Thena} The Thena SDK instance.
   */
  public getThenaSDK(): MoonAPI.Thena {
    return this.getSDK( "Thena" ) as MoonAPI.Thena;
  }
  /**
   * Retrieves the Jupiter SDK instance.
   *
   * @returns {MoonAPI.Jupiter} The Jupiter SDK instance.
   */
  public getJupiterSDK(): MoonAPI.Jupiter {
    return this.getSDK( "Jupiter" ) as MoonAPI.Jupiter;
  }
  /**
   * Retrieves the Uniswap SDK instance.
   *
   * @returns {MoonAPI.Uniswap} The Uniswap SDK instance.
   */
  public getUniswapSDK(): MoonAPI.Uniswap {
    return this.getSDK( "Uniswap" ) as MoonAPI.Uniswap;
  }
  /**
   * Retrieves an instance of the Ramses SDK.
   *
   * @returns {MoonAPI.Ramses} An instance of the Ramses SDK.
   */
  public getRamsesSDK(): MoonAPI.Ramses {
    return this.getSDK( "Ramses" ) as MoonAPI.Ramses;
  }
  /**
   * Retrieves the Polymarket SDK instance.
   *
   * @returns {MoonAPI.Polymarket} The Polymarket SDK instance.
   */
  public getPolymarketSDK(): MoonAPI.Polymarket {
    return this.getSDK( "Polymarket" ) as MoonAPI.Polymarket;
  }
  /**
   * Retrieves the Lynex SDK instance.
   *
   * @returns {MoonAPI.Lynex} The Lynex SDK instance.
   */
  public getLynexSDK(): MoonAPI.Lynex {
    return this.getSDK( "Lynex" ) as MoonAPI.Lynex;
  }

  /**
   * Retrieves the Allora SDK instance.
   *
   * @returns {MoonAPI.Allora} The Allora SDK instance.
   */
  public getAlloraSDK(): MoonAPI.Allora {
    return this.getSDK( "Allora" ) as MoonAPI.Allora;
  }

  /**
   * Retrieves the Cookiefun SDK instance.
   *
   * @returns {MoonAPI.Cookiefun} The Cookiefun SDK instance.
   */
  public getCookiefunSDK(): MoonAPI.Cookiefun {
    return this.getSDK( "Cookiefun" ) as MoonAPI.Cookiefun;
  }
}
