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

export namespace Conveyorfinance {
  /**
   * No description
   * @tags ConveyorFinance
   * @name Swap
   * @request POST:/conveyorfinance/{name}/swap
   * @secure
   */
  export namespace Swap {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = TokenSwapParams;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SwapResult;
  }
}
