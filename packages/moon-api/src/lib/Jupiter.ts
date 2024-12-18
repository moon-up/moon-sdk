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
  CreateLimitOrderBody,
  JupiterCancelLimitOrdersData,
  JupiterCancelLimitOrdersPayload,
  JupiterCreateLimitOrderData,
  JupiterGetIndexedRouteMapData,
  JupiterGetIndexedRouteMapParams,
  JupiterGetOpenOrdersData,
  JupiterGetOpenOrdersParams,
  JupiterGetOrderHistoryData,
  JupiterGetOrderHistoryParams,
  JupiterGetProgramIdToLabelData,
  JupiterGetQuoteData,
  JupiterGetSwapInstructionsData,
  JupiterGetTokensData,
  JupiterSwapData,
  OmitJupiterInputBodyAccountName,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Jupiter<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Cancels limit orders for a given account.
   *
   * @tags Jupiter
   * @name JupiterCancelLimitOrders
   * @request POST:/jupiter/{accountName}/cancelLimitOrders
   * @secure
   */
  jupiterCancelLimitOrders = (
    accountName: string,
    data: JupiterCancelLimitOrdersPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<JupiterCancelLimitOrdersData, any>({
      path: `/jupiter/${accountName}/cancelLimitOrders`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a limit order for a given account.
   *
   * @tags Jupiter
   * @name JupiterCreateLimitOrder
   * @request POST:/jupiter/{accountName}/createLimitOrder
   * @secure
   */
  jupiterCreateLimitOrder = (
    accountName: string,
    data: CreateLimitOrderBody,
    params: RequestParams = {}
  ) =>
    this.http.request<JupiterCreateLimitOrderData, any>({
      path: `/jupiter/${accountName}/createLimitOrder`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the indexed route map.
   *
   * @tags Jupiter
   * @name JupiterGetIndexedRouteMap
   * @request GET:/jupiter/indexedRouteMap
   * @secure
   */
  jupiterGetIndexedRouteMap = (
    query: JupiterGetIndexedRouteMapParams,
    params: RequestParams = {}
  ) =>
    this.http.request<JupiterGetIndexedRouteMapData, any>({
      path: `/jupiter/indexedRouteMap`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves open orders for a given wallet address.
   *
   * @tags Jupiter
   * @name JupiterGetOpenOrders
   * @request GET:/jupiter/openOrders
   * @secure
   */
  jupiterGetOpenOrders = (
    query: JupiterGetOpenOrdersParams,
    params: RequestParams = {}
  ) =>
    this.http.request<JupiterGetOpenOrdersData, any>({
      path: `/jupiter/openOrders`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves order history for a given wallet address.
   *
   * @tags Jupiter
   * @name JupiterGetOrderHistory
   * @request GET:/jupiter/orderHistory
   * @secure
   */
  jupiterGetOrderHistory = (
    query: JupiterGetOrderHistoryParams,
    params: RequestParams = {}
  ) =>
    this.http.request<JupiterGetOrderHistoryData, any>({
      path: `/jupiter/orderHistory`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the program ID to label mapping.
   *
   * @tags Jupiter
   * @name JupiterGetProgramIdToLabel
   * @request GET:/jupiter/programIdToLabel
   * @secure
   */
  jupiterGetProgramIdToLabel = (params: RequestParams = {}) =>
    this.http.request<JupiterGetProgramIdToLabelData, any>({
      path: `/jupiter/programIdToLabel`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the tokens available on the Jupiter platform.
   *
   * @tags Jupiter
   * @name JupiterGetQuote
   * @request POST:/jupiter/{accountName}/quote
   * @secure
   */
  jupiterGetQuote = (
    accountName: string,
    data: OmitJupiterInputBodyAccountName,
    params: RequestParams = {}
  ) =>
    this.http.request<JupiterGetQuoteData, any>({
      path: `/jupiter/${accountName}/quote`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves swap instructions for a given account.
   *
   * @tags Jupiter
   * @name JupiterGetSwapInstructions
   * @request POST:/jupiter/{accountName}/swapInstructions
   * @secure
   */
  jupiterGetSwapInstructions = (
    accountName: string,
    data: OmitJupiterInputBodyAccountName,
    params: RequestParams = {}
  ) =>
    this.http.request<JupiterGetSwapInstructionsData, any>({
      path: `/jupiter/${accountName}/swapInstructions`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the tokens available on the Jupiter platform.
   *
   * @tags Jupiter
   * @name JupiterGetTokens
   * @request GET:/jupiter/tokens
   * @secure
   */
  jupiterGetTokens = (params: RequestParams = {}) =>
    this.http.request<JupiterGetTokensData, any>({
      path: `/jupiter/tokens`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Handles the swap operation for a given account.
   *
   * @tags Jupiter
   * @name JupiterSwap
   * @request POST:/jupiter/{accountName}/swap
   * @secure
   */
  jupiterSwap = (
    accountName: string,
    data: OmitJupiterInputBodyAccountName,
    params: RequestParams = {}
  ) =>
    this.http.request<JupiterSwapData, any>({
      path: `/jupiter/${accountName}/swap`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
