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
  GetChartAnalysisParamsEnum,
  GetNfTsData,
  GetNfTsParams,
  GetPortfolioStatusData,
  GetTokenMetadataData,
  GetTokenMetadataParams,
  GetUserPortfolioData,
  GetUserPortfolioParams,
  GetWalletBalanceData,
  GetWalletBalanceParams,
  GetWalletHistoryData,
  GetWalletHistoryParams,
  QueryData,
  QueryPayload,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Data<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Data
   * @name GetChartAnalysis
   * @request GET:/data/analysis/{symbol}/{timeframe}
   * @secure
   */
  getChartAnalysis = (
    symbol: string,
    timeframe: GetChartAnalysisParamsEnum,
    params: RequestParams = {}
  ) =>
    this.http.request<GetChartAnalysisData, any>({
      path: `/data/analysis/${symbol}/${timeframe}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Data
   * @name GetNfTs
   * @request GET:/data/{address}/nfts
   * @secure
   */
  getNfTs = (
    { address, ...query }: GetNfTsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetNfTsData, any>({
      path: `/data/${address}/nfts`,
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
   * @name GetPortfolioStatus
   * @request GET:/data/portfolio/status/{jobId}
   * @secure
   */
  getPortfolioStatus = (jobId: string, params: RequestParams = {}) =>
    this.http.request<GetPortfolioStatusData, any>({
      path: `/data/portfolio/status/${jobId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Data
   * @name GetTokenMetadata
   * @request GET:/data/token-metadata
   * @secure
   */
  getTokenMetadata = (
    query: GetTokenMetadataParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetTokenMetadataData, any>({
      path: `/data/token-metadata`,
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
   * @name GetUserPortfolio
   * @request GET:/data/{address}/portfolio
   * @secure
   */
  getUserPortfolio = (
    { address, ...query }: GetUserPortfolioParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetUserPortfolioData, any>({
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
   * @name GetWalletBalance
   * @request GET:/data/{address}/balance
   * @secure
   */
  getWalletBalance = (
    { address, ...query }: GetWalletBalanceParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetWalletBalanceData, any>({
      path: `/data/${address}/balance`,
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
   * @name GetWalletHistory
   * @request GET:/data/{address}/history
   * @secure
   */
  getWalletHistory = (
    { address, ...query }: GetWalletHistoryParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetWalletHistoryData, any>({
      path: `/data/${address}/history`,
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
   * @name Query
   * @request POST:/data/query
   * @secure
   */
  query = (data: QueryPayload, params: RequestParams = {}) =>
    this.http.request<QueryData, any>({
      path: `/data/query`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
