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

export namespace Yearn {
  /**
   * No description
   * @tags yearn
   * @name AddLiquidity
   * @request POST:/yearn/{name}/add-liquidity
   * @secure
   */
  export namespace AddLiquidity {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = AddLiquidityResult;
  }

  /**
   * No description
   * @tags yearn
   * @name AddLiquidityWeth
   * @request POST:/yearn/{name}/add-liquidity-weth
   * @secure
   */
  export namespace AddLiquidityWeth {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = AddLiquidityWethData;
  }

  /**
   * No description
   * @tags yearn
   * @name RemoveLiquidity
   * @request POST:/yearn/{name}/remove-liquidity
   * @secure
   */
  export namespace RemoveLiquidity {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = RemoveLiquidityResult;
  }

  /**
   * No description
   * @tags yearn
   * @name RemoveLiquidityWeth
   * @request POST:/yearn/{name}/remove-liquidity-weth
   * @secure
   */
  export namespace RemoveLiquidityWeth {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = RemoveLiquidityWethData;
  }
}
