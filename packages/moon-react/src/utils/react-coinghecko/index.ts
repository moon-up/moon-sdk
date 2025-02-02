import { DBAdapterBase } from "@/components";
import {
	UseQueryOptions,
	UseQueryResult,
	useQuery,
} from "@tanstack/react-query";
import { fetchNullable } from "./fetchNullable";
let priceCallcount = 0;
let infoCallcount = 0;
/**
 * Constructs the URL to retrieve prices from CoinGecko.
 * @param tokens
 * @returns
 */
export const buildCoinGeckoPricesURL = (tokens: readonly string[]): string =>
	`https://api.coingecko.com/api/v3/simple/price?ids=${tokens.join(
		"%2C",
	)}&vs_currencies=usd`;

export const buildCoinGeckoInfoURL = (tokenId: string): string => {
	return `https://api.coingecko.com/api/v3/coins/${tokenId}`;
};

export const buildCoinGeckoTokenListURL = (): string => {
	return `https://api.coingecko.com/api/v3/coins/list`;
};

const createEmptyResult = <T extends string>(
	tokens: readonly T[],
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

export type CG_TokenInfo = {
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

export type CG_TokenListItem = {
	id: string;
	symbol: string;
	name: string;
};

const tryGetAllPricesFromCache = async (
	tokens: readonly string[],
	cache: DBAdapterBase,
): Promise<CoinGeckoPrices<string> | null> => {
	const prices = await Promise.all(
		tokens.map(async (token) => {
			try {
				const price = await cache.getTokenPrice(token);
				//parse the updated at time and check if it is within the last hour
				const updateTime = new Date(price.updated_at).getTime();
				const currentTime = new Date().getTime();
				if (currentTime - updateTime > 1000 * 60 * 60) {
					return { token, price: null };
				}
				return { token, price: price.price };
			} catch (e) {
				console.log("tryGetAllPricesFromCache error", e);
				return { token, price: null };
			}
		}),
	);
	console.log("tryGetAllPricesFromCache prices ", prices);
	if (!prices.some((p) => p.price === null)) {
		const ret = {} as CoinGeckoPrices<string>;
		prices.forEach((p) => {
			ret[p.token] = p.price;
		});
		return ret;
	}
	console.log("tryGetAllPricesFromCache returning null as some are empty ");
	return null;
};

export const makeCoinGeckoPricesQuery = <T extends string>(
	tokens: readonly T[],
	cache?: DBAdapterBase,
): UseQueryOptions<
	CoinGeckoPrices<T>,
	unknown,
	CoinGeckoPrices<T>,
	string[]
> => {
	return {
		staleTime: 1000 * 60 * 20,
		retry: true,
		retryDelay: 30000,
		queryKey: ["coinGeckoPrices", ...tokens],
		queryFn: async ({ signal }) => {
			if (tokens.length === 0) {
				return createEmptyResult(tokens);
			}
			console.log("coinGeckoPrices cache", cache);
			if (cache) {
				const cachedTokenPrices = await tryGetAllPricesFromCache(tokens, cache);
				console.log(
					"makeCoinGeckoPricesQuery cachedTokenPrices",
					cachedTokenPrices,
				);
				if (cachedTokenPrices) {
					return cachedTokenPrices;
				}
			}

			const coingeckoPricesURL = buildCoinGeckoPricesURL(tokens);
			const rawData = await fetchNullable<{
				[C in T]?: {
					usd: number;
				};
			}>(coingeckoPricesURL, signal);
			priceCallcount++;
			console.log("priceCallcount", priceCallcount);

			if (!rawData) {
				return createEmptyResult(tokens);
			}

			const ret = {} as CoinGeckoPrices<T>;
			tokens.forEach(async (token) => {
				const priceInfo = rawData[token];
				ret[token] = priceInfo ? priceInfo.usd : null;
				if (cache) await cache.saveTokenPrice(token, ret[token] || 0);
			});
			console.log("makeCoinGeckoPricesQuery cg ret", ret);

			return ret;
		},
	};
};

export const makeTokenInfoQuery = (
	tokenId: string,
): UseQueryOptions<CG_TokenInfo | null, unknown, CG_TokenInfo, string[]> => {
	return {
		queryKey: ["tokenInfo", tokenId],
		queryFn: async ({ signal }) => {
			if (!tokenId || tokenId === "") {
				return null;
			}
			const url = buildCoinGeckoInfoURL(tokenId);
			const rawData = await fetchNullable<CG_TokenInfo>(url, signal);
			infoCallcount++;
			console.log("infoCallcount", infoCallcount);
			return rawData;
		},
		staleTime: 1000 * 60 * 30,
	};
};

export const makeTokenListQuery = (): UseQueryOptions<
	CG_TokenListItem[] | null,
	unknown,
	CG_TokenListItem[],
	string[]
> => {
	return {
		queryKey: ["tokenList"],
		queryFn: async ({ signal }) => {
			const url = buildCoinGeckoTokenListURL();
			const rawData = await fetchNullable<CG_TokenListItem[]>(url, signal);
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
	> = {},
	cache?: DBAdapterBase,
): UseQueryResult<CoinGeckoPrices<T>, unknown> => {
	return useQuery({ ...options, ...makeCoinGeckoPricesQuery(tokens, cache) });
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
