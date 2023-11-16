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
  EosInput,
  EosTransactionInput,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Eos<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags eos
   * @name ListAccounts
   * @request GET:/eos
   * @secure
   */
  listAccounts = (params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/eos`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags eos
   * @name CreateAccount
   * @request POST:/eos
   * @secure
   */
  createAccount = (data: EosInput, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/eos`,
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
   * @tags eos
   * @name GetAccount
   * @request GET:/eos/{accountName}
   * @secure
   */
  getAccount = (accountName: string, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/eos/${accountName}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags eos
   * @name SignTransaction
   * @request POST:/eos/{accountName}/sign-tx
   * @secure
   */
  signTransaction = (
    accountName: string,
    data: EosTransactionInput,
    params: RequestParams = {}
  ) =>
    this.request<AccountControllerResponse, any>({
      path: `/eos/${accountName}/sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
