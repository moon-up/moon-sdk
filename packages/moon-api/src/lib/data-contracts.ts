/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Represents the structure of the API response for AAVE v3 rewards. */
export interface AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult {
	/** The data returned by the API, if any. */
	data?: AAVEv3RewardsExecuteFunctionResult;
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the structure of the API response for AAVE v3 rewards. */
export interface AAVEv3RewardsAPIResponseString {
	/** The data returned by the API, if any. */
	data?: string;
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the structure of the API response for AAVE v3 rewards. */
export interface AAVEv3RewardsAPIResponseStringArray {
	/** The data returned by the API, if any. */
	data?: string[];
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the result of executing a function in the AAVE v3 rewards wrapper. */
export interface AAVEv3RewardsExecuteFunctionResult {
	/** Optional response from broadcasting the raw transaction. */
	broadcasted?: BroadCastRawTransactionResponse;
	/** Optional transaction data. */
	data?: Transaction;
	/** The name of the executed function. */
	function: string;
	/** Optional message providing additional information about the execution result. */
	message?: string;
	/** The parameters passed to the executed function. */
	params: any[];
	/** Optional response from simulating asset changes. */
	simulation?: SimulateAssetChangesResponse;
	/** Optional flag indicating whether the function execution was successful. */
	success?: boolean;
	/** The transaction details of the executed function. */
	transaction: AAVEv3RewardsTransaction;
	/** Optional user operation identifier. */
	user_op?: string;
}

/** Interface representing the input body for AAVE v3 rewards. */
export interface AAVEv3RewardsInputBody {
	/** Flag to indicate if the transaction is from an externally owned account. */
	EOA?: boolean;
	/** The access list for the transaction. */
	accessList?: AccessTuple[];
	/** The account involved in the transaction. */
	account?: string;
	/** Flag to indicate if the nonce should always be incremented. */
	alwaysIncrementNonce?: boolean;
	/** The amount of tokens. */
	amount?: string;
	/** The amounts involved in the transaction. */
	amounts?: string[];
	/** Whether the transaction is approved. */
	approved?: boolean;
	/** The asset involved in the transaction. */
	asset?: string;
	/** The list of asset addresses. */
	assets?: string[];
	/** The gas for blob transactions. */
	blobGas?: string;
	/** The gas fee cap for blob transactions. */
	blobGasFeeCap?: string;
	/** The hashes for blob transactions. */
	blobHashes?: string[];
	/** The borrow amount. */
	borrowAmount?: string | number;
	/** Flag to indicate if the transaction should be broadcasted. */
	broadcast?: boolean;
	/** The chain ID. */
	chain_id?: string;
	/** The collateral asset. */
	collateralAsset?: string;
	/** The address of the contract. */
	contract_address?: string;
	/** The data to be sent with the transaction. */
	data?: string;
	/** The debt asset. */
	debtAsset?: string;
	/** The debt to cover. */
	debtToCover?: string;
	/** Flag to indicate if the transaction is a dry run. */
	dryrun?: boolean;
	/** The encoding type. */
	encoding?: string;
	/** The gas limit for the transaction. */
	gas?: string;
	/** The gas limit for the transaction. */
	gasLimit?: string;
	/** The gas price for the transaction. */
	gasPrice?: string;
	/** The initial deposit. */
	initialDeposit?: string | number;
	/** The initiator of the transaction. */
	initiator?: string;
	/** The input data. */
	input?: string;
	/** The input tokens. */
	inputTokens?: TokenAmount[];
	/**
	 * The interest rate mode.
	 * @format double
	 */
	interestRateMode?: number;
	/** The maximum fee per gas. */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas. */
	maxPriorityFeePerGas?: string;
	/** The minimum health factor. */
	minHealthFactor?: string | number;
	/** The modes of the transaction. */
	modes?: number[];
	/** The transaction nonce. */
	nonce?: string;
	/** The address on behalf of which the transaction is made. */
	onBehalfOf?: string;
	/** The output tokens. */
	outputTokens?: TokenProportion[];
	/** Additional parameters. */
	params?: string;
	/** The premiums. */
	premiums?: string[] | number[];
	/**
	 * The rate mode.
	 * @format double
	 */
	rateMode?: number;
	/** Whether to receive a token. */
	receiveAToken?: boolean;
	/** The receiver address. */
	receiverAddress?: string;
	/**
	 * The referral code.
	 * @format double
	 */
	referralCode?: number;
	/** The reward address. */
	reward?: string;
	/** The role of the user. */
	role?: string;
	/** Whether to simulate the transaction. */
	simulate?: boolean;
	/**
	 * The slippage limit percentage.
	 * @format double
	 */
	slippageLimitPercent?: number;
	/** The recipient address. */
	to?: string;
	/** The token ID. */
	token_id?: string;
	/** The token IDs. */
	token_ids?: string;
	/**
	 * The type of transaction.
	 * @format double
	 */
	type?: number;
	/** Whether to use as collateral. */
	useAsCollateral?: boolean;
	/** The user address. */
	user?: string;
	/** The value of the transaction. */
	value?: string;
}

/** Represents a transaction for AAVE v3 rewards. */
export interface AAVEv3RewardsTransaction {
	/** The chain ID of the network where the transaction is sent. */
	chainId: string;
	/** The data payload of the transaction. */
	data: string;
	/** The sender address of the transaction. */
	from: string;
	/**
	 * The gas limit for the transaction.
	 * Optional.
	 */
	gasLimit?: string;
	/**
	 * The gas price for the transaction, in wei.
	 * Optional.
	 */
	gasPrice?: string;
	/**
	 * The maximum fee per gas for the transaction, in wei.
	 * Optional.
	 */
	maxFeePerGas?: string;
	/**
	 * The maximum priority fee per gas for the transaction, in wei.
	 * Optional.
	 */
	maxPriorityFeePerGas?: string;
	/**
	 * The nonce of the transaction.
	 * @format double
	 */
	nonce: number;
	/** The recipient address of the transaction. */
	to: string;
	/**
	 * The type of the transaction.
	 * Optional.
	 * @format double
	 */
	type?: number;
	/** The value to be transferred in the transaction, in wei. */
	value: string;
}

/** Represents the structure of the API response from the AAVE v3 UI Incentive Data Provider. */
export interface AAVEv3UiIncentiveDataProviderAPIResponseAggregatedReserveIncentiveDataArray {
	/** The data returned by the API, if any. */
	data?: AggregatedReserveIncentiveData[];
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the structure of the API response from the AAVE v3 UI Incentive Data Provider. */
export interface AAVEv3UiIncentiveDataProviderAPIResponseFullReservesIncentiveData {
	/** The data returned by the API, if any. */
	data?: FullReservesIncentiveData;
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the structure of the API response from the AAVE v3 UI Incentive Data Provider. */
export interface AAVEv3UiIncentiveDataProviderAPIResponseUserReserveIncentiveDataArray {
	/** The data returned by the API, if any. */
	data?: UserReserveIncentiveData[];
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Interface representing the API response from AAVE v3 UI Pool Data Provider. */
export interface AAVEv3UiPoolDataProviderAPIResponseAny {
	/** The data returned by the API call, if any. */
	data?: any;
	/** A message providing additional information about the API call. */
	message: string;
	/** Indicates whether the API call was successful. */
	success: boolean;
}

/** Interface representing the API response from AAVE v3 UI Pool Data Provider. */
export interface AAVEv3UiPoolDataProviderAPIResponseString {
	/** The data returned by the API call, if any. */
	data?: string;
	/** A message providing additional information about the API call. */
	message: string;
	/** Indicates whether the API call was successful. */
	success: boolean;
}

/** Interface representing the API response from AAVE v3 UI Pool Data Provider. */
export interface AAVEv3UiPoolDataProviderAPIResponseStringArray {
	/** The data returned by the API call, if any. */
	data?: string[];
	/** A message providing additional information about the API call. */
	message: string;
	/** Indicates whether the API call was successful. */
	success: boolean;
}

/** Interface representing the API response from AAVE v3 UI Pool Data Provider. */
export interface AAVEv3UiPoolDataProviderAPIResponseUserReserveDataArray {
	/** The data returned by the API call, if any. */
	data?: UserReserveData[];
	/** A message providing additional information about the API call. */
	message: string;
	/** Indicates whether the API call was successful. */
	success: boolean;
}

/** Represents the response from the AAVE v3 Wallet Balance Provider API. */
export interface AAVEv3WalletBalanceProviderAPIResponseString {
	/** The data returned by the API call, if any. */
	data?: string;
	/** A message providing additional information about the API call. */
	message: string;
	/** Indicates whether the API call was successful. */
	success: boolean;
}

/** Represents the response from the AAVE v3 Wallet Balance Provider API. */
export interface AAVEv3WalletBalanceProviderAPIResponseStringArray {
	/** The data returned by the API call, if any. */
	data?: string[];
	/** A message providing additional information about the API call. */
	message: string;
	/** Indicates whether the API call was successful. */
	success: boolean;
}

/** Represents the response from the AAVE v3 Wallet Balance Provider API. */
export interface AAVEv3WalletBalanceProviderAPIResponseTokensStringArrayBalancesStringArray {
	/** The data returned by the API call, if any. */
	data?: {
		balances: string[];
		tokens: string[];
	};
	/** A message providing additional information about the API call. */
	message: string;
	/** Indicates whether the API call was successful. */
	success: boolean;
}

export type AavEv3IncentiveDataProviderGetFullReservesDataData =
	AAVEv3UiIncentiveDataProviderAPIResponseFullReservesIncentiveData;

export interface AavEv3IncentiveDataProviderGetFullReservesDataParams {
	/** - Chain ID to target */
	chain_id: string;
	/** - Address of the incentive data provider contract */
	contract_address: string;
	/** - Address of the pool address provider */
	provider: string;
	/** - Address of the user to get incentive data for */
	user: string;
}

export type AavEv3IncentiveDataProviderGetReservesDataData =
	AAVEv3UiIncentiveDataProviderAPIResponseAggregatedReserveIncentiveDataArray;

export interface AavEv3IncentiveDataProviderGetReservesDataParams {
	/** - Chain ID to target */
	chain_id: string;
	/** - Address of the incentive data provider contract */
	contract_address: string;
	/** - Address of the pool address provider */
	provider: string;
}

export type AavEv3IncentiveDataProviderGetUserReservesDataData =
	AAVEv3UiIncentiveDataProviderAPIResponseUserReserveIncentiveDataArray;

export interface AavEv3IncentiveDataProviderGetUserReservesDataParams {
	/** - Chain ID to target */
	chain_id: string;
	/** - Address of the incentive data provider contract */
	contract_address: string;
	/** - Address of the pool address provider */
	provider: string;
	/** - Address of the user to get incentive data for */
	user: string;
}

export type AavEv3RewardsClaimAllRewardsData =
	AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult;

export type AavEv3RewardsClaimAllRewardsOnBehalfData =
	AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult;

export type AavEv3RewardsClaimAllRewardsToSelfData =
	AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult;

export type AavEv3RewardsClaimRewardsData =
	AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult;

export type AavEv3RewardsClaimRewardsOnBehalfData =
	AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult;

export type AavEv3RewardsClaimRewardsToSelfData =
	AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult;

export type AavEv3RewardsGetRewardsByAssetData =
	AAVEv3RewardsAPIResponseStringArray;

export interface AavEv3RewardsGetRewardsByAssetParams {
	/** - Account identifier for the request */
	account: string;
	/** - Contract address */
	address: string;
	/** - Asset address to query rewards for */
	asset: string;
	/** - Chain ID to target */
	chainId: string;
}

export type AavEv3RewardsGetRewardsDataData =
	AAVEv3RewardsAPIResponseStringArray;

export interface AavEv3RewardsGetRewardsDataParams {
	/** - Account identifier for the request */
	account: string;
	/** - Contract address */
	address: string;
	/** - Asset address to get rewards data for */
	asset: string;
	/** - Chain ID to target */
	chainId: string;
	/** - Reward token address */
	reward: string;
}

export type AavEv3RewardsGetUserRewardsData = AAVEv3RewardsAPIResponseString;

export interface AavEv3RewardsGetUserRewardsParams {
	/** - Account identifier for the request */
	account: string;
	/** - Contract address */
	address: string;
	/** - Array of asset addresses to check rewards for */
	assets: string[];
	/** - Chain ID to target */
	chainId: string;
	/** - Reward token address */
	reward: string;
	/** - User address to check rewards for */
	user: string;
}

/** Represents the structure of the response from the Aave Pool API. */
export interface AavePoolAPIResponseAavePoolExecuteFunctionResult {
	/** The data returned by the API, if any. */
	data?: AavePoolExecuteFunctionResult;
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the structure of the response from the Aave Pool API. */
export interface AavePoolAPIResponseAny {
	/** The data returned by the API, if any. */
	data?: any;
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the result of executing a function on the Aave pool. */
export interface AavePoolExecuteFunctionResult {
	/** Optional response indicating whether the transaction was broadcasted. */
	broadcasted?: BroadCastRawTransactionResponse;
	/** Optional data related to the transaction. */
	data?: Transaction;
	/** The name of the function that was executed. */
	function: string;
	/** Optional message providing additional information about the execution. */
	message?: string;
	/** The parameters passed to the function. */
	params: any[];
	/** Optional response from simulating asset changes. */
	simulation?: SimulateAssetChangesResponse;
	/** Indicates whether the function execution was successful. */
	success?: boolean;
	/** The transaction associated with the function execution. */
	transaction: AavePoolTransaction;
	/** Optional user operation identifier. */
	user_op?: string;
}

/**
 * Interface representing the input body for Aave pool transactions.
 * Extends the InputBody interface.
 */
export interface AavePoolInputBody {
	/** Indicates if the transaction is from an externally owned account. */
	EOA?: boolean;
	/** The access list for the transaction. */
	accessList?: AccessTuple[];
	/** The account involved in the transaction. */
	account?: string;
	/** Indicates if the nonce should always be incremented. */
	alwaysIncrementNonce?: boolean;
	/** The amount involved in the transaction. */
	amount?: string;
	/** The amounts involved in the transaction. */
	amounts?: string[];
	/** Whether the transaction is approved. */
	approved?: boolean;
	/** The asset involved in the transaction. */
	asset?: string;
	/** The assets involved in the transaction. */
	assets?: string[];
	/** The gas for blob transactions. */
	blobGas?: string;
	/** The gas fee cap for blob transactions. */
	blobGasFeeCap?: string;
	/** The hashes for blob transactions. */
	blobHashes?: string[];
	/** The borrow amount. */
	borrowAmount?: string | number;
	/** Indicates if the transaction should be broadcasted. */
	broadcast?: boolean;
	/** The chain ID. */
	chain_id?: string;
	/** The collateral asset. */
	collateralAsset?: string;
	/** The contract address involved in the transaction. */
	contract_address?: string;
	/** The data payload for the transaction. */
	data?: string;
	/** The debt asset. */
	debtAsset?: string;
	/** The debt to cover. */
	debtToCover?: string;
	/** Indicates if the transaction is a dry run. */
	dryrun?: boolean;
	/** The encoding type. */
	encoding?: string;
	/** The gas limit for the transaction. */
	gas?: string;
	/** The gas limit for the transaction. */
	gasLimit?: string;
	/** The gas price for the transaction. */
	gasPrice?: string;
	/** The initial deposit. */
	initialDeposit?: string | number;
	/** The initiator of the transaction. */
	initiator?: string;
	/** The input data. */
	input?: string;
	/** The input tokens. */
	inputTokens?: TokenAmount[];
	/**
	 * The interest rate mode for the transaction.
	 * @format double
	 */
	interestRateMode?: number;
	/** The maximum fee per gas. */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas. */
	maxPriorityFeePerGas?: string;
	/** The minimum health factor. */
	minHealthFactor?: string | number;
	/** The modes of the transaction. */
	modes?: number[];
	/** The nonce for the transaction. */
	nonce?: string;
	/** The address on behalf of which the transaction is made. */
	onBehalfOf?: string;
	/** The output tokens. */
	outputTokens?: TokenProportion[];
	/** Additional parameters. */
	params?: string;
	/** The premiums. */
	premiums?: string[] | number[];
	/**
	 * The rate mode.
	 * @format double
	 */
	rateMode?: number;
	/** Indicates if the AToken should be received. */
	receiveAToken?: boolean;
	/** The receiver address. */
	receiverAddress?: string;
	/**
	 * The referral code for the transaction.
	 * @format double
	 */
	referralCode?: number;
	/** The role of the user. */
	role?: string;
	/** Indicates if the transaction should be simulated. */
	simulate?: boolean;
	/**
	 * The slippage limit percentage.
	 * @format double
	 */
	slippageLimitPercent?: number;
	/** The recipient address. */
	to?: string;
	/** The token ID. */
	token_id?: string;
	/** The token IDs. */
	token_ids?: string;
	/**
	 * The type of transaction.
	 * @format double
	 */
	type?: number;
	/** Indicates if the asset should be used as collateral. */
	useAsCollateral?: boolean;
	/** The user involved in the transaction. */
	user?: string;
	/** The value of the transaction. */
	value?: string;
}

/** Represents a transaction in the Aave V3 Pool. */
export interface AavePoolTransaction {
	/** The chain ID of the transaction. */
	chainId: string;
	/** The data associated with the transaction. */
	data: string;
	/** The address of the sender. */
	from: string;
	/** The gas limit for the transaction (optional). */
	gasLimit?: string;
	/** The gas price for the transaction (optional). */
	gasPrice?: string;
	/** The maximum fee per gas for the transaction (optional). */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas for the transaction (optional). */
	maxPriorityFeePerGas?: string;
	/**
	 * The nonce of the transaction.
	 * @format double
	 */
	nonce: number;
	/** The address of the recipient. */
	to: string;
	/**
	 * The type of the transaction (optional).
	 * @format double
	 */
	type?: number;
	/** The value of the transaction. */
	value: string;
}

export type AaveV3UiPoolDataProviderEthCurrencyUnitData =
	AAVEv3UiPoolDataProviderAPIResponseString;

export interface AaveV3UiPoolDataProviderEthCurrencyUnitParams {
	/** - The chain ID to query. */
	chain_id: string;
	/** - The contract address to query. */
	contract_address: string;
}

export type AaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorData =
	AAVEv3UiPoolDataProviderAPIResponseString;

export interface AaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorParams {
	/** - The chain ID to query. */
	chain_id: string;
	/** - The contract address to query. */
	contract_address: string;
}

export type AaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorData =
	AAVEv3UiPoolDataProviderAPIResponseString;

export interface AaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorParams {
	/** - The chain ID to query. */
	chain_id: string;
	/** - The contract address to query. */
	contract_address: string;
}

export type AaveV3UiPoolDataProviderReservesListData =
	AAVEv3UiPoolDataProviderAPIResponseStringArray;

export interface AaveV3UiPoolDataProviderReservesListParams {
	/** - The chain ID to query. */
	chain_id: string;
	/** - The contract address to query. */
	contract_address: string;
	/** - The provider to use for querying the reserves list. */
	provider: string;
}

export type AaveV3UiPoolDataProviderUserReservesDataData =
	AAVEv3UiPoolDataProviderAPIResponseUserReserveDataArray;

export interface AaveV3UiPoolDataProviderUserReservesDataParams {
	/** - The chain ID where the contract is deployed. */
	chain_id: string;
	/** - The contract address of the AAVE v3 UI Pool Data Provider. */
	contract_address: string;
	/** - The provider address. */
	provider: string;
	/** - The user address whose reserve data is to be fetched. */
	user: string;
}

export type AaveV3WalletBalanceOfData =
	AAVEv3WalletBalanceProviderAPIResponseString;

export interface AaveV3WalletBalanceOfParams {
	/** - The ID of the blockchain network. */
	chain_id: string;
	/** - The address of the contract to query. */
	contract_address: string;
	/** - The address of the token to query the balance for. */
	token_address: string;
	/** - The address of the user whose balance is being queried. */
	user: string;
}

export type AaveV3WalletBatchBalanceOfData =
	AAVEv3WalletBalanceProviderAPIResponseStringArray;

export interface AaveV3WalletBatchBalanceOfParams {
	/** - The ID of the blockchain network. */
	chain_id: string;
	/** - The address of the contract. */
	contract_address: string;
	/** - An array of token addresses to retrieve balances for. */
	tokens: string[];
	/** - An array of user addresses to retrieve balances for. */
	users: string[];
}

export type AaveV3WalletUserWalletBalancesData =
	AAVEv3WalletBalanceProviderAPIResponseTokensStringArrayBalancesStringArray;

export interface AaveV3WalletUserWalletBalancesParams {
	/** - The chain ID to query. */
	chain_id: string;
	/** - The contract address to query. */
	contract_address: string;
	/** - The provider to use for querying balances. */
	provider: string;
	/** - The user address to query balances for. */
	user: string;
}

export type Aavev3PoolAddressProviderGetAclAdminData =
	PoolAddressProviderAPIResponseString;

export interface Aavev3PoolAddressProviderGetAclAdminParams {
	/** - The account address to query. */
	account: string;
	/** - The address of the pool address provider. */
	address: string;
	/** - The chain ID of the blockchain network. */
	chainId: string;
}

export type Aavev3PoolAddressProviderGetAclManagerData =
	PoolAddressProviderAPIResponseString;

export interface Aavev3PoolAddressProviderGetAclManagerParams {
	/** - The account path parameter. */
	account: string;
	/** - The address query parameter. */
	address: string;
	/** - The chain ID query parameter. */
	chainId: string;
}

export type Aavev3PoolAddressProviderGetAddressData =
	PoolAddressProviderAPIResponseString;

export interface Aavev3PoolAddressProviderGetAddressParams {
	/** - The account path parameter. */
	account: string;
	/** - The address from the query parameters. */
	address: string;
	/** - The chain ID from the query parameters. */
	chainId: string;
	/** - The ID from the query parameters. */
	id: string;
}

export type Aavev3PoolAddressProviderGetMarketIdData =
	PoolAddressProviderAPIResponseString;

export interface Aavev3PoolAddressProviderGetMarketIdParams {
	/** - The account path parameter. */
	account: string;
	/** - The address from the query parameters. */
	address: string;
	/** - The chain ID from the query parameters. */
	chainId: string;
}

export type Aavev3PoolAddressProviderGetPoolConfiguratorData =
	PoolAddressProviderAPIResponseString;

export interface Aavev3PoolAddressProviderGetPoolConfiguratorParams {
	/** - The account identifier. */
	account: string;
	/** - The address of the pool. */
	address: string;
	/** - The chain identifier. */
	chainId: string;
}

export type Aavev3PoolAddressProviderGetPoolData =
	PoolAddressProviderAPIResponseString;

export interface Aavev3PoolAddressProviderGetPoolParams {
	/** - The account identifier. */
	account: string;
	/** - The address to query. */
	address: string;
	/** - The blockchain network identifier. */
	chainId: string;
}

export type Aavev3PoolAddressProviderGetPriceOracleData =
	PoolAddressProviderAPIResponseString;

export interface Aavev3PoolAddressProviderGetPriceOracleParams {
	/** - The account identifier. */
	account: string;
	/** - The address of the pool address provider. */
	address: string;
	/** - The blockchain chain identifier. */
	chainId: string;
}

export type Aavev3PoolAddressProviderRegistryGetATokenTotalSupplyData =
	PoolAddressProviderRegistryAPIResponseString;

export interface Aavev3PoolAddressProviderRegistryGetATokenTotalSupplyParams {
	/** - The account address. */
	account: string;
	/** - The address of the pool address provider registry. */
	address: string;
	/** - The asset for which to get the total supply. */
	asset: string;
	/** - The chain ID. */
	chainId: string;
}

export type Aavev3PoolAddressProviderRegistryGetAddressesProviderData =
	PoolAddressProviderRegistryAPIResponseString;

export interface Aavev3PoolAddressProviderRegistryGetAddressesProviderParams {
	/** - The account identifier. */
	account: string;
	/** - The address of the registry. */
	address: string;
	/** - The blockchain chain identifier. */
	chainId: string;
}

export type Aavev3PoolAddressProviderRegistryGetAllATokensData =
	PoolAddressProviderRegistryAPIResponseAnyArray;

export interface Aavev3PoolAddressProviderRegistryGetAllATokensParams {
	/** - The account identifier. */
	account: string;
	/** - The address to query. */
	address: string;
	/** - The blockchain chain identifier. */
	chainId: string;
}

export type Aavev3PoolAddressProviderRegistryGetDebtCeilingData =
	PoolAddressProviderRegistryAPIResponseString;

export interface Aavev3PoolAddressProviderRegistryGetDebtCeilingParams {
	/** - The account identifier. */
	account: string;
	/** - The address of the Pool Address Provider Registry. */
	address: string;
	/** - The asset for which to retrieve the debt ceiling. */
	asset: string;
	/** - The blockchain chain identifier. */
	chainId: string;
}

export type Aavev3PoolAddressProviderSetAclAdminData =
	PoolAddressProviderAPIResponsePoolAddressProviderExecuteFunctionResult;

export type Aavev3PoolAddressProviderSetAclManagerData =
	PoolAddressProviderAPIResponsePoolAddressProviderExecuteFunctionResult;

export type Aavev3PoolAddressProviderSetAddressData =
	PoolAddressProviderAPIResponsePoolAddressProviderExecuteFunctionResult;

export type Aavev3PoolAddressProviderSetMarketIdData =
	PoolAddressProviderAPIResponsePoolAddressProviderExecuteFunctionResult;

export type Aavev3PoolAddressProviderSetPoolConfiguratorImplData =
	PoolAddressProviderAPIResponsePoolAddressProviderExecuteFunctionResult;

export type Aavev3PoolAddressProviderSetPoolImplData =
	PoolAddressProviderAPIResponsePoolAddressProviderExecuteFunctionResult;

export type Aavev3PoolBorrowData =
	AavePoolAPIResponseAavePoolExecuteFunctionResult;

export type Aavev3PoolGetReserveDataData = AavePoolAPIResponseAny;

export interface Aavev3PoolGetReserveDataParams {
	/** - The account identifier. */
	account: string;
	/** - The address of the Aave pool. */
	address: string;
	/** - The asset for which to retrieve reserve data. */
	asset: string;
	/** - The blockchain chain ID. */
	chainId: string;
}

export type Aavev3PoolGetUserAccountDataData = AavePoolAPIResponseAny;

export interface Aavev3PoolGetUserAccountDataParams {
	/** - The account identifier from the path. */
	account: string;
	/** - The address from the query parameters. */
	address: string;
	/** - The chain ID from the query parameters. */
	chainId: string;
	/** - The user identifier from the query parameters. */
	user: string;
}

export type Aavev3PoolLiquidationCallData =
	AavePoolAPIResponseAavePoolExecuteFunctionResult;

export type Aavev3PoolRepayData =
	AavePoolAPIResponseAavePoolExecuteFunctionResult;

export type Aavev3PoolSetUserUseReserveAsCollateralData =
	AavePoolAPIResponseAavePoolExecuteFunctionResult;

export type Aavev3PoolSupplyData =
	AavePoolAPIResponseAavePoolExecuteFunctionResult;

export type Aavev3PoolWithdrawData =
	AavePoolAPIResponseAavePoolExecuteFunctionResult;

/** Interface representing the input required for ABI encoding. */
export interface AbiEncodeInput {
	/** The ABI (Application Binary Interface) definition. */
	abi: any;
	/** The name of the function to be called. */
	functionName: string;
	/** The parameters to be passed to the function. */
	params: any[];
}

/**
 * Interface representing the output of an ABI encoding operation.
 * Extends the BaseAPIResponse interface.
 */
export interface AbiEncodeOutput {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** Optional data object containing the encoded string. */
	data?: {
		/** The encoded string resulting from the ABI encoding operation. */
		encoded: string;
	};
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

export type AbstainData = RamsesNFTAPIResponseRamsesNFTExecuteFunctionResult;

export type AbstainResult = VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

/** Represents a tuple containing access information. */
export interface AccessTuple {
	/** The address associated with the access tuple. */
	address: string;
	/** An array of storage keys related to the address. */
	storageKeys: string[];
}

/**
 * Interface representing the response from the Account API.
 * Extends the BaseAPIResponse to include additional data specific to account responses.
 */
export interface AccountAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The account response data. */
	data?: AccountResponse;
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

/** Represents the data associated with an account. */
export interface AccountData {
	/** An optional address of the account. */
	address?: string;
	/** An optional array of keys associated with the account. */
	keys?: string[];
	/** An optional private key of the account. */
	private_key?: string;
	/** An optional public key of the account. */
	public_key?: string;
}

/** Represents the response structure for an account. */
export interface AccountResponse {
	/** Optional address of the account. */
	address?: string;
	/** Data associated with the account. */
	data: AccountData;
	/** Optional array of keys associated with the account. */
	keys?: string[];
	/** Optional private key of the account. */
	private_key?: string;
	/** Optional public key of the account. */
	public_key?: string;
}

export type AccountsBroadcastEthreeumTransactionData =
	BroadCastRawTransactionAPIResponse;

export type AccountsCreateEthereumAccountData = AccountAPIResponse;

export type AccountsDeleteEthereumAccountData = AccountAPIResponse;

export type AccountsDeployContractData = TransactionAPIResponse;

export type AccountsEncodeAbiDataData = AbiEncodeOutput;

export type AccountsEstimateGasData = TransactionAPIResponse;

export type AccountsEthereumGetNativeBalanceData = BalanceAPIResponse;

export interface AccountsEthereumGetNativeBalanceParams {
	/** - The name of the account to retrieve the balance for. */
	accountName: string;
	/** - The ID of the blockchain network. */
	chainId: string;
}

export type AccountsEthereumGetNonceData = NonceAPIResponse;

export interface AccountsEthereumGetNonceParams {
	/** - The name of the account to retrieve the nonce for. */
	accountName: string;
	/** - The ID of the blockchain network. */
	chainId: string;
}

export type AccountsExportEthreumAccountData = ExportAccountAPIResponse;

export type AccountsGetEthreumAccountData = AccountAPIResponse;

export type AccountsListEthereumAccountsData = AccountAPIResponse;

export type AccountsSignEthereumTransactionData = TransactionAPIResponse;

export type AccountsSignEthereumTypedDataData = SignMessageAPIResponse;

export type AccountsSignEthreumMessageData = SignMessageAPIResponse;

export type AccountsSuggestGasPriceData = TransactionAPIResponse;

export interface AccountsSuggestGasPriceParams {
	/** - The name of the account for which to suggest the gas price. */
	accountName: string;
	/** - The ID of the blockchain network. */
	chainId: string;
}

export type AccountsTransferEthData = TransactionAPIResponse;

export interface Action {
	fromAddress: string;
	fromAmount: string;
	/** @format double */
	fromChainId: number;
	fromToken: TokenDetails;
	/** @format double */
	slippage: number;
	toAddress: string;
	/** @format double */
	toChainId: number;
	toToken: TokenDetails;
}

export type ActivateBotData = string;

export type AddLiquidityData =
	LynexRouterAPIResponseLynexRouterExecuteFunctionResult;

export type AddLiquidityEthData =
	LynexRouterAPIResponseLynexRouterExecuteFunctionResult;

export type AddLiquidityEthOutput =
	UniswapV2APIResponseUniswapV2ExecuteFunctionResult;

export type AddLiquidityEthResult =
	RamsesRouterAPIResponseRamsesRouterExecuteFunctionResult;

export type AddLiquidityOutput =
	UniswapV2APIResponseUniswapV2ExecuteFunctionResult;

export type AddLiquidityResult =
	RamsesRouterAPIResponseRamsesRouterExecuteFunctionResult;

/** Interface representing the aggregated reserve incentive data. */
export interface AggregatedReserveIncentiveData {
	/** The incentive data for the aToken. */
	aIncentiveData: IncentiveData;
	/** The incentive data for the stable debt token. */
	sIncentiveData: IncentiveData;
	/** The address of the underlying asset. */
	underlyingAsset: string;
	/** The incentive data for the variable debt token. */
	vIncentiveData: IncentiveData;
}

/** Represents a collection of financial statements. */
export interface AllFinancials {
	/** An array of balance sheets. */
	balance_sheets: BalanceSheet[];
	/** An array of cash flow statements. */
	cash_flow_statements: CashFlowStatement[];
	/** An array of income statements. */
	income_statements: IncomeStatement[];
}

/** Represents the response of the `getAllFinancials` endpoint. */
export interface AllFinancialsAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The all financials data. */
	data?: AllFinancials;
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

export interface AlloraInferenceResponse {
	data?: {
		confidenceIntervals: {
			percentiles: number[];
			values: number[];
		};
		/** @format double */
		currentPrice: number;
		/** @format double */
		impliedFuturePrice: number;
		/** @format double */
		percentageChange: number;
		/** @format double */
		predictedLogReturn: number;
		timestamp: string;
	};
	message: string;
	success: boolean;
}

/** Represents a standard API response. */
export interface ApiResponseChainsResponse {
	data?: ChainsResponse;
	message: string;
	success: boolean;
}

/** Represents a standard API response. */
export interface ApiResponseConnectionsResponse {
	data?: ConnectionsResponse;
	message: string;
	success: boolean;
}

/** Represents a standard API response. */
export interface ApiResponsePostQuote {
	/** Interface representing the structure of a post quote. */
	data?: PostQuote;
	message: string;
	success: boolean;
}

/** Represents a standard API response. */
export interface ApiResponseQuote {
	data?: Quote;
	message: string;
	success: boolean;
}

/** Represents a standard API response. */
export interface ApiResponseStatusResponse {
	data?: StatusResponse;
	message: string;
	success: boolean;
}

/** Represents a standard API response. */
export interface ApiResponseTokenDetails {
	data?: TokenDetails;
	message: string;
	success: boolean;
}

/** Represents a standard API response. */
export interface ApiResponseTokenInfoByChainId {
	/** Interface representing token information by chain ID. */
	data?: TokenInfoByChainId;
	message: string;
	success: boolean;
}

/** Represents a standard API response. */
export interface ApiResponseTokensResponse {
	data?: TokensResponse;
	message: string;
	success: boolean;
}

/** Represents a standard API response. */
export interface ApiResponseToolsResponse {
	data?: ToolsResponse;
	message: string;
	success: boolean;
}

export type ApproveData = LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export interface ApproveForPolymarketBody {
	chain_id: string;
}

export type ApproveForPolymarketData = PolymarketAPIResponseAny;

export type ApproveOutput =
	UniswapV3NFTAPIResponseUniswapV3ExecuteFunctionResult;

export type ApproveOutput1 = VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export type ApproveResult = RamsesNFTAPIResponseRamsesNFTExecuteFunctionResult;

/** Represents a request to assemble a specific path for a user. */
export interface AssembleRequest {
	/** The ID of the path to be assembled. */
	pathId: string;
	/** The address of the receiver, if any. */
	receiver?: string;
	/** Whether to simulate the transaction. */
	simulate?: boolean;
	/** The address of the user making the request. */
	userAddr: string;
}

export enum Asset {
	ETH = "ETH",
	BTC = "BTC",
}

export type AttachData = RamsesNFTAPIResponseRamsesNFTExecuteFunctionResult;

export type AttachResult = VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export type AttachTokenToGaugeData =
	RamsesVoterAPIResponseRamsesVoterExecuteFunctionResult;

export type AttachTokenToGaugeResult =
	VeTheNftVoterAPIResponseVeTheNftVoterExecuteFunctionResult;

/** Represents the response of the `getAvailableTickers` endpoint. */
export interface AvailableTickersAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The available tickers. */
	data?: string[];
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

/** Represents an input for a BRC20 transaction. */
export interface BRC20TransactionInput {
	/** The amount of tokens involved in the transaction. */
	amt: string;
	/** The address to which any change is being sent. */
	change_address: string;
	/** The amount of the input being used. */
	input_amount: string;
	/** The transaction ID of the input being used. */
	input_txid: string;
	/**
	 * The output index of the input being used.
	 * @format double
	 */
	input_vout: number;
	/** The network on which the transaction is taking place. */
	network: string;
	/** The operation type of the transaction. */
	op: string;
	/** The address to which the output is being sent. */
	output_address: string;
	/** The ticker symbol of the token involved in the transaction. */
	tick: string;
}

/** Represents an output of a BRC20 transaction. */
export interface BRC20TransactionOutput {
	/** The signed transaction. */
	transaction: string;
}

/**
 * Represents the response from the Balance API.
 * Extends the BaseAPIResponse to include additional data specific to balance information.
 */
export interface BalanceAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The data associated with the balance response. */
	data?: BalanceResponse;
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

export interface BalanceAllowanceResponse {
	allowance: string;
	balance: string;
}

export type BalanceOfData = UniswapV3NFTAPIResponseString;

export interface BalanceOfParams {
	address: string;
	chainId: string;
	owner: string;
}

export interface BalanceResponse {
	/** The balance of the account. */
	balance: string;
}

/** Represents a balance sheet for a financial entity. */
export interface BalanceSheet {
	/**
	 * The accumulated other comprehensive income of the company.
	 * @format double
	 */
	accumulated_other_comprehensive_income: number;
	/** The date of the balance sheet in the calendar. */
	calendar_date: string;
	/**
	 * The cash and cash equivalents of the company.
	 * @format double
	 */
	cash_and_equivalents: number;
	/** The currency in which the balance sheet values are denominated. */
	currency: string;
	/**
	 * The current assets of the company.
	 * @format double
	 */
	current_assets: number;
	/**
	 * The current debt of the company.
	 * @format double
	 */
	current_debt: number;
	/**
	 * The current investments of the company.
	 * @format double
	 */
	current_investments: number;
	/**
	 * The current liabilities of the company.
	 * @format double
	 */
	current_liabilities: number;
	/**
	 * The deferred revenue of the company.
	 * @format double
	 */
	deferred_revenue: number;
	/**
	 * The deposit liabilities of the company.
	 * @format double
	 */
	deposit_liabilities: number;
	/**
	 * The goodwill and intangible assets of the company.
	 * @format double
	 */
	goodwill_and_intangible_assets: number;
	/**
	 * The inventory of the company.
	 * @format double
	 */
	inventory: number;
	/**
	 * The total investments of the company.
	 * @format double
	 */
	investments: number;
	/**
	 * The non-current assets of the company.
	 * @format double
	 */
	non_current_assets: number;
	/**
	 * The non-current debt of the company.
	 * @format double
	 */
	non_current_debt: number;
	/**
	 * The non-current investments of the company.
	 * @format double
	 */
	non_current_investments: number;
	/**
	 * The non-current liabilities of the company.
	 * @format double
	 */
	non_current_liabilities: number;
	/**
	 * The number of outstanding shares of the company.
	 * @format double
	 */
	outstanding_shares: number;
	/** The period type of the balance sheet, which can be "quarterly", "ttm" (trailing twelve months), or "annual". */
	period: BalanceSheetPeriodEnum;
	/**
	 * The property, plant, and equipment of the company.
	 * @format double
	 */
	property_plant_and_equipment: number;
	/** The reporting period of the balance sheet. */
	report_period: string;
	/**
	 * The retained earnings of the company.
	 * @format double
	 */
	retained_earnings: number;
	/**
	 * The shareholders' equity of the company.
	 * @format double
	 */
	shareholders_equity: number;
	/**
	 * The tax assets of the company.
	 * @format double
	 */
	tax_assets: number;
	/**
	 * The tax liabilities of the company.
	 * @format double
	 */
	tax_liabilities: number;
	/** The stock ticker symbol of the company. */
	ticker: string;
	/**
	 * The total assets of the company.
	 * @format double
	 */
	total_assets: number;
	/**
	 * The total debt of the company.
	 * @format double
	 */
	total_debt: number;
	/**
	 * The total liabilities of the company.
	 * @format double
	 */
	total_liabilities: number;
	/**
	 * The trade and non-trade payables of the company.
	 * @format double
	 */
	trade_and_non_trade_payables: number;
	/**
	 * The trade and non-trade receivables of the company.
	 * @format double
	 */
	trade_and_non_trade_receivables: number;
}

/** The period type of the balance sheet, which can be "quarterly", "ttm" (trailing twelve months), or "annual". */
export enum BalanceSheetPeriodEnum {
	Quarterly = "quarterly",
	Ttm = "ttm",
	Annual = "annual",
}

/** Represents the response of the `getBalanceSheets` endpoint. */
export interface BalanceSheetsAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The balance sheet data. */
	data?: BalanceSheet[];
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

/** Represents the base structure of a response from the Cosmos API. */
export interface BaseCosmosAPIResponse {
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

export type BaseUriData = UniswapV3NFTAPIResponseString;

export interface BaseUriParams {
	address: string;
	chainId: string;
}

export type BigNumber = any;

export type BigNumberJSON = string;

export interface BitcoinAPIResponse {
	data?:
		| BitcoinTransactionOutput
		| SRC20InscriptionOutput
		| BRC20TransactionOutput
		| UnsignedPSBTOutput;
	message: string;
	success: boolean;
}

export type BitcoinBitcoinCreateAccountData = AccountAPIResponse;

export type BitcoinBitcoinCreateBrc20TransactionData = BitcoinAPIResponse;

export type BitcoinBitcoinCreateSrc20InscriptionData = BitcoinAPIResponse;

export type BitcoinBitcoinDeleteAccountData = AccountAPIResponse;

export type BitcoinBitcoinExportAccountData = AccountAPIResponse;

export type BitcoinBitcoinGenerateUnsignedPsbtHexData = BitcoinAPIResponse;

export type BitcoinBitcoinGetAccountData = AccountAPIResponse;

export type BitcoinBitcoinSignTransactionData = BitcoinAPIResponse;

export interface BitcoinCashAPIResponseAccountResponse {
	/** Represents the response structure for an account. */
	data?: AccountResponse;
	message: string;
	success: boolean;
}

export interface BitcoinCashAPIResponseBitcoinCashTransactionOutput {
	/** Represents the output of a Bitcoin Cash transaction. */
	data?: BitcoinCashTransactionOutput;
	message: string;
	success: boolean;
}

export interface BitcoinCashAPIResponsePsbtHexString {
	data?: {
		psbt_hex: string;
	};
	message: string;
	success: boolean;
}

export interface BitcoinCashAPIResponseSignedPsbtHexString {
	data?: {
		signed_psbt_hex: string;
	};
	message: string;
	success: boolean;
}

export interface BitcoinCashAPIResponseSignedTxString {
	data?: {
		signed_tx: string;
	};
	message: string;
	success: boolean;
}

export type BitcoinCashBitcoinCashCreateAccountData =
	BitcoinCashAPIResponseAccountResponse;

export type BitcoinCashBitcoinCashDeleteAccountData =
	BitcoinCashAPIResponseAccountResponse;

export type BitcoinCashBitcoinCashExportAccountData =
	BitcoinCashAPIResponseAccountResponse;

export type BitcoinCashBitcoinCashGenerateUnsignedPsbtHexData =
	BitcoinCashAPIResponsePsbtHexString;

export type BitcoinCashBitcoinCashGetAccountData =
	BitcoinCashAPIResponseAccountResponse;

export type BitcoinCashBitcoinCashSignBitcoinTransactionData =
	BitcoinCashAPIResponseSignedTxString;

/** - The request body containing the network, inputs, and outputs. */
export interface BitcoinCashBitcoinCashSignBitcoinTransactionPayload {
	inputs: string;
	network: string;
	outputs: string;
}

export type BitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPathData =
	BitcoinCashAPIResponseSignedPsbtHexString;

/** - The request body containing the network and PSBT in hexadecimal format. */
export interface BitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPathPayload {
	network: string;
	psbt_hex: string;
}

export type BitcoinCashBitcoinCashSignTransactionData =
	BitcoinCashAPIResponseBitcoinCashTransactionOutput;

export type BitcoinCashBitcoinCashSignTransactionWithMemoData =
	BitcoinCashAPIResponseBitcoinCashTransactionOutput;

/** Represents the input data required for Bitcoin Cash transactions. */
export interface BitcoinCashInput {
	/** The network on which the transaction is taking place. */
	network?: string;
	/** The private key of the account. */
	private_key?: string;
}

export type BitcoinCashListAccountsData = BitcoinCashAPIResponseAccountResponse;

/** Represents an input for a Bitcoin Cash transaction. */
export interface BitcoinCashTransactionInput {
	/** Indicates whether to compress the public key. */
	compress?: boolean;
	/** The network on which the transaction is taking place. */
	network?: string;
	/** The recipient address of the transaction. */
	to?: string;
	/**
	 * The amount to be sent.
	 * @format double
	 */
	value?: number;
}

/** Represents the output of a Bitcoin Cash transaction. */
export interface BitcoinCashTransactionOutput {
	/** The signed transaction. */
	signedTx?: string;
	/** The transaction hash. */
	transaction_hash?: string;
}

/** Represents the input data required for Bitcoin transactions. */
export interface BitcoinInput {
	/** The network on which the transaction is taking place. */
	network?: string;
	/** The private key of the account. */
	private_key?: string;
}

export type BitcoinListAccountsData = AccountAPIResponse;

/** Represents an input for a Bitcoin transaction. */
export interface BitcoinTransactionInput {
	/** Indicates whether to compress the public key. */
	compress?: boolean;
	/** The network on which the transaction is taking place. */
	network?: string;
	/** The recipient address. */
	to?: string;
	/**
	 * The amount to be sent.
	 * @format double
	 */
	value?: number;
}

/** Represents the output of a Bitcoin transaction. */
export interface BitcoinTransactionOutput {
	/** The signed transaction. */
	signedTx?: string;
	/** The transaction hash. */
	transaction_hash?: string;
}

export interface BotConfigType {
	active?: boolean;
	emotional_state?: EmotionalState;
	eth_wallet?: string;
	id: string;
	is_production: boolean;
	life_activity_log?: string[];
	moon_api_key: string;
	name: string;
	personality: string;
	personality_traits?: PersonalityTraits;
	running?: boolean;
	session?: string;
	trade_tokens: TokenConfig;
	trading_style: string;
	tweet_style: string;
	twitter_email: string;
	twitter_id?: string;
	twitter_name?: string;
	twitter_password: string;
	twitter_posting_enabled?: boolean;
	twitter_screen_name?: string;
	user_id: string;
}

export interface Bridge {
	key: string;
	logoURI: string;
	name: string;
	supportedChains: BridgeSupportedChain[];
}

export interface BridgeSupportedChain {
	/** @format double */
	fromChainId: number;
	/** @format double */
	toChainId: number;
}

export interface BroadCastRawTransactionAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The data associated with the broadcast raw transaction response. */
	data?: BroadCastRawTransactionResponse;
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

/** Represents the response from broadcasting a raw transaction. */
export interface BroadCastRawTransactionResponse {
	/** The transaction hash. */
	data: string;
	/** The message associated with the transaction. */
	message: string;
	/** Indicates whether the transaction was successful. */
	success: boolean;
}

/** Represents the input required to broadcast a transaction. */
export interface BroadcastInput {
	/** The chain ID of the blockchain network. */
	chainId: string;
	/** The signed transaction to be broadcasted. */
	rawTransaction: string;
}

export type BurnData = LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type BurnResult = UniswapV3NFTAPIResponseUniswapV3ExecuteFunctionResult;

export type CalculateOptimalVoteDistributionData = LynexAPIResponse;

export type CalculateOptimalVoteDistributionOutput = ThenaAPIResponse;

export interface CalculateOptimalVoteDistributionParams {
	/** @format double */
	maxPools?: number;
	/** @format double */
	totalVotes: number;
}

export interface CalculateOptimalVoteDistributionParams2 {
	/** @format double */
	maxPools?: number;
	/** @format double */
	totalVotes: number;
}

export interface CalculateOptimalVoteDistributionParams4 {
	/** @format double */
	maxFusions?: number;
	/** @format double */
	totalVotes: number;
}

export type CalculateOptimalVoteDistributionResult = RamsesAPIResponse;

export interface CancelMarketOrdersBody {
	chain_id: string;
	payload: {
		market: string;
		outcomeId?: string;
	};
}

export type CancelMarketOrdersData =
	PolymarketAPIResponseCancelMarketOrdersResponse;

export interface CancelMarketOrdersResponse {
	orderIDs: string[];
	success: boolean;
}

export interface CancelOrderBody {
	chain_id: string;
	orderID: string;
}

export type CancelOrderData = PolymarketAPIResponseCancelOrderResponse;

export interface CancelOrderResponse {
	orderID: string;
	success: boolean;
}

export interface CancelOrdersBody {
	chain_id: string;
	ordersHashes: string[];
}

export type CancelOrdersData = PolymarketAPIResponseCancelOrdersResponse;

export interface CancelOrdersResponse {
	orderIDs: string[];
	success: boolean;
}

/** Represents a cash flow statement for a specific financial period. */
export interface CashFlowStatement {
	/**
	 * Cash flow from business acquisitions and disposals.
	 * @format double
	 */
	business_acquisitions_and_disposals: number;
	/** The calendar date of the cash flow statement. */
	calendar_date: string;
	/**
	 * Capital expenditures.
	 * @format double
	 */
	capital_expenditure: number;
	/**
	 * Change in cash and cash equivalents.
	 * @format double
	 */
	change_in_cash_and_equivalents: number;
	/** The currency in which the cash flow amounts are denominated. */
	currency: string;
	/**
	 * Depreciation and amortization expenses.
	 * @format double
	 */
	depreciation_and_amortization: number;
	/**
	 * Cash flow from dividends and other cash distributions.
	 * @format double
	 */
	dividends_and_other_cash_distributions: number;
	/**
	 * Effect of exchange rate changes on cash and cash equivalents.
	 * @format double
	 */
	effect_of_exchange_rate_changes: number;
	/**
	 * Cash flow from investment acquisitions and disposals.
	 * @format double
	 */
	investment_acquisitions_and_disposals: number;
	/**
	 * Cash flow from issuance or purchase of equity shares.
	 * @format double
	 */
	issuance_or_purchase_of_equity_shares: number;
	/**
	 * Cash flow from issuance or repayment of debt securities.
	 * @format double
	 */
	issuance_or_repayment_of_debt_securities: number;
	/**
	 * Net cash flow from financing activities.
	 * @format double
	 */
	net_cash_flow_from_financing: number;
	/**
	 * Net cash flow from investing activities.
	 * @format double
	 */
	net_cash_flow_from_investing: number;
	/**
	 * Net cash flow from operating activities.
	 * @format double
	 */
	net_cash_flow_from_operations: number;
	/**
	 * The period type of the cash flow statement.
	 * Can be "quarterly", "ttm" (trailing twelve months), or "annual".
	 */
	period: CashFlowStatementPeriodEnum;
	/** The reporting period of the cash flow statement. */
	report_period: string;
	/**
	 * Share-based compensation expenses.
	 * @format double
	 */
	share_based_compensation: number;
	/** The ticker symbol of the company. */
	ticker: string;
}

/**
 * The period type of the cash flow statement.
 * Can be "quarterly", "ttm" (trailing twelve months), or "annual".
 */
export enum CashFlowStatementPeriodEnum {
	Quarterly = "quarterly",
	Ttm = "ttm",
	Annual = "annual",
}

/** Represents the response of the `getCashFlowStatements` endpoint. */
export interface CashFlowStatementsAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The cash flow statement data. */
	data?: CashFlowStatement[];
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

export interface Chain {
	chainType: ChainChainTypeEnum;
	coin: string;
	/** @format double */
	id: number;
	key: string;
	logoURI: string;
	mainnet: boolean;
	metamask: {
		blockExplorerUrls: string[];
		chainId: string;
		chainName: string;
		nativeCurrency: {
			/** @format double */
			decimals: number;
			name: string;
			symbol: string;
		};
		rpcUrls: string[];
	};
	multicallAddress: string;
	name: string;
	nativeToken: {
		address: string;
		/** @format double */
		chainId: number;
		coinKey: string;
		/** @format double */
		decimals: number;
		logoURI: string;
		name: string;
		priceUSD: string;
		symbol: string;
	};
	tokenlistUrl: string;
}

export enum ChainChainTypeEnum {
	EVM = "EVM",
	SOL = "SOL",
}

export interface ChainsResponse {
	chains: Chain[];
}

/** Represents the response from the Chart Analysis API. */
export interface ChartAnalysisAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The analysis data returned by the API. */
	data?: string;
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

export type ChartsGetChartAnalysisData = ChartAnalysisAPIResponse;

/** @default "1D" */
export enum ChartsGetChartAnalysisParamsEnum {
	Value1D = "1D",
	Value4H = "4H",
	Value1H = "1H",
	Value15M = "15m",
}

/**
 * - The timeframe for the chart analysis. Defaults to "1D". Can be "1D", "4H", or "1H".
 * @default "1D"
 */
export enum ChartsGetChartAnalysisParamsTimeframeEnum {
	Value1D = "1D",
	Value4H = "4H",
	Value1H = "1H",
	Value15M = "15m",
}

export type CheckpointData = LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type CheckpointDelegateeData =
	LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type CheckpointResult = VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export type ClaimBribesData =
	LynexVoterAPIResponseLynexVoterExecuteFunctionResult;

export type ClaimBribesOutput =
	VeTheNftVoterAPIResponseVeTheNftVoterExecuteFunctionResult;

export type ClaimBribesResult =
	RamsesVoterAPIResponseRamsesVoterExecuteFunctionResult;

export type ClaimData = LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type ClaimFeesData =
	LynexVoterAPIResponseLynexVoterExecuteFunctionResult;

export type ClaimFeesOutput =
	VeTheNftVoterAPIResponseVeTheNftVoterExecuteFunctionResult;

export type ClaimFeesResult =
	RamsesVoterAPIResponseRamsesVoterExecuteFunctionResult;

export type ClaimRewardsData =
	LynexVoterAPIResponseLynexVoterExecuteFunctionResult;

export type ClaimRewardsOutput =
	VeTheNftVoterAPIResponseVeTheNftVoterExecuteFunctionResult;

export type ClaimRewardsResult =
	RamsesVoterAPIResponseRamsesVoterExecuteFunctionResult;

export type CollectData = UniswapV3NFTAPIResponseUniswapV3ExecuteFunctionResult;

export interface CommunityMetrics {
	/** @format double */
	engagementRate: number;
	/** @format double */
	growth: number;
	/** @format double */
	sentiment: number;
	/** @format double */
	size: number;
}

export interface CommunityMetricsAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	data?: CommunityMetrics;
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

/** Represents the financial and general information of a company. */
export interface CompanyFacts {
	/** The Central Index Key (CIK) assigned by the SEC. */
	cik: string;
	/** Indicates whether the company is currently active. */
	is_active: boolean;
	/** The date when the company was listed. */
	listing_date: string;
	/**
	 * The market capitalization of the company.
	 * @format double
	 */
	market_cap: number;
	/** The name of the company. */
	name: string;
	/**
	 * The number of employees working for the company.
	 * @format double
	 */
	number_of_employees: number;
	/** The Standard Industrial Classification (SIC) code of the company. */
	sic_code: string;
	/** The description of the SIC code. */
	sic_description: string;
	/** The stock ticker symbol of the company. */
	ticker: string;
	/** The website URL of the company. */
	website_url: string;
	/**
	 * The weighted average number of shares outstanding.
	 * @format double
	 */
	weighted_average_shares: number;
}

/** Represents the response of the `getCompanyFacts` endpoint. */
export interface CompanyFactsAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The company facts data. */
	data?: CompanyFacts;
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

/** Represents the structure of an API response for a component. */
export interface ComponentAPIResponseComponentDefinition {
	/** The data returned by the API, if any. */
	data?: ComponentDefinition;
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the structure of an API response for a component. */
export interface ComponentAPIResponseComponentDefinitionArray {
	/** The data returned by the API, if any. */
	data?: ComponentDefinition[];
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the structure of an API response for a component. */
export interface ComponentAPIResponseComponentMatchArray {
	/** The data returned by the API, if any. */
	data?: ComponentMatch[];
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the structure of an API response for a component. */
export interface ComponentAPIResponsePartialComponentDefinitionArray {
	/** The data returned by the API, if any. */
	data?: PartialComponentDefinition[];
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the structure of an API response for a component. */
export interface ComponentAPIResponseVoid {
	/** The data returned by the API, if any. */
	data?: any;
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the definition of a component. */
export interface ComponentDefinition {
	/** The code of the component. */
	code: string;
	/**
	 * The date and time when the component was created.
	 * Optional.
	 * @format date-time
	 */
	created_at?: string;
	/** A brief description of the component. */
	description: string;
	/** The unique identifier of the component. */
	id: string;
	/**
	 * Indicates whether the component is active.
	 * Optional.
	 */
	is_active?: boolean;
	/** The name of the component. */
	name: string;
	property_schema: any;
	/**
	 * The date and time when the component was last updated.
	 * Optional.
	 * @format date-time
	 */
	updated_at?: string;
	version: string;
	xml_example: string;
	xml_tag: string;
}

/** Represents a component match that extends the ComponentDefinition interface. */
export interface ComponentMatch {
	/** The code of the component. */
	code: string;
	/**
	 * The date and time when the component was created.
	 * Optional.
	 * @format date-time
	 */
	created_at?: string;
	/** A brief description of the component. */
	description: string;
	/** The unique identifier of the component. */
	id: string;
	/**
	 * Indicates whether the component is active.
	 * Optional.
	 */
	is_active?: boolean;
	/** The name of the component. */
	name: string;
	property_schema: any;
	/**
	 * The similarity score of the component match.
	 * @format double
	 */
	similarity: number;
	/**
	 * The date and time when the component was last updated.
	 * Optional.
	 * @format date-time
	 */
	updated_at?: string;
	version: string;
	xml_example: string;
	xml_tag: string;
}

export type ComponentsCreateComponentData =
	ComponentAPIResponseComponentDefinition;

export type ComponentsForceEmbeddingData = ComponentAPIResponseVoid;

/** - The request body containing the description. */
export interface ComponentsForceEmbeddingPayload {
	description: string;
}

export type ComponentsGetComponentCapabilitiesDescriptionData =
	ComponentAPIResponsePartialComponentDefinitionArray;

export type ComponentsGetComponentData =
	ComponentAPIResponseComponentDefinition;

export type ComponentsGetComponentsData =
	ComponentAPIResponseComponentDefinitionArray;

export type ComponentsSearchComponentsData =
	ComponentAPIResponseComponentMatchArray;

export interface ComponentsSearchComponentsParams {
	/** - The maximum number of results to return. */
	limit?: string;
	/** - The query to search for. */
	query: string;
	/** - The similarity threshold for the search. */
	threshold?: string;
}

export type ComponentsUpdateComponentData =
	ComponentAPIResponseComponentDefinition;

export type ComponentsUpdateEmbeddingData = ComponentAPIResponseVoid;

/** - The request body containing the description. */
export interface ComponentsUpdateEmbeddingPayload {
	description: string;
}

export interface Connection {
	/** @format double */
	fromChainId: number;
	fromTokens: Token[];
	/** @format double */
	toChainId: number;
	toTokens: Token[];
}

export interface ConnectionsResponse {
	connections: Connection[];
}

export type ConversationData = BotConfigType;

export type CookieFunGetKolCommunityData = CommunityMetricsAPIResponse;

export interface CookieFunGetKolCommunityParams {
	/** - The filter criteria for the community (optional). */
	filter?: string;
	/** - The specific metrics to retrieve. */
	metrics: string[];
	/** - The time period for the metrics. */
	period: string;
	/** - The username of the KOL. */
	username: string;
}

export type CookieFunGetKolListData = KOLListAPIResponse;

export interface CookieFunGetKolListParams {
	/** - The filter criteria (optional). */
	filter?: string;
	/**
	 * - The number of results to return (optional).
	 * @format double
	 */
	limit?: number;
	/**
	 * - The page number for pagination (optional).
	 * @format double
	 */
	page?: number;
	/** - The sorting criteria (optional). */
	sort?: string;
}

export type CookieFunGetKolNetworkData = KOLNetworkAPIResponse;

export interface CookieFunGetKolNetworkParams {
	/**
	 * - The depth of the network to retrieve (optional).
	 * @format double
	 */
	depth?: number;
	/** - The filter criteria for the network (optional). */
	filter?: string;
	/** - The metric to analyze the network (optional). */
	metric?: string;
	/** - The username of the KOL. */
	username: string;
}

export type CookieFunGetPredictiveMetricsData = PredictiveMetricsAPIResponse;

export interface CookieFunGetPredictiveMetricsParams {
	/**
	 * - The minimum confidence level for the prediction (optional).
	 * @format double
	 */
	confidence?: number;
	/** - The time horizon for the prediction. */
	horizon: string;
	/** - The specific metric to predict. */
	metric: string;
	/** - The target for the prediction. */
	target: string;
}

export type CookieFunGetTokenAnalyticsData = TokenAnalyticsAPIResponse;

export interface CookieFunGetTokenAnalyticsParams {
	/** - The interval for the data points. */
	interval: string;
	/** - The metrics to retrieve for the token. */
	metrics: string[];
	/** - The time period for the analytics. */
	period: string;
	/** - The ID of the token. */
	tokenId: string;
}

export type CookieFunGetTrendingNarrativesData = NarrativeTrendsAPIResponse;

export interface CookieFunGetTrendingNarrativesParams {
	/** - The category of narratives to retrieve (optional). */
	category?: string;
	/**
	 * - The minimum threshold for trend strength (optional).
	 * @format double
	 */
	threshold?: number;
	/** - The timeframe for the trending narratives. */
	timeframe: string;
}

export type CookieFunGetTrendingTokensData = TrendingTokensAPIResponse;

export interface CookieFunGetTrendingTokensParams {
	/** - The filter criteria for the trending tokens (optional). */
	filter?: string;
	/**
	 * - The number of trending tokens to retrieve (optional).
	 * @format double
	 */
	limit?: number;
	/** - The metrics to include for each token. */
	metrics: string[];
	/** - The sorting criteria for the trending tokens. */
	sort: string;
}

export type CookieFunGetTrendingTweetsData = TrendingTweetsAPIResponse;

export interface CookieFunGetTrendingTweetsParams {
	/** - The category of tweets to retrieve (optional). */
	category?: string;
	/**
	 * - The number of trending tweets to retrieve (optional).
	 * @format double
	 */
	limit?: number;
	/** - The metrics to include for each tweet. */
	metrics: string[];
	/** - The time period for the trending tweets. */
	period: string;
}

/** Represents a Cosmos account with an address and a public key. */
export interface CosmosAccount {
	/** Account name. */
	address: string;
	/** Public key of the account. */
	pubkey: string;
}

/** Represents the response from the Cosmos Account API. */
export interface CosmosAccountAPIResponse {
	/** The data returned by the API, if any. */
	data?: CosmosAccountResponse;
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the response from the Cosmos Account List API. */
export interface CosmosAccountListAPIResponse {
	/** The data returned by the API, if any. */
	data?: CosmosAccountListResponse;
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the response structure for a list of Cosmos accounts. */
export interface CosmosAccountListResponse {
	/** The list of Cosmos accounts. */
	data: {
		keys: CosmosAccount[];
	};
}

/** Represents the response structure for a Cosmos account. */
export interface CosmosAccountResponse {
	/** The Cosmos account address. */
	data: {
		address: string;
	};
}

export type CosmosCosmosCreateAccountData = CosmosAccountAPIResponse;

/** - The request body containing optional network information. */
export interface CosmosCosmosCreateAccountPayload {
	network?: string;
}

export type CosmosCosmosDeleteAccountData = BaseCosmosAPIResponse;

export type CosmosCosmosExportAccountData = BaseCosmosAPIResponse;

export type CosmosCosmosGetAccountData = CosmosAccountAPIResponse;

export type CosmosCosmosListAccountsData = CosmosAccountListAPIResponse;

export type CosmosCosmosSignIbcTransferTransactionData =
	CosmosTransactionAPIResponse;

export type CosmosCosmosSignMessageData = CosmosSignedMessageAPIResponse;

export type CosmosCosmosSignTransferTransactionData =
	CosmosTransactionAPIResponse;

/**
 * Interface representing the input required for an IBC (Inter-Blockchain Communication) transfer in the Cosmos network.
 * Extends the `CosmosTransferInput` interface to include additional properties specific to IBC transfers.
 */
export interface CosmosIBCTransferInput {
	/**
	 * The account number of the account initiating the transfer.
	 * @format double
	 */
	accountNumber: number;
	/** The amount of tokens to be transferred. */
	amount: string;
	/** The ID of the blockchain chain. */
	chainId: string;
	/** The denomination of the tokens to be transferred. */
	denom: string;
	/** The amount of the fee to be paid for the transfer. */
	feeAmount: string;
	/** The denomination of the fee to be paid for the transfer. */
	feeDenom: string;
	/** The address from which the transfer is initiated. */
	fromAddress: string;
	/**
	 * The gas limit for the transfer transaction.
	 * @format double
	 */
	gasLimit: number;
	/** An optional memo to include with the transfer. */
	memo: string;
	/**
	 * The sequence number of the account initiating the transfer.
	 * @format double
	 */
	sequence: number;
	/** The source channel for the IBC transfer. */
	sourceChannel: string;
	/** The source port for the IBC transfer. */
	sourcePort: string;
	/**
	 * The timeout height for the transfer transaction.
	 * @format double
	 */
	timeoutHeight: number;
	/**
	 * The timeout timestamp for the IBC transfer, specified in nanoseconds.
	 * @format double
	 */
	timeoutTimestamp: number;
	/** The address to which the transfer is sent. */
	toAddress: string;
}

/** Represents the input required for signing a message in the Cosmos ecosystem. */
export interface CosmosSignMessageInput {
	/** The address of the account signing the message. */
	message: string;
}

/** Represents the response from the Cosmos Signed Message API. */
export interface CosmosSignedMessageAPIResponse {
	/** The data returned by the API, if any. */
	data?: CosmosSignedMessageResponse;
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the response containing a signed message from the Cosmos blockchain. */
export interface CosmosSignedMessageResponse {
	/** The signed message. */
	signedMessage: string;
}

/** Represents the response from the Cosmos Transaction API. */
export interface CosmosTransactionAPIResponse {
	/** The data returned by the API, if any. */
	data?: CosmosTransactionResponse;
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the response of a Cosmos transaction. */
export interface CosmosTransactionResponse {
	/** The signed transaction. */
	signedTx: string;
	/** The transaction hash. */
	txHash: string;
}

/** Represents the input required for a Cosmos blockchain transfer. */
export interface CosmosTransferInput {
	/**
	 * The account number of the account initiating the transfer.
	 * @format double
	 */
	accountNumber: number;
	/** The amount of tokens to be transferred. */
	amount: string;
	/** The ID of the blockchain chain. */
	chainId: string;
	/** The denomination of the tokens to be transferred. */
	denom: string;
	/** The amount of the fee to be paid for the transfer. */
	feeAmount: string;
	/** The denomination of the fee to be paid for the transfer. */
	feeDenom: string;
	/** The address from which the transfer is initiated. */
	fromAddress: string;
	/**
	 * The gas limit for the transfer transaction.
	 * @format double
	 */
	gasLimit: number;
	/** An optional memo to include with the transfer. */
	memo: string;
	/**
	 * The sequence number of the account initiating the transfer.
	 * @format double
	 */
	sequence: number;
	/**
	 * The timeout height for the transfer transaction.
	 * @format double
	 */
	timeoutHeight: number;
	/** The address to which the transfer is sent. */
	toAddress: string;
}

/** Interface representing the input required to create an account. */
export interface CreateAccountInput {
	/** An optional private key for the account. */
	private_key?: string;
}

export type CreateAndInitializePoolIfNecessaryData =
	UniswapV3NFTAPIResponseUniswapV3ExecuteFunctionResult;

export type CreateCollectionOfferData = OpenSeaAPIResponse;

export type CreateDelegatedLockForData =
	LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type CreateEosAccountData = AccountAPIResponse;

export interface CreateFlowBody {
	created_at: string;
	description: string;
	edges: FlowEdge[];
	id: string;
	name: string;
	nodes: FlowNode[];
	updated_at: string;
	user_id: string;
}

export type CreateFlowData = MultiCallAPIResponseString;

export type CreateGaugeData =
	LynexVoterAPIResponseLynexVoterExecuteFunctionResult;

export type CreateGaugeOutput =
	VeTheNftVoterAPIResponseVeTheNftVoterExecuteFunctionResult;

export type CreateGaugeResult =
	RamsesVoterAPIResponseRamsesVoterExecuteFunctionResult;

export type CreateJobData = MultiCallAPIResponseString;

export type CreateLockData = LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type CreateLockForData =
	LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type CreateLockForResult = VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export type CreateLockOutput = VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export type CreateLockResult =
	RamsesNFTAPIResponseRamsesNFTExecuteFunctionResult;

export interface CreateMarketBuyOrderBody {
	chain_id: string;
	options?: {
		negRisk?: boolean;
		tickSize?: string;
	};
	userMarketOrder: {
		/** @format double */
		amount: number;
		/** @format double */
		feeRateBps?: number;
		/** @format double */
		nonce?: number;
		/** @format double */
		price?: number;
		taker?: string;
		tokenID: string;
	};
}

export type CreateMarketBuyOrderData =
	PolymarketAPIResponseCreateMarketBuyOrderResponse;

export interface CreateMarketBuyOrderResponse {
	order: PolymarketWrapperSignedOrder;
}

export type CreateOfferData = OpenSeaAPIResponse;

export interface CreateOrderBody {
	chain_id: string;
	options: {
		negRisk?: boolean;
		tickSize: string;
	};
	userOrder: {
		/** @format double */
		expiration?: number;
		/** @format double */
		feeRateBps?: number;
		/** @format double */
		nonce?: number;
		/** @format double */
		price: number;
		side: string;
		/** @format double */
		size: number;
		taker?: string;
		tokenID: string;
	};
}

export type CreateOrderData = PolymarketAPIResponseCreateOrderResponse;

export interface CreateOrderResponse {
	order: PolymarketWrapperNewOrderString;
}

export type CreateRippleAccountData = AccountAPIResponse;

export type CreateSolanaAccountData = AccountAPIResponse;

export type CreateTweetData = BotConfigType;

export type CreateUserDefinedFunctionData = MultiCallAPIResponse;

export interface CreateUserDefinedFunctionPayload {
	functionBody: string;
	name: string;
}

export interface CryptoCurrency {
	/** The address of the cryptocurrency on the network. */
	address: string;
	/**
	 * The chain ID of the network.
	 * @format double
	 */
	chainId: number;
	/** The code of the cryptocurrency (e.g., BTC, ETH). */
	code: string;
	/**
	 * The number of decimal places the cryptocurrency supports.
	 * @format double
	 */
	decimals: number;
	/** The URL or path to the icon representing the cryptocurrency. */
	icon: string;
	/** The unique identifier of the cryptocurrency. */
	id: string;
	/** The name of the cryptocurrency. */
	name: string;
	/** The network on which the cryptocurrency operates. */
	network: string;
	/** The display name of the network. */
	networkDisplayName: string;
	/** The symbol of the cryptocurrency (e.g., ₿, Ξ). */
	symbol: string;
}

export type DataExecuteCustomSupabaseQueryData = any;

/** - The query string to be executed. */
export type DataExecuteCustomSupabaseQueryPayload = string;

export type DataGetPortfolioFetchStatusData = PortfolioAPIResponse;

export type DataGetTokensMetadataData = TokenMetadataAPIResponse;

export interface DataGetTokensMetadataParams {
	/** - An array of token addresses to fetch metadata for. */
	addresses: string[];
	/** - The blockchain network identifier. */
	chain: string;
}

export type DataGetUserDebankComplexProtocolListData =
	DebankPortfolioAPIResponse;

export interface DataGetUserDebankComplexProtocolListParams {
	/** - The wallet address of the user. */
	address: string;
	/** - The chain ID to fetch complex protocols for. */
	chainId: string;
}

export type DataGetUserDebankTokenListData = WalletBalanceAPIResponse;

export interface DataGetUserDebankTokenListParams {
	/** - The wallet address of the user. */
	address: string;
	/** - The chain ID to fetch tokens for. */
	chainId: string;
}

export type DataGetUserWalletPortfolioData = PortfolioAPIResponse;

export interface DataGetUserWalletPortfolioParams {
	/** - The wallet address of the user. */
	address: string;
	/**
	 * - The page number for pagination (default is 1).
	 * @format double
	 * @default 1
	 */
	page?: number;
	/**
	 * - The number of items per page for pagination (default is 100).
	 * @format double
	 * @default 100
	 */
	pageSize?: number;
}

export type DataGetWalletNfTsData = NFTsAPIResponse;

export interface DataGetWalletNfTsParams {
	address: string;
	chain: string;
}

export type DataGetWalletTokenBalancesData = WalletBalanceAPIResponse;

export interface DataGetWalletTokenBalancesParams {
	/** - The wallet address to retrieve the balance for. */
	address: string;
	/** - The blockchain network to query. */
	chain: string;
	/** - Optional flag to exclude native currency from the balance. */
	excludeNative?: boolean;
}

export type DataGetWalletTransactionHistoryData = WalletHistoryAPIResponse;

export interface DataGetWalletTransactionHistoryParams {
	/** - The wallet address to retrieve history for. */
	address: string;
	/** - The blockchain chain to retrieve history from. */
	chain: string;
}

export type DeactivateBotData = string;

export interface DebankPortfolioAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	data?: any[];
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

export type DecreaseLiquidityData =
	UniswapV3NFTAPIResponseUniswapV3ExecuteFunctionResult;

export type DelegateBySigData =
	LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type DelegateBySigResult = VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export type DelegateData = LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type DelegateOutput = VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export type DelegateResult = RamsesNFTAPIResponseRamsesNFTExecuteFunctionResult;

export type DeleteEosAccountData = AccountAPIResponse;

export type DeleteFlowData = MultiCallAPIResponse;

export type DeleteJobData = MultiCallAPIResponse;

export type DeleteRippleAccountData = AccountAPIResponse;

export type DeleteSolanaAccountData = AccountAPIResponse;

export type DeleteUserDefinedFunctionData = MultiCallAPIResponse;

/** Interface representing the input required for deploying a contract. */
export interface DeployInput {
	/** The ABI (Application Binary Interface) of the contract. */
	abi: string;
	/** The bytecode of the contract. */
	bytecode: string;
	/** The chain ID. */
	chain_id?: string;
	/** Optional constructor arguments for the contract. */
	constructor_args?: string;
}

export type DepositForData = VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export type DetachData = RamsesNFTAPIResponseRamsesNFTExecuteFunctionResult;

export type DetachResult = VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export type DetachTokenFromGaugeData =
	RamsesVoterAPIResponseRamsesVoterExecuteFunctionResult;

export type DetachTokenFromGaugeResult =
	VeTheNftVoterAPIResponseVeTheNftVoterExecuteFunctionResult;

export type DistributeData =
	LynexVoterAPIResponseLynexVoterExecuteFunctionResult;

export type DistributeOutput =
	VeTheNftVoterAPIResponseVeTheNftVoterExecuteFunctionResult;

export type DistributeResult =
	RamsesVoterAPIResponseRamsesVoterExecuteFunctionResult;

/**
 * Interface representing the response from the DogeCoin API.
 * Extends the BaseAPIResponse interface.
 */
export interface DogeCoinAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The data associated with the DogeCoin transaction output. */
	data?: DogeCoinTransactionOutput;
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

/** Represents the input required for DogeCoin transactions. */
export interface DogeCoinInput {
	/** The network on which the transaction is taking place. */
	network?: string;
	/** The private key of the account. */
	private_key?: string;
}

export type DogeCoinListAccountsData = AccountAPIResponse;

/** Represents an input for a DogeCoin transaction. */
export interface DogeCoinTransactionInput {
	/** Indicates whether to compress the public key. */
	compress?: boolean;
	/** The network on which the transaction is taking place. */
	network?: string;
	/** The recipient address of the transaction. */
	to?: string;
	/**
	 * The amount to be sent.
	 * @format double
	 */
	value?: number;
}

/** Represents the output of a DogeCoin transaction. */
export interface DogeCoinTransactionOutput {
	/** The signed transaction. */
	signedTx?: string;
	/** The transaction hash. */
	transaction_hash?: string;
}

export type DogecoinDogeCoinCreateNewAccountData = AccountAPIResponse;

export type DogecoinDogeCoinDeleteAccountData = AccountAPIResponse;

export type DogecoinDogeCoinExportAccountDetailsData = AccountAPIResponse;

export type DogecoinDogeCoinGetAccountDetailsData = AccountAPIResponse;

export type DogecoinDogeCoinSignTransactionData = DogeCoinAPIResponse;

export type DogecoinDogeCoinSignTransactionWithMemoData = DogeCoinAPIResponse;

export type DomainSeparatorData = UniswapV3NFTAPIResponseString;

export interface DomainSeparatorParams {
	address: string;
	chainId: string;
}

export interface DropNotificationsBody {
	chain_id: string;
	params: {
		notification_ids?: string[];
	};
}

export type DropNotificationsData =
	PolymarketAPIResponseDropNotificationsResponse;

export interface DropNotificationsResponse {
	/** @format double */
	droppedCount: number;
	success: boolean;
}

export interface ENSReverseResolveAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The ENS reverse resolve response data. */
	data?: ENSReverseResolveResponse;
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

/** Interface representing the input required for ENS reverse resolution. */
export interface ENSReverseResolveInput {
	/** The blockchain address to be reverse resolved. */
	address: string;
	/** The identifier of the blockchain network. */
	chain_id: string;
}

/** Represents the response from an ENS reverse resolution. */
export interface ENSReverseResolveResponse {
	/** The domain name resolved from the ENS reverse lookup. */
	domain: string;
}

/** Interface representing the structure of an API response for ERC20 operations. */
export interface ERC20APIResponseERC20ExecuteFunctionResult {
	/** Optional data payload returned by the API. */
	data?: ERC20ExecuteFunctionResult;
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Interface representing the structure of an API response for ERC20 operations. */
export interface ERC20APIResponseNumber {
	/**
	 * Optional data payload returned by the API.
	 * @format double
	 */
	data?: number;
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Interface representing the structure of an API response for ERC20 operations. */
export interface ERC20APIResponseString {
	/** Optional data payload returned by the API. */
	data?: string;
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the result of executing an ERC20 function. */
export interface ERC20ExecuteFunctionResult {
	/** Optional response indicating whether the transaction was broadcasted. */
	broadcasted?: BroadCastRawTransactionResponse;
	/** Optional transaction data. */
	data?: Transaction;
	/** The name of the executed function */
	function: string;
	/** Optional message providing additional information about the execution. */
	message?: string;
	/** The parameters passed to the function. */
	params: any[];
	/** Optional response from simulating asset changes. */
	simulation?: SimulateAssetChangesResponse;
	/** Indicates whether the execution was successful. */
	success?: boolean;
	/** The transaction details. */
	transaction: ERC20Transaction;
	/** Optional user operation identifier. */
	user_op?: string;
}

/** Interface representing the input body for an ERC20 transaction. */
export interface ERC20InputBody {
	/** Flag to indicate if the transaction is from an externally owned account. */
	EOA?: boolean;
	/** The access list for the transaction. */
	accessList?: AccessTuple[];
	/** The account involved in the transaction. */
	account?: string;
	/** Flag to indicate if the nonce should always be incremented. */
	alwaysIncrementNonce?: boolean;
	/** The amount of ERC20 tokens to transfer. */
	amount?: string;
	/** The amounts involved in the transaction. */
	amounts?: string[];
	/** Whether the transaction is approved. */
	approved?: boolean;
	/** The asset involved in the transaction. */
	asset?: string;
	/** The assets involved in the transaction. */
	assets?: string[];
	/** The gas for blob transactions. */
	blobGas?: string;
	/** The gas fee cap for blob transactions. */
	blobGasFeeCap?: string;
	/** The hashes for blob transactions. */
	blobHashes?: string[];
	/** The borrow amount. */
	borrowAmount?: string | number;
	/** Flag to indicate if the transaction should be broadcasted. */
	broadcast?: boolean;
	/** The chain ID. */
	chain_id?: string;
	/** The collateral asset. */
	collateralAsset?: string;
	/** The address of the ERC20 contract. */
	contract_address?: string;
	/** Additional data to include in the transaction. */
	data?: string;
	/** The debt asset. */
	debtAsset?: string;
	/** The debt to cover. */
	debtToCover?: string;
	/** Flag to indicate if the transaction should be a dry run. */
	dryrun?: boolean;
	/** The encoding type. */
	encoding?: string;
	/** The gas limit for the transaction. */
	gas?: string;
	/** The gas limit for the transaction. */
	gasLimit?: string;
	/** The gas price for the transaction. */
	gasPrice?: string;
	/** The initial deposit. */
	initialDeposit?: string | number;
	/** The initiator of the transaction. */
	initiator?: string;
	/** The input data. */
	input?: string;
	/** The input tokens. */
	inputTokens?: TokenAmount[];
	/**
	 * The interest rate mode.
	 * @format double
	 */
	interestRateMode?: number;
	/** The maximum fee per gas. */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas. */
	maxPriorityFeePerGas?: string;
	/** The minimum health factor. */
	minHealthFactor?: string | number;
	/** The modes of the transaction. */
	modes?: number[];
	/** The nonce to use for the transaction. */
	nonce?: string;
	/** The address on behalf of which the transaction is made. */
	onBehalfOf?: string;
	/** The output tokens. */
	outputTokens?: TokenProportion[];
	/** Additional parameters. */
	params?: string;
	/** The premiums. */
	premiums?: string[] | number[];
	/**
	 * The rate mode.
	 * @format double
	 */
	rateMode?: number;
	/** Whether to receive a token. */
	receiveAToken?: boolean;
	/** The receiver address. */
	receiverAddress?: string;
	/**
	 * The referral code.
	 * @format double
	 */
	referralCode?: number;
	/** The role of the user. */
	role?: string;
	/** Flag to indicate if the transaction should be simulated. */
	simulate?: boolean;
	/**
	 * The slippage limit percentage.
	 * @format double
	 */
	slippageLimitPercent?: number;
	/** The recipient address of the ERC20 token transfer. */
	to?: string;
	/** The token ID. */
	token_id?: string;
	/** The token IDs. */
	token_ids?: string;
	/**
	 * The type of transaction.
	 * @format double
	 */
	type?: number;
	/** Whether to use as collateral. */
	useAsCollateral?: boolean;
	/** The user involved in the transaction. */
	user?: string;
	/** The value of the transaction in wei. */
	value?: string;
}

/** Represents an ERC-20 token transaction. */
export interface ERC20Transaction {
	/** The chain ID of the network where the transaction is sent. */
	chainId: string;
	/** The data payload of the transaction. */
	data: string;
	/** The sender address of the transaction. */
	from: string;
	/**
	 * The gas limit for the transaction.
	 * Optional.
	 */
	gasLimit?: string;
	/**
	 * The gas price for the transaction, in wei.
	 * Optional.
	 */
	gasPrice?: string;
	/**
	 * The maximum fee per gas for EIP-1559 transactions, in wei.
	 * Optional.
	 */
	maxFeePerGas?: string;
	/**
	 * The maximum priority fee per gas for EIP-1559 transactions, in wei.
	 * Optional.
	 */
	maxPriorityFeePerGas?: string;
	/**
	 * The nonce of the transaction.
	 * @format double
	 */
	nonce: number;
	/** The recipient address of the transaction. */
	to: string;
	/**
	 * The type of the transaction.
	 * Optional.
	 * @format double
	 */
	type?: number;
	/** The value to be transferred in the transaction, in wei. */
	value: string;
}

/** Interface representing the structure of the API response for ERC4626. */
export interface ERC4626APIResponse {
	/** Optional data returned by the API. */
	data?: any;
	/** Provides a message related to the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Interface representing the structure of the response from the ERC721 API. */
export interface ERC721APIResponse {
	/** Optional data returned by the API. */
	data?: any;
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

export interface EmotionalState {
	dominantEmotion: string;
	/** @format double */
	energy: number;
	/** @format double */
	mood: number;
	/** @format double */
	reactivity: number;
}

/**
 * Interface representing the response from the ENS resolve API.
 * Extends the BaseAPIResponse interface.
 */
export interface EnsResolveAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The ENS resolve response data. */
	data?: EnsResolveResponse;
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

export type EnsResolveData = EnsResolveAPIResponse;

/** Represents the input required to resolve an ENS (Ethereum Name Service) domain. */
export interface EnsResolveInput {
	/** The chain ID of the blockchain network. */
	chain_id: string;
	/** The domain to be resolved. */
	domain: string;
}

/** Represents the response from an ENS (Ethereum Name Service) resolve operation. */
export interface EnsResolveResponse {
	/** The address associated with the domain. */
	address: string;
}

export type EnsReverseResolveData = ENSReverseResolveAPIResponse;

export interface EosAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The data associated with the Eos response. */
	data?: EosTransactionOutput;
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

/** Represents the input data required for EOS operations. */
export interface EosInput {
	/** The network on which the transaction is taking place. */
	network?: string;
	/** The private key of the account. */
	private_key?: string;
}

/** Represents an input for an EOS transaction. */
export interface EosTransactionInput {
	/** Indicates whether to compress the public key. */
	compress?: boolean;
	/** The network on which the transaction is taking place. */
	network?: string;
	/** The recipient address of the transaction. */
	to?: string;
	/**
	 * The amount to be sent.
	 * @format double
	 */
	value?: number;
}

/** Represents the output of an EOS transaction. */
export interface EosTransactionOutput {
	/** The signed transaction. */
	signedTx?: string;
	/** The transaction hash. */
	transaction_hash?: string;
}

export type Erc1155Erc1155BalanceOfBatchData = TransactionAPIResponse;

export type Erc1155Erc1155BalanceOfData = TransactionAPIResponse;

export type Erc1155Erc1155IsApprovedForAllData = TransactionAPIResponse;

export type Erc1155Erc1155SafeBatchTransferFromData = TransactionAPIResponse;

export type Erc1155Erc1155SafeTransferFromData = TransactionAPIResponse;

export type Erc1155Erc1155SetApprovalForAllData = TransactionAPIResponse;

/** Interface representing a request for ERC-1155 token operations. */
export interface Erc1155Request {
	/** Whether the transaction is from an externally owned account. */
	EOA?: boolean;
	/** The access list for the transaction. */
	accessList?: AccessTuple[];
	/** The account involved in the transaction. */
	account?: string;
	/** Whether to always increment the nonce. */
	alwaysIncrementNonce?: boolean;
	/** The amount involved in the transaction. */
	amount?: string;
	/** The amounts involved in the transaction. */
	amounts?: string[];
	/** Optional. Indicates whether the tokens are approved. */
	approved?: boolean;
	/** The asset involved in the transaction. */
	asset?: string;
	/** The assets involved in the transaction. */
	assets?: string[];
	/** The gas for blob transactions. */
	blobGas?: string;
	/** The gas fee cap for blob transactions. */
	blobGasFeeCap?: string;
	/** The hashes for blob transactions. */
	blobHashes?: string[];
	/** The borrow amount. */
	borrowAmount?: string | number;
	/** Whether to broadcast the transaction. */
	broadcast?: boolean;
	/** The chain ID. */
	chain_id?: string;
	/** The collateral asset. */
	collateralAsset?: string;
	/** The contract address. */
	contract_address?: string;
	/** The data to be sent. */
	data?: string;
	/** The debt asset. */
	debtAsset?: string;
	/** The debt to cover. */
	debtToCover?: string;
	/** Whether to perform a dry run. */
	dryrun?: boolean;
	/** The encoding type. */
	encoding?: string;
	/** The gas for the transaction. */
	gas?: string;
	/** The gas limit for the transaction. */
	gasLimit?: string;
	/** The gas price for the transaction. */
	gasPrice?: string;
	/** The initial deposit. */
	initialDeposit?: string | number;
	/** The initiator of the transaction. */
	initiator?: string;
	/** The input data. */
	input?: string;
	/** The input tokens. */
	inputTokens?: TokenAmount[];
	/**
	 * The interest rate mode.
	 * @format double
	 */
	interestRateMode?: number;
	/** The maximum fee per gas. */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas. */
	maxPriorityFeePerGas?: string;
	/** The minimum health factor. */
	minHealthFactor?: string | number;
	/** The modes of the transaction. */
	modes?: number[];
	/** The nonce for the transaction. */
	nonce?: string;
	/** The address on behalf of which the transaction is made. */
	onBehalfOf?: string;
	/** The output tokens. */
	outputTokens?: TokenProportion[];
	/** Additional parameters. */
	params?: string;
	/** The premiums. */
	premiums?: string[] | number[];
	/**
	 * The rate mode.
	 * @format double
	 */
	rateMode?: number;
	/** Whether to receive a token. */
	receiveAToken?: boolean;
	/** The receiver address. */
	receiverAddress?: string;
	/**
	 * The referral code.
	 * @format double
	 */
	referralCode?: number;
	/** The role of the user. */
	role?: string;
	/** Whether to simulate the transaction. */
	simulate?: boolean;
	/**
	 * The slippage limit percentage.
	 * @format double
	 */
	slippageLimitPercent?: number;
	/** The recipient address. */
	to?: string;
	/** The token ID. */
	token_id?: string;
	/** Optional. A comma-separated list of token IDs. */
	token_ids?: string;
	/**
	 * The type of transaction.
	 * @format double
	 */
	type?: number;
	/** Whether to use as collateral. */
	useAsCollateral?: boolean;
	/** The user involved in the transaction. */
	user?: string;
	/** The value to be sent. */
	value?: string;
}

export type Erc20ApproveErc20TokenSpendingData =
	ERC20APIResponseERC20ExecuteFunctionResult;

export type Erc20GetErc20TokenAllowanceData = ERC20APIResponseString;

export interface Erc20GetErc20TokenAllowanceParams {
	/** - The account address making the request. */
	account: string;
	/** - The contract address of the ERC20 token. */
	address: string;
	/** - The ID of the blockchain network. */
	chainId: string;
	/** - The address of the token owner. */
	owner: string;
	/** - The address of the spender. */
	spender: string;
}

export type Erc20GetErc20TokenBalanceData = ERC20APIResponseString;

export interface Erc20GetErc20TokenBalanceParams {
	/** - The address of the account to retrieve the balance for. */
	account: string;
	/** - The address of the ERC20 token contract. */
	address: string;
	/** - The ID of the blockchain network. */
	chainId: string;
}

export type Erc20GetErc20TokenDecimalsData = ERC20APIResponseNumber;

export interface Erc20GetErc20TokenDecimalsParams {
	/** - The account address for the ERC20 token. */
	account: string;
	/** - The contract address for the ERC20 token. */
	address: string;
	/** - The chain ID for the ERC20 token. */
	chainId: string;
}

export type Erc20GetErc20TokenNameData = ERC20APIResponseString;

export interface Erc20GetErc20TokenNameParams {
	/** - The account address. */
	account: string;
	/** - The ERC20 token contract address. */
	address: string;
	/** - The blockchain chain ID. */
	chainId: string;
}

export type Erc20GetErc20TokenSymbolData = ERC20APIResponseString;

export interface Erc20GetErc20TokenSymbolParams {
	/** - The account address. */
	account: string;
	/** - The address of the ERC20 token contract. */
	address: string;
	/** - The ID of the blockchain network. */
	chainId: string;
}

export type Erc20GetErc20TokenTotalSupplyData = ERC20APIResponseString;

export interface Erc20GetErc20TokenTotalSupplyParams {
	/** - The account address. */
	account: string;
	/** - The ERC20 token contract address. */
	address: string;
	/** - The blockchain chain ID. */
	chainId: string;
}

export type Erc20TransferErc20TokenData =
	ERC20APIResponseERC20ExecuteFunctionResult;

export type Erc20TransferFromErc20TokenData =
	ERC20APIResponseERC20ExecuteFunctionResult;

export type Erc4626ApproveErc4626Data = ERC4626APIResponse;

export type Erc4626DepositToErc4626Data = ERC4626APIResponse;

export type Erc4626GetErc4626AllowanceData = ERC4626APIResponse;

export interface Erc4626GetErc4626AllowanceParams {
	/** - The account making the request */
	account: string;
	/** - The ERC4626 vault contract address */
	address: string;
	/** - The blockchain network ID */
	chainId: string;
	/** - The address of the owner */
	owner: string;
	/** - The address of the spender */
	spender: string;
}

export type Erc4626GetErc4626AssetData = ERC4626APIResponse;

export interface Erc4626GetErc4626AssetParams {
	/** - The account making the request */
	account: string;
	/** - The ERC4626 vault contract address */
	address: string;
	/** - The blockchain network ID */
	chainId: string;
}

export type Erc4626GetErc4626BalanceOfData = ERC4626APIResponse;

export interface Erc4626GetErc4626BalanceOfParams {
	/** - The account making the request */
	account: string;
	/** - The ERC4626 vault contract address */
	address: string;
	/** - The blockchain network ID */
	chainId: string;
}

export type Erc4626GetErc4626ConvertToAssetsData = ERC4626APIResponse;

export interface Erc4626GetErc4626ConvertToAssetsParams {
	/** - The account making the request */
	account: string;
	/** - The ERC4626 vault contract address */
	address: string;
	/** - The blockchain network ID */
	chainId: string;
	/** - The amount of shares to redeem */
	shares: string;
}

export type Erc4626GetErc4626ConvertToSharesData = ERC4626APIResponse;

export interface Erc4626GetErc4626ConvertToSharesParams {
	/** - The account making the request */
	account: string;
	/** - The ERC4626 vault contract address */
	address: string;
	/** - The amount of assets to deposit */
	assets: string;
	/** - The blockchain network ID */
	chainId: string;
}

export type Erc4626GetErc4626MaxDepositData = ERC4626APIResponse;

export interface Erc4626GetErc4626MaxDepositParams {
	/** - The account making the request */
	account: string;
	/** - The ERC4626 vault contract address */
	address: string;
	/** - The blockchain network ID */
	chainId: string;
	/** - The address of the receiver */
	receiver: string;
}

export type Erc4626GetErc4626MaxMintData = ERC4626APIResponse;

export interface Erc4626GetErc4626MaxMintParams {
	/** - The account making the request */
	account: string;
	/** - The ERC4626 vault contract address */
	address: string;
	/** - The blockchain network ID */
	chainId: string;
	/** - The address of the receiver */
	receiver: string;
}

export type Erc4626GetErc4626MaxRedeemData = ERC4626APIResponse;

export interface Erc4626GetErc4626MaxRedeemParams {
	/** - The account making the request */
	account: string;
	/** - The ERC4626 vault contract address */
	address: string;
	/** - The blockchain network ID */
	chainId: string;
	/** - The address of the owner */
	owner: string;
}

export type Erc4626GetErc4626MaxWithdrawData = ERC4626APIResponse;

export interface Erc4626GetErc4626MaxWithdrawParams {
	/** - The account making the request */
	account: string;
	/** - The ERC4626 vault contract address */
	address: string;
	/** - The blockchain network ID */
	chainId: string;
	/** - The address of the owner */
	owner: string;
}

export type Erc4626GetErc4626PreviewDepositData = ERC4626APIResponse;

export interface Erc4626GetErc4626PreviewDepositParams {
	/** - The account making the request */
	account: string;
	/** - The ERC4626 vault contract address */
	address: string;
	/** - The amount of assets to deposit */
	assets: string;
	/** - The blockchain network ID */
	chainId: string;
}

export type Erc4626GetErc4626PreviewMintData = ERC4626APIResponse;

export interface Erc4626GetErc4626PreviewMintParams {
	/** - The account making the request */
	account: string;
	/** - The ERC4626 vault contract address */
	address: string;
	/** - The blockchain network ID */
	chainId: string;
	/** - The amount of shares to mint */
	shares: string;
}

export type Erc4626GetErc4626PreviewRedeemData = ERC4626APIResponse;

export interface Erc4626GetErc4626PreviewRedeemParams {
	/** - The account making the request */
	account: string;
	/** - The ERC4626 vault contract address */
	address: string;
	/** - The blockchain network ID */
	chainId: string;
	/** - The amount of shares to redeem */
	shares: string;
}

export type Erc4626GetErc4626PreviewWithdrawData = ERC4626APIResponse;

export interface Erc4626GetErc4626PreviewWithdrawParams {
	/** - The account making the request */
	account: string;
	/** - The ERC4626 vault contract address */
	address: string;
	/** - The amount of assets to withdraw */
	assets: string;
	/** - The blockchain network ID */
	chainId: string;
}

export type Erc4626GetErc4626TotalAssetsData = ERC4626APIResponse;

export interface Erc4626GetErc4626TotalAssetsParams {
	/** - The account making the request */
	account: string;
	/** - The ERC4626 vault contract address */
	address: string;
	/** - The blockchain network ID */
	chainId: string;
}

export type Erc4626GetErc4626TotalSupplyData = ERC4626APIResponse;

export interface Erc4626GetErc4626TotalSupplyParams {
	/** - The account making the request */
	account: string;
	/** - The ERC4626 vault contract address */
	address: string;
	/** - The blockchain network ID */
	chainId: string;
}

export type Erc4626MintErc4626SharesData = ERC4626APIResponse;

export type Erc4626RedeemErc4626SharesData = ERC4626APIResponse;

export type Erc4626TransferErc4626Data = ERC4626APIResponse;

export type Erc4626TransferFromErc4626Data = ERC4626APIResponse;

export type Erc4626WithdrawFromErc4626Data = ERC4626APIResponse;

export type Erc721ApproveErc721Data = ERC721APIResponse;

export type Erc721GetErc721ApprovedData = ERC721APIResponse;

export interface Erc721GetErc721ApprovedParams {
	/** - The address of the ERC721 contract. */
	address: string;
	/** - The ID of the blockchain network. */
	chainId: string;
	/** - The ID of the token to check approval for. */
	tokenId: string;
}

export type Erc721GetErc721BalanceOfData = ERC721APIResponse;

export interface Erc721GetErc721BalanceOfParams {
	/** - The account address to query the balance for. */
	account: string;
	/** - The contract address of the ERC721 token. */
	address: string;
	/** - The ID of the blockchain network. */
	chainId: string;
}

export type Erc721GetErc721IsApprovedForAllData = ERC721APIResponse;

export interface Erc721GetErc721IsApprovedForAllParams {
	/** - The address of the ERC721 contract. */
	address: string;
	/** - The ID of the blockchain network. */
	chainId: string;
	/** - The address of the operator to check for approval. */
	operator: string;
	/** - The address of the owner of the assets. */
	owner: string;
}

export type Erc721GetErc721NameData = ERC721APIResponse;

export interface Erc721GetErc721NameParams {
	/** - The address of the ERC721 contract. */
	address: string;
	/** - The ID of the blockchain network. */
	chainId: string;
}

export type Erc721GetErc721OwnerOfData = ERC721APIResponse;

export interface Erc721GetErc721OwnerOfParams {
	/** - The address of the ERC721 contract. */
	address: string;
	/** - The ID of the blockchain network. */
	chainId: string;
	/** - The ID of the token to query. */
	tokenId: string;
}

export type Erc721GetErc721SymbolData = ERC721APIResponse;

export interface Erc721GetErc721SymbolParams {
	/** - The address of the ERC721 contract. */
	address: string;
	/** - The ID of the blockchain network. */
	chainId: string;
}

export type Erc721GetErc721TokenUriData = ERC721APIResponse;

export interface Erc721GetErc721TokenUriParams {
	/** - The address of the ERC721 contract. */
	address: string;
	/** - The ID of the blockchain network. */
	chainId: string;
	/** - The ID of the token to retrieve the URI for. */
	tokenId: string;
}

export type Erc721SafeTransferFromErc721Data = ERC721APIResponse;

export type Erc721SafeTransferFromWithDataErc721Data = ERC721APIResponse;

export type Erc721SetApprovalForAllErc721Data = ERC721APIResponse;

export type Erc721TransferFromErc721Data = ERC721APIResponse;

export interface Estimate {
	approvalAddress: string;
	/** @format double */
	executionDuration: number;
	feeCosts?: FeeCost[];
	fromAmount: string;
	fromAmountUSD: string;
	gasCosts: GasCost[];
	toAmount: string;
	toAmountMin: string;
	toAmountUSD: string;
}

export type EvmAddressJSON = string;

export interface EvmCommonContractDataJSON {
	spender: EvmContractSpenderDetailsJSON;
	token: EvmContractTokenDetailsJSON;
	value: string;
	value_formatted?: string;
}

export interface EvmContractSpenderDetailsJSON {
	address: EvmAddressJSON;
	address_label?: string;
	logo?: string;
	name?: string;
	symbol?: string;
}

export interface EvmContractTokenDetailsJSON {
	address: EvmAddressJSON;
	address_label?: string;
	token_logo: string;
	token_name: string;
	token_symbol: string;
}

export interface EvmDecodedEventJSON {
	label?: string;
	params?: EvmDecodedEventParamsItemJSON[];
	signature?: string;
	type?: string;
}

export interface EvmDecodedEventParamsItemJSON {
	name?: string;
	type?: string;
	value?: string;
}

export enum EvmETransactionCategoryJSON {
	Send = "send",
	Receive = "receive",
	TokenSend = "token send",
	TokenReceive = "token receive",
	NftSend = "nft send",
	NftReceive = "nft receive",
	TokenSwap = "token swap",
	Deposit = "deposit",
	Withdraw = "withdraw",
	NftPurchase = "nft purchase",
	NftSale = "nft sale",
	Airdrop = "airdrop",
	Mint = "mint",
	Burn = "burn",
	Borrow = "borrow",
	ContractInteraction = "contract interaction",
}

export interface EvmInternalTransactionJSON {
	block_hash: string;
	block_number: string;
	from: string;
	gas: string;
	gas_used: string;
	input: string;
	output: string;
	to: string;
	transaction_hash: string;
	type: string;
	value: string;
}

export interface EvmLogVerboseJSON {
	topic0: string;
	topic1?: string;
	topic2?: string;
	topic3?: string;
	address: EvmAddressJSON;
	block_hash: string;
	block_number: BigNumberJSON;
	block_timestamp: string;
	data: string;
	decoded_event: EvmDecodedEventJSON;
	log_index: string;
	transaction_hash: string;
	transaction_index: string;
}

export interface EvmNativeTransferJSON {
	direction?: string;
	from_address: EvmAddressJSON;
	from_address_entity?: string;
	from_address_entity_logo?: string;
	from_address_label?: string;
	internal_transaction: boolean;
	to_address?: EvmAddressJSON;
	to_address_entity?: string;
	to_address_entity_logo?: string;
	to_address_label?: string;
	token_logo: string;
	token_symbol: string;
	value: string;
	value_formatted: string;
}

export interface EvmNormalizedMetadataAttributeJSON {
	display_type?: string;
	/** @format double */
	max_value?: number;
	/** @format double */
	order?: number;
	/** @format double */
	trait_count?: number;
	trait_type?: string;
	value?: EvmNormalizedMetadataAttributeValueJSON;
}

export type EvmNormalizedMetadataAttributeValueJSON = object;

export interface EvmNormalizedMetadataJSON {
	animation_url?: string;
	attributes?: EvmNormalizedMetadataAttributeJSON[];
	description?: string;
	external_link?: string;
	image?: string;
	name?: string;
}

export interface EvmResolveContractInteractionResponseJSON {
	approvals?: EvmCommonContractDataJSON[];
	approvalsAll?: EvmCommonContractDataJSON[];
	revokes?: EvmCommonContractDataJSON[];
	revokesAll?: EvmCommonContractDataJSON[];
}

export interface EvmWalletHistoryErc20TransferJSON {
	address: EvmAddressJSON;
	block_timestamp?: string;
	from_address: EvmAddressJSON;
	from_address_entity?: string;
	from_address_entity_logo?: string;
	from_address_label?: string;
	/** @format double */
	log_index: number;
	possible_spam: boolean;
	to_address?: EvmAddressJSON;
	to_address_entity?: string;
	to_address_entity_logo?: string;
	to_address_label?: string;
	token_decimals: string;
	token_logo: string;
	token_name: string;
	token_symbol: string;
	value: string;
	value_formatted: string;
	verified_contract: boolean;
}

export interface EvmWalletHistoryNftTransferJSON {
	amount: string;
	collection_banner_image?: string;
	collection_logo?: string;
	contract_type: string;
	direction: string;
	from_address: EvmAddressJSON;
	from_address_entity?: string;
	from_address_entity_logo?: string;
	from_address_label?: string;
	/** @format double */
	log_index: number;
	normalized_metadata?: EvmNormalizedMetadataJSON;
	operator?: string;
	possible_spam: boolean;
	to_address?: EvmAddressJSON;
	to_address_entity?: string;
	to_address_entity_logo?: string;
	to_address_label?: string;
	token_address: EvmAddressJSON;
	token_id: string;
	transaction_type: string;
	value: string;
	verified_collection?: boolean;
}

export interface EvmWalletHistoryTransactionJSON {
	erc20_transfers: EvmWalletHistoryErc20TransferJSON[];
	block_hash: string;
	block_number: BigNumberJSON;
	block_timestamp: string;
	category: EvmETransactionCategoryJSON;
	contract_interactions?: EvmResolveContractInteractionResponseJSON;
	from_address: EvmAddressJSON;
	from_address_entity?: string;
	from_address_entity_logo?: string;
	from_address_label?: string;
	gas?: string;
	gas_price: string;
	hash: string;
	input?: string;
	internal_transactions?: EvmInternalTransactionJSON[];
	logs?: EvmLogVerboseJSON[];
	method_label?: string;
	native_transfers: EvmNativeTransferJSON[];
	nft_transfers: EvmWalletHistoryNftTransferJSON[];
	nonce: string;
	possible_spam?: boolean;
	receipt_contract_address?: string;
	receipt_cumulative_gas_used: string;
	receipt_gas_used: string;
	receipt_status: string;
	summary: string;
	to_address?: EvmAddressJSON;
	to_address_entity?: string;
	to_address_entity_logo?: string;
	to_address_label?: string;
	transaction_fee?: string;
	transaction_index: string;
	value: string;
}

export type ExactInputData = UniswapV3APIResponseUniswapV3ExecuteFunctionResult;

export type ExactInputSingleData =
	UniswapV3APIResponseUniswapV3ExecuteFunctionResult;

export type ExactOutputData =
	UniswapV3APIResponseUniswapV3ExecuteFunctionResult;

export type ExactOutputSingleData =
	UniswapV3APIResponseUniswapV3ExecuteFunctionResult;

export interface Exchange {
	key: string;
	logoURI: string;
	name: string;
	supportedChains: number[];
}

export type ExecuteJobData = MultiCallAPIResponse;

/**
 * Interface representing the response from the Export Account API.
 * Extends the BaseAPIResponse interface.
 */
export interface ExportAccountAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The data object containing account details. */
	data?: {
		address: string;
		private_key: string;
		public_key: string;
	};
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

export type ExportEosAccountData = AccountAPIResponse;

export type ExportRippleAccountData = AccountAPIResponse;

export type ExportSolanaAccountData = AccountAPIResponse;

export type Factory2Data = UniswapV3APIResponseString;

export interface Factory2Params {
	address: string;
	chainId: string;
}

export type FactoryData = UniswapV3NFTAPIResponseString;

export interface FactoryParams {
	address: string;
	chainId: string;
}

export interface FeeCost {
	/** @format double */
	amount: number;
	name: string;
	/** @format double */
	percentage: number;
	token: Token;
}

/** Represents a fiat currency. */
export interface FiatCurrency {
	/** The code of the fiat currency (e.g., USD, EUR). */
	code: string;
	/** The URL or path to the icon representing the fiat currency. */
	icon: string;
	/** The unique identifier for the fiat currency. */
	id: string;
	/** The name of the fiat currency. */
	name: string;
	/** The symbol of the fiat currency (e.g., $, €). */
	symbol: string;
}

export type FinancialDatasetsGetAllFinancialsData = AllFinancialsAPIResponse;

export interface FinancialDatasetsGetAllFinancialsParams {
	/** - The CIK number of the company. */
	cik?: string;
	/**
	 * - The maximum number of financials to return.
	 * @format double
	 */
	limit?: number;
	/** - The period type of the financials. */
	period: PeriodEnum4;
	/** - The ticker symbol of the company. */
	ticker: string;
}

/** - The period type of the financials. */
export enum FinancialDatasetsGetAllFinancialsParams1PeriodEnum {
	Annual = "annual",
	Quarterly = "quarterly",
	Ttm = "ttm",
}

export type FinancialDatasetsGetAvailableTickersData =
	AvailableTickersAPIResponse;

export type FinancialDatasetsGetBalanceSheetsData = BalanceSheetsAPIResponse;

export interface FinancialDatasetsGetBalanceSheetsParams {
	/** - The CIK number of the company. */
	cik?: string;
	/**
	 * - The maximum number of balance sheets to return.
	 * @format double
	 */
	limit?: number;
	/** - The period type of the balance sheets. */
	period: PeriodEnum1;
	/** - The ticker symbol of the company. */
	ticker: string;
}

/** - The period type of the balance sheets. */
export enum FinancialDatasetsGetBalanceSheetsParams1PeriodEnum {
	Annual = "annual",
	Quarterly = "quarterly",
	Ttm = "ttm",
}

export type FinancialDatasetsGetCashFlowStatementsData =
	CashFlowStatementsAPIResponse;

export interface FinancialDatasetsGetCashFlowStatementsParams {
	/** - The CIK number of the company. */
	cik?: string;
	/**
	 * - The maximum number of cash flow statements to return.
	 * @format double
	 */
	limit?: number;
	/** - The period type of the cash flow statements. */
	period: PeriodEnum2;
	/** - The ticker symbol of the company. */
	ticker: string;
}

/** - The period type of the cash flow statements. */
export enum FinancialDatasetsGetCashFlowStatementsParams1PeriodEnum {
	Annual = "annual",
	Quarterly = "quarterly",
	Ttm = "ttm",
}

export type FinancialDatasetsGetCompanyFactsData = CompanyFactsAPIResponse;

export type FinancialDatasetsGetIncomeStatementsData =
	IncomeStatementsAPIResponse;

export interface FinancialDatasetsGetIncomeStatementsParams {
	/** - The CIK number of the company. */
	cik?: string;
	/**
	 * - The maximum number of income statements to return.
	 * @format double
	 */
	limit?: number;
	/** - The period type of the income statements. */
	period: PeriodEnum;
	/** - The ticker symbol of the company. */
	ticker: string;
}

/** - The period type of the income statements. */
export enum FinancialDatasetsGetIncomeStatementsParams1PeriodEnum {
	Annual = "annual",
	Quarterly = "quarterly",
	Ttm = "ttm",
}

export type FinancialDatasetsGetInsiderTransactionsData =
	InsiderTransactionsAPIResponse;

export interface FinancialDatasetsGetInsiderTransactionsParams {
	/**
	 * - The maximum number of insider transactions to return.
	 * @format double
	 */
	limit?: number;
	/** - The ticker symbol of the company. */
	ticker: string;
}

export type FinancialDatasetsGetOptionsChainData = OptionsChainAPIResponse;

export interface FinancialDatasetsGetOptionsChainParams {
	/** - The expiration date of the options. */
	expiration_date?: string;
	/** - The type of option (call or put). */
	option_type?: OptionTypeEnum;
	/**
	 * - The strike price of the options.
	 * @format double
	 */
	strike_price?: number;
	/** - The ticker symbol of the company. */
	ticker: string;
}

/** - The type of option (call or put). */
export enum FinancialDatasetsGetOptionsChainParams1OptionTypeEnum {
	Call = "call",
	Put = "put",
}

export type FinancialDatasetsGetPriceSnapshotData = PriceSnapshotAPIResponse;

export type FinancialDatasetsGetPricesData = PricesAPIResponse;

export interface FinancialDatasetsGetPricesParams {
	/** - The end date of the price data. */
	end_date: string;
	/** - The interval of the price data. */
	interval: PriceInterval;
	/**
	 * - The interval multiplier of the price data.
	 * @format double
	 */
	interval_multiplier: number;
	/**
	 * - The maximum number of price data to return.
	 * @format double
	 */
	limit?: number;
	/** - The start date of the price data. */
	start_date: string;
	/** - The ticker symbol of the company. */
	ticker: string;
}

export type FinancialDatasetsGetSegmentedRevenuesData =
	SegmentedRevenuesAPIResponse;

export interface FinancialDatasetsGetSegmentedRevenuesParams {
	/** - The CIK number of the company. */
	cik?: string;
	/**
	 * - The maximum number of segmented revenues to return.
	 * @format double
	 */
	limit?: number;
	/** - The period type of the segmented revenues. */
	period: PeriodEnum3;
	/** - The ticker symbol of the company. */
	ticker: string;
}

/** - The period type of the segmented revenues. */
export enum FinancialDatasetsGetSegmentedRevenuesParams1PeriodEnum {
	Annual = "annual",
	Quarterly = "quarterly",
}

export type FinancialDatasetsSearchFinancialsByLineItemsData =
	LineItemsSearchAPIResponse;

/** - The search request. */
export interface FinancialDatasetsSearchFinancialsByLineItemsPayload {
	/** @format double */
	limit?: number;
	line_items: string[];
	period?: FinancialDatasetsSearchFinancialsByLineItemsPeriodEnum;
	tickers: string[];
}

export enum FinancialDatasetsSearchFinancialsByLineItemsPeriodEnum {
	Annual = "annual",
	Quarterly = "quarterly",
	Ttm = "ttm",
}

export type FinancialDatasetsSearchFinancialsData = SearchFinancialsAPIResponse;

export interface Flow {
	created_at: string;
	description: string | null;
	edges: Json;
	id: string;
	name: string;
	nodes: Json;
	updated_at: string;
	user_id: string;
	/** @format double */
	version: number;
}

export interface FlowEdge {
	id: string;
	label?: string;
	source: string;
	target: string;
}

export interface FlowNode {
	data: {
		condition?: string;
		function?: string;
		params?: any;
		userFunctionName?: string;
		wrapper?: string;
	};
	id: string;
	type: FlowNodeTypeEnum;
}

export enum FlowNodeTypeEnum {
	Action = "action",
	Condition = "condition",
	UserFunction = "userFunction",
}

export type FollowingTimelineData = BotConfigType;

/** Interface representing the full reserves incentive data. */
export interface FullReservesIncentiveData {
	/** The aggregated reserve incentive data. */
	reservesIncentiveData: AggregatedReserveIncentiveData[];
	/** The user reserve incentive data. */
	userReserveIncentiveData: UserReserveIncentiveData[];
}

export interface GasCost {
	amount: string;
	amountUSD: string;
	estimate: string;
	limit: string;
	price: string;
	token: TokenInfo;
	type: string;
}

/** Represents the gas price information for a specific blockchain. */
export interface GasPrice {
	/**
	 * The average gas price over the last 24 hours.
	 * @format double
	 */
	average24h: number;
	/**
	 * The average gas price over the last 7 days.
	 * @format double
	 */
	average7d: number;
	/** The identifier of the blockchain. */
	chainId: string;
	/** The historical gas prices with their respective timestamps. */
	history: {
		/** @format double */
		timestamp: number;
		/** @format double */
		value: number;
	}[];
	/**
	 * The timestamp of the last recorded gas price.
	 * @format double
	 */
	lastTimestamp: number;
	/** The unit name of the gas price (e.g., Gwei, Wei). */
	unitName: string;
}

export interface GeneratedTweet {
	replyTweetId?: string;
	replyTweets: string[];
	screenshot?: string;
	text: string;
}

export type GetAllReservesTokensData =
	PoolAddressProviderRegistryAPIResponseAnyArray;

export interface GetAllReservesTokensParams {
	account: string;
	address: string;
	chainId: string;
}

export type GetAmountInData =
	UniswapV2APIResponseUniswapV2ExecuteFunctionResult;

export type GetAmountOutData =
	LynexRouterAPIResponseAmountOutStringStableBoolean;

export type GetAmountOutOutput =
	UniswapV2APIResponseUniswapV2ExecuteFunctionResult;

export interface GetAmountOutParams {
	address: string;
	amountIn: string;
	chainId: string;
	tokenIn: string;
	tokenOut: string;
}

export interface GetAmountOutParams2 {
	address: string;
	amountIn: string;
	chainId: string;
	tokenIn: string;
	tokenOut: string;
}

export type GetAmountOutResult =
	RamsesRouterAPIResponseAmountOutStringStableBoolean;

export type GetAmountsInData =
	UniswapV2APIResponseUniswapV2ExecuteFunctionResult;

export type GetAmountsOutData = LynexRouterAPIResponseStringArray;

export type GetAmountsOutOutput =
	UniswapV2APIResponseUniswapV2ExecuteFunctionResult;

export interface GetAmountsOutParams {
	address: string;
	amountIn: string;
	chainId: string;
	routes: string;
}

export interface GetAmountsOutParams2 {
	address: string;
	amountIn: string;
	chainId: string;
	routes: string;
}

export type GetAmountsOutResult = RamsesRouterAPIResponseStringArray;

export type GetApprovedData = LynexNFTAPIResponseString;

export type GetApprovedOutput = VeTheNFTAPIResponseString;

export interface GetApprovedParams {
	address: string;
	chainId: string;
	tokenId: string;
}

export interface GetApprovedParams2 {
	address: string;
	chainId: string;
	/** @format double */
	tokenId: number;
}

export interface GetApprovedParams4 {
	address: string;
	chainId: string;
	tokenId: string;
}

export type GetApprovedResult = UniswapV3NFTAPIResponseString;

export type GetAssetByAddressData = LynexAPIResponse;

export type GetAssetsData = LynexAPIResponse;

export type GetBalanceAllowanceData =
	PolymarketAPIResponseBalanceAllowanceResponse;

export interface GetBalanceAllowanceParams {
	account: string;
	asset_type: string;
	chainId: string;
	token_id?: string;
}

export type GetBalanceOfAtNftData = VeTheNFTAPIResponseString;

export interface GetBalanceOfAtNftParams {
	address: string;
	block: string;
	chainId: string;
	tokenId: string;
}

export type GetBalanceOfData = LynexNFTAPIResponseString;

export type GetBalanceOfNftAtData = LynexNFTAPIResponseString;

export interface GetBalanceOfNftAtParams {
	address: string;
	chainId: string;
	timestamp: string;
	tokenId: string;
}

export type GetBalanceOfNftData = LynexNFTAPIResponseString;

export type GetBalanceOfNftOutput = VeTheNFTAPIResponseString;

export interface GetBalanceOfNftParams {
	address: string;
	chainId: string;
	tokenId: string;
}

export interface GetBalanceOfNftParams2 {
	address: string;
	chainId: string;
	tokenId: string;
}

export interface GetBalanceOfNftParams4 {
	address: string;
	chainId: string;
	tokenId: string;
}

export type GetBalanceOfNftResult = RamsesNFTAPIResponseString;

export type GetBalanceOfOutput = VeTheNFTAPIResponseString;

export interface GetBalanceOfParams {
	address: string;
	chainId: string;
	owner: string;
}

export interface GetBalanceOfParams2 {
	address: string;
	chainId: string;
	owner: string;
}

export interface GetBalanceOfParams4 {
	account: string;
	address: string;
	chainId: string;
}

export type GetBalanceOfResult = RamsesNFTAPIResponseString;

export type GetBotLastRunResultsData = any;

export type GetBotStatusData = string;

export type GetCollectionData = OpenSeaAPIResponse;

export interface GetCollectionParams {
	account: string;
	/** @default "1" */
	chainId?: string;
	slug: string;
}

export type GetConfigsData = BotConfigType[];

export type GetDelegatesData = LynexNFTAPIResponseString;

export type GetDelegatesOutput = VeTheNFTAPIResponseString;

export interface GetDelegatesParams {
	address: string;
	chainId: string;
	timestamp: string;
	tokenId: string;
}

export interface GetDelegatesParams2 {
	account: string;
	address: string;
	chainId: string;
}

export interface GetDelegatesParams4 {
	address: string;
	chainId: string;
	delegator: string;
}

export type GetDelegatesResult = RamsesNFTAPIResponseString;

export type GetEosAccountData = AccountAPIResponse;

export type GetFactoryData = LynexRouterAPIResponseString;

export interface GetFactoryParams {
	address: string;
	chainId: string;
}

export interface GetFactoryParams2 {
	address: string;
	chainId: string;
}

export type GetFactoryResult = RamsesRouterAPIResponseString;

export type GetFlowData = MultiCallAPIResponseFlow;

export type GetFusionByAddressData = ThenaAPIResponse;

export type GetFusionsByTypeData = ThenaAPIResponse;

export type GetFusionsData = ThenaAPIResponse;

export type GetGasPriceData = ThorSwapAPIResponseGasPrice;

export interface GetGasPriceParams {
	address: string;
	chainId: string;
}

export type GetInfoData = RamsesAPIResponse;

export type GetJobData = MultiCallAPIResponseJobs;

export type GetJobResultData = MultiCallAPIResponseAny;

export type GetLastUserSlopeData = VeTheNFTAPIResponseString;

export interface GetLastUserSlopeParams {
	address: string;
	chainId: string;
	tokenId: string;
}

export type GetLastVotedData = LynexVoterAPIResponseString;

export interface GetLastVotedParams {
	address: string;
	chainId: string;
	voter: string;
}

export interface GetLastVotedParams2 {
	address: string;
	chainId: string;
	tokenId: string;
}

export type GetLastVotedResult = RamsesVoterAPIResponseString;

export type GetLockDetailsData = LynexNFTAPIResponseAny;

export interface GetLockDetailsParams {
	address: string;
	chainId: string;
	tokenId: string;
}

export type GetLockedData = RamsesNFTAPIResponseLockedData;

export type GetLockedEndData = VeTheNFTAPIResponseString;

export interface GetLockedEndParams {
	address: string;
	chainId: string;
	tokenId: string;
}

export interface GetLockedParams {
	address: string;
	chainId: string;
	tokenId: string;
}

export interface GetLockedParams2 {
	address: string;
	chainId: string;
	tokenId: string;
}

export type GetLockedResult = VeTheNFTAPIResponseLockedData;

export type GetMarketData = PolymarketAPIResponseAny;

export interface GetMarketParams {
	account: string;
	chainId: string;
	conditionId: string;
}

export type GetMarketTradeEventsData =
	PolymarketAPIResponseMarketTradeEventArray;

export interface GetMarketTradeEventsParams {
	account: string;
	chainId: string;
	conditionId: string;
}

export type GetMarketsData = PolymarketAPIResponsePaginationPayload;

export interface GetMarketsParams {
	account: string;
	chainId: string;
	nextCursor?: string;
}

export type GetMessageData = PingResponse;

export type GetNameData = LynexNFTAPIResponseString;

export interface GetNameParams {
	address: string;
	chainId: string;
}

export type GetNftData = OpenSeaAPIResponse;

export interface GetNftParams {
	account: string;
	address: string;
	/** @default "1" */
	chainId?: string;
	tokenId: string;
}

export type GetNotificationsData = MultiCallAPIResponseAnyArray;

export interface GetNotificationsParams1 {
	account: string;
	chainId: string;
}

export type GetNotificationsResult = PolymarketAPIResponseNotificationArray;

export type GetOpenOrdersData = PolymarketAPIResponseOpenOrdersResponse;

export interface GetOpenOrdersParams {
	account: string;
	assetId?: string;
	chainId: string;
	marketHash?: string;
	nextCursor?: string;
	outcomeId?: string;
}

export type GetOrderBookData = PolymarketAPIResponseOrderBookSummary;

export interface GetOrderBookParams {
	account: string;
	chainId: string;
	tokenID: string;
}

export type GetOrderData = PolymarketAPIResponseOpenOrder;

export interface GetOrderParams {
	account: string;
	chainId: string;
	orderId: string;
}

export type GetOwnerOfData = LynexNFTAPIResponseString;

export type GetOwnerOfOutput = VeTheNFTAPIResponseString;

export interface GetOwnerOfParams {
	address: string;
	chainId: string;
	tokenId: string;
}

export interface GetOwnerOfParams2 {
	address: string;
	chainId: string;
	tokenId: string;
}

export interface GetOwnerOfParams4 {
	address: string;
	chainId: string;
	tokenId: string;
}

export type GetOwnerOfResult = RamsesNFTAPIResponseString;

export type GetPastTotalSupplyData = VeTheNFTAPIResponseString;

export interface GetPastTotalSupplyParams {
	address: string;
	chainId: string;
	timestamp: string;
}

export type GetPastVotesData = LynexNFTAPIResponseString;

export type GetPastVotesOutput = VeTheNFTAPIResponseString;

export interface GetPastVotesParams {
	account: string;
	address: string;
	chainId: string;
	timestamp: string;
}

export interface GetPastVotesParams2 {
	account: string;
	address: string;
	blockNumber: string;
	chainId: string;
}

export interface GetPastVotesParams4 {
	account: string;
	address: string;
	chainId: string;
	timestamp: string;
}

export type GetPastVotesResult = RamsesNFTAPIResponseString;

export type GetPoolByAddressData = LynexAPIResponse;

export type GetPoolByAddressResult = RamsesAPIResponse;

export type GetPoolVoteLengthData = LynexVoterAPIResponseString;

export interface GetPoolVoteLengthParams {
	address: string;
	chainId: string;
	voter: string;
}

export type GetPoolsByTypeData = LynexAPIResponse;

export type GetPoolsByTypeResult = RamsesAPIResponse;

export type GetPoolsData = LynexAPIResponse;

export type GetPoolsResult = RamsesAPIResponse;

export type GetPriceInferenceData = AlloraInferenceResponse;

export interface GetPriceInferenceParams {
	/** - The asset to get inference for (ETH or BTC) */
	asset: Asset;
	/**
	 * - The current price of the asset
	 * @format double
	 */
	currentPrice: number;
	/** - The timeframe for the inference (5m or 8h) */
	timeframe: TimeFrame;
}

export type GetPricesHistoryData = PolymarketAPIResponseMarketPriceArray;

export interface GetPricesHistoryParams {
	account: string;
	chainId: string;
	/** @format double */
	endTs?: number;
	/** @format double */
	fidelity?: number;
	interval?: string;
	market?: string;
	/** @format double */
	startTs?: number;
}

export type GetQuoteData = ThorSwapAPIResponseQuote;

export interface GetQuoteParams {
	affiliateAddress?: string;
	/** @format double */
	affiliateBasisPoints?: number;
	allowSmartContractRecipient?: boolean;
	buyAsset: string;
	chainId: string;
	/** @format double */
	limit?: number;
	preferredProvider?: string;
	providers?: string[];
	recipientAddress: string;
	/** @format double */
	sellAmount: number;
	sellAsset: string;
	senderAddress: string;
	/** @format double */
	slippage?: number;
}

export type GetReservesData =
	RamsesRouterAPIResponseReserve03AstringReserve13Astring;

export type GetReservesDataData = AAVEv3UiPoolDataProviderAPIResponseAny;

export interface GetReservesDataParams {
	chain_id: string;
	contract_address: string;
	provider: string;
}

export interface GetReservesParams {
	address: string;
	chainId: string;
	stable: boolean;
	tokenA: string;
	tokenB: string;
}

export type GetRippleAccountData = AccountAPIResponse;

export type GetScheduledJobsData = MultiCallAPIResponseAnyArray;

export type GetSolanaAccountData = AccountAPIResponse;

export type GetSupportedChainsData = ThorSwapAPIResponseStringArray;

export interface GetSupportedChainsParams {
	address: string;
	chainId: string;
}

/** Represents the response from the GetSupportedOnRamps API. */
export interface GetSupportedOnRampsResponse {
	/** An array of supported on-ramp objects. */
	message: {
		/** The display name of the on-ramp. */
		displayName: string;
		/** The on-ramp service. */
		icon: string;
		/** The URL of the icon for the on-ramp. */
		icons: {
			/** An object containing different sizes of the PNG format of the icon. */
			png: {
				"160x160": string;
				"32x32": string;
			};
			/** The URL of the SVG format of the icon. */
			svg: string;
		};
		/** The unique identifier of the on-ramp. */
		id: string;
	}[];
}

export type GetSupportedProvidersData = ThorSwapAPIResponseStringArray;

export interface GetSupportedProvidersParams {
	address: string;
	chainId: string;
}

export type GetSymbolData = LynexNFTAPIResponseString;

export interface GetSymbolParams {
	address: string;
	chainId: string;
}

export type GetTokenByIndexData = LynexNFTAPIResponseString;

export interface GetTokenByIndexParams {
	address: string;
	chainId: string;
	index: string;
}

export type GetTokenMetadataJSONResponse = SuccessResponse249;

export type GetTokenOfOwnerByIndexData = LynexNFTAPIResponseString;

export interface GetTokenOfOwnerByIndexParams {
	address: string;
	chainId: string;
	index: string;
	owner: string;
}

export type GetTokenUriData = LynexNFTAPIResponseString;

export type GetTokenUriOutput = VeTheNFTAPIResponseString;

export interface GetTokenUriParams {
	address: string;
	chainId: string;
	tokenId: string;
}

export interface GetTokenUriParams2 {
	address: string;
	chainId: string;
	tokenId: string;
}

export interface GetTokenUriParams4 {
	address: string;
	chainId: string;
	tokenId: string;
}

export type GetTokenUriResult = RamsesNFTAPIResponseString;

export type GetTokensData = RamsesAPIResponse;

export type GetToolsData = ApiResponseToolsResponse;

export interface GetToolsParams {
	/** - Optional query parameter specifying the chains to filter tools. */
	chains?: string;
}

export type GetTopAprFusionsData = ThenaAPIResponse;

export interface GetTopAprFusionsParams {
	/** @format double */
	limit?: number;
}

export type GetTopAprPoolsData = LynexAPIResponse;

export interface GetTopAprPoolsParams {
	/** @format double */
	limit?: number;
}

export interface GetTopAprPoolsParams2 {
	/** @format double */
	limit?: number;
}

export type GetTopAprPoolsResult = RamsesAPIResponse;

export type GetTopPairsData = ThenaAPIResponse;

export interface GetTopPairsParams {
	/** @format double */
	limit?: number;
}

export type GetTopTokensData = ThenaAPIResponse;

export interface GetTopTokensParams {
	/** @format double */
	limit?: number;
}

export type GetTotalNftsMintedData = LynexNFTAPIResponseString;

export interface GetTotalNftsMintedParams {
	address: string;
	chainId: string;
}

export type GetTotalSupplyAtData = VeTheNFTAPIResponseString;

export interface GetTotalSupplyAtParams {
	address: string;
	block: string;
	chainId: string;
}

export type GetTotalSupplyAtTData = VeTheNFTAPIResponseString;

export interface GetTotalSupplyAtTParams {
	address: string;
	chainId: string;
	t: string;
}

export type GetTotalSupplyData = LynexNFTAPIResponseString;

export type GetTotalSupplyOutput = VeTheNFTAPIResponseString;

export interface GetTotalSupplyParams {
	address: string;
	chainId: string;
}

export interface GetTotalSupplyParams2 {
	address: string;
	chainId: string;
}

export interface GetTotalSupplyParams4 {
	address: string;
	chainId: string;
}

export type GetTotalSupplyResult = RamsesNFTAPIResponseString;

export type GetTotalValueLockedData = LynexAPIResponse;

export type GetTotalValueLockedOutput = ThenaAPIResponse;

export type GetTotalValueLockedResult = RamsesAPIResponse;

export type GetTotalWeightData = LynexVoterAPIResponseString;

export type GetTotalWeightOutput = VeTheNftVoterAPIResponseString;

export interface GetTotalWeightParams {
	address: string;
	chainId: string;
}

export interface GetTotalWeightParams2 {
	address: string;
	chainId: string;
}

export interface GetTotalWeightParams4 {
	address: string;
	chainId: string;
}

export type GetTotalWeightResult = RamsesVoterAPIResponseString;

export type GetTradesData = PolymarketAPIResponseTradeArray;

export interface GetTradesParams {
	account: string;
	after?: string;
	asset_id?: string;
	before?: string;
	chainId: string;
	id?: string;
	maker_address?: string;
	market?: string;
	nextCursor?: string;
}

export type GetUserPointHistoryData = VeTheNFTAPIResponseUserPointHistoryData;

export interface GetUserPointHistoryParams {
	address: string;
	chainId: string;
	loc: string;
	tokenId: string;
}

export type GetUserPointHistoryTsData = VeTheNFTAPIResponseString;

export interface GetUserPointHistoryTsParams {
	address: string;
	chainId: string;
	idx: string;
	tokenId: string;
}

export type GetVestedPayoutAtTimeData = LynexNFTAPIResponseString;

export interface GetVestedPayoutAtTimeParams {
	address: string;
	chainId: string;
	timestamp: string;
	tokenId: string;
}

export type GetVestedPayoutData = LynexNFTAPIResponseString;

export interface GetVestedPayoutParams {
	address: string;
	chainId: string;
	tokenId: string;
}

export type GetVestingPayoutData = LynexNFTAPIResponseString;

export interface GetVestingPayoutParams {
	address: string;
	chainId: string;
	tokenId: string;
}

export type GetVestingPeriodData = LynexNFTAPIResponseVestingPeriodData;

export interface GetVestingPeriodParams {
	address: string;
	chainId: string;
	tokenId: string;
}

export type GetVotesData = LynexNFTAPIResponseString;

export type GetVotesOutput = VeTheNFTAPIResponseString;

export interface GetVotesParams {
	account: string;
	address: string;
	chainId: string;
}

export interface GetVotesParams2 {
	account: string;
	address: string;
	chainId: string;
}

export interface GetVotesParams4 {
	account: string;
	address: string;
	chainId: string;
}

export type GetVotesResult = RamsesNFTAPIResponseString;

export type GetWeightsData = LynexVoterAPIResponseString;

export type GetWeightsOutput = VeTheNftVoterAPIResponseString;

export interface GetWeightsParams {
	address: string;
	chainId: string;
	pool: string;
}

export interface GetWeightsParams2 {
	address: string;
	chainId: string;
	pool: string;
}

export interface GetWeightsParams4 {
	address: string;
	chainId: string;
	pool: string;
}

export type GetWeightsResult = RamsesVoterAPIResponseString;

export type GetWethData = LynexRouterAPIResponseString;

export type GetWethOutput = UniswapV2APIResponseUniswapV2ExecuteFunctionResult;

export interface GetWethParams {
	address: string;
	chainId: string;
}

export interface GetWethParams2 {
	address: string;
	chainId: string;
}

export interface GetWethParams4 {
	account: string;
	address: string;
	chainId: string;
}

export type GetWethResult = RamsesRouterAPIResponseString;

export type GetZapQuoteData = OdosAPIResponseOdosExecuteFunctionResult;

export type GlobalCheckpointData =
	LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export interface ImpliedFuturePriceData {
	data?: {
		/** @format double */
		impliedFuturePrice: number;
	};
	message: string;
	success: boolean;
}

export interface ImpliedFuturePriceParams {
	/**
	 * - The current price of the asset
	 * @format double
	 */
	currentPrice: number;
	/**
	 * - The log return
	 * @format double
	 */
	logReturn: number;
}

/** Interface representing the incentive data for a token. */
export interface IncentiveData {
	/** The address of the incentive controller. */
	incentiveControllerAddress: string;
	/** An array of reward information objects. */
	rewardsTokenInformation: RewardInfo[];
	/** The address of the token. */
	tokenAddress: string;
}

/** Represents an income statement for a financial entity. */
export interface IncomeStatement {
	/** The calendar date of the income statement. */
	calendar_date: string;
	/**
	 * The consolidated income of the company.
	 * @format double
	 */
	consolidated_income: number;
	/**
	 * The cost associated with generating the revenue.
	 * @format double
	 */
	cost_of_revenue: number;
	/** The currency in which the financials are reported. */
	currency: string;
	/**
	 * The dividends paid per common share.
	 * @format double
	 */
	dividends_per_common_share: number;
	/**
	 * The earnings per share of the company.
	 * @format double
	 */
	earnings_per_share: number;
	/**
	 * The diluted earnings per share of the company.
	 * @format double
	 */
	earnings_per_share_diluted: number;
	/**
	 * Earnings before interest and taxes.
	 * @format double
	 */
	ebit: number;
	/**
	 * The gross profit, calculated as revenue minus cost of revenue.
	 * @format double
	 */
	gross_profit: number;
	/**
	 * The income tax expense incurred by the company.
	 * @format double
	 */
	income_tax_expense: number;
	/**
	 * The interest expense incurred by the company.
	 * @format double
	 */
	interest_expense: number;
	/**
	 * The net income of the company.
	 * @format double
	 */
	net_income: number;
	/**
	 * The net income attributable to common stockholders.
	 * @format double
	 */
	net_income_common_stock: number;
	/**
	 * The net income from discontinued operations.
	 * @format double
	 */
	net_income_discontinued_operations: number;
	/**
	 * The net income attributable to non-controlling interests.
	 * @format double
	 */
	net_income_non_controlling_interests: number;
	/**
	 * The total operating expenses of the company.
	 * @format double
	 */
	operating_expense: number;
	/**
	 * The operating income, calculated as gross profit minus operating expenses.
	 * @format double
	 */
	operating_income: number;
	/** The period type of the income statement, which can be "quarterly", "ttm" (trailing twelve months), or "annual". */
	period: IncomeStatementPeriodEnum;
	/**
	 * The impact of preferred dividends on net income.
	 * @format double
	 */
	preferred_dividends_impact: number;
	/** The reporting period of the income statement. */
	report_period: string;
	/**
	 * The expenses related to research and development activities.
	 * @format double
	 */
	research_and_development: number;
	/**
	 * The total revenue generated by the company.
	 * @format double
	 */
	revenue: number;
	/**
	 * The expenses related to selling, general, and administrative activities.
	 * @format double
	 */
	selling_general_and_administrative_expenses: number;
	/** The ticker symbol of the company. */
	ticker: string;
	/**
	 * The weighted average number of shares outstanding.
	 * @format double
	 */
	weighted_average_shares: number;
	/**
	 * The weighted average number of diluted shares outstanding.
	 * @format double
	 */
	weighted_average_shares_diluted: number;
}

/** The period type of the income statement, which can be "quarterly", "ttm" (trailing twelve months), or "annual". */
export enum IncomeStatementPeriodEnum {
	Quarterly = "quarterly",
	Ttm = "ttm",
	Annual = "annual",
}

/** Represents the response of the `getIncomeStatements` endpoint. */
export interface IncomeStatementsAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The income statement data. */
	data?: IncomeStatement[];
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

export type IncreaseAmountData =
	RamsesNFTAPIResponseRamsesNFTExecuteFunctionResult;

export type IncreaseLiquidityData =
	UniswapV3NFTAPIResponseUniswapV3ExecuteFunctionResult;

export type IncreaseLockAmountData =
	LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type IncreaseLockAmountResult =
	VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export type IncreaseUnlockTimeData =
	LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type IncreaseUnlockTimeOutput =
	VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export type IncreaseUnlockTimeResult =
	RamsesNFTAPIResponseRamsesNFTExecuteFunctionResult;

/** Represents the body of an input request. */
export interface InputBody {
	/** Whether the transaction is from an externally owned account. */
	EOA?: boolean;
	/** The access list for the transaction. */
	accessList?: AccessTuple[];
	/** The account involved in the transaction. */
	account?: string;
	/** Whether to always increment the nonce. */
	alwaysIncrementNonce?: boolean;
	/** The amount involved in the transaction. */
	amount?: string;
	/** The amounts involved in the transaction. */
	amounts?: string[];
	/** Whether the transaction is approved. */
	approved?: boolean;
	/** The asset involved in the transaction. */
	asset?: string;
	/** The assets involved in the transaction. */
	assets?: string[];
	/** The gas for blob transactions. */
	blobGas?: string;
	/** The gas fee cap for blob transactions. */
	blobGasFeeCap?: string;
	/** The hashes for blob transactions. */
	blobHashes?: string[];
	/** The borrow amount. */
	borrowAmount?: string | number;
	/** Whether to broadcast the transaction. */
	broadcast?: boolean;
	/** The chain ID. */
	chain_id?: string;
	/** The collateral asset. */
	collateralAsset?: string;
	/** The contract address. */
	contract_address?: string;
	/** The data to be sent. */
	data?: string;
	/** The debt asset. */
	debtAsset?: string;
	/** The debt to cover. */
	debtToCover?: string;
	/** Whether to perform a dry run. */
	dryrun?: boolean;
	/** The encoding type. */
	encoding?: string;
	/** The gas for the transaction. */
	gas?: string;
	/** The gas limit for the transaction. */
	gasLimit?: string;
	/** The gas price for the transaction. */
	gasPrice?: string;
	/** The initial deposit. */
	initialDeposit?: string | number;
	/** The initiator of the transaction. */
	initiator?: string;
	/** The input data. */
	input?: string;
	/** The input tokens. */
	inputTokens?: TokenAmount[];
	/**
	 * The interest rate mode.
	 * @format double
	 */
	interestRateMode?: number;
	/** The maximum fee per gas. */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas. */
	maxPriorityFeePerGas?: string;
	/** The minimum health factor. */
	minHealthFactor?: string | number;
	/** The modes of the transaction. */
	modes?: number[];
	/** The nonce for the transaction. */
	nonce?: string;
	/** The address on behalf of which the transaction is made. */
	onBehalfOf?: string;
	/** The output tokens. */
	outputTokens?: TokenProportion[];
	/** Additional parameters. */
	params?: string;
	/** The premiums. */
	premiums?: string[] | number[];
	/**
	 * The rate mode.
	 * @format double
	 */
	rateMode?: number;
	/** Whether to receive a token. */
	receiveAToken?: boolean;
	/** The receiver address. */
	receiverAddress?: string;
	/**
	 * The referral code.
	 * @format double
	 */
	referralCode?: number;
	/** The role of the user. */
	role?: string;
	/** Whether to simulate the transaction. */
	simulate?: boolean;
	/**
	 * The slippage limit percentage.
	 * @format double
	 */
	slippageLimitPercent?: number;
	/** The recipient address. */
	to?: string;
	/** The token ID. */
	token_id?: string;
	/** The token IDs. */
	token_ids?: string;
	/**
	 * The type of transaction.
	 * @format double
	 */
	type?: number;
	/** Whether to use as collateral. */
	useAsCollateral?: boolean;
	/** The user involved in the transaction. */
	user?: string;
	/** The value to be sent. */
	value?: string;
}

/** Represents an insider transaction for a financial dataset. */
export interface InsiderTransaction {
	/** The date the transaction was filed. */
	filing_date: string;
	/** Indicates if the insider is a board director. */
	is_board_director: boolean;
	/** The issuer of the security. */
	issuer: string;
	/** The name of the insider. */
	name: string;
	/** The title of the security involved in the transaction. */
	security_title: string;
	/**
	 * The number of shares owned after the transaction.
	 * @format double
	 */
	shares_owned_after_transaction: number;
	/**
	 * The number of shares owned before the transaction.
	 * @format double
	 */
	shares_owned_before_transaction: number;
	/** The ticker symbol of the company. */
	ticker: string;
	/** The title of the insider. */
	title: string;
	/** The date of the transaction. */
	transaction_date: string;
	/**
	 * The price per share at which the transaction occurred.
	 * @format double
	 */
	transaction_price_per_share: number;
	/**
	 * The number of shares involved in the transaction.
	 * @format double
	 */
	transaction_shares: number;
	/**
	 * The total value of the transaction.
	 * @format double
	 */
	transaction_value: number;
}

/** Represents the response of the `getInsiderTransactions` endpoint. */
export interface InsiderTransactionsAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The insider transaction data. */
	data?: InsiderTransaction[];
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

export type IsApprovedForAllData = LynexNFTAPIResponseBoolean;

export type IsApprovedForAllOutput = VeTheNFTAPIResponseBoolean;

export interface IsApprovedForAllParams {
	address: string;
	chainId: string;
	operator: string;
	owner: string;
}

export interface IsApprovedForAllParams2 {
	address: string;
	chainId: string;
	operator: string;
	owner: string;
}

export interface IsApprovedForAllParams4 {
	address: string;
	chainId: string;
	operator: string;
	owner: string;
}

export type IsApprovedForAllResult = UniswapV3NFTAPIResponseBoolean;

export type IsGaugeData = LynexVoterAPIResponseBoolean;

export type IsGaugeOutput = VeTheNftVoterAPIResponseBoolean;

export interface IsGaugeParams {
	address: string;
	chainId: string;
	gauge: string;
}

export interface IsGaugeParams2 {
	address: string;
	chainId: string;
	gauge: string;
}

export interface IsGaugeParams4 {
	address: string;
	chainId: string;
	gauge: string;
}

export type IsGaugeResult = RamsesVoterAPIResponseBoolean;

export type IsPairData = RamsesRouterAPIResponseBoolean;

export interface IsPairParams {
	address: string;
	chainId: string;
	pair: string;
}

export type IsWhitelistedData = LynexVoterAPIResponseBoolean;

export type IsWhitelistedOutput = VeTheNftVoterAPIResponseBoolean;

export interface IsWhitelistedParams {
	address: string;
	chainId: string;
	token: string;
}

export interface IsWhitelistedParams2 {
	address: string;
	chainId: string;
	token: string;
}

export interface IsWhitelistedParams4 {
	address: string;
	chainId: string;
	tokenAddress: string;
}

export type IsWhitelistedResult = RamsesVoterAPIResponseBoolean;

export interface Jobs {
	calls: Json;
	created_at: string;
	error: Json | null;
	flow: Json | null;
	flow_id: string | null;
	global_variables: Json | null;
	id: string;
	status: string;
	updated_at: string;
	user_id: string;
}

export type Json = string | number | boolean | null;

/** Represents the structure of a response from the Jupiter API. */
export interface JupiterAPIResponseAny {
	/** Optional data returned by the API. The type of this property is determined by the generic type parameter `T`. */
	data?: any;
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the structure of a response from the Jupiter API. */
export interface JupiterAPIResponseJupiterExecuteFunctionResult {
	/** Optional data returned by the API. The type of this property is determined by the generic type parameter `T`. */
	data?: JupiterExecuteFunctionResult;
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the structure of a response from the Jupiter API. */
export interface JupiterAPIResponseRecordStringString {
	/** Optional data returned by the API. The type of this property is determined by the generic type parameter `T`. */
	data?: RecordStringString;
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the structure of a response from the Jupiter API. */
export interface JupiterAPIResponseStringArray {
	/** Optional data returned by the API. The type of this property is determined by the generic type parameter `T`. */
	data?: string[];
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the result of executing a function in the Jupiter system. */
export interface JupiterExecuteFunctionResult {
	/** Additional data returned by the function execution. */
	data?: any;
	/** The name of the function that was executed. */
	function: string;
	/** The Jupiter-specific data related to the execution. */
	jupiter?: any;
	/** A message providing additional information about the execution result. */
	message?: string;
	/** The parameters passed to the function. */
	params: any[];
	/** Indicates whether the function execution was successful. */
	success?: boolean;
	/** The transaction object associated with the execution. */
	transaction?: any;
	/** The hash of the transaction associated with the */
	transactionHash?: string;
}

export type JupiterGetIndexedRouteMapData = JupiterAPIResponseAny;

export interface JupiterGetIndexedRouteMapParams {
	/** - A boolean value indicating whether to only include direct routes in the map. */
	onlyDirectRoutes?: boolean;
}

export type JupiterGetProgramIdToLabelData =
	JupiterAPIResponseRecordStringString;

export type JupiterGetQuoteData =
	JupiterAPIResponseJupiterExecuteFunctionResult;

export type JupiterGetSwapInstructionsData =
	JupiterAPIResponseJupiterExecuteFunctionResult;

export type JupiterGetTokensData = JupiterAPIResponseStringArray;

export type JupiterSwapData = JupiterAPIResponseJupiterExecuteFunctionResult;

export interface KOL {
	/** @format double */
	engagement: number;
	/** @format double */
	followers: number;
	/** @format double */
	mindshare: number;
	/** @format double */
	posts: number;
	username: string;
}

export interface KOLListAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	data?: KOL[];
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

export interface KOLNetwork {
	/** @format double */
	connections: number;
	/** @format double */
	influenceScore: number;
	/** @format double */
	networkStrength: number;
}

export interface KOLNetworkAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	data?: KOLNetwork;
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

export type KillGaugeData =
	LynexVoterAPIResponseLynexVoterExecuteFunctionResult;

export type KillGaugeOutput =
	VeTheNftVoterAPIResponseVeTheNftVoterExecuteFunctionResult;

export type KillGaugeResult =
	RamsesVoterAPIResponseRamsesVoterExecuteFunctionResult;

export type LastVotedData = VeTheNftVoterAPIResponseString;

export interface LastVotedParams {
	address: string;
	chainId: string;
	tokenId: string;
}

/** Represents the structure of the API response for the Lending Pool. */
export interface LendingPoolAPIResponseAny {
	/** Contains the data returned by the API, if any. */
	data?: any;
	/** Provides a message related to the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the structure of the API response for the Lending Pool. */
export interface LendingPoolAPIResponseBoolean {
	/** Contains the data returned by the API, if any. */
	data?: boolean;
	/** Provides a message related to the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the structure of the API response for the Lending Pool. */
export interface LendingPoolAPIResponseLendingPoolExecuteFunctionResult {
	/** Contains the data returned by the API, if any. */
	data?: LendingPoolExecuteFunctionResult;
	/** Provides a message related to the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the structure of the API response for the Lending Pool. */
export interface LendingPoolAPIResponseNumber {
	/**
	 * Contains the data returned by the API, if any.
	 * @format double
	 */
	data?: number;
	/** Provides a message related to the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the structure of the API response for the Lending Pool. */
export interface LendingPoolAPIResponseString {
	/** Contains the data returned by the API, if any. */
	data?: string;
	/** Provides a message related to the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the structure of the API response for the Lending Pool. */
export interface LendingPoolAPIResponseStringArray {
	/** Contains the data returned by the API, if any. */
	data?: string[];
	/** Provides a message related to the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

export type LendingPoolBorrowData =
	LendingPoolAPIResponseLendingPoolExecuteFunctionResult;

export type LendingPoolDepositData =
	LendingPoolAPIResponseLendingPoolExecuteFunctionResult;

/** Represents the result of executing a function on the lending pool. */
export interface LendingPoolExecuteFunctionResult {
	/** Optional response from broadcasting the raw transaction. */
	broadcasted?: BroadCastRawTransactionResponse;
	/** Optional transaction data. */
	data?: Transaction;
	/** The name of the executed function. */
	function: string;
	/** Optional message providing additional information about the execution result. */
	message?: string;
	/** The parameters passed to the executed function. */
	params: any[];
	/** Optional response from simulating asset changes. */
	simulation?: SimulateAssetChangesResponse;
	/** Optional flag indicating if the function execution was successful. */
	success?: boolean;
	/** The transaction details of the executed function. */
	transaction: LendingPoolTransaction;
	/** Optional user operation identifier. */
	user_op?: string;
}

export type LendingPoolFlashLoanData =
	LendingPoolAPIResponseLendingPoolExecuteFunctionResult;

export type LendingPoolGetAddressesProviderData = LendingPoolAPIResponseString;

export interface LendingPoolGetAddressesProviderParams {
	/** - The address query parameter. */
	address: string;
	/** - The chain ID query parameter. */
	chainId: string;
}

export type LendingPoolGetFlashLoanPremiumTotalData =
	LendingPoolAPIResponseNumber;

export interface LendingPoolGetFlashLoanPremiumTotalParams {
	/** - The address of the lending pool. */
	address: string;
	/** - The chain ID of the blockchain network. */
	chainId: string;
}

export type LendingPoolGetLendingPoolRevisionData =
	LendingPoolAPIResponseNumber;

export interface LendingPoolGetLendingPoolRevisionParams {
	/** - The address of the lending pool. */
	address: string;
	/** - The chain ID where the lending pool is located. */
	chainId: string;
}

export type LendingPoolGetMaxNumberReservesData = LendingPoolAPIResponseNumber;

export interface LendingPoolGetMaxNumberReservesParams {
	/** - The address of the lending pool. */
	address: string;
	/** - The chain ID where the lending pool is located. */
	chainId: string;
}

export type LendingPoolGetMaxStableRateBorrowSizePercentData =
	LendingPoolAPIResponseNumber;

export interface LendingPoolGetMaxStableRateBorrowSizePercentParams {
	/** - The address of the lending pool. */
	address: string;
	/** - The chain ID of the blockchain network. */
	chainId: string;
}

export type LendingPoolGetReserveDataData = LendingPoolAPIResponseAny;

export interface LendingPoolGetReserveDataParams {
	/** - The address of the lending pool. */
	address: string;
	/** - The asset for which to retrieve reserve data. */
	asset: string;
	/** - The chain ID of the blockchain network. */
	chainId: string;
}

export type LendingPoolGetReservesListData = LendingPoolAPIResponseStringArray;

export interface LendingPoolGetReservesListParams {
	/** - The address of the lending pool. */
	address: string;
	/** - The chain ID of the blockchain network. */
	chainId: string;
}

export type LendingPoolGetUserAccountDataData = LendingPoolAPIResponseAny;

export interface LendingPoolGetUserAccountDataParams {
	/** - The address of the lending pool. */
	address: string;
	/** - The chain ID of the blockchain network. */
	chainId: string;
	/** - The user address for which to retrieve account data. */
	user: string;
}

/**
 * Interface representing the input body for LendingPool operations.
 * Extends the InputBody interface.
 */
export interface LendingPoolInputBody {
	/** Flag indicating if the operation is performed by an Externally Owned Account. */
	EOA?: boolean;
	/** The access list for the transaction. */
	accessList?: AccessTuple[];
	/** The account involved in the transaction. */
	account?: string;
	/** Flag indicating if the nonce should always be incremented. */
	alwaysIncrementNonce?: boolean;
	/** The amount involved in the operation. */
	amount?: string;
	/** Array of amounts involved in the operation. */
	amounts?: string[];
	/** Whether the transaction is approved. */
	approved?: boolean;
	/** The asset involved in the operation. */
	asset?: string;
	/** Array of assets involved in the operation. */
	assets?: string[];
	/** The gas for blob transactions. */
	blobGas?: string;
	/** The gas fee cap for blob transactions. */
	blobGasFeeCap?: string;
	/** The hashes for blob transactions. */
	blobHashes?: string[];
	/** The borrow amount. */
	borrowAmount?: string | number;
	/** Flag indicating if the transaction should be broadcasted. */
	broadcast?: boolean;
	/** The chain ID. */
	chain_id?: string;
	/** The collateral asset. */
	collateralAsset?: string;
	/** The contract address involved in the operation. */
	contract_address?: string;
	/** Additional data for the operation. */
	data?: string;
	/** The debt asset. */
	debtAsset?: string;
	/** The debt to cover. */
	debtToCover?: string;
	/** Flag indicating if the operation is a dry run. */
	dryrun?: boolean;
	/** The encoding type. */
	encoding?: string;
	/** The gas for the transaction. */
	gas?: string;
	/** The gas limit for the transaction. */
	gasLimit?: string;
	/** The gas price for the transaction. */
	gasPrice?: string;
	/** The initial deposit. */
	initialDeposit?: string | number;
	/** The initiator of the transaction. */
	initiator?: string;
	/** The input data. */
	input?: string;
	/** The input tokens. */
	inputTokens?: TokenAmount[];
	/**
	 * The interest rate mode.
	 * @format double
	 */
	interestRateMode?: number;
	/** The maximum fee per gas. */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas. */
	maxPriorityFeePerGas?: string;
	/** The minimum health factor. */
	minHealthFactor?: string | number;
	/** Array of modes involved in the operation. */
	modes?: number[];
	/** The nonce for the transaction */
	nonce?: string;
	/** The address on behalf of which the operation is performed. */
	onBehalfOf?: string;
	/** The output tokens. */
	outputTokens?: TokenProportion[];
	/** Additional parameters for the operation. */
	params?: string;
	/** The premiums. */
	premiums?: string[] | number[];
	/**
	 * The rate mode for the operation.
	 * @format double
	 */
	rateMode?: number;
	/** Flag indicating if AToken should be received. */
	receiveAToken?: boolean;
	/** The address of the receiver. */
	receiverAddress?: string;
	/**
	 * The referral code.
	 * @format double
	 */
	referralCode?: number;
	/** The role of the user. */
	role?: string;
	/** Flag indicating if the operation should be simulated. */
	simulate?: boolean;
	/**
	 * The slippage limit percentage.
	 * @format double
	 */
	slippageLimitPercent?: number;
	/** The address to which the operation is directed. */
	to?: string;
	/** The token ID. */
	token_id?: string;
	/** The token IDs. */
	token_ids?: string;
	/**
	 * The type of transaction.
	 * @format double
	 */
	type?: number;
	/** Flag indicating if the asset should be used as collateral. */
	useAsCollateral?: boolean;
	/** The user involved in the operation. */
	user?: string;
	/** The value involved in the operation. */
	value?: string;
}

export type LendingPoolIsPausedData = LendingPoolAPIResponseBoolean;

export interface LendingPoolIsPausedParams {
	/** - The address of the lending pool from the query parameters. */
	address: string;
	/** - The chain ID of the lending pool from the query parameters. */
	chainId: string;
}

export type LendingPoolLiquidationCallData =
	LendingPoolAPIResponseLendingPoolExecuteFunctionResult;

export type LendingPoolRepayData =
	LendingPoolAPIResponseLendingPoolExecuteFunctionResult;

export type LendingPoolSetUserUseReserveAsCollateralData =
	LendingPoolAPIResponseLendingPoolExecuteFunctionResult;

export type LendingPoolSwapBorrowRateModeData =
	LendingPoolAPIResponseLendingPoolExecuteFunctionResult;

/** Represents a transaction in the lending pool. */
export interface LendingPoolTransaction {
	/** The chain ID of the blockchain network. */
	chainId: string;
	/** The data payload of the transaction. */
	data: string;
	/** The sender address of the transaction. */
	from: string;
	/** The gas limit for the transaction (optional). */
	gasLimit?: string;
	/** The gas price for the transaction (optional). */
	gasPrice?: string;
	/** The maximum fee per gas for the transaction (optional). */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas for the transaction (optional). */
	maxPriorityFeePerGas?: string;
	/**
	 * The nonce of the transaction.
	 * @format double
	 */
	nonce: number;
	/** The recipient address of the transaction. */
	to: string;
	/**
	 * The type of the transaction (optional).
	 * @format double
	 */
	type?: number;
	/** The value being transferred in the transaction. */
	value: string;
}

export interface LeveragerAPIResponseBoolean {
	data?: boolean;
	message: string;
	success: boolean;
}

export interface LeveragerAPIResponseLeveragerExecuteFunctionResult {
	data?: LeveragerExecuteFunctionResult;
	message: string;
	success: boolean;
}

export interface LeveragerAPIResponseString {
	data?: string;
	message: string;
	success: boolean;
}

export type LeveragerDeleverageErc20Data =
	LeveragerAPIResponseLeveragerExecuteFunctionResult;

export type LeveragerDeleverageNativeData =
	LeveragerAPIResponseLeveragerExecuteFunctionResult;

export interface LeveragerExecuteFunctionResult {
	/** Optional response from broadcasting the raw transaction */
	broadcasted?: BroadCastRawTransactionResponse;
	/** Optional transaction data */
	data?: Transaction;
	/** The name of the function that was executed */
	function: string;
	/** Optional message providing additional information about the execution */
	message?: string;
	/** The parameters passed to the function */
	params: any[];
	/** Optional response from simulating asset changes */
	simulation?: SimulateAssetChangesResponse;
	/** Optional flag indicating if the execution was successful */
	success?: boolean;
	/** The transaction associated with the */
	transaction: LeveragerTransaction;
	/** Optional user operation identifier */
	user_op?: string;
}

export type LeveragerExecuteOperationData =
	LeveragerAPIResponseLeveragerExecuteFunctionResult;

export type LeveragerGetAddressesProviderData = LeveragerAPIResponseString;

export interface LeveragerGetAddressesProviderParams {
	address: string;
	chainId: string;
}

export type LeveragerGetDefaultAdminRoleData = LeveragerAPIResponseString;

export interface LeveragerGetDefaultAdminRoleParams {
	address: string;
	chainId: string;
}

export type LeveragerGetLendingPoolData = LeveragerAPIResponseString;

export interface LeveragerGetLendingPoolParams {
	address: string;
	chainId: string;
}

export type LeveragerGetMinHfData = LeveragerAPIResponseString;

export interface LeveragerGetMinHfParams {
	address: string;
	chainId: string;
}

export type LeveragerGetRoleAdminData = LeveragerAPIResponseString;

export interface LeveragerGetRoleAdminParams {
	address: string;
	chainId: string;
	role: string;
}

export type LeveragerGetWethData = LeveragerAPIResponseString;

export interface LeveragerGetWethParams {
	address: string;
	chainId: string;
}

export type LeveragerGrantRoleData =
	LeveragerAPIResponseLeveragerExecuteFunctionResult;

export type LeveragerHasRoleData = LeveragerAPIResponseBoolean;

export interface LeveragerHasRoleParams {
	account: string;
	address: string;
	chainId: string;
	role: string;
}

/** Represents the input body for the Leverager. */
export interface LeveragerInputBody {
	/** Indicates if the transaction is from an externally owned account. */
	EOA?: boolean;
	/** The access list for the transaction. */
	accessList?: AccessTuple[];
	/** The account involved in the transaction. */
	account?: string;
	/**
	 * Indicates if the nonce should always be incremented
	 * for the transaction.
	 */
	alwaysIncrementNonce?: boolean;
	/** The amount involved in the transaction. */
	amount?: string;
	/** The amounts involved in the transaction. */
	amounts?: string[];
	/** An array of amounts corresponding to the assets. */
	amouts?: string[];
	/** Whether the transaction is approved. */
	approved?: boolean;
	/** The asset involved in the transaction. */
	asset?: string;
	/** An array of assets involved in the transaction. */
	assets?: string[];
	/** The gas for blob transactions. */
	blobGas?: string;
	/** The gas fee cap for blob transactions. */
	blobGasFeeCap?: string;
	/** The hashes for blob transactions. */
	blobHashes?: string[];
	/** The amount to be borrowed. */
	borrowAmount?: string;
	/** Indicates if the transaction should be broadcasted. */
	broadcast?: boolean;
	/** The chain ID. */
	chain_id?: string;
	/** The collateral asset. */
	collateralAsset?: string;
	/** The contract address involved in the transaction. */
	contract_address?: string;
	/** Additional data for the transaction. */
	data?: string;
	/** The debt asset. */
	debtAsset?: string;
	/** The debt to cover. */
	debtToCover?: string;
	/** Indicates if the transaction is a dry run. */
	dryrun?: boolean;
	/** The encoding type. */
	encoding?: string;
	/** The gas amount for the transaction. */
	gas?: string;
	/** The gas limit for the transaction. */
	gasLimit?: string;
	/** The gas price for the transaction. */
	gasPrice?: string;
	/** The initial deposit amount. */
	initialDeposit?: string;
	/** The initiator of the transaction. */
	initiator?: string;
	/** The input data. */
	input?: string;
	/** The input tokens. */
	inputTokens?: TokenAmount[];
	/**
	 * The interest rate mode.
	 * @format double
	 */
	interestRateMode?: number;
	/** The maximum fee per gas. */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas. */
	maxPriorityFeePerGas?: string;
	/** The minimum health factor required. */
	minHealthFactor?: string;
	/** The modes of the transaction. */
	modes?: number[];
	/** The nonce for the transaction. */
	nonce?: string;
	/** The address on behalf of which the transaction is made. */
	onBehalfOf?: string;
	/** The output tokens. */
	outputTokens?: TokenProportion[];
	/** Additional parameters for the transaction. */
	params?: string;
	/** An array of premiums for the transaction. */
	premiums?: string[];
	/**
	 * The rate mode.
	 * @format double
	 */
	rateMode?: number;
	/** Whether to receive a token. */
	receiveAToken?: boolean;
	/** The receiver address. */
	receiverAddress?: string;
	/**
	 * The referral code.
	 * @format double
	 */
	referralCode?: number;
	/**
	 * The role of the user in the
	 * transaction.
	 */
	role?: string;
	/** Indicates if the transaction should be simulated. */
	simulate?: boolean;
	/**
	 * The slippage limit percentage.
	 * @format double
	 */
	slippageLimitPercent?: number;
	/** The recipient address. */
	to?: string;
	/** The token ID. */
	token_id?: string;
	/** The token IDs. */
	token_ids?: string;
	/**
	 * The type of transaction.
	 * @format double
	 */
	type?: number;
	/** Whether to use as collateral. */
	useAsCollateral?: boolean;
	/** The user involved in the transaction. */
	user?: string;
	/** The value of the transaction. */
	value?: string;
}

export type LeveragerIsPausedData = LeveragerAPIResponseBoolean;

export interface LeveragerIsPausedParams {
	address: string;
	chainId: string;
}

export type LeveragerLeverageErc20Data =
	LeveragerAPIResponseLeveragerExecuteFunctionResult;

export type LeveragerLeverageNativeData =
	LeveragerAPIResponseLeveragerExecuteFunctionResult;

export type LeveragerPauseData =
	LeveragerAPIResponseLeveragerExecuteFunctionResult;

export type LeveragerRenounceRoleData =
	LeveragerAPIResponseLeveragerExecuteFunctionResult;

export type LeveragerRevokeRoleData =
	LeveragerAPIResponseLeveragerExecuteFunctionResult;

export type LeveragerSupportsInterfaceData = LeveragerAPIResponseBoolean;

export interface LeveragerSupportsInterfaceParams {
	address: string;
	chainId: string;
	interfaceId: string;
}

/** Represents a transaction for the Leverager. */
export interface LeveragerTransaction {
	/** The chain ID of the blockchain network. */
	chainId: string;
	/** The data payload of the transaction. */
	data: string;
	/** The sender address of the transaction. */
	from: string;
	/** The gas limit for the transaction (optional). */
	gasLimit?: string;
	/** The gas price for the transaction (optional). */
	gasPrice?: string;
	/** The maximum fee per gas for the transaction (optional). */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas for the transaction (optional). */
	maxPriorityFeePerGas?: string;
	/**
	 * The nonce of the transaction.
	 * @format double
	 */
	nonce: number;
	/** The recipient address of the transaction. */
	to: string;
	/**
	 * The type of the transaction (optional).
	 * @format double
	 */
	type?: number;
	/** The value to be transferred in the transaction. */
	value: string;
}

export type LeveragerUnpauseData =
	LeveragerAPIResponseLeveragerExecuteFunctionResult;

export type LifiGetAllPossibleConnectionsData = ApiResponseTokenInfoByChainId;

export interface LifiGetAllPossibleConnectionsParams {
	/** - The target chain identifier. */
	toChain: string;
	/** - The target token identifier. */
	toToken: string;
}

export type LifiGetChainsData = ApiResponseChainsResponse;

export interface LifiGetChainsParams {
	/** - Optional parameter to filter chains by type ('EVM' or 'SOL'). */
	optionalChainTypes?: OptionalChainTypesEnum;
}

/** - Optional parameter to filter chains by type ('EVM' or 'SOL'). */
export enum LifiGetChainsParams1OptionalChainTypesEnum {
	EVM = "EVM",
	SOL = "SOL",
}

export type LifiGetConnectionsData = ApiResponseConnectionsResponse;

export interface LifiGetConnectionsParams {
	/** - Optional parameter to specify types of chains. */
	chainTypes?: string;
	/** - The source blockchain identifier. */
	fromChain: string;
	/** - The source token identifier. */
	fromToken: string;
	/** - The destination blockchain identifier. */
	toChain: string;
	/** - The destination token identifier. */
	toToken: string;
}

export type LifiGetQuoteData = ApiResponseQuote;

export interface LifiGetQuoteParams {
	/** - A list of allowed bridges (optional). */
	allowBridges?: string[];
	/** - A list of allowed exchanges (optional). */
	allowExchanges?: string[];
	/** - A list of denied bridges (optional). */
	denyBridges?: string[];
	/** - A list of denied exchanges (optional). */
	denyExchanges?: string[];
	/**
	 * - The fee amount (optional).
	 * @format double
	 */
	fee?: number;
	/** - The address of the sender on the source chain. */
	fromAddress: string;
	/** - The amount of the source token to swap. */
	fromAmount: string;
	/** - The source blockchain identifier. */
	fromChain: string;
	/** - The token address on the source chain. */
	fromToken: string;
	/** - The integrator identifier (optional). */
	integrator?: string;
	/** - The order preference for the quote ('BEST_VALUE', 'BEST_FEE', 'BEST_FEE_GAS') (optional). */
	order?: OrderEnum;
	/** - A list of preferred bridges (optional). */
	preferBridges?: string[];
	/** - A list of preferred exchanges (optional). */
	preferExchanges?: string[];
	/** - The referrer identifier (optional). */
	referrer?: string;
	/**
	 * - The maximum acceptable slippage percentage (optional).
	 * @format double
	 */
	slippage?: number;
	/** - The address of the recipient on the destination chain (optional). */
	toAddress?: string;
	/** - The destination blockchain identifier. */
	toChain: string;
	/** - The token address on the destination chain. */
	toToken: string;
}

/** - The order preference for the quote ('BEST_VALUE', 'BEST_FEE', 'BEST_FEE_GAS') (optional). */
export enum LifiGetQuoteParams1OrderEnum {
	BEST_VALUE = "BEST_VALUE",
	BEST_FEE = "BEST_FEE",
	BEST_FEE_GAS = "BEST_FEE_GAS",
}

export type LifiGetStatusData = ApiResponseStatusResponse;

export interface LifiGetStatusParams {
	/** - The hash of the transaction to retrieve the status for. */
	txHash: string;
}

export type LifiGetTokenDetailsData = ApiResponseTokenDetails;

export interface LifiGetTokenDetailsParams {
	/** - The blockchain on which the token resides. */
	chain: string;
	/** - The address or symbol of the token to fetch details for. */
	token: string;
}

export type LifiGetTokensData = ApiResponseTokensResponse;

export type LifiPostQuoteData = ApiResponsePostQuote;

export interface LifiPostQuoteParams {
	/** - The name of the account requesting the quote. */
	accountName: string;
	/** - (Optional) The list of allowed bridges for the swap. */
	allowBridges?: string[];
	/** - (Optional) The list of allowed exchanges for the swap. */
	allowExchanges?: string[];
	/** - (Optional) The list of denied bridges for the swap. */
	denyBridges?: string[];
	/** - (Optional) The list of denied exchanges for the swap. */
	denyExchanges?: string[];
	/**
	 * - (Optional) The fee for the swap.
	 * @format double
	 */
	fee?: number;
	/** - The address from which the token swap will originate. */
	fromAddress: string;
	/** - The amount of the token to be swapped from. */
	fromAmount: string;
	/** - The chain from which the token swap will originate. */
	fromChain: string;
	/** - The token to be swapped from. */
	fromToken: string;
	/** - (Optional) The integrator identifier. */
	integrator?: string;
	/** - (Optional) The order preference for the quote (BEST_VALUE, BEST_FEE, BEST_FEE_GAS). */
	order?: OrderEnum1;
	/** - (Optional) The list of preferred bridges for the swap. */
	preferBridges?: string[];
	/** - (Optional) The list of preferred exchanges for the swap. */
	preferExchanges?: string[];
	/** - (Optional) The referrer identifier. */
	referrer?: string;
	/**
	 * - (Optional) The acceptable slippage percentage for the swap.
	 * @format double
	 */
	slippage?: number;
	/** - (Optional) The address to which the token swap will be sent. */
	toAddress?: string;
	/** - The chain to which the token swap will be sent. */
	toChain: string;
	/** - The token to be swapped to. */
	toToken: string;
}

/** - (Optional) The order preference for the quote (BEST_VALUE, BEST_FEE, BEST_FEE_GAS). */
export enum LifiPostQuoteParams1OrderEnum {
	BEST_VALUE = "BEST_VALUE",
	BEST_FEE = "BEST_FEE",
	BEST_FEE_GAS = "BEST_FEE_GAS",
}

/** Represents the response of the `searchFinancials` endpoint. */
export interface LineItemsSearchAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The search results. */
	data?: LineItemsSearchResult[];
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

/** Represents the result of a search for line items in financial datasets. */
export interface LineItemsSearchResult {
	/** The currency in which the financial data is denominated. */
	currency: string;
	/** The period for which the financial data is reported. */
	period: string;
	/** The reporting period of the financial data. */
	report_period: string;
	/** The stock ticker symbol. */
	ticker: string;
	[key: string]: any;
}

export type ListEosAccountsData = AccountAPIResponse;

export type ListFlowsData = MultiCallAPIResponseFlowArray;

export type ListJobsData = MultiCallAPIResponseJobsArray;

export type ListLitecoinAccountsData = AccountAPIResponse;

export type ListRippleAccountsData = AccountAPIResponse;

export type ListSolanaAccountsData = AccountAPIResponse;

export type ListUserDefinedFunctionsData = MultiCallAPIResponseAnyArray;

export interface LitecoinAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The data associated with the Litecoin response. */
	data?: LitecoinTransactionOutput;
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

export type LitecoinCreateLitecoinAccountData = AccountAPIResponse;

export type LitecoinDeleteLitecoinAccountData = AccountAPIResponse;

export type LitecoinExportLitecoinAccountData = AccountAPIResponse;

export type LitecoinGetLitecoinAccountData = AccountAPIResponse;

/** Represents the input data required for a Litecoin transaction. */
export interface LitecoinInput {
	/** The network on which the transaction is taking place. */
	network?: string;
	/** The private key of the account. */
	private_key?: string;
}

export type LitecoinSignLitecoinTransactionData = LitecoinAPIResponse;

export type LitecoinSignLitecoinTransactionWithMemoData = LitecoinAPIResponse;

/** Represents an input for a Litecoin transaction. */
export interface LitecoinTransactionInput {
	/** Indicates whether to compress the public key. */
	compress?: boolean;
	/** The network on which the transaction is taking place. */
	network?: string;
	/** The recipient address of the transaction. */
	to?: string;
	/**
	 * The amount to be sent.
	 * @format double
	 */
	value?: number;
}

/** Represents the output of a Litecoin transaction. */
export interface LitecoinTransactionOutput {
	/** The signed transaction. */
	signedTx?: string;
	/** The transaction hash. */
	transaction_hash?: string;
}

export interface LockedData {
	amount: string;
	end: string;
}

export interface LogReturnToPercentageData {
	data?: {
		/** @format double */
		percentageChange: number;
	};
	message: string;
	success: boolean;
}

export interface LogReturnToPercentageParams {
	/**
	 * - The log return to convert
	 * @format double
	 */
	logReturn: number;
}

/** Represents the response structure from the Lynex API. */
export interface LynexAPIResponse {
	/** Optional data returned by the API, if any. */
	data?: any;
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

export interface LynexNFTAPIResponseAny {
	data?: any;
	message: string;
	success: boolean;
}

export interface LynexNFTAPIResponseBoolean {
	data?: boolean;
	message: string;
	success: boolean;
}

export interface LynexNFTAPIResponseLynexNFTExecuteFunctionResult {
	data?: LynexNFTExecuteFunctionResult;
	message: string;
	success: boolean;
}

export interface LynexNFTAPIResponseString {
	data?: string;
	message: string;
	success: boolean;
}

export interface LynexNFTAPIResponseVestingPeriodData {
	data?: VestingPeriodData;
	message: string;
	success: boolean;
}

export interface LynexNFTExecuteFunctionResult {
	/** Optional response from broadcasting the raw transaction. */
	broadcasted?: BroadCastRawTransactionResponse;
	/** Optional additional transaction data. */
	data?: Transaction;
	/** The name of the executed function. */
	function: string;
	/** Optional message providing additional information about the execution. */
	message?: string;
	/** The parameters passed to the executed function. */
	params: any[];
	/** Optional response from simulating asset changes. */
	simulation?: SimulateAssetChangesResponse;
	/** Optional flag indicating whether the execution was successful. */
	success?: boolean;
	/** The transaction details of the executed function. */
	transaction: LynexNFTTransaction;
	/** Optional user operation identifier. */
	user_op?: string;
}

export interface LynexNFTInputBody {
	/** Indicates if the transaction is from an externally owned account */
	EOA?: boolean;
	/** The access list for the transaction. */
	accessList?: AccessTuple[];
	/** The account involved in the transaction. */
	account?: string;
	/** Indicates if the nonce should always be incremented */
	alwaysIncrementNonce?: boolean;
	/** The amount to be transferred or locked */
	amount?: string;
	/** The amounts involved in the transaction. */
	amounts?: string[];
	/** Indicates if the operator is approved */
	approved?: boolean;
	/** The asset involved in the transaction. */
	asset?: string;
	/** The assets involved in the transaction. */
	assets?: string[];
	/** The gas for blob transactions. */
	blobGas?: string;
	/** The gas fee cap for blob transactions. */
	blobGasFeeCap?: string;
	/** The hashes for blob transactions. */
	blobHashes?: string[];
	/** The borrow amount. */
	borrowAmount?: string | number;
	/** Indicates if the transaction should be broadcasted */
	broadcast?: boolean;
	/** The chain ID. */
	chain_id?: string;
	/** The collateral asset. */
	collateralAsset?: string;
	/** The contract address */
	contract_address?: string;
	/** The data to be sent with the transaction */
	data?: string;
	/** The debt asset. */
	debtAsset?: string;
	/** The debt to cover. */
	debtToCover?: string;
	/** The delegatee address */
	delegatee?: string;
	/** Indicates if the transaction should be a dry run */
	dryrun?: boolean;
	/** The encoding type. */
	encoding?: string;
	/** The expiry time */
	expiry?: string;
	/** The gas limit for the transaction */
	gas?: string;
	/** The gas limit for the transaction */
	gasLimit?: string;
	/** The gas price for the transaction */
	gasPrice?: string;
	/** The initial deposit. */
	initialDeposit?: string | number;
	/** The initiator of the transaction. */
	initiator?: string;
	/** The input data. */
	input?: string;
	/** The input tokens. */
	inputTokens?: TokenAmount[];
	/**
	 * The interest rate mode.
	 * @format double
	 */
	interestRateMode?: number;
	/** The lock duration */
	lockDuration?: string;
	/** The maximum fee per gas. */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas. */
	maxPriorityFeePerGas?: string;
	/** The minimum health factor. */
	minHealthFactor?: string | number;
	/** The modes of the transaction. */
	modes?: number[];
	/** The nonce for the transaction */
	nonce?: string;
	/** The address on behalf of which the transaction is made. */
	onBehalfOf?: string;
	/** The operator address */
	operator?: string;
	/** The output tokens. */
	outputTokens?: TokenProportion[];
	/** Additional parameters. */
	params?: string;
	/** Indicates if the lock is permanent */
	permanent?: boolean;
	/** The premiums. */
	premiums?: string[] | number[];
	/** The r parameter for the signature */
	r?: string;
	/**
	 * The rate mode.
	 * @format double
	 */
	rateMode?: number;
	/** Whether to receive a token. */
	receiveAToken?: boolean;
	/** The receiver address. */
	receiverAddress?: string;
	/**
	 * The referral code.
	 * @format double
	 */
	referralCode?: number;
	/** The role of the user. */
	role?: string;
	/** The s parameter for the signature */
	s?: string;
	/** Indicates if the transaction should be simulated */
	simulate?: boolean;
	/**
	 * The slippage limit percentage.
	 * @format double
	 */
	slippageLimitPercent?: number;
	/** The split weights */
	splitWeights?: string[];
	/** The recipient address */
	to?: string;
	/** The token ID */
	tokenId?: string;
	/** The token ID. */
	token_id?: string;
	/** The token IDs. */
	token_ids?: string;
	/**
	 * The type of transaction.
	 * @format double
	 */
	type?: number;
	/** Whether to use as collateral. */
	useAsCollateral?: boolean;
	/** The user involved in the transaction. */
	user?: string;
	/** The v parameter for the signature */
	v?: string;
	/** The value to be sent with the transaction */
	value?: string;
}

/** Represents a transaction for a Lynex NFT. */
export interface LynexNFTTransaction {
	/** The chain ID of the blockchain network. */
	chainId: string;
	/** The data payload of the transaction. */
	data: string;
	/** The sender address of the transaction. */
	from: string;
	/** The gas limit for the transaction (optional). */
	gasLimit?: string;
	/** The gas price for the transaction (optional). */
	gasPrice?: string;
	/** The maximum fee per gas for the transaction (optional). */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas for the transaction (optional). */
	maxPriorityFeePerGas?: string;
	/**
	 * The nonce of the transaction.
	 * @format double
	 */
	nonce: number;
	/** The recipient address of the transaction. */
	to: string;
	/**
	 * The type of the transaction (optional).
	 * @format double
	 */
	type?: number;
	/** The value to be transferred in the transaction. */
	value: string;
}

export interface LynexRouterAPIResponseAmountOutStringStableBoolean {
	data?: {
		amountOut: string;
		stable: boolean;
	};
	message: string;
	success: boolean;
}

export interface LynexRouterAPIResponseLynexRouterExecuteFunctionResult {
	data?: LynexRouterExecuteFunctionResult;
	message: string;
	success: boolean;
}

export interface LynexRouterAPIResponseString {
	data?: string;
	message: string;
	success: boolean;
}

export interface LynexRouterAPIResponseStringArray {
	data?: string[];
	message: string;
	success: boolean;
}

export interface LynexRouterExecuteFunctionResult {
	/** Optional response from broadcasting the raw transaction. */
	broadcasted?: BroadCastRawTransactionResponse;
	/** Optional additional transaction data. */
	data?: Transaction;
	/** The name of the executed function. */
	function: string;
	/** Optional message providing additional information about the execution. */
	message?: string;
	/** The parameters passed to the executed function. */
	params: any[];
	/** Optional response from simulating asset changes. */
	simulation?: SimulateAssetChangesResponse;
	/** Optional flag indicating whether the execution was successful. */
	success?: boolean;
	/** The transaction details. */
	transaction: LynexRouterTransaction;
	/** Optional user operation identifier. */
	user_op?: string;
}

/** Represents the input body for Lynex Router functions. */
export interface LynexRouterInputBody {
	/** Indicates if the transaction is from an externally owned account. */
	EOA?: boolean;
	/** The access list for the transaction. */
	accessList?: AccessTuple[];
	/** The account involved in the transaction. */
	account?: string;
	/** Indicates if the nonce should always be incremented. */
	alwaysIncrementNonce?: boolean;
	/** The amount to be transferred. */
	amount?: string;
	/** The desired amount of token A. */
	amountADesired: string;
	/** The minimum amount of token A. */
	amountAMin: string;
	/** The desired amount of token B. */
	amountBDesired: string;
	/** The minimum amount of token B. */
	amountBMin: string;
	/** The minimum amount of ETH. */
	amountETHMin: string;
	/** The input amount. */
	amountIn: string;
	/** The minimum output amount. */
	amountOutMin: string;
	/** The desired amount of the token. */
	amountTokenDesired: string;
	/** The minimum amount of the token. */
	amountTokenMin: string;
	/** The amounts involved in the transaction. */
	amounts?: string[];
	/** Whether the transaction is approved. */
	approved?: boolean;
	/** The asset involved in the transaction. */
	asset?: string;
	/** The assets involved in the transaction. */
	assets?: string[];
	/** The gas for blob transactions. */
	blobGas?: string;
	/** The gas fee cap for blob transactions. */
	blobGasFeeCap?: string;
	/** The hashes for blob transactions. */
	blobHashes?: string[];
	/** The borrow amount. */
	borrowAmount?: string | number;
	/** Indicates if the transaction should be broadcasted. */
	broadcast?: boolean;
	/** The chain ID. */
	chain_id?: string;
	/** The collateral asset. */
	collateralAsset?: string;
	/** The contract address. */
	contract_address?: string;
	/** The data to be included in the transaction. */
	data?: string;
	/** The deadline for the transaction. */
	deadline: string;
	/** The debt asset. */
	debtAsset?: string;
	/** The debt to cover. */
	debtToCover?: string;
	/** Indicates if the transaction is a dry run. */
	dryrun?: boolean;
	/** The encoding type. */
	encoding?: string;
	/** The gas limit for the transaction. */
	gas?: string;
	/** The gas limit for the transaction. */
	gasLimit?: string;
	/** The gas price for the transaction. */
	gasPrice?: string;
	/** The initial deposit. */
	initialDeposit?: string | number;
	/** The initiator of the transaction. */
	initiator?: string;
	/** The input data. */
	input?: string;
	/** The input tokens. */
	inputTokens?: TokenAmount[];
	/**
	 * The interest rate mode.
	 * @format double
	 */
	interestRateMode?: number;
	/** The maximum fee per gas. */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas. */
	maxPriorityFeePerGas?: string;
	/** The minimum health factor. */
	minHealthFactor?: string | number;
	/** The modes of the transaction. */
	modes?: number[];
	/** The nonce for the transaction. */
	nonce?: string;
	/** The address on behalf of which the transaction is made. */
	onBehalfOf?: string;
	/** The output tokens. */
	outputTokens?: TokenProportion[];
	/** Additional parameters. */
	params?: string;
	/** The premiums. */
	premiums?: string[] | number[];
	/**
	 * The rate mode.
	 * @format double
	 */
	rateMode?: number;
	/** Whether to receive a token. */
	receiveAToken?: boolean;
	/** The receiver address. */
	receiverAddress?: string;
	/**
	 * The referral code.
	 * @format double
	 */
	referralCode?: number;
	/** The role of the user. */
	role?: string;
	/** The routes for the transaction. */
	routes: any[];
	/** Indicates if the transaction should be simulated. */
	simulate?: boolean;
	/**
	 * The slippage limit percentage.
	 * @format double
	 */
	slippageLimitPercent?: number;
	/** Indicates if the liquidity is stable. */
	stable: string;
	/** The recipient address. */
	to?: string;
	/** The address of the token. */
	token: string;
	/** The address of token A. */
	tokenA: string;
	/** The address of token B. */
	tokenB: string;
	/** The token ID. */
	token_id?: string;
	/** The token IDs. */
	token_ids?: string;
	/**
	 * The type of transaction.
	 * @format double
	 */
	type?: number;
	/** Whether to use as collateral. */
	useAsCollateral?: boolean;
	/** The user involved in the transaction. */
	user?: string;
	/** The value to be transferred. */
	value?: string;
}

/** Represents a transaction in the Lynex Router. */
export interface LynexRouterTransaction {
	/** The chain ID of the blockchain network. */
	chainId: string;
	/** The data payload of the transaction. */
	data: string;
	/** The sender address of the transaction. */
	from: string;
	/** The gas limit for the transaction (optional). */
	gasLimit?: string;
	/** The gas price for the transaction (optional). */
	gasPrice?: string;
	/** The maximum fee per gas unit for the transaction (optional). */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas unit for the transaction (optional). */
	maxPriorityFeePerGas?: string;
	/**
	 * The nonce of the transaction.
	 * @format double
	 */
	nonce: number;
	/** The recipient address of the transaction. */
	to: string;
	/**
	 * The type of the transaction (optional).
	 * @format double
	 */
	type?: number;
	/** The value to be transferred in the transaction. */
	value: string;
}

export interface LynexVoterAPIResponseBoolean {
	data?: boolean;
	message: string;
	success: boolean;
}

export interface LynexVoterAPIResponseLynexVoterExecuteFunctionResult {
	data?: LynexVoterExecuteFunctionResult;
	message: string;
	success: boolean;
}

export interface LynexVoterAPIResponseString {
	data?: string;
	message: string;
	success: boolean;
}

export interface LynexVoterExecuteFunctionResult {
	/** Optional response from broadcasting the raw transaction. */
	broadcasted?: BroadCastRawTransactionResponse;
	/** Optional transaction data. */
	data?: Transaction;
	/** The name of the executed function. */
	function: string;
	/** Optional message providing additional information about the execution result. */
	message?: string;
	/** The parameters passed to the executed function. */
	params: any[];
	/** Optional response from simulating asset changes. */
	simulation?: SimulateAssetChangesResponse;
	/** Optional flag indicating if the function execution was successful. */
	success?: boolean;
	/** The transaction details of the executed function. */
	transaction: LynexVoterTransaction;
	/** Optional user operation identifier. */
	user_op?: string;
}

export interface LynexVoterInputBody {
	/** Flag indicating if the operation is performed by an Externally Owned Account. */
	EOA?: boolean;
	/** The access list for the transaction. */
	accessList?: AccessTuple[];
	/** The account involved in the transaction. */
	account?: string;
	/** Flag indicating if the nonce should always be incremented. */
	alwaysIncrementNonce?: boolean;
	/** The amount involved in the transaction. */
	amount?: string;
	/** The amounts involved in the transaction. */
	amounts?: string[];
	/** Whether the transaction is approved. */
	approved?: boolean;
	/** The asset involved in the transaction. */
	asset?: string;
	/** The assets involved in the transaction. */
	assets?: string[];
	/** The gas for blob transactions. */
	blobGas?: string;
	/** The gas fee cap for blob transactions. */
	blobGasFeeCap?: string;
	/** The hashes for blob transactions. */
	blobHashes?: string[];
	/** The borrow amount. */
	borrowAmount?: string | number;
	/** The bribes involved in the operation. */
	bribes?: string[];
	/** Flag indicating if the transaction should be broadcasted. */
	broadcast?: boolean;
	/** The chain ID. */
	chain_id?: string;
	/** The collateral asset. */
	collateralAsset?: string;
	/** The contract address involved in the operation. */
	contract_address?: string;
	/** The data payload of the transaction. */
	data?: string;
	/** The debt asset. */
	debtAsset?: string;
	/** The debt to cover. */
	debtToCover?: string;
	/** Flag indicating if the operation is a dry run. */
	dryrun?: boolean;
	/** The encoding type. */
	encoding?: string;
	/** The fees involved in the operation. */
	fees?: string[];
	/** The gas limit for the transaction. */
	gas?: string;
	/** The gas limit for the transaction. */
	gasLimit?: string;
	/** The gas price for the transaction. */
	gasPrice?: string;
	/** The gauge involved in the operation. */
	gauge?: string;
	/** The type of the gauge. */
	gauge_type?: string;
	/** The gauges involved in the operation. */
	gauges?: string[];
	/** The initial deposit. */
	initialDeposit?: string | number;
	/** The initiator of the transaction. */
	initiator?: string;
	/** The input data. */
	input?: string;
	/** The input tokens. */
	inputTokens?: TokenAmount[];
	/**
	 * The interest rate mode.
	 * @format double
	 */
	interestRateMode?: number;
	/** The maximum fee per gas. */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas. */
	maxPriorityFeePerGas?: string;
	/** The minimum health factor. */
	minHealthFactor?: string | number;
	/** The modes of the transaction. */
	modes?: number[];
	/** The nonce of the transaction. */
	nonce?: string;
	/** The address on behalf of which the transaction is made. */
	onBehalfOf?: string;
	/** The output tokens. */
	outputTokens?: TokenProportion[];
	/** Additional parameters. */
	params?: string;
	/** The pool involved in the operation. */
	pool?: string;
	/** The pool votes for the transaction. */
	pool_vote?: string[];
	/** The premiums. */
	premiums?: string[] | number[];
	/**
	 * The rate mode.
	 * @format double
	 */
	rateMode?: number;
	/** Whether to receive a token. */
	receiveAToken?: boolean;
	/** The receiver address. */
	receiverAddress?: string;
	/**
	 * The referral code.
	 * @format double
	 */
	referralCode?: number;
	/** The role of the user. */
	role?: string;
	/** Flag indicating if the operation should be simulated. */
	simulate?: boolean;
	/**
	 * The slippage limit percentage.
	 * @format double
	 */
	slippageLimitPercent?: number;
	/** The recipient address of the transaction. */
	to?: string;
	/** The token ID. */
	token_id?: string;
	/** The token IDs. */
	token_ids?: string;
	/** The tokens involved in the operation. */
	tokens?: string[][];
	/**
	 * The type of transaction.
	 * @format double
	 */
	type?: number;
	/** Whether to use as collateral. */
	useAsCollateral?: boolean;
	/** The user involved in the transaction. */
	user?: string;
	/** The value being transferred in the transaction. */
	value?: string;
	/** The weights for the pool votes. */
	weights?: string[];
}

/** Represents a transaction for the Lynex Voter. */
export interface LynexVoterTransaction {
	/** The chain ID of the network where the transaction is sent. */
	chainId: string;
	/** The data to be sent with the transaction. */
	data: string;
	/** The sender address of the transaction. */
	from: string;
	/** (Optional) The gas limit for the transaction. */
	gasLimit?: string;
	/** (Optional) The gas price for the transaction, in wei. */
	gasPrice?: string;
	/** (Optional) The maximum fee per gas for the transaction, in wei. */
	maxFeePerGas?: string;
	/** (Optional) The maximum priority fee per gas for the transaction, in wei. */
	maxPriorityFeePerGas?: string;
	/**
	 * The nonce for the transaction.
	 * @format double
	 */
	nonce: number;
	/** The recipient address of the transaction. */
	to: string;
	/**
	 * (Optional) The type of the transaction.
	 * @format double
	 */
	type?: number;
	/** The value to be sent with the transaction, in wei. */
	value: string;
}

export type MakeFunTokenGetClFactoryData = MakeFunTokenHelperAPIResponseString;

export interface MakeFunTokenGetClFactoryParams {
	account: string;
	address: string;
	chainId: string;
}

export type MakeFunTokenGetMaxTickData = MakeFunTokenHelperAPIResponseNumber;

export interface MakeFunTokenGetMaxTickParams {
	account: string;
	address: string;
	chainId: string;
}

export type MakeFunTokenGetMinTickData = MakeFunTokenHelperAPIResponseNumber;

export interface MakeFunTokenGetMinTickParams {
	account: string;
	address: string;
	chainId: string;
}

export interface MakeFunTokenHelperAPIResponseMakeFunTokenHelperExecuteFunctionResult {
	data?: MakeFunTokenHelperExecuteFunctionResult;
	message: string;
	success: boolean;
}

export interface MakeFunTokenHelperAPIResponseNumber {
	/** @format double */
	data?: number;
	message: string;
	success: boolean;
}

export interface MakeFunTokenHelperAPIResponseString {
	data?: string;
	message: string;
	success: boolean;
}

export interface MakeFunTokenHelperExecuteFunctionResult {
	/** Represents the response from broadcasting a raw transaction. */
	broadcasted?: BroadCastRawTransactionResponse;
	/** Represents a transaction with various optional properties. */
	data?: Transaction;
	description?: any;
	function: string;
	image?: any;
	message?: string;
	params: any[];
	/** Response object for the {@link TransactNamespace.simulateAssetChanges } method. */
	simulation?: SimulateAssetChangesResponse;
	success?: boolean;
	transaction: MakeFunTokenHelperTransaction;
	user_op?: string;
}

/** Interface representing the input body for the MakeFunTokenHelper function. */
export interface MakeFunTokenHelperInputBody {
	base64Image?: string;
	/**
	 * Indicates if the transaction is from an Externally Owned Account.
	 * @default "false"
	 */
	EOA?: boolean;
	/**
	 * Additional parameters for the transaction.
	 * @default """"
	 */
	_params?: string;
	/** The access list for the transaction. */
	accessList?: AccessTuple[];
	/** The account involved in the transaction. */
	account?: string;
	/**
	 * Indicates if the nonce should always be incremented.
	 * @default "false"
	 */
	alwaysIncrementNonce?: boolean;
	/**
	 * The amount of tokens to be sent.
	 * @default """"
	 */
	amount?: string;
	/** The amounts involved in the transaction. */
	amounts?: string[];
	/** Whether the transaction is approved. */
	approved?: boolean;
	/** The asset involved in the transaction. */
	asset?: string;
	/** The assets involved in the transaction. */
	assets?: string[];
	/** The gas for blob transactions. */
	blobGas?: string;
	/** The gas fee cap for blob transactions. */
	blobGasFeeCap?: string;
	/** The hashes for blob transactions. */
	blobHashes?: string[];
	/** The borrow amount. */
	borrowAmount?: string | number;
	/**
	 *
	 * Indicates if the transaction should be broadcasted.
	 * @default "false"
	 */
	broadcast?: boolean;
	/** The chain ID. */
	chain_id?: string;
	/** The collateral asset. */
	collateralAsset?: string;
	/**
	 * The address of the contract.
	 * @default """"
	 */
	contract_address?: string;
	/**
	 * Additional data to be sent with the transaction.
	 * @default """"
	 */
	data?: string;
	/** The debt asset. */
	debtAsset?: string;
	/** The debt to cover. */
	debtToCover?: string;
	description: string;
	/**
	 * Indicates if the transaction should be a dry run.
	 * @default "false"
	 */
	dryrun?: boolean;
	/** The encoding type. */
	encoding?: string;
	feeBPS?: number[];
	/**
	 * The recipients of the fees.
	 * @default "[]"
	 */
	feeRecipients?: string[];
	/**
	 * The gas limit for the transaction.
	 * @default """"
	 */
	gas?: string;
	/**
	 * The gas limit for the transaction.
	 * @default """"
	 */
	gasLimit?: string;
	/**
	 * The gas price for the transaction.
	 * @default """"
	 */
	gasPrice?: string;
	/** The initial deposit. */
	initialDeposit?: string | number;
	/** The initiator of the transaction. */
	initiator?: string;
	/** The input data. */
	input?: string;
	/** The input tokens. */
	inputTokens?: TokenAmount[];
	/**
	 * The interest rate mode.
	 * @format double
	 */
	interestRateMode?: number;
	/** The maximum fee per gas. */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas. */
	maxPriorityFeePerGas?: string;
	maxTick?: any;
	maxTotalSupply?: any;
	/** The minimum health factor. */
	minHealthFactor?: string | number;
	/** @format double */
	minTick?: number;
	minTotalSupply?: any;
	/** The modes of the transaction. */
	modes?: number[];
	/**
	 * The name of the token.
	 * @default """"
	 */
	name?: string;
	/**
	 * The nonce to be used for the transaction.
	 * @default """"
	 */
	nonce?: string;
	/** The address on behalf of which the transaction is made. */
	onBehalfOf?: string;
	/** The output tokens. */
	outputTokens?: TokenProportion[];
	/** Additional parameters. */
	params?: string;
	/** The premiums. */
	premiums?: string[] | number[];
	/**
	 * The rate mode.
	 * @format double
	 */
	rateMode?: number;
	/** Whether to receive a token. */
	receiveAToken?: boolean;
	/** The receiver address. */
	receiverAddress?: string;
	/**
	 * The referral code.
	 * @format double
	 */
	referralCode?: number;
	/** The role of the user. */
	role?: string;
	/**
	 * The salt to be used for the transaction.
	 * @default """"
	 */
	salt?: string;
	/**
	 * Indicates if the transaction should be simulated.
	 * @default "false"
	 */
	simulate?: boolean;
	/**
	 * The slippage limit percentage.
	 * @format double
	 */
	slippageLimitPercent?: number;
	/**
	 * The starting tick for the transaction.
	 * @default """"
	 */
	startingTick?: string;
	/**
	 * The symbol of the token.
	 * @default """"
	 */
	symbol?: string;
	/** @format double */
	tick?: number;
	/**
	 * The address to which the tokens will be sent.
	 * @default """"
	 */
	to?: string;
	/** The token ID. */
	token_id?: string;
	/** The token IDs. */
	token_ids?: string;
	/**
	 *
	 * The total supply of the token.
	 * @default """"
	 */
	totalSupply?: string;
	/**
	 * The type of transaction.
	 * @format double
	 */
	type?: number;
	/** Whether to use as collateral. */
	useAsCollateral?: boolean;
	/** The user involved in the transaction. */
	user?: string;
	/**
	 * The value associated with the transaction.
	 * @default """"
	 */
	value?: string;
}

export interface MakeFunTokenHelperTransaction {
	chainId: string;
	data: string;
	from: string;
	gasLimit?: string;
	gasPrice?: string;
	maxFeePerGas?: string;
	maxPriorityFeePerGas?: string;
	/** @format double */
	nonce: number;
	to: string;
	/** @format double */
	type?: number;
	value: string;
}

export type MakeFunTokenMakeTokenData =
	MakeFunTokenHelperAPIResponseMakeFunTokenHelperExecuteFunctionResult;

export type MakeFunTokenSetSupplyLimitsData =
	MakeFunTokenHelperAPIResponseMakeFunTokenHelperExecuteFunctionResult;

export type MakeFunTokenSetTickLimitsData =
	MakeFunTokenHelperAPIResponseMakeFunTokenHelperExecuteFunctionResult;

export interface MakerOrder {
	asset_id: string;
	fee_rate_bps: string;
	maker_address: string;
	matched_amount: string;
	order_id: string;
	outcome: string;
	owner: string;
	price: string;
}

export type MarkNotificationAsReadData = MultiCallAPIResponse;

export interface MarketPrice {
	/** @format double */
	p: number;
	/** @format double */
	t: number;
}

export interface MarketTradeEvent {
	event_type: string;
	fee_rate_bps: string;
	market: {
		asset_id: string;
		condition_id: string;
		icon: string;
		question: string;
		slug: string;
	};
	outcome: string;
	/** @format double */
	outcome_index: number;
	price: string;
	side: Side;
	size: string;
	timestamp: string;
	transaction_hash: string;
	user: {
		address: string;
		optimized_profile_picture: string;
		profile_picture: string;
		pseudonym: string;
		username: string;
	};
}

export type MergeData = LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type MergeOutput = VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export type MergeResult = RamsesNFTAPIResponseRamsesNFTExecuteFunctionResult;

export interface Message {
	/** An array of cryptocurrency objects. */
	crypto: CryptoCurrency[];
	/** An array of fiat currency objects. */
	fiat: FiatCurrency[];
}

export type MintData = UniswapV3NFTAPIResponseUniswapV3ExecuteFunctionResult;

export interface MultiCallAPIResponse {
	data?: any;
	message: string;
	success: boolean;
}

export interface MultiCallAPIResponseAny {
	data?: any;
	message: string;
	success: boolean;
}

export interface MultiCallAPIResponseAnyArray {
	data?: any[];
	message: string;
	success: boolean;
}

export interface MultiCallAPIResponseFlow {
	data?: Flow;
	message: string;
	success: boolean;
}

export interface MultiCallAPIResponseFlowArray {
	data?: Flow[];
	message: string;
	success: boolean;
}

export interface MultiCallAPIResponseJobs {
	data?: Jobs;
	message: string;
	success: boolean;
}

export interface MultiCallAPIResponseJobsArray {
	data?: Jobs[];
	message: string;
	success: boolean;
}

export interface MultiCallAPIResponseString {
	data?: string;
	message: string;
	success: boolean;
}

export interface MultiCallInputBody {
	calls: {
		chainId: string;
		from: string;
		function: string;
		params: any;
		wrapper: string;
	}[];
	/** The chain ID. */
	chain_id?: string;
	flow?: {
		edges: FlowEdge[];
		nodes: FlowNode[];
	};
	/** Construct a type with a set of properties K of type T */
	globalVariables?: RecordStringAny;
}

export type MultiSignSolanaTransactionData = SolanaAPIResponse;

export type Multicall2Data = UniswapV3APIResponseUniswapV3ExecuteFunctionResult;

export type MulticallData =
	UniswapV3NFTAPIResponseUniswapV3ExecuteFunctionResult;

/** Interface representing the response from the NFTs API. */
export interface NFTsAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The NFT data. */
	data?: any[];
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

export type NameData = UniswapV3NFTAPIResponseString;

export interface NameParams {
	address: string;
	chainId: string;
}

export interface NarrativeTrend {
	relatedTopics: string[];
	/** @format double */
	strength: number;
	topic: string;
	/** @format double */
	velocity: number;
}

export interface NarrativeTrendsAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	data?: NarrativeTrend[];
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

/**
 * Represents the response from the API that includes a nonce.
 * Extends the BaseAPIResponse to include additional data specific to nonce responses.
 */
export interface NonceAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The data associated with the nonce response. */
	data?: NonceResponse;
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

export interface NonceResponse {
	/**
	 * The nonce of the account.
	 * @format double
	 */
	nonce: number;
}

export interface Notification {
	owner: string;
	payload: any;
	/** @format double */
	type: number;
}

export type NotifyRewardAmountData =
	LynexVoterAPIResponseLynexVoterExecuteFunctionResult;

export type NotifyRewardAmountOutput =
	VeTheNftVoterAPIResponseVeTheNftVoterExecuteFunctionResult;

export type NotifyRewardAmountResult =
	RamsesVoterAPIResponseRamsesVoterExecuteFunctionResult;

/** Represents the structure of a response from the Odos API. */
export interface OdosAPIResponseOdosExecuteFunctionResult {
	/** The data returned by the API, if any. */
	data?: OdosExecuteFunctionResult;
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

export type OdosAssembleTransactionData =
	OdosAPIResponseOdosExecuteFunctionResult;

/** Represents the result of executing an Odos function. */
export interface OdosExecuteFunctionResult {
	approve?: any;
	/** The broadcasted transaction details. */
	broadcasted?: BroadCastRawTransactionResponse;
	/** The data returned by the executed function. */
	data?: any;
	/** The name of the executed function. */
	function: string;
	/** A message providing additional information about the execution. */
	message?: string;
	/** The Odos data. */
	odos?: any;
	/** The parameters of the executed function. */
	params: any[];
	/** Indicates if the execution was successful. */
	success?: boolean;
	/** The transaction details. */
	transaction?: OdosTransaction;
	/** Indicates if the execution was successful. */
	user_op?: string;
}

export type OdosGetContractInfoData = OdosAPIResponseOdosExecuteFunctionResult;

export interface OdosGetContractInfoParams {
	/**
	 * - The chain ID for which the contract information is requested.
	 * @format double
	 */
	chainId: number;
	/** - The version of the API to use, expected to be 'v2'. */
	version: VersionEnum;
}

/** - The version of the API to use, expected to be 'v2'. */
export enum OdosGetContractInfoParams1VersionEnum {
	V2 = "v2",
}

export type OdosGetCurrentBlockData = OdosAPIResponseOdosExecuteFunctionResult;

export interface OdosGetCurrentBlockParams {
	/**
	 * - The ID of the blockchain to query.
	 * @format double
	 */
	chainId: number;
}

export type OdosGetExecutorAddressData =
	OdosAPIResponseOdosExecuteFunctionResult;

export interface OdosGetExecutorAddressParams {
	/**
	 * - The chain ID for which the executor address is requested.
	 * @format double
	 */
	chainId: number;
	/** - The API version, expected to be 'v2'. */
	version: VersionEnum2;
}

/** - The API version, expected to be 'v2'. */
export enum OdosGetExecutorAddressParams1VersionEnum {
	V2 = "v2",
}

export type OdosGetLiquiditySourcesData =
	OdosAPIResponseOdosExecuteFunctionResult;

export interface OdosGetLiquiditySourcesParams {
	/**
	 * - The ID of the blockchain to query for liquidity sources.
	 * @format double
	 */
	chainId: number;
}

export type OdosGetQuoteData = OdosAPIResponseOdosExecuteFunctionResult;

export type OdosGetRouterAddressData = OdosAPIResponseOdosExecuteFunctionResult;

export interface OdosGetRouterAddressParams {
	/**
	 * - The ID of the blockchain network.
	 * @format double
	 */
	chainId: number;
	/** - The version of the API to use, default is 'v2'. */
	version: VersionEnum1;
}

/** - The version of the API to use, default is 'v2'. */
export enum OdosGetRouterAddressParams1VersionEnum {
	V2 = "v2",
}

export type OdosGetSupportedChainsData =
	OdosAPIResponseOdosExecuteFunctionResult;

export type OdosGetSupportedTokensData =
	OdosAPIResponseOdosExecuteFunctionResult;

export interface OdosGetSupportedTokensParams {
	/**
	 * - The ID of the blockchain network to query.
	 * @format double
	 */
	chainId: number;
}

/** Represents the input body for an Odos swap operation. */
export interface OdosSwapInputBody {
	/** Whether the transaction is from an externally owned account. */
	EOA?: boolean;
	/** The access list for the transaction. */
	accessList?: AccessTuple[];
	/** The account involved in the transaction. */
	account?: string;
	/** Whether to always increment the nonce. */
	alwaysIncrementNonce?: boolean;
	/** The amount involved in the transaction. */
	amount?: string;
	/** The amounts involved in the transaction. */
	amounts?: string[];
	/** Whether the transaction is approved. */
	approved?: boolean;
	/** The asset involved in the transaction. */
	asset?: string;
	/** The assets involved in the transaction. */
	assets?: string[];
	/** The gas for blob transactions. */
	blobGas?: string;
	/** The gas fee cap for blob transactions. */
	blobGasFeeCap?: string;
	/** The hashes for blob transactions. */
	blobHashes?: string[];
	/** The borrow amount. */
	borrowAmount?: string | number;
	/** Whether to broadcast the transaction. */
	broadcast?: boolean;
	/** The chain ID. */
	chain_id?: string;
	/** The collateral asset. */
	collateralAsset?: string;
	/**
	 * Flag to enable compact mode.
	 * Optional.
	 */
	compact?: boolean;
	/** The contract address. */
	contract_address?: string;
	/** The data to be sent. */
	data?: string;
	/** The debt asset. */
	debtAsset?: string;
	/** The debt to cover. */
	debtToCover?: string;
	/**
	 * Flag to disable RFQs (Request for Quotes).
	 * Optional.
	 */
	disableRFQs?: boolean;
	/** Whether to perform a dry run. */
	dryrun?: boolean;
	/** The encoding type. */
	encoding?: string;
	/** The gas for the transaction. */
	gas?: string;
	/** The gas limit for the transaction. */
	gasLimit?: string;
	/** The gas price for the transaction. */
	gasPrice?: string;
	/** The initial deposit. */
	initialDeposit?: string | number;
	/** The initiator of the transaction. */
	initiator?: string;
	/** The input data. */
	input?: string;
	/** An array of input tokens with their respective amounts. */
	inputTokens: TokenAmount[];
	/**
	 * The interest rate mode.
	 * @format double
	 */
	interestRateMode?: number;
	/**
	 * Flag to indicate if the swap should be performed with like assets.
	 * Optional.
	 */
	likeAsset?: boolean;
	/** The maximum fee per gas. */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas. */
	maxPriorityFeePerGas?: string;
	/** The minimum health factor. */
	minHealthFactor?: string | number;
	/** The modes of the transaction. */
	modes?: number[];
	/** The nonce for the transaction. */
	nonce?: string;
	/** The address on behalf of which the transaction is made. */
	onBehalfOf?: string;
	/** An array of output tokens with their respective proportions. */
	outputTokens: TokenProportion[];
	/** Additional parameters. */
	params?: string;
	/**
	 * Flag to enable path visualization.
	 * Optional.
	 */
	pathViz?: boolean;
	/**
	 * Flag to enable path visualization image generation.
	 * Optional.
	 */
	pathVizImage?: boolean;
	/**
	 * Configuration for path visualization image generation.
	 * Optional.
	 */
	pathVizImageConfig?: PathVizImageConfig;
	/**
	 * A list of pools to be excluded from the swap.
	 * Optional.
	 */
	poolBlacklist?: string[];
	/** The premiums. */
	premiums?: string[] | number[];
	/**
	 * The rate mode.
	 * @format double
	 */
	rateMode?: number;
	/** Whether to receive a token. */
	receiveAToken?: boolean;
	/** The receiver address. */
	receiverAddress?: string;
	/**
	 * Referral code for the swap.
	 * Optional.
	 * @format double
	 */
	referralCode?: number;
	/** The role of the user. */
	role?: string;
	/**
	 * Flag to enable simple mode.
	 * Optional.
	 */
	simple?: boolean;
	/** Whether to simulate the transaction. */
	simulate?: boolean;
	/**
	 * The maximum allowable slippage percentage for the swap.
	 * Optional.
	 * @format double
	 */
	slippageLimitPercent?: number;
	/**
	 * A list of sources to be excluded from the swap.
	 * Optional.
	 */
	sourceBlacklist?: string[];
	/**
	 * A list of sources to be included in the swap.
	 * Optional.
	 */
	sourceWhitelist?: string[];
	/** The recipient address. */
	to?: string;
	/** The token ID. */
	token_id?: string;
	/** The token IDs. */
	token_ids?: string;
	/**
	 * The type of transaction.
	 * @format double
	 */
	type?: number;
	/** Whether to use as collateral. */
	useAsCollateral?: boolean;
	/** The user involved in the transaction. */
	user?: string;
	/** The value to be sent. */
	value?: string;
}

export type OdosSwapTokensData = OdosAPIResponseOdosExecuteFunctionResult;

/** Represents a transaction in the Odos system. */
export interface OdosTransaction {
	/** The chain ID of the blockchain network. */
	chainId: string;
	/** The data payload of the transaction. */
	data: string;
	/** The sender address of the transaction. */
	from: string;
	/**
	 * The gas limit for the transaction.
	 * Optional.
	 */
	gasLimit?: string;
	/**
	 * The gas price for the transaction, in wei.
	 * Optional.
	 */
	gasPrice?: string;
	/**
	 * The maximum fee per gas for EIP-1559 transactions, in wei.
	 * Optional.
	 */
	maxFeePerGas?: string;
	/**
	 * The maximum priority fee per gas for EIP-1559 transactions, in wei.
	 * Optional.
	 */
	maxPriorityFeePerGas?: string;
	/**
	 * The nonce of the transaction.
	 * @format double
	 */
	nonce: number;
	/** The recipient address of the transaction. */
	to: string;
	/**
	 * The type of the transaction.
	 * Optional.
	 * @format double
	 */
	type?: number;
	/** The value being transferred in the transaction, in wei. */
	value: string;
}

/** Construct a type with the properties of T except for those in type K. */
export type OmitComponentDefinitionId = PickComponentDefinitionExcludeKeysId;

/** Construct a type with the properties of T except for those in type K. */
export type OmitJupiterInputBodyAccountName =
	PickJupiterInputBodyExcludeKeysAccountName;

export type OnRamperCheckoutData = any;

export type OnRamperGetQuotesBuyData = Quotes;

export interface OnRamperGetQuotesBuyParams {
	/** @format double */
	amount: number;
	/** @default "" */
	clientName?: string;
	/** @default "" */
	country?: string;
	crypto: string;
	fiat: string;
	/** @default "creditcard" */
	paymentMethod?: string;
	/** @default "" */
	uuid?: string;
}

export type OnRamperGetQuotesSellData = SellQuotes;

export interface OnRamperGetQuotesSellParams {
	/** @format double */
	amount: number;
	/** @default "" */
	clientName?: string;
	/** @default "" */
	country?: string;
	crypto: string;
	fiat: string;
	/** @default "creditcard" */
	paymentMethod?: string;
	/** @default "" */
	uuid?: string;
}

export type OnRamperGetSupportedAssetsData = SupportedAssetResponse;

export interface OnRamperGetSupportedAssetsParams {
	country: string;
	source: string;
}

export type OnRamperGetSupportedCurrenciesData = SupportedCurrenciesResponse;

export interface OnRamperGetSupportedCurrenciesParams {
	type: string;
}

export type OnRamperGetSupportedDefaultsAllData = SupportedDefaultResponse;

export interface OnRamperGetSupportedDefaultsAllParams {
	country: string;
	type: string;
}

export type OnRamperGetSupportedOnRampsAllData = GetSupportedOnRampsResponse;

export type OnRamperGetSupportedPaymentTypesData =
	SupportedPaymentTypesCurrencyResponse;

export type OnRamperGetSupportedPaymentTypesFiatData =
	SupportedPaymentTypesCurrencyResponse;

export interface OnRamperGetSupportedPaymentTypesFiatParams {
	country: string;
	fiat: string;
}

export interface OnRamperGetSupportedPaymentTypesParams {
	country: string;
	fiat: string;
	type: string;
}

export interface OpenOrder {
	asset_id: string;
	associate_trades: string[];
	/** @format double */
	created_at: number;
	expiration: string;
	id: string;
	maker_address: string;
	market: string;
	order_type: string;
	original_size: string;
	outcome: string;
	owner: string;
	price: string;
	side: string;
	size_matched: string;
	status: string;
}

export type OpenOrdersResponse = OpenOrder[];

export interface OpenSeaAPIResponse {
	data?: any;
	message: string;
	success: boolean;
}

/**
 * Represents the input body for an OpenSea collection.
 * Extends the `OpenSeaInputBody` interface.
 */
export interface OpenSeaCollectionInputBody {
	/**
	 * The amount of the asset.
	 * @format double
	 */
	amount: number;
	/** Indicates if the transaction should be broadcasted. */
	broadcast?: boolean;
	/** The chain ID of the blockchain network. */
	chainId?: string;
	/** The slug identifier for the collection. */
	collectionSlug: string;
	/** The data to be sent in the transaction. */
	data?: string;
	/** Indicates if the transaction is a dry run. */
	dryrun?: boolean;
	/** The gas limit for the transaction. */
	gas?: string;
	/** The gas price for the transaction. */
	gasPrice?: string;
	/** The nonce of the transaction. */
	nonce?: string;
	/** The optional address of the payment token. */
	paymentTokenAddress?: string;
	/**
	 * The quantity of the asset.
	 * @format double
	 */
	quantity: number;
	/** The recipient address. */
	to?: string;
	/** The value to be sent in the transaction. */
	value?: string;
}

/** Represents the input body for an OpenSea NFT transaction. */
export interface OpenSeaNFTInputBody {
	/** The asset involved in the transaction. */
	asset: Asset;
	/** Indicates if the transaction should be broadcasted. */
	broadcast?: boolean;
	/** The chain ID of the blockchain network. */
	chainId?: string;
	/** The data to be sent in the transaction. */
	data?: string;
	/** Indicates if the transaction is a dry run. */
	dryrun?: boolean;
	/**
	 * The expiration time of the offer (optional).
	 * @format double
	 */
	expirationTime?: number;
	/** The gas limit for the transaction. */
	gas?: string;
	/** The gas price for the transaction. */
	gasPrice?: string;
	/** The nonce of the transaction. */
	nonce?: string;
	/**
	 * The starting amount for the offer.
	 * @format double
	 */
	startAmount: number;
	/** The recipient address. */
	to?: string;
	/** The value to be sent in the transaction. */
	value?: string;
}

/** - The type of option (call or put). */
export enum OptionTypeEnum {
	Call = "call",
	Put = "put",
}

/** - Optional parameter to filter chains by type ('EVM' or 'SOL'). */
export enum OptionalChainTypesEnum {
	EVM = "EVM",
	SOL = "SOL",
}

/** Represents the response of the `getOptionsChain` endpoint. */
export interface OptionsChainAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The options chain data. */
	data?: OptionsChainItem[];
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

/** Represents an item in an options chain. */
export interface OptionsChainItem {
	/**
	 * The ask price of the option.
	 * @format double
	 */
	ask_price: number;
	/**
	 * The ask size of the option.
	 * @format double
	 */
	ask_size: number;
	/**
	 * The bid price of the option.
	 * @format double
	 */
	bid_price: number;
	/**
	 * The bid size of the option.
	 * @format double
	 */
	bid_size: number;
	/** The expiration date of the option in ISO 8601 format. */
	expiration_date: string;
	/**
	 * The last traded price of the option.
	 * @format double
	 */
	last_trade_price: number;
	/**
	 * The size of the last trade.
	 * @format double
	 */
	last_trade_size: number;
	/** The time of the last trade in ISO 8601 format. */
	last_trade_time: string;
	/**
	 * The nanoseconds part of the last trade time.
	 * @format double
	 */
	last_trade_time_nanoseconds: number;
	/**
	 * The open interest of the option.
	 * @format double
	 */
	open_interest: number;
	/**
	 * The number of shares per contract.
	 * @format double
	 */
	shares_per_contract: number;
	/**
	 * The strike price of the option.
	 * @format double
	 */
	strike_price: number;
	/** The ticker symbol of the underlying asset. */
	ticker: string;
	/** The type of option, either "Call" or "Put". */
	type: OptionsChainItemTypeEnum;
	/**
	 * The trading volume of the option.
	 * @format double
	 */
	volume: number;
}

/** The type of option, either "Call" or "Put". */
export enum OptionsChainItemTypeEnum {
	Call = "Call",
	Put = "Put",
}

export interface OrderBookSummary {
	asks: OrderSummary[];
	asset_id: string;
	bids: OrderSummary[];
	hash: string;
	market: string;
	timestamp: string;
}

/** - The order preference for the quote ('BEST_VALUE', 'BEST_FEE', 'BEST_FEE_GAS') (optional). */
export enum OrderEnum {
	BEST_VALUE = "BEST_VALUE",
	BEST_FEE = "BEST_FEE",
	BEST_FEE_GAS = "BEST_FEE_GAS",
}

/** - (Optional) The order preference for the quote (BEST_VALUE, BEST_FEE, BEST_FEE_GAS). */
export enum OrderEnum1 {
	BEST_VALUE = "BEST_VALUE",
	BEST_FEE = "BEST_FEE",
	BEST_FEE_GAS = "BEST_FEE_GAS",
}

export interface OrderSummary {
	price: string;
	size: string;
}

export type OwnerOfData = UniswapV3NFTAPIResponseString;

export interface OwnerOfParams {
	address: string;
	chainId: string;
	/** @format double */
	tokenId: number;
}

export interface PaginationPayload {
	/** @format double */
	count: number;
	data: any[];
	/** @format double */
	limit: number;
	next_cursor: string;
}

export type PairForData = RamsesRouterAPIResponseString;

export interface PairForParams {
	address: string;
	chainId: string;
	stable: boolean;
	tokenA: string;
	tokenB: string;
}

/** Make all properties in T optional */
export interface PartialComponentDefinition {
	/** The code of the component. */
	code?: string;
	/**
	 * The date and time when the component was created.
	 * Optional.
	 * @format date-time
	 */
	created_at?: string;
	/** A brief description of the component. */
	description?: string;
	/** The unique identifier of the component. */
	id?: string;
	/**
	 * Indicates whether the component is active.
	 * Optional.
	 */
	is_active?: boolean;
	/** The name of the component. */
	name?: string;
	property_schema?: any;
	/**
	 * The date and time when the component was last updated.
	 * Optional.
	 * @format date-time
	 */
	updated_at?: string;
	version?: string;
	xml_example?: string;
	xml_tag?: string;
}

export interface PathVizImageConfig {
	/**
	 * The height of the path visualization image.
	 * @format double
	 */
	height?: number;
	/** The color of the text on the legend in the path visualization image. */
	legendTextColor?: string;
	/** The colors of the links in the path visualization image. */
	linkColors?: string[];
	/** The color of the nodes in the path visualization image. */
	nodeColor?: string;
	/** The color of the text on the nodes in the path visualization image. */
	nodeTextColor?: string;
	/**
	 * The width of the path visualization image.
	 * @format double
	 */
	width?: number;
}

/** Represents a type of payment method. */
export interface PaymentType {
	/** The URL or path to the icon representing the payment type. */
	icon: string;
	/** The name of the payment type. */
	name: string;
	/** The unique identifier for the payment type. */
	paymentTypeId: string;
}

/** - The period type of the income statements. */
export enum PeriodEnum {
	Annual = "annual",
	Quarterly = "quarterly",
	Ttm = "ttm",
}

/** - The period type of the balance sheets. */
export enum PeriodEnum1 {
	Annual = "annual",
	Quarterly = "quarterly",
	Ttm = "ttm",
}

/** - The period type of the cash flow statements. */
export enum PeriodEnum2 {
	Annual = "annual",
	Quarterly = "quarterly",
	Ttm = "ttm",
}

/** - The period type of the segmented revenues. */
export enum PeriodEnum3 {
	Annual = "annual",
	Quarterly = "quarterly",
}

/** - The period type of the financials. */
export enum PeriodEnum4 {
	Annual = "annual",
	Quarterly = "quarterly",
	Ttm = "ttm",
}

export type PermitData = UniswapV3NFTAPIResponseUniswapV3ExecuteFunctionResult;

export type PermitTypehashData = UniswapV3NFTAPIResponseString;

export interface PermitTypehashParams {
	address: string;
	chainId: string;
}

export interface PersonalityInput {
	personality: string;
}

export interface PersonalityTraits {
	/** @format double */
	agreeableness: number;
	/** @format double */
	confidence: number;
	/** @format double */
	conscientiousness: number;
	/** @format double */
	empathy: number;
	/** @format double */
	extraversion: number;
	/** @format double */
	formality: number;
	/** @format double */
	humor: number;
	/** @format double */
	neuroticism: number;
	/** @format double */
	openness: number;
	/** @format double */
	optimism: number;
}

/** From T, pick a set of properties whose keys are in the union K */
export interface PickComponentDefinitionExcludeKeysId {
	/** The code of the component. */
	code: string;
	/**
	 * The date and time when the component was created.
	 * Optional.
	 * @format date-time
	 */
	created_at?: string;
	/** A brief description of the component. */
	description: string;
	/**
	 * Indicates whether the component is active.
	 * Optional.
	 */
	is_active?: boolean;
	/** The name of the component. */
	name: string;
	property_schema: any;
	/**
	 * The date and time when the component was last updated.
	 * Optional.
	 * @format date-time
	 */
	updated_at?: string;
	version: string;
	xml_example: string;
	xml_tag: string;
}

/** From T, pick a set of properties whose keys are in the union K */
export interface PickJupiterInputBodyExcludeKeysAccountName {
	/**
	 * The amount of input tokens to be exchanged.
	 * @format double
	 */
	amount: number;
	/**
	 * If true, the transaction will be broadcast to the network.
	 * Optional.
	 */
	broadcast?: boolean;
	/**
	 * If true, the transaction will be simulated but not executed.
	 * Optional.
	 */
	dryrun?: boolean;
	/**
	 * The fee in basis points (bps) to be applied to the transaction.
	 * Optional.
	 * @format double
	 */
	feeBps?: number;
	/** The mint address of the input token. */
	inputMint: string;
	/** The mint address of the output token. */
	outputMint: string;
	/**
	 * The maximum allowable slippage for the transaction, expressed as a percentage.
	 * Optional.
	 * @format double
	 */
	slippage?: number;
}

export interface PingResponse {
	message: string;
}

export type PokeData = LynexVoterAPIResponseLynexVoterExecuteFunctionResult;

export type PokeOutput =
	VeTheNftVoterAPIResponseVeTheNftVoterExecuteFunctionResult;

export type PokeResult = RamsesVoterAPIResponseRamsesVoterExecuteFunctionResult;

export interface PolymarketAPIResponseAny {
	data?: any;
	message: string;
	success: boolean;
}

export interface PolymarketAPIResponseBalanceAllowanceResponse {
	data?: BalanceAllowanceResponse;
	message: string;
	success: boolean;
}

export interface PolymarketAPIResponseCancelMarketOrdersResponse {
	data?: CancelMarketOrdersResponse;
	message: string;
	success: boolean;
}

export interface PolymarketAPIResponseCancelOrderResponse {
	data?: CancelOrderResponse;
	message: string;
	success: boolean;
}

export interface PolymarketAPIResponseCancelOrdersResponse {
	data?: CancelOrdersResponse;
	message: string;
	success: boolean;
}

export interface PolymarketAPIResponseCreateMarketBuyOrderResponse {
	data?: CreateMarketBuyOrderResponse;
	message: string;
	success: boolean;
}

export interface PolymarketAPIResponseCreateOrderResponse {
	data?: CreateOrderResponse;
	message: string;
	success: boolean;
}

export interface PolymarketAPIResponseDropNotificationsResponse {
	data?: DropNotificationsResponse;
	message: string;
	success: boolean;
}

export interface PolymarketAPIResponseMarketPriceArray {
	data?: MarketPrice[];
	message: string;
	success: boolean;
}

export interface PolymarketAPIResponseMarketTradeEventArray {
	data?: MarketTradeEvent[];
	message: string;
	success: boolean;
}

export interface PolymarketAPIResponseNotificationArray {
	data?: Notification[];
	message: string;
	success: boolean;
}

export interface PolymarketAPIResponseOpenOrder {
	data?: OpenOrder;
	message: string;
	success: boolean;
}

export interface PolymarketAPIResponseOpenOrdersResponse {
	data?: OpenOrdersResponse;
	message: string;
	success: boolean;
}

export interface PolymarketAPIResponseOrderBookSummary {
	data?: OrderBookSummary;
	message: string;
	success: boolean;
}

export interface PolymarketAPIResponsePaginationPayload {
	data?: PaginationPayload;
	message: string;
	success: boolean;
}

export interface PolymarketAPIResponsePostOrderResponse {
	data?: PostOrderResponse;
	message: string;
	success: boolean;
}

export interface PolymarketAPIResponseTradeArray {
	data?: Trade[];
	message: string;
	success: boolean;
}

export interface PolymarketAPIResponseUpdateBalanceAllowanceResponse {
	data?: UpdateBalanceAllowanceResponse;
	message: string;
	success: boolean;
}

export interface PolymarketWrapperNewOrderString {
	order: {
		expiration: string;
		feeRateBps: string;
		maker: string;
		makerAmount: string;
		nonce: string;
		/** @format double */
		salt: number;
		side: string;
		signature: string;
		/** @format double */
		signatureType: number;
		signer: string;
		taker: string;
		takerAmount: string;
		tokenId: string;
	};
	orderType: string;
	owner: string;
}

export interface PolymarketWrapperSignedOrder {
	expiration: string;
	feeRateBps: string;
	maker: string;
	makerAmount: string;
	nonce: string;
	salt: string;
	/** @format double */
	side: number;
	signature: string;
	/** @format double */
	signatureType: number;
	signer: string;
	taker: string;
	takerAmount: string;
	tokenId: string;
}

export interface PoolAddressProviderAPIResponsePoolAddressProviderExecuteFunctionResult {
	data?: PoolAddressProviderExecuteFunctionResult;
	message: string;
	success: boolean;
}

export interface PoolAddressProviderAPIResponseString {
	data?: string;
	message: string;
	success: boolean;
}

export interface PoolAddressProviderExecuteFunctionResult {
	/** Represents the response from broadcasting a raw transaction. */
	broadcasted?: BroadCastRawTransactionResponse;
	/** Represents a transaction with various optional properties. */
	data?: Transaction;
	function: string;
	message?: string;
	params: any[];
	/** Response object for the {@link TransactNamespace.simulateAssetChanges } method. */
	simulation?: SimulateAssetChangesResponse;
	success?: boolean;
	transaction: PoolAddressProviderTransaction;
	user_op?: string;
}

/**
 * Interface representing the input body for the Pool Address Provider.
 * Extends the InputBody interface.
 */
export interface PoolAddressProviderInputBody {
	/** Whether the transaction is from an externally owned account. */
	EOA?: boolean;
	/** The access list for the transaction. */
	accessList?: AccessTuple[];
	/** The account involved in the transaction. */
	account?: string;
	/** Whether to always increment the nonce. */
	alwaysIncrementNonce?: boolean;
	/** The amount involved in the transaction. */
	amount?: string;
	/** The amounts involved in the transaction. */
	amounts?: string[];
	/** Whether the transaction is approved. */
	approved?: boolean;
	/** The asset involved in the transaction. */
	asset?: string;
	/** The assets involved in the transaction. */
	assets?: string[];
	/** The gas for blob transactions. */
	blobGas?: string;
	/** The gas fee cap for blob transactions. */
	blobGasFeeCap?: string;
	/** The hashes for blob transactions. */
	blobHashes?: string[];
	/** The borrow amount. */
	borrowAmount?: string | number;
	/** Whether to broadcast the transaction. */
	broadcast?: boolean;
	/** The chain ID. */
	chain_id?: string;
	/** The collateral asset. */
	collateralAsset?: string;
	/** The contract address. */
	contract_address?: string;
	/** The data to be sent. */
	data?: string;
	/** The debt asset. */
	debtAsset?: string;
	/** The debt to cover. */
	debtToCover?: string;
	/** Whether to perform a dry run. */
	dryrun?: boolean;
	/** The encoding type. */
	encoding?: string;
	/** The gas for the transaction. */
	gas?: string;
	/** The gas limit for the transaction. */
	gasLimit?: string;
	/** The gas price for the transaction. */
	gasPrice?: string;
	/** The initial deposit. */
	initialDeposit?: string | number;
	/** The initiator of the transaction. */
	initiator?: string;
	/** The input data. */
	input?: string;
	/** The input tokens. */
	inputTokens?: TokenAmount[];
	/**
	 * The interest rate mode.
	 * @format double
	 */
	interestRateMode?: number;
	/** The maximum fee per gas. */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas. */
	maxPriorityFeePerGas?: string;
	/** The minimum health factor. */
	minHealthFactor?: string | number;
	/** The modes of the transaction. */
	modes?: number[];
	newAddress?: string;
	newImplementationAddress?: string;
	newMarketId?: string;
	/** The nonce for the transaction. */
	nonce?: string;
	/** The address on behalf of which the transaction is made. */
	onBehalfOf?: string;
	/** The output tokens. */
	outputTokens?: TokenProportion[];
	/** Additional parameters. */
	params?: string;
	/** The premiums. */
	premiums?: string[] | number[];
	/**
	 * The rate mode.
	 * @format double
	 */
	rateMode?: number;
	/** Whether to receive a token. */
	receiveAToken?: boolean;
	/** The receiver address. */
	receiverAddress?: string;
	/**
	 * The referral code.
	 * @format double
	 */
	referralCode?: number;
	/** The role of the user. */
	role?: string;
	/** Whether to simulate the transaction. */
	simulate?: boolean;
	/**
	 * The slippage limit percentage.
	 * @format double
	 */
	slippageLimitPercent?: number;
	/** The recipient address. */
	to?: string;
	/** The token ID. */
	token_id?: string;
	/** The token IDs. */
	token_ids?: string;
	/**
	 * The type of transaction.
	 * @format double
	 */
	type?: number;
	/** Whether to use as collateral. */
	useAsCollateral?: boolean;
	/** The user involved in the transaction. */
	user?: string;
	/** The value to be sent. */
	value?: string;
}

/** Represents the API response structure for the Pool Address Provider Registry. */
export interface PoolAddressProviderRegistryAPIResponseAnyArray {
	/** The data returned by the API, if any. */
	data?: any[];
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the API response structure for the Pool Address Provider Registry. */
export interface PoolAddressProviderRegistryAPIResponseString {
	/** The data returned by the API, if any. */
	data?: string;
	/** A message providing additional information about the API response. */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

export interface PoolAddressProviderTransaction {
	chainId: string;
	data: string;
	from: string;
	gasLimit?: string;
	gasPrice?: string;
	maxFeePerGas?: string;
	maxPriorityFeePerGas?: string;
	/** @format double */
	nonce: number;
	to: string;
	/** @format double */
	type?: number;
	value: string;
}

export type PoolVoteLengthData = VeTheNftVoterAPIResponseString;

export interface PoolVoteLengthParams {
	address: string;
	chainId: string;
	tokenId: string;
}

/**
 * Interface representing the response from the Portfolio API.
 * Extends the BaseAPIResponse interface.
 */
export interface PortfolioAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The data object containing portfolio details. */
	data?: {
		/** The address associated with the portfolio. */
		address?: string;
		/** The job ID associated with the request. */
		jobId?: string;
		/** An array of NFT balances. */
		nft_balances?: any[];
		/**
		 * The current page number.
		 * @format double
		 */
		page?: number;
		/**
		 * The number of items per page.
		 * @format double
		 */
		pageSize?: number;
		/** The URL to poll for updates. */
		pollUrl?: string;
		/** The reason for the response status. */
		reason?: string;
		/** The status of the response. */
		status?: string;
		/** An array of token balances. */
		token_balances?: any[];
		/**
		 * The total number of NFTs.
		 * @format double
		 */
		totalNFTs?: number;
		/**
		 * The total number of tokens.
		 * @format double
		 */
		totalTokens?: number;
	};
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

export type PositionsData = UniswapV3NFTAPIResponseAny;

export interface PositionsParams {
	address: string;
	chainId: string;
	/** @format double */
	tokenId: number;
}

export interface PostOrderBody {
	chain_id: string;
	order: PolymarketWrapperSignedOrder;
}

export type PostOrderData = PolymarketAPIResponsePostOrderResponse;

export interface PostOrderResponse {
	orderID: string;
	success: boolean;
}

/** Interface representing the structure of a post quote. */
export interface PostQuote {
	/** The broadcasted transaction. */
	broadcast: any;
	/** The input body. */
	input: InputBody;
	/** The quote object. */
	quote: Quote;
	/** The signed transaction. */
	signed: any;
}

export interface PredictiveMetric {
	/** @format double */
	confidence: number;
	factors: string[];
	metric: string;
	/** @format double */
	prediction: number;
}

export interface PredictiveMetricsAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	data?: PredictiveMetric;
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

/** Represents the price data for a financial instrument. */
export interface PriceData {
	/**
	 * The closing price of the instrument.
	 * @format double
	 */
	close: number;
	/**
	 * The highest price of the instrument during the time period.
	 * @format double
	 */
	high: number;
	/**
	 * The lowest price of the instrument during the time period.
	 * @format double
	 */
	low: number;
	/**
	 * The opening price of the instrument.
	 * @format double
	 */
	open: number;
	/** The time of the data point in ISO 8601 format. */
	time: string;
	/**
	 * The time of the data point in milliseconds since the Unix epoch.
	 * @format double
	 */
	time_milliseconds: number;
	/**
	 * The trading volume of the instrument.
	 * @format double
	 */
	volume: number;
}

/** Represents the price interval for historical price data. */
export enum PriceInterval {
	Second = "second",
	Minute = "minute",
	Day = "day",
	Week = "week",
	Month = "month",
	Quarter = "quarter",
	Year = "year",
}

/** Represents a snapshot of a financial instrument's price at a specific point in time. */
export interface PriceSnapshot {
	/**
	 * The absolute change in price for the day.
	 * @format double
	 */
	day_change: number;
	/**
	 * The percentage change in price for the day.
	 * @format double
	 */
	day_change_percent: number;
	/**
	 * The stock ticker symbol of the company.
	 * @format double
	 */
	price: number;
	/** The percentage change in price for the day. */
	ticker: string;
	/** The opening price of the instrument. */
	time: string;
	/**
	 * The time of the snapshot in milliseconds since the Unix epoch.
	 * @format double
	 */
	time_nanoseconds: number;
}

/** Represents the response of the `getPriceSnapshot` endpoint. */
export interface PriceSnapshotAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The price snapshot data. */
	data?: PriceSnapshot;
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

/** Represents the response of the `getPrices` endpoint. */
export interface PricesAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The price data. */
	data?: PriceData[];
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

export interface Quote {
	action: Action;
	estimate: Estimate;
	id: string;
	includedSteps: Step[];
	tool: string;
	/** Represents a request to perform a transaction. */
	transactionRequest: TransactionRequest;
	type: string;
}

export type QuoteAddLiquidityData =
	RamsesRouterAPIResponseAmountAStringAmountBStringLiquidityString;

export interface QuoteAddLiquidityParams {
	address: string;
	amountADesired: string;
	amountBDesired: string;
	chainId: string;
	stable: boolean;
	tokenA: string;
	tokenB: string;
}

export type QuoteData = UniswapV2APIResponseUniswapV2ExecuteFunctionResult;

export type QuoteRemoveLiquidityData =
	RamsesRouterAPIResponseAmountAStringAmountBString;

export interface QuoteRemoveLiquidityParams {
	address: string;
	chainId: string;
	liquidity: string;
	stable: boolean;
	tokenA: string;
	tokenB: string;
}

/** Represents an array of Quote objects. */
export type Quotes = Quote[];

export interface RamsesAPIResponse {
	data?: any;
	message: string;
	success: boolean;
}

export interface RamsesNFTAPIResponseLockedData {
	data?: LockedData;
	message: string;
	success: boolean;
}

export interface RamsesNFTAPIResponseRamsesNFTExecuteFunctionResult {
	data?: RamsesNFTExecuteFunctionResult;
	message: string;
	success: boolean;
}

export interface RamsesNFTAPIResponseString {
	data?: string;
	message: string;
	success: boolean;
}

export interface RamsesNFTExecuteFunctionResult {
	/** Represents the response from broadcasting a raw transaction. */
	broadcasted?: BroadCastRawTransactionResponse;
	/** Represents a transaction with various optional properties. */
	data?: Transaction;
	function: string;
	message?: string;
	params: any[];
	/** Response object for the {@link TransactNamespace.simulateAssetChanges } method. */
	simulation?: SimulateAssetChangesResponse;
	success?: boolean;
	transaction: RamsesNFTTransaction;
	user_op?: string;
}

export interface RamsesNFTInputBody {
	/** Whether the transaction is from an externally owned account. */
	EOA?: boolean;
	_block?: string;
	_idx?: string;
	_proxy?: string;
	_t?: string;
	_team?: string;
	/** The access list for the transaction. */
	accessList?: AccessTuple[];
	/** The account involved in the transaction. */
	account?: string;
	/** Whether to always increment the nonce. */
	alwaysIncrementNonce?: boolean;
	/** The amount involved in the transaction. */
	amount?: string;
	/** The amounts involved in the transaction. */
	amounts?: string[];
	/** Whether the transaction is approved. */
	approved?: boolean;
	artProxy?: string;
	/** The asset involved in the transaction. */
	asset?: string;
	/** The assets involved in the transaction. */
	assets?: string[];
	/** The gas for blob transactions. */
	blobGas?: string;
	/** The gas fee cap for blob transactions. */
	blobGasFeeCap?: string;
	/** The hashes for blob transactions. */
	blobHashes?: string[];
	/** The borrow amount. */
	borrowAmount?: string | number;
	/** Whether to broadcast the transaction. */
	broadcast?: boolean;
	/** The chain ID. */
	chain_id?: string;
	/** The collateral asset. */
	collateralAsset?: string;
	/** The contract address. */
	contract_address?: string;
	/** The data to be sent. */
	data?: string;
	/** The debt asset. */
	debtAsset?: string;
	/** The debt to cover. */
	debtToCover?: string;
	delegatee?: string;
	/** Whether to perform a dry run. */
	dryrun?: boolean;
	/** The encoding type. */
	encoding?: string;
	expiry?: string;
	from?: string;
	/** The gas for the transaction. */
	gas?: string;
	/** The gas limit for the transaction. */
	gasLimit?: string;
	/** The gas price for the transaction. */
	gasPrice?: string;
	/** The initial deposit. */
	initialDeposit?: string | number;
	/** The initiator of the transaction. */
	initiator?: string;
	/** The input data. */
	input?: string;
	/** The input tokens. */
	inputTokens?: TokenAmount[];
	/**
	 * The interest rate mode.
	 * @format double
	 */
	interestRateMode?: number;
	lock_duration?: string;
	/** The maximum fee per gas. */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas. */
	maxPriorityFeePerGas?: string;
	/** The minimum health factor. */
	minHealthFactor?: string | number;
	/** The modes of the transaction. */
	modes?: number[];
	/** The nonce for the transaction. */
	nonce?: string;
	/** The address on behalf of which the transaction is made. */
	onBehalfOf?: string;
	operator?: string;
	/** The output tokens. */
	outputTokens?: TokenProportion[];
	/** Additional parameters. */
	params?: string;
	/** The premiums. */
	premiums?: string[] | number[];
	r?: string;
	/**
	 * The rate mode.
	 * @format double
	 */
	rateMode?: number;
	/** Whether to receive a token. */
	receiveAToken?: boolean;
	/** The receiver address. */
	receiverAddress?: string;
	/**
	 * The referral code.
	 * @format double
	 */
	referralCode?: number;
	/** The role of the user. */
	role?: string;
	s?: string;
	/** Whether to simulate the transaction. */
	simulate?: boolean;
	/**
	 * The slippage limit percentage.
	 * @format double
	 */
	slippageLimitPercent?: number;
	/** The recipient address. */
	to?: string;
	token?: string;
	tokenId?: string;
	/** The token ID. */
	token_id?: string;
	/** The token IDs. */
	token_ids?: string;
	/**
	 * The type of transaction.
	 * @format double
	 */
	type?: number;
	/** Whether to use as collateral. */
	useAsCollateral?: boolean;
	/** The user involved in the transaction. */
	user?: string;
	/** @format double */
	v?: number;
	/** The value to be sent. */
	value?: string;
	voter?: string;
}

export interface RamsesNFTTransaction {
	chainId: string;
	data: string;
	from: string;
	gasLimit?: string;
	gasPrice?: string;
	maxFeePerGas?: string;
	maxPriorityFeePerGas?: string;
	/** @format double */
	nonce: number;
	to: string;
	/** @format double */
	type?: number;
	value: string;
}

export interface RamsesRouterAPIResponseAmountAStringAmountBString {
	data?: {
		amountA: string;
		amountB: string;
	};
	message: string;
	success: boolean;
}

export interface RamsesRouterAPIResponseAmountAStringAmountBStringLiquidityString {
	data?: {
		amountA: string;
		amountB: string;
		liquidity: string;
	};
	message: string;
	success: boolean;
}

export interface RamsesRouterAPIResponseAmountOutStringStableBoolean {
	data?: {
		amountOut: string;
		stable: boolean;
	};
	message: string;
	success: boolean;
}

export interface RamsesRouterAPIResponseBoolean {
	data?: boolean;
	message: string;
	success: boolean;
}

export interface RamsesRouterAPIResponseRamsesRouterExecuteFunctionResult {
	data?: RamsesRouterExecuteFunctionResult;
	message: string;
	success: boolean;
}

export interface RamsesRouterAPIResponseReserve03AstringReserve13Astring {
	data?: {
		reserve0: string;
		reserve1: string;
	};
	message: string;
	success: boolean;
}

export interface RamsesRouterAPIResponseSortedTokens {
	data?: SortedTokens;
	message: string;
	success: boolean;
}

export interface RamsesRouterAPIResponseString {
	data?: string;
	message: string;
	success: boolean;
}

export interface RamsesRouterAPIResponseStringArray {
	data?: string[];
	message: string;
	success: boolean;
}

export interface RamsesRouterExecuteFunctionResult {
	/** The broadcasted transaction details. */
	broadcasted?: BroadCastRawTransactionResponse;
	/** The data returned by the executed function. */
	data?: Transaction;
	/** The name of the executed function. */
	function: string;
	/** A message providing additional information about the execution result. */
	message?: string;
	/** The parameters passed to the executed function. */
	params: any[];
	/** The simulation result of the transaction. */
	simulation?: SimulateAssetChangesResponse;
	/** Indicates if the execution was successful. */
	success?: boolean;
	/** The transaction details. */
	transaction: RamsesRouterTransaction;
	/** Indicates if the execution was successful. */
	user_op?: string;
}

/**
 * Interface representing the input body for the Ramses Router.
 * Extends the InputBody interface.
 */
export interface RamsesRouterInputBody {
	/** Whether the transaction is from an externally owned account. */
	EOA?: boolean;
	/** The access list for the transaction. */
	accessList?: AccessTuple[];
	/** The account involved in the transaction. */
	account?: string;
	/** Whether to always increment the nonce. */
	alwaysIncrementNonce?: boolean;
	/** The amount involved in the transaction. */
	amount?: string;
	/** The desired amount of token A. */
	amountADesired?: string;
	/** The minimum amount of token A. */
	amountAMin?: string;
	/** The desired amount of token B. */
	amountBDesired?: string;
	/** The minimum amount of token B. */
	amountBMin?: string;
	/** The minimum amount of ETH. */
	amountETHMin?: string;
	/** The input amount for the transaction. */
	amountIn?: string;
	/** The minimum output amount for the transaction. */
	amountOutMin?: string;
	/** The desired amount of the token. */
	amountTokenDesired?: string;
	/** The minimum amount of the token. */
	amountTokenMin?: string;
	/** The amounts of the asset. */
	amounts?: string[];
	/** Indicates if the maximum approval is granted. */
	approveMax?: boolean;
	/** Whether the transaction is approved. */
	approved?: boolean;
	/** The asset involved in the transaction. */
	asset?: string;
	/** The assets involved in the transaction. */
	assets?: string[];
	/** The gas for blob transactions. */
	blobGas?: string;
	/** The gas fee cap for blob transactions. */
	blobGasFeeCap?: string;
	/** The hashes for blob transactions. */
	blobHashes?: string[];
	/** The borrow amount. */
	borrowAmount?: string | number;
	/** Whether to broadcast the transaction. */
	broadcast?: boolean;
	/** The chain ID. */
	chain_id?: string;
	/** The collateral asset. */
	collateralAsset?: string;
	/** The contract address. */
	contract_address?: string;
	/** The data to be sent. */
	data?: string;
	/** The deadline for the transaction. */
	deadline?: string;
	/** The debt asset. */
	debtAsset?: string;
	/** The debt to cover. */
	debtToCover?: string;
	/** Whether to perform a dry run. */
	dryrun?: boolean;
	/** The encoding type. */
	encoding?: string;
	/** The gas for the transaction. */
	gas?: string;
	/** The gas limit for the transaction. */
	gasLimit?: string;
	/** The gas price for the transaction. */
	gasPrice?: string;
	/** The initial deposit. */
	initialDeposit?: string | number;
	/** The initiator of the transaction. */
	initiator?: string;
	/** The input data. */
	input?: string;
	/** The input tokens. */
	inputTokens?: TokenAmount[];
	/**
	 * The interest rate mode.
	 * @format double
	 */
	interestRateMode?: number;
	/** The liquidity amount. */
	liquidity?: string;
	/** The maximum fee per gas. */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas. */
	maxPriorityFeePerGas?: string;
	/** The minimum health factor. */
	minHealthFactor?: string | number;
	/** The modes of the transaction. */
	modes?: number[];
	/** The nonce for the transaction. */
	nonce?: string;
	/** The address on behalf of which the transaction is made. */
	onBehalfOf?: string;
	/** The output tokens. */
	outputTokens?: TokenProportion[];
	/** Additional parameters. */
	params?: string;
	/** The premiums. */
	premiums?: string[] | number[];
	/** The r parameter for the transaction signature. */
	r?: string;
	/**
	 * The rate mode.
	 * @format double
	 */
	rateMode?: number;
	/** Whether to receive a token. */
	receiveAToken?: boolean;
	/** The receiver address. */
	receiverAddress?: string;
	/**
	 * The referral code.
	 * @format double
	 */
	referralCode?: number;
	/** The role of the user. */
	role?: string;
	/**
	 * The routes for the asset transfer.
	 * Each route contains the source, destination, and a flag indicating if the route is stable.
	 */
	routes?: {
		from: string;
		stable: boolean;
		to: string;
	}[];
	/** The s parameter for the transaction signature. */
	s?: string;
	/** Indicates if the transaction is a simulation. */
	simulate?: boolean;
	/**
	 * The slippage limit percentage.
	 * @format double
	 */
	slippageLimitPercent?: number;
	/** Indicates if the transaction is stable. */
	stable?: boolean;
	/** The destination address. */
	to?: string;
	/** The token involved in the transaction. */
	token?: string;
	/** The first token involved in the transaction. */
	tokenA?: string;
	/** The second token involved in the transaction. */
	tokenB?: string;
	/** The source token for the transaction. */
	tokenFrom?: string;
	/** The destination token for the transaction. */
	tokenTo?: string;
	/** The token ID. */
	token_id?: string;
	/** The token IDs. */
	token_ids?: string;
	/**
	 * The type of transaction.
	 * @format double
	 */
	type?: number;
	/** Whether to use as collateral. */
	useAsCollateral?: boolean;
	/** The user involved in the transaction. */
	user?: string;
	/**
	 * The v parameter for the transaction signature.
	 * @format double
	 */
	v?: number;
	/** The value to be sent. */
	value?: string;
}

/** Interface representing a Ramses Router transaction. */
export interface RamsesRouterTransaction {
	/** The chain ID for the transaction. */
	chainId: string;
	/** The data for the transaction. */
	data: string;
	/** The source address for the transaction. */
	from: string;
	/** (Optional) The gas limit for the transaction. */
	gasLimit?: string;
	/** (Optional) The gas price for the transaction. */
	gasPrice?: string;
	/** (Optional) The maximum fee per gas for the transaction, in wei. */
	maxFeePerGas?: string;
	/** (Optional) The maximum priority fee per gas for the transaction, in wei. */
	maxPriorityFeePerGas?: string;
	/**
	 * The nonce for the transaction.
	 * @format double
	 */
	nonce: number;
	/** The destination address for the transaction. */
	to: string;
	/**
	 * (Optional) The type of the transaction.
	 * @format double
	 */
	type?: number;
	/** The value for the transaction. */
	value: string;
}

export interface RamsesVoterAPIResponseBoolean {
	data?: boolean;
	message: string;
	success: boolean;
}

export interface RamsesVoterAPIResponseRamsesVoterExecuteFunctionResult {
	/** Represents the result of executing a function on the Ramses Voter. */
	data?: RamsesVoterExecuteFunctionResult;
	message: string;
	success: boolean;
}

export interface RamsesVoterAPIResponseString {
	data?: string;
	message: string;
	success: boolean;
}

/** Represents the result of executing a function on the Ramses Voter. */
export interface RamsesVoterExecuteFunctionResult {
	/** The broadcasted transaction data. */
	broadcasted?: BroadCastRawTransactionResponse;
	/** The transaction data. */
	data?: Transaction;
	/** The function name. */
	function: string;
	/** The error message. */
	message?: string;
	/** The function parameters. */
	params: any[];
	/** The simulation results. */
	simulation?: SimulateAssetChangesResponse;
	/** Indicates if the function was successful. */
	success?: boolean;
	/** The transaction data. */
	transaction: RamsesVoterTransaction;
	/** The user operation. */
	user_op?: string;
}

export interface RamsesVoterInputBody {
	/** Indicates if the transaction is from an Externally Owned Account. */
	EOA?: boolean;
	/** The access list for the transaction. */
	accessList?: AccessTuple[];
	/** The account involved in the transaction. */
	account?: string;
	/** Indicates if the nonce should always be incremented. */
	alwaysIncrementNonce?: boolean;
	/** The amount to be transferred. */
	amount?: string;
	/** The amounts involved in the transaction. */
	amounts?: string[];
	/** Whether the transaction is approved. */
	approved?: boolean;
	/** The asset involved in the transaction. */
	asset?: string;
	/** The assets involved in the transaction. */
	assets?: string[];
	/** The gas for blob transactions. */
	blobGas?: string;
	/** The gas fee cap for blob transactions. */
	blobGasFeeCap?: string;
	/** The hashes for blob transactions. */
	blobHashes?: string[];
	/** The borrow amount. */
	borrowAmount?: string | number;
	/** The bribes for the transaction. */
	bribes?: string[];
	/** Indicates if the transaction should be broadcasted. */
	broadcast?: boolean;
	/** The chain ID. */
	chain_id?: string;
	/** The collateral asset. */
	collateralAsset?: string;
	/** The contract address involved in the transaction. */
	contract_address?: string;
	/** Additional data for the transaction. */
	data?: string;
	/** The debt asset. */
	debtAsset?: string;
	/** The debt to cover. */
	debtToCover?: string;
	/** Indicates if the transaction is a dry run. */
	dryrun?: boolean;
	/** The encoding type. */
	encoding?: string;
	/** The fees for the transaction. */
	fees?: string[];
	/** The gas limit for the transaction. */
	gas?: string;
	/** The gas limit for the transaction. */
	gasLimit?: string;
	/** The gas price for the transaction. */
	gasPrice?: string;
	/** The gauge involved in the transaction. */
	gauge?: string;
	/** The gauges involved in the transaction. */
	gauges?: string[];
	/** The initial deposit. */
	initialDeposit?: string | number;
	/** The initiator of the transaction. */
	initiator?: string;
	/** The input data. */
	input?: string;
	/** The input tokens. */
	inputTokens?: TokenAmount[];
	/**
	 * The interest rate mode.
	 * @format double
	 */
	interestRateMode?: number;
	/** The maximum fee per gas. */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas. */
	maxPriorityFeePerGas?: string;
	/** The minimum health factor. */
	minHealthFactor?: string | number;
	/** The modes of the transaction. */
	modes?: number[];
	/** The nonce for the transaction. */
	nonce?: string;
	/** The address on behalf of which the transaction is made. */
	onBehalfOf?: string;
	/** The output tokens. */
	outputTokens?: TokenProportion[];
	/** Additional parameters. */
	params?: string;
	/** The pool involved in the transaction. */
	pool?: string;
	/** The pool votes for the transaction. */
	pool_vote?: string[];
	/** The premiums. */
	premiums?: string[] | number[];
	/**
	 * The rate mode.
	 * @format double
	 */
	rateMode?: number;
	/** Whether to receive a token. */
	receiveAToken?: boolean;
	/** The receiver address. */
	receiverAddress?: string;
	/**
	 * The referral code.
	 * @format double
	 */
	referralCode?: number;
	/** The role of the user. */
	role?: string;
	/** Indicates if the transaction should be simulated. */
	simulate?: boolean;
	/**
	 * The slippage limit percentage.
	 * @format double
	 */
	slippageLimitPercent?: number;
	/** The recipient address. */
	to?: string;
	/** The token involved in the transaction. */
	token?: string;
	/** The token ID involved in the transaction. */
	token_id?: string;
	/** The token IDs. */
	token_ids?: string;
	/** The tokens involved in the transaction. */
	tokens?: string[][];
	/**
	 * The type of transaction.
	 * @format double
	 */
	type?: number;
	/** Whether to use as collateral. */
	useAsCollateral?: boolean;
	/** The user involved in the transaction. */
	user?: string;
	/** The value associated with the transaction. */
	value?: string;
	/** The weights for the transaction. */
	weights?: string[];
}

/** Represents a transaction for the Ramses Voter. */
export interface RamsesVoterTransaction {
	/** The chain ID of the blockchain network. */
	chainId: string;
	/** The data payload of the transaction. */
	data: string;
	/** The sender address of the transaction. */
	from: string;
	/** The gas limit for the transaction (optional). */
	gasLimit?: string;
	/** The gas price for the transaction (optional). */
	gasPrice?: string;
	/** The maximum fee per gas for the transaction (optional). */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas for the transaction (optional). */
	maxPriorityFeePerGas?: string;
	/**
	 * The nonce of the transaction.
	 * @format double
	 */
	nonce: number;
	/** The recipient address of the transaction. */
	to: string;
	/**
	 * The type of the transaction (optional).
	 * @format double
	 */
	type?: number;
	/** The value to be transferred in the transaction. */
	value: string;
}

/** Construct a type with a set of properties K of type T */
export interface RecordStringAny {
	/** The error message. */
	message: string;
}

/** Construct a type with a set of properties K of type T */
export type RecordStringString = object;

export type RefundEth2Data = UniswapV3APIResponseUniswapV3ExecuteFunctionResult;

export type RefundEthData =
	UniswapV3NFTAPIResponseUniswapV3ExecuteFunctionResult;

export type RemoveLiquidityData =
	RamsesRouterAPIResponseRamsesRouterExecuteFunctionResult;

export type RemoveLiquidityEthData =
	RamsesRouterAPIResponseRamsesRouterExecuteFunctionResult;

export type RemoveLiquidityEthResult =
	UniswapV2APIResponseUniswapV2ExecuteFunctionResult;

export type RemoveLiquidityEthSupportingFeeOnTransferTokensData =
	UniswapV2APIResponseUniswapV2ExecuteFunctionResult;

export type RemoveLiquidityEthWithPermitData =
	UniswapV2APIResponseUniswapV2ExecuteFunctionResult;

export type RemoveLiquidityEthWithPermitSupportingFeeOnTransferTokensData =
	UniswapV2APIResponseUniswapV2ExecuteFunctionResult;

export type RemoveLiquidityResult =
	UniswapV2APIResponseUniswapV2ExecuteFunctionResult;

export type RemoveLiquidityWithPermitData =
	UniswapV2APIResponseUniswapV2ExecuteFunctionResult;

export type ResetData = LynexVoterAPIResponseLynexVoterExecuteFunctionResult;

export type ResetOutput =
	VeTheNftVoterAPIResponseVeTheNftVoterExecuteFunctionResult;

export type ResetResult =
	RamsesVoterAPIResponseRamsesVoterExecuteFunctionResult;

export type RestartBotData = string;

export type ReviveGaugeData =
	LynexVoterAPIResponseLynexVoterExecuteFunctionResult;

export type ReviveGaugeOutput =
	VeTheNftVoterAPIResponseVeTheNftVoterExecuteFunctionResult;

export type ReviveGaugeResult =
	RamsesVoterAPIResponseRamsesVoterExecuteFunctionResult;

/** Interface representing the reward information for a token. */
export interface RewardInfo {
	/** The timestamp when the emission ends. */
	emissionEndTimestamp: BigNumber;
	/** The emission rate of the reward token per second. */
	emissionPerSecond: BigNumber;
	/** The timestamp of the last update to the incentives. */
	incentivesLastUpdateTimestamp: BigNumber;
	/**
	 * The precision of the reward token.
	 * @format double
	 */
	precision: number;
	/**
	 * The number of decimals of the price feed.
	 * @format double
	 */
	priceFeedDecimals: number;
	/** The address of the reward oracle. */
	rewardOracleAddress: string;
	/** The price feed of the reward token. */
	rewardPriceFeed: BigNumber;
	/** The address of the reward token. */
	rewardTokenAddress: string;
	/**
	 * The number of decimals of the reward token.
	 * @format double
	 */
	rewardTokenDecimals: number;
	/** The symbol of the reward token. */
	rewardTokenSymbol: string;
	/** The index of the token incentives. */
	tokenIncentivesIndex: BigNumber;
}

export interface RippleAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The data associated with the Ripple response. */
	data?: RippleTransactionOutput;
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

/** Represents the input data required for Ripple transactions. */
export interface RippleInput {
	/** The network on which the transaction will be executed. This is optional. */
	network?: string;
	/** The private key used for signing the transaction. This is optional. */
	private_key?: string;
}

/** Represents the input data for a Ripple transaction. */
export interface RippleTransactionInput {
	/** Indicates whether to compress the public key. */
	compress?: boolean;
	/** The network on which the transaction is taking place. */
	network?: string;
	/** The recipient address of the transaction. */
	to?: string;
	/**
	 * The amount to be sent.
	 * @format double
	 */
	value?: number;
}

/** Represents the output of a Ripple transaction. */
export interface RippleTransactionOutput {
	/** The signed transaction. */
	signedTx?: string;
	/** The transaction hash. */
	transaction_hash?: string;
}

export interface SRC20InscriptionInput {
	/** The output index of the input being used. */
	address: string;
	/**
	 * The amount of tokens involved in the transaction.
	 * @format double
	 */
	commit_fee_rate: number;
	/** The ticker symbol of the token involved in the transaction. */
	inscription_data: string;
	/** The network on which the transaction is taking place. */
	network: string;
	/** The operation type of the transaction. */
	prev_outputs: string;
	/**
	 * The transaction ID of the input being used.
	 * @format double
	 */
	reveal_out_value: number;
}

/** Represents the output of an SRC20 inscription. */
export interface SRC20InscriptionOutput {
	/** the json string of the inscription transaction */
	transactions: string;
}

export type SafeTransferFromData =
	LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type SafeTransferFromResult =
	VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export interface ScheduleJobBody {
	jobId: string;
	schedule: string;
}

export type ScheduleJobData = MultiCallAPIResponse;

/** Represents a filter to be applied in a search query. */
export interface SearchFilter {
	/** The name of the field to filter on. */
	field: string;
	/** The operator to use for comparison. */
	operator: SearchFilterOperatorEnum;
	/**
	 * The value to compare the field against.
	 * @format double
	 */
	value: number;
}

/** The operator to use for comparison. */
export enum SearchFilterOperatorEnum {
	Eq = "eq",
	Gt = "gt",
	Gte = "gte",
	Lt = "lt",
	Lte = "lte",
}

/** Represents the response of the `searchFinancials` endpoint. */
export interface SearchFinancialsAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The search results. */
	data?: SearchResult[];
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

/** Represents a request to search for financial datasets. */
export interface SearchRequest {
	/** The currency in which the financial data is denominated. */
	currency?: SearchRequestCurrencyEnum;
	/** An array of filters to apply to the search. */
	filters: SearchFilter[];
	/**
	 * The maximum number of results to return.
	 * @format double
	 */
	limit?: number;
	/** The field by which to order the results. */
	order_by?: SearchRequestOrderByEnum;
	/** The reporting period for the financial data. */
	period?: SearchRequestPeriodEnum;
}

/** The currency in which the financial data is denominated. */
export enum SearchRequestCurrencyEnum {
	USD = "USD",
	EUR = "EUR",
	GBP = "GBP",
	JPY = "JPY",
	CHF = "CHF",
	AUD = "AUD",
	CAD = "CAD",
	SEK = "SEK",
}

/** The field by which to order the results. */
export enum SearchRequestOrderByEnum {
	Ticker = "ticker",
	ValueTicker = "-ticker",
	ReportPeriod = "report_period",
	ValueReportPeriod = "-report_period",
}

/** The reporting period for the financial data. */
export enum SearchRequestPeriodEnum {
	Annual = "annual",
	Quarterly = "quarterly",
	Ttm = "ttm",
}

/** Represents a financial dataset search result. */
export interface SearchResult {
	/** The currency in which the financial data is denominated. */
	currency: string;
	/** The currency in which the financial data is denominated. */
	period: string;
	/** The reporting period of the financial data. */
	report_period: string;
	/** The stock ticker symbol of the company. */
	ticker: string;
	[key: string]: any;
}

/** Represents the segmented revenue data for a specific company. */
export interface SegmentedRevenue {
	/** An array of segmented revenue items. */
	items: SegmentedRevenueItem[];
	/** The type of reporting period, either annual or quarterly. */
	period: SegmentedRevenuePeriodEnum;
	/** The reporting period for the revenue data. */
	report_period: string;
	/** The stock ticker symbol of the company. */
	ticker: string;
}

/** Represents an item of segmented revenue data. */
export interface SegmentedRevenueItem {
	/** The axis of the revenue data. */
	axis: string;
	/** The end period of the revenue data (optional). */
	end_period?: string;
	/** The key associated with the revenue data. */
	key: string;
	/** The segment of the revenue data. */
	segment: string;
	/** The start period of the revenue data (optional). */
	start_period?: string;
	/**
	 * The value of the revenue data.
	 * @format double
	 */
	value: number;
}

/** The type of reporting period, either annual or quarterly. */
export enum SegmentedRevenuePeriodEnum {
	Annual = "annual",
	Quarterly = "quarterly",
}

/** Represents the response of the `getSegmentedRevenues` endpoint. */
export interface SegmentedRevenuesAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The segmented revenue data */
	data?: SegmentedRevenue[];
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

export type SelfPermitAllowedData =
	UniswapV3APIResponseUniswapV3ExecuteFunctionResult;

export type SelfPermitAllowedIfNecessaryData =
	UniswapV3APIResponseUniswapV3ExecuteFunctionResult;

export type SelfPermitData = UniswapV3APIResponseUniswapV3ExecuteFunctionResult;

export type SelfPermitIfNecessaryData =
	UniswapV3APIResponseUniswapV3ExecuteFunctionResult;

/** Represents a quote for selling cryptocurrency. */
export interface SellQuote {
	/**
	 * The fee charged by the network for the transaction.
	 * @format double
	 */
	networkFee: number;
	/** The method of payment used for the transaction. */
	paymentMethod: string;
	/**
	 * The amount to be paid out after fees.
	 * @format double
	 */
	payout: number;
	/** The unique identifier for the quote. */
	quoteId: string;
	/** The ramp service used for the transaction. */
	ramp: string;
	/**
	 * The exchange rate for the cryptocurrency.
	 * @format double
	 */
	rate: number;
	/** A list of recommendations related to the quote. */
	recommendations: string[];
	/**
	 * The fee charged for processing the transaction.
	 * @format double
	 */
	transactionFee: number;
}

/** Represents an array of SellQuote objects. */
export type SellQuotes = SellQuote[];

export type SetApprovalForAllData =
	LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type SetApprovalForAllOutput =
	VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export type SetApprovalForAllResult =
	UniswapV3NFTAPIResponseUniswapV3ExecuteFunctionResult;

export type SetClaimApprovalData =
	LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type SetClaimApprovalForAllData =
	LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export enum Side {
	BUY = "BUY",
	SELL = "SELL",
}

export type SignEosTransactionData = EosAPIResponse;

/** Represents a message to be signed. */
export interface SignMessage {
	/** The ID of the blockchain network. */
	chain_id?: string;
	/** The data to be signed. */
	data: string;
	/** The encoding format of the data. */
	encoding?: string;
	/** Indicates if the message includes a header. */
	header?: boolean;
	/** The name associated with the message. */
	name?: string;
	/** Indicates if the message includes a signature type. */
	signtype?: boolean;
}

/**
 * Interface representing the response from the Sign Message API.
 * Extends the BaseAPIResponse interface.
 */
export interface SignMessageAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The transaction data. */
	data?: TransactionData;
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

export type SignRippleTransactionData = RippleAPIResponse;

export type SignSolanaTransactionData = SolanaAPIResponse;

/** Interface representing the structure for signing typed data. */
export interface SignTypedData {
	/** The optional chain ID associated with the data. */
	chain_id?: string;
	/** The data to be signed. */
	data: string;
}

/**
 * Represents an asset change from a call to
 * {@link TransactNamespace.simulateAssetChanges }.
 */
export interface SimulateAssetChangesChange {
	/**
	 * The amount as an integer string. This value is calculated by applying the
	 * `decimals` field to the `rawAmount` field. Only available on TRANSFER
	 * changes for NATIVE and ERC20 assets, or ERC721/ERC1155 disapprove changes
	 * (field set to '0').
	 */
	amount?: string;
	/** The type of asset from the transaction. */
	assetType: SimulateAssetType;
	/** The type of change from the transaction. */
	changeType: SimulateChangeType;
	/**
	 * The contract address of the asset. Only applicable to ERC20, ERC721,
	 * ERC1155, NFT and SPECIAL_NFT transactions.
	 */
	contractAddress?: string;
	/**
	 * The number of decimals used by the ERC20 token. Set to 0 for APPROVE
	 * changes. Field is undefined if it's not defined in the contract and not
	 * available from other sources.
	 * @format double
	 */
	decimals?: number;
	/** The from address. */
	from: string;
	/** URL for the logo of the asset, if available. Only applicable to ERC20 transactions. */
	logo?: string;
	/** The name of the asset transferred, if available. */
	name?: string;
	/**
	 * The raw amount as an integer string. Only available on TRANSFER changes for
	 * NATIVE and ERC20 assets, or ERC721/ERC1155 disapprove changes (field set to
	 * '0').
	 */
	rawAmount?: string;
	/** The symbol of the asset transferred if available. */
	symbol?: string;
	/** The to address. */
	to: string;
	/**
	 * The token id of the asset transferred. Only applicable to ERC721,
	 * ERC1155 and SPECIAL_NFT NFTs.
	 */
	tokenId?: string;
}

/**
 * The error field returned in a {@link SimulateAssetChangesResponse} if the
 * simulation failed.
 */
export interface SimulateAssetChangesError {
	/** The error message. */
	message: string;
}

/** Response object for the {@link TransactNamespace.simulateAssetChanges } method. */
export interface SimulateAssetChangesResponse {
	/** An array of asset changes that resulted from the transaction. */
	changes: SimulateAssetChangesChange[];
	/** Optional error field that is present if an error occurred. */
	error?: SimulateAssetChangesError;
	/**
	 * The amount of gas used by the transaction represented as a hex string. The
	 * field is undefined if an error occurred.
	 */
	gasUsed?: string;
}

/**
 * Asset type returned when calling {@link TransactNamespace.simulateAssetChanges }.
 * Allows you to determine if the assets approved or / and transferred are
 * native, tokens or NFTs.
 */
export enum SimulateAssetType {
	NATIVE = "NATIVE",
	ERC20 = "ERC20",
	ERC721 = "ERC721",
	ERC1155 = "ERC1155",
	SPECIAL_NFT = "SPECIAL_NFT",
}

/** Change type returned when calling {@link TransactNamespace.simulateAssetChanges }. */
export enum SimulateChangeType {
	APPROVE = "APPROVE",
	TRANSFER = "TRANSFER",
}

export interface SolanaAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The data associated with the Solana response. */
	data?: SolanaTransactionOutput;
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

/** Represents the input parameters required for a Solana transaction. */
export interface SolanaInput {
	/** The network on which the transaction is taking place. */
	network?: string;
	/** The private key of the account. */
	private_key?: string;
}

/** Represents the input required to sign a Solana transaction. */
export interface SolanaSignTransactionInput {
	/** The network on which the transaction is taking place. */
	network?: string;
	/** The transaction to be signed. */
	unsigned_tx: string;
}

/** Represents the input data required for a Solana transaction. */
export interface SolanaTransactionInput {
	/** Indicates whether the transaction data should be compressed. */
	compress?: boolean;
	/** The network on which the transaction is to be executed. */
	network?: string;
	/** The recipient address of the transaction. */
	to?: string;
	/**
	 * The amount of value to be transferred in the transaction.
	 * @format double
	 */
	value?: number;
}

/** Represents the output of a Solana transaction. */
export interface SolanaTransactionOutput {
	/** The signed transaction. */
	signedTx?: string;
	/** The transaction hash. */
	transaction_hash?: string;
}

export type SortTokensData = RamsesRouterAPIResponseSortedTokens;

export interface SortTokensParams {
	address: string;
	chainId: string;
	tokenA: string;
	tokenB: string;
}

export interface SortedTokens {
	token0: string;
	token1: string;
}

export type SplitData = LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type SplitOutput = VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export type SplitResult = RamsesNFTAPIResponseRamsesNFTExecuteFunctionResult;

export type StartBotData = string;

export interface StatusResponse {
	receiving: TransactionStatus;
	sending: TransactionStatus;
	status: string;
	substatus: string;
	tool: string;
}

export interface Step {
	action: Action;
	estimate: Estimate;
	id: string;
	tool: string;
	type: string;
}

export type StopBotData = string;

export type SuccessResponse249 = {
	address: string;
	address_label?: string | null;
	block_number?: string;
	created_at: string;
	/** @example 18 */
	decimals: string;
	logo?: string | null;
	logo_hash?: string | null;
	name: string;
	/** @example false */
	possible_spam: boolean;
	symbol: string;
	thumbnail?: string | null;
	/** @format double */
	validated?: number;
	/** @example false */
	verified_contract?: boolean;
}[];

/** Represents the response structure for supported assets. */
export interface SupportedAssetResponse {
	/** An array of objects representing the supported assets. */
	assets: {
		/** An array of supported cryptocurrencies. */
		crypto: string[];
		/** The fiat currency code. */
		fiat: string;
		/** An array of supported payment methods. */
		paymentMethods: string[];
	}[];
	/** The country code where the assets are supported. */
	country: string;
}

/** Represents the response containing supported currencies. */
export interface SupportedCurrenciesResponse {
	/** The message containing arrays of cryptocurrencies and fiat currencies. */
	message: Message;
}

/** Represents the response structure for supported default values. */
export interface SupportedDefaultResponse {
	/** The default transaction details. */
	defaults: {
		/** The unique identifier for the transaction. */
		id: {
			/**
			 * The amount involved in the transaction.
			 * @format double
			 */
			amount: number;
			/** The payment method used for the transaction. */
			paymentMethod: string;
			/** The provider of the transaction. */
			provider: string;
			/** The source of the transaction. */
			source: string;
			/** The destination of the transaction. */
			target: string;
		};
	};
	/** The recommended transaction details. */
	recommended: {
		/**
		 * The amount involved in the transaction.
		 * @format double
		 */
		amount: number;
		/** The payment method used for the transaction. */
		paymentMethod: string;
		/** The provider of the transaction. */
		provider: string;
		/** The unique identifier for the transaction. */
		source: string;
		/** The destination of the transaction. */
		target: string;
	};
}

/** Represents the response containing supported payment types and their associated message. */
export interface SupportedPaymentTypesCurrencyResponse {
	/** The message containing supported payment types. */
	message: SupportedPaymentTypesMessage;
}

/** Represents a message containing supported payment types. */
export interface SupportedPaymentTypesMessage {
	/** The payment type for Apple Pay. */
	applepay: PaymentType;
	/** The payment type for credit cards. */
	creditcard: PaymentType;
	/** The payment type for Google Pay. */
	googlepay: PaymentType;
}

export type SupportsInterfaceData = UniswapV3NFTAPIResponseBoolean;

export interface SupportsInterfaceParams {
	address: string;
	chainId: string;
	interfaceId: string;
}

export type SwapData = ThorSwapAPIResponseString;

export type SwapEthForExactTokensData =
	UniswapV2APIResponseUniswapV2ExecuteFunctionResult;

export type SwapExactEthForTokensData =
	LynexRouterAPIResponseLynexRouterExecuteFunctionResult;

export type SwapExactEthForTokensOutput =
	UniswapV2APIResponseUniswapV2ExecuteFunctionResult;

export type SwapExactEthForTokensResult =
	RamsesRouterAPIResponseRamsesRouterExecuteFunctionResult;

export type SwapExactEthForTokensSupportingFeeOnTransferTokensData =
	UniswapV2APIResponseUniswapV2ExecuteFunctionResult;

export type SwapExactTokensForEthData =
	LynexRouterAPIResponseLynexRouterExecuteFunctionResult;

export type SwapExactTokensForEthOutput =
	UniswapV2APIResponseUniswapV2ExecuteFunctionResult;

export type SwapExactTokensForEthResult =
	RamsesRouterAPIResponseRamsesRouterExecuteFunctionResult;

export type SwapExactTokensForEthSupportingFeeOnTransferTokensData =
	UniswapV2APIResponseUniswapV2ExecuteFunctionResult;

export type SwapExactTokensForTokensData =
	LynexRouterAPIResponseLynexRouterExecuteFunctionResult;

export type SwapExactTokensForTokensOutput =
	UniswapV2APIResponseUniswapV2ExecuteFunctionResult;

export type SwapExactTokensForTokensResult =
	RamsesRouterAPIResponseRamsesRouterExecuteFunctionResult;

export type SwapExactTokensForTokensSupportingFeeOnTransferTokensData =
	UniswapV2APIResponseUniswapV2ExecuteFunctionResult;

export interface SwapPayload {
	accountName: string;
	/** @format double */
	amount: number;
	chainId: string;
	fromAsset: string;
	provider?: string;
	recipientAddress: string;
	senderAddress: string;
	toAsset: string;
}

export type SwapTokensForExactEthData =
	UniswapV2APIResponseUniswapV2ExecuteFunctionResult;

export type SwapTokensForExactTokensData =
	UniswapV2APIResponseUniswapV2ExecuteFunctionResult;

export type SweepToken2Data =
	UniswapV3APIResponseUniswapV3ExecuteFunctionResult;

export type SweepTokenData =
	UniswapV3NFTAPIResponseUniswapV3ExecuteFunctionResult;

export type SweepTokenWithFeeData =
	UniswapV3APIResponseUniswapV3ExecuteFunctionResult;

export type SymbolData = UniswapV3NFTAPIResponseString;

export interface SymbolParams {
	address: string;
	chainId: string;
}

export interface ThenaAPIResponse {
	data?: any;
	message: string;
	success: boolean;
}

export interface ThorSwapAPIResponseGasPrice {
	/** Represents the gas price information for a specific blockchain. */
	data?: GasPrice;
	message: string;
	success: boolean;
}

export interface ThorSwapAPIResponseQuote {
	data?: Quote;
	message: string;
	success: boolean;
}

export interface ThorSwapAPIResponseString {
	data?: string;
	message: string;
	success: boolean;
}

export interface ThorSwapAPIResponseStringArray {
	data?: string[];
	message: string;
	success: boolean;
}

export enum TimeFrame {
	Value5M = "5m",
	Value8H = "8h",
}

export interface Token {
	address: string;
	/** @format double */
	chainId: number;
	/** @format double */
	decimals: number;
	logoURI: string;
	name: string;
	symbol: string;
}

/** Represents an amount of a specific token. */
export interface TokenAmount {
	/** The amount of the token. */
	amount: string;
	/** The address of the token. */
	tokenAddress: string;
}

export interface TokenAnalytics {
	/** @format double */
	holders: number;
	/** @format double */
	marketCap: number;
	/** @format double */
	price: number;
	/** @format double */
	socialEngagement: number;
	/** @format double */
	volume: number;
}

export interface TokenAnalyticsAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	data?: TokenAnalytics;
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

export type TokenByIndexData = UniswapV3NFTAPIResponseString;

export interface TokenByIndexParams {
	address: string;
	chainId: string;
	/** @format double */
	index: number;
}

export interface TokenConfig {
	stablecoin: Token;
	tradeTokens: Token[];
}

export interface TokenDetails {
	address: string;
	/** @format double */
	chainId: number;
	coinKey: string;
	/** @format double */
	decimals: number;
	logoURI: string;
	name: string;
	priceUSD: string;
	symbol: string;
}

export interface TokenInfo {
	address: string;
	/** @format double */
	decimals: number;
	logoURI?: string;
	name: string;
	symbol: string;
}

/** Interface representing token information by chain ID. */
export type TokenInfoByChainId = Record<string, TokenInfo[]>;

/** Represents the response from the Token Metadata API. */
export interface TokenMetadataAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The token metadata information. */
	data?: GetTokenMetadataJSONResponse;
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

export type TokenOfOwnerByIndexData = UniswapV3NFTAPIResponseString;

export interface TokenOfOwnerByIndexParams {
	address: string;
	chainId: string;
	/** @format double */
	index: number;
	owner: string;
}

/** Represents the proportion of a specific token. */
export interface TokenProportion {
	/**
	 * The proportion of the token, typically represented as a percentage or a fraction.
	 * @format double
	 */
	proportion: number;
	/** The address of the token. */
	tokenAddress: string;
}

export type TokenUriData = UniswapV3NFTAPIResponseString;

export interface TokenUriParams {
	address: string;
	chainId: string;
	/** @format double */
	tokenId: number;
}

export interface TokensResponse {
	tokens: Record<string, Token[]>;
}

export interface ToolsResponse {
	bridges: Bridge[];
	exchanges: Exchange[];
}

export type TotalSupplyData = UniswapV3NFTAPIResponseString;

export interface TotalSupplyParams {
	address: string;
	chainId: string;
}

export interface Trade {
	asset_id: string;
	/** @format double */
	bucket_index: number;
	fee_rate_bps: string;
	id: string;
	last_update: string;
	maker_address: string;
	maker_orders: MakerOrder[];
	market: string;
	match_time: string;
	outcome: string;
	owner: string;
	price: string;
	side: number | string;
	size: string;
	status: string;
	taker_order_id: string;
	trader_side: TradeTraderSideEnum;
	transaction_hash: string;
}

export enum TradeTraderSideEnum {
	TAKER = "TAKER",
	MAKER = "MAKER",
}

/** Represents a transaction with various optional properties. */
export interface Transaction {
	/** The response after broadcasting the raw transaction. */
	broadcasted?: BroadCastRawTransactionResponse;
	/**
	 * Additional data related to the transaction.
	 * Replace with the actual type if known.
	 */
	data?: string | null;
	/** A message related to the transaction. */
	message?: string;
	/** The URL to the transaction on MoonScan. */
	moon_scan_url?: string;
	/** The raw transaction data. */
	raw_transaction?: string;
	/** The signature of the transaction. */
	signature?: string;
	/** The signed transaction data. */
	signed_transaction?: string;
	/** The simulation response of asset changes. */
	simulation?: SimulateAssetChangesResponse;
	/** Indicates whether the transaction was successful. */
	success?: boolean;
	/** The transaction details. */
	transaction?: Tx;
	/** The hash of the transaction. */
	transaction_hash?: string;
	/** An array of transaction data. */
	transactions?: TransactionData[];
	/** An array of user operation requests. */
	userOps?: TransactionRequest[];
	/** The user operation data. */
	user_op?: string;
	/** The user operation transaction data. */
	userop_transaction?: string;
}

/**
 * Interface representing the response from the Transaction API.
 * Extends the BaseAPIResponse interface.
 */
export interface TransactionAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The response from broadcasting the raw transaction. */
	broadcasted?: BroadCastRawTransactionResponse;
	/** The transaction data. */
	data?: Transaction;
	/** The function name associated with the transaction. */
	function?: string;
	/** The message associated with the operation. */
	message: string;
	/** The parameters associated with the transaction function. */
	params?: any[];
	/** The signed transaction data. */
	signedTx?: any;
	/** The success status of the operation. */
	success: boolean;
	/** Additional transaction information. */
	transaction?: any;
	/** The hash of the transaction. */
	transaction_hash?: any;
}

/** Represents the data associated with a transaction. */
export interface TransactionData {
	/** The URL to view the transaction on MoonScan. */
	moon_scan_url?: string;
	/** The raw transaction data. */
	raw_transaction?: string;
	/** The signature of the transaction. */
	signature?: string;
	/** The signed message associated with the transaction. */
	signed_message?: string;
	/** The signed transaction data. */
	signed_transaction: string;
	/** The transaction details. */
	transaction?: Tx;
	/** The hash of the transaction. */
	transaction_hash: string;
	/** The list of user operations associated with the transaction. */
	userOps?: TransactionRequest[];
	/** The user operation transaction data. */
	userop_transaction?: string;
}

/** Represents the input for a transaction in the OnRamper system. */
export interface TransactionInput {
	/**
	 * The amount involved in the transaction.
	 * @format double
	 */
	amount: number;
	/** The destination of the transaction. */
	destination: string;
	/** Additional metadata for the transaction. */
	metaData: {
		/** The quote ID associated with the transaction. */
		quoteId: string;
	};
	/** The network used for the transaction. */
	network: string;
	/** The onramp service used for the transaction. */
	onramp: string;
	/** The originating host of the transaction. */
	originatingHost: string;
	/** The context provided by the partner. */
	partnerContext: string;
	/** The payment method used for the transaction. */
	paymentMethod: string;
	/** The source of the transaction. */
	source: string;
	/** Supported parameters for the transaction. */
	supportedParams: {
		/** Partner-specific data for the transaction. */
		partnerData: {
			/** Redirect URLs for the transaction. */
			redirectUrl: {
				/** The URL to redirect to upon successful transaction. */
				success: string;
			};
		};
		/** Theme settings for the transaction. */
		theme: {
			/**
			 * The border radius of the theme.
			 * @format double
			 */
			borderRadius: number | null;
			/** The card color of the theme. */
			cardColor: string;
			/** Indicates if the theme is dark. */
			isDark: boolean;
			/** The primary color of the theme. */
			primaryColor: string;
			/** The primary text color of the theme. */
			primaryTextColor: string;
			/** The secondary color of the theme. */
			secondaryColor: string;
			/** The secondary text color of the theme. */
			secondaryTextColor: string;
			/** The name of the theme. */
			themeName: string;
		};
	};
	/** The type of transaction. */
	type: string;
	/** The unique identifier for the transaction. */
	uuid: string;
	/** The wallet information for the transaction. */
	wallet: {
		/** The wallet address involved in the transaction. */
		address: string;
	};
}

/** Represents a request to perform a transaction. */
export interface TransactionRequest {
	/** The data to be sent with the transaction. */
	data?: string;
	/** The address from which the transaction is sent. */
	from?: string;
	/** The maximum fee per gas unit that the sender is willing to pay. */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas unit that the sender is willing to pay. */
	maxPriorityFeePerGas?: string;
	/** A unique identifier for the transaction. */
	nonce?: string;
	/** The address to which the transaction is directed. */
	to?: string;
	/** The amount of value to be transferred. */
	value?: string;
}

export interface TransactionStatus {
	amount: string;
	/** @format double */
	chainId: number;
	gasPrice: string;
	gasUsed: string;
	token: TokenInfo;
	txHash: string;
	txLink: string;
}

export type TransferFromData = LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type TransferFromOutput =
	UniswapV3NFTAPIResponseUniswapV3ExecuteFunctionResult;

export type TransferFromResult =
	RamsesNFTAPIResponseRamsesNFTExecuteFunctionResult;

export type TransferFromResult1 = VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export type TransferSolanaTransactionData = SolanaAPIResponse;

export type TransferTokensSignSolanaTransactionData = SolanaAPIResponse;

export interface TrendingToken {
	id: string;
	name: string;
	/** @format double */
	price: number;
	/** @format double */
	priceChange: number;
	/** @format double */
	socialScore: number;
	symbol: string;
}

export interface TrendingTokensAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	data?: TrendingToken[];
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

export interface TrendingTweet {
	/** @format double */
	engagement: number;
	id: string;
	/** @format double */
	likes: number;
	/** @format double */
	reach: number;
	/** @format double */
	retweets: number;
	text: string;
}

export interface TrendingTweetsAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	data?: TrendingTweet[];
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

export type TriggerBotData = string;

export interface TronAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The data associated with the Tron response. */
	data?: TronTransactionOutput;
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

export type TronCreateTronAccountData = AccountAPIResponse;

export type TronDeleteTronAccountData = AccountAPIResponse;

export type TronExportTronAccountData = AccountAPIResponse;

export type TronGetTronAccountData = AccountAPIResponse;

/** Represents the input data required for Tron network operations. */
export interface TronInput {
	/** The network on which the transaction is taking place. */
	network?: string;
	/** The private key of the account. */
	private_key?: string;
}

export type TronListTronAccountsData = AccountAPIResponse;

export type TronSignTronTransactionData = TronAPIResponse;

/** Represents an input for a Tron transaction. */
export interface TronTransactionInput {
	/** Indicates whether to compress the public key. */
	compress?: boolean;
	/** The network on which the transaction is taking place. */
	network?: string;
	/** The recipient address of the transaction. */
	to?: string;
	/**
	 * The amount to be sent.
	 * @format double
	 */
	value?: number;
}

/** Represents the output of a Tron transaction. */
export interface TronTransactionOutput {
	/** The signed transaction. */
	signedTx?: string;
	/** The transaction hash. */
	transaction_hash?: string;
}

export type TweetHistoryData = BotConfigType;

/** Represents a transaction object. */
export interface Tx {
	/** The gas used for blob transactions. */
	blob_gas?: string | null;
	/** The gas fee cap for blob transactions. */
	blob_gas_fee_cap?: string | null;
	/** The hashes of the blobs included in the transaction. */
	blob_hashes?: string[] | null;
	/**
	 * The chain ID of the blockchain network.
	 * @format double
	 */
	chain_id?: number;
	/** The data payload of the transaction. */
	data?: string;
	/** The address of the sender. */
	from?: string;
	/** The gas limit for the transaction. */
	gas?: string;
	/** The gas fee cap for the transaction, used in EIP-1559 transactions. */
	gas_fee_cap?: string | null;
	/** The gas price for the transaction. */
	gas_price?: string;
	/** The gas tip cap for the transaction, used in EIP-1559 transactions. */
	gas_tip_cap?: string | null;
	/**
	 * The nonce of the transaction.
	 * @format double
	 */
	nonce?: number;
	/** The signature r value of the transaction. */
	r?: string;
	/** The signature s value of the transaction. */
	s?: string;
	/** The address of the recipient. */
	to?: string | null;
	/**
	 * The type of the transaction.
	 * @format double
	 */
	type?: number;
	/** The recovery id of the transaction. */
	v?: string;
	/** The value to be transferred in the transaction. */
	value?: string;
}

export interface UniswapV2APIResponseUniswapV2ExecuteFunctionResult {
	/** Represents the result of executing a UniswapV2 function. */
	data?: UniswapV2ExecuteFunctionResult;
	message: string;
	success: boolean;
}

/** Represents the result of executing a UniswapV2 function. */
export interface UniswapV2ExecuteFunctionResult {
	/** The broadcasted transaction. */
	broadcasted?: BroadCastRawTransactionResponse;
	/** The data returned by the API. */
	data?: Transaction;
	/** The name of the function executed. */
	function: string;
	/** The broadcasted result of the transaction. */
	message?: string;
	/** The parameters passed to the function. */
	params: any[];
	/** The simulation data. */
	simulation?: SimulateAssetChangesResponse;
	/** The message returned by the API. */
	success?: boolean;
	/** The UniswapV2 transaction. */
	transaction: UniswapV2Transaction;
	/** Indicates whether the function was successful. */
	user_op?: string;
}

/** Represents the input body for a UniswapV2 transaction. */
export interface UniswapV2InputBody {
	/** The address of the token to swap. */
	EOA?: boolean;
	/** The access list for the transaction. */
	accessList?: AccessTuple[];
	/** The account involved in the transaction. */
	account?: string;
	/** The address of the token to swap. */
	alwaysIncrementNonce?: boolean;
	/** The address of the token to swap. */
	amount?: string;
	/** The address of the token to swap. */
	amountA?: string;
	/** The address of the token to swap. */
	amountADesired?: string;
	/** The address of the token to swap. */
	amountAMin?: string;
	/** The address of the token to swap. */
	amountBDesired?: string;
	/** The address of the token to swap. */
	amountBMin?: string;
	/** The address of the token to swap. */
	amountETHMin?: string;
	/** The address of the token to swap. */
	amountIn?: string;
	/** The address of the token to swap. */
	amountInMax?: string;
	/** The address of the token to swap. */
	amountOut?: string;
	/** The address of the token to swap. */
	amountOutMin?: string;
	/** The address of the token to swap. */
	amountTokenDesired?: string;
	/** The address of the token to swap. */
	amountTokenMin?: string;
	/** The amounts involved in the transaction. */
	amounts?: string[];
	/** The address of the token to swap. */
	approveMax?: boolean;
	/** Whether the transaction is approved. */
	approved?: boolean;
	/** The asset involved in the transaction. */
	asset?: string;
	/** The assets involved in the transaction. */
	assets?: string[];
	/** The gas for blob transactions. */
	blobGas?: string;
	/** The gas fee cap for blob transactions. */
	blobGasFeeCap?: string;
	/** The hashes for blob transactions. */
	blobHashes?: string[];
	/** The borrow amount. */
	borrowAmount?: string | number;
	/** The address of the token to swap. */
	broadcast?: boolean;
	/** The chain ID. */
	chain_id?: string;
	/** The collateral asset. */
	collateralAsset?: string;
	/** The address of the token to swap. */
	contract_address?: string;
	/** The address of the token to swap. */
	data?: string;
	/** The address of the token to swap. */
	deadline?: string;
	/** The debt asset. */
	debtAsset?: string;
	/** The debt to cover. */
	debtToCover?: string;
	/** The address of the token to swap. */
	dryrun?: boolean;
	/** The encoding type. */
	encoding?: string;
	/** The address of the token to swap. */
	gas?: string;
	/** The address of the token to swap. */
	gasLimit?: string;
	/** The address of the token to swap. */
	gasPrice?: string;
	/** The initial deposit. */
	initialDeposit?: string | number;
	/** The initiator of the transaction. */
	initiator?: string;
	/** The input data. */
	input?: string;
	/** The input tokens. */
	inputTokens?: TokenAmount[];
	/**
	 * The interest rate mode.
	 * @format double
	 */
	interestRateMode?: number;
	/** The address of the token to swap. */
	liquidity?: string;
	/** The maximum fee per gas. */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas. */
	maxPriorityFeePerGas?: string;
	/** The minimum health factor. */
	minHealthFactor?: string | number;
	/** The modes of the transaction. */
	modes?: number[];
	/** The address of the token to swap. */
	nonce?: string;
	/** The address on behalf of which the transaction is made. */
	onBehalfOf?: string;
	/** The output tokens. */
	outputTokens?: TokenProportion[];
	/** Additional parameters. */
	params?: string;
	/** The address of the token to swap. */
	path?: string[];
	/** The premiums. */
	premiums?: string[] | number[];
	/** The address of the token to swap. */
	r?: string;
	/**
	 * The rate mode.
	 * @format double
	 */
	rateMode?: number;
	/** Whether to receive a token. */
	receiveAToken?: boolean;
	/** The receiver address. */
	receiverAddress?: string;
	/**
	 * The referral code.
	 * @format double
	 */
	referralCode?: number;
	/** The address of the token to swap. */
	reserve?: string;
	/** The address of the token to swap. */
	reserveA?: string;
	/** The address of the token to swap. */
	reserveB?: string;
	/** The address of the token to swap. */
	reserveETH?: string;
	/** The address of the token to swap. */
	reserveIn?: string;
	/** The address of the token to swap. */
	reserveOut?: string;
	/** The role of the user. */
	role?: string;
	/** The address of the token to swap. */
	s?: string;
	/** The address of the token to swap. */
	simulate?: boolean;
	/**
	 * The slippage limit percentage.
	 * @format double
	 */
	slippageLimitPercent?: number;
	/** The address of the token to swap. */
	to?: string;
	/** The address of the token to swap. */
	token?: string;
	/** The address of the token to swap. */
	tokenA?: string;
	/** The address of the token to swap. */
	tokenB?: string;
	/** The token ID. */
	token_id?: string;
	/** The token IDs. */
	token_ids?: string;
	/**
	 * The type of transaction.
	 * @format double
	 */
	type?: number;
	/** Whether to use as collateral. */
	useAsCollateral?: boolean;
	/** The user involved in the transaction. */
	user?: string;
	/**
	 * The address of the token to swap.
	 * @format double
	 */
	v?: number;
	/** The address of the token to swap. */
	value?: string;
}

/** Represents a UniswapV2 transaction. */
export interface UniswapV2Transaction {
	/** The chain ID for the transaction. */
	chainId: string;
	/** The data to include in the transaction. */
	data: string;
	/** The address of the sender. */
	from: string;
	/** The gas limit for the transaction. */
	gasLimit?: string;
	/** The gas price for the transaction. */
	gasPrice?: string;
	/** The maximum fee per gas. */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas. */
	maxPriorityFeePerGas?: string;
	/**
	 * The nonce for the transaction.
	 * @format double
	 */
	nonce: number;
	/** The address of the recipient. */
	to: string;
	/**
	 * The type of transaction.
	 * @format double
	 */
	type?: number;
	/** The value to send with the transaction. */
	value: string;
}

export interface UniswapV3APIResponseString {
	data?: string;
	message: string;
	success: boolean;
}

export interface UniswapV3APIResponseUniswapV3ExecuteFunctionResult {
	data?: UniswapV3ExecuteFunctionResult;
	message: string;
	success: boolean;
}

export interface UniswapV3ExecuteFunctionResult {
	/** Optional response indicating whether the transaction was broadcasted. */
	broadcasted?: BroadCastRawTransactionResponse;
	/** Optional transaction data. */
	data?: Transaction;
	/** The name of the executed function. */
	function: string;
	/** Optional message providing additional information about the execution. */
	message?: string;
	/** The parameters passed to the executed function. */
	params: any[];
	/** Optional response containing the simulation of asset changes. */
	simulation?: SimulateAssetChangesResponse;
	/** Indicates whether the function execution was successful. */
	success?: boolean;
	/** The transaction details of the executed function. */
	transaction: UniswapV3Transaction;
	/** Optional user operation identifier. */
	user_op?: string;
}

/**
 * Interface representing the input body for Uniswap V3 operations.
 * Extends the InputBody interface.
 */
export interface UniswapV3InputBody {
	/** The desired amount of token0. */
	amount0Desired?: string;
	/** The maximum amount of token0. */
	amount0Max?: string;
	/** The minimum amount of token0. */
	amount0Min?: string;
	/** The desired amount of token1. */
	amount1Desired?: string;
	/** The maximum amount of token1. */
	amount1Max?: string;
	/** The minimum amount of token1. */
	amount1Min?: string;
	/** The sqrt price of the pool. */
	sqrtPriceX96?: string;
	/** The address of the first token. */
	token0?: string;
	/** The address of the second token. */
	token1?: string;
	/** Indicates if the transaction is from an externally owned account. */
	EOA?: boolean;
	/** The access list for the transaction. */
	accessList?: AccessTuple[];
	/** The account involved in the transaction. */
	account?: string;
	/** Indicates if the nonce should always be incremented. */
	alwaysIncrementNonce?: boolean;
	/** The amount to be transferred. */
	amount?: string;
	/** The minimum amount. */
	amountMinimum?: string;
	/** The amounts involved in the transaction. */
	amounts?: string[];
	/** Indicates if the transaction is approved. */
	approved?: boolean;
	/** The asset involved in the transaction. */
	asset?: string;
	/** The assets involved in the transaction. */
	assets?: string[];
	/** The gas for blob transactions. */
	blobGas?: string;
	/** The gas fee cap for blob transactions. */
	blobGasFeeCap?: string;
	/** The hashes for blob transactions. */
	blobHashes?: string[];
	/** The borrow amount. */
	borrowAmount?: string | number;
	/** Indicates if the transaction should be broadcasted. */
	broadcast?: boolean;
	/** The chain ID. */
	chain_id?: string;
	/** The collateral asset. */
	collateralAsset?: string;
	/** The address of the contract. */
	contract_address?: string;
	/** The data to be sent with the transaction. */
	data?: string;
	/** The deadline for the transaction. */
	deadline?: string;
	/** The debt asset. */
	debtAsset?: string;
	/** The debt to cover. */
	debtToCover?: string;
	/** Indicates if the transaction is a dry run. */
	dryrun?: boolean;
	/** The encoding type. */
	encoding?: string;
	/**
	 * The fee tier of the pool.
	 * @format double
	 */
	fee?: number;
	/** The gas limit for the transaction. */
	gas?: string;
	/** The gas limit for the transaction. */
	gasLimit?: string;
	/** The gas price for the transaction. */
	gasPrice?: string;
	/** The initial deposit. */
	initialDeposit?: string | number;
	/** The initiator of the transaction. */
	initiator?: string;
	/** The input data. */
	input?: string;
	/** The input tokens. */
	inputTokens?: TokenAmount[];
	/**
	 * The interest rate mode.
	 * @format double
	 */
	interestRateMode?: number;
	/** The liquidity of the position. */
	liquidity?: string;
	/** The maximum fee per gas. */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas. */
	maxPriorityFeePerGas?: string;
	/** The minimum health factor. */
	minHealthFactor?: string | number;
	/** The modes of the transaction. */
	modes?: number[];
	/** The nonce of the transaction. */
	nonce?: string;
	/** The address on behalf of which the transaction is made. */
	onBehalfOf?: string;
	/** The operator address. */
	operator?: string;
	/** The output tokens. */
	outputTokens?: TokenProportion[];
	/** Additional parameters. */
	params?: string;
	/** The premiums. */
	premiums?: string[] | number[];
	/** The r value of the signature. */
	r?: string;
	/**
	 * The rate mode.
	 * @format double
	 */
	rateMode?: number;
	/** Whether to receive a token. */
	receiveAToken?: boolean;
	/** The receiver address. */
	receiverAddress?: string;
	/** The recipient address. */
	recipient?: string;
	/**
	 * The referral code.
	 * @format double
	 */
	referralCode?: number;
	/** The role of the user. */
	role?: string;
	/** The s value of the signature. */
	s?: string;
	/** Indicates if the transaction should be simulated. */
	simulate?: boolean;
	/**
	 * The slippage limit percentage.
	 * @format double
	 */
	slippageLimitPercent?: number;
	/** The address of the spender. */
	spender?: string;
	/**
	 * The lower tick of the position.
	 * @format double
	 */
	tickLower?: number;
	/**
	 * The upper tick of the position.
	 * @format double
	 */
	tickUpper?: number;
	/** The recipient address. */
	to?: string;
	/** The address of the token. */
	token?: string;
	/** The ID of the token. */
	tokenId?: string;
	/** The token ID. */
	token_id?: string;
	/** The token IDs. */
	token_ids?: string;
	/**
	 * The type of transaction.
	 * @format double
	 */
	type?: number;
	/** Whether to use as collateral. */
	useAsCollateral?: boolean;
	/** The user involved in the transaction. */
	user?: string;
	/**
	 * The recovery id of the signature.
	 * @format double
	 */
	v?: number;
	/** The value of the transaction. */
	value?: string;
}

export interface UniswapV3NFTAPIResponseAny {
	data?: any;
	message: string;
	success: boolean;
}

export interface UniswapV3NFTAPIResponseBoolean {
	data?: boolean;
	message: string;
	success: boolean;
}

export interface UniswapV3NFTAPIResponseString {
	data?: string;
	message: string;
	success: boolean;
}

export interface UniswapV3NFTAPIResponseUniswapV3ExecuteFunctionResult {
	data?: UniswapV3ExecuteFunctionResult;
	message: string;
	success: boolean;
}

/** Represents a Uniswap V3 transaction. */
export interface UniswapV3Transaction {
	/** The chain ID of the network where the transaction is sent. */
	chainId: string;
	/** The data payload of the transaction. */
	data: string;
	/** The sender address of the transaction. */
	from: string;
	/** The gas limit for the transaction (optional). */
	gasLimit?: string;
	/** The gas price for the transaction, in wei (optional). */
	gasPrice?: string;
	/** The maximum fee per gas for EIP-1559 transactions, in wei (optional). */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas for EIP-1559 transactions, in wei (optional). */
	maxPriorityFeePerGas?: string;
	/**
	 * The nonce of the transaction.
	 * @format double
	 */
	nonce: number;
	/** The recipient address of the transaction. */
	to: string;
	/**
	 * The type of the transaction (optional).
	 * @format double
	 */
	type?: number;
	/** The value to be sent with the transaction, in wei. */
	value: string;
}

export type UnlockPermanentData =
	LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type UnsafeSwapExactTokensForTokensData =
	RamsesRouterAPIResponseRamsesRouterExecuteFunctionResult;

export type UnscheduleJobData = MultiCallAPIResponse;

/** Represents an unsigned Partially Signed Bitcoin Transaction (PSBT) input. */
export interface UnsignedPSBTInput {
	/** The inputs for the transaction as a JSON string of an array of TxInput objects. */
	inputs: string;
	/** The network for the transaction, either 'mainnet' or 'testnet'. */
	network: string;
	/** The outputs for the transaction as a JSON string of an array of TxOutput objects. */
	outputs: string;
}

/** Represents an unsigned Partially Signed Bitcoin Transaction (PSBT) output. */
export interface UnsignedPSBTOutput {
	/** The unsigned PSBT. */
	psbt_hex: string;
}

export type UnwrapWeth92Data =
	UniswapV3APIResponseUniswapV3ExecuteFunctionResult;

export type UnwrapWeth9Data =
	UniswapV3NFTAPIResponseUniswapV3ExecuteFunctionResult;

export type UnwrapWeth9WithFeeData =
	UniswapV3APIResponseUniswapV3ExecuteFunctionResult;

export type UnwrapWethData = OpenSeaAPIResponse;

export interface UnwrapWethPayload {
	amountInEth: string;
	chainId: string;
}

export interface UpdateBalanceAllowanceBody {
	chain_id: string;
	params: {
		asset_type: string;
		token_id?: string;
	};
}

export type UpdateBalanceAllowanceData =
	PolymarketAPIResponseUpdateBalanceAllowanceResponse;

export interface UpdateBalanceAllowanceResponse {
	newAllowance: string;
	success: boolean;
}

export interface UpdateFlowBody {
	description?: string;
	edges?: FlowEdge[];
	name?: string;
	nodes?: FlowNode[];
}

export type UpdateFlowData = MultiCallAPIResponse;

export type UpdatePersonalityData = BotConfigType;

/** Represents the incentive data for a user. */
export interface UserIncentiveData {
	/** The address of the incentive controller. */
	incentiveControllerAddress: string;
	/** The address of the token. */
	tokenAddress: string;
	/** An array of user rewards information. */
	userRewardsInformation: UserRewardInfo[];
}

export interface UserPointHistoryData {
	bias: string;
	blk: string;
	slope: string;
	ts: string;
}

/** Interface representing the data of a user's reserve in the Aave V3 protocol. */
export interface UserReserveData {
	/** The principal stable debt of the user. */
	principalStableDebt: BigNumber;
	/** The scaled balance of the aToken. */
	scaledATokenBalance: BigNumber;
	/** The scaled variable debt of the user. */
	scaledVariableDebt: BigNumber;
	/** The timestamp of the last update to the stable borrow rate. */
	stableBorrowLastUpdateTimestamp: BigNumber;
	/** The stable borrow rate of the user. */
	stableBorrowRate: BigNumber;
	/** The address of the underlying asset. */
	underlyingAsset: string;
	/** Indicates if the asset is being used as collateral by the user. */
	usageAsCollateralEnabledOnUser: boolean;
}

/** Interface representing the incentive data for a user's reserve. */
export interface UserReserveIncentiveData {
	/** Incentive data for the user's aToken. */
	aTokenIncentivesUserData: UserIncentiveData;
	/** Incentive data for the user's sToken. */
	sTokenIncentivesUserData: UserIncentiveData;
	/** The underlying asset associated with the reserve. */
	underlyingAsset: string;
	/** Incentive data for the user's vToken. */
	vTokenIncentivesUserData: UserIncentiveData;
}

/** Interface representing the reward information for a user. */
export interface UserRewardInfo {
	/**
	 * The number of decimals for the price feed.
	 * @format double
	 */
	priceFeedDecimals: number;
	/** The address of the reward oracle. */
	rewardOracleAddress: string;
	/** The price feed of the reward. */
	rewardPriceFeed: BigNumber;
	/** The address of the reward token. */
	rewardTokenAddress: string;
	/**
	 * The number of decimals for the reward token.
	 * @format double
	 */
	rewardTokenDecimals: number;
	/** The symbol of the reward token. */
	rewardTokenSymbol: string;
	/** The user's index for token incentives. */
	tokenIncentivesUserIndex: BigNumber;
	/** The amount of unclaimed rewards for the user. */
	userUnclaimedRewards: BigNumber;
}

/** Represents the result of executing a VeNFT function. */
export interface VeNFTExecuteFunctionResult {
	/** Optional response from broadcasting the raw transaction. */
	broadcasted?: BroadCastRawTransactionResponse;
	/** Optional additional transaction data. */
	data?: Transaction;
	/** The name of the executed function. */
	function: string;
	/** Optional message providing additional information about the execution. */
	message?: string;
	/** The parameters passed to the function. */
	params: any[];
	/** Optional response from simulating asset changes. */
	simulation?: SimulateAssetChangesResponse;
	/** Optional flag indicating if the execution was successful. */
	success?: boolean;
	/** The transaction associated with the function execution. */
	transaction: VeNFTTransaction;
	/** Optional user operation identifier. */
	user_op?: string;
}

/** Interface representing the input body for VeNFT operations. */
export interface VeNFTInputBody {
	/** Indicates whether the transaction is from an externally owned account. */
	EOA?: boolean;
	/** The access list for the transaction. */
	accessList?: AccessTuple[];
	/** The account involved in the transaction. */
	account?: string;
	/** Indicates whether to always increment the nonce. */
	alwaysIncrementNonce?: boolean;
	/** The amount to be transferred. */
	amount?: string;
	/** The amounts involved in the transaction. */
	amounts?: string[];
	/** Indicates whether the transaction is approved. */
	approved?: boolean;
	/** The asset involved in the transaction. */
	asset?: string;
	/** The assets involved in the transaction. */
	assets?: string[];
	/** The gas for blob transactions. */
	blobGas?: string;
	/** The gas fee cap for blob transactions. */
	blobGasFeeCap?: string;
	/** The hashes for blob transactions. */
	blobHashes?: string[];
	/** The borrow amount. */
	borrowAmount?: string | number;
	/** Indicates whether to broadcast the transaction. */
	broadcast?: boolean;
	/** The chain ID. */
	chain_id?: string;
	/** The collateral asset. */
	collateralAsset?: string;
	/** The contract address involved in the transaction. */
	contract_address?: string;
	/** Additional data for the transaction. */
	data?: string;
	/** The debt asset. */
	debtAsset?: string;
	/** The debt to cover. */
	debtToCover?: string;
	/** The delegatee address for the transaction. */
	delegatee?: string;
	/** Indicates whether to perform a dry run of the transaction. */
	dryrun?: boolean;
	/** The encoding type. */
	encoding?: string;
	/** The expiry time for the transaction. */
	expiry?: string;
	/** The gas limit for the transaction. */
	gas?: string;
	/** The gas limit for the transaction. */
	gasLimit?: string;
	/** The gas price for the transaction. */
	gasPrice?: string;
	/** The initial deposit. */
	initialDeposit?: string | number;
	/** The initiator of the transaction. */
	initiator?: string;
	/** The input data. */
	input?: string;
	/** The input tokens. */
	inputTokens?: TokenAmount[];
	/**
	 * The interest rate mode.
	 * @format double
	 */
	interestRateMode?: number;
	/** The lock duration for the transaction. */
	lock_duration?: string;
	/** The lock value for the transaction. */
	lock_value?: string;
	/** The maximum fee per gas. */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas. */
	maxPriorityFeePerGas?: string;
	/** The minimum health factor. */
	minHealthFactor?: string | number;
	/** The modes of the transaction. */
	modes?: number[];
	/** The nonce for the transaction. */
	nonce?: string;
	/** The address on behalf of which the transaction is made. */
	onBehalfOf?: string;
	/** The operator address for the transaction. */
	operator?: string;
	/** The output tokens. */
	outputTokens?: TokenProportion[];
	/** Additional parameters. */
	params?: string;
	/** The premiums. */
	premiums?: string[] | number[];
	/**
	 * The rate mode.
	 * @format double
	 */
	rateMode?: number;
	/** Whether to receive a token. */
	receiveAToken?: boolean;
	/** The receiver address. */
	receiverAddress?: string;
	/**
	 * The referral code.
	 * @format double
	 */
	referralCode?: number;
	/** The role of the user. */
	role?: string;
	/** Indicates whether to simulate the transaction. */
	simulate?: boolean;
	/**
	 * The slippage limit percentage.
	 * @format double
	 */
	slippageLimitPercent?: number;
	/** The spender address for the transaction. */
	spender?: string;
	/** The recipient address. */
	to?: string;
	/** The token ID involved in the transaction. */
	tokenId?: string;
	/** The token ID involved in the transaction. */
	token_id?: string;
	/** The token IDs. */
	token_ids?: string;
	/**
	 * The type of transaction.
	 * @format double
	 */
	type?: number;
	/** Whether to use as collateral. */
	useAsCollateral?: boolean;
	/** The user involved in the transaction. */
	user?: string;
	/** The value of the transaction. */
	value?: string;
}

/** Represents a transaction involving a VeNFT. */
export interface VeNFTTransaction {
	/** The chain ID where the transaction is executed. */
	chainId: string;
	/** The data payload of the transaction. */
	data: string;
	/** The sender address of the transaction. */
	from: string;
	/** The gas limit for the transaction. */
	gasLimit?: string;
	/** The gas price for the transaction. */
	gasPrice?: string;
	/** The maximum fee per gas unit for the transaction. */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas unit for the transaction. */
	maxPriorityFeePerGas?: string;
	/**
	 * The nonce of the transaction.
	 * @format double
	 */
	nonce: number;
	/** The recipient address of the transaction. */
	to: string;
	/**
	 * The type of the transaction.
	 * @format double
	 */
	type?: number;
	/** The value being transferred in the transaction. */
	value: string;
}

export interface VeTheNFTAPIResponseBoolean {
	data?: boolean;
	message: string;
	success: boolean;
}

export interface VeTheNFTAPIResponseLockedData {
	data?: LockedData;
	message: string;
	success: boolean;
}

export interface VeTheNFTAPIResponseString {
	data?: string;
	message: string;
	success: boolean;
}

export interface VeTheNFTAPIResponseUserPointHistoryData {
	data?: UserPointHistoryData;
	message: string;
	success: boolean;
}

export interface VeTheNFTAPIResponseVeNFTExecuteFunctionResult {
	/** Represents the result of executing a VeNFT function. */
	data?: VeNFTExecuteFunctionResult;
	message: string;
	success: boolean;
}

/** Represents the structure of the API response for the VeTheNftVoter. */
export interface VeTheNftVoterAPIResponseBoolean {
	/** The data returned by the API, if any. */
	data?: boolean;
	/**
	 * A message providing additional information about the
	 * API response.
	 */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the structure of the API response for the VeTheNftVoter. */
export interface VeTheNftVoterAPIResponseString {
	/** The data returned by the API, if any. */
	data?: string;
	/**
	 * A message providing additional information about the
	 * API response.
	 */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the structure of the API response for the VeTheNftVoter. */
export interface VeTheNftVoterAPIResponseVeTheNftVoterExecuteFunctionResult {
	/** The data returned by the API, if any. */
	data?: VeTheNftVoterExecuteFunctionResult;
	/**
	 * A message providing additional information about the
	 * API response.
	 */
	message: string;
	/** Indicates whether the API request was successful. */
	success: boolean;
}

/** Represents the result of executing a function in the VeTheNftVoter. */
export interface VeTheNftVoterExecuteFunctionResult {
	/** Optional response from broadcasting the transaction. */
	broadcasted?: BroadCastRawTransactionResponse;
	/** Optional data related to the transaction. */
	data?: Transaction;
	/** The name of the function that was executed. */
	function: string;
	/** Optional message providing additional information about the execution. */
	message?: string;
	/** The parameters passed to the function. */
	params: any[];
	/** Optional simulation response indicating asset changes. */
	simulation?: SimulateAssetChangesResponse;
	/** Optional flag indicating whether the execution was successful. */
	success?: boolean;
	/** The transaction associated with the execution. */
	transaction: VeTheNftVoterTransaction;
	/** Optional user operation identifier. */
	user_op?: string;
}

export interface VeTheNftVoterInputBody {
	/** Indicates whether the transaction is from an externally owned account (optional). */
	EOA?: boolean;
	/** The access list for the transaction. */
	accessList?: AccessTuple[];
	/** The account involved in the transaction. */
	account?: string;
	/** Indicates whether to always increment the nonce (optional). */
	alwaysIncrementNonce?: boolean;
	/** The amount to be transferred (optional). */
	amount?: string;
	/** The amounts involved in the transaction. */
	amounts?: string[];
	/** Whether the transaction is approved. */
	approved?: boolean;
	/** The asset involved in the transaction. */
	asset?: string;
	/** The assets involved in the transaction. */
	assets?: string[];
	/** The gas for blob transactions. */
	blobGas?: string;
	/** The gas fee cap for blob transactions. */
	blobGasFeeCap?: string;
	/** The hashes for blob transactions. */
	blobHashes?: string[];
	/** The borrow amount. */
	borrowAmount?: string | number;
	/** The bribes involved in the transaction (optional). */
	bribes?: string[];
	/** Indicates whether to broadcast the transaction (optional). */
	broadcast?: boolean;
	/** The chain ID. */
	chain_id?: string;
	/** The collateral asset. */
	collateralAsset?: string;
	/** The contract address involved in the transaction (optional). */
	contract_address?: string;
	/** The data payload of the transaction (optional). */
	data?: string;
	/** The debt asset. */
	debtAsset?: string;
	/** The debt to cover. */
	debtToCover?: string;
	/** Indicates whether to perform a dry run of the transaction (optional). */
	dryrun?: boolean;
	/** The encoding type. */
	encoding?: string;
	/** The fees involved in the transaction (optional). */
	fees?: string[];
	/** The gas limit for the transaction (optional). */
	gas?: string;
	/** The gas limit for the transaction (optional). */
	gasLimit?: string;
	/** The gas price for the transaction, in wei (optional). */
	gasPrice?: string;
	/** The gauge address involved in the transaction (optional). */
	gauge?: string;
	/** The type of the gauge (optional). */
	gauge_type?: string;
	/** The gauges involved in the transaction (optional). */
	gauges?: string[];
	/** The initial deposit. */
	initialDeposit?: string | number;
	/** The initiator of the transaction. */
	initiator?: string;
	/** The input data. */
	input?: string;
	/** The input tokens. */
	inputTokens?: TokenAmount[];
	/**
	 * The interest rate mode.
	 * @format double
	 */
	interestRateMode?: number;
	/** The maximum fee per gas. */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas. */
	maxPriorityFeePerGas?: string;
	/** The minimum health factor. */
	minHealthFactor?: string | number;
	/** The modes of the transaction. */
	modes?: number[];
	/** The nonce of the transaction (optional). */
	nonce?: string;
	/** The address on behalf of which the transaction is made. */
	onBehalfOf?: string;
	/** The output tokens. */
	outputTokens?: TokenProportion[];
	/** Additional parameters. */
	params?: string;
	/** The pool address involved in the transaction (optional). */
	pool?: string;
	/** The pool votes (optional). */
	pool_vote?: string[];
	/** The premiums. */
	premiums?: string[] | number[];
	/**
	 * The rate mode.
	 * @format double
	 */
	rateMode?: number;
	/** Whether to receive a token. */
	receiveAToken?: boolean;
	/** The receiver address. */
	receiverAddress?: string;
	/**
	 * The referral code.
	 * @format double
	 */
	referralCode?: number;
	/** The role of the user. */
	role?: string;
	/** Indicates whether to simulate the transaction (optional). */
	simulate?: boolean;
	/**
	 * The slippage limit percentage.
	 * @format double
	 */
	slippageLimitPercent?: number;
	/** The recipient address of the transaction (optional). */
	to?: string;
	/** The token ID involved in the transaction (optional). */
	token_id?: string;
	/** The token IDs. */
	token_ids?: string;
	/** The tokens involved in the transaction (optional). */
	tokens?: string[][];
	/**
	 * The type of transaction.
	 * @format double
	 */
	type?: number;
	/** Whether to use as collateral. */
	useAsCollateral?: boolean;
	/** The user involved in the transaction. */
	user?: string;
	/** The value to be sent with the transaction, in wei (optional). */
	value?: string;
	/** The weights for the pool votes (optional). */
	weights?: string[];
}

/** Represents a transaction for the VeTheNftVoter. */
export interface VeTheNftVoterTransaction {
	/** The chain ID of the network where the transaction is to be executed. */
	chainId: string;
	/** The data payload of the transaction. */
	data: string;
	/** The sender address of the transaction. */
	from: string;
	/** The gas limit for the transaction (optional). */
	gasLimit?: string;
	/** The gas price for the transaction, in wei (optional). */
	gasPrice?: string;
	/** The maximum fee per gas for the transaction, in wei (optional). */
	maxFeePerGas?: string;
	/** The maximum priority fee per gas for the transaction, in wei (optional). */
	maxPriorityFeePerGas?: string;
	/**
	 * The nonce of the transaction.
	 * @format double
	 */
	nonce: number;
	/** The recipient address of the transaction. */
	to: string;
	/**
	 * The type of the transaction (optional).
	 * @format double
	 */
	type?: number;
	/** The value to be transferred in the transaction, in wei. */
	value: string;
}

/** - The version of the API to use, expected to be 'v2'. */
export enum VersionEnum {
	V2 = "v2",
}

/** - The version of the API to use, default is 'v2'. */
export enum VersionEnum1 {
	V2 = "v2",
}

/** - The API version, expected to be 'v2'. */
export enum VersionEnum2 {
	V2 = "v2",
}

export interface VestingPeriodData {
	end: string;
	start: string;
}

export type VoteData = LynexVoterAPIResponseLynexVoterExecuteFunctionResult;

export type VoteOutput =
	VeTheNftVoterAPIResponseVeTheNftVoterExecuteFunctionResult;

export type VoteResult = RamsesVoterAPIResponseRamsesVoterExecuteFunctionResult;

export type VoteWithOptimalDistributionBody = RamsesVoterInputBody & {
	/** @format double */
	maxPools?: number;
	/** @format double */
	totalVotes: number;
};

export type VoteWithOptimalDistributionData =
	LynexVoterAPIResponseLynexVoterExecuteFunctionResult;

export type VoteWithOptimalDistributionInput = VeTheNftVoterInputBody & {
	/** @format double */
	maxFusions?: number;
	/** @format double */
	totalVotes: number;
};

export type VoteWithOptimalDistributionOutput =
	VeTheNftVoterAPIResponseVeTheNftVoterExecuteFunctionResult;

export type VoteWithOptimalDistributionPayload = LynexVoterInputBody & {
	/** @format double */
	maxPools?: number;
	/** @format double */
	totalVotes: number;
};

export type VoteWithOptimalDistributionResult =
	RamsesVoterAPIResponseRamsesVoterExecuteFunctionResult;

export type VotingData = VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

/** Interface representing the response from the Wallet Balance API. */
export interface WalletBalanceAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The wallet balance data. */
	data?: any[];
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

/** Interface representing the response from the Wallet History API. */
export interface WalletHistoryAPIResponse {
	/** The address associated with the operation. */
	address?: string;
	/** The data associated with the operation. */
	body?: InputBody;
	/** The wallet history data. */
	data?: EvmWalletHistoryTransactionJSON[];
	/** The message associated with the operation. */
	message: string;
	/** The success status of the operation. */
	success: boolean;
}

export type Weth92Data = UniswapV3APIResponseString;

export interface Weth92Params {
	address: string;
	chainId: string;
}

export type Weth9Data = UniswapV3NFTAPIResponseString;

export interface Weth9Params {
	address: string;
	chainId: string;
}

export type WhitelistData =
	LynexVoterAPIResponseLynexVoterExecuteFunctionResult;

export type WhitelistOutput =
	VeTheNftVoterAPIResponseVeTheNftVoterExecuteFunctionResult;

export type WhitelistResult =
	RamsesVoterAPIResponseRamsesVoterExecuteFunctionResult;

export type WithdrawData = RamsesNFTAPIResponseRamsesNFTExecuteFunctionResult;

export type WithdrawResult = VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export type WrapEthData = OpenSeaAPIResponse;

export interface WrapEthPayload {
	amountInEth: string;
	chainId: string;
}

export type ZapData = OdosAPIResponseOdosExecuteFunctionResult;
