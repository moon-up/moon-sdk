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
  success?: boolean;
  transaction: AAVEv3RewardsTransaction;
  user_op?: string;
}

export interface AAVEv3RewardsInputBody {
  EOA?: boolean;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  assets?: string[];
  broadcast?: boolean;
  chain_id?: string;
  contract_address?: string;
  data?: string;
  dryrun?: boolean;
  gas?: string;
  gasPrice?: string;
  nonce?: string;
  reward?: string;
  to?: string;
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
  success?: boolean;
  transaction: AavePoolTransaction;
  user_op?: string;
}

export interface AavePoolInputBody {
  EOA?: boolean;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  broadcast?: boolean;
  chain_id?: string;
  contract_address?: string;
  data?: string;
  dryrun?: boolean;
  gas?: string;
  gasPrice?: string;
  /** @format double */
  interestRateMode?: number;
  nonce?: string;
  onBehalfOf?: string;
  /** @format double */
  referralCode?: number;
  to?: string;
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
  data: AccountData;
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

export interface ApiResponseChainMap {
  data?: ChainMap;
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

export interface ApiResponseGasPrice {
  data?: GasPrice;
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

export interface ApiResponseStringArray {
  data?: string[];
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

export type ApproveErc721Data = ERC721APIResponse;

export type ApproveResult = ERC4626APIResponse;

export interface AssembleRequest {
  pathId: string;
  receiver?: string;
  simulate?: boolean;
  userAddr: string;
}

export type AssembleTransactionData = OdosAPIResponseOdosExecuteFunctionResult;

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

export type BalanceOfBatchData = TransactionAPIResponse;

export type BalanceOfData = TransactionAPIResponse;

export interface BalanceResponse {
  balance: string;
}

export interface BaseCosmosAPIResponse {
  message: string;
  success: boolean;
}

export interface BitcoinAPIResponse {
  data?:
    | BitcoinTransactionOutput
    | SRC20InscriptionOutput
    | BRC20TransactionOutput
    | UnsignedPSBTOutput;
  message: string;
  success: boolean;
}

export interface BitcoinCashAPIResponse {
  address?: string;
  body?: InputBody;
  data?: BitcoinCashTransactionOutput;
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

export type ChainId = string | number;

export type ChainMap = Record<string, ChainId>;

export interface ChainsResponse {
  chains: Chain[];
}

export type ClaimAllRewardsData =
  AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult;

export type ClaimAllRewardsOnBehalfData =
  AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult;

export type ClaimAllRewardsToSelfData =
  AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult;

export type ClaimRewardsData =
  AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult;

export type ClaimRewardsOnBehalfData =
  AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult;

export type ClaimRewardsToSelfData =
  AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult;

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

export interface CreateAccountBody {
  network?: string;
}

export type CreateAccountData = AccountAPIResponse;

export interface CreateAccountInput {
  private_key?: string;
}

export type CreateAccountResult = CosmosAccountAPIResponse;

export type CreateBitcoinAccountData = AccountAPIResponse;

export type CreateBitcoinCashAccountData = AccountAPIResponse;

export type CreateBrc20TransactionData = BitcoinAPIResponse;

export type CreateDogeCoinAccountData = AccountAPIResponse;

export type CreateEosAccountData = AccountAPIResponse;

export type CreateLitecoinAccountData = AccountAPIResponse;

export type CreateRippleAccountData = AccountAPIResponse;

export type CreateSolanaAccountData = AccountAPIResponse;

export type CreateSrc20InscriptionData = BitcoinAPIResponse;

export type CreateTronAccountData = AccountAPIResponse;

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

export type DeleteAccountData = AccountAPIResponse;

export type DeleteAccountResult = BaseCosmosAPIResponse;

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

export type DepositResult =
  LendingPoolAPIResponseLendingPoolExecuteFunctionResult;

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
  success?: boolean;
  transaction: ERC20Transaction;
  user_op?: string;
}

export interface ERC20InputBody {
  EOA?: boolean;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  broadcast?: boolean;
  chain_id?: string;
  contract_address?: string;
  data?: string;
  dryrun?: boolean;
  gas?: string;
  gasPrice?: string;
  nonce?: string;
  to?: string;
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
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amounts?: string[];
  approved?: boolean;
  asset?: string;
  assets?: string[];
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
  gasPrice?: string;
  initialDeposit?: string | number;
  initiator?: string;
  input?: string;
  inputTokens?: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
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
  /** @format double */
  slippageLimitPercent?: number;
  to?: string;
  token_id?: string;
  token_ids?: string;
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

export interface Exchange {
  key: string;
  logoURI: string;
  name: string;
  supportedChains: number[];
}

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

export type GetAccountData = AccountAPIResponse;

export type GetAccountResult = CosmosAccountAPIResponse;

export type GetAddressesProviderData = LendingPoolAPIResponseString;

export interface GetAddressesProviderParams {
  address: string;
  chainId: string;
}

export interface GetAddressesProviderParams2 {
  address: string;
  chainId: string;
}

export type GetAddressesProviderResult = LeveragerAPIResponseString;

export type GetAllPossibleConnectionsData = ApiResponseTokenInfoByChainId;

export interface GetAllPossibleConnectionsParams {
  toChain: string;
  toToken: string;
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

export type GetAssetData = ERC4626APIResponse;

export interface GetAssetParams {
  account: string;
  address: string;
  chainId: string;
}

export type GetBalanceData = BalanceAPIResponse;

export type GetBalanceOfData = ERC20APIResponseString;

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

export type GetBalanceOfResult = ERC4626APIResponse;

export interface GetBalanceParams {
  accountName: string;
  chainId: string;
}

export type GetBitcoinAccountData = AccountAPIResponse;

export type GetBitcoinCashAccountData = AccountAPIResponse;

export type GetChainsData = ApiResponseChainsResponse;

export interface GetChainsParams {
  optionalChainTypes?: OptionalChainTypesEnum;
}

export enum GetChainsParams1OptionalChainTypesEnum {
  EVM = 'EVM',
  SOL = 'SOL',
}

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

export type GetExecutorAddressData = OdosAPIResponseOdosExecuteFunctionResult;

export interface GetExecutorAddressParams {
  /** @format double */
  chainId: number;
  version: VersionEnum2;
}

export enum GetExecutorAddressParams1VersionEnum {
  V2 = 'v2',
}

export type GetFlashLoanPremiumTotalData = LendingPoolAPIResponseNumber;

export interface GetFlashLoanPremiumTotalParams {
  address: string;
  chainId: string;
}

export type GetGasPriceData = ApiResponseGasPrice;

export interface GetGasPriceParams {
  chainId: string;
}

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

export type GetNonceData = NonceAPIResponse;

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

export type GetQuoteData = ApiResponseQuote;

export type GetQuoteOutput = ApiResponseQuote;

export interface GetQuoteParams {
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

export enum GetQuoteParams1OrderEnum {
  BEST_VALUE = 'BEST_VALUE',
  BEST_FEE = 'BEST_FEE',
  BEST_FEE_GAS = 'BEST_FEE_GAS',
}

export interface GetQuoteParams3 {
  affiliateAddress?: string;
  /** @format double */
  affiliateBasisPoints?: number;
  allowSmartContractRecipient?: boolean;
  buyAsset: string;
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

export type GetQuoteResult = OdosAPIResponseOdosExecuteFunctionResult;

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

export type GetReservesListData = LendingPoolAPIResponseStringArray;

export interface GetReservesListParams {
  address: string;
  chainId: string;
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

export type GetSolanaAccountData = AccountAPIResponse;

export type GetSupportedChainsData = OdosAPIResponseOdosExecuteFunctionResult;

export type GetSupportedChainsResult = ApiResponseChainMap;

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

export type GetSupportedProvidersData = ApiResponseStringArray;

export type GetSupportedTokensData = OdosAPIResponseOdosExecuteFunctionResult;

export interface GetSupportedTokensParams {
  /** @format double */
  chainId: number;
}

export type GetSymbolData = ERC20APIResponseString;

export interface GetSymbolParams {
  account: string;
  address: string;
  chainId: string;
}

export type GetToolsData = ApiResponseToolsResponse;

export interface GetToolsParams {
  chains?: string;
}

export type GetTotalAssetsData = ERC4626APIResponse;

export interface GetTotalAssetsParams {
  account: string;
  address: string;
  chainId: string;
}

export type GetTotalSupplyData = ERC20APIResponseString;

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

export type GetTotalSupplyResult = ERC4626APIResponse;

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

export type GetUserRewardsData = AAVEv3RewardsAPIResponseString;

export interface GetUserRewardsParams {
  account: string;
  address: string;
  assets: string[];
  chainId: string;
  reward: string;
  user: string;
}

export type GetWethData = LeveragerAPIResponseString;

export interface GetWethParams {
  address: string;
  chainId: string;
}

export type GetstatusData = ApiResponseStatusResponse;

export interface GetstatusParams {
  txHash: string;
}

export type GrantRoleData = LeveragerAPIResponseLeveragerExecuteFunctionResult;

export type HasRoleData = LeveragerAPIResponseBoolean;

export interface HasRoleParams {
  account: string;
  address: string;
  chainId: string;
  role: string;
}

export interface InputBody {
  EOA?: boolean;
  account?: string;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amounts?: string[];
  approved?: boolean;
  asset?: string;
  assets?: string[];
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
  gasPrice?: string;
  initialDeposit?: string | number;
  initiator?: string;
  input?: string;
  inputTokens?: TokenAmount[];
  /** @format double */
  interestRateMode?: number;
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
  /** @format double */
  slippageLimitPercent?: number;
  to?: string;
  token_id?: string;
  token_ids?: string;
  useAsCollateral?: boolean;
  user?: string;
  value?: string;
}

export type IsApprovedForAllData = TransactionAPIResponse;

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
  success?: boolean;
  transaction: LendingPoolTransaction;
  user_op?: string;
}

export interface LendingPoolInputBody {
  EOA?: boolean;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  amounts?: string[];
  asset?: string;
  assets?: string[];
  broadcast?: boolean;
  chain_id?: string;
  collateralAsset?: string;
  contract_address?: string;
  data?: string;
  debtAsset?: string;
  debtToCover?: string;
  dryrun?: boolean;
  gas?: string;
  gasPrice?: string;
  /** @format double */
  interestRateMode?: number;
  modes?: number[];
  nonce?: string;
  onBehalfOf?: string;
  params?: string;
  /** @format double */
  rateMode?: number;
  receiveAToken?: boolean;
  receiverAddress?: string;
  /** @format double */
  referralCode?: number;
  to?: string;
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
  success?: boolean;
  transaction: LeveragerTransaction;
  user_op?: string;
}

export interface LeveragerInputBody {
  EOA?: boolean;
  account?: string;
  alwaysIncrementNonce?: boolean;
  amounts?: string[];
  asset?: string;
  assets?: string[];
  borrowAmount?: string;
  broadcast?: boolean;
  chain_id?: string;
  contract_address?: string;
  data?: string;
  dryrun?: boolean;
  gas?: string;
  gasPrice?: string;
  initialDeposit?: string;
  initiator?: string;
  minHealthFactor?: string;
  nonce?: string;
  params?: string;
  premiums?: string[];
  role?: string;
  to?: string;
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

export type LiquidationCallData =
  AavePoolAPIResponseAavePoolExecuteFunctionResult;

export type LiquidationCallResult =
  LendingPoolAPIResponseLendingPoolExecuteFunctionResult;

export type ListAccountsData = AccountAPIResponse;

export type ListAccountsResult = CosmosAccountListAPIResponse;

export type ListBitcoinAccountsData = AccountAPIResponse;

export type ListBitcoinCashAccountsData = AccountAPIResponse;

export type ListDogeCoinAccountsData = AccountAPIResponse;

export type ListEosAccountsData = AccountAPIResponse;

export type ListLitecoinAccountsData = AccountAPIResponse;

export type ListRippleAccountsData = AccountAPIResponse;

export type ListSolanaAccountsData = AccountAPIResponse;

export type ListTronAccountsData = AccountAPIResponse;

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

export interface Message {
  crypto: CryptoCurrency[];
  fiat: FiatCurrency[];
}

export type MintData = ERC4626APIResponse;

export type MultiSignSolanaTransactionData = SolanaAPIResponse;

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
  params: any[];
  success?: boolean;
  transaction?: OdosTransaction;
  user_op?: string;
}

export interface OdosSwapInputBody {
  EOA?: boolean;
  alwaysIncrementNonce?: boolean;
  broadcast?: boolean;
  chain_id: string;
  compact?: boolean;
  data?: string;
  disableRFQs?: boolean;
  dryrun?: boolean;
  gas?: string;
  gasPrice?: string | number;
  inputTokens: TokenAmount[];
  likeAsset?: boolean;
  nonce?: string;
  outputTokens: TokenProportion[];
  pathViz?: boolean;
  pathVizImage?: boolean;
  pathVizImageConfig?: PathVizImageConfig;
  poolBlacklist?: string[];
  /** @format double */
  referralCode?: number;
  simple?: boolean;
  /** @format double */
  slippageLimitPercent?: number;
  sourceBlacklist?: string[];
  sourceWhitelist?: string[];
  to?: string;
  userAddr?: string;
  value?: string;
}

export interface OdosTransaction {
  chainId: string;
  data: string;
  from: string;
  gasLimit?: string;
  gasPrice?: string;
  /** @format double */
  nonce: number;
  to: string;
  value: string;
}

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

export enum OptionalChainTypesEnum {
  EVM = 'EVM',
  SOL = 'SOL',
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

export interface PingResponse {
  message: string;
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

export interface PostQuoteParams2 {
  accountName: string;
  affiliateAddress?: string;
  /** @format double */
  affiliateBasisPoints?: number;
  allowSmartContractRecipient?: boolean;
  buyAsset: string;
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

export type PostQuoteResult = ApiResponseQuote;

export interface Quote {
  action: Action;
  estimate: Estimate;
  id: string;
  includedSteps: Step[];
  tool: string;
  transactionRequest: TransactionRequest;
  type: string;
}

export interface QuoteRequestV2 {
  /** @format double */
  chainId: number;
  compact?: boolean;
  disableRFQs?: boolean;
  /** @format double */
  gasPrice?: number;
  inputTokens: TokenAmount[];
  likeAsset?: boolean;
  outputTokens: TokenProportion[];
  pathViz?: boolean;
  pathVizImage?: boolean;
  pathVizImageConfig?: PathVizImageConfig;
  poolBlacklist?: string[];
  /** @format double */
  referralCode?: number;
  simple?: boolean;
  /** @format double */
  slippageLimitPercent?: number;
  sourceBlacklist?: string[];
  sourceWhitelist?: string[];
  userAddr?: string;
}

export type Quotes = Quote[];

export type RedeemData = ERC4626APIResponse;

export type RenounceRoleData =
  LeveragerAPIResponseLeveragerExecuteFunctionResult;

export type RepayData = AavePoolAPIResponseAavePoolExecuteFunctionResult;

export type RepayResult =
  LendingPoolAPIResponseLendingPoolExecuteFunctionResult;

export type ResolveData = EnsResolveAPIResponse;

export type RevokeRoleData = LeveragerAPIResponseLeveragerExecuteFunctionResult;

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

export type SafeTransferFromWithDataErc721Data = ERC721APIResponse;

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

export type SetApprovalForAllData = TransactionAPIResponse;

export type SetApprovalForAllErc721Data = ERC721APIResponse;

export type SetUserUseReserveAsCollateralData =
  AavePoolAPIResponseAavePoolExecuteFunctionResult;

export type SetUserUseReserveAsCollateralResult =
  LendingPoolAPIResponseLendingPoolExecuteFunctionResult;

export type SignBitcoinCashTransactionData = BitcoinCashAPIResponse;

export type SignBitcoinTransactionData = BitcoinAPIResponse;

export type SignDogeCoinTransactionData = DogeCoinAPIResponse;

export type SignEosTransactionData = EosAPIResponse;

export type SignIbcTransferTransactionData = CosmosTransactionAPIResponse;

export type SignLitecoinTransactionData = LitecoinAPIResponse;

export interface SignMessage {
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

export type SignRippleTransactionData = RippleAPIResponse;

export type SignSolanaTransactionData = SolanaAPIResponse;

export type SignTransactionData = TransactionAPIResponse;

export type SignTransferTransactionData = CosmosTransactionAPIResponse;

export type SignTronTransactionData = TronAPIResponse;

export interface SignTypedData {
  data: string;
}

export type SignTypedDataData = SignMessageAPIResponse;

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

export type SwapBorrowRateModeData =
  LendingPoolAPIResponseLendingPoolExecuteFunctionResult;

export type SwapData = OdosAPIResponseOdosExecuteFunctionResult;

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

export interface TokenProportion {
  /** @format double */
  proportion: number;
  tokenAddress: string;
}

export interface TokensResponse {
  tokens: Record<string, Token[]>;
}

export interface ToolsResponse {
  bridges: Bridge[];
  exchanges: Exchange[];
}

export interface Transaction {
  data?: string | null;
  moon_scan_url?: string;
  raw_transaction?: string;
  signature?: string;
  signed_transaction?: string;
  transaction?: Tx;
  transaction_hash?: string;
  transactions?: TransactionData[];
  userOps?: TransactionRequest[];
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

export type TransferFromErc721Data = ERC721APIResponse;

export type TransferFromResult = ERC4626APIResponse;

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

export type UnpauseData = LeveragerAPIResponseLeveragerExecuteFunctionResult;

export interface UnsignedPSBTInput {
  inputs: string;
  network: string;
  outputs: string;
}

export interface UnsignedPSBTOutput {
  psbt_hex: string;
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

export type WithdrawData = AavePoolAPIResponseAavePoolExecuteFunctionResult;

export type WithdrawResult = ERC4626APIResponse;
