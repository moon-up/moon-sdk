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
  FetchTokenDetailsData,
  FetchTokenDetailsParams,
  FetchTokensData,
  GetAllPossibleConnectionsData,
  GetAllPossibleConnectionsParams,
  GetChainsData,
  GetChainsParams,
  GetConnectionsData,
  GetConnectionsParams,
  GetQuoteData,
  GetQuoteParams,
  GetToolsData,
  GetToolsParams,
  GetstatusData,
  GetstatusParams,
  PostQuoteData,
  PostQuoteParams,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Lifi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @name FetchTokenDetails
   * @request GET:/lifi/token
   */
  fetchTokenDetails = (
    query: FetchTokenDetailsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<FetchTokenDetailsData, any>({
      path: `/lifi/token`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @name FetchTokens
   * @request GET:/lifi/tokens
   */
  fetchTokens = (params: RequestParams = {}) =>
    this.http.request<FetchTokensData, any>({
      path: `/lifi/tokens`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @name GetAllPossibleConnections
   * @request GET:/lifi/allPossibleConnections
   */
  getAllPossibleConnections = (
    query: GetAllPossibleConnectionsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAllPossibleConnectionsData, any>({
      path: `/lifi/allPossibleConnections`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @name GetChains
   * @request GET:/lifi/chains
   */
  getChains = (query: GetChainsParams, params: RequestParams = {}) =>
    this.http.request<GetChainsData, any>({
      path: `/lifi/chains`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @name GetConnections
   * @request GET:/lifi/connections
   */
  getConnections = (query: GetConnectionsParams, params: RequestParams = {}) =>
    this.http.request<GetConnectionsData, any>({
      path: `/lifi/connections`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @name GetQuote
   * @request GET:/lifi/quote
   */
  getQuote = (query: GetQuoteParams, params: RequestParams = {}) =>
    this.http.request<GetQuoteData, any>({
      path: `/lifi/quote`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @name Getstatus
   * @request GET:/lifi/status
   */
  getstatus = (query: GetstatusParams, params: RequestParams = {}) =>
    this.http.request<GetstatusData, any>({
      path: `/lifi/status`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @name GetTools
   * @request GET:/lifi/tools
   */
  getTools = (query: GetToolsParams, params: RequestParams = {}) =>
    this.http.request<GetToolsData, any>({
      path: `/lifi/tools`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @name PostQuote
   * @request POST:/lifi/{accountName}/quote
   */
  postQuote = (
    { accountName, ...query }: PostQuoteParams,
    params: RequestParams = {}
  ) =>
    this.http.request<PostQuoteData, any>({
      path: `/lifi/${accountName}/quote`,
      method: 'POST',
      query: query,
      format: 'json',
      ...params,
    });
}
