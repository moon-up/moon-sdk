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
  SolanaInput,
  SolanaTransactionInput,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Solana<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Solana
   * @name ListSolanaAccounts
   * @request GET:/solana
   * @secure
   */
  listSolanaAccounts = (params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
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
   * @name CreateSolanaAccount
   * @request POST:/solana
   * @secure
   */
  createSolanaAccount = (data: SolanaInput, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
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
   * @name GetSolanaAccount
   * @request GET:/solana/{accountName}
   * @secure
   */
  getSolanaAccount = (accountName: string, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
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
   * @name SignSolanaTransaction
   * @request POST:/solana/{accountName}/sign-tx
   * @secure
   */
  signSolanaTransaction = (
    accountName: string,
    data: SolanaTransactionInput,
    params: RequestParams = {}
  ) =>
    this.request<AccountControllerResponse, any>({
      path: `/solana/${accountName}/sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
