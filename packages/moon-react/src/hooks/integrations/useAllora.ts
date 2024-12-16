import { useMoonAuth } from "@/context";
import { useMoonTransaction } from "@/hooks";
import type {
	Allora,
	GetPriceInferenceParams,
	AlloraInferenceResponse,
	ImpliedFuturePriceParams,
	ImpliedFuturePriceData,
	LogReturnToPercentageParams,
	LogReturnToPercentageData,
} from "@moonup/moon-api";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

export const useAllora = () => {
	const { moon } = useMoonAuth();
	const { handleTransaction } = useMoonTransaction();

	const getAlloraSDK = (): Allora => {
		const alloraSDK = moon?.getAlloraSDK();
		if (!alloraSDK) throw new Error("Allora SDK not initialized");
		return alloraSDK;
	};

	// Callbacks

	const getPriceInference = useCallback(
		async (
			query: GetPriceInferenceParams,
		): Promise<AlloraInferenceResponse> => {
			return handleTransaction("getPriceInference", async () => {
				const alloraSDK = getAlloraSDK();
				const response = await alloraSDK.getPriceInference(query);
				return response.data;
			});
		},
		[moon],
	);

	const getImpliedFuturePrice = useCallback(
		async (
			query: ImpliedFuturePriceParams,
		): Promise<ImpliedFuturePriceData> => {
			return handleTransaction("getImpliedFuturePrice", async () => {
				const alloraSDK = getAlloraSDK();
				const response = await alloraSDK.impliedFuturePrice(query);
				return response.data;
			});
		},
		[moon],
	);

	const getLogReturnToPercentage = useCallback(
		async (
			query: LogReturnToPercentageParams,
		): Promise<LogReturnToPercentageData> => {
			return handleTransaction("getLogReturnToPercentage", async () => {
				const alloraSDK = getAlloraSDK();
				const response = await alloraSDK.logReturnToPercentage(query);
				return response.data;
			});
		},
		[moon],
	);

	// React Query Hooks

	const usePriceInferenceQuery = (query: GetPriceInferenceParams) =>
		useQuery({
			queryKey: ["priceInference", query],
			queryFn: () => getPriceInference(query),
		});

	const useImpliedFuturePriceQuery = (query: ImpliedFuturePriceParams) =>
		useQuery({
			queryKey: ["impliedFuturePrice", query],
			queryFn: () => getImpliedFuturePrice(query),
		});

	const useLogReturnToPercentageQuery = (query: LogReturnToPercentageParams) =>
		useQuery({
			queryKey: ["logReturnToPercentage", query],
			queryFn: () => getLogReturnToPercentage(query),
		});

	return {
		// Callbacks
		getPriceInference,
		getImpliedFuturePrice,
		getLogReturnToPercentage,

		// React Query Hooks
		usePriceInferenceQuery,
		useImpliedFuturePriceQuery,
		useLogReturnToPercentageQuery,
	};
};
