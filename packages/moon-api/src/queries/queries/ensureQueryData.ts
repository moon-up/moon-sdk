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
export const ensureUseAavev3PoolGetReserveDataData = (
	queryClient: QueryClient,
	clientOptions: Options<Aavev3PoolGetReserveDataData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseAavev3PoolGetReserveDataKeyFn(clientOptions),
		queryFn: () =>
			aavev3PoolGetReserveData({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseAavev3PoolGetUserAccountDataData = (
	queryClient: QueryClient,
	clientOptions: Options<Aavev3PoolGetUserAccountDataData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseAavev3PoolGetUserAccountDataKeyFn(clientOptions),
		queryFn: () =>
			aavev3PoolGetUserAccountData({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseAavev3PoolAddressProviderGetAclAdminData = (
	queryClient: QueryClient,
	clientOptions: Options<Aavev3PoolAddressProviderGetAclAdminData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey:
			Common.UseAavev3PoolAddressProviderGetAclAdminKeyFn(clientOptions),
		queryFn: () =>
			aavev3PoolAddressProviderGetAclAdmin({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseAavev3PoolAddressProviderGetAclManagerData = (
	queryClient: QueryClient,
	clientOptions: Options<Aavev3PoolAddressProviderGetAclManagerData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey:
			Common.UseAavev3PoolAddressProviderGetAclManagerKeyFn(clientOptions),
		queryFn: () =>
			aavev3PoolAddressProviderGetAclManager({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseAavev3PoolAddressProviderGetAddressData = (
	queryClient: QueryClient,
	clientOptions: Options<Aavev3PoolAddressProviderGetAddressData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseAavev3PoolAddressProviderGetAddressKeyFn(clientOptions),
		queryFn: () =>
			aavev3PoolAddressProviderGetAddress({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseAavev3PoolAddressProviderGetMarketIdData = (
	queryClient: QueryClient,
	clientOptions: Options<Aavev3PoolAddressProviderGetMarketIdData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey:
			Common.UseAavev3PoolAddressProviderGetMarketIdKeyFn(clientOptions),
		queryFn: () =>
			aavev3PoolAddressProviderGetMarketId({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseAavev3PoolAddressProviderGetPoolData = (
	queryClient: QueryClient,
	clientOptions: Options<Aavev3PoolAddressProviderGetPoolData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseAavev3PoolAddressProviderGetPoolKeyFn(clientOptions),
		queryFn: () =>
			aavev3PoolAddressProviderGetPool({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseAavev3PoolAddressProviderGetPoolConfiguratorData = (
	queryClient: QueryClient,
	clientOptions: Options<
		Aavev3PoolAddressProviderGetPoolConfiguratorData,
		true
	>,
) =>
	queryClient.ensureQueryData({
		queryKey:
			Common.UseAavev3PoolAddressProviderGetPoolConfiguratorKeyFn(
				clientOptions,
			),
		queryFn: () =>
			aavev3PoolAddressProviderGetPoolConfigurator({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseAavev3PoolAddressProviderGetPriceOracleData = (
	queryClient: QueryClient,
	clientOptions: Options<Aavev3PoolAddressProviderGetPriceOracleData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey:
			Common.UseAavev3PoolAddressProviderGetPriceOracleKeyFn(clientOptions),
		queryFn: () =>
			aavev3PoolAddressProviderGetPriceOracle({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseAavev3PoolAddressProviderRegistryGetAddressesProviderData =
	(
		queryClient: QueryClient,
		clientOptions: Options<
			Aavev3PoolAddressProviderRegistryGetAddressesProviderData,
			true
		>,
	) =>
		queryClient.ensureQueryData({
			queryKey:
				Common.UseAavev3PoolAddressProviderRegistryGetAddressesProviderKeyFn(
					clientOptions,
				),
			queryFn: () =>
				aavev3PoolAddressProviderRegistryGetAddressesProvider({
					...clientOptions,
				}).then((response) => response.data),
		});
export const ensureUseAavev3PoolAddressProviderRegistryGetAtokenTotalSupplyData =
	(
		queryClient: QueryClient,
		clientOptions: Options<
			Aavev3PoolAddressProviderRegistryGetAtokenTotalSupplyData,
			true
		>,
	) =>
		queryClient.ensureQueryData({
			queryKey:
				Common.UseAavev3PoolAddressProviderRegistryGetAtokenTotalSupplyKeyFn(
					clientOptions,
				),
			queryFn: () =>
				aavev3PoolAddressProviderRegistryGetAtokenTotalSupply({
					...clientOptions,
				}).then((response) => response.data),
		});
export const ensureUseAavev3PoolAddressProviderRegistryGetAllAtokensData = (
	queryClient: QueryClient,
	clientOptions: Options<
		Aavev3PoolAddressProviderRegistryGetAllAtokensData,
		true
	>,
) =>
	queryClient.ensureQueryData({
		queryKey:
			Common.UseAavev3PoolAddressProviderRegistryGetAllAtokensKeyFn(
				clientOptions,
			),
		queryFn: () =>
			aavev3PoolAddressProviderRegistryGetAllAtokens({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseGetAllReservesTokensData = (
	queryClient: QueryClient,
	clientOptions: Options<GetAllReservesTokensData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetAllReservesTokensKeyFn(clientOptions),
		queryFn: () =>
			getAllReservesTokens({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseAavev3PoolAddressProviderRegistryGetDebtCeilingData = (
	queryClient: QueryClient,
	clientOptions: Options<
		Aavev3PoolAddressProviderRegistryGetDebtCeilingData,
		true
	>,
) =>
	queryClient.ensureQueryData({
		queryKey:
			Common.UseAavev3PoolAddressProviderRegistryGetDebtCeilingKeyFn(
				clientOptions,
			),
		queryFn: () =>
			aavev3PoolAddressProviderRegistryGetDebtCeiling({
				...clientOptions,
			}).then((response) => response.data),
	});
export const ensureUseAavEv3RewardsGetRewardsByAssetData = (
	queryClient: QueryClient,
	clientOptions: Options<AavEv3RewardsGetRewardsByAssetData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseAavEv3RewardsGetRewardsByAssetKeyFn(clientOptions),
		queryFn: () =>
			aavEv3RewardsGetRewardsByAsset({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseAavEv3RewardsGetUserRewardsData = (
	queryClient: QueryClient,
	clientOptions: Options<AavEv3RewardsGetUserRewardsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseAavEv3RewardsGetUserRewardsKeyFn(clientOptions),
		queryFn: () =>
			aavEv3RewardsGetUserRewards({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseAavEv3RewardsGetRewardsDataData = (
	queryClient: QueryClient,
	clientOptions: Options<AavEv3RewardsGetRewardsDataData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseAavEv3RewardsGetRewardsDataKeyFn(clientOptions),
		queryFn: () =>
			aavEv3RewardsGetRewardsData({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseAavEv3IncentiveDataProviderGetFullReservesDataData = (
	queryClient: QueryClient,
	clientOptions: Options<
		AavEv3IncentiveDataProviderGetFullReservesDataData,
		true
	>,
) =>
	queryClient.ensureQueryData({
		queryKey:
			Common.UseAavEv3IncentiveDataProviderGetFullReservesDataKeyFn(
				clientOptions,
			),
		queryFn: () =>
			aavEv3IncentiveDataProviderGetFullReservesData({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseAavEv3IncentiveDataProviderGetReservesDataData = (
	queryClient: QueryClient,
	clientOptions: Options<AavEv3IncentiveDataProviderGetReservesDataData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey:
			Common.UseAavEv3IncentiveDataProviderGetReservesDataKeyFn(clientOptions),
		queryFn: () =>
			aavEv3IncentiveDataProviderGetReservesData({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseAavEv3IncentiveDataProviderGetUserReservesDataData = (
	queryClient: QueryClient,
	clientOptions: Options<
		AavEv3IncentiveDataProviderGetUserReservesDataData,
		true
	>,
) =>
	queryClient.ensureQueryData({
		queryKey:
			Common.UseAavEv3IncentiveDataProviderGetUserReservesDataKeyFn(
				clientOptions,
			),
		queryFn: () =>
			aavEv3IncentiveDataProviderGetUserReservesData({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseAaveV3UiPoolDataProviderEthCurrencyUnitData = (
	queryClient: QueryClient,
	clientOptions: Options<AaveV3UiPoolDataProviderEthCurrencyUnitData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey:
			Common.UseAaveV3UiPoolDataProviderEthCurrencyUnitKeyFn(clientOptions),
		queryFn: () =>
			aaveV3UiPoolDataProviderEthCurrencyUnit({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseGetReservesDataData = (
	queryClient: QueryClient,
	clientOptions: Options<GetReservesDataData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetReservesDataKeyFn(clientOptions),
		queryFn: () =>
			getReservesData({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseAaveV3UiPoolDataProviderReservesListData = (
	queryClient: QueryClient,
	clientOptions: Options<AaveV3UiPoolDataProviderReservesListData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey:
			Common.UseAaveV3UiPoolDataProviderReservesListKeyFn(clientOptions),
		queryFn: () =>
			aaveV3UiPoolDataProviderReservesList({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseAaveV3UiPoolDataProviderUserReservesDataData = (
	queryClient: QueryClient,
	clientOptions: Options<AaveV3UiPoolDataProviderUserReservesDataData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey:
			Common.UseAaveV3UiPoolDataProviderUserReservesDataKeyFn(clientOptions),
		queryFn: () =>
			aaveV3UiPoolDataProviderUserReservesData({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseAaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorData =
	(
		queryClient: QueryClient,
		clientOptions: Options<
			AaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorData,
			true
		>,
	) =>
		queryClient.ensureQueryData({
			queryKey:
				Common.UseAaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorKeyFn(
					clientOptions,
				),
			queryFn: () =>
				aaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregator(
					{ ...clientOptions },
				).then((response) => response.data),
		});
export const ensureUseAaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorData =
	(
		queryClient: QueryClient,
		clientOptions: Options<
			AaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorData,
			true
		>,
	) =>
		queryClient.ensureQueryData({
			queryKey:
				Common.UseAaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorKeyFn(
					clientOptions,
				),
			queryFn: () =>
				aaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregator({
					...clientOptions,
				}).then((response) => response.data),
		});
export const ensureUseAaveV3WalletBalanceOfData = (
	queryClient: QueryClient,
	clientOptions: Options<AaveV3WalletBalanceOfData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseAaveV3WalletBalanceOfKeyFn(clientOptions),
		queryFn: () =>
			aaveV3WalletBalanceOf({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseAaveV3WalletBatchBalanceOfData = (
	queryClient: QueryClient,
	clientOptions: Options<AaveV3WalletBatchBalanceOfData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseAaveV3WalletBatchBalanceOfKeyFn(clientOptions),
		queryFn: () =>
			aaveV3WalletBatchBalanceOf({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseAaveV3WalletUserWalletBalancesData = (
	queryClient: QueryClient,
	clientOptions: Options<AaveV3WalletUserWalletBalancesData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseAaveV3WalletUserWalletBalancesKeyFn(clientOptions),
		queryFn: () =>
			aaveV3WalletUserWalletBalances({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseAccountsListEthereumAccountsData = (
	queryClient: QueryClient,
	clientOptions: Options<AccountsListEthereumAccountsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseAccountsListEthereumAccountsKeyFn(clientOptions),
		queryFn: () =>
			accountsListEthereumAccounts({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseAccountsGetEthreumAccountData = (
	queryClient: QueryClient,
	clientOptions: Options<AccountsGetEthreumAccountData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseAccountsGetEthreumAccountKeyFn(clientOptions),
		queryFn: () =>
			accountsGetEthreumAccount({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseAccountsEthereumGetNonceData = (
	queryClient: QueryClient,
	clientOptions: Options<AccountsEthereumGetNonceData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseAccountsEthereumGetNonceKeyFn(clientOptions),
		queryFn: () =>
			accountsEthereumGetNonce({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseAccountsEthereumGetNativeBalanceData = (
	queryClient: QueryClient,
	clientOptions: Options<AccountsEthereumGetNativeBalanceData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseAccountsEthereumGetNativeBalanceKeyFn(clientOptions),
		queryFn: () =>
			accountsEthereumGetNativeBalance({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseAccountsSuggestGasPriceData = (
	queryClient: QueryClient,
	clientOptions: Options<AccountsSuggestGasPriceData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseAccountsSuggestGasPriceKeyFn(clientOptions),
		queryFn: () =>
			accountsSuggestGasPrice({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseAccountsExportEthreumAccountData = (
	queryClient: QueryClient,
	clientOptions: Options<AccountsExportEthreumAccountData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseAccountsExportEthreumAccountKeyFn(clientOptions),
		queryFn: () =>
			accountsExportEthreumAccount({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseBitcoinListAccountsData = (
	queryClient: QueryClient,
	clientOptions: Options<BitcoinListAccountsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseBitcoinListAccountsKeyFn(clientOptions),
		queryFn: () =>
			bitcoinListAccounts({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseBitcoinBitcoinGetAccountData = (
	queryClient: QueryClient,
	clientOptions: Options<BitcoinBitcoinGetAccountData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseBitcoinBitcoinGetAccountKeyFn(clientOptions),
		queryFn: () =>
			bitcoinBitcoinGetAccount({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseBitcoinCashListAccountsData = (
	queryClient: QueryClient,
	clientOptions: Options<BitcoinCashListAccountsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseBitcoinCashListAccountsKeyFn(clientOptions),
		queryFn: () =>
			bitcoinCashListAccounts({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseBitcoinCashBitcoinCashGetAccountData = (
	queryClient: QueryClient,
	clientOptions: Options<BitcoinCashBitcoinCashGetAccountData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseBitcoinCashBitcoinCashGetAccountKeyFn(clientOptions),
		queryFn: () =>
			bitcoinCashBitcoinCashGetAccount({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseChartsGetChartAnalysisData = (
	queryClient: QueryClient,
	clientOptions: Options<ChartsGetChartAnalysisData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseChartsGetChartAnalysisKeyFn(clientOptions),
		queryFn: () =>
			chartsGetChartAnalysis({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseComponentsGetComponentsData = (
	queryClient: QueryClient,
	clientOptions: Options<ComponentsGetComponentsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseComponentsGetComponentsKeyFn(clientOptions),
		queryFn: () =>
			componentsGetComponents({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseComponentsGetComponentData = (
	queryClient: QueryClient,
	clientOptions: Options<ComponentsGetComponentData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseComponentsGetComponentKeyFn(clientOptions),
		queryFn: () =>
			componentsGetComponent({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseComponentsSearchComponentsData = (
	queryClient: QueryClient,
	clientOptions: Options<ComponentsSearchComponentsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseComponentsSearchComponentsKeyFn(clientOptions),
		queryFn: () =>
			componentsSearchComponents({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseComponentsGetComponentCapabilitiesDescriptionData = (
	queryClient: QueryClient,
	clientOptions: Options<
		ComponentsGetComponentCapabilitiesDescriptionData,
		true
	>,
) =>
	queryClient.ensureQueryData({
		queryKey:
			Common.UseComponentsGetComponentCapabilitiesDescriptionKeyFn(
				clientOptions,
			),
		queryFn: () =>
			componentsGetComponentCapabilitiesDescription({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseCosmosCosmosListAccountsData = (
	queryClient: QueryClient,
	clientOptions: Options<CosmosCosmosListAccountsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseCosmosCosmosListAccountsKeyFn(clientOptions),
		queryFn: () =>
			cosmosCosmosListAccounts({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseCosmosCosmosGetAccountData = (
	queryClient: QueryClient,
	clientOptions: Options<CosmosCosmosGetAccountData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseCosmosCosmosGetAccountKeyFn(clientOptions),
		queryFn: () =>
			cosmosCosmosGetAccount({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseDataGetWalletTokenBalancesData = (
	queryClient: QueryClient,
	clientOptions: Options<DataGetWalletTokenBalancesData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseDataGetWalletTokenBalancesKeyFn(clientOptions),
		queryFn: () =>
			dataGetWalletTokenBalances({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseDataGetWalletTransactionHistoryData = (
	queryClient: QueryClient,
	clientOptions: Options<DataGetWalletTransactionHistoryData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseDataGetWalletTransactionHistoryKeyFn(clientOptions),
		queryFn: () =>
			dataGetWalletTransactionHistory({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseDataGetTokensMetadataData = (
	queryClient: QueryClient,
	clientOptions: Options<DataGetTokensMetadataData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseDataGetTokensMetadataKeyFn(clientOptions),
		queryFn: () =>
			dataGetTokensMetadata({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseDataGetWalletNfTsData = (
	queryClient: QueryClient,
	clientOptions: Options<DataGetWalletNfTsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseDataGetWalletNfTsKeyFn(clientOptions),
		queryFn: () =>
			dataGetWalletNfTs({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseDataGetUserWalletPortfolioData = (
	queryClient: QueryClient,
	clientOptions: Options<DataGetUserWalletPortfolioData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseDataGetUserWalletPortfolioKeyFn(clientOptions),
		queryFn: () =>
			dataGetUserWalletPortfolio({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseDataGetPortfolioFetchStatusData = (
	queryClient: QueryClient,
	clientOptions: Options<DataGetPortfolioFetchStatusData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseDataGetPortfolioFetchStatusKeyFn(clientOptions),
		queryFn: () =>
			dataGetPortfolioFetchStatus({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseDogeCoinListAccountsData = (
	queryClient: QueryClient,
	clientOptions: Options<DogeCoinListAccountsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseDogeCoinListAccountsKeyFn(clientOptions),
		queryFn: () =>
			dogeCoinListAccounts({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseDogecoinDogeCoinGetAccountDetailsData = (
	queryClient: QueryClient,
	clientOptions: Options<DogecoinDogeCoinGetAccountDetailsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseDogecoinDogeCoinGetAccountDetailsKeyFn(clientOptions),
		queryFn: () =>
			dogecoinDogeCoinGetAccountDetails({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseListEosAccountsData = (
	queryClient: QueryClient,
	clientOptions: Options<ListEosAccountsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseListEosAccountsKeyFn(clientOptions),
		queryFn: () =>
			listEosAccounts({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetEosAccountData = (
	queryClient: QueryClient,
	clientOptions: Options<GetEosAccountData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetEosAccountKeyFn(clientOptions),
		queryFn: () =>
			getEosAccount({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseErc20GetErc20TokenDecimalsData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc20GetErc20TokenDecimalsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc20GetErc20TokenDecimalsKeyFn(clientOptions),
		queryFn: () =>
			erc20GetErc20TokenDecimals({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc20GetErc20TokenSymbolData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc20GetErc20TokenSymbolData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc20GetErc20TokenSymbolKeyFn(clientOptions),
		queryFn: () =>
			erc20GetErc20TokenSymbol({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc20GetErc20TokenNameData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc20GetErc20TokenNameData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc20GetErc20TokenNameKeyFn(clientOptions),
		queryFn: () =>
			erc20GetErc20TokenName({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc20GetErc20TokenTotalSupplyData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc20GetErc20TokenTotalSupplyData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc20GetErc20TokenTotalSupplyKeyFn(clientOptions),
		queryFn: () =>
			erc20GetErc20TokenTotalSupply({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc20GetErc20TokenBalanceData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc20GetErc20TokenBalanceData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc20GetErc20TokenBalanceKeyFn(clientOptions),
		queryFn: () =>
			erc20GetErc20TokenBalance({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc20GetErc20TokenAllowanceData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc20GetErc20TokenAllowanceData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc20GetErc20TokenAllowanceKeyFn(clientOptions),
		queryFn: () =>
			erc20GetErc20TokenAllowance({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc4626GetErc4626AssetData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626AssetData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc4626GetErc4626AssetKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626Asset({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc4626GetErc4626TotalAssetsData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626TotalAssetsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc4626GetErc4626TotalAssetsKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626TotalAssets({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc4626GetErc4626ConvertToSharesData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626ConvertToSharesData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc4626GetErc4626ConvertToSharesKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626ConvertToShares({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc4626GetErc4626ConvertToAssetsData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626ConvertToAssetsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc4626GetErc4626ConvertToAssetsKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626ConvertToAssets({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc4626GetErc4626MaxDepositData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626MaxDepositData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc4626GetErc4626MaxDepositKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626MaxDeposit({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc4626GetErc4626MaxMintData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626MaxMintData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc4626GetErc4626MaxMintKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626MaxMint({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc4626GetErc4626MaxWithdrawData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626MaxWithdrawData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc4626GetErc4626MaxWithdrawKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626MaxWithdraw({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc4626GetErc4626MaxRedeemData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626MaxRedeemData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc4626GetErc4626MaxRedeemKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626MaxRedeem({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc4626GetErc4626PreviewDepositData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626PreviewDepositData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc4626GetErc4626PreviewDepositKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626PreviewDeposit({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc4626GetErc4626PreviewMintData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626PreviewMintData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc4626GetErc4626PreviewMintKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626PreviewMint({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc4626GetErc4626PreviewWithdrawData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626PreviewWithdrawData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc4626GetErc4626PreviewWithdrawKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626PreviewWithdraw({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc4626GetErc4626PreviewRedeemData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626PreviewRedeemData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc4626GetErc4626PreviewRedeemKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626PreviewRedeem({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc4626GetErc4626TotalSupplyData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626TotalSupplyData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc4626GetErc4626TotalSupplyKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626TotalSupply({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc4626GetErc4626BalanceOfData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626BalanceOfData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc4626GetErc4626BalanceOfKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626BalanceOf({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc4626GetErc4626AllowanceData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc4626GetErc4626AllowanceData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc4626GetErc4626AllowanceKeyFn(clientOptions),
		queryFn: () =>
			erc4626GetErc4626Allowance({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc721GetErc721BalanceOfData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc721GetErc721BalanceOfData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc721GetErc721BalanceOfKeyFn(clientOptions),
		queryFn: () =>
			erc721GetErc721BalanceOf({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc721GetErc721OwnerOfData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc721GetErc721OwnerOfData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc721GetErc721OwnerOfKeyFn(clientOptions),
		queryFn: () =>
			erc721GetErc721OwnerOf({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc721GetErc721NameData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc721GetErc721NameData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc721GetErc721NameKeyFn(clientOptions),
		queryFn: () =>
			erc721GetErc721Name({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc721GetErc721SymbolData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc721GetErc721SymbolData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc721GetErc721SymbolKeyFn(clientOptions),
		queryFn: () =>
			erc721GetErc721Symbol({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc721GetErc721TokenUriData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc721GetErc721TokenUriData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc721GetErc721TokenUriKeyFn(clientOptions),
		queryFn: () =>
			erc721GetErc721TokenUri({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc721GetErc721ApprovedData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc721GetErc721ApprovedData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc721GetErc721ApprovedKeyFn(clientOptions),
		queryFn: () =>
			erc721GetErc721Approved({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseErc721GetErc721IsApprovedForAllData = (
	queryClient: QueryClient,
	clientOptions: Options<Erc721GetErc721IsApprovedForAllData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseErc721GetErc721IsApprovedForAllKeyFn(clientOptions),
		queryFn: () =>
			erc721GetErc721IsApprovedForAll({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseFinancialDatasetsGetCompanyFactsData = (
	queryClient: QueryClient,
	clientOptions: Options<FinancialDatasetsGetCompanyFactsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseFinancialDatasetsGetCompanyFactsKeyFn(clientOptions),
		queryFn: () =>
			financialDatasetsGetCompanyFacts({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseFinancialDatasetsGetIncomeStatementsData = (
	queryClient: QueryClient,
	clientOptions: Options<FinancialDatasetsGetIncomeStatementsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey:
			Common.UseFinancialDatasetsGetIncomeStatementsKeyFn(clientOptions),
		queryFn: () =>
			financialDatasetsGetIncomeStatements({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseFinancialDatasetsGetBalanceSheetsData = (
	queryClient: QueryClient,
	clientOptions: Options<FinancialDatasetsGetBalanceSheetsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseFinancialDatasetsGetBalanceSheetsKeyFn(clientOptions),
		queryFn: () =>
			financialDatasetsGetBalanceSheets({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseFinancialDatasetsGetCashFlowStatementsData = (
	queryClient: QueryClient,
	clientOptions: Options<FinancialDatasetsGetCashFlowStatementsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey:
			Common.UseFinancialDatasetsGetCashFlowStatementsKeyFn(clientOptions),
		queryFn: () =>
			financialDatasetsGetCashFlowStatements({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseFinancialDatasetsGetSegmentedRevenuesData = (
	queryClient: QueryClient,
	clientOptions: Options<FinancialDatasetsGetSegmentedRevenuesData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey:
			Common.UseFinancialDatasetsGetSegmentedRevenuesKeyFn(clientOptions),
		queryFn: () =>
			financialDatasetsGetSegmentedRevenues({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseFinancialDatasetsGetAllFinancialsData = (
	queryClient: QueryClient,
	clientOptions: Options<FinancialDatasetsGetAllFinancialsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseFinancialDatasetsGetAllFinancialsKeyFn(clientOptions),
		queryFn: () =>
			financialDatasetsGetAllFinancials({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseFinancialDatasetsGetAvailableTickersData = (
	queryClient: QueryClient,
	clientOptions: Options<FinancialDatasetsGetAvailableTickersData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey:
			Common.UseFinancialDatasetsGetAvailableTickersKeyFn(clientOptions),
		queryFn: () =>
			financialDatasetsGetAvailableTickers({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseFinancialDatasetsGetInsiderTransactionsData = (
	queryClient: QueryClient,
	clientOptions: Options<FinancialDatasetsGetInsiderTransactionsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey:
			Common.UseFinancialDatasetsGetInsiderTransactionsKeyFn(clientOptions),
		queryFn: () =>
			financialDatasetsGetInsiderTransactions({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseFinancialDatasetsGetOptionsChainData = (
	queryClient: QueryClient,
	clientOptions: Options<FinancialDatasetsGetOptionsChainData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseFinancialDatasetsGetOptionsChainKeyFn(clientOptions),
		queryFn: () =>
			financialDatasetsGetOptionsChain({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseFinancialDatasetsGetPricesData = (
	queryClient: QueryClient,
	clientOptions: Options<FinancialDatasetsGetPricesData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseFinancialDatasetsGetPricesKeyFn(clientOptions),
		queryFn: () =>
			financialDatasetsGetPrices({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseFinancialDatasetsGetPriceSnapshotData = (
	queryClient: QueryClient,
	clientOptions: Options<FinancialDatasetsGetPriceSnapshotData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseFinancialDatasetsGetPriceSnapshotKeyFn(clientOptions),
		queryFn: () =>
			financialDatasetsGetPriceSnapshot({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseJupiterGetProgramIdToLabelData = (
	queryClient: QueryClient,
	clientOptions: Options<JupiterGetProgramIdToLabelData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseJupiterGetProgramIdToLabelKeyFn(clientOptions),
		queryFn: () =>
			jupiterGetProgramIdToLabel({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseJupiterGetIndexedRouteMapData = (
	queryClient: QueryClient,
	clientOptions: Options<JupiterGetIndexedRouteMapData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseJupiterGetIndexedRouteMapKeyFn(clientOptions),
		queryFn: () =>
			jupiterGetIndexedRouteMap({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseJupiterGetTokensData = (
	queryClient: QueryClient,
	clientOptions: Options<JupiterGetTokensData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseJupiterGetTokensKeyFn(clientOptions),
		queryFn: () =>
			jupiterGetTokens({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseLendingPoolGetFlashLoanPremiumTotalData = (
	queryClient: QueryClient,
	clientOptions: Options<LendingPoolGetFlashLoanPremiumTotalData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseLendingPoolGetFlashLoanPremiumTotalKeyFn(clientOptions),
		queryFn: () =>
			lendingPoolGetFlashLoanPremiumTotal({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseLendingPoolGetLendingPoolRevisionData = (
	queryClient: QueryClient,
	clientOptions: Options<LendingPoolGetLendingPoolRevisionData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseLendingPoolGetLendingPoolRevisionKeyFn(clientOptions),
		queryFn: () =>
			lendingPoolGetLendingPoolRevision({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseLendingPoolGetMaxNumberReservesData = (
	queryClient: QueryClient,
	clientOptions: Options<LendingPoolGetMaxNumberReservesData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseLendingPoolGetMaxNumberReservesKeyFn(clientOptions),
		queryFn: () =>
			lendingPoolGetMaxNumberReserves({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseLendingPoolGetMaxStableRateBorrowSizePercentData = (
	queryClient: QueryClient,
	clientOptions: Options<
		LendingPoolGetMaxStableRateBorrowSizePercentData,
		true
	>,
) =>
	queryClient.ensureQueryData({
		queryKey:
			Common.UseLendingPoolGetMaxStableRateBorrowSizePercentKeyFn(
				clientOptions,
			),
		queryFn: () =>
			lendingPoolGetMaxStableRateBorrowSizePercent({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseLendingPoolGetReserveDataData = (
	queryClient: QueryClient,
	clientOptions: Options<LendingPoolGetReserveDataData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseLendingPoolGetReserveDataKeyFn(clientOptions),
		queryFn: () =>
			lendingPoolGetReserveData({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseLendingPoolGetUserAccountDataData = (
	queryClient: QueryClient,
	clientOptions: Options<LendingPoolGetUserAccountDataData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseLendingPoolGetUserAccountDataKeyFn(clientOptions),
		queryFn: () =>
			lendingPoolGetUserAccountData({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseLendingPoolGetReservesListData = (
	queryClient: QueryClient,
	clientOptions: Options<LendingPoolGetReservesListData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseLendingPoolGetReservesListKeyFn(clientOptions),
		queryFn: () =>
			lendingPoolGetReservesList({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseLendingPoolGetAddressesProviderData = (
	queryClient: QueryClient,
	clientOptions: Options<LendingPoolGetAddressesProviderData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseLendingPoolGetAddressesProviderKeyFn(clientOptions),
		queryFn: () =>
			lendingPoolGetAddressesProvider({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseLendingPoolIsPausedData = (
	queryClient: QueryClient,
	clientOptions: Options<LendingPoolIsPausedData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseLendingPoolIsPausedKeyFn(clientOptions),
		queryFn: () =>
			lendingPoolIsPaused({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseLeveragerGetAddressesProviderData = (
	queryClient: QueryClient,
	clientOptions: Options<LeveragerGetAddressesProviderData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseLeveragerGetAddressesProviderKeyFn(clientOptions),
		queryFn: () =>
			leveragerGetAddressesProvider({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseLeveragerGetDefaultAdminRoleData = (
	queryClient: QueryClient,
	clientOptions: Options<LeveragerGetDefaultAdminRoleData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseLeveragerGetDefaultAdminRoleKeyFn(clientOptions),
		queryFn: () =>
			leveragerGetDefaultAdminRole({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseLeveragerGetLendingPoolData = (
	queryClient: QueryClient,
	clientOptions: Options<LeveragerGetLendingPoolData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseLeveragerGetLendingPoolKeyFn(clientOptions),
		queryFn: () =>
			leveragerGetLendingPool({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseLeveragerGetMinHfData = (
	queryClient: QueryClient,
	clientOptions: Options<LeveragerGetMinHfData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseLeveragerGetMinHfKeyFn(clientOptions),
		queryFn: () =>
			leveragerGetMinHf({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseLeveragerIsPausedData = (
	queryClient: QueryClient,
	clientOptions: Options<LeveragerIsPausedData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseLeveragerIsPausedKeyFn(clientOptions),
		queryFn: () =>
			leveragerIsPaused({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseLeveragerGetWethData = (
	queryClient: QueryClient,
	clientOptions: Options<LeveragerGetWethData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseLeveragerGetWethKeyFn(clientOptions),
		queryFn: () =>
			leveragerGetWeth({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseLeveragerGetRoleAdminData = (
	queryClient: QueryClient,
	clientOptions: Options<LeveragerGetRoleAdminData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseLeveragerGetRoleAdminKeyFn(clientOptions),
		queryFn: () =>
			leveragerGetRoleAdmin({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseLeveragerHasRoleData = (
	queryClient: QueryClient,
	clientOptions: Options<LeveragerHasRoleData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseLeveragerHasRoleKeyFn(clientOptions),
		queryFn: () =>
			leveragerHasRole({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseLeveragerSupportsInterfaceData = (
	queryClient: QueryClient,
	clientOptions: Options<LeveragerSupportsInterfaceData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseLeveragerSupportsInterfaceKeyFn(clientOptions),
		queryFn: () =>
			leveragerSupportsInterface({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseLifiGetQuoteData = (
	queryClient: QueryClient,
	clientOptions: Options<LifiGetQuoteData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseLifiGetQuoteKeyFn(clientOptions),
		queryFn: () =>
			lifiGetQuote({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseLifiGetStatusData = (
	queryClient: QueryClient,
	clientOptions: Options<LifiGetStatusData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseLifiGetStatusKeyFn(clientOptions),
		queryFn: () =>
			lifiGetStatus({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseLifiGetChainsData = (
	queryClient: QueryClient,
	clientOptions: Options<LifiGetChainsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseLifiGetChainsKeyFn(clientOptions),
		queryFn: () =>
			lifiGetChains({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetToolsData = (
	queryClient: QueryClient,
	clientOptions: Options<GetToolsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetToolsKeyFn(clientOptions),
		queryFn: () =>
			getTools({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseLifiGetTokensData = (
	queryClient: QueryClient,
	clientOptions: Options<unknown, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseLifiGetTokensKeyFn(clientOptions),
		queryFn: () =>
			lifiGetTokens({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseLifiGetTokenDetailsData = (
	queryClient: QueryClient,
	clientOptions: Options<LifiGetTokenDetailsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseLifiGetTokenDetailsKeyFn(clientOptions),
		queryFn: () =>
			lifiGetTokenDetails({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseLifiGetConnectionsData = (
	queryClient: QueryClient,
	clientOptions: Options<LifiGetConnectionsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseLifiGetConnectionsKeyFn(clientOptions),
		queryFn: () =>
			lifiGetConnections({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseLifiGetAllPossibleConnectionsData = (
	queryClient: QueryClient,
	clientOptions: Options<LifiGetAllPossibleConnectionsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseLifiGetAllPossibleConnectionsKeyFn(clientOptions),
		queryFn: () =>
			lifiGetAllPossibleConnections({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseListLitecoinAccountsData = (
	queryClient: QueryClient,
	clientOptions: Options<ListLitecoinAccountsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseListLitecoinAccountsKeyFn(clientOptions),
		queryFn: () =>
			listLitecoinAccounts({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseLitecoinGetLitecoinAccountData = (
	queryClient: QueryClient,
	clientOptions: Options<LitecoinGetLitecoinAccountData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseLitecoinGetLitecoinAccountKeyFn(clientOptions),
		queryFn: () =>
			litecoinGetLitecoinAccount({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseGetAssetsData = (
	queryClient: QueryClient,
	clientOptions: Options<GetAssetsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetAssetsKeyFn(clientOptions),
		queryFn: () =>
			getAssets({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetAssetByAddressData = (
	queryClient: QueryClient,
	clientOptions: Options<GetAssetByAddressData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetAssetByAddressKeyFn(clientOptions),
		queryFn: () =>
			getAssetByAddress({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetPoolsData = (
	queryClient: QueryClient,
	clientOptions: Options<GetPoolsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetPoolsKeyFn(clientOptions),
		queryFn: () =>
			getPools({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetPoolByAddressData = (
	queryClient: QueryClient,
	clientOptions: Options<GetPoolByAddressData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetPoolByAddressKeyFn(clientOptions),
		queryFn: () =>
			getPoolByAddress({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetPoolsByTypeData = (
	queryClient: QueryClient,
	clientOptions: Options<GetPoolsByTypeData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetPoolsByTypeKeyFn(clientOptions),
		queryFn: () =>
			getPoolsByType({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetTopAprPoolsData = (
	queryClient: QueryClient,
	clientOptions: Options<GetTopAprPoolsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetTopAprPoolsKeyFn(clientOptions),
		queryFn: () =>
			getTopAprPools({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetTotalValueLockedData = (
	queryClient: QueryClient,
	clientOptions: Options<GetTotalValueLockedData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetTotalValueLockedKeyFn(clientOptions),
		queryFn: () =>
			getTotalValueLocked({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseCalculateOptimalVoteDistributionData = (
	queryClient: QueryClient,
	clientOptions: Options<CalculateOptimalVoteDistributionData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseCalculateOptimalVoteDistributionKeyFn(clientOptions),
		queryFn: () =>
			calculateOptimalVoteDistribution({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseGetBalanceOfData = (
	queryClient: QueryClient,
	clientOptions: Options<GetBalanceOfData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetBalanceOfKeyFn(clientOptions),
		queryFn: () =>
			getBalanceOf({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetOwnerOfData = (
	queryClient: QueryClient,
	clientOptions: Options<GetOwnerOfData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetOwnerOfKeyFn(clientOptions),
		queryFn: () =>
			getOwnerOf({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetTokenUriData = (
	queryClient: QueryClient,
	clientOptions: Options<GetTokenUriData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetTokenUriKeyFn(clientOptions),
		queryFn: () =>
			getTokenUri({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetLockDetailsData = (
	queryClient: QueryClient,
	clientOptions: Options<GetLockDetailsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetLockDetailsKeyFn(clientOptions),
		queryFn: () =>
			getLockDetails({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetTotalSupplyData = (
	queryClient: QueryClient,
	clientOptions: Options<GetTotalSupplyData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetTotalSupplyKeyFn(clientOptions),
		queryFn: () =>
			getTotalSupply({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetTokenOfOwnerByIndexData = (
	queryClient: QueryClient,
	clientOptions: Options<GetTokenOfOwnerByIndexData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetTokenOfOwnerByIndexKeyFn(clientOptions),
		queryFn: () =>
			getTokenOfOwnerByIndex({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseGetTokenByIndexData = (
	queryClient: QueryClient,
	clientOptions: Options<GetTokenByIndexData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetTokenByIndexKeyFn(clientOptions),
		queryFn: () =>
			getTokenByIndex({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetNameData = (
	queryClient: QueryClient,
	clientOptions: Options<GetNameData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetNameKeyFn(clientOptions),
		queryFn: () =>
			getName({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetSymbolData = (
	queryClient: QueryClient,
	clientOptions: Options<GetSymbolData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetSymbolKeyFn(clientOptions),
		queryFn: () =>
			getSymbol({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetApprovedData = (
	queryClient: QueryClient,
	clientOptions: Options<GetApprovedData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetApprovedKeyFn(clientOptions),
		queryFn: () =>
			getApproved({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseIsApprovedForAllData = (
	queryClient: QueryClient,
	clientOptions: Options<IsApprovedForAllData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseIsApprovedForAllKeyFn(clientOptions),
		queryFn: () =>
			isApprovedForAll({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetBalanceOfNftData = (
	queryClient: QueryClient,
	clientOptions: Options<GetBalanceOfNftData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetBalanceOfNftKeyFn(clientOptions),
		queryFn: () =>
			getBalanceOfNft({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetBalanceOfNftAtData = (
	queryClient: QueryClient,
	clientOptions: Options<GetBalanceOfNftAtData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetBalanceOfNftAtKeyFn(clientOptions),
		queryFn: () =>
			getBalanceOfNftAt({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetTotalNftsMintedData = (
	queryClient: QueryClient,
	clientOptions: Options<GetTotalNftsMintedData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetTotalNftsMintedKeyFn(clientOptions),
		queryFn: () =>
			getTotalNftsMinted({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseGetDelegatesData = (
	queryClient: QueryClient,
	clientOptions: Options<GetDelegatesData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetDelegatesKeyFn(clientOptions),
		queryFn: () =>
			getDelegates({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetVotesData = (
	queryClient: QueryClient,
	clientOptions: Options<GetVotesData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetVotesKeyFn(clientOptions),
		queryFn: () =>
			getVotes({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetPastVotesData = (
	queryClient: QueryClient,
	clientOptions: Options<GetPastVotesData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetPastVotesKeyFn(clientOptions),
		queryFn: () =>
			getPastVotes({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetVestedPayoutData = (
	queryClient: QueryClient,
	clientOptions: Options<GetVestedPayoutData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetVestedPayoutKeyFn(clientOptions),
		queryFn: () =>
			getVestedPayout({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetVestedPayoutAtTimeData = (
	queryClient: QueryClient,
	clientOptions: Options<GetVestedPayoutAtTimeData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetVestedPayoutAtTimeKeyFn(clientOptions),
		queryFn: () =>
			getVestedPayoutAtTime({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseGetVestingPayoutData = (
	queryClient: QueryClient,
	clientOptions: Options<GetVestingPayoutData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetVestingPayoutKeyFn(clientOptions),
		queryFn: () =>
			getVestingPayout({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetVestingPeriodData = (
	queryClient: QueryClient,
	clientOptions: Options<GetVestingPeriodData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetVestingPeriodKeyFn(clientOptions),
		queryFn: () =>
			getVestingPeriod({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetFactoryData = (
	queryClient: QueryClient,
	clientOptions: Options<GetFactoryData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetFactoryKeyFn(clientOptions),
		queryFn: () =>
			getFactory({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetWethData = (
	queryClient: QueryClient,
	clientOptions: Options<GetWethData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetWethKeyFn(clientOptions),
		queryFn: () =>
			getWeth({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetAmountOutData = (
	queryClient: QueryClient,
	clientOptions: Options<GetAmountOutData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetAmountOutKeyFn(clientOptions),
		queryFn: () =>
			getAmountOut({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetAmountsOutData = (
	queryClient: QueryClient,
	clientOptions: Options<GetAmountsOutData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetAmountsOutKeyFn(clientOptions),
		queryFn: () =>
			getAmountsOut({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetTotalWeightData = (
	queryClient: QueryClient,
	clientOptions: Options<GetTotalWeightData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetTotalWeightKeyFn(clientOptions),
		queryFn: () =>
			getTotalWeight({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetWeightsData = (
	queryClient: QueryClient,
	clientOptions: Options<GetWeightsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetWeightsKeyFn(clientOptions),
		queryFn: () =>
			getWeights({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseIsGaugeData = (
	queryClient: QueryClient,
	clientOptions: Options<IsGaugeData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseIsGaugeKeyFn(clientOptions),
		queryFn: () =>
			isGauge({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseIsWhitelistedData = (
	queryClient: QueryClient,
	clientOptions: Options<IsWhitelistedData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseIsWhitelistedKeyFn(clientOptions),
		queryFn: () =>
			isWhitelisted({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetLastVotedData = (
	queryClient: QueryClient,
	clientOptions: Options<GetLastVotedData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetLastVotedKeyFn(clientOptions),
		queryFn: () =>
			getLastVoted({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetPoolVoteLengthData = (
	queryClient: QueryClient,
	clientOptions: Options<GetPoolVoteLengthData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetPoolVoteLengthKeyFn(clientOptions),
		queryFn: () =>
			getPoolVoteLength({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetJobResultData = (
	queryClient: QueryClient,
	clientOptions: Options<GetJobResultData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetJobResultKeyFn(clientOptions),
		queryFn: () =>
			getJobResult({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetScheduledJobsData = (
	queryClient: QueryClient,
	clientOptions: Options<GetScheduledJobsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetScheduledJobsKeyFn(clientOptions),
		queryFn: () =>
			getScheduledJobs({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseListJobsData = (
	queryClient: QueryClient,
	clientOptions: Options<ListJobsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseListJobsKeyFn(clientOptions),
		queryFn: () =>
			listJobs({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetJobData = (
	queryClient: QueryClient,
	clientOptions: Options<GetJobData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetJobKeyFn(clientOptions),
		queryFn: () =>
			getJob({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseListFlowsData = (
	queryClient: QueryClient,
	clientOptions: Options<ListFlowsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseListFlowsKeyFn(clientOptions),
		queryFn: () =>
			listFlows({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetFlowData = (
	queryClient: QueryClient,
	clientOptions: Options<GetFlowData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetFlowKeyFn(clientOptions),
		queryFn: () =>
			getFlow({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseListUserDefinedFunctionsData = (
	queryClient: QueryClient,
	clientOptions: Options<ListUserDefinedFunctionsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseListUserDefinedFunctionsKeyFn(clientOptions),
		queryFn: () =>
			listUserDefinedFunctions({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseGetNotificationsData = (
	queryClient: QueryClient,
	clientOptions: Options<GetNotificationsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetNotificationsKeyFn(clientOptions),
		queryFn: () =>
			getNotifications({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseOdosGetSupportedChainsData = (
	queryClient: QueryClient,
	clientOptions: Options<OdosGetSupportedChainsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseOdosGetSupportedChainsKeyFn(clientOptions),
		queryFn: () =>
			odosGetSupportedChains({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseOdosGetContractInfoData = (
	queryClient: QueryClient,
	clientOptions: Options<OdosGetContractInfoData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseOdosGetContractInfoKeyFn(clientOptions),
		queryFn: () =>
			odosGetContractInfo({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseOdosGetRouterAddressData = (
	queryClient: QueryClient,
	clientOptions: Options<OdosGetRouterAddressData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseOdosGetRouterAddressKeyFn(clientOptions),
		queryFn: () =>
			odosGetRouterAddress({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseOdosGetExecutorAddressData = (
	queryClient: QueryClient,
	clientOptions: Options<OdosGetExecutorAddressData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseOdosGetExecutorAddressKeyFn(clientOptions),
		queryFn: () =>
			odosGetExecutorAddress({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseOdosGetLiquiditySourcesData = (
	queryClient: QueryClient,
	clientOptions: Options<OdosGetLiquiditySourcesData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseOdosGetLiquiditySourcesKeyFn(clientOptions),
		queryFn: () =>
			odosGetLiquiditySources({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseOdosGetSupportedTokensData = (
	queryClient: QueryClient,
	clientOptions: Options<OdosGetSupportedTokensData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseOdosGetSupportedTokensKeyFn(clientOptions),
		queryFn: () =>
			odosGetSupportedTokens({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseOdosGetCurrentBlockData = (
	queryClient: QueryClient,
	clientOptions: Options<OdosGetCurrentBlockData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseOdosGetCurrentBlockKeyFn(clientOptions),
		queryFn: () =>
			odosGetCurrentBlock({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseOnRamperGetSupportedCurrenciesData = (
	queryClient: QueryClient,
	clientOptions: Options<OnRamperGetSupportedCurrenciesData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseOnRamperGetSupportedCurrenciesKeyFn(clientOptions),
		queryFn: () =>
			onRamperGetSupportedCurrencies({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseOnRamperGetSupportedPaymentTypesData = (
	queryClient: QueryClient,
	clientOptions: Options<OnRamperGetSupportedPaymentTypesData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseOnRamperGetSupportedPaymentTypesKeyFn(clientOptions),
		queryFn: () =>
			onRamperGetSupportedPaymentTypes({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseOnRamperGetSupportedPaymentTypesFiatData = (
	queryClient: QueryClient,
	clientOptions: Options<OnRamperGetSupportedPaymentTypesFiatData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey:
			Common.UseOnRamperGetSupportedPaymentTypesFiatKeyFn(clientOptions),
		queryFn: () =>
			onRamperGetSupportedPaymentTypesFiat({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseOnRamperGetSupportedDefaultsAllData = (
	queryClient: QueryClient,
	clientOptions: Options<OnRamperGetSupportedDefaultsAllData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseOnRamperGetSupportedDefaultsAllKeyFn(clientOptions),
		queryFn: () =>
			onRamperGetSupportedDefaultsAll({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseOnRamperGetSupportedAssetsData = (
	queryClient: QueryClient,
	clientOptions: Options<OnRamperGetSupportedAssetsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseOnRamperGetSupportedAssetsKeyFn(clientOptions),
		queryFn: () =>
			onRamperGetSupportedAssets({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseOnRamperGetSupportedOnRampsAllData = (
	queryClient: QueryClient,
	clientOptions: Options<OnRamperGetSupportedOnRampsAllData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseOnRamperGetSupportedOnRampsAllKeyFn(clientOptions),
		queryFn: () =>
			onRamperGetSupportedOnRampsAll({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseOnRamperGetQuotesBuyData = (
	queryClient: QueryClient,
	clientOptions: Options<OnRamperGetQuotesBuyData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseOnRamperGetQuotesBuyKeyFn(clientOptions),
		queryFn: () =>
			onRamperGetQuotesBuy({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseOnRamperGetQuotesSellData = (
	queryClient: QueryClient,
	clientOptions: Options<OnRamperGetQuotesSellData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseOnRamperGetQuotesSellKeyFn(clientOptions),
		queryFn: () =>
			onRamperGetQuotesSell({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseGetCollectionData = (
	queryClient: QueryClient,
	clientOptions: Options<GetCollectionData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetCollectionKeyFn(clientOptions),
		queryFn: () =>
			getCollection({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetNftData = (
	queryClient: QueryClient,
	clientOptions: Options<GetNftData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetNftKeyFn(clientOptions),
		queryFn: () =>
			getNft({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetMessageData = (
	queryClient: QueryClient,
	clientOptions: Options<unknown, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetMessageKeyFn(clientOptions),
		queryFn: () =>
			getMessage({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetMarketsData = (
	queryClient: QueryClient,
	clientOptions: Options<GetMarketsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetMarketsKeyFn(clientOptions),
		queryFn: () =>
			getMarkets({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetMarketData = (
	queryClient: QueryClient,
	clientOptions: Options<GetMarketData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetMarketKeyFn(clientOptions),
		queryFn: () =>
			getMarket({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetOrderBookData = (
	queryClient: QueryClient,
	clientOptions: Options<GetOrderBookData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetOrderBookKeyFn(clientOptions),
		queryFn: () =>
			getOrderBook({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetOpenOrdersData = (
	queryClient: QueryClient,
	clientOptions: Options<GetOpenOrdersData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetOpenOrdersKeyFn(clientOptions),
		queryFn: () =>
			getOpenOrders({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetOrderData = (
	queryClient: QueryClient,
	clientOptions: Options<GetOrderData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetOrderKeyFn(clientOptions),
		queryFn: () =>
			getOrder({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetTradesData = (
	queryClient: QueryClient,
	clientOptions: Options<GetTradesData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetTradesKeyFn(clientOptions),
		queryFn: () =>
			getTrades({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetNotifications1Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetNotifications1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetNotifications1KeyFn(clientOptions),
		queryFn: () =>
			getNotifications1({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetBalanceAllowanceData = (
	queryClient: QueryClient,
	clientOptions: Options<GetBalanceAllowanceData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetBalanceAllowanceKeyFn(clientOptions),
		queryFn: () =>
			getBalanceAllowance({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseGetPricesHistoryData = (
	queryClient: QueryClient,
	clientOptions: Options<GetPricesHistoryData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetPricesHistoryKeyFn(clientOptions),
		queryFn: () =>
			getPricesHistory({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetMarketTradeEventsData = (
	queryClient: QueryClient,
	clientOptions: Options<GetMarketTradeEventsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetMarketTradeEventsKeyFn(clientOptions),
		queryFn: () =>
			getMarketTradeEvents({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseGetPools1Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetPools1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetPools1KeyFn(clientOptions),
		queryFn: () =>
			getPools1({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetPoolByAddress1Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetPoolByAddress1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetPoolByAddress1KeyFn(clientOptions),
		queryFn: () =>
			getPoolByAddress1({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetPoolsByType1Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetPoolsByType1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetPoolsByType1KeyFn(clientOptions),
		queryFn: () =>
			getPoolsByType1({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetTopAprPools1Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetTopAprPools1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetTopAprPools1KeyFn(clientOptions),
		queryFn: () =>
			getTopAprPools1({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetTokensData = (
	queryClient: QueryClient,
	clientOptions: Options<GetTokensData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetTokensKeyFn(clientOptions),
		queryFn: () =>
			getTokens({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetInfoData = (
	queryClient: QueryClient,
	clientOptions: Options<GetInfoData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetInfoKeyFn(clientOptions),
		queryFn: () =>
			getInfo({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetTotalValueLocked1Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetTotalValueLocked1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetTotalValueLocked1KeyFn(clientOptions),
		queryFn: () =>
			getTotalValueLocked1({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseCalculateOptimalVoteDistribution1Data = (
	queryClient: QueryClient,
	clientOptions: Options<CalculateOptimalVoteDistribution1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseCalculateOptimalVoteDistribution1KeyFn(clientOptions),
		queryFn: () =>
			calculateOptimalVoteDistribution1({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseGetBalanceOf1Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetBalanceOf1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetBalanceOf1KeyFn(clientOptions),
		queryFn: () =>
			getBalanceOf1({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetOwnerOf1Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetOwnerOf1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetOwnerOf1KeyFn(clientOptions),
		queryFn: () =>
			getOwnerOf1({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetTokenUri1Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetTokenUri1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetTokenUri1KeyFn(clientOptions),
		queryFn: () =>
			getTokenUri1({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetTotalSupply1Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetTotalSupply1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetTotalSupply1KeyFn(clientOptions),
		queryFn: () =>
			getTotalSupply1({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetBalanceOfNft1Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetBalanceOfNft1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetBalanceOfNft1KeyFn(clientOptions),
		queryFn: () =>
			getBalanceOfNft1({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetLockedData = (
	queryClient: QueryClient,
	clientOptions: Options<GetLockedData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetLockedKeyFn(clientOptions),
		queryFn: () =>
			getLocked({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetVotes1Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetVotes1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetVotes1KeyFn(clientOptions),
		queryFn: () =>
			getVotes1({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetPastVotes1Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetPastVotes1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetPastVotes1KeyFn(clientOptions),
		queryFn: () =>
			getPastVotes1({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetDelegates1Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetDelegates1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetDelegates1KeyFn(clientOptions),
		queryFn: () =>
			getDelegates1({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetFactory1Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetFactory1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetFactory1KeyFn(clientOptions),
		queryFn: () =>
			getFactory1({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetAmountOut1Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetAmountOut1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetAmountOut1KeyFn(clientOptions),
		queryFn: () =>
			getAmountOut1({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetAmountsOut1Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetAmountsOut1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetAmountsOut1KeyFn(clientOptions),
		queryFn: () =>
			getAmountsOut1({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetReservesData = (
	queryClient: QueryClient,
	clientOptions: Options<GetReservesData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetReservesKeyFn(clientOptions),
		queryFn: () =>
			getReserves({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseIsPairData = (
	queryClient: QueryClient,
	clientOptions: Options<IsPairData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseIsPairKeyFn(clientOptions),
		queryFn: () =>
			isPair({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUsePairForData = (
	queryClient: QueryClient,
	clientOptions: Options<PairForData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UsePairForKeyFn(clientOptions),
		queryFn: () =>
			pairFor({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseQuoteAddLiquidityData = (
	queryClient: QueryClient,
	clientOptions: Options<QuoteAddLiquidityData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseQuoteAddLiquidityKeyFn(clientOptions),
		queryFn: () =>
			quoteAddLiquidity({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseQuoteRemoveLiquidityData = (
	queryClient: QueryClient,
	clientOptions: Options<QuoteRemoveLiquidityData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseQuoteRemoveLiquidityKeyFn(clientOptions),
		queryFn: () =>
			quoteRemoveLiquidity({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseSortTokensData = (
	queryClient: QueryClient,
	clientOptions: Options<SortTokensData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseSortTokensKeyFn(clientOptions),
		queryFn: () =>
			sortTokens({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetWeth1Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetWeth1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetWeth1KeyFn(clientOptions),
		queryFn: () =>
			getWeth1({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetTotalWeight1Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetTotalWeight1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetTotalWeight1KeyFn(clientOptions),
		queryFn: () =>
			getTotalWeight1({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetWeights1Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetWeights1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetWeights1KeyFn(clientOptions),
		queryFn: () =>
			getWeights1({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseIsGauge1Data = (
	queryClient: QueryClient,
	clientOptions: Options<IsGauge1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseIsGauge1KeyFn(clientOptions),
		queryFn: () =>
			isGauge1({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseIsWhitelisted1Data = (
	queryClient: QueryClient,
	clientOptions: Options<IsWhitelisted1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseIsWhitelisted1KeyFn(clientOptions),
		queryFn: () =>
			isWhitelisted1({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetLastVoted1Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetLastVoted1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetLastVoted1KeyFn(clientOptions),
		queryFn: () =>
			getLastVoted1({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseListRippleAccountsData = (
	queryClient: QueryClient,
	clientOptions: Options<ListRippleAccountsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseListRippleAccountsKeyFn(clientOptions),
		queryFn: () =>
			listRippleAccounts({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseGetRippleAccountData = (
	queryClient: QueryClient,
	clientOptions: Options<GetRippleAccountData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetRippleAccountKeyFn(clientOptions),
		queryFn: () =>
			getRippleAccount({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseListSolanaAccountsData = (
	queryClient: QueryClient,
	clientOptions: Options<ListSolanaAccountsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseListSolanaAccountsKeyFn(clientOptions),
		queryFn: () =>
			listSolanaAccounts({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseGetSolanaAccountData = (
	queryClient: QueryClient,
	clientOptions: Options<GetSolanaAccountData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetSolanaAccountKeyFn(clientOptions),
		queryFn: () =>
			getSolanaAccount({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetFusionsData = (
	queryClient: QueryClient,
	clientOptions: Options<GetFusionsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetFusionsKeyFn(clientOptions),
		queryFn: () =>
			getFusions({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetFusionByAddressData = (
	queryClient: QueryClient,
	clientOptions: Options<GetFusionByAddressData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetFusionByAddressKeyFn(clientOptions),
		queryFn: () =>
			getFusionByAddress({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseGetFusionsByTypeData = (
	queryClient: QueryClient,
	clientOptions: Options<GetFusionsByTypeData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetFusionsByTypeKeyFn(clientOptions),
		queryFn: () =>
			getFusionsByType({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetTopAprFusionsData = (
	queryClient: QueryClient,
	clientOptions: Options<GetTopAprFusionsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetTopAprFusionsKeyFn(clientOptions),
		queryFn: () =>
			getTopAprFusions({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetTotalValueLocked2Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetTotalValueLocked2Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetTotalValueLocked2KeyFn(clientOptions),
		queryFn: () =>
			getTotalValueLocked2({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseGetTopTokensData = (
	queryClient: QueryClient,
	clientOptions: Options<GetTopTokensData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetTopTokensKeyFn(clientOptions),
		queryFn: () =>
			getTopTokens({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetTopPairsData = (
	queryClient: QueryClient,
	clientOptions: Options<GetTopPairsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetTopPairsKeyFn(clientOptions),
		queryFn: () =>
			getTopPairs({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseCalculateOptimalVoteDistribution2Data = (
	queryClient: QueryClient,
	clientOptions: Options<CalculateOptimalVoteDistribution2Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseCalculateOptimalVoteDistribution2KeyFn(clientOptions),
		queryFn: () =>
			calculateOptimalVoteDistribution2({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseGetQuoteData = (
	queryClient: QueryClient,
	clientOptions: Options<GetQuoteData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetQuoteKeyFn(clientOptions),
		queryFn: () =>
			getQuote({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetGasPriceData = (
	queryClient: QueryClient,
	clientOptions: Options<GetGasPriceData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetGasPriceKeyFn(clientOptions),
		queryFn: () =>
			getGasPrice({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetSupportedChainsData = (
	queryClient: QueryClient,
	clientOptions: Options<GetSupportedChainsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetSupportedChainsKeyFn(clientOptions),
		queryFn: () =>
			getSupportedChains({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseGetSupportedProvidersData = (
	queryClient: QueryClient,
	clientOptions: Options<GetSupportedProvidersData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetSupportedProvidersKeyFn(clientOptions),
		queryFn: () =>
			getSupportedProviders({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseTronListTronAccountsData = (
	queryClient: QueryClient,
	clientOptions: Options<TronListTronAccountsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseTronListTronAccountsKeyFn(clientOptions),
		queryFn: () =>
			tronListTronAccounts({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseTronGetTronAccountData = (
	queryClient: QueryClient,
	clientOptions: Options<TronGetTronAccountData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseTronGetTronAccountKeyFn(clientOptions),
		queryFn: () =>
			tronGetTronAccount({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseGetWeth2Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetWeth2Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetWeth2KeyFn(clientOptions),
		queryFn: () =>
			getWeth2({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUsePositionsData = (
	queryClient: QueryClient,
	clientOptions: Options<PositionsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UsePositionsKeyFn(clientOptions),
		queryFn: () =>
			positions({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseTokenOfOwnerByIndexData = (
	queryClient: QueryClient,
	clientOptions: Options<TokenOfOwnerByIndexData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseTokenOfOwnerByIndexKeyFn(clientOptions),
		queryFn: () =>
			tokenOfOwnerByIndex({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseBalanceOfData = (
	queryClient: QueryClient,
	clientOptions: Options<BalanceOfData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseBalanceOfKeyFn(clientOptions),
		queryFn: () =>
			balanceOf({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseDomainSeparatorData = (
	queryClient: QueryClient,
	clientOptions: Options<DomainSeparatorData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseDomainSeparatorKeyFn(clientOptions),
		queryFn: () =>
			domainSeparator({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUsePermitTypehashData = (
	queryClient: QueryClient,
	clientOptions: Options<PermitTypehashData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UsePermitTypehashKeyFn(clientOptions),
		queryFn: () =>
			permitTypehash({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseWeth9Data = (
	queryClient: QueryClient,
	clientOptions: Options<Weth9Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseWeth9KeyFn(clientOptions),
		queryFn: () =>
			weth9({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseFactoryData = (
	queryClient: QueryClient,
	clientOptions: Options<FactoryData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseFactoryKeyFn(clientOptions),
		queryFn: () =>
			factory({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseNameData = (
	queryClient: QueryClient,
	clientOptions: Options<NameData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseNameKeyFn(clientOptions),
		queryFn: () => name({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseSymbolData = (
	queryClient: QueryClient,
	clientOptions: Options<SymbolData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseSymbolKeyFn(clientOptions),
		queryFn: () =>
			symbol({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseTokenUriData = (
	queryClient: QueryClient,
	clientOptions: Options<TokenUriData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseTokenUriKeyFn(clientOptions),
		queryFn: () =>
			tokenUri({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseBaseUriData = (
	queryClient: QueryClient,
	clientOptions: Options<BaseUriData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseBaseUriKeyFn(clientOptions),
		queryFn: () =>
			baseUri({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseOwnerOfData = (
	queryClient: QueryClient,
	clientOptions: Options<OwnerOfData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseOwnerOfKeyFn(clientOptions),
		queryFn: () =>
			ownerOf({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetApproved1Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetApproved1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetApproved1KeyFn(clientOptions),
		queryFn: () =>
			getApproved1({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseIsApprovedForAll1Data = (
	queryClient: QueryClient,
	clientOptions: Options<IsApprovedForAll1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseIsApprovedForAll1KeyFn(clientOptions),
		queryFn: () =>
			isApprovedForAll1({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseTotalSupplyData = (
	queryClient: QueryClient,
	clientOptions: Options<TotalSupplyData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseTotalSupplyKeyFn(clientOptions),
		queryFn: () =>
			totalSupply({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseTokenByIndexData = (
	queryClient: QueryClient,
	clientOptions: Options<TokenByIndexData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseTokenByIndexKeyFn(clientOptions),
		queryFn: () =>
			tokenByIndex({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseSupportsInterfaceData = (
	queryClient: QueryClient,
	clientOptions: Options<SupportsInterfaceData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseSupportsInterfaceKeyFn(clientOptions),
		queryFn: () =>
			supportsInterface({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseWeth91Data = (
	queryClient: QueryClient,
	clientOptions: Options<Weth91Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseWeth91KeyFn(clientOptions),
		queryFn: () =>
			weth91({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseFactory1Data = (
	queryClient: QueryClient,
	clientOptions: Options<Factory1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseFactory1KeyFn(clientOptions),
		queryFn: () =>
			factory1({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetBalanceOf2Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetBalanceOf2Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetBalanceOf2KeyFn(clientOptions),
		queryFn: () =>
			getBalanceOf2({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetOwnerOf2Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetOwnerOf2Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetOwnerOf2KeyFn(clientOptions),
		queryFn: () =>
			getOwnerOf2({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetTokenUri2Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetTokenUri2Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetTokenUri2KeyFn(clientOptions),
		queryFn: () =>
			getTokenUri2({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetApproved2Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetApproved2Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetApproved2KeyFn(clientOptions),
		queryFn: () =>
			getApproved2({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseIsApprovedForAll2Data = (
	queryClient: QueryClient,
	clientOptions: Options<IsApprovedForAll2Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseIsApprovedForAll2KeyFn(clientOptions),
		queryFn: () =>
			isApprovedForAll2({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetBalanceOfNft2Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetBalanceOfNft2Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetBalanceOfNft2KeyFn(clientOptions),
		queryFn: () =>
			getBalanceOfNft2({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetTotalSupply2Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetTotalSupply2Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetTotalSupply2KeyFn(clientOptions),
		queryFn: () =>
			getTotalSupply2({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetLocked1Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetLocked1Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetLocked1KeyFn(clientOptions),
		queryFn: () =>
			getLocked1({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetLockedEndData = (
	queryClient: QueryClient,
	clientOptions: Options<GetLockedEndData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetLockedEndKeyFn(clientOptions),
		queryFn: () =>
			getLockedEnd({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetLastUserSlopeData = (
	queryClient: QueryClient,
	clientOptions: Options<GetLastUserSlopeData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetLastUserSlopeKeyFn(clientOptions),
		queryFn: () =>
			getLastUserSlope({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetUserPointHistoryData = (
	queryClient: QueryClient,
	clientOptions: Options<GetUserPointHistoryData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetUserPointHistoryKeyFn(clientOptions),
		queryFn: () =>
			getUserPointHistory({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseGetUserPointHistoryTsData = (
	queryClient: QueryClient,
	clientOptions: Options<GetUserPointHistoryTsData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetUserPointHistoryTsKeyFn(clientOptions),
		queryFn: () =>
			getUserPointHistoryTs({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseGetBalanceOfAtNftData = (
	queryClient: QueryClient,
	clientOptions: Options<GetBalanceOfAtNftData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetBalanceOfAtNftKeyFn(clientOptions),
		queryFn: () =>
			getBalanceOfAtNft({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetTotalSupplyAtData = (
	queryClient: QueryClient,
	clientOptions: Options<GetTotalSupplyAtData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetTotalSupplyAtKeyFn(clientOptions),
		queryFn: () =>
			getTotalSupplyAt({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetTotalSupplyAtTData = (
	queryClient: QueryClient,
	clientOptions: Options<GetTotalSupplyAtTData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetTotalSupplyAtTKeyFn(clientOptions),
		queryFn: () =>
			getTotalSupplyAtT({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetPastVotes2Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetPastVotes2Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetPastVotes2KeyFn(clientOptions),
		queryFn: () =>
			getPastVotes2({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetPastTotalSupplyData = (
	queryClient: QueryClient,
	clientOptions: Options<GetPastTotalSupplyData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetPastTotalSupplyKeyFn(clientOptions),
		queryFn: () =>
			getPastTotalSupply({ ...clientOptions }).then(
				(response) => response.data,
			),
	});
export const ensureUseGetVotes2Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetVotes2Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetVotes2KeyFn(clientOptions),
		queryFn: () =>
			getVotes2({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetDelegates2Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetDelegates2Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetDelegates2KeyFn(clientOptions),
		queryFn: () =>
			getDelegates2({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetTotalWeight2Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetTotalWeight2Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetTotalWeight2KeyFn(clientOptions),
		queryFn: () =>
			getTotalWeight2({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseGetWeights2Data = (
	queryClient: QueryClient,
	clientOptions: Options<GetWeights2Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseGetWeights2KeyFn(clientOptions),
		queryFn: () =>
			getWeights2({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseIsGauge2Data = (
	queryClient: QueryClient,
	clientOptions: Options<IsGauge2Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseIsGauge2KeyFn(clientOptions),
		queryFn: () =>
			isGauge2({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseIsWhitelisted2Data = (
	queryClient: QueryClient,
	clientOptions: Options<IsWhitelisted2Data, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseIsWhitelisted2KeyFn(clientOptions),
		queryFn: () =>
			isWhitelisted2({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUseLastVotedData = (
	queryClient: QueryClient,
	clientOptions: Options<LastVotedData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UseLastVotedKeyFn(clientOptions),
		queryFn: () =>
			lastVoted({ ...clientOptions }).then((response) => response.data),
	});
export const ensureUsePoolVoteLengthData = (
	queryClient: QueryClient,
	clientOptions: Options<PoolVoteLengthData, true>,
) =>
	queryClient.ensureQueryData({
		queryKey: Common.UsePoolVoteLengthKeyFn(clientOptions),
		queryFn: () =>
			poolVoteLength({ ...clientOptions }).then((response) => response.data),
	});
