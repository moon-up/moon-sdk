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
  GetQuoteOutput,
  GetQuoteParams3,
  GetSupportedChainsResult,
  GetSupportedProvidersData,
  PostQuoteParams2,
  PostQuoteResult,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Thorswap<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @name GetGasPrice
   * @request GET:/thorswap/gasPrice
   */
  getGasPrice = (query: GetGasPriceParams, params: RequestParams = {}) =>
    this.http.request<GetGasPriceData, any>({
      path: `/thorswap/gasPrice`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @name GetQuote
   * @request GET:/thorswap/quote
   */
  getQuote = (query: GetQuoteParams3, params: RequestParams = {}) =>
    this.http.request<GetQuoteOutput, any>({
      path: `/thorswap/quote`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @name GetSupportedChains
   * @request GET:/thorswap/chains
   */
  getSupportedChains = (params: RequestParams = {}) =>
    this.http.request<GetSupportedChainsResult, any>({
      path: `/thorswap/chains`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @name GetSupportedProviders
   * @request GET:/thorswap/providers
   */
  getSupportedProviders = (params: RequestParams = {}) =>
    this.http.request<GetSupportedProvidersData, any>({
      path: `/thorswap/providers`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @name PostQuote
   * @request POST:/thorswap/{accountName}/quote
   */
  postQuote = (
    { accountName, ...query }: PostQuoteParams2,
    params: RequestParams = {}
  ) =>
    this.http.request<PostQuoteResult, any>({
      path: `/thorswap/${accountName}/quote`,
      method: 'POST',
      query: query,
      format: 'json',
      ...params,
    });
}
