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
  CosmosIBCTransferInput,
  CosmosSignMessageInput,
  CosmosTransferInput,
  CreateAccountInput,
  CreateAccountOutput,
  DeleteAccountOutput,
  ExportAccountOutput,
  GetAccountResult,
  ListAccountsOutput,
  SignIbcTransferTransactionData,
  SignMessageResult,
  SignTransferTransactionData,
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
   * @request POST:/cosmos
   * @secure
   */
  createAccount = (data: CreateAccountInput, params: RequestParams = {}) =>
    this.http.request<CreateAccountOutput, any>({
      path: `/cosmos`,
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
   * @tags Cosmos
   * @name DeleteAccount
   * @request DELETE:/cosmos/{accountName}
   * @secure
   */
  deleteAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<DeleteAccountOutput, any>({
      path: `/cosmos/${accountName}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Cosmos
   * @name ExportAccount
   * @request POST:/cosmos/{accountName}/export
   * @secure
   */
  exportAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<ExportAccountOutput, any>({
      path: `/cosmos/${accountName}/export`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Cosmos
   * @name GetAccount
   * @request GET:/cosmos/{accountName}
   * @secure
   */
  getAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<GetAccountResult, any>({
      path: `/cosmos/${accountName}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Cosmos
   * @name ListAccounts
   * @request GET:/cosmos
   * @secure
   */
  listAccounts = (params: RequestParams = {}) =>
    this.http.request<ListAccountsOutput, any>({
      path: `/cosmos`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Cosmos
   * @name SignIbcTransferTransaction
   * @request POST:/cosmos/{accountName}/sign-ibc-transfer
   * @secure
   */
  signIbcTransferTransaction = (
    accountName: string,
    data: CosmosIBCTransferInput,
    params: RequestParams = {}
  ) =>
    this.http.request<SignIbcTransferTransactionData, any>({
      path: `/cosmos/${accountName}/sign-ibc-transfer`,
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
   * @tags Cosmos
   * @name SignMessage
   * @request POST:/cosmos/{accountName}/sign-message
   * @secure
   */
  signMessage = (
    accountName: string,
    data: CosmosSignMessageInput,
    params: RequestParams = {}
  ) =>
    this.http.request<SignMessageResult, any>({
      path: `/cosmos/${accountName}/sign-message`,
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
   * @tags Cosmos
   * @name SignTransferTransaction
   * @request POST:/cosmos/{accountName}/sign-transfer
   * @secure
   */
  signTransferTransaction = (
    accountName: string,
    data: CosmosTransferInput,
    params: RequestParams = {}
  ) =>
    this.http.request<SignTransferTransactionData, any>({
      path: `/cosmos/${accountName}/sign-transfer`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
