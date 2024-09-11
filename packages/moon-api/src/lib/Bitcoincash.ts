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
  BitcoinCashInput,
  BitcoinCashTransactionInput,
  CreateBitcoinCashAccountData,
  GetBitcoinCashAccountData,
  ListBitcoinCashAccountsData,
  SignBitcoinCashTransactionData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Bitcoincash<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags bitcoincash
   * @name CreateBitcoinCashAccount
   * @request POST:/bitcoincash
   * @secure
   */
  createBitcoinCashAccount = (
    data: BitcoinCashInput,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateBitcoinCashAccountData, any>({
      path: `/bitcoincash`,
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
   * @tags bitcoincash
   * @name GetBitcoinCashAccount
   * @request GET:/bitcoincash/{accountName}
   * @secure
   */
  getBitcoinCashAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<GetBitcoinCashAccountData, any>({
      path: `/bitcoincash/${accountName}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags bitcoincash
   * @name ListBitcoinCashAccounts
   * @request GET:/bitcoincash
   * @secure
   */
  listBitcoinCashAccounts = (params: RequestParams = {}) =>
    this.http.request<ListBitcoinCashAccountsData, any>({
      path: `/bitcoincash`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags bitcoincash
   * @name SignBitcoinCashTransaction
   * @request POST:/bitcoincash/{accountName}/sign-tx
   * @secure
   */
  signBitcoinCashTransaction = (
    accountName: string,
    data: BitcoinCashTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<SignBitcoinCashTransactionData, any>({
      path: `/bitcoincash/${accountName}/sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
