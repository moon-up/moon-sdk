import { useChains, useMoonTransaction } from "@/hooks";
import type {
	GetRouterAddressParams,
	GetSupportedTokensParams,
	Odos,
	OdosAPIResponseOdosExecuteFunctionResult,
	OdosSwapInputBody,
} from "@moonup/moon-api";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { useAccount, useSendTransaction } from "wagmi";
import { useMoonAuth } from "../../context";

/**
 * Custom hook to interact with the Odos SDK.
 *
 * @param {number} [chainId] - Optional chain ID to use. Defaults to the chain ID from the context or 1 if not provided.
 * @returns {Object} - An object containing functions and queries to interact with the Odos SDK.
 * @property {Function} getRouterAddress - Function to get the router address from the Odos SDK.
 * @property {Function} getQuoteOdos - Function to get a quote from the Odos SDK.
 * @property {Function} swapOdos - Function to perform a swap using the Odos SDK.
 * @property {Function} getSupportedTokens - Function to get supported tokens from the Odos SDK.
 * @property {Object} supportedTokensQuery - React Query object to fetch supported tokens.
 */
export const useOdos = (chainId?: number) => {
	const { handleTransaction } = useMoonTransaction();
	const { moon } = useMoonAuth();
	const { selectedChain: chain } = useChains();

	const selectedChainId = chainId || chain?.chain_id || 1;
	const { isConnected } = useAccount();
	const { sendTransactionAsync } = useSendTransaction();

	const prepareTransaction = (transaction: any) => {
		if (isConnected) {
			return {
				...transaction,
				broadcast: false,
				dryrun: true,
			};
		}
		return transaction;
	};

	const handleWagmiTransaction = async (transactionData: any) => {
		if (isConnected) {
			const { transaction } = transactionData;

			await sendTransactionAsync({
				to: transaction.to,
				data: transaction.data,
				value: BigInt(transaction.value),
				chainId: transaction.chainId,
			});
		}
		return transactionData;
	};

	/**
	 * Fetches the supported tokens for the selected chain using the Odos SDK.
	 *
	 * @constant
	 * @type {QueryObserverResult<OdosAPIResponseOdosExecuteFunctionResult, Error>}
	 *
	 * @param {Array} queryKey - The key for the query, consisting of 'odosGetSupportedTokens' and the selected chain ID.
	 * @param {Function} queryFn - The function to fetch the supported tokens from the Odos SDK.
	 * @param {number} staleTime - The time in milliseconds for which the query result is considered fresh. Defaults to 24 hours.
	 *
	 * @throws {Error} If the Moon Lifi SDK is not initialized.
	 *
	 * @returns {OdosAPIResponseOdosExecuteFunctionResult} The response data containing the supported tokens.
	 */
	const supportedTokensQuery = useQuery({
		queryKey: ["odosGetSupportedTokens", selectedChainId],
		queryFn: async () => {
			const odosSDK = moon?.getOdosSDK();
			if (!odosSDK) throw new Error("Moon Lifi SDK not initialized");
			const response = await odosSDK.getSupportedTokens({
				chainId: selectedChainId,
			});
			return response.data as OdosAPIResponseOdosExecuteFunctionResult;
		},
		staleTime: 1000 * 60 * 60 * 24,
	});

	/**
	 * Retrieves the Odos SDK instance.
	 *
	 * This function attempts to get the Odos SDK instance from the `moon` object.
	 * If the SDK is not initialized, it throws an error.
	 *
	 * @returns {Odos} The initialized Odos SDK instance.
	 * @throws {Error} If the Moon Lifi SDK is not initialized.
	 */
	const getOdosSDK = (): Odos => {
		const odosSDK = moon?.getOdosSDK();
		if (!odosSDK) throw new Error("Moon Lifi SDK not initialized");
		return odosSDK;
	};

	/**
	 * Retrieves the router address using the Odos SDK.
	 *
	 * @param payload - The parameters required to get the router address.
	 * @returns A promise that resolves to the result of the Odos execute function.
	 */
	const getRouterAddress = useCallback(
		async (
			payload: GetRouterAddressParams,
		): Promise<OdosAPIResponseOdosExecuteFunctionResult> => {
			return handleTransaction("getRouterAddressOdos", async () => {
				const odosSDK = getOdosSDK();
				const response = await odosSDK.getRouterAddress(payload);
				return response;
			});
		},
		[moon],
	);

	/**
	 * Fetches the supported tokens using the Odos SDK.
	 *
	 * @param payload - The parameters required to get the supported tokens.
	 * @returns A promise that resolves to the result of the Odos API response.
	 */
	const getSupportedTokens = useCallback(
		async (
			payload: GetSupportedTokensParams,
		): Promise<OdosAPIResponseOdosExecuteFunctionResult> => {
			return handleTransaction("getQuoteLifi", async () => {
				const odosSDK = getOdosSDK();
				const response = await odosSDK.getSupportedTokens(payload);
				return response.data as OdosAPIResponseOdosExecuteFunctionResult;
			});
		},
		[moon],
	);

	/**
	 * Fetches a quote from the Odos SDK.
	 *
	 * @param payload - The payload containing the account name and data for the quote request.
	 * @param payload.accountName - The name of the account requesting the quote.
	 * @param payload.data - The data required for the Odos swap input.
	 * @returns A promise that resolves to the Odos API response for the execute function result.
	 */
	const getQuoteOdos = useCallback(
		async (payload: {
			accountName: string;
			data: OdosSwapInputBody;
		}): Promise<OdosAPIResponseOdosExecuteFunctionResult> => {
			return handleTransaction("getQuoteLifi", async () => {
				const odosSDK = getOdosSDK();
				const response = await odosSDK.getQuote(
					payload.accountName,
					payload.data,
				);
				return response.data as OdosAPIResponseOdosExecuteFunctionResult;
			});
		},
		[moon],
	);

	/**
	 * Executes a swap operation using the Odos SDK.
	 *
	 * @param payload - The payload containing the account name and swap data.
	 * @param payload.accountName - The name of the account performing the swap.
	 * @param payload.data - The data required for the swap operation.
	 * @returns A promise that resolves to the result of the Odos API response.
	 */
	const swapOdos = useCallback(
		async (payload: {
			accountName: string;
			data: OdosSwapInputBody;
		}): Promise<OdosAPIResponseOdosExecuteFunctionResult> => {
			return handleTransaction("getQuoteLifi", async () => {
				const odosSDK = getOdosSDK();
				const preparedTransaction = prepareTransaction(payload.data);
				const response = await odosSDK.swap(
					payload.accountName,
					preparedTransaction,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	return {
		getRouterAddress,
		getQuoteOdos,
		swapOdos,
		getSupportedTokens,
		supportedTokensQuery,
	};
};
