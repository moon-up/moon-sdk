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
   * @name ListEosAccounts
   * @request GET:/eos
   * @secure
   */
  listEosAccounts = (params: RequestParams = {}) =>
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
   * @name CreateEosAccount
   * @request POST:/eos
   * @secure
   */
  createEosAccount = (data: EosInput, params: RequestParams = {}) =>
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
   * @name GetEosAccount
   * @request GET:/eos/{accountName}
   * @secure
   */
  getEosAccount = (accountName: string, params: RequestParams = {}) =>
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
   * @name SignEosTransaction
   * @request POST:/eos/{accountName}/sign-tx
   * @secure
   */
  signEosTransaction = (
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
