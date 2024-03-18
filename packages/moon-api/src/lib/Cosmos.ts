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
  CosmosInput,
  CosmosTransactionInput,
  CreateCosmosAccountData,
  GetCosmosAccountData,
  ListCosmosAccountsData,
  SignCosmosTransactionData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Cosmos<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Cosmos
   * @name CreateCosmosAccount
   * @request POST:/cosmos
   * @secure
   */
  createCosmosAccount = (data: CosmosInput, params: RequestParams = {}) =>
    this.request<CreateCosmosAccountData, any>({
      path: `/cosmos`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Cosmos
   * @name GetCosmosAccount
   * @request GET:/cosmos/{accountName}
   * @secure
   */
  getCosmosAccount = (accountName: string, params: RequestParams = {}) =>
    this.request<GetCosmosAccountData, any>({
      path: `/cosmos/${accountName}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Cosmos
   * @name ListCosmosAccounts
   * @request GET:/cosmos
   * @secure
   */
  listCosmosAccounts = (params: RequestParams = {}) =>
    this.request<ListCosmosAccountsData, any>({
      path: `/cosmos`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Cosmos
   * @name SignCosmosTransaction
   * @request POST:/cosmos/{accountName}/sign-tx
   * @secure
   */
  signCosmosTransaction = (
    accountName: string,
    data: CosmosTransactionInput,
    params: RequestParams = {}
  ) =>
    this.request<SignCosmosTransactionData, any>({
      path: `/cosmos/${accountName}/sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
