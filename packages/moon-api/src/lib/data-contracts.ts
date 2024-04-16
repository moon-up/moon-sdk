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

export type AddLiquidityData = TransactionAPIResponse;

export type AddLiquidityResult = TransactionAPIResponse;

export type AddLiquidityWethData = TransactionAPIResponse;

export type AllowanceErc20Data = TransactionAPIResponse;

export type ApproveCallDataData = any;

export type ApproveCallDataPayload = any;

export type ApproveData = TransactionAPIResponse;

export type ApproveErc20Data = TransactionAPIResponse;

export type ApproveSpenderData = any;

export type ApproveSpenderPayload = any;

export interface AvailablePaymentMethod {
  icon: string;
  name: string;
  paymentTypeId: string;
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

export type BorrowData = TransactionAPIResponse;

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
    /** @format double */
    nonce: number;
    to: string;
    value: string;
  };
}

export interface CosmosAPIResponse {
  address?: string;
  body?: InputBody;
  data?: CosmosTransactionOutput;
  message: string;
  success: boolean;
}

export interface CosmosInput {
  network?: string;
  private_key?: string;
}

export interface CosmosTransactionInput {
  compress?: boolean;
  network?: string;
  to?: string;
  /** @format double */
  value?: number;
}

export interface CosmosTransactionOutput {
  signedTx?: string;
  transaction_hash?: string;
}

export type CreateAccountData = AccountAPIResponse;

export interface CreateAccountInput {
  private_key?: string;
}

export type CreateBitcoinAccountData = AccountAPIResponse;

export type CreateBitcoinCashAccountData = AccountAPIResponse;

export type CreateCosmosAccountData = AccountAPIResponse;

export type CreateDogeCoinAccountData = AccountAPIResponse;

export type CreateEosAccountData = AccountAPIResponse;

export type CreateLitecoinAccountData = AccountAPIResponse;

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

export interface FiatCurrency {
  code: string;
  icon: string;
  id: string;
  name: string;
  symbol: string;
}

export type GetAccountData = AccountAPIResponse;

export type GetApprovedData = TransactionAPIResponse;

export type GetBalanceData = BalanceAPIResponse;

export interface GetBalanceParams {
  accountName: string;
  chainId: string;
}

export type GetBitcoinAccountData = AccountAPIResponse;

export type GetBitcoinCashAccountData = AccountAPIResponse;

export type GetCosmosAccountData = AccountAPIResponse;

export type GetDogeCoinAccountData = AccountAPIResponse;

export type GetEosAccountData = AccountAPIResponse;

export type GetLitecoinAccountData = AccountAPIResponse;

export type GetMessageData = PingResponse;

export type GetNonceData = NonceAPIResponse;

export type GetRippleAccountData = AccountAPIResponse;

export type GetSolanaAccountData = AccountAPIResponse;

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

export type GetTronAccountData = AccountAPIResponse;

export interface InputBody {
  EOA?: boolean;
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

export type IsApprovedForAllData = TransactionAPIResponse;

export type IsApprovedForAllResult = TransactionAPIResponse;

export type LendData = TransactionAPIResponse;

export type ListAccountsData = AccountAPIResponse;

export type ListBitcoinAccountsData = AccountAPIResponse;

export type ListBitcoinCashAccountsData = AccountAPIResponse;

export type ListCosmosAccountsData = AccountAPIResponse;

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

export type OwnerOfData = TransactionAPIResponse;

export interface PaymentType {
  icon: string;
  name: string;
  paymentTypeId: string;
}

export interface PingResponse {
  message: string;
}

export type ProtocolsData = any;

export type ProtocolsPayload = any;

export interface Quote {
  availablePaymentMethods: AvailablePaymentMethod[];
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

export type QuoteData = any;

export type QuotePayload = any;

export type Quotes = Quote[];

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

export type SignCosmosTransactionData = CosmosAPIResponse;

export type SignDogeCoinTransactionData = DogeCoinAPIResponse;

export type SignEosTransactionData = EosAPIResponse;

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

export type SignRippleTransactionData = RippleAPIResponse;

export type SignSolanaTransactionData = SolanaAPIResponse;

export type SignTransactionData = TransactionAPIResponse;

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

export interface TokenSwapParams {
  EOA?: boolean;
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
    /** @format double */
    nonce: number;
    to: string;
    value: string;
  };
}

export type TransferData = TransactionAPIResponse;

export type TransferErc20Data = TransactionAPIResponse;

export type TransferEthData = TransactionAPIResponse;

export type TransferFromData = TransactionAPIResponse;

export type TransferFromErc20Data = TransactionAPIResponse;

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

export type UserReserveDataData = AaveReservesAPIResponse;
