/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  BRC20TransactionInput,
  BitcoinBitcoinCreateAccountData,
  BitcoinBitcoinCreateBrc20TransactionData,
  BitcoinBitcoinCreateSrc20InscriptionData,
  BitcoinBitcoinDeleteAccountData,
  BitcoinBitcoinExportAccountData,
  BitcoinBitcoinGenerateUnsignedPsbtHexData,
  BitcoinBitcoinGetAccountData,
  BitcoinBitcoinSignTransactionData,
  BitcoinInput,
  BitcoinListAccountsData,
  BitcoinTransactionInput,
  SRC20InscriptionInput,
  UnsignedPSBTInput,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Bitcoin<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Creates a new Bitcoin account.
   *
   * @tags Bitcoin
   * @name BitcoinBitcoinCreateAccount
   * @request POST:/bitcoin
   * @secure
   */
  bitcoinBitcoinCreateAccount = (
    data: BitcoinInput,
    params: RequestParams = {}
  ) =>
    this.http.request<BitcoinBitcoinCreateAccountData, any>({
      path: `/bitcoin`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a BRC20 transaction.
   *
   * @tags Bitcoin
   * @name BitcoinBitcoinCreateBrc20Transaction
   * @request POST:/bitcoin/{accountName}/brc20-tx
   * @secure
   */
  bitcoinBitcoinCreateBrc20Transaction = (
    accountName: string,
    data: BRC20TransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<BitcoinBitcoinCreateBrc20TransactionData, any>({
      path: `/bitcoin/${accountName}/brc20-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates an SRC20 inscription using the provided account name and inscription input.
   *
   * @tags Bitcoin
   * @name BitcoinBitcoinCreateSrc20Inscription
   * @request POST:/bitcoin/{accountName}/src20-inscription
   * @secure
   */
  bitcoinBitcoinCreateSrc20Inscription = (
    accountName: string,
    data: SRC20InscriptionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<BitcoinBitcoinCreateSrc20InscriptionData, any>({
      path: `/bitcoin/${accountName}/src20-inscription`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a Bitcoin account.
   *
   * @tags Bitcoin
   * @name BitcoinBitcoinDeleteAccount
   * @request POST:/bitcoin/{accountName}/delete
   * @secure
   */
  bitcoinBitcoinDeleteAccount = (
    accountName: string,
    params: RequestParams = {}
  ) =>
    this.http.request<BitcoinBitcoinDeleteAccountData, any>({
      path: `/bitcoin/${accountName}/delete`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Exports the account details for the specified account name.
   *
   * @tags Bitcoin
   * @name BitcoinBitcoinExportAccount
   * @request POST:/bitcoin/{accountName}/export
   * @secure
   */
  bitcoinBitcoinExportAccount = (
    accountName: string,
    params: RequestParams = {}
  ) =>
    this.http.request<BitcoinBitcoinExportAccountData, any>({
      path: `/bitcoin/${accountName}/export`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Generates an unsigned PSBT (Partially Signed Bitcoin Transaction) hex string.
   *
   * @tags Bitcoin
   * @name BitcoinBitcoinGenerateUnsignedPsbtHex
   * @request POST:/bitcoin/{accountName}/generate-unsigned-psbt
   * @secure
   */
  bitcoinBitcoinGenerateUnsignedPsbtHex = (
    accountName: string,
    data: UnsignedPSBTInput,
    params: RequestParams = {}
  ) =>
    this.http.request<BitcoinBitcoinGenerateUnsignedPsbtHexData, any>({
      path: `/bitcoin/${accountName}/generate-unsigned-psbt`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the account information for a given account name.
   *
   * @tags Bitcoin
   * @name BitcoinBitcoinGetAccount
   * @request GET:/bitcoin/{accountName}
   * @secure
   */
  bitcoinBitcoinGetAccount = (
    accountName: string,
    params: RequestParams = {}
  ) =>
    this.http.request<BitcoinBitcoinGetAccountData, any>({
      path: `/bitcoin/${accountName}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Signs a Bitcoin transaction using the provided account name and transaction input.
   *
   * @tags Bitcoin
   * @name BitcoinBitcoinSignTransaction
   * @request POST:/bitcoin/{accountName}/sign-tx
   * @secure
   */
  bitcoinBitcoinSignTransaction = (
    accountName: string,
    data: BitcoinTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<BitcoinBitcoinSignTransactionData, any>({
      path: `/bitcoin/${accountName}/sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Lists the accounts associated with the provided authorization token.
   *
   * @tags Bitcoin
   * @name BitcoinListAccounts
   * @request GET:/bitcoin
   * @secure
   */
  bitcoinListAccounts = (params: RequestParams = {}) =>
    this.http.request<BitcoinListAccountsData, any>({
      path: `/bitcoin`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
}
