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

export class Litecoin<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Litecoin
   * @name CreateLitecoinAccount
   * @request POST:/litecoin
   * @secure
   */
  createLitecoinAccount = (data: LitecoinInput, params: RequestParams = {}) =>
    this.request<CreateLitecoinAccountData, any>({
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
    this.request<GetLitecoinAccountData, any>({
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
    this.request<ListLitecoinAccountsData, any>({
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
    this.request<SignLitecoinTransactionData, any>({
      path: `/litecoin/${accountName}/sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
