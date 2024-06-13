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
  BroadcastInput,
  BroadcastTxData,
  CreateAccountData,
  CreateAccountInput,
  DeleteAccountData,
  DeployContractData,
  DeployInput,
  EncodeDataData,
  EstimateGasData,
  GetAccountData,
  GetBalanceData,
  GetBalanceParams,
  GetNonceData,
  InputBody,
  ListAccountsData,
  SignMessage,
  SignMessageData,
  SignTransactionData,
  SignTypedData,
  SignTypedDataData,
  SuggestGasPriceData,
  SuggestGasPriceParams,
  TransferEthData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Accounts<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Accounts
   * @name BroadcastTx
   * @request POST:/accounts/{accountName}/broadcast-tx
   * @secure
   */
  broadcastTx = (
    accountName: string,
    data: BroadcastInput,
    params: RequestParams = {}
  ) =>
    this.http.request<BroadcastTxData, any>({
      path: `/accounts/${accountName}/broadcast-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name CreateAccount
   * @request POST:/accounts
   * @secure
   */
  createAccount = (data: CreateAccountInput, params: RequestParams = {}) =>
    this.http.request<CreateAccountData, any>({
      path: `/accounts`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name DeleteAccount
   * @request DELETE:/accounts/{accountName}
   * @secure
   */
  deleteAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<DeleteAccountData, any>({
      path: `/accounts/${accountName}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name DeployContract
   * @request POST:/accounts/{accountName}/deploy
   * @secure
   */
  deployContract = (
    accountName: string,
    data: DeployInput,
    params: RequestParams = {}
  ) =>
    this.http.request<DeployContractData, any>({
      path: `/accounts/${accountName}/deploy`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name EncodeData
   * @request POST:/accounts/encode-data
   * @secure
   */
  encodeData = (data: AbiEncodeInput, params: RequestParams = {}) =>
    this.http.request<EncodeDataData, any>({
      path: `/accounts/encode-data`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name EstimateGas
   * @request POST:/accounts/{accountName}/estimate
   * @secure
   */
  estimateGas = (
    accountName: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<EstimateGasData, any>({
      path: `/accounts/${accountName}/estimate`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name GetAccount
   * @request GET:/accounts/{accountName}
   * @secure
   */
  getAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<GetAccountData, any>({
      path: `/accounts/${accountName}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name GetBalance
   * @request GET:/accounts/{accountName}/balance
   * @secure
   */
  getBalance = (
    { accountName, ...query }: GetBalanceParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetBalanceData, any>({
      path: `/accounts/${accountName}/balance`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name GetNonce
   * @request GET:/accounts/{accountName}/nonce
   * @secure
   */
  getNonce = (accountName: string, params: RequestParams = {}) =>
    this.http.request<GetNonceData, any>({
      path: `/accounts/${accountName}/nonce`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name ListAccounts
   * @request GET:/accounts
   * @secure
   */
  listAccounts = (params: RequestParams = {}) =>
    this.http.request<ListAccountsData, any>({
      path: `/accounts`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name SignMessage
   * @request POST:/accounts/{accountName}/sign-message
   * @secure
   */
  signMessage = (
    accountName: string,
    data: SignMessage,
    params: RequestParams = {}
  ) =>
    this.http.request<SignMessageData, any>({
      path: `/accounts/${accountName}/sign-message`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name SignTransaction
   * @request POST:/accounts/{accountName}/sign-transaction
   * @secure
   */
  signTransaction = (
    accountName: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SignTransactionData, any>({
      path: `/accounts/${accountName}/sign-transaction`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name SignTypedData
   * @request POST:/accounts/{accountName}/sign-typed-data
   * @secure
   */
  signTypedData = (
    accountName: string,
    data: SignTypedData,
    params: RequestParams = {}
  ) =>
    this.http.request<SignTypedDataData, any>({
      path: `/accounts/${accountName}/sign-typed-data`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name SuggestGasPrice
   * @request GET:/accounts/{accountName}/suggest-gas
   * @secure
   */
  suggestGasPrice = (
    { accountName, ...query }: SuggestGasPriceParams,
    params: RequestParams = {}
  ) =>
    this.http.request<SuggestGasPriceData, any>({
      path: `/accounts/${accountName}/suggest-gas`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name TransferEth
   * @request POST:/accounts/{accountName}/transfer-eth
   * @secure
   */
  transferEth = (
    accountName: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<TransferEthData, any>({
      path: `/accounts/${accountName}/transfer-eth`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
