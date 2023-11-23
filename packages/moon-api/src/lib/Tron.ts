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
  TronInput,
  TronTransactionInput,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Tron<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Tron
   * @name ListTronAccounts
   * @request GET:/tron
   * @secure
   */
  listTronAccounts = (params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/tron`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Tron
   * @name CreateTronAccount
   * @request POST:/tron
   * @secure
   */
  createTronAccount = (data: TronInput, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/tron`,
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
   * @tags Tron
   * @name GetTronAccount
   * @request GET:/tron/{accountName}
   * @secure
   */
  getTronAccount = (accountName: string, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/tron/${accountName}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Tron
   * @name SignTronTransaction
   * @request POST:/tron/{accountName}/sign-tx
   * @secure
   */
  signTronTransaction = (
    accountName: string,
    data: TronTransactionInput,
    params: RequestParams = {}
  ) =>
    this.request<AccountControllerResponse, any>({
      path: `/tron/${accountName}/sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
