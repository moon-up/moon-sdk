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
  DogeCoinInput,
  DogeCoinTransactionInput,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Dogecoin<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags DogeCoin
   * @name ListAccounts
   * @request GET:/dogecoin
   * @secure
   */
  listAccounts = (params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/dogecoin`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DogeCoin
   * @name CreateAccount
   * @request POST:/dogecoin
   * @secure
   */
  createAccount = (data: DogeCoinInput, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/dogecoin`,
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
   * @tags DogeCoin
   * @name GetAccount
   * @request GET:/dogecoin/{accountName}
   * @secure
   */
  getAccount = (accountName: string, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/dogecoin/${accountName}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DogeCoin
   * @name SignTransaction
   * @request POST:/dogecoin/{accountName}/sign-tx
   * @secure
   */
  signTransaction = (
    accountName: string,
    data: DogeCoinTransactionInput,
    params: RequestParams = {}
  ) =>
    this.request<AccountControllerResponse, any>({
      path: `/dogecoin/${accountName}/sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
