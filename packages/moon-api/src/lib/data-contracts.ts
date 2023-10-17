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

export interface Transaction {
  moon_scan_url?: string;
  transaction_hash: string;
  signed_transaction: string;
  signed_message?: string;
  raw_transaction?: string;
  signature?: string;
}

export interface Account {
  address: string;
}

export interface AccountResponse {
  keys?: Account[];
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

export interface Erc20 {
  name?: string;
  symbol?: string;
  decimals?: string;
  totalSupply?: string;
  contract_address?: string;
  balanceOf?: string;
  allowance?: string;
}

export interface Erc1155 {
  balance_of?: string;
  balance_of_batch?: string;
}

export interface BroadCastRawTransactionResponse {
  success: boolean;
  message: string;
  data: string;
}

export interface Erc721 {
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
    | Erc20
    | Erc1155
    | BroadCastRawTransactionResponse
    | Erc721;
  success?: boolean;
  message?: string;
}

export interface InputBody {
  chain_id?: string;
  encoding?: string;
  contract_address?: string;
  to?: string;
  input?: string;
  value?: string;
  nonce?: string;
  gas?: string;
  gasPrice?: string;
  data?: string;
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
  chain_id?: string;
  encoding?: string;
  contract_address?: string;
  to?: string;
  input?: string;
  value?: string;
  nonce?: string;
  gas?: string;
  gasPrice?: string;
  data?: string;
  lending_pool?: string;
  amount?: string;
  atoken_to_redeeem?: string;
  ref_code?: string;
  interest_rate_mode?: string;
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
  tokenIn: string;
  tokenOut: string;
  /** @format double */
  tokenInDecimals: number;
  /** @format double */
  tokenOutDecimals: number;
  amountIn: string;
  slippage: string;
  /** @format double */
  chainId: number;
  recipient: string;
  referrer: string;
}

export interface EnsResolveInput {
  domain: string;
  chain_id: string;
}

export interface Erc1155Request {
  chain_id?: string;
  encoding?: string;
  contract_address?: string;
  to?: string;
  input?: string;
  value?: string;
  nonce?: string;
  gas?: string;
  gasPrice?: string;
  data?: string;
  token_ids?: string;
  approved?: boolean;
}

export interface Erc721Request {
  chain_id?: string;
  encoding?: string;
  contract_address?: string;
  to?: string;
  input?: string;
  value?: string;
  nonce?: string;
  gas?: string;
  gasPrice?: string;
  data?: string;
  token_id?: string;
}

export interface PingResponse {
  message: string;
}

export interface UniswapInput {
  chain_id?: string;
  encoding?: string;
  contract_address?: string;
  to?: string;
  input?: string;
  value?: string;
  nonce?: string;
  gas?: string;
  gasPrice?: string;
  data?: string;
  token_a?: string;
  token_b?: string;
  amount_a?: string;
  amount_b?: string;
}
