// // generated with @7nohe/openapi-react-query-codegen@2.0.0-beta.3

// import type { Options } from "@hey-api/client-fetch";
// import { dataGetUserWalletPortfolio } from "../requests/services.gen";
// import type {
// 	DataGetUserWalletPortfolioData,
// 	DataGetUserWalletPortfolioError,
// } from "../requests/types.gen";
// import * as Common from "./common";
// import {
// 	useInfiniteQuery,
// 	UseInfiniteQueryOptions,
// } from "@tanstack/react-query";
// export const useDataGetUserWalletPortfolioInfinite = <
// 	TData = InfiniteData<Common.DataGetUserWalletPortfolioDefaultResponse>,
// 	TError = DataGetUserWalletPortfolioError,
// 	TQueryKey extends Array<unknown> = unknown[],
// >(
// 	clientOptions: Options<DataGetUserWalletPortfolioData, true> = {},
// 	queryKey?: TQueryKey,
// 	options?: Omit<
// 		UseInfiniteQueryOptions<TData, TError>,
// 		"queryKey" | "queryFn"
// 	>,
// ) =>
// 	useInfiniteQuery({
// 		queryKey: Common.UseDataGetUserWalletPortfolioKeyFn(
// 			clientOptions,
// 			queryKey,
// 		),
// 		queryFn: ({ pageParam }) =>
// 			dataGetUserWalletPortfolio({
// 				...clientOptions,
// 				query: { ...clientOptions.query, page: pageParam as number },
// 			}).then((response) => response.data as TData) as TData,
// 		initialPageParam: "1",
// 		getNextPageParam: (response) =>
// 			(
// 				response as {
// 					nextPage: number;
// 				}
// 			).nextPage,
// 		...options,
// 	});
