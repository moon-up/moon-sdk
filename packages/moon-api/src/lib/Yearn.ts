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

import { AccountControllerResponse, InputBody } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Yearn<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags yearn
   * @name AddLiquidity
   * @request POST:/yearn/{name}/add-liquidity
   * @secure
   */
  addLiquidity = (name: string, data: InputBody, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/yearn/${name}/add-liquidity`,
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
    this.request<AccountControllerResponse, any>({
      path: `/yearn/${name}/remove-liquidity`,
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
    this.request<AccountControllerResponse, any>({
      path: `/yearn/${name}/add-liquidity-weth`,
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
    this.request<AccountControllerResponse, any>({
      path: `/yearn/${name}/remove-liquidity-weth`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
