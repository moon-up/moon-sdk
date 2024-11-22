// generated with @7nohe/openapi-react-query-codegen@2.0.0-beta.3

import type { Options } from "@hey-api/client-fetch";
import type { QueryClient } from "@tanstack/react-query";
import {
	aavEv3IncentiveDataProviderGetFullReservesData,
	aavEv3IncentiveDataProviderGetReservesData,
	aavEv3IncentiveDataProviderGetUserReservesData,
	aavev3PoolAddressProviderGetAclAdmin,
	aavev3PoolAddressProviderGetAclManager,
	aavev3PoolAddressProviderGetAddress,
	aavev3PoolAddressProviderGetMarketId,
	aavev3PoolAddressProviderGetPool,
	aavev3PoolAddressProviderGetPoolConfigurator,
	aavev3PoolAddressProviderGetPriceOracle,
	aavev3PoolAddressProviderRegistryGetAddressesProvider,
	aavev3PoolAddressProviderRegistryGetAllAtokens,
	aavev3PoolAddressProviderRegistryGetAtokenTotalSupply,
	aavev3PoolAddressProviderRegistryGetDebtCeiling,
	aavev3PoolGetReserveData,
	aavev3PoolGetUserAccountData,
	aavEv3RewardsGetRewardsByAsset,
	aavEv3RewardsGetRewardsData,
	aavEv3RewardsGetUserRewards,
	aaveV3UiPoolDataProviderEthCurrencyUnit,
	aaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregator,
	aaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregator,
	aaveV3UiPoolDataProviderReservesList,
	aaveV3UiPoolDataProviderUserReservesData,
	aaveV3WalletBalanceOf,
	aaveV3WalletBatchBalanceOf,
	aaveV3WalletUserWalletBalances,
	accountsEthereumGetNativeBalance,
	accountsEthereumGetNonce,
	accountsExportEthreumAccount,
	accountsGetEthreumAccount,
	accountsListEthereumAccounts,
	accountsSuggestGasPrice,
	balanceOf,
	baseUri,
	bitcoinBitcoinGetAccount,
	bitcoinCashBitcoinCashGetAccount,
	bitcoinCashListAccounts,
	bitcoinListAccounts,
	calculateOptimalVoteDistribution,
	calculateOptimalVoteDistribution1,
	calculateOptimalVoteDistribution2,
	chartsGetChartAnalysis,
	componentsGetComponent,
	componentsGetComponentCapabilitiesDescription,
	componentsGetComponents,
	componentsSearchComponents,
	cosmosCosmosGetAccount,
	cosmosCosmosListAccounts,
	dataGetPortfolioFetchStatus,
	dataGetTokensMetadata,
	dataGetUserWalletPortfolio,
	dataGetWalletNfTs,
	dataGetWalletTokenBalances,
	dataGetWalletTransactionHistory,
	dogecoinDogeCoinGetAccountDetails,
	dogeCoinListAccounts,
	domainSeparator,
	erc20GetErc20TokenAllowance,
	erc20GetErc20TokenBalance,
	erc20GetErc20TokenDecimals,
	erc20GetErc20TokenName,
	erc20GetErc20TokenSymbol,
	erc20GetErc20TokenTotalSupply,
	erc4626GetErc4626Allowance,
	erc4626GetErc4626Asset,
	erc4626GetErc4626BalanceOf,
	erc4626GetErc4626ConvertToAssets,
	erc4626GetErc4626ConvertToShares,
	erc4626GetErc4626MaxDeposit,
	erc4626GetErc4626MaxMint,
	erc4626GetErc4626MaxRedeem,
	erc4626GetErc4626MaxWithdraw,
	erc4626GetErc4626PreviewDeposit,
	erc4626GetErc4626PreviewMint,
	erc4626GetErc4626PreviewRedeem,
	erc4626GetErc4626PreviewWithdraw,
	erc4626GetErc4626TotalAssets,
	erc4626GetErc4626TotalSupply,
	erc721GetErc721Approved,
	erc721GetErc721BalanceOf,
	erc721GetErc721IsApprovedForAll,
	erc721GetErc721Name,
	erc721GetErc721OwnerOf,
	erc721GetErc721Symbol,
	erc721GetErc721TokenUri,
	factory,
	factory1,
	financialDatasetsGetAllFinancials,
	financialDatasetsGetAvailableTickers,
	financialDatasetsGetBalanceSheets,
	financialDatasetsGetCashFlowStatements,
	financialDatasetsGetCompanyFacts,
	financialDatasetsGetIncomeStatements,
	financialDatasetsGetInsiderTransactions,
	financialDatasetsGetOptionsChain,
	financialDatasetsGetPrices,
	financialDatasetsGetPriceSnapshot,
	financialDatasetsGetSegmentedRevenues,
	getAllReservesTokens,
	getAmountOut,
	getAmountOut1,
	getAmountsOut,
	getAmountsOut1,
	getApproved,
	getApproved1,
	getApproved2,
	getAssetByAddress,
	getAssets,
	getBalanceAllowance,
	getBalanceOf,
	getBalanceOf1,
	getBalanceOf2,
	getBalanceOfAtNft,
	getBalanceOfNft,
	getBalanceOfNft1,
	getBalanceOfNft2,
	getBalanceOfNftAt,
	getCollection,
	getDelegates,
	getDelegates1,
	getDelegates2,
	getEosAccount,
	getFactory,
	getFactory1,
	getFlow,
	getFusionByAddress,
	getFusions,
	getFusionsByType,
	getGasPrice,
	getInfo,
	getJob,
	getJobResult,
	getLastUserSlope,
	getLastVoted,
	getLastVoted1,
	getLockDetails,
	getLocked,
	getLocked1,
	getLockedEnd,
	getMarket,
	getMarkets,
	getMarketTradeEvents,
	getMessage,
	getName,
	getNft,
	getNotifications,
	getNotifications1,
	getOpenOrders,
	getOrder,
	getOrderBook,
	getOwnerOf,
	getOwnerOf1,
	getOwnerOf2,
	getPastTotalSupply,
	getPastVotes,
	getPastVotes1,
	getPastVotes2,
	getPoolByAddress,
	getPoolByAddress1,
	getPools,
	getPools1,
	getPoolsByType,
	getPoolsByType1,
	getPoolVoteLength,
	getPricesHistory,
	getQuote,
	getReserves,
	getReservesData,
	getRippleAccount,
	getScheduledJobs,
	getSolanaAccount,
	getSupportedChains,
	getSupportedProviders,
	getSymbol,
	getTokenByIndex,
	getTokenOfOwnerByIndex,
	getTokens,
	getTokenUri,
	getTokenUri1,
	getTokenUri2,
	getTools,
	getTopAprFusions,
	getTopAprPools,
	getTopAprPools1,
	getTopPairs,
	getTopTokens,
	getTotalNftsMinted,
	getTotalSupply,
	getTotalSupply1,
	getTotalSupply2,
	getTotalSupplyAt,
	getTotalSupplyAtT,
	getTotalValueLocked,
	getTotalValueLocked1,
	getTotalValueLocked2,
	getTotalWeight,
	getTotalWeight1,
	getTotalWeight2,
	getTrades,
	getUserPointHistory,
	getUserPointHistoryTs,
	getVestedPayout,
	getVestedPayoutAtTime,
	getVestingPayout,
	getVestingPeriod,
	getVotes,
	getVotes1,
	getVotes2,
	getWeights,
	getWeights1,
	getWeights2,
	getWeth,
	getWeth1,
	getWeth2,
	isApprovedForAll,
	isApprovedForAll1,
	isApprovedForAll2,
	isGauge,
	isGauge1,
	isGauge2,
	isPair,
	isWhitelisted,
	isWhitelisted1,
	isWhitelisted2,
	jupiterGetIndexedRouteMap,
	jupiterGetProgramIdToLabel,
	jupiterGetTokens,
	lastVoted,
	lendingPoolGetAddressesProvider,
	lendingPoolGetFlashLoanPremiumTotal,
	lendingPoolGetLendingPoolRevision,
	lendingPoolGetMaxNumberReserves,
	lendingPoolGetMaxStableRateBorrowSizePercent,
	lendingPoolGetReserveData,
	lendingPoolGetReservesList,
	lendingPoolGetUserAccountData,
	lendingPoolIsPaused,
	leveragerGetAddressesProvider,
	leveragerGetDefaultAdminRole,
	leveragerGetLendingPool,
	leveragerGetMinHf,
	leveragerGetRoleAdmin,
	leveragerGetWeth,
	leveragerHasRole,
	leveragerIsPaused,
	leveragerSupportsInterface,
	lifiGetAllPossibleConnections,
	lifiGetChains,
	lifiGetConnections,
	lifiGetQuote,
	lifiGetStatus,
	lifiGetTokenDetails,
	lifiGetTokens,
	listEosAccounts,
	listFlows,
	listJobs,
	listLitecoinAccounts,
	listRippleAccounts,
	listSolanaAccounts,
	listUserDefinedFunctions,
	litecoinGetLitecoinAccount,
	name,
	odosGetContractInfo,
	odosGetCurrentBlock,
	odosGetExecutorAddress,
	odosGetLiquiditySources,
	odosGetRouterAddress,
	odosGetSupportedChains,
	odosGetSupportedTokens,
	onRamperGetQuotesBuy,
	onRamperGetQuotesSell,
	onRamperGetSupportedAssets,
	onRamperGetSupportedCurrencies,
	onRamperGetSupportedDefaultsAll,
	onRamperGetSupportedOnRampsAll,
	onRamperGetSupportedPaymentTypes,
	onRamperGetSupportedPaymentTypesFiat,
	ownerOf,
	pairFor,
	permitTypehash,
	poolVoteLength,
	positions,
	quoteAddLiquidity,
	quoteRemoveLiquidity,
	sortTokens,
	supportsInterface,
	symbol,
	tokenByIndex,
	tokenOfOwnerByIndex,
	tokenUri,
	totalSupply,
	tronGetTronAccount,
	tronListTronAccounts,
	weth9,
	weth91,
} from "../requests/services.gen";
import type {
	AavEv3IncentiveDataProviderGetFullReservesDataData,
	AavEv3IncentiveDataProviderGetReservesDataData,
	AavEv3IncentiveDataProviderGetUserReservesDataData,
	Aavev3PoolAddressProviderGetAclAdminData,
	Aavev3PoolAddressProviderGetAclManagerData,
	Aavev3PoolAddressProviderGetAddressData,
	Aavev3PoolAddressProviderGetMarketIdData,
	Aavev3PoolAddressProviderGetPoolConfiguratorData,
	Aavev3PoolAddressProviderGetPoolData,
	Aavev3PoolAddressProviderGetPriceOracleData,
	Aavev3PoolAddressProviderRegistryGetAddressesProviderData,
	Aavev3PoolAddressProviderRegistryGetAllAtokensData,
	Aavev3PoolAddressProviderRegistryGetAtokenTotalSupplyData,
	Aavev3PoolAddressProviderRegistryGetDebtCeilingData,
	Aavev3PoolGetReserveDataData,
	Aavev3PoolGetUserAccountDataData,
	AavEv3RewardsGetRewardsByAssetData,
	AavEv3RewardsGetRewardsDataData,
	AavEv3RewardsGetUserRewardsData,
	AaveV3UiPoolDataProviderEthCurrencyUnitData,
	AaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorData,
	AaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorData,
	AaveV3UiPoolDataProviderReservesListData,
	AaveV3UiPoolDataProviderUserReservesDataData,
	AaveV3WalletBalanceOfData,
	AaveV3WalletBatchBalanceOfData,
	AaveV3WalletUserWalletBalancesData,
	AccountsEthereumGetNativeBalanceData,
	AccountsEthereumGetNonceData,
	AccountsExportEthreumAccountData,
	AccountsGetEthreumAccountData,
	AccountsListEthereumAccountsData,
	AccountsSuggestGasPriceData,
	BalanceOfData,
	BaseUriData,
	BitcoinBitcoinGetAccountData,
	BitcoinCashBitcoinCashGetAccountData,
	BitcoinCashListAccountsData,
	BitcoinListAccountsData,
	CalculateOptimalVoteDistribution1Data,
	CalculateOptimalVoteDistribution2Data,
	CalculateOptimalVoteDistributionData,
	ChartsGetChartAnalysisData,
	ComponentsGetComponentCapabilitiesDescriptionData,
	ComponentsGetComponentData,
	ComponentsGetComponentsData,
	ComponentsSearchComponentsData,
	CosmosCosmosGetAccountData,
	CosmosCosmosListAccountsData,
	DataGetPortfolioFetchStatusData,
	DataGetTokensMetadataData,
	DataGetUserWalletPortfolioData,
	DataGetWalletNfTsData,
	DataGetWalletTokenBalancesData,
	DataGetWalletTransactionHistoryData,
	DogecoinDogeCoinGetAccountDetailsData,
	DogeCoinListAccountsData,
	DomainSeparatorData,
	Erc20GetErc20TokenAllowanceData,
	Erc20GetErc20TokenBalanceData,
	Erc20GetErc20TokenDecimalsData,
	Erc20GetErc20TokenNameData,
	Erc20GetErc20TokenSymbolData,
	Erc20GetErc20TokenTotalSupplyData,
	Erc4626GetErc4626AllowanceData,
	Erc4626GetErc4626AssetData,
	Erc4626GetErc4626BalanceOfData,
	Erc4626GetErc4626ConvertToAssetsData,
	Erc4626GetErc4626ConvertToSharesData,
	Erc4626GetErc4626MaxDepositData,
	Erc4626GetErc4626MaxMintData,
	Erc4626GetErc4626MaxRedeemData,
	Erc4626GetErc4626MaxWithdrawData,
	Erc4626GetErc4626PreviewDepositData,
	Erc4626GetErc4626PreviewMintData,
	Erc4626GetErc4626PreviewRedeemData,
	Erc4626GetErc4626PreviewWithdrawData,
	Erc4626GetErc4626TotalAssetsData,
	Erc4626GetErc4626TotalSupplyData,
	Erc721GetErc721ApprovedData,
	Erc721GetErc721BalanceOfData,
	Erc721GetErc721IsApprovedForAllData,
	Erc721GetErc721NameData,
	Erc721GetErc721OwnerOfData,
	Erc721GetErc721SymbolData,
	Erc721GetErc721TokenUriData,
	Factory1Data,
	FactoryData,
	FinancialDatasetsGetAllFinancialsData,
	FinancialDatasetsGetAvailableTickersData,
	FinancialDatasetsGetBalanceSheetsData,
	FinancialDatasetsGetCashFlowStatementsData,
	FinancialDatasetsGetCompanyFactsData,
	FinancialDatasetsGetIncomeStatementsData,
	FinancialDatasetsGetInsiderTransactionsData,
	FinancialDatasetsGetOptionsChainData,
	FinancialDatasetsGetPricesData,
	FinancialDatasetsGetPriceSnapshotData,
	FinancialDatasetsGetSegmentedRevenuesData,
	GetAllReservesTokensData,
	GetAmountOut1Data,
	GetAmountOutData,
	GetAmountsOut1Data,
	GetAmountsOutData,
	GetApproved1Data,
	GetApproved2Data,
	GetApprovedData,
	GetAssetByAddressData,
	GetAssetsData,
	GetBalanceAllowanceData,
	GetBalanceOf1Data,
	GetBalanceOf2Data,
	GetBalanceOfAtNftData,
	GetBalanceOfData,
	GetBalanceOfNft1Data,
	GetBalanceOfNft2Data,
	GetBalanceOfNftAtData,
	GetBalanceOfNftData,
	GetCollectionData,
	GetDelegates1Data,
	GetDelegates2Data,
	GetDelegatesData,
	GetEosAccountData,
	GetFactory1Data,
	GetFactoryData,
	GetFlowData,
	GetFusionByAddressData,
	GetFusionsByTypeData,
	GetFusionsData,
	GetGasPriceData,
	GetInfoData,
	GetJobData,
	GetJobResultData,
	GetLastUserSlopeData,
	GetLastVoted1Data,
	GetLastVotedData,
	GetLockDetailsData,
	GetLocked1Data,
	GetLockedData,
	GetLockedEndData,
	GetMarketData,
	GetMarketsData,
	GetMarketTradeEventsData,
	GetNameData,
	GetNftData,
	GetNotifications1Data,
	GetNotificationsData,
	GetOpenOrdersData,
	GetOrderBookData,
	GetOrderData,
	GetOwnerOf1Data,
	GetOwnerOf2Data,
	GetOwnerOfData,
	GetPastTotalSupplyData,
	GetPastVotes1Data,
	GetPastVotes2Data,
	GetPastVotesData,
	GetPoolByAddress1Data,
	GetPoolByAddressData,
	GetPools1Data,
	GetPoolsByType1Data,
	GetPoolsByTypeData,
	GetPoolsData,
	GetPoolVoteLengthData,
	GetPricesHistoryData,
	GetQuoteData,
	GetReservesData,
	GetReservesDataData,
	GetRippleAccountData,
	GetScheduledJobsData,
	GetSolanaAccountData,
	GetSupportedChainsData,
	GetSupportedProvidersData,
	GetSymbolData,
	GetTokenByIndexData,
	GetTokenOfOwnerByIndexData,
	GetTokensData,
	GetTokenUri1Data,
	GetTokenUri2Data,
	GetTokenUriData,
	GetToolsData,
	GetTopAprFusionsData,
	GetTopAprPools1Data,
	GetTopAprPoolsData,
	GetTopPairsData,
	GetTopTokensData,
	GetTotalNftsMintedData,
	GetTotalSupply1Data,
	GetTotalSupply2Data,
	GetTotalSupplyAtData,
	GetTotalSupplyAtTData,
	GetTotalSupplyData,
	GetTotalValueLocked1Data,
	GetTotalValueLocked2Data,
	GetTotalValueLockedData,
	GetTotalWeight1Data,
	GetTotalWeight2Data,
	GetTotalWeightData,
	GetTradesData,
	GetUserPointHistoryData,
	GetUserPointHistoryTsData,
	GetVestedPayoutAtTimeData,
	GetVestedPayoutData,
	GetVestingPayoutData,
	GetVestingPeriodData,
	GetVotes1Data,
	GetVotes2Data,
	GetVotesData,
	GetWeights1Data,
	GetWeights2Data,
	GetWeightsData,
	GetWeth1Data,
	GetWeth2Data,
	GetWethData,
	IsApprovedForAll1Data,
	IsApprovedForAll2Data,
	IsApprovedForAllData,
	IsGauge1Data,
	IsGauge2Data,
	IsGaugeData,
	IsPairData,
	IsWhitelisted1Data,
	IsWhitelisted2Data,
	IsWhitelistedData,
	JupiterGetIndexedRouteMapData,
	JupiterGetProgramIdToLabelData,
	JupiterGetTokensData,
	LastVotedData,
	LendingPoolGetAddressesProviderData,
	LendingPoolGetFlashLoanPremiumTotalData,
	LendingPoolGetLendingPoolRevisionData,
	LendingPoolGetMaxNumberReservesData,
	LendingPoolGetMaxStableRateBorrowSizePercentData,
	LendingPoolGetReserveDataData,
	LendingPoolGetReservesListData,
	LendingPoolGetUserAccountDataData,
	LendingPoolIsPausedData,
	LeveragerGetAddressesProviderData,
	LeveragerGetDefaultAdminRoleData,
	LeveragerGetLendingPoolData,
	LeveragerGetMinHfData,
	LeveragerGetRoleAdminData,
	LeveragerGetWethData,
	LeveragerHasRoleData,
	LeveragerIsPausedData,
	LeveragerSupportsInterfaceData,
	LifiGetAllPossibleConnectionsData,
	LifiGetChainsData,
	LifiGetConnectionsData,
	LifiGetQuoteData,
	LifiGetStatusData,
	LifiGetTokenDetailsData,
	ListEosAccountsData,
	ListFlowsData,
	ListJobsData,
	ListLitecoinAccountsData,
	ListRippleAccountsData,
	ListSolanaAccountsData,
	ListUserDefinedFunctionsData,
	LitecoinGetLitecoinAccountData,
	NameData,
	OdosGetContractInfoData,
	OdosGetCurrentBlockData,
	OdosGetExecutorAddressData,
	OdosGetLiquiditySourcesData,
	OdosGetRouterAddressData,
	OdosGetSupportedChainsData,
	OdosGetSupportedTokensData,
	OnRamperGetQuotesBuyData,
	OnRamperGetQuotesSellData,
	OnRamperGetSupportedAssetsData,
	OnRamperGetSupportedCurrenciesData,
	OnRamperGetSupportedDefaultsAllData,
	OnRamperGetSupportedOnRampsAllData,
	OnRamperGetSupportedPaymentTypesData,
	OnRamperGetSupportedPaymentTypesFiatData,
	OwnerOfData,
	PairForData,
	PermitTypehashData,
	PoolVoteLengthData,
	PositionsData,
	QuoteAddLiquidityData,
	QuoteRemoveLiquidityData,
	SortTokensData,
	SupportsInterfaceData,
	SymbolData,
	TokenByIndexData,
	TokenOfOwnerByIndexData,
	TokenUriData,
	TotalSupplyData,
	TronGetTronAccountData,
	TronListTronAccountsData,
	Weth91Data,
	Weth9Data,
} from "../requests/types.gen";
import * as Common from "./common";
export const prefetchUseAavev3PoolGetReserveData = (
	queryClient: QueryClient,
	clientOptions: Options<Aavev3PoolGetReserveDataData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseAavev3PoolGetReserveDataKeyFn(clientOptions),
		queryFn: () =>
			aavev3PoolGetReserveData({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseAavev3PoolGetUserAccountData = (
	queryClient: QueryClient,
	clientOptions: Options<Aavev3PoolGetUserAccountDataData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseAavev3PoolGetUserAccountDataKeyFn(clientOptions),
		queryFn: () =>
			aavev3PoolGetUserAccountData({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseAavev3PoolAddressProviderGetAclAdmin = (
	queryClient: QueryClient,
	clientOptions: Options<Aavev3PoolAddressProviderGetAclAdminData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey:
			Common.UseAavev3PoolAddressProviderGetAclAdminKeyFn(clientOptions),
		queryFn: () =>
			aavev3PoolAddressProviderGetAclAdmin({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseAavev3PoolAddressProviderGetAclManager = (
	queryClient: QueryClient,
	clientOptions: Options<Aavev3PoolAddressProviderGetAclManagerData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey:
			Common.UseAavev3PoolAddressProviderGetAclManagerKeyFn(clientOptions),
		queryFn: () =>
			aavev3PoolAddressProviderGetAclManager({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseAavev3PoolAddressProviderGetAddress = (
	queryClient: QueryClient,
	clientOptions: Options<Aavev3PoolAddressProviderGetAddressData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseAavev3PoolAddressProviderGetAddressKeyFn(clientOptions),
		queryFn: () =>
			aavev3PoolAddressProviderGetAddress({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseAavev3PoolAddressProviderGetMarketId = (
	queryClient: QueryClient,
	clientOptions: Options<Aavev3PoolAddressProviderGetMarketIdData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey:
			Common.UseAavev3PoolAddressProviderGetMarketIdKeyFn(clientOptions),
		queryFn: () =>
			aavev3PoolAddressProviderGetMarketId({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseAavev3PoolAddressProviderGetPool = (
	queryClient: QueryClient,
	clientOptions: Options<Aavev3PoolAddressProviderGetPoolData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseAavev3PoolAddressProviderGetPoolKeyFn(clientOptions),
		queryFn: () =>
			aavev3PoolAddressProviderGetPool({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseAavev3PoolAddressProviderGetPoolConfigurator = (
	queryClient: QueryClient,
	clientOptions: Options<
		Aavev3PoolAddressProviderGetPoolConfiguratorData,
		true
	>,
) =>
	queryClient.prefetchQuery({
		queryKey:
			Common.UseAavev3PoolAddressProviderGetPoolConfiguratorKeyFn(
				clientOptions,
			),
		queryFn: () =>
			aavev3PoolAddressProviderGetPoolConfigurator({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseAavev3PoolAddressProviderGetPriceOracle = (
	queryClient: QueryClient,
	clientOptions: Options<Aavev3PoolAddressProviderGetPriceOracleData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey:
			Common.UseAavev3PoolAddressProviderGetPriceOracleKeyFn(clientOptions),
		queryFn: () =>
			aavev3PoolAddressProviderGetPriceOracle({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseAavev3PoolAddressProviderRegistryGetAddressesProvider =
	(
		queryClient: QueryClient,
		clientOptions: Options<
			Aavev3PoolAddressProviderRegistryGetAddressesProviderData,
			true
		>,
	) =>
		queryClient.prefetchQuery({
			queryKey:
				Common.UseAavev3PoolAddressProviderRegistryGetAddressesProviderKeyFn(
					clientOptions,
				),
			queryFn: () =>
				aavev3PoolAddressProviderRegistryGetAddressesProvider({
					...clientOptions,
				}).then((response) => response.data),
		});
export const prefetchUseAavev3PoolAddressProviderRegistryGetAtokenTotalSupply =
	(
		queryClient: QueryClient,
		clientOptions: Options<
			Aavev3PoolAddressProviderRegistryGetAtokenTotalSupplyData,
			true
		>,
	) =>
		queryClient.prefetchQuery({
			queryKey:
				Common.UseAavev3PoolAddressProviderRegistryGetAtokenTotalSupplyKeyFn(
					clientOptions,
				),
			queryFn: () =>
				aavev3PoolAddressProviderRegistryGetAtokenTotalSupply({
					...clientOptions,
				}).then((response) => response.data),
		});
export const prefetchUseAavev3PoolAddressProviderRegistryGetAllAtokens = (
	queryClient: QueryClient,
	clientOptions: Options<
		Aavev3PoolAddressProviderRegistryGetAllAtokensData,
		true
	>,
) =>
	queryClient.prefetchQuery({
		queryKey:
			Common.UseAavev3PoolAddressProviderRegistryGetAllAtokensKeyFn(
				clientOptions,
			),
		queryFn: () =>
			aavev3PoolAddressProviderRegistryGetAllAtokens({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseGetAllReservesTokens = (
	queryClient: QueryClient,
	clientOptions: Options<GetAllReservesTokensData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetAllReservesTokensKeyFn(clientOptions),
		queryFn: () =>
			getAllReservesTokens({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseAavev3PoolAddressProviderRegistryGetDebtCeiling = (
	queryClient: QueryClient,
	clientOptions: Options<
		Aavev3PoolAddressProviderRegistryGetDebtCeilingData,
		true
	>,
) =>
	queryClient.prefetchQuery({
		queryKey:
			Common.UseAavev3PoolAddressProviderRegistryGetDebtCeilingKeyFn(
				clientOptions,
			),
		queryFn: () =>
			aavev3PoolAddressProviderRegistryGetDebtCeiling({
				...clientOptions,
			}).then((response) => response.data),
	});
export const prefetchUseAavEv3RewardsGetRewardsByAsset = (
	queryClient: QueryClient,
	clientOptions: Options<AavEv3RewardsGetRewardsByAssetData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseAavEv3RewardsGetRewardsByAssetKeyFn(clientOptions),
		queryFn: () =>
			aavEv3RewardsGetRewardsByAsset({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseAavEv3RewardsGetUserRewards = (
	queryClient: QueryClient,
	clientOptions: Options<AavEv3RewardsGetUserRewardsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseAavEv3RewardsGetUserRewardsKeyFn(clientOptions),
		queryFn: () =>
			aavEv3RewardsGetUserRewards({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseAavEv3RewardsGetRewardsData = (
	queryClient: QueryClient,
	clientOptions: Options<AavEv3RewardsGetRewardsDataData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseAavEv3RewardsGetRewardsDataKeyFn(clientOptions),
		queryFn: () =>
			aavEv3RewardsGetRewardsData({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseAavEv3IncentiveDataProviderGetFullReservesData = (
	queryClient: QueryClient,
	clientOptions: Options<
		AavEv3IncentiveDataProviderGetFullReservesDataData,
		true
	>,
) =>
	queryClient.prefetchQuery({
		queryKey:
			Common.UseAavEv3IncentiveDataProviderGetFullReservesDataKeyFn(
				clientOptions,
			),
		queryFn: () =>
			aavEv3IncentiveDataProviderGetFullReservesData({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseAavEv3IncentiveDataProviderGetReservesData = (
	queryClient: QueryClient,
	clientOptions: Options<AavEv3IncentiveDataProviderGetReservesDataData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey:
			Common.UseAavEv3IncentiveDataProviderGetReservesDataKeyFn(clientOptions),
		queryFn: () =>
			aavEv3IncentiveDataProviderGetReservesData({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseAavEv3IncentiveDataProviderGetUserReservesData = (
	queryClient: QueryClient,
	clientOptions: Options<
		AavEv3IncentiveDataProviderGetUserReservesDataData,
		true
	>,
) =>
	queryClient.prefetchQuery({
		queryKey:
			Common.UseAavEv3IncentiveDataProviderGetUserReservesDataKeyFn(
				clientOptions,
			),
		queryFn: () =>
			aavEv3IncentiveDataProviderGetUserReservesData({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseAaveV3UiPoolDataProviderEthCurrencyUnit = (
	queryClient: QueryClient,
	clientOptions: Options<AaveV3UiPoolDataProviderEthCurrencyUnitData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey:
			Common.UseAaveV3UiPoolDataProviderEthCurrencyUnitKeyFn(clientOptions),
		queryFn: () =>
			aaveV3UiPoolDataProviderEthCurrencyUnit({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseGetReservesData = (
	queryClient: QueryClient,
	clientOptions: Options<GetReservesDataData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetReservesDataKeyFn(clientOptions),
		queryFn: () =>
			getReservesData({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseAaveV3UiPoolDataProviderReservesList = (
	queryClient: QueryClient,
	clientOptions: Options<AaveV3UiPoolDataProviderReservesListData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey:
			Common.UseAaveV3UiPoolDataProviderReservesListKeyFn(clientOptions),
		queryFn: () =>
			aaveV3UiPoolDataProviderReservesList({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseAaveV3UiPoolDataProviderUserReservesData = (
	queryClient: QueryClient,
	clientOptions: Options<AaveV3UiPoolDataProviderUserReservesDataData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey:
			Common.UseAaveV3UiPoolDataProviderUserReservesDataKeyFn(clientOptions),
		queryFn: () =>
			aaveV3UiPoolDataProviderUserReservesData({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseAaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregator =
	(
		queryClient: QueryClient,
		clientOptions: Options<
			AaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorData,
			true
		>,
	) =>
		queryClient.prefetchQuery({
			queryKey:
				Common.UseAaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorKeyFn(
					clientOptions,
				),
			queryFn: () =>
				aaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregator(
					{ ...clientOptions },
				).then((response) => response.data),
		});
export const prefetchUseAaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregator =
	(
		queryClient: QueryClient,
		clientOptions: Options<
			AaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorData,
			true
		>,
	) =>
		queryClient.prefetchQuery({
			queryKey:
				Common.UseAaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorKeyFn(
					clientOptions,
				),
			queryFn: () =>
				aaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregator({
					...clientOptions,
				}).then((response) => response.data),
		});
export const prefetchUseAaveV3WalletBalanceOf = (
	queryClient: QueryClient,
	clientOptions: Options<AaveV3WalletBalanceOfData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseAaveV3WalletBalanceOfKeyFn(clientOptions),
		queryFn: () =>
			aaveV3WalletBalanceOf({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseAaveV3WalletBatchBalanceOf = (
	queryClient: QueryClient,
	clientOptions: Options<AaveV3WalletBatchBalanceOfData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseAaveV3WalletBatchBalanceOfKeyFn(clientOptions),
		queryFn: () =>
			aaveV3WalletBatchBalanceOf({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseAaveV3WalletUserWalletBalances = (
	queryClient: QueryClient,
	clientOptions: Options<AaveV3WalletUserWalletBalancesData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseAaveV3WalletUserWalletBalancesKeyFn(clientOptions),
		queryFn: () =>
			aaveV3WalletUserWalletBalances({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseAccountsListEthereumAccounts = (
	queryClient: QueryClient,
	clientOptions: Options<AccountsListEthereumAccountsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseAccountsListEthereumAccountsKeyFn(clientOptions),
		queryFn: () =>
			accountsListEthereumAccounts({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseAccountsGetEthreumAccount = (
	queryClient: QueryClient,
	clientOptions: Options<AccountsGetEthreumAccountData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseAccountsGetEthreumAccountKeyFn(clientOptions),
		queryFn: () =>
			accountsGetEthreumAccount({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseAccountsEthereumGetNonce = (
	queryClient: QueryClient,
	clientOptions: Options<AccountsEthereumGetNonceData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseAccountsEthereumGetNonceKeyFn(clientOptions),
		queryFn: () =>
			accountsEthereumGetNonce({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseAccountsEthereumGetNativeBalance = (
	queryClient: QueryClient,
	clientOptions: Options<AccountsEthereumGetNativeBalanceData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseAccountsEthereumGetNativeBalanceKeyFn(clientOptions),
		queryFn: () =>
			accountsEthereumGetNativeBalance({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseAccountsSuggestGasPrice = (
	queryClient: QueryClient,
	clientOptions: Options<AccountsSuggestGasPriceData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseAccountsSuggestGasPriceKeyFn(clientOptions),
		queryFn: () =>
			accountsSuggestGasPrice({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseAccountsExportEthreumAccount = (
	queryClient: QueryClient,
	clientOptions: Options<AccountsExportEthreumAccountData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseAccountsExportEthreumAccountKeyFn(clientOptions),
		queryFn: () =>
			accountsExportEthreumAccount({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseBitcoinListAccounts = (
	queryClient: QueryClient,
	clientOptions: Options<BitcoinListAccountsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseBitcoinListAccountsKeyFn(clientOptions),
		queryFn: () =>
			bitcoinListAccounts({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseBitcoinBitcoinGetAccount = (
	queryClient: QueryClient,
	clientOptions: Options<BitcoinBitcoinGetAccountData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseBitcoinBitcoinGetAccountKeyFn(clientOptions),
		queryFn: () =>
			bitcoinBitcoinGetAccount({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseBitcoinCashListAccounts = (
	queryClient: QueryClient,
	clientOptions: Options<BitcoinCashListAccountsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseBitcoinCashListAccountsKeyFn(clientOptions),
		queryFn: () =>
			bitcoinCashListAccounts({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseBitcoinCashBitcoinCashGetAccount = (
	queryClient: QueryClient,
	clientOptions: Options<BitcoinCashBitcoinCashGetAccountData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseBitcoinCashBitcoinCashGetAccountKeyFn(clientOptions),
		queryFn: () =>
			bitcoinCashBitcoinCashGetAccount({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseChartsGetChartAnalysis = (
	queryClient: QueryClient,
	clientOptions: Options<ChartsGetChartAnalysisData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseChartsGetChartAnalysisKeyFn(clientOptions),
		queryFn: () =>
			chartsGetChartAnalysis({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseComponentsGetComponents = (
	queryClient: QueryClient,
	clientOptions: Options<ComponentsGetComponentsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseComponentsGetComponentsKeyFn(clientOptions),
		queryFn: () =>
			componentsGetComponents({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseComponentsGetComponent = (
	queryClient: QueryClient,
	clientOptions: Options<ComponentsGetComponentData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseComponentsGetComponentKeyFn(clientOptions),
		queryFn: () =>
			componentsGetComponent({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseComponentsSearchComponents = (
	queryClient: QueryClient,
	clientOptions: Options<ComponentsSearchComponentsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseComponentsSearchComponentsKeyFn(clientOptions),
		queryFn: () =>
			componentsSearchComponents({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseComponentsGetComponentCapabilitiesDescription = (
	queryClient: QueryClient,
	clientOptions: Options<
		ComponentsGetComponentCapabilitiesDescriptionData,
		true
	>,
) =>
	queryClient.prefetchQuery({
		queryKey:
			Common.UseComponentsGetComponentCapabilitiesDescriptionKeyFn(
				clientOptions,
			),
		queryFn: () =>
			componentsGetComponentCapabilitiesDescription({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseCosmosCosmosListAccounts = (
	queryClient: QueryClient,
	clientOptions: Options<CosmosCosmosListAccountsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseCosmosCosmosListAccountsKeyFn(clientOptions),
		queryFn: () =>
			cosmosCosmosListAccounts({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseCosmosCosmosGetAccount = (
	queryClient: QueryClient,
	clientOptions: Options<CosmosCosmosGetAccountData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseCosmosCosmosGetAccountKeyFn(clientOptions),
		queryFn: () =>
			cosmosCosmosGetAccount({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseDataGetWalletTokenBalances = (
	queryClient: QueryClient,
	clientOptions: Options<DataGetWalletTokenBalancesData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseDataGetWalletTokenBalancesKeyFn(clientOptions),
		queryFn: () =>
			dataGetWalletTokenBalances({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseDataGetWalletTransactionHistory = (
	queryClient: QueryClient,
	clientOptions: Options<DataGetWalletTransactionHistoryData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseDataGetWalletTransactionHistoryKeyFn(clientOptions),
		queryFn: () =>
			dataGetWalletTransactionHistory({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseDataGetTokensMetadata = (
	queryClient: QueryClient,
	clientOptions: Options<DataGetTokensMetadataData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseDataGetTokensMetadataKeyFn(clientOptions),
		queryFn: () =>
			dataGetTokensMetadata({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseDataGetWalletNfTs = (
	queryClient: QueryClient,
	clientOptions: Options<DataGetWalletNfTsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseDataGetWalletNfTsKeyFn(clientOptions),
		queryFn: () =>
			dataGetWalletNfTs({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseDataGetUserWalletPortfolio = (
	queryClient: QueryClient,
	clientOptions: Options<DataGetUserWalletPortfolioData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseDataGetUserWalletPortfolioKeyFn(clientOptions),
		queryFn: () =>
			dataGetUserWalletPortfolio({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseDataGetPortfolioFetchStatus = (
	queryClient: QueryClient,
	clientOptions: Options<DataGetPortfolioFetchStatusData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseDataGetPortfolioFetchStatusKeyFn(clientOptions),
		queryFn: () =>
			dataGetPortfolioFetchStatus({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseDogeCoinListAccounts = (
	queryClient: QueryClient,
	clientOptions: Options<DogeCoinListAccountsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseDogeCoinListAccountsKeyFn(clientOptions),
		queryFn: () =>
			dogeCoinListAccounts({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseDogecoinDogeCoinGetAccountDetails = (
	queryClient: QueryClient,
	clientOptions: Options<DogecoinDogeCoinGetAccountDetailsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseDogecoinDogeCoinGetAccountDetailsKeyFn(clientOptions),
		queryFn: () =>
			dogecoinDogeCoinGetAccountDetails({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseListEosAccounts = (
	queryClient: QueryClient,
	clientOptions: Options<ListEosAccountsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseListEosAccountsKeyFn(clientOptions),
		queryFn: () =>
			listEosAccounts({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetEosAccount = (
	queryClient: QueryClient,
	clientOptions: Options<GetEosAccountData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetEosAccountKeyFn(clientOptions),
		queryFn: () =>
			getEosAccount({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseErc20GetErc20TokenDecimals = (
	queryClient: QueryClient,
	clientOptions: Options<Erc20GetErc20TokenDecimalsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc20GetErc20TokenDecimalsKeyFn(clientOptions),
		queryFn: () =>
			erc20GetErc20TokenDecimals({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc20GetErc20TokenSymbol = (
	queryClient: QueryClient,
	clientOptions: Options<Erc20GetErc20TokenSymbolData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc20GetErc20TokenSymbolKeyFn(clientOptions),
		queryFn: () =>
			erc20GetErc20TokenSymbol({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc20GetErc20TokenName = (
	queryClient: QueryClient,
	clientOptions: Options<Erc20GetErc20TokenNameData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc20GetErc20TokenNameKeyFn(clientOptions),
		queryFn: () =>
			erc20GetErc20TokenName({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc20GetErc20TokenTotalSupply = (
	queryClient: QueryClient,
	clientOptions: Options<Erc20GetErc20TokenTotalSupplyData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc20GetErc20TokenTotalSupplyKeyFn(clientOptions),
		queryFn: () =>
			erc20GetErc20TokenTotalSupply({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc20GetErc20TokenBalance = (
	queryClient: QueryClient,
	clientOptions: Options<Erc20GetErc20TokenBalanceData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc20GetErc20TokenBalanceKeyFn(clientOptions),
		queryFn: () =>
			erc20GetErc20TokenBalance({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc20GetErc20TokenAllowance = (
	queryClient: QueryClient,
	clientOptions: Options<Erc20GetErc20TokenAllowanceData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc20GetErc20TokenAllowanceKeyFn(clientOptions),
		queryFn: () =>
			erc20GetErc20TokenAllowance({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc4626GetErc4626Asset = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626AssetData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc4626GetErc4626AssetKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626Asset({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc4626GetErc4626TotalAssets = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626TotalAssetsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc4626GetErc4626TotalAssetsKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626TotalAssets({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc4626GetErc4626ConvertToShares = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626ConvertToSharesData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc4626GetErc4626ConvertToSharesKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626ConvertToShares({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc4626GetErc4626ConvertToAssets = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626ConvertToAssetsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc4626GetErc4626ConvertToAssetsKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626ConvertToAssets({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc4626GetErc4626MaxDeposit = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626MaxDepositData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc4626GetErc4626MaxDepositKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626MaxDeposit({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc4626GetErc4626MaxMint = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626MaxMintData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc4626GetErc4626MaxMintKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626MaxMint({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc4626GetErc4626MaxWithdraw = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626MaxWithdrawData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc4626GetErc4626MaxWithdrawKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626MaxWithdraw({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc4626GetErc4626MaxRedeem = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626MaxRedeemData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc4626GetErc4626MaxRedeemKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626MaxRedeem({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc4626GetErc4626PreviewDeposit = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626PreviewDepositData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc4626GetErc4626PreviewDepositKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626PreviewDeposit({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc4626GetErc4626PreviewMint = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626PreviewMintData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc4626GetErc4626PreviewMintKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626PreviewMint({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc4626GetErc4626PreviewWithdraw = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626PreviewWithdrawData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc4626GetErc4626PreviewWithdrawKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626PreviewWithdraw({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc4626GetErc4626PreviewRedeem = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626PreviewRedeemData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc4626GetErc4626PreviewRedeemKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626PreviewRedeem({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc4626GetErc4626TotalSupply = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626TotalSupplyData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc4626GetErc4626TotalSupplyKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626TotalSupply({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc4626GetErc4626BalanceOf = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626BalanceOfData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc4626GetErc4626BalanceOfKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626BalanceOf({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc4626GetErc4626Allowance = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626AllowanceData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc4626GetErc4626AllowanceKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626Allowance({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc721GetErc721BalanceOf = (
	queryClient: QueryClient,
	clientOptions: Options<Erc721GetErc721BalanceOfData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc721GetErc721BalanceOfKeyFn(clientOptions),
		queryFn: () =>
			erc721GetErc721BalanceOf({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc721GetErc721OwnerOf = (
	queryClient: QueryClient,
	clientOptions: Options<Erc721GetErc721OwnerOfData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc721GetErc721OwnerOfKeyFn(clientOptions),
		queryFn: () =>
			erc721GetErc721OwnerOf({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc721GetErc721Name = (
	queryClient: QueryClient,
	clientOptions: Options<Erc721GetErc721NameData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc721GetErc721NameKeyFn(clientOptions),
		queryFn: () =>
			erc721GetErc721Name({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc721GetErc721Symbol = (
	queryClient: QueryClient,
	clientOptions: Options<Erc721GetErc721SymbolData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc721GetErc721SymbolKeyFn(clientOptions),
		queryFn: () =>
			erc721GetErc721Symbol({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc721GetErc721TokenUri = (
	queryClient: QueryClient,
	clientOptions: Options<Erc721GetErc721TokenUriData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc721GetErc721TokenUriKeyFn(clientOptions),
		queryFn: () =>
			erc721GetErc721TokenUri({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc721GetErc721Approved = (
	queryClient: QueryClient,
	clientOptions: Options<Erc721GetErc721ApprovedData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc721GetErc721ApprovedKeyFn(clientOptions),
		queryFn: () =>
			erc721GetErc721Approved({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseErc721GetErc721IsApprovedForAll = (
	queryClient: QueryClient,
	clientOptions: Options<Erc721GetErc721IsApprovedForAllData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseErc721GetErc721IsApprovedForAllKeyFn(clientOptions),
		queryFn: () =>
			erc721GetErc721IsApprovedForAll({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseFinancialDatasetsGetCompanyFacts = (
	queryClient: QueryClient,
	clientOptions: Options<FinancialDatasetsGetCompanyFactsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseFinancialDatasetsGetCompanyFactsKeyFn(clientOptions),
		queryFn: () =>
			financialDatasetsGetCompanyFacts({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseFinancialDatasetsGetIncomeStatements = (
	queryClient: QueryClient,
	clientOptions: Options<FinancialDatasetsGetIncomeStatementsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey:
			Common.UseFinancialDatasetsGetIncomeStatementsKeyFn(clientOptions),
		queryFn: () =>
			financialDatasetsGetIncomeStatements({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseFinancialDatasetsGetBalanceSheets = (
	queryClient: QueryClient,
	clientOptions: Options<FinancialDatasetsGetBalanceSheetsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseFinancialDatasetsGetBalanceSheetsKeyFn(clientOptions),
		queryFn: () =>
			financialDatasetsGetBalanceSheets({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseFinancialDatasetsGetCashFlowStatements = (
	queryClient: QueryClient,
	clientOptions: Options<FinancialDatasetsGetCashFlowStatementsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey:
			Common.UseFinancialDatasetsGetCashFlowStatementsKeyFn(clientOptions),
		queryFn: () =>
			financialDatasetsGetCashFlowStatements({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseFinancialDatasetsGetSegmentedRevenues = (
	queryClient: QueryClient,
	clientOptions: Options<FinancialDatasetsGetSegmentedRevenuesData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey:
			Common.UseFinancialDatasetsGetSegmentedRevenuesKeyFn(clientOptions),
		queryFn: () =>
			financialDatasetsGetSegmentedRevenues({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseFinancialDatasetsGetAllFinancials = (
	queryClient: QueryClient,
	clientOptions: Options<FinancialDatasetsGetAllFinancialsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseFinancialDatasetsGetAllFinancialsKeyFn(clientOptions),
		queryFn: () =>
			financialDatasetsGetAllFinancials({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseFinancialDatasetsGetAvailableTickers = (
	queryClient: QueryClient,
	clientOptions: Options<FinancialDatasetsGetAvailableTickersData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey:
			Common.UseFinancialDatasetsGetAvailableTickersKeyFn(clientOptions),
		queryFn: () =>
			financialDatasetsGetAvailableTickers({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseFinancialDatasetsGetInsiderTransactions = (
	queryClient: QueryClient,
	clientOptions: Options<FinancialDatasetsGetInsiderTransactionsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey:
			Common.UseFinancialDatasetsGetInsiderTransactionsKeyFn(clientOptions),
		queryFn: () =>
			financialDatasetsGetInsiderTransactions({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseFinancialDatasetsGetOptionsChain = (
	queryClient: QueryClient,
	clientOptions: Options<FinancialDatasetsGetOptionsChainData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseFinancialDatasetsGetOptionsChainKeyFn(clientOptions),
		queryFn: () =>
			financialDatasetsGetOptionsChain({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseFinancialDatasetsGetPrices = (
	queryClient: QueryClient,
	clientOptions: Options<FinancialDatasetsGetPricesData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseFinancialDatasetsGetPricesKeyFn(clientOptions),
		queryFn: () =>
			financialDatasetsGetPrices({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseFinancialDatasetsGetPriceSnapshot = (
	queryClient: QueryClient,
	clientOptions: Options<FinancialDatasetsGetPriceSnapshotData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseFinancialDatasetsGetPriceSnapshotKeyFn(clientOptions),
		queryFn: () =>
			financialDatasetsGetPriceSnapshot({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseJupiterGetProgramIdToLabel = (
	queryClient: QueryClient,
	clientOptions: Options<JupiterGetProgramIdToLabelData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseJupiterGetProgramIdToLabelKeyFn(clientOptions),
		queryFn: () =>
			jupiterGetProgramIdToLabel({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseJupiterGetIndexedRouteMap = (
	queryClient: QueryClient,
	clientOptions: Options<JupiterGetIndexedRouteMapData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseJupiterGetIndexedRouteMapKeyFn(clientOptions),
		queryFn: () =>
			jupiterGetIndexedRouteMap({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseJupiterGetTokens = (
	queryClient: QueryClient,
	clientOptions: Options<JupiterGetTokensData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseJupiterGetTokensKeyFn(clientOptions),
		queryFn: () =>
			jupiterGetTokens({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseLendingPoolGetFlashLoanPremiumTotal = (
	queryClient: QueryClient,
	clientOptions: Options<LendingPoolGetFlashLoanPremiumTotalData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseLendingPoolGetFlashLoanPremiumTotalKeyFn(clientOptions),
		queryFn: () =>
			lendingPoolGetFlashLoanPremiumTotal({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseLendingPoolGetLendingPoolRevision = (
	queryClient: QueryClient,
	clientOptions: Options<LendingPoolGetLendingPoolRevisionData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseLendingPoolGetLendingPoolRevisionKeyFn(clientOptions),
		queryFn: () =>
			lendingPoolGetLendingPoolRevision({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseLendingPoolGetMaxNumberReserves = (
	queryClient: QueryClient,
	clientOptions: Options<LendingPoolGetMaxNumberReservesData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseLendingPoolGetMaxNumberReservesKeyFn(clientOptions),
		queryFn: () =>
			lendingPoolGetMaxNumberReserves({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseLendingPoolGetMaxStableRateBorrowSizePercent = (
	queryClient: QueryClient,
	clientOptions: Options<
		LendingPoolGetMaxStableRateBorrowSizePercentData,
		true
	>,
) =>
	queryClient.prefetchQuery({
		queryKey:
			Common.UseLendingPoolGetMaxStableRateBorrowSizePercentKeyFn(
				clientOptions,
			),
		queryFn: () =>
			lendingPoolGetMaxStableRateBorrowSizePercent({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseLendingPoolGetReserveData = (
	queryClient: QueryClient,
	clientOptions: Options<LendingPoolGetReserveDataData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseLendingPoolGetReserveDataKeyFn(clientOptions),
		queryFn: () =>
			lendingPoolGetReserveData({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseLendingPoolGetUserAccountData = (
	queryClient: QueryClient,
	clientOptions: Options<LendingPoolGetUserAccountDataData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseLendingPoolGetUserAccountDataKeyFn(clientOptions),
		queryFn: () =>
			lendingPoolGetUserAccountData({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseLendingPoolGetReservesList = (
	queryClient: QueryClient,
	clientOptions: Options<LendingPoolGetReservesListData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseLendingPoolGetReservesListKeyFn(clientOptions),
		queryFn: () =>
			lendingPoolGetReservesList({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseLendingPoolGetAddressesProvider = (
	queryClient: QueryClient,
	clientOptions: Options<LendingPoolGetAddressesProviderData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseLendingPoolGetAddressesProviderKeyFn(clientOptions),
		queryFn: () =>
			lendingPoolGetAddressesProvider({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseLendingPoolIsPaused = (
	queryClient: QueryClient,
	clientOptions: Options<LendingPoolIsPausedData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseLendingPoolIsPausedKeyFn(clientOptions),
		queryFn: () =>
			lendingPoolIsPaused({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseLeveragerGetAddressesProvider = (
	queryClient: QueryClient,
	clientOptions: Options<LeveragerGetAddressesProviderData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseLeveragerGetAddressesProviderKeyFn(clientOptions),
		queryFn: () =>
			leveragerGetAddressesProvider({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseLeveragerGetDefaultAdminRole = (
	queryClient: QueryClient,
	clientOptions: Options<LeveragerGetDefaultAdminRoleData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseLeveragerGetDefaultAdminRoleKeyFn(clientOptions),
		queryFn: () =>
			leveragerGetDefaultAdminRole({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseLeveragerGetLendingPool = (
	queryClient: QueryClient,
	clientOptions: Options<LeveragerGetLendingPoolData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseLeveragerGetLendingPoolKeyFn(clientOptions),
		queryFn: () =>
			leveragerGetLendingPool({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseLeveragerGetMinHf = (
	queryClient: QueryClient,
	clientOptions: Options<LeveragerGetMinHfData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseLeveragerGetMinHfKeyFn(clientOptions),
		queryFn: () =>
			leveragerGetMinHf({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseLeveragerIsPaused = (
	queryClient: QueryClient,
	clientOptions: Options<LeveragerIsPausedData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseLeveragerIsPausedKeyFn(clientOptions),
		queryFn: () =>
			leveragerIsPaused({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseLeveragerGetWeth = (
	queryClient: QueryClient,
	clientOptions: Options<LeveragerGetWethData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseLeveragerGetWethKeyFn(clientOptions),
		queryFn: () =>
			leveragerGetWeth({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseLeveragerGetRoleAdmin = (
	queryClient: QueryClient,
	clientOptions: Options<LeveragerGetRoleAdminData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseLeveragerGetRoleAdminKeyFn(clientOptions),
		queryFn: () =>
			leveragerGetRoleAdmin({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseLeveragerHasRole = (
	queryClient: QueryClient,
	clientOptions: Options<LeveragerHasRoleData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseLeveragerHasRoleKeyFn(clientOptions),
		queryFn: () =>
			leveragerHasRole({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseLeveragerSupportsInterface = (
	queryClient: QueryClient,
	clientOptions: Options<LeveragerSupportsInterfaceData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseLeveragerSupportsInterfaceKeyFn(clientOptions),
		queryFn: () =>
			leveragerSupportsInterface({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseLifiGetQuote = (
	queryClient: QueryClient,
	clientOptions: Options<LifiGetQuoteData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseLifiGetQuoteKeyFn(clientOptions),
		queryFn: () =>
			lifiGetQuote({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseLifiGetStatus = (
	queryClient: QueryClient,
	clientOptions: Options<LifiGetStatusData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseLifiGetStatusKeyFn(clientOptions),
		queryFn: () =>
			lifiGetStatus({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseLifiGetChains = (
	queryClient: QueryClient,
	clientOptions: Options<LifiGetChainsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseLifiGetChainsKeyFn(clientOptions),
		queryFn: () =>
			lifiGetChains({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetTools = (
	queryClient: QueryClient,
	clientOptions: Options<GetToolsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetToolsKeyFn(clientOptions),
		queryFn: () =>
			getTools({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseLifiGetTokens = (
	queryClient: QueryClient,
	clientOptions: Options<unknown, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseLifiGetTokensKeyFn(clientOptions),
		queryFn: () =>
			lifiGetTokens({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseLifiGetTokenDetails = (
	queryClient: QueryClient,
	clientOptions: Options<LifiGetTokenDetailsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseLifiGetTokenDetailsKeyFn(clientOptions),
		queryFn: () =>
			lifiGetTokenDetails({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseLifiGetConnections = (
	queryClient: QueryClient,
	clientOptions: Options<LifiGetConnectionsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseLifiGetConnectionsKeyFn(clientOptions),
		queryFn: () =>
			lifiGetConnections({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseLifiGetAllPossibleConnections = (
	queryClient: QueryClient,
	clientOptions: Options<LifiGetAllPossibleConnectionsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseLifiGetAllPossibleConnectionsKeyFn(clientOptions),
		queryFn: () =>
			lifiGetAllPossibleConnections({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseListLitecoinAccounts = (
	queryClient: QueryClient,
	clientOptions: Options<ListLitecoinAccountsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseListLitecoinAccountsKeyFn(clientOptions),
		queryFn: () =>
			listLitecoinAccounts({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseLitecoinGetLitecoinAccount = (
	queryClient: QueryClient,
	clientOptions: Options<LitecoinGetLitecoinAccountData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseLitecoinGetLitecoinAccountKeyFn(clientOptions),
		queryFn: () =>
			litecoinGetLitecoinAccount({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseGetAssets = (
	queryClient: QueryClient,
	clientOptions: Options<GetAssetsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetAssetsKeyFn(clientOptions),
		queryFn: () =>
			getAssets({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetAssetByAddress = (
	queryClient: QueryClient,
	clientOptions: Options<GetAssetByAddressData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetAssetByAddressKeyFn(clientOptions),
		queryFn: () =>
			getAssetByAddress({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetPools = (
	queryClient: QueryClient,
	clientOptions: Options<GetPoolsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetPoolsKeyFn(clientOptions),
		queryFn: () =>
			getPools({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetPoolByAddress = (
	queryClient: QueryClient,
	clientOptions: Options<GetPoolByAddressData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetPoolByAddressKeyFn(clientOptions),
		queryFn: () =>
			getPoolByAddress({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetPoolsByType = (
	queryClient: QueryClient,
	clientOptions: Options<GetPoolsByTypeData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetPoolsByTypeKeyFn(clientOptions),
		queryFn: () =>
			getPoolsByType({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetTopAprPools = (
	queryClient: QueryClient,
	clientOptions: Options<GetTopAprPoolsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetTopAprPoolsKeyFn(clientOptions),
		queryFn: () =>
			getTopAprPools({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetTotalValueLocked = (
	queryClient: QueryClient,
	clientOptions: Options<GetTotalValueLockedData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetTotalValueLockedKeyFn(clientOptions),
		queryFn: () =>
			getTotalValueLocked({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseCalculateOptimalVoteDistribution = (
	queryClient: QueryClient,
	clientOptions: Options<CalculateOptimalVoteDistributionData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseCalculateOptimalVoteDistributionKeyFn(clientOptions),
		queryFn: () =>
			calculateOptimalVoteDistribution({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseGetBalanceOf = (
	queryClient: QueryClient,
	clientOptions: Options<GetBalanceOfData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetBalanceOfKeyFn(clientOptions),
		queryFn: () =>
			getBalanceOf({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetOwnerOf = (
	queryClient: QueryClient,
	clientOptions: Options<GetOwnerOfData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetOwnerOfKeyFn(clientOptions),
		queryFn: () =>
			getOwnerOf({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetTokenUri = (
	queryClient: QueryClient,
	clientOptions: Options<GetTokenUriData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetTokenUriKeyFn(clientOptions),
		queryFn: () =>
			getTokenUri({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetLockDetails = (
	queryClient: QueryClient,
	clientOptions: Options<GetLockDetailsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetLockDetailsKeyFn(clientOptions),
		queryFn: () =>
			getLockDetails({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetTotalSupply = (
	queryClient: QueryClient,
	clientOptions: Options<GetTotalSupplyData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetTotalSupplyKeyFn(clientOptions),
		queryFn: () =>
			getTotalSupply({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetTokenOfOwnerByIndex = (
	queryClient: QueryClient,
	clientOptions: Options<GetTokenOfOwnerByIndexData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetTokenOfOwnerByIndexKeyFn(clientOptions),
		queryFn: () =>
			getTokenOfOwnerByIndex({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseGetTokenByIndex = (
	queryClient: QueryClient,
	clientOptions: Options<GetTokenByIndexData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetTokenByIndexKeyFn(clientOptions),
		queryFn: () =>
			getTokenByIndex({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetName = (
	queryClient: QueryClient,
	clientOptions: Options<GetNameData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetNameKeyFn(clientOptions),
		queryFn: () =>
			getName({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetSymbol = (
	queryClient: QueryClient,
	clientOptions: Options<GetSymbolData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetSymbolKeyFn(clientOptions),
		queryFn: () =>
			getSymbol({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetApproved = (
	queryClient: QueryClient,
	clientOptions: Options<GetApprovedData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetApprovedKeyFn(clientOptions),
		queryFn: () =>
			getApproved({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseIsApprovedForAll = (
	queryClient: QueryClient,
	clientOptions: Options<IsApprovedForAllData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseIsApprovedForAllKeyFn(clientOptions),
		queryFn: () =>
			isApprovedForAll({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetBalanceOfNft = (
	queryClient: QueryClient,
	clientOptions: Options<GetBalanceOfNftData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetBalanceOfNftKeyFn(clientOptions),
		queryFn: () =>
			getBalanceOfNft({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetBalanceOfNftAt = (
	queryClient: QueryClient,
	clientOptions: Options<GetBalanceOfNftAtData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetBalanceOfNftAtKeyFn(clientOptions),
		queryFn: () =>
			getBalanceOfNftAt({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetTotalNftsMinted = (
	queryClient: QueryClient,
	clientOptions: Options<GetTotalNftsMintedData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetTotalNftsMintedKeyFn(clientOptions),
		queryFn: () =>
			getTotalNftsMinted({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseGetDelegates = (
	queryClient: QueryClient,
	clientOptions: Options<GetDelegatesData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetDelegatesKeyFn(clientOptions),
		queryFn: () =>
			getDelegates({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetVotes = (
	queryClient: QueryClient,
	clientOptions: Options<GetVotesData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetVotesKeyFn(clientOptions),
		queryFn: () =>
			getVotes({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetPastVotes = (
	queryClient: QueryClient,
	clientOptions: Options<GetPastVotesData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetPastVotesKeyFn(clientOptions),
		queryFn: () =>
			getPastVotes({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetVestedPayout = (
	queryClient: QueryClient,
	clientOptions: Options<GetVestedPayoutData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetVestedPayoutKeyFn(clientOptions),
		queryFn: () =>
			getVestedPayout({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetVestedPayoutAtTime = (
	queryClient: QueryClient,
	clientOptions: Options<GetVestedPayoutAtTimeData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetVestedPayoutAtTimeKeyFn(clientOptions),
		queryFn: () =>
			getVestedPayoutAtTime({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseGetVestingPayout = (
	queryClient: QueryClient,
	clientOptions: Options<GetVestingPayoutData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetVestingPayoutKeyFn(clientOptions),
		queryFn: () =>
			getVestingPayout({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetVestingPeriod = (
	queryClient: QueryClient,
	clientOptions: Options<GetVestingPeriodData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetVestingPeriodKeyFn(clientOptions),
		queryFn: () =>
			getVestingPeriod({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetFactory = (
	queryClient: QueryClient,
	clientOptions: Options<GetFactoryData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetFactoryKeyFn(clientOptions),
		queryFn: () =>
			getFactory({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetWeth = (
	queryClient: QueryClient,
	clientOptions: Options<GetWethData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetWethKeyFn(clientOptions),
		queryFn: () =>
			getWeth({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetAmountOut = (
	queryClient: QueryClient,
	clientOptions: Options<GetAmountOutData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetAmountOutKeyFn(clientOptions),
		queryFn: () =>
			getAmountOut({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetAmountsOut = (
	queryClient: QueryClient,
	clientOptions: Options<GetAmountsOutData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetAmountsOutKeyFn(clientOptions),
		queryFn: () =>
			getAmountsOut({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetTotalWeight = (
	queryClient: QueryClient,
	clientOptions: Options<GetTotalWeightData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetTotalWeightKeyFn(clientOptions),
		queryFn: () =>
			getTotalWeight({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetWeights = (
	queryClient: QueryClient,
	clientOptions: Options<GetWeightsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetWeightsKeyFn(clientOptions),
		queryFn: () =>
			getWeights({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseIsGauge = (
	queryClient: QueryClient,
	clientOptions: Options<IsGaugeData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseIsGaugeKeyFn(clientOptions),
		queryFn: () =>
			isGauge({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseIsWhitelisted = (
	queryClient: QueryClient,
	clientOptions: Options<IsWhitelistedData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseIsWhitelistedKeyFn(clientOptions),
		queryFn: () =>
			isWhitelisted({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetLastVoted = (
	queryClient: QueryClient,
	clientOptions: Options<GetLastVotedData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetLastVotedKeyFn(clientOptions),
		queryFn: () =>
			getLastVoted({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetPoolVoteLength = (
	queryClient: QueryClient,
	clientOptions: Options<GetPoolVoteLengthData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetPoolVoteLengthKeyFn(clientOptions),
		queryFn: () =>
			getPoolVoteLength({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetJobResult = (
	queryClient: QueryClient,
	clientOptions: Options<GetJobResultData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetJobResultKeyFn(clientOptions),
		queryFn: () =>
			getJobResult({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetScheduledJobs = (
	queryClient: QueryClient,
	clientOptions: Options<GetScheduledJobsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetScheduledJobsKeyFn(clientOptions),
		queryFn: () =>
			getScheduledJobs({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseListJobs = (
	queryClient: QueryClient,
	clientOptions: Options<ListJobsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseListJobsKeyFn(clientOptions),
		queryFn: () =>
			listJobs({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetJob = (
	queryClient: QueryClient,
	clientOptions: Options<GetJobData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetJobKeyFn(clientOptions),
		queryFn: () =>
			getJob({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseListFlows = (
	queryClient: QueryClient,
	clientOptions: Options<ListFlowsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseListFlowsKeyFn(clientOptions),
		queryFn: () =>
			listFlows({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetFlow = (
	queryClient: QueryClient,
	clientOptions: Options<GetFlowData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetFlowKeyFn(clientOptions),
		queryFn: () =>
			getFlow({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseListUserDefinedFunctions = (
	queryClient: QueryClient,
	clientOptions: Options<ListUserDefinedFunctionsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseListUserDefinedFunctionsKeyFn(clientOptions),
		queryFn: () =>
			listUserDefinedFunctions({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseGetNotifications = (
	queryClient: QueryClient,
	clientOptions: Options<GetNotificationsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetNotificationsKeyFn(clientOptions),
		queryFn: () =>
			getNotifications({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseOdosGetSupportedChains = (
	queryClient: QueryClient,
	clientOptions: Options<OdosGetSupportedChainsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseOdosGetSupportedChainsKeyFn(clientOptions),
		queryFn: () =>
			odosGetSupportedChains({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseOdosGetContractInfo = (
	queryClient: QueryClient,
	clientOptions: Options<OdosGetContractInfoData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseOdosGetContractInfoKeyFn(clientOptions),
		queryFn: () =>
			odosGetContractInfo({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseOdosGetRouterAddress = (
	queryClient: QueryClient,
	clientOptions: Options<OdosGetRouterAddressData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseOdosGetRouterAddressKeyFn(clientOptions),
		queryFn: () =>
			odosGetRouterAddress({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseOdosGetExecutorAddress = (
	queryClient: QueryClient,
	clientOptions: Options<OdosGetExecutorAddressData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseOdosGetExecutorAddressKeyFn(clientOptions),
		queryFn: () =>
			odosGetExecutorAddress({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseOdosGetLiquiditySources = (
	queryClient: QueryClient,
	clientOptions: Options<OdosGetLiquiditySourcesData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseOdosGetLiquiditySourcesKeyFn(clientOptions),
		queryFn: () =>
			odosGetLiquiditySources({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseOdosGetSupportedTokens = (
	queryClient: QueryClient,
	clientOptions: Options<OdosGetSupportedTokensData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseOdosGetSupportedTokensKeyFn(clientOptions),
		queryFn: () =>
			odosGetSupportedTokens({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseOdosGetCurrentBlock = (
	queryClient: QueryClient,
	clientOptions: Options<OdosGetCurrentBlockData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseOdosGetCurrentBlockKeyFn(clientOptions),
		queryFn: () =>
			odosGetCurrentBlock({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseOnRamperGetSupportedCurrencies = (
	queryClient: QueryClient,
	clientOptions: Options<OnRamperGetSupportedCurrenciesData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseOnRamperGetSupportedCurrenciesKeyFn(clientOptions),
		queryFn: () =>
			onRamperGetSupportedCurrencies({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseOnRamperGetSupportedPaymentTypes = (
	queryClient: QueryClient,
	clientOptions: Options<OnRamperGetSupportedPaymentTypesData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseOnRamperGetSupportedPaymentTypesKeyFn(clientOptions),
		queryFn: () =>
			onRamperGetSupportedPaymentTypes({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseOnRamperGetSupportedPaymentTypesFiat = (
	queryClient: QueryClient,
	clientOptions: Options<OnRamperGetSupportedPaymentTypesFiatData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey:
			Common.UseOnRamperGetSupportedPaymentTypesFiatKeyFn(clientOptions),
		queryFn: () =>
			onRamperGetSupportedPaymentTypesFiat({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseOnRamperGetSupportedDefaultsAll = (
	queryClient: QueryClient,
	clientOptions: Options<OnRamperGetSupportedDefaultsAllData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseOnRamperGetSupportedDefaultsAllKeyFn(clientOptions),
		queryFn: () =>
			onRamperGetSupportedDefaultsAll({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseOnRamperGetSupportedAssets = (
	queryClient: QueryClient,
	clientOptions: Options<OnRamperGetSupportedAssetsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseOnRamperGetSupportedAssetsKeyFn(clientOptions),
		queryFn: () =>
			onRamperGetSupportedAssets({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseOnRamperGetSupportedOnRampsAll = (
	queryClient: QueryClient,
	clientOptions: Options<OnRamperGetSupportedOnRampsAllData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseOnRamperGetSupportedOnRampsAllKeyFn(clientOptions),
		queryFn: () =>
			onRamperGetSupportedOnRampsAll({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseOnRamperGetQuotesBuy = (
	queryClient: QueryClient,
	clientOptions: Options<OnRamperGetQuotesBuyData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseOnRamperGetQuotesBuyKeyFn(clientOptions),
		queryFn: () =>
			onRamperGetQuotesBuy({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseOnRamperGetQuotesSell = (
	queryClient: QueryClient,
	clientOptions: Options<OnRamperGetQuotesSellData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseOnRamperGetQuotesSellKeyFn(clientOptions),
		queryFn: () =>
			onRamperGetQuotesSell({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseGetCollection = (
	queryClient: QueryClient,
	clientOptions: Options<GetCollectionData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetCollectionKeyFn(clientOptions),
		queryFn: () =>
			getCollection({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetNft = (
	queryClient: QueryClient,
	clientOptions: Options<GetNftData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetNftKeyFn(clientOptions),
		queryFn: () =>
			getNft({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetMessage = (
	queryClient: QueryClient,
	clientOptions: Options<unknown, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetMessageKeyFn(clientOptions),
		queryFn: () =>
			getMessage({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetMarkets = (
	queryClient: QueryClient,
	clientOptions: Options<GetMarketsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetMarketsKeyFn(clientOptions),
		queryFn: () =>
			getMarkets({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetMarket = (
	queryClient: QueryClient,
	clientOptions: Options<GetMarketData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetMarketKeyFn(clientOptions),
		queryFn: () =>
			getMarket({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetOrderBook = (
	queryClient: QueryClient,
	clientOptions: Options<GetOrderBookData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetOrderBookKeyFn(clientOptions),
		queryFn: () =>
			getOrderBook({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetOpenOrders = (
	queryClient: QueryClient,
	clientOptions: Options<GetOpenOrdersData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetOpenOrdersKeyFn(clientOptions),
		queryFn: () =>
			getOpenOrders({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetOrder = (
	queryClient: QueryClient,
	clientOptions: Options<GetOrderData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetOrderKeyFn(clientOptions),
		queryFn: () =>
			getOrder({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetTrades = (
	queryClient: QueryClient,
	clientOptions: Options<GetTradesData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetTradesKeyFn(clientOptions),
		queryFn: () =>
			getTrades({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetNotifications1 = (
	queryClient: QueryClient,
	clientOptions: Options<GetNotifications1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetNotifications1KeyFn(clientOptions),
		queryFn: () =>
			getNotifications1({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetBalanceAllowance = (
	queryClient: QueryClient,
	clientOptions: Options<GetBalanceAllowanceData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetBalanceAllowanceKeyFn(clientOptions),
		queryFn: () =>
			getBalanceAllowance({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseGetPricesHistory = (
	queryClient: QueryClient,
	clientOptions: Options<GetPricesHistoryData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetPricesHistoryKeyFn(clientOptions),
		queryFn: () =>
			getPricesHistory({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetMarketTradeEvents = (
	queryClient: QueryClient,
	clientOptions: Options<GetMarketTradeEventsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetMarketTradeEventsKeyFn(clientOptions),
		queryFn: () =>
			getMarketTradeEvents({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseGetPools1 = (
	queryClient: QueryClient,
	clientOptions: Options<GetPools1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetPools1KeyFn(clientOptions),
		queryFn: () =>
			getPools1({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetPoolByAddress1 = (
	queryClient: QueryClient,
	clientOptions: Options<GetPoolByAddress1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetPoolByAddress1KeyFn(clientOptions),
		queryFn: () =>
			getPoolByAddress1({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetPoolsByType1 = (
	queryClient: QueryClient,
	clientOptions: Options<GetPoolsByType1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetPoolsByType1KeyFn(clientOptions),
		queryFn: () =>
			getPoolsByType1({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetTopAprPools1 = (
	queryClient: QueryClient,
	clientOptions: Options<GetTopAprPools1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetTopAprPools1KeyFn(clientOptions),
		queryFn: () =>
			getTopAprPools1({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetTokens = (
	queryClient: QueryClient,
	clientOptions: Options<GetTokensData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetTokensKeyFn(clientOptions),
		queryFn: () =>
			getTokens({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetInfo = (
	queryClient: QueryClient,
	clientOptions: Options<GetInfoData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetInfoKeyFn(clientOptions),
		queryFn: () =>
			getInfo({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetTotalValueLocked1 = (
	queryClient: QueryClient,
	clientOptions: Options<GetTotalValueLocked1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetTotalValueLocked1KeyFn(clientOptions),
		queryFn: () =>
			getTotalValueLocked1({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseCalculateOptimalVoteDistribution1 = (
	queryClient: QueryClient,
	clientOptions: Options<CalculateOptimalVoteDistribution1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseCalculateOptimalVoteDistribution1KeyFn(clientOptions),
		queryFn: () =>
			calculateOptimalVoteDistribution1({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseGetBalanceOf1 = (
	queryClient: QueryClient,
	clientOptions: Options<GetBalanceOf1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetBalanceOf1KeyFn(clientOptions),
		queryFn: () =>
			getBalanceOf1({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetOwnerOf1 = (
	queryClient: QueryClient,
	clientOptions: Options<GetOwnerOf1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetOwnerOf1KeyFn(clientOptions),
		queryFn: () =>
			getOwnerOf1({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetTokenUri1 = (
	queryClient: QueryClient,
	clientOptions: Options<GetTokenUri1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetTokenUri1KeyFn(clientOptions),
		queryFn: () =>
			getTokenUri1({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetTotalSupply1 = (
	queryClient: QueryClient,
	clientOptions: Options<GetTotalSupply1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetTotalSupply1KeyFn(clientOptions),
		queryFn: () =>
			getTotalSupply1({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetBalanceOfNft1 = (
	queryClient: QueryClient,
	clientOptions: Options<GetBalanceOfNft1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetBalanceOfNft1KeyFn(clientOptions),
		queryFn: () =>
			getBalanceOfNft1({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetLocked = (
	queryClient: QueryClient,
	clientOptions: Options<GetLockedData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetLockedKeyFn(clientOptions),
		queryFn: () =>
			getLocked({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetVotes1 = (
	queryClient: QueryClient,
	clientOptions: Options<GetVotes1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetVotes1KeyFn(clientOptions),
		queryFn: () =>
			getVotes1({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetPastVotes1 = (
	queryClient: QueryClient,
	clientOptions: Options<GetPastVotes1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetPastVotes1KeyFn(clientOptions),
		queryFn: () =>
			getPastVotes1({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetDelegates1 = (
	queryClient: QueryClient,
	clientOptions: Options<GetDelegates1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetDelegates1KeyFn(clientOptions),
		queryFn: () =>
			getDelegates1({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetFactory1 = (
	queryClient: QueryClient,
	clientOptions: Options<GetFactory1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetFactory1KeyFn(clientOptions),
		queryFn: () =>
			getFactory1({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetAmountOut1 = (
	queryClient: QueryClient,
	clientOptions: Options<GetAmountOut1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetAmountOut1KeyFn(clientOptions),
		queryFn: () =>
			getAmountOut1({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetAmountsOut1 = (
	queryClient: QueryClient,
	clientOptions: Options<GetAmountsOut1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetAmountsOut1KeyFn(clientOptions),
		queryFn: () =>
			getAmountsOut1({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetReserves = (
	queryClient: QueryClient,
	clientOptions: Options<GetReservesData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetReservesKeyFn(clientOptions),
		queryFn: () =>
			getReserves({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseIsPair = (
	queryClient: QueryClient,
	clientOptions: Options<IsPairData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseIsPairKeyFn(clientOptions),
		queryFn: () =>
			isPair({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUsePairFor = (
	queryClient: QueryClient,
	clientOptions: Options<PairForData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UsePairForKeyFn(clientOptions),
		queryFn: () =>
			pairFor({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseQuoteAddLiquidity = (
	queryClient: QueryClient,
	clientOptions: Options<QuoteAddLiquidityData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseQuoteAddLiquidityKeyFn(clientOptions),
		queryFn: () =>
			quoteAddLiquidity({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseQuoteRemoveLiquidity = (
	queryClient: QueryClient,
	clientOptions: Options<QuoteRemoveLiquidityData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseQuoteRemoveLiquidityKeyFn(clientOptions),
		queryFn: () =>
			quoteRemoveLiquidity({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseSortTokens = (
	queryClient: QueryClient,
	clientOptions: Options<SortTokensData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseSortTokensKeyFn(clientOptions),
		queryFn: () =>
			sortTokens({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetWeth1 = (
	queryClient: QueryClient,
	clientOptions: Options<GetWeth1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetWeth1KeyFn(clientOptions),
		queryFn: () =>
			getWeth1({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetTotalWeight1 = (
	queryClient: QueryClient,
	clientOptions: Options<GetTotalWeight1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetTotalWeight1KeyFn(clientOptions),
		queryFn: () =>
			getTotalWeight1({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetWeights1 = (
	queryClient: QueryClient,
	clientOptions: Options<GetWeights1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetWeights1KeyFn(clientOptions),
		queryFn: () =>
			getWeights1({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseIsGauge1 = (
	queryClient: QueryClient,
	clientOptions: Options<IsGauge1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseIsGauge1KeyFn(clientOptions),
		queryFn: () =>
			isGauge1({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseIsWhitelisted1 = (
	queryClient: QueryClient,
	clientOptions: Options<IsWhitelisted1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseIsWhitelisted1KeyFn(clientOptions),
		queryFn: () =>
			isWhitelisted1({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetLastVoted1 = (
	queryClient: QueryClient,
	clientOptions: Options<GetLastVoted1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetLastVoted1KeyFn(clientOptions),
		queryFn: () =>
			getLastVoted1({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseListRippleAccounts = (
	queryClient: QueryClient,
	clientOptions: Options<ListRippleAccountsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseListRippleAccountsKeyFn(clientOptions),
		queryFn: () =>
			listRippleAccounts({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseGetRippleAccount = (
	queryClient: QueryClient,
	clientOptions: Options<GetRippleAccountData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetRippleAccountKeyFn(clientOptions),
		queryFn: () =>
			getRippleAccount({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseListSolanaAccounts = (
	queryClient: QueryClient,
	clientOptions: Options<ListSolanaAccountsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseListSolanaAccountsKeyFn(clientOptions),
		queryFn: () =>
			listSolanaAccounts({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseGetSolanaAccount = (
	queryClient: QueryClient,
	clientOptions: Options<GetSolanaAccountData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetSolanaAccountKeyFn(clientOptions),
		queryFn: () =>
			getSolanaAccount({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetFusions = (
	queryClient: QueryClient,
	clientOptions: Options<GetFusionsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetFusionsKeyFn(clientOptions),
		queryFn: () =>
			getFusions({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetFusionByAddress = (
	queryClient: QueryClient,
	clientOptions: Options<GetFusionByAddressData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetFusionByAddressKeyFn(clientOptions),
		queryFn: () =>
			getFusionByAddress({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseGetFusionsByType = (
	queryClient: QueryClient,
	clientOptions: Options<GetFusionsByTypeData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetFusionsByTypeKeyFn(clientOptions),
		queryFn: () =>
			getFusionsByType({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetTopAprFusions = (
	queryClient: QueryClient,
	clientOptions: Options<GetTopAprFusionsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetTopAprFusionsKeyFn(clientOptions),
		queryFn: () =>
			getTopAprFusions({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetTotalValueLocked2 = (
	queryClient: QueryClient,
	clientOptions: Options<GetTotalValueLocked2Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetTotalValueLocked2KeyFn(clientOptions),
		queryFn: () =>
			getTotalValueLocked2({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseGetTopTokens = (
	queryClient: QueryClient,
	clientOptions: Options<GetTopTokensData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetTopTokensKeyFn(clientOptions),
		queryFn: () =>
			getTopTokens({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetTopPairs = (
	queryClient: QueryClient,
	clientOptions: Options<GetTopPairsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetTopPairsKeyFn(clientOptions),
		queryFn: () =>
			getTopPairs({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseCalculateOptimalVoteDistribution2 = (
	queryClient: QueryClient,
	clientOptions: Options<CalculateOptimalVoteDistribution2Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseCalculateOptimalVoteDistribution2KeyFn(clientOptions),
		queryFn: () =>
			calculateOptimalVoteDistribution2({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseGetQuote = (
	queryClient: QueryClient,
	clientOptions: Options<GetQuoteData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetQuoteKeyFn(clientOptions),
		queryFn: () =>
			getQuote({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetGasPrice = (
	queryClient: QueryClient,
	clientOptions: Options<GetGasPriceData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetGasPriceKeyFn(clientOptions),
		queryFn: () =>
			getGasPrice({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetSupportedChains = (
	queryClient: QueryClient,
	clientOptions: Options<GetSupportedChainsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetSupportedChainsKeyFn(clientOptions),
		queryFn: () =>
			getSupportedChains({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseGetSupportedProviders = (
	queryClient: QueryClient,
	clientOptions: Options<GetSupportedProvidersData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetSupportedProvidersKeyFn(clientOptions),
		queryFn: () =>
			getSupportedProviders({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseTronListTronAccounts = (
	queryClient: QueryClient,
	clientOptions: Options<TronListTronAccountsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseTronListTronAccountsKeyFn(clientOptions),
		queryFn: () =>
			tronListTronAccounts({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseTronGetTronAccount = (
	queryClient: QueryClient,
	clientOptions: Options<TronGetTronAccountData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseTronGetTronAccountKeyFn(clientOptions),
		queryFn: () =>
			tronGetTronAccount({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseGetWeth2 = (
	queryClient: QueryClient,
	clientOptions: Options<GetWeth2Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetWeth2KeyFn(clientOptions),
		queryFn: () =>
			getWeth2({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUsePositions = (
	queryClient: QueryClient,
	clientOptions: Options<PositionsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UsePositionsKeyFn(clientOptions),
		queryFn: () =>
			positions({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseTokenOfOwnerByIndex = (
	queryClient: QueryClient,
	clientOptions: Options<TokenOfOwnerByIndexData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseTokenOfOwnerByIndexKeyFn(clientOptions),
		queryFn: () =>
			tokenOfOwnerByIndex({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseBalanceOf = (
	queryClient: QueryClient,
	clientOptions: Options<BalanceOfData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseBalanceOfKeyFn(clientOptions),
		queryFn: () =>
			balanceOf({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseDomainSeparator = (
	queryClient: QueryClient,
	clientOptions: Options<DomainSeparatorData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseDomainSeparatorKeyFn(clientOptions),
		queryFn: () =>
			domainSeparator({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUsePermitTypehash = (
	queryClient: QueryClient,
	clientOptions: Options<PermitTypehashData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UsePermitTypehashKeyFn(clientOptions),
		queryFn: () =>
			permitTypehash({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseWeth9 = (
	queryClient: QueryClient,
	clientOptions: Options<Weth9Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseWeth9KeyFn(clientOptions),
		queryFn: () =>
			weth9({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseFactory = (
	queryClient: QueryClient,
	clientOptions: Options<FactoryData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseFactoryKeyFn(clientOptions),
		queryFn: () =>
			factory({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseName = (
	queryClient: QueryClient,
	clientOptions: Options<NameData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseNameKeyFn(clientOptions),
		queryFn: () => name({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseSymbol = (
	queryClient: QueryClient,
	clientOptions: Options<SymbolData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseSymbolKeyFn(clientOptions),
		queryFn: () =>
			symbol({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseTokenUri = (
	queryClient: QueryClient,
	clientOptions: Options<TokenUriData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseTokenUriKeyFn(clientOptions),
		queryFn: () =>
			tokenUri({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseBaseUri = (
	queryClient: QueryClient,
	clientOptions: Options<BaseUriData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseBaseUriKeyFn(clientOptions),
		queryFn: () =>
			baseUri({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseOwnerOf = (
	queryClient: QueryClient,
	clientOptions: Options<OwnerOfData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseOwnerOfKeyFn(clientOptions),
		queryFn: () =>
			ownerOf({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetApproved1 = (
	queryClient: QueryClient,
	clientOptions: Options<GetApproved1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetApproved1KeyFn(clientOptions),
		queryFn: () =>
			getApproved1({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseIsApprovedForAll1 = (
	queryClient: QueryClient,
	clientOptions: Options<IsApprovedForAll1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseIsApprovedForAll1KeyFn(clientOptions),
		queryFn: () =>
			isApprovedForAll1({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseTotalSupply = (
	queryClient: QueryClient,
	clientOptions: Options<TotalSupplyData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseTotalSupplyKeyFn(clientOptions),
		queryFn: () =>
			totalSupply({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseTokenByIndex = (
	queryClient: QueryClient,
	clientOptions: Options<TokenByIndexData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseTokenByIndexKeyFn(clientOptions),
		queryFn: () =>
			tokenByIndex({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseSupportsInterface = (
	queryClient: QueryClient,
	clientOptions: Options<SupportsInterfaceData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseSupportsInterfaceKeyFn(clientOptions),
		queryFn: () =>
			supportsInterface({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseWeth91 = (
	queryClient: QueryClient,
	clientOptions: Options<Weth91Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseWeth91KeyFn(clientOptions),
		queryFn: () =>
			weth91({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseFactory1 = (
	queryClient: QueryClient,
	clientOptions: Options<Factory1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseFactory1KeyFn(clientOptions),
		queryFn: () =>
			factory1({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetBalanceOf2 = (
	queryClient: QueryClient,
	clientOptions: Options<GetBalanceOf2Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetBalanceOf2KeyFn(clientOptions),
		queryFn: () =>
			getBalanceOf2({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetOwnerOf2 = (
	queryClient: QueryClient,
	clientOptions: Options<GetOwnerOf2Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetOwnerOf2KeyFn(clientOptions),
		queryFn: () =>
			getOwnerOf2({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetTokenUri2 = (
	queryClient: QueryClient,
	clientOptions: Options<GetTokenUri2Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetTokenUri2KeyFn(clientOptions),
		queryFn: () =>
			getTokenUri2({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetApproved2 = (
	queryClient: QueryClient,
	clientOptions: Options<GetApproved2Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetApproved2KeyFn(clientOptions),
		queryFn: () =>
			getApproved2({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseIsApprovedForAll2 = (
	queryClient: QueryClient,
	clientOptions: Options<IsApprovedForAll2Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseIsApprovedForAll2KeyFn(clientOptions),
		queryFn: () =>
			isApprovedForAll2({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetBalanceOfNft2 = (
	queryClient: QueryClient,
	clientOptions: Options<GetBalanceOfNft2Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetBalanceOfNft2KeyFn(clientOptions),
		queryFn: () =>
			getBalanceOfNft2({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetTotalSupply2 = (
	queryClient: QueryClient,
	clientOptions: Options<GetTotalSupply2Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetTotalSupply2KeyFn(clientOptions),
		queryFn: () =>
			getTotalSupply2({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetLocked1 = (
	queryClient: QueryClient,
	clientOptions: Options<GetLocked1Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetLocked1KeyFn(clientOptions),
		queryFn: () =>
			getLocked1({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetLockedEnd = (
	queryClient: QueryClient,
	clientOptions: Options<GetLockedEndData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetLockedEndKeyFn(clientOptions),
		queryFn: () =>
			getLockedEnd({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetLastUserSlope = (
	queryClient: QueryClient,
	clientOptions: Options<GetLastUserSlopeData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetLastUserSlopeKeyFn(clientOptions),
		queryFn: () =>
			getLastUserSlope({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetUserPointHistory = (
	queryClient: QueryClient,
	clientOptions: Options<GetUserPointHistoryData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetUserPointHistoryKeyFn(clientOptions),
		queryFn: () =>
			getUserPointHistory({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseGetUserPointHistoryTs = (
	queryClient: QueryClient,
	clientOptions: Options<GetUserPointHistoryTsData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetUserPointHistoryTsKeyFn(clientOptions),
		queryFn: () =>
			getUserPointHistoryTs({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseGetBalanceOfAtNft = (
	queryClient: QueryClient,
	clientOptions: Options<GetBalanceOfAtNftData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetBalanceOfAtNftKeyFn(clientOptions),
		queryFn: () =>
			getBalanceOfAtNft({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetTotalSupplyAt = (
	queryClient: QueryClient,
	clientOptions: Options<GetTotalSupplyAtData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetTotalSupplyAtKeyFn(clientOptions),
		queryFn: () =>
			getTotalSupplyAt({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetTotalSupplyAtT = (
	queryClient: QueryClient,
	clientOptions: Options<GetTotalSupplyAtTData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetTotalSupplyAtTKeyFn(clientOptions),
		queryFn: () =>
			getTotalSupplyAtT({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetPastVotes2 = (
	queryClient: QueryClient,
	clientOptions: Options<GetPastVotes2Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetPastVotes2KeyFn(clientOptions),
		queryFn: () =>
			getPastVotes2({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetPastTotalSupply = (
	queryClient: QueryClient,
	clientOptions: Options<GetPastTotalSupplyData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetPastTotalSupplyKeyFn(clientOptions),
		queryFn: () =>
			getPastTotalSupply({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const prefetchUseGetVotes2 = (
	queryClient: QueryClient,
	clientOptions: Options<GetVotes2Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetVotes2KeyFn(clientOptions),
		queryFn: () =>
			getVotes2({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetDelegates2 = (
	queryClient: QueryClient,
	clientOptions: Options<GetDelegates2Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetDelegates2KeyFn(clientOptions),
		queryFn: () =>
			getDelegates2({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetTotalWeight2 = (
	queryClient: QueryClient,
	clientOptions: Options<GetTotalWeight2Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetTotalWeight2KeyFn(clientOptions),
		queryFn: () =>
			getTotalWeight2({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseGetWeights2 = (
	queryClient: QueryClient,
	clientOptions: Options<GetWeights2Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseGetWeights2KeyFn(clientOptions),
		queryFn: () =>
			getWeights2({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseIsGauge2 = (
	queryClient: QueryClient,
	clientOptions: Options<IsGauge2Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseIsGauge2KeyFn(clientOptions),
		queryFn: () =>
			isGauge2({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseIsWhitelisted2 = (
	queryClient: QueryClient,
	clientOptions: Options<IsWhitelisted2Data, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseIsWhitelisted2KeyFn(clientOptions),
		queryFn: () =>
			isWhitelisted2({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUseLastVoted = (
	queryClient: QueryClient,
	clientOptions: Options<LastVotedData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UseLastVotedKeyFn(clientOptions),
		queryFn: () =>
			lastVoted({ ...clientOptions }).then((response) => response.data),
	});
export const prefetchUsePoolVoteLength = (
	queryClient: QueryClient,
	clientOptions: Options<PoolVoteLengthData, true>,
) =>
	queryClient.prefetchQuery({
		queryKey: Common.UsePoolVoteLengthKeyFn(clientOptions),
		queryFn: () =>
			poolVoteLength({ ...clientOptions }).then((response) => response.data),
	});
