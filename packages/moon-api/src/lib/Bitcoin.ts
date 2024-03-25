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
  BitcoinInput,
  BitcoinTransactionInput,
  CreateBitcoinAccountData,
  GetBitcoinAccountData,
  ListBitcoinAccountsData,
  SignBitcoinTransactionData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Bitcoin<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Bitcoin
   * @name CreateBitcoinAccount
   * @request POST:/bitcoin
   * @secure
   */
  createBitcoinAccount = (data: BitcoinInput, params: RequestParams = {}) =>
    this.http.request<CreateBitcoinAccountData, any>({
      path: `/bitcoin`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Bitcoin
   * @name GetBitcoinAccount
   * @request GET:/bitcoin/{accountName}
   * @secure
   */
  getBitcoinAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<GetBitcoinAccountData, any>({
      path: `/bitcoin/${accountName}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Bitcoin
   * @name ListBitcoinAccounts
   * @request GET:/bitcoin
   * @secure
   */
  listBitcoinAccounts = (params: RequestParams = {}) =>
    this.http.request<ListBitcoinAccountsData, any>({
      path: `/bitcoin`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Bitcoin
   * @name SignBitcoinTransaction
   * @request POST:/bitcoin/{accountName}/sign-tx
   * @secure
   */
  signBitcoinTransaction = (
    accountName: string,
    data: BitcoinTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<SignBitcoinTransactionData, any>({
      path: `/bitcoin/${accountName}/sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
