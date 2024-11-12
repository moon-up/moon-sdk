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
  GetAllFinancialsParams,
  GetAvailableTickersData,
  GetBalanceSheetsData,
  GetBalanceSheetsParams,
  GetCashFlowStatementsData,
  GetCashFlowStatementsParams,
  GetCompanyFactsData,
  GetIncomeStatementsData,
  GetIncomeStatementsParams,
  GetInsiderTransactionsData,
  GetInsiderTransactionsParams,
  GetOptionsChainData,
  GetOptionsChainParams,
  GetPriceSnapshotData,
  GetPricesData,
  GetPricesParams,
  GetSegmentedRevenuesData,
  GetSegmentedRevenuesParams,
  SearchFinancialsByLineItemsData,
  SearchFinancialsByLineItemsPayload,
  SearchFinancialsData,
  SearchRequest,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class FinancialDatasets<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Financial Datasets
   * @name GetAllFinancials
   * @request GET:/financial-datasets/all-financials/{ticker}
   * @secure
   */
  getAllFinancials = (
    { ticker, ...query }: GetAllFinancialsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAllFinancialsData, any>({
      path: `/financial-datasets/all-financials/${ticker}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Financial Datasets
   * @name GetAvailableTickers
   * @request GET:/financial-datasets/available-tickers
   * @secure
   */
  getAvailableTickers = (params: RequestParams = {}) =>
    this.http.request<GetAvailableTickersData, any>({
      path: `/financial-datasets/available-tickers`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Financial Datasets
   * @name GetBalanceSheets
   * @request GET:/financial-datasets/balance-sheets/{ticker}
   * @secure
   */
  getBalanceSheets = (
    { ticker, ...query }: GetBalanceSheetsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetBalanceSheetsData, any>({
      path: `/financial-datasets/balance-sheets/${ticker}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Financial Datasets
   * @name GetCashFlowStatements
   * @request GET:/financial-datasets/cash-flow-statements/{ticker}
   * @secure
   */
  getCashFlowStatements = (
    { ticker, ...query }: GetCashFlowStatementsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetCashFlowStatementsData, any>({
      path: `/financial-datasets/cash-flow-statements/${ticker}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Financial Datasets
   * @name GetCompanyFacts
   * @request GET:/financial-datasets/company-facts/{ticker}
   * @secure
   */
  getCompanyFacts = (ticker: string, params: RequestParams = {}) =>
    this.http.request<GetCompanyFactsData, any>({
      path: `/financial-datasets/company-facts/${ticker}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Financial Datasets
   * @name GetIncomeStatements
   * @request GET:/financial-datasets/income-statements/{ticker}
   * @secure
   */
  getIncomeStatements = (
    { ticker, ...query }: GetIncomeStatementsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetIncomeStatementsData, any>({
      path: `/financial-datasets/income-statements/${ticker}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Financial Datasets
   * @name GetInsiderTransactions
   * @request GET:/financial-datasets/insider-transactions/{ticker}
   * @secure
   */
  getInsiderTransactions = (
    { ticker, ...query }: GetInsiderTransactionsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetInsiderTransactionsData, any>({
      path: `/financial-datasets/insider-transactions/${ticker}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Financial Datasets
   * @name GetOptionsChain
   * @request GET:/financial-datasets/options-chain/{ticker}
   * @secure
   */
  getOptionsChain = (
    { ticker, ...query }: GetOptionsChainParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetOptionsChainData, any>({
      path: `/financial-datasets/options-chain/${ticker}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Financial Datasets
   * @name GetPrices
   * @request GET:/financial-datasets/prices/{ticker}
   * @secure
   */
  getPrices = (
    { ticker, ...query }: GetPricesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetPricesData, any>({
      path: `/financial-datasets/prices/${ticker}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Financial Datasets
   * @name GetPriceSnapshot
   * @request GET:/financial-datasets/price-snapshot/{ticker}
   * @secure
   */
  getPriceSnapshot = (ticker: string, params: RequestParams = {}) =>
    this.http.request<GetPriceSnapshotData, any>({
      path: `/financial-datasets/price-snapshot/${ticker}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Financial Datasets
   * @name GetSegmentedRevenues
   * @request GET:/financial-datasets/segmented-revenues/{ticker}
   * @secure
   */
  getSegmentedRevenues = (
    { ticker, ...query }: GetSegmentedRevenuesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetSegmentedRevenuesData, any>({
      path: `/financial-datasets/segmented-revenues/${ticker}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Financial Datasets
   * @name SearchFinancials
   * @request POST:/financial-datasets/search-financials
   * @secure
   */
  searchFinancials = (data: SearchRequest, params: RequestParams = {}) =>
    this.http.request<SearchFinancialsData, any>({
      path: `/financial-datasets/search-financials`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Financial Datasets
   * @name SearchFinancialsByLineItems
   * @request POST:/financial-datasets/search-line-items
   * @secure
   */
  searchFinancialsByLineItems = (
    data: SearchFinancialsByLineItemsPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<SearchFinancialsByLineItemsData, any>({
      path: `/financial-datasets/search-line-items`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
