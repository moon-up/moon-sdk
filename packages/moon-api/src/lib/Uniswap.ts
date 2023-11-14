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

import { AccountControllerResponse, UniswapInput } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Uniswap<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags UniSwap
   * @name AddLiquidity
   * @request POST:/uniswap/{name}/add-liquidity
   * @secure
   */
  addLiquidity = (
    name: string,
    data: UniswapInput,
    params: RequestParams = {}
  ) =>
    this.request<AccountControllerResponse, any>({
      path: `/uniswap/${name}/add-liquidity`,
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
   * @tags UniSwap
   * @name RemoveLiquidity
   * @request POST:/uniswap/{name}/remove-liquidity
   * @secure
   */
  removeLiquidity = (
    name: string,
    data: UniswapInput,
    params: RequestParams = {}
  ) =>
    this.request<AccountControllerResponse, any>({
      path: `/uniswap/${name}/remove-liquidity`,
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
   * @tags UniSwap
   * @name SwapExactTokensForTokens
   * @request POST:/uniswap/{name}/swap-exact-tokens-for-tokens
   * @secure
   */
  swapExactTokensForTokens = (
    name: string,
    data: UniswapInput,
    params: RequestParams = {}
  ) =>
    this.request<AccountControllerResponse, any>({
      path: `/uniswap/${name}/swap-exact-tokens-for-tokens`,
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
   * @tags UniSwap
   * @name SwapExactEthForTokens
   * @request POST:/uniswap/{name}/swap-exact-eth-for-tokens
   * @secure
   */
  swapExactEthForTokens = (
    name: string,
    data: UniswapInput,
    params: RequestParams = {}
  ) =>
    this.request<AccountControllerResponse, any>({
      path: `/uniswap/${name}/swap-exact-eth-for-tokens`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
