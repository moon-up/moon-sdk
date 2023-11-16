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
  CosmosInput,
  CosmosTransactionInput,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Cosmos<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Cosmos
   * @name ListAccounts
   * @request GET:/cosmos
   * @secure
   */
  listAccounts = (params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/cosmos`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Cosmos
   * @name CreateAccount
   * @request POST:/cosmos
   * @secure
   */
  createAccount = (data: CosmosInput, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/cosmos`,
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
   * @tags Cosmos
   * @name GetAccount
   * @request GET:/cosmos/{accountName}
   * @secure
   */
  getAccount = (accountName: string, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/cosmos/${accountName}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Cosmos
   * @name SignTransaction
   * @request POST:/cosmos/{accountName}/sign-tx
   * @secure
   */
  signTransaction = (
    accountName: string,
    data: CosmosTransactionInput,
    params: RequestParams = {}
  ) =>
    this.request<AccountControllerResponse, any>({
      path: `/cosmos/${accountName}/sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
