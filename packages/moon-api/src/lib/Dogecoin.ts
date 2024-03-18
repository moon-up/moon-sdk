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
  CreateDogeCoinAccountData,
  DogeCoinInput,
  DogeCoinTransactionInput,
  GetDogeCoinAccountData,
  ListDogeCoinAccountsData,
  SignDogeCoinTransactionData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Dogecoin<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags DogeCoin
   * @name CreateDogeCoinAccount
   * @request POST:/dogecoin
   * @secure
   */
  createDogeCoinAccount = (data: DogeCoinInput, params: RequestParams = {}) =>
    this.request<CreateDogeCoinAccountData, any>({
      path: `/dogecoin`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
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
    this.request<GetDogeCoinAccountData, any>({
      path: `/dogecoin/${accountName}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags DogeCoin
   * @name ListDogeCoinAccounts
   * @request GET:/dogecoin
   * @secure
   */
  listDogeCoinAccounts = (params: RequestParams = {}) =>
    this.request<ListDogeCoinAccountsData, any>({
      path: `/dogecoin`,
      method: 'GET',
      secure: true,
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
    this.request<SignDogeCoinTransactionData, any>({
      path: `/dogecoin/${accountName}/sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
