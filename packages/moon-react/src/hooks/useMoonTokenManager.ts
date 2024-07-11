import { useState, useEffect, useMemo } from "react";
import { useCoinGeckoPrices, useTokenList } from "@/utils/react-coinghecko";
import { useMoonSDK } from "@/index";
import { useTokenBalances } from "@/hooks/useTokenBalances";
import { ethers } from "ethers";
import { useFetchWalletBalances } from "@/hooks/useWalletGasBalances";
import { UserToken } from "@/components/public/TokenManager/types";

export const useMoonTokenManager = () => {
  const { wallet, chain, session, dbAdapter } = useMoonSDK();
  const [tokens, setTokens] = useState<UserToken[]>([]);

  const tokenBalanceQueries = useTokenBalances(wallet, tokens);
  const gasBalanceQueries = useFetchWalletBalances(
    [wallet || ""],
    chain?.chain_id?.toString() || "1"
  );

  let gasToken = useMemo(() => {
    if (!chain?.native_currency) return null;
    return {
      isGasToken: true,
      icon: "https://etherscan.io/images/ethereum-icon.png",
      name: (chain?.native_currency as any).name || "ETH",
      symbol: (chain?.native_currency as any).symbol,
      coinGeckoId: (chain?.native_currency as any).coinGeckoId,
      decimals: (chain?.native_currency as any).decimals,
      address: "0x",
      chainId: chain?.chain_id || 1,
      balance: gasBalanceQueries[0]?.data
        ? ethers?.utils.formatUnits(
            gasBalanceQueries[0]?.data || "0",
            (chain?.native_currency as any).decimals
          )
        : "0",
    } as UserToken;
  }, [chain, gasBalanceQueries, tokens]);

  const { data: tokenPrices } = useCoinGeckoPrices(
    tokens.map((token) => token.coinGeckoId),
    {},
    dbAdapter
  );

  const { data: gasTokenPrice } = useCoinGeckoPrices(
    ["ethereum"],
    {},
    dbAdapter
  );
  // console.log("gasTokenPrice", gasTokenPrice, gasToken);

  const { data: tokenList } = useTokenList();

  useEffect(() => {
    (async () => {
      const fetchedTokens = await dbAdapter.getTokens();
      setTokens(fetchedTokens);
    })();
  }, [dbAdapter, session?.user.id]);

  const addToken = async (newToken: UserToken) => {
    await dbAdapter.addToken(newToken);
    setTokens([...tokens, newToken]);
  };

  const removeToken = async (address: string) => {
    await dbAdapter.removeToken(address);
    setTokens(tokens.filter((token) => token.address !== address));
  };

  const tokensWithBalance = tokens
    .map((token, i) => {
      return {
        ...token,
        balance: tokenBalanceQueries[i]?.data
          ? ethers?.utils.formatUnits(
              tokenBalanceQueries[i]?.data || "0",
              token.decimals
            )
          : "0",
        price: tokenPrices?.[token.coinGeckoId] || 0,
      };
    })
    .sort((a, b) => b.chainId - a.chainId);

  gasToken = {
    ...gasToken,
    price: gasTokenPrice?.ethereum || 0,
  } as UserToken;

  const tokensWithGasToken: UserToken[] = [gasToken, ...tokensWithBalance];

  return {
    tokens: tokensWithBalance,
    addToken,
    removeToken,
    tokenList,
    chain,
    gasBalanceQueries,
    tokenBalanceQueries,
    gasToken,
    tokensWithGasToken,
  };
};
