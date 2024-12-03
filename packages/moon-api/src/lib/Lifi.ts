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
  GetToolsData,
  GetToolsParams,
  LifiGetAllPossibleConnectionsData,
  LifiGetAllPossibleConnectionsParams,
  LifiGetChainsData,
  LifiGetChainsParams,
  LifiGetConnectionsData,
  LifiGetConnectionsParams,
  LifiGetQuoteData,
  LifiGetQuoteParams,
  LifiGetStatusData,
  LifiGetStatusParams,
  LifiGetTokenDetailsData,
  LifiGetTokenDetailsParams,
  LifiGetTokensData,
  LifiPostQuoteData,
  LifiPostQuoteParams,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Lifi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Retrieves tools based on the provided chains.
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
   * @description Retrieves all possible connections for a given chain and token.
   *
   * @name LifiGetAllPossibleConnections
   * @request GET:/lifi/allPossibleConnections
   */
  lifiGetAllPossibleConnections = (
    query: LifiGetAllPossibleConnectionsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<LifiGetAllPossibleConnectionsData, any>({
      path: `/lifi/allPossibleConnections`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves a list of supported chains.
   *
   * @name LifiGetChains
   * @request GET:/lifi/chains
   */
  lifiGetChains = (query: LifiGetChainsParams, params: RequestParams = {}) =>
    this.http.request<LifiGetChainsData, any>({
      path: `/lifi/chains`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves connections between specified chains and tokens.
   *
   * @name LifiGetConnections
   * @request GET:/lifi/connections
   */
  lifiGetConnections = (
    query: LifiGetConnectionsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<LifiGetConnectionsData, any>({
      path: `/lifi/connections`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves a quote for a token swap between different chains.
   *
   * @name LifiGetQuote
   * @request GET:/lifi/quote
   */
  lifiGetQuote = (query: LifiGetQuoteParams, params: RequestParams = {}) =>
    this.http.request<LifiGetQuoteData, any>({
      path: `/lifi/quote`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the status of a transaction based on the provided transaction hash.
   *
   * @name LifiGetStatus
   * @request GET:/lifi/status
   */
  lifiGetStatus = (query: LifiGetStatusParams, params: RequestParams = {}) =>
    this.http.request<LifiGetStatusData, any>({
      path: `/lifi/status`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * @description Fetches the details of a specified token on a given blockchain.
   *
   * @name LifiGetTokenDetails
   * @request GET:/lifi/token
   */
  lifiGetTokenDetails = (
    query: LifiGetTokenDetailsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<LifiGetTokenDetailsData, any>({
      path: `/lifi/token`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * @description Fetches tokens from the LiFi service.
   *
   * @name LifiGetTokens
   * @request GET:/lifi/tokens
   */
  lifiGetTokens = (params: RequestParams = {}) =>
    this.http.request<LifiGetTokensData, any>({
      path: `/lifi/tokens`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * @description Handles the retrieval of a quote for a token swap between different chains.
   *
   * @name LifiPostQuote
   * @request POST:/lifi/{accountName}/quote
   */
  lifiPostQuote = (
    { accountName, ...query }: LifiPostQuoteParams,
    params: RequestParams = {}
  ) =>
    this.http.request<LifiPostQuoteData, any>({
      path: `/lifi/${accountName}/quote`,
      method: 'POST',
      query: query,
      format: 'json',
      ...params,
    });
}
