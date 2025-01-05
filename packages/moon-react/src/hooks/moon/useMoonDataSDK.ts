import { useChains, useMoonAccount, useMoonTransaction } from "@/hooks";
import type {
	Data,
	DataGetWalletTokenBalancesParams,
	DataGetWalletTransactionHistoryParams,
	WalletBalanceAPIResponse,
	WalletHistoryAPIResponse,
	NFTsAPIResponse,
	ChartAnalysisAPIResponse,
	ChartsGetChartAnalysisParamsEnum,
	DataExecuteCustomSupabaseQueryPayload,
	PortfolioAPIResponse,
	TokenMetadataAPIResponse,
	DataGetTokensMetadataParams,
	DataGetUserDebankComplexProtocolListParams,
	DebankPortfolioAPIResponse,
	DataGetUserDebankTokenListParams,
	DataGetUserWalletPortfolioParams,
	DataGetWalletNfTsParams,
	DataGetBitcoinBalanceData,
	DataGetBitcoinTransactionsParams,
	DataGetBitcoinTransactionsData,
	DataGetDogecoinBalanceData,
	DataGetDogecoinTransactionsParams,
	DataGetDogecoinTransactionsData,
	DataGetLitecoinBalanceData,
	DataGetLitecoinTransactionsParams,
	DataGetLitecoinTransactionsData,
	DataGetTronBalanceData,
	DataGetTronTransactionsParams,
	DataGetTronTransactionsData,
	DataGetXrpBalanceData,
	DataGetXrpTransactionsData,
} from "@moonup/moon-api";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { useMoonAuth } from "../../context";

type ChainInfo = {
	name: string;
	aliases: string[];
	hexId: string;
};

export const chainIdToHexMapping: { [key: number]: ChainInfo } = {
	1: {
		name: "Ethereum Mainnet",
		aliases: ["eth", "mainnet"],
		hexId: "0x1",
	},
	5: {
		name: "Goerli (Ethereum Testnet)",
		aliases: ["goerli"],
		hexId: "0x5",
	},
	56: {
		name: "Binance Smart Chain Mainnet",
		aliases: ["bsc", "binance", "binance smart chain"],
		hexId: "0x38",
	},
	97: {
		name: "Binance Smart Chain Testnet",
		aliases: ["bsc testnet", "binance testnet", "binance smart chain testnet"],
		hexId: "0x61",
	},
	137: {
		name: "Polygon (Matic) Mainnet",
		aliases: ["matic", "polygon"],
		hexId: "0x89",
	},
	80001: {
		name: "Mumbai (Matic Testnet)",
		aliases: ["mumbai", "matic testnet", "polygon testnet"],
		hexId: "0x13881",
	},
	43114: {
		name: "Avalanche Mainnet",
		aliases: ["avalanche"],
		hexId: "0xa86a",
	},
	43113: {
		name: "Avalanche Testnet",
		aliases: ["avalanche testnet"],
		hexId: "0xa869",
	},
	250: {
		name: "Fantom Mainnet",
		aliases: ["fantom"],
		hexId: "0xfa",
	},
	25: {
		name: "Cronos Mainnet",
		aliases: ["cronos"],
		hexId: "0x19",
	},
};

export const useMoonDataSDK = () => {
	const { handleTransaction } = useMoonTransaction();

	const { moon, session } = useMoonAuth();

	const { account: wallet } = useMoonAccount();
	const { selectedChain: chain } = useChains();

	const getChartAnalysis = useCallback(
		async (
			symbol: string,
			timeframe: ChartsGetChartAnalysisParamsEnum,
		): Promise<ChartAnalysisAPIResponse> => {
			return handleTransaction("getChartAnalysis", async () => {
				const dataSDK = getDataSDK();
				const response = await dataSDK.chartsGetChartAnalysis(
					symbol,
					timeframe,
				);
				return response.data;
			});
		},
		[moon],
	);

	const executeCustomSupabaseQuery = useCallback(
		async (data: DataExecuteCustomSupabaseQueryPayload): Promise<any> => {
			return handleTransaction("executeCustomSupabaseQuery", async () => {
				const dataSDK = getDataSDK();
				const response = await dataSDK.dataExecuteCustomSupabaseQuery(data);
				return response.data;
			});
		},
		[moon],
	);

	const getPortfolioFetchStatus = useCallback(
		async (jobId: string): Promise<PortfolioAPIResponse> => {
			return handleTransaction("getPortfolioFetchStatus", async () => {
				const dataSDK = getDataSDK();
				const response = await dataSDK.dataGetPortfolioFetchStatus(jobId);
				return response.data;
			});
		},
		[moon],
	);

	const getTokensMetadata = useCallback(
		async (
			query: DataGetTokensMetadataParams,
		): Promise<TokenMetadataAPIResponse> => {
			return handleTransaction("getTokensMetadata", async () => {
				const dataSDK = getDataSDK();
				const response = await dataSDK.dataGetTokensMetadata(query);
				return response.data;
			});
		},
		[moon],
	);

	const getUserDebankComplexProtocolList = useCallback(
		async (
			params: DataGetUserDebankComplexProtocolListParams,
		): Promise<DebankPortfolioAPIResponse> => {
			return handleTransaction("getUserDebankComplexProtocolList", async () => {
				const dataSDK = getDataSDK();
				const response =
					await dataSDK.dataGetUserDebankComplexProtocolList(params);
				return response.data;
			});
		},
		[moon],
	);

	const getUserDebankTokenList = useCallback(
		async (
			params: DataGetUserDebankTokenListParams,
		): Promise<WalletBalanceAPIResponse> => {
			return handleTransaction("getUserDebankTokenList", async () => {
				if (!params.address) {
					throw new Error("getUserDebankTokenList::Address is required");
				}
				const dataSDK = getDataSDK();
				const response = await dataSDK.dataGetUserDebankTokenList(params);
				return response.data;
			});
		},
		[moon],
	);

	const getUserWalletPortfolio = useCallback(
		async (
			params: DataGetUserWalletPortfolioParams,
		): Promise<PortfolioAPIResponse> => {
			return handleTransaction("getUserWalletPortfolio", async () => {
				const dataSDK = getDataSDK();
				const response = await dataSDK.dataGetUserWalletPortfolio(params);
				return response.data;
			});
		},
		[moon],
	);
	const getUserDebankTotalBalance = useCallback(
		async (address: string): Promise<WalletBalanceAPIResponse> => {
			return handleTransaction("getUserDebankTotalBalance", async () => {
				const dataSDK = getDataSDK();
				const response = await dataSDK.dataGetUserDebankTotalBalance({
					address,
				});
				return response.data;
			});
		},
		[moon],
	);

	const getWalletNFTs = useCallback(
		async (params: DataGetWalletNfTsParams): Promise<NFTsAPIResponse> => {
			return handleTransaction("getWalletNFTs", async () => {
				const dataSDK = getDataSDK();
				const response = await dataSDK.dataGetWalletNfTs(params);
				return response.data;
			});
		},
		[moon],
	);

	const getBitcoinBalance = useCallback(
		async (address: string): Promise<DataGetBitcoinBalanceData> => {
			return handleTransaction("getBitcoinBalance", async () => {
				const dataSDK = getDataSDK();
				const response = await dataSDK.dataGetBitcoinBalance(address);
				return response.data;
			});
		},
		[moon],
	);

	const getBitcoinTransactions = useCallback(
		async (
			params: DataGetBitcoinTransactionsParams,
		): Promise<DataGetBitcoinTransactionsData> => {
			return handleTransaction("getBitcoinTransactions", async () => {
				const dataSDK = getDataSDK();
				const response = await dataSDK.dataGetBitcoinTransactions(params);
				return response.data;
			});
		},
		[moon],
	);

	const getDogecoinBalance = useCallback(
		async (address: string): Promise<DataGetDogecoinBalanceData> => {
			return handleTransaction("getDogecoinBalance", async () => {
				const dataSDK = getDataSDK();
				const response = await dataSDK.dataGetDogecoinBalance(address);
				return response.data;
			});
		},
		[moon],
	);

	const getDogecoinTransactions = useCallback(
		async (
			params: DataGetDogecoinTransactionsParams,
		): Promise<DataGetDogecoinTransactionsData> => {
			return handleTransaction("getDogecoinTransactions", async () => {
				const dataSDK = getDataSDK();
				const response = await dataSDK.dataGetDogecoinTransactions(params);
				return response.data;
			});
		},
		[moon],
	);

	const getLitecoinBalance = useCallback(
		async (address: string): Promise<DataGetLitecoinBalanceData> => {
			return handleTransaction("getLitecoinBalance", async () => {
				const dataSDK = getDataSDK();
				const response = await dataSDK.dataGetLitecoinBalance(address);
				return response.data;
			});
		},
		[moon],
	);

	const getLitecoinTransactions = useCallback(
		async (
			params: DataGetLitecoinTransactionsParams,
		): Promise<DataGetLitecoinTransactionsData> => {
			return handleTransaction("getLitecoinTransactions", async () => {
				const dataSDK = getDataSDK();
				const response = await dataSDK.dataGetLitecoinTransactions(params);
				return response.data;
			});
		},
		[moon],
	);

	const getTronBalance = useCallback(
		async (address: string): Promise<DataGetTronBalanceData> => {
			return handleTransaction("getTronBalance", async () => {
				const dataSDK = getDataSDK();
				const response = await dataSDK.dataGetTronBalance(address);
				return response.data;
			});
		},
		[moon],
	);

	const getTronTransactions = useCallback(
		async (
			params: DataGetTronTransactionsParams,
		): Promise<DataGetTronTransactionsData> => {
			return handleTransaction("getTronTransactions", async () => {
				const dataSDK = getDataSDK();
				const response = await dataSDK.dataGetTronTransactions(params);
				return response.data;
			});
		},
		[moon],
	);

	const getXrpBalance = useCallback(
		async (account: string): Promise<DataGetXrpBalanceData> => {
			return handleTransaction("getXrpBalance", async () => {
				const dataSDK = getDataSDK();
				const response = await dataSDK.dataGetXrpBalance(account);
				return response.data;
			});
		},
		[moon],
	);

	const getXrpTransactions = useCallback(
		async (account: string): Promise<DataGetXrpTransactionsData> => {
			return handleTransaction("getXrpTransactions", async () => {
				const dataSDK = getDataSDK();
				const response = await dataSDK.dataGetXrpTransactions(account);
				return response.data;
			});
		},
		[moon],
	);

	// React Query Hooks for new methods
	const useBitcoinBalanceQuery = (address: string) =>
		useQuery({
			queryKey: ["bitcoinBalance", address],
			queryFn: () => getBitcoinBalance(address),
		});

	const useBitcoinTransactionsQuery = (
		params: DataGetBitcoinTransactionsParams,
	) =>
		useQuery({
			queryKey: ["bitcoinTransactions", params],
			queryFn: () => getBitcoinTransactions(params),
		});

	const useDogecoinBalanceQuery = (address: string) =>
		useQuery({
			queryKey: ["dogecoinBalance", address],
			queryFn: () => getDogecoinBalance(address),
		});

	const useDogecoinTransactionsQuery = (
		params: DataGetDogecoinTransactionsParams,
	) =>
		useQuery({
			queryKey: ["dogecoinTransactions", params],
			queryFn: () => getDogecoinTransactions(params),
		});

	const useLitecoinBalanceQuery = (address: string) =>
		useQuery({
			queryKey: ["litecoinBalance", address],
			queryFn: () => getLitecoinBalance(address),
		});

	const useLitecoinTransactionsQuery = (
		params: DataGetLitecoinTransactionsParams,
	) =>
		useQuery({
			queryKey: ["litecoinTransactions", params],
			queryFn: () => getLitecoinTransactions(params),
		});

	const useTronBalanceQuery = (address: string) =>
		useQuery({
			queryKey: ["tronBalance", address],
			queryFn: () => getTronBalance(address),
		});

	const useTronTransactionsQuery = (params: DataGetTronTransactionsParams) =>
		useQuery({
			queryKey: ["tronTransactions", params],
			queryFn: () => getTronTransactions(params),
		});

	const useXrpBalanceQuery = (account: string) =>
		useQuery({
			queryKey: ["xrpBalance", account],
			queryFn: () => getXrpBalance(account),
		});

	const useXrpTransactionsQuery = (account: string) =>
		useQuery({
			queryKey: ["xrpTransactions", account],
			queryFn: () => getXrpTransactions(account),
		});

	// React Query Hooks

	const useChartAnalysisQuery = (
		symbol: string,
		timeframe: ChartsGetChartAnalysisParamsEnum,
	) =>
		useQuery({
			queryKey: ["chartAnalysis", symbol, timeframe],
			queryFn: () => getChartAnalysis(symbol, timeframe),
		});

	const usePortfolioFetchStatusQuery = (jobId: string) =>
		useQuery({
			queryKey: ["portfolioFetchStatus", jobId],
			queryFn: () => getPortfolioFetchStatus(jobId),
		});

	const useTokensMetadataQuery = (query: DataGetTokensMetadataParams) =>
		useQuery({
			queryKey: ["tokensMetadata", query],
			queryFn: () => getTokensMetadata(query),
		});

	const useDebankUserTotalBalanceQuery = (address: string) =>
		useQuery({
			queryKey: ["debankUserTotalBalance", address],
			queryFn: () => getUserDebankTotalBalance(address),
		});

	const useUserDebankComplexProtocolListQuery = (
		params: DataGetUserDebankComplexProtocolListParams,
	) =>
		useQuery({
			queryKey: ["userDebankComplexProtocolList", params],
			queryFn: () => getUserDebankComplexProtocolList(params),
		});

	const useUserDebankTokenListQuery = (
		params: DataGetUserDebankTokenListParams,
	) =>
		useQuery({
			queryKey: ["userDebankTokenList", params],
			queryFn: () => getUserDebankTokenList(params),
			enabled: !!params.address && !!session,
		});

	const useUserWalletPortfolioQuery = (
		params: DataGetUserWalletPortfolioParams,
	) =>
		useQuery({
			queryKey: ["userWalletPortfolio", params],
			queryFn: () => getUserWalletPortfolio(params),
		});

	const useDebankUserTokensQuery = (address: string, isAll: boolean) =>
		useQuery({
			queryKey: ["debankUserTokens", address, isAll],
			queryFn: () =>
				getAllDebankUserTokens({
					address,
					isAll,
				}),
			enabled: !!address && !!moon,
		});
	const walletBalanceChainIdQuery = (chainId?: number) =>
		useQuery({
			queryKey: ["useMoonDataWalletBalanceQuery", chainId || chain?.id, wallet],
			queryFn: async () => {
				const dataSDK = moon?.getDataSDK();
				if (!dataSDK)
					throw new Error("useMoonWalletHistory::Moon SDK not initialized");
				if (!wallet)
					throw new Error("useMoonWalletHistory::No wallet address found");

				const selectedChainId = chainId || chain?.chain_id;
				if (!selectedChainId)
					throw new Error("useMoonWalletHistory::No chain found");
				if (!chainIdToHexMapping[selectedChainId])
					throw new Error("useMoonWalletHistory::Chain not supported");

				const hexChain = chainIdToHexMapping[selectedChainId].hexId;
				const response = await dataSDK.dataGetWalletTokenBalances({
					address: wallet || "",
					chain: hexChain,
				});
				if (!response.data) {
					throw new Error("useMoonDataSDK::Wallet balance query failed");
				}
				return response.data;
			},
			staleTime: 1000 * 60 * 20,
		});

	const walletBalanceQuery = useQuery({
		queryKey: ["useMoonDataWalletBalanceQuery", chain?.id, wallet],
		queryFn: async () => {
			const dataSDK = moon?.getDataSDK();
			if (!dataSDK)
				throw new Error("useMoonWalletHistory::Moon SDK not initialized");
			if (!wallet)
				throw new Error("useMoonWalletHistory::No wallet address found");
			if (!chain || !chain.chain_id)
				throw new Error("useMoonWalletHistory::No chain found");
			if (!chainIdToHexMapping[chain.chain_id])
				throw new Error("useMoonWalletHistory::Chain not supported");
			const hexChain = chainIdToHexMapping[chain.chain_id].hexId;
			const response = await dataSDK.dataGetWalletTokenBalances({
				address: wallet || "",
				chain: hexChain,
			});
			if (!response.data) {
				throw new Error("useMoonDataSDK::Wallet balance query failed");
			}
			return response.data;
		},
		staleTime: 1000 * 60 * 20,
	});

	const getDataSDK = (): Data => {
		const dataSDK = moon?.getDataSDK();
		if (!dataSDK) throw new Error("Moon SDK not initialized");
		return dataSDK;
	};

	const getWalletBalance = useCallback(
		async (
			payload: DataGetWalletTokenBalancesParams,
		): Promise<WalletBalanceAPIResponse> => {
			return handleTransaction("getWalletBalance", async () => {
				const dataSDK = getDataSDK();
				const response = await dataSDK.dataGetWalletTokenBalances(payload);
				return response.data;
			});
		},
		[moon],
	);

	const getWalletHistory = useCallback(
		async (
			payload: DataGetWalletTransactionHistoryParams,
		): Promise<WalletHistoryAPIResponse> => {
			return handleTransaction("getWalletHistory", async () => {
				const dataSDK = getDataSDK();
				const response = await dataSDK.dataGetWalletTransactionHistory(payload);
				return response;
			});
		},
		[moon],
	);
	const getAllDebankUserTokens = useCallback(
		async (params: {
			address: string;
			isAll: boolean;
			refresh?: boolean;
		}): Promise<WalletBalanceAPIResponse> => {
			return handleTransaction("getAllDebankUserTokens", async () => {
				const dataSDK = getDataSDK();

				const response = await dataSDK.getAllDebankUserTokens({
					address: params.address,
					isAll: params.isAll,
					refresh: params.refresh,
				});
				return response.data;
			});
		},
		[moon],
	);

	const debankUserTokensQuery = useQuery({
		queryKey: ["debankUserTokens", wallet],
		queryFn: async () => {
			if (!wallet || !moon) return null;
			const response = await moon.getDataSDK().getAllDebankUserTokens({
				address: wallet,
				isAll: false,
			});
			return response.data;
		},
		enabled: !!wallet && !!moon,
	});
	const useWalletHistoryQuery = (
		params: DataGetWalletTransactionHistoryParams,
	) =>
		useQuery({
			queryKey: ["walletHistory", params],
			queryFn: () => getWalletHistory(params),
			enabled: !!params.address,
		});

	const useWalletNFTsQuery = (params: DataGetWalletNfTsParams) =>
		useQuery({
			queryKey: ["walletNFTs", params],
			queryFn: () => getWalletNFTs(params),
			enabled: !!params.address,
		});

	return {
		getChartAnalysis,
		executeCustomSupabaseQuery,
		getPortfolioFetchStatus,
		getTokensMetadata,
		getUserDebankComplexProtocolList,
		getUserDebankTokenList,
		getUserWalletPortfolio,
		getWalletBalance,
		getWalletNFTs,
		getWalletHistory,
		getAllDebankUserTokens,
		getUserDebankTotalBalance,
		useDebankUserTotalBalanceQuery,
		// React Query Hooks
		debankUserTokensQuery,
		useWalletHistoryQuery,
		useWalletNFTsQuery,
		useDebankUserTokensQuery,
		useChartAnalysisQuery,
		usePortfolioFetchStatusQuery,
		useTokensMetadataQuery,
		useUserDebankComplexProtocolListQuery,
		useUserDebankTokenListQuery,
		useUserWalletPortfolioQuery,
		walletBalanceQuery,
		walletBalanceChainIdQuery,
		getBitcoinBalance,
		getBitcoinTransactions,
		getDogecoinBalance,
		getDogecoinTransactions,
		getLitecoinBalance,
		getLitecoinTransactions,
		getTronBalance,
		getTronTransactions,
		getXrpBalance,
		getXrpTransactions,
		useBitcoinBalanceQuery,
		useBitcoinTransactionsQuery,
		useDogecoinBalanceQuery,
		useDogecoinTransactionsQuery,
		useLitecoinBalanceQuery,
		useLitecoinTransactionsQuery,
		useTronBalanceQuery,
		useTronTransactionsQuery,
		useXrpBalanceQuery,
		useXrpTransactionsQuery,
	};
};
