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
  GetGasPriceData,
  GetQuoteData1,
  GetSupportedChainsResult,
  GetSupportedProvidersData,
  SwapInput,
  SwapOutput,
} from './data-contracts';

export namespace Thorswap {
  /**
   * No description
   * @tags ThorSwap
   * @name GetGasPrice
   * @request GET:/thorswap/gasPrice
   * @secure
   */
  export namespace GetGasPrice {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetGasPriceData;
  }

  /**
   * No description
   * @tags ThorSwap
   * @name GetQuote
   * @request GET:/thorswap/quote
   * @secure
   */
  export namespace GetQuote {
    export type RequestParams = {};
    export type RequestQuery = {
      affiliateAddress?: string;
      /** @format double */
      affiliateBasisPoints?: number;
      allowSmartContractRecipient?: boolean;
      buyAsset: string;
      chainId: string;
      /** @format double */
      limit?: number;
      preferredProvider?: string;
      providers?: string[];
      recipientAddress: string;
      /** @format double */
      sellAmount: number;
      sellAsset: string;
      senderAddress: string;
      /** @format double */
      slippage?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetQuoteData1;
  }

  /**
   * No description
   * @tags ThorSwap
   * @name GetSupportedChains
   * @request GET:/thorswap/supportedChains
   * @secure
   */
  export namespace GetSupportedChains {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetSupportedChainsResult;
  }

  /**
   * No description
   * @tags ThorSwap
   * @name GetSupportedProviders
   * @request GET:/thorswap/supportedProviders
   * @secure
   */
  export namespace GetSupportedProviders {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetSupportedProvidersData;
  }

  /**
   * No description
   * @tags ThorSwap
   * @name Swap
   * @request POST:/thorswap/swap
   * @secure
   */
  export namespace Swap {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SwapInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SwapOutput;
  }
}
