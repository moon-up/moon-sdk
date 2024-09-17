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
  AssembleRequest,
  AssembleTransactionData,
  GetContractInfoData,
  GetContractInfoParams1VersionEnum,
  GetCurrentBlockData,
  GetExecutorAddressData,
  GetExecutorAddressParams1VersionEnum,
  GetLiquiditySourcesData,
  GetQuoteResult,
  GetRouterAddressData,
  GetRouterAddressParams1VersionEnum,
  GetSupportedChainsData,
  GetSupportedTokensData,
  OdosSwapInputBody,
  QuoteRequestV2,
  SwapData,
} from './data-contracts';

export namespace Odos {
  /**
   * No description
   * @tags Odos
   * @name AssembleTransaction
   * @request POST:/odos/assemble-transaction
   * @secure
   */
  export namespace AssembleTransaction {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AssembleRequest;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = AssembleTransactionData;
  }

  /**
   * No description
   * @tags Odos
   * @name GetContractInfo
   * @request GET:/odos/contract-info
   * @secure
   */
  export namespace GetContractInfo {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @format double */
      chainId: number;
      version: GetContractInfoParams1VersionEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetContractInfoData;
  }

  /**
   * No description
   * @tags Odos
   * @name GetCurrentBlock
   * @request GET:/odos/current-block
   * @secure
   */
  export namespace GetCurrentBlock {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @format double */
      chainId: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetCurrentBlockData;
  }

  /**
   * No description
   * @tags Odos
   * @name GetExecutorAddress
   * @request GET:/odos/executor-address
   * @secure
   */
  export namespace GetExecutorAddress {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @format double */
      chainId: number;
      version: GetExecutorAddressParams1VersionEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetExecutorAddressData;
  }

  /**
   * No description
   * @tags Odos
   * @name GetLiquiditySources
   * @request GET:/odos/liquidity-sources
   * @secure
   */
  export namespace GetLiquiditySources {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @format double */
      chainId: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetLiquiditySourcesData;
  }

  /**
   * No description
   * @tags Odos
   * @name GetQuote
   * @request POST:/odos/get-quote
   * @secure
   */
  export namespace GetQuote {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = QuoteRequestV2;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetQuoteResult;
  }

  /**
   * No description
   * @tags Odos
   * @name GetRouterAddress
   * @request GET:/odos/router-address
   * @secure
   */
  export namespace GetRouterAddress {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @format double */
      chainId: number;
      version: GetRouterAddressParams1VersionEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetRouterAddressData;
  }

  /**
   * No description
   * @tags Odos
   * @name GetSupportedChains
   * @request GET:/odos/supported-chains
   * @secure
   */
  export namespace GetSupportedChains {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetSupportedChainsData;
  }

  /**
   * No description
   * @tags Odos
   * @name GetSupportedTokens
   * @request GET:/odos/supported-tokens
   * @secure
   */
  export namespace GetSupportedTokens {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @format double */
      chainId: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetSupportedTokensData;
  }

  /**
   * No description
   * @tags Odos
   * @name Swap
   * @request POST:/odos/{accountName}/swap
   * @secure
   */
  export namespace Swap {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = OdosSwapInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SwapData;
  }
}
