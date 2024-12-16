import { useMoonAuth } from "@/context";
import { useMoonTransaction } from "@/hooks";
import type {
	Cookiefun,
	CookieFunGetKolCommunityParams,
	CommunityMetricsAPIResponse,
	CookieFunGetKolListParams,
	KOLListAPIResponse,
	CookieFunGetKolNetworkParams,
	KOLNetworkAPIResponse,
	CookieFunGetPredictiveMetricsParams,
	PredictiveMetricsAPIResponse,
	CookieFunGetTokenAnalyticsParams,
	TokenAnalyticsAPIResponse,
	CookieFunGetTrendingNarrativesParams,
	NarrativeTrendsAPIResponse,
	CookieFunGetTrendingTokensParams,
	TrendingTokensAPIResponse,
	CookieFunGetTrendingTweetsParams,
	TrendingTweetsAPIResponse,
} from "@moonup/moon-api";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

export const useCookieFun = () => {
	const { moon } = useMoonAuth();
	const { handleTransaction } = useMoonTransaction();

	const getCookieFunSDK = (): Cookiefun => {
		const cookieFunSDK = moon?.getCookiefunSDK();
		if (!cookieFunSDK) throw new Error("CookieFun SDK not initialized");
		return cookieFunSDK;
	};

	// Callbacks

	const getKolCommunity = useCallback(
		async (
			params: CookieFunGetKolCommunityParams,
		): Promise<CommunityMetricsAPIResponse> => {
			return handleTransaction("getKolCommunity", async () => {
				const cookieFunSDK = getCookieFunSDK();
				const response = await cookieFunSDK.cookieFunGetKolCommunity(params);
				return response.data;
			});
		},
		[moon],
	);

	const getKolList = useCallback(
		async (params: CookieFunGetKolListParams): Promise<KOLListAPIResponse> => {
			return handleTransaction("getKolList", async () => {
				const cookieFunSDK = getCookieFunSDK();
				const response = await cookieFunSDK.cookieFunGetKolList(params);
				return response.data;
			});
		},
		[moon],
	);

	const getKolNetwork = useCallback(
		async (
			params: CookieFunGetKolNetworkParams,
		): Promise<KOLNetworkAPIResponse> => {
			return handleTransaction("getKolNetwork", async () => {
				const cookieFunSDK = getCookieFunSDK();
				const response = await cookieFunSDK.cookieFunGetKolNetwork(params);
				return response.data;
			});
		},
		[moon],
	);

	const getPredictiveMetrics = useCallback(
		async (
			params: CookieFunGetPredictiveMetricsParams,
		): Promise<PredictiveMetricsAPIResponse> => {
			return handleTransaction("getPredictiveMetrics", async () => {
				const cookieFunSDK = getCookieFunSDK();
				const response =
					await cookieFunSDK.cookieFunGetPredictiveMetrics(params);
				return response.data;
			});
		},
		[moon],
	);

	const getTokenAnalytics = useCallback(
		async (
			params: CookieFunGetTokenAnalyticsParams,
		): Promise<TokenAnalyticsAPIResponse> => {
			return handleTransaction("getTokenAnalytics", async () => {
				const cookieFunSDK = getCookieFunSDK();
				const response = await cookieFunSDK.cookieFunGetTokenAnalytics(params);
				return response.data;
			});
		},
		[moon],
	);

	const getTrendingNarratives = useCallback(
		async (
			params: CookieFunGetTrendingNarrativesParams,
		): Promise<NarrativeTrendsAPIResponse> => {
			return handleTransaction("getTrendingNarratives", async () => {
				const cookieFunSDK = getCookieFunSDK();
				const response =
					await cookieFunSDK.cookieFunGetTrendingNarratives(params);
				return response.data;
			});
		},
		[moon],
	);

	const getTrendingTokens = useCallback(
		async (
			params: CookieFunGetTrendingTokensParams,
		): Promise<TrendingTokensAPIResponse> => {
			return handleTransaction("getTrendingTokens", async () => {
				const cookieFunSDK = getCookieFunSDK();
				const response = await cookieFunSDK.cookieFunGetTrendingTokens(params);
				return response.data;
			});
		},
		[moon],
	);

	const getTrendingTweets = useCallback(
		async (
			params: CookieFunGetTrendingTweetsParams,
		): Promise<TrendingTweetsAPIResponse> => {
			return handleTransaction("getTrendingTweets", async () => {
				const cookieFunSDK = getCookieFunSDK();
				const response = await cookieFunSDK.cookieFunGetTrendingTweets(params);
				return response.data;
			});
		},
		[moon],
	);

	// React Query Hooks

	const useKolCommunityQuery = (params: CookieFunGetKolCommunityParams) =>
		useQuery({
			queryKey: ["kolCommunity", params],
			queryFn: () => getKolCommunity(params),
		});

	const useKolListQuery = (params: CookieFunGetKolListParams) =>
		useQuery({
			queryKey: ["kolList", params],
			queryFn: () => getKolList(params),
		});

	const useKolNetworkQuery = (params: CookieFunGetKolNetworkParams) =>
		useQuery({
			queryKey: ["kolNetwork", params],
			queryFn: () => getKolNetwork(params),
		});

	const usePredictiveMetricsQuery = (
		params: CookieFunGetPredictiveMetricsParams,
	) =>
		useQuery({
			queryKey: ["predictiveMetrics", params],
			queryFn: () => getPredictiveMetrics(params),
		});

	const useTokenAnalyticsQuery = (params: CookieFunGetTokenAnalyticsParams) =>
		useQuery({
			queryKey: ["tokenAnalytics", params],
			queryFn: () => getTokenAnalytics(params),
		});

	const useTrendingNarrativesQuery = (
		params: CookieFunGetTrendingNarrativesParams,
	) =>
		useQuery({
			queryKey: ["trendingNarratives", params],
			queryFn: () => getTrendingNarratives(params),
		});

	const useTrendingTokensQuery = (params: CookieFunGetTrendingTokensParams) =>
		useQuery({
			queryKey: ["trendingTokens", params],
			queryFn: () => getTrendingTokens(params),
		});

	const useTrendingTweetsQuery = (params: CookieFunGetTrendingTweetsParams) =>
		useQuery({
			queryKey: ["trendingTweets", params],
			queryFn: () => getTrendingTweets(params),
		});

	return {
		// Callbacks
		getKolCommunity,
		getKolList,
		getKolNetwork,
		getPredictiveMetrics,
		getTokenAnalytics,
		getTrendingNarratives,
		getTrendingTokens,
		getTrendingTweets,

		// React Query Hooks
		useKolCommunityQuery,
		useKolListQuery,
		useKolNetworkQuery,
		usePredictiveMetricsQuery,
		useTokenAnalyticsQuery,
		useTrendingNarrativesQuery,
		useTrendingTokensQuery,
		useTrendingTweetsQuery,
	};
};
