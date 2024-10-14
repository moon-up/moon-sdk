import { useMoonSDK, useMoonTransaction } from '@/hooks';
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
  Polymarket,
  PostOrderBody,
  PostOrderData,
  UpdateBalanceAllowanceBody,
  UpdateBalanceAllowanceData,
} from '@moonup/moon-api';
import { useCallback } from 'react';

export const usePolymarket = () => {
  const context = useMoonSDK();
  const { handleTransaction } = useMoonTransaction();
  const { moon } = context;

  const getPolymarketSDK = (): Polymarket => {
    const polymarketSDK = moon?.getPolymarketSDK();
    if (!polymarketSDK) throw new Error('Moon Polymarket SDK not initialized');
    return polymarketSDK;
  };

  const approveForPolymarket = useCallback(
    async (
      account: string,
      payload: ApproveForPolymarketBody
    ): Promise<ApproveForPolymarketData> => {
      return handleTransaction('approveForPolymarket', async () => {
        const polymarketSDK = getPolymarketSDK();
        const response = await polymarketSDK.approveForPolymarket(
          account,
          payload
        );
        return response.data;
      });
    },
    [moon]
  );

  const cancelMarketOrders = useCallback(
    async (
      account: string,
      payload: CancelMarketOrdersBody
    ): Promise<CancelMarketOrdersData> => {
      return handleTransaction('cancelMarketOrders', async () => {
        const polymarketSDK = getPolymarketSDK();
        const response = await polymarketSDK.cancelMarketOrders(
          account,
          payload
        );
        return response.data;
      });
    },
    [moon]
  );

  const cancelOrder = useCallback(
    async (
      account: string,
      payload: CancelOrderBody
    ): Promise<CancelOrderData> => {
      return handleTransaction('cancelOrder', async () => {
        const polymarketSDK = getPolymarketSDK();
        const response = await polymarketSDK.cancelOrder(account, payload);
        return response.data;
      });
    },
    [moon]
  );

  const cancelOrders = useCallback(
    async (
      account: string,
      payload: CancelOrdersBody
    ): Promise<CancelOrdersData> => {
      return handleTransaction('cancelOrders', async () => {
        const polymarketSDK = getPolymarketSDK();
        const response = await polymarketSDK.cancelOrders(account, payload);
        return response.data;
      });
    },
    [moon]
  );

  const createMarketBuyOrder = useCallback(
    async (
      account: string,
      payload: CreateMarketBuyOrderBody
    ): Promise<CreateMarketBuyOrderData> => {
      return handleTransaction('createMarketBuyOrder', async () => {
        const polymarketSDK = getPolymarketSDK();
        const response = await polymarketSDK.createMarketBuyOrder(
          account,
          payload
        );
        return response.data;
      });
    },
    [moon]
  );

  const createOrder = useCallback(
    async (
      account: string,
      payload: CreateOrderBody
    ): Promise<CreateOrderData> => {
      return handleTransaction('createOrder', async () => {
        const polymarketSDK = getPolymarketSDK();
        const response = await polymarketSDK.createOrder(account, payload);
        return response.data;
      });
    },
    [moon]
  );

  const dropNotifications = useCallback(
    async (
      account: string,
      payload: DropNotificationsBody
    ): Promise<DropNotificationsData> => {
      return handleTransaction('dropNotifications', async () => {
        const polymarketSDK = getPolymarketSDK();
        const response = await polymarketSDK.dropNotifications(
          account,
          payload
        );
        return response.data;
      });
    },
    [moon]
  );

  const getBalanceAllowance = useCallback(
    async (
      params: GetBalanceAllowanceParams
    ): Promise<GetBalanceAllowanceData> => {
      return handleTransaction('getBalanceAllowance', async () => {
        const polymarketSDK = getPolymarketSDK();
        const response = await polymarketSDK.getBalanceAllowance(params);
        return response.data;
      });
    },
    [moon]
  );

  const getMarket = useCallback(
    async (params: GetMarketParams): Promise<GetMarketData> => {
      return handleTransaction('getMarket', async () => {
        const polymarketSDK = getPolymarketSDK();
        const response = await polymarketSDK.getMarket(params);
        return response.data;
      });
    },
    [moon]
  );

  const getMarkets = useCallback(
    async (params: GetMarketsParams): Promise<GetMarketsData> => {
      return handleTransaction('getMarkets', async () => {
        const polymarketSDK = getPolymarketSDK();
        const response = await polymarketSDK.getMarkets(params);
        return response.data;
      });
    },
    [moon]
  );

  const getMarketTradeEvents = useCallback(
    async (
      params: GetMarketTradeEventsParams
    ): Promise<GetMarketTradeEventsData> => {
      return handleTransaction('getMarketTradeEvents', async () => {
        const polymarketSDK = getPolymarketSDK();
        const response = await polymarketSDK.getMarketTradeEvents(params);
        return response.data;
      });
    },
    [moon]
  );

  const getNotifications = useCallback(
    async (
      params: GetNotificationsParams1
    ): Promise<GetNotificationsResult> => {
      return handleTransaction('getNotifications', async () => {
        const polymarketSDK = getPolymarketSDK();
        const response = await polymarketSDK.getNotifications(params);
        return response.data;
      });
    },
    [moon]
  );

  const getOpenOrders = useCallback(
    async (params: GetOpenOrdersParams): Promise<GetOpenOrdersData> => {
      return handleTransaction('getOpenOrders', async () => {
        const polymarketSDK = getPolymarketSDK();
        const response = await polymarketSDK.getOpenOrders(params);
        return response.data;
      });
    },
    [moon]
  );

  const getOrder = useCallback(
    async (params: GetOrderParams): Promise<GetOrderData> => {
      return handleTransaction('getOrder', async () => {
        const polymarketSDK = getPolymarketSDK();
        const response = await polymarketSDK.getOrder(params);
        return response.data;
      });
    },
    [moon]
  );

  const getOrderBook = useCallback(
    async (params: GetOrderBookParams): Promise<GetOrderBookData> => {
      return handleTransaction('getOrderBook', async () => {
        const polymarketSDK = getPolymarketSDK();
        const response = await polymarketSDK.getOrderBook(params);
        return response.data;
      });
    },
    [moon]
  );

  const getPricesHistory = useCallback(
    async (params: GetPricesHistoryParams): Promise<GetPricesHistoryData> => {
      return handleTransaction('getPricesHistory', async () => {
        const polymarketSDK = getPolymarketSDK();
        const response = await polymarketSDK.getPricesHistory(params);
        return response.data;
      });
    },
    [moon]
  );

  const getTrades = useCallback(
    async (params: GetTradesParams): Promise<GetTradesData> => {
      return handleTransaction('getTrades', async () => {
        const polymarketSDK = getPolymarketSDK();
        const response = await polymarketSDK.getTrades(params);
        return response.data;
      });
    },
    [moon]
  );

  const postOrder = useCallback(
    async (account: string, payload: PostOrderBody): Promise<PostOrderData> => {
      return handleTransaction('postOrder', async () => {
        const polymarketSDK = getPolymarketSDK();
        const response = await polymarketSDK.postOrder(account, payload);
        return response.data;
      });
    },
    [moon]
  );

  const updateBalanceAllowance = useCallback(
    async (
      account: string,
      payload: UpdateBalanceAllowanceBody
    ): Promise<UpdateBalanceAllowanceData> => {
      return handleTransaction('updateBalanceAllowance', async () => {
        const polymarketSDK = getPolymarketSDK();
        const response = await polymarketSDK.updateBalanceAllowance(
          account,
          payload
        );
        return response.data;
      });
    },
    [moon]
  );

  return {
    approveForPolymarket,
    cancelMarketOrders,
    cancelOrder,
    cancelOrders,
    createMarketBuyOrder,
    createOrder,
    dropNotifications,
    getBalanceAllowance,
    getMarket,
    getMarkets,
    getMarketTradeEvents,
    getNotifications,
    getOpenOrders,
    getOrder,
    getOrderBook,
    getPricesHistory,
    getTrades,
    postOrder,
    updateBalanceAllowance,
  };
};
