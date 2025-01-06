import { useMoonAuth } from "@/context";
import { useMoonTransaction } from "@/hooks";
import type {
	FinancialDatasets,
	FinancialDatasetsGetAllFinancialsParams,
	FinancialDatasetsGetBalanceSheetsParams,
	FinancialDatasetsGetCashFlowStatementsParams,
	FinancialDatasetsGetIncomeStatementsParams,
	FinancialDatasetsGetInsiderTransactionsParams,
	FinancialDatasetsGetOptionsChainParams,
	FinancialDatasetsGetPricesParams,
	FinancialDatasetsGetSegmentedRevenuesParams,
	SearchRequest,
	FinancialDatasetsSearchFinancialsByLineItemsPayload,
} from "@moonup/moon-api";

import { useCallback } from "react";

export const useFinancialDatasets = () => {
	const { handleTransaction } = useMoonTransaction();
	const { moon } = useMoonAuth();

	const getFinancialDatasetsSDK = (): FinancialDatasets => {
		const financialDatasetsSDK = moon?.getFinancialDatasetsSDK();
		if (!financialDatasetsSDK)
			throw new Error("Moon Financial Datasets SDK not initialized");
		return financialDatasetsSDK;
	};

	const getAllFinancials = useCallback(
		async (params: FinancialDatasetsGetAllFinancialsParams) => {
			return handleTransaction("getAllFinancials", async () => {
				const financialDatasetsSDK = getFinancialDatasetsSDK();
				const response =
					await financialDatasetsSDK.financialDatasetsGetAllFinancials(params);
				return response.data;
			});
		},
		[moon],
	);

	const getAvailableTickers = useCallback(async () => {
		return handleTransaction("getAvailableTickers", async () => {
			const financialDatasetsSDK = getFinancialDatasetsSDK();
			const response =
				await financialDatasetsSDK.financialDatasetsGetAvailableTickers();
			return response.data;
		});
	}, [moon]);

	const getBalanceSheets = useCallback(
		async (params: FinancialDatasetsGetBalanceSheetsParams) => {
			return handleTransaction("getBalanceSheets", async () => {
				const financialDatasetsSDK = getFinancialDatasetsSDK();
				const response =
					await financialDatasetsSDK.financialDatasetsGetBalanceSheets(params);
				return response.data;
			});
		},
		[moon],
	);

	const getCashFlowStatements = useCallback(
		async (params: FinancialDatasetsGetCashFlowStatementsParams) => {
			return handleTransaction("getCashFlowStatements", async () => {
				const financialDatasetsSDK = getFinancialDatasetsSDK();
				const response =
					await financialDatasetsSDK.financialDatasetsGetCashFlowStatements(
						params,
					);
				return response.data;
			});
		},
		[moon],
	);

	const getCompanyFacts = useCallback(
		async (ticker: string) => {
			return handleTransaction("getCompanyFacts", async () => {
				const financialDatasetsSDK = getFinancialDatasetsSDK();
				const response =
					await financialDatasetsSDK.financialDatasetsGetCompanyFacts(ticker);
				return response.data;
			});
		},
		[moon],
	);

	const getIncomeStatements = useCallback(
		async (params: FinancialDatasetsGetIncomeStatementsParams) => {
			return handleTransaction("getIncomeStatements", async () => {
				const financialDatasetsSDK = getFinancialDatasetsSDK();
				const response =
					await financialDatasetsSDK.financialDatasetsGetIncomeStatements(
						params,
					);
				return response.data;
			});
		},
		[moon],
	);

	const getInsiderTransactions = useCallback(
		async (params: FinancialDatasetsGetInsiderTransactionsParams) => {
			return handleTransaction("getInsiderTransactions", async () => {
				const financialDatasetsSDK = getFinancialDatasetsSDK();
				const response =
					await financialDatasetsSDK.financialDatasetsGetInsiderTransactions(
						params,
					);
				return response.data;
			});
		},
		[moon],
	);

	const getOptionsChain = useCallback(
		async (params: FinancialDatasetsGetOptionsChainParams) => {
			return handleTransaction("getOptionsChain", async () => {
				const financialDatasetsSDK = getFinancialDatasetsSDK();
				const response =
					await financialDatasetsSDK.financialDatasetsGetOptionsChain(params);
				return response.data;
			});
		},
		[moon],
	);

	const getPrices = useCallback(
		async (params: FinancialDatasetsGetPricesParams) => {
			return handleTransaction("getPrices", async () => {
				const financialDatasetsSDK = getFinancialDatasetsSDK();
				const response =
					await financialDatasetsSDK.financialDatasetsGetPrices(params);
				return response.data;
			});
		},
		[moon],
	);

	const getPriceSnapshot = useCallback(
		async (ticker: string) => {
			return handleTransaction("getPriceSnapshot", async () => {
				const financialDatasetsSDK = getFinancialDatasetsSDK();
				const response =
					await financialDatasetsSDK.financialDatasetsGetPriceSnapshot(ticker);
				return response.data;
			});
		},
		[moon],
	);

	const getSegmentedRevenues = useCallback(
		async (params: FinancialDatasetsGetSegmentedRevenuesParams) => {
			return handleTransaction("getSegmentedRevenues", async () => {
				const financialDatasetsSDK = getFinancialDatasetsSDK();
				const response =
					await financialDatasetsSDK.financialDatasetsGetSegmentedRevenues(
						params,
					);
				return response.data;
			});
		},
		[moon],
	);

	const searchFinancials = useCallback(
		async (data: SearchRequest) => {
			return handleTransaction("searchFinancials", async () => {
				const financialDatasetsSDK = getFinancialDatasetsSDK();
				const response =
					await financialDatasetsSDK.financialDatasetsSearchFinancials(data);
				return response.data;
			});
		},
		[moon],
	);

	const searchFinancialsByLineItems = useCallback(
		async (data: FinancialDatasetsSearchFinancialsByLineItemsPayload) => {
			return handleTransaction("searchFinancialsByLineItems", async () => {
				const financialDatasetsSDK = getFinancialDatasetsSDK();
				const response =
					await financialDatasetsSDK.financialDatasetsSearchFinancialsByLineItems(
						data,
					);
				return response.data;
			});
		},
		[moon],
	);

	return {
		getAllFinancials,
		getAvailableTickers,
		getBalanceSheets,
		getCashFlowStatements,
		getCompanyFacts,
		getIncomeStatements,
		getInsiderTransactions,
		getOptionsChain,
		getPrices,
		getPriceSnapshot,
		getSegmentedRevenues,
		searchFinancials,
		searchFinancialsByLineItems,
	};
};
