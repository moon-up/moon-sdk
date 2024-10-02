import { useCallback } from "react";
import { useMoonSDK } from "./useMoonSDK";
import { useMoonTransaction } from "./useMoonTransaction";
import {
  Data,
  WalletBalanceAPIResponse,
  GetWalletBalanceParams,
  GetWalletHistoryParams,
  WalletHistoryAPIResponse,
} from "@moonup/moon-api";
import { useQuery } from "@tanstack/react-query";

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
  const context = useMoonSDK();
  const { handleTransaction } = useMoonTransaction();
  const { moon, wallet, chain } = context;

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
      let hexChain = chainIdToHexMapping[chain.chain_id].hexId;
      const response = await dataSDK.getWalletHistory({
        address: wallet || "",
        chain: hexChain,
      });
      return response as WalletHistoryAPIResponse;
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
      let hexChain = chainIdToHexMapping[chain.chain_id].hexId;
      const response = await dataSDK.getWalletBalance({
        address: wallet || "",
        chain: hexChain,
      });
      return response as WalletBalanceAPIResponse;
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
      payload: GetWalletBalanceParams
    ): Promise<WalletBalanceAPIResponse> => {
      return handleTransaction("getWalletBalance", async () => {
        const dataSDK = getDataSDK();
        const response = await dataSDK.getWalletBalance(payload);
        return response;
      });
    },
    [moon]
  );

  const getWalletHistory = useCallback(
    async (
      payload: GetWalletHistoryParams
    ): Promise<WalletHistoryAPIResponse> => {
      return handleTransaction("getWalletHistory", async () => {
        const dataSDK = getDataSDK();
        const response = await dataSDK.getWalletHistory(payload);
        return response;
      });
    },
    [moon]
  );

  return {
    getWalletBalance,
    getWalletHistory,
    walletHistoryQuery,
    walletBalanceQuery,
  };
};
