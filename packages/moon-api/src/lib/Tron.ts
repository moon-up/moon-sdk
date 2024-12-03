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
  TronCreateTronAccountData,
  TronDeleteTronAccountData,
  TronExportTronAccountData,
  TronGetTronAccountData,
  TronInput,
  TronListTronAccountsData,
  TronSignTronTransactionData,
  TronTransactionInput,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Tron<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Creates a new account using the provided TronInput data.
   *
   * @tags Tron
   * @name TronCreateTronAccount
   * @request POST:/tron
   * @secure
   */
  tronCreateTronAccount = (data: TronInput, params: RequestParams = {}) =>
    this.http.request<TronCreateTronAccountData, any>({
      path: `/tron`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes an account using the provided account name and authorization token.
   *
   * @tags Tron
   * @name TronDeleteTronAccount
   * @request POST:/tron/{accountName}/delete
   * @secure
   */
  tronDeleteTronAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<TronDeleteTronAccountData, any>({
      path: `/tron/${accountName}/delete`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Exports the account details for the specified account name.
   *
   * @tags Tron
   * @name TronExportTronAccount
   * @request POST:/tron/{accountName}/export
   * @secure
   */
  tronExportTronAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<TronExportTronAccountData, any>({
      path: `/tron/${accountName}/export`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves account information from the Tron blockchain.
   *
   * @tags Tron
   * @name TronGetTronAccount
   * @request GET:/tron/{accountName}
   * @secure
   */
  tronGetTronAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<TronGetTronAccountData, any>({
      path: `/tron/${accountName}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Lists accounts using the provided authorization token.
   *
   * @tags Tron
   * @name TronListTronAccounts
   * @request GET:/tron
   * @secure
   */
  tronListTronAccounts = (params: RequestParams = {}) =>
    this.http.request<TronListTronAccountsData, any>({
      path: `/tron`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Signs a Tron transaction using the provided account name and transaction input.
   *
   * @tags Tron
   * @name TronSignTronTransaction
   * @request POST:/tron/{accountName}/sign-tx
   * @secure
   */
  tronSignTronTransaction = (
    accountName: string,
    data: TronTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<TronSignTronTransactionData, any>({
      path: `/tron/${accountName}/sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
