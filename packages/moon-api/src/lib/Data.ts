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
  GetWalletBalanceData,
  GetWalletBalanceParams,
  GetWalletHistoryData,
  GetWalletHistoryParams,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Data<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Data
   * @name GetWalletBalance
   * @request GET:/data/{address}/balance
   * @secure
   */
  getWalletBalance = (
    { address, ...query }: GetWalletBalanceParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetWalletBalanceData, any>({
      path: `/data/${address}/balance`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Data
   * @name GetWalletHistory
   * @request GET:/data/{address}/history
   * @secure
   */
  getWalletHistory = (
    { address, ...query }: GetWalletHistoryParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetWalletHistoryData, any>({
      path: `/data/${address}/history`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
}
