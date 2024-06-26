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

import { SwapResult, TokenSwapParams } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Conveyorfinance<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ConveyorFinance
   * @name Swap
   * @request POST:/conveyorfinance/{name}/swap
   * @secure
   */
  swap = (name: string, data: TokenSwapParams, params: RequestParams = {}) =>
    this.http.request<SwapResult, any>({
      path: `/conveyorfinance/${name}/swap`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
