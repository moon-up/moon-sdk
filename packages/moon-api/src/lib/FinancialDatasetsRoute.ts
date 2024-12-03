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
  FinancialDatasetsGetAllFinancialsData,
  FinancialDatasetsGetAllFinancialsParams1PeriodEnum,
  FinancialDatasetsGetAvailableTickersData,
  FinancialDatasetsGetBalanceSheetsData,
  FinancialDatasetsGetBalanceSheetsParams1PeriodEnum,
  FinancialDatasetsGetCashFlowStatementsData,
  FinancialDatasetsGetCashFlowStatementsParams1PeriodEnum,
  FinancialDatasetsGetCompanyFactsData,
  FinancialDatasetsGetIncomeStatementsData,
  FinancialDatasetsGetIncomeStatementsParams1PeriodEnum,
  FinancialDatasetsGetInsiderTransactionsData,
  FinancialDatasetsGetOptionsChainData,
  FinancialDatasetsGetOptionsChainParams1OptionTypeEnum,
  FinancialDatasetsGetPriceSnapshotData,
  FinancialDatasetsGetPricesData,
  FinancialDatasetsGetSegmentedRevenuesData,
  FinancialDatasetsGetSegmentedRevenuesParams1PeriodEnum,
  FinancialDatasetsSearchFinancialsByLineItemsData,
  FinancialDatasetsSearchFinancialsByLineItemsPayload,
  FinancialDatasetsSearchFinancialsData,
  PriceInterval,
  SearchRequest,
} from './data-contracts';

export namespace FinancialDatasets {
  /**
   * @description Retrieves all financials for a given ticker symbol.
   * @tags Financial Datasets
   * @name FinancialDatasetsGetAllFinancials
   * @request GET:/financial-datasets/all-financials/{ticker}
   * @secure
   */
  export namespace FinancialDatasetsGetAllFinancials {
    export type RequestParams = {
      /** - The ticker symbol of the company. */
      ticker: string;
    };
    export type RequestQuery = {
      /** - The CIK number of the company. */
      cik?: string;
      /**
       * - The maximum number of financials to return.
       * @format double
       */
      limit?: number;
      /** - The period type of the financials. */
      period: FinancialDatasetsGetAllFinancialsParams1PeriodEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = FinancialDatasetsGetAllFinancialsData;
  }

  /**
   * @description Retrieves the available tickers.
   * @tags Financial Datasets
   * @name FinancialDatasetsGetAvailableTickers
   * @request GET:/financial-datasets/available-tickers
   * @secure
   */
  export namespace FinancialDatasetsGetAvailableTickers {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = FinancialDatasetsGetAvailableTickersData;
  }

  /**
   * @description Retrieves the balance sheets for a given ticker symbol.
   * @tags Financial Datasets
   * @name FinancialDatasetsGetBalanceSheets
   * @request GET:/financial-datasets/balance-sheets/{ticker}
   * @secure
   */
  export namespace FinancialDatasetsGetBalanceSheets {
    export type RequestParams = {
      /** - The ticker symbol of the company. */
      ticker: string;
    };
    export type RequestQuery = {
      /** - The CIK number of the company. */
      cik?: string;
      /**
       * - The maximum number of balance sheets to return.
       * @format double
       */
      limit?: number;
      /** - The period type of the balance sheets. */
      period: FinancialDatasetsGetBalanceSheetsParams1PeriodEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = FinancialDatasetsGetBalanceSheetsData;
  }

  /**
   * @description Retrieves the cash flow statements for a given ticker symbol.
   * @tags Financial Datasets
   * @name FinancialDatasetsGetCashFlowStatements
   * @request GET:/financial-datasets/cash-flow-statements/{ticker}
   * @secure
   */
  export namespace FinancialDatasetsGetCashFlowStatements {
    export type RequestParams = {
      /** - The ticker symbol of the company. */
      ticker: string;
    };
    export type RequestQuery = {
      /** - The CIK number of the company. */
      cik?: string;
      /**
       * - The maximum number of cash flow statements to return.
       * @format double
       */
      limit?: number;
      /** - The period type of the cash flow statements. */
      period: FinancialDatasetsGetCashFlowStatementsParams1PeriodEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = FinancialDatasetsGetCashFlowStatementsData;
  }

  /**
   * @description Retrieves the company facts for a given ticker symbol.
   * @tags Financial Datasets
   * @name FinancialDatasetsGetCompanyFacts
   * @request GET:/financial-datasets/company-facts/{ticker}
   * @secure
   */
  export namespace FinancialDatasetsGetCompanyFacts {
    export type RequestParams = {
      /** - The ticker symbol of the company. */
      ticker: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = FinancialDatasetsGetCompanyFactsData;
  }

  /**
   * @description Retrieves the income statements for a given ticker symbol.
   * @tags Financial Datasets
   * @name FinancialDatasetsGetIncomeStatements
   * @request GET:/financial-datasets/income-statements/{ticker}
   * @secure
   */
  export namespace FinancialDatasetsGetIncomeStatements {
    export type RequestParams = {
      /** - The ticker symbol of the company. */
      ticker: string;
    };
    export type RequestQuery = {
      /** - The CIK number of the company. */
      cik?: string;
      /**
       * - The maximum number of income statements to return.
       * @format double
       */
      limit?: number;
      /** - The period type of the income statements. */
      period: FinancialDatasetsGetIncomeStatementsParams1PeriodEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = FinancialDatasetsGetIncomeStatementsData;
  }

  /**
   * @description Retrieves the insider transactions for a given ticker symbol.
   * @tags Financial Datasets
   * @name FinancialDatasetsGetInsiderTransactions
   * @request GET:/financial-datasets/insider-transactions/{ticker}
   * @secure
   */
  export namespace FinancialDatasetsGetInsiderTransactions {
    export type RequestParams = {
      /** - The ticker symbol of the company. */
      ticker: string;
    };
    export type RequestQuery = {
      /**
       * - The maximum number of insider transactions to return.
       * @format double
       */
      limit?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = FinancialDatasetsGetInsiderTransactionsData;
  }

  /**
   * @description Retrieves the options chain for a given ticker symbol.
   * @tags Financial Datasets
   * @name FinancialDatasetsGetOptionsChain
   * @request GET:/financial-datasets/options-chain/{ticker}
   * @secure
   */
  export namespace FinancialDatasetsGetOptionsChain {
    export type RequestParams = {
      /** - The ticker symbol of the company. */
      ticker: string;
    };
    export type RequestQuery = {
      /** - The expiration date of the options. */
      expiration_date?: string;
      /** - The type of option (call or put). */
      option_type?: FinancialDatasetsGetOptionsChainParams1OptionTypeEnum;
      /**
       * - The strike price of the options.
       * @format double
       */
      strike_price?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = FinancialDatasetsGetOptionsChainData;
  }

  /**
   * @description Retrieves the price data for a given ticker symbol.
   * @tags Financial Datasets
   * @name FinancialDatasetsGetPrices
   * @request GET:/financial-datasets/prices/{ticker}
   * @secure
   */
  export namespace FinancialDatasetsGetPrices {
    export type RequestParams = {
      /** - The ticker symbol of the company. */
      ticker: string;
    };
    export type RequestQuery = {
      /** - The end date of the price data. */
      end_date: string;
      /** - The interval of the price data. */
      interval: PriceInterval;
      /**
       * - The interval multiplier of the price data.
       * @format double
       */
      interval_multiplier: number;
      /**
       * - The maximum number of price data to return.
       * @format double
       */
      limit?: number;
      /** - The start date of the price data. */
      start_date: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = FinancialDatasetsGetPricesData;
  }

  /**
   * @description Retrieves the price snapshot for a given ticker symbol.
   * @tags Financial Datasets
   * @name FinancialDatasetsGetPriceSnapshot
   * @request GET:/financial-datasets/price-snapshot/{ticker}
   * @secure
   */
  export namespace FinancialDatasetsGetPriceSnapshot {
    export type RequestParams = {
      /** - The ticker symbol of the company. */
      ticker: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = FinancialDatasetsGetPriceSnapshotData;
  }

  /**
   * @description Retrieves the segmented revenues for a given ticker symbol.
   * @tags Financial Datasets
   * @name FinancialDatasetsGetSegmentedRevenues
   * @request GET:/financial-datasets/segmented-revenues/{ticker}
   * @secure
   */
  export namespace FinancialDatasetsGetSegmentedRevenues {
    export type RequestParams = {
      /** - The ticker symbol of the company. */
      ticker: string;
    };
    export type RequestQuery = {
      /** - The CIK number of the company. */
      cik?: string;
      /**
       * - The maximum number of segmented revenues to return.
       * @format double
       */
      limit?: number;
      /** - The period type of the segmented revenues. */
      period: FinancialDatasetsGetSegmentedRevenuesParams1PeriodEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = FinancialDatasetsGetSegmentedRevenuesData;
  }

  /**
   * @description Searches financials for a given search request.
   * @tags Financial Datasets
   * @name FinancialDatasetsSearchFinancials
   * @request POST:/financial-datasets/search-financials
   * @secure
   */
  export namespace FinancialDatasetsSearchFinancials {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SearchRequest;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = FinancialDatasetsSearchFinancialsData;
  }

  /**
   * @description Searches financials by line items.
   * @tags Financial Datasets
   * @name FinancialDatasetsSearchFinancialsByLineItems
   * @request POST:/financial-datasets/search-line-items
   * @secure
   */
  export namespace FinancialDatasetsSearchFinancialsByLineItems {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody =
      FinancialDatasetsSearchFinancialsByLineItemsPayload;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = FinancialDatasetsSearchFinancialsByLineItemsData;
  }
}
