import { useState, useMemo, useCallback } from "react";
import { useCoinGeckoPrices, useTokenList } from "@/utils/react-coinghecko";
import { useMoonSDK } from "@/index";
import { useTokenBalances } from "@/hooks/useTokenBalances";
import { ethers } from "ethers";
import { useFetchWalletBalances } from "@/hooks/useWalletGasBalances";
import { UserToken } from "@/components/public/TokenManager/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useMoonTokenManager = (addresses?: string[]) => {
  const { wallet, chain, session, dbAdapter } = useMoonSDK();

  const [tokens, setTokens] = useState<UserToken[]>([]);

  const walletAddresses = addresses ? addresses : wallet ? [wallet] : [];
  const chainId = chain?.chain_id?.toString() || "1";
  const tokenIds = useMemo(() => tokens.map((token) => token.coinGeckoId), [
    tokens,
  ]);
  const { data: tokenPrices } = useCoinGeckoPrices(tokenIds, {}, dbAdapter);

  const { data: tokenList } = useTokenList();
  const queryClient = useQueryClient();

  const tokenBalanceQueries = useTokenBalances(walletAddresses, tokens);
  //filter queries that have data
  let tokenBalanceQueriesFiltered = tokenBalanceQueries.filter(
    (query) => (query as any).data !== undefined
  );

  const tokensWithBalance = useMemo(
    () =>
      tokenBalanceQueriesFiltered.map((query) => ({
        ...(query as any).data,
        price: tokenPrices?.[(query as any).data.coinGeckoId] || 0,
      })),
    [tokens, tokenBalanceQueries, tokenPrices]
  );
  //

  const gasBalanceQueries = useFetchWalletBalances(walletAddresses, chainId);
  const { data: gasTokenPrice } = useCoinGeckoPrices(
    ["ethereum"],
    {},
    dbAdapter
  );

  const gasTokens = useMemo(() => {
    if (!chain?.native_currency) return [];
    return walletAddresses.map((wallet, wIndex) => {
      const {
        name,
        symbol,
        coinGeckoId,
        decimals,
      } = chain.native_currency as any;
      return {
        type: "native",
        isGasToken: true,
        icon: "https://etherscan.io/images/ethereum-icon.png",
        name: name || "ETH",
        wallet,
        symbol,
        coinGeckoId,
        decimals,
        address: "0x",
        chainId: chain.chain_id || 1,
        price: gasTokenPrice?.ethereum || 0,
        balance: gasBalanceQueries[wIndex]?.data
          ? ethers.utils.formatUnits(
              gasBalanceQueries[wIndex].data || "0",
              decimals
            )
          : "0",
      } as UserToken;
    });
  }, [chain, gasBalanceQueries]);

  useQuery({
    queryKey: ["userSavedTokens", session?.user.id],
    queryFn: async () => {
      if (!session?.user?.id) throw new Error("No user found");
      let userTokens = await dbAdapter.getTokens();
      setTokens(userTokens);
      return userTokens;
    },
    retry: true,
    retryDelay: 5000,
  });

  // useEffect(() => {
  //   if (session?.user.id) dbAdapter.getTokens().then(setTokens);
  // }, [session?.user.id]);

  const addToken = useCallback(
    async (newToken: UserToken) => {
      await dbAdapter.addToken(newToken);
      await queryClient.invalidateQueries({
        queryKey: ["userSavedTokens", session?.user.id],
      });
    },
    [dbAdapter]
  );

  const updateToken = useCallback(
    async (newToken: UserToken) => {
      await dbAdapter.updateToken(newToken);
      await queryClient.invalidateQueries({
        queryKey: ["userSavedTokens", session?.user.id],
      });
      await queryClient.invalidateQueries({
        queryKey: [
          "erc20TokenBalances",
          wallet,
          newToken.address,
          newToken.chainId,
        ],
      });
    },
    [dbAdapter]
  );

  const removeToken = useCallback(
    async (address: string) => {
      await dbAdapter.removeToken(address);
      setTokens((prevTokens) =>
        prevTokens.filter((token) => token.address !== address)
      );
    },
    [dbAdapter]
  );

  const tokensWithGasToken = useMemo(
    () => [...gasTokens, ...tokensWithBalance],
    [gasTokens, gasTokenPrice, tokensWithBalance]
  );

  return {
    tokens: tokensWithBalance.filter((t) => t.hasOwnProperty("name")),
    addToken,
    removeToken,
    updateToken,
    tokenList,
    chain,
    gasBalanceQueries,
    tokenBalanceQueries,
    gasTokens,
    tokensWithGasToken,
  };
};
