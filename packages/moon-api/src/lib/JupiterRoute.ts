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
  GetIndexedRouteMapData,
  GetProgramIdToLabelData,
  GetQuoteData,
  GetSwapInstructionsData,
  GetTokensData,
  OmitJupiterInputBodyAccountName,
  SwapData,
} from './data-contracts';

export namespace Jupiter {
  /**
   * No description
   * @tags Jupiter
   * @name GetIndexedRouteMap
   * @request GET:/jupiter/indexedRouteMap
   * @secure
   */
  export namespace GetIndexedRouteMap {
    export type RequestParams = {};
    export type RequestQuery = {
      onlyDirectRoutes?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetIndexedRouteMapData;
  }

  /**
   * No description
   * @tags Jupiter
   * @name GetProgramIdToLabel
   * @request GET:/jupiter/programIdToLabel
   * @secure
   */
  export namespace GetProgramIdToLabel {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetProgramIdToLabelData;
  }

  /**
   * No description
   * @tags Jupiter
   * @name GetQuote
   * @request POST:/jupiter/{accountName}/quote
   * @secure
   */
  export namespace GetQuote {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = OmitJupiterInputBodyAccountName;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetQuoteData;
  }

  /**
   * No description
   * @tags Jupiter
   * @name GetSwapInstructions
   * @request POST:/jupiter/{accountName}/swapInstructions
   * @secure
   */
  export namespace GetSwapInstructions {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = OmitJupiterInputBodyAccountName;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetSwapInstructionsData;
  }

  /**
   * No description
   * @tags Jupiter
   * @name GetTokens
   * @request GET:/jupiter/tokens
   * @secure
   */
  export namespace GetTokens {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetTokensData;
  }

  /**
   * No description
   * @tags Jupiter
   * @name Swap
   * @request POST:/jupiter/{accountName}/swap
   * @secure
   */
  export namespace Swap {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = OmitJupiterInputBodyAccountName;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SwapData;
  }
}
