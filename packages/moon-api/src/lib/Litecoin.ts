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
   * @name ListLitecoinAccounts
   * @request GET:/litecoin
   * @secure
   */
  listLitecoinAccounts = (params: RequestParams = {}) =>
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
   * @name CreateLitecoinAccount
   * @request POST:/litecoin
   * @secure
   */
  createLitecoinAccount = (data: LitecoinInput, params: RequestParams = {}) =>
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
   * @name GetLitecoinAccount
   * @request GET:/litecoin/{accountName}
   * @secure
   */
  getLitecoinAccount = (accountName: string, params: RequestParams = {}) =>
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
   * @name SignLitecoinTransaction
   * @request POST:/litecoin/{accountName}/sign-tx
   * @secure
   */
  signLitecoinTransaction = (
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
