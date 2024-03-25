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
  CreateLitecoinAccountData,
  GetLitecoinAccountData,
  ListLitecoinAccountsData,
  LitecoinInput,
  LitecoinTransactionInput,
  SignLitecoinTransactionData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Litecoin<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Litecoin
   * @name CreateLitecoinAccount
   * @request POST:/litecoin
   * @secure
   */
  createLitecoinAccount = (data: LitecoinInput, params: RequestParams = {}) =>
    this.http.request<CreateLitecoinAccountData, any>({
      path: `/litecoin`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Litecoin
   * @name GetLitecoinAccount
   * @request GET:/litecoin/{accountName}
   * @secure
   */
  getLitecoinAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<GetLitecoinAccountData, any>({
      path: `/litecoin/${accountName}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
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
      ...params,
    });
  /**
   * No description
   *
   * @tags Litecoin
   * @name SignLitecoinTransaction
   * @request POST:/litecoin/{accountName}/sign-tx
   * @secure
   */
  signLitecoinTransaction = (
    accountName: string,
    data: LitecoinTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<SignLitecoinTransactionData, any>({
      path: `/litecoin/${accountName}/sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
