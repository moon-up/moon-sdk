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

import { AaveInput, AccountControllerResponse } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Aave<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Aave
   * @name Lend
   * @request POST:/aave/{name}/lend
   */
  lend = (name: string, data: AaveInput, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/aave/${name}/lend`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Aave
   * @name Borrow
   * @request POST:/aave/{name}/borrow
   */
  borrow = (name: string, data: AaveInput, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/aave/${name}/borrow`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Aave
   * @name UserReserveData
   * @request POST:/aave/{name}/user-reserve-data
   */
  userReserveData = (
    name: string,
    data: AaveInput,
    params: RequestParams = {}
  ) =>
    this.request<AccountControllerResponse, any>({
      path: `/aave/${name}/user-reserve-data`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Aave
   * @name Repay
   * @request POST:/aave/{name}/repay
   */
  repay = (name: string, data: AaveInput, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/aave/${name}/repay`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
