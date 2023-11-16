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
   * @name ListAccounts
   * @request GET:/tron
   * @secure
   */
  listAccounts = (params: RequestParams = {}) =>
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
   * @name CreateAccount
   * @request POST:/tron
   * @secure
   */
  createAccount = (data: TronInput, params: RequestParams = {}) =>
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
   * @name GetAccount
   * @request GET:/tron/{accountName}
   * @secure
   */
  getAccount = (accountName: string, params: RequestParams = {}) =>
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
   * @name SignTransaction
   * @request POST:/tron/{accountName}/sign-tx
   * @secure
   */
  signTransaction = (
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
