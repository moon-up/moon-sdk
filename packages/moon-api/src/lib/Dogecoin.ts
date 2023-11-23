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
   * @name ListDogeCoinAccounts
   * @request GET:/dogecoin
   * @secure
   */
  listDogeCoinAccounts = (params: RequestParams = {}) =>
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
   * @name CreateDogeCoinAccount
   * @request POST:/dogecoin
   * @secure
   */
  createDogeCoinAccount = (data: DogeCoinInput, params: RequestParams = {}) =>
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
   * @name GetDogeCoinAccount
   * @request GET:/dogecoin/{accountName}
   * @secure
   */
  getDogeCoinAccount = (accountName: string, params: RequestParams = {}) =>
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
   * @name SignDogeCoinTransaction
   * @request POST:/dogecoin/{accountName}/sign-tx
   * @secure
   */
  signDogeCoinTransaction = (
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
