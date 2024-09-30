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
  GetIndexedRouteMapData,
  GetIndexedRouteMapParams,
  GetProgramIdToLabelData,
  GetQuoteData,
  GetSwapInstructionsData,
  GetTokensData,
  OmitJupiterInputBodyAccountName,
  SwapData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Jupiter<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Jupiter
   * @name GetIndexedRouteMap
   * @request GET:/jupiter/indexedRouteMap
   * @secure
   */
  getIndexedRouteMap = (
    query: GetIndexedRouteMapParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetIndexedRouteMapData, any>({
      path: `/jupiter/indexedRouteMap`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Jupiter
   * @name GetProgramIdToLabel
   * @request GET:/jupiter/programIdToLabel
   * @secure
   */
  getProgramIdToLabel = (params: RequestParams = {}) =>
    this.http.request<GetProgramIdToLabelData, any>({
      path: `/jupiter/programIdToLabel`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Jupiter
   * @name GetQuote
   * @request POST:/jupiter/{accountName}/quote
   * @secure
   */
  getQuote = (
    accountName: string,
    data: OmitJupiterInputBodyAccountName,
    params: RequestParams = {}
  ) =>
    this.http.request<GetQuoteData, any>({
      path: `/jupiter/${accountName}/quote`,
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
   * @tags Jupiter
   * @name GetSwapInstructions
   * @request POST:/jupiter/{accountName}/swapInstructions
   * @secure
   */
  getSwapInstructions = (
    accountName: string,
    data: OmitJupiterInputBodyAccountName,
    params: RequestParams = {}
  ) =>
    this.http.request<GetSwapInstructionsData, any>({
      path: `/jupiter/${accountName}/swapInstructions`,
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
   * @tags Jupiter
   * @name GetTokens
   * @request GET:/jupiter/tokens
   * @secure
   */
  getTokens = (params: RequestParams = {}) =>
    this.http.request<GetTokensData, any>({
      path: `/jupiter/tokens`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Jupiter
   * @name Swap
   * @request POST:/jupiter/{accountName}/swap
   * @secure
   */
  swap = (
    accountName: string,
    data: OmitJupiterInputBodyAccountName,
    params: RequestParams = {}
  ) =>
    this.http.request<SwapData, any>({
      path: `/jupiter/${accountName}/swap`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
