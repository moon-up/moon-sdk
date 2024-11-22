// generated with @7nohe/openapi-react-query-codegen@2.0.0-beta.3

import type { Options } from "@hey-api/client-fetch";
import {
	useMutation,
	type UseMutationOptions,
	useQuery,
	type UseQueryOptions,
} from "@tanstack/react-query";
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
	Aavev3PoolAddressProviderSetAclAdminData,
	Aavev3PoolAddressProviderSetAclAdminError,
	Aavev3PoolAddressProviderSetAclManagerData,
	Aavev3PoolAddressProviderSetAclManagerError,
	Aavev3PoolAddressProviderSetAddressData,
	Aavev3PoolAddressProviderSetAddressError,
	Aavev3PoolAddressProviderSetMarketIdData,
	Aavev3PoolAddressProviderSetMarketIdError,
	Aavev3PoolAddressProviderSetPoolConfiguratorImplData,
	Aavev3PoolAddressProviderSetPoolConfiguratorImplError,
	Aavev3PoolAddressProviderSetPoolImplData,
	Aavev3PoolAddressProviderSetPoolImplError,
	Aavev3PoolBorrowData,
	Aavev3PoolBorrowError,
	Aavev3PoolGetReserveDataData,
	Aavev3PoolGetReserveDataError,
	Aavev3PoolGetUserAccountDataData,
	Aavev3PoolGetUserAccountDataError,
	Aavev3PoolLiquidationCallData,
	Aavev3PoolLiquidationCallError,
	Aavev3PoolRepayData,
	Aavev3PoolRepayError,
	Aavev3PoolSetUserUseReserveAsCollateralData,
	Aavev3PoolSetUserUseReserveAsCollateralError,
	Aavev3PoolSupplyData,
	Aavev3PoolSupplyError,
	Aavev3PoolWithdrawData,
	Aavev3PoolWithdrawError,
	AavEv3RewardsClaimAllRewardsData,
	AavEv3RewardsClaimAllRewardsError,
	AavEv3RewardsClaimAllRewardsOnBehalfData,
	AavEv3RewardsClaimAllRewardsOnBehalfError,
	AavEv3RewardsClaimAllRewardsToSelfData,
	AavEv3RewardsClaimAllRewardsToSelfError,
	AavEv3RewardsClaimRewardsData,
	AavEv3RewardsClaimRewardsError,
	AavEv3RewardsClaimRewardsOnBehalfData,
	AavEv3RewardsClaimRewardsOnBehalfError,
	AavEv3RewardsClaimRewardsToSelfData,
	AavEv3RewardsClaimRewardsToSelfError,
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
	Abstain1Data,
	Abstain1Error,
	AbstainData,
	AbstainError,
	AccountsBroadcastEthreeumTransactionData,
	AccountsBroadcastEthreeumTransactionError,
	AccountsCreateEthereumAccountData,
	AccountsCreateEthereumAccountError,
	AccountsDeleteEthereumAccountData,
	AccountsDeleteEthereumAccountError,
	AccountsDeployContractData,
	AccountsDeployContractError,
	AccountsEncodeAbiDataData,
	AccountsEncodeAbiDataError,
	AccountsEstimateGasData,
	AccountsEstimateGasError,
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
	AccountsSignEthereumTransactionData,
	AccountsSignEthereumTransactionError,
	AccountsSignEthereumTypedDataData,
	AccountsSignEthereumTypedDataError,
	AccountsSignEthreumMessageData,
	AccountsSignEthreumMessageError,
	AccountsSuggestGasPriceData,
	AccountsSuggestGasPriceError,
	AccountsTransferEthData,
	AccountsTransferEthError,
	AddLiquidity1Data,
	AddLiquidity1Error,
	AddLiquidity2Data,
	AddLiquidity2Error,
	AddLiquidityData,
	AddLiquidityError,
	AddLiquidityEth1Data,
	AddLiquidityEth1Error,
	AddLiquidityEth2Data,
	AddLiquidityEth2Error,
	AddLiquidityEthData,
	AddLiquidityEthError,
	Approve1Data,
	Approve1Error,
	Approve2Data,
	Approve2Error,
	Approve3Data,
	Approve3Error,
	ApproveData,
	ApproveError,
	ApproveForPolymarketData,
	ApproveForPolymarketError,
	Attach1Data,
	Attach1Error,
	AttachData,
	AttachError,
	AttachTokenToGauge1Data,
	AttachTokenToGauge1Error,
	AttachTokenToGaugeData,
	AttachTokenToGaugeError,
	BalanceOfData,
	BalanceOfError,
	BaseUriData,
	BaseUriError,
	BitcoinBitcoinCreateAccountData,
	BitcoinBitcoinCreateAccountError,
	BitcoinBitcoinCreateBrc20TransactionData,
	BitcoinBitcoinCreateBrc20TransactionError,
	BitcoinBitcoinCreateSrc20InscriptionData,
	BitcoinBitcoinCreateSrc20InscriptionError,
	BitcoinBitcoinDeleteAccountData,
	BitcoinBitcoinDeleteAccountError,
	BitcoinBitcoinExportAccountData,
	BitcoinBitcoinExportAccountError,
	BitcoinBitcoinGenerateUnsignedPsbtHexData,
	BitcoinBitcoinGenerateUnsignedPsbtHexError,
	BitcoinBitcoinGetAccountData,
	BitcoinBitcoinGetAccountError,
	BitcoinBitcoinSignTransactionData,
	BitcoinBitcoinSignTransactionError,
	BitcoinCashBitcoinCashCreateAccountData,
	BitcoinCashBitcoinCashCreateAccountError,
	BitcoinCashBitcoinCashDeleteAccountData,
	BitcoinCashBitcoinCashDeleteAccountError,
	BitcoinCashBitcoinCashExportAccountData,
	BitcoinCashBitcoinCashExportAccountError,
	BitcoinCashBitcoinCashGenerateUnsignedPsbtHexData,
	BitcoinCashBitcoinCashGenerateUnsignedPsbtHexError,
	BitcoinCashBitcoinCashGetAccountData,
	BitcoinCashBitcoinCashGetAccountError,
	BitcoinCashBitcoinCashSignBitcoinTransactionData,
	BitcoinCashBitcoinCashSignBitcoinTransactionError,
	BitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPathData,
	BitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPathError,
	BitcoinCashBitcoinCashSignTransactionData,
	BitcoinCashBitcoinCashSignTransactionError,
	BitcoinCashBitcoinCashSignTransactionWithMemoData,
	BitcoinCashBitcoinCashSignTransactionWithMemoError,
	BitcoinCashListAccountsData,
	BitcoinCashListAccountsError,
	BitcoinListAccountsData,
	BitcoinListAccountsError,
	Burn1Data,
	Burn1Error,
	BurnData,
	BurnError,
	CalculateOptimalVoteDistribution1Data,
	CalculateOptimalVoteDistribution1Error,
	CalculateOptimalVoteDistribution2Data,
	CalculateOptimalVoteDistribution2Error,
	CalculateOptimalVoteDistributionData,
	CalculateOptimalVoteDistributionError,
	CancelMarketOrdersData,
	CancelMarketOrdersError,
	CancelOrderData,
	CancelOrderError,
	CancelOrdersData,
	CancelOrdersError,
	ChartsGetChartAnalysisData,
	ChartsGetChartAnalysisError,
	Checkpoint1Data,
	Checkpoint1Error,
	CheckpointData,
	CheckpointDelegateeData,
	CheckpointDelegateeError,
	CheckpointError,
	ClaimBribes1Data,
	ClaimBribes1Error,
	ClaimBribes2Data,
	ClaimBribes2Error,
	ClaimBribesData,
	ClaimBribesError,
	ClaimData,
	ClaimError,
	ClaimFees1Data,
	ClaimFees1Error,
	ClaimFees2Data,
	ClaimFees2Error,
	ClaimFeesData,
	ClaimFeesError,
	ClaimRewards1Data,
	ClaimRewards1Error,
	ClaimRewards2Data,
	ClaimRewards2Error,
	ClaimRewardsData,
	ClaimRewardsError,
	CollectData,
	CollectError,
	ComponentsCreateComponentData,
	ComponentsCreateComponentError,
	ComponentsForceEmbeddingData,
	ComponentsForceEmbeddingError,
	ComponentsGetComponentCapabilitiesDescriptionData,
	ComponentsGetComponentCapabilitiesDescriptionError,
	ComponentsGetComponentData,
	ComponentsGetComponentError,
	ComponentsGetComponentsData,
	ComponentsGetComponentsError,
	ComponentsSearchComponentsData,
	ComponentsSearchComponentsError,
	ComponentsUpdateComponentData,
	ComponentsUpdateComponentError,
	ComponentsUpdateEmbeddingData,
	ComponentsUpdateEmbeddingError,
	CosmosCosmosCreateAccountData,
	CosmosCosmosCreateAccountError,
	CosmosCosmosDeleteAccountData,
	CosmosCosmosDeleteAccountError,
	CosmosCosmosExportAccountData,
	CosmosCosmosExportAccountError,
	CosmosCosmosGetAccountData,
	CosmosCosmosGetAccountError,
	CosmosCosmosListAccountsData,
	CosmosCosmosListAccountsError,
	CosmosCosmosSignIbcTransferTransactionData,
	CosmosCosmosSignIbcTransferTransactionError,
	CosmosCosmosSignMessageData,
	CosmosCosmosSignMessageError,
	CosmosCosmosSignTransferTransactionData,
	CosmosCosmosSignTransferTransactionError,
	CreateAndInitializePoolIfNecessaryData,
	CreateAndInitializePoolIfNecessaryError,
	CreateCollectionOfferData,
	CreateCollectionOfferError,
	CreateDelegatedLockForData,
	CreateDelegatedLockForError,
	CreateEosAccountData,
	CreateEosAccountError,
	CreateFlowData,
	CreateFlowError,
	CreateGauge1Data,
	CreateGauge1Error,
	CreateGauge2Data,
	CreateGauge2Error,
	CreateGaugeData,
	CreateGaugeError,
	CreateJobData,
	CreateJobError,
	CreateLock1Data,
	CreateLock1Error,
	CreateLock2Data,
	CreateLock2Error,
	CreateLockData,
	CreateLockError,
	CreateLockFor1Data,
	CreateLockFor1Error,
	CreateLockForData,
	CreateLockForError,
	CreateMarketBuyOrderData,
	CreateMarketBuyOrderError,
	CreateOfferData,
	CreateOfferError,
	CreateOrderData,
	CreateOrderError,
	CreateRippleAccountData,
	CreateRippleAccountError,
	CreateSolanaAccountData,
	CreateSolanaAccountError,
	CreateUserDefinedFunctionData,
	CreateUserDefinedFunctionError,
	DataExecuteCustomSupabaseQueryData,
	DataExecuteCustomSupabaseQueryError,
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
	DecreaseLiquidityData,
	DecreaseLiquidityError,
	Delegate1Data,
	Delegate1Error,
	Delegate2Data,
	Delegate2Error,
	DelegateBySig1Data,
	DelegateBySig1Error,
	DelegateBySigData,
	DelegateBySigError,
	DelegateData,
	DelegateError,
	DeleteEosAccountData,
	DeleteEosAccountError,
	DeleteFlowData,
	DeleteFlowError,
	DeleteJobData,
	DeleteJobError,
	DeleteRippleAccountData,
	DeleteRippleAccountError,
	DeleteSolanaAccountData,
	DeleteSolanaAccountError,
	DeleteUserDefinedFunctionData,
	DeleteUserDefinedFunctionError,
	DepositForData,
	DepositForError,
	Detach1Data,
	Detach1Error,
	DetachData,
	DetachError,
	DetachTokenFromGauge1Data,
	DetachTokenFromGauge1Error,
	DetachTokenFromGaugeData,
	DetachTokenFromGaugeError,
	Distribute1Data,
	Distribute1Error,
	Distribute2Data,
	Distribute2Error,
	DistributeData,
	DistributeError,
	DogecoinDogeCoinCreateNewAccountData,
	DogecoinDogeCoinCreateNewAccountError,
	DogecoinDogeCoinDeleteAccountData,
	DogecoinDogeCoinDeleteAccountError,
	DogecoinDogeCoinExportAccountDetailsData,
	DogecoinDogeCoinExportAccountDetailsError,
	DogecoinDogeCoinGetAccountDetailsData,
	DogecoinDogeCoinGetAccountDetailsError,
	DogecoinDogeCoinSignTransactionData,
	DogecoinDogeCoinSignTransactionError,
	DogecoinDogeCoinSignTransactionWithMemoData,
	DogecoinDogeCoinSignTransactionWithMemoError,
	DogeCoinListAccountsData,
	DogeCoinListAccountsError,
	DomainSeparatorData,
	DomainSeparatorError,
	DropNotificationsData,
	DropNotificationsError,
	EnsResolveData,
	EnsResolveError,
	EnsReverseResolveData,
	EnsReverseResolveError,
	Erc1155Erc1155BalanceOfBatchData,
	Erc1155Erc1155BalanceOfBatchError,
	Erc1155Erc1155BalanceOfData,
	Erc1155Erc1155BalanceOfError,
	Erc1155Erc1155IsApprovedForAllData,
	Erc1155Erc1155IsApprovedForAllError,
	Erc1155Erc1155SafeBatchTransferFromData,
	Erc1155Erc1155SafeBatchTransferFromError,
	Erc1155Erc1155SafeTransferFromData,
	Erc1155Erc1155SafeTransferFromError,
	Erc1155Erc1155SetApprovalForAllData,
	Erc1155Erc1155SetApprovalForAllError,
	Erc20ApproveErc20TokenSpendingData,
	Erc20ApproveErc20TokenSpendingError,
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
	Erc20TransferErc20TokenData,
	Erc20TransferErc20TokenError,
	Erc20TransferFromErc20TokenData,
	Erc20TransferFromErc20TokenError,
	Erc4626ApproveErc4626Data,
	Erc4626ApproveErc4626Error,
	Erc4626DepositToErc4626Data,
	Erc4626DepositToErc4626Error,
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
	Erc4626MintErc4626SharesData,
	Erc4626MintErc4626SharesError,
	Erc4626RedeemErc4626SharesData,
	Erc4626RedeemErc4626SharesError,
	Erc4626TransferErc4626Data,
	Erc4626TransferErc4626Error,
	Erc4626TransferFromErc4626Data,
	Erc4626TransferFromErc4626Error,
	Erc4626WithdrawFromErc4626Data,
	Erc4626WithdrawFromErc4626Error,
	Erc721ApproveErc721Data,
	Erc721ApproveErc721Error,
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
	Erc721SafeTransferFromErc721Data,
	Erc721SafeTransferFromErc721Error,
	Erc721SafeTransferFromWithDataErc721Data,
	Erc721SafeTransferFromWithDataErc721Error,
	Erc721SetApprovalForAllErc721Data,
	Erc721SetApprovalForAllErc721Error,
	Erc721TransferFromErc721Data,
	Erc721TransferFromErc721Error,
	ExactInputData,
	ExactInputError,
	ExactInputSingleData,
	ExactInputSingleError,
	ExactOutputData,
	ExactOutputError,
	ExactOutputSingleData,
	ExactOutputSingleError,
	ExecuteJobData,
	ExecuteJobError,
	ExportEosAccountData,
	ExportEosAccountError,
	ExportRippleAccountData,
	ExportRippleAccountError,
	ExportSolanaAccountData,
	ExportSolanaAccountError,
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
	FinancialDatasetsSearchFinancialsByLineItemsData,
	FinancialDatasetsSearchFinancialsByLineItemsError,
	FinancialDatasetsSearchFinancialsData,
	FinancialDatasetsSearchFinancialsError,
	GetAllReservesTokensData,
	GetAllReservesTokensError,
	GetAmountInData,
	GetAmountInError,
	GetAmountOut1Data,
	GetAmountOut1Error,
	GetAmountOut2Data,
	GetAmountOut2Error,
	GetAmountOutData,
	GetAmountOutError,
	GetAmountsInData,
	GetAmountsInError,
	GetAmountsOut1Data,
	GetAmountsOut1Error,
	GetAmountsOut2Data,
	GetAmountsOut2Error,
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
	GetZapQuoteData,
	GetZapQuoteError,
	GlobalCheckpointData,
	GlobalCheckpointError,
	IncreaseAmountData,
	IncreaseAmountError,
	IncreaseLiquidityData,
	IncreaseLiquidityError,
	IncreaseLockAmount1Data,
	IncreaseLockAmount1Error,
	IncreaseLockAmountData,
	IncreaseLockAmountError,
	IncreaseUnlockTime1Data,
	IncreaseUnlockTime1Error,
	IncreaseUnlockTime2Data,
	IncreaseUnlockTime2Error,
	IncreaseUnlockTimeData,
	IncreaseUnlockTimeError,
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
	JupiterGetQuoteData,
	JupiterGetQuoteError,
	JupiterGetSwapInstructionsData,
	JupiterGetSwapInstructionsError,
	JupiterGetTokensData,
	JupiterGetTokensError,
	JupiterSwapData,
	JupiterSwapError,
	KillGauge1Data,
	KillGauge1Error,
	KillGauge2Data,
	KillGauge2Error,
	KillGaugeData,
	KillGaugeError,
	LastVotedData,
	LastVotedError,
	LendingPoolBorrowData,
	LendingPoolBorrowError,
	LendingPoolDepositData,
	LendingPoolDepositError,
	LendingPoolFlashLoanData,
	LendingPoolFlashLoanError,
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
	LendingPoolLiquidationCallData,
	LendingPoolLiquidationCallError,
	LendingPoolRepayData,
	LendingPoolRepayError,
	LendingPoolSetUserUseReserveAsCollateralData,
	LendingPoolSetUserUseReserveAsCollateralError,
	LendingPoolSwapBorrowRateModeData,
	LendingPoolSwapBorrowRateModeError,
	LeveragerDeleverageErc20Data,
	LeveragerDeleverageErc20Error,
	LeveragerDeleverageNativeData,
	LeveragerDeleverageNativeError,
	LeveragerExecuteOperationData,
	LeveragerExecuteOperationError,
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
	LeveragerGrantRoleData,
	LeveragerGrantRoleError,
	LeveragerHasRoleData,
	LeveragerHasRoleError,
	LeveragerIsPausedData,
	LeveragerIsPausedError,
	LeveragerLeverageErc20Data,
	LeveragerLeverageErc20Error,
	LeveragerLeverageNativeData,
	LeveragerLeverageNativeError,
	LeveragerPauseData,
	LeveragerPauseError,
	LeveragerRenounceRoleData,
	LeveragerRenounceRoleError,
	LeveragerRevokeRoleData,
	LeveragerRevokeRoleError,
	LeveragerSupportsInterfaceData,
	LeveragerSupportsInterfaceError,
	LeveragerUnpauseData,
	LeveragerUnpauseError,
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
	LifiPostQuoteData,
	LifiPostQuoteError,
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
	LitecoinCreateLitecoinAccountData,
	LitecoinCreateLitecoinAccountError,
	LitecoinDeleteLitecoinAccountData,
	LitecoinDeleteLitecoinAccountError,
	LitecoinExportLitecoinAccountData,
	LitecoinExportLitecoinAccountError,
	LitecoinGetLitecoinAccountData,
	LitecoinGetLitecoinAccountError,
	LitecoinSignLitecoinTransactionData,
	LitecoinSignLitecoinTransactionError,
	LitecoinSignLitecoinTransactionWithMemoData,
	LitecoinSignLitecoinTransactionWithMemoError,
	MarkNotificationAsReadData,
	MarkNotificationAsReadError,
	Merge1Data,
	Merge1Error,
	Merge2Data,
	Merge2Error,
	MergeData,
	MergeError,
	MintData,
	MintError,
	Multicall1Data,
	Multicall1Error,
	MulticallData,
	MulticallError,
	MultiSignSolanaTransactionData,
	MultiSignSolanaTransactionError,
	NameData,
	NameError,
	NotifyRewardAmount1Data,
	NotifyRewardAmount1Error,
	NotifyRewardAmount2Data,
	NotifyRewardAmount2Error,
	NotifyRewardAmountData,
	NotifyRewardAmountError,
	OdosAssembleTransactionData,
	OdosAssembleTransactionError,
	OdosGetContractInfoData,
	OdosGetContractInfoError,
	OdosGetCurrentBlockData,
	OdosGetCurrentBlockError,
	OdosGetExecutorAddressData,
	OdosGetExecutorAddressError,
	OdosGetLiquiditySourcesData,
	OdosGetLiquiditySourcesError,
	OdosGetQuoteData,
	OdosGetQuoteError,
	OdosGetRouterAddressData,
	OdosGetRouterAddressError,
	OdosGetSupportedChainsData,
	OdosGetSupportedChainsError,
	OdosGetSupportedTokensData,
	OdosGetSupportedTokensError,
	OdosSwapTokensData,
	OdosSwapTokensError,
	OnRamperCheckoutData,
	OnRamperCheckoutError,
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
	PermitData,
	PermitError,
	PermitTypehashData,
	PermitTypehashError,
	Poke1Data,
	Poke1Error,
	Poke2Data,
	Poke2Error,
	PokeData,
	PokeError,
	PoolVoteLengthData,
	PoolVoteLengthError,
	PositionsData,
	PositionsError,
	PostOrderData,
	PostOrderError,
	QuoteAddLiquidityData,
	QuoteAddLiquidityError,
	QuoteData,
	QuoteError,
	QuoteRemoveLiquidityData,
	QuoteRemoveLiquidityError,
	RefundEth1Data,
	RefundEth1Error,
	RefundEthData,
	RefundEthError,
	RemoveLiquidity1Data,
	RemoveLiquidity1Error,
	RemoveLiquidityData,
	RemoveLiquidityError,
	RemoveLiquidityEth1Data,
	RemoveLiquidityEth1Error,
	RemoveLiquidityEthData,
	RemoveLiquidityEthError,
	RemoveLiquidityEthSupportingFeeOnTransferTokensData,
	RemoveLiquidityEthSupportingFeeOnTransferTokensError,
	RemoveLiquidityEthWithPermitData,
	RemoveLiquidityEthWithPermitError,
	RemoveLiquidityEthWithPermitSupportingFeeOnTransferTokensData,
	RemoveLiquidityEthWithPermitSupportingFeeOnTransferTokensError,
	RemoveLiquidityWithPermitData,
	RemoveLiquidityWithPermitError,
	Reset1Data,
	Reset1Error,
	Reset2Data,
	Reset2Error,
	ResetData,
	ResetError,
	ReviveGauge1Data,
	ReviveGauge1Error,
	ReviveGauge2Data,
	ReviveGauge2Error,
	ReviveGaugeData,
	ReviveGaugeError,
	SafeTransferFrom1Data,
	SafeTransferFrom1Error,
	SafeTransferFromData,
	SafeTransferFromError,
	ScheduleJobData,
	ScheduleJobError,
	SelfPermitAllowedData,
	SelfPermitAllowedError,
	SelfPermitAllowedIfNecessaryData,
	SelfPermitAllowedIfNecessaryError,
	SelfPermitData,
	SelfPermitError,
	SelfPermitIfNecessaryData,
	SelfPermitIfNecessaryError,
	SetApprovalForAll1Data,
	SetApprovalForAll1Error,
	SetApprovalForAll2Data,
	SetApprovalForAll2Error,
	SetApprovalForAllData,
	SetApprovalForAllError,
	SetClaimApprovalData,
	SetClaimApprovalError,
	SetClaimApprovalForAllData,
	SetClaimApprovalForAllError,
	SignEosTransactionData,
	SignEosTransactionError,
	SignRippleTransactionData,
	SignRippleTransactionError,
	SignSolanaTransactionData,
	SignSolanaTransactionError,
	SortTokensData,
	SortTokensError,
	Split1Data,
	Split1Error,
	Split2Data,
	Split2Error,
	SplitData,
	SplitError,
	SupportsInterfaceData,
	SupportsInterfaceError,
	SwapData,
	SwapError,
	SwapEthForExactTokensData,
	SwapEthForExactTokensError,
	SwapExactEthForTokens1Data,
	SwapExactEthForTokens1Error,
	SwapExactEthForTokens2Data,
	SwapExactEthForTokens2Error,
	SwapExactEthForTokensData,
	SwapExactEthForTokensError,
	SwapExactEthForTokensSupportingFeeOnTransferTokensData,
	SwapExactEthForTokensSupportingFeeOnTransferTokensError,
	SwapExactTokensForEth1Data,
	SwapExactTokensForEth1Error,
	SwapExactTokensForEth2Data,
	SwapExactTokensForEth2Error,
	SwapExactTokensForEthData,
	SwapExactTokensForEthError,
	SwapExactTokensForEthSupportingFeeOnTransferTokensData,
	SwapExactTokensForEthSupportingFeeOnTransferTokensError,
	SwapExactTokensForTokens1Data,
	SwapExactTokensForTokens1Error,
	SwapExactTokensForTokens2Data,
	SwapExactTokensForTokens2Error,
	SwapExactTokensForTokensData,
	SwapExactTokensForTokensError,
	SwapExactTokensForTokensSupportingFeeOnTransferTokensData,
	SwapExactTokensForTokensSupportingFeeOnTransferTokensError,
	SwapTokensForExactEthData,
	SwapTokensForExactEthError,
	SwapTokensForExactTokensData,
	SwapTokensForExactTokensError,
	SweepToken1Data,
	SweepToken1Error,
	SweepTokenData,
	SweepTokenError,
	SweepTokenWithFeeData,
	SweepTokenWithFeeError,
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
	TransferFrom1Data,
	TransferFrom1Error,
	TransferFrom2Data,
	TransferFrom2Error,
	TransferFrom3Data,
	TransferFrom3Error,
	TransferFromData,
	TransferFromError,
	TransferSolanaTransactionData,
	TransferSolanaTransactionError,
	TransferTokensSignSolanaTransactionData,
	TransferTokensSignSolanaTransactionError,
	TronCreateTronAccountData,
	TronCreateTronAccountError,
	TronDeleteTronAccountData,
	TronDeleteTronAccountError,
	TronExportTronAccountData,
	TronExportTronAccountError,
	TronGetTronAccountData,
	TronGetTronAccountError,
	TronListTronAccountsData,
	TronListTronAccountsError,
	TronSignTronTransactionData,
	TronSignTronTransactionError,
	UnlockPermanentData,
	UnlockPermanentError,
	UnsafeSwapExactTokensForTokensData,
	UnsafeSwapExactTokensForTokensError,
	UnscheduleJobData,
	UnscheduleJobError,
	UnwrapWeth91Data,
	UnwrapWeth91Error,
	UnwrapWeth9Data,
	UnwrapWeth9Error,
	UnwrapWeth9WithFeeData,
	UnwrapWeth9WithFeeError,
	UnwrapWethData,
	UnwrapWethError,
	UpdateBalanceAllowanceData,
	UpdateBalanceAllowanceError,
	UpdateFlowData,
	UpdateFlowError,
	Vote1Data,
	Vote1Error,
	Vote2Data,
	Vote2Error,
	VoteData,
	VoteError,
	VoteWithOptimalDistribution1Data,
	VoteWithOptimalDistribution1Error,
	VoteWithOptimalDistribution2Data,
	VoteWithOptimalDistribution2Error,
	VoteWithOptimalDistributionData,
	VoteWithOptimalDistributionError,
	VotingData,
	VotingError,
	Weth91Data,
	Weth91Error,
	Weth9Data,
	Weth9Error,
	Whitelist1Data,
	Whitelist1Error,
	Whitelist2Data,
	Whitelist2Error,
	WhitelistData,
	WhitelistError,
	Withdraw1Data,
	Withdraw1Error,
	WithdrawData,
	WithdrawError,
	WrapEthData,
	WrapEthError,
	ZapData,
	ZapError,
} from "../requests/types.gen";
import * as Common from "./common";
export const useAavev3PoolGetReserveData = <
	TData = Common.Aavev3PoolGetReserveDataDefaultResponse,
	TError = Aavev3PoolGetReserveDataError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Aavev3PoolGetReserveDataData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseAavev3PoolGetReserveDataKeyFn(clientOptions, queryKey),
		queryFn: () =>
			aavev3PoolGetReserveData({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAavev3PoolGetUserAccountData = <
	TData = Common.Aavev3PoolGetUserAccountDataDefaultResponse,
	TError = Aavev3PoolGetUserAccountDataError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Aavev3PoolGetUserAccountDataData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useAavev3PoolAddressProviderGetAclAdmin = <
	TData = Common.Aavev3PoolAddressProviderGetAclAdminDefaultResponse,
	TError = Aavev3PoolAddressProviderGetAclAdminError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Aavev3PoolAddressProviderGetAclAdminData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useAavev3PoolAddressProviderGetAclManager = <
	TData = Common.Aavev3PoolAddressProviderGetAclManagerDefaultResponse,
	TError = Aavev3PoolAddressProviderGetAclManagerError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Aavev3PoolAddressProviderGetAclManagerData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useAavev3PoolAddressProviderGetAddress = <
	TData = Common.Aavev3PoolAddressProviderGetAddressDefaultResponse,
	TError = Aavev3PoolAddressProviderGetAddressError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Aavev3PoolAddressProviderGetAddressData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useAavev3PoolAddressProviderGetMarketId = <
	TData = Common.Aavev3PoolAddressProviderGetMarketIdDefaultResponse,
	TError = Aavev3PoolAddressProviderGetMarketIdError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Aavev3PoolAddressProviderGetMarketIdData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useAavev3PoolAddressProviderGetPool = <
	TData = Common.Aavev3PoolAddressProviderGetPoolDefaultResponse,
	TError = Aavev3PoolAddressProviderGetPoolError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Aavev3PoolAddressProviderGetPoolData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useAavev3PoolAddressProviderGetPoolConfigurator = <
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
	useQuery<TData, TError>({
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
export const useAavev3PoolAddressProviderGetPriceOracle = <
	TData = Common.Aavev3PoolAddressProviderGetPriceOracleDefaultResponse,
	TError = Aavev3PoolAddressProviderGetPriceOracleError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Aavev3PoolAddressProviderGetPriceOracleData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useAavev3PoolAddressProviderRegistryGetAddressesProvider = <
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
	useQuery<TData, TError>({
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
export const useAavev3PoolAddressProviderRegistryGetAtokenTotalSupply = <
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
	useQuery<TData, TError>({
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
export const useAavev3PoolAddressProviderRegistryGetAllAtokens = <
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
	useQuery<TData, TError>({
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
export const useGetAllReservesTokens = <
	TData = Common.GetAllReservesTokensDefaultResponse,
	TError = GetAllReservesTokensError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetAllReservesTokensData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetAllReservesTokensKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getAllReservesTokens({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAavev3PoolAddressProviderRegistryGetDebtCeiling = <
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
	useQuery<TData, TError>({
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
export const useAavEv3RewardsGetRewardsByAsset = <
	TData = Common.AavEv3RewardsGetRewardsByAssetDefaultResponse,
	TError = AavEv3RewardsGetRewardsByAssetError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AavEv3RewardsGetRewardsByAssetData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useAavEv3RewardsGetUserRewards = <
	TData = Common.AavEv3RewardsGetUserRewardsDefaultResponse,
	TError = AavEv3RewardsGetUserRewardsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AavEv3RewardsGetUserRewardsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useAavEv3RewardsGetRewardsData = <
	TData = Common.AavEv3RewardsGetRewardsDataDefaultResponse,
	TError = AavEv3RewardsGetRewardsDataError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AavEv3RewardsGetRewardsDataData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useAavEv3IncentiveDataProviderGetFullReservesData = <
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
	useQuery<TData, TError>({
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
export const useAavEv3IncentiveDataProviderGetReservesData = <
	TData = Common.AavEv3IncentiveDataProviderGetReservesDataDefaultResponse,
	TError = AavEv3IncentiveDataProviderGetReservesDataError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AavEv3IncentiveDataProviderGetReservesDataData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useAavEv3IncentiveDataProviderGetUserReservesData = <
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
	useQuery<TData, TError>({
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
export const useAaveV3UiPoolDataProviderEthCurrencyUnit = <
	TData = Common.AaveV3UiPoolDataProviderEthCurrencyUnitDefaultResponse,
	TError = AaveV3UiPoolDataProviderEthCurrencyUnitError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AaveV3UiPoolDataProviderEthCurrencyUnitData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useGetReservesData = <
	TData = Common.GetReservesDataDefaultResponse,
	TError = GetReservesDataError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetReservesDataData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetReservesDataKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getReservesData({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAaveV3UiPoolDataProviderReservesList = <
	TData = Common.AaveV3UiPoolDataProviderReservesListDefaultResponse,
	TError = AaveV3UiPoolDataProviderReservesListError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AaveV3UiPoolDataProviderReservesListData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useAaveV3UiPoolDataProviderUserReservesData = <
	TData = Common.AaveV3UiPoolDataProviderUserReservesDataDefaultResponse,
	TError = AaveV3UiPoolDataProviderUserReservesDataError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AaveV3UiPoolDataProviderUserReservesDataData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useAaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregator =
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
		useQuery<TData, TError>({
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
export const useAaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregator =
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
		useQuery<TData, TError>({
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
export const useAaveV3WalletBalanceOf = <
	TData = Common.AaveV3WalletBalanceOfDefaultResponse,
	TError = AaveV3WalletBalanceOfError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AaveV3WalletBalanceOfData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseAaveV3WalletBalanceOfKeyFn(clientOptions, queryKey),
		queryFn: () =>
			aaveV3WalletBalanceOf({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAaveV3WalletBatchBalanceOf = <
	TData = Common.AaveV3WalletBatchBalanceOfDefaultResponse,
	TError = AaveV3WalletBatchBalanceOfError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AaveV3WalletBatchBalanceOfData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useAaveV3WalletUserWalletBalances = <
	TData = Common.AaveV3WalletUserWalletBalancesDefaultResponse,
	TError = AaveV3WalletUserWalletBalancesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AaveV3WalletUserWalletBalancesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useAccountsListEthereumAccounts = <
	TData = Common.AccountsListEthereumAccountsDefaultResponse,
	TError = AccountsListEthereumAccountsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AccountsListEthereumAccountsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useAccountsGetEthreumAccount = <
	TData = Common.AccountsGetEthreumAccountDefaultResponse,
	TError = AccountsGetEthreumAccountError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AccountsGetEthreumAccountData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseAccountsGetEthreumAccountKeyFn(clientOptions, queryKey),
		queryFn: () =>
			accountsGetEthreumAccount({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAccountsEthereumGetNonce = <
	TData = Common.AccountsEthereumGetNonceDefaultResponse,
	TError = AccountsEthereumGetNonceError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AccountsEthereumGetNonceData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseAccountsEthereumGetNonceKeyFn(clientOptions, queryKey),
		queryFn: () =>
			accountsEthereumGetNonce({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAccountsEthereumGetNativeBalance = <
	TData = Common.AccountsEthereumGetNativeBalanceDefaultResponse,
	TError = AccountsEthereumGetNativeBalanceError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AccountsEthereumGetNativeBalanceData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useAccountsSuggestGasPrice = <
	TData = Common.AccountsSuggestGasPriceDefaultResponse,
	TError = AccountsSuggestGasPriceError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AccountsSuggestGasPriceData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseAccountsSuggestGasPriceKeyFn(clientOptions, queryKey),
		queryFn: () =>
			accountsSuggestGasPrice({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAccountsExportEthreumAccount = <
	TData = Common.AccountsExportEthreumAccountDefaultResponse,
	TError = AccountsExportEthreumAccountError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<AccountsExportEthreumAccountData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useBitcoinListAccounts = <
	TData = Common.BitcoinListAccountsDefaultResponse,
	TError = BitcoinListAccountsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<BitcoinListAccountsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseBitcoinListAccountsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			bitcoinListAccounts({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useBitcoinBitcoinGetAccount = <
	TData = Common.BitcoinBitcoinGetAccountDefaultResponse,
	TError = BitcoinBitcoinGetAccountError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<BitcoinBitcoinGetAccountData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseBitcoinBitcoinGetAccountKeyFn(clientOptions, queryKey),
		queryFn: () =>
			bitcoinBitcoinGetAccount({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useBitcoinCashListAccounts = <
	TData = Common.BitcoinCashListAccountsDefaultResponse,
	TError = BitcoinCashListAccountsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<BitcoinCashListAccountsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseBitcoinCashListAccountsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			bitcoinCashListAccounts({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useBitcoinCashBitcoinCashGetAccount = <
	TData = Common.BitcoinCashBitcoinCashGetAccountDefaultResponse,
	TError = BitcoinCashBitcoinCashGetAccountError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<BitcoinCashBitcoinCashGetAccountData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useChartsGetChartAnalysis = <
	TData = Common.ChartsGetChartAnalysisDefaultResponse,
	TError = ChartsGetChartAnalysisError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<ChartsGetChartAnalysisData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseChartsGetChartAnalysisKeyFn(clientOptions, queryKey),
		queryFn: () =>
			chartsGetChartAnalysis({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useComponentsGetComponents = <
	TData = Common.ComponentsGetComponentsDefaultResponse,
	TError = ComponentsGetComponentsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<ComponentsGetComponentsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseComponentsGetComponentsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			componentsGetComponents({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useComponentsGetComponent = <
	TData = Common.ComponentsGetComponentDefaultResponse,
	TError = ComponentsGetComponentError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<ComponentsGetComponentData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseComponentsGetComponentKeyFn(clientOptions, queryKey),
		queryFn: () =>
			componentsGetComponent({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useComponentsSearchComponents = <
	TData = Common.ComponentsSearchComponentsDefaultResponse,
	TError = ComponentsSearchComponentsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<ComponentsSearchComponentsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useComponentsGetComponentCapabilitiesDescription = <
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
	useQuery<TData, TError>({
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
export const useCosmosCosmosListAccounts = <
	TData = Common.CosmosCosmosListAccountsDefaultResponse,
	TError = CosmosCosmosListAccountsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<CosmosCosmosListAccountsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseCosmosCosmosListAccountsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			cosmosCosmosListAccounts({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useCosmosCosmosGetAccount = <
	TData = Common.CosmosCosmosGetAccountDefaultResponse,
	TError = CosmosCosmosGetAccountError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<CosmosCosmosGetAccountData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseCosmosCosmosGetAccountKeyFn(clientOptions, queryKey),
		queryFn: () =>
			cosmosCosmosGetAccount({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useDataGetWalletTokenBalances = <
	TData = Common.DataGetWalletTokenBalancesDefaultResponse,
	TError = DataGetWalletTokenBalancesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<DataGetWalletTokenBalancesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useDataGetWalletTransactionHistory = <
	TData = Common.DataGetWalletTransactionHistoryDefaultResponse,
	TError = DataGetWalletTransactionHistoryError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<DataGetWalletTransactionHistoryData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useDataGetTokensMetadata = <
	TData = Common.DataGetTokensMetadataDefaultResponse,
	TError = DataGetTokensMetadataError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<DataGetTokensMetadataData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseDataGetTokensMetadataKeyFn(clientOptions, queryKey),
		queryFn: () =>
			dataGetTokensMetadata({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useDataGetWalletNfTs = <
	TData = Common.DataGetWalletNfTsDefaultResponse,
	TError = DataGetWalletNfTsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<DataGetWalletNfTsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseDataGetWalletNfTsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			dataGetWalletNfTs({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useDataGetUserWalletPortfolio = <
	TData = Common.DataGetUserWalletPortfolioDefaultResponse,
	TError = DataGetUserWalletPortfolioError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<DataGetUserWalletPortfolioData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useDataGetPortfolioFetchStatus = <
	TData = Common.DataGetPortfolioFetchStatusDefaultResponse,
	TError = DataGetPortfolioFetchStatusError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<DataGetPortfolioFetchStatusData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useDogeCoinListAccounts = <
	TData = Common.DogeCoinListAccountsDefaultResponse,
	TError = DogeCoinListAccountsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<DogeCoinListAccountsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseDogeCoinListAccountsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			dogeCoinListAccounts({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useDogecoinDogeCoinGetAccountDetails = <
	TData = Common.DogecoinDogeCoinGetAccountDetailsDefaultResponse,
	TError = DogecoinDogeCoinGetAccountDetailsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<DogecoinDogeCoinGetAccountDetailsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useListEosAccounts = <
	TData = Common.ListEosAccountsDefaultResponse,
	TError = ListEosAccountsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<ListEosAccountsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseListEosAccountsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			listEosAccounts({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetEosAccount = <
	TData = Common.GetEosAccountDefaultResponse,
	TError = GetEosAccountError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetEosAccountData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetEosAccountKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getEosAccount({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc20GetErc20TokenDecimals = <
	TData = Common.Erc20GetErc20TokenDecimalsDefaultResponse,
	TError = Erc20GetErc20TokenDecimalsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc20GetErc20TokenDecimalsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useErc20GetErc20TokenSymbol = <
	TData = Common.Erc20GetErc20TokenSymbolDefaultResponse,
	TError = Erc20GetErc20TokenSymbolError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc20GetErc20TokenSymbolData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseErc20GetErc20TokenSymbolKeyFn(clientOptions, queryKey),
		queryFn: () =>
			erc20GetErc20TokenSymbol({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc20GetErc20TokenName = <
	TData = Common.Erc20GetErc20TokenNameDefaultResponse,
	TError = Erc20GetErc20TokenNameError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc20GetErc20TokenNameData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseErc20GetErc20TokenNameKeyFn(clientOptions, queryKey),
		queryFn: () =>
			erc20GetErc20TokenName({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc20GetErc20TokenTotalSupply = <
	TData = Common.Erc20GetErc20TokenTotalSupplyDefaultResponse,
	TError = Erc20GetErc20TokenTotalSupplyError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc20GetErc20TokenTotalSupplyData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useErc20GetErc20TokenBalance = <
	TData = Common.Erc20GetErc20TokenBalanceDefaultResponse,
	TError = Erc20GetErc20TokenBalanceError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc20GetErc20TokenBalanceData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseErc20GetErc20TokenBalanceKeyFn(clientOptions, queryKey),
		queryFn: () =>
			erc20GetErc20TokenBalance({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc20GetErc20TokenAllowance = <
	TData = Common.Erc20GetErc20TokenAllowanceDefaultResponse,
	TError = Erc20GetErc20TokenAllowanceError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc20GetErc20TokenAllowanceData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useErc4626GetErc4626Asset = <
	TData = Common.Erc4626GetErc4626AssetDefaultResponse,
	TError = Erc4626GetErc4626AssetError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626AssetData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseErc4626GetErc4626AssetKeyFn(clientOptions, queryKey),
		queryFn: () =>
			erc4626GetErc4626Asset({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc4626GetErc4626TotalAssets = <
	TData = Common.Erc4626GetErc4626TotalAssetsDefaultResponse,
	TError = Erc4626GetErc4626TotalAssetsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626TotalAssetsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useErc4626GetErc4626ConvertToShares = <
	TData = Common.Erc4626GetErc4626ConvertToSharesDefaultResponse,
	TError = Erc4626GetErc4626ConvertToSharesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626ConvertToSharesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useErc4626GetErc4626ConvertToAssets = <
	TData = Common.Erc4626GetErc4626ConvertToAssetsDefaultResponse,
	TError = Erc4626GetErc4626ConvertToAssetsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626ConvertToAssetsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useErc4626GetErc4626MaxDeposit = <
	TData = Common.Erc4626GetErc4626MaxDepositDefaultResponse,
	TError = Erc4626GetErc4626MaxDepositError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626MaxDepositData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useErc4626GetErc4626MaxMint = <
	TData = Common.Erc4626GetErc4626MaxMintDefaultResponse,
	TError = Erc4626GetErc4626MaxMintError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626MaxMintData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseErc4626GetErc4626MaxMintKeyFn(clientOptions, queryKey),
		queryFn: () =>
			erc4626GetErc4626MaxMint({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc4626GetErc4626MaxWithdraw = <
	TData = Common.Erc4626GetErc4626MaxWithdrawDefaultResponse,
	TError = Erc4626GetErc4626MaxWithdrawError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626MaxWithdrawData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useErc4626GetErc4626MaxRedeem = <
	TData = Common.Erc4626GetErc4626MaxRedeemDefaultResponse,
	TError = Erc4626GetErc4626MaxRedeemError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626MaxRedeemData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useErc4626GetErc4626PreviewDeposit = <
	TData = Common.Erc4626GetErc4626PreviewDepositDefaultResponse,
	TError = Erc4626GetErc4626PreviewDepositError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626PreviewDepositData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useErc4626GetErc4626PreviewMint = <
	TData = Common.Erc4626GetErc4626PreviewMintDefaultResponse,
	TError = Erc4626GetErc4626PreviewMintError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626PreviewMintData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useErc4626GetErc4626PreviewWithdraw = <
	TData = Common.Erc4626GetErc4626PreviewWithdrawDefaultResponse,
	TError = Erc4626GetErc4626PreviewWithdrawError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626PreviewWithdrawData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useErc4626GetErc4626PreviewRedeem = <
	TData = Common.Erc4626GetErc4626PreviewRedeemDefaultResponse,
	TError = Erc4626GetErc4626PreviewRedeemError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626PreviewRedeemData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useErc4626GetErc4626TotalSupply = <
	TData = Common.Erc4626GetErc4626TotalSupplyDefaultResponse,
	TError = Erc4626GetErc4626TotalSupplyError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626TotalSupplyData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useErc4626GetErc4626BalanceOf = <
	TData = Common.Erc4626GetErc4626BalanceOfDefaultResponse,
	TError = Erc4626GetErc4626BalanceOfError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626BalanceOfData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useErc4626GetErc4626Allowance = <
	TData = Common.Erc4626GetErc4626AllowanceDefaultResponse,
	TError = Erc4626GetErc4626AllowanceError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc4626GetErc4626AllowanceData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useErc721GetErc721BalanceOf = <
	TData = Common.Erc721GetErc721BalanceOfDefaultResponse,
	TError = Erc721GetErc721BalanceOfError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc721GetErc721BalanceOfData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseErc721GetErc721BalanceOfKeyFn(clientOptions, queryKey),
		queryFn: () =>
			erc721GetErc721BalanceOf({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc721GetErc721OwnerOf = <
	TData = Common.Erc721GetErc721OwnerOfDefaultResponse,
	TError = Erc721GetErc721OwnerOfError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc721GetErc721OwnerOfData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseErc721GetErc721OwnerOfKeyFn(clientOptions, queryKey),
		queryFn: () =>
			erc721GetErc721OwnerOf({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc721GetErc721Name = <
	TData = Common.Erc721GetErc721NameDefaultResponse,
	TError = Erc721GetErc721NameError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc721GetErc721NameData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseErc721GetErc721NameKeyFn(clientOptions, queryKey),
		queryFn: () =>
			erc721GetErc721Name({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc721GetErc721Symbol = <
	TData = Common.Erc721GetErc721SymbolDefaultResponse,
	TError = Erc721GetErc721SymbolError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc721GetErc721SymbolData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseErc721GetErc721SymbolKeyFn(clientOptions, queryKey),
		queryFn: () =>
			erc721GetErc721Symbol({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc721GetErc721TokenUri = <
	TData = Common.Erc721GetErc721TokenUriDefaultResponse,
	TError = Erc721GetErc721TokenUriError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc721GetErc721TokenUriData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseErc721GetErc721TokenUriKeyFn(clientOptions, queryKey),
		queryFn: () =>
			erc721GetErc721TokenUri({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc721GetErc721Approved = <
	TData = Common.Erc721GetErc721ApprovedDefaultResponse,
	TError = Erc721GetErc721ApprovedError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc721GetErc721ApprovedData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseErc721GetErc721ApprovedKeyFn(clientOptions, queryKey),
		queryFn: () =>
			erc721GetErc721Approved({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useErc721GetErc721IsApprovedForAll = <
	TData = Common.Erc721GetErc721IsApprovedForAllDefaultResponse,
	TError = Erc721GetErc721IsApprovedForAllError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Erc721GetErc721IsApprovedForAllData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useFinancialDatasetsGetCompanyFacts = <
	TData = Common.FinancialDatasetsGetCompanyFactsDefaultResponse,
	TError = FinancialDatasetsGetCompanyFactsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<FinancialDatasetsGetCompanyFactsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useFinancialDatasetsGetIncomeStatements = <
	TData = Common.FinancialDatasetsGetIncomeStatementsDefaultResponse,
	TError = FinancialDatasetsGetIncomeStatementsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<FinancialDatasetsGetIncomeStatementsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useFinancialDatasetsGetBalanceSheets = <
	TData = Common.FinancialDatasetsGetBalanceSheetsDefaultResponse,
	TError = FinancialDatasetsGetBalanceSheetsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<FinancialDatasetsGetBalanceSheetsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useFinancialDatasetsGetCashFlowStatements = <
	TData = Common.FinancialDatasetsGetCashFlowStatementsDefaultResponse,
	TError = FinancialDatasetsGetCashFlowStatementsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<FinancialDatasetsGetCashFlowStatementsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useFinancialDatasetsGetSegmentedRevenues = <
	TData = Common.FinancialDatasetsGetSegmentedRevenuesDefaultResponse,
	TError = FinancialDatasetsGetSegmentedRevenuesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<FinancialDatasetsGetSegmentedRevenuesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useFinancialDatasetsGetAllFinancials = <
	TData = Common.FinancialDatasetsGetAllFinancialsDefaultResponse,
	TError = FinancialDatasetsGetAllFinancialsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<FinancialDatasetsGetAllFinancialsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useFinancialDatasetsGetAvailableTickers = <
	TData = Common.FinancialDatasetsGetAvailableTickersDefaultResponse,
	TError = FinancialDatasetsGetAvailableTickersError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<FinancialDatasetsGetAvailableTickersData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useFinancialDatasetsGetInsiderTransactions = <
	TData = Common.FinancialDatasetsGetInsiderTransactionsDefaultResponse,
	TError = FinancialDatasetsGetInsiderTransactionsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<FinancialDatasetsGetInsiderTransactionsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useFinancialDatasetsGetOptionsChain = <
	TData = Common.FinancialDatasetsGetOptionsChainDefaultResponse,
	TError = FinancialDatasetsGetOptionsChainError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<FinancialDatasetsGetOptionsChainData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useFinancialDatasetsGetPrices = <
	TData = Common.FinancialDatasetsGetPricesDefaultResponse,
	TError = FinancialDatasetsGetPricesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<FinancialDatasetsGetPricesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useFinancialDatasetsGetPriceSnapshot = <
	TData = Common.FinancialDatasetsGetPriceSnapshotDefaultResponse,
	TError = FinancialDatasetsGetPriceSnapshotError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<FinancialDatasetsGetPriceSnapshotData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useJupiterGetProgramIdToLabel = <
	TData = Common.JupiterGetProgramIdToLabelDefaultResponse,
	TError = JupiterGetProgramIdToLabelError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<JupiterGetProgramIdToLabelData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useJupiterGetIndexedRouteMap = <
	TData = Common.JupiterGetIndexedRouteMapDefaultResponse,
	TError = JupiterGetIndexedRouteMapError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<JupiterGetIndexedRouteMapData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseJupiterGetIndexedRouteMapKeyFn(clientOptions, queryKey),
		queryFn: () =>
			jupiterGetIndexedRouteMap({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useJupiterGetTokens = <
	TData = Common.JupiterGetTokensDefaultResponse,
	TError = JupiterGetTokensError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<JupiterGetTokensData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseJupiterGetTokensKeyFn(clientOptions, queryKey),
		queryFn: () =>
			jupiterGetTokens({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLendingPoolGetFlashLoanPremiumTotal = <
	TData = Common.LendingPoolGetFlashLoanPremiumTotalDefaultResponse,
	TError = LendingPoolGetFlashLoanPremiumTotalError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LendingPoolGetFlashLoanPremiumTotalData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useLendingPoolGetLendingPoolRevision = <
	TData = Common.LendingPoolGetLendingPoolRevisionDefaultResponse,
	TError = LendingPoolGetLendingPoolRevisionError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LendingPoolGetLendingPoolRevisionData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useLendingPoolGetMaxNumberReserves = <
	TData = Common.LendingPoolGetMaxNumberReservesDefaultResponse,
	TError = LendingPoolGetMaxNumberReservesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LendingPoolGetMaxNumberReservesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useLendingPoolGetMaxStableRateBorrowSizePercent = <
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
	useQuery<TData, TError>({
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
export const useLendingPoolGetReserveData = <
	TData = Common.LendingPoolGetReserveDataDefaultResponse,
	TError = LendingPoolGetReserveDataError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LendingPoolGetReserveDataData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseLendingPoolGetReserveDataKeyFn(clientOptions, queryKey),
		queryFn: () =>
			lendingPoolGetReserveData({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLendingPoolGetUserAccountData = <
	TData = Common.LendingPoolGetUserAccountDataDefaultResponse,
	TError = LendingPoolGetUserAccountDataError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LendingPoolGetUserAccountDataData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useLendingPoolGetReservesList = <
	TData = Common.LendingPoolGetReservesListDefaultResponse,
	TError = LendingPoolGetReservesListError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LendingPoolGetReservesListData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useLendingPoolGetAddressesProvider = <
	TData = Common.LendingPoolGetAddressesProviderDefaultResponse,
	TError = LendingPoolGetAddressesProviderError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LendingPoolGetAddressesProviderData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useLendingPoolIsPaused = <
	TData = Common.LendingPoolIsPausedDefaultResponse,
	TError = LendingPoolIsPausedError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LendingPoolIsPausedData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseLendingPoolIsPausedKeyFn(clientOptions, queryKey),
		queryFn: () =>
			lendingPoolIsPaused({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLeveragerGetAddressesProvider = <
	TData = Common.LeveragerGetAddressesProviderDefaultResponse,
	TError = LeveragerGetAddressesProviderError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LeveragerGetAddressesProviderData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useLeveragerGetDefaultAdminRole = <
	TData = Common.LeveragerGetDefaultAdminRoleDefaultResponse,
	TError = LeveragerGetDefaultAdminRoleError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LeveragerGetDefaultAdminRoleData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useLeveragerGetLendingPool = <
	TData = Common.LeveragerGetLendingPoolDefaultResponse,
	TError = LeveragerGetLendingPoolError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LeveragerGetLendingPoolData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseLeveragerGetLendingPoolKeyFn(clientOptions, queryKey),
		queryFn: () =>
			leveragerGetLendingPool({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLeveragerGetMinHf = <
	TData = Common.LeveragerGetMinHfDefaultResponse,
	TError = LeveragerGetMinHfError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LeveragerGetMinHfData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseLeveragerGetMinHfKeyFn(clientOptions, queryKey),
		queryFn: () =>
			leveragerGetMinHf({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLeveragerIsPaused = <
	TData = Common.LeveragerIsPausedDefaultResponse,
	TError = LeveragerIsPausedError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LeveragerIsPausedData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseLeveragerIsPausedKeyFn(clientOptions, queryKey),
		queryFn: () =>
			leveragerIsPaused({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLeveragerGetWeth = <
	TData = Common.LeveragerGetWethDefaultResponse,
	TError = LeveragerGetWethError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LeveragerGetWethData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseLeveragerGetWethKeyFn(clientOptions, queryKey),
		queryFn: () =>
			leveragerGetWeth({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLeveragerGetRoleAdmin = <
	TData = Common.LeveragerGetRoleAdminDefaultResponse,
	TError = LeveragerGetRoleAdminError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LeveragerGetRoleAdminData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseLeveragerGetRoleAdminKeyFn(clientOptions, queryKey),
		queryFn: () =>
			leveragerGetRoleAdmin({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLeveragerHasRole = <
	TData = Common.LeveragerHasRoleDefaultResponse,
	TError = LeveragerHasRoleError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LeveragerHasRoleData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseLeveragerHasRoleKeyFn(clientOptions, queryKey),
		queryFn: () =>
			leveragerHasRole({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLeveragerSupportsInterface = <
	TData = Common.LeveragerSupportsInterfaceDefaultResponse,
	TError = LeveragerSupportsInterfaceError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LeveragerSupportsInterfaceData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useLifiGetQuote = <
	TData = Common.LifiGetQuoteDefaultResponse,
	TError = LifiGetQuoteError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LifiGetQuoteData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseLifiGetQuoteKeyFn(clientOptions, queryKey),
		queryFn: () =>
			lifiGetQuote({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLifiGetStatus = <
	TData = Common.LifiGetStatusDefaultResponse,
	TError = LifiGetStatusError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LifiGetStatusData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseLifiGetStatusKeyFn(clientOptions, queryKey),
		queryFn: () =>
			lifiGetStatus({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLifiGetChains = <
	TData = Common.LifiGetChainsDefaultResponse,
	TError = LifiGetChainsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LifiGetChainsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseLifiGetChainsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			lifiGetChains({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTools = <
	TData = Common.GetToolsDefaultResponse,
	TError = GetToolsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetToolsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetToolsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTools({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLifiGetTokens = <
	TData = Common.LifiGetTokensDefaultResponse,
	TError = LifiGetTokensError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<unknown, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseLifiGetTokensKeyFn(clientOptions, queryKey),
		queryFn: () =>
			lifiGetTokens({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLifiGetTokenDetails = <
	TData = Common.LifiGetTokenDetailsDefaultResponse,
	TError = LifiGetTokenDetailsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LifiGetTokenDetailsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseLifiGetTokenDetailsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			lifiGetTokenDetails({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLifiGetConnections = <
	TData = Common.LifiGetConnectionsDefaultResponse,
	TError = LifiGetConnectionsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LifiGetConnectionsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseLifiGetConnectionsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			lifiGetConnections({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLifiGetAllPossibleConnections = <
	TData = Common.LifiGetAllPossibleConnectionsDefaultResponse,
	TError = LifiGetAllPossibleConnectionsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LifiGetAllPossibleConnectionsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useListLitecoinAccounts = <
	TData = Common.ListLitecoinAccountsDefaultResponse,
	TError = ListLitecoinAccountsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<ListLitecoinAccountsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseListLitecoinAccountsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			listLitecoinAccounts({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLitecoinGetLitecoinAccount = <
	TData = Common.LitecoinGetLitecoinAccountDefaultResponse,
	TError = LitecoinGetLitecoinAccountError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LitecoinGetLitecoinAccountData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useGetAssets = <
	TData = Common.GetAssetsDefaultResponse,
	TError = GetAssetsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetAssetsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetAssetsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getAssets({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetAssetByAddress = <
	TData = Common.GetAssetByAddressDefaultResponse,
	TError = GetAssetByAddressError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetAssetByAddressData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetAssetByAddressKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getAssetByAddress({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetPools = <
	TData = Common.GetPoolsDefaultResponse,
	TError = GetPoolsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetPoolsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetPoolsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getPools({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetPoolByAddress = <
	TData = Common.GetPoolByAddressDefaultResponse,
	TError = GetPoolByAddressError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetPoolByAddressData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetPoolByAddressKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getPoolByAddress({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetPoolsByType = <
	TData = Common.GetPoolsByTypeDefaultResponse,
	TError = GetPoolsByTypeError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetPoolsByTypeData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetPoolsByTypeKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getPoolsByType({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTopAprPools = <
	TData = Common.GetTopAprPoolsDefaultResponse,
	TError = GetTopAprPoolsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTopAprPoolsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetTopAprPoolsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTopAprPools({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTotalValueLocked = <
	TData = Common.GetTotalValueLockedDefaultResponse,
	TError = GetTotalValueLockedError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTotalValueLockedData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetTotalValueLockedKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTotalValueLocked({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useCalculateOptimalVoteDistribution = <
	TData = Common.CalculateOptimalVoteDistributionDefaultResponse,
	TError = CalculateOptimalVoteDistributionError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<CalculateOptimalVoteDistributionData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useGetBalanceOf = <
	TData = Common.GetBalanceOfDefaultResponse,
	TError = GetBalanceOfError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetBalanceOfData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetBalanceOfKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getBalanceOf({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetOwnerOf = <
	TData = Common.GetOwnerOfDefaultResponse,
	TError = GetOwnerOfError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetOwnerOfData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetOwnerOfKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getOwnerOf({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTokenUri = <
	TData = Common.GetTokenUriDefaultResponse,
	TError = GetTokenUriError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTokenUriData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetTokenUriKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTokenUri({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetLockDetails = <
	TData = Common.GetLockDetailsDefaultResponse,
	TError = GetLockDetailsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetLockDetailsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetLockDetailsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getLockDetails({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTotalSupply = <
	TData = Common.GetTotalSupplyDefaultResponse,
	TError = GetTotalSupplyError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTotalSupplyData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetTotalSupplyKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTotalSupply({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTokenOfOwnerByIndex = <
	TData = Common.GetTokenOfOwnerByIndexDefaultResponse,
	TError = GetTokenOfOwnerByIndexError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTokenOfOwnerByIndexData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetTokenOfOwnerByIndexKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTokenOfOwnerByIndex({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTokenByIndex = <
	TData = Common.GetTokenByIndexDefaultResponse,
	TError = GetTokenByIndexError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTokenByIndexData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetTokenByIndexKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTokenByIndex({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetName = <
	TData = Common.GetNameDefaultResponse,
	TError = GetNameError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetNameData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetNameKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getName({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetSymbol = <
	TData = Common.GetSymbolDefaultResponse,
	TError = GetSymbolError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetSymbolData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetSymbolKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getSymbol({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetApproved = <
	TData = Common.GetApprovedDefaultResponse,
	TError = GetApprovedError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetApprovedData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetApprovedKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getApproved({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useIsApprovedForAll = <
	TData = Common.IsApprovedForAllDefaultResponse,
	TError = IsApprovedForAllError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<IsApprovedForAllData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseIsApprovedForAllKeyFn(clientOptions, queryKey),
		queryFn: () =>
			isApprovedForAll({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetBalanceOfNft = <
	TData = Common.GetBalanceOfNftDefaultResponse,
	TError = GetBalanceOfNftError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetBalanceOfNftData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetBalanceOfNftKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getBalanceOfNft({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetBalanceOfNftAt = <
	TData = Common.GetBalanceOfNftAtDefaultResponse,
	TError = GetBalanceOfNftAtError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetBalanceOfNftAtData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetBalanceOfNftAtKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getBalanceOfNftAt({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTotalNftsMinted = <
	TData = Common.GetTotalNftsMintedDefaultResponse,
	TError = GetTotalNftsMintedError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTotalNftsMintedData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetTotalNftsMintedKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTotalNftsMinted({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetDelegates = <
	TData = Common.GetDelegatesDefaultResponse,
	TError = GetDelegatesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetDelegatesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetDelegatesKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getDelegates({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetVotes = <
	TData = Common.GetVotesDefaultResponse,
	TError = GetVotesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetVotesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetVotesKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getVotes({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetPastVotes = <
	TData = Common.GetPastVotesDefaultResponse,
	TError = GetPastVotesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetPastVotesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetPastVotesKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getPastVotes({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetVestedPayout = <
	TData = Common.GetVestedPayoutDefaultResponse,
	TError = GetVestedPayoutError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetVestedPayoutData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetVestedPayoutKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getVestedPayout({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetVestedPayoutAtTime = <
	TData = Common.GetVestedPayoutAtTimeDefaultResponse,
	TError = GetVestedPayoutAtTimeError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetVestedPayoutAtTimeData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetVestedPayoutAtTimeKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getVestedPayoutAtTime({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetVestingPayout = <
	TData = Common.GetVestingPayoutDefaultResponse,
	TError = GetVestingPayoutError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetVestingPayoutData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetVestingPayoutKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getVestingPayout({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetVestingPeriod = <
	TData = Common.GetVestingPeriodDefaultResponse,
	TError = GetVestingPeriodError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetVestingPeriodData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetVestingPeriodKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getVestingPeriod({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetFactory = <
	TData = Common.GetFactoryDefaultResponse,
	TError = GetFactoryError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetFactoryData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetFactoryKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getFactory({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetWeth = <
	TData = Common.GetWethDefaultResponse,
	TError = GetWethError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetWethData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetWethKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getWeth({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetAmountOut = <
	TData = Common.GetAmountOutDefaultResponse,
	TError = GetAmountOutError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetAmountOutData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetAmountOutKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getAmountOut({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetAmountsOut = <
	TData = Common.GetAmountsOutDefaultResponse,
	TError = GetAmountsOutError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetAmountsOutData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetAmountsOutKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getAmountsOut({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTotalWeight = <
	TData = Common.GetTotalWeightDefaultResponse,
	TError = GetTotalWeightError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTotalWeightData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetTotalWeightKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTotalWeight({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetWeights = <
	TData = Common.GetWeightsDefaultResponse,
	TError = GetWeightsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetWeightsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetWeightsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getWeights({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useIsGauge = <
	TData = Common.IsGaugeDefaultResponse,
	TError = IsGaugeError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<IsGaugeData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseIsGaugeKeyFn(clientOptions, queryKey),
		queryFn: () =>
			isGauge({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useIsWhitelisted = <
	TData = Common.IsWhitelistedDefaultResponse,
	TError = IsWhitelistedError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<IsWhitelistedData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseIsWhitelistedKeyFn(clientOptions, queryKey),
		queryFn: () =>
			isWhitelisted({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetLastVoted = <
	TData = Common.GetLastVotedDefaultResponse,
	TError = GetLastVotedError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetLastVotedData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetLastVotedKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getLastVoted({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetPoolVoteLength = <
	TData = Common.GetPoolVoteLengthDefaultResponse,
	TError = GetPoolVoteLengthError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetPoolVoteLengthData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetPoolVoteLengthKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getPoolVoteLength({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetJobResult = <
	TData = Common.GetJobResultDefaultResponse,
	TError = GetJobResultError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetJobResultData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetJobResultKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getJobResult({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetScheduledJobs = <
	TData = Common.GetScheduledJobsDefaultResponse,
	TError = GetScheduledJobsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetScheduledJobsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetScheduledJobsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getScheduledJobs({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useListJobs = <
	TData = Common.ListJobsDefaultResponse,
	TError = ListJobsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<ListJobsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseListJobsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			listJobs({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetJob = <
	TData = Common.GetJobDefaultResponse,
	TError = GetJobError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetJobData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetJobKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getJob({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useListFlows = <
	TData = Common.ListFlowsDefaultResponse,
	TError = ListFlowsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<ListFlowsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseListFlowsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			listFlows({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetFlow = <
	TData = Common.GetFlowDefaultResponse,
	TError = GetFlowError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetFlowData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetFlowKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getFlow({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useListUserDefinedFunctions = <
	TData = Common.ListUserDefinedFunctionsDefaultResponse,
	TError = ListUserDefinedFunctionsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<ListUserDefinedFunctionsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseListUserDefinedFunctionsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			listUserDefinedFunctions({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetNotifications = <
	TData = Common.GetNotificationsDefaultResponse,
	TError = GetNotificationsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetNotificationsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetNotificationsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getNotifications({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useOdosGetSupportedChains = <
	TData = Common.OdosGetSupportedChainsDefaultResponse,
	TError = OdosGetSupportedChainsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OdosGetSupportedChainsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseOdosGetSupportedChainsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			odosGetSupportedChains({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useOdosGetContractInfo = <
	TData = Common.OdosGetContractInfoDefaultResponse,
	TError = OdosGetContractInfoError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OdosGetContractInfoData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseOdosGetContractInfoKeyFn(clientOptions, queryKey),
		queryFn: () =>
			odosGetContractInfo({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useOdosGetRouterAddress = <
	TData = Common.OdosGetRouterAddressDefaultResponse,
	TError = OdosGetRouterAddressError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OdosGetRouterAddressData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseOdosGetRouterAddressKeyFn(clientOptions, queryKey),
		queryFn: () =>
			odosGetRouterAddress({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useOdosGetExecutorAddress = <
	TData = Common.OdosGetExecutorAddressDefaultResponse,
	TError = OdosGetExecutorAddressError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OdosGetExecutorAddressData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseOdosGetExecutorAddressKeyFn(clientOptions, queryKey),
		queryFn: () =>
			odosGetExecutorAddress({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useOdosGetLiquiditySources = <
	TData = Common.OdosGetLiquiditySourcesDefaultResponse,
	TError = OdosGetLiquiditySourcesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OdosGetLiquiditySourcesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseOdosGetLiquiditySourcesKeyFn(clientOptions, queryKey),
		queryFn: () =>
			odosGetLiquiditySources({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useOdosGetSupportedTokens = <
	TData = Common.OdosGetSupportedTokensDefaultResponse,
	TError = OdosGetSupportedTokensError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OdosGetSupportedTokensData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseOdosGetSupportedTokensKeyFn(clientOptions, queryKey),
		queryFn: () =>
			odosGetSupportedTokens({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useOdosGetCurrentBlock = <
	TData = Common.OdosGetCurrentBlockDefaultResponse,
	TError = OdosGetCurrentBlockError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OdosGetCurrentBlockData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseOdosGetCurrentBlockKeyFn(clientOptions, queryKey),
		queryFn: () =>
			odosGetCurrentBlock({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useOnRamperGetSupportedCurrencies = <
	TData = Common.OnRamperGetSupportedCurrenciesDefaultResponse,
	TError = OnRamperGetSupportedCurrenciesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OnRamperGetSupportedCurrenciesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useOnRamperGetSupportedPaymentTypes = <
	TData = Common.OnRamperGetSupportedPaymentTypesDefaultResponse,
	TError = OnRamperGetSupportedPaymentTypesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OnRamperGetSupportedPaymentTypesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useOnRamperGetSupportedPaymentTypesFiat = <
	TData = Common.OnRamperGetSupportedPaymentTypesFiatDefaultResponse,
	TError = OnRamperGetSupportedPaymentTypesFiatError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OnRamperGetSupportedPaymentTypesFiatData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useOnRamperGetSupportedDefaultsAll = <
	TData = Common.OnRamperGetSupportedDefaultsAllDefaultResponse,
	TError = OnRamperGetSupportedDefaultsAllError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OnRamperGetSupportedDefaultsAllData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useOnRamperGetSupportedAssets = <
	TData = Common.OnRamperGetSupportedAssetsDefaultResponse,
	TError = OnRamperGetSupportedAssetsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OnRamperGetSupportedAssetsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useOnRamperGetSupportedOnRampsAll = <
	TData = Common.OnRamperGetSupportedOnRampsAllDefaultResponse,
	TError = OnRamperGetSupportedOnRampsAllError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OnRamperGetSupportedOnRampsAllData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useOnRamperGetQuotesBuy = <
	TData = Common.OnRamperGetQuotesBuyDefaultResponse,
	TError = OnRamperGetQuotesBuyError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OnRamperGetQuotesBuyData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseOnRamperGetQuotesBuyKeyFn(clientOptions, queryKey),
		queryFn: () =>
			onRamperGetQuotesBuy({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useOnRamperGetQuotesSell = <
	TData = Common.OnRamperGetQuotesSellDefaultResponse,
	TError = OnRamperGetQuotesSellError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OnRamperGetQuotesSellData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseOnRamperGetQuotesSellKeyFn(clientOptions, queryKey),
		queryFn: () =>
			onRamperGetQuotesSell({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetCollection = <
	TData = Common.GetCollectionDefaultResponse,
	TError = GetCollectionError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetCollectionData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetCollectionKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getCollection({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetNft = <
	TData = Common.GetNftDefaultResponse,
	TError = GetNftError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetNftData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetNftKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getNft({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetMessage = <
	TData = Common.GetMessageDefaultResponse,
	TError = GetMessageError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<unknown, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetMessageKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getMessage({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetMarkets = <
	TData = Common.GetMarketsDefaultResponse,
	TError = GetMarketsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetMarketsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetMarketsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getMarkets({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetMarket = <
	TData = Common.GetMarketDefaultResponse,
	TError = GetMarketError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetMarketData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetMarketKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getMarket({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetOrderBook = <
	TData = Common.GetOrderBookDefaultResponse,
	TError = GetOrderBookError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetOrderBookData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetOrderBookKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getOrderBook({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetOpenOrders = <
	TData = Common.GetOpenOrdersDefaultResponse,
	TError = GetOpenOrdersError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetOpenOrdersData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetOpenOrdersKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getOpenOrders({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetOrder = <
	TData = Common.GetOrderDefaultResponse,
	TError = GetOrderError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetOrderData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetOrderKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getOrder({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTrades = <
	TData = Common.GetTradesDefaultResponse,
	TError = GetTradesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTradesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetTradesKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTrades({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetNotifications1 = <
	TData = Common.GetNotifications1DefaultResponse,
	TError = GetNotifications1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetNotifications1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetNotifications1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getNotifications1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetBalanceAllowance = <
	TData = Common.GetBalanceAllowanceDefaultResponse,
	TError = GetBalanceAllowanceError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetBalanceAllowanceData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetBalanceAllowanceKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getBalanceAllowance({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetPricesHistory = <
	TData = Common.GetPricesHistoryDefaultResponse,
	TError = GetPricesHistoryError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetPricesHistoryData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetPricesHistoryKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getPricesHistory({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetMarketTradeEvents = <
	TData = Common.GetMarketTradeEventsDefaultResponse,
	TError = GetMarketTradeEventsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetMarketTradeEventsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetMarketTradeEventsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getMarketTradeEvents({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetPools1 = <
	TData = Common.GetPools1DefaultResponse,
	TError = GetPools1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetPools1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetPools1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getPools1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetPoolByAddress1 = <
	TData = Common.GetPoolByAddress1DefaultResponse,
	TError = GetPoolByAddress1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetPoolByAddress1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetPoolByAddress1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getPoolByAddress1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetPoolsByType1 = <
	TData = Common.GetPoolsByType1DefaultResponse,
	TError = GetPoolsByType1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetPoolsByType1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetPoolsByType1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getPoolsByType1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTopAprPools1 = <
	TData = Common.GetTopAprPools1DefaultResponse,
	TError = GetTopAprPools1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTopAprPools1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetTopAprPools1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTopAprPools1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTokens = <
	TData = Common.GetTokensDefaultResponse,
	TError = GetTokensError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTokensData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetTokensKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTokens({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetInfo = <
	TData = Common.GetInfoDefaultResponse,
	TError = GetInfoError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetInfoData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetInfoKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getInfo({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTotalValueLocked1 = <
	TData = Common.GetTotalValueLocked1DefaultResponse,
	TError = GetTotalValueLocked1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTotalValueLocked1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetTotalValueLocked1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTotalValueLocked1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useCalculateOptimalVoteDistribution1 = <
	TData = Common.CalculateOptimalVoteDistribution1DefaultResponse,
	TError = CalculateOptimalVoteDistribution1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<CalculateOptimalVoteDistribution1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useGetBalanceOf1 = <
	TData = Common.GetBalanceOf1DefaultResponse,
	TError = GetBalanceOf1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetBalanceOf1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetBalanceOf1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getBalanceOf1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetOwnerOf1 = <
	TData = Common.GetOwnerOf1DefaultResponse,
	TError = GetOwnerOf1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetOwnerOf1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetOwnerOf1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getOwnerOf1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTokenUri1 = <
	TData = Common.GetTokenUri1DefaultResponse,
	TError = GetTokenUri1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTokenUri1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetTokenUri1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTokenUri1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTotalSupply1 = <
	TData = Common.GetTotalSupply1DefaultResponse,
	TError = GetTotalSupply1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTotalSupply1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetTotalSupply1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTotalSupply1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetBalanceOfNft1 = <
	TData = Common.GetBalanceOfNft1DefaultResponse,
	TError = GetBalanceOfNft1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetBalanceOfNft1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetBalanceOfNft1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getBalanceOfNft1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetLocked = <
	TData = Common.GetLockedDefaultResponse,
	TError = GetLockedError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetLockedData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetLockedKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getLocked({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetVotes1 = <
	TData = Common.GetVotes1DefaultResponse,
	TError = GetVotes1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetVotes1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetVotes1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getVotes1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetPastVotes1 = <
	TData = Common.GetPastVotes1DefaultResponse,
	TError = GetPastVotes1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetPastVotes1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetPastVotes1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getPastVotes1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetDelegates1 = <
	TData = Common.GetDelegates1DefaultResponse,
	TError = GetDelegates1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetDelegates1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetDelegates1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getDelegates1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetFactory1 = <
	TData = Common.GetFactory1DefaultResponse,
	TError = GetFactory1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetFactory1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetFactory1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getFactory1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetAmountOut1 = <
	TData = Common.GetAmountOut1DefaultResponse,
	TError = GetAmountOut1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetAmountOut1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetAmountOut1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getAmountOut1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetAmountsOut1 = <
	TData = Common.GetAmountsOut1DefaultResponse,
	TError = GetAmountsOut1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetAmountsOut1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetAmountsOut1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getAmountsOut1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetReserves = <
	TData = Common.GetReservesDefaultResponse,
	TError = GetReservesError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetReservesData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetReservesKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getReserves({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useIsPair = <
	TData = Common.IsPairDefaultResponse,
	TError = IsPairError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<IsPairData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseIsPairKeyFn(clientOptions, queryKey),
		queryFn: () =>
			isPair({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const usePairFor = <
	TData = Common.PairForDefaultResponse,
	TError = PairForError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<PairForData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UsePairForKeyFn(clientOptions, queryKey),
		queryFn: () =>
			pairFor({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useQuoteAddLiquidity = <
	TData = Common.QuoteAddLiquidityDefaultResponse,
	TError = QuoteAddLiquidityError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<QuoteAddLiquidityData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseQuoteAddLiquidityKeyFn(clientOptions, queryKey),
		queryFn: () =>
			quoteAddLiquidity({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useQuoteRemoveLiquidity = <
	TData = Common.QuoteRemoveLiquidityDefaultResponse,
	TError = QuoteRemoveLiquidityError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<QuoteRemoveLiquidityData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseQuoteRemoveLiquidityKeyFn(clientOptions, queryKey),
		queryFn: () =>
			quoteRemoveLiquidity({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useSortTokens = <
	TData = Common.SortTokensDefaultResponse,
	TError = SortTokensError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<SortTokensData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseSortTokensKeyFn(clientOptions, queryKey),
		queryFn: () =>
			sortTokens({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetWeth1 = <
	TData = Common.GetWeth1DefaultResponse,
	TError = GetWeth1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetWeth1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetWeth1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getWeth1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTotalWeight1 = <
	TData = Common.GetTotalWeight1DefaultResponse,
	TError = GetTotalWeight1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTotalWeight1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetTotalWeight1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTotalWeight1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetWeights1 = <
	TData = Common.GetWeights1DefaultResponse,
	TError = GetWeights1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetWeights1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetWeights1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getWeights1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useIsGauge1 = <
	TData = Common.IsGauge1DefaultResponse,
	TError = IsGauge1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<IsGauge1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseIsGauge1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			isGauge1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useIsWhitelisted1 = <
	TData = Common.IsWhitelisted1DefaultResponse,
	TError = IsWhitelisted1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<IsWhitelisted1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseIsWhitelisted1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			isWhitelisted1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetLastVoted1 = <
	TData = Common.GetLastVoted1DefaultResponse,
	TError = GetLastVoted1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetLastVoted1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetLastVoted1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getLastVoted1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useListRippleAccounts = <
	TData = Common.ListRippleAccountsDefaultResponse,
	TError = ListRippleAccountsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<ListRippleAccountsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseListRippleAccountsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			listRippleAccounts({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetRippleAccount = <
	TData = Common.GetRippleAccountDefaultResponse,
	TError = GetRippleAccountError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetRippleAccountData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetRippleAccountKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getRippleAccount({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useListSolanaAccounts = <
	TData = Common.ListSolanaAccountsDefaultResponse,
	TError = ListSolanaAccountsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<ListSolanaAccountsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseListSolanaAccountsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			listSolanaAccounts({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetSolanaAccount = <
	TData = Common.GetSolanaAccountDefaultResponse,
	TError = GetSolanaAccountError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetSolanaAccountData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetSolanaAccountKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getSolanaAccount({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetFusions = <
	TData = Common.GetFusionsDefaultResponse,
	TError = GetFusionsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetFusionsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetFusionsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getFusions({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetFusionByAddress = <
	TData = Common.GetFusionByAddressDefaultResponse,
	TError = GetFusionByAddressError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetFusionByAddressData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetFusionByAddressKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getFusionByAddress({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetFusionsByType = <
	TData = Common.GetFusionsByTypeDefaultResponse,
	TError = GetFusionsByTypeError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetFusionsByTypeData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetFusionsByTypeKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getFusionsByType({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTopAprFusions = <
	TData = Common.GetTopAprFusionsDefaultResponse,
	TError = GetTopAprFusionsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTopAprFusionsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetTopAprFusionsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTopAprFusions({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTotalValueLocked2 = <
	TData = Common.GetTotalValueLocked2DefaultResponse,
	TError = GetTotalValueLocked2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTotalValueLocked2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetTotalValueLocked2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTotalValueLocked2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTopTokens = <
	TData = Common.GetTopTokensDefaultResponse,
	TError = GetTopTokensError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTopTokensData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetTopTokensKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTopTokens({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTopPairs = <
	TData = Common.GetTopPairsDefaultResponse,
	TError = GetTopPairsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTopPairsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetTopPairsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTopPairs({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useCalculateOptimalVoteDistribution2 = <
	TData = Common.CalculateOptimalVoteDistribution2DefaultResponse,
	TError = CalculateOptimalVoteDistribution2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<CalculateOptimalVoteDistribution2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
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
export const useGetQuote = <
	TData = Common.GetQuoteDefaultResponse,
	TError = GetQuoteError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetQuoteData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetQuoteKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getQuote({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetGasPrice = <
	TData = Common.GetGasPriceDefaultResponse,
	TError = GetGasPriceError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetGasPriceData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetGasPriceKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getGasPrice({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetSupportedChains = <
	TData = Common.GetSupportedChainsDefaultResponse,
	TError = GetSupportedChainsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetSupportedChainsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetSupportedChainsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getSupportedChains({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetSupportedProviders = <
	TData = Common.GetSupportedProvidersDefaultResponse,
	TError = GetSupportedProvidersError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetSupportedProvidersData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetSupportedProvidersKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getSupportedProviders({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useTronListTronAccounts = <
	TData = Common.TronListTronAccountsDefaultResponse,
	TError = TronListTronAccountsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<TronListTronAccountsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseTronListTronAccountsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			tronListTronAccounts({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useTronGetTronAccount = <
	TData = Common.TronGetTronAccountDefaultResponse,
	TError = TronGetTronAccountError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<TronGetTronAccountData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseTronGetTronAccountKeyFn(clientOptions, queryKey),
		queryFn: () =>
			tronGetTronAccount({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetWeth2 = <
	TData = Common.GetWeth2DefaultResponse,
	TError = GetWeth2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetWeth2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetWeth2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getWeth2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const usePositions = <
	TData = Common.PositionsDefaultResponse,
	TError = PositionsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<PositionsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UsePositionsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			positions({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useTokenOfOwnerByIndex = <
	TData = Common.TokenOfOwnerByIndexDefaultResponse,
	TError = TokenOfOwnerByIndexError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<TokenOfOwnerByIndexData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseTokenOfOwnerByIndexKeyFn(clientOptions, queryKey),
		queryFn: () =>
			tokenOfOwnerByIndex({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useBalanceOf = <
	TData = Common.BalanceOfDefaultResponse,
	TError = BalanceOfError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<BalanceOfData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseBalanceOfKeyFn(clientOptions, queryKey),
		queryFn: () =>
			balanceOf({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useDomainSeparator = <
	TData = Common.DomainSeparatorDefaultResponse,
	TError = DomainSeparatorError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<DomainSeparatorData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseDomainSeparatorKeyFn(clientOptions, queryKey),
		queryFn: () =>
			domainSeparator({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const usePermitTypehash = <
	TData = Common.PermitTypehashDefaultResponse,
	TError = PermitTypehashError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<PermitTypehashData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UsePermitTypehashKeyFn(clientOptions, queryKey),
		queryFn: () =>
			permitTypehash({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useWeth9 = <
	TData = Common.Weth9DefaultResponse,
	TError = Weth9Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Weth9Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseWeth9KeyFn(clientOptions, queryKey),
		queryFn: () =>
			weth9({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useFactory = <
	TData = Common.FactoryDefaultResponse,
	TError = FactoryError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<FactoryData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseFactoryKeyFn(clientOptions, queryKey),
		queryFn: () =>
			factory({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useName = <
	TData = Common.NameDefaultResponse,
	TError = NameError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<NameData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseNameKeyFn(clientOptions, queryKey),
		queryFn: () =>
			name({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useSymbol = <
	TData = Common.SymbolDefaultResponse,
	TError = SymbolError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<SymbolData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseSymbolKeyFn(clientOptions, queryKey),
		queryFn: () =>
			symbol({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useTokenUri = <
	TData = Common.TokenUriDefaultResponse,
	TError = TokenUriError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<TokenUriData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseTokenUriKeyFn(clientOptions, queryKey),
		queryFn: () =>
			tokenUri({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useBaseUri = <
	TData = Common.BaseUriDefaultResponse,
	TError = BaseUriError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<BaseUriData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseBaseUriKeyFn(clientOptions, queryKey),
		queryFn: () =>
			baseUri({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useOwnerOf = <
	TData = Common.OwnerOfDefaultResponse,
	TError = OwnerOfError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<OwnerOfData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseOwnerOfKeyFn(clientOptions, queryKey),
		queryFn: () =>
			ownerOf({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetApproved1 = <
	TData = Common.GetApproved1DefaultResponse,
	TError = GetApproved1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetApproved1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetApproved1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getApproved1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useIsApprovedForAll1 = <
	TData = Common.IsApprovedForAll1DefaultResponse,
	TError = IsApprovedForAll1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<IsApprovedForAll1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseIsApprovedForAll1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			isApprovedForAll1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useTotalSupply = <
	TData = Common.TotalSupplyDefaultResponse,
	TError = TotalSupplyError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<TotalSupplyData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseTotalSupplyKeyFn(clientOptions, queryKey),
		queryFn: () =>
			totalSupply({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useTokenByIndex = <
	TData = Common.TokenByIndexDefaultResponse,
	TError = TokenByIndexError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<TokenByIndexData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseTokenByIndexKeyFn(clientOptions, queryKey),
		queryFn: () =>
			tokenByIndex({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useSupportsInterface = <
	TData = Common.SupportsInterfaceDefaultResponse,
	TError = SupportsInterfaceError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<SupportsInterfaceData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseSupportsInterfaceKeyFn(clientOptions, queryKey),
		queryFn: () =>
			supportsInterface({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useWeth91 = <
	TData = Common.Weth91DefaultResponse,
	TError = Weth91Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Weth91Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseWeth91KeyFn(clientOptions, queryKey),
		queryFn: () =>
			weth91({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useFactory1 = <
	TData = Common.Factory1DefaultResponse,
	TError = Factory1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<Factory1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseFactory1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			factory1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetBalanceOf2 = <
	TData = Common.GetBalanceOf2DefaultResponse,
	TError = GetBalanceOf2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetBalanceOf2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetBalanceOf2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getBalanceOf2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetOwnerOf2 = <
	TData = Common.GetOwnerOf2DefaultResponse,
	TError = GetOwnerOf2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetOwnerOf2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetOwnerOf2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getOwnerOf2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTokenUri2 = <
	TData = Common.GetTokenUri2DefaultResponse,
	TError = GetTokenUri2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTokenUri2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetTokenUri2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTokenUri2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetApproved2 = <
	TData = Common.GetApproved2DefaultResponse,
	TError = GetApproved2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetApproved2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetApproved2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getApproved2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useIsApprovedForAll2 = <
	TData = Common.IsApprovedForAll2DefaultResponse,
	TError = IsApprovedForAll2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<IsApprovedForAll2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseIsApprovedForAll2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			isApprovedForAll2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetBalanceOfNft2 = <
	TData = Common.GetBalanceOfNft2DefaultResponse,
	TError = GetBalanceOfNft2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetBalanceOfNft2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetBalanceOfNft2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getBalanceOfNft2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTotalSupply2 = <
	TData = Common.GetTotalSupply2DefaultResponse,
	TError = GetTotalSupply2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTotalSupply2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetTotalSupply2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTotalSupply2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetLocked1 = <
	TData = Common.GetLocked1DefaultResponse,
	TError = GetLocked1Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetLocked1Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetLocked1KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getLocked1({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetLockedEnd = <
	TData = Common.GetLockedEndDefaultResponse,
	TError = GetLockedEndError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetLockedEndData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetLockedEndKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getLockedEnd({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetLastUserSlope = <
	TData = Common.GetLastUserSlopeDefaultResponse,
	TError = GetLastUserSlopeError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetLastUserSlopeData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetLastUserSlopeKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getLastUserSlope({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetUserPointHistory = <
	TData = Common.GetUserPointHistoryDefaultResponse,
	TError = GetUserPointHistoryError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetUserPointHistoryData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetUserPointHistoryKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getUserPointHistory({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetUserPointHistoryTs = <
	TData = Common.GetUserPointHistoryTsDefaultResponse,
	TError = GetUserPointHistoryTsError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetUserPointHistoryTsData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetUserPointHistoryTsKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getUserPointHistoryTs({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetBalanceOfAtNft = <
	TData = Common.GetBalanceOfAtNftDefaultResponse,
	TError = GetBalanceOfAtNftError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetBalanceOfAtNftData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetBalanceOfAtNftKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getBalanceOfAtNft({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTotalSupplyAt = <
	TData = Common.GetTotalSupplyAtDefaultResponse,
	TError = GetTotalSupplyAtError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTotalSupplyAtData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetTotalSupplyAtKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTotalSupplyAt({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTotalSupplyAtT = <
	TData = Common.GetTotalSupplyAtTDefaultResponse,
	TError = GetTotalSupplyAtTError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTotalSupplyAtTData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetTotalSupplyAtTKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTotalSupplyAtT({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetPastVotes2 = <
	TData = Common.GetPastVotes2DefaultResponse,
	TError = GetPastVotes2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetPastVotes2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetPastVotes2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getPastVotes2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetPastTotalSupply = <
	TData = Common.GetPastTotalSupplyDefaultResponse,
	TError = GetPastTotalSupplyError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetPastTotalSupplyData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetPastTotalSupplyKeyFn(clientOptions, queryKey),
		queryFn: () =>
			getPastTotalSupply({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetVotes2 = <
	TData = Common.GetVotes2DefaultResponse,
	TError = GetVotes2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetVotes2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetVotes2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getVotes2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetDelegates2 = <
	TData = Common.GetDelegates2DefaultResponse,
	TError = GetDelegates2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetDelegates2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetDelegates2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getDelegates2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetTotalWeight2 = <
	TData = Common.GetTotalWeight2DefaultResponse,
	TError = GetTotalWeight2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetTotalWeight2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetTotalWeight2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getTotalWeight2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useGetWeights2 = <
	TData = Common.GetWeights2DefaultResponse,
	TError = GetWeights2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<GetWeights2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseGetWeights2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			getWeights2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useIsGauge2 = <
	TData = Common.IsGauge2DefaultResponse,
	TError = IsGauge2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<IsGauge2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseIsGauge2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			isGauge2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useIsWhitelisted2 = <
	TData = Common.IsWhitelisted2DefaultResponse,
	TError = IsWhitelisted2Error,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<IsWhitelisted2Data, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseIsWhitelisted2KeyFn(clientOptions, queryKey),
		queryFn: () =>
			isWhitelisted2({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useLastVoted = <
	TData = Common.LastVotedDefaultResponse,
	TError = LastVotedError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<LastVotedData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UseLastVotedKeyFn(clientOptions, queryKey),
		queryFn: () =>
			lastVoted({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const usePoolVoteLength = <
	TData = Common.PoolVoteLengthDefaultResponse,
	TError = PoolVoteLengthError,
	TQueryKey extends Array<unknown> = unknown[],
>(
	clientOptions: Options<PoolVoteLengthData, true>,
	queryKey?: TQueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
	useQuery<TData, TError>({
		queryKey: Common.UsePoolVoteLengthKeyFn(clientOptions, queryKey),
		queryFn: () =>
			poolVoteLength({ ...clientOptions }).then(
				(response) => response.data as TData,
			) as TData,
		...options,
	});
export const useAavev3PoolSupply = <
	TData = Common.Aavev3PoolSupplyMutationResult,
	TError = Aavev3PoolSupplyError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Aavev3PoolSupplyData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Aavev3PoolSupplyData, true>, TContext>({
		mutationKey: Common.UseAavev3PoolSupplyKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			aavev3PoolSupply(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useAavev3PoolWithdraw = <
	TData = Common.Aavev3PoolWithdrawMutationResult,
	TError = Aavev3PoolWithdrawError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Aavev3PoolWithdrawData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Aavev3PoolWithdrawData, true>, TContext>({
		mutationKey: Common.UseAavev3PoolWithdrawKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			aavev3PoolWithdraw(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useAavev3PoolBorrow = <
	TData = Common.Aavev3PoolBorrowMutationResult,
	TError = Aavev3PoolBorrowError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Aavev3PoolBorrowData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Aavev3PoolBorrowData, true>, TContext>({
		mutationKey: Common.UseAavev3PoolBorrowKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			aavev3PoolBorrow(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useAavev3PoolRepay = <
	TData = Common.Aavev3PoolRepayMutationResult,
	TError = Aavev3PoolRepayError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Aavev3PoolRepayData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Aavev3PoolRepayData, true>, TContext>({
		mutationKey: Common.UseAavev3PoolRepayKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			aavev3PoolRepay(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useAavev3PoolSetUserUseReserveAsCollateral = <
	TData = Common.Aavev3PoolSetUserUseReserveAsCollateralMutationResult,
	TError = Aavev3PoolSetUserUseReserveAsCollateralError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Aavev3PoolSetUserUseReserveAsCollateralData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Aavev3PoolSetUserUseReserveAsCollateralData, true>,
		TContext
	>({
		mutationKey:
			Common.UseAavev3PoolSetUserUseReserveAsCollateralKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			aavev3PoolSetUserUseReserveAsCollateral(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useAavev3PoolLiquidationCall = <
	TData = Common.Aavev3PoolLiquidationCallMutationResult,
	TError = Aavev3PoolLiquidationCallError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Aavev3PoolLiquidationCallData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Aavev3PoolLiquidationCallData, true>,
		TContext
	>({
		mutationKey: Common.UseAavev3PoolLiquidationCallKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			aavev3PoolLiquidationCall(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useAavev3PoolAddressProviderSetAclAdmin = <
	TData = Common.Aavev3PoolAddressProviderSetAclAdminMutationResult,
	TError = Aavev3PoolAddressProviderSetAclAdminError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Aavev3PoolAddressProviderSetAclAdminData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Aavev3PoolAddressProviderSetAclAdminData, true>,
		TContext
	>({
		mutationKey:
			Common.UseAavev3PoolAddressProviderSetAclAdminKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			aavev3PoolAddressProviderSetAclAdmin(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useAavev3PoolAddressProviderSetAclManager = <
	TData = Common.Aavev3PoolAddressProviderSetAclManagerMutationResult,
	TError = Aavev3PoolAddressProviderSetAclManagerError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Aavev3PoolAddressProviderSetAclManagerData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Aavev3PoolAddressProviderSetAclManagerData, true>,
		TContext
	>({
		mutationKey:
			Common.UseAavev3PoolAddressProviderSetAclManagerKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			aavev3PoolAddressProviderSetAclManager(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useAavev3PoolAddressProviderSetAddress = <
	TData = Common.Aavev3PoolAddressProviderSetAddressMutationResult,
	TError = Aavev3PoolAddressProviderSetAddressError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Aavev3PoolAddressProviderSetAddressData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Aavev3PoolAddressProviderSetAddressData, true>,
		TContext
	>({
		mutationKey:
			Common.UseAavev3PoolAddressProviderSetAddressKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			aavev3PoolAddressProviderSetAddress(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useAavev3PoolAddressProviderSetMarketId = <
	TData = Common.Aavev3PoolAddressProviderSetMarketIdMutationResult,
	TError = Aavev3PoolAddressProviderSetMarketIdError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Aavev3PoolAddressProviderSetMarketIdData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Aavev3PoolAddressProviderSetMarketIdData, true>,
		TContext
	>({
		mutationKey:
			Common.UseAavev3PoolAddressProviderSetMarketIdKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			aavev3PoolAddressProviderSetMarketId(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useAavev3PoolAddressProviderSetPoolConfiguratorImpl = <
	TData = Common.Aavev3PoolAddressProviderSetPoolConfiguratorImplMutationResult,
	TError = Aavev3PoolAddressProviderSetPoolConfiguratorImplError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Aavev3PoolAddressProviderSetPoolConfiguratorImplData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Aavev3PoolAddressProviderSetPoolConfiguratorImplData, true>,
		TContext
	>({
		mutationKey:
			Common.UseAavev3PoolAddressProviderSetPoolConfiguratorImplKeyFn(
				mutationKey,
			),
		mutationFn: (clientOptions) =>
			aavev3PoolAddressProviderSetPoolConfiguratorImpl(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useAavev3PoolAddressProviderSetPoolImpl = <
	TData = Common.Aavev3PoolAddressProviderSetPoolImplMutationResult,
	TError = Aavev3PoolAddressProviderSetPoolImplError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Aavev3PoolAddressProviderSetPoolImplData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Aavev3PoolAddressProviderSetPoolImplData, true>,
		TContext
	>({
		mutationKey:
			Common.UseAavev3PoolAddressProviderSetPoolImplKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			aavev3PoolAddressProviderSetPoolImpl(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useAavEv3RewardsClaimRewards = <
	TData = Common.AavEv3RewardsClaimRewardsMutationResult,
	TError = AavEv3RewardsClaimRewardsError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<AavEv3RewardsClaimRewardsData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<AavEv3RewardsClaimRewardsData, true>,
		TContext
	>({
		mutationKey: Common.UseAavEv3RewardsClaimRewardsKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			aavEv3RewardsClaimRewards(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useAavEv3RewardsClaimRewardsOnBehalf = <
	TData = Common.AavEv3RewardsClaimRewardsOnBehalfMutationResult,
	TError = AavEv3RewardsClaimRewardsOnBehalfError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<AavEv3RewardsClaimRewardsOnBehalfData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<AavEv3RewardsClaimRewardsOnBehalfData, true>,
		TContext
	>({
		mutationKey: Common.UseAavEv3RewardsClaimRewardsOnBehalfKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			aavEv3RewardsClaimRewardsOnBehalf(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useAavEv3RewardsClaimRewardsToSelf = <
	TData = Common.AavEv3RewardsClaimRewardsToSelfMutationResult,
	TError = AavEv3RewardsClaimRewardsToSelfError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<AavEv3RewardsClaimRewardsToSelfData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<AavEv3RewardsClaimRewardsToSelfData, true>,
		TContext
	>({
		mutationKey: Common.UseAavEv3RewardsClaimRewardsToSelfKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			aavEv3RewardsClaimRewardsToSelf(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useAavEv3RewardsClaimAllRewards = <
	TData = Common.AavEv3RewardsClaimAllRewardsMutationResult,
	TError = AavEv3RewardsClaimAllRewardsError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<AavEv3RewardsClaimAllRewardsData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<AavEv3RewardsClaimAllRewardsData, true>,
		TContext
	>({
		mutationKey: Common.UseAavEv3RewardsClaimAllRewardsKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			aavEv3RewardsClaimAllRewards(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useAavEv3RewardsClaimAllRewardsOnBehalf = <
	TData = Common.AavEv3RewardsClaimAllRewardsOnBehalfMutationResult,
	TError = AavEv3RewardsClaimAllRewardsOnBehalfError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<AavEv3RewardsClaimAllRewardsOnBehalfData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<AavEv3RewardsClaimAllRewardsOnBehalfData, true>,
		TContext
	>({
		mutationKey:
			Common.UseAavEv3RewardsClaimAllRewardsOnBehalfKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			aavEv3RewardsClaimAllRewardsOnBehalf(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useAavEv3RewardsClaimAllRewardsToSelf = <
	TData = Common.AavEv3RewardsClaimAllRewardsToSelfMutationResult,
	TError = AavEv3RewardsClaimAllRewardsToSelfError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<AavEv3RewardsClaimAllRewardsToSelfData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<AavEv3RewardsClaimAllRewardsToSelfData, true>,
		TContext
	>({
		mutationKey: Common.UseAavEv3RewardsClaimAllRewardsToSelfKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			aavEv3RewardsClaimAllRewardsToSelf(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useAccountsCreateEthereumAccount = <
	TData = Common.AccountsCreateEthereumAccountMutationResult,
	TError = AccountsCreateEthereumAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<AccountsCreateEthereumAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<AccountsCreateEthereumAccountData, true>,
		TContext
	>({
		mutationKey: Common.UseAccountsCreateEthereumAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			accountsCreateEthereumAccount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useAccountsEstimateGas = <
	TData = Common.AccountsEstimateGasMutationResult,
	TError = AccountsEstimateGasError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<AccountsEstimateGasData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<AccountsEstimateGasData, true>, TContext>({
		mutationKey: Common.UseAccountsEstimateGasKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			accountsEstimateGas(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useAccountsTransferEth = <
	TData = Common.AccountsTransferEthMutationResult,
	TError = AccountsTransferEthError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<AccountsTransferEthData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<AccountsTransferEthData, true>, TContext>({
		mutationKey: Common.UseAccountsTransferEthKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			accountsTransferEth(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useAccountsSignEthreumMessage = <
	TData = Common.AccountsSignEthreumMessageMutationResult,
	TError = AccountsSignEthreumMessageError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<AccountsSignEthreumMessageData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<AccountsSignEthreumMessageData, true>,
		TContext
	>({
		mutationKey: Common.UseAccountsSignEthreumMessageKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			accountsSignEthreumMessage(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useAccountsSignEthereumTransaction = <
	TData = Common.AccountsSignEthereumTransactionMutationResult,
	TError = AccountsSignEthereumTransactionError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<AccountsSignEthereumTransactionData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<AccountsSignEthereumTransactionData, true>,
		TContext
	>({
		mutationKey: Common.UseAccountsSignEthereumTransactionKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			accountsSignEthereumTransaction(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useAccountsSignEthereumTypedData = <
	TData = Common.AccountsSignEthereumTypedDataMutationResult,
	TError = AccountsSignEthereumTypedDataError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<AccountsSignEthereumTypedDataData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<AccountsSignEthereumTypedDataData, true>,
		TContext
	>({
		mutationKey: Common.UseAccountsSignEthereumTypedDataKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			accountsSignEthereumTypedData(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useAccountsDeployContract = <
	TData = Common.AccountsDeployContractMutationResult,
	TError = AccountsDeployContractError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<AccountsDeployContractData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<AccountsDeployContractData, true>,
		TContext
	>({
		mutationKey: Common.UseAccountsDeployContractKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			accountsDeployContract(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useAccountsBroadcastEthreeumTransaction = <
	TData = Common.AccountsBroadcastEthreeumTransactionMutationResult,
	TError = AccountsBroadcastEthreeumTransactionError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<AccountsBroadcastEthreeumTransactionData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<AccountsBroadcastEthreeumTransactionData, true>,
		TContext
	>({
		mutationKey:
			Common.UseAccountsBroadcastEthreeumTransactionKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			accountsBroadcastEthreeumTransaction(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useAccountsEncodeAbiData = <
	TData = Common.AccountsEncodeAbiDataMutationResult,
	TError = AccountsEncodeAbiDataError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<AccountsEncodeAbiDataData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<AccountsEncodeAbiDataData, true>,
		TContext
	>({
		mutationKey: Common.UseAccountsEncodeAbiDataKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			accountsEncodeAbiData(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useBitcoinBitcoinCreateAccount = <
	TData = Common.BitcoinBitcoinCreateAccountMutationResult,
	TError = BitcoinBitcoinCreateAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<BitcoinBitcoinCreateAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<BitcoinBitcoinCreateAccountData, true>,
		TContext
	>({
		mutationKey: Common.UseBitcoinBitcoinCreateAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			bitcoinBitcoinCreateAccount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useBitcoinBitcoinSignTransaction = <
	TData = Common.BitcoinBitcoinSignTransactionMutationResult,
	TError = BitcoinBitcoinSignTransactionError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<BitcoinBitcoinSignTransactionData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<BitcoinBitcoinSignTransactionData, true>,
		TContext
	>({
		mutationKey: Common.UseBitcoinBitcoinSignTransactionKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			bitcoinBitcoinSignTransaction(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useBitcoinBitcoinCreateSrc20Inscription = <
	TData = Common.BitcoinBitcoinCreateSrc20InscriptionMutationResult,
	TError = BitcoinBitcoinCreateSrc20InscriptionError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<BitcoinBitcoinCreateSrc20InscriptionData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<BitcoinBitcoinCreateSrc20InscriptionData, true>,
		TContext
	>({
		mutationKey:
			Common.UseBitcoinBitcoinCreateSrc20InscriptionKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			bitcoinBitcoinCreateSrc20Inscription(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useBitcoinBitcoinCreateBrc20Transaction = <
	TData = Common.BitcoinBitcoinCreateBrc20TransactionMutationResult,
	TError = BitcoinBitcoinCreateBrc20TransactionError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<BitcoinBitcoinCreateBrc20TransactionData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<BitcoinBitcoinCreateBrc20TransactionData, true>,
		TContext
	>({
		mutationKey:
			Common.UseBitcoinBitcoinCreateBrc20TransactionKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			bitcoinBitcoinCreateBrc20Transaction(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useBitcoinBitcoinGenerateUnsignedPsbtHex = <
	TData = Common.BitcoinBitcoinGenerateUnsignedPsbtHexMutationResult,
	TError = BitcoinBitcoinGenerateUnsignedPsbtHexError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<BitcoinBitcoinGenerateUnsignedPsbtHexData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<BitcoinBitcoinGenerateUnsignedPsbtHexData, true>,
		TContext
	>({
		mutationKey:
			Common.UseBitcoinBitcoinGenerateUnsignedPsbtHexKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			bitcoinBitcoinGenerateUnsignedPsbtHex(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useBitcoinBitcoinExportAccount = <
	TData = Common.BitcoinBitcoinExportAccountMutationResult,
	TError = BitcoinBitcoinExportAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<BitcoinBitcoinExportAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<BitcoinBitcoinExportAccountData, true>,
		TContext
	>({
		mutationKey: Common.UseBitcoinBitcoinExportAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			bitcoinBitcoinExportAccount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useBitcoinBitcoinDeleteAccount = <
	TData = Common.BitcoinBitcoinDeleteAccountMutationResult,
	TError = BitcoinBitcoinDeleteAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<BitcoinBitcoinDeleteAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<BitcoinBitcoinDeleteAccountData, true>,
		TContext
	>({
		mutationKey: Common.UseBitcoinBitcoinDeleteAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			bitcoinBitcoinDeleteAccount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useBitcoinCashBitcoinCashCreateAccount = <
	TData = Common.BitcoinCashBitcoinCashCreateAccountMutationResult,
	TError = BitcoinCashBitcoinCashCreateAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<BitcoinCashBitcoinCashCreateAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<BitcoinCashBitcoinCashCreateAccountData, true>,
		TContext
	>({
		mutationKey:
			Common.UseBitcoinCashBitcoinCashCreateAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			bitcoinCashBitcoinCashCreateAccount(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useBitcoinCashBitcoinCashExportAccount = <
	TData = Common.BitcoinCashBitcoinCashExportAccountMutationResult,
	TError = BitcoinCashBitcoinCashExportAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<BitcoinCashBitcoinCashExportAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<BitcoinCashBitcoinCashExportAccountData, true>,
		TContext
	>({
		mutationKey:
			Common.UseBitcoinCashBitcoinCashExportAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			bitcoinCashBitcoinCashExportAccount(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useBitcoinCashBitcoinCashDeleteAccount = <
	TData = Common.BitcoinCashBitcoinCashDeleteAccountMutationResult,
	TError = BitcoinCashBitcoinCashDeleteAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<BitcoinCashBitcoinCashDeleteAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<BitcoinCashBitcoinCashDeleteAccountData, true>,
		TContext
	>({
		mutationKey:
			Common.UseBitcoinCashBitcoinCashDeleteAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			bitcoinCashBitcoinCashDeleteAccount(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useBitcoinCashBitcoinCashSignTransaction = <
	TData = Common.BitcoinCashBitcoinCashSignTransactionMutationResult,
	TError = BitcoinCashBitcoinCashSignTransactionError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<BitcoinCashBitcoinCashSignTransactionData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<BitcoinCashBitcoinCashSignTransactionData, true>,
		TContext
	>({
		mutationKey:
			Common.UseBitcoinCashBitcoinCashSignTransactionKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			bitcoinCashBitcoinCashSignTransaction(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useBitcoinCashBitcoinCashSignTransactionWithMemo = <
	TData = Common.BitcoinCashBitcoinCashSignTransactionWithMemoMutationResult,
	TError = BitcoinCashBitcoinCashSignTransactionWithMemoError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<BitcoinCashBitcoinCashSignTransactionWithMemoData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<BitcoinCashBitcoinCashSignTransactionWithMemoData, true>,
		TContext
	>({
		mutationKey:
			Common.UseBitcoinCashBitcoinCashSignTransactionWithMemoKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			bitcoinCashBitcoinCashSignTransactionWithMemo(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useBitcoinCashBitcoinCashSignBitcoinTransaction = <
	TData = Common.BitcoinCashBitcoinCashSignBitcoinTransactionMutationResult,
	TError = BitcoinCashBitcoinCashSignBitcoinTransactionError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<BitcoinCashBitcoinCashSignBitcoinTransactionData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<BitcoinCashBitcoinCashSignBitcoinTransactionData, true>,
		TContext
	>({
		mutationKey:
			Common.UseBitcoinCashBitcoinCashSignBitcoinTransactionKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			bitcoinCashBitcoinCashSignBitcoinTransaction(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useBitcoinCashBitcoinCashGenerateUnsignedPsbtHex = <
	TData = Common.BitcoinCashBitcoinCashGenerateUnsignedPsbtHexMutationResult,
	TError = BitcoinCashBitcoinCashGenerateUnsignedPsbtHexError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<BitcoinCashBitcoinCashGenerateUnsignedPsbtHexData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<BitcoinCashBitcoinCashGenerateUnsignedPsbtHexData, true>,
		TContext
	>({
		mutationKey:
			Common.UseBitcoinCashBitcoinCashGenerateUnsignedPsbtHexKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			bitcoinCashBitcoinCashGenerateUnsignedPsbtHex(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useBitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPath = <
	TData = Common.BitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPathMutationResult,
	TError = BitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPathError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<BitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPathData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<BitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPathData, true>,
		TContext
	>({
		mutationKey:
			Common.UseBitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPathKeyFn(
				mutationKey,
			),
		mutationFn: (clientOptions) =>
			bitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPath(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useComponentsCreateComponent = <
	TData = Common.ComponentsCreateComponentMutationResult,
	TError = ComponentsCreateComponentError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<ComponentsCreateComponentData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<ComponentsCreateComponentData, true>,
		TContext
	>({
		mutationKey: Common.UseComponentsCreateComponentKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			componentsCreateComponent(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useComponentsUpdateComponent = <
	TData = Common.ComponentsUpdateComponentMutationResult,
	TError = ComponentsUpdateComponentError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<ComponentsUpdateComponentData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<ComponentsUpdateComponentData, true>,
		TContext
	>({
		mutationKey: Common.UseComponentsUpdateComponentKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			componentsUpdateComponent(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useComponentsUpdateEmbedding = <
	TData = Common.ComponentsUpdateEmbeddingMutationResult,
	TError = ComponentsUpdateEmbeddingError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<ComponentsUpdateEmbeddingData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<ComponentsUpdateEmbeddingData, true>,
		TContext
	>({
		mutationKey: Common.UseComponentsUpdateEmbeddingKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			componentsUpdateEmbedding(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useComponentsForceEmbedding = <
	TData = Common.ComponentsForceEmbeddingMutationResult,
	TError = ComponentsForceEmbeddingError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<ComponentsForceEmbeddingData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<ComponentsForceEmbeddingData, true>,
		TContext
	>({
		mutationKey: Common.UseComponentsForceEmbeddingKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			componentsForceEmbedding(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCosmosCosmosCreateAccount = <
	TData = Common.CosmosCosmosCreateAccountMutationResult,
	TError = CosmosCosmosCreateAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<CosmosCosmosCreateAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<CosmosCosmosCreateAccountData, true>,
		TContext
	>({
		mutationKey: Common.UseCosmosCosmosCreateAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			cosmosCosmosCreateAccount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCosmosCosmosExportAccount = <
	TData = Common.CosmosCosmosExportAccountMutationResult,
	TError = CosmosCosmosExportAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<CosmosCosmosExportAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<CosmosCosmosExportAccountData, true>,
		TContext
	>({
		mutationKey: Common.UseCosmosCosmosExportAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			cosmosCosmosExportAccount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCosmosCosmosSignTransferTransaction = <
	TData = Common.CosmosCosmosSignTransferTransactionMutationResult,
	TError = CosmosCosmosSignTransferTransactionError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<CosmosCosmosSignTransferTransactionData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<CosmosCosmosSignTransferTransactionData, true>,
		TContext
	>({
		mutationKey:
			Common.UseCosmosCosmosSignTransferTransactionKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			cosmosCosmosSignTransferTransaction(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useCosmosCosmosSignMessage = <
	TData = Common.CosmosCosmosSignMessageMutationResult,
	TError = CosmosCosmosSignMessageError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<CosmosCosmosSignMessageData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<CosmosCosmosSignMessageData, true>,
		TContext
	>({
		mutationKey: Common.UseCosmosCosmosSignMessageKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			cosmosCosmosSignMessage(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCosmosCosmosSignIbcTransferTransaction = <
	TData = Common.CosmosCosmosSignIbcTransferTransactionMutationResult,
	TError = CosmosCosmosSignIbcTransferTransactionError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<CosmosCosmosSignIbcTransferTransactionData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<CosmosCosmosSignIbcTransferTransactionData, true>,
		TContext
	>({
		mutationKey:
			Common.UseCosmosCosmosSignIbcTransferTransactionKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			cosmosCosmosSignIbcTransferTransaction(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useDataExecuteCustomSupabaseQuery = <
	TData = Common.DataExecuteCustomSupabaseQueryMutationResult,
	TError = DataExecuteCustomSupabaseQueryError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<DataExecuteCustomSupabaseQueryData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<DataExecuteCustomSupabaseQueryData, true>,
		TContext
	>({
		mutationKey: Common.UseDataExecuteCustomSupabaseQueryKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			dataExecuteCustomSupabaseQuery(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useDogecoinDogeCoinCreateNewAccount = <
	TData = Common.DogecoinDogeCoinCreateNewAccountMutationResult,
	TError = DogecoinDogeCoinCreateNewAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<DogecoinDogeCoinCreateNewAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<DogecoinDogeCoinCreateNewAccountData, true>,
		TContext
	>({
		mutationKey: Common.UseDogecoinDogeCoinCreateNewAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			dogecoinDogeCoinCreateNewAccount(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useDogecoinDogeCoinSignTransaction = <
	TData = Common.DogecoinDogeCoinSignTransactionMutationResult,
	TError = DogecoinDogeCoinSignTransactionError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<DogecoinDogeCoinSignTransactionData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<DogecoinDogeCoinSignTransactionData, true>,
		TContext
	>({
		mutationKey: Common.UseDogecoinDogeCoinSignTransactionKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			dogecoinDogeCoinSignTransaction(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useDogecoinDogeCoinExportAccountDetails = <
	TData = Common.DogecoinDogeCoinExportAccountDetailsMutationResult,
	TError = DogecoinDogeCoinExportAccountDetailsError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<DogecoinDogeCoinExportAccountDetailsData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<DogecoinDogeCoinExportAccountDetailsData, true>,
		TContext
	>({
		mutationKey:
			Common.UseDogecoinDogeCoinExportAccountDetailsKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			dogecoinDogeCoinExportAccountDetails(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useDogecoinDogeCoinDeleteAccount = <
	TData = Common.DogecoinDogeCoinDeleteAccountMutationResult,
	TError = DogecoinDogeCoinDeleteAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<DogecoinDogeCoinDeleteAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<DogecoinDogeCoinDeleteAccountData, true>,
		TContext
	>({
		mutationKey: Common.UseDogecoinDogeCoinDeleteAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			dogecoinDogeCoinDeleteAccount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useDogecoinDogeCoinSignTransactionWithMemo = <
	TData = Common.DogecoinDogeCoinSignTransactionWithMemoMutationResult,
	TError = DogecoinDogeCoinSignTransactionWithMemoError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<DogecoinDogeCoinSignTransactionWithMemoData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<DogecoinDogeCoinSignTransactionWithMemoData, true>,
		TContext
	>({
		mutationKey:
			Common.UseDogecoinDogeCoinSignTransactionWithMemoKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			dogecoinDogeCoinSignTransactionWithMemo(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useEnsResolve = <
	TData = Common.EnsResolveMutationResult,
	TError = EnsResolveError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<EnsResolveData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<EnsResolveData, true>, TContext>({
		mutationKey: Common.UseEnsResolveKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			ensResolve(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useEnsReverseResolve = <
	TData = Common.EnsReverseResolveMutationResult,
	TError = EnsReverseResolveError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<EnsReverseResolveData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<EnsReverseResolveData, true>, TContext>({
		mutationKey: Common.UseEnsReverseResolveKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			ensReverseResolve(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCreateEosAccount = <
	TData = Common.CreateEosAccountMutationResult,
	TError = CreateEosAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<CreateEosAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<CreateEosAccountData, true>, TContext>({
		mutationKey: Common.UseCreateEosAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			createEosAccount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSignEosTransaction = <
	TData = Common.SignEosTransactionMutationResult,
	TError = SignEosTransactionError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SignEosTransactionData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<SignEosTransactionData, true>, TContext>({
		mutationKey: Common.UseSignEosTransactionKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			signEosTransaction(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useExportEosAccount = <
	TData = Common.ExportEosAccountMutationResult,
	TError = ExportEosAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<ExportEosAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<ExportEosAccountData, true>, TContext>({
		mutationKey: Common.UseExportEosAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			exportEosAccount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useDeleteEosAccount = <
	TData = Common.DeleteEosAccountMutationResult,
	TError = DeleteEosAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<DeleteEosAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<DeleteEosAccountData, true>, TContext>({
		mutationKey: Common.UseDeleteEosAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			deleteEosAccount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useErc1155Erc1155BalanceOf = <
	TData = Common.Erc1155Erc1155BalanceOfMutationResult,
	TError = Erc1155Erc1155BalanceOfError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Erc1155Erc1155BalanceOfData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Erc1155Erc1155BalanceOfData, true>,
		TContext
	>({
		mutationKey: Common.UseErc1155Erc1155BalanceOfKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			erc1155Erc1155BalanceOf(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useErc1155Erc1155BalanceOfBatch = <
	TData = Common.Erc1155Erc1155BalanceOfBatchMutationResult,
	TError = Erc1155Erc1155BalanceOfBatchError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Erc1155Erc1155BalanceOfBatchData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Erc1155Erc1155BalanceOfBatchData, true>,
		TContext
	>({
		mutationKey: Common.UseErc1155Erc1155BalanceOfBatchKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			erc1155Erc1155BalanceOfBatch(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useErc1155Erc1155SetApprovalForAll = <
	TData = Common.Erc1155Erc1155SetApprovalForAllMutationResult,
	TError = Erc1155Erc1155SetApprovalForAllError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Erc1155Erc1155SetApprovalForAllData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Erc1155Erc1155SetApprovalForAllData, true>,
		TContext
	>({
		mutationKey: Common.UseErc1155Erc1155SetApprovalForAllKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			erc1155Erc1155SetApprovalForAll(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useErc1155Erc1155IsApprovedForAll = <
	TData = Common.Erc1155Erc1155IsApprovedForAllMutationResult,
	TError = Erc1155Erc1155IsApprovedForAllError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Erc1155Erc1155IsApprovedForAllData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Erc1155Erc1155IsApprovedForAllData, true>,
		TContext
	>({
		mutationKey: Common.UseErc1155Erc1155IsApprovedForAllKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			erc1155Erc1155IsApprovedForAll(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useErc1155Erc1155SafeTransferFrom = <
	TData = Common.Erc1155Erc1155SafeTransferFromMutationResult,
	TError = Erc1155Erc1155SafeTransferFromError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Erc1155Erc1155SafeTransferFromData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Erc1155Erc1155SafeTransferFromData, true>,
		TContext
	>({
		mutationKey: Common.UseErc1155Erc1155SafeTransferFromKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			erc1155Erc1155SafeTransferFrom(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useErc1155Erc1155SafeBatchTransferFrom = <
	TData = Common.Erc1155Erc1155SafeBatchTransferFromMutationResult,
	TError = Erc1155Erc1155SafeBatchTransferFromError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Erc1155Erc1155SafeBatchTransferFromData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Erc1155Erc1155SafeBatchTransferFromData, true>,
		TContext
	>({
		mutationKey:
			Common.UseErc1155Erc1155SafeBatchTransferFromKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			erc1155Erc1155SafeBatchTransferFrom(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useErc20ApproveErc20TokenSpending = <
	TData = Common.Erc20ApproveErc20TokenSpendingMutationResult,
	TError = Erc20ApproveErc20TokenSpendingError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Erc20ApproveErc20TokenSpendingData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Erc20ApproveErc20TokenSpendingData, true>,
		TContext
	>({
		mutationKey: Common.UseErc20ApproveErc20TokenSpendingKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			erc20ApproveErc20TokenSpending(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useErc20TransferErc20Token = <
	TData = Common.Erc20TransferErc20TokenMutationResult,
	TError = Erc20TransferErc20TokenError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Erc20TransferErc20TokenData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Erc20TransferErc20TokenData, true>,
		TContext
	>({
		mutationKey: Common.UseErc20TransferErc20TokenKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			erc20TransferErc20Token(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useErc20TransferFromErc20Token = <
	TData = Common.Erc20TransferFromErc20TokenMutationResult,
	TError = Erc20TransferFromErc20TokenError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Erc20TransferFromErc20TokenData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Erc20TransferFromErc20TokenData, true>,
		TContext
	>({
		mutationKey: Common.UseErc20TransferFromErc20TokenKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			erc20TransferFromErc20Token(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useErc4626DepositToErc4626 = <
	TData = Common.Erc4626DepositToErc4626MutationResult,
	TError = Erc4626DepositToErc4626Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Erc4626DepositToErc4626Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Erc4626DepositToErc4626Data, true>,
		TContext
	>({
		mutationKey: Common.UseErc4626DepositToErc4626KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			erc4626DepositToErc4626(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useErc4626WithdrawFromErc4626 = <
	TData = Common.Erc4626WithdrawFromErc4626MutationResult,
	TError = Erc4626WithdrawFromErc4626Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Erc4626WithdrawFromErc4626Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Erc4626WithdrawFromErc4626Data, true>,
		TContext
	>({
		mutationKey: Common.UseErc4626WithdrawFromErc4626KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			erc4626WithdrawFromErc4626(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useErc4626MintErc4626Shares = <
	TData = Common.Erc4626MintErc4626SharesMutationResult,
	TError = Erc4626MintErc4626SharesError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Erc4626MintErc4626SharesData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Erc4626MintErc4626SharesData, true>,
		TContext
	>({
		mutationKey: Common.UseErc4626MintErc4626SharesKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			erc4626MintErc4626Shares(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useErc4626RedeemErc4626Shares = <
	TData = Common.Erc4626RedeemErc4626SharesMutationResult,
	TError = Erc4626RedeemErc4626SharesError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Erc4626RedeemErc4626SharesData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Erc4626RedeemErc4626SharesData, true>,
		TContext
	>({
		mutationKey: Common.UseErc4626RedeemErc4626SharesKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			erc4626RedeemErc4626Shares(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useErc4626ApproveErc4626 = <
	TData = Common.Erc4626ApproveErc4626MutationResult,
	TError = Erc4626ApproveErc4626Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Erc4626ApproveErc4626Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Erc4626ApproveErc4626Data, true>,
		TContext
	>({
		mutationKey: Common.UseErc4626ApproveErc4626KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			erc4626ApproveErc4626(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useErc4626TransferErc4626 = <
	TData = Common.Erc4626TransferErc4626MutationResult,
	TError = Erc4626TransferErc4626Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Erc4626TransferErc4626Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Erc4626TransferErc4626Data, true>,
		TContext
	>({
		mutationKey: Common.UseErc4626TransferErc4626KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			erc4626TransferErc4626(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useErc4626TransferFromErc4626 = <
	TData = Common.Erc4626TransferFromErc4626MutationResult,
	TError = Erc4626TransferFromErc4626Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Erc4626TransferFromErc4626Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Erc4626TransferFromErc4626Data, true>,
		TContext
	>({
		mutationKey: Common.UseErc4626TransferFromErc4626KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			erc4626TransferFromErc4626(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useErc721ApproveErc721 = <
	TData = Common.Erc721ApproveErc721MutationResult,
	TError = Erc721ApproveErc721Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Erc721ApproveErc721Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Erc721ApproveErc721Data, true>, TContext>({
		mutationKey: Common.UseErc721ApproveErc721KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			erc721ApproveErc721(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useErc721SetApprovalForAllErc721 = <
	TData = Common.Erc721SetApprovalForAllErc721MutationResult,
	TError = Erc721SetApprovalForAllErc721Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Erc721SetApprovalForAllErc721Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Erc721SetApprovalForAllErc721Data, true>,
		TContext
	>({
		mutationKey: Common.UseErc721SetApprovalForAllErc721KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			erc721SetApprovalForAllErc721(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useErc721TransferFromErc721 = <
	TData = Common.Erc721TransferFromErc721MutationResult,
	TError = Erc721TransferFromErc721Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Erc721TransferFromErc721Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Erc721TransferFromErc721Data, true>,
		TContext
	>({
		mutationKey: Common.UseErc721TransferFromErc721KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			erc721TransferFromErc721(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useErc721SafeTransferFromErc721 = <
	TData = Common.Erc721SafeTransferFromErc721MutationResult,
	TError = Erc721SafeTransferFromErc721Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Erc721SafeTransferFromErc721Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Erc721SafeTransferFromErc721Data, true>,
		TContext
	>({
		mutationKey: Common.UseErc721SafeTransferFromErc721KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			erc721SafeTransferFromErc721(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useErc721SafeTransferFromWithDataErc721 = <
	TData = Common.Erc721SafeTransferFromWithDataErc721MutationResult,
	TError = Erc721SafeTransferFromWithDataErc721Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<Erc721SafeTransferFromWithDataErc721Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<Erc721SafeTransferFromWithDataErc721Data, true>,
		TContext
	>({
		mutationKey:
			Common.UseErc721SafeTransferFromWithDataErc721KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			erc721SafeTransferFromWithDataErc721(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useFinancialDatasetsSearchFinancials = <
	TData = Common.FinancialDatasetsSearchFinancialsMutationResult,
	TError = FinancialDatasetsSearchFinancialsError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<FinancialDatasetsSearchFinancialsData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<FinancialDatasetsSearchFinancialsData, true>,
		TContext
	>({
		mutationKey: Common.UseFinancialDatasetsSearchFinancialsKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			financialDatasetsSearchFinancials(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useFinancialDatasetsSearchFinancialsByLineItems = <
	TData = Common.FinancialDatasetsSearchFinancialsByLineItemsMutationResult,
	TError = FinancialDatasetsSearchFinancialsByLineItemsError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<FinancialDatasetsSearchFinancialsByLineItemsData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<FinancialDatasetsSearchFinancialsByLineItemsData, true>,
		TContext
	>({
		mutationKey:
			Common.UseFinancialDatasetsSearchFinancialsByLineItemsKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			financialDatasetsSearchFinancialsByLineItems(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useJupiterGetQuote = <
	TData = Common.JupiterGetQuoteMutationResult,
	TError = JupiterGetQuoteError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<JupiterGetQuoteData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<JupiterGetQuoteData, true>, TContext>({
		mutationKey: Common.UseJupiterGetQuoteKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			jupiterGetQuote(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useJupiterSwap = <
	TData = Common.JupiterSwapMutationResult,
	TError = JupiterSwapError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<JupiterSwapData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<JupiterSwapData, true>, TContext>({
		mutationKey: Common.UseJupiterSwapKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			jupiterSwap(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useJupiterGetSwapInstructions = <
	TData = Common.JupiterGetSwapInstructionsMutationResult,
	TError = JupiterGetSwapInstructionsError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<JupiterGetSwapInstructionsData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<JupiterGetSwapInstructionsData, true>,
		TContext
	>({
		mutationKey: Common.UseJupiterGetSwapInstructionsKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			jupiterGetSwapInstructions(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useLendingPoolBorrow = <
	TData = Common.LendingPoolBorrowMutationResult,
	TError = LendingPoolBorrowError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<LendingPoolBorrowData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<LendingPoolBorrowData, true>, TContext>({
		mutationKey: Common.UseLendingPoolBorrowKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			lendingPoolBorrow(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useLendingPoolDeposit = <
	TData = Common.LendingPoolDepositMutationResult,
	TError = LendingPoolDepositError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<LendingPoolDepositData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<LendingPoolDepositData, true>, TContext>({
		mutationKey: Common.UseLendingPoolDepositKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			lendingPoolDeposit(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useLendingPoolFlashLoan = <
	TData = Common.LendingPoolFlashLoanMutationResult,
	TError = LendingPoolFlashLoanError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<LendingPoolFlashLoanData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<LendingPoolFlashLoanData, true>, TContext>(
		{
			mutationKey: Common.UseLendingPoolFlashLoanKeyFn(mutationKey),
			mutationFn: (clientOptions) =>
				lendingPoolFlashLoan(clientOptions) as unknown as Promise<TData>,
			...options,
		},
	);
export const useLendingPoolRepay = <
	TData = Common.LendingPoolRepayMutationResult,
	TError = LendingPoolRepayError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<LendingPoolRepayData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<LendingPoolRepayData, true>, TContext>({
		mutationKey: Common.UseLendingPoolRepayKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			lendingPoolRepay(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useLendingPoolSwapBorrowRateMode = <
	TData = Common.LendingPoolSwapBorrowRateModeMutationResult,
	TError = LendingPoolSwapBorrowRateModeError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<LendingPoolSwapBorrowRateModeData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<LendingPoolSwapBorrowRateModeData, true>,
		TContext
	>({
		mutationKey: Common.UseLendingPoolSwapBorrowRateModeKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			lendingPoolSwapBorrowRateMode(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useLendingPoolSetUserUseReserveAsCollateral = <
	TData = Common.LendingPoolSetUserUseReserveAsCollateralMutationResult,
	TError = LendingPoolSetUserUseReserveAsCollateralError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<LendingPoolSetUserUseReserveAsCollateralData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<LendingPoolSetUserUseReserveAsCollateralData, true>,
		TContext
	>({
		mutationKey:
			Common.UseLendingPoolSetUserUseReserveAsCollateralKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			lendingPoolSetUserUseReserveAsCollateral(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useLendingPoolLiquidationCall = <
	TData = Common.LendingPoolLiquidationCallMutationResult,
	TError = LendingPoolLiquidationCallError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<LendingPoolLiquidationCallData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<LendingPoolLiquidationCallData, true>,
		TContext
	>({
		mutationKey: Common.UseLendingPoolLiquidationCallKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			lendingPoolLiquidationCall(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useLeveragerDeleverageErc20 = <
	TData = Common.LeveragerDeleverageErc20MutationResult,
	TError = LeveragerDeleverageErc20Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<LeveragerDeleverageErc20Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<LeveragerDeleverageErc20Data, true>,
		TContext
	>({
		mutationKey: Common.UseLeveragerDeleverageErc20KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			leveragerDeleverageErc20(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useLeveragerDeleverageNative = <
	TData = Common.LeveragerDeleverageNativeMutationResult,
	TError = LeveragerDeleverageNativeError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<LeveragerDeleverageNativeData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<LeveragerDeleverageNativeData, true>,
		TContext
	>({
		mutationKey: Common.UseLeveragerDeleverageNativeKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			leveragerDeleverageNative(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useLeveragerExecuteOperation = <
	TData = Common.LeveragerExecuteOperationMutationResult,
	TError = LeveragerExecuteOperationError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<LeveragerExecuteOperationData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<LeveragerExecuteOperationData, true>,
		TContext
	>({
		mutationKey: Common.UseLeveragerExecuteOperationKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			leveragerExecuteOperation(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useLeveragerGrantRole = <
	TData = Common.LeveragerGrantRoleMutationResult,
	TError = LeveragerGrantRoleError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<LeveragerGrantRoleData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<LeveragerGrantRoleData, true>, TContext>({
		mutationKey: Common.UseLeveragerGrantRoleKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			leveragerGrantRole(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useLeveragerLeverageErc20 = <
	TData = Common.LeveragerLeverageErc20MutationResult,
	TError = LeveragerLeverageErc20Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<LeveragerLeverageErc20Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<LeveragerLeverageErc20Data, true>,
		TContext
	>({
		mutationKey: Common.UseLeveragerLeverageErc20KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			leveragerLeverageErc20(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useLeveragerLeverageNative = <
	TData = Common.LeveragerLeverageNativeMutationResult,
	TError = LeveragerLeverageNativeError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<LeveragerLeverageNativeData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<LeveragerLeverageNativeData, true>,
		TContext
	>({
		mutationKey: Common.UseLeveragerLeverageNativeKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			leveragerLeverageNative(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useLeveragerPause = <
	TData = Common.LeveragerPauseMutationResult,
	TError = LeveragerPauseError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<LeveragerPauseData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<LeveragerPauseData, true>, TContext>({
		mutationKey: Common.UseLeveragerPauseKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			leveragerPause(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useLeveragerRenounceRole = <
	TData = Common.LeveragerRenounceRoleMutationResult,
	TError = LeveragerRenounceRoleError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<LeveragerRenounceRoleData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<LeveragerRenounceRoleData, true>,
		TContext
	>({
		mutationKey: Common.UseLeveragerRenounceRoleKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			leveragerRenounceRole(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useLeveragerRevokeRole = <
	TData = Common.LeveragerRevokeRoleMutationResult,
	TError = LeveragerRevokeRoleError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<LeveragerRevokeRoleData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<LeveragerRevokeRoleData, true>, TContext>({
		mutationKey: Common.UseLeveragerRevokeRoleKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			leveragerRevokeRole(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useLeveragerUnpause = <
	TData = Common.LeveragerUnpauseMutationResult,
	TError = LeveragerUnpauseError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<LeveragerUnpauseData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<LeveragerUnpauseData, true>, TContext>({
		mutationKey: Common.UseLeveragerUnpauseKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			leveragerUnpause(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useLifiPostQuote = <
	TData = Common.LifiPostQuoteMutationResult,
	TError = LifiPostQuoteError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<LifiPostQuoteData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<LifiPostQuoteData, true>, TContext>({
		mutationKey: Common.UseLifiPostQuoteKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			lifiPostQuote(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useLitecoinCreateLitecoinAccount = <
	TData = Common.LitecoinCreateLitecoinAccountMutationResult,
	TError = LitecoinCreateLitecoinAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<LitecoinCreateLitecoinAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<LitecoinCreateLitecoinAccountData, true>,
		TContext
	>({
		mutationKey: Common.UseLitecoinCreateLitecoinAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			litecoinCreateLitecoinAccount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useLitecoinSignLitecoinTransaction = <
	TData = Common.LitecoinSignLitecoinTransactionMutationResult,
	TError = LitecoinSignLitecoinTransactionError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<LitecoinSignLitecoinTransactionData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<LitecoinSignLitecoinTransactionData, true>,
		TContext
	>({
		mutationKey: Common.UseLitecoinSignLitecoinTransactionKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			litecoinSignLitecoinTransaction(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useLitecoinExportLitecoinAccount = <
	TData = Common.LitecoinExportLitecoinAccountMutationResult,
	TError = LitecoinExportLitecoinAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<LitecoinExportLitecoinAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<LitecoinExportLitecoinAccountData, true>,
		TContext
	>({
		mutationKey: Common.UseLitecoinExportLitecoinAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			litecoinExportLitecoinAccount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useLitecoinDeleteLitecoinAccount = <
	TData = Common.LitecoinDeleteLitecoinAccountMutationResult,
	TError = LitecoinDeleteLitecoinAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<LitecoinDeleteLitecoinAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<LitecoinDeleteLitecoinAccountData, true>,
		TContext
	>({
		mutationKey: Common.UseLitecoinDeleteLitecoinAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			litecoinDeleteLitecoinAccount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useLitecoinSignLitecoinTransactionWithMemo = <
	TData = Common.LitecoinSignLitecoinTransactionWithMemoMutationResult,
	TError = LitecoinSignLitecoinTransactionWithMemoError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<LitecoinSignLitecoinTransactionWithMemoData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<LitecoinSignLitecoinTransactionWithMemoData, true>,
		TContext
	>({
		mutationKey:
			Common.UseLitecoinSignLitecoinTransactionWithMemoKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			litecoinSignLitecoinTransactionWithMemo(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useCreateLock = <
	TData = Common.CreateLockMutationResult,
	TError = CreateLockError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<CreateLockData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<CreateLockData, true>, TContext>({
		mutationKey: Common.UseCreateLockKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			createLock(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useIncreaseLockAmount = <
	TData = Common.IncreaseLockAmountMutationResult,
	TError = IncreaseLockAmountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<IncreaseLockAmountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<IncreaseLockAmountData, true>, TContext>({
		mutationKey: Common.UseIncreaseLockAmountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			increaseLockAmount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useIncreaseUnlockTime = <
	TData = Common.IncreaseUnlockTimeMutationResult,
	TError = IncreaseUnlockTimeError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<IncreaseUnlockTimeData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<IncreaseUnlockTimeData, true>, TContext>({
		mutationKey: Common.UseIncreaseUnlockTimeKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			increaseUnlockTime(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useDelegate = <
	TData = Common.DelegateMutationResult,
	TError = DelegateError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<DelegateData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<DelegateData, true>, TContext>({
		mutationKey: Common.UseDelegateKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			delegate(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useMerge = <
	TData = Common.MergeMutationResult,
	TError = MergeError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<MergeData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<MergeData, true>, TContext>({
		mutationKey: Common.UseMergeKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			merge(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSplit = <
	TData = Common.SplitMutationResult,
	TError = SplitError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<SplitData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<SplitData, true>, TContext>({
		mutationKey: Common.UseSplitKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			split(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useClaim = <
	TData = Common.ClaimMutationResult,
	TError = ClaimError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<ClaimData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<ClaimData, true>, TContext>({
		mutationKey: Common.UseClaimKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			claim(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useUnlockPermanent = <
	TData = Common.UnlockPermanentMutationResult,
	TError = UnlockPermanentError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<UnlockPermanentData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<UnlockPermanentData, true>, TContext>({
		mutationKey: Common.UseUnlockPermanentKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			unlockPermanent(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useApprove = <
	TData = Common.ApproveMutationResult,
	TError = ApproveError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<ApproveData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<ApproveData, true>, TContext>({
		mutationKey: Common.UseApproveKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			approve(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSetApprovalForAll = <
	TData = Common.SetApprovalForAllMutationResult,
	TError = SetApprovalForAllError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SetApprovalForAllData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<SetApprovalForAllData, true>, TContext>({
		mutationKey: Common.UseSetApprovalForAllKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			setApprovalForAll(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useTransferFrom = <
	TData = Common.TransferFromMutationResult,
	TError = TransferFromError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<TransferFromData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<TransferFromData, true>, TContext>({
		mutationKey: Common.UseTransferFromKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			transferFrom(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSafeTransferFrom = <
	TData = Common.SafeTransferFromMutationResult,
	TError = SafeTransferFromError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SafeTransferFromData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<SafeTransferFromData, true>, TContext>({
		mutationKey: Common.UseSafeTransferFromKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			safeTransferFrom(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useBurn = <
	TData = Common.BurnMutationResult,
	TError = BurnError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<BurnData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<BurnData, true>, TContext>({
		mutationKey: Common.UseBurnKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			burn(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCreateDelegatedLockFor = <
	TData = Common.CreateDelegatedLockForMutationResult,
	TError = CreateDelegatedLockForError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<CreateDelegatedLockForData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<CreateDelegatedLockForData, true>,
		TContext
	>({
		mutationKey: Common.UseCreateDelegatedLockForKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			createDelegatedLockFor(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCreateLockFor = <
	TData = Common.CreateLockForMutationResult,
	TError = CreateLockForError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<CreateLockForData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<CreateLockForData, true>, TContext>({
		mutationKey: Common.UseCreateLockForKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			createLockFor(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCheckpoint = <
	TData = Common.CheckpointMutationResult,
	TError = CheckpointError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<CheckpointData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<CheckpointData, true>, TContext>({
		mutationKey: Common.UseCheckpointKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			checkpoint(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCheckpointDelegatee = <
	TData = Common.CheckpointDelegateeMutationResult,
	TError = CheckpointDelegateeError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<CheckpointDelegateeData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<CheckpointDelegateeData, true>, TContext>({
		mutationKey: Common.UseCheckpointDelegateeKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			checkpointDelegatee(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSetClaimApproval = <
	TData = Common.SetClaimApprovalMutationResult,
	TError = SetClaimApprovalError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SetClaimApprovalData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<SetClaimApprovalData, true>, TContext>({
		mutationKey: Common.UseSetClaimApprovalKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			setClaimApproval(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSetClaimApprovalForAll = <
	TData = Common.SetClaimApprovalForAllMutationResult,
	TError = SetClaimApprovalForAllError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SetClaimApprovalForAllData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<SetClaimApprovalForAllData, true>,
		TContext
	>({
		mutationKey: Common.UseSetClaimApprovalForAllKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			setClaimApprovalForAll(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useDelegateBySig = <
	TData = Common.DelegateBySigMutationResult,
	TError = DelegateBySigError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<DelegateBySigData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<DelegateBySigData, true>, TContext>({
		mutationKey: Common.UseDelegateBySigKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			delegateBySig(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useGlobalCheckpoint = <
	TData = Common.GlobalCheckpointMutationResult,
	TError = GlobalCheckpointError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<GlobalCheckpointData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<GlobalCheckpointData, true>, TContext>({
		mutationKey: Common.UseGlobalCheckpointKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			globalCheckpoint(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useAddLiquidity = <
	TData = Common.AddLiquidityMutationResult,
	TError = AddLiquidityError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<AddLiquidityData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<AddLiquidityData, true>, TContext>({
		mutationKey: Common.UseAddLiquidityKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			addLiquidity(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useAddLiquidityEth = <
	TData = Common.AddLiquidityEthMutationResult,
	TError = AddLiquidityEthError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<AddLiquidityEthData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<AddLiquidityEthData, true>, TContext>({
		mutationKey: Common.UseAddLiquidityEthKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			addLiquidityEth(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSwapExactTokensForTokens = <
	TData = Common.SwapExactTokensForTokensMutationResult,
	TError = SwapExactTokensForTokensError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SwapExactTokensForTokensData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<SwapExactTokensForTokensData, true>,
		TContext
	>({
		mutationKey: Common.UseSwapExactTokensForTokensKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			swapExactTokensForTokens(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSwapExactEthForTokens = <
	TData = Common.SwapExactEthForTokensMutationResult,
	TError = SwapExactEthForTokensError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SwapExactEthForTokensData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<SwapExactEthForTokensData, true>,
		TContext
	>({
		mutationKey: Common.UseSwapExactEthForTokensKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			swapExactEthForTokens(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSwapExactTokensForEth = <
	TData = Common.SwapExactTokensForEthMutationResult,
	TError = SwapExactTokensForEthError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SwapExactTokensForEthData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<SwapExactTokensForEthData, true>,
		TContext
	>({
		mutationKey: Common.UseSwapExactTokensForEthKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			swapExactTokensForEth(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useVote = <
	TData = Common.VoteMutationResult,
	TError = VoteError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<VoteData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<VoteData, true>, TContext>({
		mutationKey: Common.UseVoteKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			vote(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useReset = <
	TData = Common.ResetMutationResult,
	TError = ResetError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<ResetData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<ResetData, true>, TContext>({
		mutationKey: Common.UseResetKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			reset(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const usePoke = <
	TData = Common.PokeMutationResult,
	TError = PokeError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<PokeData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<PokeData, true>, TContext>({
		mutationKey: Common.UsePokeKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			poke(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCreateGauge = <
	TData = Common.CreateGaugeMutationResult,
	TError = CreateGaugeError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<CreateGaugeData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<CreateGaugeData, true>, TContext>({
		mutationKey: Common.UseCreateGaugeKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			createGauge(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useKillGauge = <
	TData = Common.KillGaugeMutationResult,
	TError = KillGaugeError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<KillGaugeData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<KillGaugeData, true>, TContext>({
		mutationKey: Common.UseKillGaugeKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			killGauge(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useReviveGauge = <
	TData = Common.ReviveGaugeMutationResult,
	TError = ReviveGaugeError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<ReviveGaugeData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<ReviveGaugeData, true>, TContext>({
		mutationKey: Common.UseReviveGaugeKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			reviveGauge(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useNotifyRewardAmount = <
	TData = Common.NotifyRewardAmountMutationResult,
	TError = NotifyRewardAmountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<NotifyRewardAmountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<NotifyRewardAmountData, true>, TContext>({
		mutationKey: Common.UseNotifyRewardAmountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			notifyRewardAmount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useDistribute = <
	TData = Common.DistributeMutationResult,
	TError = DistributeError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<DistributeData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<DistributeData, true>, TContext>({
		mutationKey: Common.UseDistributeKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			distribute(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useClaimBribes = <
	TData = Common.ClaimBribesMutationResult,
	TError = ClaimBribesError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<ClaimBribesData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<ClaimBribesData, true>, TContext>({
		mutationKey: Common.UseClaimBribesKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			claimBribes(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useClaimFees = <
	TData = Common.ClaimFeesMutationResult,
	TError = ClaimFeesError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<ClaimFeesData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<ClaimFeesData, true>, TContext>({
		mutationKey: Common.UseClaimFeesKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			claimFees(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useClaimRewards = <
	TData = Common.ClaimRewardsMutationResult,
	TError = ClaimRewardsError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<ClaimRewardsData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<ClaimRewardsData, true>, TContext>({
		mutationKey: Common.UseClaimRewardsKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			claimRewards(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useWhitelist = <
	TData = Common.WhitelistMutationResult,
	TError = WhitelistError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<WhitelistData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<WhitelistData, true>, TContext>({
		mutationKey: Common.UseWhitelistKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			whitelist(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useVoteWithOptimalDistribution = <
	TData = Common.VoteWithOptimalDistributionMutationResult,
	TError = VoteWithOptimalDistributionError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<VoteWithOptimalDistributionData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<VoteWithOptimalDistributionData, true>,
		TContext
	>({
		mutationKey: Common.UseVoteWithOptimalDistributionKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			voteWithOptimalDistribution(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCreateJob = <
	TData = Common.CreateJobMutationResult,
	TError = CreateJobError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<CreateJobData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<CreateJobData, true>, TContext>({
		mutationKey: Common.UseCreateJobKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			createJob(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useExecuteJob = <
	TData = Common.ExecuteJobMutationResult,
	TError = ExecuteJobError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<ExecuteJobData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<ExecuteJobData, true>, TContext>({
		mutationKey: Common.UseExecuteJobKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			executeJob(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useScheduleJob = <
	TData = Common.ScheduleJobMutationResult,
	TError = ScheduleJobError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<ScheduleJobData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<ScheduleJobData, true>, TContext>({
		mutationKey: Common.UseScheduleJobKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			scheduleJob(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useUnscheduleJob = <
	TData = Common.UnscheduleJobMutationResult,
	TError = UnscheduleJobError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<UnscheduleJobData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<UnscheduleJobData, true>, TContext>({
		mutationKey: Common.UseUnscheduleJobKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			unscheduleJob(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCreateFlow = <
	TData = Common.CreateFlowMutationResult,
	TError = CreateFlowError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<CreateFlowData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<CreateFlowData, true>, TContext>({
		mutationKey: Common.UseCreateFlowKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			createFlow(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCreateUserDefinedFunction = <
	TData = Common.CreateUserDefinedFunctionMutationResult,
	TError = CreateUserDefinedFunctionError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<CreateUserDefinedFunctionData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<CreateUserDefinedFunctionData, true>,
		TContext
	>({
		mutationKey: Common.UseCreateUserDefinedFunctionKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			createUserDefinedFunction(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useMarkNotificationAsRead = <
	TData = Common.MarkNotificationAsReadMutationResult,
	TError = MarkNotificationAsReadError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<MarkNotificationAsReadData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<MarkNotificationAsReadData, true>,
		TContext
	>({
		mutationKey: Common.UseMarkNotificationAsReadKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			markNotificationAsRead(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useOdosSwapTokens = <
	TData = Common.OdosSwapTokensMutationResult,
	TError = OdosSwapTokensError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<OdosSwapTokensData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<OdosSwapTokensData, true>, TContext>({
		mutationKey: Common.UseOdosSwapTokensKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			odosSwapTokens(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useOdosGetQuote = <
	TData = Common.OdosGetQuoteMutationResult,
	TError = OdosGetQuoteError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<OdosGetQuoteData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<OdosGetQuoteData, true>, TContext>({
		mutationKey: Common.UseOdosGetQuoteKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			odosGetQuote(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useGetZapQuote = <
	TData = Common.GetZapQuoteMutationResult,
	TError = GetZapQuoteError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<GetZapQuoteData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<GetZapQuoteData, true>, TContext>({
		mutationKey: Common.UseGetZapQuoteKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			getZapQuote(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useZap = <
	TData = Common.ZapMutationResult,
	TError = ZapError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<ZapData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<ZapData, true>, TContext>({
		mutationKey: Common.UseZapKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			zap(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useOdosAssembleTransaction = <
	TData = Common.OdosAssembleTransactionMutationResult,
	TError = OdosAssembleTransactionError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<OdosAssembleTransactionData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<OdosAssembleTransactionData, true>,
		TContext
	>({
		mutationKey: Common.UseOdosAssembleTransactionKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			odosAssembleTransaction(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useOnRamperCheckout = <
	TData = Common.OnRamperCheckoutMutationResult,
	TError = OnRamperCheckoutError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<OnRamperCheckoutData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<OnRamperCheckoutData, true>, TContext>({
		mutationKey: Common.UseOnRamperCheckoutKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			onRamperCheckout(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCreateOffer = <
	TData = Common.CreateOfferMutationResult,
	TError = CreateOfferError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<CreateOfferData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<CreateOfferData, true>, TContext>({
		mutationKey: Common.UseCreateOfferKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			createOffer(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCreateCollectionOffer = <
	TData = Common.CreateCollectionOfferMutationResult,
	TError = CreateCollectionOfferError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<CreateCollectionOfferData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<CreateCollectionOfferData, true>,
		TContext
	>({
		mutationKey: Common.UseCreateCollectionOfferKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			createCollectionOffer(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useWrapEth = <
	TData = Common.WrapEthMutationResult,
	TError = WrapEthError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<WrapEthData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<WrapEthData, true>, TContext>({
		mutationKey: Common.UseWrapEthKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			wrapEth(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useUnwrapWeth = <
	TData = Common.UnwrapWethMutationResult,
	TError = UnwrapWethError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<UnwrapWethData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<UnwrapWethData, true>, TContext>({
		mutationKey: Common.UseUnwrapWethKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			unwrapWeth(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCreateOrder = <
	TData = Common.CreateOrderMutationResult,
	TError = CreateOrderError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<CreateOrderData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<CreateOrderData, true>, TContext>({
		mutationKey: Common.UseCreateOrderKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			createOrder(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCreateMarketBuyOrder = <
	TData = Common.CreateMarketBuyOrderMutationResult,
	TError = CreateMarketBuyOrderError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<CreateMarketBuyOrderData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<CreateMarketBuyOrderData, true>, TContext>(
		{
			mutationKey: Common.UseCreateMarketBuyOrderKeyFn(mutationKey),
			mutationFn: (clientOptions) =>
				createMarketBuyOrder(clientOptions) as unknown as Promise<TData>,
			...options,
		},
	);
export const usePostOrder = <
	TData = Common.PostOrderMutationResult,
	TError = PostOrderError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<PostOrderData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<PostOrderData, true>, TContext>({
		mutationKey: Common.UsePostOrderKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			postOrder(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCancelOrder = <
	TData = Common.CancelOrderMutationResult,
	TError = CancelOrderError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<CancelOrderData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<CancelOrderData, true>, TContext>({
		mutationKey: Common.UseCancelOrderKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			cancelOrder(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCancelOrders = <
	TData = Common.CancelOrdersMutationResult,
	TError = CancelOrdersError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<CancelOrdersData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<CancelOrdersData, true>, TContext>({
		mutationKey: Common.UseCancelOrdersKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			cancelOrders(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCancelMarketOrders = <
	TData = Common.CancelMarketOrdersMutationResult,
	TError = CancelMarketOrdersError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<CancelMarketOrdersData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<CancelMarketOrdersData, true>, TContext>({
		mutationKey: Common.UseCancelMarketOrdersKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			cancelMarketOrders(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useUpdateBalanceAllowance = <
	TData = Common.UpdateBalanceAllowanceMutationResult,
	TError = UpdateBalanceAllowanceError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<UpdateBalanceAllowanceData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<UpdateBalanceAllowanceData, true>,
		TContext
	>({
		mutationKey: Common.UseUpdateBalanceAllowanceKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			updateBalanceAllowance(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useDropNotifications = <
	TData = Common.DropNotificationsMutationResult,
	TError = DropNotificationsError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<DropNotificationsData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<DropNotificationsData, true>, TContext>({
		mutationKey: Common.UseDropNotificationsKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			dropNotifications(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useApproveForPolymarket = <
	TData = Common.ApproveForPolymarketMutationResult,
	TError = ApproveForPolymarketError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<ApproveForPolymarketData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<ApproveForPolymarketData, true>, TContext>(
		{
			mutationKey: Common.UseApproveForPolymarketKeyFn(mutationKey),
			mutationFn: (clientOptions) =>
				approveForPolymarket(clientOptions) as unknown as Promise<TData>,
			...options,
		},
	);
export const useApprove1 = <
	TData = Common.Approve1MutationResult,
	TError = Approve1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<Approve1Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Approve1Data, true>, TContext>({
		mutationKey: Common.UseApprove1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			approve1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCreateLock1 = <
	TData = Common.CreateLock1MutationResult,
	TError = CreateLock1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<CreateLock1Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<CreateLock1Data, true>, TContext>({
		mutationKey: Common.UseCreateLock1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			createLock1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useIncreaseAmount = <
	TData = Common.IncreaseAmountMutationResult,
	TError = IncreaseAmountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<IncreaseAmountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<IncreaseAmountData, true>, TContext>({
		mutationKey: Common.UseIncreaseAmountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			increaseAmount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useIncreaseUnlockTime1 = <
	TData = Common.IncreaseUnlockTime1MutationResult,
	TError = IncreaseUnlockTime1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<IncreaseUnlockTime1Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<IncreaseUnlockTime1Data, true>, TContext>({
		mutationKey: Common.UseIncreaseUnlockTime1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			increaseUnlockTime1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useWithdraw = <
	TData = Common.WithdrawMutationResult,
	TError = WithdrawError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<WithdrawData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<WithdrawData, true>, TContext>({
		mutationKey: Common.UseWithdrawKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			withdraw(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useDelegate1 = <
	TData = Common.Delegate1MutationResult,
	TError = Delegate1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<Delegate1Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Delegate1Data, true>, TContext>({
		mutationKey: Common.UseDelegate1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			delegate1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useTransferFrom1 = <
	TData = Common.TransferFrom1MutationResult,
	TError = TransferFrom1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<TransferFrom1Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<TransferFrom1Data, true>, TContext>({
		mutationKey: Common.UseTransferFrom1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			transferFrom1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useMerge1 = <
	TData = Common.Merge1MutationResult,
	TError = Merge1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<Merge1Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Merge1Data, true>, TContext>({
		mutationKey: Common.UseMerge1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			merge1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSplit1 = <
	TData = Common.Split1MutationResult,
	TError = Split1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<Split1Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Split1Data, true>, TContext>({
		mutationKey: Common.UseSplit1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			split1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useAbstain = <
	TData = Common.AbstainMutationResult,
	TError = AbstainError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<AbstainData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<AbstainData, true>, TContext>({
		mutationKey: Common.UseAbstainKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			abstain(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useAttach = <
	TData = Common.AttachMutationResult,
	TError = AttachError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<AttachData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<AttachData, true>, TContext>({
		mutationKey: Common.UseAttachKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			attach(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useDetach = <
	TData = Common.DetachMutationResult,
	TError = DetachError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<DetachData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<DetachData, true>, TContext>({
		mutationKey: Common.UseDetachKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			detach(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useUnsafeSwapExactTokensForTokens = <
	TData = Common.UnsafeSwapExactTokensForTokensMutationResult,
	TError = UnsafeSwapExactTokensForTokensError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<UnsafeSwapExactTokensForTokensData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<UnsafeSwapExactTokensForTokensData, true>,
		TContext
	>({
		mutationKey: Common.UseUnsafeSwapExactTokensForTokensKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			unsafeSwapExactTokensForTokens(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useAddLiquidity1 = <
	TData = Common.AddLiquidity1MutationResult,
	TError = AddLiquidity1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<AddLiquidity1Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<AddLiquidity1Data, true>, TContext>({
		mutationKey: Common.UseAddLiquidity1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			addLiquidity1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useAddLiquidityEth1 = <
	TData = Common.AddLiquidityEth1MutationResult,
	TError = AddLiquidityEth1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<AddLiquidityEth1Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<AddLiquidityEth1Data, true>, TContext>({
		mutationKey: Common.UseAddLiquidityEth1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			addLiquidityEth1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useRemoveLiquidity = <
	TData = Common.RemoveLiquidityMutationResult,
	TError = RemoveLiquidityError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<RemoveLiquidityData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<RemoveLiquidityData, true>, TContext>({
		mutationKey: Common.UseRemoveLiquidityKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			removeLiquidity(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useRemoveLiquidityEth = <
	TData = Common.RemoveLiquidityEthMutationResult,
	TError = RemoveLiquidityEthError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<RemoveLiquidityEthData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<RemoveLiquidityEthData, true>, TContext>({
		mutationKey: Common.UseRemoveLiquidityEthKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			removeLiquidityEth(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSwapExactTokensForTokens1 = <
	TData = Common.SwapExactTokensForTokens1MutationResult,
	TError = SwapExactTokensForTokens1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SwapExactTokensForTokens1Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<SwapExactTokensForTokens1Data, true>,
		TContext
	>({
		mutationKey: Common.UseSwapExactTokensForTokens1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			swapExactTokensForTokens1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSwapExactEthForTokens1 = <
	TData = Common.SwapExactEthForTokens1MutationResult,
	TError = SwapExactEthForTokens1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SwapExactEthForTokens1Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<SwapExactEthForTokens1Data, true>,
		TContext
	>({
		mutationKey: Common.UseSwapExactEthForTokens1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			swapExactEthForTokens1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSwapExactTokensForEth1 = <
	TData = Common.SwapExactTokensForEth1MutationResult,
	TError = SwapExactTokensForEth1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SwapExactTokensForEth1Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<SwapExactTokensForEth1Data, true>,
		TContext
	>({
		mutationKey: Common.UseSwapExactTokensForEth1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			swapExactTokensForEth1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useVote1 = <
	TData = Common.Vote1MutationResult,
	TError = Vote1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<Vote1Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Vote1Data, true>, TContext>({
		mutationKey: Common.UseVote1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			vote1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useReset1 = <
	TData = Common.Reset1MutationResult,
	TError = Reset1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<Reset1Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Reset1Data, true>, TContext>({
		mutationKey: Common.UseReset1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			reset1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const usePoke1 = <
	TData = Common.Poke1MutationResult,
	TError = Poke1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<Poke1Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Poke1Data, true>, TContext>({
		mutationKey: Common.UsePoke1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			poke1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useAttachTokenToGauge = <
	TData = Common.AttachTokenToGaugeMutationResult,
	TError = AttachTokenToGaugeError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<AttachTokenToGaugeData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<AttachTokenToGaugeData, true>, TContext>({
		mutationKey: Common.UseAttachTokenToGaugeKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			attachTokenToGauge(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useDetachTokenFromGauge = <
	TData = Common.DetachTokenFromGaugeMutationResult,
	TError = DetachTokenFromGaugeError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<DetachTokenFromGaugeData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<DetachTokenFromGaugeData, true>, TContext>(
		{
			mutationKey: Common.UseDetachTokenFromGaugeKeyFn(mutationKey),
			mutationFn: (clientOptions) =>
				detachTokenFromGauge(clientOptions) as unknown as Promise<TData>,
			...options,
		},
	);
export const useCreateGauge1 = <
	TData = Common.CreateGauge1MutationResult,
	TError = CreateGauge1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<CreateGauge1Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<CreateGauge1Data, true>, TContext>({
		mutationKey: Common.UseCreateGauge1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			createGauge1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useKillGauge1 = <
	TData = Common.KillGauge1MutationResult,
	TError = KillGauge1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<KillGauge1Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<KillGauge1Data, true>, TContext>({
		mutationKey: Common.UseKillGauge1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			killGauge1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useReviveGauge1 = <
	TData = Common.ReviveGauge1MutationResult,
	TError = ReviveGauge1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<ReviveGauge1Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<ReviveGauge1Data, true>, TContext>({
		mutationKey: Common.UseReviveGauge1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			reviveGauge1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useNotifyRewardAmount1 = <
	TData = Common.NotifyRewardAmount1MutationResult,
	TError = NotifyRewardAmount1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<NotifyRewardAmount1Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<NotifyRewardAmount1Data, true>, TContext>({
		mutationKey: Common.UseNotifyRewardAmount1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			notifyRewardAmount1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useDistribute1 = <
	TData = Common.Distribute1MutationResult,
	TError = Distribute1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<Distribute1Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Distribute1Data, true>, TContext>({
		mutationKey: Common.UseDistribute1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			distribute1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useClaimBribes1 = <
	TData = Common.ClaimBribes1MutationResult,
	TError = ClaimBribes1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<ClaimBribes1Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<ClaimBribes1Data, true>, TContext>({
		mutationKey: Common.UseClaimBribes1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			claimBribes1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useClaimFees1 = <
	TData = Common.ClaimFees1MutationResult,
	TError = ClaimFees1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<ClaimFees1Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<ClaimFees1Data, true>, TContext>({
		mutationKey: Common.UseClaimFees1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			claimFees1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useClaimRewards1 = <
	TData = Common.ClaimRewards1MutationResult,
	TError = ClaimRewards1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<ClaimRewards1Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<ClaimRewards1Data, true>, TContext>({
		mutationKey: Common.UseClaimRewards1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			claimRewards1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useWhitelist1 = <
	TData = Common.Whitelist1MutationResult,
	TError = Whitelist1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<Whitelist1Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Whitelist1Data, true>, TContext>({
		mutationKey: Common.UseWhitelist1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			whitelist1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useVoteWithOptimalDistribution1 = <
	TData = Common.VoteWithOptimalDistribution1MutationResult,
	TError = VoteWithOptimalDistribution1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<VoteWithOptimalDistribution1Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<VoteWithOptimalDistribution1Data, true>,
		TContext
	>({
		mutationKey: Common.UseVoteWithOptimalDistribution1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			voteWithOptimalDistribution1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCreateRippleAccount = <
	TData = Common.CreateRippleAccountMutationResult,
	TError = CreateRippleAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<CreateRippleAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<CreateRippleAccountData, true>, TContext>({
		mutationKey: Common.UseCreateRippleAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			createRippleAccount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSignRippleTransaction = <
	TData = Common.SignRippleTransactionMutationResult,
	TError = SignRippleTransactionError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SignRippleTransactionData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<SignRippleTransactionData, true>,
		TContext
	>({
		mutationKey: Common.UseSignRippleTransactionKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			signRippleTransaction(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useExportRippleAccount = <
	TData = Common.ExportRippleAccountMutationResult,
	TError = ExportRippleAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<ExportRippleAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<ExportRippleAccountData, true>, TContext>({
		mutationKey: Common.UseExportRippleAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			exportRippleAccount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useDeleteRippleAccount = <
	TData = Common.DeleteRippleAccountMutationResult,
	TError = DeleteRippleAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<DeleteRippleAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<DeleteRippleAccountData, true>, TContext>({
		mutationKey: Common.UseDeleteRippleAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			deleteRippleAccount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCreateSolanaAccount = <
	TData = Common.CreateSolanaAccountMutationResult,
	TError = CreateSolanaAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<CreateSolanaAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<CreateSolanaAccountData, true>, TContext>({
		mutationKey: Common.UseCreateSolanaAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			createSolanaAccount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSignSolanaTransaction = <
	TData = Common.SignSolanaTransactionMutationResult,
	TError = SignSolanaTransactionError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SignSolanaTransactionData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<SignSolanaTransactionData, true>,
		TContext
	>({
		mutationKey: Common.UseSignSolanaTransactionKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			signSolanaTransaction(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useMultiSignSolanaTransaction = <
	TData = Common.MultiSignSolanaTransactionMutationResult,
	TError = MultiSignSolanaTransactionError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<MultiSignSolanaTransactionData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<MultiSignSolanaTransactionData, true>,
		TContext
	>({
		mutationKey: Common.UseMultiSignSolanaTransactionKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			multiSignSolanaTransaction(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useTransferSolanaTransaction = <
	TData = Common.TransferSolanaTransactionMutationResult,
	TError = TransferSolanaTransactionError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<TransferSolanaTransactionData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<TransferSolanaTransactionData, true>,
		TContext
	>({
		mutationKey: Common.UseTransferSolanaTransactionKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			transferSolanaTransaction(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useTransferTokensSignSolanaTransaction = <
	TData = Common.TransferTokensSignSolanaTransactionMutationResult,
	TError = TransferTokensSignSolanaTransactionError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<TransferTokensSignSolanaTransactionData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<TransferTokensSignSolanaTransactionData, true>,
		TContext
	>({
		mutationKey:
			Common.UseTransferTokensSignSolanaTransactionKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			transferTokensSignSolanaTransaction(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useExportSolanaAccount = <
	TData = Common.ExportSolanaAccountMutationResult,
	TError = ExportSolanaAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<ExportSolanaAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<ExportSolanaAccountData, true>, TContext>({
		mutationKey: Common.UseExportSolanaAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			exportSolanaAccount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useDeleteSolanaAccount = <
	TData = Common.DeleteSolanaAccountMutationResult,
	TError = DeleteSolanaAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<DeleteSolanaAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<DeleteSolanaAccountData, true>, TContext>({
		mutationKey: Common.UseDeleteSolanaAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			deleteSolanaAccount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSwap = <
	TData = Common.SwapMutationResult,
	TError = SwapError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<SwapData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<SwapData, true>, TContext>({
		mutationKey: Common.UseSwapKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			swap(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useTronCreateTronAccount = <
	TData = Common.TronCreateTronAccountMutationResult,
	TError = TronCreateTronAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<TronCreateTronAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<TronCreateTronAccountData, true>,
		TContext
	>({
		mutationKey: Common.UseTronCreateTronAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			tronCreateTronAccount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useTronSignTronTransaction = <
	TData = Common.TronSignTronTransactionMutationResult,
	TError = TronSignTronTransactionError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<TronSignTronTransactionData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<TronSignTronTransactionData, true>,
		TContext
	>({
		mutationKey: Common.UseTronSignTronTransactionKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			tronSignTronTransaction(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useTronExportTronAccount = <
	TData = Common.TronExportTronAccountMutationResult,
	TError = TronExportTronAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<TronExportTronAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<TronExportTronAccountData, true>,
		TContext
	>({
		mutationKey: Common.UseTronExportTronAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			tronExportTronAccount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useTronDeleteTronAccount = <
	TData = Common.TronDeleteTronAccountMutationResult,
	TError = TronDeleteTronAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<TronDeleteTronAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<TronDeleteTronAccountData, true>,
		TContext
	>({
		mutationKey: Common.UseTronDeleteTronAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			tronDeleteTronAccount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useAddLiquidity2 = <
	TData = Common.AddLiquidity2MutationResult,
	TError = AddLiquidity2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<AddLiquidity2Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<AddLiquidity2Data, true>, TContext>({
		mutationKey: Common.UseAddLiquidity2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			addLiquidity2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useAddLiquidityEth2 = <
	TData = Common.AddLiquidityEth2MutationResult,
	TError = AddLiquidityEth2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<AddLiquidityEth2Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<AddLiquidityEth2Data, true>, TContext>({
		mutationKey: Common.UseAddLiquidityEth2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			addLiquidityEth2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useGetAmountIn = <
	TData = Common.GetAmountInMutationResult,
	TError = GetAmountInError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<GetAmountInData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<GetAmountInData, true>, TContext>({
		mutationKey: Common.UseGetAmountInKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			getAmountIn(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useGetAmountOut2 = <
	TData = Common.GetAmountOut2MutationResult,
	TError = GetAmountOut2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<GetAmountOut2Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<GetAmountOut2Data, true>, TContext>({
		mutationKey: Common.UseGetAmountOut2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			getAmountOut2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useGetAmountsIn = <
	TData = Common.GetAmountsInMutationResult,
	TError = GetAmountsInError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<GetAmountsInData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<GetAmountsInData, true>, TContext>({
		mutationKey: Common.UseGetAmountsInKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			getAmountsIn(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useGetAmountsOut2 = <
	TData = Common.GetAmountsOut2MutationResult,
	TError = GetAmountsOut2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<GetAmountsOut2Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<GetAmountsOut2Data, true>, TContext>({
		mutationKey: Common.UseGetAmountsOut2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			getAmountsOut2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useQuote = <
	TData = Common.QuoteMutationResult,
	TError = QuoteError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<QuoteData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<QuoteData, true>, TContext>({
		mutationKey: Common.UseQuoteKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			quote(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useRemoveLiquidity1 = <
	TData = Common.RemoveLiquidity1MutationResult,
	TError = RemoveLiquidity1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<RemoveLiquidity1Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<RemoveLiquidity1Data, true>, TContext>({
		mutationKey: Common.UseRemoveLiquidity1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			removeLiquidity1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useRemoveLiquidityEth1 = <
	TData = Common.RemoveLiquidityEth1MutationResult,
	TError = RemoveLiquidityEth1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<RemoveLiquidityEth1Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<RemoveLiquidityEth1Data, true>, TContext>({
		mutationKey: Common.UseRemoveLiquidityEth1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			removeLiquidityEth1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useRemoveLiquidityEthSupportingFeeOnTransferTokens = <
	TData = Common.RemoveLiquidityEthSupportingFeeOnTransferTokensMutationResult,
	TError = RemoveLiquidityEthSupportingFeeOnTransferTokensError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<RemoveLiquidityEthSupportingFeeOnTransferTokensData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<RemoveLiquidityEthSupportingFeeOnTransferTokensData, true>,
		TContext
	>({
		mutationKey:
			Common.UseRemoveLiquidityEthSupportingFeeOnTransferTokensKeyFn(
				mutationKey,
			),
		mutationFn: (clientOptions) =>
			removeLiquidityEthSupportingFeeOnTransferTokens(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useRemoveLiquidityEthWithPermit = <
	TData = Common.RemoveLiquidityEthWithPermitMutationResult,
	TError = RemoveLiquidityEthWithPermitError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<RemoveLiquidityEthWithPermitData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<RemoveLiquidityEthWithPermitData, true>,
		TContext
	>({
		mutationKey: Common.UseRemoveLiquidityEthWithPermitKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			removeLiquidityEthWithPermit(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useRemoveLiquidityEthWithPermitSupportingFeeOnTransferTokens = <
	TData = Common.RemoveLiquidityEthWithPermitSupportingFeeOnTransferTokensMutationResult,
	TError = RemoveLiquidityEthWithPermitSupportingFeeOnTransferTokensError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<
				RemoveLiquidityEthWithPermitSupportingFeeOnTransferTokensData,
				true
			>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<
			RemoveLiquidityEthWithPermitSupportingFeeOnTransferTokensData,
			true
		>,
		TContext
	>({
		mutationKey:
			Common.UseRemoveLiquidityEthWithPermitSupportingFeeOnTransferTokensKeyFn(
				mutationKey,
			),
		mutationFn: (clientOptions) =>
			removeLiquidityEthWithPermitSupportingFeeOnTransferTokens(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useRemoveLiquidityWithPermit = <
	TData = Common.RemoveLiquidityWithPermitMutationResult,
	TError = RemoveLiquidityWithPermitError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<RemoveLiquidityWithPermitData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<RemoveLiquidityWithPermitData, true>,
		TContext
	>({
		mutationKey: Common.UseRemoveLiquidityWithPermitKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			removeLiquidityWithPermit(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSwapEthForExactTokens = <
	TData = Common.SwapEthForExactTokensMutationResult,
	TError = SwapEthForExactTokensError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SwapEthForExactTokensData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<SwapEthForExactTokensData, true>,
		TContext
	>({
		mutationKey: Common.UseSwapEthForExactTokensKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			swapEthForExactTokens(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSwapExactEthForTokens2 = <
	TData = Common.SwapExactEthForTokens2MutationResult,
	TError = SwapExactEthForTokens2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SwapExactEthForTokens2Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<SwapExactEthForTokens2Data, true>,
		TContext
	>({
		mutationKey: Common.UseSwapExactEthForTokens2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			swapExactEthForTokens2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSwapExactEthForTokensSupportingFeeOnTransferTokens = <
	TData = Common.SwapExactEthForTokensSupportingFeeOnTransferTokensMutationResult,
	TError = SwapExactEthForTokensSupportingFeeOnTransferTokensError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SwapExactEthForTokensSupportingFeeOnTransferTokensData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<SwapExactEthForTokensSupportingFeeOnTransferTokensData, true>,
		TContext
	>({
		mutationKey:
			Common.UseSwapExactEthForTokensSupportingFeeOnTransferTokensKeyFn(
				mutationKey,
			),
		mutationFn: (clientOptions) =>
			swapExactEthForTokensSupportingFeeOnTransferTokens(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useSwapExactTokensForEth2 = <
	TData = Common.SwapExactTokensForEth2MutationResult,
	TError = SwapExactTokensForEth2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SwapExactTokensForEth2Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<SwapExactTokensForEth2Data, true>,
		TContext
	>({
		mutationKey: Common.UseSwapExactTokensForEth2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			swapExactTokensForEth2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSwapExactTokensForEthSupportingFeeOnTransferTokens = <
	TData = Common.SwapExactTokensForEthSupportingFeeOnTransferTokensMutationResult,
	TError = SwapExactTokensForEthSupportingFeeOnTransferTokensError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SwapExactTokensForEthSupportingFeeOnTransferTokensData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<SwapExactTokensForEthSupportingFeeOnTransferTokensData, true>,
		TContext
	>({
		mutationKey:
			Common.UseSwapExactTokensForEthSupportingFeeOnTransferTokensKeyFn(
				mutationKey,
			),
		mutationFn: (clientOptions) =>
			swapExactTokensForEthSupportingFeeOnTransferTokens(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useSwapExactTokensForTokens2 = <
	TData = Common.SwapExactTokensForTokens2MutationResult,
	TError = SwapExactTokensForTokens2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SwapExactTokensForTokens2Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<SwapExactTokensForTokens2Data, true>,
		TContext
	>({
		mutationKey: Common.UseSwapExactTokensForTokens2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			swapExactTokensForTokens2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSwapExactTokensForTokensSupportingFeeOnTransferTokens = <
	TData = Common.SwapExactTokensForTokensSupportingFeeOnTransferTokensMutationResult,
	TError = SwapExactTokensForTokensSupportingFeeOnTransferTokensError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SwapExactTokensForTokensSupportingFeeOnTransferTokensData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<SwapExactTokensForTokensSupportingFeeOnTransferTokensData, true>,
		TContext
	>({
		mutationKey:
			Common.UseSwapExactTokensForTokensSupportingFeeOnTransferTokensKeyFn(
				mutationKey,
			),
		mutationFn: (clientOptions) =>
			swapExactTokensForTokensSupportingFeeOnTransferTokens(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useSwapTokensForExactEth = <
	TData = Common.SwapTokensForExactEthMutationResult,
	TError = SwapTokensForExactEthError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SwapTokensForExactEthData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<SwapTokensForExactEthData, true>,
		TContext
	>({
		mutationKey: Common.UseSwapTokensForExactEthKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			swapTokensForExactEth(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSwapTokensForExactTokens = <
	TData = Common.SwapTokensForExactTokensMutationResult,
	TError = SwapTokensForExactTokensError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SwapTokensForExactTokensData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<SwapTokensForExactTokensData, true>,
		TContext
	>({
		mutationKey: Common.UseSwapTokensForExactTokensKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			swapTokensForExactTokens(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useMint = <
	TData = Common.MintMutationResult,
	TError = MintError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<MintData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<MintData, true>, TContext>({
		mutationKey: Common.UseMintKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			mint(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useIncreaseLiquidity = <
	TData = Common.IncreaseLiquidityMutationResult,
	TError = IncreaseLiquidityError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<IncreaseLiquidityData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<IncreaseLiquidityData, true>, TContext>({
		mutationKey: Common.UseIncreaseLiquidityKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			increaseLiquidity(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useDecreaseLiquidity = <
	TData = Common.DecreaseLiquidityMutationResult,
	TError = DecreaseLiquidityError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<DecreaseLiquidityData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<DecreaseLiquidityData, true>, TContext>({
		mutationKey: Common.UseDecreaseLiquidityKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			decreaseLiquidity(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCollect = <
	TData = Common.CollectMutationResult,
	TError = CollectError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<CollectData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<CollectData, true>, TContext>({
		mutationKey: Common.UseCollectKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			collect(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useBurn1 = <
	TData = Common.Burn1MutationResult,
	TError = Burn1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<Burn1Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Burn1Data, true>, TContext>({
		mutationKey: Common.UseBurn1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			burn1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCreateAndInitializePoolIfNecessary = <
	TData = Common.CreateAndInitializePoolIfNecessaryMutationResult,
	TError = CreateAndInitializePoolIfNecessaryError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<CreateAndInitializePoolIfNecessaryData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<CreateAndInitializePoolIfNecessaryData, true>,
		TContext
	>({
		mutationKey: Common.UseCreateAndInitializePoolIfNecessaryKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			createAndInitializePoolIfNecessary(
				clientOptions,
			) as unknown as Promise<TData>,
		...options,
	});
export const useApprove2 = <
	TData = Common.Approve2MutationResult,
	TError = Approve2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<Approve2Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Approve2Data, true>, TContext>({
		mutationKey: Common.UseApprove2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			approve2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSetApprovalForAll1 = <
	TData = Common.SetApprovalForAll1MutationResult,
	TError = SetApprovalForAll1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SetApprovalForAll1Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<SetApprovalForAll1Data, true>, TContext>({
		mutationKey: Common.UseSetApprovalForAll1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			setApprovalForAll1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useTransferFrom2 = <
	TData = Common.TransferFrom2MutationResult,
	TError = TransferFrom2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<TransferFrom2Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<TransferFrom2Data, true>, TContext>({
		mutationKey: Common.UseTransferFrom2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			transferFrom2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const usePermit = <
	TData = Common.PermitMutationResult,
	TError = PermitError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<PermitData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<PermitData, true>, TContext>({
		mutationKey: Common.UsePermitKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			permit(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useMulticall = <
	TData = Common.MulticallMutationResult,
	TError = MulticallError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<MulticallData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<MulticallData, true>, TContext>({
		mutationKey: Common.UseMulticallKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			multicall(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSweepToken = <
	TData = Common.SweepTokenMutationResult,
	TError = SweepTokenError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<SweepTokenData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<SweepTokenData, true>, TContext>({
		mutationKey: Common.UseSweepTokenKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			sweepToken(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useUnwrapWeth9 = <
	TData = Common.UnwrapWeth9MutationResult,
	TError = UnwrapWeth9Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<UnwrapWeth9Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<UnwrapWeth9Data, true>, TContext>({
		mutationKey: Common.UseUnwrapWeth9KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			unwrapWeth9(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useRefundEth = <
	TData = Common.RefundEthMutationResult,
	TError = RefundEthError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<RefundEthData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<RefundEthData, true>, TContext>({
		mutationKey: Common.UseRefundEthKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			refundEth(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useExactInput = <
	TData = Common.ExactInputMutationResult,
	TError = ExactInputError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<ExactInputData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<ExactInputData, true>, TContext>({
		mutationKey: Common.UseExactInputKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			exactInput(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useExactInputSingle = <
	TData = Common.ExactInputSingleMutationResult,
	TError = ExactInputSingleError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<ExactInputSingleData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<ExactInputSingleData, true>, TContext>({
		mutationKey: Common.UseExactInputSingleKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			exactInputSingle(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useExactOutput = <
	TData = Common.ExactOutputMutationResult,
	TError = ExactOutputError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<ExactOutputData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<ExactOutputData, true>, TContext>({
		mutationKey: Common.UseExactOutputKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			exactOutput(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useExactOutputSingle = <
	TData = Common.ExactOutputSingleMutationResult,
	TError = ExactOutputSingleError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<ExactOutputSingleData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<ExactOutputSingleData, true>, TContext>({
		mutationKey: Common.UseExactOutputSingleKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			exactOutputSingle(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useMulticall1 = <
	TData = Common.Multicall1MutationResult,
	TError = Multicall1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<Multicall1Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Multicall1Data, true>, TContext>({
		mutationKey: Common.UseMulticall1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			multicall1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useRefundEth1 = <
	TData = Common.RefundEth1MutationResult,
	TError = RefundEth1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<RefundEth1Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<RefundEth1Data, true>, TContext>({
		mutationKey: Common.UseRefundEth1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			refundEth1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSelfPermit = <
	TData = Common.SelfPermitMutationResult,
	TError = SelfPermitError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<SelfPermitData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<SelfPermitData, true>, TContext>({
		mutationKey: Common.UseSelfPermitKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			selfPermit(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSelfPermitAllowed = <
	TData = Common.SelfPermitAllowedMutationResult,
	TError = SelfPermitAllowedError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SelfPermitAllowedData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<SelfPermitAllowedData, true>, TContext>({
		mutationKey: Common.UseSelfPermitAllowedKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			selfPermitAllowed(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSelfPermitAllowedIfNecessary = <
	TData = Common.SelfPermitAllowedIfNecessaryMutationResult,
	TError = SelfPermitAllowedIfNecessaryError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SelfPermitAllowedIfNecessaryData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<SelfPermitAllowedIfNecessaryData, true>,
		TContext
	>({
		mutationKey: Common.UseSelfPermitAllowedIfNecessaryKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			selfPermitAllowedIfNecessary(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSelfPermitIfNecessary = <
	TData = Common.SelfPermitIfNecessaryMutationResult,
	TError = SelfPermitIfNecessaryError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SelfPermitIfNecessaryData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<SelfPermitIfNecessaryData, true>,
		TContext
	>({
		mutationKey: Common.UseSelfPermitIfNecessaryKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			selfPermitIfNecessary(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSweepToken1 = <
	TData = Common.SweepToken1MutationResult,
	TError = SweepToken1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<SweepToken1Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<SweepToken1Data, true>, TContext>({
		mutationKey: Common.UseSweepToken1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			sweepToken1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSweepTokenWithFee = <
	TData = Common.SweepTokenWithFeeMutationResult,
	TError = SweepTokenWithFeeError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SweepTokenWithFeeData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<SweepTokenWithFeeData, true>, TContext>({
		mutationKey: Common.UseSweepTokenWithFeeKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			sweepTokenWithFee(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useUnwrapWeth91 = <
	TData = Common.UnwrapWeth91MutationResult,
	TError = UnwrapWeth91Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<UnwrapWeth91Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<UnwrapWeth91Data, true>, TContext>({
		mutationKey: Common.UseUnwrapWeth91KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			unwrapWeth91(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useUnwrapWeth9WithFee = <
	TData = Common.UnwrapWeth9WithFeeMutationResult,
	TError = UnwrapWeth9WithFeeError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<UnwrapWeth9WithFeeData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<UnwrapWeth9WithFeeData, true>, TContext>({
		mutationKey: Common.UseUnwrapWeth9WithFeeKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			unwrapWeth9WithFee(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCreateLock2 = <
	TData = Common.CreateLock2MutationResult,
	TError = CreateLock2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<CreateLock2Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<CreateLock2Data, true>, TContext>({
		mutationKey: Common.UseCreateLock2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			createLock2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCreateLockFor1 = <
	TData = Common.CreateLockFor1MutationResult,
	TError = CreateLockFor1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<CreateLockFor1Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<CreateLockFor1Data, true>, TContext>({
		mutationKey: Common.UseCreateLockFor1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			createLockFor1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useIncreaseLockAmount1 = <
	TData = Common.IncreaseLockAmount1MutationResult,
	TError = IncreaseLockAmount1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<IncreaseLockAmount1Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<IncreaseLockAmount1Data, true>, TContext>({
		mutationKey: Common.UseIncreaseLockAmount1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			increaseLockAmount1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useIncreaseUnlockTime2 = <
	TData = Common.IncreaseUnlockTime2MutationResult,
	TError = IncreaseUnlockTime2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<IncreaseUnlockTime2Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<IncreaseUnlockTime2Data, true>, TContext>({
		mutationKey: Common.UseIncreaseUnlockTime2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			increaseUnlockTime2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useWithdraw1 = <
	TData = Common.Withdraw1MutationResult,
	TError = Withdraw1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<Withdraw1Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Withdraw1Data, true>, TContext>({
		mutationKey: Common.UseWithdraw1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			withdraw1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useApprove3 = <
	TData = Common.Approve3MutationResult,
	TError = Approve3Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<Approve3Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Approve3Data, true>, TContext>({
		mutationKey: Common.UseApprove3KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			approve3(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSetApprovalForAll2 = <
	TData = Common.SetApprovalForAll2MutationResult,
	TError = SetApprovalForAll2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SetApprovalForAll2Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<SetApprovalForAll2Data, true>, TContext>({
		mutationKey: Common.UseSetApprovalForAll2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			setApprovalForAll2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useTransferFrom3 = <
	TData = Common.TransferFrom3MutationResult,
	TError = TransferFrom3Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<TransferFrom3Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<TransferFrom3Data, true>, TContext>({
		mutationKey: Common.UseTransferFrom3KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			transferFrom3(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSafeTransferFrom1 = <
	TData = Common.SafeTransferFrom1MutationResult,
	TError = SafeTransferFrom1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<SafeTransferFrom1Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<SafeTransferFrom1Data, true>, TContext>({
		mutationKey: Common.UseSafeTransferFrom1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			safeTransferFrom1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useMerge2 = <
	TData = Common.Merge2MutationResult,
	TError = Merge2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<Merge2Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Merge2Data, true>, TContext>({
		mutationKey: Common.UseMerge2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			merge2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useSplit2 = <
	TData = Common.Split2MutationResult,
	TError = Split2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<Split2Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Split2Data, true>, TContext>({
		mutationKey: Common.UseSplit2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			split2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useVoting = <
	TData = Common.VotingMutationResult,
	TError = VotingError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<VotingData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<VotingData, true>, TContext>({
		mutationKey: Common.UseVotingKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			voting(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useAbstain1 = <
	TData = Common.Abstain1MutationResult,
	TError = Abstain1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<Abstain1Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Abstain1Data, true>, TContext>({
		mutationKey: Common.UseAbstain1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			abstain1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useAttach1 = <
	TData = Common.Attach1MutationResult,
	TError = Attach1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<Attach1Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Attach1Data, true>, TContext>({
		mutationKey: Common.UseAttach1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			attach1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useDetach1 = <
	TData = Common.Detach1MutationResult,
	TError = Detach1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<Detach1Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Detach1Data, true>, TContext>({
		mutationKey: Common.UseDetach1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			detach1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useDepositFor = <
	TData = Common.DepositForMutationResult,
	TError = DepositForError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<DepositForData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<DepositForData, true>, TContext>({
		mutationKey: Common.UseDepositForKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			depositFor(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCheckpoint1 = <
	TData = Common.Checkpoint1MutationResult,
	TError = Checkpoint1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<Checkpoint1Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Checkpoint1Data, true>, TContext>({
		mutationKey: Common.UseCheckpoint1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			checkpoint1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useDelegate2 = <
	TData = Common.Delegate2MutationResult,
	TError = Delegate2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<Delegate2Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Delegate2Data, true>, TContext>({
		mutationKey: Common.UseDelegate2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			delegate2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useDelegateBySig1 = <
	TData = Common.DelegateBySig1MutationResult,
	TError = DelegateBySig1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<DelegateBySig1Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<DelegateBySig1Data, true>, TContext>({
		mutationKey: Common.UseDelegateBySig1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			delegateBySig1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useVote2 = <
	TData = Common.Vote2MutationResult,
	TError = Vote2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<Vote2Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Vote2Data, true>, TContext>({
		mutationKey: Common.UseVote2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			vote2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useReset2 = <
	TData = Common.Reset2MutationResult,
	TError = Reset2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<Reset2Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Reset2Data, true>, TContext>({
		mutationKey: Common.UseReset2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			reset2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const usePoke2 = <
	TData = Common.Poke2MutationResult,
	TError = Poke2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<Poke2Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Poke2Data, true>, TContext>({
		mutationKey: Common.UsePoke2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			poke2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCreateGauge2 = <
	TData = Common.CreateGauge2MutationResult,
	TError = CreateGauge2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<CreateGauge2Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<CreateGauge2Data, true>, TContext>({
		mutationKey: Common.UseCreateGauge2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			createGauge2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useVoteWithOptimalDistribution2 = <
	TData = Common.VoteWithOptimalDistribution2MutationResult,
	TError = VoteWithOptimalDistribution2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<VoteWithOptimalDistribution2Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<VoteWithOptimalDistribution2Data, true>,
		TContext
	>({
		mutationKey: Common.UseVoteWithOptimalDistribution2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			voteWithOptimalDistribution2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useAttachTokenToGauge1 = <
	TData = Common.AttachTokenToGauge1MutationResult,
	TError = AttachTokenToGauge1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<AttachTokenToGauge1Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<AttachTokenToGauge1Data, true>, TContext>({
		mutationKey: Common.UseAttachTokenToGauge1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			attachTokenToGauge1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useDetachTokenFromGauge1 = <
	TData = Common.DetachTokenFromGauge1MutationResult,
	TError = DetachTokenFromGauge1Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<DetachTokenFromGauge1Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<DetachTokenFromGauge1Data, true>,
		TContext
	>({
		mutationKey: Common.UseDetachTokenFromGauge1KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			detachTokenFromGauge1(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useKillGauge2 = <
	TData = Common.KillGauge2MutationResult,
	TError = KillGauge2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<KillGauge2Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<KillGauge2Data, true>, TContext>({
		mutationKey: Common.UseKillGauge2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			killGauge2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useReviveGauge2 = <
	TData = Common.ReviveGauge2MutationResult,
	TError = ReviveGauge2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<ReviveGauge2Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<ReviveGauge2Data, true>, TContext>({
		mutationKey: Common.UseReviveGauge2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			reviveGauge2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useNotifyRewardAmount2 = <
	TData = Common.NotifyRewardAmount2MutationResult,
	TError = NotifyRewardAmount2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<NotifyRewardAmount2Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<NotifyRewardAmount2Data, true>, TContext>({
		mutationKey: Common.UseNotifyRewardAmount2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			notifyRewardAmount2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useDistribute2 = <
	TData = Common.Distribute2MutationResult,
	TError = Distribute2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<Distribute2Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Distribute2Data, true>, TContext>({
		mutationKey: Common.UseDistribute2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			distribute2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useClaimBribes2 = <
	TData = Common.ClaimBribes2MutationResult,
	TError = ClaimBribes2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<ClaimBribes2Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<ClaimBribes2Data, true>, TContext>({
		mutationKey: Common.UseClaimBribes2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			claimBribes2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useClaimFees2 = <
	TData = Common.ClaimFees2MutationResult,
	TError = ClaimFees2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<ClaimFees2Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<ClaimFees2Data, true>, TContext>({
		mutationKey: Common.UseClaimFees2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			claimFees2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useClaimRewards2 = <
	TData = Common.ClaimRewards2MutationResult,
	TError = ClaimRewards2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<ClaimRewards2Data, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<ClaimRewards2Data, true>, TContext>({
		mutationKey: Common.UseClaimRewards2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			claimRewards2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useWhitelist2 = <
	TData = Common.Whitelist2MutationResult,
	TError = Whitelist2Error,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<Whitelist2Data, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<Whitelist2Data, true>, TContext>({
		mutationKey: Common.UseWhitelist2KeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			whitelist2(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useUpdateFlow = <
	TData = Common.UpdateFlowMutationResult,
	TError = UpdateFlowError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<UpdateFlowData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<UpdateFlowData, true>, TContext>({
		mutationKey: Common.UseUpdateFlowKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			updateFlow(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useAccountsDeleteEthereumAccount = <
	TData = Common.AccountsDeleteEthereumAccountMutationResult,
	TError = AccountsDeleteEthereumAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<AccountsDeleteEthereumAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<AccountsDeleteEthereumAccountData, true>,
		TContext
	>({
		mutationKey: Common.UseAccountsDeleteEthereumAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			accountsDeleteEthereumAccount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useCosmosCosmosDeleteAccount = <
	TData = Common.CosmosCosmosDeleteAccountMutationResult,
	TError = CosmosCosmosDeleteAccountError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<CosmosCosmosDeleteAccountData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<CosmosCosmosDeleteAccountData, true>,
		TContext
	>({
		mutationKey: Common.UseCosmosCosmosDeleteAccountKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			cosmosCosmosDeleteAccount(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useDeleteJob = <
	TData = Common.DeleteJobMutationResult,
	TError = DeleteJobError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<DeleteJobData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<DeleteJobData, true>, TContext>({
		mutationKey: Common.UseDeleteJobKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			deleteJob(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useDeleteFlow = <
	TData = Common.DeleteFlowMutationResult,
	TError = DeleteFlowError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<TData, TError, Options<DeleteFlowData, true>, TContext>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<TData, TError, Options<DeleteFlowData, true>, TContext>({
		mutationKey: Common.UseDeleteFlowKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			deleteFlow(clientOptions) as unknown as Promise<TData>,
		...options,
	});
export const useDeleteUserDefinedFunction = <
	TData = Common.DeleteUserDefinedFunctionMutationResult,
	TError = DeleteUserDefinedFunctionError,
	TQueryKey extends Array<unknown> = unknown[],
	TContext = unknown,
>(
	mutationKey?: TQueryKey,
	options?: Omit<
		UseMutationOptions<
			TData,
			TError,
			Options<DeleteUserDefinedFunctionData, true>,
			TContext
		>,
		"mutationKey" | "mutationFn"
	>,
) =>
	useMutation<
		TData,
		TError,
		Options<DeleteUserDefinedFunctionData, true>,
		TContext
	>({
		mutationKey: Common.UseDeleteUserDefinedFunctionKeyFn(mutationKey),
		mutationFn: (clientOptions) =>
			deleteUserDefinedFunction(clientOptions) as unknown as Promise<TData>,
		...options,
	});
