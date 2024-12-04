import { useChains, useMoonAccount, useMoonTransaction } from "@/hooks";
import type {
	Data,
	DataGetWalletTokenBalancesParams,
	DataGetWalletTransactionHistoryParams,
	WalletBalanceAPIResponse,
	WalletHistoryAPIResponse,
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

	const { moon } = useMoonAuth();

	const { account: wallet } = useMoonAccount();
	const { selectedChain: chain } = useChains();

	const walletHistoryQuery = useQuery({
		queryKey: ["useMoonWalletHistory", chain?.id, wallet],
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
			const response = await dataSDK.dataGetWalletTransactionHistory({
				address: wallet || "",
				chain: hexChain,
			});
			return response.data;
		},
		staleTime: 1000 * 60 * 20,
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

	const walletNFTQuery = useQuery({
		queryKey: ["nfts", wallet, chain?.chain_id],
		queryFn: async () => {
			if (!wallet || !moon) return null;
			const response = await moon.getDataSDK().dataGetWalletNfTs({
				address: wallet,
				chain: chain?.chain_id?.toString() || "1",
			});
			return response.data;
		},
		enabled: !!wallet && !!moon,
		staleTime: 1000 * 60 * 20,
	});

	return {
		getWalletBalance,
		getWalletHistory,
		walletHistoryQuery,
		walletBalanceQuery,
		walletNFTQuery,
		walletBalanceChainIdQuery,
	};
};
