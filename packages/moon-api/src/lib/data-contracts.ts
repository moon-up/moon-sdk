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

export interface AaveInput {
  EOA?: boolean;
  alwaysIncrementNonce?: boolean;
  amount?: string;
  approved?: boolean;
  atoken_to_redeeem?: string;
  broadcast?: boolean;
  chain_id?: string;
  contract_address?: string;
  data?: string;
  encoding?: string;
  gas?: string;
  gasPrice?: string;
  input?: string;
  interest_rate_mode?: string;
  lending_pool?: string;
  nonce?: string;
  ref_code?: string;
  to?: string;
  token_id?: string;
  token_ids?: string;
  value?: string;
}

export interface AaveReservesAPIResponse {
  address?: string;
  body?: InputBody;
  data?: AaveReservesData;
  message: string;
  success: boolean;
}

export interface AaveReservesData {
  borrow_rate: string;
  borrow_rate_mode: string;
  current_atoken_balance: string;
  current_borrow_balance: string;
  last_update_timestamp: string;
  liquidity_rate: string;
  origination_fee: string;
  principal_borrow_balance: string;
  usage_as_collateral_enabled: string;
  variable_borrow_index: string;
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

export interface AbiInput {
  components?: AbiInput[];
  indexed?: boolean;
  internalType?: string;
  name: string;
  type: string;
}

/**
 * The abi to parse the log object of the contract
 * @example {}
 */
export interface AbiItem {
  anonymous?: boolean;
  constant?: boolean;
  /** @format double */
  gas?: number;
  inputs?: AbiInput[];
  name?: string;
  outputs?: AbiOutput[];
  payable?: boolean;
  stateMutability?: string;
  type: string;
}

export interface AbiOutput {
  components?: AbiOutput[];
  internalType?: string;
  name: string;
  type: string;
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

export type AddLiquidityData = TransactionAPIResponse;

export type AddLiquidityResult = TransactionAPIResponse;

export type AddLiquidityWethData = TransactionAPIResponse;

export type AllowanceErc20Data = TransactionAPIResponse;

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

export type ApproveCallDataData = any;

export type ApproveCallDataPayload = any;

export type ApproveData = TransactionAPIResponse;

export type ApproveErc20Data = TransactionAPIResponse;

export type ApproveSpenderData = any;

export type ApproveSpenderPayload = any;

export interface BalanceAPIResponse {
  address?: string;
  body?: InputBody;
  data?: BalanceResponse;
  message: string;
  success: boolean;
}

export type BalanceOfBatchData = TransactionAPIResponse;

export type BalanceOfData = TransactionAPIResponse;

export type BalanceOfErc20Data = TransactionAPIResponse;

export type BalanceOfResult = TransactionAPIResponse;

export interface BalanceResponse {
  balance: string;
}

export interface BitcoinAPIResponse {
  address?: string;
  body?: InputBody;
  data?: BitcoinTransactionOutput;
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

export interface Block {
  hash: string;
  number: string;
  timestamp: string;
}

export type BorrowData = TransactionAPIResponse;

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

export interface ConveyorFinanceControllerResponse {
  convey?: TransactionResponse;
  data?: TransactionData;
  input?: InputBody;
  message: string;
  signed?: Transaction;
  success: boolean;
  tx?: {
    data: string;
    from: string;
    gas: string;
    nonce: string;
    to: string;
    value: string;
  };
}

export interface CosmosAPIResponse {
  data?: any;
  message: string;
  success: boolean;
}

export interface CreateAccountBody {
  network?: string;
  private_key?: string;
}

export type CreateAccountData = AccountAPIResponse;

export interface CreateAccountInput {
  private_key?: string;
}

export type CreateAccountResult = CosmosAPIResponse;

export type CreateBitcoinAccountData = AccountAPIResponse;

export type CreateBitcoinCashAccountData = AccountAPIResponse;

export type CreateDogeCoinAccountData = AccountAPIResponse;

export type CreateEosAccountData = AccountAPIResponse;

export type CreateLitecoinAccountData = AccountAPIResponse;

export type CreatePaymentIntentConfigData = any;

export type CreatePaymentIntentConfigPayload = any;

export interface CreatePaymentIntentInput {
  /** @format double */
  amount: number;
  config?: string;
  currency?: string;
  metadata: Record<string, string>;
  network?: string;
}

export type CreateRippleAccountData = AccountAPIResponse;

export type CreateSolanaAccountData = AccountAPIResponse;

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

export type DecimalsErc20Data = TransactionAPIResponse;

export type DeleteAccountData = AccountAPIResponse;

export type DeleteAccountResult = CosmosAPIResponse;

export type DeletePaymentIntentConfigData = PaymentIntentResponse;

export type DeployContractData = TransactionAPIResponse;

export interface DeployInput {
  abi: string;
  bytecode: string;
  chain_id?: string;
  constructor_args?: string;
}

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
  alwaysIncrementNonce?: boolean;
  approved?: boolean;
  broadcast?: boolean;
  chain_id?: string;
  contract_address?: string;
  data?: string;
  encoding?: string;
  gas?: string;
  gasPrice?: string;
  input?: string;
  nonce?: string;
  to?: string;
  token_id?: string;
  token_ids?: string;
  value?: string;
}

export interface Erc721Request {
  EOA?: boolean;
  alwaysIncrementNonce?: boolean;
  approved?: boolean;
  broadcast?: boolean;
  chain_id?: string;
  contract_address?: string;
  data?: string;
  encoding?: string;
  gas?: string;
  gasPrice?: string;
  input?: string;
  nonce?: string;
  to?: string;
  token_id?: string;
  token_ids?: string;
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

export type GetAccountData = AccountAPIResponse;

export type GetAllPaymentIntentConfigsData = PaymentIntentResponse[];

export type GetAllPossibleConnectionsData = ApiResponseTokenInfoByChainId;

export interface GetAllPossibleConnectionsParams {
  toChain: string;
  toToken: string;
}

export type GetApprovedData = TransactionAPIResponse;

export type GetBalanceData = BalanceAPIResponse;

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

export type GetDogeCoinAccountData = AccountAPIResponse;

export type GetEosAccountData = AccountAPIResponse;

export type GetGasPriceData = ApiResponseGasPrice;

export interface GetGasPriceParams {
  chainId: string;
}

export type GetLitecoinAccountData = AccountAPIResponse;

export type GetMessageData = PingResponse;

export type GetNonceData = NonceAPIResponse;

export type GetOnePaymentIntentConfigsData = PaymentIntentResponse;

export type GetQuoteData = ApiResponseQuote;

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

export interface GetQuoteParams2 {
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

export type GetQuoteResult = ApiResponseQuote;

export type GetRippleAccountData = AccountAPIResponse;

export type GetSolanaAccountData = AccountAPIResponse;

export type GetSupportedChainsData = ApiResponseChainMap;

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

export interface GetSwapDto {
  allowPartialFill?: boolean;
  amount: string;
  /** @format double */
  chainId?: number;
  compatibility?: boolean;
  complexityLevel?: string;
  connectorTokens?: string;
  disableEstimate?: boolean;
  dst: string;
  fee?: string;
  from: string;
  gasLimit?: string;
  gasPrice?: string;
  includeProtocols?: boolean;
  includeTokensInfo?: boolean;
  mainRouteParts?: string;
  parts?: string;
  permit?: string;
  protocols?: string;
  receiver?: string;
  referrer?: string;
  /** @format double */
  slippage: number;
  src: string;
}

export type GetToolsData = ApiResponseToolsResponse;

export interface GetToolsParams {
  chains?: string;
}

export type GetTronAccountData = AccountAPIResponse;

export type GetstatusData = ApiResponseStatusResponse;

export interface GetstatusParams {
  txHash: string;
}

export interface IBCTransferTransactionInput {
  /** @format double */
  account_number: number;
  amount: string;
  chain_id: string;
  demon: string;
  fee_amount: string;
  fee_demon: string;
  from_address: string;
  /** @format double */
  gas_limit: number;
  memo: string;
  /** @format double */
  sequence: number;
  source_channel: string;
  source_port: string;
  /** @format double */
  timeout_height: number;
  to_address: string;
}

export interface IERC20Approval {
  contract: string;
  logIndex: string;
  owner: string;
  spender: string;
  tokenDecimals: string;
  tokenName: string;
  tokenSymbol: string;
  transactionHash: string;
  triggers?: TriggerOutput[];
  value: string;
  valueWithDecimals?: string;
}

export interface IERC20Transfer {
  contract: string;
  from: string;
  logIndex: string;
  to: string;
  tokenDecimals: string;
  tokenName: string;
  tokenSymbol: string;
  transactionHash: string;
  triggers?: TriggerOutput[];
  value: string;
  valueWithDecimals?: string;
}

export interface INFTApproval {
  account: string;
  approvedAll: boolean;
  contract: string;
  logIndex: string;
  operator: string;
  tokenContractType: string;
  tokenId: string | null;
  tokenName: string;
  tokenSymbol: string;
  transactionHash: string;
}

export interface INFTApprovalERC1155 {
  account: string;
  approved: boolean;
  contract: string;
  logIndex: string;
  operator: string;
  tokenContractType: string;
  tokenName: string;
  tokenSymbol: string;
  transactionHash: string;
}

export interface INFTApprovalERC721 {
  approved: string;
  contract: string;
  logIndex: string;
  owner: string;
  tokenContractType: string;
  tokenId: string;
  tokenName: string;
  tokenSymbol: string;
  transactionHash: string;
}

export interface INFTTransfer {
  amount: string;
  contract: string;
  from: string;
  logIndex: string;
  operator: string | null;
  to: string;
  tokenContractType: string;
  tokenId: string;
  tokenName: string;
  tokenSymbol: string;
  transactionHash: string;
  triggers?: TriggerOutput[];
}

export interface INativeBalance {
  address: string;
  balance: string;
}

export interface IOldNFTApproval {
  ERC1155: INFTApprovalERC1155[];
  ERC721: INFTApprovalERC721[];
}

export interface IWebhook {
  erc20Approvals: IERC20Approval[];
  erc20Transfers: IERC20Transfer[];
  abi: AbiItem[];
  block: Block;
  chainId: string;
  confirmed: boolean;
  logs: Log[];
  nativeBalances: INativeBalance[];
  /** @deprecated */
  nftApprovals: IOldNFTApproval;
  nftTokenApprovals: INFTApproval[];
  nftTransfers: INFTTransfer[];
  /** @format double */
  retries: number;
  streamId: string;
  tag: string;
  txs: Transaction[];
  txsInternal: InternalTransaction[];
}

export interface InputBody {
  EOA?: boolean;
  alwaysIncrementNonce?: boolean;
  approved?: boolean;
  broadcast?: boolean;
  chain_id?: string;
  contract_address?: string;
  data?: string;
  encoding?: string;
  gas?: string;
  gasPrice?: string;
  input?: string;
  nonce?: string;
  to?: string;
  token_id?: string;
  token_ids?: string;
  value?: string;
}

export interface InternalTransaction {
  from: string | null;
  gas: string | null;
  to: string | null;
  transactionHash: string;
  value: string | null;
}

export type IsApprovedForAllData = TransactionAPIResponse;

export type IsApprovedForAllResult = TransactionAPIResponse;

export type LendData = TransactionAPIResponse;

export type ListAccountsData = AccountAPIResponse;

export type ListAccountsResult = CosmosAPIResponse;

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

export interface Log {
  topic0: string | null;
  topic1: string | null;
  topic2: string | null;
  topic3: string | null;
  address: string;
  data: string;
  logIndex: string;
  transactionHash: string;
  triggers?: TriggerOutput[];
}

export interface Message {
  crypto: CryptoCurrency[];
  fiat: FiatCurrency[];
}

export interface MessageInput {
  message: string;
}

export type MoralisWebhookData = any;

export type MultiSignSolanaTransactionData = SolanaAPIResponse;

export type NameData = TransactionAPIResponse;

export type NameErc20Data = TransactionAPIResponse;

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

export type OwnerOfData = TransactionAPIResponse;

export type PaymentCreatePaymentIntentData = PaymentIntentResponse;

export type PaymentDeletePaymentIntentData = PaymentIntentResponse;

export type PaymentGetAllPaymentIntentsData = PaymentIntentResponse[];

export type PaymentGetAvailableChainsData = string[];

export type PaymentGetPaymentIntentData = PaymentIntentResponse;

export interface PaymentIntentResponse {
  /** @format double */
  amount?: number;
  currency?: string;
  destination?: string;
  id?: string;
  message?: string;
  metadata?: Record<string, string>;
  network?: string;
  qr_code?: string;
  status?: string;
  success: boolean;
  uri?: string;
}

export interface PaymentType {
  icon: string;
  name: string;
  paymentTypeId: string;
}

export type PaymentUpdatePaymentIntentData = PaymentIntentResponse;

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

export type ProtocolsData = any;

export type ProtocolsPayload = any;

export interface Quote {
  action: Action;
  estimate: Estimate;
  id: string;
  includedSteps: Step[];
  tool: string;
  transactionRequest: TransactionRequest;
  type: string;
}

export type QuoteData = any;

export type QuotePayload = any;

export type Quotes = Quote[];

export type ReadAccountData = CosmosAPIResponse;

export type RemoveLiquidityData = TransactionAPIResponse;

export type RemoveLiquidityResult = TransactionAPIResponse;

export type RemoveLiquidityWethData = TransactionAPIResponse;

export type RepayData = TransactionAPIResponse;

export type ResolveData = EnsResolveAPIResponse;

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

export type SafeBatchTransferFromData = TransactionAPIResponse;

export type SafeTransferFromData = TransactionAPIResponse;

export type SafeTransferFromResult = TransactionAPIResponse;

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

export type SetApprovalForAllResult = TransactionAPIResponse;

export type SignBitcoinCashTransactionData = BitcoinCashAPIResponse;

export type SignBitcoinTransactionData = BitcoinAPIResponse;

export type SignDogeCoinTransactionData = DogeCoinAPIResponse;

export type SignEosTransactionData = EosAPIResponse;

export type SignIbcTransferTransactionData = CosmosAPIResponse;

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

export type SignMessageResult = CosmosAPIResponse;

export type SignRippleTransactionData = RippleAPIResponse;

export type SignSolanaTransactionData = SolanaAPIResponse;

export type SignTransactionData = TransactionAPIResponse;

export type SignTransferTransactionData = CosmosAPIResponse;

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

export type SwapData = any;

export type SwapExactEthForTokensData = TransactionAPIResponse;

export type SwapExactTokensForTokensData = TransactionAPIResponse;

export type SwapResult = ConveyorFinanceControllerResponse;

export type SymbolData = TransactionAPIResponse;

export type SymbolErc20Data = TransactionAPIResponse;

export interface TatumTransactionEvent {
  address: string;
  amount: string;
  /** @format double */
  blockNumber: number;
  chain: string;
  counterAddress: string;
  currency: string;
  mempool: boolean;
  subscriptionType: string;
  test: boolean;
  txId: string;
}

export type TatumWebhookData = any;

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

export interface TokenSwapParams {
  EOA?: boolean;
  alwaysIncrementNonce?: boolean;
  amountIn: string;
  approved?: boolean;
  broadcast?: boolean;
  chain_id?: string;
  contract_address?: string;
  data?: string;
  encoding?: string;
  gas?: string;
  gasPrice?: string;
  input?: string;
  nonce?: string;
  recipient: string;
  referrer: string;
  slippage: string;
  to?: string;
  tokenIn: string;
  /** @format double */
  tokenInDecimals: number;
  tokenOut: string;
  /** @format double */
  tokenOutDecimals: number;
  token_id?: string;
  token_ids?: string;
  value?: string;
}

export type TokenUriData = TransactionAPIResponse;

export type TokensData = any;

export type TokensPayload = any;

export interface TokensResponse {
  tokens: Record<string, Token[]>;
}

export interface ToolsResponse {
  bridges: Bridge[];
  exchanges: Exchange[];
}

export type TotalSupplyErc20Data = TransactionAPIResponse;

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
  data?: Transaction;
  message: string;
  signedTx?: any;
  success: boolean;
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

export interface TransactionResponse {
  /** @format double */
  chainId: number;
  /** @format double */
  currentBlockNumber: number;
  info: {
    affiliateAggregator: string;
    affiliateGas: string;
    amountOut: string;
    amountOutMin: string;
    conveyorGas: string;
  };
  message: string;
  tx: {
    data: string;
    from: string;
    gas: string;
    nonce: string;
    to: string;
    value: string;
  };
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

export type TransferData = TransactionAPIResponse;

export type TransferErc20Data = TransactionAPIResponse;

export type TransferEthData = TransactionAPIResponse;

export type TransferFromData = TransactionAPIResponse;

export type TransferFromErc20Data = TransactionAPIResponse;

export type TransferSolanaTransactionData = SolanaAPIResponse;

export type TransferTokensSignSolanaTransactionData = SolanaAPIResponse;

export interface TransferTransactionInput {
  /** @format double */
  account_number: number;
  amount: string;
  chain_id: string;
  demon: string;
  fee_amount: string;
  fee_demon: string;
  from_address: string;
  /** @format double */
  gas_limit: number;
  memo: string;
  /** @format double */
  sequence: number;
  /** @format double */
  timeout_height: number;
  to_address: string;
}

export interface TriggerOutput {
  name: string;
  value: any;
}

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

export interface UniswapInput {
  EOA?: boolean;
  alwaysIncrementNonce?: boolean;
  amount_a?: string;
  amount_b?: string;
  approved?: boolean;
  broadcast?: boolean;
  chain_id?: string;
  contract_address?: string;
  data?: string;
  encoding?: string;
  gas?: string;
  gasPrice?: string;
  input?: string;
  nonce?: string;
  to?: string;
  token_a?: string;
  token_b?: string;
  token_id?: string;
  token_ids?: string;
  value?: string;
}

export type UpdatePaymentIntentConfigData = PaymentIntentResponse;

export type UpdatePaymentIntentConfigPayload = any;

export type UserReserveDataData = AaveReservesAPIResponse;
