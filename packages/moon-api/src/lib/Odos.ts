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
  AssembleTransactionData,
  AssembleTransactionPayload,
  GetContractInfoData,
  GetContractInfoParams,
  GetCurrentBlockData,
  GetCurrentBlockParams,
  GetExecutorAddressData,
  GetExecutorAddressParams,
  GetLiquiditySourcesData,
  GetLiquiditySourcesParams,
  GetQuoteResult,
  GetRouterAddressData,
  GetRouterAddressParams,
  GetSupportedChainsData,
  GetSupportedChainsParams,
  GetSupportedTokensData,
  GetSupportedTokensParams,
  OdosSwapInputBody,
  SwapData,
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
   * @request POST:/odos/{accountName}/assemble-transaction
   * @secure
   */
  assembleTransaction = (
    accountName: string,
    data: AssembleTransactionPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<AssembleTransactionData, any>({
      path: `/odos/${accountName}/assemble-transaction`,
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
   * @request GET:/odos/{accountName}/contract-info
   * @secure
   */
  getContractInfo = (
    { accountName, ...query }: GetContractInfoParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetContractInfoData, any>({
      path: `/odos/${accountName}/contract-info`,
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
   * @request GET:/odos/{accountName}/current-block
   * @secure
   */
  getCurrentBlock = (
    { accountName, ...query }: GetCurrentBlockParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetCurrentBlockData, any>({
      path: `/odos/${accountName}/current-block`,
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
   * @request GET:/odos/{accountName}/executor-address
   * @secure
   */
  getExecutorAddress = (
    { accountName, ...query }: GetExecutorAddressParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetExecutorAddressData, any>({
      path: `/odos/${accountName}/executor-address`,
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
   * @request GET:/odos/{accountName}/liquidity-sources
   * @secure
   */
  getLiquiditySources = (
    { accountName, ...query }: GetLiquiditySourcesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetLiquiditySourcesData, any>({
      path: `/odos/${accountName}/liquidity-sources`,
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
    this.http.request<GetQuoteResult, any>({
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
   * @request GET:/odos/{accountName}/router-address
   * @secure
   */
  getRouterAddress = (
    { accountName, ...query }: GetRouterAddressParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetRouterAddressData, any>({
      path: `/odos/${accountName}/router-address`,
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
  getSupportedChains = (
    query: GetSupportedChainsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetSupportedChainsData, any>({
      path: `/odos/supported-chains`,
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
   * @name GetSupportedTokens
   * @request GET:/odos/{accountName}/supported-tokens
   * @secure
   */
  getSupportedTokens = (
    { accountName, ...query }: GetSupportedTokensParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetSupportedTokensData, any>({
      path: `/odos/${accountName}/supported-tokens`,
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
   * @name Swap
   * @request POST:/odos/{accountName}/swap
   * @secure
   */
  swap = (
    accountName: string,
    data: OdosSwapInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SwapData, any>({
      path: `/odos/${accountName}/swap`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
