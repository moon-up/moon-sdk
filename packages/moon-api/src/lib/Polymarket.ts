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
  ApproveForPolymarketBody,
  ApproveForPolymarketData,
  CancelMarketOrdersBody,
  CancelMarketOrdersData,
  CancelOrderBody,
  CancelOrderData,
  CancelOrdersBody,
  CancelOrdersData,
  CreateMarketBuyOrderBody,
  CreateMarketBuyOrderData,
  CreateOrderBody,
  CreateOrderData,
  DropNotificationsBody,
  DropNotificationsData,
  GetBalanceAllowanceData,
  GetBalanceAllowanceParams,
  GetMarketData,
  GetMarketParams,
  GetMarketTradeEventsData,
  GetMarketTradeEventsParams,
  GetMarketsData,
  GetMarketsParams,
  GetNotificationsParams1,
  GetNotificationsResult,
  GetOpenOrdersData,
  GetOpenOrdersParams,
  GetOrderBookData,
  GetOrderBookParams,
  GetOrderData,
  GetOrderParams,
  GetPricesHistoryData,
  GetPricesHistoryParams,
  GetTradesData,
  GetTradesParams,
  PostOrderBody,
  PostOrderData,
  UpdateBalanceAllowanceBody,
  UpdateBalanceAllowanceData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Polymarket<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Polymarket
   * @name ApproveForPolymarket
   * @request POST:/polymarket/{account}/approveForPolymarket
   * @secure
   */
  approveForPolymarket = (
    account: string,
    data: ApproveForPolymarketBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ApproveForPolymarketData, any>({
      path: `/polymarket/${account}/approveForPolymarket`,
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
   * @tags Polymarket
   * @name CancelMarketOrders
   * @request POST:/polymarket/{account}/cancelMarketOrders
   * @secure
   */
  cancelMarketOrders = (
    account: string,
    data: CancelMarketOrdersBody,
    params: RequestParams = {}
  ) =>
    this.http.request<CancelMarketOrdersData, any>({
      path: `/polymarket/${account}/cancelMarketOrders`,
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
   * @tags Polymarket
   * @name CancelOrder
   * @request POST:/polymarket/{account}/cancelOrder
   * @secure
   */
  cancelOrder = (
    account: string,
    data: CancelOrderBody,
    params: RequestParams = {}
  ) =>
    this.http.request<CancelOrderData, any>({
      path: `/polymarket/${account}/cancelOrder`,
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
   * @tags Polymarket
   * @name CancelOrders
   * @request POST:/polymarket/{account}/cancelOrders
   * @secure
   */
  cancelOrders = (
    account: string,
    data: CancelOrdersBody,
    params: RequestParams = {}
  ) =>
    this.http.request<CancelOrdersData, any>({
      path: `/polymarket/${account}/cancelOrders`,
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
   * @tags Polymarket
   * @name CreateMarketBuyOrder
   * @request POST:/polymarket/{account}/createMarketBuyOrder
   * @secure
   */
  createMarketBuyOrder = (
    account: string,
    data: CreateMarketBuyOrderBody,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateMarketBuyOrderData, any>({
      path: `/polymarket/${account}/createMarketBuyOrder`,
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
   * @tags Polymarket
   * @name CreateOrder
   * @request POST:/polymarket/{account}/createOrder
   * @secure
   */
  createOrder = (
    account: string,
    data: CreateOrderBody,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateOrderData, any>({
      path: `/polymarket/${account}/createOrder`,
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
   * @tags Polymarket
   * @name DropNotifications
   * @request POST:/polymarket/{account}/dropNotifications
   * @secure
   */
  dropNotifications = (
    account: string,
    data: DropNotificationsBody,
    params: RequestParams = {}
  ) =>
    this.http.request<DropNotificationsData, any>({
      path: `/polymarket/${account}/dropNotifications`,
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
   * @tags Polymarket
   * @name GetBalanceAllowance
   * @request GET:/polymarket/{account}/balanceAllowance
   * @secure
   */
  getBalanceAllowance = (
    { account, ...query }: GetBalanceAllowanceParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetBalanceAllowanceData, any>({
      path: `/polymarket/${account}/balanceAllowance`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Polymarket
   * @name GetMarket
   * @request GET:/polymarket/{account}/market/{conditionID}
   * @secure
   */
  getMarket = (
    { account, conditionId, ...query }: GetMarketParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetMarketData, any>({
      path: `/polymarket/${account}/market/${conditionId}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Polymarket
   * @name GetMarkets
   * @request GET:/polymarket/{account}/markets
   * @secure
   */
  getMarkets = (
    { account, ...query }: GetMarketsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetMarketsData, any>({
      path: `/polymarket/${account}/markets`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Polymarket
   * @name GetMarketTradeEvents
   * @request GET:/polymarket/{account}/marketTradeEvents/{conditionID}
   * @secure
   */
  getMarketTradeEvents = (
    { account, conditionId, ...query }: GetMarketTradeEventsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetMarketTradeEventsData, any>({
      path: `/polymarket/${account}/marketTradeEvents/${conditionId}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Polymarket
   * @name GetNotifications
   * @request GET:/polymarket/{account}/notifications
   * @secure
   */
  getNotifications = (
    { account, ...query }: GetNotificationsParams1,
    params: RequestParams = {}
  ) =>
    this.http.request<GetNotificationsResult, any>({
      path: `/polymarket/${account}/notifications`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Polymarket
   * @name GetOpenOrders
   * @request GET:/polymarket/{account}/openOrders
   * @secure
   */
  getOpenOrders = (
    { account, ...query }: GetOpenOrdersParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetOpenOrdersData, any>({
      path: `/polymarket/${account}/openOrders`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Polymarket
   * @name GetOrder
   * @request GET:/polymarket/{account}/order/{orderID}
   * @secure
   */
  getOrder = (
    { account, orderId, ...query }: GetOrderParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetOrderData, any>({
      path: `/polymarket/${account}/order/${orderId}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Polymarket
   * @name GetOrderBook
   * @request GET:/polymarket/{account}/orderBook
   * @secure
   */
  getOrderBook = (
    { account, ...query }: GetOrderBookParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetOrderBookData, any>({
      path: `/polymarket/${account}/orderBook`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Polymarket
   * @name GetPricesHistory
   * @request GET:/polymarket/{account}/pricesHistory
   * @secure
   */
  getPricesHistory = (
    { account, ...query }: GetPricesHistoryParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetPricesHistoryData, any>({
      path: `/polymarket/${account}/pricesHistory`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Polymarket
   * @name GetTrades
   * @request GET:/polymarket/{account}/trades
   * @secure
   */
  getTrades = (
    { account, ...query }: GetTradesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetTradesData, any>({
      path: `/polymarket/${account}/trades`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Polymarket
   * @name PostOrder
   * @request POST:/polymarket/{account}/postOrder
   * @secure
   */
  postOrder = (
    account: string,
    data: PostOrderBody,
    params: RequestParams = {}
  ) =>
    this.http.request<PostOrderData, any>({
      path: `/polymarket/${account}/postOrder`,
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
   * @tags Polymarket
   * @name UpdateBalanceAllowance
   * @request POST:/polymarket/{account}/updateBalanceAllowance
   * @secure
   */
  updateBalanceAllowance = (
    account: string,
    data: UpdateBalanceAllowanceBody,
    params: RequestParams = {}
  ) =>
    this.http.request<UpdateBalanceAllowanceData, any>({
      path: `/polymarket/${account}/updateBalanceAllowance`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
