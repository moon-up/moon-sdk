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
  GetMarketData,
  GetMarketTradeEventsData,
  GetMarketsData,
  GetNotificationsResult,
  GetOpenOrdersData,
  GetOrderBookData,
  GetOrderData,
  GetPricesHistoryData,
  GetTradesData,
  PostOrderBody,
  PostOrderData,
  UpdateBalanceAllowanceBody,
  UpdateBalanceAllowanceData,
} from './data-contracts';

export namespace Polymarket {
  /**
   * No description
   * @tags Polymarket
   * @name ApproveForPolymarket
   * @request POST:/polymarket/{account}/approveForPolymarket
   * @secure
   */
  export namespace ApproveForPolymarket {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ApproveForPolymarketBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ApproveForPolymarketData;
  }

  /**
   * No description
   * @tags Polymarket
   * @name CancelMarketOrders
   * @request POST:/polymarket/{account}/cancelMarketOrders
   * @secure
   */
  export namespace CancelMarketOrders {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CancelMarketOrdersBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CancelMarketOrdersData;
  }

  /**
   * No description
   * @tags Polymarket
   * @name CancelOrder
   * @request POST:/polymarket/{account}/cancelOrder
   * @secure
   */
  export namespace CancelOrder {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CancelOrderBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CancelOrderData;
  }

  /**
   * No description
   * @tags Polymarket
   * @name CancelOrders
   * @request POST:/polymarket/{account}/cancelOrders
   * @secure
   */
  export namespace CancelOrders {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CancelOrdersBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CancelOrdersData;
  }

  /**
   * No description
   * @tags Polymarket
   * @name CreateMarketBuyOrder
   * @request POST:/polymarket/{account}/createMarketBuyOrder
   * @secure
   */
  export namespace CreateMarketBuyOrder {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CreateMarketBuyOrderBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateMarketBuyOrderData;
  }

  /**
   * No description
   * @tags Polymarket
   * @name CreateOrder
   * @request POST:/polymarket/{account}/createOrder
   * @secure
   */
  export namespace CreateOrder {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CreateOrderBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateOrderData;
  }

  /**
   * No description
   * @tags Polymarket
   * @name DropNotifications
   * @request POST:/polymarket/{account}/dropNotifications
   * @secure
   */
  export namespace DropNotifications {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = DropNotificationsBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DropNotificationsData;
  }

  /**
   * No description
   * @tags Polymarket
   * @name GetBalanceAllowance
   * @request GET:/polymarket/{account}/balanceAllowance
   * @secure
   */
  export namespace GetBalanceAllowance {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      asset_type: string;
      chainId: string;
      token_id?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetBalanceAllowanceData;
  }

  /**
   * No description
   * @tags Polymarket
   * @name GetMarket
   * @request GET:/polymarket/{account}/market/{conditionID}
   * @secure
   */
  export namespace GetMarket {
    export type RequestParams = {
      account: string;
      conditionId: string;
    };
    export type RequestQuery = {
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetMarketData;
  }

  /**
   * No description
   * @tags Polymarket
   * @name GetMarkets
   * @request GET:/polymarket/{account}/markets
   * @secure
   */
  export namespace GetMarkets {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      chainId: string;
      nextCursor?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetMarketsData;
  }

  /**
   * No description
   * @tags Polymarket
   * @name GetMarketTradeEvents
   * @request GET:/polymarket/{account}/marketTradeEvents/{conditionID}
   * @secure
   */
  export namespace GetMarketTradeEvents {
    export type RequestParams = {
      account: string;
      conditionId: string;
    };
    export type RequestQuery = {
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetMarketTradeEventsData;
  }

  /**
   * No description
   * @tags Polymarket
   * @name GetNotifications
   * @request GET:/polymarket/{account}/notifications
   * @secure
   */
  export namespace GetNotifications {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetNotificationsResult;
  }

  /**
   * No description
   * @tags Polymarket
   * @name GetOpenOrders
   * @request GET:/polymarket/{account}/openOrders
   * @secure
   */
  export namespace GetOpenOrders {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      assetId?: string;
      chainId: string;
      marketHash?: string;
      nextCursor?: string;
      outcomeId?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetOpenOrdersData;
  }

  /**
   * No description
   * @tags Polymarket
   * @name GetOrder
   * @request GET:/polymarket/{account}/order/{orderID}
   * @secure
   */
  export namespace GetOrder {
    export type RequestParams = {
      account: string;
      orderId: string;
    };
    export type RequestQuery = {
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetOrderData;
  }

  /**
   * No description
   * @tags Polymarket
   * @name GetOrderBook
   * @request GET:/polymarket/{account}/orderBook
   * @secure
   */
  export namespace GetOrderBook {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      chainId: string;
      tokenID: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetOrderBookData;
  }

  /**
   * No description
   * @tags Polymarket
   * @name GetPricesHistory
   * @request GET:/polymarket/{account}/pricesHistory
   * @secure
   */
  export namespace GetPricesHistory {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      chainId: string;
      /** @format double */
      endTs?: number;
      /** @format double */
      fidelity?: number;
      interval?: string;
      market?: string;
      /** @format double */
      startTs?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetPricesHistoryData;
  }

  /**
   * No description
   * @tags Polymarket
   * @name GetTrades
   * @request GET:/polymarket/{account}/trades
   * @secure
   */
  export namespace GetTrades {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      after?: string;
      asset_id?: string;
      before?: string;
      chainId: string;
      id?: string;
      maker_address?: string;
      market?: string;
      nextCursor?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetTradesData;
  }

  /**
   * No description
   * @tags Polymarket
   * @name PostOrder
   * @request POST:/polymarket/{account}/postOrder
   * @secure
   */
  export namespace PostOrder {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PostOrderBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = PostOrderData;
  }

  /**
   * No description
   * @tags Polymarket
   * @name UpdateBalanceAllowance
   * @request POST:/polymarket/{account}/updateBalanceAllowance
   * @secure
   */
  export namespace UpdateBalanceAllowance {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateBalanceAllowanceBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = UpdateBalanceAllowanceData;
  }
}
