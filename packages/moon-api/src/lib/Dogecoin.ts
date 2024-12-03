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
  DogeCoinInput,
  DogeCoinListAccountsData,
  DogeCoinTransactionInput,
  DogecoinDogeCoinCreateNewAccountData,
  DogecoinDogeCoinDeleteAccountData,
  DogecoinDogeCoinExportAccountDetailsData,
  DogecoinDogeCoinGetAccountDetailsData,
  DogecoinDogeCoinSignTransactionData,
  DogecoinDogeCoinSignTransactionWithMemoData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Dogecoin<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Creates a new Dogecoin account.
   *
   * @tags DogeCoin
   * @name DogecoinDogeCoinCreateNewAccount
   * @request POST:/dogecoin
   * @secure
   */
  dogecoinDogeCoinCreateNewAccount = (
    data: DogeCoinInput,
    params: RequestParams = {}
  ) =>
    this.http.request<DogecoinDogeCoinCreateNewAccountData, any>({
      path: `/dogecoin`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a Dogecoin account.
   *
   * @tags DogeCoin
   * @name DogecoinDogeCoinDeleteAccount
   * @request POST:/dogecoin/{accountName}/delete
   * @secure
   */
  dogecoinDogeCoinDeleteAccount = (
    accountName: string,
    params: RequestParams = {}
  ) =>
    this.http.request<DogecoinDogeCoinDeleteAccountData, any>({
      path: `/dogecoin/${accountName}/delete`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Exports the account details for a given account name.
   *
   * @tags DogeCoin
   * @name DogecoinDogeCoinExportAccountDetails
   * @request POST:/dogecoin/{accountName}/export
   * @secure
   */
  dogecoinDogeCoinExportAccountDetails = (
    accountName: string,
    params: RequestParams = {}
  ) =>
    this.http.request<DogecoinDogeCoinExportAccountDetailsData, any>({
      path: `/dogecoin/${accountName}/export`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the account information for a given account name.
   *
   * @tags DogeCoin
   * @name DogecoinDogeCoinGetAccountDetails
   * @request GET:/dogecoin/{accountName}
   * @secure
   */
  dogecoinDogeCoinGetAccountDetails = (
    accountName: string,
    params: RequestParams = {}
  ) =>
    this.http.request<DogecoinDogeCoinGetAccountDetailsData, any>({
      path: `/dogecoin/${accountName}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Signs a Dogecoin transaction.
   *
   * @tags DogeCoin
   * @name DogecoinDogeCoinSignTransaction
   * @request POST:/dogecoin/{accountName}/sign-tx
   * @secure
   */
  dogecoinDogeCoinSignTransaction = (
    accountName: string,
    data: DogeCoinTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<DogecoinDogeCoinSignTransactionData, any>({
      path: `/dogecoin/${accountName}/sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Signs a Dogecoin transaction with a memo.
   *
   * @tags DogeCoin
   * @name DogecoinDogeCoinSignTransactionWithMemo
   * @request POST:/dogecoin/{accountName}/memo-sign-tx
   * @secure
   */
  dogecoinDogeCoinSignTransactionWithMemo = (
    accountName: string,
    data: DogeCoinTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<DogecoinDogeCoinSignTransactionWithMemoData, any>({
      path: `/dogecoin/${accountName}/memo-sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Lists the accounts associated with the provided Dogecoin token.
   *
   * @tags DogeCoin
   * @name DogeCoinListAccounts
   * @request GET:/dogecoin
   * @secure
   */
  dogeCoinListAccounts = (params: RequestParams = {}) =>
    this.http.request<DogeCoinListAccountsData, any>({
      path: `/dogecoin`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
}
