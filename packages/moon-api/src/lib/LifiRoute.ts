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
  FetchTokenDetailsData,
  FetchTokensData,
  GetAllPossibleConnectionsData,
  GetChainsData,
  GetChainsParams1OptionalChainTypesEnum,
  GetConnectionsData,
  GetQuoteData,
  GetQuoteParams1OrderEnum,
  GetToolsData,
  GetstatusData,
  PostQuoteData,
  PostQuoteParams1OrderEnum,
} from './data-contracts';

export namespace Lifi {
  /**
   * No description
   * @name FetchTokenDetails
   * @request GET:/lifi/token
   */
  export namespace FetchTokenDetails {
    export type RequestParams = {};
    export type RequestQuery = {
      chain: string;
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FetchTokenDetailsData;
  }

  /**
   * No description
   * @name FetchTokens
   * @request GET:/lifi/tokens
   */
  export namespace FetchTokens {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FetchTokensData;
  }

  /**
   * No description
   * @name GetAllPossibleConnections
   * @request GET:/lifi/allPossibleConnections
   */
  export namespace GetAllPossibleConnections {
    export type RequestParams = {};
    export type RequestQuery = {
      toChain: string;
      toToken: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetAllPossibleConnectionsData;
  }

  /**
   * No description
   * @name GetChains
   * @request GET:/lifi/chains
   */
  export namespace GetChains {
    export type RequestParams = {};
    export type RequestQuery = {
      optionalChainTypes?: GetChainsParams1OptionalChainTypesEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetChainsData;
  }

  /**
   * No description
   * @name GetConnections
   * @request GET:/lifi/connections
   */
  export namespace GetConnections {
    export type RequestParams = {};
    export type RequestQuery = {
      chainTypes?: string;
      fromChain: string;
      fromToken: string;
      toChain: string;
      toToken: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetConnectionsData;
  }

  /**
   * No description
   * @name GetQuote
   * @request GET:/lifi/quote
   */
  export namespace GetQuote {
    export type RequestParams = {};
    export type RequestQuery = {
      allowBridges?: string[];
      allowExchanges?: string[];
      denyBridges?: string[];
      denyExchanges?: string[];
      /** @format double */
      fee?: number;
      fromAddress: string;
      fromAmount: string;
      fromChain: string;
      fromToken: string;
      integrator?: string;
      order?: GetQuoteParams1OrderEnum;
      preferBridges?: string[];
      preferExchanges?: string[];
      referrer?: string;
      /** @format double */
      slippage?: number;
      toAddress?: string;
      toChain: string;
      toToken: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetQuoteData;
  }

  /**
   * No description
   * @name Getstatus
   * @request GET:/lifi/status
   */
  export namespace Getstatus {
    export type RequestParams = {};
    export type RequestQuery = {
      txHash: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetstatusData;
  }

  /**
   * No description
   * @name GetTools
   * @request GET:/lifi/tools
   */
  export namespace GetTools {
    export type RequestParams = {};
    export type RequestQuery = {
      chains?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetToolsData;
  }

  /**
   * No description
   * @name PostQuote
   * @request POST:/lifi/{accountName}/quote
   */
  export namespace PostQuote {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {
      allowBridges?: string[];
      allowExchanges?: string[];
      denyBridges?: string[];
      denyExchanges?: string[];
      /** @format double */
      fee?: number;
      fromAddress: string;
      fromAmount: string;
      fromChain: string;
      fromToken: string;
      integrator?: string;
      order?: PostQuoteParams1OrderEnum;
      preferBridges?: string[];
      preferExchanges?: string[];
      referrer?: string;
      /** @format double */
      slippage?: number;
      toAddress?: string;
      toChain: string;
      toToken: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = PostQuoteData;
  }
}
