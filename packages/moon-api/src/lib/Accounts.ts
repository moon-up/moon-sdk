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
  AccountControllerResponse,
  BroadcastInput,
  CreateAccountInput,
  DeployInput,
  InputBody,
  SignMessage,
  SignTypedData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Accounts<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Accounts
   * @name GetNonce
   * @request GET:/accounts/{accountName}/nonce
   * @secure
   */
  getNonce = (accountName: string, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/accounts/${accountName}/nonce`,
      method: 'GET',
      secure: true,
      format: 'json',
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
    accountName: string,
    query: {
      chainId: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AccountControllerResponse, any>({
      path: `/accounts/${accountName}/balance`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
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
    this.request<AccountControllerResponse, any>({
      path: `/accounts/${accountName}/transfer-eth`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
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
    this.request<AccountControllerResponse, any>({
      path: `/accounts/${accountName}/sign-message`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
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
    this.request<AccountControllerResponse, any>({
      path: `/accounts/${accountName}/sign-transaction`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
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
    this.request<AccountControllerResponse, any>({
      path: `/accounts/${accountName}/sign-typed-data`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
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
    this.request<AccountControllerResponse, any>({
      path: `/accounts`,
      method: 'GET',
      secure: true,
      format: 'json',
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
    this.request<AccountControllerResponse, any>({
      path: `/accounts`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
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
    this.request<AccountControllerResponse, any>({
      path: `/accounts/${accountName}`,
      method: 'GET',
      secure: true,
      format: 'json',
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
    this.request<AccountControllerResponse, any>({
      path: `/accounts/${accountName}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
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
    this.request<AccountControllerResponse, any>({
      path: `/accounts/${accountName}/deploy`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
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
    this.request<AccountControllerResponse, any>({
      path: `/accounts/${accountName}/broadcast-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
