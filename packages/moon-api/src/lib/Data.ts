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
  ChartsGetChartAnalysisParamsEnum,
  DataExecuteCustomSupabaseQueryData,
  DataExecuteCustomSupabaseQueryPayload,
  DataGetPortfolioFetchStatusData,
  DataGetTokensMetadataData,
  DataGetTokensMetadataParams,
  DataGetUserDebankComplexProtocolListData,
  DataGetUserDebankComplexProtocolListParams,
  DataGetUserDebankTokenListData,
  DataGetUserDebankTokenListParams,
  DataGetUserWalletPortfolioData,
  DataGetUserWalletPortfolioParams,
  DataGetWalletNfTsData,
  DataGetWalletNfTsParams,
  DataGetWalletTokenBalancesData,
  DataGetWalletTokenBalancesParams,
  DataGetWalletTransactionHistoryData,
  DataGetWalletTransactionHistoryParams,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Data<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Retrieves the chart analysis for a given trading symbol and timeframe.
   *
   * @tags Data
   * @name ChartsGetChartAnalysis
   * @request GET:/data/analysis/{symbol}/{timeframe}
   * @secure
   */
  chartsGetChartAnalysis = (
    symbol: string,
    timeframe: ChartsGetChartAnalysisParamsEnum,
    params: RequestParams = {}
  ) =>
    this.http.request<ChartsGetChartAnalysisData, any>({
      path: `/data/analysis/${symbol}/${timeframe}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Executes a query using the LLMSupabaseQueryGenerator and returns the result.
   *
   * @tags Data
   * @name DataExecuteCustomSupabaseQuery
   * @request POST:/data/query
   * @secure
   */
  dataExecuteCustomSupabaseQuery = (
    data: DataExecuteCustomSupabaseQueryPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<DataExecuteCustomSupabaseQueryData, any>({
      path: `/data/query`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the status of a portfolio job.
   *
   * @tags Data
   * @name DataGetPortfolioFetchStatus
   * @request GET:/data/portfolio/status/{jobId}
   * @secure
   */
  dataGetPortfolioFetchStatus = (jobId: string, params: RequestParams = {}) =>
    this.http.request<DataGetPortfolioFetchStatusData, any>({
      path: `/data/portfolio/status/${jobId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves token metadata from the Moralis service.
   *
   * @tags Data
   * @name DataGetTokensMetadata
   * @request GET:/data/token-metadata
   * @secure
   */
  dataGetTokensMetadata = (
    query: DataGetTokensMetadataParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DataGetTokensMetadataData, any>({
      path: `/data/token-metadata`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the user's complex protocol list from Debank.
   *
   * @tags Data
   * @name DataGetUserDebankComplexProtocolList
   * @request GET:/data/{address}/debank/complex-protocols
   * @secure
   */
  dataGetUserDebankComplexProtocolList = (
    { address, ...query }: DataGetUserDebankComplexProtocolListParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DataGetUserDebankComplexProtocolListData, any>({
      path: `/data/${address}/debank/complex-protocols`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the user's token list from Debank.
   *
   * @tags Data
   * @name DataGetUserDebankTokenList
   * @request GET:/data/{address}/debank/tokens
   * @secure
   */
  dataGetUserDebankTokenList = (
    { address, ...query }: DataGetUserDebankTokenListParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DataGetUserDebankTokenListData, any>({
      path: `/data/${address}/debank/tokens`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the user's portfolio based on the provided wallet address.
   *
   * @tags Data
   * @name DataGetUserWalletPortfolio
   * @request GET:/data/{address}/portfolio
   * @secure
   */
  dataGetUserWalletPortfolio = (
    { address, ...query }: DataGetUserWalletPortfolioParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DataGetUserWalletPortfolioData, any>({
      path: `/data/${address}/portfolio`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Data
   * @name DataGetWalletNfTs
   * @request GET:/data/{address}/nfts
   * @secure
   */
  dataGetWalletNfTs = (
    { address, ...query }: DataGetWalletNfTsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DataGetWalletNfTsData, any>({
      path: `/data/${address}/nfts`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the wallet balance for a given address.
   *
   * @tags Data
   * @name DataGetWalletTokenBalances
   * @request GET:/data/{address}/balance
   * @secure
   */
  dataGetWalletTokenBalances = (
    { address, ...query }: DataGetWalletTokenBalancesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DataGetWalletTokenBalancesData, any>({
      path: `/data/${address}/balance`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the wallet history for a given address and blockchain chain.
   *
   * @tags Data
   * @name DataGetWalletTransactionHistory
   * @request GET:/data/{address}/history
   * @secure
   */
  dataGetWalletTransactionHistory = (
    { address, ...query }: DataGetWalletTransactionHistoryParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DataGetWalletTransactionHistoryData, any>({
      path: `/data/${address}/history`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
}
