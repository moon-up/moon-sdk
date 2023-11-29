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

export interface GetSwapDto {
  src: string;
  dst: string;
  amount: string;
  from: string;
  /** @format double */
  slippage: number;
  protocols?: string;
  fee?: string;
  disableEstimate?: boolean;
  permit?: string;
  includeTokensInfo?: boolean;
  includeProtocols?: boolean;
  compatibility?: boolean;
  allowPartialFill?: boolean;
  parts?: string;
  mainRouteParts?: string;
  connectorTokens?: string;
  complexityLevel?: string;
  gasLimit?: string;
  gasPrice?: string;
  referrer?: string;
  receiver?: string;
  /** @format double */
  chainId?: number;
}

export interface NonceResponse {
  /** @format double */
  nonce: number;
}

export interface BalanceResponse {
  balance: string;
}

export interface Tx {
  /** @format double */
  type?: number;
  /** @format double */
  chain_id?: number;
  data?: string;
  gas?: string;
  gas_price?: string;
  gas_tip_cap?: string | null;
  gas_fee_cap?: string | null;
  value?: string;
  /** @format double */
  nonce?: number;
  from?: string;
  to?: string | null;
  blob_gas?: string | null;
  blob_gas_fee_cap?: string | null;
  blob_hashes?: string[] | null;
  v?: string;
  r?: string;
  s?: string;
}

export interface TransactionRequest {
  nonce?: string;
  data?: string;
  value?: string;
  to?: string;
  from?: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
}

export interface TransactionData {
  moon_scan_url?: string;
  transaction_hash: string;
  signed_transaction: string;
  signed_message?: string;
  raw_transaction?: string;
  signature?: string;
  transaction?: Tx;
  userOps?: TransactionRequest[];
  userop_transaction?: string;
}

export interface Transaction {
  userop_transaction?: string;
  userOps?: TransactionRequest[];
  transaction?: Tx;
  signature?: string;
  moon_scan_url?: string;
  transactions?: TransactionData[];
  data?: string | null;
  raw_transaction?: string;
  signed_transaction?: string;
  transaction_hash?: string;
}

export interface AccountResponse {
  keys?: string[];
  address?: string;
}

export interface SignMessage {
  name?: string;
  data: string;
  encoding?: string;
  header?: boolean;
  signtype?: boolean;
}

export interface EnsResolveResponse {
  address: string;
}

export interface ENSReverseResolveResponse {
  domain: string;
}

export interface AaveReservesData {
  current_atoken_balance: string;
  current_borrow_balance: string;
  principal_borrow_balance: string;
  borrow_rate_mode: string;
  borrow_rate: string;
  liquidity_rate: string;
  origination_fee: string;
  variable_borrow_index: string;
  last_update_timestamp: string;
  usage_as_collateral_enabled: string;
}

export interface Erc20Response {
  /** @format double */
  type?: number;
  /** @format double */
  chain_id?: number;
  data?: string;
  gas?: string;
  gas_price?: string;
  gas_tip_cap?: string | null;
  gas_fee_cap?: string | null;
  value?: string;
  /** @format double */
  nonce?: number;
  from?: string;
  to?: string | null;
  blob_gas?: string | null;
  blob_gas_fee_cap?: string | null;
  blob_hashes?: string[] | null;
  v?: string;
  r?: string;
  s?: string;
  name?: string;
  symbol?: string;
  decimals?: string;
  totalSupply?: string;
  contract_address?: string;
  balanceOf?: string;
  allowance?: string;
}

export interface Erc1155Response {
  /** @format double */
  type?: number;
  /** @format double */
  chain_id?: number;
  data?: string;
  gas?: string;
  gas_price?: string;
  gas_tip_cap?: string | null;
  gas_fee_cap?: string | null;
  value?: string;
  /** @format double */
  nonce?: number;
  from?: string;
  to?: string | null;
  blob_gas?: string | null;
  blob_gas_fee_cap?: string | null;
  blob_hashes?: string[] | null;
  v?: string;
  r?: string;
  s?: string;
  balance_of?: string;
  balance_of_batch?: string;
}

export interface BroadCastRawTransactionResponse {
  success: boolean;
  message: string;
  data: string;
}

export interface BitcoinTransactionOutput {
  signedTx?: string;
  transaction_hash?: string;
}

export interface Erc721Response {
  /** @format double */
  type?: number;
  /** @format double */
  chain_id?: number;
  data?: string;
  gas?: string;
  gas_price?: string;
  gas_tip_cap?: string | null;
  gas_fee_cap?: string | null;
  value?: string;
  /** @format double */
  nonce?: number;
  from?: string;
  to?: string | null;
  blob_gas?: string | null;
  blob_gas_fee_cap?: string | null;
  blob_hashes?: string[] | null;
  v?: string;
  r?: string;
  s?: string;
  name?: string;
  symbol?: string;
  balance_of?: string;
  owner_of?: string;
  token_uri?: string;
  contract_address?: string;
  isApprovedForAll?: string;
}

export interface AccountControllerResponse {
  data?:
    | NonceResponse
    | BalanceResponse
    | Transaction
    | AccountResponse
    | SignMessage
    | EnsResolveResponse
    | ENSReverseResolveResponse
    | AaveReservesData
    | Erc20Response
    | Erc1155Response
    | BroadCastRawTransactionResponse
    | BitcoinTransactionOutput
    | Erc721Response;
  success?: boolean;
  message?: string;
}

export interface InputBody {
  to?: string;
  data?: string;
  input?: string;
  value?: string;
  nonce?: string;
  gas?: string;
  gasPrice?: string;
  chain_id?: string;
  encoding?: string;
  EOA?: boolean;
  contract_address?: string;
  token_id?: string;
  token_ids?: string;
  approved?: boolean;
  broadcast?: boolean;
}

export interface SignTypedData {
  data: string;
}

export interface CreateAccountInput {
  private_key?: string;
}

export interface DeployInput {
  chain_id?: string;
  abi: string;
  bytecode: string;
  constructor_args?: string;
}

export interface BroadcastInput {
  chainId: string;
  rawTransaction: string;
}

export interface AaveInput {
  to?: string;
  data?: string;
  input?: string;
  value?: string;
  nonce?: string;
  gas?: string;
  gasPrice?: string;
  chain_id?: string;
  encoding?: string;
  EOA?: boolean;
  contract_address?: string;
  token_id?: string;
  token_ids?: string;
  approved?: boolean;
  broadcast?: boolean;
  lending_pool?: string;
  amount?: string;
  atoken_to_redeeem?: string;
  ref_code?: string;
  interest_rate_mode?: string;
}

export interface BitcoinInput {
  network?: string;
  private_key?: string;
}

export interface BitcoinTransactionInput {
  to?: string;
  /** @format double */
  value?: number;
  network?: string;
  compress?: boolean;
}

export interface BitcoinCashInput {
  network?: string;
  private_key?: string;
}

export interface BitcoinCashTransactionInput {
  to?: string;
  /** @format double */
  value?: number;
  network?: string;
  compress?: boolean;
}

export interface TransactionResponse {
  message: string;
  tx: {
    data: string;
    value: string;
    /** @format double */
    nonce: number;
    gas: string;
    to: string;
    from: string;
  };
  info: {
    conveyorGas: string;
    affiliateGas: string;
    affiliateAggregator: string;
    amountOut: string;
    amountOutMin: string;
  };
  /** @format double */
  chainId: number;
  /** @format double */
  currentBlockNumber: number;
}

export interface ConveyorFinanceControllerResponse {
  input?: InputBody;
  convey?: TransactionResponse;
  data?: TransactionData;
  tx?: {
    data: string;
    value: string;
    /** @format double */
    nonce: number;
    gas: string;
    to: string;
    from: string;
  };
  signed?: Transaction;
  success: boolean;
  message: string;
}

export interface TokenSwapParams {
  to?: string;
  data?: string;
  input?: string;
  value?: string;
  nonce?: string;
  gas?: string;
  gasPrice?: string;
  chain_id?: string;
  encoding?: string;
  EOA?: boolean;
  contract_address?: string;
  token_id?: string;
  token_ids?: string;
  approved?: boolean;
  broadcast?: boolean;
  tokenIn: string;
  tokenOut: string;
  /** @format double */
  tokenInDecimals: number;
  /** @format double */
  tokenOutDecimals: number;
  amountIn: string;
  slippage: string;
  recipient: string;
  referrer: string;
}

export interface CosmosInput {
  network?: string;
  private_key?: string;
}

export interface CosmosTransactionInput {
  to?: string;
  /** @format double */
  value?: number;
  network?: string;
  compress?: boolean;
}

export interface DogeCoinInput {
  network?: string;
  private_key?: string;
}

export interface DogeCoinTransactionInput {
  to?: string;
  /** @format double */
  value?: number;
  network?: string;
  compress?: boolean;
}

export interface EnsResolveInput {
  domain: string;
  chain_id: string;
}

export interface EosInput {
  network?: string;
  private_key?: string;
}

export interface EosTransactionInput {
  to?: string;
  /** @format double */
  value?: number;
  network?: string;
  compress?: boolean;
}

export interface Erc1155Request {
  to?: string;
  data?: string;
  input?: string;
  value?: string;
  nonce?: string;
  gas?: string;
  gasPrice?: string;
  chain_id?: string;
  encoding?: string;
  EOA?: boolean;
  contract_address?: string;
  token_id?: string;
  token_ids?: string;
  approved?: boolean;
  broadcast?: boolean;
}

export interface Erc721Request {
  to?: string;
  data?: string;
  input?: string;
  value?: string;
  nonce?: string;
  gas?: string;
  gasPrice?: string;
  chain_id?: string;
  encoding?: string;
  EOA?: boolean;
  contract_address?: string;
  token_id?: string;
  token_ids?: string;
  approved?: boolean;
  broadcast?: boolean;
}

export interface LitecoinInput {
  network?: string;
  private_key?: string;
}

export interface LitecoinTransactionInput {
  to?: string;
  /** @format double */
  value?: number;
  network?: string;
  compress?: boolean;
}

export interface CryptoCurrency {
  networkDisplayName: string;
  icon: string;
  /** @format double */
  chainId: number;
  address: string;
  /** @format double */
  decimals: number;
  network: string;
  symbol: string;
  name: string;
  code: string;
  id: string;
}

export interface FiatCurrency {
  icon: string;
  symbol: string;
  name: string;
  code: string;
  id: string;
}

export interface Message {
  fiat: FiatCurrency[];
  crypto: CryptoCurrency[];
}

export interface SupportedCurrenciesResponse {
  message: Message;
}

export interface PaymentType {
  icon: string;
  name: string;
  paymentTypeId: string;
}

export interface SupportedPaymentTypesMessage {
  googlepay: PaymentType;
  applepay: PaymentType;
  creditcard: PaymentType;
}

export interface SupportedPaymentTypesCurrencyResponse {
  message: SupportedPaymentTypesMessage;
}

export interface SupportedDefaultResponse {
  defaults: {
    id: {
      provider: string;
      paymentMethod: string;
      /** @format double */
      amount: number;
      target: string;
      source: string;
    };
  };
  recommended: {
    provider: string;
    paymentMethod: string;
    /** @format double */
    amount: number;
    target: string;
    source: string;
  };
}

export interface SupportedAssetResponse {
  country: string;
  assets: {
    crypto: string[];
    paymentMethods: string[];
    fiat: string;
  }[];
}

export interface GetSupportedOnRampsResponse {
  message: {
    id: string;
    displayName: string;
    icons: {
      png: {
        '160x160': string;
        '32x32': string;
      };
      svg: string;
    };
    icon: string;
  }[];
}

export interface AvailablePaymentMethod {
  icon: string;
  name: string;
  paymentTypeId: string;
}

export interface Quote {
  recommendations: string[];
  paymentMethod: string;
  quoteId: string;
  ramp: string;
  availablePaymentMethods: AvailablePaymentMethod[];
  /** @format double */
  payout: number;
  /** @format double */
  transactionFee: number;
  /** @format double */
  networkFee: number;
  /** @format double */
  rate: number;
}

export type Quotes = Quote[];

export interface SellQuote {
  recommendations: string[];
  quoteId: string;
  paymentMethod: string;
  ramp: string;
  /** @format double */
  payout: number;
  /** @format double */
  transactionFee: number;
  /** @format double */
  networkFee: number;
  /** @format double */
  rate: number;
}

export type SellQuotes = SellQuote[];

export interface TransactionInput {
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
      secondaryTextColor: string;
      primaryTextColor: string;
      secondaryColor: string;
      primaryColor: string;
      themeName: string;
      isDark: boolean;
    };
  };
  wallet: {
    address: string;
  };
  metaData: {
    quoteId: string;
  };
  originatingHost: string;
  partnerContext: string;
  uuid: string;
  network: string;
  paymentMethod: string;
  type: string;
  /** @format double */
  amount: number;
  destination: string;
  source: string;
  onramp: string;
}

export interface PaymentIntentResponse {
  metadata?: Record<string, string>;
  uri?: string;
  qr_code?: string;
  status?: string;
  destination?: string;
  /** @format double */
  amount?: number;
  network?: string;
  currency?: string;
  id?: string;
  message?: string;
  success: boolean;
}

export interface CreatePaymentIntentInput {
  metadata: Record<string, string>;
  network?: string;
  /** @format double */
  amount: number;
  currency?: string;
}

export interface Block {
  number: string;
  hash: string;
  timestamp: string;
}

export interface TriggerOutput {
  value: any;
  name: string;
}

export interface Log {
  triggers?: TriggerOutput[];
  logIndex: string;
  transactionHash: string;
  address: string;
  data: string;
  topic0: string | null;
  topic1: string | null;
  topic2: string | null;
  topic3: string | null;
}

export interface InternalTransaction {
  from: string | null;
  to: string | null;
  value: string | null;
  transactionHash: string;
  gas: string | null;
}

export interface AbiInput {
  name: string;
  type: string;
  indexed?: boolean;
  components?: AbiInput[];
  internalType?: string;
}

export interface AbiOutput {
  name: string;
  type: string;
  components?: AbiOutput[];
  internalType?: string;
}

/**
 * The abi to parse the log object of the contract
 * @example {}
 */
export interface AbiItem {
  anonymous?: boolean;
  constant?: boolean;
  inputs?: AbiInput[];
  name?: string;
  outputs?: AbiOutput[];
  payable?: boolean;
  stateMutability?: string;
  type: string;
  /** @format double */
  gas?: number;
}

export interface IERC20Transfer {
  transactionHash: string;
  contract: string;
  logIndex: string;
  from: string;
  to: string;
  value: string;
  tokenDecimals: string;
  tokenName: string;
  tokenSymbol: string;
  valueWithDecimals?: string;
  triggers?: TriggerOutput[];
}

export interface IERC20Approval {
  transactionHash: string;
  contract: string;
  logIndex: string;
  owner: string;
  spender: string;
  value: string;
  tokenDecimals: string;
  tokenName: string;
  tokenSymbol: string;
  valueWithDecimals?: string;
  triggers?: TriggerOutput[];
}

export interface INFTTransfer {
  transactionHash: string;
  contract: string;
  logIndex: string;
  tokenContractType: string;
  tokenName: string;
  tokenSymbol: string;
  triggers?: TriggerOutput[];
  operator: string | null;
  from: string;
  to: string;
  tokenId: string;
  amount: string;
}

export interface INativeBalance {
  address: string;
  balance: string;
}

export interface INFTApprovalERC721 {
  transactionHash: string;
  contract: string;
  logIndex: string;
  owner: string;
  approved: string;
  tokenId: string;
  tokenContractType: string;
  tokenName: string;
  tokenSymbol: string;
}

export interface INFTApprovalERC1155 {
  transactionHash: string;
  contract: string;
  logIndex: string;
  account: string;
  operator: string;
  approved: boolean;
  tokenContractType: string;
  tokenName: string;
  tokenSymbol: string;
}

export interface IOldNFTApproval {
  ERC721: INFTApprovalERC721[];
  ERC1155: INFTApprovalERC1155[];
}

export interface INFTApproval {
  transactionHash: string;
  contract: string;
  logIndex: string;
  tokenContractType: string;
  tokenName: string;
  tokenSymbol: string;
  account: string;
  operator: string;
  approvedAll: boolean;
  tokenId: string | null;
}

export interface IWebhook {
  block: Block;
  chainId: string;
  logs: Log[];
  txs: Transaction[];
  txsInternal: InternalTransaction[];
  abi: AbiItem[];
  /** @format double */
  retries: number;
  confirmed: boolean;
  tag: string;
  streamId: string;
  erc20Transfers: IERC20Transfer[];
  erc20Approvals: IERC20Approval[];
  nftTransfers: INFTTransfer[];
  nativeBalances: INativeBalance[];
  /** @deprecated */
  nftApprovals: IOldNFTApproval;
  nftTokenApprovals: INFTApproval[];
}

export interface PingResponse {
  message: string;
}

export interface RippleInput {
  network?: string;
  private_key?: string;
}

export interface RippleTransactionInput {
  to?: string;
  /** @format double */
  value?: number;
  network?: string;
  compress?: boolean;
}

export interface SolanaInput {
  network?: string;
  private_key?: string;
}

export interface SolanaTransactionInput {
  to?: string;
  /** @format double */
  value?: number;
  network?: string;
  compress?: boolean;
}

export interface TronInput {
  network?: string;
  private_key?: string;
}

export interface TronTransactionInput {
  to?: string;
  /** @format double */
  value?: number;
  network?: string;
  compress?: boolean;
}

export interface UniswapInput {
  to?: string;
  data?: string;
  input?: string;
  value?: string;
  nonce?: string;
  gas?: string;
  gasPrice?: string;
  chain_id?: string;
  encoding?: string;
  EOA?: boolean;
  contract_address?: string;
  token_id?: string;
  token_ids?: string;
  approved?: boolean;
  broadcast?: boolean;
  token_a?: string;
  token_b?: string;
  amount_a?: string;
  amount_b?: string;
}
