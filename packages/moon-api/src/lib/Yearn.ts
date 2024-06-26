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
  AddLiquidityResult,
  AddLiquidityWethData,
  InputBody,
  RemoveLiquidityResult,
  RemoveLiquidityWethData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Yearn<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags yearn
   * @name AddLiquidity
   * @request POST:/yearn/{name}/add-liquidity
   * @secure
   */
  addLiquidity = (name: string, data: InputBody, params: RequestParams = {}) =>
    this.http.request<AddLiquidityResult, any>({
      path: `/yearn/${name}/add-liquidity`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags yearn
   * @name AddLiquidityWeth
   * @request POST:/yearn/{name}/add-liquidity-weth
   * @secure
   */
  addLiquidityWeth = (
    name: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<AddLiquidityWethData, any>({
      path: `/yearn/${name}/add-liquidity-weth`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags yearn
   * @name RemoveLiquidity
   * @request POST:/yearn/{name}/remove-liquidity
   * @secure
   */
  removeLiquidity = (
    name: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<RemoveLiquidityResult, any>({
      path: `/yearn/${name}/remove-liquidity`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags yearn
   * @name RemoveLiquidityWeth
   * @request POST:/yearn/{name}/remove-liquidity-weth
   * @secure
   */
  removeLiquidityWeth = (
    name: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<RemoveLiquidityWethData, any>({
      path: `/yearn/${name}/remove-liquidity-weth`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
