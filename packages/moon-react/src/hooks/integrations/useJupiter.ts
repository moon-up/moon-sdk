import { useMoonAuth } from "@/context";
import { useMoonTransaction } from "@/hooks";
import type {
	JupiterGetIndexedRouteMapParams,
	JupiterAPIResponseAny,
	JupiterAPIResponseRecordStringString,
	JupiterAPIResponseJupiterExecuteFunctionResult,
	JupiterAPIResponseStringArray,
	Jupiter,
	OmitJupiterInputBodyAccountName,
	JupiterCancelLimitOrdersPayload,
	CreateLimitOrderBody,
	JupiterGetOpenOrdersParams,
	JupiterGetOrderHistoryParams,
} from "@moonup/moon-api";
import { useCallback } from "react";
/**
 * Custom hook to interact with the Jupiter SDK within the Moon SDK context.
 *
 * @returns {Object} An object containing methods to interact with the Jupiter SDK:
 * - `getIndexedRouteMap`: Fetches the indexed route map based on the provided query parameters.
 * - `getProgramIdToLabel`: Retrieves a mapping of program IDs to their respective labels.
 * - `getQuote`: Obtains a quote for a given account and data payload.
 * - `getSwapInstructions`: Fetches swap instructions for a given account and data payload.
 * - `getTokens`: Retrieves a list of tokens available in the Jupiter SDK.
 * - `swap`: Executes a swap operation for a given account and data payload.
 */
export const useJupiter = () => {
	const { handleTransaction } = useMoonTransaction();
	const { moon } = useMoonAuth();

	/**
	 * Retrieves the Jupiter SDK instance from the Moon SDK.
	 *
	 * @returns {Jupiter} The initialized Jupiter SDK instance.
	 * @throws {Error} If the Jupiter SDK is not initialized.
	 */
	const getJupiterSDK = useCallback((): Jupiter => {
		const jupiterSDK = moon?.getJupiterSDK();
		if (!jupiterSDK) throw new Error("Moon jupiterSDK not initialized");
		return jupiterSDK;
	}, [moon]);

	/**
	 * Fetches the indexed route map using the Jupiter SDK.
	 *
	 * @param query - The parameters required to get the indexed route map.
	 * @returns A promise that resolves to the indexed route map data.
	 */
	const getIndexedRouteMap = useCallback(
		async (
			query: JupiterGetIndexedRouteMapParams,
		): Promise<JupiterAPIResponseAny> => {
			return handleTransaction("getIndexedRouteMap", async () => {
				const jupiterSDK = getJupiterSDK();
				return jupiterSDK.jupiterGetIndexedRouteMap(query);
			});
		},
		[moon],
	);

	/**
	 * Fetches the mapping of program IDs to their corresponding labels using the Jupiter SDK.
	 *
	 * This function is memoized using `useCallback` and depends on the `moon` dependency.
	 * It handles the transaction by calling `handleTransaction` with the action name 'getProgramIdToLabel'.
	 *
	 * @returns {Promise<GetProgramIdToLabelData>} A promise that resolves to the data containing the program ID to label mapping.
	 */
	const getProgramIdToLabel =
		useCallback(async (): Promise<JupiterAPIResponseRecordStringString> => {
			return handleTransaction("getProgramIdToLabel", async () => {
				const jupiterSDK = getJupiterSDK();
				return jupiterSDK.jupiterGetProgramIdToLabel();
			});
		}, [moon]);

	/**
	 * Fetches a quote using the Jupiter SDK.
	 *
	 * @param payload - The payload containing the account name and data.
	 * @param payload.accountName - The name of the account for which to fetch the quote.
	 * @param payload.data - The data required by the Jupiter SDK to fetch the quote.
	 * @returns A promise that resolves to the quote data.
	 */
	const getQuote = useCallback(
		async (payload: {
			accountName: string;
			data: OmitJupiterInputBodyAccountName;
		}): Promise<JupiterAPIResponseJupiterExecuteFunctionResult> => {
			return handleTransaction("getQuote", async () => {
				const jupiterSDK = getJupiterSDK();
				return jupiterSDK.jupiterGetQuote(payload.accountName, payload.data);
			});
		},
		[moon],
	);

	/**
	 * Retrieves swap instructions using the Jupiter SDK.
	 *
	 * @param payload - The payload containing the account name and data.
	 * @param payload.accountName - The name of the account.
	 * @param payload.data - The data required for the swap, excluding the account name.
	 * @returns A promise that resolves to the swap instructions data.
	 */
	const getSwapInstructions = useCallback(
		async (payload: {
			accountName: string;
			data: OmitJupiterInputBodyAccountName;
		}): Promise<JupiterAPIResponseJupiterExecuteFunctionResult> => {
			return handleTransaction("getSwapInstructions", async () => {
				const jupiterSDK = getJupiterSDK();
				return jupiterSDK.jupiterGetSwapInstructions(
					payload.accountName,
					payload.data,
				);
			});
		},
		[moon],
	);

	/**
	 * Fetches tokens using the Jupiter SDK.
	 *
	 * This function is memoized using `useCallback` and will only change if the `moon` dependency changes.
	 * It handles the transaction by calling the `handleTransaction` function with the action name 'getTokens'.
	 *
	 * @returns {Promise<GetTokensData>} A promise that resolves to the data containing the tokens.
	 */
	const getTokens =
		useCallback(async (): Promise<JupiterAPIResponseStringArray> => {
			return handleTransaction("getTokens", async () => {
				const jupiterSDK = getJupiterSDK();
				return jupiterSDK.jupiterGetTokens();
			});
		}, [moon]);

	/**
	 * Executes a swap transaction using the Jupiter SDK.
	 *
	 * @param payload - The payload containing the account name and data for the swap.
	 * @param payload.accountName - The name of the account initiating the swap.
	 * @param payload.data - The data required for the swap, excluding the account name.
	 * @returns A promise that resolves to the swap data.
	 */
	const swap = useCallback(
		async (payload: {
			accountName: string;
			data: OmitJupiterInputBodyAccountName;
		}): Promise<JupiterAPIResponseJupiterExecuteFunctionResult> => {
			return handleTransaction("swap", async () => {
				const jupiterSDK = getJupiterSDK();
				return jupiterSDK.jupiterSwap(payload.accountName, payload.data);
			});
		},
		[moon],
	);

	const cancelLimitOrders = useCallback(
		async (payload: {
			accountName: string;
			data: JupiterCancelLimitOrdersPayload;
		}): Promise<JupiterAPIResponseJupiterExecuteFunctionResult> => {
			return handleTransaction("cancelLimitOrders", async () => {
				const jupiterSDK = getJupiterSDK();
				return jupiterSDK.jupiterCancelLimitOrders(
					payload.accountName,
					payload.data,
				);
			});
		},
		[moon],
	);

	const createLimitOrder = useCallback(
		async (payload: {
			accountName: string;
			data: CreateLimitOrderBody;
		}): Promise<JupiterAPIResponseJupiterExecuteFunctionResult> => {
			return handleTransaction("createLimitOrder", async () => {
				const jupiterSDK = getJupiterSDK();
				return jupiterSDK.jupiterCreateLimitOrder(
					payload.accountName,
					payload.data,
				);
			});
		},
		[moon],
	);

	const getOpenOrders = useCallback(
		async (
			query: JupiterGetOpenOrdersParams,
		): Promise<JupiterAPIResponseJupiterExecuteFunctionResult> => {
			return handleTransaction("getOpenOrders", async () => {
				const jupiterSDK = getJupiterSDK();
				return jupiterSDK.jupiterGetOpenOrders(query);
			});
		},
		[moon],
	);

	const getOrderHistory = useCallback(
		async (
			query: JupiterGetOrderHistoryParams,
		): Promise<JupiterAPIResponseJupiterExecuteFunctionResult> => {
			return handleTransaction("getOrderHistory", async () => {
				const jupiterSDK = getJupiterSDK();
				return jupiterSDK.jupiterGetOrderHistory(query);
			});
		},
		[moon],
	);

	return {
		getIndexedRouteMap,
		getProgramIdToLabel,
		getQuote,
		getSwapInstructions,
		getTokens,
		swap,
		cancelLimitOrders,
		createLimitOrder,
		getOpenOrders,
		getOrderHistory,
	};
};
