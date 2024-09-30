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
  AssembleRequest,
  AssembleTransactionData,
  GetContractInfoData,
  GetContractInfoParams,
  GetCurrentBlockData,
  GetCurrentBlockParams,
  GetExecutorAddressData,
  GetExecutorAddressParams,
  GetLiquiditySourcesData,
  GetLiquiditySourcesParams,
  GetQuoteOutput,
  GetRouterAddressData,
  GetRouterAddressParams,
  GetSupportedChainsData,
  GetSupportedTokensData,
  GetSupportedTokensParams,
  GetZapQuoteData,
  OdosSwapInputBody,
  SwapResult,
  ZapData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Odos<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Odos
   * @name AssembleTransaction
   * @request POST:/odos/assemble-transaction
   * @secure
   */
  assembleTransaction = (data: AssembleRequest, params: RequestParams = {}) =>
    this.http.request<AssembleTransactionData, any>({
      path: `/odos/assemble-transaction`,
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
   * @tags Odos
   * @name GetContractInfo
   * @request GET:/odos/contract-info
   * @secure
   */
  getContractInfo = (
    query: GetContractInfoParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetContractInfoData, any>({
      path: `/odos/contract-info`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Odos
   * @name GetCurrentBlock
   * @request GET:/odos/current-block
   * @secure
   */
  getCurrentBlock = (
    query: GetCurrentBlockParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetCurrentBlockData, any>({
      path: `/odos/current-block`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Odos
   * @name GetExecutorAddress
   * @request GET:/odos/executor-address
   * @secure
   */
  getExecutorAddress = (
    query: GetExecutorAddressParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetExecutorAddressData, any>({
      path: `/odos/executor-address`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Odos
   * @name GetLiquiditySources
   * @request GET:/odos/liquidity-sources
   * @secure
   */
  getLiquiditySources = (
    query: GetLiquiditySourcesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetLiquiditySourcesData, any>({
      path: `/odos/liquidity-sources`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Odos
   * @name GetQuote
   * @request POST:/odos/{accountName}/get-quote
   * @secure
   */
  getQuote = (
    accountName: string,
    data: OdosSwapInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<GetQuoteOutput, any>({
      path: `/odos/${accountName}/get-quote`,
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
   * @tags Odos
   * @name GetRouterAddress
   * @request GET:/odos/router-address
   * @secure
   */
  getRouterAddress = (
    query: GetRouterAddressParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetRouterAddressData, any>({
      path: `/odos/router-address`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Odos
   * @name GetSupportedChains
   * @request GET:/odos/supported-chains
   * @secure
   */
  getSupportedChains = (params: RequestParams = {}) =>
    this.http.request<GetSupportedChainsData, any>({
      path: `/odos/supported-chains`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Odos
   * @name GetSupportedTokens
   * @request GET:/odos/supported-tokens
   * @secure
   */
  getSupportedTokens = (
    query: GetSupportedTokensParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetSupportedTokensData, any>({
      path: `/odos/supported-tokens`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Odos
   * @name GetZapQuote
   * @request POST:/odos/{accountName}/get-zap-quote
   * @secure
   */
  getZapQuote = (
    accountName: string,
    data: OdosSwapInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<GetZapQuoteData, any>({
      path: `/odos/${accountName}/get-zap-quote`,
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
   * @tags Odos
   * @name Swap
   * @request POST:/odos/{accountName}/swap
   * @secure
   */
  swap = (
    accountName: string,
    data: OdosSwapInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SwapResult, any>({
      path: `/odos/${accountName}/swap`,
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
   * @tags Odos
   * @name Zap
   * @request POST:/odos/{accountName}/zap
   * @secure
   */
  zap = (
    accountName: string,
    data: OdosSwapInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ZapData, any>({
      path: `/odos/${accountName}/zap`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
