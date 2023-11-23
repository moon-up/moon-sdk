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
  RippleInput,
  RippleTransactionInput,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Ripple<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags ripple
   * @name ListRippleAccounts
   * @request GET:/ripple
   * @secure
   */
  listRippleAccounts = (params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/ripple`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ripple
   * @name CreateRippleAccount
   * @request POST:/ripple
   * @secure
   */
  createRippleAccount = (data: RippleInput, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/ripple`,
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
   * @tags ripple
   * @name GetRippleAccount
   * @request GET:/ripple/{accountName}
   * @secure
   */
  getRippleAccount = (accountName: string, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/ripple/${accountName}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ripple
   * @name SignRippleTransaction
   * @request POST:/ripple/{accountName}/sign-tx
   * @secure
   */
  signRippleTransaction = (
    accountName: string,
    data: RippleTransactionInput,
    params: RequestParams = {}
  ) =>
    this.request<AccountControllerResponse, any>({
      path: `/ripple/${accountName}/sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
