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
  JupiterGetIndexedRouteMapData,
  JupiterGetProgramIdToLabelData,
  JupiterGetQuoteData,
  JupiterGetSwapInstructionsData,
  JupiterGetTokensData,
  JupiterSwapData,
  OmitJupiterInputBodyAccountName,
} from './data-contracts';

export namespace Jupiter {
  /**
   * @description Retrieves the indexed route map.
   * @tags Jupiter
   * @name JupiterGetIndexedRouteMap
   * @request GET:/jupiter/indexedRouteMap
   * @secure
   */
  export namespace JupiterGetIndexedRouteMap {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - A boolean value indicating whether to only include direct routes in the map. */
      onlyDirectRoutes?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = JupiterGetIndexedRouteMapData;
  }

  /**
   * @description Retrieves the program ID to label mapping.
   * @tags Jupiter
   * @name JupiterGetProgramIdToLabel
   * @request GET:/jupiter/programIdToLabel
   * @secure
   */
  export namespace JupiterGetProgramIdToLabel {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = JupiterGetProgramIdToLabelData;
  }

  /**
   * @description Retrieves the tokens available on the Jupiter platform.
   * @tags Jupiter
   * @name JupiterGetQuote
   * @request POST:/jupiter/{accountName}/quote
   * @secure
   */
  export namespace JupiterGetQuote {
    export type RequestParams = {
      /** - The name of the account to perform the swap for. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = OmitJupiterInputBodyAccountName;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = JupiterGetQuoteData;
  }

  /**
   * @description Retrieves swap instructions for a given account.
   * @tags Jupiter
   * @name JupiterGetSwapInstructions
   * @request POST:/jupiter/{accountName}/swapInstructions
   * @secure
   */
  export namespace JupiterGetSwapInstructions {
    export type RequestParams = {
      /** - The name of the account for which to retrieve swap instructions. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = OmitJupiterInputBodyAccountName;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = JupiterGetSwapInstructionsData;
  }

  /**
   * @description Retrieves the tokens available on the Jupiter platform.
   * @tags Jupiter
   * @name JupiterGetTokens
   * @request GET:/jupiter/tokens
   * @secure
   */
  export namespace JupiterGetTokens {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = JupiterGetTokensData;
  }

  /**
   * @description Handles the swap operation for a given account.
   * @tags Jupiter
   * @name JupiterSwap
   * @request POST:/jupiter/{accountName}/swap
   * @secure
   */
  export namespace JupiterSwap {
    export type RequestParams = {
      /** - The name of the account to perform the swap for. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = OmitJupiterInputBodyAccountName;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = JupiterSwapData;
  }
}
