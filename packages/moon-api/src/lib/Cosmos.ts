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
  CosmosCosmosCreateAccountData,
  CosmosCosmosCreateAccountPayload,
  CosmosCosmosDeleteAccountData,
  CosmosCosmosExportAccountData,
  CosmosCosmosGetAccountData,
  CosmosCosmosListAccountsData,
  CosmosCosmosSignIbcTransferTransactionData,
  CosmosCosmosSignMessageData,
  CosmosCosmosSignTransferTransactionData,
  CosmosIBCTransferInput,
  CosmosSignMessageInput,
  CosmosTransferInput,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Cosmos<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Creates a new Cosmos account.
   *
   * @tags Cosmos
   * @name CosmosCosmosCreateAccount
   * @request POST:/cosmos
   * @secure
   */
  cosmosCosmosCreateAccount = (
    data: CosmosCosmosCreateAccountPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<CosmosCosmosCreateAccountData, any>({
      path: `/cosmos`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes an account in the Cosmos SDK.
   *
   * @tags Cosmos
   * @name CosmosCosmosDeleteAccount
   * @request DELETE:/cosmos/{accountName}
   * @secure
   */
  cosmosCosmosDeleteAccount = (
    accountName: string,
    params: RequestParams = {}
  ) =>
    this.http.request<CosmosCosmosDeleteAccountData, any>({
      path: `/cosmos/${accountName}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Exports a Cosmos account.
   *
   * @tags Cosmos
   * @name CosmosCosmosExportAccount
   * @request POST:/cosmos/{accountName}/export
   * @secure
   */
  cosmosCosmosExportAccount = (
    accountName: string,
    params: RequestParams = {}
  ) =>
    this.http.request<CosmosCosmosExportAccountData, any>({
      path: `/cosmos/${accountName}/export`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves account information from the Cosmos SDK.
   *
   * @tags Cosmos
   * @name CosmosCosmosGetAccount
   * @request GET:/cosmos/{accountName}
   * @secure
   */
  cosmosCosmosGetAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<CosmosCosmosGetAccountData, any>({
      path: `/cosmos/${accountName}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Lists Cosmos accounts associated with the provided authorization token.
   *
   * @tags Cosmos
   * @name CosmosCosmosListAccounts
   * @request GET:/cosmos
   * @secure
   */
  cosmosCosmosListAccounts = (params: RequestParams = {}) =>
    this.http.request<CosmosCosmosListAccountsData, any>({
      path: `/cosmos`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Signs an IBC transfer transaction for a given account.
   *
   * @tags Cosmos
   * @name CosmosCosmosSignIbcTransferTransaction
   * @request POST:/cosmos/{accountName}/sign-ibc-transfer
   * @secure
   */
  cosmosCosmosSignIbcTransferTransaction = (
    accountName: string,
    data: CosmosIBCTransferInput,
    params: RequestParams = {}
  ) =>
    this.http.request<CosmosCosmosSignIbcTransferTransactionData, any>({
      path: `/cosmos/${accountName}/sign-ibc-transfer`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Signs a message using the Cosmos SDK.
   *
   * @tags Cosmos
   * @name CosmosCosmosSignMessage
   * @request POST:/cosmos/{accountName}/sign-message
   * @secure
   */
  cosmosCosmosSignMessage = (
    accountName: string,
    data: CosmosSignMessageInput,
    params: RequestParams = {}
  ) =>
    this.http.request<CosmosCosmosSignMessageData, any>({
      path: `/cosmos/${accountName}/sign-message`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Signs a transfer transaction using the provided authorization token and account name.
   *
   * @tags Cosmos
   * @name CosmosCosmosSignTransferTransaction
   * @request POST:/cosmos/{accountName}/sign-transfer
   * @secure
   */
  cosmosCosmosSignTransferTransaction = (
    accountName: string,
    data: CosmosTransferInput,
    params: RequestParams = {}
  ) =>
    this.http.request<CosmosCosmosSignTransferTransactionData, any>({
      path: `/cosmos/${accountName}/sign-transfer`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
