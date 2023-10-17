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
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Accounts<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Accounts
   * @name GetNonce
   * @request GET:/accounts/{accountName}/nonce
   */
  getNonce = (accountName: string, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/accounts/${accountName}/nonce`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name GetBalance
   * @request GET:/accounts/{accountName}/balance
   */
  getBalance = (
    accountName: string,
    query: {
      chainId: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<AccountControllerResponse, any>({
      path: `/accounts/${accountName}/balance`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name TransferEth
   * @request POST:/accounts/{accountName}/transfer-eth
   */
  transferEth = (accountName: string, data: InputBody, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/accounts/${accountName}/transfer-eth`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name SignMessage
   * @request POST:/accounts/{accountName}/sign-message
   */
  signMessage = (accountName: string, data: SignMessage, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/accounts/${accountName}/sign-message`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name SignTransaction
   * @request POST:/accounts/{accountName}/sign-transaction
   */
  signTransaction = (accountName: string, data: InputBody, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/accounts/${accountName}/sign-transaction`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name ListAccounts
   * @request GET:/accounts
   */
  listAccounts = (params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/accounts`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name CreateAccount
   * @request POST:/accounts
   */
  createAccount = (data: CreateAccountInput, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/accounts`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name GetAccount
   * @request GET:/accounts/{accountName}
   */
  getAccount = (accountName: string, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/accounts/${accountName}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name DeleteAccount
   * @request DELETE:/accounts/{accountName}
   */
  deleteAccount = (accountName: string, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/accounts/${accountName}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name DeployContract
   * @request POST:/accounts/{accountName}/deploy
   */
  deployContract = (accountName: string, data: DeployInput, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/accounts/${accountName}/deploy`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Accounts
   * @name BroadcastTx
   * @request POST:/accounts/{accountName}/broadcast-tx
   */
  broadcastTx = (accountName: string, data: BroadcastInput, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/accounts/${accountName}/broadcast-tx`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
