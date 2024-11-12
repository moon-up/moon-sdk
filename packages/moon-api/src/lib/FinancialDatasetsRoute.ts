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
  GetAllFinancialsData,
  GetAllFinancialsParams1PeriodEnum,
  GetAvailableTickersData,
  GetBalanceSheetsData,
  GetBalanceSheetsParams1PeriodEnum,
  GetCashFlowStatementsData,
  GetCashFlowStatementsParams1PeriodEnum,
  GetCompanyFactsData,
  GetIncomeStatementsData,
  GetIncomeStatementsParams1PeriodEnum,
  GetInsiderTransactionsData,
  GetOptionsChainData,
  GetOptionsChainParams1OptionTypeEnum,
  GetPriceSnapshotData,
  GetPricesData,
  GetSegmentedRevenuesData,
  GetSegmentedRevenuesParams1PeriodEnum,
  PriceInterval,
  SearchFinancialsByLineItemsData,
  SearchFinancialsByLineItemsPayload,
  SearchFinancialsData,
  SearchRequest,
} from './data-contracts';

export namespace FinancialDatasets {
  /**
   * No description
   * @tags Financial Datasets
   * @name GetAllFinancials
   * @request GET:/financial-datasets/all-financials/{ticker}
   * @secure
   */
  export namespace GetAllFinancials {
    export type RequestParams = {
      ticker: string;
    };
    export type RequestQuery = {
      cik?: string;
      /** @format double */
      limit?: number;
      period: GetAllFinancialsParams1PeriodEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetAllFinancialsData;
  }

  /**
   * No description
   * @tags Financial Datasets
   * @name GetAvailableTickers
   * @request GET:/financial-datasets/available-tickers
   * @secure
   */
  export namespace GetAvailableTickers {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetAvailableTickersData;
  }

  /**
   * No description
   * @tags Financial Datasets
   * @name GetBalanceSheets
   * @request GET:/financial-datasets/balance-sheets/{ticker}
   * @secure
   */
  export namespace GetBalanceSheets {
    export type RequestParams = {
      ticker: string;
    };
    export type RequestQuery = {
      cik?: string;
      /** @format double */
      limit?: number;
      period: GetBalanceSheetsParams1PeriodEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetBalanceSheetsData;
  }

  /**
   * No description
   * @tags Financial Datasets
   * @name GetCashFlowStatements
   * @request GET:/financial-datasets/cash-flow-statements/{ticker}
   * @secure
   */
  export namespace GetCashFlowStatements {
    export type RequestParams = {
      ticker: string;
    };
    export type RequestQuery = {
      cik?: string;
      /** @format double */
      limit?: number;
      period: GetCashFlowStatementsParams1PeriodEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetCashFlowStatementsData;
  }

  /**
   * No description
   * @tags Financial Datasets
   * @name GetCompanyFacts
   * @request GET:/financial-datasets/company-facts/{ticker}
   * @secure
   */
  export namespace GetCompanyFacts {
    export type RequestParams = {
      ticker: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetCompanyFactsData;
  }

  /**
   * No description
   * @tags Financial Datasets
   * @name GetIncomeStatements
   * @request GET:/financial-datasets/income-statements/{ticker}
   * @secure
   */
  export namespace GetIncomeStatements {
    export type RequestParams = {
      ticker: string;
    };
    export type RequestQuery = {
      cik?: string;
      /** @format double */
      limit?: number;
      period: GetIncomeStatementsParams1PeriodEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetIncomeStatementsData;
  }

  /**
   * No description
   * @tags Financial Datasets
   * @name GetInsiderTransactions
   * @request GET:/financial-datasets/insider-transactions/{ticker}
   * @secure
   */
  export namespace GetInsiderTransactions {
    export type RequestParams = {
      ticker: string;
    };
    export type RequestQuery = {
      /** @format double */
      limit?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetInsiderTransactionsData;
  }

  /**
   * No description
   * @tags Financial Datasets
   * @name GetOptionsChain
   * @request GET:/financial-datasets/options-chain/{ticker}
   * @secure
   */
  export namespace GetOptionsChain {
    export type RequestParams = {
      ticker: string;
    };
    export type RequestQuery = {
      expiration_date?: string;
      option_type?: GetOptionsChainParams1OptionTypeEnum;
      /** @format double */
      strike_price?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetOptionsChainData;
  }

  /**
   * No description
   * @tags Financial Datasets
   * @name GetPrices
   * @request GET:/financial-datasets/prices/{ticker}
   * @secure
   */
  export namespace GetPrices {
    export type RequestParams = {
      ticker: string;
    };
    export type RequestQuery = {
      end_date: string;
      interval: PriceInterval;
      /** @format double */
      interval_multiplier: number;
      /** @format double */
      limit?: number;
      start_date: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetPricesData;
  }

  /**
   * No description
   * @tags Financial Datasets
   * @name GetPriceSnapshot
   * @request GET:/financial-datasets/price-snapshot/{ticker}
   * @secure
   */
  export namespace GetPriceSnapshot {
    export type RequestParams = {
      ticker: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetPriceSnapshotData;
  }

  /**
   * No description
   * @tags Financial Datasets
   * @name GetSegmentedRevenues
   * @request GET:/financial-datasets/segmented-revenues/{ticker}
   * @secure
   */
  export namespace GetSegmentedRevenues {
    export type RequestParams = {
      ticker: string;
    };
    export type RequestQuery = {
      cik?: string;
      /** @format double */
      limit?: number;
      period: GetSegmentedRevenuesParams1PeriodEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetSegmentedRevenuesData;
  }

  /**
   * No description
   * @tags Financial Datasets
   * @name SearchFinancials
   * @request POST:/financial-datasets/search-financials
   * @secure
   */
  export namespace SearchFinancials {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SearchRequest;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SearchFinancialsData;
  }

  /**
   * No description
   * @tags Financial Datasets
   * @name SearchFinancialsByLineItems
   * @request POST:/financial-datasets/search-line-items
   * @secure
   */
  export namespace SearchFinancialsByLineItems {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SearchFinancialsByLineItemsPayload;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SearchFinancialsByLineItemsData;
  }
}
