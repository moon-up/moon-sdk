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
  GetQuoteResult,
  GetSupportedChainsData,
  GetSupportedProvidersData,
  PostQuoteResult,
} from './data-contracts';

export namespace Thorswap {
  /**
   * No description
   * @name GetGasPrice
   * @request GET:/thorswap/gasPrice
   */
  export namespace GetGasPrice {
    export type RequestParams = {};
    export type RequestQuery = {
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetGasPriceData;
  }

  /**
   * No description
   * @name GetQuote
   * @request GET:/thorswap/quote
   */
  export namespace GetQuote {
    export type RequestParams = {};
    export type RequestQuery = {
      affiliateAddress?: string;
      /** @format double */
      affiliateBasisPoints?: number;
      allowSmartContractRecipient?: boolean;
      buyAsset: string;
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
    export type RequestHeaders = {};
    export type ResponseBody = GetQuoteResult;
  }

  /**
   * No description
   * @name GetSupportedChains
   * @request GET:/thorswap/chains
   */
  export namespace GetSupportedChains {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetSupportedChainsData;
  }

  /**
   * No description
   * @name GetSupportedProviders
   * @request GET:/thorswap/providers
   */
  export namespace GetSupportedProviders {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetSupportedProvidersData;
  }

  /**
   * No description
   * @name PostQuote
   * @request POST:/thorswap/{accountName}/quote
   */
  export namespace PostQuote {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {
      affiliateAddress?: string;
      /** @format double */
      affiliateBasisPoints?: number;
      allowSmartContractRecipient?: boolean;
      buyAsset: string;
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
    export type RequestHeaders = {};
    export type ResponseBody = PostQuoteResult;
  }
}
