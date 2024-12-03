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

import {
  AbiEncodeInput,
  AccountsBroadcastEthreeumTransactionData,
  AccountsCreateEthereumAccountData,
  AccountsDeleteEthereumAccountData,
  AccountsDeployContractData,
  AccountsEncodeAbiDataData,
  AccountsEstimateGasData,
  AccountsEthereumGetNativeBalanceData,
  AccountsEthereumGetNativeBalanceParams,
  AccountsEthereumGetNonceData,
  AccountsEthereumGetNonceParams,
  AccountsExportEthreumAccountData,
  AccountsGetEthreumAccountData,
  AccountsListEthereumAccountsData,
  AccountsSignEthereumTransactionData,
  AccountsSignEthereumTypedDataData,
  AccountsSignEthreumMessageData,
  AccountsSuggestGasPriceData,
  AccountsSuggestGasPriceParams,
  AccountsTransferEthData,
  BroadcastInput,
  CreateAccountInput,
  DeployInput,
  InputBody,
  SignMessage,
  SignTypedData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Accounts<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Broadcasts a transaction using the provided account name and transaction details.
   *
   * @tags Accounts
   * @name AccountsBroadcastEthreeumTransaction
   * @request POST:/accounts/{accountName}/broadcast-tx
   * @secure
   */
  accountsBroadcastEthreeumTransaction = (
    accountName: string,
    data: BroadcastInput,
    params: RequestParams = {}
  ) =>
    this.http.request<AccountsBroadcastEthreeumTransactionData, any>({
      path: `/accounts/${accountName}/broadcast-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a new account using the provided authorization token and account input data.
   *
   * @tags Accounts
   * @name AccountsCreateEthereumAccount
   * @request POST:/accounts
   * @secure
   */
  accountsCreateEthereumAccount = (
    data: CreateAccountInput,
    params: RequestParams = {}
  ) =>
    this.http.request<AccountsCreateEthereumAccountData, any>({
      path: `/accounts`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes an account based on the provided account name.
   *
   * @tags Accounts
   * @name AccountsDeleteEthereumAccount
   * @request DELETE:/accounts/{accountName}
   * @secure
   */
  accountsDeleteEthereumAccount = (
    accountName: string,
    params: RequestParams = {}
  ) =>
    this.http.request<AccountsDeleteEthereumAccountData, any>({
      path: `/accounts/${accountName}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Deploys a contract using the provided account name and deployment input.
   *
   * @tags Accounts
   * @name AccountsDeployContract
   * @request POST:/accounts/{accountName}/deploy
   * @secure
   */
  accountsDeployContract = (
    accountName: string,
    data: DeployInput,
    params: RequestParams = {}
  ) =>
    this.http.request<AccountsDeployContractData, any>({
      path: `/accounts/${accountName}/deploy`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Encodes data using the provided ABI and function parameters.
   *
   * @tags Accounts
   * @name AccountsEncodeAbiData
   * @request POST:/accounts/encode-data
   * @secure
   */
  accountsEncodeAbiData = (data: AbiEncodeInput, params: RequestParams = {}) =>
    this.http.request<AccountsEncodeAbiDataData, any>({
      path: `/accounts/encode-data`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Estimates the gas required for a transaction.
   *
   * @tags Accounts
   * @name AccountsEstimateGas
   * @request POST:/accounts/{accountName}/estimate
   * @secure
   */
  accountsEstimateGas = (
    accountName: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<AccountsEstimateGasData, any>({
      path: `/accounts/${accountName}/estimate`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the balance of a specified account.
   *
   * @tags Accounts
   * @name AccountsEthereumGetNativeBalance
   * @request GET:/accounts/{accountName}/balance
   * @secure
   */
  accountsEthereumGetNativeBalance = (
    { accountName, ...query }: AccountsEthereumGetNativeBalanceParams,
    params: RequestParams = {}
  ) =>
    this.http.request<AccountsEthereumGetNativeBalanceData, any>({
      path: `/accounts/${accountName}/balance`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the nonce for a given account.
   *
   * @tags Accounts
   * @name AccountsEthereumGetNonce
   * @request GET:/accounts/{accountName}/nonce
   * @secure
   */
  accountsEthereumGetNonce = (
    { accountName, ...query }: AccountsEthereumGetNonceParams,
    params: RequestParams = {}
  ) =>
    this.http.request<AccountsEthereumGetNonceData, any>({
      path: `/accounts/${accountName}/nonce`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Exports the account details including address, private key, and public key.
   *
   * @tags Accounts
   * @name AccountsExportEthreumAccount
   * @request GET:/accounts/{accountName}/export
   * @secure
   */
  accountsExportEthreumAccount = (
    accountName: string,
    params: RequestParams = {}
  ) =>
    this.http.request<AccountsExportEthreumAccountData, any>({
      path: `/accounts/${accountName}/export`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the account details for a given account name.
   *
   * @tags Accounts
   * @name AccountsGetEthreumAccount
   * @request GET:/accounts/{accountName}
   * @secure
   */
  accountsGetEthreumAccount = (
    accountName: string,
    params: RequestParams = {}
  ) =>
    this.http.request<AccountsGetEthreumAccountData, any>({
      path: `/accounts/${accountName}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Lists accounts using the provided authorization token.
   *
   * @tags Accounts
   * @name AccountsListEthereumAccounts
   * @request GET:/accounts
   * @secure
   */
  accountsListEthereumAccounts = (params: RequestParams = {}) =>
    this.http.request<AccountsListEthereumAccountsData, any>({
      path: `/accounts`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Signs a transaction for the specified account.
   *
   * @tags Accounts
   * @name AccountsSignEthereumTransaction
   * @request POST:/accounts/{accountName}/sign-transaction
   * @secure
   */
  accountsSignEthereumTransaction = (
    accountName: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<AccountsSignEthereumTransactionData, any>({
      path: `/accounts/${accountName}/sign-transaction`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Handles the signing of typed data for a given account.
   *
   * @tags Accounts
   * @name AccountsSignEthereumTypedData
   * @request POST:/accounts/{accountName}/sign-typed-data
   * @secure
   */
  accountsSignEthereumTypedData = (
    accountName: string,
    data: SignTypedData,
    params: RequestParams = {}
  ) =>
    this.http.request<AccountsSignEthereumTypedDataData, any>({
      path: `/accounts/${accountName}/sign-typed-data`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Signs a message using the provided account name and authorization token.
   *
   * @tags Accounts
   * @name AccountsSignEthreumMessage
   * @request POST:/accounts/{accountName}/sign-message
   * @secure
   */
  accountsSignEthreumMessage = (
    accountName: string,
    data: SignMessage,
    params: RequestParams = {}
  ) =>
    this.http.request<AccountsSignEthreumMessageData, any>({
      path: `/accounts/${accountName}/sign-message`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Suggests the gas price for a given account and chain ID.
   *
   * @tags Accounts
   * @name AccountsSuggestGasPrice
   * @request GET:/accounts/{accountName}/suggest-gas
   * @secure
   */
  accountsSuggestGasPrice = (
    { accountName, ...query }: AccountsSuggestGasPriceParams,
    params: RequestParams = {}
  ) =>
    this.http.request<AccountsSuggestGasPriceData, any>({
      path: `/accounts/${accountName}/suggest-gas`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Transfers Ethereum from one account to another.
   *
   * @tags Accounts
   * @name AccountsTransferEth
   * @request POST:/accounts/{accountName}/transfer-eth
   * @secure
   */
  accountsTransferEth = (
    accountName: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<AccountsTransferEthData, any>({
      path: `/accounts/${accountName}/transfer-eth`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
