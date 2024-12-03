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
  ListLitecoinAccountsData,
  LitecoinCreateLitecoinAccountData,
  LitecoinDeleteLitecoinAccountData,
  LitecoinExportLitecoinAccountData,
  LitecoinGetLitecoinAccountData,
  LitecoinInput,
  LitecoinSignLitecoinTransactionData,
  LitecoinSignLitecoinTransactionWithMemoData,
  LitecoinTransactionInput,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Litecoin<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Lists the accounts associated with the provided authorization token.
   *
   * @tags Litecoin
   * @name ListLitecoinAccounts
   * @request GET:/litecoin
   * @secure
   */
  listLitecoinAccounts = (params: RequestParams = {}) =>
    this.http.request<ListLitecoinAccountsData, any>({
      path: `/litecoin`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a new Litecoin account.
   *
   * @tags Litecoin
   * @name LitecoinCreateLitecoinAccount
   * @request POST:/litecoin
   * @secure
   */
  litecoinCreateLitecoinAccount = (
    data: LitecoinInput,
    params: RequestParams = {}
  ) =>
    this.http.request<LitecoinCreateLitecoinAccountData, any>({
      path: `/litecoin`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a Litecoin account.
   *
   * @tags Litecoin
   * @name LitecoinDeleteLitecoinAccount
   * @request POST:/litecoin/{accountName}/delete
   * @secure
   */
  litecoinDeleteLitecoinAccount = (
    accountName: string,
    params: RequestParams = {}
  ) =>
    this.http.request<LitecoinDeleteLitecoinAccountData, any>({
      path: `/litecoin/${accountName}/delete`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Exports the account information for a given account name.
   *
   * @tags Litecoin
   * @name LitecoinExportLitecoinAccount
   * @request POST:/litecoin/{accountName}/export
   * @secure
   */
  litecoinExportLitecoinAccount = (
    accountName: string,
    params: RequestParams = {}
  ) =>
    this.http.request<LitecoinExportLitecoinAccountData, any>({
      path: `/litecoin/${accountName}/export`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves account information for a specified account name.
   *
   * @tags Litecoin
   * @name LitecoinGetLitecoinAccount
   * @request GET:/litecoin/{accountName}
   * @secure
   */
  litecoinGetLitecoinAccount = (
    accountName: string,
    params: RequestParams = {}
  ) =>
    this.http.request<LitecoinGetLitecoinAccountData, any>({
      path: `/litecoin/${accountName}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Signs a Litecoin transaction.
   *
   * @tags Litecoin
   * @name LitecoinSignLitecoinTransaction
   * @request POST:/litecoin/{accountName}/sign-tx
   * @secure
   */
  litecoinSignLitecoinTransaction = (
    accountName: string,
    data: LitecoinTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<LitecoinSignLitecoinTransactionData, any>({
      path: `/litecoin/${accountName}/sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Signs a Litecoin transaction with a memo.
   *
   * @tags Litecoin
   * @name LitecoinSignLitecoinTransactionWithMemo
   * @request POST:/litecoin/{accountName}/memo-sign-tx
   * @secure
   */
  litecoinSignLitecoinTransactionWithMemo = (
    accountName: string,
    data: LitecoinTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<LitecoinSignLitecoinTransactionWithMemoData, any>({
      path: `/litecoin/${accountName}/memo-sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
