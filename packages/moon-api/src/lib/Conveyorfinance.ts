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
  ConveyorFinanceControllerResponse,
  TokenSwapParams,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Conveyorfinance<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags ConveyorFinance
   * @name Swap
   * @request POST:/conveyorfinance/{name}/swap
   */
  swap = (name: string, data: TokenSwapParams, params: RequestParams = {}) =>
    this.request<ConveyorFinanceControllerResponse, any>({
      path: `/conveyorfinance/${name}/swap`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
