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
  CreateSolanaAccountData,
  DeleteSolanaAccountData,
  ExportSolanaAccountData,
  GetSolanaAccountData,
  ListSolanaAccountsData,
  MultiSignSolanaTransactionData,
  SignSolanaTransactionData,
  SolanaInput,
  SolanaSignTransactionInput,
  SolanaTransactionInput,
  TransferSolanaTransactionData,
  TransferTokensSignSolanaTransactionData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Solana<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Solana
   * @name CreateSolanaAccount
   * @request POST:/solana
   * @secure
   */
  createSolanaAccount = (data: SolanaInput, params: RequestParams = {}) =>
    this.http.request<CreateSolanaAccountData, any>({
      path: `/solana`,
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
   * @tags Solana
   * @name DeleteSolanaAccount
   * @request POST:/solana/{accountName}/delete
   * @secure
   */
  deleteSolanaAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<DeleteSolanaAccountData, any>({
      path: `/solana/${accountName}/delete`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Solana
   * @name ExportSolanaAccount
   * @request POST:/solana/{accountName}/export
   * @secure
   */
  exportSolanaAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<ExportSolanaAccountData, any>({
      path: `/solana/${accountName}/export`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Solana
   * @name GetSolanaAccount
   * @request GET:/solana/{accountName}
   * @secure
   */
  getSolanaAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<GetSolanaAccountData, any>({
      path: `/solana/${accountName}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Solana
   * @name ListSolanaAccounts
   * @request GET:/solana
   * @secure
   */
  listSolanaAccounts = (params: RequestParams = {}) =>
    this.http.request<ListSolanaAccountsData, any>({
      path: `/solana`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Solana
   * @name MultiSignSolanaTransaction
   * @request POST:/solana/{accountName}/multi-sign-tx
   * @secure
   */
  multiSignSolanaTransaction = (
    accountName: string,
    data: SolanaSignTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<MultiSignSolanaTransactionData, any>({
      path: `/solana/${accountName}/multi-sign-tx`,
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
   * @tags Solana
   * @name SignSolanaTransaction
   * @request POST:/solana/{accountName}/sign-tx
   * @secure
   */
  signSolanaTransaction = (
    accountName: string,
    data: SolanaSignTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<SignSolanaTransactionData, any>({
      path: `/solana/${accountName}/sign-tx`,
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
   * @tags Solana
   * @name TransferSolanaTransaction
   * @request POST:/solana/{accountName}/transfer
   * @secure
   */
  transferSolanaTransaction = (
    accountName: string,
    data: SolanaTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<TransferSolanaTransactionData, any>({
      path: `/solana/${accountName}/transfer`,
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
   * @tags Solana
   * @name TransferTokensSignSolanaTransaction
   * @request POST:/solana/{accountName}/transfer-tokens
   * @secure
   */
  transferTokensSignSolanaTransaction = (
    accountName: string,
    data: SolanaTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<TransferTokensSignSolanaTransactionData, any>({
      path: `/solana/${accountName}/transfer-tokens`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
