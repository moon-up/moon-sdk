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
  BitcoinCashBitcoinCashCreateAccountData,
  BitcoinCashBitcoinCashDeleteAccountData,
  BitcoinCashBitcoinCashExportAccountData,
  BitcoinCashBitcoinCashGenerateUnsignedPsbtHexData,
  BitcoinCashBitcoinCashGetAccountData,
  BitcoinCashBitcoinCashSignBitcoinTransactionData,
  BitcoinCashBitcoinCashSignBitcoinTransactionPayload,
  BitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPathData,
  BitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPathPayload,
  BitcoinCashBitcoinCashSignTransactionData,
  BitcoinCashBitcoinCashSignTransactionWithMemoData,
  BitcoinCashInput,
  BitcoinCashListAccountsData,
  BitcoinCashTransactionInput,
  UnsignedPSBTInput,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Bitcoincash<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Creates a new Bitcoin Cash account.
   *
   * @tags BitcoinCash
   * @name BitcoinCashBitcoinCashCreateAccount
   * @request POST:/bitcoincash/accounts
   * @secure
   */
  bitcoinCashBitcoinCashCreateAccount = (
    data: BitcoinCashInput,
    params: RequestParams = {}
  ) =>
    this.http.request<BitcoinCashBitcoinCashCreateAccountData, any>({
      path: `/bitcoincash/accounts`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a Bitcoin Cash account.
   *
   * @tags BitcoinCash
   * @name BitcoinCashBitcoinCashDeleteAccount
   * @request POST:/bitcoincash/accounts/{accountName}/delete
   * @secure
   */
  bitcoinCashBitcoinCashDeleteAccount = (
    accountName: string,
    params: RequestParams = {}
  ) =>
    this.http.request<BitcoinCashBitcoinCashDeleteAccountData, any>({
      path: `/bitcoincash/accounts/${accountName}/delete`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Exports the account details for the specified account name.
   *
   * @tags BitcoinCash
   * @name BitcoinCashBitcoinCashExportAccount
   * @request POST:/bitcoincash/accounts/{accountName}/export
   * @secure
   */
  bitcoinCashBitcoinCashExportAccount = (
    accountName: string,
    params: RequestParams = {}
  ) =>
    this.http.request<BitcoinCashBitcoinCashExportAccountData, any>({
      path: `/bitcoincash/accounts/${accountName}/export`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Generates an unsigned PSBT (Partially Signed Bitcoin Transaction) hex string.
   *
   * @tags BitcoinCash
   * @name BitcoinCashBitcoinCashGenerateUnsignedPsbtHex
   * @request POST:/bitcoincash/accounts/{accountName}/generate-unsigned-psbt
   * @secure
   */
  bitcoinCashBitcoinCashGenerateUnsignedPsbtHex = (
    accountName: string,
    data: UnsignedPSBTInput,
    params: RequestParams = {}
  ) =>
    this.http.request<BitcoinCashBitcoinCashGenerateUnsignedPsbtHexData, any>({
      path: `/bitcoincash/accounts/${accountName}/generate-unsigned-psbt`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Reads the account information for a given account name.
   *
   * @tags BitcoinCash
   * @name BitcoinCashBitcoinCashGetAccount
   * @request GET:/bitcoincash/accounts/{accountName}
   * @secure
   */
  bitcoinCashBitcoinCashGetAccount = (
    accountName: string,
    params: RequestParams = {}
  ) =>
    this.http.request<BitcoinCashBitcoinCashGetAccountData, any>({
      path: `/bitcoincash/accounts/${accountName}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Signs a Bitcoin transaction for the specified account.
   *
   * @tags BitcoinCash
   * @name BitcoinCashBitcoinCashSignBitcoinTransaction
   * @request POST:/bitcoincash/accounts/{accountName}/sign-btc-tx
   * @secure
   */
  bitcoinCashBitcoinCashSignBitcoinTransaction = (
    accountName: string,
    data: BitcoinCashBitcoinCashSignBitcoinTransactionPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<BitcoinCashBitcoinCashSignBitcoinTransactionData, any>({
      path: `/bitcoincash/accounts/${accountName}/sign-btc-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Signs a Partially Signed Bitcoin Transaction (PSBT) using a key path and script path.
   *
   * @tags BitcoinCash
   * @name BitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPath
   * @request POST:/bitcoincash/accounts/{accountName}/sign-psbt-with-key-path-and-script-path
   * @secure
   */
  bitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPath = (
    accountName: string,
    data: BitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPathPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<
      BitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPathData,
      any
    >({
      path: `/bitcoincash/accounts/${accountName}/sign-psbt-with-key-path-and-script-path`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Signs a Bitcoin Cash transaction.
   *
   * @tags BitcoinCash
   * @name BitcoinCashBitcoinCashSignTransaction
   * @request POST:/bitcoincash/accounts/{accountName}/sign-tx
   * @secure
   */
  bitcoinCashBitcoinCashSignTransaction = (
    accountName: string,
    data: BitcoinCashTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<BitcoinCashBitcoinCashSignTransactionData, any>({
      path: `/bitcoincash/accounts/${accountName}/sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Signs a Bitcoin Cash transaction with a memo.
   *
   * @tags BitcoinCash
   * @name BitcoinCashBitcoinCashSignTransactionWithMemo
   * @request POST:/bitcoincash/accounts/{accountName}/memo-sign-tx
   * @secure
   */
  bitcoinCashBitcoinCashSignTransactionWithMemo = (
    accountName: string,
    data: BitcoinCashTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<BitcoinCashBitcoinCashSignTransactionWithMemoData, any>({
      path: `/bitcoincash/accounts/${accountName}/memo-sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Lists Bitcoin Cash accounts associated with the provided authorization token.
   *
   * @tags BitcoinCash
   * @name BitcoinCashListAccounts
   * @request GET:/bitcoincash/accounts
   * @secure
   */
  bitcoinCashListAccounts = (params: RequestParams = {}) =>
    this.http.request<BitcoinCashListAccountsData, any>({
      path: `/bitcoincash/accounts`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
}
