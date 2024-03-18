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
  CreateEosAccountData,
  EosInput,
  EosTransactionInput,
  GetEosAccountData,
  ListEosAccountsData,
  SignEosTransactionData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Eos<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags eos
   * @name CreateEosAccount
   * @request POST:/eos
   * @secure
   */
  createEosAccount = (data: EosInput, params: RequestParams = {}) =>
    this.http.request<CreateEosAccountData, any>({
      path: `/eos`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags eos
   * @name GetEosAccount
   * @request GET:/eos/{accountName}
   * @secure
   */
  getEosAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<GetEosAccountData, any>({
      path: `/eos/${accountName}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags eos
   * @name ListEosAccounts
   * @request GET:/eos
   * @secure
   */
  listEosAccounts = (params: RequestParams = {}) =>
    this.http.request<ListEosAccountsData, any>({
      path: `/eos`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags eos
   * @name SignEosTransaction
   * @request POST:/eos/{accountName}/sign-tx
   * @secure
   */
  signEosTransaction = (
    accountName: string,
    data: EosTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<SignEosTransactionData, any>({
      path: `/eos/${accountName}/sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
