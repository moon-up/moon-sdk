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
  AaveInput,
  BorrowData,
  LendData,
  RepayData,
  UserReserveDataData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Aave<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Aave
   * @name Borrow
   * @request POST:/aave/{name}/borrow
   * @secure
   */
  borrow = (name: string, data: AaveInput, params: RequestParams = {}) =>
    this.http.request<BorrowData, any>({
      path: `/aave/${name}/borrow`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Aave
   * @name Lend
   * @request POST:/aave/{name}/lend
   * @secure
   */
  lend = (name: string, data: AaveInput, params: RequestParams = {}) =>
    this.http.request<LendData, any>({
      path: `/aave/${name}/lend`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Aave
   * @name Repay
   * @request POST:/aave/{name}/repay
   * @secure
   */
  repay = (name: string, data: AaveInput, params: RequestParams = {}) =>
    this.http.request<RepayData, any>({
      path: `/aave/${name}/repay`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Aave
   * @name UserReserveData
   * @request POST:/aave/{name}/user-reserve-data
   * @secure
   */
  userReserveData = (
    name: string,
    data: AaveInput,
    params: RequestParams = {}
  ) =>
    this.http.request<UserReserveDataData, any>({
      path: `/aave/${name}/user-reserve-data`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
