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
  CreateRippleAccountData,
  GetRippleAccountData,
  ListRippleAccountsData,
  RippleInput,
  RippleTransactionInput,
  SignRippleTransactionData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Ripple<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ripple
   * @name CreateRippleAccount
   * @request POST:/ripple
   * @secure
   */
  createRippleAccount = (data: RippleInput, params: RequestParams = {}) =>
    this.http.request<CreateRippleAccountData, any>({
      path: `/ripple`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags ripple
   * @name GetRippleAccount
   * @request GET:/ripple/{accountName}
   * @secure
   */
  getRippleAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<GetRippleAccountData, any>({
      path: `/ripple/${accountName}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags ripple
   * @name ListRippleAccounts
   * @request GET:/ripple
   * @secure
   */
  listRippleAccounts = (params: RequestParams = {}) =>
    this.http.request<ListRippleAccountsData, any>({
      path: `/ripple`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags ripple
   * @name SignRippleTransaction
   * @request POST:/ripple/{accountName}/sign-tx
   * @secure
   */
  signRippleTransaction = (
    accountName: string,
    data: RippleTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<SignRippleTransactionData, any>({
      path: `/ripple/${accountName}/sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
