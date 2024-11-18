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

export interface AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult {
  data?: AAVEv3RewardsExecuteFunctionResult;
  message: string;
  success: boolean;
}

export interface AAVEv3RewardsAPIResponseString {
  data?: string;
  message: string;
  success: boolean;
}

export interface AAVEv3RewardsAPIResponseStringArray {
  data?: string[];
  message: string;
  success: boolean;
}

export interface AAVEv3RewardsExecuteFunctionResult {
  broadcasted?: BroadCastRawTransactionResponse;
  data?: Transaction;
  function: string;
  message?: string;
  params: any[];
  /** Response object for the {@link TransactNamespace.simulateAssetChanges } method. */
  simulation?: SimulateAssetChangesResponse;
  success?: boolean;
  transaction: AAVEv3RewardsTransaction;
  user_op?: string;
}

export interface AAVEv3RewardsInputBody {
  EOA?: boolean;
  accessList?: AccessTuple[];
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amounts?: string[];
  approved?: boolean;
  asset?: string;
  assets?: string[];
  blobGas?: string;
  blobGasFeeCap?: string;
  blobHashes?: string[];
  borrowAmount?: string | number;
  broadcast?: boolean;
  chain_id?: string;
  collateralAsset?: string;
  contract_address?: string;
  data?: string;
  debtAsset?: string;
  debtToCover?: string;
  dryrun?: boolean;
  encoding?: string;
  gas?: string;
  gasLimit?: string;
  gasPrice?: string;
  initialDeposit?: string | number;
  initiator?: string;
  input?: string;
  inputTokens?: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  minHealthFactor?: string | number;
  modes?: number[];
  nonce?: string;
  onBehalfOf?: string;
  outputTokens?: TokenProportion[];
  params?: string;
  premiums?: string[] | number[];
  /** @format double */
  rateMode?: number;
  receiveAToken?: boolean;
  receiverAddress?: string;
  /** @format double */
  referralCode?: number;
  reward?: string;
  role?: string;
  simulate?: boolean;
  /** @format double */
  slippageLimitPercent?: number;
  to?: string;
  token_id?: string;
  token_ids?: string;
  /** @format double */
  type?: number;
  useAsCollateral?: boolean;
  user?: string;
  value?: string;
}

export interface AAVEv3RewardsTransaction {
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

export interface AAVEv3UiIncentiveDataProviderAPIResponseAggregatedReserveIncentiveDataArray {
  data?: AggregatedReserveIncentiveData[];
  message: string;
  success: boolean;
}

export interface AAVEv3UiIncentiveDataProviderAPIResponseFullReservesIncentiveData {
  data?: FullReservesIncentiveData;
  message: string;
  success: boolean;
}

export interface AAVEv3UiIncentiveDataProviderAPIResponseUserReserveIncentiveDataArray {
  data?: UserReserveIncentiveData[];
  message: string;
  success: boolean;
}

export interface AAVEv3UiPoolDataProviderAPIResponseReservesData {
  data?: ReservesData;
  message: string;
  success: boolean;
}

export interface AAVEv3UiPoolDataProviderAPIResponseString {
  data?: string;
  message: string;
  success: boolean;
}

export interface AAVEv3UiPoolDataProviderAPIResponseStringArray {
  data?: string[];
  message: string;
  success: boolean;
}

export interface AAVEv3UiPoolDataProviderAPIResponseUserReserveDataArray {
  data?: UserReserveData[];
  message: string;
  success: boolean;
}

export interface AAVEv3WalletBalanceProviderAPIResponseString {
  data?: string;
  message: string;
  success: boolean;
}

export interface AAVEv3WalletBalanceProviderAPIResponseStringArray {
  data?: string[];
  message: string;
  success: boolean;
}

export interface AAVEv3WalletBalanceProviderAPIResponseTokensStringArrayBalancesStringArray {
  data?: {
    balances: string[];
    tokens: string[];
  };
  message: string;
  success: boolean;
}

export interface AavePoolAPIResponseAavePoolExecuteFunctionResult {
  data?: AavePoolExecuteFunctionResult;
  message: string;
  success: boolean;
}

export interface AavePoolAPIResponseAny {
  data?: any;
  message: string;
  success: boolean;
}

export interface AavePoolExecuteFunctionResult {
  broadcasted?: BroadCastRawTransactionResponse;
  data?: Transaction;
  function: string;
  message?: string;
  params: any[];
  /** Response object for the {@link TransactNamespace.simulateAssetChanges } method. */
  simulation?: SimulateAssetChangesResponse;
  success?: boolean;
  transaction: AavePoolTransaction;
  user_op?: string;
}

export interface AavePoolInputBody {
  EOA?: boolean;
  accessList?: AccessTuple[];
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amounts?: string[];
  approved?: boolean;
  asset?: string;
  assets?: string[];
  blobGas?: string;
  blobGasFeeCap?: string;
  blobHashes?: string[];
  borrowAmount?: string | number;
  broadcast?: boolean;
  chain_id?: string;
  collateralAsset?: string;
  contract_address?: string;
  data?: string;
  debtAsset?: string;
  debtToCover?: string;
  dryrun?: boolean;
  encoding?: string;
  gas?: string;
  gasLimit?: string;
  gasPrice?: string;
  initialDeposit?: string | number;
  initiator?: string;
  input?: string;
  inputTokens?: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  minHealthFactor?: string | number;
  modes?: number[];
  nonce?: string;
  onBehalfOf?: string;
  outputTokens?: TokenProportion[];
  params?: string;
  premiums?: string[] | number[];
  /** @format double */
  rateMode?: number;
  receiveAToken?: boolean;
  receiverAddress?: string;
  /** @format double */
  referralCode?: number;
  role?: string;
  simulate?: boolean;
  /** @format double */
  slippageLimitPercent?: number;
  to?: string;
  token_id?: string;
  token_ids?: string;
  /** @format double */
  type?: number;
  useAsCollateral?: boolean;
  user?: string;
  value?: string;
}

export interface AavePoolTransaction {
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

export interface AbiEncodeInput {
  abi: any;
  functionName: string;
  params: any[];
}

export interface AbiEncodeOutput {
  address?: string;
  body?: InputBody;
  data?: {
    encoded: string;
  };
  message: string;
  success: boolean;
}

export type AbstainData = RamsesNFTAPIResponseRamsesNFTExecuteFunctionResult;

export type AbstainResult = VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export interface AccessTuple {
  address: string;
  storageKeys: string[];
}

export interface AccountAPIResponse {
  address?: string;
  body?: InputBody;
  data?: AccountResponse;
  message: string;
  success: boolean;
}

export interface AccountData {
  address?: string;
  keys?: string[];
  private_key?: string;
  public_key?: string;
}

export interface AccountResponse {
  address?: string;
  data: AccountData;
  keys?: string[];
  private_key?: string;
  public_key?: string;
}

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

export interface AggregatedReserveData {
  stableRateSlope1: BigNumber;
  stableRateSlope2: BigNumber;
  variableRateSlope1: BigNumber;
  variableRateSlope2: BigNumber;
  aTokenAddress: string;
  availableLiquidity: BigNumber;
  averageStableRate: BigNumber;
  baseLTVasCollateral: BigNumber;
  borrowingEnabled: boolean;
  decimals: BigNumber;
  interestRateStrategyAddress: string;
  isActive: boolean;
  isFrozen: boolean;
  /** @format double */
  lastUpdateTimestamp: number;
  liquidityIndex: BigNumber;
  liquidityRate: BigNumber;
  name: string;
  priceInMarketReferenceCurrency: BigNumber;
  reserveFactor: BigNumber;
  reserveLiquidationBonus: BigNumber;
  reserveLiquidationThreshold: BigNumber;
  stableBorrowRate: BigNumber;
  stableBorrowRateEnabled: boolean;
  stableDebtLastUpdateTimestamp: BigNumber;
  stableDebtTokenAddress: string;
  symbol: string;
  totalPrincipalStableDebt: BigNumber;
  totalScaledVariableDebt: BigNumber;
  underlyingAsset: string;
  usageAsCollateralEnabled: boolean;
  variableBorrowIndex: BigNumber;
  variableBorrowRate: BigNumber;
  variableDebtTokenAddress: string;
}

export interface AggregatedReserveIncentiveData {
  aIncentiveData: IncentiveData;
  sIncentiveData: IncentiveData;
  underlyingAsset: string;
  vIncentiveData: IncentiveData;
}

export interface AllFinancials {
  balance_sheets: BalanceSheet[];
  cash_flow_statements: CashFlowStatement[];
  income_statements: IncomeStatement[];
}

export interface AllFinancialsAPIResponse {
  address?: string;
  body?: InputBody;
  data?: AllFinancials;
  message: string;
  success: boolean;
}

export interface ApiResponseChainsResponse {
  data?: ChainsResponse;
  message: string;
  success: boolean;
}

export interface ApiResponseConnectionsResponse {
  data?: ConnectionsResponse;
  message: string;
  success: boolean;
}

export interface ApiResponsePostQuote {
  data?: PostQuote;
  message: string;
  success: boolean;
}

export interface ApiResponseQuote {
  data?: Quote;
  message: string;
  success: boolean;
}

export interface ApiResponseStatusResponse {
  data?: StatusResponse;
  message: string;
  success: boolean;
}

export interface ApiResponseTokenDetails {
  data?: TokenDetails;
  message: string;
  success: boolean;
}

export interface ApiResponseTokenInfoByChainId {
  data?: TokenInfoByChainId;
  message: string;
  success: boolean;
}

export interface ApiResponseTokensResponse {
  data?: TokensResponse;
  message: string;
  success: boolean;
}

export interface ApiResponseToolsResponse {
  data?: ToolsResponse;
  message: string;
  success: boolean;
}

export type ApproveData = ERC20APIResponseERC20ExecuteFunctionResult;

export type ApproveData1 = VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export type ApproveErc721Data = ERC721APIResponse;

export interface ApproveForPolymarketBody {
  chain_id: string;
}

export type ApproveForPolymarketData = PolymarketAPIResponseAny;

export type ApproveOutput = LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type ApproveOutput1 = RamsesNFTAPIResponseRamsesNFTExecuteFunctionResult;

export type ApproveResult = ERC4626APIResponse;

export type ApproveResult1 =
  UniswapV3NFTAPIResponseUniswapV3ExecuteFunctionResult;

export interface AssembleRequest {
  pathId: string;
  receiver?: string;
  simulate?: boolean;
  userAddr: string;
}

export type AssembleTransactionData = OdosAPIResponseOdosExecuteFunctionResult;

/** Generic Blockchain Asset. */
export interface Asset {
  /**
   * Optional for fungible items
   * @format double
   */
  decimals?: number;
  /** Optional for ENS names */
  name?: string;
  /** The asset's contract address */
  tokenAddress: string;
  /** The asset's token ID, or null if ERC-20 */
  tokenId: string | null;
  /** The token standard (e.g. "ERC721") for this asset */
  tokenStandard?: TokenStandard;
}

export type AttachData = RamsesNFTAPIResponseRamsesNFTExecuteFunctionResult;

export type AttachResult = VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export type AttachTokenToGaugeData =
  RamsesVoterAPIResponseRamsesVoterExecuteFunctionResult;

export type AttachTokenToGaugeResult =
  VeTheNftVoterAPIResponseVeTheNftVoterExecuteFunctionResult;

export interface AvailableTickersAPIResponse {
  address?: string;
  body?: InputBody;
  data?: string[];
  message: string;
  success: boolean;
}

export interface BRC20TransactionInput {
  amt: string;
  change_address: string;
  input_amount: string;
  input_txid: string;
  /** @format double */
  input_vout: number;
  network: string;
  op: string;
  output_address: string;
  tick: string;
}

export interface BRC20TransactionOutput {
  transaction: string;
}

export interface BalanceAPIResponse {
  address?: string;
  body?: InputBody;
  data?: BalanceResponse;
  message: string;
  success: boolean;
}

export interface BalanceAllowanceResponse {
  allowance: string;
  balance: string;
}

export type BalanceOfBatchData = TransactionAPIResponse;

export type BalanceOfData = AAVEv3WalletBalanceProviderAPIResponseString;

export type BalanceOfOutput = UniswapV3NFTAPIResponseString;

export interface BalanceOfParams {
  chain_id: string;
  contract_address: string;
  token_address: string;
  user: string;
}

export interface BalanceOfParams3 {
  address: string;
  chainId: string;
  owner: string;
}

export type BalanceOfResult = TransactionAPIResponse;

export interface BalanceResponse {
  balance: string;
}

export interface BalanceSheet {
  /** @format double */
  accumulated_other_comprehensive_income: number;
  calendar_date: string;
  /** @format double */
  cash_and_equivalents: number;
  currency: string;
  /** @format double */
  current_assets: number;
  /** @format double */
  current_debt: number;
  /** @format double */
  current_investments: number;
  /** @format double */
  current_liabilities: number;
  /** @format double */
  deferred_revenue: number;
  /** @format double */
  deposit_liabilities: number;
  /** @format double */
  goodwill_and_intangible_assets: number;
  /** @format double */
  inventory: number;
  /** @format double */
  investments: number;
  /** @format double */
  non_current_assets: number;
  /** @format double */
  non_current_debt: number;
  /** @format double */
  non_current_investments: number;
  /** @format double */
  non_current_liabilities: number;
  /** @format double */
  outstanding_shares: number;
  period: BalanceSheetPeriodEnum;
  /** @format double */
  property_plant_and_equipment: number;
  report_period: string;
  /** @format double */
  retained_earnings: number;
  /** @format double */
  shareholders_equity: number;
  /** @format double */
  tax_assets: number;
  /** @format double */
  tax_liabilities: number;
  ticker: string;
  /** @format double */
  total_assets: number;
  /** @format double */
  total_debt: number;
  /** @format double */
  total_liabilities: number;
  /** @format double */
  trade_and_non_trade_payables: number;
  /** @format double */
  trade_and_non_trade_receivables: number;
}

export enum BalanceSheetPeriodEnum {
  Quarterly = 'quarterly',
  Ttm = 'ttm',
  Annual = 'annual',
}

export interface BalanceSheetsAPIResponse {
  address?: string;
  body?: InputBody;
  data?: BalanceSheet[];
  message: string;
  success: boolean;
}

export interface BaseCosmosAPIResponse {
  message: string;
  success: boolean;
}

export interface BaseCurrencyInfo {
  marketReferenceCurrencyPriceInUsd: BigNumber;
  marketReferenceCurrencyUnit: BigNumber;
  /** @format double */
  networkBaseTokenPriceDecimals: number;
  networkBaseTokenPriceInUsd: BigNumber;
}

export type BaseUriData = UniswapV3NFTAPIResponseString;

export interface BaseUriParams {
  address: string;
  chainId: string;
}

export type BatchBalanceOfData =
  AAVEv3WalletBalanceProviderAPIResponseStringArray;

export interface BatchBalanceOfParams {
  chain_id: string;
  contract_address: string;
  tokens: string[];
  users: string[];
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

export interface BitcoinCashAPIResponseAccountResponse {
  data?: AccountResponse;
  message: string;
  success: boolean;
}

export interface BitcoinCashAPIResponseBitcoinCashTransactionOutput {
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

export interface BitcoinCashInput {
  network?: string;
  private_key?: string;
}

export interface BitcoinCashTransactionInput {
  compress?: boolean;
  network?: string;
  to?: string;
  /** @format double */
  value?: number;
}

export interface BitcoinCashTransactionOutput {
  signedTx?: string;
  transaction_hash?: string;
}

export interface BitcoinInput {
  network?: string;
  private_key?: string;
}

export interface BitcoinTransactionInput {
  compress?: boolean;
  network?: string;
  to?: string;
  /** @format double */
  value?: number;
}

export interface BitcoinTransactionOutput {
  signedTx?: string;
  transaction_hash?: string;
}

export type BorrowData = AavePoolAPIResponseAavePoolExecuteFunctionResult;

export type BorrowResult =
  LendingPoolAPIResponseLendingPoolExecuteFunctionResult;

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
  address?: string;
  body?: InputBody;
  data?: BroadCastRawTransactionResponse;
  message: string;
  success: boolean;
}

export interface BroadCastRawTransactionResponse {
  data: string;
  message: string;
  success: boolean;
}

export interface BroadcastInput {
  chainId: string;
  rawTransaction: string;
}

export type BroadcastTxData = BroadCastRawTransactionAPIResponse;

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

export interface CashFlowStatement {
  /** @format double */
  business_acquisitions_and_disposals: number;
  calendar_date: string;
  /** @format double */
  capital_expenditure: number;
  /** @format double */
  change_in_cash_and_equivalents: number;
  currency: string;
  /** @format double */
  depreciation_and_amortization: number;
  /** @format double */
  dividends_and_other_cash_distributions: number;
  /** @format double */
  effect_of_exchange_rate_changes: number;
  /** @format double */
  investment_acquisitions_and_disposals: number;
  /** @format double */
  issuance_or_purchase_of_equity_shares: number;
  /** @format double */
  issuance_or_repayment_of_debt_securities: number;
  /** @format double */
  net_cash_flow_from_financing: number;
  /** @format double */
  net_cash_flow_from_investing: number;
  /** @format double */
  net_cash_flow_from_operations: number;
  period: CashFlowStatementPeriodEnum;
  report_period: string;
  /** @format double */
  share_based_compensation: number;
  ticker: string;
}

export enum CashFlowStatementPeriodEnum {
  Quarterly = 'quarterly',
  Ttm = 'ttm',
  Annual = 'annual',
}

export interface CashFlowStatementsAPIResponse {
  address?: string;
  body?: InputBody;
  data?: CashFlowStatement[];
  message: string;
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
  EVM = 'EVM',
  SOL = 'SOL',
}

export interface ChainsResponse {
  chains: Chain[];
}

export interface ChartAnalysisAPIResponse {
  address?: string;
  body?: InputBody;
  data?: string;
  message: string;
  success: boolean;
}

export type CheckpointData = LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type CheckpointDelegateeData =
  LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type CheckpointResult = VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export type ClaimAllRewardsData =
  AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult;

export type ClaimAllRewardsOnBehalfData =
  AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult;

export type ClaimAllRewardsToSelfData =
  AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult;

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
  AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult;

export type ClaimRewardsOnBehalfData =
  AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult;

export type ClaimRewardsOutput =
  RamsesVoterAPIResponseRamsesVoterExecuteFunctionResult;

export type ClaimRewardsResult =
  LynexVoterAPIResponseLynexVoterExecuteFunctionResult;

export type ClaimRewardsResult1 =
  VeTheNftVoterAPIResponseVeTheNftVoterExecuteFunctionResult;

export type ClaimRewardsToSelfData =
  AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult;

export type CollectData = UniswapV3NFTAPIResponseUniswapV3ExecuteFunctionResult;

export interface CompanyFacts {
  cik: string;
  is_active: boolean;
  listing_date: string;
  /** @format double */
  market_cap: number;
  name: string;
  /** @format double */
  number_of_employees: number;
  sic_code: string;
  sic_description: string;
  ticker: string;
  website_url: string;
  /** @format double */
  weighted_average_shares: number;
}

export interface CompanyFactsAPIResponse {
  address?: string;
  body?: InputBody;
  data?: CompanyFacts;
  message: string;
  success: boolean;
}

export interface ComponentAPIResponseComponentDefinition {
  data?: ComponentDefinition;
  message: string;
  success: boolean;
}

export interface ComponentAPIResponseComponentDefinitionArray {
  data?: ComponentDefinition[];
  message: string;
  success: boolean;
}

export interface ComponentAPIResponseComponentMatchArray {
  data?: ComponentMatch[];
  message: string;
  success: boolean;
}

export interface ComponentAPIResponsePartialComponentDefinitionArray {
  data?: PartialComponentDefinition[];
  message: string;
  success: boolean;
}

export interface ComponentAPIResponseVoid {
  data?: any;
  message: string;
  success: boolean;
}

export interface ComponentDefinition {
  code: string;
  /** @format date-time */
  created_at?: string;
  description: string;
  id: string;
  is_active?: boolean;
  name: string;
  /** @format date-time */
  updated_at?: string;
  version: string;
  xmlTag: string;
}

export interface ComponentMatch {
  code: string;
  /** @format date-time */
  created_at?: string;
  description: string;
  id: string;
  is_active?: boolean;
  name: string;
  /** @format double */
  similarity: number;
  /** @format date-time */
  updated_at?: string;
  version: string;
  xmlTag: string;
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

export interface CosmosAccount {
  address: string;
  pubkey: string;
}

export interface CosmosAccountAPIResponse {
  data?: CosmosAccountResponse;
  message: string;
  success: boolean;
}

export interface CosmosAccountListAPIResponse {
  data?: CosmosAccountListResponse;
  message: string;
  success: boolean;
}

export interface CosmosAccountListResponse {
  data: {
    keys: CosmosAccount[];
  };
}

export interface CosmosAccountResponse {
  data: {
    address: string;
  };
}

export interface CosmosIBCTransferInput {
  /** @format double */
  accountNumber: number;
  amount: string;
  chainId: string;
  denom: string;
  feeAmount: string;
  feeDenom: string;
  fromAddress: string;
  /** @format double */
  gasLimit: number;
  memo: string;
  /** @format double */
  sequence: number;
  sourceChannel: string;
  sourcePort: string;
  /** @format double */
  timeoutHeight: number;
  /** @format double */
  timeoutTimestamp: number;
  toAddress: string;
}

export interface CosmosSignMessageInput {
  message: string;
}

export interface CosmosSignedMessageAPIResponse {
  data?: CosmosSignedMessageResponse;
  message: string;
  success: boolean;
}

export interface CosmosSignedMessageResponse {
  signedMessage: string;
}

export interface CosmosTransactionAPIResponse {
  data?: CosmosTransactionResponse;
  message: string;
  success: boolean;
}

export interface CosmosTransactionResponse {
  signedTx: string;
  txHash: string;
}

export interface CosmosTransferInput {
  /** @format double */
  accountNumber: number;
  amount: string;
  chainId: string;
  denom: string;
  feeAmount: string;
  feeDenom: string;
  fromAddress: string;
  /** @format double */
  gasLimit: number;
  memo: string;
  /** @format double */
  sequence: number;
  /** @format double */
  timeoutHeight: number;
  toAddress: string;
}

export type CreateAccountData = AccountAPIResponse;

export interface CreateAccountInput {
  network?: string;
}

export type CreateAccountOutput = CosmosAccountAPIResponse;

export type CreateAccountResult = BitcoinCashAPIResponseAccountResponse;

export type CreateAndInitializePoolIfNecessaryData =
  UniswapV3NFTAPIResponseUniswapV3ExecuteFunctionResult;

export type CreateBitcoinAccountData = AccountAPIResponse;

export type CreateBrc20TransactionData = BitcoinAPIResponse;

export type CreateCollectionOfferData = OpenSeaAPIResponse;

export type CreateComponentData = ComponentAPIResponseComponentDefinition;

export type CreateDelegatedLockForData =
  LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type CreateDogeCoinAccountData = AccountAPIResponse;

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

export type CreateLitecoinAccountData = AccountAPIResponse;

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

export type CreateSrc20InscriptionData = BitcoinAPIResponse;

export type CreateTronAccountData = AccountAPIResponse;

export type CreateUserDefinedFunctionData = MultiCallAPIResponse;

export interface CreateUserDefinedFunctionPayload {
  functionBody: string;
  name: string;
}

export interface CryptoCurrency {
  address: string;
  /** @format double */
  chainId: number;
  code: string;
  /** @format double */
  decimals: number;
  icon: string;
  id: string;
  name: string;
  network: string;
  networkDisplayName: string;
  symbol: string;
}

export type DecreaseLiquidityData =
  UniswapV3NFTAPIResponseUniswapV3ExecuteFunctionResult;

export type DelegateBySigData =
  LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type DelegateBySigResult = VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export type DelegateData = LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type DelegateOutput = VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export type DelegateResult = RamsesNFTAPIResponseRamsesNFTExecuteFunctionResult;

export type DeleteAccountData = AccountAPIResponse;

export type DeleteAccountOutput = BaseCosmosAPIResponse;

export type DeleteAccountResult = BitcoinCashAPIResponseAccountResponse;

export type DeleteBitcoinAccountData = AccountAPIResponse;

export type DeleteDogeCoinAccountData = AccountAPIResponse;

export type DeleteEosAccountData = AccountAPIResponse;

export type DeleteFlowData = MultiCallAPIResponse;

export type DeleteJobData = MultiCallAPIResponse;

export type DeleteLitecoinAccountData = AccountAPIResponse;

export type DeleteRippleAccountData = AccountAPIResponse;

export type DeleteSolanaAccountData = AccountAPIResponse;

export type DeleteTronAccountData = AccountAPIResponse;

export type DeleteUserDefinedFunctionData = MultiCallAPIResponse;

export type DeleverageErc20Data =
  LeveragerAPIResponseLeveragerExecuteFunctionResult;

export type DeleverageNativeData =
  LeveragerAPIResponseLeveragerExecuteFunctionResult;

export type DeployContractData = TransactionAPIResponse;

export interface DeployInput {
  abi: string;
  bytecode: string;
  chain_id?: string;
  constructor_args?: string;
}

export type DepositData = ERC4626APIResponse;

export type DepositForData = VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export type DepositResult =
  LendingPoolAPIResponseLendingPoolExecuteFunctionResult;

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

export interface DogeCoinAPIResponse {
  address?: string;
  body?: InputBody;
  data?: DogeCoinTransactionOutput;
  message: string;
  success: boolean;
}

export interface DogeCoinInput {
  network?: string;
  private_key?: string;
}

export interface DogeCoinTransactionInput {
  compress?: boolean;
  network?: string;
  to?: string;
  /** @format double */
  value?: number;
}

export interface DogeCoinTransactionOutput {
  signedTx?: string;
  transaction_hash?: string;
}

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

export interface ERC20APIResponseERC20ExecuteFunctionResult {
  data?: ERC20ExecuteFunctionResult;
  message: string;
  success: boolean;
}

export interface ERC20APIResponseNumber {
  /** @format double */
  data?: number;
  message: string;
  success: boolean;
}

export interface ERC20APIResponseString {
  data?: string;
  message: string;
  success: boolean;
}

export interface ERC20ExecuteFunctionResult {
  broadcasted?: BroadCastRawTransactionResponse;
  data?: Transaction;
  function: string;
  message?: string;
  params: any[];
  /** Response object for the {@link TransactNamespace.simulateAssetChanges } method. */
  simulation?: SimulateAssetChangesResponse;
  success?: boolean;
  transaction: ERC20Transaction;
  user_op?: string;
}

export interface ERC20InputBody {
  EOA?: boolean;
  accessList?: AccessTuple[];
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amounts?: string[];
  approved?: boolean;
  asset?: string;
  assets?: string[];
  blobGas?: string;
  blobGasFeeCap?: string;
  blobHashes?: string[];
  borrowAmount?: string | number;
  broadcast?: boolean;
  chain_id?: string;
  collateralAsset?: string;
  contract_address?: string;
  data?: string;
  debtAsset?: string;
  debtToCover?: string;
  dryrun?: boolean;
  encoding?: string;
  gas?: string;
  gasLimit?: string;
  gasPrice?: string;
  initialDeposit?: string | number;
  initiator?: string;
  input?: string;
  inputTokens?: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  minHealthFactor?: string | number;
  modes?: number[];
  nonce?: string;
  onBehalfOf?: string;
  outputTokens?: TokenProportion[];
  params?: string;
  premiums?: string[] | number[];
  /** @format double */
  rateMode?: number;
  receiveAToken?: boolean;
  receiverAddress?: string;
  /** @format double */
  referralCode?: number;
  role?: string;
  simulate?: boolean;
  /** @format double */
  slippageLimitPercent?: number;
  to?: string;
  token_id?: string;
  token_ids?: string;
  /** @format double */
  type?: number;
  useAsCollateral?: boolean;
  user?: string;
  value?: string;
}

export interface ERC20Transaction {
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

export interface ERC4626APIResponse {
  data?: any;
  message: string;
  success: boolean;
}

export interface ERC721APIResponse {
  data?: any;
  message: string;
  success: boolean;
}

export type EncodeDataData = AbiEncodeOutput;

export interface EnsResolveAPIResponse {
  address?: string;
  body?: InputBody;
  data?: EnsResolveResponse;
  message: string;
  success: boolean;
}

export interface EnsResolveInput {
  chain_id: string;
  domain: string;
}

export interface EnsResolveResponse {
  address: string;
}

export interface EosAPIResponse {
  address?: string;
  body?: InputBody;
  data?: EosTransactionOutput;
  message: string;
  success: boolean;
}

export interface EosInput {
  network?: string;
  private_key?: string;
}

export interface EosTransactionInput {
  compress?: boolean;
  network?: string;
  to?: string;
  /** @format double */
  value?: number;
}

export interface EosTransactionOutput {
  signedTx?: string;
  transaction_hash?: string;
}

export interface Erc1155Request {
  EOA?: boolean;
  accessList?: AccessTuple[];
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amounts?: string[];
  approved?: boolean;
  asset?: string;
  assets?: string[];
  blobGas?: string;
  blobGasFeeCap?: string;
  blobHashes?: string[];
  borrowAmount?: string | number;
  broadcast?: boolean;
  chain_id?: string;
  collateralAsset?: string;
  contract_address?: string;
  data?: string;
  debtAsset?: string;
  debtToCover?: string;
  dryrun?: boolean;
  encoding?: string;
  gas?: string;
  gasLimit?: string;
  gasPrice?: string;
  initialDeposit?: string | number;
  initiator?: string;
  input?: string;
  inputTokens?: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  minHealthFactor?: string | number;
  modes?: number[];
  nonce?: string;
  onBehalfOf?: string;
  outputTokens?: TokenProportion[];
  params?: string;
  premiums?: string[] | number[];
  /** @format double */
  rateMode?: number;
  receiveAToken?: boolean;
  receiverAddress?: string;
  /** @format double */
  referralCode?: number;
  role?: string;
  simulate?: boolean;
  /** @format double */
  slippageLimitPercent?: number;
  to?: string;
  token_id?: string;
  token_ids?: string;
  /** @format double */
  type?: number;
  useAsCollateral?: boolean;
  user?: string;
  value?: string;
}

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

export type EstimateGasData = TransactionAPIResponse;

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
  Send = 'send',
  Receive = 'receive',
  TokenSend = 'token send',
  TokenReceive = 'token receive',
  NftSend = 'nft send',
  NftReceive = 'nft receive',
  TokenSwap = 'token swap',
  Deposit = 'deposit',
  Withdraw = 'withdraw',
  NftPurchase = 'nft purchase',
  NftSale = 'nft sale',
  Airdrop = 'airdrop',
  Mint = 'mint',
  Burn = 'burn',
  Borrow = 'borrow',
  ContractInteraction = 'contract interaction',
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

export type ExecuteOperationData =
  LeveragerAPIResponseLeveragerExecuteFunctionResult;

export interface ExportAccountAPIResponse {
  address?: string;
  body?: InputBody;
  data?: {
    address: string;
    private_key: string;
    public_key: string;
  };
  message: string;
  success: boolean;
}

export type ExportAccountData = ExportAccountAPIResponse;

export type ExportAccountOutput = BaseCosmosAPIResponse;

export type ExportAccountResult = BitcoinCashAPIResponseAccountResponse;

export type ExportBitcoinAccountData = AccountAPIResponse;

export type ExportDogeCoinAccountData = AccountAPIResponse;

export type ExportEosAccountData = AccountAPIResponse;

export type ExportLitecoinAccountData = AccountAPIResponse;

export type ExportRippleAccountData = AccountAPIResponse;

export type ExportSolanaAccountData = AccountAPIResponse;

export type ExportTronAccountData = AccountAPIResponse;

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

export type FetchTokenDetailsData = ApiResponseTokenDetails;

export interface FetchTokenDetailsParams {
  chain: string;
  token: string;
}

export type FetchTokensData = ApiResponseTokensResponse;

export interface FiatCurrency {
  code: string;
  icon: string;
  id: string;
  name: string;
  symbol: string;
}

export type FlashLoanData =
  LendingPoolAPIResponseLendingPoolExecuteFunctionResult;

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
  Action = 'action',
  Condition = 'condition',
  UserFunction = 'userFunction',
}

export type ForceEmbeddingData = ComponentAPIResponseVoid;

export interface ForceEmbeddingPayload {
  description: string;
}

export interface FullReservesIncentiveData {
  reservesIncentiveData: AggregatedReserveIncentiveData[];
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

export interface GasPrice {
  /** @format double */
  average24h: number;
  /** @format double */
  average7d: number;
  chainId: string;
  history: {
    /** @format double */
    timestamp: number;
    /** @format double */
    value: number;
  }[];
  /** @format double */
  lastTimestamp: number;
  unitName: string;
}

export type GenerateUnsignedPsbtHexData = BitcoinAPIResponse;

export type GenerateUnsignedPsbtHexResult = BitcoinCashAPIResponsePsbtHexString;

export type GetATokenTotalSupplyData =
  PoolAddressProviderRegistryAPIResponseString;

export interface GetATokenTotalSupplyParams {
  account: string;
  address: string;
  asset: string;
  chainId: string;
}

export type GetAccountData = AccountAPIResponse;

export type GetAccountResult = CosmosAccountAPIResponse;

export type GetAclAdminData = PoolAddressProviderAPIResponseString;

export interface GetAclAdminParams {
  account: string;
  address: string;
  chainId: string;
}

export type GetAclManagerData = PoolAddressProviderAPIResponseString;

export interface GetAclManagerParams {
  account: string;
  address: string;
  chainId: string;
}

export type GetAddressData = PoolAddressProviderAPIResponseString;

export interface GetAddressParams {
  account: string;
  address: string;
  chainId: string;
  id: string;
}

export type GetAddressesProviderData =
  PoolAddressProviderRegistryAPIResponseString;

export type GetAddressesProviderOutput = LeveragerAPIResponseString;

export interface GetAddressesProviderParams {
  account: string;
  address: string;
  chainId: string;
}

export interface GetAddressesProviderParams2 {
  address: string;
  chainId: string;
}

export interface GetAddressesProviderParams4 {
  address: string;
  chainId: string;
}

export type GetAddressesProviderResult = LendingPoolAPIResponseString;

export type GetAllATokensData = PoolAddressProviderRegistryAPIResponseAnyArray;

export interface GetAllATokensParams {
  account: string;
  address: string;
  chainId: string;
}

export type GetAllFinancialsData = AllFinancialsAPIResponse;

export interface GetAllFinancialsParams {
  cik?: string;
  /** @format double */
  limit?: number;
  period: PeriodEnum4;
  ticker: string;
}

export enum GetAllFinancialsParams1PeriodEnum {
  Annual = 'annual',
  Quarterly = 'quarterly',
  Ttm = 'ttm',
}

export type GetAllPossibleConnectionsData = ApiResponseTokenInfoByChainId;

export interface GetAllPossibleConnectionsParams {
  toChain: string;
  toToken: string;
}

export type GetAllReservesTokensData =
  PoolAddressProviderRegistryAPIResponseAnyArray;

export interface GetAllReservesTokensParams {
  account: string;
  address: string;
  chainId: string;
}

export type GetAllowanceData = ERC20APIResponseString;

export interface GetAllowanceParams {
  account: string;
  address: string;
  chainId: string;
  owner: string;
  spender: string;
}

export interface GetAllowanceParams2 {
  account: string;
  address: string;
  chainId: string;
  owner: string;
  spender: string;
}

export type GetAllowanceResult = ERC4626APIResponse;

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

export type GetAssetData = ERC4626APIResponse;

export interface GetAssetParams {
  account: string;
  address: string;
  chainId: string;
}

export type GetAssetsData = LynexAPIResponse;

export type GetAvailableTickersData = AvailableTickersAPIResponse;

export type GetBalanceAllowanceData =
  PolymarketAPIResponseBalanceAllowanceResponse;

export interface GetBalanceAllowanceParams {
  account: string;
  asset_type: string;
  chainId: string;
  token_id?: string;
}

export type GetBalanceData = BalanceAPIResponse;

export type GetBalanceOfAtNftData = VeTheNFTAPIResponseString;

export interface GetBalanceOfAtNftParams {
  address: string;
  block: string;
  chainId: string;
  tokenId: string;
}

export type GetBalanceOfData = ERC20APIResponseString;

export type GetBalanceOfData1 = VeTheNFTAPIResponseString;

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

export type GetBalanceOfOutput = LynexNFTAPIResponseString;

export interface GetBalanceOfParams {
  account: string;
  address: string;
  chainId: string;
}

export interface GetBalanceOfParams2 {
  account: string;
  address: string;
  chainId: string;
}

export interface GetBalanceOfParams4 {
  address: string;
  chainId: string;
  owner: string;
}

export interface GetBalanceOfParams6 {
  address: string;
  chainId: string;
  owner: string;
}

export interface GetBalanceOfParams8 {
  account: string;
  address: string;
  chainId: string;
}

export type GetBalanceOfResult = ERC4626APIResponse;

export type GetBalanceOfResult1 = RamsesNFTAPIResponseString;

export interface GetBalanceParams {
  accountName: string;
  chainId: string;
}

export type GetBalanceSheetsData = BalanceSheetsAPIResponse;

export interface GetBalanceSheetsParams {
  cik?: string;
  /** @format double */
  limit?: number;
  period: PeriodEnum1;
  ticker: string;
}

export enum GetBalanceSheetsParams1PeriodEnum {
  Annual = 'annual',
  Quarterly = 'quarterly',
  Ttm = 'ttm',
}

export type GetBitcoinAccountData = AccountAPIResponse;

export type GetCashFlowStatementsData = CashFlowStatementsAPIResponse;

export interface GetCashFlowStatementsParams {
  cik?: string;
  /** @format double */
  limit?: number;
  period: PeriodEnum2;
  ticker: string;
}

export enum GetCashFlowStatementsParams1PeriodEnum {
  Annual = 'annual',
  Quarterly = 'quarterly',
  Ttm = 'ttm',
}

export type GetChainsData = ApiResponseChainsResponse;

export interface GetChainsParams {
  optionalChainTypes?: OptionalChainTypesEnum;
}

export enum GetChainsParams1OptionalChainTypesEnum {
  EVM = 'EVM',
  SOL = 'SOL',
}

export type GetChartAnalysisData = ChartAnalysisAPIResponse;

/** @default "1D" */
export enum GetChartAnalysisParamsEnum {
  Value1D = '1D',
  Value4H = '4H',
  Value1H = '1H',
}

/** @default "1D" */
export enum GetChartAnalysisParamsTimeframeEnum {
  Value1D = '1D',
  Value4H = '4H',
  Value1H = '1H',
}

export type GetCollectionData = OpenSeaAPIResponse;

export interface GetCollectionParams {
  account: string;
  /** @default "1" */
  chainId?: string;
  slug: string;
}

export type GetCompanyFactsData = CompanyFactsAPIResponse;

export type GetComponentCapabilitiesDescriptionData =
  ComponentAPIResponsePartialComponentDefinitionArray;

export type GetComponentData = ComponentAPIResponseComponentDefinition;

export type GetComponentsData = ComponentAPIResponseComponentDefinitionArray;

export type GetConnectionsData = ApiResponseConnectionsResponse;

export interface GetConnectionsParams {
  chainTypes?: string;
  fromChain: string;
  fromToken: string;
  toChain: string;
  toToken: string;
}

export type GetContractInfoData = OdosAPIResponseOdosExecuteFunctionResult;

export interface GetContractInfoParams {
  /** @format double */
  chainId: number;
  version: VersionEnum;
}

export enum GetContractInfoParams1VersionEnum {
  V2 = 'v2',
}

export type GetConvertToAssetsData = ERC4626APIResponse;

export interface GetConvertToAssetsParams {
  account: string;
  address: string;
  chainId: string;
  shares: string;
}

export type GetConvertToSharesData = ERC4626APIResponse;

export interface GetConvertToSharesParams {
  account: string;
  address: string;
  assets: string;
  chainId: string;
}

export type GetCurrentBlockData = OdosAPIResponseOdosExecuteFunctionResult;

export interface GetCurrentBlockParams {
  /** @format double */
  chainId: number;
}

export type GetDebtCeilingData = PoolAddressProviderRegistryAPIResponseString;

export interface GetDebtCeilingParams {
  account: string;
  address: string;
  asset: string;
  chainId: string;
}

export type GetDecimalsData = ERC20APIResponseNumber;

export interface GetDecimalsParams {
  account: string;
  address: string;
  chainId: string;
}

export type GetDefaultAdminRoleData = LeveragerAPIResponseString;

export interface GetDefaultAdminRoleParams {
  address: string;
  chainId: string;
}

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

export type GetDogeCoinAccountData = AccountAPIResponse;

export type GetEosAccountData = AccountAPIResponse;

export type GetErc721ApprovedData = ERC721APIResponse;

export interface GetErc721ApprovedParams {
  address: string;
  chainId: string;
  tokenId: string;
}

export type GetErc721BalanceOfData = ERC721APIResponse;

export interface GetErc721BalanceOfParams {
  account: string;
  address: string;
  chainId: string;
}

export type GetErc721IsApprovedForAllData = ERC721APIResponse;

export interface GetErc721IsApprovedForAllParams {
  address: string;
  chainId: string;
  operator: string;
  owner: string;
}

export type GetErc721NameData = ERC721APIResponse;

export interface GetErc721NameParams {
  address: string;
  chainId: string;
}

export type GetErc721OwnerOfData = ERC721APIResponse;

export interface GetErc721OwnerOfParams {
  address: string;
  chainId: string;
  tokenId: string;
}

export type GetErc721SymbolData = ERC721APIResponse;

export interface GetErc721SymbolParams {
  address: string;
  chainId: string;
}

export type GetErc721TokenUriData = ERC721APIResponse;

export interface GetErc721TokenUriParams {
  address: string;
  chainId: string;
  tokenId: string;
}

export type GetEthCurrencyUnitData = AAVEv3UiPoolDataProviderAPIResponseString;

export interface GetEthCurrencyUnitParams {
  chain_id: string;
  contract_address: string;
}

export type GetExecutorAddressData = OdosAPIResponseOdosExecuteFunctionResult;

export interface GetExecutorAddressParams {
  /** @format double */
  chainId: number;
  version: VersionEnum2;
}

export enum GetExecutorAddressParams1VersionEnum {
  V2 = 'v2',
}

export type GetFactoryData = LynexRouterAPIResponseString;

export type GetFactoryOutput =
  UniswapV2APIResponseUniswapV2ExecuteFunctionResult;

export interface GetFactoryParams {
  address: string;
  chainId: string;
}

export interface GetFactoryParams2 {
  address: string;
  chainId: string;
}

export interface GetFactoryParams4 {
  account: string;
  address: string;
  chainId: string;
}

export type GetFactoryResult = RamsesRouterAPIResponseString;

export type GetFlashLoanPremiumTotalData = LendingPoolAPIResponseNumber;

export interface GetFlashLoanPremiumTotalParams {
  address: string;
  chainId: string;
}

export type GetFlowData = MultiCallAPIResponseFlow;

export type GetFullReservesIncentiveDataData =
  AAVEv3UiIncentiveDataProviderAPIResponseFullReservesIncentiveData;

export interface GetFullReservesIncentiveDataParams {
  chain_id: string;
  contract_address: string;
  provider: string;
  user: string;
}

export type GetFusionByAddressData = ThenaAPIResponse;

export type GetFusionsByTypeData = ThenaAPIResponse;

export type GetFusionsData = ThenaAPIResponse;

export type GetGasPriceData = ThorSwapAPIResponseGasPrice;

export interface GetGasPriceParams {
  address: string;
  chainId: string;
}

export type GetIncomeStatementsData = IncomeStatementsAPIResponse;

export interface GetIncomeStatementsParams {
  cik?: string;
  /** @format double */
  limit?: number;
  period: PeriodEnum;
  ticker: string;
}

export enum GetIncomeStatementsParams1PeriodEnum {
  Annual = 'annual',
  Quarterly = 'quarterly',
  Ttm = 'ttm',
}

export type GetIndexedRouteMapData = JupiterAPIResponseAny;

export interface GetIndexedRouteMapParams {
  onlyDirectRoutes?: boolean;
}

export type GetInfoData = RamsesAPIResponse;

export type GetInsiderTransactionsData = InsiderTransactionsAPIResponse;

export interface GetInsiderTransactionsParams {
  /** @format double */
  limit?: number;
  ticker: string;
}

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

export type GetLendingPoolData = LeveragerAPIResponseString;

export interface GetLendingPoolParams {
  address: string;
  chainId: string;
}

export type GetLendingPoolRevisionData = LendingPoolAPIResponseNumber;

export interface GetLendingPoolRevisionParams {
  address: string;
  chainId: string;
}

export type GetLiquiditySourcesData = OdosAPIResponseOdosExecuteFunctionResult;

export interface GetLiquiditySourcesParams {
  /** @format double */
  chainId: number;
}

export type GetLitecoinAccountData = AccountAPIResponse;

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

export type GetMarketIdData = PoolAddressProviderAPIResponseString;

export interface GetMarketIdParams {
  account: string;
  address: string;
  chainId: string;
}

export interface GetMarketParams {
  account: string;
  chainId: string;
  conditionId: string;
}

export type GetMarketReferenceCurrencyPriceInUsdProxyAggregatorData =
  AAVEv3UiPoolDataProviderAPIResponseString;

export interface GetMarketReferenceCurrencyPriceInUsdProxyAggregatorParams {
  chain_id: string;
  contract_address: string;
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

export type GetMaxDepositData = ERC4626APIResponse;

export interface GetMaxDepositParams {
  account: string;
  address: string;
  chainId: string;
  receiver: string;
}

export type GetMaxMintData = ERC4626APIResponse;

export interface GetMaxMintParams {
  account: string;
  address: string;
  chainId: string;
  receiver: string;
}

export type GetMaxNumberReservesData = LendingPoolAPIResponseNumber;

export interface GetMaxNumberReservesParams {
  address: string;
  chainId: string;
}

export type GetMaxRedeemData = ERC4626APIResponse;

export interface GetMaxRedeemParams {
  account: string;
  address: string;
  chainId: string;
  owner: string;
}

export type GetMaxStableRateBorrowSizePercentData =
  LendingPoolAPIResponseNumber;

export interface GetMaxStableRateBorrowSizePercentParams {
  address: string;
  chainId: string;
}

export type GetMaxWithdrawData = ERC4626APIResponse;

export interface GetMaxWithdrawParams {
  account: string;
  address: string;
  chainId: string;
  owner: string;
}

export type GetMessageData = PingResponse;

export type GetMinHfData = LeveragerAPIResponseString;

export interface GetMinHfParams {
  address: string;
  chainId: string;
}

export type GetNameData = ERC20APIResponseString;

export interface GetNameParams {
  account: string;
  address: string;
  chainId: string;
}

export interface GetNameParams2 {
  address: string;
  chainId: string;
}

export type GetNameResult = LynexNFTAPIResponseString;

export type GetNetworkBaseTokenPriceInUsdProxyAggregatorData =
  AAVEv3UiPoolDataProviderAPIResponseString;

export interface GetNetworkBaseTokenPriceInUsdProxyAggregatorParams {
  chain_id: string;
  contract_address: string;
}

export type GetNfTsData = NFTsAPIResponse;

export interface GetNfTsParams {
  address: string;
  chain: string;
}

export type GetNftData = OpenSeaAPIResponse;

export interface GetNftParams {
  account: string;
  address: string;
  /** @default "1" */
  chainId?: string;
  tokenId: string;
}

export type GetNonceData = NonceAPIResponse;

export interface GetNonceParams {
  accountName: string;
  chainId: string;
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

export type GetOptionsChainData = OptionsChainAPIResponse;

export interface GetOptionsChainParams {
  expiration_date?: string;
  option_type?: OptionTypeEnum;
  /** @format double */
  strike_price?: number;
  ticker: string;
}

export enum GetOptionsChainParams1OptionTypeEnum {
  Call = 'call',
  Put = 'put',
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

export type GetPoolConfiguratorData = PoolAddressProviderAPIResponseString;

export interface GetPoolConfiguratorParams {
  account: string;
  address: string;
  chainId: string;
}

export type GetPoolData = PoolAddressProviderAPIResponseString;

export interface GetPoolParams {
  account: string;
  address: string;
  chainId: string;
}

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

export type GetPortfolioStatusData = PortfolioAPIResponse;

export type GetPreviewDepositData = ERC4626APIResponse;

export interface GetPreviewDepositParams {
  account: string;
  address: string;
  assets: string;
  chainId: string;
}

export type GetPreviewMintData = ERC4626APIResponse;

export interface GetPreviewMintParams {
  account: string;
  address: string;
  chainId: string;
  shares: string;
}

export type GetPreviewRedeemData = ERC4626APIResponse;

export interface GetPreviewRedeemParams {
  account: string;
  address: string;
  chainId: string;
  shares: string;
}

export type GetPreviewWithdrawData = ERC4626APIResponse;

export interface GetPreviewWithdrawParams {
  account: string;
  address: string;
  assets: string;
  chainId: string;
}

export type GetPriceOracleData = PoolAddressProviderAPIResponseString;

export interface GetPriceOracleParams {
  account: string;
  address: string;
  chainId: string;
}

export type GetPriceSnapshotData = PriceSnapshotAPIResponse;

export type GetPricesData = PricesAPIResponse;

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

export interface GetPricesParams {
  end_date: string;
  interval: PriceInterval;
  /** @format double */
  interval_multiplier: number;
  /** @format double */
  limit?: number;
  start_date: string;
  ticker: string;
}

export type GetProgramIdToLabelData = JupiterAPIResponseRecordStringString;

export type GetQuoteData = JupiterAPIResponseJupiterExecuteFunctionResult;

export type GetQuoteOutput = OdosAPIResponseOdosExecuteFunctionResult;

export interface GetQuoteParams1 {
  allowBridges?: string[];
  allowExchanges?: string[];
  denyBridges?: string[];
  denyExchanges?: string[];
  /** @format double */
  fee?: number;
  fromAddress: string;
  fromAmount: string;
  fromChain: string;
  fromToken: string;
  integrator?: string;
  order?: OrderEnum;
  preferBridges?: string[];
  preferExchanges?: string[];
  referrer?: string;
  /** @format double */
  slippage?: number;
  toAddress?: string;
  toChain: string;
  toToken: string;
}

export enum GetQuoteParams2OrderEnum {
  BEST_VALUE = 'BEST_VALUE',
  BEST_FEE = 'BEST_FEE',
  BEST_FEE_GAS = 'BEST_FEE_GAS',
}

export interface GetQuoteParams4 {
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

export type GetQuoteResult = ApiResponseQuote;

export type GetQuoteResult1 = ThorSwapAPIResponseQuote;

export type GetReserveDataData = AavePoolAPIResponseAny;

export interface GetReserveDataParams {
  account: string;
  address: string;
  asset: string;
  chainId: string;
}

export interface GetReserveDataParams2 {
  address: string;
  asset: string;
  chainId: string;
}

export type GetReserveDataResult = LendingPoolAPIResponseAny;

export type GetReservesData =
  RamsesRouterAPIResponseReserve03AstringReserve13Astring;

export type GetReservesDataData =
  AAVEv3UiPoolDataProviderAPIResponseReservesData;

export interface GetReservesDataParams {
  chain_id: string;
  contract_address: string;
  provider: string;
}

export type GetReservesIncentivesDataData =
  AAVEv3UiIncentiveDataProviderAPIResponseAggregatedReserveIncentiveDataArray;

export interface GetReservesIncentivesDataParams {
  chain_id: string;
  contract_address: string;
  provider: string;
}

export type GetReservesListData =
  AAVEv3UiPoolDataProviderAPIResponseStringArray;

export interface GetReservesListParams {
  chain_id: string;
  contract_address: string;
  provider: string;
}

export interface GetReservesListParams2 {
  address: string;
  chainId: string;
}

export type GetReservesListResult = LendingPoolAPIResponseStringArray;

export interface GetReservesParams {
  address: string;
  chainId: string;
  stable: boolean;
  tokenA: string;
  tokenB: string;
}

export type GetRewardsByAssetData = AAVEv3RewardsAPIResponseStringArray;

export interface GetRewardsByAssetParams {
  account: string;
  address: string;
  asset: string;
  chainId: string;
}

export type GetRewardsDataData = AAVEv3RewardsAPIResponseStringArray;

export interface GetRewardsDataParams {
  account: string;
  address: string;
  asset: string;
  chainId: string;
  reward: string;
}

export type GetRippleAccountData = AccountAPIResponse;

export type GetRoleAdminData = LeveragerAPIResponseString;

export interface GetRoleAdminParams {
  address: string;
  chainId: string;
  role: string;
}

export type GetRouterAddressData = OdosAPIResponseOdosExecuteFunctionResult;

export interface GetRouterAddressParams {
  /** @format double */
  chainId: number;
  version: VersionEnum1;
}

export enum GetRouterAddressParams1VersionEnum {
  V2 = 'v2',
}

export type GetScheduledJobsData = MultiCallAPIResponseAnyArray;

export type GetSegmentedRevenuesData = SegmentedRevenuesAPIResponse;

export interface GetSegmentedRevenuesParams {
  cik?: string;
  /** @format double */
  limit?: number;
  period: PeriodEnum3;
  ticker: string;
}

export enum GetSegmentedRevenuesParams1PeriodEnum {
  Annual = 'annual',
  Quarterly = 'quarterly',
}

export type GetSolanaAccountData = AccountAPIResponse;

export type GetSupportedChainsData = OdosAPIResponseOdosExecuteFunctionResult;

export interface GetSupportedChainsParams1 {
  address: string;
  chainId: string;
}

export type GetSupportedChainsResult = ThorSwapAPIResponseStringArray;

export interface GetSupportedOnRampsResponse {
  message: {
    displayName: string;
    icon: string;
    icons: {
      png: {
        '160x160': string;
        '32x32': string;
      };
      svg: string;
    };
    id: string;
  }[];
}

export type GetSupportedProvidersData = ThorSwapAPIResponseStringArray;

export interface GetSupportedProvidersParams {
  address: string;
  chainId: string;
}

export type GetSupportedTokensData = OdosAPIResponseOdosExecuteFunctionResult;

export interface GetSupportedTokensParams {
  /** @format double */
  chainId: number;
}

export type GetSwapInstructionsData =
  JupiterAPIResponseJupiterExecuteFunctionResult;

export type GetSymbolData = ERC20APIResponseString;

export interface GetSymbolParams {
  account: string;
  address: string;
  chainId: string;
}

export interface GetSymbolParams2 {
  address: string;
  chainId: string;
}

export type GetSymbolResult = LynexNFTAPIResponseString;

export type GetTokenByIndexData = LynexNFTAPIResponseString;

export interface GetTokenByIndexParams {
  address: string;
  chainId: string;
  index: string;
}

export type GetTokenMetadataData = TokenMetadataAPIResponse;

export type GetTokenMetadataJSONResponse = SuccessResponse249;

export interface GetTokenMetadataParams {
  addresses: string[];
  chain: string;
}

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

export type GetTokensData = JupiterAPIResponseStringArray;

export type GetTokensResult = RamsesAPIResponse;

export type GetToolsData = ApiResponseToolsResponse;

export interface GetToolsParams {
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

export type GetTotalAssetsData = ERC4626APIResponse;

export interface GetTotalAssetsParams {
  account: string;
  address: string;
  chainId: string;
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

export type GetTotalSupplyData = ERC20APIResponseString;

export type GetTotalSupplyData1 = RamsesNFTAPIResponseString;

export type GetTotalSupplyOutput = LynexNFTAPIResponseString;

export interface GetTotalSupplyParams {
  account: string;
  address: string;
  chainId: string;
}

export interface GetTotalSupplyParams2 {
  account: string;
  address: string;
  chainId: string;
}

export interface GetTotalSupplyParams4 {
  address: string;
  chainId: string;
}

export interface GetTotalSupplyParams6 {
  address: string;
  chainId: string;
}

export interface GetTotalSupplyParams8 {
  address: string;
  chainId: string;
}

export type GetTotalSupplyResult = ERC4626APIResponse;

export type GetTotalSupplyResult1 = VeTheNFTAPIResponseString;

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

export type GetTronAccountData = AccountAPIResponse;

export type GetUserAccountDataData = AavePoolAPIResponseAny;

export interface GetUserAccountDataParams {
  account: string;
  address: string;
  chainId: string;
  user: string;
}

export interface GetUserAccountDataParams2 {
  address: string;
  chainId: string;
  user: string;
}

export type GetUserAccountDataResult = LendingPoolAPIResponseAny;

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

export type GetUserPortfolioData = PortfolioAPIResponse;

export interface GetUserPortfolioParams {
  address: string;
  /**
   * @format double
   * @default 1
   */
  page?: number;
  /**
   * @format double
   * @default 100
   */
  pageSize?: number;
}

export type GetUserReservesDataData =
  AAVEv3UiPoolDataProviderAPIResponseUserReserveDataArray;

export interface GetUserReservesDataParams {
  chain_id: string;
  contract_address: string;
  provider: string;
  user: string;
}

export type GetUserReservesIncentivesDataData =
  AAVEv3UiIncentiveDataProviderAPIResponseUserReserveIncentiveDataArray;

export interface GetUserReservesIncentivesDataParams {
  chain_id: string;
  contract_address: string;
  provider: string;
  user: string;
}

export type GetUserRewardsData = AAVEv3RewardsAPIResponseString;

export interface GetUserRewardsParams {
  account: string;
  address: string;
  assets: string[];
  chainId: string;
  reward: string;
  user: string;
}

export type GetUserWalletBalancesData =
  AAVEv3WalletBalanceProviderAPIResponseTokensStringArrayBalancesStringArray;

export interface GetUserWalletBalancesParams {
  chain_id: string;
  contract_address: string;
  provider: string;
  user: string;
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

export type GetWalletBalanceData = WalletBalanceAPIResponse;

export interface GetWalletBalanceParams {
  address: string;
  chain: string;
  excludeNative?: boolean;
}

export type GetWalletHistoryData = WalletHistoryAPIResponse;

export interface GetWalletHistoryParams {
  address: string;
  chain: string;
}

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

export type GetWethData = LeveragerAPIResponseString;

export type GetWethOutput = RamsesRouterAPIResponseString;

export interface GetWethParams {
  address: string;
  chainId: string;
}

export interface GetWethParams2 {
  address: string;
  chainId: string;
}

export interface GetWethParams4 {
  address: string;
  chainId: string;
}

export interface GetWethParams6 {
  account: string;
  address: string;
  chainId: string;
}

export type GetWethResult = LynexRouterAPIResponseString;

export type GetWethResult1 = UniswapV2APIResponseUniswapV2ExecuteFunctionResult;

export type GetZapQuoteData = OdosAPIResponseOdosExecuteFunctionResult;

export type GetstatusData = ApiResponseStatusResponse;

export interface GetstatusParams {
  txHash: string;
}

export type GlobalCheckpointData =
  LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type GrantRoleData = LeveragerAPIResponseLeveragerExecuteFunctionResult;

export type HasRoleData = LeveragerAPIResponseBoolean;

export interface HasRoleParams {
  account: string;
  address: string;
  chainId: string;
  role: string;
}

export interface IncentiveData {
  incentiveControllerAddress: string;
  rewardsTokenInformation: RewardInfo[];
  tokenAddress: string;
}

export interface IncomeStatement {
  calendar_date: string;
  /** @format double */
  consolidated_income: number;
  /** @format double */
  cost_of_revenue: number;
  currency: string;
  /** @format double */
  dividends_per_common_share: number;
  /** @format double */
  earnings_per_share: number;
  /** @format double */
  earnings_per_share_diluted: number;
  /** @format double */
  ebit: number;
  /** @format double */
  gross_profit: number;
  /** @format double */
  income_tax_expense: number;
  /** @format double */
  interest_expense: number;
  /** @format double */
  net_income: number;
  /** @format double */
  net_income_common_stock: number;
  /** @format double */
  net_income_discontinued_operations: number;
  /** @format double */
  net_income_non_controlling_interests: number;
  /** @format double */
  operating_expense: number;
  /** @format double */
  operating_income: number;
  period: IncomeStatementPeriodEnum;
  /** @format double */
  preferred_dividends_impact: number;
  report_period: string;
  /** @format double */
  research_and_development: number;
  /** @format double */
  revenue: number;
  /** @format double */
  selling_general_and_administrative_expenses: number;
  ticker: string;
  /** @format double */
  weighted_average_shares: number;
  /** @format double */
  weighted_average_shares_diluted: number;
}

export enum IncomeStatementPeriodEnum {
  Quarterly = 'quarterly',
  Ttm = 'ttm',
  Annual = 'annual',
}

export interface IncomeStatementsAPIResponse {
  address?: string;
  body?: InputBody;
  data?: IncomeStatement[];
  message: string;
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

export interface InputBody {
  EOA?: boolean;
  accessList?: AccessTuple[];
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amounts?: string[];
  approved?: boolean;
  asset?: string;
  assets?: string[];
  blobGas?: string;
  blobGasFeeCap?: string;
  blobHashes?: string[];
  borrowAmount?: string | number;
  broadcast?: boolean;
  chain_id?: string;
  collateralAsset?: string;
  contract_address?: string;
  data?: string;
  debtAsset?: string;
  debtToCover?: string;
  dryrun?: boolean;
  encoding?: string;
  gas?: string;
  gasLimit?: string;
  gasPrice?: string;
  initialDeposit?: string | number;
  initiator?: string;
  input?: string;
  inputTokens?: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  minHealthFactor?: string | number;
  modes?: number[];
  nonce?: string;
  onBehalfOf?: string;
  outputTokens?: TokenProportion[];
  params?: string;
  premiums?: string[] | number[];
  /** @format double */
  rateMode?: number;
  receiveAToken?: boolean;
  receiverAddress?: string;
  /** @format double */
  referralCode?: number;
  role?: string;
  simulate?: boolean;
  /** @format double */
  slippageLimitPercent?: number;
  to?: string;
  token_id?: string;
  token_ids?: string;
  /** @format double */
  type?: number;
  useAsCollateral?: boolean;
  user?: string;
  value?: string;
}

export interface InsiderTransaction {
  filing_date: string;
  is_board_director: boolean;
  issuer: string;
  name: string;
  security_title: string;
  /** @format double */
  shares_owned_after_transaction: number;
  /** @format double */
  shares_owned_before_transaction: number;
  ticker: string;
  title: string;
  transaction_date: string;
  /** @format double */
  transaction_price_per_share: number;
  /** @format double */
  transaction_shares: number;
  /** @format double */
  transaction_value: number;
}

export interface InsiderTransactionsAPIResponse {
  address?: string;
  body?: InputBody;
  data?: InsiderTransaction[];
  message: string;
  success: boolean;
}

export type IsApprovedForAllData = TransactionAPIResponse;

export type IsApprovedForAllOutput = UniswapV3NFTAPIResponseBoolean;

export interface IsApprovedForAllParams1 {
  address: string;
  chainId: string;
  operator: string;
  owner: string;
}

export interface IsApprovedForAllParams3 {
  address: string;
  chainId: string;
  operator: string;
  owner: string;
}

export interface IsApprovedForAllParams5 {
  address: string;
  chainId: string;
  operator: string;
  owner: string;
}

export type IsApprovedForAllResult = LynexNFTAPIResponseBoolean;

export type IsApprovedForAllResult1 = VeTheNFTAPIResponseBoolean;

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

export type IsPausedData = LendingPoolAPIResponseBoolean;

export interface IsPausedParams {
  address: string;
  chainId: string;
}

export interface IsPausedParams2 {
  address: string;
  chainId: string;
}

export type IsPausedResult = LeveragerAPIResponseBoolean;

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

export type Json =
  | string
  | number
  | boolean
  | Record<string, Json>
  | Json[]
  | null;

export interface JupiterAPIResponseAny {
  data?: any;
  message: string;
  success: boolean;
}

export interface JupiterAPIResponseJupiterExecuteFunctionResult {
  data?: JupiterExecuteFunctionResult;
  message: string;
  success: boolean;
}

export interface JupiterAPIResponseRecordStringString {
  /** Construct a type with a set of properties K of type T */
  data?: RecordStringString;
  message: string;
  success: boolean;
}

export interface JupiterAPIResponseStringArray {
  data?: string[];
  message: string;
  success: boolean;
}

export interface JupiterExecuteFunctionResult {
  data?: any;
  function: string;
  jupiter?: any;
  message?: string;
  params: any[];
  success?: boolean;
  transaction?: any;
  transactionHash?: string;
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

export interface LendingPoolAPIResponseAny {
  data?: any;
  message: string;
  success: boolean;
}

export interface LendingPoolAPIResponseBoolean {
  data?: boolean;
  message: string;
  success: boolean;
}

export interface LendingPoolAPIResponseLendingPoolExecuteFunctionResult {
  data?: LendingPoolExecuteFunctionResult;
  message: string;
  success: boolean;
}

export interface LendingPoolAPIResponseNumber {
  /** @format double */
  data?: number;
  message: string;
  success: boolean;
}

export interface LendingPoolAPIResponseString {
  data?: string;
  message: string;
  success: boolean;
}

export interface LendingPoolAPIResponseStringArray {
  data?: string[];
  message: string;
  success: boolean;
}

export interface LendingPoolExecuteFunctionResult {
  broadcasted?: BroadCastRawTransactionResponse;
  data?: Transaction;
  function: string;
  message?: string;
  params: any[];
  /** Response object for the {@link TransactNamespace.simulateAssetChanges } method. */
  simulation?: SimulateAssetChangesResponse;
  success?: boolean;
  transaction: LendingPoolTransaction;
  user_op?: string;
}

export interface LendingPoolInputBody {
  EOA?: boolean;
  accessList?: AccessTuple[];
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amounts?: string[];
  approved?: boolean;
  asset?: string;
  assets?: string[];
  blobGas?: string;
  blobGasFeeCap?: string;
  blobHashes?: string[];
  borrowAmount?: string | number;
  broadcast?: boolean;
  chain_id?: string;
  collateralAsset?: string;
  contract_address?: string;
  data?: string;
  debtAsset?: string;
  debtToCover?: string;
  dryrun?: boolean;
  encoding?: string;
  gas?: string;
  gasLimit?: string;
  gasPrice?: string;
  initialDeposit?: string | number;
  initiator?: string;
  input?: string;
  inputTokens?: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  minHealthFactor?: string | number;
  modes?: number[];
  nonce?: string;
  onBehalfOf?: string;
  outputTokens?: TokenProportion[];
  params?: string;
  premiums?: string[] | number[];
  /** @format double */
  rateMode?: number;
  receiveAToken?: boolean;
  receiverAddress?: string;
  /** @format double */
  referralCode?: number;
  role?: string;
  simulate?: boolean;
  /** @format double */
  slippageLimitPercent?: number;
  to?: string;
  token_id?: string;
  token_ids?: string;
  /** @format double */
  type?: number;
  useAsCollateral?: boolean;
  user?: string;
  value?: string;
}

export interface LendingPoolTransaction {
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

export type LeverageErc20Data =
  LeveragerAPIResponseLeveragerExecuteFunctionResult;

export type LeverageNativeData =
  LeveragerAPIResponseLeveragerExecuteFunctionResult;

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

export interface LeveragerExecuteFunctionResult {
  broadcasted?: BroadCastRawTransactionResponse;
  data?: Transaction;
  function: string;
  message?: string;
  params: any[];
  /** Response object for the {@link TransactNamespace.simulateAssetChanges } method. */
  simulation?: SimulateAssetChangesResponse;
  success?: boolean;
  transaction: LeveragerTransaction;
  user_op?: string;
}

export interface LeveragerInputBody {
  EOA?: boolean;
  accessList?: AccessTuple[];
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amounts?: string[];
  approved?: boolean;
  asset?: string;
  assets?: string[];
  blobGas?: string;
  blobGasFeeCap?: string;
  blobHashes?: string[];
  borrowAmount?: string;
  broadcast?: boolean;
  chain_id?: string;
  collateralAsset?: string;
  contract_address?: string;
  data?: string;
  debtAsset?: string;
  debtToCover?: string;
  dryrun?: boolean;
  encoding?: string;
  gas?: string;
  gasLimit?: string;
  gasPrice?: string;
  initialDeposit?: string;
  initiator?: string;
  input?: string;
  inputTokens?: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  minHealthFactor?: string;
  modes?: number[];
  nonce?: string;
  onBehalfOf?: string;
  outputTokens?: TokenProportion[];
  params?: string;
  premiums?: string[];
  /** @format double */
  rateMode?: number;
  receiveAToken?: boolean;
  receiverAddress?: string;
  /** @format double */
  referralCode?: number;
  role?: string;
  simulate?: boolean;
  /** @format double */
  slippageLimitPercent?: number;
  to?: string;
  token_id?: string;
  token_ids?: string;
  /** @format double */
  type?: number;
  useAsCollateral?: boolean;
  user?: string;
  value?: string;
}

export interface LeveragerTransaction {
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

export interface LineItemsSearchAPIResponse {
  address?: string;
  body?: InputBody;
  data?: LineItemsSearchResult[];
  message: string;
  success: boolean;
}

export interface LineItemsSearchResult {
  currency: string;
  period: string;
  report_period: string;
  ticker: string;
  [key: string]: any;
}

export type LiquidationCallData =
  AavePoolAPIResponseAavePoolExecuteFunctionResult;

export type LiquidationCallResult =
  LendingPoolAPIResponseLendingPoolExecuteFunctionResult;

export type ListAccountsData = AccountAPIResponse;

export type ListAccountsOutput = CosmosAccountListAPIResponse;

export type ListAccountsResult = BitcoinCashAPIResponseAccountResponse;

export type ListBitcoinAccountsData = AccountAPIResponse;

export type ListDogeCoinAccountsData = AccountAPIResponse;

export type ListEosAccountsData = AccountAPIResponse;

export type ListFlowsData = MultiCallAPIResponseFlowArray;

export type ListJobsData = MultiCallAPIResponseJobsArray;

export type ListLitecoinAccountsData = AccountAPIResponse;

export type ListRippleAccountsData = AccountAPIResponse;

export type ListSolanaAccountsData = AccountAPIResponse;

export type ListTronAccountsData = AccountAPIResponse;

export type ListUserDefinedFunctionsData = MultiCallAPIResponseAnyArray;

export interface LitecoinAPIResponse {
  address?: string;
  body?: InputBody;
  data?: LitecoinTransactionOutput;
  message: string;
  success: boolean;
}

export interface LitecoinInput {
  network?: string;
  private_key?: string;
}

export interface LitecoinTransactionInput {
  compress?: boolean;
  network?: string;
  to?: string;
  /** @format double */
  value?: number;
}

export interface LitecoinTransactionOutput {
  signedTx?: string;
  transaction_hash?: string;
}

export interface LockedData {
  amount: string;
  end: string;
}

export interface LynexAPIResponse {
  data?: any;
  message: string;
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
  broadcasted?: BroadCastRawTransactionResponse;
  data?: Transaction;
  function: string;
  message?: string;
  params: any[];
  /** Response object for the {@link TransactNamespace.simulateAssetChanges } method. */
  simulation?: SimulateAssetChangesResponse;
  success?: boolean;
  transaction: LynexNFTTransaction;
  user_op?: string;
}

export interface LynexNFTInputBody {
  EOA?: boolean;
  accessList?: AccessTuple[];
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amounts?: string[];
  approved?: boolean;
  asset?: string;
  assets?: string[];
  blobGas?: string;
  blobGasFeeCap?: string;
  blobHashes?: string[];
  borrowAmount?: string | number;
  broadcast?: boolean;
  chain_id?: string;
  collateralAsset?: string;
  contract_address?: string;
  data?: string;
  debtAsset?: string;
  debtToCover?: string;
  delegatee?: string;
  dryrun?: boolean;
  encoding?: string;
  expiry?: string;
  gas?: string;
  gasLimit?: string;
  gasPrice?: string;
  initialDeposit?: string | number;
  initiator?: string;
  input?: string;
  inputTokens?: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
  lockDuration?: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  minHealthFactor?: string | number;
  modes?: number[];
  nonce?: string;
  onBehalfOf?: string;
  operator?: string;
  outputTokens?: TokenProportion[];
  params?: string;
  permanent?: boolean;
  premiums?: string[] | number[];
  r?: string;
  /** @format double */
  rateMode?: number;
  receiveAToken?: boolean;
  receiverAddress?: string;
  /** @format double */
  referralCode?: number;
  role?: string;
  s?: string;
  simulate?: boolean;
  /** @format double */
  slippageLimitPercent?: number;
  splitWeights?: string[];
  to?: string;
  tokenId?: string;
  token_id?: string;
  token_ids?: string;
  /** @format double */
  type?: number;
  useAsCollateral?: boolean;
  user?: string;
  v?: string;
  value?: string;
}

export interface LynexNFTTransaction {
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
  broadcasted?: BroadCastRawTransactionResponse;
  data?: Transaction;
  function: string;
  message?: string;
  params: any[];
  /** Response object for the {@link TransactNamespace.simulateAssetChanges } method. */
  simulation?: SimulateAssetChangesResponse;
  success?: boolean;
  transaction: LynexRouterTransaction;
  user_op?: string;
}

export interface LynexRouterInputBody {
  EOA?: boolean;
  accessList?: AccessTuple[];
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amountADesired: string;
  amountAMin: string;
  amountBDesired: string;
  amountBMin: string;
  amountETHMin: string;
  amountIn: string;
  amountOutMin: string;
  amountTokenDesired: string;
  amountTokenMin: string;
  amounts?: string[];
  approved?: boolean;
  asset?: string;
  assets?: string[];
  blobGas?: string;
  blobGasFeeCap?: string;
  blobHashes?: string[];
  borrowAmount?: string | number;
  broadcast?: boolean;
  chain_id?: string;
  collateralAsset?: string;
  contract_address?: string;
  data?: string;
  deadline: string;
  debtAsset?: string;
  debtToCover?: string;
  dryrun?: boolean;
  encoding?: string;
  gas?: string;
  gasLimit?: string;
  gasPrice?: string;
  initialDeposit?: string | number;
  initiator?: string;
  input?: string;
  inputTokens?: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  minHealthFactor?: string | number;
  modes?: number[];
  nonce?: string;
  onBehalfOf?: string;
  outputTokens?: TokenProportion[];
  params?: string;
  premiums?: string[] | number[];
  /** @format double */
  rateMode?: number;
  receiveAToken?: boolean;
  receiverAddress?: string;
  /** @format double */
  referralCode?: number;
  role?: string;
  routes: any[];
  simulate?: boolean;
  /** @format double */
  slippageLimitPercent?: number;
  stable: string;
  to?: string;
  token: string;
  tokenA: string;
  tokenB: string;
  token_id?: string;
  token_ids?: string;
  /** @format double */
  type?: number;
  useAsCollateral?: boolean;
  user?: string;
  value?: string;
}

export interface LynexRouterTransaction {
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
  broadcasted?: BroadCastRawTransactionResponse;
  data?: Transaction;
  function: string;
  message?: string;
  params: any[];
  /** Response object for the {@link TransactNamespace.simulateAssetChanges } method. */
  simulation?: SimulateAssetChangesResponse;
  success?: boolean;
  transaction: LynexVoterTransaction;
  user_op?: string;
}

export interface LynexVoterInputBody {
  EOA?: boolean;
  accessList?: AccessTuple[];
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amounts?: string[];
  approved?: boolean;
  asset?: string;
  assets?: string[];
  blobGas?: string;
  blobGasFeeCap?: string;
  blobHashes?: string[];
  borrowAmount?: string | number;
  bribes?: string[];
  broadcast?: boolean;
  chain_id?: string;
  collateralAsset?: string;
  contract_address?: string;
  data?: string;
  debtAsset?: string;
  debtToCover?: string;
  dryrun?: boolean;
  encoding?: string;
  fees?: string[];
  gas?: string;
  gasLimit?: string;
  gasPrice?: string;
  gauge?: string;
  gauge_type?: string;
  gauges?: string[];
  initialDeposit?: string | number;
  initiator?: string;
  input?: string;
  inputTokens?: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  minHealthFactor?: string | number;
  modes?: number[];
  nonce?: string;
  onBehalfOf?: string;
  outputTokens?: TokenProportion[];
  params?: string;
  pool?: string;
  pool_vote?: string[];
  premiums?: string[] | number[];
  /** @format double */
  rateMode?: number;
  receiveAToken?: boolean;
  receiverAddress?: string;
  /** @format double */
  referralCode?: number;
  role?: string;
  simulate?: boolean;
  /** @format double */
  slippageLimitPercent?: number;
  to?: string;
  token_id?: string;
  token_ids?: string;
  tokens?: string[][];
  /** @format double */
  type?: number;
  useAsCollateral?: boolean;
  user?: string;
  value?: string;
  weights?: string[];
}

export interface LynexVoterTransaction {
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
  crypto: CryptoCurrency[];
  fiat: FiatCurrency[];
}

export type MintData = ERC4626APIResponse;

export type MintResult = UniswapV3NFTAPIResponseUniswapV3ExecuteFunctionResult;

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

export interface NFTsAPIResponse {
  address?: string;
  body?: InputBody;
  data?: any[];
  message: string;
  success: boolean;
}

export type NameData = UniswapV3NFTAPIResponseString;

export interface NameParams {
  address: string;
  chainId: string;
}

export interface NonceAPIResponse {
  address?: string;
  body?: InputBody;
  data?: NonceResponse;
  message: string;
  success: boolean;
}

export interface NonceResponse {
  /** @format double */
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

export interface OdosAPIResponseOdosExecuteFunctionResult {
  data?: OdosExecuteFunctionResult;
  message: string;
  success: boolean;
}

export interface OdosExecuteFunctionResult {
  broadcasted?: BroadCastRawTransactionResponse;
  data?: any;
  function: string;
  message?: string;
  odos?: any;
  params: any[];
  success?: boolean;
  transaction?: OdosTransaction;
  user_op?: string;
}

export interface OdosSwapInputBody {
  EOA?: boolean;
  accessList?: AccessTuple[];
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amounts?: string[];
  approved?: boolean;
  asset?: string;
  assets?: string[];
  blobGas?: string;
  blobGasFeeCap?: string;
  blobHashes?: string[];
  borrowAmount?: string | number;
  broadcast?: boolean;
  chain_id?: string;
  collateralAsset?: string;
  compact?: boolean;
  contract_address?: string;
  data?: string;
  debtAsset?: string;
  debtToCover?: string;
  disableRFQs?: boolean;
  dryrun?: boolean;
  encoding?: string;
  gas?: string;
  gasLimit?: string;
  gasPrice?: string;
  initialDeposit?: string | number;
  initiator?: string;
  input?: string;
  inputTokens: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
  likeAsset?: boolean;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  minHealthFactor?: string | number;
  modes?: number[];
  nonce?: string;
  onBehalfOf?: string;
  outputTokens: TokenProportion[];
  params?: string;
  pathViz?: boolean;
  pathVizImage?: boolean;
  pathVizImageConfig?: PathVizImageConfig;
  poolBlacklist?: string[];
  premiums?: string[] | number[];
  /** @format double */
  rateMode?: number;
  receiveAToken?: boolean;
  receiverAddress?: string;
  /** @format double */
  referralCode?: number;
  role?: string;
  simple?: boolean;
  simulate?: boolean;
  /** @format double */
  slippageLimitPercent?: number;
  sourceBlacklist?: string[];
  sourceWhitelist?: string[];
  to?: string;
  token_id?: string;
  token_ids?: string;
  /** @format double */
  type?: number;
  useAsCollateral?: boolean;
  user?: string;
  value?: string;
}

export interface OdosTransaction {
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

export interface OpenSeaCollectionInputBody {
  /** @format double */
  amount: number;
  broadcast?: boolean;
  chainId?: string;
  collectionSlug: string;
  data?: string;
  dryrun?: boolean;
  gas?: string;
  gasPrice?: string;
  nonce?: string;
  paymentTokenAddress?: string;
  /** @format double */
  quantity: number;
  to?: string;
  value?: string;
}

export interface OpenSeaNFTInputBody {
  /** Generic Blockchain Asset. */
  asset: Asset;
  broadcast?: boolean;
  chainId?: string;
  data?: string;
  dryrun?: boolean;
  /** @format double */
  expirationTime?: number;
  gas?: string;
  gasPrice?: string;
  nonce?: string;
  /** @format double */
  startAmount: number;
  to?: string;
  value?: string;
}

export enum OptionTypeEnum {
  Call = 'call',
  Put = 'put',
}

export enum OptionalChainTypesEnum {
  EVM = 'EVM',
  SOL = 'SOL',
}

export interface OptionsChainAPIResponse {
  address?: string;
  body?: InputBody;
  data?: OptionsChainItem[];
  message: string;
  success: boolean;
}

export interface OptionsChainItem {
  /** @format double */
  ask_price: number;
  /** @format double */
  ask_size: number;
  /** @format double */
  bid_price: number;
  /** @format double */
  bid_size: number;
  expiration_date: string;
  /** @format double */
  last_trade_price: number;
  /** @format double */
  last_trade_size: number;
  last_trade_time: string;
  /** @format double */
  last_trade_time_nanoseconds: number;
  /** @format double */
  open_interest: number;
  /** @format double */
  shares_per_contract: number;
  /** @format double */
  strike_price: number;
  ticker: string;
  type: OptionsChainItemTypeEnum;
  /** @format double */
  volume: number;
}

export enum OptionsChainItemTypeEnum {
  Call = 'Call',
  Put = 'Put',
}

export interface OrderBookSummary {
  asks: OrderSummary[];
  asset_id: string;
  bids: OrderSummary[];
  hash: string;
  market: string;
  timestamp: string;
}

export enum OrderEnum {
  BEST_VALUE = 'BEST_VALUE',
  BEST_FEE = 'BEST_FEE',
  BEST_FEE_GAS = 'BEST_FEE_GAS',
}

export enum OrderEnum1 {
  BEST_VALUE = 'BEST_VALUE',
  BEST_FEE = 'BEST_FEE',
  BEST_FEE_GAS = 'BEST_FEE_GAS',
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
  code?: string;
  /** @format date-time */
  created_at?: string;
  description?: string;
  id?: string;
  is_active?: boolean;
  name?: string;
  /** @format date-time */
  updated_at?: string;
  version?: string;
  xmlTag?: string;
}

export interface PathVizImageConfig {
  /** @format double */
  height?: number;
  legendTextColor?: string;
  linkColors?: string[];
  nodeColor?: string;
  nodeTextColor?: string;
  /** @format double */
  width?: number;
}

export type PauseData = LeveragerAPIResponseLeveragerExecuteFunctionResult;

export interface PaymentType {
  icon: string;
  name: string;
  paymentTypeId: string;
}

export enum PeriodEnum {
  Annual = 'annual',
  Quarterly = 'quarterly',
  Ttm = 'ttm',
}

export enum PeriodEnum1 {
  Annual = 'annual',
  Quarterly = 'quarterly',
  Ttm = 'ttm',
}

export enum PeriodEnum2 {
  Annual = 'annual',
  Quarterly = 'quarterly',
  Ttm = 'ttm',
}

export enum PeriodEnum3 {
  Annual = 'annual',
  Quarterly = 'quarterly',
}

export enum PeriodEnum4 {
  Annual = 'annual',
  Quarterly = 'quarterly',
  Ttm = 'ttm',
}

export type PermitData = UniswapV3NFTAPIResponseUniswapV3ExecuteFunctionResult;

export type PermitTypehashData = UniswapV3NFTAPIResponseString;

export interface PermitTypehashParams {
  address: string;
  chainId: string;
}

/** From T, pick a set of properties whose keys are in the union K */
export interface PickComponentDefinitionExcludeKeysId {
  code: string;
  /** @format date-time */
  created_at?: string;
  description: string;
  is_active?: boolean;
  name: string;
  /** @format date-time */
  updated_at?: string;
  version: string;
  xmlTag: string;
}

/** From T, pick a set of properties whose keys are in the union K */
export interface PickJupiterInputBodyExcludeKeysAccountName {
  /** @format double */
  amount: number;
  broadcast?: boolean;
  dryrun?: boolean;
  /** @format double */
  feeBps?: number;
  inputMint: string;
  outputMint: string;
  /** @format double */
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
  broadcasted?: BroadCastRawTransactionResponse;
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

export interface PoolAddressProviderInputBody {
  EOA?: boolean;
  accessList?: AccessTuple[];
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amounts?: string[];
  approved?: boolean;
  asset?: string;
  assets?: string[];
  blobGas?: string;
  blobGasFeeCap?: string;
  blobHashes?: string[];
  borrowAmount?: string | number;
  broadcast?: boolean;
  chain_id?: string;
  collateralAsset?: string;
  contract_address?: string;
  data?: string;
  debtAsset?: string;
  debtToCover?: string;
  dryrun?: boolean;
  encoding?: string;
  gas?: string;
  gasLimit?: string;
  gasPrice?: string;
  initialDeposit?: string | number;
  initiator?: string;
  input?: string;
  inputTokens?: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  minHealthFactor?: string | number;
  modes?: number[];
  newAddress?: string;
  newImplementationAddress?: string;
  newMarketId?: string;
  nonce?: string;
  onBehalfOf?: string;
  outputTokens?: TokenProportion[];
  params?: string;
  premiums?: string[] | number[];
  /** @format double */
  rateMode?: number;
  receiveAToken?: boolean;
  receiverAddress?: string;
  /** @format double */
  referralCode?: number;
  role?: string;
  simulate?: boolean;
  /** @format double */
  slippageLimitPercent?: number;
  to?: string;
  token_id?: string;
  token_ids?: string;
  /** @format double */
  type?: number;
  useAsCollateral?: boolean;
  user?: string;
  value?: string;
}

export interface PoolAddressProviderRegistryAPIResponseAnyArray {
  data?: any[];
  message: string;
  success: boolean;
}

export interface PoolAddressProviderRegistryAPIResponseString {
  data?: string;
  message: string;
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

export interface PortfolioAPIResponse {
  address?: string;
  body?: InputBody;
  data?: {
    address?: string;
    jobId?: string;
    nft_balances?: any[];
    /** @format double */
    page?: number;
    /** @format double */
    pageSize?: number;
    pollUrl?: string;
    reason?: string;
    status?: string;
    token_balances?: any[];
    /** @format double */
    totalNFTs?: number;
    /** @format double */
    totalTokens?: number;
  };
  message: string;
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

export interface PostQuote {
  broadcast: any;
  input: InputBody;
  quote: Quote;
  signed: any;
}

export type PostQuoteData = ApiResponsePostQuote;

export interface PostQuoteParams {
  accountName: string;
  allowBridges?: string[];
  allowExchanges?: string[];
  denyBridges?: string[];
  denyExchanges?: string[];
  /** @format double */
  fee?: number;
  fromAddress: string;
  fromAmount: string;
  fromChain: string;
  fromToken: string;
  integrator?: string;
  order?: OrderEnum1;
  preferBridges?: string[];
  preferExchanges?: string[];
  referrer?: string;
  /** @format double */
  slippage?: number;
  toAddress?: string;
  toChain: string;
  toToken: string;
}

export enum PostQuoteParams1OrderEnum {
  BEST_VALUE = 'BEST_VALUE',
  BEST_FEE = 'BEST_FEE',
  BEST_FEE_GAS = 'BEST_FEE_GAS',
}

export interface PriceData {
  /** @format double */
  close: number;
  /** @format double */
  high: number;
  /** @format double */
  low: number;
  /** @format double */
  open: number;
  time: string;
  /** @format double */
  time_milliseconds: number;
  /** @format double */
  volume: number;
}

export enum PriceInterval {
  Second = 'second',
  Minute = 'minute',
  Day = 'day',
  Week = 'week',
  Month = 'month',
  Quarter = 'quarter',
  Year = 'year',
}

export interface PriceSnapshot {
  /** @format double */
  day_change: number;
  /** @format double */
  day_change_percent: number;
  /** @format double */
  price: number;
  ticker: string;
  time: string;
  /** @format double */
  time_nanoseconds: number;
}

export interface PriceSnapshotAPIResponse {
  address?: string;
  body?: InputBody;
  data?: PriceSnapshot;
  message: string;
  success: boolean;
}

export interface PricesAPIResponse {
  address?: string;
  body?: InputBody;
  data?: PriceData[];
  message: string;
  success: boolean;
}

export type QueryData = any;

export type QueryPayload = string;

export interface Quote {
  action: Action;
  estimate: Estimate;
  id: string;
  includedSteps: Step[];
  tool: string;
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
  broadcasted?: BroadCastRawTransactionResponse;
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
  EOA?: boolean;
  _block?: string;
  _idx?: string;
  _proxy?: string;
  _t?: string;
  _team?: string;
  accessList?: AccessTuple[];
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amounts?: string[];
  approved?: boolean;
  artProxy?: string;
  asset?: string;
  assets?: string[];
  blobGas?: string;
  blobGasFeeCap?: string;
  blobHashes?: string[];
  borrowAmount?: string | number;
  broadcast?: boolean;
  chain_id?: string;
  collateralAsset?: string;
  contract_address?: string;
  data?: string;
  debtAsset?: string;
  debtToCover?: string;
  delegatee?: string;
  dryrun?: boolean;
  encoding?: string;
  expiry?: string;
  from?: string;
  gas?: string;
  gasLimit?: string;
  gasPrice?: string;
  initialDeposit?: string | number;
  initiator?: string;
  input?: string;
  inputTokens?: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
  lock_duration?: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  minHealthFactor?: string | number;
  modes?: number[];
  nonce?: string;
  onBehalfOf?: string;
  operator?: string;
  outputTokens?: TokenProportion[];
  params?: string;
  premiums?: string[] | number[];
  r?: string;
  /** @format double */
  rateMode?: number;
  receiveAToken?: boolean;
  receiverAddress?: string;
  /** @format double */
  referralCode?: number;
  role?: string;
  s?: string;
  simulate?: boolean;
  /** @format double */
  slippageLimitPercent?: number;
  to?: string;
  token?: string;
  tokenId?: string;
  token_id?: string;
  token_ids?: string;
  /** @format double */
  type?: number;
  useAsCollateral?: boolean;
  user?: string;
  /** @format double */
  v?: number;
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
  broadcasted?: BroadCastRawTransactionResponse;
  data?: Transaction;
  function: string;
  message?: string;
  params: any[];
  /** Response object for the {@link TransactNamespace.simulateAssetChanges } method. */
  simulation?: SimulateAssetChangesResponse;
  success?: boolean;
  transaction: RamsesRouterTransaction;
  user_op?: string;
}

export interface RamsesRouterInputBody {
  EOA?: boolean;
  accessList?: AccessTuple[];
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amountADesired?: string;
  amountAMin?: string;
  amountBDesired?: string;
  amountBMin?: string;
  amountETHMin?: string;
  amountIn?: string;
  amountOutMin?: string;
  amountTokenDesired?: string;
  amountTokenMin?: string;
  amounts?: string[];
  approveMax?: boolean;
  approved?: boolean;
  asset?: string;
  assets?: string[];
  blobGas?: string;
  blobGasFeeCap?: string;
  blobHashes?: string[];
  borrowAmount?: string | number;
  broadcast?: boolean;
  chain_id?: string;
  collateralAsset?: string;
  contract_address?: string;
  data?: string;
  deadline?: string;
  debtAsset?: string;
  debtToCover?: string;
  dryrun?: boolean;
  encoding?: string;
  gas?: string;
  gasLimit?: string;
  gasPrice?: string;
  initialDeposit?: string | number;
  initiator?: string;
  input?: string;
  inputTokens?: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
  liquidity?: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  minHealthFactor?: string | number;
  modes?: number[];
  nonce?: string;
  onBehalfOf?: string;
  outputTokens?: TokenProportion[];
  params?: string;
  premiums?: string[] | number[];
  r?: string;
  /** @format double */
  rateMode?: number;
  receiveAToken?: boolean;
  receiverAddress?: string;
  /** @format double */
  referralCode?: number;
  role?: string;
  routes?: {
    from: string;
    stable: boolean;
    to: string;
  }[];
  s?: string;
  simulate?: boolean;
  /** @format double */
  slippageLimitPercent?: number;
  stable?: boolean;
  to?: string;
  token?: string;
  tokenA?: string;
  tokenB?: string;
  tokenFrom?: string;
  tokenTo?: string;
  token_id?: string;
  token_ids?: string;
  /** @format double */
  type?: number;
  useAsCollateral?: boolean;
  user?: string;
  /** @format double */
  v?: number;
  value?: string;
}

export interface RamsesRouterTransaction {
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

export interface RamsesVoterAPIResponseBoolean {
  data?: boolean;
  message: string;
  success: boolean;
}

export interface RamsesVoterAPIResponseRamsesVoterExecuteFunctionResult {
  data?: RamsesVoterExecuteFunctionResult;
  message: string;
  success: boolean;
}

export interface RamsesVoterAPIResponseString {
  data?: string;
  message: string;
  success: boolean;
}

export interface RamsesVoterExecuteFunctionResult {
  broadcasted?: BroadCastRawTransactionResponse;
  data?: Transaction;
  function: string;
  message?: string;
  params: any[];
  /** Response object for the {@link TransactNamespace.simulateAssetChanges } method. */
  simulation?: SimulateAssetChangesResponse;
  success?: boolean;
  transaction: RamsesVoterTransaction;
  user_op?: string;
}

export interface RamsesVoterInputBody {
  EOA?: boolean;
  accessList?: AccessTuple[];
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amounts?: string[];
  approved?: boolean;
  asset?: string;
  assets?: string[];
  blobGas?: string;
  blobGasFeeCap?: string;
  blobHashes?: string[];
  borrowAmount?: string | number;
  bribes?: string[];
  broadcast?: boolean;
  chain_id?: string;
  collateralAsset?: string;
  contract_address?: string;
  data?: string;
  debtAsset?: string;
  debtToCover?: string;
  dryrun?: boolean;
  encoding?: string;
  fees?: string[];
  gas?: string;
  gasLimit?: string;
  gasPrice?: string;
  gauge?: string;
  gauges?: string[];
  initialDeposit?: string | number;
  initiator?: string;
  input?: string;
  inputTokens?: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  minHealthFactor?: string | number;
  modes?: number[];
  nonce?: string;
  onBehalfOf?: string;
  outputTokens?: TokenProportion[];
  params?: string;
  pool?: string;
  pool_vote?: string[];
  premiums?: string[] | number[];
  /** @format double */
  rateMode?: number;
  receiveAToken?: boolean;
  receiverAddress?: string;
  /** @format double */
  referralCode?: number;
  role?: string;
  simulate?: boolean;
  /** @format double */
  slippageLimitPercent?: number;
  to?: string;
  token?: string;
  token_id?: string;
  token_ids?: string;
  tokens?: string[][];
  /** @format double */
  type?: number;
  useAsCollateral?: boolean;
  user?: string;
  value?: string;
  weights?: string[];
}

export interface RamsesVoterTransaction {
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

export type ReadAccountData = BitcoinCashAPIResponseAccountResponse;

/** Construct a type with a set of properties K of type T */
export interface RecordStringAny {
  /** The error message. */
  message: string;
}

/** Construct a type with a set of properties K of type T */
export type RecordStringString = object;

export type RedeemData = ERC4626APIResponse;

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

export type RenounceRoleData =
  LeveragerAPIResponseLeveragerExecuteFunctionResult;

export type RepayData = AavePoolAPIResponseAavePoolExecuteFunctionResult;

export type RepayResult =
  LendingPoolAPIResponseLendingPoolExecuteFunctionResult;

export interface ReservesData {
  aggregatedReserveData: AggregatedReserveData[];
  baseCurrencyInfo: BaseCurrencyInfo;
}

export type ResetData = LynexVoterAPIResponseLynexVoterExecuteFunctionResult;

export type ResetOutput =
  VeTheNftVoterAPIResponseVeTheNftVoterExecuteFunctionResult;

export type ResetResult =
  RamsesVoterAPIResponseRamsesVoterExecuteFunctionResult;

export type ResolveData = EnsResolveAPIResponse;

export type ReviveGaugeData =
  LynexVoterAPIResponseLynexVoterExecuteFunctionResult;

export type ReviveGaugeOutput =
  VeTheNftVoterAPIResponseVeTheNftVoterExecuteFunctionResult;

export type ReviveGaugeResult =
  RamsesVoterAPIResponseRamsesVoterExecuteFunctionResult;

export type RevokeRoleData = LeveragerAPIResponseLeveragerExecuteFunctionResult;

export interface RewardInfo {
  emissionEndTimestamp: BigNumber;
  emissionPerSecond: BigNumber;
  incentivesLastUpdateTimestamp: BigNumber;
  /** @format double */
  precision: number;
  /** @format double */
  priceFeedDecimals: number;
  rewardOracleAddress: string;
  rewardPriceFeed: BigNumber;
  rewardTokenAddress: string;
  /** @format double */
  rewardTokenDecimals: number;
  rewardTokenSymbol: string;
  tokenIncentivesIndex: BigNumber;
}

export interface RippleAPIResponse {
  address?: string;
  body?: InputBody;
  data?: RippleTransactionOutput;
  message: string;
  success: boolean;
}

export interface RippleInput {
  network?: string;
  private_key?: string;
}

export interface RippleTransactionInput {
  compress?: boolean;
  network?: string;
  to?: string;
  /** @format double */
  value?: number;
}

export interface RippleTransactionOutput {
  signedTx?: string;
  transaction_hash?: string;
}

export interface SRC20InscriptionInput {
  address: string;
  /** @format double */
  commit_fee_rate: number;
  inscription_data: string;
  network: string;
  prev_outputs: string;
  /** @format double */
  reveal_out_value: number;
}

export interface SRC20InscriptionOutput {
  transactions: string;
}

export type SafeBatchTransferFromData = TransactionAPIResponse;

export type SafeTransferFromData = TransactionAPIResponse;

export type SafeTransferFromErc721Data = ERC721APIResponse;

export type SafeTransferFromOutput =
  VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export type SafeTransferFromResult =
  LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type SafeTransferFromWithDataErc721Data = ERC721APIResponse;

export interface ScheduleJobBody {
  jobId: string;
  schedule: string;
}

export type ScheduleJobData = MultiCallAPIResponse;

export type SearchComponentsData = ComponentAPIResponseComponentMatchArray;

export interface SearchComponentsParams {
  limit?: string;
  query: string;
  threshold?: string;
}

export interface SearchFilter {
  field: string;
  operator: SearchFilterOperatorEnum;
  /** @format double */
  value: number;
}

export enum SearchFilterOperatorEnum {
  Eq = 'eq',
  Gt = 'gt',
  Gte = 'gte',
  Lt = 'lt',
  Lte = 'lte',
}

export interface SearchFinancialsAPIResponse {
  address?: string;
  body?: InputBody;
  data?: SearchResult[];
  message: string;
  success: boolean;
}

export type SearchFinancialsByLineItemsData = LineItemsSearchAPIResponse;

export interface SearchFinancialsByLineItemsPayload {
  /** @format double */
  limit?: number;
  line_items: string[];
  period?: SearchFinancialsByLineItemsPeriodEnum;
  tickers: string[];
}

export enum SearchFinancialsByLineItemsPeriodEnum {
  Annual = 'annual',
  Quarterly = 'quarterly',
  Ttm = 'ttm',
}

export type SearchFinancialsData = SearchFinancialsAPIResponse;

export interface SearchRequest {
  currency?: SearchRequestCurrencyEnum;
  filters: SearchFilter[];
  /** @format double */
  limit?: number;
  order_by?: SearchRequestOrderByEnum;
  period?: SearchRequestPeriodEnum;
}

export enum SearchRequestCurrencyEnum {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
  JPY = 'JPY',
  CHF = 'CHF',
  AUD = 'AUD',
  CAD = 'CAD',
  SEK = 'SEK',
}

export enum SearchRequestOrderByEnum {
  Ticker = 'ticker',
  ValueTicker = '-ticker',
  ReportPeriod = 'report_period',
  ValueReportPeriod = '-report_period',
}

export enum SearchRequestPeriodEnum {
  Annual = 'annual',
  Quarterly = 'quarterly',
  Ttm = 'ttm',
}

export interface SearchResult {
  currency: string;
  period: string;
  report_period: string;
  ticker: string;
  [key: string]: any;
}

export interface SegmentedRevenue {
  items: SegmentedRevenueItem[];
  period: SegmentedRevenuePeriodEnum;
  report_period: string;
  ticker: string;
}

export interface SegmentedRevenueItem {
  axis: string;
  end_period?: string;
  key: string;
  segment: string;
  start_period?: string;
  /** @format double */
  value: number;
}

export enum SegmentedRevenuePeriodEnum {
  Annual = 'annual',
  Quarterly = 'quarterly',
}

export interface SegmentedRevenuesAPIResponse {
  address?: string;
  body?: InputBody;
  data?: SegmentedRevenue[];
  message: string;
  success: boolean;
}

export type SelfPermitAllowedData =
  UniswapV3APIResponseUniswapV3ExecuteFunctionResult;

export type SelfPermitAllowedIfNecessaryData =
  UniswapV3APIResponseUniswapV3ExecuteFunctionResult;

export type SelfPermitData = UniswapV3APIResponseUniswapV3ExecuteFunctionResult;

export type SelfPermitIfNecessaryData =
  UniswapV3APIResponseUniswapV3ExecuteFunctionResult;

export interface SellQuote {
  /** @format double */
  networkFee: number;
  paymentMethod: string;
  /** @format double */
  payout: number;
  quoteId: string;
  ramp: string;
  /** @format double */
  rate: number;
  recommendations: string[];
  /** @format double */
  transactionFee: number;
}

export type SellQuotes = SellQuote[];

export type SetAclAdminData =
  PoolAddressProviderAPIResponsePoolAddressProviderExecuteFunctionResult;

export type SetAclManagerData =
  PoolAddressProviderAPIResponsePoolAddressProviderExecuteFunctionResult;

export type SetAddressData =
  PoolAddressProviderAPIResponsePoolAddressProviderExecuteFunctionResult;

export type SetApprovalForAllData = TransactionAPIResponse;

export type SetApprovalForAllData1 =
  VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export type SetApprovalForAllErc721Data = ERC721APIResponse;

export type SetApprovalForAllOutput =
  UniswapV3NFTAPIResponseUniswapV3ExecuteFunctionResult;

export type SetApprovalForAllResult =
  LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type SetClaimApprovalData =
  LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type SetClaimApprovalForAllData =
  LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type SetMarketIdData =
  PoolAddressProviderAPIResponsePoolAddressProviderExecuteFunctionResult;

export type SetPoolConfiguratorImplData =
  PoolAddressProviderAPIResponsePoolAddressProviderExecuteFunctionResult;

export type SetPoolImplData =
  PoolAddressProviderAPIResponsePoolAddressProviderExecuteFunctionResult;

export type SetUserUseReserveAsCollateralData =
  AavePoolAPIResponseAavePoolExecuteFunctionResult;

export type SetUserUseReserveAsCollateralResult =
  LendingPoolAPIResponseLendingPoolExecuteFunctionResult;

export enum Side {
  BUY = 'BUY',
  SELL = 'SELL',
}

export interface SignBitcoinTransactionBody {
  inputs: string;
  network: string;
  outputs: string;
}

export type SignBitcoinTransactionData = BitcoinAPIResponse;

export type SignBitcoinTransactionResult = BitcoinCashAPIResponseSignedTxString;

export type SignDogeCoinTransactionData = DogeCoinAPIResponse;

export type SignDogeCoinTransactionWithMemoData = DogeCoinAPIResponse;

export type SignEosTransactionData = EosAPIResponse;

export type SignIbcTransferTransactionData = CosmosTransactionAPIResponse;

export type SignLitecoinTransactionData = LitecoinAPIResponse;

export type SignLitecoinTransactionWithMemoData = LitecoinAPIResponse;

export interface SignMessage {
  chain_id?: string;
  data: string;
  encoding?: string;
  header?: boolean;
  name?: string;
  signtype?: boolean;
}

export interface SignMessageAPIResponse {
  address?: string;
  body?: InputBody;
  data?: TransactionData;
  message: string;
  success: boolean;
}

export type SignMessageData = SignMessageAPIResponse;

export type SignMessageResult = CosmosSignedMessageAPIResponse;

export type SignPsbtWithKeyPathAndScriptPathData =
  BitcoinCashAPIResponseSignedPsbtHexString;

export interface SignPsbtWithKeyPathAndScriptPathPayload {
  network: string;
  psbt_hex: string;
}

export type SignRippleTransactionData = RippleAPIResponse;

export type SignSolanaTransactionData = SolanaAPIResponse;

export type SignTransactionData = TransactionAPIResponse;

export type SignTransactionResult =
  BitcoinCashAPIResponseBitcoinCashTransactionOutput;

export type SignTransactionWithMemoData =
  BitcoinCashAPIResponseBitcoinCashTransactionOutput;

export type SignTransferTransactionData = CosmosTransactionAPIResponse;

export type SignTronTransactionData = TronAPIResponse;

export interface SignTypedData {
  chain_id?: string;
  data: string;
}

export type SignTypedDataData = SignMessageAPIResponse;

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
  NATIVE = 'NATIVE',
  ERC20 = 'ERC20',
  ERC721 = 'ERC721',
  ERC1155 = 'ERC1155',
  SPECIAL_NFT = 'SPECIAL_NFT',
}

/** Change type returned when calling {@link TransactNamespace.simulateAssetChanges }. */
export enum SimulateChangeType {
  APPROVE = 'APPROVE',
  TRANSFER = 'TRANSFER',
}

export interface SolanaAPIResponse {
  address?: string;
  body?: InputBody;
  data?: SolanaTransactionOutput;
  message: string;
  success: boolean;
}

export interface SolanaInput {
  network?: string;
  private_key?: string;
}

export interface SolanaSignTransactionInput {
  network?: string;
  unsigned_tx: string;
}

export interface SolanaTransactionInput {
  compress?: boolean;
  network?: string;
  to?: string;
  /** @format double */
  value?: number;
}

export interface SolanaTransactionOutput {
  signedTx?: string;
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

export type SuggestGasPriceData = TransactionAPIResponse;

export interface SuggestGasPriceParams {
  accountName: string;
  chainId: string;
}

export type SupplyData = AavePoolAPIResponseAavePoolExecuteFunctionResult;

export interface SupportedAssetResponse {
  assets: {
    crypto: string[];
    fiat: string;
    paymentMethods: string[];
  }[];
  country: string;
}

export interface SupportedCurrenciesResponse {
  message: Message;
}

export interface SupportedDefaultResponse {
  defaults: {
    id: {
      /** @format double */
      amount: number;
      paymentMethod: string;
      provider: string;
      source: string;
      target: string;
    };
  };
  recommended: {
    /** @format double */
    amount: number;
    paymentMethod: string;
    provider: string;
    source: string;
    target: string;
  };
}

export interface SupportedPaymentTypesCurrencyResponse {
  message: SupportedPaymentTypesMessage;
}

export interface SupportedPaymentTypesMessage {
  applepay: PaymentType;
  creditcard: PaymentType;
  googlepay: PaymentType;
}

export type SupportsInterfaceData = LeveragerAPIResponseBoolean;

export interface SupportsInterfaceParams {
  address: string;
  chainId: string;
  interfaceId: string;
}

export interface SupportsInterfaceParams2 {
  address: string;
  chainId: string;
  interfaceId: string;
}

export type SupportsInterfaceResult = UniswapV3NFTAPIResponseBoolean;

export type SwapBorrowRateModeData =
  LendingPoolAPIResponseLendingPoolExecuteFunctionResult;

export type SwapData = JupiterAPIResponseJupiterExecuteFunctionResult;

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

export interface SwapInput {
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

export type SwapOutput = ThorSwapAPIResponseString;

export type SwapResult = OdosAPIResponseOdosExecuteFunctionResult;

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

export interface TokenAmount {
  amount: string;
  tokenAddress: string;
}

export type TokenByIndexData = UniswapV3NFTAPIResponseString;

export interface TokenByIndexParams {
  address: string;
  chainId: string;
  /** @format double */
  index: number;
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

export type TokenInfoByChainId = Record<string, TokenInfo[]>;

export interface TokenMetadataAPIResponse {
  address?: string;
  body?: InputBody;
  data?: GetTokenMetadataJSONResponse;
  message: string;
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

export interface TokenProportion {
  /** @format double */
  proportion: number;
  tokenAddress: string;
}

/** Token standards */
export enum TokenStandard {
  ERC20 = 'ERC20',
  ERC721 = 'ERC721',
  ERC1155 = 'ERC1155',
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
  TAKER = 'TAKER',
  MAKER = 'MAKER',
}

export interface Transaction {
  broadcasted?: BroadCastRawTransactionResponse;
  data?: string | null;
  message?: string;
  moon_scan_url?: string;
  raw_transaction?: string;
  signature?: string;
  signed_transaction?: string;
  /** Response object for the {@link TransactNamespace.simulateAssetChanges } method. */
  simulation?: SimulateAssetChangesResponse;
  success?: boolean;
  transaction?: Tx;
  transaction_hash?: string;
  transactions?: TransactionData[];
  userOps?: TransactionRequest[];
  user_op?: string;
  userop_transaction?: string;
}

export interface TransactionAPIResponse {
  address?: string;
  body?: InputBody;
  broadcasted?: BroadCastRawTransactionResponse;
  data?: Transaction;
  function?: string;
  message: string;
  params?: any[];
  signedTx?: any;
  success: boolean;
  transaction?: any;
  transaction_hash?: any;
}

export interface TransactionData {
  moon_scan_url?: string;
  raw_transaction?: string;
  signature?: string;
  signed_message?: string;
  signed_transaction: string;
  transaction?: Tx;
  transaction_hash: string;
  userOps?: TransactionRequest[];
  userop_transaction?: string;
}

export interface TransactionInput {
  /** @format double */
  amount: number;
  destination: string;
  metaData: {
    quoteId: string;
  };
  network: string;
  onramp: string;
  originatingHost: string;
  partnerContext: string;
  paymentMethod: string;
  source: string;
  supportedParams: {
    partnerData: {
      redirectUrl: {
        success: string;
      };
    };
    theme: {
      /** @format double */
      borderRadius: number | null;
      cardColor: string;
      isDark: boolean;
      primaryColor: string;
      primaryTextColor: string;
      secondaryColor: string;
      secondaryTextColor: string;
      themeName: string;
    };
  };
  type: string;
  uuid: string;
  wallet: {
    address: string;
  };
}

export interface TransactionRequest {
  data?: string;
  from?: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  nonce?: string;
  to?: string;
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

export type TransferData = ERC20APIResponseERC20ExecuteFunctionResult;

export type TransferEthData = TransactionAPIResponse;

export type TransferFromData = ERC20APIResponseERC20ExecuteFunctionResult;

export type TransferFromData1 =
  UniswapV3NFTAPIResponseUniswapV3ExecuteFunctionResult;

export type TransferFromErc721Data = ERC721APIResponse;

export type TransferFromOutput =
  LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type TransferFromResult = ERC4626APIResponse;

export type TransferFromResult1 =
  RamsesNFTAPIResponseRamsesNFTExecuteFunctionResult;

export type TransferFromResult2 = VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export type TransferResult = ERC4626APIResponse;

export type TransferSolanaTransactionData = SolanaAPIResponse;

export type TransferTokensSignSolanaTransactionData = SolanaAPIResponse;

export interface TronAPIResponse {
  address?: string;
  body?: InputBody;
  data?: TronTransactionOutput;
  message: string;
  success: boolean;
}

export interface TronInput {
  network?: string;
  private_key?: string;
}

export interface TronTransactionInput {
  compress?: boolean;
  network?: string;
  to?: string;
  /** @format double */
  value?: number;
}

export interface TronTransactionOutput {
  signedTx?: string;
  transaction_hash?: string;
}

export interface Tx {
  blob_gas?: string | null;
  blob_gas_fee_cap?: string | null;
  blob_hashes?: string[] | null;
  /** @format double */
  chain_id?: number;
  data?: string;
  from?: string;
  gas?: string;
  gas_fee_cap?: string | null;
  gas_price?: string;
  gas_tip_cap?: string | null;
  /** @format double */
  nonce?: number;
  r?: string;
  s?: string;
  to?: string | null;
  /** @format double */
  type?: number;
  v?: string;
  value?: string;
}

export interface UniswapV2APIResponseUniswapV2ExecuteFunctionResult {
  data?: UniswapV2ExecuteFunctionResult;
  message: string;
  success: boolean;
}

export interface UniswapV2ExecuteFunctionResult {
  broadcasted?: BroadCastRawTransactionResponse;
  data?: Transaction;
  function: string;
  message?: string;
  params: any[];
  /** Response object for the {@link TransactNamespace.simulateAssetChanges } method. */
  simulation?: SimulateAssetChangesResponse;
  success?: boolean;
  transaction: UniswapV2Transaction;
  user_op?: string;
}

export interface UniswapV2InputBody {
  EOA?: boolean;
  accessList?: AccessTuple[];
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amountA?: string;
  amountADesired?: string;
  amountAMin?: string;
  amountBDesired?: string;
  amountBMin?: string;
  amountETHMin?: string;
  amountIn?: string;
  amountInMax?: string;
  amountOut?: string;
  amountOutMin?: string;
  amountTokenDesired?: string;
  amountTokenMin?: string;
  amounts?: string[];
  approveMax?: boolean;
  approved?: boolean;
  asset?: string;
  assets?: string[];
  blobGas?: string;
  blobGasFeeCap?: string;
  blobHashes?: string[];
  borrowAmount?: string | number;
  broadcast?: boolean;
  chain_id?: string;
  collateralAsset?: string;
  contract_address?: string;
  data?: string;
  deadline?: string;
  debtAsset?: string;
  debtToCover?: string;
  dryrun?: boolean;
  encoding?: string;
  gas?: string;
  gasLimit?: string;
  gasPrice?: string;
  initialDeposit?: string | number;
  initiator?: string;
  input?: string;
  inputTokens?: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
  liquidity?: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  minHealthFactor?: string | number;
  modes?: number[];
  nonce?: string;
  onBehalfOf?: string;
  outputTokens?: TokenProportion[];
  params?: string;
  path?: string[];
  premiums?: string[] | number[];
  r?: string;
  /** @format double */
  rateMode?: number;
  receiveAToken?: boolean;
  receiverAddress?: string;
  /** @format double */
  referralCode?: number;
  reserve?: string;
  reserveA?: string;
  reserveB?: string;
  reserveETH?: string;
  reserveIn?: string;
  reserveOut?: string;
  role?: string;
  s?: string;
  simulate?: boolean;
  /** @format double */
  slippageLimitPercent?: number;
  to?: string;
  token?: string;
  tokenA?: string;
  tokenB?: string;
  token_id?: string;
  token_ids?: string;
  /** @format double */
  type?: number;
  useAsCollateral?: boolean;
  user?: string;
  /** @format double */
  v?: number;
  value?: string;
}

export interface UniswapV2Transaction {
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
  broadcasted?: BroadCastRawTransactionResponse;
  data?: Transaction;
  function: string;
  message?: string;
  params: any[];
  /** Response object for the {@link TransactNamespace.simulateAssetChanges } method. */
  simulation?: SimulateAssetChangesResponse;
  success?: boolean;
  transaction: UniswapV3Transaction;
  user_op?: string;
}

export interface UniswapV3InputBody {
  amount0Desired?: string;
  amount0Max?: string;
  amount0Min?: string;
  amount1Desired?: string;
  amount1Max?: string;
  amount1Min?: string;
  sqrtPriceX96?: string;
  token0?: string;
  token1?: string;
  EOA?: boolean;
  accessList?: AccessTuple[];
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amountMinimum?: string;
  amounts?: string[];
  approved?: boolean;
  asset?: string;
  assets?: string[];
  blobGas?: string;
  blobGasFeeCap?: string;
  blobHashes?: string[];
  borrowAmount?: string | number;
  broadcast?: boolean;
  chain_id?: string;
  collateralAsset?: string;
  contract_address?: string;
  data?: string;
  deadline?: string;
  debtAsset?: string;
  debtToCover?: string;
  dryrun?: boolean;
  encoding?: string;
  /** @format double */
  fee?: number;
  gas?: string;
  gasLimit?: string;
  gasPrice?: string;
  initialDeposit?: string | number;
  initiator?: string;
  input?: string;
  inputTokens?: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
  liquidity?: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  minHealthFactor?: string | number;
  modes?: number[];
  nonce?: string;
  onBehalfOf?: string;
  operator?: string;
  outputTokens?: TokenProportion[];
  params?: string;
  premiums?: string[] | number[];
  r?: string;
  /** @format double */
  rateMode?: number;
  receiveAToken?: boolean;
  receiverAddress?: string;
  recipient?: string;
  /** @format double */
  referralCode?: number;
  role?: string;
  s?: string;
  simulate?: boolean;
  /** @format double */
  slippageLimitPercent?: number;
  spender?: string;
  /** @format double */
  tickLower?: number;
  /** @format double */
  tickUpper?: number;
  to?: string;
  token?: string;
  tokenId?: string;
  token_id?: string;
  token_ids?: string;
  /** @format double */
  type?: number;
  useAsCollateral?: boolean;
  user?: string;
  /** @format double */
  v?: number;
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

export interface UniswapV3Transaction {
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

export type UnlockPermanentData =
  LynexNFTAPIResponseLynexNFTExecuteFunctionResult;

export type UnpauseData = LeveragerAPIResponseLeveragerExecuteFunctionResult;

export type UnsafeSwapExactTokensForTokensData =
  RamsesRouterAPIResponseRamsesRouterExecuteFunctionResult;

export type UnscheduleJobData = MultiCallAPIResponse;

export interface UnsignedPSBTInput {
  inputs: string;
  network: string;
  outputs: string;
}

export interface UnsignedPSBTOutput {
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

export type UpdateComponentData = ComponentAPIResponseComponentDefinition;

export type UpdateEmbeddingData = ComponentAPIResponseVoid;

export interface UpdateEmbeddingPayload {
  description: string;
}

export interface UpdateFlowBody {
  description?: string;
  edges?: FlowEdge[];
  name?: string;
  nodes?: FlowNode[];
}

export type UpdateFlowData = MultiCallAPIResponse;

export interface UserIncentiveData {
  incentiveControllerAddress: string;
  tokenAddress: string;
  userRewardsInformation: UserRewardInfo[];
}

export interface UserPointHistoryData {
  bias: string;
  blk: string;
  slope: string;
  ts: string;
}

export interface UserReserveData {
  principalStableDebt: BigNumber;
  scaledATokenBalance: BigNumber;
  scaledVariableDebt: BigNumber;
  stableBorrowLastUpdateTimestamp: BigNumber;
  stableBorrowRate: BigNumber;
  underlyingAsset: string;
  usageAsCollateralEnabledOnUser: boolean;
}

export interface UserReserveIncentiveData {
  aTokenIncentivesUserData: UserIncentiveData;
  sTokenIncentivesUserData: UserIncentiveData;
  underlyingAsset: string;
  vTokenIncentivesUserData: UserIncentiveData;
}

export interface UserRewardInfo {
  /** @format double */
  priceFeedDecimals: number;
  rewardOracleAddress: string;
  rewardPriceFeed: BigNumber;
  rewardTokenAddress: string;
  /** @format double */
  rewardTokenDecimals: number;
  rewardTokenSymbol: string;
  tokenIncentivesUserIndex: BigNumber;
  userUnclaimedRewards: BigNumber;
}

export interface VeNFTExecuteFunctionResult {
  broadcasted?: BroadCastRawTransactionResponse;
  data?: Transaction;
  function: string;
  message?: string;
  params: any[];
  /** Response object for the {@link TransactNamespace.simulateAssetChanges } method. */
  simulation?: SimulateAssetChangesResponse;
  success?: boolean;
  transaction: VeNFTTransaction;
  user_op?: string;
}

export interface VeNFTInputBody {
  EOA?: boolean;
  accessList?: AccessTuple[];
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amounts?: string[];
  approved?: boolean;
  asset?: string;
  assets?: string[];
  blobGas?: string;
  blobGasFeeCap?: string;
  blobHashes?: string[];
  borrowAmount?: string | number;
  broadcast?: boolean;
  chain_id?: string;
  collateralAsset?: string;
  contract_address?: string;
  data?: string;
  debtAsset?: string;
  debtToCover?: string;
  delegatee?: string;
  dryrun?: boolean;
  encoding?: string;
  expiry?: string;
  gas?: string;
  gasLimit?: string;
  gasPrice?: string;
  initialDeposit?: string | number;
  initiator?: string;
  input?: string;
  inputTokens?: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
  lock_duration?: string;
  lock_value?: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  minHealthFactor?: string | number;
  modes?: number[];
  nonce?: string;
  onBehalfOf?: string;
  operator?: string;
  outputTokens?: TokenProportion[];
  params?: string;
  premiums?: string[] | number[];
  /** @format double */
  rateMode?: number;
  receiveAToken?: boolean;
  receiverAddress?: string;
  /** @format double */
  referralCode?: number;
  role?: string;
  simulate?: boolean;
  /** @format double */
  slippageLimitPercent?: number;
  spender?: string;
  to?: string;
  tokenId?: string;
  token_id?: string;
  token_ids?: string;
  /** @format double */
  type?: number;
  useAsCollateral?: boolean;
  user?: string;
  value?: string;
}

export interface VeNFTTransaction {
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
  data?: VeNFTExecuteFunctionResult;
  message: string;
  success: boolean;
}

export interface VeTheNftVoterAPIResponseBoolean {
  data?: boolean;
  message: string;
  success: boolean;
}

export interface VeTheNftVoterAPIResponseString {
  data?: string;
  message: string;
  success: boolean;
}

export interface VeTheNftVoterAPIResponseVeTheNftVoterExecuteFunctionResult {
  data?: VeTheNftVoterExecuteFunctionResult;
  message: string;
  success: boolean;
}

export interface VeTheNftVoterExecuteFunctionResult {
  broadcasted?: BroadCastRawTransactionResponse;
  data?: Transaction;
  function: string;
  message?: string;
  params: any[];
  /** Response object for the {@link TransactNamespace.simulateAssetChanges } method. */
  simulation?: SimulateAssetChangesResponse;
  success?: boolean;
  transaction: VeTheNftVoterTransaction;
  user_op?: string;
}

export interface VeTheNftVoterInputBody {
  EOA?: boolean;
  accessList?: AccessTuple[];
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amounts?: string[];
  approved?: boolean;
  asset?: string;
  assets?: string[];
  blobGas?: string;
  blobGasFeeCap?: string;
  blobHashes?: string[];
  borrowAmount?: string | number;
  bribes?: string[];
  broadcast?: boolean;
  chain_id?: string;
  collateralAsset?: string;
  contract_address?: string;
  data?: string;
  debtAsset?: string;
  debtToCover?: string;
  dryrun?: boolean;
  encoding?: string;
  fees?: string[];
  gas?: string;
  gasLimit?: string;
  gasPrice?: string;
  gauge?: string;
  gauge_type?: string;
  gauges?: string[];
  initialDeposit?: string | number;
  initiator?: string;
  input?: string;
  inputTokens?: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  minHealthFactor?: string | number;
  modes?: number[];
  nonce?: string;
  onBehalfOf?: string;
  outputTokens?: TokenProportion[];
  params?: string;
  pool?: string;
  pool_vote?: string[];
  premiums?: string[] | number[];
  /** @format double */
  rateMode?: number;
  receiveAToken?: boolean;
  receiverAddress?: string;
  /** @format double */
  referralCode?: number;
  role?: string;
  simulate?: boolean;
  /** @format double */
  slippageLimitPercent?: number;
  to?: string;
  token_id?: string;
  token_ids?: string;
  tokens?: string[][];
  /** @format double */
  type?: number;
  useAsCollateral?: boolean;
  user?: string;
  value?: string;
  weights?: string[];
}

export interface VeTheNftVoterTransaction {
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

export enum VersionEnum {
  V2 = 'v2',
}

export enum VersionEnum1 {
  V2 = 'v2',
}

export enum VersionEnum2 {
  V2 = 'v2',
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

export interface WalletBalanceAPIResponse {
  address?: string;
  body?: InputBody;
  data?: any[];
  message: string;
  success: boolean;
}

export interface WalletHistoryAPIResponse {
  address?: string;
  body?: InputBody;
  data?: EvmWalletHistoryTransactionJSON[];
  message: string;
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

export type WithdrawData = AavePoolAPIResponseAavePoolExecuteFunctionResult;

export type WithdrawOutput = RamsesNFTAPIResponseRamsesNFTExecuteFunctionResult;

export type WithdrawResult = ERC4626APIResponse;

export type WithdrawResult1 = VeTheNFTAPIResponseVeNFTExecuteFunctionResult;

export type WrapEthData = OpenSeaAPIResponse;

export interface WrapEthPayload {
  amountInEth: string;
  chainId: string;
}

export type ZapData = OdosAPIResponseOdosExecuteFunctionResult;
