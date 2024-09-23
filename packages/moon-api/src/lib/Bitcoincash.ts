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
  BitcoinCashInput,
  BitcoinCashTransactionInput,
  CreateAccountResult,
  DeleteAccountResult,
  ExportAccountResult,
  GenerateUnsignedPsbtHexResult,
  ListAccountsResult,
  ReadAccountData,
  SignBitcoinTransactionBody,
  SignBitcoinTransactionResult,
  SignPsbtWithKeyPathAndScriptPathData,
  SignPsbtWithKeyPathAndScriptPathPayload,
  SignTransactionResult,
  SignTransactionWithMemoData,
  UnsignedPSBTInput,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Bitcoincash<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags BitcoinCash
   * @name CreateAccount
   * @request POST:/bitcoincash/accounts
   * @secure
   */
  createAccount = (data: BitcoinCashInput, params: RequestParams = {}) =>
    this.http.request<CreateAccountResult, any>({
      path: `/bitcoincash/accounts`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags BitcoinCash
   * @name DeleteAccount
   * @request POST:/bitcoincash/accounts/{accountName}/delete
   * @secure
   */
  deleteAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<DeleteAccountResult, any>({
      path: `/bitcoincash/accounts/${accountName}/delete`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags BitcoinCash
   * @name ExportAccount
   * @request POST:/bitcoincash/accounts/{accountName}/export
   * @secure
   */
  exportAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<ExportAccountResult, any>({
      path: `/bitcoincash/accounts/${accountName}/export`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags BitcoinCash
   * @name GenerateUnsignedPsbtHex
   * @request POST:/bitcoincash/accounts/{accountName}/generate-unsigned-psbt
   * @secure
   */
  generateUnsignedPsbtHex = (
    accountName: string,
    data: UnsignedPSBTInput,
    params: RequestParams = {}
  ) =>
    this.http.request<GenerateUnsignedPsbtHexResult, any>({
      path: `/bitcoincash/accounts/${accountName}/generate-unsigned-psbt`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags BitcoinCash
   * @name ListAccounts
   * @request GET:/bitcoincash/accounts
   * @secure
   */
  listAccounts = (params: RequestParams = {}) =>
    this.http.request<ListAccountsResult, any>({
      path: `/bitcoincash/accounts`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags BitcoinCash
   * @name ReadAccount
   * @request GET:/bitcoincash/accounts/{accountName}
   * @secure
   */
  readAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<ReadAccountData, any>({
      path: `/bitcoincash/accounts/${accountName}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags BitcoinCash
   * @name SignBitcoinTransaction
   * @request POST:/bitcoincash/accounts/{accountName}/sign-btc-tx
   * @secure
   */
  signBitcoinTransaction = (
    accountName: string,
    data: SignBitcoinTransactionBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SignBitcoinTransactionResult, any>({
      path: `/bitcoincash/accounts/${accountName}/sign-btc-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags BitcoinCash
   * @name SignPsbtWithKeyPathAndScriptPath
   * @request POST:/bitcoincash/accounts/{accountName}/sign-psbt-with-key-path-and-script-path
   * @secure
   */
  signPsbtWithKeyPathAndScriptPath = (
    accountName: string,
    data: SignPsbtWithKeyPathAndScriptPathPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<SignPsbtWithKeyPathAndScriptPathData, any>({
      path: `/bitcoincash/accounts/${accountName}/sign-psbt-with-key-path-and-script-path`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags BitcoinCash
   * @name SignTransaction
   * @request POST:/bitcoincash/accounts/{accountName}/sign-tx
   * @secure
   */
  signTransaction = (
    accountName: string,
    data: BitcoinCashTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<SignTransactionResult, any>({
      path: `/bitcoincash/accounts/${accountName}/sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags BitcoinCash
   * @name SignTransactionWithMemo
   * @request POST:/bitcoincash/accounts/{accountName}/memo-sign-tx
   * @secure
   */
  signTransactionWithMemo = (
    accountName: string,
    data: BitcoinCashTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<SignTransactionWithMemoData, any>({
      path: `/bitcoincash/accounts/${accountName}/memo-sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
