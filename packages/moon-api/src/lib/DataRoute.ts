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
  GetChartAnalysisData,
  GetChartAnalysisParamsTimeframeEnum,
  GetNfTsData,
  GetPortfolioStatusData,
  GetTokenMetadataData,
  GetUserPortfolioData,
  GetWalletBalanceData,
  GetWalletHistoryData,
  QueryData,
  QueryPayload,
} from './data-contracts';

export namespace Data {
  /**
   * No description
   * @tags Data
   * @name GetChartAnalysis
   * @request GET:/data/analysis/{symbol}/{timeframe}
   * @secure
   */
  export namespace GetChartAnalysis {
    export type RequestParams = {
      symbol: string;
      /** @default "1D" */
      timeframe: GetChartAnalysisParamsTimeframeEnum;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetChartAnalysisData;
  }

  /**
   * No description
   * @tags Data
   * @name GetNfTs
   * @request GET:/data/{address}/nfts
   * @secure
   */
  export namespace GetNfTs {
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
    export type ResponseBody = GetNfTsData;
  }

  /**
   * No description
   * @tags Data
   * @name GetPortfolioStatus
   * @request GET:/data/portfolio/status/{jobId}
   * @secure
   */
  export namespace GetPortfolioStatus {
    export type RequestParams = {
      jobId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetPortfolioStatusData;
  }

  /**
   * No description
   * @tags Data
   * @name GetTokenMetadata
   * @request GET:/data/token-metadata
   * @secure
   */
  export namespace GetTokenMetadata {
    export type RequestParams = {};
    export type RequestQuery = {
      addresses: string[];
      chain: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetTokenMetadataData;
  }

  /**
   * No description
   * @tags Data
   * @name GetUserPortfolio
   * @request GET:/data/{address}/portfolio
   * @secure
   */
  export namespace GetUserPortfolio {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {
      /**
       * @format double
       * @default 1
       */
      page?: number;
      /**
       * @format double
       * @default 100
       */
      pageSize?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetUserPortfolioData;
  }

  /**
   * No description
   * @tags Data
   * @name GetWalletBalance
   * @request GET:/data/{address}/balance
   * @secure
   */
  export namespace GetWalletBalance {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {
      chain: string;
      excludeNative?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetWalletBalanceData;
  }

  /**
   * No description
   * @tags Data
   * @name GetWalletHistory
   * @request GET:/data/{address}/history
   * @secure
   */
  export namespace GetWalletHistory {
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
    export type ResponseBody = GetWalletHistoryData;
  }

  /**
   * No description
   * @tags Data
   * @name Query
   * @request POST:/data/query
   * @secure
   */
  export namespace Query {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = QueryPayload;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = QueryData;
  }
}
