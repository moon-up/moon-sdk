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
  AddLiquidityData,
  RemoveLiquidityData,
  SwapExactEthForTokensData,
  SwapExactTokensForTokensData,
  UniswapInput,
} from './data-contracts';

export namespace Uniswap {
  /**
   * No description
   * @tags UniSwap
   * @name AddLiquidity
   * @request POST:/uniswap/{name}/add-liquidity
   * @secure
   */
  export namespace AddLiquidity {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = AddLiquidityData;
  }

  /**
   * No description
   * @tags UniSwap
   * @name RemoveLiquidity
   * @request POST:/uniswap/{name}/remove-liquidity
   * @secure
   */
  export namespace RemoveLiquidity {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = RemoveLiquidityData;
  }

  /**
   * No description
   * @tags UniSwap
   * @name SwapExactEthForTokens
   * @request POST:/uniswap/{name}/swap-exact-eth-for-tokens
   * @secure
   */
  export namespace SwapExactEthForTokens {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SwapExactEthForTokensData;
  }

  /**
   * No description
   * @tags UniSwap
   * @name SwapExactTokensForTokens
   * @request POST:/uniswap/{name}/swap-exact-tokens-for-tokens
   * @secure
   */
  export namespace SwapExactTokensForTokens {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SwapExactTokensForTokensData;
  }
}
