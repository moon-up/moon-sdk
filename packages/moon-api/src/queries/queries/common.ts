// generated with @7nohe/openapi-react-query-codegen@2.0.0-beta.3

import type { Options } from "@hey-api/client-fetch";
import type { UseQueryResult } from "@tanstack/react-query";
import type {
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
	aavev3PoolAddressProviderSetAclAdmin,
	aavev3PoolAddressProviderSetAclManager,
	aavev3PoolAddressProviderSetAddress,
	aavev3PoolAddressProviderSetMarketId,
	aavev3PoolAddressProviderSetPoolConfiguratorImpl,
	aavev3PoolAddressProviderSetPoolImpl,
	aavev3PoolBorrow,
	aavev3PoolGetReserveData,
	aavev3PoolGetUserAccountData,
	aavev3PoolLiquidationCall,
	aavev3PoolRepay,
	aavev3PoolSetUserUseReserveAsCollateral,
	aavev3PoolSupply,
	aavev3PoolWithdraw,
	aavEv3RewardsClaimAllRewards,
	aavEv3RewardsClaimAllRewardsOnBehalf,
	aavEv3RewardsClaimAllRewardsToSelf,
	aavEv3RewardsClaimRewards,
	aavEv3RewardsClaimRewardsOnBehalf,
	aavEv3RewardsClaimRewardsToSelf,
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
	abstain,
	abstain1,
	accountsBroadcastEthreeumTransaction,
	accountsCreateEthereumAccount,
	accountsDeleteEthereumAccount,
	accountsDeployContract,
	accountsEncodeAbiData,
	accountsEstimateGas,
	accountsEthereumGetNativeBalance,
	accountsEthereumGetNonce,
	accountsExportEthreumAccount,
	accountsGetEthreumAccount,
	accountsListEthereumAccounts,
	accountsSignEthereumTransaction,
	accountsSignEthereumTypedData,
	accountsSignEthreumMessage,
	accountsSuggestGasPrice,
	accountsTransferEth,
	addLiquidity,
	addLiquidity1,
	addLiquidity2,
	addLiquidityEth,
	addLiquidityEth1,
	addLiquidityEth2,
	approve,
	approve1,
	approve2,
	approve3,
	approveForPolymarket,
	attach,
	attach1,
	attachTokenToGauge,
	attachTokenToGauge1,
	balanceOf,
	baseUri,
	bitcoinBitcoinCreateAccount,
	bitcoinBitcoinCreateBrc20Transaction,
	bitcoinBitcoinCreateSrc20Inscription,
	bitcoinBitcoinDeleteAccount,
	bitcoinBitcoinExportAccount,
	bitcoinBitcoinGenerateUnsignedPsbtHex,
	bitcoinBitcoinGetAccount,
	bitcoinBitcoinSignTransaction,
	bitcoinCashBitcoinCashCreateAccount,
	bitcoinCashBitcoinCashDeleteAccount,
	bitcoinCashBitcoinCashExportAccount,
	bitcoinCashBitcoinCashGenerateUnsignedPsbtHex,
	bitcoinCashBitcoinCashGetAccount,
	bitcoinCashBitcoinCashSignBitcoinTransaction,
	bitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPath,
	bitcoinCashBitcoinCashSignTransaction,
	bitcoinCashBitcoinCashSignTransactionWithMemo,
	bitcoinCashListAccounts,
	bitcoinListAccounts,
	burn,
	burn1,
	calculateOptimalVoteDistribution,
	calculateOptimalVoteDistribution1,
	calculateOptimalVoteDistribution2,
	cancelMarketOrders,
	cancelOrder,
	cancelOrders,
	chartsGetChartAnalysis,
	checkpoint,
	checkpoint1,
	checkpointDelegatee,
	claim,
	claimBribes,
	claimBribes1,
	claimBribes2,
	claimFees,
	claimFees1,
	claimFees2,
	claimRewards,
	claimRewards1,
	claimRewards2,
	collect,
	componentsCreateComponent,
	componentsForceEmbedding,
	componentsGetComponent,
	componentsGetComponentCapabilitiesDescription,
	componentsGetComponents,
	componentsSearchComponents,
	componentsUpdateComponent,
	componentsUpdateEmbedding,
	cosmosCosmosCreateAccount,
	cosmosCosmosDeleteAccount,
	cosmosCosmosExportAccount,
	cosmosCosmosGetAccount,
	cosmosCosmosListAccounts,
	cosmosCosmosSignIbcTransferTransaction,
	cosmosCosmosSignMessage,
	cosmosCosmosSignTransferTransaction,
	createAndInitializePoolIfNecessary,
	createCollectionOffer,
	createDelegatedLockFor,
	createEosAccount,
	createFlow,
	createGauge,
	createGauge1,
	createGauge2,
	createJob,
	createLock,
	createLock1,
	createLock2,
	createLockFor,
	createLockFor1,
	createMarketBuyOrder,
	createOffer,
	createOrder,
	createRippleAccount,
	createSolanaAccount,
	createUserDefinedFunction,
	dataExecuteCustomSupabaseQuery,
	dataGetPortfolioFetchStatus,
	dataGetTokensMetadata,
	dataGetUserWalletPortfolio,
	dataGetWalletNfTs,
	dataGetWalletTokenBalances,
	dataGetWalletTransactionHistory,
	decreaseLiquidity,
	delegate,
	delegate1,
	delegate2,
	delegateBySig,
	delegateBySig1,
	deleteEosAccount,
	deleteFlow,
	deleteJob,
	deleteRippleAccount,
	deleteSolanaAccount,
	deleteUserDefinedFunction,
	depositFor,
	detach,
	detach1,
	detachTokenFromGauge,
	detachTokenFromGauge1,
	distribute,
	distribute1,
	distribute2,
	dogecoinDogeCoinCreateNewAccount,
	dogecoinDogeCoinDeleteAccount,
	dogecoinDogeCoinExportAccountDetails,
	dogecoinDogeCoinGetAccountDetails,
	dogecoinDogeCoinSignTransaction,
	dogecoinDogeCoinSignTransactionWithMemo,
	dogeCoinListAccounts,
	domainSeparator,
	dropNotifications,
	ensResolve,
	ensReverseResolve,
	erc1155Erc1155BalanceOf,
	erc1155Erc1155BalanceOfBatch,
	erc1155Erc1155IsApprovedForAll,
	erc1155Erc1155SafeBatchTransferFrom,
	erc1155Erc1155SafeTransferFrom,
	erc1155Erc1155SetApprovalForAll,
	erc20ApproveErc20TokenSpending,
	erc20GetErc20TokenAllowance,
	erc20GetErc20TokenBalance,
	erc20GetErc20TokenDecimals,
	erc20GetErc20TokenName,
	erc20GetErc20TokenSymbol,
	erc20GetErc20TokenTotalSupply,
	erc20TransferErc20Token,
	erc20TransferFromErc20Token,
	erc4626ApproveErc4626,
	erc4626DepositToErc4626,
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
	erc4626MintErc4626Shares,
	erc4626RedeemErc4626Shares,
	erc4626TransferErc4626,
	erc4626TransferFromErc4626,
	erc4626WithdrawFromErc4626,
	erc721ApproveErc721,
	erc721GetErc721Approved,
	erc721GetErc721BalanceOf,
	erc721GetErc721IsApprovedForAll,
	erc721GetErc721Name,
	erc721GetErc721OwnerOf,
	erc721GetErc721Symbol,
	erc721GetErc721TokenUri,
	erc721SafeTransferFromErc721,
	erc721SafeTransferFromWithDataErc721,
	erc721SetApprovalForAllErc721,
	erc721TransferFromErc721,
	exactInput,
	exactInputSingle,
	exactOutput,
	exactOutputSingle,
	executeJob,
	exportEosAccount,
	exportRippleAccount,
	exportSolanaAccount,
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
	financialDatasetsSearchFinancials,
	financialDatasetsSearchFinancialsByLineItems,
	getAllReservesTokens,
	getAmountIn,
	getAmountOut,
	getAmountOut1,
	getAmountOut2,
	getAmountsIn,
	getAmountsOut,
	getAmountsOut1,
	getAmountsOut2,
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
	getZapQuote,
	globalCheckpoint,
	increaseAmount,
	increaseLiquidity,
	increaseLockAmount,
	increaseLockAmount1,
	increaseUnlockTime,
	increaseUnlockTime1,
	increaseUnlockTime2,
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
	jupiterGetQuote,
	jupiterGetSwapInstructions,
	jupiterGetTokens,
	jupiterSwap,
	killGauge,
	killGauge1,
	killGauge2,
	lastVoted,
	lendingPoolBorrow,
	lendingPoolDeposit,
	lendingPoolFlashLoan,
	lendingPoolGetAddressesProvider,
	lendingPoolGetFlashLoanPremiumTotal,
	lendingPoolGetLendingPoolRevision,
	lendingPoolGetMaxNumberReserves,
	lendingPoolGetMaxStableRateBorrowSizePercent,
	lendingPoolGetReserveData,
	lendingPoolGetReservesList,
	lendingPoolGetUserAccountData,
	lendingPoolIsPaused,
	lendingPoolLiquidationCall,
	lendingPoolRepay,
	lendingPoolSetUserUseReserveAsCollateral,
	lendingPoolSwapBorrowRateMode,
	leveragerDeleverageErc20,
	leveragerDeleverageNative,
	leveragerExecuteOperation,
	leveragerGetAddressesProvider,
	leveragerGetDefaultAdminRole,
	leveragerGetLendingPool,
	leveragerGetMinHf,
	leveragerGetRoleAdmin,
	leveragerGetWeth,
	leveragerGrantRole,
	leveragerHasRole,
	leveragerIsPaused,
	leveragerLeverageErc20,
	leveragerLeverageNative,
	leveragerPause,
	leveragerRenounceRole,
	leveragerRevokeRole,
	leveragerSupportsInterface,
	leveragerUnpause,
	lifiGetAllPossibleConnections,
	lifiGetChains,
	lifiGetConnections,
	lifiGetQuote,
	lifiGetStatus,
	lifiGetTokenDetails,
	lifiGetTokens,
	lifiPostQuote,
	listEosAccounts,
	listFlows,
	listJobs,
	listLitecoinAccounts,
	listRippleAccounts,
	listSolanaAccounts,
	listUserDefinedFunctions,
	litecoinCreateLitecoinAccount,
	litecoinDeleteLitecoinAccount,
	litecoinExportLitecoinAccount,
	litecoinGetLitecoinAccount,
	litecoinSignLitecoinTransaction,
	litecoinSignLitecoinTransactionWithMemo,
	markNotificationAsRead,
	merge,
	merge1,
	merge2,
	mint,
	multicall,
	multicall1,
	multiSignSolanaTransaction,
	name,
	notifyRewardAmount,
	notifyRewardAmount1,
	notifyRewardAmount2,
	odosAssembleTransaction,
	odosGetContractInfo,
	odosGetCurrentBlock,
	odosGetExecutorAddress,
	odosGetLiquiditySources,
	odosGetQuote,
	odosGetRouterAddress,
	odosGetSupportedChains,
	odosGetSupportedTokens,
	odosSwapTokens,
	onRamperCheckout,
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
	permit,
	permitTypehash,
	poke,
	poke1,
	poke2,
	poolVoteLength,
	positions,
	postOrder,
	quote,
	quoteAddLiquidity,
	quoteRemoveLiquidity,
	refundEth,
	refundEth1,
	removeLiquidity,
	removeLiquidity1,
	removeLiquidityEth,
	removeLiquidityEth1,
	removeLiquidityEthSupportingFeeOnTransferTokens,
	removeLiquidityEthWithPermit,
	removeLiquidityEthWithPermitSupportingFeeOnTransferTokens,
	removeLiquidityWithPermit,
	reset,
	reset1,
	reset2,
	reviveGauge,
	reviveGauge1,
	reviveGauge2,
	safeTransferFrom,
	safeTransferFrom1,
	scheduleJob,
	selfPermit,
	selfPermitAllowed,
	selfPermitAllowedIfNecessary,
	selfPermitIfNecessary,
	setApprovalForAll,
	setApprovalForAll1,
	setApprovalForAll2,
	setClaimApproval,
	setClaimApprovalForAll,
	signEosTransaction,
	signRippleTransaction,
	signSolanaTransaction,
	sortTokens,
	split,
	split1,
	split2,
	supportsInterface,
	swap,
	swapEthForExactTokens,
	swapExactEthForTokens,
	swapExactEthForTokens1,
	swapExactEthForTokens2,
	swapExactEthForTokensSupportingFeeOnTransferTokens,
	swapExactTokensForEth,
	swapExactTokensForEth1,
	swapExactTokensForEth2,
	swapExactTokensForEthSupportingFeeOnTransferTokens,
	swapExactTokensForTokens,
	swapExactTokensForTokens1,
	swapExactTokensForTokens2,
	swapExactTokensForTokensSupportingFeeOnTransferTokens,
	swapTokensForExactEth,
	swapTokensForExactTokens,
	sweepToken,
	sweepToken1,
	sweepTokenWithFee,
	symbol,
	tokenByIndex,
	tokenOfOwnerByIndex,
	tokenUri,
	totalSupply,
	transferFrom,
	transferFrom1,
	transferFrom2,
	transferFrom3,
	transferSolanaTransaction,
	transferTokensSignSolanaTransaction,
	tronCreateTronAccount,
	tronDeleteTronAccount,
	tronExportTronAccount,
	tronGetTronAccount,
	tronListTronAccounts,
	tronSignTronTransaction,
	unlockPermanent,
	unsafeSwapExactTokensForTokens,
	unscheduleJob,
	unwrapWeth,
	unwrapWeth9,
	unwrapWeth91,
	unwrapWeth9WithFee,
	updateBalanceAllowance,
	updateFlow,
	vote,
	vote1,
	vote2,
	voteWithOptimalDistribution,
	voteWithOptimalDistribution1,
	voteWithOptimalDistribution2,
	voting,
	weth9,
	weth91,
	whitelist,
	whitelist1,
	whitelist2,
	withdraw,
	withdraw1,
	wrapEth,
	zap,
} from "../requests/services.gen";
export type Aavev3PoolGetReserveDataDefaultResponse = Awaited<
	ReturnType<typeof aavev3PoolGetReserveData>
>["data"];
export type Aavev3PoolGetReserveDataQueryResult<
	TData = Aavev3PoolGetReserveDataDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAavev3PoolGetReserveDataKey = "Aavev3PoolGetReserveData";
export const UseAavev3PoolGetReserveDataKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useAavev3PoolGetReserveDataKey, ...(queryKey ?? [clientOptions])];
export type Aavev3PoolGetUserAccountDataDefaultResponse = Awaited<
	ReturnType<typeof aavev3PoolGetUserAccountData>
>["data"];
export type Aavev3PoolGetUserAccountDataQueryResult<
	TData = Aavev3PoolGetUserAccountDataDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAavev3PoolGetUserAccountDataKey =
	"Aavev3PoolGetUserAccountData";
export const UseAavev3PoolGetUserAccountDataKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useAavev3PoolGetUserAccountDataKey, ...(queryKey ?? [clientOptions])];
export type Aavev3PoolAddressProviderGetAclAdminDefaultResponse = Awaited<
	ReturnType<typeof aavev3PoolAddressProviderGetAclAdmin>
>["data"];
export type Aavev3PoolAddressProviderGetAclAdminQueryResult<
	TData = Aavev3PoolAddressProviderGetAclAdminDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAavev3PoolAddressProviderGetAclAdminKey =
	"Aavev3PoolAddressProviderGetAclAdmin";
export const UseAavev3PoolAddressProviderGetAclAdminKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useAavev3PoolAddressProviderGetAclAdminKey,
	...(queryKey ?? [clientOptions]),
];
export type Aavev3PoolAddressProviderGetAclManagerDefaultResponse = Awaited<
	ReturnType<typeof aavev3PoolAddressProviderGetAclManager>
>["data"];
export type Aavev3PoolAddressProviderGetAclManagerQueryResult<
	TData = Aavev3PoolAddressProviderGetAclManagerDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAavev3PoolAddressProviderGetAclManagerKey =
	"Aavev3PoolAddressProviderGetAclManager";
export const UseAavev3PoolAddressProviderGetAclManagerKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useAavev3PoolAddressProviderGetAclManagerKey,
	...(queryKey ?? [clientOptions]),
];
export type Aavev3PoolAddressProviderGetAddressDefaultResponse = Awaited<
	ReturnType<typeof aavev3PoolAddressProviderGetAddress>
>["data"];
export type Aavev3PoolAddressProviderGetAddressQueryResult<
	TData = Aavev3PoolAddressProviderGetAddressDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAavev3PoolAddressProviderGetAddressKey =
	"Aavev3PoolAddressProviderGetAddress";
export const UseAavev3PoolAddressProviderGetAddressKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useAavev3PoolAddressProviderGetAddressKey,
	...(queryKey ?? [clientOptions]),
];
export type Aavev3PoolAddressProviderGetMarketIdDefaultResponse = Awaited<
	ReturnType<typeof aavev3PoolAddressProviderGetMarketId>
>["data"];
export type Aavev3PoolAddressProviderGetMarketIdQueryResult<
	TData = Aavev3PoolAddressProviderGetMarketIdDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAavev3PoolAddressProviderGetMarketIdKey =
	"Aavev3PoolAddressProviderGetMarketId";
export const UseAavev3PoolAddressProviderGetMarketIdKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useAavev3PoolAddressProviderGetMarketIdKey,
	...(queryKey ?? [clientOptions]),
];
export type Aavev3PoolAddressProviderGetPoolDefaultResponse = Awaited<
	ReturnType<typeof aavev3PoolAddressProviderGetPool>
>["data"];
export type Aavev3PoolAddressProviderGetPoolQueryResult<
	TData = Aavev3PoolAddressProviderGetPoolDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAavev3PoolAddressProviderGetPoolKey =
	"Aavev3PoolAddressProviderGetPool";
export const UseAavev3PoolAddressProviderGetPoolKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useAavev3PoolAddressProviderGetPoolKey, ...(queryKey ?? [clientOptions])];
export type Aavev3PoolAddressProviderGetPoolConfiguratorDefaultResponse =
	Awaited<
		ReturnType<typeof aavev3PoolAddressProviderGetPoolConfigurator>
	>["data"];
export type Aavev3PoolAddressProviderGetPoolConfiguratorQueryResult<
	TData = Aavev3PoolAddressProviderGetPoolConfiguratorDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAavev3PoolAddressProviderGetPoolConfiguratorKey =
	"Aavev3PoolAddressProviderGetPoolConfigurator";
export const UseAavev3PoolAddressProviderGetPoolConfiguratorKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useAavev3PoolAddressProviderGetPoolConfiguratorKey,
	...(queryKey ?? [clientOptions]),
];
export type Aavev3PoolAddressProviderGetPriceOracleDefaultResponse = Awaited<
	ReturnType<typeof aavev3PoolAddressProviderGetPriceOracle>
>["data"];
export type Aavev3PoolAddressProviderGetPriceOracleQueryResult<
	TData = Aavev3PoolAddressProviderGetPriceOracleDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAavev3PoolAddressProviderGetPriceOracleKey =
	"Aavev3PoolAddressProviderGetPriceOracle";
export const UseAavev3PoolAddressProviderGetPriceOracleKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useAavev3PoolAddressProviderGetPriceOracleKey,
	...(queryKey ?? [clientOptions]),
];
export type Aavev3PoolAddressProviderRegistryGetAddressesProviderDefaultResponse =
	Awaited<
		ReturnType<typeof aavev3PoolAddressProviderRegistryGetAddressesProvider>
	>["data"];
export type Aavev3PoolAddressProviderRegistryGetAddressesProviderQueryResult<
	TData = Aavev3PoolAddressProviderRegistryGetAddressesProviderDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAavev3PoolAddressProviderRegistryGetAddressesProviderKey =
	"Aavev3PoolAddressProviderRegistryGetAddressesProvider";
export const UseAavev3PoolAddressProviderRegistryGetAddressesProviderKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useAavev3PoolAddressProviderRegistryGetAddressesProviderKey,
	...(queryKey ?? [clientOptions]),
];
export type Aavev3PoolAddressProviderRegistryGetAtokenTotalSupplyDefaultResponse =
	Awaited<
		ReturnType<typeof aavev3PoolAddressProviderRegistryGetAtokenTotalSupply>
	>["data"];
export type Aavev3PoolAddressProviderRegistryGetAtokenTotalSupplyQueryResult<
	TData = Aavev3PoolAddressProviderRegistryGetAtokenTotalSupplyDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAavev3PoolAddressProviderRegistryGetAtokenTotalSupplyKey =
	"Aavev3PoolAddressProviderRegistryGetAtokenTotalSupply";
export const UseAavev3PoolAddressProviderRegistryGetAtokenTotalSupplyKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useAavev3PoolAddressProviderRegistryGetAtokenTotalSupplyKey,
	...(queryKey ?? [clientOptions]),
];
export type Aavev3PoolAddressProviderRegistryGetAllAtokensDefaultResponse =
	Awaited<
		ReturnType<typeof aavev3PoolAddressProviderRegistryGetAllAtokens>
	>["data"];
export type Aavev3PoolAddressProviderRegistryGetAllAtokensQueryResult<
	TData = Aavev3PoolAddressProviderRegistryGetAllAtokensDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAavev3PoolAddressProviderRegistryGetAllAtokensKey =
	"Aavev3PoolAddressProviderRegistryGetAllAtokens";
export const UseAavev3PoolAddressProviderRegistryGetAllAtokensKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useAavev3PoolAddressProviderRegistryGetAllAtokensKey,
	...(queryKey ?? [clientOptions]),
];
export type GetAllReservesTokensDefaultResponse = Awaited<
	ReturnType<typeof getAllReservesTokens>
>["data"];
export type GetAllReservesTokensQueryResult<
	TData = GetAllReservesTokensDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetAllReservesTokensKey = "GetAllReservesTokens";
export const UseGetAllReservesTokensKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetAllReservesTokensKey, ...(queryKey ?? [clientOptions])];
export type Aavev3PoolAddressProviderRegistryGetDebtCeilingDefaultResponse =
	Awaited<
		ReturnType<typeof aavev3PoolAddressProviderRegistryGetDebtCeiling>
	>["data"];
export type Aavev3PoolAddressProviderRegistryGetDebtCeilingQueryResult<
	TData = Aavev3PoolAddressProviderRegistryGetDebtCeilingDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAavev3PoolAddressProviderRegistryGetDebtCeilingKey =
	"Aavev3PoolAddressProviderRegistryGetDebtCeiling";
export const UseAavev3PoolAddressProviderRegistryGetDebtCeilingKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useAavev3PoolAddressProviderRegistryGetDebtCeilingKey,
	...(queryKey ?? [clientOptions]),
];
export type AavEv3RewardsGetRewardsByAssetDefaultResponse = Awaited<
	ReturnType<typeof aavEv3RewardsGetRewardsByAsset>
>["data"];
export type AavEv3RewardsGetRewardsByAssetQueryResult<
	TData = AavEv3RewardsGetRewardsByAssetDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAavEv3RewardsGetRewardsByAssetKey =
	"AavEv3RewardsGetRewardsByAsset";
export const UseAavEv3RewardsGetRewardsByAssetKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useAavEv3RewardsGetRewardsByAssetKey, ...(queryKey ?? [clientOptions])];
export type AavEv3RewardsGetUserRewardsDefaultResponse = Awaited<
	ReturnType<typeof aavEv3RewardsGetUserRewards>
>["data"];
export type AavEv3RewardsGetUserRewardsQueryResult<
	TData = AavEv3RewardsGetUserRewardsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAavEv3RewardsGetUserRewardsKey = "AavEv3RewardsGetUserRewards";
export const UseAavEv3RewardsGetUserRewardsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useAavEv3RewardsGetUserRewardsKey, ...(queryKey ?? [clientOptions])];
export type AavEv3RewardsGetRewardsDataDefaultResponse = Awaited<
	ReturnType<typeof aavEv3RewardsGetRewardsData>
>["data"];
export type AavEv3RewardsGetRewardsDataQueryResult<
	TData = AavEv3RewardsGetRewardsDataDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAavEv3RewardsGetRewardsDataKey = "AavEv3RewardsGetRewardsData";
export const UseAavEv3RewardsGetRewardsDataKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useAavEv3RewardsGetRewardsDataKey, ...(queryKey ?? [clientOptions])];
export type AavEv3IncentiveDataProviderGetFullReservesDataDefaultResponse =
	Awaited<
		ReturnType<typeof aavEv3IncentiveDataProviderGetFullReservesData>
	>["data"];
export type AavEv3IncentiveDataProviderGetFullReservesDataQueryResult<
	TData = AavEv3IncentiveDataProviderGetFullReservesDataDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAavEv3IncentiveDataProviderGetFullReservesDataKey =
	"AavEv3IncentiveDataProviderGetFullReservesData";
export const UseAavEv3IncentiveDataProviderGetFullReservesDataKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useAavEv3IncentiveDataProviderGetFullReservesDataKey,
	...(queryKey ?? [clientOptions]),
];
export type AavEv3IncentiveDataProviderGetReservesDataDefaultResponse = Awaited<
	ReturnType<typeof aavEv3IncentiveDataProviderGetReservesData>
>["data"];
export type AavEv3IncentiveDataProviderGetReservesDataQueryResult<
	TData = AavEv3IncentiveDataProviderGetReservesDataDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAavEv3IncentiveDataProviderGetReservesDataKey =
	"AavEv3IncentiveDataProviderGetReservesData";
export const UseAavEv3IncentiveDataProviderGetReservesDataKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useAavEv3IncentiveDataProviderGetReservesDataKey,
	...(queryKey ?? [clientOptions]),
];
export type AavEv3IncentiveDataProviderGetUserReservesDataDefaultResponse =
	Awaited<
		ReturnType<typeof aavEv3IncentiveDataProviderGetUserReservesData>
	>["data"];
export type AavEv3IncentiveDataProviderGetUserReservesDataQueryResult<
	TData = AavEv3IncentiveDataProviderGetUserReservesDataDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAavEv3IncentiveDataProviderGetUserReservesDataKey =
	"AavEv3IncentiveDataProviderGetUserReservesData";
export const UseAavEv3IncentiveDataProviderGetUserReservesDataKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useAavEv3IncentiveDataProviderGetUserReservesDataKey,
	...(queryKey ?? [clientOptions]),
];
export type AaveV3UiPoolDataProviderEthCurrencyUnitDefaultResponse = Awaited<
	ReturnType<typeof aaveV3UiPoolDataProviderEthCurrencyUnit>
>["data"];
export type AaveV3UiPoolDataProviderEthCurrencyUnitQueryResult<
	TData = AaveV3UiPoolDataProviderEthCurrencyUnitDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAaveV3UiPoolDataProviderEthCurrencyUnitKey =
	"AaveV3UiPoolDataProviderEthCurrencyUnit";
export const UseAaveV3UiPoolDataProviderEthCurrencyUnitKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useAaveV3UiPoolDataProviderEthCurrencyUnitKey,
	...(queryKey ?? [clientOptions]),
];
export type GetReservesDataDefaultResponse = Awaited<
	ReturnType<typeof getReservesData>
>["data"];
export type GetReservesDataQueryResult<
	TData = GetReservesDataDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetReservesDataKey = "GetReservesData";
export const UseGetReservesDataKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetReservesDataKey, ...(queryKey ?? [clientOptions])];
export type AaveV3UiPoolDataProviderReservesListDefaultResponse = Awaited<
	ReturnType<typeof aaveV3UiPoolDataProviderReservesList>
>["data"];
export type AaveV3UiPoolDataProviderReservesListQueryResult<
	TData = AaveV3UiPoolDataProviderReservesListDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAaveV3UiPoolDataProviderReservesListKey =
	"AaveV3UiPoolDataProviderReservesList";
export const UseAaveV3UiPoolDataProviderReservesListKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useAaveV3UiPoolDataProviderReservesListKey,
	...(queryKey ?? [clientOptions]),
];
export type AaveV3UiPoolDataProviderUserReservesDataDefaultResponse = Awaited<
	ReturnType<typeof aaveV3UiPoolDataProviderUserReservesData>
>["data"];
export type AaveV3UiPoolDataProviderUserReservesDataQueryResult<
	TData = AaveV3UiPoolDataProviderUserReservesDataDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAaveV3UiPoolDataProviderUserReservesDataKey =
	"AaveV3UiPoolDataProviderUserReservesData";
export const UseAaveV3UiPoolDataProviderUserReservesDataKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useAaveV3UiPoolDataProviderUserReservesDataKey,
	...(queryKey ?? [clientOptions]),
];
export type AaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorDefaultResponse =
	Awaited<
		ReturnType<
			typeof aaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregator
		>
	>["data"];
export type AaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorQueryResult<
	TData = AaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorKey =
	"AaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregator";
export const UseAaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorKeyFn =
	(clientOptions: Options<unknown, true> = {}, queryKey?: Array<unknown>) => [
		useAaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorKey,
		...(queryKey ?? [clientOptions]),
	];
export type AaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorDefaultResponse =
	Awaited<
		ReturnType<
			typeof aaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregator
		>
	>["data"];
export type AaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorQueryResult<
	TData = AaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorKey =
	"AaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregator";
export const UseAaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorKeyFn =
	(clientOptions: Options<unknown, true> = {}, queryKey?: Array<unknown>) => [
		useAaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorKey,
		...(queryKey ?? [clientOptions]),
	];
export type AaveV3WalletBalanceOfDefaultResponse = Awaited<
	ReturnType<typeof aaveV3WalletBalanceOf>
>["data"];
export type AaveV3WalletBalanceOfQueryResult<
	TData = AaveV3WalletBalanceOfDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAaveV3WalletBalanceOfKey = "AaveV3WalletBalanceOf";
export const UseAaveV3WalletBalanceOfKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useAaveV3WalletBalanceOfKey, ...(queryKey ?? [clientOptions])];
export type AaveV3WalletBatchBalanceOfDefaultResponse = Awaited<
	ReturnType<typeof aaveV3WalletBatchBalanceOf>
>["data"];
export type AaveV3WalletBatchBalanceOfQueryResult<
	TData = AaveV3WalletBatchBalanceOfDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAaveV3WalletBatchBalanceOfKey = "AaveV3WalletBatchBalanceOf";
export const UseAaveV3WalletBatchBalanceOfKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useAaveV3WalletBatchBalanceOfKey, ...(queryKey ?? [clientOptions])];
export type AaveV3WalletUserWalletBalancesDefaultResponse = Awaited<
	ReturnType<typeof aaveV3WalletUserWalletBalances>
>["data"];
export type AaveV3WalletUserWalletBalancesQueryResult<
	TData = AaveV3WalletUserWalletBalancesDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAaveV3WalletUserWalletBalancesKey =
	"AaveV3WalletUserWalletBalances";
export const UseAaveV3WalletUserWalletBalancesKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useAaveV3WalletUserWalletBalancesKey, ...(queryKey ?? [clientOptions])];
export type AccountsListEthereumAccountsDefaultResponse = Awaited<
	ReturnType<typeof accountsListEthereumAccounts>
>["data"];
export type AccountsListEthereumAccountsQueryResult<
	TData = AccountsListEthereumAccountsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAccountsListEthereumAccountsKey =
	"AccountsListEthereumAccounts";
export const UseAccountsListEthereumAccountsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useAccountsListEthereumAccountsKey, ...(queryKey ?? [clientOptions])];
export type AccountsGetEthreumAccountDefaultResponse = Awaited<
	ReturnType<typeof accountsGetEthreumAccount>
>["data"];
export type AccountsGetEthreumAccountQueryResult<
	TData = AccountsGetEthreumAccountDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAccountsGetEthreumAccountKey = "AccountsGetEthreumAccount";
export const UseAccountsGetEthreumAccountKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useAccountsGetEthreumAccountKey, ...(queryKey ?? [clientOptions])];
export type AccountsEthereumGetNonceDefaultResponse = Awaited<
	ReturnType<typeof accountsEthereumGetNonce>
>["data"];
export type AccountsEthereumGetNonceQueryResult<
	TData = AccountsEthereumGetNonceDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAccountsEthereumGetNonceKey = "AccountsEthereumGetNonce";
export const UseAccountsEthereumGetNonceKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useAccountsEthereumGetNonceKey, ...(queryKey ?? [clientOptions])];
export type AccountsEthereumGetNativeBalanceDefaultResponse = Awaited<
	ReturnType<typeof accountsEthereumGetNativeBalance>
>["data"];
export type AccountsEthereumGetNativeBalanceQueryResult<
	TData = AccountsEthereumGetNativeBalanceDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAccountsEthereumGetNativeBalanceKey =
	"AccountsEthereumGetNativeBalance";
export const UseAccountsEthereumGetNativeBalanceKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useAccountsEthereumGetNativeBalanceKey, ...(queryKey ?? [clientOptions])];
export type AccountsSuggestGasPriceDefaultResponse = Awaited<
	ReturnType<typeof accountsSuggestGasPrice>
>["data"];
export type AccountsSuggestGasPriceQueryResult<
	TData = AccountsSuggestGasPriceDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAccountsSuggestGasPriceKey = "AccountsSuggestGasPrice";
export const UseAccountsSuggestGasPriceKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useAccountsSuggestGasPriceKey, ...(queryKey ?? [clientOptions])];
export type AccountsExportEthreumAccountDefaultResponse = Awaited<
	ReturnType<typeof accountsExportEthreumAccount>
>["data"];
export type AccountsExportEthreumAccountQueryResult<
	TData = AccountsExportEthreumAccountDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useAccountsExportEthreumAccountKey =
	"AccountsExportEthreumAccount";
export const UseAccountsExportEthreumAccountKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useAccountsExportEthreumAccountKey, ...(queryKey ?? [clientOptions])];
export type BitcoinListAccountsDefaultResponse = Awaited<
	ReturnType<typeof bitcoinListAccounts>
>["data"];
export type BitcoinListAccountsQueryResult<
	TData = BitcoinListAccountsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useBitcoinListAccountsKey = "BitcoinListAccounts";
export const UseBitcoinListAccountsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useBitcoinListAccountsKey, ...(queryKey ?? [clientOptions])];
export type BitcoinBitcoinGetAccountDefaultResponse = Awaited<
	ReturnType<typeof bitcoinBitcoinGetAccount>
>["data"];
export type BitcoinBitcoinGetAccountQueryResult<
	TData = BitcoinBitcoinGetAccountDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useBitcoinBitcoinGetAccountKey = "BitcoinBitcoinGetAccount";
export const UseBitcoinBitcoinGetAccountKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useBitcoinBitcoinGetAccountKey, ...(queryKey ?? [clientOptions])];
export type BitcoinCashListAccountsDefaultResponse = Awaited<
	ReturnType<typeof bitcoinCashListAccounts>
>["data"];
export type BitcoinCashListAccountsQueryResult<
	TData = BitcoinCashListAccountsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useBitcoinCashListAccountsKey = "BitcoinCashListAccounts";
export const UseBitcoinCashListAccountsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useBitcoinCashListAccountsKey, ...(queryKey ?? [clientOptions])];
export type BitcoinCashBitcoinCashGetAccountDefaultResponse = Awaited<
	ReturnType<typeof bitcoinCashBitcoinCashGetAccount>
>["data"];
export type BitcoinCashBitcoinCashGetAccountQueryResult<
	TData = BitcoinCashBitcoinCashGetAccountDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useBitcoinCashBitcoinCashGetAccountKey =
	"BitcoinCashBitcoinCashGetAccount";
export const UseBitcoinCashBitcoinCashGetAccountKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useBitcoinCashBitcoinCashGetAccountKey, ...(queryKey ?? [clientOptions])];
export type ChartsGetChartAnalysisDefaultResponse = Awaited<
	ReturnType<typeof chartsGetChartAnalysis>
>["data"];
export type ChartsGetChartAnalysisQueryResult<
	TData = ChartsGetChartAnalysisDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useChartsGetChartAnalysisKey = "ChartsGetChartAnalysis";
export const UseChartsGetChartAnalysisKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useChartsGetChartAnalysisKey, ...(queryKey ?? [clientOptions])];
export type ComponentsGetComponentsDefaultResponse = Awaited<
	ReturnType<typeof componentsGetComponents>
>["data"];
export type ComponentsGetComponentsQueryResult<
	TData = ComponentsGetComponentsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useComponentsGetComponentsKey = "ComponentsGetComponents";
export const UseComponentsGetComponentsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useComponentsGetComponentsKey, ...(queryKey ?? [clientOptions])];
export type ComponentsGetComponentDefaultResponse = Awaited<
	ReturnType<typeof componentsGetComponent>
>["data"];
export type ComponentsGetComponentQueryResult<
	TData = ComponentsGetComponentDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useComponentsGetComponentKey = "ComponentsGetComponent";
export const UseComponentsGetComponentKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useComponentsGetComponentKey, ...(queryKey ?? [clientOptions])];
export type ComponentsSearchComponentsDefaultResponse = Awaited<
	ReturnType<typeof componentsSearchComponents>
>["data"];
export type ComponentsSearchComponentsQueryResult<
	TData = ComponentsSearchComponentsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useComponentsSearchComponentsKey = "ComponentsSearchComponents";
export const UseComponentsSearchComponentsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useComponentsSearchComponentsKey, ...(queryKey ?? [clientOptions])];
export type ComponentsGetComponentCapabilitiesDescriptionDefaultResponse =
	Awaited<
		ReturnType<typeof componentsGetComponentCapabilitiesDescription>
	>["data"];
export type ComponentsGetComponentCapabilitiesDescriptionQueryResult<
	TData = ComponentsGetComponentCapabilitiesDescriptionDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useComponentsGetComponentCapabilitiesDescriptionKey =
	"ComponentsGetComponentCapabilitiesDescription";
export const UseComponentsGetComponentCapabilitiesDescriptionKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useComponentsGetComponentCapabilitiesDescriptionKey,
	...(queryKey ?? [clientOptions]),
];
export type CosmosCosmosListAccountsDefaultResponse = Awaited<
	ReturnType<typeof cosmosCosmosListAccounts>
>["data"];
export type CosmosCosmosListAccountsQueryResult<
	TData = CosmosCosmosListAccountsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useCosmosCosmosListAccountsKey = "CosmosCosmosListAccounts";
export const UseCosmosCosmosListAccountsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useCosmosCosmosListAccountsKey, ...(queryKey ?? [clientOptions])];
export type CosmosCosmosGetAccountDefaultResponse = Awaited<
	ReturnType<typeof cosmosCosmosGetAccount>
>["data"];
export type CosmosCosmosGetAccountQueryResult<
	TData = CosmosCosmosGetAccountDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useCosmosCosmosGetAccountKey = "CosmosCosmosGetAccount";
export const UseCosmosCosmosGetAccountKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useCosmosCosmosGetAccountKey, ...(queryKey ?? [clientOptions])];
export type DataGetWalletTokenBalancesDefaultResponse = Awaited<
	ReturnType<typeof dataGetWalletTokenBalances>
>["data"];
export type DataGetWalletTokenBalancesQueryResult<
	TData = DataGetWalletTokenBalancesDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useDataGetWalletTokenBalancesKey = "DataGetWalletTokenBalances";
export const UseDataGetWalletTokenBalancesKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useDataGetWalletTokenBalancesKey, ...(queryKey ?? [clientOptions])];
export type DataGetWalletTransactionHistoryDefaultResponse = Awaited<
	ReturnType<typeof dataGetWalletTransactionHistory>
>["data"];
export type DataGetWalletTransactionHistoryQueryResult<
	TData = DataGetWalletTransactionHistoryDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useDataGetWalletTransactionHistoryKey =
	"DataGetWalletTransactionHistory";
export const UseDataGetWalletTransactionHistoryKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useDataGetWalletTransactionHistoryKey, ...(queryKey ?? [clientOptions])];
export type DataGetTokensMetadataDefaultResponse = Awaited<
	ReturnType<typeof dataGetTokensMetadata>
>["data"];
export type DataGetTokensMetadataQueryResult<
	TData = DataGetTokensMetadataDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useDataGetTokensMetadataKey = "DataGetTokensMetadata";
export const UseDataGetTokensMetadataKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useDataGetTokensMetadataKey, ...(queryKey ?? [clientOptions])];
export type DataGetWalletNfTsDefaultResponse = Awaited<
	ReturnType<typeof dataGetWalletNfTs>
>["data"];
export type DataGetWalletNfTsQueryResult<
	TData = DataGetWalletNfTsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useDataGetWalletNfTsKey = "DataGetWalletNfTs";
export const UseDataGetWalletNfTsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useDataGetWalletNfTsKey, ...(queryKey ?? [clientOptions])];
export type DataGetUserWalletPortfolioDefaultResponse = Awaited<
	ReturnType<typeof dataGetUserWalletPortfolio>
>["data"];
export type DataGetUserWalletPortfolioQueryResult<
	TData = DataGetUserWalletPortfolioDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useDataGetUserWalletPortfolioKey = "DataGetUserWalletPortfolio";
export const UseDataGetUserWalletPortfolioKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useDataGetUserWalletPortfolioKey, ...(queryKey ?? [clientOptions])];
export type DataGetPortfolioFetchStatusDefaultResponse = Awaited<
	ReturnType<typeof dataGetPortfolioFetchStatus>
>["data"];
export type DataGetPortfolioFetchStatusQueryResult<
	TData = DataGetPortfolioFetchStatusDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useDataGetPortfolioFetchStatusKey = "DataGetPortfolioFetchStatus";
export const UseDataGetPortfolioFetchStatusKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useDataGetPortfolioFetchStatusKey, ...(queryKey ?? [clientOptions])];
export type DogeCoinListAccountsDefaultResponse = Awaited<
	ReturnType<typeof dogeCoinListAccounts>
>["data"];
export type DogeCoinListAccountsQueryResult<
	TData = DogeCoinListAccountsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useDogeCoinListAccountsKey = "DogeCoinListAccounts";
export const UseDogeCoinListAccountsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useDogeCoinListAccountsKey, ...(queryKey ?? [clientOptions])];
export type DogecoinDogeCoinGetAccountDetailsDefaultResponse = Awaited<
	ReturnType<typeof dogecoinDogeCoinGetAccountDetails>
>["data"];
export type DogecoinDogeCoinGetAccountDetailsQueryResult<
	TData = DogecoinDogeCoinGetAccountDetailsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useDogecoinDogeCoinGetAccountDetailsKey =
	"DogecoinDogeCoinGetAccountDetails";
export const UseDogecoinDogeCoinGetAccountDetailsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useDogecoinDogeCoinGetAccountDetailsKey,
	...(queryKey ?? [clientOptions]),
];
export type ListEosAccountsDefaultResponse = Awaited<
	ReturnType<typeof listEosAccounts>
>["data"];
export type ListEosAccountsQueryResult<
	TData = ListEosAccountsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListEosAccountsKey = "ListEosAccounts";
export const UseListEosAccountsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useListEosAccountsKey, ...(queryKey ?? [clientOptions])];
export type GetEosAccountDefaultResponse = Awaited<
	ReturnType<typeof getEosAccount>
>["data"];
export type GetEosAccountQueryResult<
	TData = GetEosAccountDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetEosAccountKey = "GetEosAccount";
export const UseGetEosAccountKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetEosAccountKey, ...(queryKey ?? [clientOptions])];
export type Erc20GetErc20TokenDecimalsDefaultResponse = Awaited<
	ReturnType<typeof erc20GetErc20TokenDecimals>
>["data"];
export type Erc20GetErc20TokenDecimalsQueryResult<
	TData = Erc20GetErc20TokenDecimalsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc20GetErc20TokenDecimalsKey = "Erc20GetErc20TokenDecimals";
export const UseErc20GetErc20TokenDecimalsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc20GetErc20TokenDecimalsKey, ...(queryKey ?? [clientOptions])];
export type Erc20GetErc20TokenSymbolDefaultResponse = Awaited<
	ReturnType<typeof erc20GetErc20TokenSymbol>
>["data"];
export type Erc20GetErc20TokenSymbolQueryResult<
	TData = Erc20GetErc20TokenSymbolDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc20GetErc20TokenSymbolKey = "Erc20GetErc20TokenSymbol";
export const UseErc20GetErc20TokenSymbolKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc20GetErc20TokenSymbolKey, ...(queryKey ?? [clientOptions])];
export type Erc20GetErc20TokenNameDefaultResponse = Awaited<
	ReturnType<typeof erc20GetErc20TokenName>
>["data"];
export type Erc20GetErc20TokenNameQueryResult<
	TData = Erc20GetErc20TokenNameDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc20GetErc20TokenNameKey = "Erc20GetErc20TokenName";
export const UseErc20GetErc20TokenNameKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc20GetErc20TokenNameKey, ...(queryKey ?? [clientOptions])];
export type Erc20GetErc20TokenTotalSupplyDefaultResponse = Awaited<
	ReturnType<typeof erc20GetErc20TokenTotalSupply>
>["data"];
export type Erc20GetErc20TokenTotalSupplyQueryResult<
	TData = Erc20GetErc20TokenTotalSupplyDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc20GetErc20TokenTotalSupplyKey =
	"Erc20GetErc20TokenTotalSupply";
export const UseErc20GetErc20TokenTotalSupplyKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc20GetErc20TokenTotalSupplyKey, ...(queryKey ?? [clientOptions])];
export type Erc20GetErc20TokenBalanceDefaultResponse = Awaited<
	ReturnType<typeof erc20GetErc20TokenBalance>
>["data"];
export type Erc20GetErc20TokenBalanceQueryResult<
	TData = Erc20GetErc20TokenBalanceDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc20GetErc20TokenBalanceKey = "Erc20GetErc20TokenBalance";
export const UseErc20GetErc20TokenBalanceKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc20GetErc20TokenBalanceKey, ...(queryKey ?? [clientOptions])];
export type Erc20GetErc20TokenAllowanceDefaultResponse = Awaited<
	ReturnType<typeof erc20GetErc20TokenAllowance>
>["data"];
export type Erc20GetErc20TokenAllowanceQueryResult<
	TData = Erc20GetErc20TokenAllowanceDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc20GetErc20TokenAllowanceKey = "Erc20GetErc20TokenAllowance";
export const UseErc20GetErc20TokenAllowanceKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc20GetErc20TokenAllowanceKey, ...(queryKey ?? [clientOptions])];
export type Erc4626GetErc4626AssetDefaultResponse = Awaited<
	ReturnType<typeof erc4626GetErc4626Asset>
>["data"];
export type Erc4626GetErc4626AssetQueryResult<
	TData = Erc4626GetErc4626AssetDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc4626GetErc4626AssetKey = "Erc4626GetErc4626Asset";
export const UseErc4626GetErc4626AssetKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc4626GetErc4626AssetKey, ...(queryKey ?? [clientOptions])];
export type Erc4626GetErc4626TotalAssetsDefaultResponse = Awaited<
	ReturnType<typeof erc4626GetErc4626TotalAssets>
>["data"];
export type Erc4626GetErc4626TotalAssetsQueryResult<
	TData = Erc4626GetErc4626TotalAssetsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc4626GetErc4626TotalAssetsKey =
	"Erc4626GetErc4626TotalAssets";
export const UseErc4626GetErc4626TotalAssetsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc4626GetErc4626TotalAssetsKey, ...(queryKey ?? [clientOptions])];
export type Erc4626GetErc4626ConvertToSharesDefaultResponse = Awaited<
	ReturnType<typeof erc4626GetErc4626ConvertToShares>
>["data"];
export type Erc4626GetErc4626ConvertToSharesQueryResult<
	TData = Erc4626GetErc4626ConvertToSharesDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc4626GetErc4626ConvertToSharesKey =
	"Erc4626GetErc4626ConvertToShares";
export const UseErc4626GetErc4626ConvertToSharesKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc4626GetErc4626ConvertToSharesKey, ...(queryKey ?? [clientOptions])];
export type Erc4626GetErc4626ConvertToAssetsDefaultResponse = Awaited<
	ReturnType<typeof erc4626GetErc4626ConvertToAssets>
>["data"];
export type Erc4626GetErc4626ConvertToAssetsQueryResult<
	TData = Erc4626GetErc4626ConvertToAssetsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc4626GetErc4626ConvertToAssetsKey =
	"Erc4626GetErc4626ConvertToAssets";
export const UseErc4626GetErc4626ConvertToAssetsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc4626GetErc4626ConvertToAssetsKey, ...(queryKey ?? [clientOptions])];
export type Erc4626GetErc4626MaxDepositDefaultResponse = Awaited<
	ReturnType<typeof erc4626GetErc4626MaxDeposit>
>["data"];
export type Erc4626GetErc4626MaxDepositQueryResult<
	TData = Erc4626GetErc4626MaxDepositDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc4626GetErc4626MaxDepositKey = "Erc4626GetErc4626MaxDeposit";
export const UseErc4626GetErc4626MaxDepositKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc4626GetErc4626MaxDepositKey, ...(queryKey ?? [clientOptions])];
export type Erc4626GetErc4626MaxMintDefaultResponse = Awaited<
	ReturnType<typeof erc4626GetErc4626MaxMint>
>["data"];
export type Erc4626GetErc4626MaxMintQueryResult<
	TData = Erc4626GetErc4626MaxMintDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc4626GetErc4626MaxMintKey = "Erc4626GetErc4626MaxMint";
export const UseErc4626GetErc4626MaxMintKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc4626GetErc4626MaxMintKey, ...(queryKey ?? [clientOptions])];
export type Erc4626GetErc4626MaxWithdrawDefaultResponse = Awaited<
	ReturnType<typeof erc4626GetErc4626MaxWithdraw>
>["data"];
export type Erc4626GetErc4626MaxWithdrawQueryResult<
	TData = Erc4626GetErc4626MaxWithdrawDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc4626GetErc4626MaxWithdrawKey =
	"Erc4626GetErc4626MaxWithdraw";
export const UseErc4626GetErc4626MaxWithdrawKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc4626GetErc4626MaxWithdrawKey, ...(queryKey ?? [clientOptions])];
export type Erc4626GetErc4626MaxRedeemDefaultResponse = Awaited<
	ReturnType<typeof erc4626GetErc4626MaxRedeem>
>["data"];
export type Erc4626GetErc4626MaxRedeemQueryResult<
	TData = Erc4626GetErc4626MaxRedeemDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc4626GetErc4626MaxRedeemKey = "Erc4626GetErc4626MaxRedeem";
export const UseErc4626GetErc4626MaxRedeemKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc4626GetErc4626MaxRedeemKey, ...(queryKey ?? [clientOptions])];
export type Erc4626GetErc4626PreviewDepositDefaultResponse = Awaited<
	ReturnType<typeof erc4626GetErc4626PreviewDeposit>
>["data"];
export type Erc4626GetErc4626PreviewDepositQueryResult<
	TData = Erc4626GetErc4626PreviewDepositDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc4626GetErc4626PreviewDepositKey =
	"Erc4626GetErc4626PreviewDeposit";
export const UseErc4626GetErc4626PreviewDepositKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc4626GetErc4626PreviewDepositKey, ...(queryKey ?? [clientOptions])];
export type Erc4626GetErc4626PreviewMintDefaultResponse = Awaited<
	ReturnType<typeof erc4626GetErc4626PreviewMint>
>["data"];
export type Erc4626GetErc4626PreviewMintQueryResult<
	TData = Erc4626GetErc4626PreviewMintDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc4626GetErc4626PreviewMintKey =
	"Erc4626GetErc4626PreviewMint";
export const UseErc4626GetErc4626PreviewMintKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc4626GetErc4626PreviewMintKey, ...(queryKey ?? [clientOptions])];
export type Erc4626GetErc4626PreviewWithdrawDefaultResponse = Awaited<
	ReturnType<typeof erc4626GetErc4626PreviewWithdraw>
>["data"];
export type Erc4626GetErc4626PreviewWithdrawQueryResult<
	TData = Erc4626GetErc4626PreviewWithdrawDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc4626GetErc4626PreviewWithdrawKey =
	"Erc4626GetErc4626PreviewWithdraw";
export const UseErc4626GetErc4626PreviewWithdrawKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc4626GetErc4626PreviewWithdrawKey, ...(queryKey ?? [clientOptions])];
export type Erc4626GetErc4626PreviewRedeemDefaultResponse = Awaited<
	ReturnType<typeof erc4626GetErc4626PreviewRedeem>
>["data"];
export type Erc4626GetErc4626PreviewRedeemQueryResult<
	TData = Erc4626GetErc4626PreviewRedeemDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc4626GetErc4626PreviewRedeemKey =
	"Erc4626GetErc4626PreviewRedeem";
export const UseErc4626GetErc4626PreviewRedeemKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc4626GetErc4626PreviewRedeemKey, ...(queryKey ?? [clientOptions])];
export type Erc4626GetErc4626TotalSupplyDefaultResponse = Awaited<
	ReturnType<typeof erc4626GetErc4626TotalSupply>
>["data"];
export type Erc4626GetErc4626TotalSupplyQueryResult<
	TData = Erc4626GetErc4626TotalSupplyDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc4626GetErc4626TotalSupplyKey =
	"Erc4626GetErc4626TotalSupply";
export const UseErc4626GetErc4626TotalSupplyKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc4626GetErc4626TotalSupplyKey, ...(queryKey ?? [clientOptions])];
export type Erc4626GetErc4626BalanceOfDefaultResponse = Awaited<
	ReturnType<typeof erc4626GetErc4626BalanceOf>
>["data"];
export type Erc4626GetErc4626BalanceOfQueryResult<
	TData = Erc4626GetErc4626BalanceOfDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc4626GetErc4626BalanceOfKey = "Erc4626GetErc4626BalanceOf";
export const UseErc4626GetErc4626BalanceOfKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc4626GetErc4626BalanceOfKey, ...(queryKey ?? [clientOptions])];
export type Erc4626GetErc4626AllowanceDefaultResponse = Awaited<
	ReturnType<typeof erc4626GetErc4626Allowance>
>["data"];
export type Erc4626GetErc4626AllowanceQueryResult<
	TData = Erc4626GetErc4626AllowanceDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc4626GetErc4626AllowanceKey = "Erc4626GetErc4626Allowance";
export const UseErc4626GetErc4626AllowanceKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc4626GetErc4626AllowanceKey, ...(queryKey ?? [clientOptions])];
export type Erc721GetErc721BalanceOfDefaultResponse = Awaited<
	ReturnType<typeof erc721GetErc721BalanceOf>
>["data"];
export type Erc721GetErc721BalanceOfQueryResult<
	TData = Erc721GetErc721BalanceOfDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc721GetErc721BalanceOfKey = "Erc721GetErc721BalanceOf";
export const UseErc721GetErc721BalanceOfKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc721GetErc721BalanceOfKey, ...(queryKey ?? [clientOptions])];
export type Erc721GetErc721OwnerOfDefaultResponse = Awaited<
	ReturnType<typeof erc721GetErc721OwnerOf>
>["data"];
export type Erc721GetErc721OwnerOfQueryResult<
	TData = Erc721GetErc721OwnerOfDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc721GetErc721OwnerOfKey = "Erc721GetErc721OwnerOf";
export const UseErc721GetErc721OwnerOfKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc721GetErc721OwnerOfKey, ...(queryKey ?? [clientOptions])];
export type Erc721GetErc721NameDefaultResponse = Awaited<
	ReturnType<typeof erc721GetErc721Name>
>["data"];
export type Erc721GetErc721NameQueryResult<
	TData = Erc721GetErc721NameDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc721GetErc721NameKey = "Erc721GetErc721Name";
export const UseErc721GetErc721NameKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc721GetErc721NameKey, ...(queryKey ?? [clientOptions])];
export type Erc721GetErc721SymbolDefaultResponse = Awaited<
	ReturnType<typeof erc721GetErc721Symbol>
>["data"];
export type Erc721GetErc721SymbolQueryResult<
	TData = Erc721GetErc721SymbolDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc721GetErc721SymbolKey = "Erc721GetErc721Symbol";
export const UseErc721GetErc721SymbolKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc721GetErc721SymbolKey, ...(queryKey ?? [clientOptions])];
export type Erc721GetErc721TokenUriDefaultResponse = Awaited<
	ReturnType<typeof erc721GetErc721TokenUri>
>["data"];
export type Erc721GetErc721TokenUriQueryResult<
	TData = Erc721GetErc721TokenUriDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc721GetErc721TokenUriKey = "Erc721GetErc721TokenUri";
export const UseErc721GetErc721TokenUriKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc721GetErc721TokenUriKey, ...(queryKey ?? [clientOptions])];
export type Erc721GetErc721ApprovedDefaultResponse = Awaited<
	ReturnType<typeof erc721GetErc721Approved>
>["data"];
export type Erc721GetErc721ApprovedQueryResult<
	TData = Erc721GetErc721ApprovedDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc721GetErc721ApprovedKey = "Erc721GetErc721Approved";
export const UseErc721GetErc721ApprovedKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc721GetErc721ApprovedKey, ...(queryKey ?? [clientOptions])];
export type Erc721GetErc721IsApprovedForAllDefaultResponse = Awaited<
	ReturnType<typeof erc721GetErc721IsApprovedForAll>
>["data"];
export type Erc721GetErc721IsApprovedForAllQueryResult<
	TData = Erc721GetErc721IsApprovedForAllDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useErc721GetErc721IsApprovedForAllKey =
	"Erc721GetErc721IsApprovedForAll";
export const UseErc721GetErc721IsApprovedForAllKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useErc721GetErc721IsApprovedForAllKey, ...(queryKey ?? [clientOptions])];
export type FinancialDatasetsGetCompanyFactsDefaultResponse = Awaited<
	ReturnType<typeof financialDatasetsGetCompanyFacts>
>["data"];
export type FinancialDatasetsGetCompanyFactsQueryResult<
	TData = FinancialDatasetsGetCompanyFactsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useFinancialDatasetsGetCompanyFactsKey =
	"FinancialDatasetsGetCompanyFacts";
export const UseFinancialDatasetsGetCompanyFactsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useFinancialDatasetsGetCompanyFactsKey, ...(queryKey ?? [clientOptions])];
export type FinancialDatasetsGetIncomeStatementsDefaultResponse = Awaited<
	ReturnType<typeof financialDatasetsGetIncomeStatements>
>["data"];
export type FinancialDatasetsGetIncomeStatementsQueryResult<
	TData = FinancialDatasetsGetIncomeStatementsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useFinancialDatasetsGetIncomeStatementsKey =
	"FinancialDatasetsGetIncomeStatements";
export const UseFinancialDatasetsGetIncomeStatementsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useFinancialDatasetsGetIncomeStatementsKey,
	...(queryKey ?? [clientOptions]),
];
export type FinancialDatasetsGetBalanceSheetsDefaultResponse = Awaited<
	ReturnType<typeof financialDatasetsGetBalanceSheets>
>["data"];
export type FinancialDatasetsGetBalanceSheetsQueryResult<
	TData = FinancialDatasetsGetBalanceSheetsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useFinancialDatasetsGetBalanceSheetsKey =
	"FinancialDatasetsGetBalanceSheets";
export const UseFinancialDatasetsGetBalanceSheetsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useFinancialDatasetsGetBalanceSheetsKey,
	...(queryKey ?? [clientOptions]),
];
export type FinancialDatasetsGetCashFlowStatementsDefaultResponse = Awaited<
	ReturnType<typeof financialDatasetsGetCashFlowStatements>
>["data"];
export type FinancialDatasetsGetCashFlowStatementsQueryResult<
	TData = FinancialDatasetsGetCashFlowStatementsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useFinancialDatasetsGetCashFlowStatementsKey =
	"FinancialDatasetsGetCashFlowStatements";
export const UseFinancialDatasetsGetCashFlowStatementsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useFinancialDatasetsGetCashFlowStatementsKey,
	...(queryKey ?? [clientOptions]),
];
export type FinancialDatasetsGetSegmentedRevenuesDefaultResponse = Awaited<
	ReturnType<typeof financialDatasetsGetSegmentedRevenues>
>["data"];
export type FinancialDatasetsGetSegmentedRevenuesQueryResult<
	TData = FinancialDatasetsGetSegmentedRevenuesDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useFinancialDatasetsGetSegmentedRevenuesKey =
	"FinancialDatasetsGetSegmentedRevenues";
export const UseFinancialDatasetsGetSegmentedRevenuesKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useFinancialDatasetsGetSegmentedRevenuesKey,
	...(queryKey ?? [clientOptions]),
];
export type FinancialDatasetsGetAllFinancialsDefaultResponse = Awaited<
	ReturnType<typeof financialDatasetsGetAllFinancials>
>["data"];
export type FinancialDatasetsGetAllFinancialsQueryResult<
	TData = FinancialDatasetsGetAllFinancialsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useFinancialDatasetsGetAllFinancialsKey =
	"FinancialDatasetsGetAllFinancials";
export const UseFinancialDatasetsGetAllFinancialsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useFinancialDatasetsGetAllFinancialsKey,
	...(queryKey ?? [clientOptions]),
];
export type FinancialDatasetsGetAvailableTickersDefaultResponse = Awaited<
	ReturnType<typeof financialDatasetsGetAvailableTickers>
>["data"];
export type FinancialDatasetsGetAvailableTickersQueryResult<
	TData = FinancialDatasetsGetAvailableTickersDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useFinancialDatasetsGetAvailableTickersKey =
	"FinancialDatasetsGetAvailableTickers";
export const UseFinancialDatasetsGetAvailableTickersKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useFinancialDatasetsGetAvailableTickersKey,
	...(queryKey ?? [clientOptions]),
];
export type FinancialDatasetsGetInsiderTransactionsDefaultResponse = Awaited<
	ReturnType<typeof financialDatasetsGetInsiderTransactions>
>["data"];
export type FinancialDatasetsGetInsiderTransactionsQueryResult<
	TData = FinancialDatasetsGetInsiderTransactionsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useFinancialDatasetsGetInsiderTransactionsKey =
	"FinancialDatasetsGetInsiderTransactions";
export const UseFinancialDatasetsGetInsiderTransactionsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useFinancialDatasetsGetInsiderTransactionsKey,
	...(queryKey ?? [clientOptions]),
];
export type FinancialDatasetsGetOptionsChainDefaultResponse = Awaited<
	ReturnType<typeof financialDatasetsGetOptionsChain>
>["data"];
export type FinancialDatasetsGetOptionsChainQueryResult<
	TData = FinancialDatasetsGetOptionsChainDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useFinancialDatasetsGetOptionsChainKey =
	"FinancialDatasetsGetOptionsChain";
export const UseFinancialDatasetsGetOptionsChainKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useFinancialDatasetsGetOptionsChainKey, ...(queryKey ?? [clientOptions])];
export type FinancialDatasetsGetPricesDefaultResponse = Awaited<
	ReturnType<typeof financialDatasetsGetPrices>
>["data"];
export type FinancialDatasetsGetPricesQueryResult<
	TData = FinancialDatasetsGetPricesDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useFinancialDatasetsGetPricesKey = "FinancialDatasetsGetPrices";
export const UseFinancialDatasetsGetPricesKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useFinancialDatasetsGetPricesKey, ...(queryKey ?? [clientOptions])];
export type FinancialDatasetsGetPriceSnapshotDefaultResponse = Awaited<
	ReturnType<typeof financialDatasetsGetPriceSnapshot>
>["data"];
export type FinancialDatasetsGetPriceSnapshotQueryResult<
	TData = FinancialDatasetsGetPriceSnapshotDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useFinancialDatasetsGetPriceSnapshotKey =
	"FinancialDatasetsGetPriceSnapshot";
export const UseFinancialDatasetsGetPriceSnapshotKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useFinancialDatasetsGetPriceSnapshotKey,
	...(queryKey ?? [clientOptions]),
];
export type JupiterGetProgramIdToLabelDefaultResponse = Awaited<
	ReturnType<typeof jupiterGetProgramIdToLabel>
>["data"];
export type JupiterGetProgramIdToLabelQueryResult<
	TData = JupiterGetProgramIdToLabelDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useJupiterGetProgramIdToLabelKey = "JupiterGetProgramIdToLabel";
export const UseJupiterGetProgramIdToLabelKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useJupiterGetProgramIdToLabelKey, ...(queryKey ?? [clientOptions])];
export type JupiterGetIndexedRouteMapDefaultResponse = Awaited<
	ReturnType<typeof jupiterGetIndexedRouteMap>
>["data"];
export type JupiterGetIndexedRouteMapQueryResult<
	TData = JupiterGetIndexedRouteMapDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useJupiterGetIndexedRouteMapKey = "JupiterGetIndexedRouteMap";
export const UseJupiterGetIndexedRouteMapKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useJupiterGetIndexedRouteMapKey, ...(queryKey ?? [clientOptions])];
export type JupiterGetTokensDefaultResponse = Awaited<
	ReturnType<typeof jupiterGetTokens>
>["data"];
export type JupiterGetTokensQueryResult<
	TData = JupiterGetTokensDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useJupiterGetTokensKey = "JupiterGetTokens";
export const UseJupiterGetTokensKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useJupiterGetTokensKey, ...(queryKey ?? [clientOptions])];
export type LendingPoolGetFlashLoanPremiumTotalDefaultResponse = Awaited<
	ReturnType<typeof lendingPoolGetFlashLoanPremiumTotal>
>["data"];
export type LendingPoolGetFlashLoanPremiumTotalQueryResult<
	TData = LendingPoolGetFlashLoanPremiumTotalDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLendingPoolGetFlashLoanPremiumTotalKey =
	"LendingPoolGetFlashLoanPremiumTotal";
export const UseLendingPoolGetFlashLoanPremiumTotalKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useLendingPoolGetFlashLoanPremiumTotalKey,
	...(queryKey ?? [clientOptions]),
];
export type LendingPoolGetLendingPoolRevisionDefaultResponse = Awaited<
	ReturnType<typeof lendingPoolGetLendingPoolRevision>
>["data"];
export type LendingPoolGetLendingPoolRevisionQueryResult<
	TData = LendingPoolGetLendingPoolRevisionDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLendingPoolGetLendingPoolRevisionKey =
	"LendingPoolGetLendingPoolRevision";
export const UseLendingPoolGetLendingPoolRevisionKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useLendingPoolGetLendingPoolRevisionKey,
	...(queryKey ?? [clientOptions]),
];
export type LendingPoolGetMaxNumberReservesDefaultResponse = Awaited<
	ReturnType<typeof lendingPoolGetMaxNumberReserves>
>["data"];
export type LendingPoolGetMaxNumberReservesQueryResult<
	TData = LendingPoolGetMaxNumberReservesDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLendingPoolGetMaxNumberReservesKey =
	"LendingPoolGetMaxNumberReserves";
export const UseLendingPoolGetMaxNumberReservesKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useLendingPoolGetMaxNumberReservesKey, ...(queryKey ?? [clientOptions])];
export type LendingPoolGetMaxStableRateBorrowSizePercentDefaultResponse =
	Awaited<
		ReturnType<typeof lendingPoolGetMaxStableRateBorrowSizePercent>
	>["data"];
export type LendingPoolGetMaxStableRateBorrowSizePercentQueryResult<
	TData = LendingPoolGetMaxStableRateBorrowSizePercentDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLendingPoolGetMaxStableRateBorrowSizePercentKey =
	"LendingPoolGetMaxStableRateBorrowSizePercent";
export const UseLendingPoolGetMaxStableRateBorrowSizePercentKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useLendingPoolGetMaxStableRateBorrowSizePercentKey,
	...(queryKey ?? [clientOptions]),
];
export type LendingPoolGetReserveDataDefaultResponse = Awaited<
	ReturnType<typeof lendingPoolGetReserveData>
>["data"];
export type LendingPoolGetReserveDataQueryResult<
	TData = LendingPoolGetReserveDataDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLendingPoolGetReserveDataKey = "LendingPoolGetReserveData";
export const UseLendingPoolGetReserveDataKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useLendingPoolGetReserveDataKey, ...(queryKey ?? [clientOptions])];
export type LendingPoolGetUserAccountDataDefaultResponse = Awaited<
	ReturnType<typeof lendingPoolGetUserAccountData>
>["data"];
export type LendingPoolGetUserAccountDataQueryResult<
	TData = LendingPoolGetUserAccountDataDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLendingPoolGetUserAccountDataKey =
	"LendingPoolGetUserAccountData";
export const UseLendingPoolGetUserAccountDataKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useLendingPoolGetUserAccountDataKey, ...(queryKey ?? [clientOptions])];
export type LendingPoolGetReservesListDefaultResponse = Awaited<
	ReturnType<typeof lendingPoolGetReservesList>
>["data"];
export type LendingPoolGetReservesListQueryResult<
	TData = LendingPoolGetReservesListDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLendingPoolGetReservesListKey = "LendingPoolGetReservesList";
export const UseLendingPoolGetReservesListKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useLendingPoolGetReservesListKey, ...(queryKey ?? [clientOptions])];
export type LendingPoolGetAddressesProviderDefaultResponse = Awaited<
	ReturnType<typeof lendingPoolGetAddressesProvider>
>["data"];
export type LendingPoolGetAddressesProviderQueryResult<
	TData = LendingPoolGetAddressesProviderDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLendingPoolGetAddressesProviderKey =
	"LendingPoolGetAddressesProvider";
export const UseLendingPoolGetAddressesProviderKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useLendingPoolGetAddressesProviderKey, ...(queryKey ?? [clientOptions])];
export type LendingPoolIsPausedDefaultResponse = Awaited<
	ReturnType<typeof lendingPoolIsPaused>
>["data"];
export type LendingPoolIsPausedQueryResult<
	TData = LendingPoolIsPausedDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLendingPoolIsPausedKey = "LendingPoolIsPaused";
export const UseLendingPoolIsPausedKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useLendingPoolIsPausedKey, ...(queryKey ?? [clientOptions])];
export type LeveragerGetAddressesProviderDefaultResponse = Awaited<
	ReturnType<typeof leveragerGetAddressesProvider>
>["data"];
export type LeveragerGetAddressesProviderQueryResult<
	TData = LeveragerGetAddressesProviderDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLeveragerGetAddressesProviderKey =
	"LeveragerGetAddressesProvider";
export const UseLeveragerGetAddressesProviderKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useLeveragerGetAddressesProviderKey, ...(queryKey ?? [clientOptions])];
export type LeveragerGetDefaultAdminRoleDefaultResponse = Awaited<
	ReturnType<typeof leveragerGetDefaultAdminRole>
>["data"];
export type LeveragerGetDefaultAdminRoleQueryResult<
	TData = LeveragerGetDefaultAdminRoleDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLeveragerGetDefaultAdminRoleKey =
	"LeveragerGetDefaultAdminRole";
export const UseLeveragerGetDefaultAdminRoleKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useLeveragerGetDefaultAdminRoleKey, ...(queryKey ?? [clientOptions])];
export type LeveragerGetLendingPoolDefaultResponse = Awaited<
	ReturnType<typeof leveragerGetLendingPool>
>["data"];
export type LeveragerGetLendingPoolQueryResult<
	TData = LeveragerGetLendingPoolDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLeveragerGetLendingPoolKey = "LeveragerGetLendingPool";
export const UseLeveragerGetLendingPoolKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useLeveragerGetLendingPoolKey, ...(queryKey ?? [clientOptions])];
export type LeveragerGetMinHfDefaultResponse = Awaited<
	ReturnType<typeof leveragerGetMinHf>
>["data"];
export type LeveragerGetMinHfQueryResult<
	TData = LeveragerGetMinHfDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLeveragerGetMinHfKey = "LeveragerGetMinHf";
export const UseLeveragerGetMinHfKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useLeveragerGetMinHfKey, ...(queryKey ?? [clientOptions])];
export type LeveragerIsPausedDefaultResponse = Awaited<
	ReturnType<typeof leveragerIsPaused>
>["data"];
export type LeveragerIsPausedQueryResult<
	TData = LeveragerIsPausedDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLeveragerIsPausedKey = "LeveragerIsPaused";
export const UseLeveragerIsPausedKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useLeveragerIsPausedKey, ...(queryKey ?? [clientOptions])];
export type LeveragerGetWethDefaultResponse = Awaited<
	ReturnType<typeof leveragerGetWeth>
>["data"];
export type LeveragerGetWethQueryResult<
	TData = LeveragerGetWethDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLeveragerGetWethKey = "LeveragerGetWeth";
export const UseLeveragerGetWethKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useLeveragerGetWethKey, ...(queryKey ?? [clientOptions])];
export type LeveragerGetRoleAdminDefaultResponse = Awaited<
	ReturnType<typeof leveragerGetRoleAdmin>
>["data"];
export type LeveragerGetRoleAdminQueryResult<
	TData = LeveragerGetRoleAdminDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLeveragerGetRoleAdminKey = "LeveragerGetRoleAdmin";
export const UseLeveragerGetRoleAdminKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useLeveragerGetRoleAdminKey, ...(queryKey ?? [clientOptions])];
export type LeveragerHasRoleDefaultResponse = Awaited<
	ReturnType<typeof leveragerHasRole>
>["data"];
export type LeveragerHasRoleQueryResult<
	TData = LeveragerHasRoleDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLeveragerHasRoleKey = "LeveragerHasRole";
export const UseLeveragerHasRoleKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useLeveragerHasRoleKey, ...(queryKey ?? [clientOptions])];
export type LeveragerSupportsInterfaceDefaultResponse = Awaited<
	ReturnType<typeof leveragerSupportsInterface>
>["data"];
export type LeveragerSupportsInterfaceQueryResult<
	TData = LeveragerSupportsInterfaceDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLeveragerSupportsInterfaceKey = "LeveragerSupportsInterface";
export const UseLeveragerSupportsInterfaceKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useLeveragerSupportsInterfaceKey, ...(queryKey ?? [clientOptions])];
export type LifiGetQuoteDefaultResponse = Awaited<
	ReturnType<typeof lifiGetQuote>
>["data"];
export type LifiGetQuoteQueryResult<
	TData = LifiGetQuoteDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLifiGetQuoteKey = "LifiGetQuote";
export const UseLifiGetQuoteKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useLifiGetQuoteKey, ...(queryKey ?? [clientOptions])];
export type LifiGetStatusDefaultResponse = Awaited<
	ReturnType<typeof lifiGetStatus>
>["data"];
export type LifiGetStatusQueryResult<
	TData = LifiGetStatusDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLifiGetStatusKey = "LifiGetStatus";
export const UseLifiGetStatusKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useLifiGetStatusKey, ...(queryKey ?? [clientOptions])];
export type LifiGetChainsDefaultResponse = Awaited<
	ReturnType<typeof lifiGetChains>
>["data"];
export type LifiGetChainsQueryResult<
	TData = LifiGetChainsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLifiGetChainsKey = "LifiGetChains";
export const UseLifiGetChainsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useLifiGetChainsKey, ...(queryKey ?? [clientOptions])];
export type GetToolsDefaultResponse = Awaited<
	ReturnType<typeof getTools>
>["data"];
export type GetToolsQueryResult<
	TData = GetToolsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetToolsKey = "GetTools";
export const UseGetToolsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetToolsKey, ...(queryKey ?? [clientOptions])];
export type LifiGetTokensDefaultResponse = Awaited<
	ReturnType<typeof lifiGetTokens>
>["data"];
export type LifiGetTokensQueryResult<
	TData = LifiGetTokensDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLifiGetTokensKey = "LifiGetTokens";
export const UseLifiGetTokensKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useLifiGetTokensKey, ...(queryKey ?? [clientOptions])];
export type LifiGetTokenDetailsDefaultResponse = Awaited<
	ReturnType<typeof lifiGetTokenDetails>
>["data"];
export type LifiGetTokenDetailsQueryResult<
	TData = LifiGetTokenDetailsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLifiGetTokenDetailsKey = "LifiGetTokenDetails";
export const UseLifiGetTokenDetailsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useLifiGetTokenDetailsKey, ...(queryKey ?? [clientOptions])];
export type LifiGetConnectionsDefaultResponse = Awaited<
	ReturnType<typeof lifiGetConnections>
>["data"];
export type LifiGetConnectionsQueryResult<
	TData = LifiGetConnectionsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLifiGetConnectionsKey = "LifiGetConnections";
export const UseLifiGetConnectionsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useLifiGetConnectionsKey, ...(queryKey ?? [clientOptions])];
export type LifiGetAllPossibleConnectionsDefaultResponse = Awaited<
	ReturnType<typeof lifiGetAllPossibleConnections>
>["data"];
export type LifiGetAllPossibleConnectionsQueryResult<
	TData = LifiGetAllPossibleConnectionsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLifiGetAllPossibleConnectionsKey =
	"LifiGetAllPossibleConnections";
export const UseLifiGetAllPossibleConnectionsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useLifiGetAllPossibleConnectionsKey, ...(queryKey ?? [clientOptions])];
export type ListLitecoinAccountsDefaultResponse = Awaited<
	ReturnType<typeof listLitecoinAccounts>
>["data"];
export type ListLitecoinAccountsQueryResult<
	TData = ListLitecoinAccountsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListLitecoinAccountsKey = "ListLitecoinAccounts";
export const UseListLitecoinAccountsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useListLitecoinAccountsKey, ...(queryKey ?? [clientOptions])];
export type LitecoinGetLitecoinAccountDefaultResponse = Awaited<
	ReturnType<typeof litecoinGetLitecoinAccount>
>["data"];
export type LitecoinGetLitecoinAccountQueryResult<
	TData = LitecoinGetLitecoinAccountDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLitecoinGetLitecoinAccountKey = "LitecoinGetLitecoinAccount";
export const UseLitecoinGetLitecoinAccountKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useLitecoinGetLitecoinAccountKey, ...(queryKey ?? [clientOptions])];
export type GetAssetsDefaultResponse = Awaited<
	ReturnType<typeof getAssets>
>["data"];
export type GetAssetsQueryResult<
	TData = GetAssetsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetAssetsKey = "GetAssets";
export const UseGetAssetsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetAssetsKey, ...(queryKey ?? [clientOptions])];
export type GetAssetByAddressDefaultResponse = Awaited<
	ReturnType<typeof getAssetByAddress>
>["data"];
export type GetAssetByAddressQueryResult<
	TData = GetAssetByAddressDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetAssetByAddressKey = "GetAssetByAddress";
export const UseGetAssetByAddressKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetAssetByAddressKey, ...(queryKey ?? [clientOptions])];
export type GetPoolsDefaultResponse = Awaited<
	ReturnType<typeof getPools>
>["data"];
export type GetPoolsQueryResult<
	TData = GetPoolsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetPoolsKey = "GetPools";
export const UseGetPoolsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetPoolsKey, ...(queryKey ?? [clientOptions])];
export type GetPoolByAddressDefaultResponse = Awaited<
	ReturnType<typeof getPoolByAddress>
>["data"];
export type GetPoolByAddressQueryResult<
	TData = GetPoolByAddressDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetPoolByAddressKey = "GetPoolByAddress";
export const UseGetPoolByAddressKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetPoolByAddressKey, ...(queryKey ?? [clientOptions])];
export type GetPoolsByTypeDefaultResponse = Awaited<
	ReturnType<typeof getPoolsByType>
>["data"];
export type GetPoolsByTypeQueryResult<
	TData = GetPoolsByTypeDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetPoolsByTypeKey = "GetPoolsByType";
export const UseGetPoolsByTypeKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetPoolsByTypeKey, ...(queryKey ?? [clientOptions])];
export type GetTopAprPoolsDefaultResponse = Awaited<
	ReturnType<typeof getTopAprPools>
>["data"];
export type GetTopAprPoolsQueryResult<
	TData = GetTopAprPoolsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTopAprPoolsKey = "GetTopAprPools";
export const UseGetTopAprPoolsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetTopAprPoolsKey, ...(queryKey ?? [clientOptions])];
export type GetTotalValueLockedDefaultResponse = Awaited<
	ReturnType<typeof getTotalValueLocked>
>["data"];
export type GetTotalValueLockedQueryResult<
	TData = GetTotalValueLockedDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTotalValueLockedKey = "GetTotalValueLocked";
export const UseGetTotalValueLockedKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetTotalValueLockedKey, ...(queryKey ?? [clientOptions])];
export type CalculateOptimalVoteDistributionDefaultResponse = Awaited<
	ReturnType<typeof calculateOptimalVoteDistribution>
>["data"];
export type CalculateOptimalVoteDistributionQueryResult<
	TData = CalculateOptimalVoteDistributionDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useCalculateOptimalVoteDistributionKey =
	"CalculateOptimalVoteDistribution";
export const UseCalculateOptimalVoteDistributionKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useCalculateOptimalVoteDistributionKey, ...(queryKey ?? [clientOptions])];
export type GetBalanceOfDefaultResponse = Awaited<
	ReturnType<typeof getBalanceOf>
>["data"];
export type GetBalanceOfQueryResult<
	TData = GetBalanceOfDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetBalanceOfKey = "GetBalanceOf";
export const UseGetBalanceOfKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetBalanceOfKey, ...(queryKey ?? [clientOptions])];
export type GetOwnerOfDefaultResponse = Awaited<
	ReturnType<typeof getOwnerOf>
>["data"];
export type GetOwnerOfQueryResult<
	TData = GetOwnerOfDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetOwnerOfKey = "GetOwnerOf";
export const UseGetOwnerOfKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetOwnerOfKey, ...(queryKey ?? [clientOptions])];
export type GetTokenUriDefaultResponse = Awaited<
	ReturnType<typeof getTokenUri>
>["data"];
export type GetTokenUriQueryResult<
	TData = GetTokenUriDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTokenUriKey = "GetTokenUri";
export const UseGetTokenUriKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetTokenUriKey, ...(queryKey ?? [clientOptions])];
export type GetLockDetailsDefaultResponse = Awaited<
	ReturnType<typeof getLockDetails>
>["data"];
export type GetLockDetailsQueryResult<
	TData = GetLockDetailsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetLockDetailsKey = "GetLockDetails";
export const UseGetLockDetailsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetLockDetailsKey, ...(queryKey ?? [clientOptions])];
export type GetTotalSupplyDefaultResponse = Awaited<
	ReturnType<typeof getTotalSupply>
>["data"];
export type GetTotalSupplyQueryResult<
	TData = GetTotalSupplyDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTotalSupplyKey = "GetTotalSupply";
export const UseGetTotalSupplyKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetTotalSupplyKey, ...(queryKey ?? [clientOptions])];
export type GetTokenOfOwnerByIndexDefaultResponse = Awaited<
	ReturnType<typeof getTokenOfOwnerByIndex>
>["data"];
export type GetTokenOfOwnerByIndexQueryResult<
	TData = GetTokenOfOwnerByIndexDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTokenOfOwnerByIndexKey = "GetTokenOfOwnerByIndex";
export const UseGetTokenOfOwnerByIndexKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetTokenOfOwnerByIndexKey, ...(queryKey ?? [clientOptions])];
export type GetTokenByIndexDefaultResponse = Awaited<
	ReturnType<typeof getTokenByIndex>
>["data"];
export type GetTokenByIndexQueryResult<
	TData = GetTokenByIndexDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTokenByIndexKey = "GetTokenByIndex";
export const UseGetTokenByIndexKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetTokenByIndexKey, ...(queryKey ?? [clientOptions])];
export type GetNameDefaultResponse = Awaited<
	ReturnType<typeof getName>
>["data"];
export type GetNameQueryResult<
	TData = GetNameDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetNameKey = "GetName";
export const UseGetNameKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetNameKey, ...(queryKey ?? [clientOptions])];
export type GetSymbolDefaultResponse = Awaited<
	ReturnType<typeof getSymbol>
>["data"];
export type GetSymbolQueryResult<
	TData = GetSymbolDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetSymbolKey = "GetSymbol";
export const UseGetSymbolKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetSymbolKey, ...(queryKey ?? [clientOptions])];
export type GetApprovedDefaultResponse = Awaited<
	ReturnType<typeof getApproved>
>["data"];
export type GetApprovedQueryResult<
	TData = GetApprovedDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetApprovedKey = "GetApproved";
export const UseGetApprovedKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetApprovedKey, ...(queryKey ?? [clientOptions])];
export type IsApprovedForAllDefaultResponse = Awaited<
	ReturnType<typeof isApprovedForAll>
>["data"];
export type IsApprovedForAllQueryResult<
	TData = IsApprovedForAllDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useIsApprovedForAllKey = "IsApprovedForAll";
export const UseIsApprovedForAllKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useIsApprovedForAllKey, ...(queryKey ?? [clientOptions])];
export type GetBalanceOfNftDefaultResponse = Awaited<
	ReturnType<typeof getBalanceOfNft>
>["data"];
export type GetBalanceOfNftQueryResult<
	TData = GetBalanceOfNftDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetBalanceOfNftKey = "GetBalanceOfNft";
export const UseGetBalanceOfNftKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetBalanceOfNftKey, ...(queryKey ?? [clientOptions])];
export type GetBalanceOfNftAtDefaultResponse = Awaited<
	ReturnType<typeof getBalanceOfNftAt>
>["data"];
export type GetBalanceOfNftAtQueryResult<
	TData = GetBalanceOfNftAtDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetBalanceOfNftAtKey = "GetBalanceOfNftAt";
export const UseGetBalanceOfNftAtKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetBalanceOfNftAtKey, ...(queryKey ?? [clientOptions])];
export type GetTotalNftsMintedDefaultResponse = Awaited<
	ReturnType<typeof getTotalNftsMinted>
>["data"];
export type GetTotalNftsMintedQueryResult<
	TData = GetTotalNftsMintedDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTotalNftsMintedKey = "GetTotalNftsMinted";
export const UseGetTotalNftsMintedKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetTotalNftsMintedKey, ...(queryKey ?? [clientOptions])];
export type GetDelegatesDefaultResponse = Awaited<
	ReturnType<typeof getDelegates>
>["data"];
export type GetDelegatesQueryResult<
	TData = GetDelegatesDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetDelegatesKey = "GetDelegates";
export const UseGetDelegatesKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetDelegatesKey, ...(queryKey ?? [clientOptions])];
export type GetVotesDefaultResponse = Awaited<
	ReturnType<typeof getVotes>
>["data"];
export type GetVotesQueryResult<
	TData = GetVotesDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetVotesKey = "GetVotes";
export const UseGetVotesKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetVotesKey, ...(queryKey ?? [clientOptions])];
export type GetPastVotesDefaultResponse = Awaited<
	ReturnType<typeof getPastVotes>
>["data"];
export type GetPastVotesQueryResult<
	TData = GetPastVotesDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetPastVotesKey = "GetPastVotes";
export const UseGetPastVotesKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetPastVotesKey, ...(queryKey ?? [clientOptions])];
export type GetVestedPayoutDefaultResponse = Awaited<
	ReturnType<typeof getVestedPayout>
>["data"];
export type GetVestedPayoutQueryResult<
	TData = GetVestedPayoutDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetVestedPayoutKey = "GetVestedPayout";
export const UseGetVestedPayoutKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetVestedPayoutKey, ...(queryKey ?? [clientOptions])];
export type GetVestedPayoutAtTimeDefaultResponse = Awaited<
	ReturnType<typeof getVestedPayoutAtTime>
>["data"];
export type GetVestedPayoutAtTimeQueryResult<
	TData = GetVestedPayoutAtTimeDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetVestedPayoutAtTimeKey = "GetVestedPayoutAtTime";
export const UseGetVestedPayoutAtTimeKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetVestedPayoutAtTimeKey, ...(queryKey ?? [clientOptions])];
export type GetVestingPayoutDefaultResponse = Awaited<
	ReturnType<typeof getVestingPayout>
>["data"];
export type GetVestingPayoutQueryResult<
	TData = GetVestingPayoutDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetVestingPayoutKey = "GetVestingPayout";
export const UseGetVestingPayoutKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetVestingPayoutKey, ...(queryKey ?? [clientOptions])];
export type GetVestingPeriodDefaultResponse = Awaited<
	ReturnType<typeof getVestingPeriod>
>["data"];
export type GetVestingPeriodQueryResult<
	TData = GetVestingPeriodDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetVestingPeriodKey = "GetVestingPeriod";
export const UseGetVestingPeriodKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetVestingPeriodKey, ...(queryKey ?? [clientOptions])];
export type GetFactoryDefaultResponse = Awaited<
	ReturnType<typeof getFactory>
>["data"];
export type GetFactoryQueryResult<
	TData = GetFactoryDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetFactoryKey = "GetFactory";
export const UseGetFactoryKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetFactoryKey, ...(queryKey ?? [clientOptions])];
export type GetWethDefaultResponse = Awaited<
	ReturnType<typeof getWeth>
>["data"];
export type GetWethQueryResult<
	TData = GetWethDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetWethKey = "GetWeth";
export const UseGetWethKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetWethKey, ...(queryKey ?? [clientOptions])];
export type GetAmountOutDefaultResponse = Awaited<
	ReturnType<typeof getAmountOut>
>["data"];
export type GetAmountOutQueryResult<
	TData = GetAmountOutDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetAmountOutKey = "GetAmountOut";
export const UseGetAmountOutKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetAmountOutKey, ...(queryKey ?? [clientOptions])];
export type GetAmountsOutDefaultResponse = Awaited<
	ReturnType<typeof getAmountsOut>
>["data"];
export type GetAmountsOutQueryResult<
	TData = GetAmountsOutDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetAmountsOutKey = "GetAmountsOut";
export const UseGetAmountsOutKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetAmountsOutKey, ...(queryKey ?? [clientOptions])];
export type GetTotalWeightDefaultResponse = Awaited<
	ReturnType<typeof getTotalWeight>
>["data"];
export type GetTotalWeightQueryResult<
	TData = GetTotalWeightDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTotalWeightKey = "GetTotalWeight";
export const UseGetTotalWeightKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetTotalWeightKey, ...(queryKey ?? [clientOptions])];
export type GetWeightsDefaultResponse = Awaited<
	ReturnType<typeof getWeights>
>["data"];
export type GetWeightsQueryResult<
	TData = GetWeightsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetWeightsKey = "GetWeights";
export const UseGetWeightsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetWeightsKey, ...(queryKey ?? [clientOptions])];
export type IsGaugeDefaultResponse = Awaited<
	ReturnType<typeof isGauge>
>["data"];
export type IsGaugeQueryResult<
	TData = IsGaugeDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useIsGaugeKey = "IsGauge";
export const UseIsGaugeKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useIsGaugeKey, ...(queryKey ?? [clientOptions])];
export type IsWhitelistedDefaultResponse = Awaited<
	ReturnType<typeof isWhitelisted>
>["data"];
export type IsWhitelistedQueryResult<
	TData = IsWhitelistedDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useIsWhitelistedKey = "IsWhitelisted";
export const UseIsWhitelistedKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useIsWhitelistedKey, ...(queryKey ?? [clientOptions])];
export type GetLastVotedDefaultResponse = Awaited<
	ReturnType<typeof getLastVoted>
>["data"];
export type GetLastVotedQueryResult<
	TData = GetLastVotedDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetLastVotedKey = "GetLastVoted";
export const UseGetLastVotedKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetLastVotedKey, ...(queryKey ?? [clientOptions])];
export type GetPoolVoteLengthDefaultResponse = Awaited<
	ReturnType<typeof getPoolVoteLength>
>["data"];
export type GetPoolVoteLengthQueryResult<
	TData = GetPoolVoteLengthDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetPoolVoteLengthKey = "GetPoolVoteLength";
export const UseGetPoolVoteLengthKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetPoolVoteLengthKey, ...(queryKey ?? [clientOptions])];
export type GetJobResultDefaultResponse = Awaited<
	ReturnType<typeof getJobResult>
>["data"];
export type GetJobResultQueryResult<
	TData = GetJobResultDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetJobResultKey = "GetJobResult";
export const UseGetJobResultKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetJobResultKey, ...(queryKey ?? [clientOptions])];
export type GetScheduledJobsDefaultResponse = Awaited<
	ReturnType<typeof getScheduledJobs>
>["data"];
export type GetScheduledJobsQueryResult<
	TData = GetScheduledJobsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetScheduledJobsKey = "GetScheduledJobs";
export const UseGetScheduledJobsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetScheduledJobsKey, ...(queryKey ?? [clientOptions])];
export type ListJobsDefaultResponse = Awaited<
	ReturnType<typeof listJobs>
>["data"];
export type ListJobsQueryResult<
	TData = ListJobsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListJobsKey = "ListJobs";
export const UseListJobsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useListJobsKey, ...(queryKey ?? [clientOptions])];
export type GetJobDefaultResponse = Awaited<ReturnType<typeof getJob>>["data"];
export type GetJobQueryResult<
	TData = GetJobDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetJobKey = "GetJob";
export const UseGetJobKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetJobKey, ...(queryKey ?? [clientOptions])];
export type ListFlowsDefaultResponse = Awaited<
	ReturnType<typeof listFlows>
>["data"];
export type ListFlowsQueryResult<
	TData = ListFlowsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListFlowsKey = "ListFlows";
export const UseListFlowsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useListFlowsKey, ...(queryKey ?? [clientOptions])];
export type GetFlowDefaultResponse = Awaited<
	ReturnType<typeof getFlow>
>["data"];
export type GetFlowQueryResult<
	TData = GetFlowDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetFlowKey = "GetFlow";
export const UseGetFlowKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetFlowKey, ...(queryKey ?? [clientOptions])];
export type ListUserDefinedFunctionsDefaultResponse = Awaited<
	ReturnType<typeof listUserDefinedFunctions>
>["data"];
export type ListUserDefinedFunctionsQueryResult<
	TData = ListUserDefinedFunctionsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListUserDefinedFunctionsKey = "ListUserDefinedFunctions";
export const UseListUserDefinedFunctionsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useListUserDefinedFunctionsKey, ...(queryKey ?? [clientOptions])];
export type GetNotificationsDefaultResponse = Awaited<
	ReturnType<typeof getNotifications>
>["data"];
export type GetNotificationsQueryResult<
	TData = GetNotificationsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetNotificationsKey = "GetNotifications";
export const UseGetNotificationsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetNotificationsKey, ...(queryKey ?? [clientOptions])];
export type OdosGetSupportedChainsDefaultResponse = Awaited<
	ReturnType<typeof odosGetSupportedChains>
>["data"];
export type OdosGetSupportedChainsQueryResult<
	TData = OdosGetSupportedChainsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useOdosGetSupportedChainsKey = "OdosGetSupportedChains";
export const UseOdosGetSupportedChainsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useOdosGetSupportedChainsKey, ...(queryKey ?? [clientOptions])];
export type OdosGetContractInfoDefaultResponse = Awaited<
	ReturnType<typeof odosGetContractInfo>
>["data"];
export type OdosGetContractInfoQueryResult<
	TData = OdosGetContractInfoDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useOdosGetContractInfoKey = "OdosGetContractInfo";
export const UseOdosGetContractInfoKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useOdosGetContractInfoKey, ...(queryKey ?? [clientOptions])];
export type OdosGetRouterAddressDefaultResponse = Awaited<
	ReturnType<typeof odosGetRouterAddress>
>["data"];
export type OdosGetRouterAddressQueryResult<
	TData = OdosGetRouterAddressDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useOdosGetRouterAddressKey = "OdosGetRouterAddress";
export const UseOdosGetRouterAddressKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useOdosGetRouterAddressKey, ...(queryKey ?? [clientOptions])];
export type OdosGetExecutorAddressDefaultResponse = Awaited<
	ReturnType<typeof odosGetExecutorAddress>
>["data"];
export type OdosGetExecutorAddressQueryResult<
	TData = OdosGetExecutorAddressDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useOdosGetExecutorAddressKey = "OdosGetExecutorAddress";
export const UseOdosGetExecutorAddressKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useOdosGetExecutorAddressKey, ...(queryKey ?? [clientOptions])];
export type OdosGetLiquiditySourcesDefaultResponse = Awaited<
	ReturnType<typeof odosGetLiquiditySources>
>["data"];
export type OdosGetLiquiditySourcesQueryResult<
	TData = OdosGetLiquiditySourcesDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useOdosGetLiquiditySourcesKey = "OdosGetLiquiditySources";
export const UseOdosGetLiquiditySourcesKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useOdosGetLiquiditySourcesKey, ...(queryKey ?? [clientOptions])];
export type OdosGetSupportedTokensDefaultResponse = Awaited<
	ReturnType<typeof odosGetSupportedTokens>
>["data"];
export type OdosGetSupportedTokensQueryResult<
	TData = OdosGetSupportedTokensDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useOdosGetSupportedTokensKey = "OdosGetSupportedTokens";
export const UseOdosGetSupportedTokensKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useOdosGetSupportedTokensKey, ...(queryKey ?? [clientOptions])];
export type OdosGetCurrentBlockDefaultResponse = Awaited<
	ReturnType<typeof odosGetCurrentBlock>
>["data"];
export type OdosGetCurrentBlockQueryResult<
	TData = OdosGetCurrentBlockDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useOdosGetCurrentBlockKey = "OdosGetCurrentBlock";
export const UseOdosGetCurrentBlockKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useOdosGetCurrentBlockKey, ...(queryKey ?? [clientOptions])];
export type OnRamperGetSupportedCurrenciesDefaultResponse = Awaited<
	ReturnType<typeof onRamperGetSupportedCurrencies>
>["data"];
export type OnRamperGetSupportedCurrenciesQueryResult<
	TData = OnRamperGetSupportedCurrenciesDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useOnRamperGetSupportedCurrenciesKey =
	"OnRamperGetSupportedCurrencies";
export const UseOnRamperGetSupportedCurrenciesKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useOnRamperGetSupportedCurrenciesKey, ...(queryKey ?? [clientOptions])];
export type OnRamperGetSupportedPaymentTypesDefaultResponse = Awaited<
	ReturnType<typeof onRamperGetSupportedPaymentTypes>
>["data"];
export type OnRamperGetSupportedPaymentTypesQueryResult<
	TData = OnRamperGetSupportedPaymentTypesDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useOnRamperGetSupportedPaymentTypesKey =
	"OnRamperGetSupportedPaymentTypes";
export const UseOnRamperGetSupportedPaymentTypesKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useOnRamperGetSupportedPaymentTypesKey, ...(queryKey ?? [clientOptions])];
export type OnRamperGetSupportedPaymentTypesFiatDefaultResponse = Awaited<
	ReturnType<typeof onRamperGetSupportedPaymentTypesFiat>
>["data"];
export type OnRamperGetSupportedPaymentTypesFiatQueryResult<
	TData = OnRamperGetSupportedPaymentTypesFiatDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useOnRamperGetSupportedPaymentTypesFiatKey =
	"OnRamperGetSupportedPaymentTypesFiat";
export const UseOnRamperGetSupportedPaymentTypesFiatKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useOnRamperGetSupportedPaymentTypesFiatKey,
	...(queryKey ?? [clientOptions]),
];
export type OnRamperGetSupportedDefaultsAllDefaultResponse = Awaited<
	ReturnType<typeof onRamperGetSupportedDefaultsAll>
>["data"];
export type OnRamperGetSupportedDefaultsAllQueryResult<
	TData = OnRamperGetSupportedDefaultsAllDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useOnRamperGetSupportedDefaultsAllKey =
	"OnRamperGetSupportedDefaultsAll";
export const UseOnRamperGetSupportedDefaultsAllKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useOnRamperGetSupportedDefaultsAllKey, ...(queryKey ?? [clientOptions])];
export type OnRamperGetSupportedAssetsDefaultResponse = Awaited<
	ReturnType<typeof onRamperGetSupportedAssets>
>["data"];
export type OnRamperGetSupportedAssetsQueryResult<
	TData = OnRamperGetSupportedAssetsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useOnRamperGetSupportedAssetsKey = "OnRamperGetSupportedAssets";
export const UseOnRamperGetSupportedAssetsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useOnRamperGetSupportedAssetsKey, ...(queryKey ?? [clientOptions])];
export type OnRamperGetSupportedOnRampsAllDefaultResponse = Awaited<
	ReturnType<typeof onRamperGetSupportedOnRampsAll>
>["data"];
export type OnRamperGetSupportedOnRampsAllQueryResult<
	TData = OnRamperGetSupportedOnRampsAllDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useOnRamperGetSupportedOnRampsAllKey =
	"OnRamperGetSupportedOnRampsAll";
export const UseOnRamperGetSupportedOnRampsAllKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useOnRamperGetSupportedOnRampsAllKey, ...(queryKey ?? [clientOptions])];
export type OnRamperGetQuotesBuyDefaultResponse = Awaited<
	ReturnType<typeof onRamperGetQuotesBuy>
>["data"];
export type OnRamperGetQuotesBuyQueryResult<
	TData = OnRamperGetQuotesBuyDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useOnRamperGetQuotesBuyKey = "OnRamperGetQuotesBuy";
export const UseOnRamperGetQuotesBuyKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useOnRamperGetQuotesBuyKey, ...(queryKey ?? [clientOptions])];
export type OnRamperGetQuotesSellDefaultResponse = Awaited<
	ReturnType<typeof onRamperGetQuotesSell>
>["data"];
export type OnRamperGetQuotesSellQueryResult<
	TData = OnRamperGetQuotesSellDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useOnRamperGetQuotesSellKey = "OnRamperGetQuotesSell";
export const UseOnRamperGetQuotesSellKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useOnRamperGetQuotesSellKey, ...(queryKey ?? [clientOptions])];
export type GetCollectionDefaultResponse = Awaited<
	ReturnType<typeof getCollection>
>["data"];
export type GetCollectionQueryResult<
	TData = GetCollectionDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetCollectionKey = "GetCollection";
export const UseGetCollectionKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetCollectionKey, ...(queryKey ?? [clientOptions])];
export type GetNftDefaultResponse = Awaited<ReturnType<typeof getNft>>["data"];
export type GetNftQueryResult<
	TData = GetNftDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetNftKey = "GetNft";
export const UseGetNftKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetNftKey, ...(queryKey ?? [clientOptions])];
export type GetMessageDefaultResponse = Awaited<
	ReturnType<typeof getMessage>
>["data"];
export type GetMessageQueryResult<
	TData = GetMessageDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetMessageKey = "GetMessage";
export const UseGetMessageKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetMessageKey, ...(queryKey ?? [clientOptions])];
export type GetMarketsDefaultResponse = Awaited<
	ReturnType<typeof getMarkets>
>["data"];
export type GetMarketsQueryResult<
	TData = GetMarketsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetMarketsKey = "GetMarkets";
export const UseGetMarketsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetMarketsKey, ...(queryKey ?? [clientOptions])];
export type GetMarketDefaultResponse = Awaited<
	ReturnType<typeof getMarket>
>["data"];
export type GetMarketQueryResult<
	TData = GetMarketDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetMarketKey = "GetMarket";
export const UseGetMarketKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetMarketKey, ...(queryKey ?? [clientOptions])];
export type GetOrderBookDefaultResponse = Awaited<
	ReturnType<typeof getOrderBook>
>["data"];
export type GetOrderBookQueryResult<
	TData = GetOrderBookDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetOrderBookKey = "GetOrderBook";
export const UseGetOrderBookKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetOrderBookKey, ...(queryKey ?? [clientOptions])];
export type GetOpenOrdersDefaultResponse = Awaited<
	ReturnType<typeof getOpenOrders>
>["data"];
export type GetOpenOrdersQueryResult<
	TData = GetOpenOrdersDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetOpenOrdersKey = "GetOpenOrders";
export const UseGetOpenOrdersKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetOpenOrdersKey, ...(queryKey ?? [clientOptions])];
export type GetOrderDefaultResponse = Awaited<
	ReturnType<typeof getOrder>
>["data"];
export type GetOrderQueryResult<
	TData = GetOrderDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetOrderKey = "GetOrder";
export const UseGetOrderKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetOrderKey, ...(queryKey ?? [clientOptions])];
export type GetTradesDefaultResponse = Awaited<
	ReturnType<typeof getTrades>
>["data"];
export type GetTradesQueryResult<
	TData = GetTradesDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTradesKey = "GetTrades";
export const UseGetTradesKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetTradesKey, ...(queryKey ?? [clientOptions])];
export type GetNotifications1DefaultResponse = Awaited<
	ReturnType<typeof getNotifications1>
>["data"];
export type GetNotifications1QueryResult<
	TData = GetNotifications1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetNotifications1Key = "GetNotifications1";
export const UseGetNotifications1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetNotifications1Key, ...(queryKey ?? [clientOptions])];
export type GetBalanceAllowanceDefaultResponse = Awaited<
	ReturnType<typeof getBalanceAllowance>
>["data"];
export type GetBalanceAllowanceQueryResult<
	TData = GetBalanceAllowanceDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetBalanceAllowanceKey = "GetBalanceAllowance";
export const UseGetBalanceAllowanceKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetBalanceAllowanceKey, ...(queryKey ?? [clientOptions])];
export type GetPricesHistoryDefaultResponse = Awaited<
	ReturnType<typeof getPricesHistory>
>["data"];
export type GetPricesHistoryQueryResult<
	TData = GetPricesHistoryDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetPricesHistoryKey = "GetPricesHistory";
export const UseGetPricesHistoryKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetPricesHistoryKey, ...(queryKey ?? [clientOptions])];
export type GetMarketTradeEventsDefaultResponse = Awaited<
	ReturnType<typeof getMarketTradeEvents>
>["data"];
export type GetMarketTradeEventsQueryResult<
	TData = GetMarketTradeEventsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetMarketTradeEventsKey = "GetMarketTradeEvents";
export const UseGetMarketTradeEventsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetMarketTradeEventsKey, ...(queryKey ?? [clientOptions])];
export type GetPools1DefaultResponse = Awaited<
	ReturnType<typeof getPools1>
>["data"];
export type GetPools1QueryResult<
	TData = GetPools1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetPools1Key = "GetPools1";
export const UseGetPools1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetPools1Key, ...(queryKey ?? [clientOptions])];
export type GetPoolByAddress1DefaultResponse = Awaited<
	ReturnType<typeof getPoolByAddress1>
>["data"];
export type GetPoolByAddress1QueryResult<
	TData = GetPoolByAddress1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetPoolByAddress1Key = "GetPoolByAddress1";
export const UseGetPoolByAddress1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetPoolByAddress1Key, ...(queryKey ?? [clientOptions])];
export type GetPoolsByType1DefaultResponse = Awaited<
	ReturnType<typeof getPoolsByType1>
>["data"];
export type GetPoolsByType1QueryResult<
	TData = GetPoolsByType1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetPoolsByType1Key = "GetPoolsByType1";
export const UseGetPoolsByType1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetPoolsByType1Key, ...(queryKey ?? [clientOptions])];
export type GetTopAprPools1DefaultResponse = Awaited<
	ReturnType<typeof getTopAprPools1>
>["data"];
export type GetTopAprPools1QueryResult<
	TData = GetTopAprPools1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTopAprPools1Key = "GetTopAprPools1";
export const UseGetTopAprPools1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetTopAprPools1Key, ...(queryKey ?? [clientOptions])];
export type GetTokensDefaultResponse = Awaited<
	ReturnType<typeof getTokens>
>["data"];
export type GetTokensQueryResult<
	TData = GetTokensDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTokensKey = "GetTokens";
export const UseGetTokensKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetTokensKey, ...(queryKey ?? [clientOptions])];
export type GetInfoDefaultResponse = Awaited<
	ReturnType<typeof getInfo>
>["data"];
export type GetInfoQueryResult<
	TData = GetInfoDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetInfoKey = "GetInfo";
export const UseGetInfoKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetInfoKey, ...(queryKey ?? [clientOptions])];
export type GetTotalValueLocked1DefaultResponse = Awaited<
	ReturnType<typeof getTotalValueLocked1>
>["data"];
export type GetTotalValueLocked1QueryResult<
	TData = GetTotalValueLocked1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTotalValueLocked1Key = "GetTotalValueLocked1";
export const UseGetTotalValueLocked1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetTotalValueLocked1Key, ...(queryKey ?? [clientOptions])];
export type CalculateOptimalVoteDistribution1DefaultResponse = Awaited<
	ReturnType<typeof calculateOptimalVoteDistribution1>
>["data"];
export type CalculateOptimalVoteDistribution1QueryResult<
	TData = CalculateOptimalVoteDistribution1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useCalculateOptimalVoteDistribution1Key =
	"CalculateOptimalVoteDistribution1";
export const UseCalculateOptimalVoteDistribution1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useCalculateOptimalVoteDistribution1Key,
	...(queryKey ?? [clientOptions]),
];
export type GetBalanceOf1DefaultResponse = Awaited<
	ReturnType<typeof getBalanceOf1>
>["data"];
export type GetBalanceOf1QueryResult<
	TData = GetBalanceOf1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetBalanceOf1Key = "GetBalanceOf1";
export const UseGetBalanceOf1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetBalanceOf1Key, ...(queryKey ?? [clientOptions])];
export type GetOwnerOf1DefaultResponse = Awaited<
	ReturnType<typeof getOwnerOf1>
>["data"];
export type GetOwnerOf1QueryResult<
	TData = GetOwnerOf1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetOwnerOf1Key = "GetOwnerOf1";
export const UseGetOwnerOf1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetOwnerOf1Key, ...(queryKey ?? [clientOptions])];
export type GetTokenUri1DefaultResponse = Awaited<
	ReturnType<typeof getTokenUri1>
>["data"];
export type GetTokenUri1QueryResult<
	TData = GetTokenUri1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTokenUri1Key = "GetTokenUri1";
export const UseGetTokenUri1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetTokenUri1Key, ...(queryKey ?? [clientOptions])];
export type GetTotalSupply1DefaultResponse = Awaited<
	ReturnType<typeof getTotalSupply1>
>["data"];
export type GetTotalSupply1QueryResult<
	TData = GetTotalSupply1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTotalSupply1Key = "GetTotalSupply1";
export const UseGetTotalSupply1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetTotalSupply1Key, ...(queryKey ?? [clientOptions])];
export type GetBalanceOfNft1DefaultResponse = Awaited<
	ReturnType<typeof getBalanceOfNft1>
>["data"];
export type GetBalanceOfNft1QueryResult<
	TData = GetBalanceOfNft1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetBalanceOfNft1Key = "GetBalanceOfNft1";
export const UseGetBalanceOfNft1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetBalanceOfNft1Key, ...(queryKey ?? [clientOptions])];
export type GetLockedDefaultResponse = Awaited<
	ReturnType<typeof getLocked>
>["data"];
export type GetLockedQueryResult<
	TData = GetLockedDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetLockedKey = "GetLocked";
export const UseGetLockedKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetLockedKey, ...(queryKey ?? [clientOptions])];
export type GetVotes1DefaultResponse = Awaited<
	ReturnType<typeof getVotes1>
>["data"];
export type GetVotes1QueryResult<
	TData = GetVotes1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetVotes1Key = "GetVotes1";
export const UseGetVotes1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetVotes1Key, ...(queryKey ?? [clientOptions])];
export type GetPastVotes1DefaultResponse = Awaited<
	ReturnType<typeof getPastVotes1>
>["data"];
export type GetPastVotes1QueryResult<
	TData = GetPastVotes1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetPastVotes1Key = "GetPastVotes1";
export const UseGetPastVotes1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetPastVotes1Key, ...(queryKey ?? [clientOptions])];
export type GetDelegates1DefaultResponse = Awaited<
	ReturnType<typeof getDelegates1>
>["data"];
export type GetDelegates1QueryResult<
	TData = GetDelegates1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetDelegates1Key = "GetDelegates1";
export const UseGetDelegates1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetDelegates1Key, ...(queryKey ?? [clientOptions])];
export type GetFactory1DefaultResponse = Awaited<
	ReturnType<typeof getFactory1>
>["data"];
export type GetFactory1QueryResult<
	TData = GetFactory1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetFactory1Key = "GetFactory1";
export const UseGetFactory1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetFactory1Key, ...(queryKey ?? [clientOptions])];
export type GetAmountOut1DefaultResponse = Awaited<
	ReturnType<typeof getAmountOut1>
>["data"];
export type GetAmountOut1QueryResult<
	TData = GetAmountOut1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetAmountOut1Key = "GetAmountOut1";
export const UseGetAmountOut1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetAmountOut1Key, ...(queryKey ?? [clientOptions])];
export type GetAmountsOut1DefaultResponse = Awaited<
	ReturnType<typeof getAmountsOut1>
>["data"];
export type GetAmountsOut1QueryResult<
	TData = GetAmountsOut1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetAmountsOut1Key = "GetAmountsOut1";
export const UseGetAmountsOut1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetAmountsOut1Key, ...(queryKey ?? [clientOptions])];
export type GetReservesDefaultResponse = Awaited<
	ReturnType<typeof getReserves>
>["data"];
export type GetReservesQueryResult<
	TData = GetReservesDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetReservesKey = "GetReserves";
export const UseGetReservesKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetReservesKey, ...(queryKey ?? [clientOptions])];
export type IsPairDefaultResponse = Awaited<ReturnType<typeof isPair>>["data"];
export type IsPairQueryResult<
	TData = IsPairDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useIsPairKey = "IsPair";
export const UseIsPairKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useIsPairKey, ...(queryKey ?? [clientOptions])];
export type PairForDefaultResponse = Awaited<
	ReturnType<typeof pairFor>
>["data"];
export type PairForQueryResult<
	TData = PairForDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const usePairForKey = "PairFor";
export const UsePairForKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [usePairForKey, ...(queryKey ?? [clientOptions])];
export type QuoteAddLiquidityDefaultResponse = Awaited<
	ReturnType<typeof quoteAddLiquidity>
>["data"];
export type QuoteAddLiquidityQueryResult<
	TData = QuoteAddLiquidityDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useQuoteAddLiquidityKey = "QuoteAddLiquidity";
export const UseQuoteAddLiquidityKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useQuoteAddLiquidityKey, ...(queryKey ?? [clientOptions])];
export type QuoteRemoveLiquidityDefaultResponse = Awaited<
	ReturnType<typeof quoteRemoveLiquidity>
>["data"];
export type QuoteRemoveLiquidityQueryResult<
	TData = QuoteRemoveLiquidityDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useQuoteRemoveLiquidityKey = "QuoteRemoveLiquidity";
export const UseQuoteRemoveLiquidityKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useQuoteRemoveLiquidityKey, ...(queryKey ?? [clientOptions])];
export type SortTokensDefaultResponse = Awaited<
	ReturnType<typeof sortTokens>
>["data"];
export type SortTokensQueryResult<
	TData = SortTokensDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useSortTokensKey = "SortTokens";
export const UseSortTokensKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useSortTokensKey, ...(queryKey ?? [clientOptions])];
export type GetWeth1DefaultResponse = Awaited<
	ReturnType<typeof getWeth1>
>["data"];
export type GetWeth1QueryResult<
	TData = GetWeth1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetWeth1Key = "GetWeth1";
export const UseGetWeth1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetWeth1Key, ...(queryKey ?? [clientOptions])];
export type GetTotalWeight1DefaultResponse = Awaited<
	ReturnType<typeof getTotalWeight1>
>["data"];
export type GetTotalWeight1QueryResult<
	TData = GetTotalWeight1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTotalWeight1Key = "GetTotalWeight1";
export const UseGetTotalWeight1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetTotalWeight1Key, ...(queryKey ?? [clientOptions])];
export type GetWeights1DefaultResponse = Awaited<
	ReturnType<typeof getWeights1>
>["data"];
export type GetWeights1QueryResult<
	TData = GetWeights1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetWeights1Key = "GetWeights1";
export const UseGetWeights1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetWeights1Key, ...(queryKey ?? [clientOptions])];
export type IsGauge1DefaultResponse = Awaited<
	ReturnType<typeof isGauge1>
>["data"];
export type IsGauge1QueryResult<
	TData = IsGauge1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useIsGauge1Key = "IsGauge1";
export const UseIsGauge1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useIsGauge1Key, ...(queryKey ?? [clientOptions])];
export type IsWhitelisted1DefaultResponse = Awaited<
	ReturnType<typeof isWhitelisted1>
>["data"];
export type IsWhitelisted1QueryResult<
	TData = IsWhitelisted1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useIsWhitelisted1Key = "IsWhitelisted1";
export const UseIsWhitelisted1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useIsWhitelisted1Key, ...(queryKey ?? [clientOptions])];
export type GetLastVoted1DefaultResponse = Awaited<
	ReturnType<typeof getLastVoted1>
>["data"];
export type GetLastVoted1QueryResult<
	TData = GetLastVoted1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetLastVoted1Key = "GetLastVoted1";
export const UseGetLastVoted1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetLastVoted1Key, ...(queryKey ?? [clientOptions])];
export type ListRippleAccountsDefaultResponse = Awaited<
	ReturnType<typeof listRippleAccounts>
>["data"];
export type ListRippleAccountsQueryResult<
	TData = ListRippleAccountsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListRippleAccountsKey = "ListRippleAccounts";
export const UseListRippleAccountsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useListRippleAccountsKey, ...(queryKey ?? [clientOptions])];
export type GetRippleAccountDefaultResponse = Awaited<
	ReturnType<typeof getRippleAccount>
>["data"];
export type GetRippleAccountQueryResult<
	TData = GetRippleAccountDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetRippleAccountKey = "GetRippleAccount";
export const UseGetRippleAccountKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetRippleAccountKey, ...(queryKey ?? [clientOptions])];
export type ListSolanaAccountsDefaultResponse = Awaited<
	ReturnType<typeof listSolanaAccounts>
>["data"];
export type ListSolanaAccountsQueryResult<
	TData = ListSolanaAccountsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListSolanaAccountsKey = "ListSolanaAccounts";
export const UseListSolanaAccountsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useListSolanaAccountsKey, ...(queryKey ?? [clientOptions])];
export type GetSolanaAccountDefaultResponse = Awaited<
	ReturnType<typeof getSolanaAccount>
>["data"];
export type GetSolanaAccountQueryResult<
	TData = GetSolanaAccountDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetSolanaAccountKey = "GetSolanaAccount";
export const UseGetSolanaAccountKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetSolanaAccountKey, ...(queryKey ?? [clientOptions])];
export type GetFusionsDefaultResponse = Awaited<
	ReturnType<typeof getFusions>
>["data"];
export type GetFusionsQueryResult<
	TData = GetFusionsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetFusionsKey = "GetFusions";
export const UseGetFusionsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetFusionsKey, ...(queryKey ?? [clientOptions])];
export type GetFusionByAddressDefaultResponse = Awaited<
	ReturnType<typeof getFusionByAddress>
>["data"];
export type GetFusionByAddressQueryResult<
	TData = GetFusionByAddressDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetFusionByAddressKey = "GetFusionByAddress";
export const UseGetFusionByAddressKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetFusionByAddressKey, ...(queryKey ?? [clientOptions])];
export type GetFusionsByTypeDefaultResponse = Awaited<
	ReturnType<typeof getFusionsByType>
>["data"];
export type GetFusionsByTypeQueryResult<
	TData = GetFusionsByTypeDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetFusionsByTypeKey = "GetFusionsByType";
export const UseGetFusionsByTypeKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetFusionsByTypeKey, ...(queryKey ?? [clientOptions])];
export type GetTopAprFusionsDefaultResponse = Awaited<
	ReturnType<typeof getTopAprFusions>
>["data"];
export type GetTopAprFusionsQueryResult<
	TData = GetTopAprFusionsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTopAprFusionsKey = "GetTopAprFusions";
export const UseGetTopAprFusionsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetTopAprFusionsKey, ...(queryKey ?? [clientOptions])];
export type GetTotalValueLocked2DefaultResponse = Awaited<
	ReturnType<typeof getTotalValueLocked2>
>["data"];
export type GetTotalValueLocked2QueryResult<
	TData = GetTotalValueLocked2DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTotalValueLocked2Key = "GetTotalValueLocked2";
export const UseGetTotalValueLocked2KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetTotalValueLocked2Key, ...(queryKey ?? [clientOptions])];
export type GetTopTokensDefaultResponse = Awaited<
	ReturnType<typeof getTopTokens>
>["data"];
export type GetTopTokensQueryResult<
	TData = GetTopTokensDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTopTokensKey = "GetTopTokens";
export const UseGetTopTokensKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetTopTokensKey, ...(queryKey ?? [clientOptions])];
export type GetTopPairsDefaultResponse = Awaited<
	ReturnType<typeof getTopPairs>
>["data"];
export type GetTopPairsQueryResult<
	TData = GetTopPairsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTopPairsKey = "GetTopPairs";
export const UseGetTopPairsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetTopPairsKey, ...(queryKey ?? [clientOptions])];
export type CalculateOptimalVoteDistribution2DefaultResponse = Awaited<
	ReturnType<typeof calculateOptimalVoteDistribution2>
>["data"];
export type CalculateOptimalVoteDistribution2QueryResult<
	TData = CalculateOptimalVoteDistribution2DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useCalculateOptimalVoteDistribution2Key =
	"CalculateOptimalVoteDistribution2";
export const UseCalculateOptimalVoteDistribution2KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [
	useCalculateOptimalVoteDistribution2Key,
	...(queryKey ?? [clientOptions]),
];
export type GetQuoteDefaultResponse = Awaited<
	ReturnType<typeof getQuote>
>["data"];
export type GetQuoteQueryResult<
	TData = GetQuoteDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetQuoteKey = "GetQuote";
export const UseGetQuoteKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetQuoteKey, ...(queryKey ?? [clientOptions])];
export type GetGasPriceDefaultResponse = Awaited<
	ReturnType<typeof getGasPrice>
>["data"];
export type GetGasPriceQueryResult<
	TData = GetGasPriceDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetGasPriceKey = "GetGasPrice";
export const UseGetGasPriceKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetGasPriceKey, ...(queryKey ?? [clientOptions])];
export type GetSupportedChainsDefaultResponse = Awaited<
	ReturnType<typeof getSupportedChains>
>["data"];
export type GetSupportedChainsQueryResult<
	TData = GetSupportedChainsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetSupportedChainsKey = "GetSupportedChains";
export const UseGetSupportedChainsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetSupportedChainsKey, ...(queryKey ?? [clientOptions])];
export type GetSupportedProvidersDefaultResponse = Awaited<
	ReturnType<typeof getSupportedProviders>
>["data"];
export type GetSupportedProvidersQueryResult<
	TData = GetSupportedProvidersDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetSupportedProvidersKey = "GetSupportedProviders";
export const UseGetSupportedProvidersKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetSupportedProvidersKey, ...(queryKey ?? [clientOptions])];
export type TronListTronAccountsDefaultResponse = Awaited<
	ReturnType<typeof tronListTronAccounts>
>["data"];
export type TronListTronAccountsQueryResult<
	TData = TronListTronAccountsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTronListTronAccountsKey = "TronListTronAccounts";
export const UseTronListTronAccountsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useTronListTronAccountsKey, ...(queryKey ?? [clientOptions])];
export type TronGetTronAccountDefaultResponse = Awaited<
	ReturnType<typeof tronGetTronAccount>
>["data"];
export type TronGetTronAccountQueryResult<
	TData = TronGetTronAccountDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTronGetTronAccountKey = "TronGetTronAccount";
export const UseTronGetTronAccountKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useTronGetTronAccountKey, ...(queryKey ?? [clientOptions])];
export type GetWeth2DefaultResponse = Awaited<
	ReturnType<typeof getWeth2>
>["data"];
export type GetWeth2QueryResult<
	TData = GetWeth2DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetWeth2Key = "GetWeth2";
export const UseGetWeth2KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetWeth2Key, ...(queryKey ?? [clientOptions])];
export type PositionsDefaultResponse = Awaited<
	ReturnType<typeof positions>
>["data"];
export type PositionsQueryResult<
	TData = PositionsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const usePositionsKey = "Positions";
export const UsePositionsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [usePositionsKey, ...(queryKey ?? [clientOptions])];
export type TokenOfOwnerByIndexDefaultResponse = Awaited<
	ReturnType<typeof tokenOfOwnerByIndex>
>["data"];
export type TokenOfOwnerByIndexQueryResult<
	TData = TokenOfOwnerByIndexDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTokenOfOwnerByIndexKey = "TokenOfOwnerByIndex";
export const UseTokenOfOwnerByIndexKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useTokenOfOwnerByIndexKey, ...(queryKey ?? [clientOptions])];
export type BalanceOfDefaultResponse = Awaited<
	ReturnType<typeof balanceOf>
>["data"];
export type BalanceOfQueryResult<
	TData = BalanceOfDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useBalanceOfKey = "BalanceOf";
export const UseBalanceOfKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useBalanceOfKey, ...(queryKey ?? [clientOptions])];
export type DomainSeparatorDefaultResponse = Awaited<
	ReturnType<typeof domainSeparator>
>["data"];
export type DomainSeparatorQueryResult<
	TData = DomainSeparatorDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useDomainSeparatorKey = "DomainSeparator";
export const UseDomainSeparatorKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useDomainSeparatorKey, ...(queryKey ?? [clientOptions])];
export type PermitTypehashDefaultResponse = Awaited<
	ReturnType<typeof permitTypehash>
>["data"];
export type PermitTypehashQueryResult<
	TData = PermitTypehashDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const usePermitTypehashKey = "PermitTypehash";
export const UsePermitTypehashKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [usePermitTypehashKey, ...(queryKey ?? [clientOptions])];
export type Weth9DefaultResponse = Awaited<ReturnType<typeof weth9>>["data"];
export type Weth9QueryResult<
	TData = Weth9DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useWeth9Key = "Weth9";
export const UseWeth9KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useWeth9Key, ...(queryKey ?? [clientOptions])];
export type FactoryDefaultResponse = Awaited<
	ReturnType<typeof factory>
>["data"];
export type FactoryQueryResult<
	TData = FactoryDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useFactoryKey = "Factory";
export const UseFactoryKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useFactoryKey, ...(queryKey ?? [clientOptions])];
export type NameDefaultResponse = Awaited<ReturnType<typeof name>>["data"];
export type NameQueryResult<
	TData = NameDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useNameKey = "Name";
export const UseNameKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useNameKey, ...(queryKey ?? [clientOptions])];
export type SymbolDefaultResponse = Awaited<ReturnType<typeof symbol>>["data"];
export type SymbolQueryResult<
	TData = SymbolDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useSymbolKey = "Symbol";
export const UseSymbolKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useSymbolKey, ...(queryKey ?? [clientOptions])];
export type TokenUriDefaultResponse = Awaited<
	ReturnType<typeof tokenUri>
>["data"];
export type TokenUriQueryResult<
	TData = TokenUriDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTokenUriKey = "TokenUri";
export const UseTokenUriKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useTokenUriKey, ...(queryKey ?? [clientOptions])];
export type BaseUriDefaultResponse = Awaited<
	ReturnType<typeof baseUri>
>["data"];
export type BaseUriQueryResult<
	TData = BaseUriDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useBaseUriKey = "BaseUri";
export const UseBaseUriKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useBaseUriKey, ...(queryKey ?? [clientOptions])];
export type OwnerOfDefaultResponse = Awaited<
	ReturnType<typeof ownerOf>
>["data"];
export type OwnerOfQueryResult<
	TData = OwnerOfDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useOwnerOfKey = "OwnerOf";
export const UseOwnerOfKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useOwnerOfKey, ...(queryKey ?? [clientOptions])];
export type GetApproved1DefaultResponse = Awaited<
	ReturnType<typeof getApproved1>
>["data"];
export type GetApproved1QueryResult<
	TData = GetApproved1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetApproved1Key = "GetApproved1";
export const UseGetApproved1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetApproved1Key, ...(queryKey ?? [clientOptions])];
export type IsApprovedForAll1DefaultResponse = Awaited<
	ReturnType<typeof isApprovedForAll1>
>["data"];
export type IsApprovedForAll1QueryResult<
	TData = IsApprovedForAll1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useIsApprovedForAll1Key = "IsApprovedForAll1";
export const UseIsApprovedForAll1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useIsApprovedForAll1Key, ...(queryKey ?? [clientOptions])];
export type TotalSupplyDefaultResponse = Awaited<
	ReturnType<typeof totalSupply>
>["data"];
export type TotalSupplyQueryResult<
	TData = TotalSupplyDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTotalSupplyKey = "TotalSupply";
export const UseTotalSupplyKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useTotalSupplyKey, ...(queryKey ?? [clientOptions])];
export type TokenByIndexDefaultResponse = Awaited<
	ReturnType<typeof tokenByIndex>
>["data"];
export type TokenByIndexQueryResult<
	TData = TokenByIndexDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTokenByIndexKey = "TokenByIndex";
export const UseTokenByIndexKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useTokenByIndexKey, ...(queryKey ?? [clientOptions])];
export type SupportsInterfaceDefaultResponse = Awaited<
	ReturnType<typeof supportsInterface>
>["data"];
export type SupportsInterfaceQueryResult<
	TData = SupportsInterfaceDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useSupportsInterfaceKey = "SupportsInterface";
export const UseSupportsInterfaceKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useSupportsInterfaceKey, ...(queryKey ?? [clientOptions])];
export type Weth91DefaultResponse = Awaited<ReturnType<typeof weth91>>["data"];
export type Weth91QueryResult<
	TData = Weth91DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useWeth91Key = "Weth91";
export const UseWeth91KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useWeth91Key, ...(queryKey ?? [clientOptions])];
export type Factory1DefaultResponse = Awaited<
	ReturnType<typeof factory1>
>["data"];
export type Factory1QueryResult<
	TData = Factory1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useFactory1Key = "Factory1";
export const UseFactory1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useFactory1Key, ...(queryKey ?? [clientOptions])];
export type GetBalanceOf2DefaultResponse = Awaited<
	ReturnType<typeof getBalanceOf2>
>["data"];
export type GetBalanceOf2QueryResult<
	TData = GetBalanceOf2DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetBalanceOf2Key = "GetBalanceOf2";
export const UseGetBalanceOf2KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetBalanceOf2Key, ...(queryKey ?? [clientOptions])];
export type GetOwnerOf2DefaultResponse = Awaited<
	ReturnType<typeof getOwnerOf2>
>["data"];
export type GetOwnerOf2QueryResult<
	TData = GetOwnerOf2DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetOwnerOf2Key = "GetOwnerOf2";
export const UseGetOwnerOf2KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetOwnerOf2Key, ...(queryKey ?? [clientOptions])];
export type GetTokenUri2DefaultResponse = Awaited<
	ReturnType<typeof getTokenUri2>
>["data"];
export type GetTokenUri2QueryResult<
	TData = GetTokenUri2DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTokenUri2Key = "GetTokenUri2";
export const UseGetTokenUri2KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetTokenUri2Key, ...(queryKey ?? [clientOptions])];
export type GetApproved2DefaultResponse = Awaited<
	ReturnType<typeof getApproved2>
>["data"];
export type GetApproved2QueryResult<
	TData = GetApproved2DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetApproved2Key = "GetApproved2";
export const UseGetApproved2KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetApproved2Key, ...(queryKey ?? [clientOptions])];
export type IsApprovedForAll2DefaultResponse = Awaited<
	ReturnType<typeof isApprovedForAll2>
>["data"];
export type IsApprovedForAll2QueryResult<
	TData = IsApprovedForAll2DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useIsApprovedForAll2Key = "IsApprovedForAll2";
export const UseIsApprovedForAll2KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useIsApprovedForAll2Key, ...(queryKey ?? [clientOptions])];
export type GetBalanceOfNft2DefaultResponse = Awaited<
	ReturnType<typeof getBalanceOfNft2>
>["data"];
export type GetBalanceOfNft2QueryResult<
	TData = GetBalanceOfNft2DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetBalanceOfNft2Key = "GetBalanceOfNft2";
export const UseGetBalanceOfNft2KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetBalanceOfNft2Key, ...(queryKey ?? [clientOptions])];
export type GetTotalSupply2DefaultResponse = Awaited<
	ReturnType<typeof getTotalSupply2>
>["data"];
export type GetTotalSupply2QueryResult<
	TData = GetTotalSupply2DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTotalSupply2Key = "GetTotalSupply2";
export const UseGetTotalSupply2KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetTotalSupply2Key, ...(queryKey ?? [clientOptions])];
export type GetLocked1DefaultResponse = Awaited<
	ReturnType<typeof getLocked1>
>["data"];
export type GetLocked1QueryResult<
	TData = GetLocked1DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetLocked1Key = "GetLocked1";
export const UseGetLocked1KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetLocked1Key, ...(queryKey ?? [clientOptions])];
export type GetLockedEndDefaultResponse = Awaited<
	ReturnType<typeof getLockedEnd>
>["data"];
export type GetLockedEndQueryResult<
	TData = GetLockedEndDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetLockedEndKey = "GetLockedEnd";
export const UseGetLockedEndKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetLockedEndKey, ...(queryKey ?? [clientOptions])];
export type GetLastUserSlopeDefaultResponse = Awaited<
	ReturnType<typeof getLastUserSlope>
>["data"];
export type GetLastUserSlopeQueryResult<
	TData = GetLastUserSlopeDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetLastUserSlopeKey = "GetLastUserSlope";
export const UseGetLastUserSlopeKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetLastUserSlopeKey, ...(queryKey ?? [clientOptions])];
export type GetUserPointHistoryDefaultResponse = Awaited<
	ReturnType<typeof getUserPointHistory>
>["data"];
export type GetUserPointHistoryQueryResult<
	TData = GetUserPointHistoryDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetUserPointHistoryKey = "GetUserPointHistory";
export const UseGetUserPointHistoryKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetUserPointHistoryKey, ...(queryKey ?? [clientOptions])];
export type GetUserPointHistoryTsDefaultResponse = Awaited<
	ReturnType<typeof getUserPointHistoryTs>
>["data"];
export type GetUserPointHistoryTsQueryResult<
	TData = GetUserPointHistoryTsDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetUserPointHistoryTsKey = "GetUserPointHistoryTs";
export const UseGetUserPointHistoryTsKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetUserPointHistoryTsKey, ...(queryKey ?? [clientOptions])];
export type GetBalanceOfAtNftDefaultResponse = Awaited<
	ReturnType<typeof getBalanceOfAtNft>
>["data"];
export type GetBalanceOfAtNftQueryResult<
	TData = GetBalanceOfAtNftDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetBalanceOfAtNftKey = "GetBalanceOfAtNft";
export const UseGetBalanceOfAtNftKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetBalanceOfAtNftKey, ...(queryKey ?? [clientOptions])];
export type GetTotalSupplyAtDefaultResponse = Awaited<
	ReturnType<typeof getTotalSupplyAt>
>["data"];
export type GetTotalSupplyAtQueryResult<
	TData = GetTotalSupplyAtDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTotalSupplyAtKey = "GetTotalSupplyAt";
export const UseGetTotalSupplyAtKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetTotalSupplyAtKey, ...(queryKey ?? [clientOptions])];
export type GetTotalSupplyAtTDefaultResponse = Awaited<
	ReturnType<typeof getTotalSupplyAtT>
>["data"];
export type GetTotalSupplyAtTQueryResult<
	TData = GetTotalSupplyAtTDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTotalSupplyAtTKey = "GetTotalSupplyAtT";
export const UseGetTotalSupplyAtTKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetTotalSupplyAtTKey, ...(queryKey ?? [clientOptions])];
export type GetPastVotes2DefaultResponse = Awaited<
	ReturnType<typeof getPastVotes2>
>["data"];
export type GetPastVotes2QueryResult<
	TData = GetPastVotes2DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetPastVotes2Key = "GetPastVotes2";
export const UseGetPastVotes2KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetPastVotes2Key, ...(queryKey ?? [clientOptions])];
export type GetPastTotalSupplyDefaultResponse = Awaited<
	ReturnType<typeof getPastTotalSupply>
>["data"];
export type GetPastTotalSupplyQueryResult<
	TData = GetPastTotalSupplyDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetPastTotalSupplyKey = "GetPastTotalSupply";
export const UseGetPastTotalSupplyKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetPastTotalSupplyKey, ...(queryKey ?? [clientOptions])];
export type GetVotes2DefaultResponse = Awaited<
	ReturnType<typeof getVotes2>
>["data"];
export type GetVotes2QueryResult<
	TData = GetVotes2DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetVotes2Key = "GetVotes2";
export const UseGetVotes2KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetVotes2Key, ...(queryKey ?? [clientOptions])];
export type GetDelegates2DefaultResponse = Awaited<
	ReturnType<typeof getDelegates2>
>["data"];
export type GetDelegates2QueryResult<
	TData = GetDelegates2DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetDelegates2Key = "GetDelegates2";
export const UseGetDelegates2KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetDelegates2Key, ...(queryKey ?? [clientOptions])];
export type GetTotalWeight2DefaultResponse = Awaited<
	ReturnType<typeof getTotalWeight2>
>["data"];
export type GetTotalWeight2QueryResult<
	TData = GetTotalWeight2DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetTotalWeight2Key = "GetTotalWeight2";
export const UseGetTotalWeight2KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetTotalWeight2Key, ...(queryKey ?? [clientOptions])];
export type GetWeights2DefaultResponse = Awaited<
	ReturnType<typeof getWeights2>
>["data"];
export type GetWeights2QueryResult<
	TData = GetWeights2DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGetWeights2Key = "GetWeights2";
export const UseGetWeights2KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useGetWeights2Key, ...(queryKey ?? [clientOptions])];
export type IsGauge2DefaultResponse = Awaited<
	ReturnType<typeof isGauge2>
>["data"];
export type IsGauge2QueryResult<
	TData = IsGauge2DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useIsGauge2Key = "IsGauge2";
export const UseIsGauge2KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useIsGauge2Key, ...(queryKey ?? [clientOptions])];
export type IsWhitelisted2DefaultResponse = Awaited<
	ReturnType<typeof isWhitelisted2>
>["data"];
export type IsWhitelisted2QueryResult<
	TData = IsWhitelisted2DefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useIsWhitelisted2Key = "IsWhitelisted2";
export const UseIsWhitelisted2KeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useIsWhitelisted2Key, ...(queryKey ?? [clientOptions])];
export type LastVotedDefaultResponse = Awaited<
	ReturnType<typeof lastVoted>
>["data"];
export type LastVotedQueryResult<
	TData = LastVotedDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const useLastVotedKey = "LastVoted";
export const UseLastVotedKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [useLastVotedKey, ...(queryKey ?? [clientOptions])];
export type PoolVoteLengthDefaultResponse = Awaited<
	ReturnType<typeof poolVoteLength>
>["data"];
export type PoolVoteLengthQueryResult<
	TData = PoolVoteLengthDefaultResponse,
	TError = unknown,
> = UseQueryResult<TData, TError>;
export const usePoolVoteLengthKey = "PoolVoteLength";
export const UsePoolVoteLengthKeyFn = (
	clientOptions: Options<unknown, true> = {},
	queryKey?: Array<unknown>,
) => [usePoolVoteLengthKey, ...(queryKey ?? [clientOptions])];
export type Aavev3PoolSupplyMutationResult = Awaited<
	ReturnType<typeof aavev3PoolSupply>
>;
export const useAavev3PoolSupplyKey = "Aavev3PoolSupply";
export const UseAavev3PoolSupplyKeyFn = (mutationKey?: Array<unknown>) => [
	useAavev3PoolSupplyKey,
	...(mutationKey ?? []),
];
export type Aavev3PoolWithdrawMutationResult = Awaited<
	ReturnType<typeof aavev3PoolWithdraw>
>;
export const useAavev3PoolWithdrawKey = "Aavev3PoolWithdraw";
export const UseAavev3PoolWithdrawKeyFn = (mutationKey?: Array<unknown>) => [
	useAavev3PoolWithdrawKey,
	...(mutationKey ?? []),
];
export type Aavev3PoolBorrowMutationResult = Awaited<
	ReturnType<typeof aavev3PoolBorrow>
>;
export const useAavev3PoolBorrowKey = "Aavev3PoolBorrow";
export const UseAavev3PoolBorrowKeyFn = (mutationKey?: Array<unknown>) => [
	useAavev3PoolBorrowKey,
	...(mutationKey ?? []),
];
export type Aavev3PoolRepayMutationResult = Awaited<
	ReturnType<typeof aavev3PoolRepay>
>;
export const useAavev3PoolRepayKey = "Aavev3PoolRepay";
export const UseAavev3PoolRepayKeyFn = (mutationKey?: Array<unknown>) => [
	useAavev3PoolRepayKey,
	...(mutationKey ?? []),
];
export type Aavev3PoolSetUserUseReserveAsCollateralMutationResult = Awaited<
	ReturnType<typeof aavev3PoolSetUserUseReserveAsCollateral>
>;
export const useAavev3PoolSetUserUseReserveAsCollateralKey =
	"Aavev3PoolSetUserUseReserveAsCollateral";
export const UseAavev3PoolSetUserUseReserveAsCollateralKeyFn = (
	mutationKey?: Array<unknown>,
) => [useAavev3PoolSetUserUseReserveAsCollateralKey, ...(mutationKey ?? [])];
export type Aavev3PoolLiquidationCallMutationResult = Awaited<
	ReturnType<typeof aavev3PoolLiquidationCall>
>;
export const useAavev3PoolLiquidationCallKey = "Aavev3PoolLiquidationCall";
export const UseAavev3PoolLiquidationCallKeyFn = (
	mutationKey?: Array<unknown>,
) => [useAavev3PoolLiquidationCallKey, ...(mutationKey ?? [])];
export type Aavev3PoolAddressProviderSetAclAdminMutationResult = Awaited<
	ReturnType<typeof aavev3PoolAddressProviderSetAclAdmin>
>;
export const useAavev3PoolAddressProviderSetAclAdminKey =
	"Aavev3PoolAddressProviderSetAclAdmin";
export const UseAavev3PoolAddressProviderSetAclAdminKeyFn = (
	mutationKey?: Array<unknown>,
) => [useAavev3PoolAddressProviderSetAclAdminKey, ...(mutationKey ?? [])];
export type Aavev3PoolAddressProviderSetAclManagerMutationResult = Awaited<
	ReturnType<typeof aavev3PoolAddressProviderSetAclManager>
>;
export const useAavev3PoolAddressProviderSetAclManagerKey =
	"Aavev3PoolAddressProviderSetAclManager";
export const UseAavev3PoolAddressProviderSetAclManagerKeyFn = (
	mutationKey?: Array<unknown>,
) => [useAavev3PoolAddressProviderSetAclManagerKey, ...(mutationKey ?? [])];
export type Aavev3PoolAddressProviderSetAddressMutationResult = Awaited<
	ReturnType<typeof aavev3PoolAddressProviderSetAddress>
>;
export const useAavev3PoolAddressProviderSetAddressKey =
	"Aavev3PoolAddressProviderSetAddress";
export const UseAavev3PoolAddressProviderSetAddressKeyFn = (
	mutationKey?: Array<unknown>,
) => [useAavev3PoolAddressProviderSetAddressKey, ...(mutationKey ?? [])];
export type Aavev3PoolAddressProviderSetMarketIdMutationResult = Awaited<
	ReturnType<typeof aavev3PoolAddressProviderSetMarketId>
>;
export const useAavev3PoolAddressProviderSetMarketIdKey =
	"Aavev3PoolAddressProviderSetMarketId";
export const UseAavev3PoolAddressProviderSetMarketIdKeyFn = (
	mutationKey?: Array<unknown>,
) => [useAavev3PoolAddressProviderSetMarketIdKey, ...(mutationKey ?? [])];
export type Aavev3PoolAddressProviderSetPoolConfiguratorImplMutationResult =
	Awaited<ReturnType<typeof aavev3PoolAddressProviderSetPoolConfiguratorImpl>>;
export const useAavev3PoolAddressProviderSetPoolConfiguratorImplKey =
	"Aavev3PoolAddressProviderSetPoolConfiguratorImpl";
export const UseAavev3PoolAddressProviderSetPoolConfiguratorImplKeyFn = (
	mutationKey?: Array<unknown>,
) => [
	useAavev3PoolAddressProviderSetPoolConfiguratorImplKey,
	...(mutationKey ?? []),
];
export type Aavev3PoolAddressProviderSetPoolImplMutationResult = Awaited<
	ReturnType<typeof aavev3PoolAddressProviderSetPoolImpl>
>;
export const useAavev3PoolAddressProviderSetPoolImplKey =
	"Aavev3PoolAddressProviderSetPoolImpl";
export const UseAavev3PoolAddressProviderSetPoolImplKeyFn = (
	mutationKey?: Array<unknown>,
) => [useAavev3PoolAddressProviderSetPoolImplKey, ...(mutationKey ?? [])];
export type AavEv3RewardsClaimRewardsMutationResult = Awaited<
	ReturnType<typeof aavEv3RewardsClaimRewards>
>;
export const useAavEv3RewardsClaimRewardsKey = "AavEv3RewardsClaimRewards";
export const UseAavEv3RewardsClaimRewardsKeyFn = (
	mutationKey?: Array<unknown>,
) => [useAavEv3RewardsClaimRewardsKey, ...(mutationKey ?? [])];
export type AavEv3RewardsClaimRewardsOnBehalfMutationResult = Awaited<
	ReturnType<typeof aavEv3RewardsClaimRewardsOnBehalf>
>;
export const useAavEv3RewardsClaimRewardsOnBehalfKey =
	"AavEv3RewardsClaimRewardsOnBehalf";
export const UseAavEv3RewardsClaimRewardsOnBehalfKeyFn = (
	mutationKey?: Array<unknown>,
) => [useAavEv3RewardsClaimRewardsOnBehalfKey, ...(mutationKey ?? [])];
export type AavEv3RewardsClaimRewardsToSelfMutationResult = Awaited<
	ReturnType<typeof aavEv3RewardsClaimRewardsToSelf>
>;
export const useAavEv3RewardsClaimRewardsToSelfKey =
	"AavEv3RewardsClaimRewardsToSelf";
export const UseAavEv3RewardsClaimRewardsToSelfKeyFn = (
	mutationKey?: Array<unknown>,
) => [useAavEv3RewardsClaimRewardsToSelfKey, ...(mutationKey ?? [])];
export type AavEv3RewardsClaimAllRewardsMutationResult = Awaited<
	ReturnType<typeof aavEv3RewardsClaimAllRewards>
>;
export const useAavEv3RewardsClaimAllRewardsKey =
	"AavEv3RewardsClaimAllRewards";
export const UseAavEv3RewardsClaimAllRewardsKeyFn = (
	mutationKey?: Array<unknown>,
) => [useAavEv3RewardsClaimAllRewardsKey, ...(mutationKey ?? [])];
export type AavEv3RewardsClaimAllRewardsOnBehalfMutationResult = Awaited<
	ReturnType<typeof aavEv3RewardsClaimAllRewardsOnBehalf>
>;
export const useAavEv3RewardsClaimAllRewardsOnBehalfKey =
	"AavEv3RewardsClaimAllRewardsOnBehalf";
export const UseAavEv3RewardsClaimAllRewardsOnBehalfKeyFn = (
	mutationKey?: Array<unknown>,
) => [useAavEv3RewardsClaimAllRewardsOnBehalfKey, ...(mutationKey ?? [])];
export type AavEv3RewardsClaimAllRewardsToSelfMutationResult = Awaited<
	ReturnType<typeof aavEv3RewardsClaimAllRewardsToSelf>
>;
export const useAavEv3RewardsClaimAllRewardsToSelfKey =
	"AavEv3RewardsClaimAllRewardsToSelf";
export const UseAavEv3RewardsClaimAllRewardsToSelfKeyFn = (
	mutationKey?: Array<unknown>,
) => [useAavEv3RewardsClaimAllRewardsToSelfKey, ...(mutationKey ?? [])];
export type AccountsCreateEthereumAccountMutationResult = Awaited<
	ReturnType<typeof accountsCreateEthereumAccount>
>;
export const useAccountsCreateEthereumAccountKey =
	"AccountsCreateEthereumAccount";
export const UseAccountsCreateEthereumAccountKeyFn = (
	mutationKey?: Array<unknown>,
) => [useAccountsCreateEthereumAccountKey, ...(mutationKey ?? [])];
export type AccountsEstimateGasMutationResult = Awaited<
	ReturnType<typeof accountsEstimateGas>
>;
export const useAccountsEstimateGasKey = "AccountsEstimateGas";
export const UseAccountsEstimateGasKeyFn = (mutationKey?: Array<unknown>) => [
	useAccountsEstimateGasKey,
	...(mutationKey ?? []),
];
export type AccountsTransferEthMutationResult = Awaited<
	ReturnType<typeof accountsTransferEth>
>;
export const useAccountsTransferEthKey = "AccountsTransferEth";
export const UseAccountsTransferEthKeyFn = (mutationKey?: Array<unknown>) => [
	useAccountsTransferEthKey,
	...(mutationKey ?? []),
];
export type AccountsSignEthreumMessageMutationResult = Awaited<
	ReturnType<typeof accountsSignEthreumMessage>
>;
export const useAccountsSignEthreumMessageKey = "AccountsSignEthreumMessage";
export const UseAccountsSignEthreumMessageKeyFn = (
	mutationKey?: Array<unknown>,
) => [useAccountsSignEthreumMessageKey, ...(mutationKey ?? [])];
export type AccountsSignEthereumTransactionMutationResult = Awaited<
	ReturnType<typeof accountsSignEthereumTransaction>
>;
export const useAccountsSignEthereumTransactionKey =
	"AccountsSignEthereumTransaction";
export const UseAccountsSignEthereumTransactionKeyFn = (
	mutationKey?: Array<unknown>,
) => [useAccountsSignEthereumTransactionKey, ...(mutationKey ?? [])];
export type AccountsSignEthereumTypedDataMutationResult = Awaited<
	ReturnType<typeof accountsSignEthereumTypedData>
>;
export const useAccountsSignEthereumTypedDataKey =
	"AccountsSignEthereumTypedData";
export const UseAccountsSignEthereumTypedDataKeyFn = (
	mutationKey?: Array<unknown>,
) => [useAccountsSignEthereumTypedDataKey, ...(mutationKey ?? [])];
export type AccountsDeployContractMutationResult = Awaited<
	ReturnType<typeof accountsDeployContract>
>;
export const useAccountsDeployContractKey = "AccountsDeployContract";
export const UseAccountsDeployContractKeyFn = (
	mutationKey?: Array<unknown>,
) => [useAccountsDeployContractKey, ...(mutationKey ?? [])];
export type AccountsBroadcastEthreeumTransactionMutationResult = Awaited<
	ReturnType<typeof accountsBroadcastEthreeumTransaction>
>;
export const useAccountsBroadcastEthreeumTransactionKey =
	"AccountsBroadcastEthreeumTransaction";
export const UseAccountsBroadcastEthreeumTransactionKeyFn = (
	mutationKey?: Array<unknown>,
) => [useAccountsBroadcastEthreeumTransactionKey, ...(mutationKey ?? [])];
export type AccountsEncodeAbiDataMutationResult = Awaited<
	ReturnType<typeof accountsEncodeAbiData>
>;
export const useAccountsEncodeAbiDataKey = "AccountsEncodeAbiData";
export const UseAccountsEncodeAbiDataKeyFn = (mutationKey?: Array<unknown>) => [
	useAccountsEncodeAbiDataKey,
	...(mutationKey ?? []),
];
export type BitcoinBitcoinCreateAccountMutationResult = Awaited<
	ReturnType<typeof bitcoinBitcoinCreateAccount>
>;
export const useBitcoinBitcoinCreateAccountKey = "BitcoinBitcoinCreateAccount";
export const UseBitcoinBitcoinCreateAccountKeyFn = (
	mutationKey?: Array<unknown>,
) => [useBitcoinBitcoinCreateAccountKey, ...(mutationKey ?? [])];
export type BitcoinBitcoinSignTransactionMutationResult = Awaited<
	ReturnType<typeof bitcoinBitcoinSignTransaction>
>;
export const useBitcoinBitcoinSignTransactionKey =
	"BitcoinBitcoinSignTransaction";
export const UseBitcoinBitcoinSignTransactionKeyFn = (
	mutationKey?: Array<unknown>,
) => [useBitcoinBitcoinSignTransactionKey, ...(mutationKey ?? [])];
export type BitcoinBitcoinCreateSrc20InscriptionMutationResult = Awaited<
	ReturnType<typeof bitcoinBitcoinCreateSrc20Inscription>
>;
export const useBitcoinBitcoinCreateSrc20InscriptionKey =
	"BitcoinBitcoinCreateSrc20Inscription";
export const UseBitcoinBitcoinCreateSrc20InscriptionKeyFn = (
	mutationKey?: Array<unknown>,
) => [useBitcoinBitcoinCreateSrc20InscriptionKey, ...(mutationKey ?? [])];
export type BitcoinBitcoinCreateBrc20TransactionMutationResult = Awaited<
	ReturnType<typeof bitcoinBitcoinCreateBrc20Transaction>
>;
export const useBitcoinBitcoinCreateBrc20TransactionKey =
	"BitcoinBitcoinCreateBrc20Transaction";
export const UseBitcoinBitcoinCreateBrc20TransactionKeyFn = (
	mutationKey?: Array<unknown>,
) => [useBitcoinBitcoinCreateBrc20TransactionKey, ...(mutationKey ?? [])];
export type BitcoinBitcoinGenerateUnsignedPsbtHexMutationResult = Awaited<
	ReturnType<typeof bitcoinBitcoinGenerateUnsignedPsbtHex>
>;
export const useBitcoinBitcoinGenerateUnsignedPsbtHexKey =
	"BitcoinBitcoinGenerateUnsignedPsbtHex";
export const UseBitcoinBitcoinGenerateUnsignedPsbtHexKeyFn = (
	mutationKey?: Array<unknown>,
) => [useBitcoinBitcoinGenerateUnsignedPsbtHexKey, ...(mutationKey ?? [])];
export type BitcoinBitcoinExportAccountMutationResult = Awaited<
	ReturnType<typeof bitcoinBitcoinExportAccount>
>;
export const useBitcoinBitcoinExportAccountKey = "BitcoinBitcoinExportAccount";
export const UseBitcoinBitcoinExportAccountKeyFn = (
	mutationKey?: Array<unknown>,
) => [useBitcoinBitcoinExportAccountKey, ...(mutationKey ?? [])];
export type BitcoinBitcoinDeleteAccountMutationResult = Awaited<
	ReturnType<typeof bitcoinBitcoinDeleteAccount>
>;
export const useBitcoinBitcoinDeleteAccountKey = "BitcoinBitcoinDeleteAccount";
export const UseBitcoinBitcoinDeleteAccountKeyFn = (
	mutationKey?: Array<unknown>,
) => [useBitcoinBitcoinDeleteAccountKey, ...(mutationKey ?? [])];
export type BitcoinCashBitcoinCashCreateAccountMutationResult = Awaited<
	ReturnType<typeof bitcoinCashBitcoinCashCreateAccount>
>;
export const useBitcoinCashBitcoinCashCreateAccountKey =
	"BitcoinCashBitcoinCashCreateAccount";
export const UseBitcoinCashBitcoinCashCreateAccountKeyFn = (
	mutationKey?: Array<unknown>,
) => [useBitcoinCashBitcoinCashCreateAccountKey, ...(mutationKey ?? [])];
export type BitcoinCashBitcoinCashExportAccountMutationResult = Awaited<
	ReturnType<typeof bitcoinCashBitcoinCashExportAccount>
>;
export const useBitcoinCashBitcoinCashExportAccountKey =
	"BitcoinCashBitcoinCashExportAccount";
export const UseBitcoinCashBitcoinCashExportAccountKeyFn = (
	mutationKey?: Array<unknown>,
) => [useBitcoinCashBitcoinCashExportAccountKey, ...(mutationKey ?? [])];
export type BitcoinCashBitcoinCashDeleteAccountMutationResult = Awaited<
	ReturnType<typeof bitcoinCashBitcoinCashDeleteAccount>
>;
export const useBitcoinCashBitcoinCashDeleteAccountKey =
	"BitcoinCashBitcoinCashDeleteAccount";
export const UseBitcoinCashBitcoinCashDeleteAccountKeyFn = (
	mutationKey?: Array<unknown>,
) => [useBitcoinCashBitcoinCashDeleteAccountKey, ...(mutationKey ?? [])];
export type BitcoinCashBitcoinCashSignTransactionMutationResult = Awaited<
	ReturnType<typeof bitcoinCashBitcoinCashSignTransaction>
>;
export const useBitcoinCashBitcoinCashSignTransactionKey =
	"BitcoinCashBitcoinCashSignTransaction";
export const UseBitcoinCashBitcoinCashSignTransactionKeyFn = (
	mutationKey?: Array<unknown>,
) => [useBitcoinCashBitcoinCashSignTransactionKey, ...(mutationKey ?? [])];
export type BitcoinCashBitcoinCashSignTransactionWithMemoMutationResult =
	Awaited<ReturnType<typeof bitcoinCashBitcoinCashSignTransactionWithMemo>>;
export const useBitcoinCashBitcoinCashSignTransactionWithMemoKey =
	"BitcoinCashBitcoinCashSignTransactionWithMemo";
export const UseBitcoinCashBitcoinCashSignTransactionWithMemoKeyFn = (
	mutationKey?: Array<unknown>,
) => [
	useBitcoinCashBitcoinCashSignTransactionWithMemoKey,
	...(mutationKey ?? []),
];
export type BitcoinCashBitcoinCashSignBitcoinTransactionMutationResult =
	Awaited<ReturnType<typeof bitcoinCashBitcoinCashSignBitcoinTransaction>>;
export const useBitcoinCashBitcoinCashSignBitcoinTransactionKey =
	"BitcoinCashBitcoinCashSignBitcoinTransaction";
export const UseBitcoinCashBitcoinCashSignBitcoinTransactionKeyFn = (
	mutationKey?: Array<unknown>,
) => [
	useBitcoinCashBitcoinCashSignBitcoinTransactionKey,
	...(mutationKey ?? []),
];
export type BitcoinCashBitcoinCashGenerateUnsignedPsbtHexMutationResult =
	Awaited<ReturnType<typeof bitcoinCashBitcoinCashGenerateUnsignedPsbtHex>>;
export const useBitcoinCashBitcoinCashGenerateUnsignedPsbtHexKey =
	"BitcoinCashBitcoinCashGenerateUnsignedPsbtHex";
export const UseBitcoinCashBitcoinCashGenerateUnsignedPsbtHexKeyFn = (
	mutationKey?: Array<unknown>,
) => [
	useBitcoinCashBitcoinCashGenerateUnsignedPsbtHexKey,
	...(mutationKey ?? []),
];
export type BitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPathMutationResult =
	Awaited<
		ReturnType<typeof bitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPath>
	>;
export const useBitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPathKey =
	"BitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPath";
export const UseBitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPathKeyFn = (
	mutationKey?: Array<unknown>,
) => [
	useBitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPathKey,
	...(mutationKey ?? []),
];
export type ComponentsCreateComponentMutationResult = Awaited<
	ReturnType<typeof componentsCreateComponent>
>;
export const useComponentsCreateComponentKey = "ComponentsCreateComponent";
export const UseComponentsCreateComponentKeyFn = (
	mutationKey?: Array<unknown>,
) => [useComponentsCreateComponentKey, ...(mutationKey ?? [])];
export type ComponentsUpdateComponentMutationResult = Awaited<
	ReturnType<typeof componentsUpdateComponent>
>;
export const useComponentsUpdateComponentKey = "ComponentsUpdateComponent";
export const UseComponentsUpdateComponentKeyFn = (
	mutationKey?: Array<unknown>,
) => [useComponentsUpdateComponentKey, ...(mutationKey ?? [])];
export type ComponentsUpdateEmbeddingMutationResult = Awaited<
	ReturnType<typeof componentsUpdateEmbedding>
>;
export const useComponentsUpdateEmbeddingKey = "ComponentsUpdateEmbedding";
export const UseComponentsUpdateEmbeddingKeyFn = (
	mutationKey?: Array<unknown>,
) => [useComponentsUpdateEmbeddingKey, ...(mutationKey ?? [])];
export type ComponentsForceEmbeddingMutationResult = Awaited<
	ReturnType<typeof componentsForceEmbedding>
>;
export const useComponentsForceEmbeddingKey = "ComponentsForceEmbedding";
export const UseComponentsForceEmbeddingKeyFn = (
	mutationKey?: Array<unknown>,
) => [useComponentsForceEmbeddingKey, ...(mutationKey ?? [])];
export type CosmosCosmosCreateAccountMutationResult = Awaited<
	ReturnType<typeof cosmosCosmosCreateAccount>
>;
export const useCosmosCosmosCreateAccountKey = "CosmosCosmosCreateAccount";
export const UseCosmosCosmosCreateAccountKeyFn = (
	mutationKey?: Array<unknown>,
) => [useCosmosCosmosCreateAccountKey, ...(mutationKey ?? [])];
export type CosmosCosmosExportAccountMutationResult = Awaited<
	ReturnType<typeof cosmosCosmosExportAccount>
>;
export const useCosmosCosmosExportAccountKey = "CosmosCosmosExportAccount";
export const UseCosmosCosmosExportAccountKeyFn = (
	mutationKey?: Array<unknown>,
) => [useCosmosCosmosExportAccountKey, ...(mutationKey ?? [])];
export type CosmosCosmosSignTransferTransactionMutationResult = Awaited<
	ReturnType<typeof cosmosCosmosSignTransferTransaction>
>;
export const useCosmosCosmosSignTransferTransactionKey =
	"CosmosCosmosSignTransferTransaction";
export const UseCosmosCosmosSignTransferTransactionKeyFn = (
	mutationKey?: Array<unknown>,
) => [useCosmosCosmosSignTransferTransactionKey, ...(mutationKey ?? [])];
export type CosmosCosmosSignMessageMutationResult = Awaited<
	ReturnType<typeof cosmosCosmosSignMessage>
>;
export const useCosmosCosmosSignMessageKey = "CosmosCosmosSignMessage";
export const UseCosmosCosmosSignMessageKeyFn = (
	mutationKey?: Array<unknown>,
) => [useCosmosCosmosSignMessageKey, ...(mutationKey ?? [])];
export type CosmosCosmosSignIbcTransferTransactionMutationResult = Awaited<
	ReturnType<typeof cosmosCosmosSignIbcTransferTransaction>
>;
export const useCosmosCosmosSignIbcTransferTransactionKey =
	"CosmosCosmosSignIbcTransferTransaction";
export const UseCosmosCosmosSignIbcTransferTransactionKeyFn = (
	mutationKey?: Array<unknown>,
) => [useCosmosCosmosSignIbcTransferTransactionKey, ...(mutationKey ?? [])];
export type DataExecuteCustomSupabaseQueryMutationResult = Awaited<
	ReturnType<typeof dataExecuteCustomSupabaseQuery>
>;
export const useDataExecuteCustomSupabaseQueryKey =
	"DataExecuteCustomSupabaseQuery";
export const UseDataExecuteCustomSupabaseQueryKeyFn = (
	mutationKey?: Array<unknown>,
) => [useDataExecuteCustomSupabaseQueryKey, ...(mutationKey ?? [])];
export type DogecoinDogeCoinCreateNewAccountMutationResult = Awaited<
	ReturnType<typeof dogecoinDogeCoinCreateNewAccount>
>;
export const useDogecoinDogeCoinCreateNewAccountKey =
	"DogecoinDogeCoinCreateNewAccount";
export const UseDogecoinDogeCoinCreateNewAccountKeyFn = (
	mutationKey?: Array<unknown>,
) => [useDogecoinDogeCoinCreateNewAccountKey, ...(mutationKey ?? [])];
export type DogecoinDogeCoinSignTransactionMutationResult = Awaited<
	ReturnType<typeof dogecoinDogeCoinSignTransaction>
>;
export const useDogecoinDogeCoinSignTransactionKey =
	"DogecoinDogeCoinSignTransaction";
export const UseDogecoinDogeCoinSignTransactionKeyFn = (
	mutationKey?: Array<unknown>,
) => [useDogecoinDogeCoinSignTransactionKey, ...(mutationKey ?? [])];
export type DogecoinDogeCoinExportAccountDetailsMutationResult = Awaited<
	ReturnType<typeof dogecoinDogeCoinExportAccountDetails>
>;
export const useDogecoinDogeCoinExportAccountDetailsKey =
	"DogecoinDogeCoinExportAccountDetails";
export const UseDogecoinDogeCoinExportAccountDetailsKeyFn = (
	mutationKey?: Array<unknown>,
) => [useDogecoinDogeCoinExportAccountDetailsKey, ...(mutationKey ?? [])];
export type DogecoinDogeCoinDeleteAccountMutationResult = Awaited<
	ReturnType<typeof dogecoinDogeCoinDeleteAccount>
>;
export const useDogecoinDogeCoinDeleteAccountKey =
	"DogecoinDogeCoinDeleteAccount";
export const UseDogecoinDogeCoinDeleteAccountKeyFn = (
	mutationKey?: Array<unknown>,
) => [useDogecoinDogeCoinDeleteAccountKey, ...(mutationKey ?? [])];
export type DogecoinDogeCoinSignTransactionWithMemoMutationResult = Awaited<
	ReturnType<typeof dogecoinDogeCoinSignTransactionWithMemo>
>;
export const useDogecoinDogeCoinSignTransactionWithMemoKey =
	"DogecoinDogeCoinSignTransactionWithMemo";
export const UseDogecoinDogeCoinSignTransactionWithMemoKeyFn = (
	mutationKey?: Array<unknown>,
) => [useDogecoinDogeCoinSignTransactionWithMemoKey, ...(mutationKey ?? [])];
export type EnsResolveMutationResult = Awaited<ReturnType<typeof ensResolve>>;
export const useEnsResolveKey = "EnsResolve";
export const UseEnsResolveKeyFn = (mutationKey?: Array<unknown>) => [
	useEnsResolveKey,
	...(mutationKey ?? []),
];
export type EnsReverseResolveMutationResult = Awaited<
	ReturnType<typeof ensReverseResolve>
>;
export const useEnsReverseResolveKey = "EnsReverseResolve";
export const UseEnsReverseResolveKeyFn = (mutationKey?: Array<unknown>) => [
	useEnsReverseResolveKey,
	...(mutationKey ?? []),
];
export type CreateEosAccountMutationResult = Awaited<
	ReturnType<typeof createEosAccount>
>;
export const useCreateEosAccountKey = "CreateEosAccount";
export const UseCreateEosAccountKeyFn = (mutationKey?: Array<unknown>) => [
	useCreateEosAccountKey,
	...(mutationKey ?? []),
];
export type SignEosTransactionMutationResult = Awaited<
	ReturnType<typeof signEosTransaction>
>;
export const useSignEosTransactionKey = "SignEosTransaction";
export const UseSignEosTransactionKeyFn = (mutationKey?: Array<unknown>) => [
	useSignEosTransactionKey,
	...(mutationKey ?? []),
];
export type ExportEosAccountMutationResult = Awaited<
	ReturnType<typeof exportEosAccount>
>;
export const useExportEosAccountKey = "ExportEosAccount";
export const UseExportEosAccountKeyFn = (mutationKey?: Array<unknown>) => [
	useExportEosAccountKey,
	...(mutationKey ?? []),
];
export type DeleteEosAccountMutationResult = Awaited<
	ReturnType<typeof deleteEosAccount>
>;
export const useDeleteEosAccountKey = "DeleteEosAccount";
export const UseDeleteEosAccountKeyFn = (mutationKey?: Array<unknown>) => [
	useDeleteEosAccountKey,
	...(mutationKey ?? []),
];
export type Erc1155Erc1155BalanceOfMutationResult = Awaited<
	ReturnType<typeof erc1155Erc1155BalanceOf>
>;
export const useErc1155Erc1155BalanceOfKey = "Erc1155Erc1155BalanceOf";
export const UseErc1155Erc1155BalanceOfKeyFn = (
	mutationKey?: Array<unknown>,
) => [useErc1155Erc1155BalanceOfKey, ...(mutationKey ?? [])];
export type Erc1155Erc1155BalanceOfBatchMutationResult = Awaited<
	ReturnType<typeof erc1155Erc1155BalanceOfBatch>
>;
export const useErc1155Erc1155BalanceOfBatchKey =
	"Erc1155Erc1155BalanceOfBatch";
export const UseErc1155Erc1155BalanceOfBatchKeyFn = (
	mutationKey?: Array<unknown>,
) => [useErc1155Erc1155BalanceOfBatchKey, ...(mutationKey ?? [])];
export type Erc1155Erc1155SetApprovalForAllMutationResult = Awaited<
	ReturnType<typeof erc1155Erc1155SetApprovalForAll>
>;
export const useErc1155Erc1155SetApprovalForAllKey =
	"Erc1155Erc1155SetApprovalForAll";
export const UseErc1155Erc1155SetApprovalForAllKeyFn = (
	mutationKey?: Array<unknown>,
) => [useErc1155Erc1155SetApprovalForAllKey, ...(mutationKey ?? [])];
export type Erc1155Erc1155IsApprovedForAllMutationResult = Awaited<
	ReturnType<typeof erc1155Erc1155IsApprovedForAll>
>;
export const useErc1155Erc1155IsApprovedForAllKey =
	"Erc1155Erc1155IsApprovedForAll";
export const UseErc1155Erc1155IsApprovedForAllKeyFn = (
	mutationKey?: Array<unknown>,
) => [useErc1155Erc1155IsApprovedForAllKey, ...(mutationKey ?? [])];
export type Erc1155Erc1155SafeTransferFromMutationResult = Awaited<
	ReturnType<typeof erc1155Erc1155SafeTransferFrom>
>;
export const useErc1155Erc1155SafeTransferFromKey =
	"Erc1155Erc1155SafeTransferFrom";
export const UseErc1155Erc1155SafeTransferFromKeyFn = (
	mutationKey?: Array<unknown>,
) => [useErc1155Erc1155SafeTransferFromKey, ...(mutationKey ?? [])];
export type Erc1155Erc1155SafeBatchTransferFromMutationResult = Awaited<
	ReturnType<typeof erc1155Erc1155SafeBatchTransferFrom>
>;
export const useErc1155Erc1155SafeBatchTransferFromKey =
	"Erc1155Erc1155SafeBatchTransferFrom";
export const UseErc1155Erc1155SafeBatchTransferFromKeyFn = (
	mutationKey?: Array<unknown>,
) => [useErc1155Erc1155SafeBatchTransferFromKey, ...(mutationKey ?? [])];
export type Erc20ApproveErc20TokenSpendingMutationResult = Awaited<
	ReturnType<typeof erc20ApproveErc20TokenSpending>
>;
export const useErc20ApproveErc20TokenSpendingKey =
	"Erc20ApproveErc20TokenSpending";
export const UseErc20ApproveErc20TokenSpendingKeyFn = (
	mutationKey?: Array<unknown>,
) => [useErc20ApproveErc20TokenSpendingKey, ...(mutationKey ?? [])];
export type Erc20TransferErc20TokenMutationResult = Awaited<
	ReturnType<typeof erc20TransferErc20Token>
>;
export const useErc20TransferErc20TokenKey = "Erc20TransferErc20Token";
export const UseErc20TransferErc20TokenKeyFn = (
	mutationKey?: Array<unknown>,
) => [useErc20TransferErc20TokenKey, ...(mutationKey ?? [])];
export type Erc20TransferFromErc20TokenMutationResult = Awaited<
	ReturnType<typeof erc20TransferFromErc20Token>
>;
export const useErc20TransferFromErc20TokenKey = "Erc20TransferFromErc20Token";
export const UseErc20TransferFromErc20TokenKeyFn = (
	mutationKey?: Array<unknown>,
) => [useErc20TransferFromErc20TokenKey, ...(mutationKey ?? [])];
export type Erc4626DepositToErc4626MutationResult = Awaited<
	ReturnType<typeof erc4626DepositToErc4626>
>;
export const useErc4626DepositToErc4626Key = "Erc4626DepositToErc4626";
export const UseErc4626DepositToErc4626KeyFn = (
	mutationKey?: Array<unknown>,
) => [useErc4626DepositToErc4626Key, ...(mutationKey ?? [])];
export type Erc4626WithdrawFromErc4626MutationResult = Awaited<
	ReturnType<typeof erc4626WithdrawFromErc4626>
>;
export const useErc4626WithdrawFromErc4626Key = "Erc4626WithdrawFromErc4626";
export const UseErc4626WithdrawFromErc4626KeyFn = (
	mutationKey?: Array<unknown>,
) => [useErc4626WithdrawFromErc4626Key, ...(mutationKey ?? [])];
export type Erc4626MintErc4626SharesMutationResult = Awaited<
	ReturnType<typeof erc4626MintErc4626Shares>
>;
export const useErc4626MintErc4626SharesKey = "Erc4626MintErc4626Shares";
export const UseErc4626MintErc4626SharesKeyFn = (
	mutationKey?: Array<unknown>,
) => [useErc4626MintErc4626SharesKey, ...(mutationKey ?? [])];
export type Erc4626RedeemErc4626SharesMutationResult = Awaited<
	ReturnType<typeof erc4626RedeemErc4626Shares>
>;
export const useErc4626RedeemErc4626SharesKey = "Erc4626RedeemErc4626Shares";
export const UseErc4626RedeemErc4626SharesKeyFn = (
	mutationKey?: Array<unknown>,
) => [useErc4626RedeemErc4626SharesKey, ...(mutationKey ?? [])];
export type Erc4626ApproveErc4626MutationResult = Awaited<
	ReturnType<typeof erc4626ApproveErc4626>
>;
export const useErc4626ApproveErc4626Key = "Erc4626ApproveErc4626";
export const UseErc4626ApproveErc4626KeyFn = (mutationKey?: Array<unknown>) => [
	useErc4626ApproveErc4626Key,
	...(mutationKey ?? []),
];
export type Erc4626TransferErc4626MutationResult = Awaited<
	ReturnType<typeof erc4626TransferErc4626>
>;
export const useErc4626TransferErc4626Key = "Erc4626TransferErc4626";
export const UseErc4626TransferErc4626KeyFn = (
	mutationKey?: Array<unknown>,
) => [useErc4626TransferErc4626Key, ...(mutationKey ?? [])];
export type Erc4626TransferFromErc4626MutationResult = Awaited<
	ReturnType<typeof erc4626TransferFromErc4626>
>;
export const useErc4626TransferFromErc4626Key = "Erc4626TransferFromErc4626";
export const UseErc4626TransferFromErc4626KeyFn = (
	mutationKey?: Array<unknown>,
) => [useErc4626TransferFromErc4626Key, ...(mutationKey ?? [])];
export type Erc721ApproveErc721MutationResult = Awaited<
	ReturnType<typeof erc721ApproveErc721>
>;
export const useErc721ApproveErc721Key = "Erc721ApproveErc721";
export const UseErc721ApproveErc721KeyFn = (mutationKey?: Array<unknown>) => [
	useErc721ApproveErc721Key,
	...(mutationKey ?? []),
];
export type Erc721SetApprovalForAllErc721MutationResult = Awaited<
	ReturnType<typeof erc721SetApprovalForAllErc721>
>;
export const useErc721SetApprovalForAllErc721Key =
	"Erc721SetApprovalForAllErc721";
export const UseErc721SetApprovalForAllErc721KeyFn = (
	mutationKey?: Array<unknown>,
) => [useErc721SetApprovalForAllErc721Key, ...(mutationKey ?? [])];
export type Erc721TransferFromErc721MutationResult = Awaited<
	ReturnType<typeof erc721TransferFromErc721>
>;
export const useErc721TransferFromErc721Key = "Erc721TransferFromErc721";
export const UseErc721TransferFromErc721KeyFn = (
	mutationKey?: Array<unknown>,
) => [useErc721TransferFromErc721Key, ...(mutationKey ?? [])];
export type Erc721SafeTransferFromErc721MutationResult = Awaited<
	ReturnType<typeof erc721SafeTransferFromErc721>
>;
export const useErc721SafeTransferFromErc721Key =
	"Erc721SafeTransferFromErc721";
export const UseErc721SafeTransferFromErc721KeyFn = (
	mutationKey?: Array<unknown>,
) => [useErc721SafeTransferFromErc721Key, ...(mutationKey ?? [])];
export type Erc721SafeTransferFromWithDataErc721MutationResult = Awaited<
	ReturnType<typeof erc721SafeTransferFromWithDataErc721>
>;
export const useErc721SafeTransferFromWithDataErc721Key =
	"Erc721SafeTransferFromWithDataErc721";
export const UseErc721SafeTransferFromWithDataErc721KeyFn = (
	mutationKey?: Array<unknown>,
) => [useErc721SafeTransferFromWithDataErc721Key, ...(mutationKey ?? [])];
export type FinancialDatasetsSearchFinancialsMutationResult = Awaited<
	ReturnType<typeof financialDatasetsSearchFinancials>
>;
export const useFinancialDatasetsSearchFinancialsKey =
	"FinancialDatasetsSearchFinancials";
export const UseFinancialDatasetsSearchFinancialsKeyFn = (
	mutationKey?: Array<unknown>,
) => [useFinancialDatasetsSearchFinancialsKey, ...(mutationKey ?? [])];
export type FinancialDatasetsSearchFinancialsByLineItemsMutationResult =
	Awaited<ReturnType<typeof financialDatasetsSearchFinancialsByLineItems>>;
export const useFinancialDatasetsSearchFinancialsByLineItemsKey =
	"FinancialDatasetsSearchFinancialsByLineItems";
export const UseFinancialDatasetsSearchFinancialsByLineItemsKeyFn = (
	mutationKey?: Array<unknown>,
) => [
	useFinancialDatasetsSearchFinancialsByLineItemsKey,
	...(mutationKey ?? []),
];
export type JupiterGetQuoteMutationResult = Awaited<
	ReturnType<typeof jupiterGetQuote>
>;
export const useJupiterGetQuoteKey = "JupiterGetQuote";
export const UseJupiterGetQuoteKeyFn = (mutationKey?: Array<unknown>) => [
	useJupiterGetQuoteKey,
	...(mutationKey ?? []),
];
export type JupiterSwapMutationResult = Awaited<ReturnType<typeof jupiterSwap>>;
export const useJupiterSwapKey = "JupiterSwap";
export const UseJupiterSwapKeyFn = (mutationKey?: Array<unknown>) => [
	useJupiterSwapKey,
	...(mutationKey ?? []),
];
export type JupiterGetSwapInstructionsMutationResult = Awaited<
	ReturnType<typeof jupiterGetSwapInstructions>
>;
export const useJupiterGetSwapInstructionsKey = "JupiterGetSwapInstructions";
export const UseJupiterGetSwapInstructionsKeyFn = (
	mutationKey?: Array<unknown>,
) => [useJupiterGetSwapInstructionsKey, ...(mutationKey ?? [])];
export type LendingPoolBorrowMutationResult = Awaited<
	ReturnType<typeof lendingPoolBorrow>
>;
export const useLendingPoolBorrowKey = "LendingPoolBorrow";
export const UseLendingPoolBorrowKeyFn = (mutationKey?: Array<unknown>) => [
	useLendingPoolBorrowKey,
	...(mutationKey ?? []),
];
export type LendingPoolDepositMutationResult = Awaited<
	ReturnType<typeof lendingPoolDeposit>
>;
export const useLendingPoolDepositKey = "LendingPoolDeposit";
export const UseLendingPoolDepositKeyFn = (mutationKey?: Array<unknown>) => [
	useLendingPoolDepositKey,
	...(mutationKey ?? []),
];
export type LendingPoolFlashLoanMutationResult = Awaited<
	ReturnType<typeof lendingPoolFlashLoan>
>;
export const useLendingPoolFlashLoanKey = "LendingPoolFlashLoan";
export const UseLendingPoolFlashLoanKeyFn = (mutationKey?: Array<unknown>) => [
	useLendingPoolFlashLoanKey,
	...(mutationKey ?? []),
];
export type LendingPoolRepayMutationResult = Awaited<
	ReturnType<typeof lendingPoolRepay>
>;
export const useLendingPoolRepayKey = "LendingPoolRepay";
export const UseLendingPoolRepayKeyFn = (mutationKey?: Array<unknown>) => [
	useLendingPoolRepayKey,
	...(mutationKey ?? []),
];
export type LendingPoolSwapBorrowRateModeMutationResult = Awaited<
	ReturnType<typeof lendingPoolSwapBorrowRateMode>
>;
export const useLendingPoolSwapBorrowRateModeKey =
	"LendingPoolSwapBorrowRateMode";
export const UseLendingPoolSwapBorrowRateModeKeyFn = (
	mutationKey?: Array<unknown>,
) => [useLendingPoolSwapBorrowRateModeKey, ...(mutationKey ?? [])];
export type LendingPoolSetUserUseReserveAsCollateralMutationResult = Awaited<
	ReturnType<typeof lendingPoolSetUserUseReserveAsCollateral>
>;
export const useLendingPoolSetUserUseReserveAsCollateralKey =
	"LendingPoolSetUserUseReserveAsCollateral";
export const UseLendingPoolSetUserUseReserveAsCollateralKeyFn = (
	mutationKey?: Array<unknown>,
) => [useLendingPoolSetUserUseReserveAsCollateralKey, ...(mutationKey ?? [])];
export type LendingPoolLiquidationCallMutationResult = Awaited<
	ReturnType<typeof lendingPoolLiquidationCall>
>;
export const useLendingPoolLiquidationCallKey = "LendingPoolLiquidationCall";
export const UseLendingPoolLiquidationCallKeyFn = (
	mutationKey?: Array<unknown>,
) => [useLendingPoolLiquidationCallKey, ...(mutationKey ?? [])];
export type LeveragerDeleverageErc20MutationResult = Awaited<
	ReturnType<typeof leveragerDeleverageErc20>
>;
export const useLeveragerDeleverageErc20Key = "LeveragerDeleverageErc20";
export const UseLeveragerDeleverageErc20KeyFn = (
	mutationKey?: Array<unknown>,
) => [useLeveragerDeleverageErc20Key, ...(mutationKey ?? [])];
export type LeveragerDeleverageNativeMutationResult = Awaited<
	ReturnType<typeof leveragerDeleverageNative>
>;
export const useLeveragerDeleverageNativeKey = "LeveragerDeleverageNative";
export const UseLeveragerDeleverageNativeKeyFn = (
	mutationKey?: Array<unknown>,
) => [useLeveragerDeleverageNativeKey, ...(mutationKey ?? [])];
export type LeveragerExecuteOperationMutationResult = Awaited<
	ReturnType<typeof leveragerExecuteOperation>
>;
export const useLeveragerExecuteOperationKey = "LeveragerExecuteOperation";
export const UseLeveragerExecuteOperationKeyFn = (
	mutationKey?: Array<unknown>,
) => [useLeveragerExecuteOperationKey, ...(mutationKey ?? [])];
export type LeveragerGrantRoleMutationResult = Awaited<
	ReturnType<typeof leveragerGrantRole>
>;
export const useLeveragerGrantRoleKey = "LeveragerGrantRole";
export const UseLeveragerGrantRoleKeyFn = (mutationKey?: Array<unknown>) => [
	useLeveragerGrantRoleKey,
	...(mutationKey ?? []),
];
export type LeveragerLeverageErc20MutationResult = Awaited<
	ReturnType<typeof leveragerLeverageErc20>
>;
export const useLeveragerLeverageErc20Key = "LeveragerLeverageErc20";
export const UseLeveragerLeverageErc20KeyFn = (
	mutationKey?: Array<unknown>,
) => [useLeveragerLeverageErc20Key, ...(mutationKey ?? [])];
export type LeveragerLeverageNativeMutationResult = Awaited<
	ReturnType<typeof leveragerLeverageNative>
>;
export const useLeveragerLeverageNativeKey = "LeveragerLeverageNative";
export const UseLeveragerLeverageNativeKeyFn = (
	mutationKey?: Array<unknown>,
) => [useLeveragerLeverageNativeKey, ...(mutationKey ?? [])];
export type LeveragerPauseMutationResult = Awaited<
	ReturnType<typeof leveragerPause>
>;
export const useLeveragerPauseKey = "LeveragerPause";
export const UseLeveragerPauseKeyFn = (mutationKey?: Array<unknown>) => [
	useLeveragerPauseKey,
	...(mutationKey ?? []),
];
export type LeveragerRenounceRoleMutationResult = Awaited<
	ReturnType<typeof leveragerRenounceRole>
>;
export const useLeveragerRenounceRoleKey = "LeveragerRenounceRole";
export const UseLeveragerRenounceRoleKeyFn = (mutationKey?: Array<unknown>) => [
	useLeveragerRenounceRoleKey,
	...(mutationKey ?? []),
];
export type LeveragerRevokeRoleMutationResult = Awaited<
	ReturnType<typeof leveragerRevokeRole>
>;
export const useLeveragerRevokeRoleKey = "LeveragerRevokeRole";
export const UseLeveragerRevokeRoleKeyFn = (mutationKey?: Array<unknown>) => [
	useLeveragerRevokeRoleKey,
	...(mutationKey ?? []),
];
export type LeveragerUnpauseMutationResult = Awaited<
	ReturnType<typeof leveragerUnpause>
>;
export const useLeveragerUnpauseKey = "LeveragerUnpause";
export const UseLeveragerUnpauseKeyFn = (mutationKey?: Array<unknown>) => [
	useLeveragerUnpauseKey,
	...(mutationKey ?? []),
];
export type LifiPostQuoteMutationResult = Awaited<
	ReturnType<typeof lifiPostQuote>
>;
export const useLifiPostQuoteKey = "LifiPostQuote";
export const UseLifiPostQuoteKeyFn = (mutationKey?: Array<unknown>) => [
	useLifiPostQuoteKey,
	...(mutationKey ?? []),
];
export type LitecoinCreateLitecoinAccountMutationResult = Awaited<
	ReturnType<typeof litecoinCreateLitecoinAccount>
>;
export const useLitecoinCreateLitecoinAccountKey =
	"LitecoinCreateLitecoinAccount";
export const UseLitecoinCreateLitecoinAccountKeyFn = (
	mutationKey?: Array<unknown>,
) => [useLitecoinCreateLitecoinAccountKey, ...(mutationKey ?? [])];
export type LitecoinSignLitecoinTransactionMutationResult = Awaited<
	ReturnType<typeof litecoinSignLitecoinTransaction>
>;
export const useLitecoinSignLitecoinTransactionKey =
	"LitecoinSignLitecoinTransaction";
export const UseLitecoinSignLitecoinTransactionKeyFn = (
	mutationKey?: Array<unknown>,
) => [useLitecoinSignLitecoinTransactionKey, ...(mutationKey ?? [])];
export type LitecoinExportLitecoinAccountMutationResult = Awaited<
	ReturnType<typeof litecoinExportLitecoinAccount>
>;
export const useLitecoinExportLitecoinAccountKey =
	"LitecoinExportLitecoinAccount";
export const UseLitecoinExportLitecoinAccountKeyFn = (
	mutationKey?: Array<unknown>,
) => [useLitecoinExportLitecoinAccountKey, ...(mutationKey ?? [])];
export type LitecoinDeleteLitecoinAccountMutationResult = Awaited<
	ReturnType<typeof litecoinDeleteLitecoinAccount>
>;
export const useLitecoinDeleteLitecoinAccountKey =
	"LitecoinDeleteLitecoinAccount";
export const UseLitecoinDeleteLitecoinAccountKeyFn = (
	mutationKey?: Array<unknown>,
) => [useLitecoinDeleteLitecoinAccountKey, ...(mutationKey ?? [])];
export type LitecoinSignLitecoinTransactionWithMemoMutationResult = Awaited<
	ReturnType<typeof litecoinSignLitecoinTransactionWithMemo>
>;
export const useLitecoinSignLitecoinTransactionWithMemoKey =
	"LitecoinSignLitecoinTransactionWithMemo";
export const UseLitecoinSignLitecoinTransactionWithMemoKeyFn = (
	mutationKey?: Array<unknown>,
) => [useLitecoinSignLitecoinTransactionWithMemoKey, ...(mutationKey ?? [])];
export type CreateLockMutationResult = Awaited<ReturnType<typeof createLock>>;
export const useCreateLockKey = "CreateLock";
export const UseCreateLockKeyFn = (mutationKey?: Array<unknown>) => [
	useCreateLockKey,
	...(mutationKey ?? []),
];
export type IncreaseLockAmountMutationResult = Awaited<
	ReturnType<typeof increaseLockAmount>
>;
export const useIncreaseLockAmountKey = "IncreaseLockAmount";
export const UseIncreaseLockAmountKeyFn = (mutationKey?: Array<unknown>) => [
	useIncreaseLockAmountKey,
	...(mutationKey ?? []),
];
export type IncreaseUnlockTimeMutationResult = Awaited<
	ReturnType<typeof increaseUnlockTime>
>;
export const useIncreaseUnlockTimeKey = "IncreaseUnlockTime";
export const UseIncreaseUnlockTimeKeyFn = (mutationKey?: Array<unknown>) => [
	useIncreaseUnlockTimeKey,
	...(mutationKey ?? []),
];
export type DelegateMutationResult = Awaited<ReturnType<typeof delegate>>;
export const useDelegateKey = "Delegate";
export const UseDelegateKeyFn = (mutationKey?: Array<unknown>) => [
	useDelegateKey,
	...(mutationKey ?? []),
];
export type MergeMutationResult = Awaited<ReturnType<typeof merge>>;
export const useMergeKey = "Merge";
export const UseMergeKeyFn = (mutationKey?: Array<unknown>) => [
	useMergeKey,
	...(mutationKey ?? []),
];
export type SplitMutationResult = Awaited<ReturnType<typeof split>>;
export const useSplitKey = "Split";
export const UseSplitKeyFn = (mutationKey?: Array<unknown>) => [
	useSplitKey,
	...(mutationKey ?? []),
];
export type ClaimMutationResult = Awaited<ReturnType<typeof claim>>;
export const useClaimKey = "Claim";
export const UseClaimKeyFn = (mutationKey?: Array<unknown>) => [
	useClaimKey,
	...(mutationKey ?? []),
];
export type UnlockPermanentMutationResult = Awaited<
	ReturnType<typeof unlockPermanent>
>;
export const useUnlockPermanentKey = "UnlockPermanent";
export const UseUnlockPermanentKeyFn = (mutationKey?: Array<unknown>) => [
	useUnlockPermanentKey,
	...(mutationKey ?? []),
];
export type ApproveMutationResult = Awaited<ReturnType<typeof approve>>;
export const useApproveKey = "Approve";
export const UseApproveKeyFn = (mutationKey?: Array<unknown>) => [
	useApproveKey,
	...(mutationKey ?? []),
];
export type SetApprovalForAllMutationResult = Awaited<
	ReturnType<typeof setApprovalForAll>
>;
export const useSetApprovalForAllKey = "SetApprovalForAll";
export const UseSetApprovalForAllKeyFn = (mutationKey?: Array<unknown>) => [
	useSetApprovalForAllKey,
	...(mutationKey ?? []),
];
export type TransferFromMutationResult = Awaited<
	ReturnType<typeof transferFrom>
>;
export const useTransferFromKey = "TransferFrom";
export const UseTransferFromKeyFn = (mutationKey?: Array<unknown>) => [
	useTransferFromKey,
	...(mutationKey ?? []),
];
export type SafeTransferFromMutationResult = Awaited<
	ReturnType<typeof safeTransferFrom>
>;
export const useSafeTransferFromKey = "SafeTransferFrom";
export const UseSafeTransferFromKeyFn = (mutationKey?: Array<unknown>) => [
	useSafeTransferFromKey,
	...(mutationKey ?? []),
];
export type BurnMutationResult = Awaited<ReturnType<typeof burn>>;
export const useBurnKey = "Burn";
export const UseBurnKeyFn = (mutationKey?: Array<unknown>) => [
	useBurnKey,
	...(mutationKey ?? []),
];
export type CreateDelegatedLockForMutationResult = Awaited<
	ReturnType<typeof createDelegatedLockFor>
>;
export const useCreateDelegatedLockForKey = "CreateDelegatedLockFor";
export const UseCreateDelegatedLockForKeyFn = (
	mutationKey?: Array<unknown>,
) => [useCreateDelegatedLockForKey, ...(mutationKey ?? [])];
export type CreateLockForMutationResult = Awaited<
	ReturnType<typeof createLockFor>
>;
export const useCreateLockForKey = "CreateLockFor";
export const UseCreateLockForKeyFn = (mutationKey?: Array<unknown>) => [
	useCreateLockForKey,
	...(mutationKey ?? []),
];
export type CheckpointMutationResult = Awaited<ReturnType<typeof checkpoint>>;
export const useCheckpointKey = "Checkpoint";
export const UseCheckpointKeyFn = (mutationKey?: Array<unknown>) => [
	useCheckpointKey,
	...(mutationKey ?? []),
];
export type CheckpointDelegateeMutationResult = Awaited<
	ReturnType<typeof checkpointDelegatee>
>;
export const useCheckpointDelegateeKey = "CheckpointDelegatee";
export const UseCheckpointDelegateeKeyFn = (mutationKey?: Array<unknown>) => [
	useCheckpointDelegateeKey,
	...(mutationKey ?? []),
];
export type SetClaimApprovalMutationResult = Awaited<
	ReturnType<typeof setClaimApproval>
>;
export const useSetClaimApprovalKey = "SetClaimApproval";
export const UseSetClaimApprovalKeyFn = (mutationKey?: Array<unknown>) => [
	useSetClaimApprovalKey,
	...(mutationKey ?? []),
];
export type SetClaimApprovalForAllMutationResult = Awaited<
	ReturnType<typeof setClaimApprovalForAll>
>;
export const useSetClaimApprovalForAllKey = "SetClaimApprovalForAll";
export const UseSetClaimApprovalForAllKeyFn = (
	mutationKey?: Array<unknown>,
) => [useSetClaimApprovalForAllKey, ...(mutationKey ?? [])];
export type DelegateBySigMutationResult = Awaited<
	ReturnType<typeof delegateBySig>
>;
export const useDelegateBySigKey = "DelegateBySig";
export const UseDelegateBySigKeyFn = (mutationKey?: Array<unknown>) => [
	useDelegateBySigKey,
	...(mutationKey ?? []),
];
export type GlobalCheckpointMutationResult = Awaited<
	ReturnType<typeof globalCheckpoint>
>;
export const useGlobalCheckpointKey = "GlobalCheckpoint";
export const UseGlobalCheckpointKeyFn = (mutationKey?: Array<unknown>) => [
	useGlobalCheckpointKey,
	...(mutationKey ?? []),
];
export type AddLiquidityMutationResult = Awaited<
	ReturnType<typeof addLiquidity>
>;
export const useAddLiquidityKey = "AddLiquidity";
export const UseAddLiquidityKeyFn = (mutationKey?: Array<unknown>) => [
	useAddLiquidityKey,
	...(mutationKey ?? []),
];
export type AddLiquidityEthMutationResult = Awaited<
	ReturnType<typeof addLiquidityEth>
>;
export const useAddLiquidityEthKey = "AddLiquidityEth";
export const UseAddLiquidityEthKeyFn = (mutationKey?: Array<unknown>) => [
	useAddLiquidityEthKey,
	...(mutationKey ?? []),
];
export type SwapExactTokensForTokensMutationResult = Awaited<
	ReturnType<typeof swapExactTokensForTokens>
>;
export const useSwapExactTokensForTokensKey = "SwapExactTokensForTokens";
export const UseSwapExactTokensForTokensKeyFn = (
	mutationKey?: Array<unknown>,
) => [useSwapExactTokensForTokensKey, ...(mutationKey ?? [])];
export type SwapExactEthForTokensMutationResult = Awaited<
	ReturnType<typeof swapExactEthForTokens>
>;
export const useSwapExactEthForTokensKey = "SwapExactEthForTokens";
export const UseSwapExactEthForTokensKeyFn = (mutationKey?: Array<unknown>) => [
	useSwapExactEthForTokensKey,
	...(mutationKey ?? []),
];
export type SwapExactTokensForEthMutationResult = Awaited<
	ReturnType<typeof swapExactTokensForEth>
>;
export const useSwapExactTokensForEthKey = "SwapExactTokensForEth";
export const UseSwapExactTokensForEthKeyFn = (mutationKey?: Array<unknown>) => [
	useSwapExactTokensForEthKey,
	...(mutationKey ?? []),
];
export type VoteMutationResult = Awaited<ReturnType<typeof vote>>;
export const useVoteKey = "Vote";
export const UseVoteKeyFn = (mutationKey?: Array<unknown>) => [
	useVoteKey,
	...(mutationKey ?? []),
];
export type ResetMutationResult = Awaited<ReturnType<typeof reset>>;
export const useResetKey = "Reset";
export const UseResetKeyFn = (mutationKey?: Array<unknown>) => [
	useResetKey,
	...(mutationKey ?? []),
];
export type PokeMutationResult = Awaited<ReturnType<typeof poke>>;
export const usePokeKey = "Poke";
export const UsePokeKeyFn = (mutationKey?: Array<unknown>) => [
	usePokeKey,
	...(mutationKey ?? []),
];
export type CreateGaugeMutationResult = Awaited<ReturnType<typeof createGauge>>;
export const useCreateGaugeKey = "CreateGauge";
export const UseCreateGaugeKeyFn = (mutationKey?: Array<unknown>) => [
	useCreateGaugeKey,
	...(mutationKey ?? []),
];
export type KillGaugeMutationResult = Awaited<ReturnType<typeof killGauge>>;
export const useKillGaugeKey = "KillGauge";
export const UseKillGaugeKeyFn = (mutationKey?: Array<unknown>) => [
	useKillGaugeKey,
	...(mutationKey ?? []),
];
export type ReviveGaugeMutationResult = Awaited<ReturnType<typeof reviveGauge>>;
export const useReviveGaugeKey = "ReviveGauge";
export const UseReviveGaugeKeyFn = (mutationKey?: Array<unknown>) => [
	useReviveGaugeKey,
	...(mutationKey ?? []),
];
export type NotifyRewardAmountMutationResult = Awaited<
	ReturnType<typeof notifyRewardAmount>
>;
export const useNotifyRewardAmountKey = "NotifyRewardAmount";
export const UseNotifyRewardAmountKeyFn = (mutationKey?: Array<unknown>) => [
	useNotifyRewardAmountKey,
	...(mutationKey ?? []),
];
export type DistributeMutationResult = Awaited<ReturnType<typeof distribute>>;
export const useDistributeKey = "Distribute";
export const UseDistributeKeyFn = (mutationKey?: Array<unknown>) => [
	useDistributeKey,
	...(mutationKey ?? []),
];
export type ClaimBribesMutationResult = Awaited<ReturnType<typeof claimBribes>>;
export const useClaimBribesKey = "ClaimBribes";
export const UseClaimBribesKeyFn = (mutationKey?: Array<unknown>) => [
	useClaimBribesKey,
	...(mutationKey ?? []),
];
export type ClaimFeesMutationResult = Awaited<ReturnType<typeof claimFees>>;
export const useClaimFeesKey = "ClaimFees";
export const UseClaimFeesKeyFn = (mutationKey?: Array<unknown>) => [
	useClaimFeesKey,
	...(mutationKey ?? []),
];
export type ClaimRewardsMutationResult = Awaited<
	ReturnType<typeof claimRewards>
>;
export const useClaimRewardsKey = "ClaimRewards";
export const UseClaimRewardsKeyFn = (mutationKey?: Array<unknown>) => [
	useClaimRewardsKey,
	...(mutationKey ?? []),
];
export type WhitelistMutationResult = Awaited<ReturnType<typeof whitelist>>;
export const useWhitelistKey = "Whitelist";
export const UseWhitelistKeyFn = (mutationKey?: Array<unknown>) => [
	useWhitelistKey,
	...(mutationKey ?? []),
];
export type VoteWithOptimalDistributionMutationResult = Awaited<
	ReturnType<typeof voteWithOptimalDistribution>
>;
export const useVoteWithOptimalDistributionKey = "VoteWithOptimalDistribution";
export const UseVoteWithOptimalDistributionKeyFn = (
	mutationKey?: Array<unknown>,
) => [useVoteWithOptimalDistributionKey, ...(mutationKey ?? [])];
export type CreateJobMutationResult = Awaited<ReturnType<typeof createJob>>;
export const useCreateJobKey = "CreateJob";
export const UseCreateJobKeyFn = (mutationKey?: Array<unknown>) => [
	useCreateJobKey,
	...(mutationKey ?? []),
];
export type ExecuteJobMutationResult = Awaited<ReturnType<typeof executeJob>>;
export const useExecuteJobKey = "ExecuteJob";
export const UseExecuteJobKeyFn = (mutationKey?: Array<unknown>) => [
	useExecuteJobKey,
	...(mutationKey ?? []),
];
export type ScheduleJobMutationResult = Awaited<ReturnType<typeof scheduleJob>>;
export const useScheduleJobKey = "ScheduleJob";
export const UseScheduleJobKeyFn = (mutationKey?: Array<unknown>) => [
	useScheduleJobKey,
	...(mutationKey ?? []),
];
export type UnscheduleJobMutationResult = Awaited<
	ReturnType<typeof unscheduleJob>
>;
export const useUnscheduleJobKey = "UnscheduleJob";
export const UseUnscheduleJobKeyFn = (mutationKey?: Array<unknown>) => [
	useUnscheduleJobKey,
	...(mutationKey ?? []),
];
export type CreateFlowMutationResult = Awaited<ReturnType<typeof createFlow>>;
export const useCreateFlowKey = "CreateFlow";
export const UseCreateFlowKeyFn = (mutationKey?: Array<unknown>) => [
	useCreateFlowKey,
	...(mutationKey ?? []),
];
export type CreateUserDefinedFunctionMutationResult = Awaited<
	ReturnType<typeof createUserDefinedFunction>
>;
export const useCreateUserDefinedFunctionKey = "CreateUserDefinedFunction";
export const UseCreateUserDefinedFunctionKeyFn = (
	mutationKey?: Array<unknown>,
) => [useCreateUserDefinedFunctionKey, ...(mutationKey ?? [])];
export type MarkNotificationAsReadMutationResult = Awaited<
	ReturnType<typeof markNotificationAsRead>
>;
export const useMarkNotificationAsReadKey = "MarkNotificationAsRead";
export const UseMarkNotificationAsReadKeyFn = (
	mutationKey?: Array<unknown>,
) => [useMarkNotificationAsReadKey, ...(mutationKey ?? [])];
export type OdosSwapTokensMutationResult = Awaited<
	ReturnType<typeof odosSwapTokens>
>;
export const useOdosSwapTokensKey = "OdosSwapTokens";
export const UseOdosSwapTokensKeyFn = (mutationKey?: Array<unknown>) => [
	useOdosSwapTokensKey,
	...(mutationKey ?? []),
];
export type OdosGetQuoteMutationResult = Awaited<
	ReturnType<typeof odosGetQuote>
>;
export const useOdosGetQuoteKey = "OdosGetQuote";
export const UseOdosGetQuoteKeyFn = (mutationKey?: Array<unknown>) => [
	useOdosGetQuoteKey,
	...(mutationKey ?? []),
];
export type GetZapQuoteMutationResult = Awaited<ReturnType<typeof getZapQuote>>;
export const useGetZapQuoteKey = "GetZapQuote";
export const UseGetZapQuoteKeyFn = (mutationKey?: Array<unknown>) => [
	useGetZapQuoteKey,
	...(mutationKey ?? []),
];
export type ZapMutationResult = Awaited<ReturnType<typeof zap>>;
export const useZapKey = "Zap";
export const UseZapKeyFn = (mutationKey?: Array<unknown>) => [
	useZapKey,
	...(mutationKey ?? []),
];
export type OdosAssembleTransactionMutationResult = Awaited<
	ReturnType<typeof odosAssembleTransaction>
>;
export const useOdosAssembleTransactionKey = "OdosAssembleTransaction";
export const UseOdosAssembleTransactionKeyFn = (
	mutationKey?: Array<unknown>,
) => [useOdosAssembleTransactionKey, ...(mutationKey ?? [])];
export type OnRamperCheckoutMutationResult = Awaited<
	ReturnType<typeof onRamperCheckout>
>;
export const useOnRamperCheckoutKey = "OnRamperCheckout";
export const UseOnRamperCheckoutKeyFn = (mutationKey?: Array<unknown>) => [
	useOnRamperCheckoutKey,
	...(mutationKey ?? []),
];
export type CreateOfferMutationResult = Awaited<ReturnType<typeof createOffer>>;
export const useCreateOfferKey = "CreateOffer";
export const UseCreateOfferKeyFn = (mutationKey?: Array<unknown>) => [
	useCreateOfferKey,
	...(mutationKey ?? []),
];
export type CreateCollectionOfferMutationResult = Awaited<
	ReturnType<typeof createCollectionOffer>
>;
export const useCreateCollectionOfferKey = "CreateCollectionOffer";
export const UseCreateCollectionOfferKeyFn = (mutationKey?: Array<unknown>) => [
	useCreateCollectionOfferKey,
	...(mutationKey ?? []),
];
export type WrapEthMutationResult = Awaited<ReturnType<typeof wrapEth>>;
export const useWrapEthKey = "WrapEth";
export const UseWrapEthKeyFn = (mutationKey?: Array<unknown>) => [
	useWrapEthKey,
	...(mutationKey ?? []),
];
export type UnwrapWethMutationResult = Awaited<ReturnType<typeof unwrapWeth>>;
export const useUnwrapWethKey = "UnwrapWeth";
export const UseUnwrapWethKeyFn = (mutationKey?: Array<unknown>) => [
	useUnwrapWethKey,
	...(mutationKey ?? []),
];
export type CreateOrderMutationResult = Awaited<ReturnType<typeof createOrder>>;
export const useCreateOrderKey = "CreateOrder";
export const UseCreateOrderKeyFn = (mutationKey?: Array<unknown>) => [
	useCreateOrderKey,
	...(mutationKey ?? []),
];
export type CreateMarketBuyOrderMutationResult = Awaited<
	ReturnType<typeof createMarketBuyOrder>
>;
export const useCreateMarketBuyOrderKey = "CreateMarketBuyOrder";
export const UseCreateMarketBuyOrderKeyFn = (mutationKey?: Array<unknown>) => [
	useCreateMarketBuyOrderKey,
	...(mutationKey ?? []),
];
export type PostOrderMutationResult = Awaited<ReturnType<typeof postOrder>>;
export const usePostOrderKey = "PostOrder";
export const UsePostOrderKeyFn = (mutationKey?: Array<unknown>) => [
	usePostOrderKey,
	...(mutationKey ?? []),
];
export type CancelOrderMutationResult = Awaited<ReturnType<typeof cancelOrder>>;
export const useCancelOrderKey = "CancelOrder";
export const UseCancelOrderKeyFn = (mutationKey?: Array<unknown>) => [
	useCancelOrderKey,
	...(mutationKey ?? []),
];
export type CancelOrdersMutationResult = Awaited<
	ReturnType<typeof cancelOrders>
>;
export const useCancelOrdersKey = "CancelOrders";
export const UseCancelOrdersKeyFn = (mutationKey?: Array<unknown>) => [
	useCancelOrdersKey,
	...(mutationKey ?? []),
];
export type CancelMarketOrdersMutationResult = Awaited<
	ReturnType<typeof cancelMarketOrders>
>;
export const useCancelMarketOrdersKey = "CancelMarketOrders";
export const UseCancelMarketOrdersKeyFn = (mutationKey?: Array<unknown>) => [
	useCancelMarketOrdersKey,
	...(mutationKey ?? []),
];
export type UpdateBalanceAllowanceMutationResult = Awaited<
	ReturnType<typeof updateBalanceAllowance>
>;
export const useUpdateBalanceAllowanceKey = "UpdateBalanceAllowance";
export const UseUpdateBalanceAllowanceKeyFn = (
	mutationKey?: Array<unknown>,
) => [useUpdateBalanceAllowanceKey, ...(mutationKey ?? [])];
export type DropNotificationsMutationResult = Awaited<
	ReturnType<typeof dropNotifications>
>;
export const useDropNotificationsKey = "DropNotifications";
export const UseDropNotificationsKeyFn = (mutationKey?: Array<unknown>) => [
	useDropNotificationsKey,
	...(mutationKey ?? []),
];
export type ApproveForPolymarketMutationResult = Awaited<
	ReturnType<typeof approveForPolymarket>
>;
export const useApproveForPolymarketKey = "ApproveForPolymarket";
export const UseApproveForPolymarketKeyFn = (mutationKey?: Array<unknown>) => [
	useApproveForPolymarketKey,
	...(mutationKey ?? []),
];
export type Approve1MutationResult = Awaited<ReturnType<typeof approve1>>;
export const useApprove1Key = "Approve1";
export const UseApprove1KeyFn = (mutationKey?: Array<unknown>) => [
	useApprove1Key,
	...(mutationKey ?? []),
];
export type CreateLock1MutationResult = Awaited<ReturnType<typeof createLock1>>;
export const useCreateLock1Key = "CreateLock1";
export const UseCreateLock1KeyFn = (mutationKey?: Array<unknown>) => [
	useCreateLock1Key,
	...(mutationKey ?? []),
];
export type IncreaseAmountMutationResult = Awaited<
	ReturnType<typeof increaseAmount>
>;
export const useIncreaseAmountKey = "IncreaseAmount";
export const UseIncreaseAmountKeyFn = (mutationKey?: Array<unknown>) => [
	useIncreaseAmountKey,
	...(mutationKey ?? []),
];
export type IncreaseUnlockTime1MutationResult = Awaited<
	ReturnType<typeof increaseUnlockTime1>
>;
export const useIncreaseUnlockTime1Key = "IncreaseUnlockTime1";
export const UseIncreaseUnlockTime1KeyFn = (mutationKey?: Array<unknown>) => [
	useIncreaseUnlockTime1Key,
	...(mutationKey ?? []),
];
export type WithdrawMutationResult = Awaited<ReturnType<typeof withdraw>>;
export const useWithdrawKey = "Withdraw";
export const UseWithdrawKeyFn = (mutationKey?: Array<unknown>) => [
	useWithdrawKey,
	...(mutationKey ?? []),
];
export type Delegate1MutationResult = Awaited<ReturnType<typeof delegate1>>;
export const useDelegate1Key = "Delegate1";
export const UseDelegate1KeyFn = (mutationKey?: Array<unknown>) => [
	useDelegate1Key,
	...(mutationKey ?? []),
];
export type TransferFrom1MutationResult = Awaited<
	ReturnType<typeof transferFrom1>
>;
export const useTransferFrom1Key = "TransferFrom1";
export const UseTransferFrom1KeyFn = (mutationKey?: Array<unknown>) => [
	useTransferFrom1Key,
	...(mutationKey ?? []),
];
export type Merge1MutationResult = Awaited<ReturnType<typeof merge1>>;
export const useMerge1Key = "Merge1";
export const UseMerge1KeyFn = (mutationKey?: Array<unknown>) => [
	useMerge1Key,
	...(mutationKey ?? []),
];
export type Split1MutationResult = Awaited<ReturnType<typeof split1>>;
export const useSplit1Key = "Split1";
export const UseSplit1KeyFn = (mutationKey?: Array<unknown>) => [
	useSplit1Key,
	...(mutationKey ?? []),
];
export type AbstainMutationResult = Awaited<ReturnType<typeof abstain>>;
export const useAbstainKey = "Abstain";
export const UseAbstainKeyFn = (mutationKey?: Array<unknown>) => [
	useAbstainKey,
	...(mutationKey ?? []),
];
export type AttachMutationResult = Awaited<ReturnType<typeof attach>>;
export const useAttachKey = "Attach";
export const UseAttachKeyFn = (mutationKey?: Array<unknown>) => [
	useAttachKey,
	...(mutationKey ?? []),
];
export type DetachMutationResult = Awaited<ReturnType<typeof detach>>;
export const useDetachKey = "Detach";
export const UseDetachKeyFn = (mutationKey?: Array<unknown>) => [
	useDetachKey,
	...(mutationKey ?? []),
];
export type UnsafeSwapExactTokensForTokensMutationResult = Awaited<
	ReturnType<typeof unsafeSwapExactTokensForTokens>
>;
export const useUnsafeSwapExactTokensForTokensKey =
	"UnsafeSwapExactTokensForTokens";
export const UseUnsafeSwapExactTokensForTokensKeyFn = (
	mutationKey?: Array<unknown>,
) => [useUnsafeSwapExactTokensForTokensKey, ...(mutationKey ?? [])];
export type AddLiquidity1MutationResult = Awaited<
	ReturnType<typeof addLiquidity1>
>;
export const useAddLiquidity1Key = "AddLiquidity1";
export const UseAddLiquidity1KeyFn = (mutationKey?: Array<unknown>) => [
	useAddLiquidity1Key,
	...(mutationKey ?? []),
];
export type AddLiquidityEth1MutationResult = Awaited<
	ReturnType<typeof addLiquidityEth1>
>;
export const useAddLiquidityEth1Key = "AddLiquidityEth1";
export const UseAddLiquidityEth1KeyFn = (mutationKey?: Array<unknown>) => [
	useAddLiquidityEth1Key,
	...(mutationKey ?? []),
];
export type RemoveLiquidityMutationResult = Awaited<
	ReturnType<typeof removeLiquidity>
>;
export const useRemoveLiquidityKey = "RemoveLiquidity";
export const UseRemoveLiquidityKeyFn = (mutationKey?: Array<unknown>) => [
	useRemoveLiquidityKey,
	...(mutationKey ?? []),
];
export type RemoveLiquidityEthMutationResult = Awaited<
	ReturnType<typeof removeLiquidityEth>
>;
export const useRemoveLiquidityEthKey = "RemoveLiquidityEth";
export const UseRemoveLiquidityEthKeyFn = (mutationKey?: Array<unknown>) => [
	useRemoveLiquidityEthKey,
	...(mutationKey ?? []),
];
export type SwapExactTokensForTokens1MutationResult = Awaited<
	ReturnType<typeof swapExactTokensForTokens1>
>;
export const useSwapExactTokensForTokens1Key = "SwapExactTokensForTokens1";
export const UseSwapExactTokensForTokens1KeyFn = (
	mutationKey?: Array<unknown>,
) => [useSwapExactTokensForTokens1Key, ...(mutationKey ?? [])];
export type SwapExactEthForTokens1MutationResult = Awaited<
	ReturnType<typeof swapExactEthForTokens1>
>;
export const useSwapExactEthForTokens1Key = "SwapExactEthForTokens1";
export const UseSwapExactEthForTokens1KeyFn = (
	mutationKey?: Array<unknown>,
) => [useSwapExactEthForTokens1Key, ...(mutationKey ?? [])];
export type SwapExactTokensForEth1MutationResult = Awaited<
	ReturnType<typeof swapExactTokensForEth1>
>;
export const useSwapExactTokensForEth1Key = "SwapExactTokensForEth1";
export const UseSwapExactTokensForEth1KeyFn = (
	mutationKey?: Array<unknown>,
) => [useSwapExactTokensForEth1Key, ...(mutationKey ?? [])];
export type Vote1MutationResult = Awaited<ReturnType<typeof vote1>>;
export const useVote1Key = "Vote1";
export const UseVote1KeyFn = (mutationKey?: Array<unknown>) => [
	useVote1Key,
	...(mutationKey ?? []),
];
export type Reset1MutationResult = Awaited<ReturnType<typeof reset1>>;
export const useReset1Key = "Reset1";
export const UseReset1KeyFn = (mutationKey?: Array<unknown>) => [
	useReset1Key,
	...(mutationKey ?? []),
];
export type Poke1MutationResult = Awaited<ReturnType<typeof poke1>>;
export const usePoke1Key = "Poke1";
export const UsePoke1KeyFn = (mutationKey?: Array<unknown>) => [
	usePoke1Key,
	...(mutationKey ?? []),
];
export type AttachTokenToGaugeMutationResult = Awaited<
	ReturnType<typeof attachTokenToGauge>
>;
export const useAttachTokenToGaugeKey = "AttachTokenToGauge";
export const UseAttachTokenToGaugeKeyFn = (mutationKey?: Array<unknown>) => [
	useAttachTokenToGaugeKey,
	...(mutationKey ?? []),
];
export type DetachTokenFromGaugeMutationResult = Awaited<
	ReturnType<typeof detachTokenFromGauge>
>;
export const useDetachTokenFromGaugeKey = "DetachTokenFromGauge";
export const UseDetachTokenFromGaugeKeyFn = (mutationKey?: Array<unknown>) => [
	useDetachTokenFromGaugeKey,
	...(mutationKey ?? []),
];
export type CreateGauge1MutationResult = Awaited<
	ReturnType<typeof createGauge1>
>;
export const useCreateGauge1Key = "CreateGauge1";
export const UseCreateGauge1KeyFn = (mutationKey?: Array<unknown>) => [
	useCreateGauge1Key,
	...(mutationKey ?? []),
];
export type KillGauge1MutationResult = Awaited<ReturnType<typeof killGauge1>>;
export const useKillGauge1Key = "KillGauge1";
export const UseKillGauge1KeyFn = (mutationKey?: Array<unknown>) => [
	useKillGauge1Key,
	...(mutationKey ?? []),
];
export type ReviveGauge1MutationResult = Awaited<
	ReturnType<typeof reviveGauge1>
>;
export const useReviveGauge1Key = "ReviveGauge1";
export const UseReviveGauge1KeyFn = (mutationKey?: Array<unknown>) => [
	useReviveGauge1Key,
	...(mutationKey ?? []),
];
export type NotifyRewardAmount1MutationResult = Awaited<
	ReturnType<typeof notifyRewardAmount1>
>;
export const useNotifyRewardAmount1Key = "NotifyRewardAmount1";
export const UseNotifyRewardAmount1KeyFn = (mutationKey?: Array<unknown>) => [
	useNotifyRewardAmount1Key,
	...(mutationKey ?? []),
];
export type Distribute1MutationResult = Awaited<ReturnType<typeof distribute1>>;
export const useDistribute1Key = "Distribute1";
export const UseDistribute1KeyFn = (mutationKey?: Array<unknown>) => [
	useDistribute1Key,
	...(mutationKey ?? []),
];
export type ClaimBribes1MutationResult = Awaited<
	ReturnType<typeof claimBribes1>
>;
export const useClaimBribes1Key = "ClaimBribes1";
export const UseClaimBribes1KeyFn = (mutationKey?: Array<unknown>) => [
	useClaimBribes1Key,
	...(mutationKey ?? []),
];
export type ClaimFees1MutationResult = Awaited<ReturnType<typeof claimFees1>>;
export const useClaimFees1Key = "ClaimFees1";
export const UseClaimFees1KeyFn = (mutationKey?: Array<unknown>) => [
	useClaimFees1Key,
	...(mutationKey ?? []),
];
export type ClaimRewards1MutationResult = Awaited<
	ReturnType<typeof claimRewards1>
>;
export const useClaimRewards1Key = "ClaimRewards1";
export const UseClaimRewards1KeyFn = (mutationKey?: Array<unknown>) => [
	useClaimRewards1Key,
	...(mutationKey ?? []),
];
export type Whitelist1MutationResult = Awaited<ReturnType<typeof whitelist1>>;
export const useWhitelist1Key = "Whitelist1";
export const UseWhitelist1KeyFn = (mutationKey?: Array<unknown>) => [
	useWhitelist1Key,
	...(mutationKey ?? []),
];
export type VoteWithOptimalDistribution1MutationResult = Awaited<
	ReturnType<typeof voteWithOptimalDistribution1>
>;
export const useVoteWithOptimalDistribution1Key =
	"VoteWithOptimalDistribution1";
export const UseVoteWithOptimalDistribution1KeyFn = (
	mutationKey?: Array<unknown>,
) => [useVoteWithOptimalDistribution1Key, ...(mutationKey ?? [])];
export type CreateRippleAccountMutationResult = Awaited<
	ReturnType<typeof createRippleAccount>
>;
export const useCreateRippleAccountKey = "CreateRippleAccount";
export const UseCreateRippleAccountKeyFn = (mutationKey?: Array<unknown>) => [
	useCreateRippleAccountKey,
	...(mutationKey ?? []),
];
export type SignRippleTransactionMutationResult = Awaited<
	ReturnType<typeof signRippleTransaction>
>;
export const useSignRippleTransactionKey = "SignRippleTransaction";
export const UseSignRippleTransactionKeyFn = (mutationKey?: Array<unknown>) => [
	useSignRippleTransactionKey,
	...(mutationKey ?? []),
];
export type ExportRippleAccountMutationResult = Awaited<
	ReturnType<typeof exportRippleAccount>
>;
export const useExportRippleAccountKey = "ExportRippleAccount";
export const UseExportRippleAccountKeyFn = (mutationKey?: Array<unknown>) => [
	useExportRippleAccountKey,
	...(mutationKey ?? []),
];
export type DeleteRippleAccountMutationResult = Awaited<
	ReturnType<typeof deleteRippleAccount>
>;
export const useDeleteRippleAccountKey = "DeleteRippleAccount";
export const UseDeleteRippleAccountKeyFn = (mutationKey?: Array<unknown>) => [
	useDeleteRippleAccountKey,
	...(mutationKey ?? []),
];
export type CreateSolanaAccountMutationResult = Awaited<
	ReturnType<typeof createSolanaAccount>
>;
export const useCreateSolanaAccountKey = "CreateSolanaAccount";
export const UseCreateSolanaAccountKeyFn = (mutationKey?: Array<unknown>) => [
	useCreateSolanaAccountKey,
	...(mutationKey ?? []),
];
export type SignSolanaTransactionMutationResult = Awaited<
	ReturnType<typeof signSolanaTransaction>
>;
export const useSignSolanaTransactionKey = "SignSolanaTransaction";
export const UseSignSolanaTransactionKeyFn = (mutationKey?: Array<unknown>) => [
	useSignSolanaTransactionKey,
	...(mutationKey ?? []),
];
export type MultiSignSolanaTransactionMutationResult = Awaited<
	ReturnType<typeof multiSignSolanaTransaction>
>;
export const useMultiSignSolanaTransactionKey = "MultiSignSolanaTransaction";
export const UseMultiSignSolanaTransactionKeyFn = (
	mutationKey?: Array<unknown>,
) => [useMultiSignSolanaTransactionKey, ...(mutationKey ?? [])];
export type TransferSolanaTransactionMutationResult = Awaited<
	ReturnType<typeof transferSolanaTransaction>
>;
export const useTransferSolanaTransactionKey = "TransferSolanaTransaction";
export const UseTransferSolanaTransactionKeyFn = (
	mutationKey?: Array<unknown>,
) => [useTransferSolanaTransactionKey, ...(mutationKey ?? [])];
export type TransferTokensSignSolanaTransactionMutationResult = Awaited<
	ReturnType<typeof transferTokensSignSolanaTransaction>
>;
export const useTransferTokensSignSolanaTransactionKey =
	"TransferTokensSignSolanaTransaction";
export const UseTransferTokensSignSolanaTransactionKeyFn = (
	mutationKey?: Array<unknown>,
) => [useTransferTokensSignSolanaTransactionKey, ...(mutationKey ?? [])];
export type ExportSolanaAccountMutationResult = Awaited<
	ReturnType<typeof exportSolanaAccount>
>;
export const useExportSolanaAccountKey = "ExportSolanaAccount";
export const UseExportSolanaAccountKeyFn = (mutationKey?: Array<unknown>) => [
	useExportSolanaAccountKey,
	...(mutationKey ?? []),
];
export type DeleteSolanaAccountMutationResult = Awaited<
	ReturnType<typeof deleteSolanaAccount>
>;
export const useDeleteSolanaAccountKey = "DeleteSolanaAccount";
export const UseDeleteSolanaAccountKeyFn = (mutationKey?: Array<unknown>) => [
	useDeleteSolanaAccountKey,
	...(mutationKey ?? []),
];
export type SwapMutationResult = Awaited<ReturnType<typeof swap>>;
export const useSwapKey = "Swap";
export const UseSwapKeyFn = (mutationKey?: Array<unknown>) => [
	useSwapKey,
	...(mutationKey ?? []),
];
export type TronCreateTronAccountMutationResult = Awaited<
	ReturnType<typeof tronCreateTronAccount>
>;
export const useTronCreateTronAccountKey = "TronCreateTronAccount";
export const UseTronCreateTronAccountKeyFn = (mutationKey?: Array<unknown>) => [
	useTronCreateTronAccountKey,
	...(mutationKey ?? []),
];
export type TronSignTronTransactionMutationResult = Awaited<
	ReturnType<typeof tronSignTronTransaction>
>;
export const useTronSignTronTransactionKey = "TronSignTronTransaction";
export const UseTronSignTronTransactionKeyFn = (
	mutationKey?: Array<unknown>,
) => [useTronSignTronTransactionKey, ...(mutationKey ?? [])];
export type TronExportTronAccountMutationResult = Awaited<
	ReturnType<typeof tronExportTronAccount>
>;
export const useTronExportTronAccountKey = "TronExportTronAccount";
export const UseTronExportTronAccountKeyFn = (mutationKey?: Array<unknown>) => [
	useTronExportTronAccountKey,
	...(mutationKey ?? []),
];
export type TronDeleteTronAccountMutationResult = Awaited<
	ReturnType<typeof tronDeleteTronAccount>
>;
export const useTronDeleteTronAccountKey = "TronDeleteTronAccount";
export const UseTronDeleteTronAccountKeyFn = (mutationKey?: Array<unknown>) => [
	useTronDeleteTronAccountKey,
	...(mutationKey ?? []),
];
export type AddLiquidity2MutationResult = Awaited<
	ReturnType<typeof addLiquidity2>
>;
export const useAddLiquidity2Key = "AddLiquidity2";
export const UseAddLiquidity2KeyFn = (mutationKey?: Array<unknown>) => [
	useAddLiquidity2Key,
	...(mutationKey ?? []),
];
export type AddLiquidityEth2MutationResult = Awaited<
	ReturnType<typeof addLiquidityEth2>
>;
export const useAddLiquidityEth2Key = "AddLiquidityEth2";
export const UseAddLiquidityEth2KeyFn = (mutationKey?: Array<unknown>) => [
	useAddLiquidityEth2Key,
	...(mutationKey ?? []),
];
export type GetAmountInMutationResult = Awaited<ReturnType<typeof getAmountIn>>;
export const useGetAmountInKey = "GetAmountIn";
export const UseGetAmountInKeyFn = (mutationKey?: Array<unknown>) => [
	useGetAmountInKey,
	...(mutationKey ?? []),
];
export type GetAmountOut2MutationResult = Awaited<
	ReturnType<typeof getAmountOut2>
>;
export const useGetAmountOut2Key = "GetAmountOut2";
export const UseGetAmountOut2KeyFn = (mutationKey?: Array<unknown>) => [
	useGetAmountOut2Key,
	...(mutationKey ?? []),
];
export type GetAmountsInMutationResult = Awaited<
	ReturnType<typeof getAmountsIn>
>;
export const useGetAmountsInKey = "GetAmountsIn";
export const UseGetAmountsInKeyFn = (mutationKey?: Array<unknown>) => [
	useGetAmountsInKey,
	...(mutationKey ?? []),
];
export type GetAmountsOut2MutationResult = Awaited<
	ReturnType<typeof getAmountsOut2>
>;
export const useGetAmountsOut2Key = "GetAmountsOut2";
export const UseGetAmountsOut2KeyFn = (mutationKey?: Array<unknown>) => [
	useGetAmountsOut2Key,
	...(mutationKey ?? []),
];
export type QuoteMutationResult = Awaited<ReturnType<typeof quote>>;
export const useQuoteKey = "Quote";
export const UseQuoteKeyFn = (mutationKey?: Array<unknown>) => [
	useQuoteKey,
	...(mutationKey ?? []),
];
export type RemoveLiquidity1MutationResult = Awaited<
	ReturnType<typeof removeLiquidity1>
>;
export const useRemoveLiquidity1Key = "RemoveLiquidity1";
export const UseRemoveLiquidity1KeyFn = (mutationKey?: Array<unknown>) => [
	useRemoveLiquidity1Key,
	...(mutationKey ?? []),
];
export type RemoveLiquidityEth1MutationResult = Awaited<
	ReturnType<typeof removeLiquidityEth1>
>;
export const useRemoveLiquidityEth1Key = "RemoveLiquidityEth1";
export const UseRemoveLiquidityEth1KeyFn = (mutationKey?: Array<unknown>) => [
	useRemoveLiquidityEth1Key,
	...(mutationKey ?? []),
];
export type RemoveLiquidityEthSupportingFeeOnTransferTokensMutationResult =
	Awaited<ReturnType<typeof removeLiquidityEthSupportingFeeOnTransferTokens>>;
export const useRemoveLiquidityEthSupportingFeeOnTransferTokensKey =
	"RemoveLiquidityEthSupportingFeeOnTransferTokens";
export const UseRemoveLiquidityEthSupportingFeeOnTransferTokensKeyFn = (
	mutationKey?: Array<unknown>,
) => [
	useRemoveLiquidityEthSupportingFeeOnTransferTokensKey,
	...(mutationKey ?? []),
];
export type RemoveLiquidityEthWithPermitMutationResult = Awaited<
	ReturnType<typeof removeLiquidityEthWithPermit>
>;
export const useRemoveLiquidityEthWithPermitKey =
	"RemoveLiquidityEthWithPermit";
export const UseRemoveLiquidityEthWithPermitKeyFn = (
	mutationKey?: Array<unknown>,
) => [useRemoveLiquidityEthWithPermitKey, ...(mutationKey ?? [])];
export type RemoveLiquidityEthWithPermitSupportingFeeOnTransferTokensMutationResult =
	Awaited<
		ReturnType<typeof removeLiquidityEthWithPermitSupportingFeeOnTransferTokens>
	>;
export const useRemoveLiquidityEthWithPermitSupportingFeeOnTransferTokensKey =
	"RemoveLiquidityEthWithPermitSupportingFeeOnTransferTokens";
export const UseRemoveLiquidityEthWithPermitSupportingFeeOnTransferTokensKeyFn =
	(mutationKey?: Array<unknown>) => [
		useRemoveLiquidityEthWithPermitSupportingFeeOnTransferTokensKey,
		...(mutationKey ?? []),
	];
export type RemoveLiquidityWithPermitMutationResult = Awaited<
	ReturnType<typeof removeLiquidityWithPermit>
>;
export const useRemoveLiquidityWithPermitKey = "RemoveLiquidityWithPermit";
export const UseRemoveLiquidityWithPermitKeyFn = (
	mutationKey?: Array<unknown>,
) => [useRemoveLiquidityWithPermitKey, ...(mutationKey ?? [])];
export type SwapEthForExactTokensMutationResult = Awaited<
	ReturnType<typeof swapEthForExactTokens>
>;
export const useSwapEthForExactTokensKey = "SwapEthForExactTokens";
export const UseSwapEthForExactTokensKeyFn = (mutationKey?: Array<unknown>) => [
	useSwapEthForExactTokensKey,
	...(mutationKey ?? []),
];
export type SwapExactEthForTokens2MutationResult = Awaited<
	ReturnType<typeof swapExactEthForTokens2>
>;
export const useSwapExactEthForTokens2Key = "SwapExactEthForTokens2";
export const UseSwapExactEthForTokens2KeyFn = (
	mutationKey?: Array<unknown>,
) => [useSwapExactEthForTokens2Key, ...(mutationKey ?? [])];
export type SwapExactEthForTokensSupportingFeeOnTransferTokensMutationResult =
	Awaited<
		ReturnType<typeof swapExactEthForTokensSupportingFeeOnTransferTokens>
	>;
export const useSwapExactEthForTokensSupportingFeeOnTransferTokensKey =
	"SwapExactEthForTokensSupportingFeeOnTransferTokens";
export const UseSwapExactEthForTokensSupportingFeeOnTransferTokensKeyFn = (
	mutationKey?: Array<unknown>,
) => [
	useSwapExactEthForTokensSupportingFeeOnTransferTokensKey,
	...(mutationKey ?? []),
];
export type SwapExactTokensForEth2MutationResult = Awaited<
	ReturnType<typeof swapExactTokensForEth2>
>;
export const useSwapExactTokensForEth2Key = "SwapExactTokensForEth2";
export const UseSwapExactTokensForEth2KeyFn = (
	mutationKey?: Array<unknown>,
) => [useSwapExactTokensForEth2Key, ...(mutationKey ?? [])];
export type SwapExactTokensForEthSupportingFeeOnTransferTokensMutationResult =
	Awaited<
		ReturnType<typeof swapExactTokensForEthSupportingFeeOnTransferTokens>
	>;
export const useSwapExactTokensForEthSupportingFeeOnTransferTokensKey =
	"SwapExactTokensForEthSupportingFeeOnTransferTokens";
export const UseSwapExactTokensForEthSupportingFeeOnTransferTokensKeyFn = (
	mutationKey?: Array<unknown>,
) => [
	useSwapExactTokensForEthSupportingFeeOnTransferTokensKey,
	...(mutationKey ?? []),
];
export type SwapExactTokensForTokens2MutationResult = Awaited<
	ReturnType<typeof swapExactTokensForTokens2>
>;
export const useSwapExactTokensForTokens2Key = "SwapExactTokensForTokens2";
export const UseSwapExactTokensForTokens2KeyFn = (
	mutationKey?: Array<unknown>,
) => [useSwapExactTokensForTokens2Key, ...(mutationKey ?? [])];
export type SwapExactTokensForTokensSupportingFeeOnTransferTokensMutationResult =
	Awaited<
		ReturnType<typeof swapExactTokensForTokensSupportingFeeOnTransferTokens>
	>;
export const useSwapExactTokensForTokensSupportingFeeOnTransferTokensKey =
	"SwapExactTokensForTokensSupportingFeeOnTransferTokens";
export const UseSwapExactTokensForTokensSupportingFeeOnTransferTokensKeyFn = (
	mutationKey?: Array<unknown>,
) => [
	useSwapExactTokensForTokensSupportingFeeOnTransferTokensKey,
	...(mutationKey ?? []),
];
export type SwapTokensForExactEthMutationResult = Awaited<
	ReturnType<typeof swapTokensForExactEth>
>;
export const useSwapTokensForExactEthKey = "SwapTokensForExactEth";
export const UseSwapTokensForExactEthKeyFn = (mutationKey?: Array<unknown>) => [
	useSwapTokensForExactEthKey,
	...(mutationKey ?? []),
];
export type SwapTokensForExactTokensMutationResult = Awaited<
	ReturnType<typeof swapTokensForExactTokens>
>;
export const useSwapTokensForExactTokensKey = "SwapTokensForExactTokens";
export const UseSwapTokensForExactTokensKeyFn = (
	mutationKey?: Array<unknown>,
) => [useSwapTokensForExactTokensKey, ...(mutationKey ?? [])];
export type MintMutationResult = Awaited<ReturnType<typeof mint>>;
export const useMintKey = "Mint";
export const UseMintKeyFn = (mutationKey?: Array<unknown>) => [
	useMintKey,
	...(mutationKey ?? []),
];
export type IncreaseLiquidityMutationResult = Awaited<
	ReturnType<typeof increaseLiquidity>
>;
export const useIncreaseLiquidityKey = "IncreaseLiquidity";
export const UseIncreaseLiquidityKeyFn = (mutationKey?: Array<unknown>) => [
	useIncreaseLiquidityKey,
	...(mutationKey ?? []),
];
export type DecreaseLiquidityMutationResult = Awaited<
	ReturnType<typeof decreaseLiquidity>
>;
export const useDecreaseLiquidityKey = "DecreaseLiquidity";
export const UseDecreaseLiquidityKeyFn = (mutationKey?: Array<unknown>) => [
	useDecreaseLiquidityKey,
	...(mutationKey ?? []),
];
export type CollectMutationResult = Awaited<ReturnType<typeof collect>>;
export const useCollectKey = "Collect";
export const UseCollectKeyFn = (mutationKey?: Array<unknown>) => [
	useCollectKey,
	...(mutationKey ?? []),
];
export type Burn1MutationResult = Awaited<ReturnType<typeof burn1>>;
export const useBurn1Key = "Burn1";
export const UseBurn1KeyFn = (mutationKey?: Array<unknown>) => [
	useBurn1Key,
	...(mutationKey ?? []),
];
export type CreateAndInitializePoolIfNecessaryMutationResult = Awaited<
	ReturnType<typeof createAndInitializePoolIfNecessary>
>;
export const useCreateAndInitializePoolIfNecessaryKey =
	"CreateAndInitializePoolIfNecessary";
export const UseCreateAndInitializePoolIfNecessaryKeyFn = (
	mutationKey?: Array<unknown>,
) => [useCreateAndInitializePoolIfNecessaryKey, ...(mutationKey ?? [])];
export type Approve2MutationResult = Awaited<ReturnType<typeof approve2>>;
export const useApprove2Key = "Approve2";
export const UseApprove2KeyFn = (mutationKey?: Array<unknown>) => [
	useApprove2Key,
	...(mutationKey ?? []),
];
export type SetApprovalForAll1MutationResult = Awaited<
	ReturnType<typeof setApprovalForAll1>
>;
export const useSetApprovalForAll1Key = "SetApprovalForAll1";
export const UseSetApprovalForAll1KeyFn = (mutationKey?: Array<unknown>) => [
	useSetApprovalForAll1Key,
	...(mutationKey ?? []),
];
export type TransferFrom2MutationResult = Awaited<
	ReturnType<typeof transferFrom2>
>;
export const useTransferFrom2Key = "TransferFrom2";
export const UseTransferFrom2KeyFn = (mutationKey?: Array<unknown>) => [
	useTransferFrom2Key,
	...(mutationKey ?? []),
];
export type PermitMutationResult = Awaited<ReturnType<typeof permit>>;
export const usePermitKey = "Permit";
export const UsePermitKeyFn = (mutationKey?: Array<unknown>) => [
	usePermitKey,
	...(mutationKey ?? []),
];
export type MulticallMutationResult = Awaited<ReturnType<typeof multicall>>;
export const useMulticallKey = "Multicall";
export const UseMulticallKeyFn = (mutationKey?: Array<unknown>) => [
	useMulticallKey,
	...(mutationKey ?? []),
];
export type SweepTokenMutationResult = Awaited<ReturnType<typeof sweepToken>>;
export const useSweepTokenKey = "SweepToken";
export const UseSweepTokenKeyFn = (mutationKey?: Array<unknown>) => [
	useSweepTokenKey,
	...(mutationKey ?? []),
];
export type UnwrapWeth9MutationResult = Awaited<ReturnType<typeof unwrapWeth9>>;
export const useUnwrapWeth9Key = "UnwrapWeth9";
export const UseUnwrapWeth9KeyFn = (mutationKey?: Array<unknown>) => [
	useUnwrapWeth9Key,
	...(mutationKey ?? []),
];
export type RefundEthMutationResult = Awaited<ReturnType<typeof refundEth>>;
export const useRefundEthKey = "RefundEth";
export const UseRefundEthKeyFn = (mutationKey?: Array<unknown>) => [
	useRefundEthKey,
	...(mutationKey ?? []),
];
export type ExactInputMutationResult = Awaited<ReturnType<typeof exactInput>>;
export const useExactInputKey = "ExactInput";
export const UseExactInputKeyFn = (mutationKey?: Array<unknown>) => [
	useExactInputKey,
	...(mutationKey ?? []),
];
export type ExactInputSingleMutationResult = Awaited<
	ReturnType<typeof exactInputSingle>
>;
export const useExactInputSingleKey = "ExactInputSingle";
export const UseExactInputSingleKeyFn = (mutationKey?: Array<unknown>) => [
	useExactInputSingleKey,
	...(mutationKey ?? []),
];
export type ExactOutputMutationResult = Awaited<ReturnType<typeof exactOutput>>;
export const useExactOutputKey = "ExactOutput";
export const UseExactOutputKeyFn = (mutationKey?: Array<unknown>) => [
	useExactOutputKey,
	...(mutationKey ?? []),
];
export type ExactOutputSingleMutationResult = Awaited<
	ReturnType<typeof exactOutputSingle>
>;
export const useExactOutputSingleKey = "ExactOutputSingle";
export const UseExactOutputSingleKeyFn = (mutationKey?: Array<unknown>) => [
	useExactOutputSingleKey,
	...(mutationKey ?? []),
];
export type Multicall1MutationResult = Awaited<ReturnType<typeof multicall1>>;
export const useMulticall1Key = "Multicall1";
export const UseMulticall1KeyFn = (mutationKey?: Array<unknown>) => [
	useMulticall1Key,
	...(mutationKey ?? []),
];
export type RefundEth1MutationResult = Awaited<ReturnType<typeof refundEth1>>;
export const useRefundEth1Key = "RefundEth1";
export const UseRefundEth1KeyFn = (mutationKey?: Array<unknown>) => [
	useRefundEth1Key,
	...(mutationKey ?? []),
];
export type SelfPermitMutationResult = Awaited<ReturnType<typeof selfPermit>>;
export const useSelfPermitKey = "SelfPermit";
export const UseSelfPermitKeyFn = (mutationKey?: Array<unknown>) => [
	useSelfPermitKey,
	...(mutationKey ?? []),
];
export type SelfPermitAllowedMutationResult = Awaited<
	ReturnType<typeof selfPermitAllowed>
>;
export const useSelfPermitAllowedKey = "SelfPermitAllowed";
export const UseSelfPermitAllowedKeyFn = (mutationKey?: Array<unknown>) => [
	useSelfPermitAllowedKey,
	...(mutationKey ?? []),
];
export type SelfPermitAllowedIfNecessaryMutationResult = Awaited<
	ReturnType<typeof selfPermitAllowedIfNecessary>
>;
export const useSelfPermitAllowedIfNecessaryKey =
	"SelfPermitAllowedIfNecessary";
export const UseSelfPermitAllowedIfNecessaryKeyFn = (
	mutationKey?: Array<unknown>,
) => [useSelfPermitAllowedIfNecessaryKey, ...(mutationKey ?? [])];
export type SelfPermitIfNecessaryMutationResult = Awaited<
	ReturnType<typeof selfPermitIfNecessary>
>;
export const useSelfPermitIfNecessaryKey = "SelfPermitIfNecessary";
export const UseSelfPermitIfNecessaryKeyFn = (mutationKey?: Array<unknown>) => [
	useSelfPermitIfNecessaryKey,
	...(mutationKey ?? []),
];
export type SweepToken1MutationResult = Awaited<ReturnType<typeof sweepToken1>>;
export const useSweepToken1Key = "SweepToken1";
export const UseSweepToken1KeyFn = (mutationKey?: Array<unknown>) => [
	useSweepToken1Key,
	...(mutationKey ?? []),
];
export type SweepTokenWithFeeMutationResult = Awaited<
	ReturnType<typeof sweepTokenWithFee>
>;
export const useSweepTokenWithFeeKey = "SweepTokenWithFee";
export const UseSweepTokenWithFeeKeyFn = (mutationKey?: Array<unknown>) => [
	useSweepTokenWithFeeKey,
	...(mutationKey ?? []),
];
export type UnwrapWeth91MutationResult = Awaited<
	ReturnType<typeof unwrapWeth91>
>;
export const useUnwrapWeth91Key = "UnwrapWeth91";
export const UseUnwrapWeth91KeyFn = (mutationKey?: Array<unknown>) => [
	useUnwrapWeth91Key,
	...(mutationKey ?? []),
];
export type UnwrapWeth9WithFeeMutationResult = Awaited<
	ReturnType<typeof unwrapWeth9WithFee>
>;
export const useUnwrapWeth9WithFeeKey = "UnwrapWeth9WithFee";
export const UseUnwrapWeth9WithFeeKeyFn = (mutationKey?: Array<unknown>) => [
	useUnwrapWeth9WithFeeKey,
	...(mutationKey ?? []),
];
export type CreateLock2MutationResult = Awaited<ReturnType<typeof createLock2>>;
export const useCreateLock2Key = "CreateLock2";
export const UseCreateLock2KeyFn = (mutationKey?: Array<unknown>) => [
	useCreateLock2Key,
	...(mutationKey ?? []),
];
export type CreateLockFor1MutationResult = Awaited<
	ReturnType<typeof createLockFor1>
>;
export const useCreateLockFor1Key = "CreateLockFor1";
export const UseCreateLockFor1KeyFn = (mutationKey?: Array<unknown>) => [
	useCreateLockFor1Key,
	...(mutationKey ?? []),
];
export type IncreaseLockAmount1MutationResult = Awaited<
	ReturnType<typeof increaseLockAmount1>
>;
export const useIncreaseLockAmount1Key = "IncreaseLockAmount1";
export const UseIncreaseLockAmount1KeyFn = (mutationKey?: Array<unknown>) => [
	useIncreaseLockAmount1Key,
	...(mutationKey ?? []),
];
export type IncreaseUnlockTime2MutationResult = Awaited<
	ReturnType<typeof increaseUnlockTime2>
>;
export const useIncreaseUnlockTime2Key = "IncreaseUnlockTime2";
export const UseIncreaseUnlockTime2KeyFn = (mutationKey?: Array<unknown>) => [
	useIncreaseUnlockTime2Key,
	...(mutationKey ?? []),
];
export type Withdraw1MutationResult = Awaited<ReturnType<typeof withdraw1>>;
export const useWithdraw1Key = "Withdraw1";
export const UseWithdraw1KeyFn = (mutationKey?: Array<unknown>) => [
	useWithdraw1Key,
	...(mutationKey ?? []),
];
export type Approve3MutationResult = Awaited<ReturnType<typeof approve3>>;
export const useApprove3Key = "Approve3";
export const UseApprove3KeyFn = (mutationKey?: Array<unknown>) => [
	useApprove3Key,
	...(mutationKey ?? []),
];
export type SetApprovalForAll2MutationResult = Awaited<
	ReturnType<typeof setApprovalForAll2>
>;
export const useSetApprovalForAll2Key = "SetApprovalForAll2";
export const UseSetApprovalForAll2KeyFn = (mutationKey?: Array<unknown>) => [
	useSetApprovalForAll2Key,
	...(mutationKey ?? []),
];
export type TransferFrom3MutationResult = Awaited<
	ReturnType<typeof transferFrom3>
>;
export const useTransferFrom3Key = "TransferFrom3";
export const UseTransferFrom3KeyFn = (mutationKey?: Array<unknown>) => [
	useTransferFrom3Key,
	...(mutationKey ?? []),
];
export type SafeTransferFrom1MutationResult = Awaited<
	ReturnType<typeof safeTransferFrom1>
>;
export const useSafeTransferFrom1Key = "SafeTransferFrom1";
export const UseSafeTransferFrom1KeyFn = (mutationKey?: Array<unknown>) => [
	useSafeTransferFrom1Key,
	...(mutationKey ?? []),
];
export type Merge2MutationResult = Awaited<ReturnType<typeof merge2>>;
export const useMerge2Key = "Merge2";
export const UseMerge2KeyFn = (mutationKey?: Array<unknown>) => [
	useMerge2Key,
	...(mutationKey ?? []),
];
export type Split2MutationResult = Awaited<ReturnType<typeof split2>>;
export const useSplit2Key = "Split2";
export const UseSplit2KeyFn = (mutationKey?: Array<unknown>) => [
	useSplit2Key,
	...(mutationKey ?? []),
];
export type VotingMutationResult = Awaited<ReturnType<typeof voting>>;
export const useVotingKey = "Voting";
export const UseVotingKeyFn = (mutationKey?: Array<unknown>) => [
	useVotingKey,
	...(mutationKey ?? []),
];
export type Abstain1MutationResult = Awaited<ReturnType<typeof abstain1>>;
export const useAbstain1Key = "Abstain1";
export const UseAbstain1KeyFn = (mutationKey?: Array<unknown>) => [
	useAbstain1Key,
	...(mutationKey ?? []),
];
export type Attach1MutationResult = Awaited<ReturnType<typeof attach1>>;
export const useAttach1Key = "Attach1";
export const UseAttach1KeyFn = (mutationKey?: Array<unknown>) => [
	useAttach1Key,
	...(mutationKey ?? []),
];
export type Detach1MutationResult = Awaited<ReturnType<typeof detach1>>;
export const useDetach1Key = "Detach1";
export const UseDetach1KeyFn = (mutationKey?: Array<unknown>) => [
	useDetach1Key,
	...(mutationKey ?? []),
];
export type DepositForMutationResult = Awaited<ReturnType<typeof depositFor>>;
export const useDepositForKey = "DepositFor";
export const UseDepositForKeyFn = (mutationKey?: Array<unknown>) => [
	useDepositForKey,
	...(mutationKey ?? []),
];
export type Checkpoint1MutationResult = Awaited<ReturnType<typeof checkpoint1>>;
export const useCheckpoint1Key = "Checkpoint1";
export const UseCheckpoint1KeyFn = (mutationKey?: Array<unknown>) => [
	useCheckpoint1Key,
	...(mutationKey ?? []),
];
export type Delegate2MutationResult = Awaited<ReturnType<typeof delegate2>>;
export const useDelegate2Key = "Delegate2";
export const UseDelegate2KeyFn = (mutationKey?: Array<unknown>) => [
	useDelegate2Key,
	...(mutationKey ?? []),
];
export type DelegateBySig1MutationResult = Awaited<
	ReturnType<typeof delegateBySig1>
>;
export const useDelegateBySig1Key = "DelegateBySig1";
export const UseDelegateBySig1KeyFn = (mutationKey?: Array<unknown>) => [
	useDelegateBySig1Key,
	...(mutationKey ?? []),
];
export type Vote2MutationResult = Awaited<ReturnType<typeof vote2>>;
export const useVote2Key = "Vote2";
export const UseVote2KeyFn = (mutationKey?: Array<unknown>) => [
	useVote2Key,
	...(mutationKey ?? []),
];
export type Reset2MutationResult = Awaited<ReturnType<typeof reset2>>;
export const useReset2Key = "Reset2";
export const UseReset2KeyFn = (mutationKey?: Array<unknown>) => [
	useReset2Key,
	...(mutationKey ?? []),
];
export type Poke2MutationResult = Awaited<ReturnType<typeof poke2>>;
export const usePoke2Key = "Poke2";
export const UsePoke2KeyFn = (mutationKey?: Array<unknown>) => [
	usePoke2Key,
	...(mutationKey ?? []),
];
export type CreateGauge2MutationResult = Awaited<
	ReturnType<typeof createGauge2>
>;
export const useCreateGauge2Key = "CreateGauge2";
export const UseCreateGauge2KeyFn = (mutationKey?: Array<unknown>) => [
	useCreateGauge2Key,
	...(mutationKey ?? []),
];
export type VoteWithOptimalDistribution2MutationResult = Awaited<
	ReturnType<typeof voteWithOptimalDistribution2>
>;
export const useVoteWithOptimalDistribution2Key =
	"VoteWithOptimalDistribution2";
export const UseVoteWithOptimalDistribution2KeyFn = (
	mutationKey?: Array<unknown>,
) => [useVoteWithOptimalDistribution2Key, ...(mutationKey ?? [])];
export type AttachTokenToGauge1MutationResult = Awaited<
	ReturnType<typeof attachTokenToGauge1>
>;
export const useAttachTokenToGauge1Key = "AttachTokenToGauge1";
export const UseAttachTokenToGauge1KeyFn = (mutationKey?: Array<unknown>) => [
	useAttachTokenToGauge1Key,
	...(mutationKey ?? []),
];
export type DetachTokenFromGauge1MutationResult = Awaited<
	ReturnType<typeof detachTokenFromGauge1>
>;
export const useDetachTokenFromGauge1Key = "DetachTokenFromGauge1";
export const UseDetachTokenFromGauge1KeyFn = (mutationKey?: Array<unknown>) => [
	useDetachTokenFromGauge1Key,
	...(mutationKey ?? []),
];
export type KillGauge2MutationResult = Awaited<ReturnType<typeof killGauge2>>;
export const useKillGauge2Key = "KillGauge2";
export const UseKillGauge2KeyFn = (mutationKey?: Array<unknown>) => [
	useKillGauge2Key,
	...(mutationKey ?? []),
];
export type ReviveGauge2MutationResult = Awaited<
	ReturnType<typeof reviveGauge2>
>;
export const useReviveGauge2Key = "ReviveGauge2";
export const UseReviveGauge2KeyFn = (mutationKey?: Array<unknown>) => [
	useReviveGauge2Key,
	...(mutationKey ?? []),
];
export type NotifyRewardAmount2MutationResult = Awaited<
	ReturnType<typeof notifyRewardAmount2>
>;
export const useNotifyRewardAmount2Key = "NotifyRewardAmount2";
export const UseNotifyRewardAmount2KeyFn = (mutationKey?: Array<unknown>) => [
	useNotifyRewardAmount2Key,
	...(mutationKey ?? []),
];
export type Distribute2MutationResult = Awaited<ReturnType<typeof distribute2>>;
export const useDistribute2Key = "Distribute2";
export const UseDistribute2KeyFn = (mutationKey?: Array<unknown>) => [
	useDistribute2Key,
	...(mutationKey ?? []),
];
export type ClaimBribes2MutationResult = Awaited<
	ReturnType<typeof claimBribes2>
>;
export const useClaimBribes2Key = "ClaimBribes2";
export const UseClaimBribes2KeyFn = (mutationKey?: Array<unknown>) => [
	useClaimBribes2Key,
	...(mutationKey ?? []),
];
export type ClaimFees2MutationResult = Awaited<ReturnType<typeof claimFees2>>;
export const useClaimFees2Key = "ClaimFees2";
export const UseClaimFees2KeyFn = (mutationKey?: Array<unknown>) => [
	useClaimFees2Key,
	...(mutationKey ?? []),
];
export type ClaimRewards2MutationResult = Awaited<
	ReturnType<typeof claimRewards2>
>;
export const useClaimRewards2Key = "ClaimRewards2";
export const UseClaimRewards2KeyFn = (mutationKey?: Array<unknown>) => [
	useClaimRewards2Key,
	...(mutationKey ?? []),
];
export type Whitelist2MutationResult = Awaited<ReturnType<typeof whitelist2>>;
export const useWhitelist2Key = "Whitelist2";
export const UseWhitelist2KeyFn = (mutationKey?: Array<unknown>) => [
	useWhitelist2Key,
	...(mutationKey ?? []),
];
export type UpdateFlowMutationResult = Awaited<ReturnType<typeof updateFlow>>;
export const useUpdateFlowKey = "UpdateFlow";
export const UseUpdateFlowKeyFn = (mutationKey?: Array<unknown>) => [
	useUpdateFlowKey,
	...(mutationKey ?? []),
];
export type AccountsDeleteEthereumAccountMutationResult = Awaited<
	ReturnType<typeof accountsDeleteEthereumAccount>
>;
export const useAccountsDeleteEthereumAccountKey =
	"AccountsDeleteEthereumAccount";
export const UseAccountsDeleteEthereumAccountKeyFn = (
	mutationKey?: Array<unknown>,
) => [useAccountsDeleteEthereumAccountKey, ...(mutationKey ?? [])];
export type CosmosCosmosDeleteAccountMutationResult = Awaited<
	ReturnType<typeof cosmosCosmosDeleteAccount>
>;
export const useCosmosCosmosDeleteAccountKey = "CosmosCosmosDeleteAccount";
export const UseCosmosCosmosDeleteAccountKeyFn = (
	mutationKey?: Array<unknown>,
) => [useCosmosCosmosDeleteAccountKey, ...(mutationKey ?? [])];
export type DeleteJobMutationResult = Awaited<ReturnType<typeof deleteJob>>;
export const useDeleteJobKey = "DeleteJob";
export const UseDeleteJobKeyFn = (mutationKey?: Array<unknown>) => [
	useDeleteJobKey,
	...(mutationKey ?? []),
];
export type DeleteFlowMutationResult = Awaited<ReturnType<typeof deleteFlow>>;
export const useDeleteFlowKey = "DeleteFlow";
export const UseDeleteFlowKeyFn = (mutationKey?: Array<unknown>) => [
	useDeleteFlowKey,
	...(mutationKey ?? []),
];
export type DeleteUserDefinedFunctionMutationResult = Awaited<
	ReturnType<typeof deleteUserDefinedFunction>
>;
export const useDeleteUserDefinedFunctionKey = "DeleteUserDefinedFunction";
export const UseDeleteUserDefinedFunctionKeyFn = (
	mutationKey?: Array<unknown>,
) => [useDeleteUserDefinedFunctionKey, ...(mutationKey ?? [])];
