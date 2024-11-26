import { useMoonAuth } from "@/context";
import { useMoonTransaction } from "@/hooks";
import type {
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
} from "@moonup/moon-api";
import { useCallback } from "react";
import {
	useAccount,
	useChainId,
	useSendTransaction,
	useSwitchChain,
} from "wagmi";

/**
 * Custom hook to interact with the Polymarket SDK.
 *
 * This hook provides various functions to interact with the Polymarket SDK, including
 * approving tokens, canceling orders, creating orders, getting market data, and more.
 *
 * @returns An object containing functions to interact with the Polymarket SDK:
 * - `approveForPolymarket`: Approves tokens for use in Polymarket.
 * - `cancelMarketOrders`: Cancels all orders for a specific market.
 * - `cancelOrder`: Cancels a specific order.
 * - `cancelOrders`: Cancels multiple orders.
 * - `createMarketBuyOrder`: Creates a market buy order.
 * - `createOrder`: Creates an order.
 * - `dropNotifications`: Drops notifications.
 * - `getBalanceAllowance`: Gets the balance and allowance for a specific account.
 * - `getMarket`: Gets market data.
 * - `getMarkets`: Gets data for multiple markets.
 * - `getMarketTradeEvents`: Gets market trade events.
 * - `getNotifications`: Gets notifications.
 * - `getOpenOrders`: Gets open orders.
 * - `getOrder`: Gets a specific order.
 * - `getOrderBook`: Gets the order book.
 * - `getPricesHistory`: Gets price history.
 * - `getTrades`: Gets trades.
 * - `postOrder`: Posts an order.
 * - `updateBalanceAllowance`: Updates balance allowance.
 */
export const usePolymarket = () => {
	const { handleTransaction } = useMoonTransaction();
	const { moon } = useMoonAuth();
	const { isConnected, address } = useAccount();
	const { sendTransactionAsync } = useSendTransaction();
	const chainId = useChainId();
	const { switchChain } = useSwitchChain();

	const getPolymarketSDK = useCallback((): Polymarket => {
		const polymarketSDK = moon?.getPolymarketSDK();
		if (!polymarketSDK) throw new Error("Moon Polymarket SDK not initialized");
		return polymarketSDK;
	}, [moon]);

	const prepareTransaction = (account: string, transaction: any) => {
		if (isConnected && address === account) {
			return {
				...transaction,
				broadcast: false,
				dryrun: true,
			};
		}
		return transaction;
	};

	const handleWagmiTransaction = async (transactionData: any) => {
		try {
			if (isConnected && address === transactionData.transaction.from) {
				if (chainId !== Number.parseInt(transactionData.transaction.chainId)) {
					await switchChain({
						chainId: Number.parseInt(transactionData.transaction.chainId),
					});
				}
				await sendTransactionAsync({
					to: transactionData.transaction.to,
					data: transactionData.transaction.data,
					value: BigInt(transactionData.transaction.value),
					chainId: Number.parseInt(transactionData.transaction.chain_id),
				});
			}
		} catch (error) {
			console.error("handleWagmiTransaction: Error: ", error);
			return transactionData;
		}
	};

	/**
	 * Approves tokens for use in Polymarket.
	 *
	 * @param payload - The payload containing the account name and data for the approval transaction.
	 * @param payload.accountName - The name of the account approving the tokens.
	 * @param payload.data - The data required for the Polymarket approval transaction.
	 * @returns A promise that resolves to the result of the Polymarket approval transaction.
	 */
	const approveForPolymarket = useCallback(
		async (payload: {
			accountName: string;
			data: ApproveForPolymarketBody;
		}): Promise<ApproveForPolymarketData> => {
			return handleTransaction("approveForPolymarket", async () => {
				const polymarketSDK = getPolymarketSDK();
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await polymarketSDK.approveForPolymarket(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Cancels all orders for a specific market.
	 *
	 * @param payload - The payload containing the account name and data for canceling market orders.
	 * @param payload.accountName - The name of the account canceling the orders.
	 * @param payload.data - The data required for canceling market orders.
	 * @returns A promise that resolves to the result of canceling market orders.
	 */
	const cancelMarketOrders = useCallback(
		async (payload: {
			accountName: string;
			data: CancelMarketOrdersBody;
		}): Promise<CancelMarketOrdersData> => {
			return handleTransaction("cancelMarketOrders", async () => {
				const polymarketSDK = getPolymarketSDK();
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await polymarketSDK.cancelMarketOrders(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Cancels a specific order.
	 *
	 * @param payload - The payload containing the account name and data for canceling an order.
	 * @param payload.accountName - The name of the account canceling the order.
	 * @param payload.data - The data required for canceling an order.
	 * @returns A promise that resolves to the result of canceling the order.
	 */
	const cancelOrder = useCallback(
		async (payload: {
			accountName: string;
			data: CancelOrderBody;
		}): Promise<CancelOrderData> => {
			return handleTransaction("cancelOrder", async () => {
				const polymarketSDK = getPolymarketSDK();
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await polymarketSDK.cancelOrder(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Cancels multiple orders.
	 *
	 * @param payload - The payload containing the account name and data for canceling orders.
	 * @param payload.accountName - The name of the account canceling the orders.
	 * @param payload.data - The data required for canceling orders.
	 * @returns A promise that resolves to the result of canceling the orders.
	 */
	const cancelOrders = useCallback(
		async (payload: {
			accountName: string;
			data: CancelOrdersBody;
		}): Promise<CancelOrdersData> => {
			return handleTransaction("cancelOrders", async () => {
				const polymarketSDK = getPolymarketSDK();
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await polymarketSDK.cancelOrders(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Creates a market buy order.
	 *
	 * @param payload - The payload containing the account name and data for creating a market buy order.
	 * @param payload.accountName - The name of the account creating the order.
	 * @param payload.data - The data required for creating a market buy order.
	 * @returns A promise that resolves to the result of creating the market buy order.
	 */
	const createMarketBuyOrder = useCallback(
		async (payload: {
			accountName: string;
			data: CreateMarketBuyOrderBody;
		}): Promise<CreateMarketBuyOrderData> => {
			return handleTransaction("createMarketBuyOrder", async () => {
				const polymarketSDK = getPolymarketSDK();
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await polymarketSDK.createMarketBuyOrder(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Creates an order.
	 *
	 * @param payload - The payload containing the account name and data for creating an order.
	 * @param payload.accountName - The name of the account creating the order.
	 * @param payload.data - The data required for creating an order.
	 * @returns A promise that resolves to the result of creating the order.
	 */
	const createOrder = useCallback(
		async (payload: {
			accountName: string;
			data: CreateOrderBody;
		}): Promise<CreateOrderData> => {
			return handleTransaction("createOrder", async () => {
				const polymarketSDK = getPolymarketSDK();
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await polymarketSDK.createOrder(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Drops notifications.
	 *
	 * @param payload - The payload containing the account name and data for dropping notifications.
	 * @param payload.accountName - The name of the account dropping notifications.
	 * @param payload.data - The data required for dropping notifications.
	 * @returns A promise that resolves to the result of dropping notifications.
	 */
	const dropNotifications = useCallback(
		async (payload: {
			accountName: string;
			data: DropNotificationsBody;
		}): Promise<DropNotificationsData> => {
			return handleTransaction("dropNotifications", async () => {
				const polymarketSDK = getPolymarketSDK();
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await polymarketSDK.dropNotifications(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Gets the balance and allowance for a specific account.
	 *
	 * @param params - The parameters for getting balance and allowance.
	 * @returns A promise that resolves to the balance and allowance data.
	 */
	const getBalanceAllowance = useCallback(
		async (
			params: GetBalanceAllowanceParams,
		): Promise<GetBalanceAllowanceData> => {
			return handleTransaction("getBalanceAllowance", async () => {
				const polymarketSDK = getPolymarketSDK();
				const response = await polymarketSDK.getBalanceAllowance(params);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Gets market data.
	 *
	 * @param params - The parameters for getting market data.
	 * @returns A promise that resolves to the market data.
	 */
	const getMarket = useCallback(
		async (params: GetMarketParams): Promise<GetMarketData> => {
			return handleTransaction("getMarket", async () => {
				const polymarketSDK = getPolymarketSDK();
				const response = await polymarketSDK.getMarket(params);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Gets data for multiple markets.
	 *
	 * @param params - The parameters for getting markets data.
	 * @returns A promise that resolves to the markets data.
	 */
	const getMarkets = useCallback(
		async (params: GetMarketsParams): Promise<GetMarketsData> => {
			return handleTransaction("getMarkets", async () => {
				const polymarketSDK = getPolymarketSDK();
				const response = await polymarketSDK.getMarkets(params);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Gets market trade events.
	 *
	 * @param params - The parameters for getting market trade events.
	 * @returns A promise that resolves to the market trade events data.
	 */
	const getMarketTradeEvents = useCallback(
		async (
			params: GetMarketTradeEventsParams,
		): Promise<GetMarketTradeEventsData> => {
			return handleTransaction("getMarketTradeEvents", async () => {
				const polymarketSDK = getPolymarketSDK();
				const response = await polymarketSDK.getMarketTradeEvents(params);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Gets notifications.
	 *
	 * @param params - The parameters for getting notifications.
	 * @returns A promise that resolves to the notifications data.
	 */
	const getNotifications = useCallback(
		async (
			params: GetNotificationsParams1,
		): Promise<GetNotificationsResult> => {
			return handleTransaction("getNotifications", async () => {
				const polymarketSDK = getPolymarketSDK();
				const response = await polymarketSDK.getNotifications(params);
				return response.data;
			});
		},
		[moon],
	);

	// ... previously refactored functions ...

	/**
	 * Gets open orders.
	 *
	 * @param params - The parameters for getting open orders.
	 * @returns A promise that resolves to the open orders data.
	 */
	const getOpenOrders = useCallback(
		async (params: GetOpenOrdersParams): Promise<GetOpenOrdersData> => {
			return handleTransaction("getOpenOrders", async () => {
				const polymarketSDK = getPolymarketSDK();
				const response = await polymarketSDK.getOpenOrders(params);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Gets a specific order.
	 *
	 * @param params - The parameters for getting an order.
	 * @returns A promise that resolves to the order data.
	 */
	const getOrder = useCallback(
		async (params: GetOrderParams): Promise<GetOrderData> => {
			return handleTransaction("getOrder", async () => {
				const polymarketSDK = getPolymarketSDK();
				const response = await polymarketSDK.getOrder(params);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Gets the order book.
	 *
	 * @param params - The parameters for getting the order book.
	 * @returns A promise that resolves to the order book data.
	 */
	const getOrderBook = useCallback(
		async (params: GetOrderBookParams): Promise<GetOrderBookData> => {
			return handleTransaction("getOrderBook", async () => {
				const polymarketSDK = getPolymarketSDK();
				const response = await polymarketSDK.getOrderBook(params);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Gets price history.
	 *
	 * @param params - The parameters for getting price history.
	 * @returns A promise that resolves to the price history data.
	 */
	const getPricesHistory = useCallback(
		async (params: GetPricesHistoryParams): Promise<GetPricesHistoryData> => {
			return handleTransaction("getPricesHistory", async () => {
				const polymarketSDK = getPolymarketSDK();
				const response = await polymarketSDK.getPricesHistory(params);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Gets trades.
	 *
	 * @param params - The parameters for getting trades.
	 * @returns A promise that resolves to the trades data.
	 */
	const getTrades = useCallback(
		async (params: GetTradesParams): Promise<GetTradesData> => {
			return handleTransaction("getTrades", async () => {
				const polymarketSDK = getPolymarketSDK();
				const response = await polymarketSDK.getTrades(params);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Posts an order.
	 *
	 * @param payload - The payload containing the account name and data for posting an order.
	 * @param payload.accountName - The name of the account posting the order.
	 * @param payload.data - The data required for posting an order.
	 * @returns A promise that resolves to the result of posting the order.
	 */
	const postOrder = useCallback(
		async (payload: {
			accountName: string;
			data: PostOrderBody;
		}): Promise<PostOrderData> => {
			return handleTransaction("postOrder", async () => {
				const polymarketSDK = getPolymarketSDK();
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await polymarketSDK.postOrder(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Updates balance allowance.
	 *
	 * @param payload - The payload containing the account name and data for updating balance allowance.
	 * @param payload.accountName - The name of the account updating the balance allowance.
	 * @param payload.data - The data required for updating balance allowance.
	 * @returns A promise that resolves to the result of updating the balance allowance.
	 */
	const updateBalanceAllowance = useCallback(
		async (payload: {
			accountName: string;
			data: UpdateBalanceAllowanceBody;
		}): Promise<UpdateBalanceAllowanceData> => {
			return handleTransaction("updateBalanceAllowance", async () => {
				const polymarketSDK = getPolymarketSDK();
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await polymarketSDK.updateBalanceAllowance(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
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
