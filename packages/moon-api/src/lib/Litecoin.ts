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
  AccountControllerResponse,
  LitecoinInput,
  LitecoinTransactionInput,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Litecoin<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Litecoin
   * @name ListAccounts
   * @request GET:/litecoin
   * @secure
   */
  listAccounts = (params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/litecoin`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Litecoin
   * @name CreateAccount
   * @request POST:/litecoin
   * @secure
   */
  createAccount = (data: LitecoinInput, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/litecoin`,
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
   * @tags Litecoin
   * @name GetAccount
   * @request GET:/litecoin/{accountName}
   * @secure
   */
  getAccount = (accountName: string, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/litecoin/${accountName}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Litecoin
   * @name SignTransaction
   * @request POST:/litecoin/{accountName}/sign-tx
   * @secure
   */
  signTransaction = (
    accountName: string,
    data: LitecoinTransactionInput,
    params: RequestParams = {}
  ) =>
    this.request<AccountControllerResponse, any>({
      path: `/litecoin/${accountName}/sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
