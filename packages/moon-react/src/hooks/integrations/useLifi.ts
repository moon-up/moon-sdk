import { useMoonAuth } from "@/context";
import { useMoonTransaction } from "@/hooks";
import {
	ApiResponseStatusResponse,
	GetToolsParams,
	LifiGetAllPossibleConnectionsParams,
	LifiGetConnectionsParams,
	LifiGetQuoteParams,
	LifiGetStatusParams,
	LifiGetTokenDetailsParams,
	LifiPostQuoteParams,
	Lifi,
	OptionalChainTypesEnum,
	ApiResponseQuote,
	ApiResponseTokenDetails,
	ApiResponseConnectionsResponse,
	ApiResponseTokenInfoByChainId,
	ApiResponseToolsResponse,
	TokensResponse,
	Quote,
	ChainsResponse,
	PostQuote,
} from "@moonup/moon-api";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import {
	useAccount,
	useChainId,
	useSendTransaction,
	useSwitchChain,
} from "wagmi";

/**
 * Custom hook to interact with the Moon Lifi SDK.
 *
 * @returns {Object} An object containing various functions and queries to interact with the Lifi SDK.
 *
 * @property {Function} getStatus - Function to get the status of a transaction.
 * @property {Function} getQuoteLifi - Function to get a quote from Lifi.
 * @property {Function} postQuoteLifi - Function to post a quote to Lifi.
 * @property {Function} getSupportedTokens - Function to get supported tokens from Lifi.
 * @property {Function} getSupportedChains - Function to get supported chains from Lifi.
 * @property {Object} supportedTokensQuery - Query object to fetch supported tokens.
 * @property {Object} supportedChainsQuery - Query object to fetch supported chains.
 */
export const useLifi = () => {
	const { handleTransaction } = useMoonTransaction();
	const { moon } = useMoonAuth();
	const { isConnected, address } = useAccount();
	const { sendTransactionAsync } = useSendTransaction();
	const chainId = useChainId();
	const { switchChain } = useSwitchChain();

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
			if (isConnected && address === transactionData.signed.transaction.from) {
				if (
					chainId !==
					Number.parseInt(transactionData.signed.transaction.chainId)
				) {
					await switchChain({
						chainId: Number.parseInt(
							transactionData.signed.transaction.chainId,
						),
					});
				}
				// Use wagmi's sendTransaction if a wagmi account is connected
				await sendTransactionAsync({
					to: transactionData.signed.transaction.to,
					data: transactionData.signed.transaction.data,
					value: BigInt(transactionData.signed.transaction.value),
					chainId: Number.parseInt(transactionData.signed.transaction.chain_id),
				});
				return transactionData;
			}
		} catch (error) {
			console.error("handleWagmiTransaction: Error: ", error);
			return transactionData;
		}
	};

	/**
	 * Fetches the supported tokens using the Lifi SDK.
	 *
	 * This hook uses the `useQuery` hook from React Query to fetch the supported tokens
	 * from the Lifi SDK. The query is identified by the key 'lifiGetSupportedTokens'.
	 *
	 * @throws {Error} If the Moon Lifi SDK is not initialized.
	 *
	 * @returns {ApiResponseTokensResponse} The response containing the supported tokens.
	 *
	 * @remarks
	 * The query result is considered fresh for 24 hours (staleTime: 1000 * 60 * 60 * 24).
	 */
	const supportedTokensQuery = useQuery({
		queryKey: ["lifiGetTokens"],
		queryFn: async (): Promise<TokensResponse> => {
			const lifiSDK = getLifiSDK();
			const response = await lifiSDK.lifiGetTokens();
			if (!response.data) {
				throw new Error("Failed to fetch supported tokens");
			}
			return response.data;
		},
		staleTime: 1000 * 60 * 60 * 24,
	});

	/**
	 * Fetches the supported chains using the Lifi SDK.
	 *
	 * This hook uses the `useQuery` function to fetch the supported chains from the Lifi SDK.
	 * It queries the `lifiGetSupportedChains` key and retrieves the chains of type `EVM`.
	 *
	 * @throws {Error} If the Moon Lifi SDK is not initialized.
	 *
	 * @returns {ApiResponseChainsResponse} The response containing the supported chains.
	 *
	 * @see {@link https://react-query.tanstack.com/reference/useQuery} for more information on `useQuery`.
	 */
	const supportedChainsQuery = useQuery({
		queryKey: ["lifiGetChains"],
		queryFn: async (): Promise<ChainsResponse> => {
			const lifiSDK = getLifiSDK();
			const response = await lifiSDK.lifiGetChains({});
			if (!response.data) {
				throw new Error("Failed to fetch supported chains");
			}
			return response.data;
		},
		staleTime: 1000 * 60 * 60 * 24,
	});

	/**
	 * Retrieves the Lifi SDK instance from the Moon SDK.
	 *
	 * @returns {Lifi} The initialized Lifi SDK instance.
	 * @throws {Error} If the Moon Lifi SDK is not initialized.
	 */
	const getLifiSDK = (): Lifi => {
		const lifiSDK = moon?.getLifiSDK();
		if (!lifiSDK) throw new Error("Moon Lifi SDK not initialized");
		return lifiSDK;
	};

	/**
	 * Retrieves the status of a transaction using the provided payload.
	 *
	 * @param payload - The parameters required to get the status of the transaction.
	 * @returns A promise that resolves to an ApiResponseStatusResponse object containing the status of the transaction.
	 */
	const getStatus = useCallback(
		async (
			payload: LifiGetStatusParams,
		): Promise<ApiResponseStatusResponse> => {
			return handleTransaction("getStatus", async () => {
				const lifiSDK = getLifiSDK();
				return await lifiSDK.lifiGetStatus(payload);
			});
		},
		[moon],
	);

	/**
	 * Fetches the supported tokens using the LiFi SDK.
	 *
	 * This function is memoized using `useCallback` and will only change if the `moon` dependency changes.
	 * It handles the transaction by calling `handleTransaction` with the action name 'getSupportedTokens'.
	 *
	 * @returns {Promise<ApiResponseTokensResponse>} A promise that resolves to the response containing the supported tokens.
	 */
	const getSupportedTokens = useCallback(
		async (payload: LifiGetQuoteParams): Promise<ApiResponseQuote> => {
			return handleTransaction("getQuoteLifi", async () => {
				const lifiSDK = getLifiSDK();
				return await lifiSDK.lifiGetQuote(payload);
			});
		},
		[moon],
	);

	/**
	 * Fetches the supported chains using the LiFi SDK.
	 *
	 * This function is memoized using `useCallback` and will only change if the `moon` dependency changes.
	 * It handles the transaction by calling `handleTransaction` with the action name 'getSupportedChains'.
	 * The LiFi SDK is used to get the chains with the optional chain type set to EVM.
	 *
	 * @returns {Promise<ApiResponseTokensResponse>} A promise that resolves to the response from the LiFi SDK, cast to `ApiResponseChainsResponse`.
	 */
	const getSupportedChains = useCallback(async (): Promise<ChainsResponse> => {
		return handleTransaction("getSupportedChains", async () => {
			const lifiSDK = getLifiSDK();
			const response = await lifiSDK.lifiGetChains({
				optionalChainTypes: OptionalChainTypesEnum.EVM,
			});
			return response.data;
		});
	}, [moon]);

	/**
	 * Fetches a quote using the LiFi SDK.
	 *
	 * @param payload - The parameters required to get a quote.
	 * @returns A promise that resolves to a Quote object.
	 *
	 * @example
	 * ```typescript
	 * const quoteParams: GetQuoteParams = { /* parameters *\/ };
	 * const quote = await getQuoteLifi(quoteParams);
	 * console.log(quote);
	 * ```
	 */
	const getQuoteLifi = useCallback(
		async (payload: LifiGetQuoteParams): Promise<Quote> => {
			return handleTransaction("getQuoteLifi", async () => {
				const lifiSDK = getLifiSDK();
				const response = await lifiSDK.lifiGetQuote(payload);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Posts a quote to the LiFi SDK.
	 *
	 * This function uses the `handleTransaction` utility to manage the transaction
	 * and ensure proper handling of the quote posting process. It retrieves the
	 * LiFi SDK instance and sends the provided payload to the `postQuote` method
	 * of the SDK. The response data is then returned.
	 *
	 * @param payload - The parameters required to post a quote.
	 * @returns A promise that resolves to the posted quote.
	 */
	const postQuoteLifi = useCallback(
		async (payload: LifiPostQuoteParams): Promise<PostQuote> => {
			return handleTransaction("postQuoteLifi", async () => {
				const lifiSDK = getLifiSDK();
				const preparedPayload = prepareTransaction(
					payload.accountName,
					payload,
				);
				const response = await lifiSDK.lifiPostQuote(preparedPayload);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const getTools = useCallback(
		async (payload: GetToolsParams): Promise<ApiResponseToolsResponse> => {
			return handleTransaction("getTools", async () => {
				const lifiSDK = getLifiSDK();
				return await lifiSDK.getTools(payload);
			});
		},
		[moon],
	);

	const getAllPossibleConnections = useCallback(
		async (
			payload: LifiGetAllPossibleConnectionsParams,
		): Promise<ApiResponseTokenInfoByChainId> => {
			return handleTransaction("getAllPossibleConnections", async () => {
				const lifiSDK = getLifiSDK();
				return await lifiSDK.lifiGetAllPossibleConnections(payload);
			});
		},
		[moon],
	);

	const getConnections = useCallback(
		async (
			payload: LifiGetConnectionsParams,
		): Promise<ApiResponseConnectionsResponse> => {
			return handleTransaction("getConnections", async () => {
				const lifiSDK = getLifiSDK();
				return await lifiSDK.lifiGetConnections(payload);
			});
		},
		[moon],
	);

	const getTokenDetails = useCallback(
		async (
			payload: LifiGetTokenDetailsParams,
		): Promise<ApiResponseTokenDetails> => {
			return handleTransaction("getTokenDetails", async () => {
				const lifiSDK = getLifiSDK();
				return await lifiSDK.lifiGetTokenDetails(payload);
			});
		},
		[moon],
	);

	return {
		getStatus,
		getQuoteLifi,
		postQuoteLifi,
		supportedTokensQuery,
		supportedChainsQuery,
		getTools,
		getAllPossibleConnections,
		getConnections,
		getTokenDetails,
		getSupportedChains,
		getSupportedTokens,
	};
};
