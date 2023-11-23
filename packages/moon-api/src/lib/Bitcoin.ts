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
  BitcoinInput,
  BitcoinTransactionInput,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Bitcoin<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Bitcoin
   * @name ListBitcoinAccounts
   * @request GET:/bitcoin
   * @secure
   */
  listBitcoinAccounts = (params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/bitcoin`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Bitcoin
   * @name CreateBitcoinAccount
   * @request POST:/bitcoin
   * @secure
   */
  createBitcoinAccount = (data: BitcoinInput, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/bitcoin`,
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
   * @tags Bitcoin
   * @name GetBitcoinAccount
   * @request GET:/bitcoin/{accountName}
   * @secure
   */
  getBitcoinAccount = (accountName: string, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/bitcoin/${accountName}`,
      method: 'GET',
      secure: true,
      format: 'json',
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
    this.request<AccountControllerResponse, any>({
      path: `/bitcoin/${accountName}/sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
