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
  CreateTronAccountData,
  DeleteTronAccountData,
  ExportTronAccountData,
  GetTronAccountData,
  ListTronAccountsData,
  SignTronTransactionData,
  TronInput,
  TronTransactionInput,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Tron<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Tron
   * @name CreateTronAccount
   * @request POST:/tron
   * @secure
   */
  createTronAccount = (data: TronInput, params: RequestParams = {}) =>
    this.http.request<CreateTronAccountData, any>({
      path: `/tron`,
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
   * @tags Tron
   * @name DeleteTronAccount
   * @request POST:/tron/{accountName}/delete
   * @secure
   */
  deleteTronAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<DeleteTronAccountData, any>({
      path: `/tron/${accountName}/delete`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Tron
   * @name ExportTronAccount
   * @request POST:/tron/{accountName}/export
   * @secure
   */
  exportTronAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<ExportTronAccountData, any>({
      path: `/tron/${accountName}/export`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Tron
   * @name GetTronAccount
   * @request GET:/tron/{accountName}
   * @secure
   */
  getTronAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<GetTronAccountData, any>({
      path: `/tron/${accountName}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Tron
   * @name ListTronAccounts
   * @request GET:/tron
   * @secure
   */
  listTronAccounts = (params: RequestParams = {}) =>
    this.http.request<ListTronAccountsData, any>({
      path: `/tron`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Tron
   * @name SignTronTransaction
   * @request POST:/tron/{accountName}/sign-tx
   * @secure
   */
  signTronTransaction = (
    accountName: string,
    data: TronTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<SignTronTransactionData, any>({
      path: `/tron/${accountName}/sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
