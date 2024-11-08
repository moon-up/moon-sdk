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
  GetGasPriceData,
  GetGasPriceParams,
  GetQuoteData1,
  GetQuoteParams4,
  GetSupportedChainsParams1,
  GetSupportedChainsResult,
  GetSupportedProvidersData,
  GetSupportedProvidersParams,
  SwapInput,
  SwapOutput,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Thorswap<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ThorSwap
   * @name GetGasPrice
   * @request GET:/thorswap/gasPrice
   * @secure
   */
  getGasPrice = (query: GetGasPriceParams, params: RequestParams = {}) =>
    this.http.request<GetGasPriceData, any>({
      path: `/thorswap/gasPrice`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ThorSwap
   * @name GetQuote
   * @request GET:/thorswap/quote
   * @secure
   */
  getQuote = (query: GetQuoteParams4, params: RequestParams = {}) =>
    this.http.request<GetQuoteData1, any>({
      path: `/thorswap/quote`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ThorSwap
   * @name GetSupportedChains
   * @request GET:/thorswap/supportedChains
   * @secure
   */
  getSupportedChains = (
    query: GetSupportedChainsParams1,
    params: RequestParams = {}
  ) =>
    this.http.request<GetSupportedChainsResult, any>({
      path: `/thorswap/supportedChains`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ThorSwap
   * @name GetSupportedProviders
   * @request GET:/thorswap/supportedProviders
   * @secure
   */
  getSupportedProviders = (
    query: GetSupportedProvidersParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetSupportedProvidersData, any>({
      path: `/thorswap/supportedProviders`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ThorSwap
   * @name Swap
   * @request POST:/thorswap/swap
   * @secure
   */
  swap = (data: SwapInput, params: RequestParams = {}) =>
    this.http.request<SwapOutput, any>({
      path: `/thorswap/swap`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
