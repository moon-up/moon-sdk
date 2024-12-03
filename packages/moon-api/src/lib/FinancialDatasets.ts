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
  FinancialDatasetsGetAllFinancialsParams,
  FinancialDatasetsGetAvailableTickersData,
  FinancialDatasetsGetBalanceSheetsData,
  FinancialDatasetsGetBalanceSheetsParams,
  FinancialDatasetsGetCashFlowStatementsData,
  FinancialDatasetsGetCashFlowStatementsParams,
  FinancialDatasetsGetCompanyFactsData,
  FinancialDatasetsGetIncomeStatementsData,
  FinancialDatasetsGetIncomeStatementsParams,
  FinancialDatasetsGetInsiderTransactionsData,
  FinancialDatasetsGetInsiderTransactionsParams,
  FinancialDatasetsGetOptionsChainData,
  FinancialDatasetsGetOptionsChainParams,
  FinancialDatasetsGetPriceSnapshotData,
  FinancialDatasetsGetPricesData,
  FinancialDatasetsGetPricesParams,
  FinancialDatasetsGetSegmentedRevenuesData,
  FinancialDatasetsGetSegmentedRevenuesParams,
  FinancialDatasetsSearchFinancialsByLineItemsData,
  FinancialDatasetsSearchFinancialsByLineItemsPayload,
  FinancialDatasetsSearchFinancialsData,
  SearchRequest,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class FinancialDatasets<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Retrieves all financials for a given ticker symbol.
   *
   * @tags Financial Datasets
   * @name FinancialDatasetsGetAllFinancials
   * @request GET:/financial-datasets/all-financials/{ticker}
   * @secure
   */
  financialDatasetsGetAllFinancials = (
    { ticker, ...query }: FinancialDatasetsGetAllFinancialsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<FinancialDatasetsGetAllFinancialsData, any>({
      path: `/financial-datasets/all-financials/${ticker}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the available tickers.
   *
   * @tags Financial Datasets
   * @name FinancialDatasetsGetAvailableTickers
   * @request GET:/financial-datasets/available-tickers
   * @secure
   */
  financialDatasetsGetAvailableTickers = (params: RequestParams = {}) =>
    this.http.request<FinancialDatasetsGetAvailableTickersData, any>({
      path: `/financial-datasets/available-tickers`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the balance sheets for a given ticker symbol.
   *
   * @tags Financial Datasets
   * @name FinancialDatasetsGetBalanceSheets
   * @request GET:/financial-datasets/balance-sheets/{ticker}
   * @secure
   */
  financialDatasetsGetBalanceSheets = (
    { ticker, ...query }: FinancialDatasetsGetBalanceSheetsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<FinancialDatasetsGetBalanceSheetsData, any>({
      path: `/financial-datasets/balance-sheets/${ticker}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the cash flow statements for a given ticker symbol.
   *
   * @tags Financial Datasets
   * @name FinancialDatasetsGetCashFlowStatements
   * @request GET:/financial-datasets/cash-flow-statements/{ticker}
   * @secure
   */
  financialDatasetsGetCashFlowStatements = (
    { ticker, ...query }: FinancialDatasetsGetCashFlowStatementsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<FinancialDatasetsGetCashFlowStatementsData, any>({
      path: `/financial-datasets/cash-flow-statements/${ticker}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the company facts for a given ticker symbol.
   *
   * @tags Financial Datasets
   * @name FinancialDatasetsGetCompanyFacts
   * @request GET:/financial-datasets/company-facts/{ticker}
   * @secure
   */
  financialDatasetsGetCompanyFacts = (
    ticker: string,
    params: RequestParams = {}
  ) =>
    this.http.request<FinancialDatasetsGetCompanyFactsData, any>({
      path: `/financial-datasets/company-facts/${ticker}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the income statements for a given ticker symbol.
   *
   * @tags Financial Datasets
   * @name FinancialDatasetsGetIncomeStatements
   * @request GET:/financial-datasets/income-statements/{ticker}
   * @secure
   */
  financialDatasetsGetIncomeStatements = (
    { ticker, ...query }: FinancialDatasetsGetIncomeStatementsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<FinancialDatasetsGetIncomeStatementsData, any>({
      path: `/financial-datasets/income-statements/${ticker}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the insider transactions for a given ticker symbol.
   *
   * @tags Financial Datasets
   * @name FinancialDatasetsGetInsiderTransactions
   * @request GET:/financial-datasets/insider-transactions/{ticker}
   * @secure
   */
  financialDatasetsGetInsiderTransactions = (
    { ticker, ...query }: FinancialDatasetsGetInsiderTransactionsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<FinancialDatasetsGetInsiderTransactionsData, any>({
      path: `/financial-datasets/insider-transactions/${ticker}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the options chain for a given ticker symbol.
   *
   * @tags Financial Datasets
   * @name FinancialDatasetsGetOptionsChain
   * @request GET:/financial-datasets/options-chain/{ticker}
   * @secure
   */
  financialDatasetsGetOptionsChain = (
    { ticker, ...query }: FinancialDatasetsGetOptionsChainParams,
    params: RequestParams = {}
  ) =>
    this.http.request<FinancialDatasetsGetOptionsChainData, any>({
      path: `/financial-datasets/options-chain/${ticker}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the price data for a given ticker symbol.
   *
   * @tags Financial Datasets
   * @name FinancialDatasetsGetPrices
   * @request GET:/financial-datasets/prices/{ticker}
   * @secure
   */
  financialDatasetsGetPrices = (
    { ticker, ...query }: FinancialDatasetsGetPricesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<FinancialDatasetsGetPricesData, any>({
      path: `/financial-datasets/prices/${ticker}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the price snapshot for a given ticker symbol.
   *
   * @tags Financial Datasets
   * @name FinancialDatasetsGetPriceSnapshot
   * @request GET:/financial-datasets/price-snapshot/{ticker}
   * @secure
   */
  financialDatasetsGetPriceSnapshot = (
    ticker: string,
    params: RequestParams = {}
  ) =>
    this.http.request<FinancialDatasetsGetPriceSnapshotData, any>({
      path: `/financial-datasets/price-snapshot/${ticker}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the segmented revenues for a given ticker symbol.
   *
   * @tags Financial Datasets
   * @name FinancialDatasetsGetSegmentedRevenues
   * @request GET:/financial-datasets/segmented-revenues/{ticker}
   * @secure
   */
  financialDatasetsGetSegmentedRevenues = (
    { ticker, ...query }: FinancialDatasetsGetSegmentedRevenuesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<FinancialDatasetsGetSegmentedRevenuesData, any>({
      path: `/financial-datasets/segmented-revenues/${ticker}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Searches financials for a given search request.
   *
   * @tags Financial Datasets
   * @name FinancialDatasetsSearchFinancials
   * @request POST:/financial-datasets/search-financials
   * @secure
   */
  financialDatasetsSearchFinancials = (
    data: SearchRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<FinancialDatasetsSearchFinancialsData, any>({
      path: `/financial-datasets/search-financials`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Searches financials by line items.
   *
   * @tags Financial Datasets
   * @name FinancialDatasetsSearchFinancialsByLineItems
   * @request POST:/financial-datasets/search-line-items
   * @secure
   */
  financialDatasetsSearchFinancialsByLineItems = (
    data: FinancialDatasetsSearchFinancialsByLineItemsPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<FinancialDatasetsSearchFinancialsByLineItemsData, any>({
      path: `/financial-datasets/search-line-items`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
