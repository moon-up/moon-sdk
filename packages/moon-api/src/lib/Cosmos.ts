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
  CreateAccountBody,
  CreateAccountResult,
  DeleteAccountResult,
  IBCTransferTransactionInput,
  ListAccountsResult,
  MessageInput,
  ReadAccountData,
  SignIbcTransferTransactionData,
  SignMessageResult,
  SignTransferTransactionData,
  TransferTransactionInput,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Cosmos<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Cosmos
   * @name CreateAccount
   * @request POST:/cosmos/accounts
   * @secure
   */
  createAccount = (data: CreateAccountBody, params: RequestParams = {}) =>
    this.http.request<CreateAccountResult, any>({
      path: `/cosmos/accounts`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Cosmos
   * @name DeleteAccount
   * @request DELETE:/cosmos/accounts/{accountName}
   * @secure
   */
  deleteAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<DeleteAccountResult, any>({
      path: `/cosmos/accounts/${accountName}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Cosmos
   * @name ListAccounts
   * @request GET:/cosmos/accounts
   * @secure
   */
  listAccounts = (params: RequestParams = {}) =>
    this.http.request<ListAccountsResult, any>({
      path: `/cosmos/accounts`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Cosmos
   * @name ReadAccount
   * @request GET:/cosmos/accounts/{accountName}
   * @secure
   */
  readAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<ReadAccountData, any>({
      path: `/cosmos/accounts/${accountName}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Cosmos
   * @name SignIbcTransferTransaction
   * @request POST:/cosmos/accounts/{accountName}/sign-ibc-transfer
   * @secure
   */
  signIbcTransferTransaction = (
    accountName: string,
    data: IBCTransferTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<SignIbcTransferTransactionData, any>({
      path: `/cosmos/accounts/${accountName}/sign-ibc-transfer`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Cosmos
   * @name SignMessage
   * @request POST:/cosmos/accounts/{accountName}/sign-message
   * @secure
   */
  signMessage = (
    accountName: string,
    data: MessageInput,
    params: RequestParams = {}
  ) =>
    this.http.request<SignMessageResult, any>({
      path: `/cosmos/accounts/${accountName}/sign-message`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Cosmos
   * @name SignTransferTransaction
   * @request POST:/cosmos/accounts/{accountName}/sign-transfer
   * @secure
   */
  signTransferTransaction = (
    accountName: string,
    data: TransferTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<SignTransferTransactionData, any>({
      path: `/cosmos/accounts/${accountName}/sign-transfer`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
