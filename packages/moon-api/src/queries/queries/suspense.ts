// generated with @7nohe/openapi-react-query-codegen@2.0.0-beta.3

import type { Options } from "@hey-api/client-fetch";
import { type UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
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
	AavEv3IncentiveDataProviderGetFullReservesDataError,
	AavEv3IncentiveDataProviderGetReservesDataData,
	AavEv3IncentiveDataProviderGetReservesDataError,
	AavEv3IncentiveDataProviderGetUserReservesDataData,
	AavEv3IncentiveDataProviderGetUserReservesDataError,
	Aavev3PoolAddressProviderGetAclAdminData,
	Aavev3PoolAddressProviderGetAclAdminError,
	Aavev3PoolAddressProviderGetAclManagerData,
	Aavev3PoolAddressProviderGetAclManagerError,
	Aavev3PoolAddressProviderGetAddressData,
	Aavev3PoolAddressProviderGetAddressError,
	Aavev3PoolAddressProviderGetMarketIdData,
	Aavev3PoolAddressProviderGetMarketIdError,
	Aavev3PoolAddressProviderGetPoolConfiguratorData,
	Aavev3PoolAddressProviderGetPoolConfiguratorError,
	Aavev3PoolAddressProviderGetPoolData,
	Aavev3PoolAddressProviderGetPoolError,
	Aavev3PoolAddressProviderGetPriceOracleData,
	Aavev3PoolAddressProviderGetPriceOracleError,
	Aavev3PoolAddressProviderRegistryGetAddressesProviderData,
	Aavev3PoolAddressProviderRegistryGetAddressesProviderError,
	Aavev3PoolAddressProviderRegistryGetAllAtokensData,
	Aavev3PoolAddressProviderRegistryGetAllAtokensError,
	Aavev3PoolAddressProviderRegistryGetAtokenTotalSupplyData,
	Aavev3PoolAddressProviderRegistryGetAtokenTotalSupplyError,
	Aavev3PoolAddressProviderRegistryGetDebtCeilingData,
	Aavev3PoolAddressProviderRegistryGetDebtCeilingError,
	Aavev3PoolGetReserveDataData,
	Aavev3PoolGetReserveDataError,
	Aavev3PoolGetUserAccountDataData,
	Aavev3PoolGetUserAccountDataError,
	AavEv3RewardsGetRewardsByAssetData,
	AavEv3RewardsGetRewardsByAssetError,
	AavEv3RewardsGetRewardsDataData,
	AavEv3RewardsGetRewardsDataError,
	AavEv3RewardsGetUserRewardsData,
	AavEv3RewardsGetUserRewardsError,
	AaveV3UiPoolDataProviderEthCurrencyUnitData,
	AaveV3UiPoolDataProviderEthCurrencyUnitError,
	AaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorData,
	AaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorError,
	AaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorData,
	AaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorError,
	AaveV3UiPoolDataProviderReservesListData,
	AaveV3UiPoolDataProviderReservesListError,
	AaveV3UiPoolDataProviderUserReservesDataData,
	AaveV3UiPoolDataProviderUserReservesDataError,
	AaveV3WalletBalanceOfData,
	AaveV3WalletBalanceOfError,
	AaveV3WalletBatchBalanceOfData,
	AaveV3WalletBatchBalanceOfError,
	AaveV3WalletUserWalletBalancesData,
	AaveV3WalletUserWalletBalancesError,
	AccountsEthereumGetNativeBalanceData,
	AccountsEthereumGetNativeBalanceError,
	AccountsEthereumGetNonceData,
	AccountsEthereumGetNonceError,
	AccountsExportEthreumAccountData,
	AccountsExportEthreumAccountError,
	AccountsGetEthreumAccountData,
	AccountsGetEthreumAccountError,
	AccountsListEthereumAccountsData,
	AccountsListEthereumAccountsError,
	AccountsSuggestGasPriceData,
	AccountsSuggestGasPriceError,
	BalanceOfData,
	BalanceOfError,
	BaseUriData,
	BaseUriError,
	BitcoinBitcoinGetAccountData,
	BitcoinBitcoinGetAccountError,
	BitcoinCashBitcoinCashGetAccountData,
	BitcoinCashBitcoinCashGetAccountError,
	BitcoinCashListAccountsData,
	BitcoinCashListAccountsError,
	BitcoinListAccountsData,
	BitcoinListAccountsError,
	CalculateOptimalVoteDistribution1Data,
	CalculateOptimalVoteDistribution1Error,
	CalculateOptimalVoteDistribution2Data,
	CalculateOptimalVoteDistribution2Error,
	CalculateOptimalVoteDistributionData,
	CalculateOptimalVoteDistributionError,
	ChartsGetChartAnalysisData,
	ChartsGetChartAnalysisError,
	ComponentsGetComponentCapabilitiesDescriptionData,
	ComponentsGetComponentCapabilitiesDescriptionError,
	ComponentsGetComponentData,
	ComponentsGetComponentError,
	ComponentsGetComponentsData,
	ComponentsGetComponentsError,
	ComponentsSearchComponentsData,
	ComponentsSearchComponentsError,
	CosmosCosmosGetAccountData,
	CosmosCosmosGetAccountError,
	CosmosCosmosListAccountsData,
	CosmosCosmosListAccountsError,
	DataGetPortfolioFetchStatusData,
	DataGetPortfolioFetchStatusError,
	DataGetTokensMetadataData,
	DataGetTokensMetadataError,
	DataGetUserWalletPortfolioData,
	DataGetUserWalletPortfolioError,
	DataGetWalletNfTsData,
	DataGetWalletNfTsError,
	DataGetWalletTokenBalancesData,
	DataGetWalletTokenBalancesError,
	DataGetWalletTransactionHistoryData,
	DataGetWalletTransactionHistoryError,
	DogecoinDogeCoinGetAccountDetailsData,
	DogecoinDogeCoinGetAccountDetailsError,
	DogeCoinListAccountsData,
	DogeCoinListAccountsError,
	DomainSeparatorData,
	DomainSeparatorError,
	Erc20GetErc20TokenAllowanceData,
	Erc20GetErc20TokenAllowanceError,
	Erc20GetErc20TokenBalanceData,
	Erc20GetErc20TokenBalanceError,
	Erc20GetErc20TokenDecimalsData,
	Erc20GetErc20TokenDecimalsError,
	Erc20GetErc20TokenNameData,
	Erc20GetErc20TokenNameError,
	Erc20GetErc20TokenSymbolData,
	Erc20GetErc20TokenSymbolError,
	Erc20GetErc20TokenTotalSupplyData,
	Erc20GetErc20TokenTotalSupplyError,
	Erc4626GetErc4626AllowanceData,
	Erc4626GetErc4626AllowanceError,
	Erc4626GetErc4626AssetData,
	Erc4626GetErc4626AssetError,
	Erc4626GetErc4626BalanceOfData,
	Erc4626GetErc4626BalanceOfError,
	Erc4626GetErc4626ConvertToAssetsData,
	Erc4626GetErc4626ConvertToAssetsError,
	Erc4626GetErc4626ConvertToSharesData,
	Erc4626GetErc4626ConvertToSharesError,
	Erc4626GetErc4626MaxDepositData,
	Erc4626GetErc4626MaxDepositError,
	Erc4626GetErc4626MaxMintData,
	Erc4626GetErc4626MaxMintError,
	Erc4626GetErc4626MaxRedeemData,
	Erc4626GetErc4626MaxRedeemError,
	Erc4626GetErc4626MaxWithdrawData,
	Erc4626GetErc4626MaxWithdrawError,
	Erc4626GetErc4626PreviewDepositData,
	Erc4626GetErc4626PreviewDepositError,
	Erc4626GetErc4626PreviewMintData,
	Erc4626GetErc4626PreviewMintError,
	Erc4626GetErc4626PreviewRedeemData,
	Erc4626GetErc4626PreviewRedeemError,
	Erc4626GetErc4626PreviewWithdrawData,
	Erc4626GetErc4626PreviewWithdrawError,
	Erc4626GetErc4626TotalAssetsData,
	Erc4626GetErc4626TotalAssetsError,
	Erc4626GetErc4626TotalSupplyData,
	Erc4626GetErc4626TotalSupplyError,
	Erc721GetErc721ApprovedData,
	Erc721GetErc721ApprovedError,
	Erc721GetErc721BalanceOfData,
	Erc721GetErc721BalanceOfError,
	Erc721GetErc721IsApprovedForAllData,
	Erc721GetErc721IsApprovedForAllError,
	Erc721GetErc721NameData,
	Erc721GetErc721NameError,
	Erc721GetErc721OwnerOfData,
	Erc721GetErc721OwnerOfError,
	Erc721GetErc721SymbolData,
	Erc721GetErc721SymbolError,
	Erc721GetErc721TokenUriData,
	Erc721GetErc721TokenUriError,
	Factory1Data,
	Factory1Error,
	FactoryData,
	FactoryError,
	FinancialDatasetsGetAllFinancialsData,
	FinancialDatasetsGetAllFinancialsError,
	FinancialDatasetsGetAvailableTickersData,
	FinancialDatasetsGetAvailableTickersError,
	FinancialDatasetsGetBalanceSheetsData,
	FinancialDatasetsGetBalanceSheetsError,
	FinancialDatasetsGetCashFlowStatementsData,
	FinancialDatasetsGetCashFlowStatementsError,
	FinancialDatasetsGetCompanyFactsData,
	FinancialDatasetsGetCompanyFactsError,
	FinancialDatasetsGetIncomeStatementsData,
	FinancialDatasetsGetIncomeStatementsError,
	FinancialDatasetsGetInsiderTransactionsData,
	FinancialDatasetsGetInsiderTransactionsError,
	FinancialDatasetsGetOptionsChainData,
	FinancialDatasetsGetOptionsChainError,
	FinancialDatasetsGetPricesData,
	FinancialDatasetsGetPricesError,
	FinancialDatasetsGetPriceSnapshotData,
	FinancialDatasetsGetPriceSnapshotError,
	FinancialDatasetsGetSegmentedRevenuesData,
	FinancialDatasetsGetSegmentedRevenuesError,
	GetAllReservesTokensData,
	GetAllReservesTokensError,
	GetAmountOut1Data,
	GetAmountOut1Error,
	GetAmountOutData,
	GetAmountOutError,
	GetAmountsOut1Data,
	GetAmountsOut1Error,
	GetAmountsOutData,
	GetAmountsOutError,
	GetApproved1Data,
	GetApproved1Error,
	GetApproved2Data,
	GetApproved2Error,
	GetApprovedData,
	GetApprovedError,
	GetAssetByAddressData,
	GetAssetByAddressError,
	GetAssetsData,
	GetAssetsError,
	GetBalanceAllowanceData,
	GetBalanceAllowanceError,
	GetBalanceOf1Data,
	GetBalanceOf1Error,
	GetBalanceOf2Data,
	GetBalanceOf2Error,
	GetBalanceOfAtNftData,
	GetBalanceOfAtNftError,
	GetBalanceOfData,
	GetBalanceOfError,
	GetBalanceOfNft1Data,
	GetBalanceOfNft1Error,
	GetBalanceOfNft2Data,
	GetBalanceOfNft2Error,
	GetBalanceOfNftAtData,
	GetBalanceOfNftAtError,
	GetBalanceOfNftData,
	GetBalanceOfNftError,
	GetCollectionData,
	GetCollectionError,
	GetDelegates1Data,
	GetDelegates1Error,
	GetDelegates2Data,
	GetDelegates2Error,
	GetDelegatesData,
	GetDelegatesError,
	GetEosAccountData,
	GetEosAccountError,
	GetFactory1Data,
	GetFactory1Error,
	GetFactoryData,
	GetFactoryError,
	GetFlowData,
	GetFlowError,
	GetFusionByAddressData,
	GetFusionByAddressError,
	GetFusionsByTypeData,
	GetFusionsByTypeError,
	GetFusionsData,
	GetFusionsError,
	GetGasPriceData,
	GetGasPriceError,
	GetInfoData,
	GetInfoError,
	GetJobData,
	GetJobError,
	GetJobResultData,
	GetJobResultError,
	GetLastUserSlopeData,
	GetLastUserSlopeError,
	GetLastVoted1Data,
	GetLastVoted1Error,
	GetLastVotedData,
	GetLastVotedError,
	GetLockDetailsData,
	GetLockDetailsError,
	GetLocked1Data,
	GetLocked1Error,
	GetLockedData,
	GetLockedEndData,
	GetLockedEndError,
	GetLockedError,
	GetMarketData,
	GetMarketError,
	GetMarketsData,
	GetMarketsError,
	GetMarketTradeEventsData,
	GetMarketTradeEventsError,
	GetMessageError,
	GetNameData,
	GetNameError,
	GetNftData,
	GetNftError,
	GetNotifications1Data,
	GetNotifications1Error,
	GetNotificationsData,
	GetNotificationsError,
	GetOpenOrdersData,
	GetOpenOrdersError,
	GetOrderBookData,
	GetOrderBookError,
	GetOrderData,
	GetOrderError,
	GetOwnerOf1Data,
	GetOwnerOf1Error,
	GetOwnerOf2Data,
	GetOwnerOf2Error,
	GetOwnerOfData,
	GetOwnerOfError,
	GetPastTotalSupplyData,
	GetPastTotalSupplyError,
	GetPastVotes1Data,
	GetPastVotes1Error,
	GetPastVotes2Data,
	GetPastVotes2Error,
	GetPastVotesData,
	GetPastVotesError,
	GetPoolByAddress1Data,
	GetPoolByAddress1Error,
	GetPoolByAddressData,
	GetPoolByAddressError,
	GetPools1Data,
	GetPools1Error,
	GetPoolsByType1Data,
	GetPoolsByType1Error,
	GetPoolsByTypeData,
	GetPoolsByTypeError,
	GetPoolsData,
	GetPoolsError,
	GetPoolVoteLengthData,
	GetPoolVoteLengthError,
	GetPricesHistoryData,
	GetPricesHistoryError,
	GetQuoteData,
	GetQuoteError,
	GetReservesData,
	GetReservesDataData,
	GetReservesDataError,
	GetReservesError,
	GetRippleAccountData,
	GetRippleAccountError,
	GetScheduledJobsData,
	GetScheduledJobsError,
	GetSolanaAccountData,
	GetSolanaAccountError,
	GetSupportedChainsData,
	GetSupportedChainsError,
	GetSupportedProvidersData,
	GetSupportedProvidersError,
	GetSymbolData,
	GetSymbolError,
	GetTokenByIndexData,
	GetTokenByIndexError,
	GetTokenOfOwnerByIndexData,
	GetTokenOfOwnerByIndexError,
	GetTokensData,
	GetTokensError,
	GetTokenUri1Data,
	GetTokenUri1Error,
	GetTokenUri2Data,
	GetTokenUri2Error,
	GetTokenUriData,
	GetTokenUriError,
	GetToolsData,
	GetToolsError,
	GetTopAprFusionsData,
	GetTopAprFusionsError,
	GetTopAprPools1Data,
	GetTopAprPools1Error,
	GetTopAprPoolsData,
	GetTopAprPoolsError,
	GetTopPairsData,
	GetTopPairsError,
	GetTopTokensData,
	GetTopTokensError,
	GetTotalNftsMintedData,
	GetTotalNftsMintedError,
	GetTotalSupply1Data,
	GetTotalSupply1Error,
	GetTotalSupply2Data,
	GetTotalSupply2Error,
	GetTotalSupplyAtData,
	GetTotalSupplyAtError,
	GetTotalSupplyAtTData,
	GetTotalSupplyAtTError,
	GetTotalSupplyData,
	GetTotalSupplyError,
	GetTotalValueLocked1Data,
	GetTotalValueLocked1Error,
	GetTotalValueLocked2Data,
	GetTotalValueLocked2Error,
	GetTotalValueLockedData,
	GetTotalValueLockedError,
	GetTotalWeight1Data,
	GetTotalWeight1Error,
	GetTotalWeight2Data,
	GetTotalWeight2Error,
	GetTotalWeightData,
	GetTotalWeightError,
	GetTradesData,
	GetTradesError,
	GetUserPointHistoryData,
	GetUserPointHistoryError,
	GetUserPointHistoryTsData,
	GetUserPointHistoryTsError,
	GetVestedPayoutAtTimeData,
	GetVestedPayoutAtTimeError,
	GetVestedPayoutData,
	GetVestedPayoutError,
	GetVestingPayoutData,
	GetVestingPayoutError,
	GetVestingPeriodData,
	GetVestingPeriodError,
	GetVotes1Data,
	GetVotes1Error,
	GetVotes2Data,
	GetVotes2Error,
	GetVotesData,
	GetVotesError,
	GetWeights1Data,
	GetWeights1Error,
	GetWeights2Data,
	GetWeights2Error,
	GetWeightsData,
	GetWeightsError,
	GetWeth1Data,
	GetWeth1Error,
	GetWeth2Data,
	GetWeth2Error,
	GetWethData,
	GetWethError,
	IsApprovedForAll1Data,
	IsApprovedForAll1Error,
	IsApprovedForAll2Data,
	IsApprovedForAll2Error,
	IsApprovedForAllData,
	IsApprovedForAllError,
	IsGauge1Data,
	IsGauge1Error,
	IsGauge2Data,
	IsGauge2Error,
	IsGaugeData,
	IsGaugeError,
	IsPairData,
	IsPairError,
	IsWhitelisted1Data,
	IsWhitelisted1Error,
	IsWhitelisted2Data,
	IsWhitelisted2Error,
	IsWhitelistedData,
	IsWhitelistedError,
	JupiterGetIndexedRouteMapData,
	JupiterGetIndexedRouteMapError,
	JupiterGetProgramIdToLabelData,
	JupiterGetProgramIdToLabelError,
	JupiterGetTokensData,
	JupiterGetTokensError,
	LastVotedData,
	LastVotedError,
	LendingPoolGetAddressesProviderData,
	LendingPoolGetAddressesProviderError,
	LendingPoolGetFlashLoanPremiumTotalData,
	LendingPoolGetFlashLoanPremiumTotalError,
	LendingPoolGetLendingPoolRevisionData,
	LendingPoolGetLendingPoolRevisionError,
	LendingPoolGetMaxNumberReservesData,
	LendingPoolGetMaxNumberReservesError,
	LendingPoolGetMaxStableRateBorrowSizePercentData,
	LendingPoolGetMaxStableRateBorrowSizePercentError,
	LendingPoolGetReserveDataData,
	LendingPoolGetReserveDataError,
	LendingPoolGetReservesListData,
	LendingPoolGetReservesListError,
	LendingPoolGetUserAccountDataData,
	LendingPoolGetUserAccountDataError,
	LendingPoolIsPausedData,
	LendingPoolIsPausedError,
	LeveragerGetAddressesProviderData,
	LeveragerGetAddressesProviderError,
	LeveragerGetDefaultAdminRoleData,
	LeveragerGetDefaultAdminRoleError,
	LeveragerGetLendingPoolData,
	LeveragerGetLendingPoolError,
	LeveragerGetMinHfData,
	LeveragerGetMinHfError,
	LeveragerGetRoleAdminData,
	LeveragerGetRoleAdminError,
	LeveragerGetWethData,
	LeveragerGetWethError,
	LeveragerHasRoleData,
	LeveragerHasRoleError,
	LeveragerIsPausedData,
	LeveragerIsPausedError,
	LeveragerSupportsInterfaceData,
	LeveragerSupportsInterfaceError,
	LifiGetAllPossibleConnectionsData,
	LifiGetAllPossibleConnectionsError,
	LifiGetChainsData,
	LifiGetChainsError,
	LifiGetConnectionsData,
	LifiGetConnectionsError,
	LifiGetQuoteData,
	LifiGetQuoteError,
	LifiGetStatusData,
	LifiGetStatusError,
	LifiGetTokenDetailsData,
	LifiGetTokenDetailsError,
	LifiGetTokensError,
	ListEosAccountsData,
	ListEosAccountsError,
	ListFlowsData,
	ListFlowsError,
	ListJobsData,
	ListJobsError,
	ListLitecoinAccountsData,
	ListLitecoinAccountsError,
	ListRippleAccountsData,
	ListRippleAccountsError,
	ListSolanaAccountsData,
	ListSolanaAccountsError,
	ListUserDefinedFunctionsData,
	ListUserDefinedFunctionsError,
	LitecoinGetLitecoinAccountData,
	LitecoinGetLitecoinAccountError,
	NameData,
	NameError,
	OdosGetContractInfoData,
	OdosGetContractInfoError,
	OdosGetCurrentBlockData,
	OdosGetCurrentBlockError,
	OdosGetExecutorAddressData,
	OdosGetExecutorAddressError,
	OdosGetLiquiditySourcesData,
	OdosGetLiquiditySourcesError,
	OdosGetRouterAddressData,
	OdosGetRouterAddressError,
	OdosGetSupportedChainsData,
	OdosGetSupportedChainsError,
	OdosGetSupportedTokensData,
	OdosGetSupportedTokensError,
	OnRamperGetQuotesBuyData,
	OnRamperGetQuotesBuyError,
	OnRamperGetQuotesSellData,
	OnRamperGetQuotesSellError,
	OnRamperGetSupportedAssetsData,
	OnRamperGetSupportedAssetsError,
	OnRamperGetSupportedCurrenciesData,
	OnRamperGetSupportedCurrenciesError,
	OnRamperGetSupportedDefaultsAllData,
	OnRamperGetSupportedDefaultsAllError,
	OnRamperGetSupportedOnRampsAllData,
	OnRamperGetSupportedOnRampsAllError,
	OnRamperGetSupportedPaymentTypesData,
	OnRamperGetSupportedPaymentTypesError,
	OnRamperGetSupportedPaymentTypesFiatData,
	OnRamperGetSupportedPaymentTypesFiatError,
	OwnerOfData,
	OwnerOfError,
	PairForData,
	PairForError,
	PermitTypehashData,
	PermitTypehashError,
	PoolVoteLengthData,
	PoolVoteLengthError,
	PositionsData,
	PositionsError,
	QuoteAddLiquidityData,
	QuoteAddLiquidityError,
	QuoteRemoveLiquidityData,
	QuoteRemoveLiquidityError,
	SortTokensData,
	SortTokensError,
	SupportsInterfaceData,
	SupportsInterfaceError,
	SymbolData,
	SymbolError,
	TokenByIndexData,
	TokenByIndexError,
	TokenOfOwnerByIndexData,
	TokenOfOwnerByIndexError,
	TokenUriData,
	TokenUriError,
	TotalSupplyData,
	TotalSupplyError,
	TronGetTronAccountData,
	TronGetTronAccountError,
	TronListTronAccountsData,
	TronListTronAccountsError,
	Weth91Data,
	Weth91Error,
	Weth9Data,
	Weth9Error,
} from "../requests/types.gen";
import * as Common from "./common";
export const useAavev3PoolGetReserveDataSuspense = <
	TData = Common.Aavev3PoolGetReserveDataDefaultResponse,
	TError = Aavev3PoolGetReserveDataError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Aavev3PoolGetReserveDataData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAavev3PoolGetReserveDataKeyFn(clientOptions, queryKey),
		queryFn: () =>
			aavev3PoolGetReserveData({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAavev3PoolGetUserAccountDataSuspense = <
	TData = Common.Aavev3PoolGetUserAccountDataDefaultResponse,
	TError = Aavev3PoolGetUserAccountDataError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Aavev3PoolGetUserAccountDataData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAavev3PoolGetUserAccountDataKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			aavev3PoolGetUserAccountData({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAavev3PoolAddressProviderGetAclAdminSuspense = <
	TData = Common.Aavev3PoolAddressProviderGetAclAdminDefaultResponse,
	TError = Aavev3PoolAddressProviderGetAclAdminError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Aavev3PoolAddressProviderGetAclAdminData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAavev3PoolAddressProviderGetAclAdminKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			aavev3PoolAddressProviderGetAclAdmin({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAavev3PoolAddressProviderGetAclManagerSuspense = <
	TData = Common.Aavev3PoolAddressProviderGetAclManagerDefaultResponse,
	TError = Aavev3PoolAddressProviderGetAclManagerError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Aavev3PoolAddressProviderGetAclManagerData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAavev3PoolAddressProviderGetAclManagerKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			aavev3PoolAddressProviderGetAclManager({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAavev3PoolAddressProviderGetAddressSuspense = <
	TData = Common.Aavev3PoolAddressProviderGetAddressDefaultResponse,
	TError = Aavev3PoolAddressProviderGetAddressError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Aavev3PoolAddressProviderGetAddressData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAavev3PoolAddressProviderGetAddressKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			aavev3PoolAddressProviderGetAddress({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAavev3PoolAddressProviderGetMarketIdSuspense = <
	TData = Common.Aavev3PoolAddressProviderGetMarketIdDefaultResponse,
	TError = Aavev3PoolAddressProviderGetMarketIdError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Aavev3PoolAddressProviderGetMarketIdData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAavev3PoolAddressProviderGetMarketIdKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			aavev3PoolAddressProviderGetMarketId({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAavev3PoolAddressProviderGetPoolSuspense = <
	TData = Common.Aavev3PoolAddressProviderGetPoolDefaultResponse,
	TError = Aavev3PoolAddressProviderGetPoolError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Aavev3PoolAddressProviderGetPoolData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAavev3PoolAddressProviderGetPoolKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			aavev3PoolAddressProviderGetPool({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAavev3PoolAddressProviderGetPoolConfiguratorSuspense = <
	TData = Common.Aavev3PoolAddressProviderGetPoolConfiguratorDefaultResponse,
	TError = Aavev3PoolAddressProviderGetPoolConfiguratorError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<
		Aavev3PoolAddressProviderGetPoolConfiguratorData,
		true
	>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAavev3PoolAddressProviderGetPoolConfiguratorKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			aavev3PoolAddressProviderGetPoolConfigurator({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAavev3PoolAddressProviderGetPriceOracleSuspense = <
	TData = Common.Aavev3PoolAddressProviderGetPriceOracleDefaultResponse,
	TError = Aavev3PoolAddressProviderGetPriceOracleError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Aavev3PoolAddressProviderGetPriceOracleData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAavev3PoolAddressProviderGetPriceOracleKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			aavev3PoolAddressProviderGetPriceOracle({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAavev3PoolAddressProviderRegistryGetAddressesProviderSuspense =
	<
		TData = Common.Aavev3PoolAddressProviderRegistryGetAddressesProviderDefaultResponse,
		TError = Aavev3PoolAddressProviderRegistryGetAddressesProviderError,
		TQueryKey extends Array<unknown> = unknown[],
	>(
		clientOptions: Options<
			Aavev3PoolAddressProviderRegistryGetAddressesProviderData,
			true
		>,
		queryKey?: TQueryKey,
		options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
	) =>
		useSuspenseQuery<TData, TError>({
			queryKey:
				Common.UseAavev3PoolAddressProviderRegistryGetAddressesProviderKeyFn(
					clientOptions,
					queryKey,
				),
			queryFn: () =>
				aavev3PoolAddressProviderRegistryGetAddressesProvider({
					...clientOptions,
				}).then((response) => response.data as TData) as TData,
			...options,
		});
export const useAavev3PoolAddressProviderRegistryGetAtokenTotalSupplySuspense =
	<
		TData = Common.Aavev3PoolAddressProviderRegistryGetAtokenTotalSupplyDefaultResponse,
		TError = Aavev3PoolAddressProviderRegistryGetAtokenTotalSupplyError,
		TQueryKey extends Array<unknown> = unknown[],
	>(
		clientOptions: Options<
			Aavev3PoolAddressProviderRegistryGetAtokenTotalSupplyData,
			true
		>,
		queryKey?: TQueryKey,
		options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
	) =>
		useSuspenseQuery<TData, TError>({
			queryKey:
				Common.UseAavev3PoolAddressProviderRegistryGetAtokenTotalSupplyKeyFn(
					clientOptions,
					queryKey,
				),
			queryFn: () =>
				aavev3PoolAddressProviderRegistryGetAtokenTotalSupply({
					...clientOptions,
				}).then((response) => response.data as TData) as TData,
			...options,
		});
export const useAavev3PoolAddressProviderRegistryGetAllAtokensSuspense = <
	TData = Common.Aavev3PoolAddressProviderRegistryGetAllAtokensDefaultResponse,
	TError = Aavev3PoolAddressProviderRegistryGetAllAtokensError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<
		Aavev3PoolAddressProviderRegistryGetAllAtokensData,
		true
	>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAavev3PoolAddressProviderRegistryGetAllAtokensKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			aavev3PoolAddressProviderRegistryGetAllAtokens({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetAllReservesTokensSuspense = <
	TData = Common.GetAllReservesTokensDefaultResponse,
	TError = GetAllReservesTokensError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetAllReservesTokensData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetAllReservesTokensKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getAllReservesTokens({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAavev3PoolAddressProviderRegistryGetDebtCeilingSuspense = <
	TData = Common.Aavev3PoolAddressProviderRegistryGetDebtCeilingDefaultResponse,
	TError = Aavev3PoolAddressProviderRegistryGetDebtCeilingError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<
		Aavev3PoolAddressProviderRegistryGetDebtCeilingData,
		true
	>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAavev3PoolAddressProviderRegistryGetDebtCeilingKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			aavev3PoolAddressProviderRegistryGetDebtCeiling({
				...clientOptions,
			}).then((response) => response.data as TData) as TData,
		...options,
	});
export const useAavEv3RewardsGetRewardsByAssetSuspense = <
	TData = Common.AavEv3RewardsGetRewardsByAssetDefaultResponse,
	TError = AavEv3RewardsGetRewardsByAssetError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AavEv3RewardsGetRewardsByAssetData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAavEv3RewardsGetRewardsByAssetKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			aavEv3RewardsGetRewardsByAsset({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAavEv3RewardsGetUserRewardsSuspense = <
	TData = Common.AavEv3RewardsGetUserRewardsDefaultResponse,
	TError = AavEv3RewardsGetUserRewardsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AavEv3RewardsGetUserRewardsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAavEv3RewardsGetUserRewardsKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			aavEv3RewardsGetUserRewards({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAavEv3RewardsGetRewardsDataSuspense = <
	TData = Common.AavEv3RewardsGetRewardsDataDefaultResponse,
	TError = AavEv3RewardsGetRewardsDataError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AavEv3RewardsGetRewardsDataData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAavEv3RewardsGetRewardsDataKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			aavEv3RewardsGetRewardsData({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAavEv3IncentiveDataProviderGetFullReservesDataSuspense = <
	TData = Common.AavEv3IncentiveDataProviderGetFullReservesDataDefaultResponse,
	TError = AavEv3IncentiveDataProviderGetFullReservesDataError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<
		AavEv3IncentiveDataProviderGetFullReservesDataData,
		true
	>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAavEv3IncentiveDataProviderGetFullReservesDataKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			aavEv3IncentiveDataProviderGetFullReservesData({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAavEv3IncentiveDataProviderGetReservesDataSuspense = <
	TData = Common.AavEv3IncentiveDataProviderGetReservesDataDefaultResponse,
	TError = AavEv3IncentiveDataProviderGetReservesDataError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AavEv3IncentiveDataProviderGetReservesDataData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAavEv3IncentiveDataProviderGetReservesDataKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			aavEv3IncentiveDataProviderGetReservesData({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAavEv3IncentiveDataProviderGetUserReservesDataSuspense = <
	TData = Common.AavEv3IncentiveDataProviderGetUserReservesDataDefaultResponse,
	TError = AavEv3IncentiveDataProviderGetUserReservesDataError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<
		AavEv3IncentiveDataProviderGetUserReservesDataData,
		true
	>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAavEv3IncentiveDataProviderGetUserReservesDataKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			aavEv3IncentiveDataProviderGetUserReservesData({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAaveV3UiPoolDataProviderEthCurrencyUnitSuspense = <
	TData = Common.AaveV3UiPoolDataProviderEthCurrencyUnitDefaultResponse,
	TError = AaveV3UiPoolDataProviderEthCurrencyUnitError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AaveV3UiPoolDataProviderEthCurrencyUnitData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAaveV3UiPoolDataProviderEthCurrencyUnitKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			aaveV3UiPoolDataProviderEthCurrencyUnit({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetReservesDataSuspense = <
	TData = Common.GetReservesDataDefaultResponse,
	TError = GetReservesDataError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetReservesDataData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetReservesDataKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getReservesData({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAaveV3UiPoolDataProviderReservesListSuspense = <
	TData = Common.AaveV3UiPoolDataProviderReservesListDefaultResponse,
	TError = AaveV3UiPoolDataProviderReservesListError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AaveV3UiPoolDataProviderReservesListData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAaveV3UiPoolDataProviderReservesListKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			aaveV3UiPoolDataProviderReservesList({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAaveV3UiPoolDataProviderUserReservesDataSuspense = <
	TData = Common.AaveV3UiPoolDataProviderUserReservesDataDefaultResponse,
	TError = AaveV3UiPoolDataProviderUserReservesDataError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AaveV3UiPoolDataProviderUserReservesDataData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAaveV3UiPoolDataProviderUserReservesDataKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			aaveV3UiPoolDataProviderUserReservesData({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorSuspense =
	<
		TData = Common.AaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorDefaultResponse,
		TError = AaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorError,
		TQueryKey extends Array<unknown> = unknown[],
	>(
		clientOptions: Options<
			AaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorData,
			true
		>,
		queryKey?: TQueryKey,
		options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
	) =>
		useSuspenseQuery<TData, TError>({
			queryKey:
				Common.UseAaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorKeyFn(
					clientOptions,
					queryKey,
				),
			queryFn: () =>
				aaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregator(
					{ ...clientOptions },
				).then((response) => response.data as TData) as TData,
			...options,
		});
export const useAaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorSuspense =
	<
		TData = Common.AaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorDefaultResponse,
		TError = AaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorError,
		TQueryKey extends Array<unknown> = unknown[],
	>(
		clientOptions: Options<
			AaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorData,
			true
		>,
		queryKey?: TQueryKey,
		options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
	) =>
		useSuspenseQuery<TData, TError>({
			queryKey:
				Common.UseAaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorKeyFn(
					clientOptions,
					queryKey,
				),
			queryFn: () =>
				aaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregator({
					...clientOptions,
				}).then((response) => response.data as TData) as TData,
			...options,
		});
export const useAaveV3WalletBalanceOfSuspense = <
	TData = Common.AaveV3WalletBalanceOfDefaultResponse,
	TError = AaveV3WalletBalanceOfError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AaveV3WalletBalanceOfData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAaveV3WalletBalanceOfKeyFn(clientOptions, queryKey),
		queryFn: () =>
			aaveV3WalletBalanceOf({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAaveV3WalletBatchBalanceOfSuspense = <
	TData = Common.AaveV3WalletBatchBalanceOfDefaultResponse,
	TError = AaveV3WalletBatchBalanceOfError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AaveV3WalletBatchBalanceOfData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAaveV3WalletBatchBalanceOfKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			aaveV3WalletBatchBalanceOf({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAaveV3WalletUserWalletBalancesSuspense = <
	TData = Common.AaveV3WalletUserWalletBalancesDefaultResponse,
	TError = AaveV3WalletUserWalletBalancesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AaveV3WalletUserWalletBalancesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAaveV3WalletUserWalletBalancesKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			aaveV3WalletUserWalletBalances({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAccountsListEthereumAccountsSuspense = <
	TData = Common.AccountsListEthereumAccountsDefaultResponse,
	TError = AccountsListEthereumAccountsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AccountsListEthereumAccountsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAccountsListEthereumAccountsKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			accountsListEthereumAccounts({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAccountsGetEthreumAccountSuspense = <
	TData = Common.AccountsGetEthreumAccountDefaultResponse,
	TError = AccountsGetEthreumAccountError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AccountsGetEthreumAccountData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAccountsGetEthreumAccountKeyFn(clientOptions, queryKey),
		queryFn: () =>
			accountsGetEthreumAccount({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAccountsEthereumGetNonceSuspense = <
	TData = Common.AccountsEthereumGetNonceDefaultResponse,
	TError = AccountsEthereumGetNonceError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AccountsEthereumGetNonceData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAccountsEthereumGetNonceKeyFn(clientOptions, queryKey),
		queryFn: () =>
			accountsEthereumGetNonce({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAccountsEthereumGetNativeBalanceSuspense = <
	TData = Common.AccountsEthereumGetNativeBalanceDefaultResponse,
	TError = AccountsEthereumGetNativeBalanceError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AccountsEthereumGetNativeBalanceData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAccountsEthereumGetNativeBalanceKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			accountsEthereumGetNativeBalance({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAccountsSuggestGasPriceSuspense = <
	TData = Common.AccountsSuggestGasPriceDefaultResponse,
	TError = AccountsSuggestGasPriceError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AccountsSuggestGasPriceData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAccountsSuggestGasPriceKeyFn(clientOptions, queryKey),
		queryFn: () =>
			accountsSuggestGasPrice({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAccountsExportEthreumAccountSuspense = <
	TData = Common.AccountsExportEthreumAccountDefaultResponse,
	TError = AccountsExportEthreumAccountError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AccountsExportEthreumAccountData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseAccountsExportEthreumAccountKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			accountsExportEthreumAccount({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useBitcoinListAccountsSuspense = <
	TData = Common.BitcoinListAccountsDefaultResponse,
	TError = BitcoinListAccountsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<BitcoinListAccountsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseBitcoinListAccountsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			bitcoinListAccounts({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useBitcoinBitcoinGetAccountSuspense = <
	TData = Common.BitcoinBitcoinGetAccountDefaultResponse,
	TError = BitcoinBitcoinGetAccountError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<BitcoinBitcoinGetAccountData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseBitcoinBitcoinGetAccountKeyFn(clientOptions, queryKey),
		queryFn: () =>
			bitcoinBitcoinGetAccount({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useBitcoinCashListAccountsSuspense = <
	TData = Common.BitcoinCashListAccountsDefaultResponse,
	TError = BitcoinCashListAccountsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<BitcoinCashListAccountsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseBitcoinCashListAccountsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			bitcoinCashListAccounts({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useBitcoinCashBitcoinCashGetAccountSuspense = <
	TData = Common.BitcoinCashBitcoinCashGetAccountDefaultResponse,
	TError = BitcoinCashBitcoinCashGetAccountError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<BitcoinCashBitcoinCashGetAccountData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseBitcoinCashBitcoinCashGetAccountKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			bitcoinCashBitcoinCashGetAccount({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useChartsGetChartAnalysisSuspense = <
	TData = Common.ChartsGetChartAnalysisDefaultResponse,
	TError = ChartsGetChartAnalysisError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<ChartsGetChartAnalysisData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseChartsGetChartAnalysisKeyFn(clientOptions, queryKey),
		queryFn: () =>
			chartsGetChartAnalysis({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useComponentsGetComponentsSuspense = <
	TData = Common.ComponentsGetComponentsDefaultResponse,
	TError = ComponentsGetComponentsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<ComponentsGetComponentsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseComponentsGetComponentsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			componentsGetComponents({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useComponentsGetComponentSuspense = <
	TData = Common.ComponentsGetComponentDefaultResponse,
	TError = ComponentsGetComponentError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<ComponentsGetComponentData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseComponentsGetComponentKeyFn(clientOptions, queryKey),
		queryFn: () =>
			componentsGetComponent({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useComponentsSearchComponentsSuspense = <
	TData = Common.ComponentsSearchComponentsDefaultResponse,
	TError = ComponentsSearchComponentsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<ComponentsSearchComponentsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseComponentsSearchComponentsKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			componentsSearchComponents({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useComponentsGetComponentCapabilitiesDescriptionSuspense = <
	TData = Common.ComponentsGetComponentCapabilitiesDescriptionDefaultResponse,
	TError = ComponentsGetComponentCapabilitiesDescriptionError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<
		ComponentsGetComponentCapabilitiesDescriptionData,
		true
	>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseComponentsGetComponentCapabilitiesDescriptionKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			componentsGetComponentCapabilitiesDescription({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useCosmosCosmosListAccountsSuspense = <
	TData = Common.CosmosCosmosListAccountsDefaultResponse,
	TError = CosmosCosmosListAccountsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<CosmosCosmosListAccountsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseCosmosCosmosListAccountsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			cosmosCosmosListAccounts({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useCosmosCosmosGetAccountSuspense = <
	TData = Common.CosmosCosmosGetAccountDefaultResponse,
	TError = CosmosCosmosGetAccountError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<CosmosCosmosGetAccountData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseCosmosCosmosGetAccountKeyFn(clientOptions, queryKey),
		queryFn: () =>
			cosmosCosmosGetAccount({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useDataGetWalletTokenBalancesSuspense = <
	TData = Common.DataGetWalletTokenBalancesDefaultResponse,
	TError = DataGetWalletTokenBalancesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<DataGetWalletTokenBalancesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseDataGetWalletTokenBalancesKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			dataGetWalletTokenBalances({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useDataGetWalletTransactionHistorySuspense = <
	TData = Common.DataGetWalletTransactionHistoryDefaultResponse,
	TError = DataGetWalletTransactionHistoryError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<DataGetWalletTransactionHistoryData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseDataGetWalletTransactionHistoryKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			dataGetWalletTransactionHistory({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useDataGetTokensMetadataSuspense = <
	TData = Common.DataGetTokensMetadataDefaultResponse,
	TError = DataGetTokensMetadataError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<DataGetTokensMetadataData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseDataGetTokensMetadataKeyFn(clientOptions, queryKey),
		queryFn: () =>
			dataGetTokensMetadata({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useDataGetWalletNfTsSuspense = <
	TData = Common.DataGetWalletNfTsDefaultResponse,
	TError = DataGetWalletNfTsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<DataGetWalletNfTsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseDataGetWalletNfTsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			dataGetWalletNfTs({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useDataGetUserWalletPortfolioSuspense = <
	TData = Common.DataGetUserWalletPortfolioDefaultResponse,
	TError = DataGetUserWalletPortfolioError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<DataGetUserWalletPortfolioData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseDataGetUserWalletPortfolioKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			dataGetUserWalletPortfolio({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useDataGetPortfolioFetchStatusSuspense = <
	TData = Common.DataGetPortfolioFetchStatusDefaultResponse,
	TError = DataGetPortfolioFetchStatusError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<DataGetPortfolioFetchStatusData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseDataGetPortfolioFetchStatusKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			dataGetPortfolioFetchStatus({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useDogeCoinListAccountsSuspense = <
	TData = Common.DogeCoinListAccountsDefaultResponse,
	TError = DogeCoinListAccountsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<DogeCoinListAccountsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseDogeCoinListAccountsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			dogeCoinListAccounts({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useDogecoinDogeCoinGetAccountDetailsSuspense = <
	TData = Common.DogecoinDogeCoinGetAccountDetailsDefaultResponse,
	TError = DogecoinDogeCoinGetAccountDetailsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<DogecoinDogeCoinGetAccountDetailsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseDogecoinDogeCoinGetAccountDetailsKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			dogecoinDogeCoinGetAccountDetails({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useListEosAccountsSuspense = <
	TData = Common.ListEosAccountsDefaultResponse,
	TError = ListEosAccountsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<ListEosAccountsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseListEosAccountsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			listEosAccounts({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetEosAccountSuspense = <
	TData = Common.GetEosAccountDefaultResponse,
	TError = GetEosAccountError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetEosAccountData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetEosAccountKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getEosAccount({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc20GetErc20TokenDecimalsSuspense = <
	TData = Common.Erc20GetErc20TokenDecimalsDefaultResponse,
	TError = Erc20GetErc20TokenDecimalsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc20GetErc20TokenDecimalsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc20GetErc20TokenDecimalsKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			erc20GetErc20TokenDecimals({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc20GetErc20TokenSymbolSuspense = <
	TData = Common.Erc20GetErc20TokenSymbolDefaultResponse,
	TError = Erc20GetErc20TokenSymbolError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc20GetErc20TokenSymbolData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc20GetErc20TokenSymbolKeyFn(clientOptions, queryKey),
		queryFn: () =>
			erc20GetErc20TokenSymbol({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc20GetErc20TokenNameSuspense = <
	TData = Common.Erc20GetErc20TokenNameDefaultResponse,
	TError = Erc20GetErc20TokenNameError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc20GetErc20TokenNameData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc20GetErc20TokenNameKeyFn(clientOptions, queryKey),
		queryFn: () =>
			erc20GetErc20TokenName({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc20GetErc20TokenTotalSupplySuspense = <
	TData = Common.Erc20GetErc20TokenTotalSupplyDefaultResponse,
	TError = Erc20GetErc20TokenTotalSupplyError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc20GetErc20TokenTotalSupplyData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc20GetErc20TokenTotalSupplyKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			erc20GetErc20TokenTotalSupply({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc20GetErc20TokenBalanceSuspense = <
	TData = Common.Erc20GetErc20TokenBalanceDefaultResponse,
	TError = Erc20GetErc20TokenBalanceError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc20GetErc20TokenBalanceData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc20GetErc20TokenBalanceKeyFn(clientOptions, queryKey),
		queryFn: () =>
			erc20GetErc20TokenBalance({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc20GetErc20TokenAllowanceSuspense = <
	TData = Common.Erc20GetErc20TokenAllowanceDefaultResponse,
	TError = Erc20GetErc20TokenAllowanceError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc20GetErc20TokenAllowanceData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc20GetErc20TokenAllowanceKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			erc20GetErc20TokenAllowance({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc4626GetErc4626AssetSuspense = <
	TData = Common.Erc4626GetErc4626AssetDefaultResponse,
	TError = Erc4626GetErc4626AssetError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626AssetData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc4626GetErc4626AssetKeyFn(clientOptions, queryKey),
		queryFn: () =>
			erc4626GetErc4626Asset({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc4626GetErc4626TotalAssetsSuspense = <
	TData = Common.Erc4626GetErc4626TotalAssetsDefaultResponse,
	TError = Erc4626GetErc4626TotalAssetsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626TotalAssetsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc4626GetErc4626TotalAssetsKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			erc4626GetErc4626TotalAssets({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc4626GetErc4626ConvertToSharesSuspense = <
	TData = Common.Erc4626GetErc4626ConvertToSharesDefaultResponse,
	TError = Erc4626GetErc4626ConvertToSharesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626ConvertToSharesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc4626GetErc4626ConvertToSharesKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			erc4626GetErc4626ConvertToShares({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc4626GetErc4626ConvertToAssetsSuspense = <
	TData = Common.Erc4626GetErc4626ConvertToAssetsDefaultResponse,
	TError = Erc4626GetErc4626ConvertToAssetsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626ConvertToAssetsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc4626GetErc4626ConvertToAssetsKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			erc4626GetErc4626ConvertToAssets({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc4626GetErc4626MaxDepositSuspense = <
	TData = Common.Erc4626GetErc4626MaxDepositDefaultResponse,
	TError = Erc4626GetErc4626MaxDepositError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626MaxDepositData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc4626GetErc4626MaxDepositKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			erc4626GetErc4626MaxDeposit({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc4626GetErc4626MaxMintSuspense = <
	TData = Common.Erc4626GetErc4626MaxMintDefaultResponse,
	TError = Erc4626GetErc4626MaxMintError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626MaxMintData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc4626GetErc4626MaxMintKeyFn(clientOptions, queryKey),
		queryFn: () =>
			erc4626GetErc4626MaxMint({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc4626GetErc4626MaxWithdrawSuspense = <
	TData = Common.Erc4626GetErc4626MaxWithdrawDefaultResponse,
	TError = Erc4626GetErc4626MaxWithdrawError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626MaxWithdrawData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc4626GetErc4626MaxWithdrawKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			erc4626GetErc4626MaxWithdraw({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc4626GetErc4626MaxRedeemSuspense = <
	TData = Common.Erc4626GetErc4626MaxRedeemDefaultResponse,
	TError = Erc4626GetErc4626MaxRedeemError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626MaxRedeemData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc4626GetErc4626MaxRedeemKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			erc4626GetErc4626MaxRedeem({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc4626GetErc4626PreviewDepositSuspense = <
	TData = Common.Erc4626GetErc4626PreviewDepositDefaultResponse,
	TError = Erc4626GetErc4626PreviewDepositError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626PreviewDepositData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc4626GetErc4626PreviewDepositKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			erc4626GetErc4626PreviewDeposit({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc4626GetErc4626PreviewMintSuspense = <
	TData = Common.Erc4626GetErc4626PreviewMintDefaultResponse,
	TError = Erc4626GetErc4626PreviewMintError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626PreviewMintData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc4626GetErc4626PreviewMintKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			erc4626GetErc4626PreviewMint({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc4626GetErc4626PreviewWithdrawSuspense = <
	TData = Common.Erc4626GetErc4626PreviewWithdrawDefaultResponse,
	TError = Erc4626GetErc4626PreviewWithdrawError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626PreviewWithdrawData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc4626GetErc4626PreviewWithdrawKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			erc4626GetErc4626PreviewWithdraw({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc4626GetErc4626PreviewRedeemSuspense = <
	TData = Common.Erc4626GetErc4626PreviewRedeemDefaultResponse,
	TError = Erc4626GetErc4626PreviewRedeemError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626PreviewRedeemData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc4626GetErc4626PreviewRedeemKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			erc4626GetErc4626PreviewRedeem({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc4626GetErc4626TotalSupplySuspense = <
	TData = Common.Erc4626GetErc4626TotalSupplyDefaultResponse,
	TError = Erc4626GetErc4626TotalSupplyError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626TotalSupplyData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc4626GetErc4626TotalSupplyKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			erc4626GetErc4626TotalSupply({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc4626GetErc4626BalanceOfSuspense = <
	TData = Common.Erc4626GetErc4626BalanceOfDefaultResponse,
	TError = Erc4626GetErc4626BalanceOfError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626BalanceOfData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc4626GetErc4626BalanceOfKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			erc4626GetErc4626BalanceOf({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc4626GetErc4626AllowanceSuspense = <
	TData = Common.Erc4626GetErc4626AllowanceDefaultResponse,
	TError = Erc4626GetErc4626AllowanceError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626AllowanceData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc4626GetErc4626AllowanceKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			erc4626GetErc4626Allowance({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc721GetErc721BalanceOfSuspense = <
	TData = Common.Erc721GetErc721BalanceOfDefaultResponse,
	TError = Erc721GetErc721BalanceOfError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc721GetErc721BalanceOfData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc721GetErc721BalanceOfKeyFn(clientOptions, queryKey),
		queryFn: () =>
			erc721GetErc721BalanceOf({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc721GetErc721OwnerOfSuspense = <
	TData = Common.Erc721GetErc721OwnerOfDefaultResponse,
	TError = Erc721GetErc721OwnerOfError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc721GetErc721OwnerOfData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc721GetErc721OwnerOfKeyFn(clientOptions, queryKey),
		queryFn: () =>
			erc721GetErc721OwnerOf({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc721GetErc721NameSuspense = <
	TData = Common.Erc721GetErc721NameDefaultResponse,
	TError = Erc721GetErc721NameError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc721GetErc721NameData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc721GetErc721NameKeyFn(clientOptions, queryKey),
		queryFn: () =>
			erc721GetErc721Name({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc721GetErc721SymbolSuspense = <
	TData = Common.Erc721GetErc721SymbolDefaultResponse,
	TError = Erc721GetErc721SymbolError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc721GetErc721SymbolData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc721GetErc721SymbolKeyFn(clientOptions, queryKey),
		queryFn: () =>
			erc721GetErc721Symbol({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc721GetErc721TokenUriSuspense = <
	TData = Common.Erc721GetErc721TokenUriDefaultResponse,
	TError = Erc721GetErc721TokenUriError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc721GetErc721TokenUriData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc721GetErc721TokenUriKeyFn(clientOptions, queryKey),
		queryFn: () =>
			erc721GetErc721TokenUri({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc721GetErc721ApprovedSuspense = <
	TData = Common.Erc721GetErc721ApprovedDefaultResponse,
	TError = Erc721GetErc721ApprovedError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc721GetErc721ApprovedData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc721GetErc721ApprovedKeyFn(clientOptions, queryKey),
		queryFn: () =>
			erc721GetErc721Approved({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc721GetErc721IsApprovedForAllSuspense = <
	TData = Common.Erc721GetErc721IsApprovedForAllDefaultResponse,
	TError = Erc721GetErc721IsApprovedForAllError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc721GetErc721IsApprovedForAllData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseErc721GetErc721IsApprovedForAllKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			erc721GetErc721IsApprovedForAll({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useFinancialDatasetsGetCompanyFactsSuspense = <
	TData = Common.FinancialDatasetsGetCompanyFactsDefaultResponse,
	TError = FinancialDatasetsGetCompanyFactsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<FinancialDatasetsGetCompanyFactsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseFinancialDatasetsGetCompanyFactsKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			financialDatasetsGetCompanyFacts({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useFinancialDatasetsGetIncomeStatementsSuspense = <
	TData = Common.FinancialDatasetsGetIncomeStatementsDefaultResponse,
	TError = FinancialDatasetsGetIncomeStatementsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<FinancialDatasetsGetIncomeStatementsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseFinancialDatasetsGetIncomeStatementsKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			financialDatasetsGetIncomeStatements({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useFinancialDatasetsGetBalanceSheetsSuspense = <
	TData = Common.FinancialDatasetsGetBalanceSheetsDefaultResponse,
	TError = FinancialDatasetsGetBalanceSheetsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<FinancialDatasetsGetBalanceSheetsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseFinancialDatasetsGetBalanceSheetsKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			financialDatasetsGetBalanceSheets({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useFinancialDatasetsGetCashFlowStatementsSuspense = <
	TData = Common.FinancialDatasetsGetCashFlowStatementsDefaultResponse,
	TError = FinancialDatasetsGetCashFlowStatementsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<FinancialDatasetsGetCashFlowStatementsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseFinancialDatasetsGetCashFlowStatementsKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			financialDatasetsGetCashFlowStatements({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useFinancialDatasetsGetSegmentedRevenuesSuspense = <
	TData = Common.FinancialDatasetsGetSegmentedRevenuesDefaultResponse,
	TError = FinancialDatasetsGetSegmentedRevenuesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<FinancialDatasetsGetSegmentedRevenuesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseFinancialDatasetsGetSegmentedRevenuesKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			financialDatasetsGetSegmentedRevenues({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useFinancialDatasetsGetAllFinancialsSuspense = <
	TData = Common.FinancialDatasetsGetAllFinancialsDefaultResponse,
	TError = FinancialDatasetsGetAllFinancialsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<FinancialDatasetsGetAllFinancialsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseFinancialDatasetsGetAllFinancialsKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			financialDatasetsGetAllFinancials({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useFinancialDatasetsGetAvailableTickersSuspense = <
	TData = Common.FinancialDatasetsGetAvailableTickersDefaultResponse,
	TError = FinancialDatasetsGetAvailableTickersError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<FinancialDatasetsGetAvailableTickersData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseFinancialDatasetsGetAvailableTickersKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			financialDatasetsGetAvailableTickers({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useFinancialDatasetsGetInsiderTransactionsSuspense = <
	TData = Common.FinancialDatasetsGetInsiderTransactionsDefaultResponse,
	TError = FinancialDatasetsGetInsiderTransactionsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<FinancialDatasetsGetInsiderTransactionsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseFinancialDatasetsGetInsiderTransactionsKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			financialDatasetsGetInsiderTransactions({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useFinancialDatasetsGetOptionsChainSuspense = <
	TData = Common.FinancialDatasetsGetOptionsChainDefaultResponse,
	TError = FinancialDatasetsGetOptionsChainError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<FinancialDatasetsGetOptionsChainData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseFinancialDatasetsGetOptionsChainKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			financialDatasetsGetOptionsChain({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useFinancialDatasetsGetPricesSuspense = <
	TData = Common.FinancialDatasetsGetPricesDefaultResponse,
	TError = FinancialDatasetsGetPricesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<FinancialDatasetsGetPricesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseFinancialDatasetsGetPricesKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			financialDatasetsGetPrices({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useFinancialDatasetsGetPriceSnapshotSuspense = <
	TData = Common.FinancialDatasetsGetPriceSnapshotDefaultResponse,
	TError = FinancialDatasetsGetPriceSnapshotError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<FinancialDatasetsGetPriceSnapshotData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseFinancialDatasetsGetPriceSnapshotKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			financialDatasetsGetPriceSnapshot({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useJupiterGetProgramIdToLabelSuspense = <
	TData = Common.JupiterGetProgramIdToLabelDefaultResponse,
	TError = JupiterGetProgramIdToLabelError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<JupiterGetProgramIdToLabelData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseJupiterGetProgramIdToLabelKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			jupiterGetProgramIdToLabel({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useJupiterGetIndexedRouteMapSuspense = <
	TData = Common.JupiterGetIndexedRouteMapDefaultResponse,
	TError = JupiterGetIndexedRouteMapError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<JupiterGetIndexedRouteMapData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseJupiterGetIndexedRouteMapKeyFn(clientOptions, queryKey),
		queryFn: () =>
			jupiterGetIndexedRouteMap({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useJupiterGetTokensSuspense = <
	TData = Common.JupiterGetTokensDefaultResponse,
	TError = JupiterGetTokensError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<JupiterGetTokensData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseJupiterGetTokensKeyFn(clientOptions, queryKey),
		queryFn: () =>
			jupiterGetTokens({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLendingPoolGetFlashLoanPremiumTotalSuspense = <
	TData = Common.LendingPoolGetFlashLoanPremiumTotalDefaultResponse,
	TError = LendingPoolGetFlashLoanPremiumTotalError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LendingPoolGetFlashLoanPremiumTotalData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLendingPoolGetFlashLoanPremiumTotalKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			lendingPoolGetFlashLoanPremiumTotal({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLendingPoolGetLendingPoolRevisionSuspense = <
	TData = Common.LendingPoolGetLendingPoolRevisionDefaultResponse,
	TError = LendingPoolGetLendingPoolRevisionError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LendingPoolGetLendingPoolRevisionData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLendingPoolGetLendingPoolRevisionKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			lendingPoolGetLendingPoolRevision({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLendingPoolGetMaxNumberReservesSuspense = <
	TData = Common.LendingPoolGetMaxNumberReservesDefaultResponse,
	TError = LendingPoolGetMaxNumberReservesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LendingPoolGetMaxNumberReservesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLendingPoolGetMaxNumberReservesKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			lendingPoolGetMaxNumberReserves({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLendingPoolGetMaxStableRateBorrowSizePercentSuspense = <
	TData = Common.LendingPoolGetMaxStableRateBorrowSizePercentDefaultResponse,
	TError = LendingPoolGetMaxStableRateBorrowSizePercentError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<
		LendingPoolGetMaxStableRateBorrowSizePercentData,
		true
	>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLendingPoolGetMaxStableRateBorrowSizePercentKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			lendingPoolGetMaxStableRateBorrowSizePercent({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLendingPoolGetReserveDataSuspense = <
	TData = Common.LendingPoolGetReserveDataDefaultResponse,
	TError = LendingPoolGetReserveDataError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LendingPoolGetReserveDataData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLendingPoolGetReserveDataKeyFn(clientOptions, queryKey),
		queryFn: () =>
			lendingPoolGetReserveData({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLendingPoolGetUserAccountDataSuspense = <
	TData = Common.LendingPoolGetUserAccountDataDefaultResponse,
	TError = LendingPoolGetUserAccountDataError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LendingPoolGetUserAccountDataData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLendingPoolGetUserAccountDataKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			lendingPoolGetUserAccountData({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLendingPoolGetReservesListSuspense = <
	TData = Common.LendingPoolGetReservesListDefaultResponse,
	TError = LendingPoolGetReservesListError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LendingPoolGetReservesListData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLendingPoolGetReservesListKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			lendingPoolGetReservesList({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLendingPoolGetAddressesProviderSuspense = <
	TData = Common.LendingPoolGetAddressesProviderDefaultResponse,
	TError = LendingPoolGetAddressesProviderError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LendingPoolGetAddressesProviderData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLendingPoolGetAddressesProviderKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			lendingPoolGetAddressesProvider({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLendingPoolIsPausedSuspense = <
	TData = Common.LendingPoolIsPausedDefaultResponse,
	TError = LendingPoolIsPausedError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LendingPoolIsPausedData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLendingPoolIsPausedKeyFn(clientOptions, queryKey),
		queryFn: () =>
			lendingPoolIsPaused({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLeveragerGetAddressesProviderSuspense = <
	TData = Common.LeveragerGetAddressesProviderDefaultResponse,
	TError = LeveragerGetAddressesProviderError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LeveragerGetAddressesProviderData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLeveragerGetAddressesProviderKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			leveragerGetAddressesProvider({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLeveragerGetDefaultAdminRoleSuspense = <
	TData = Common.LeveragerGetDefaultAdminRoleDefaultResponse,
	TError = LeveragerGetDefaultAdminRoleError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LeveragerGetDefaultAdminRoleData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLeveragerGetDefaultAdminRoleKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			leveragerGetDefaultAdminRole({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLeveragerGetLendingPoolSuspense = <
	TData = Common.LeveragerGetLendingPoolDefaultResponse,
	TError = LeveragerGetLendingPoolError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LeveragerGetLendingPoolData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLeveragerGetLendingPoolKeyFn(clientOptions, queryKey),
		queryFn: () =>
			leveragerGetLendingPool({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLeveragerGetMinHfSuspense = <
	TData = Common.LeveragerGetMinHfDefaultResponse,
	TError = LeveragerGetMinHfError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LeveragerGetMinHfData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLeveragerGetMinHfKeyFn(clientOptions, queryKey),
		queryFn: () =>
			leveragerGetMinHf({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLeveragerIsPausedSuspense = <
	TData = Common.LeveragerIsPausedDefaultResponse,
	TError = LeveragerIsPausedError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LeveragerIsPausedData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLeveragerIsPausedKeyFn(clientOptions, queryKey),
		queryFn: () =>
			leveragerIsPaused({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLeveragerGetWethSuspense = <
	TData = Common.LeveragerGetWethDefaultResponse,
	TError = LeveragerGetWethError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LeveragerGetWethData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLeveragerGetWethKeyFn(clientOptions, queryKey),
		queryFn: () =>
			leveragerGetWeth({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLeveragerGetRoleAdminSuspense = <
	TData = Common.LeveragerGetRoleAdminDefaultResponse,
	TError = LeveragerGetRoleAdminError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LeveragerGetRoleAdminData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLeveragerGetRoleAdminKeyFn(clientOptions, queryKey),
		queryFn: () =>
			leveragerGetRoleAdmin({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLeveragerHasRoleSuspense = <
	TData = Common.LeveragerHasRoleDefaultResponse,
	TError = LeveragerHasRoleError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LeveragerHasRoleData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLeveragerHasRoleKeyFn(clientOptions, queryKey),
		queryFn: () =>
			leveragerHasRole({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLeveragerSupportsInterfaceSuspense = <
	TData = Common.LeveragerSupportsInterfaceDefaultResponse,
	TError = LeveragerSupportsInterfaceError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LeveragerSupportsInterfaceData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLeveragerSupportsInterfaceKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			leveragerSupportsInterface({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLifiGetQuoteSuspense = <
	TData = Common.LifiGetQuoteDefaultResponse,
	TError = LifiGetQuoteError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LifiGetQuoteData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLifiGetQuoteKeyFn(clientOptions, queryKey),
		queryFn: () =>
			lifiGetQuote({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLifiGetStatusSuspense = <
	TData = Common.LifiGetStatusDefaultResponse,
	TError = LifiGetStatusError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LifiGetStatusData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLifiGetStatusKeyFn(clientOptions, queryKey),
		queryFn: () =>
			lifiGetStatus({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLifiGetChainsSuspense = <
	TData = Common.LifiGetChainsDefaultResponse,
	TError = LifiGetChainsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LifiGetChainsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLifiGetChainsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			lifiGetChains({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetToolsSuspense = <
	TData = Common.GetToolsDefaultResponse,
	TError = GetToolsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetToolsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetToolsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTools({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLifiGetTokensSuspense = <
	TData = Common.LifiGetTokensDefaultResponse,
	TError = LifiGetTokensError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<unknown, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLifiGetTokensKeyFn(clientOptions, queryKey),
		queryFn: () =>
			lifiGetTokens({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLifiGetTokenDetailsSuspense = <
	TData = Common.LifiGetTokenDetailsDefaultResponse,
	TError = LifiGetTokenDetailsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LifiGetTokenDetailsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLifiGetTokenDetailsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			lifiGetTokenDetails({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLifiGetConnectionsSuspense = <
	TData = Common.LifiGetConnectionsDefaultResponse,
	TError = LifiGetConnectionsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LifiGetConnectionsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLifiGetConnectionsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			lifiGetConnections({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLifiGetAllPossibleConnectionsSuspense = <
	TData = Common.LifiGetAllPossibleConnectionsDefaultResponse,
	TError = LifiGetAllPossibleConnectionsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LifiGetAllPossibleConnectionsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLifiGetAllPossibleConnectionsKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			lifiGetAllPossibleConnections({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useListLitecoinAccountsSuspense = <
	TData = Common.ListLitecoinAccountsDefaultResponse,
	TError = ListLitecoinAccountsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<ListLitecoinAccountsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseListLitecoinAccountsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			listLitecoinAccounts({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLitecoinGetLitecoinAccountSuspense = <
	TData = Common.LitecoinGetLitecoinAccountDefaultResponse,
	TError = LitecoinGetLitecoinAccountError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LitecoinGetLitecoinAccountData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLitecoinGetLitecoinAccountKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			litecoinGetLitecoinAccount({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetAssetsSuspense = <
	TData = Common.GetAssetsDefaultResponse,
	TError = GetAssetsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetAssetsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetAssetsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getAssets({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetAssetByAddressSuspense = <
	TData = Common.GetAssetByAddressDefaultResponse,
	TError = GetAssetByAddressError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetAssetByAddressData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetAssetByAddressKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getAssetByAddress({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetPoolsSuspense = <
	TData = Common.GetPoolsDefaultResponse,
	TError = GetPoolsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetPoolsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetPoolsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getPools({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetPoolByAddressSuspense = <
	TData = Common.GetPoolByAddressDefaultResponse,
	TError = GetPoolByAddressError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetPoolByAddressData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetPoolByAddressKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getPoolByAddress({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetPoolsByTypeSuspense = <
	TData = Common.GetPoolsByTypeDefaultResponse,
	TError = GetPoolsByTypeError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetPoolsByTypeData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetPoolsByTypeKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getPoolsByType({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTopAprPoolsSuspense = <
	TData = Common.GetTopAprPoolsDefaultResponse,
	TError = GetTopAprPoolsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTopAprPoolsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetTopAprPoolsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTopAprPools({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTotalValueLockedSuspense = <
	TData = Common.GetTotalValueLockedDefaultResponse,
	TError = GetTotalValueLockedError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTotalValueLockedData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetTotalValueLockedKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTotalValueLocked({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useCalculateOptimalVoteDistributionSuspense = <
	TData = Common.CalculateOptimalVoteDistributionDefaultResponse,
	TError = CalculateOptimalVoteDistributionError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<CalculateOptimalVoteDistributionData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseCalculateOptimalVoteDistributionKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			calculateOptimalVoteDistribution({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetBalanceOfSuspense = <
	TData = Common.GetBalanceOfDefaultResponse,
	TError = GetBalanceOfError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetBalanceOfData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetBalanceOfKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getBalanceOf({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetOwnerOfSuspense = <
	TData = Common.GetOwnerOfDefaultResponse,
	TError = GetOwnerOfError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetOwnerOfData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetOwnerOfKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getOwnerOf({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTokenUriSuspense = <
	TData = Common.GetTokenUriDefaultResponse,
	TError = GetTokenUriError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTokenUriData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetTokenUriKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTokenUri({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetLockDetailsSuspense = <
	TData = Common.GetLockDetailsDefaultResponse,
	TError = GetLockDetailsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetLockDetailsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetLockDetailsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getLockDetails({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTotalSupplySuspense = <
	TData = Common.GetTotalSupplyDefaultResponse,
	TError = GetTotalSupplyError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTotalSupplyData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetTotalSupplyKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTotalSupply({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTokenOfOwnerByIndexSuspense = <
	TData = Common.GetTokenOfOwnerByIndexDefaultResponse,
	TError = GetTokenOfOwnerByIndexError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTokenOfOwnerByIndexData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetTokenOfOwnerByIndexKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTokenOfOwnerByIndex({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTokenByIndexSuspense = <
	TData = Common.GetTokenByIndexDefaultResponse,
	TError = GetTokenByIndexError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTokenByIndexData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetTokenByIndexKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTokenByIndex({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetNameSuspense = <
	TData = Common.GetNameDefaultResponse,
	TError = GetNameError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetNameData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetNameKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getName({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetSymbolSuspense = <
	TData = Common.GetSymbolDefaultResponse,
	TError = GetSymbolError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetSymbolData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetSymbolKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getSymbol({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetApprovedSuspense = <
	TData = Common.GetApprovedDefaultResponse,
	TError = GetApprovedError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetApprovedData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetApprovedKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getApproved({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useIsApprovedForAllSuspense = <
	TData = Common.IsApprovedForAllDefaultResponse,
	TError = IsApprovedForAllError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<IsApprovedForAllData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseIsApprovedForAllKeyFn(clientOptions, queryKey),
		queryFn: () =>
			isApprovedForAll({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetBalanceOfNftSuspense = <
	TData = Common.GetBalanceOfNftDefaultResponse,
	TError = GetBalanceOfNftError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetBalanceOfNftData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetBalanceOfNftKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getBalanceOfNft({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetBalanceOfNftAtSuspense = <
	TData = Common.GetBalanceOfNftAtDefaultResponse,
	TError = GetBalanceOfNftAtError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetBalanceOfNftAtData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetBalanceOfNftAtKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getBalanceOfNftAt({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTotalNftsMintedSuspense = <
	TData = Common.GetTotalNftsMintedDefaultResponse,
	TError = GetTotalNftsMintedError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTotalNftsMintedData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetTotalNftsMintedKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTotalNftsMinted({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetDelegatesSuspense = <
	TData = Common.GetDelegatesDefaultResponse,
	TError = GetDelegatesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetDelegatesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetDelegatesKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getDelegates({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetVotesSuspense = <
	TData = Common.GetVotesDefaultResponse,
	TError = GetVotesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetVotesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetVotesKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getVotes({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetPastVotesSuspense = <
	TData = Common.GetPastVotesDefaultResponse,
	TError = GetPastVotesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetPastVotesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetPastVotesKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getPastVotes({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetVestedPayoutSuspense = <
	TData = Common.GetVestedPayoutDefaultResponse,
	TError = GetVestedPayoutError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetVestedPayoutData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetVestedPayoutKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getVestedPayout({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetVestedPayoutAtTimeSuspense = <
	TData = Common.GetVestedPayoutAtTimeDefaultResponse,
	TError = GetVestedPayoutAtTimeError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetVestedPayoutAtTimeData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetVestedPayoutAtTimeKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getVestedPayoutAtTime({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetVestingPayoutSuspense = <
	TData = Common.GetVestingPayoutDefaultResponse,
	TError = GetVestingPayoutError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetVestingPayoutData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetVestingPayoutKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getVestingPayout({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetVestingPeriodSuspense = <
	TData = Common.GetVestingPeriodDefaultResponse,
	TError = GetVestingPeriodError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetVestingPeriodData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetVestingPeriodKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getVestingPeriod({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetFactorySuspense = <
	TData = Common.GetFactoryDefaultResponse,
	TError = GetFactoryError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetFactoryData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetFactoryKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getFactory({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetWethSuspense = <
	TData = Common.GetWethDefaultResponse,
	TError = GetWethError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetWethData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetWethKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getWeth({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetAmountOutSuspense = <
	TData = Common.GetAmountOutDefaultResponse,
	TError = GetAmountOutError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetAmountOutData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetAmountOutKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getAmountOut({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetAmountsOutSuspense = <
	TData = Common.GetAmountsOutDefaultResponse,
	TError = GetAmountsOutError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetAmountsOutData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetAmountsOutKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getAmountsOut({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTotalWeightSuspense = <
	TData = Common.GetTotalWeightDefaultResponse,
	TError = GetTotalWeightError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTotalWeightData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetTotalWeightKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTotalWeight({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetWeightsSuspense = <
	TData = Common.GetWeightsDefaultResponse,
	TError = GetWeightsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetWeightsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetWeightsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getWeights({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useIsGaugeSuspense = <
	TData = Common.IsGaugeDefaultResponse,
	TError = IsGaugeError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<IsGaugeData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseIsGaugeKeyFn(clientOptions, queryKey),
		queryFn: () =>
			isGauge({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useIsWhitelistedSuspense = <
	TData = Common.IsWhitelistedDefaultResponse,
	TError = IsWhitelistedError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<IsWhitelistedData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseIsWhitelistedKeyFn(clientOptions, queryKey),
		queryFn: () =>
			isWhitelisted({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetLastVotedSuspense = <
	TData = Common.GetLastVotedDefaultResponse,
	TError = GetLastVotedError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetLastVotedData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetLastVotedKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getLastVoted({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetPoolVoteLengthSuspense = <
	TData = Common.GetPoolVoteLengthDefaultResponse,
	TError = GetPoolVoteLengthError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetPoolVoteLengthData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetPoolVoteLengthKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getPoolVoteLength({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetJobResultSuspense = <
	TData = Common.GetJobResultDefaultResponse,
	TError = GetJobResultError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetJobResultData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetJobResultKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getJobResult({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetScheduledJobsSuspense = <
	TData = Common.GetScheduledJobsDefaultResponse,
	TError = GetScheduledJobsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetScheduledJobsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetScheduledJobsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getScheduledJobs({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useListJobsSuspense = <
	TData = Common.ListJobsDefaultResponse,
	TError = ListJobsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<ListJobsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseListJobsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			listJobs({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetJobSuspense = <
	TData = Common.GetJobDefaultResponse,
	TError = GetJobError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetJobData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetJobKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getJob({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useListFlowsSuspense = <
	TData = Common.ListFlowsDefaultResponse,
	TError = ListFlowsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<ListFlowsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseListFlowsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			listFlows({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetFlowSuspense = <
	TData = Common.GetFlowDefaultResponse,
	TError = GetFlowError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetFlowData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetFlowKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getFlow({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useListUserDefinedFunctionsSuspense = <
	TData = Common.ListUserDefinedFunctionsDefaultResponse,
	TError = ListUserDefinedFunctionsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<ListUserDefinedFunctionsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseListUserDefinedFunctionsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			listUserDefinedFunctions({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetNotificationsSuspense = <
	TData = Common.GetNotificationsDefaultResponse,
	TError = GetNotificationsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetNotificationsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetNotificationsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getNotifications({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useOdosGetSupportedChainsSuspense = <
	TData = Common.OdosGetSupportedChainsDefaultResponse,
	TError = OdosGetSupportedChainsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OdosGetSupportedChainsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseOdosGetSupportedChainsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			odosGetSupportedChains({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useOdosGetContractInfoSuspense = <
	TData = Common.OdosGetContractInfoDefaultResponse,
	TError = OdosGetContractInfoError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OdosGetContractInfoData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseOdosGetContractInfoKeyFn(clientOptions, queryKey),
		queryFn: () =>
			odosGetContractInfo({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useOdosGetRouterAddressSuspense = <
	TData = Common.OdosGetRouterAddressDefaultResponse,
	TError = OdosGetRouterAddressError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OdosGetRouterAddressData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseOdosGetRouterAddressKeyFn(clientOptions, queryKey),
		queryFn: () =>
			odosGetRouterAddress({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useOdosGetExecutorAddressSuspense = <
	TData = Common.OdosGetExecutorAddressDefaultResponse,
	TError = OdosGetExecutorAddressError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OdosGetExecutorAddressData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseOdosGetExecutorAddressKeyFn(clientOptions, queryKey),
		queryFn: () =>
			odosGetExecutorAddress({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useOdosGetLiquiditySourcesSuspense = <
	TData = Common.OdosGetLiquiditySourcesDefaultResponse,
	TError = OdosGetLiquiditySourcesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OdosGetLiquiditySourcesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseOdosGetLiquiditySourcesKeyFn(clientOptions, queryKey),
		queryFn: () =>
			odosGetLiquiditySources({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useOdosGetSupportedTokensSuspense = <
	TData = Common.OdosGetSupportedTokensDefaultResponse,
	TError = OdosGetSupportedTokensError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OdosGetSupportedTokensData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseOdosGetSupportedTokensKeyFn(clientOptions, queryKey),
		queryFn: () =>
			odosGetSupportedTokens({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useOdosGetCurrentBlockSuspense = <
	TData = Common.OdosGetCurrentBlockDefaultResponse,
	TError = OdosGetCurrentBlockError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OdosGetCurrentBlockData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseOdosGetCurrentBlockKeyFn(clientOptions, queryKey),
		queryFn: () =>
			odosGetCurrentBlock({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useOnRamperGetSupportedCurrenciesSuspense = <
	TData = Common.OnRamperGetSupportedCurrenciesDefaultResponse,
	TError = OnRamperGetSupportedCurrenciesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OnRamperGetSupportedCurrenciesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseOnRamperGetSupportedCurrenciesKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			onRamperGetSupportedCurrencies({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useOnRamperGetSupportedPaymentTypesSuspense = <
	TData = Common.OnRamperGetSupportedPaymentTypesDefaultResponse,
	TError = OnRamperGetSupportedPaymentTypesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OnRamperGetSupportedPaymentTypesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseOnRamperGetSupportedPaymentTypesKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			onRamperGetSupportedPaymentTypes({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useOnRamperGetSupportedPaymentTypesFiatSuspense = <
	TData = Common.OnRamperGetSupportedPaymentTypesFiatDefaultResponse,
	TError = OnRamperGetSupportedPaymentTypesFiatError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OnRamperGetSupportedPaymentTypesFiatData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseOnRamperGetSupportedPaymentTypesFiatKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			onRamperGetSupportedPaymentTypesFiat({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useOnRamperGetSupportedDefaultsAllSuspense = <
	TData = Common.OnRamperGetSupportedDefaultsAllDefaultResponse,
	TError = OnRamperGetSupportedDefaultsAllError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OnRamperGetSupportedDefaultsAllData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseOnRamperGetSupportedDefaultsAllKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			onRamperGetSupportedDefaultsAll({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useOnRamperGetSupportedAssetsSuspense = <
	TData = Common.OnRamperGetSupportedAssetsDefaultResponse,
	TError = OnRamperGetSupportedAssetsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OnRamperGetSupportedAssetsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseOnRamperGetSupportedAssetsKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			onRamperGetSupportedAssets({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useOnRamperGetSupportedOnRampsAllSuspense = <
	TData = Common.OnRamperGetSupportedOnRampsAllDefaultResponse,
	TError = OnRamperGetSupportedOnRampsAllError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OnRamperGetSupportedOnRampsAllData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseOnRamperGetSupportedOnRampsAllKeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			onRamperGetSupportedOnRampsAll({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useOnRamperGetQuotesBuySuspense = <
	TData = Common.OnRamperGetQuotesBuyDefaultResponse,
	TError = OnRamperGetQuotesBuyError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OnRamperGetQuotesBuyData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseOnRamperGetQuotesBuyKeyFn(clientOptions, queryKey),
		queryFn: () =>
			onRamperGetQuotesBuy({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useOnRamperGetQuotesSellSuspense = <
	TData = Common.OnRamperGetQuotesSellDefaultResponse,
	TError = OnRamperGetQuotesSellError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OnRamperGetQuotesSellData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseOnRamperGetQuotesSellKeyFn(clientOptions, queryKey),
		queryFn: () =>
			onRamperGetQuotesSell({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetCollectionSuspense = <
	TData = Common.GetCollectionDefaultResponse,
	TError = GetCollectionError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetCollectionData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetCollectionKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getCollection({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetNftSuspense = <
	TData = Common.GetNftDefaultResponse,
	TError = GetNftError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetNftData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetNftKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getNft({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetMessageSuspense = <
	TData = Common.GetMessageDefaultResponse,
	TError = GetMessageError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<unknown, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetMessageKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getMessage({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetMarketsSuspense = <
	TData = Common.GetMarketsDefaultResponse,
	TError = GetMarketsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetMarketsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetMarketsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getMarkets({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetMarketSuspense = <
	TData = Common.GetMarketDefaultResponse,
	TError = GetMarketError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetMarketData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetMarketKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getMarket({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetOrderBookSuspense = <
	TData = Common.GetOrderBookDefaultResponse,
	TError = GetOrderBookError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetOrderBookData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetOrderBookKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getOrderBook({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetOpenOrdersSuspense = <
	TData = Common.GetOpenOrdersDefaultResponse,
	TError = GetOpenOrdersError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetOpenOrdersData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetOpenOrdersKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getOpenOrders({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetOrderSuspense = <
	TData = Common.GetOrderDefaultResponse,
	TError = GetOrderError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetOrderData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetOrderKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getOrder({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTradesSuspense = <
	TData = Common.GetTradesDefaultResponse,
	TError = GetTradesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTradesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetTradesKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTrades({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetNotifications1Suspense = <
	TData = Common.GetNotifications1DefaultResponse,
	TError = GetNotifications1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetNotifications1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetNotifications1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getNotifications1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetBalanceAllowanceSuspense = <
	TData = Common.GetBalanceAllowanceDefaultResponse,
	TError = GetBalanceAllowanceError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetBalanceAllowanceData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetBalanceAllowanceKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getBalanceAllowance({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetPricesHistorySuspense = <
	TData = Common.GetPricesHistoryDefaultResponse,
	TError = GetPricesHistoryError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetPricesHistoryData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetPricesHistoryKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getPricesHistory({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetMarketTradeEventsSuspense = <
	TData = Common.GetMarketTradeEventsDefaultResponse,
	TError = GetMarketTradeEventsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetMarketTradeEventsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetMarketTradeEventsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getMarketTradeEvents({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetPools1Suspense = <
	TData = Common.GetPools1DefaultResponse,
	TError = GetPools1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetPools1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetPools1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getPools1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetPoolByAddress1Suspense = <
	TData = Common.GetPoolByAddress1DefaultResponse,
	TError = GetPoolByAddress1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetPoolByAddress1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetPoolByAddress1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getPoolByAddress1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetPoolsByType1Suspense = <
	TData = Common.GetPoolsByType1DefaultResponse,
	TError = GetPoolsByType1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetPoolsByType1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetPoolsByType1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getPoolsByType1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTopAprPools1Suspense = <
	TData = Common.GetTopAprPools1DefaultResponse,
	TError = GetTopAprPools1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTopAprPools1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetTopAprPools1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTopAprPools1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTokensSuspense = <
	TData = Common.GetTokensDefaultResponse,
	TError = GetTokensError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTokensData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetTokensKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTokens({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetInfoSuspense = <
	TData = Common.GetInfoDefaultResponse,
	TError = GetInfoError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetInfoData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetInfoKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getInfo({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTotalValueLocked1Suspense = <
	TData = Common.GetTotalValueLocked1DefaultResponse,
	TError = GetTotalValueLocked1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTotalValueLocked1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetTotalValueLocked1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTotalValueLocked1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useCalculateOptimalVoteDistribution1Suspense = <
	TData = Common.CalculateOptimalVoteDistribution1DefaultResponse,
	TError = CalculateOptimalVoteDistribution1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<CalculateOptimalVoteDistribution1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseCalculateOptimalVoteDistribution1KeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			calculateOptimalVoteDistribution1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetBalanceOf1Suspense = <
	TData = Common.GetBalanceOf1DefaultResponse,
	TError = GetBalanceOf1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetBalanceOf1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetBalanceOf1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getBalanceOf1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetOwnerOf1Suspense = <
	TData = Common.GetOwnerOf1DefaultResponse,
	TError = GetOwnerOf1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetOwnerOf1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetOwnerOf1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getOwnerOf1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTokenUri1Suspense = <
	TData = Common.GetTokenUri1DefaultResponse,
	TError = GetTokenUri1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTokenUri1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetTokenUri1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTokenUri1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTotalSupply1Suspense = <
	TData = Common.GetTotalSupply1DefaultResponse,
	TError = GetTotalSupply1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTotalSupply1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetTotalSupply1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTotalSupply1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetBalanceOfNft1Suspense = <
	TData = Common.GetBalanceOfNft1DefaultResponse,
	TError = GetBalanceOfNft1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetBalanceOfNft1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetBalanceOfNft1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getBalanceOfNft1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetLockedSuspense = <
	TData = Common.GetLockedDefaultResponse,
	TError = GetLockedError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetLockedData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetLockedKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getLocked({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetVotes1Suspense = <
	TData = Common.GetVotes1DefaultResponse,
	TError = GetVotes1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetVotes1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetVotes1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getVotes1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetPastVotes1Suspense = <
	TData = Common.GetPastVotes1DefaultResponse,
	TError = GetPastVotes1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetPastVotes1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetPastVotes1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getPastVotes1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetDelegates1Suspense = <
	TData = Common.GetDelegates1DefaultResponse,
	TError = GetDelegates1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetDelegates1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetDelegates1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getDelegates1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetFactory1Suspense = <
	TData = Common.GetFactory1DefaultResponse,
	TError = GetFactory1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetFactory1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetFactory1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getFactory1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetAmountOut1Suspense = <
	TData = Common.GetAmountOut1DefaultResponse,
	TError = GetAmountOut1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetAmountOut1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetAmountOut1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getAmountOut1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetAmountsOut1Suspense = <
	TData = Common.GetAmountsOut1DefaultResponse,
	TError = GetAmountsOut1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetAmountsOut1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetAmountsOut1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getAmountsOut1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetReservesSuspense = <
	TData = Common.GetReservesDefaultResponse,
	TError = GetReservesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetReservesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetReservesKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getReserves({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useIsPairSuspense = <
	TData = Common.IsPairDefaultResponse,
	TError = IsPairError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<IsPairData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseIsPairKeyFn(clientOptions, queryKey),
		queryFn: () =>
			isPair({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const usePairForSuspense = <
	TData = Common.PairForDefaultResponse,
	TError = PairForError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<PairForData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UsePairForKeyFn(clientOptions, queryKey),
		queryFn: () =>
			pairFor({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useQuoteAddLiquiditySuspense = <
	TData = Common.QuoteAddLiquidityDefaultResponse,
	TError = QuoteAddLiquidityError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<QuoteAddLiquidityData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseQuoteAddLiquidityKeyFn(clientOptions, queryKey),
		queryFn: () =>
			quoteAddLiquidity({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useQuoteRemoveLiquiditySuspense = <
	TData = Common.QuoteRemoveLiquidityDefaultResponse,
	TError = QuoteRemoveLiquidityError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<QuoteRemoveLiquidityData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseQuoteRemoveLiquidityKeyFn(clientOptions, queryKey),
		queryFn: () =>
			quoteRemoveLiquidity({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useSortTokensSuspense = <
	TData = Common.SortTokensDefaultResponse,
	TError = SortTokensError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<SortTokensData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseSortTokensKeyFn(clientOptions, queryKey),
		queryFn: () =>
			sortTokens({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetWeth1Suspense = <
	TData = Common.GetWeth1DefaultResponse,
	TError = GetWeth1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetWeth1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetWeth1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getWeth1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTotalWeight1Suspense = <
	TData = Common.GetTotalWeight1DefaultResponse,
	TError = GetTotalWeight1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTotalWeight1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetTotalWeight1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTotalWeight1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetWeights1Suspense = <
	TData = Common.GetWeights1DefaultResponse,
	TError = GetWeights1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetWeights1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetWeights1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getWeights1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useIsGauge1Suspense = <
	TData = Common.IsGauge1DefaultResponse,
	TError = IsGauge1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<IsGauge1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseIsGauge1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			isGauge1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useIsWhitelisted1Suspense = <
	TData = Common.IsWhitelisted1DefaultResponse,
	TError = IsWhitelisted1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<IsWhitelisted1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseIsWhitelisted1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			isWhitelisted1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetLastVoted1Suspense = <
	TData = Common.GetLastVoted1DefaultResponse,
	TError = GetLastVoted1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetLastVoted1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetLastVoted1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getLastVoted1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useListRippleAccountsSuspense = <
	TData = Common.ListRippleAccountsDefaultResponse,
	TError = ListRippleAccountsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<ListRippleAccountsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseListRippleAccountsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			listRippleAccounts({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetRippleAccountSuspense = <
	TData = Common.GetRippleAccountDefaultResponse,
	TError = GetRippleAccountError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetRippleAccountData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetRippleAccountKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getRippleAccount({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useListSolanaAccountsSuspense = <
	TData = Common.ListSolanaAccountsDefaultResponse,
	TError = ListSolanaAccountsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<ListSolanaAccountsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseListSolanaAccountsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			listSolanaAccounts({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetSolanaAccountSuspense = <
	TData = Common.GetSolanaAccountDefaultResponse,
	TError = GetSolanaAccountError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetSolanaAccountData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetSolanaAccountKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getSolanaAccount({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetFusionsSuspense = <
	TData = Common.GetFusionsDefaultResponse,
	TError = GetFusionsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetFusionsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetFusionsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getFusions({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetFusionByAddressSuspense = <
	TData = Common.GetFusionByAddressDefaultResponse,
	TError = GetFusionByAddressError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetFusionByAddressData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetFusionByAddressKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getFusionByAddress({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetFusionsByTypeSuspense = <
	TData = Common.GetFusionsByTypeDefaultResponse,
	TError = GetFusionsByTypeError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetFusionsByTypeData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetFusionsByTypeKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getFusionsByType({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTopAprFusionsSuspense = <
	TData = Common.GetTopAprFusionsDefaultResponse,
	TError = GetTopAprFusionsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTopAprFusionsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetTopAprFusionsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTopAprFusions({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTotalValueLocked2Suspense = <
	TData = Common.GetTotalValueLocked2DefaultResponse,
	TError = GetTotalValueLocked2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTotalValueLocked2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetTotalValueLocked2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTotalValueLocked2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTopTokensSuspense = <
	TData = Common.GetTopTokensDefaultResponse,
	TError = GetTopTokensError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTopTokensData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetTopTokensKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTopTokens({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTopPairsSuspense = <
	TData = Common.GetTopPairsDefaultResponse,
	TError = GetTopPairsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTopPairsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetTopPairsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTopPairs({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useCalculateOptimalVoteDistribution2Suspense = <
	TData = Common.CalculateOptimalVoteDistribution2DefaultResponse,
	TError = CalculateOptimalVoteDistribution2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<CalculateOptimalVoteDistribution2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseCalculateOptimalVoteDistribution2KeyFn(
			clientOptions,
			queryKey,
		),
		queryFn: () =>
			calculateOptimalVoteDistribution2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetQuoteSuspense = <
	TData = Common.GetQuoteDefaultResponse,
	TError = GetQuoteError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetQuoteData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetQuoteKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getQuote({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetGasPriceSuspense = <
	TData = Common.GetGasPriceDefaultResponse,
	TError = GetGasPriceError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetGasPriceData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetGasPriceKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getGasPrice({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetSupportedChainsSuspense = <
	TData = Common.GetSupportedChainsDefaultResponse,
	TError = GetSupportedChainsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetSupportedChainsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetSupportedChainsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getSupportedChains({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetSupportedProvidersSuspense = <
	TData = Common.GetSupportedProvidersDefaultResponse,
	TError = GetSupportedProvidersError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetSupportedProvidersData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetSupportedProvidersKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getSupportedProviders({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useTronListTronAccountsSuspense = <
	TData = Common.TronListTronAccountsDefaultResponse,
	TError = TronListTronAccountsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<TronListTronAccountsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseTronListTronAccountsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			tronListTronAccounts({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useTronGetTronAccountSuspense = <
	TData = Common.TronGetTronAccountDefaultResponse,
	TError = TronGetTronAccountError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<TronGetTronAccountData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseTronGetTronAccountKeyFn(clientOptions, queryKey),
		queryFn: () =>
			tronGetTronAccount({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetWeth2Suspense = <
	TData = Common.GetWeth2DefaultResponse,
	TError = GetWeth2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetWeth2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetWeth2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getWeth2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const usePositionsSuspense = <
	TData = Common.PositionsDefaultResponse,
	TError = PositionsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<PositionsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UsePositionsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			positions({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useTokenOfOwnerByIndexSuspense = <
	TData = Common.TokenOfOwnerByIndexDefaultResponse,
	TError = TokenOfOwnerByIndexError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<TokenOfOwnerByIndexData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseTokenOfOwnerByIndexKeyFn(clientOptions, queryKey),
		queryFn: () =>
			tokenOfOwnerByIndex({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useBalanceOfSuspense = <
	TData = Common.BalanceOfDefaultResponse,
	TError = BalanceOfError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<BalanceOfData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseBalanceOfKeyFn(clientOptions, queryKey),
		queryFn: () =>
			balanceOf({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useDomainSeparatorSuspense = <
	TData = Common.DomainSeparatorDefaultResponse,
	TError = DomainSeparatorError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<DomainSeparatorData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseDomainSeparatorKeyFn(clientOptions, queryKey),
		queryFn: () =>
			domainSeparator({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const usePermitTypehashSuspense = <
	TData = Common.PermitTypehashDefaultResponse,
	TError = PermitTypehashError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<PermitTypehashData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UsePermitTypehashKeyFn(clientOptions, queryKey),
		queryFn: () =>
			permitTypehash({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useWeth9Suspense = <
	TData = Common.Weth9DefaultResponse,
	TError = Weth9Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Weth9Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseWeth9KeyFn(clientOptions, queryKey),
		queryFn: () =>
			weth9({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useFactorySuspense = <
	TData = Common.FactoryDefaultResponse,
	TError = FactoryError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<FactoryData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseFactoryKeyFn(clientOptions, queryKey),
		queryFn: () =>
			factory({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useNameSuspense = <
	TData = Common.NameDefaultResponse,
	TError = NameError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<NameData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseNameKeyFn(clientOptions, queryKey),
		queryFn: () =>
			name({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useSymbolSuspense = <
	TData = Common.SymbolDefaultResponse,
	TError = SymbolError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<SymbolData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseSymbolKeyFn(clientOptions, queryKey),
		queryFn: () =>
			symbol({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useTokenUriSuspense = <
	TData = Common.TokenUriDefaultResponse,
	TError = TokenUriError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<TokenUriData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseTokenUriKeyFn(clientOptions, queryKey),
		queryFn: () =>
			tokenUri({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useBaseUriSuspense = <
	TData = Common.BaseUriDefaultResponse,
	TError = BaseUriError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<BaseUriData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseBaseUriKeyFn(clientOptions, queryKey),
		queryFn: () =>
			baseUri({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useOwnerOfSuspense = <
	TData = Common.OwnerOfDefaultResponse,
	TError = OwnerOfError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OwnerOfData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseOwnerOfKeyFn(clientOptions, queryKey),
		queryFn: () =>
			ownerOf({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetApproved1Suspense = <
	TData = Common.GetApproved1DefaultResponse,
	TError = GetApproved1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetApproved1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetApproved1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getApproved1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useIsApprovedForAll1Suspense = <
	TData = Common.IsApprovedForAll1DefaultResponse,
	TError = IsApprovedForAll1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<IsApprovedForAll1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseIsApprovedForAll1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			isApprovedForAll1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useTotalSupplySuspense = <
	TData = Common.TotalSupplyDefaultResponse,
	TError = TotalSupplyError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<TotalSupplyData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseTotalSupplyKeyFn(clientOptions, queryKey),
		queryFn: () =>
			totalSupply({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useTokenByIndexSuspense = <
	TData = Common.TokenByIndexDefaultResponse,
	TError = TokenByIndexError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<TokenByIndexData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseTokenByIndexKeyFn(clientOptions, queryKey),
		queryFn: () =>
			tokenByIndex({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useSupportsInterfaceSuspense = <
	TData = Common.SupportsInterfaceDefaultResponse,
	TError = SupportsInterfaceError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<SupportsInterfaceData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseSupportsInterfaceKeyFn(clientOptions, queryKey),
		queryFn: () =>
			supportsInterface({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useWeth91Suspense = <
	TData = Common.Weth91DefaultResponse,
	TError = Weth91Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Weth91Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseWeth91KeyFn(clientOptions, queryKey),
		queryFn: () =>
			weth91({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useFactory1Suspense = <
	TData = Common.Factory1DefaultResponse,
	TError = Factory1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Factory1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseFactory1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			factory1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetBalanceOf2Suspense = <
	TData = Common.GetBalanceOf2DefaultResponse,
	TError = GetBalanceOf2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetBalanceOf2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetBalanceOf2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getBalanceOf2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetOwnerOf2Suspense = <
	TData = Common.GetOwnerOf2DefaultResponse,
	TError = GetOwnerOf2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetOwnerOf2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetOwnerOf2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getOwnerOf2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTokenUri2Suspense = <
	TData = Common.GetTokenUri2DefaultResponse,
	TError = GetTokenUri2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTokenUri2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetTokenUri2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTokenUri2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetApproved2Suspense = <
	TData = Common.GetApproved2DefaultResponse,
	TError = GetApproved2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetApproved2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetApproved2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getApproved2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useIsApprovedForAll2Suspense = <
	TData = Common.IsApprovedForAll2DefaultResponse,
	TError = IsApprovedForAll2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<IsApprovedForAll2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseIsApprovedForAll2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			isApprovedForAll2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetBalanceOfNft2Suspense = <
	TData = Common.GetBalanceOfNft2DefaultResponse,
	TError = GetBalanceOfNft2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetBalanceOfNft2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetBalanceOfNft2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getBalanceOfNft2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTotalSupply2Suspense = <
	TData = Common.GetTotalSupply2DefaultResponse,
	TError = GetTotalSupply2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTotalSupply2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetTotalSupply2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTotalSupply2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetLocked1Suspense = <
	TData = Common.GetLocked1DefaultResponse,
	TError = GetLocked1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetLocked1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetLocked1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getLocked1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetLockedEndSuspense = <
	TData = Common.GetLockedEndDefaultResponse,
	TError = GetLockedEndError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetLockedEndData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetLockedEndKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getLockedEnd({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetLastUserSlopeSuspense = <
	TData = Common.GetLastUserSlopeDefaultResponse,
	TError = GetLastUserSlopeError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetLastUserSlopeData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetLastUserSlopeKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getLastUserSlope({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetUserPointHistorySuspense = <
	TData = Common.GetUserPointHistoryDefaultResponse,
	TError = GetUserPointHistoryError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetUserPointHistoryData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetUserPointHistoryKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getUserPointHistory({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetUserPointHistoryTsSuspense = <
	TData = Common.GetUserPointHistoryTsDefaultResponse,
	TError = GetUserPointHistoryTsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetUserPointHistoryTsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetUserPointHistoryTsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getUserPointHistoryTs({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetBalanceOfAtNftSuspense = <
	TData = Common.GetBalanceOfAtNftDefaultResponse,
	TError = GetBalanceOfAtNftError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetBalanceOfAtNftData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetBalanceOfAtNftKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getBalanceOfAtNft({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTotalSupplyAtSuspense = <
	TData = Common.GetTotalSupplyAtDefaultResponse,
	TError = GetTotalSupplyAtError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTotalSupplyAtData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetTotalSupplyAtKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTotalSupplyAt({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTotalSupplyAtTSuspense = <
	TData = Common.GetTotalSupplyAtTDefaultResponse,
	TError = GetTotalSupplyAtTError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTotalSupplyAtTData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetTotalSupplyAtTKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTotalSupplyAtT({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetPastVotes2Suspense = <
	TData = Common.GetPastVotes2DefaultResponse,
	TError = GetPastVotes2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetPastVotes2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetPastVotes2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getPastVotes2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetPastTotalSupplySuspense = <
	TData = Common.GetPastTotalSupplyDefaultResponse,
	TError = GetPastTotalSupplyError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetPastTotalSupplyData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetPastTotalSupplyKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getPastTotalSupply({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetVotes2Suspense = <
	TData = Common.GetVotes2DefaultResponse,
	TError = GetVotes2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetVotes2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetVotes2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getVotes2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetDelegates2Suspense = <
	TData = Common.GetDelegates2DefaultResponse,
	TError = GetDelegates2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetDelegates2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetDelegates2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getDelegates2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTotalWeight2Suspense = <
	TData = Common.GetTotalWeight2DefaultResponse,
	TError = GetTotalWeight2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTotalWeight2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetTotalWeight2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTotalWeight2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetWeights2Suspense = <
	TData = Common.GetWeights2DefaultResponse,
	TError = GetWeights2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetWeights2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseGetWeights2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getWeights2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useIsGauge2Suspense = <
	TData = Common.IsGauge2DefaultResponse,
	TError = IsGauge2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<IsGauge2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseIsGauge2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			isGauge2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useIsWhitelisted2Suspense = <
	TData = Common.IsWhitelisted2DefaultResponse,
	TError = IsWhitelisted2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<IsWhitelisted2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseIsWhitelisted2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			isWhitelisted2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLastVotedSuspense = <
	TData = Common.LastVotedDefaultResponse,
	TError = LastVotedError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LastVotedData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UseLastVotedKeyFn(clientOptions, queryKey),
		queryFn: () =>
			lastVoted({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const usePoolVoteLengthSuspense = <
	TData = Common.PoolVoteLengthDefaultResponse,
	TError = PoolVoteLengthError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<PoolVoteLengthData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useSuspenseQuery<TData, TError>({
		queryKey: Common.UsePoolVoteLengthKeyFn(clientOptions, queryKey),
		queryFn: () =>
			poolVoteLength({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
