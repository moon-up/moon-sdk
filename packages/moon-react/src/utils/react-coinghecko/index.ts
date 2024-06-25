// import type { UseQueryOptions, UseQueryResult } from "react-query";

import { fetchNullable } from "./fetchNullable";
import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from "@tanstack/react-query";
var priceCallcount = 0;
var infoCallcount = 0;
/**
 * Constructs the URL to retrieve prices from CoinGecko.
 * @param tokens
 * @returns
 */
export const buildCoinGeckoPricesURL = (tokens: readonly string[]): string =>
  `https://api.coingecko.com/api/v3/simple/price?ids=${tokens.join(
    "%2C"
  )}&vs_currencies=usd`;

export const buildCoinGeckoInfoURL = (tokenId: string): string => {
  return `https://api.coingecko.com/api/v3/coins/${tokenId}`;
};

export const buildCoinGeckoTokenListURL = (): string => {
  return `https://api.coingecko.com/api/v3/coins/list`;
};

const createEmptyResult = <T extends string>(
  tokens: readonly T[]
): CoinGeckoPrices<T> => {
  const ret = {} as CoinGeckoPrices<T>;
  tokens.forEach((token) => {
    ret[token] = null;
  });
  return ret;
};

/**
 * Prices of each token.
 */
export type CoinGeckoPrices<T extends string> = {
  [C in T]: number | null;
};

export type TokenInfo = {
  id: string;
  name: string;
  symbol: string;
  market_data: {
    current_price: {
      usd: number;
    };
  };
  description: {
    en: string;
  };
  image: {
    small: string;
    large: string;
  };
  platforms: {
    [key: string]: string;
  };
};

export type TokenListItem = {
  id: string;
  symbol: string;
  name: string;
};

export const makeCoinGeckoPricesQuery = <T extends string>(
  tokens: readonly T[]
): UseQueryOptions<
  CoinGeckoPrices<T>,
  unknown,
  CoinGeckoPrices<T>,
  string[]
> => {
  return {
    staleTime: 1000 * 60 * 30,
    queryKey: ["coinGeckoPrices", ...tokens],
    queryFn: async ({ signal }) => {
      if (tokens.length === 0) {
        return createEmptyResult(tokens);
      }
      const coingeckoPricesURL = buildCoinGeckoPricesURL(tokens);
      const rawData = await fetchNullable<
        {
          [C in T]?: {
            usd: number;
          };
        }
      >(coingeckoPricesURL, signal);
      priceCallcount++;
      console.log("priceCallcount", priceCallcount);

      if (!rawData) {
        return createEmptyResult(tokens);
      }

      const ret = {} as CoinGeckoPrices<T>;
      tokens.forEach((token) => {
        const priceInfo = rawData[token];
        ret[token] = priceInfo ? priceInfo.usd : null;
      });
      return ret;
    },
  };
};

export const makeTokenInfoQuery = (
  tokenId: string
): UseQueryOptions<TokenInfo | null, unknown, TokenInfo, string[]> => {
  return {
    queryKey: ["tokenInfo", tokenId],
    queryFn: async ({ signal }) => {
      if (!tokenId || tokenId === "") {
        return null;
      }
      const url = buildCoinGeckoInfoURL(tokenId);
      const rawData = await fetchNullable<TokenInfo>(url, signal);
      infoCallcount++;
      console.log("infoCallcount", infoCallcount);
      return rawData;
    },
    staleTime: 1000 * 60 * 30,
  };
};

export const makeTokenListQuery = (): UseQueryOptions<
  TokenListItem[] | null,
  unknown,
  TokenListItem[],
  string[]
> => {
  return {
    queryKey: ["tokenList"],
    queryFn: async ({ signal }) => {
      const url = buildCoinGeckoTokenListURL();
      const rawData = await fetchNullable<TokenListItem[]>(url, signal);
      return rawData;
    },
    staleTime: 1000 * 60 * 30,
  };
};

/**
 * Fetches prices of tokens from CoinGecko.
 * @returns The CoinGecko prices.
 */
export const useCoinGeckoPrices = <T extends string>(
  tokens: readonly T[],
  options: Omit<
    UseQueryOptions<CoinGeckoPrices<T>, unknown, CoinGeckoPrices<T>, string[]>,
    "queryKey" | "queryFn"
  > = {}
): UseQueryResult<CoinGeckoPrices<T>, unknown> => {
  return useQuery({ ...options, ...makeCoinGeckoPricesQuery(tokens) });
};

/**
 * Fetches the token information from CoinGecko.
 * @param tokenId The token to fetch.
 * @returns The token information.
 */

export const useTokenInfo = (tokenId: string) => {
  return useQuery(makeTokenInfoQuery(tokenId));
};

export const useTokenList = () => {
  return useQuery(makeTokenListQuery());
};
