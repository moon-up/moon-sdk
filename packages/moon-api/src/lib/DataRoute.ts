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
  ChartsGetChartAnalysisData,
  ChartsGetChartAnalysisParamsTimeframeEnum,
  DataExecuteCustomSupabaseQueryData,
  DataExecuteCustomSupabaseQueryPayload,
  DataGetPortfolioFetchStatusData,
  DataGetTokensMetadataData,
  DataGetUserWalletPortfolioData,
  DataGetWalletNfTsData,
  DataGetWalletTokenBalancesData,
  DataGetWalletTransactionHistoryData,
} from './data-contracts';

export namespace Data {
  /**
   * @description Retrieves the chart analysis for a given trading symbol and timeframe.
   * @tags Data
   * @name ChartsGetChartAnalysis
   * @request GET:/data/analysis/{symbol}/{timeframe}
   * @secure
   */
  export namespace ChartsGetChartAnalysis {
    export type RequestParams = {
      /** - The trading view symbol for which the chart analysis is requested. */
      symbol: string;
      /**
       * - The timeframe for the chart analysis. Defaults to "1D". Can be "1D", "4H", or "1H".
       * @default "1D"
       */
      timeframe: ChartsGetChartAnalysisParamsTimeframeEnum;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = ChartsGetChartAnalysisData;
  }

  /**
   * @description Executes a query using the LLMSupabaseQueryGenerator and returns the result.
   * @tags Data
   * @name DataExecuteCustomSupabaseQuery
   * @request POST:/data/query
   * @secure
   */
  export namespace DataExecuteCustomSupabaseQuery {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = DataExecuteCustomSupabaseQueryPayload;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = DataExecuteCustomSupabaseQueryData;
  }

  /**
   * @description Retrieves the status of a portfolio job.
   * @tags Data
   * @name DataGetPortfolioFetchStatus
   * @request GET:/data/portfolio/status/{jobId}
   * @secure
   */
  export namespace DataGetPortfolioFetchStatus {
    export type RequestParams = {
      /** - The ID of the job to retrieve the status for. */
      jobId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = DataGetPortfolioFetchStatusData;
  }

  /**
   * @description Retrieves token metadata from the Moralis service.
   * @tags Data
   * @name DataGetTokensMetadata
   * @request GET:/data/token-metadata
   * @secure
   */
  export namespace DataGetTokensMetadata {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - An array of token addresses to fetch metadata for. */
      addresses: string[];
      /** - The blockchain network identifier. */
      chain: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = DataGetTokensMetadataData;
  }

  /**
   * @description Retrieves the user's portfolio based on the provided wallet address.
   * @tags Data
   * @name DataGetUserWalletPortfolio
   * @request GET:/data/{address}/portfolio
   * @secure
   */
  export namespace DataGetUserWalletPortfolio {
    export type RequestParams = {
      /** - The wallet address of the user. */
      address: string;
    };
    export type RequestQuery = {
      /**
       * - The page number for pagination (default is 1).
       * @format double
       * @default 1
       */
      page?: number;
      /**
       * - The number of items per page for pagination (default is 100).
       * @format double
       * @default 100
       */
      pageSize?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = DataGetUserWalletPortfolioData;
  }

  /**
   * No description
   * @tags Data
   * @name DataGetWalletNfTs
   * @request GET:/data/{address}/nfts
   * @secure
   */
  export namespace DataGetWalletNfTs {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {
      chain: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DataGetWalletNfTsData;
  }

  /**
   * @description Retrieves the wallet balance for a given address.
   * @tags Data
   * @name DataGetWalletTokenBalances
   * @request GET:/data/{address}/balance
   * @secure
   */
  export namespace DataGetWalletTokenBalances {
    export type RequestParams = {
      /** - The wallet address to retrieve the balance for. */
      address: string;
    };
    export type RequestQuery = {
      /** - The blockchain network to query. */
      chain: string;
      /** - Optional flag to exclude native currency from the balance. */
      excludeNative?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = DataGetWalletTokenBalancesData;
  }

  /**
   * @description Retrieves the wallet history for a given address and blockchain chain.
   * @tags Data
   * @name DataGetWalletTransactionHistory
   * @request GET:/data/{address}/history
   * @secure
   */
  export namespace DataGetWalletTransactionHistory {
    export type RequestParams = {
      /** - The wallet address to retrieve history for. */
      address: string;
    };
    export type RequestQuery = {
      /** - The blockchain chain to retrieve history from. */
      chain: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = DataGetWalletTransactionHistoryData;
  }
}
