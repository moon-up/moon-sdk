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

import { GetWalletBalanceData, GetWalletHistoryData } from './data-contracts';

export namespace Data {
  /**
   * No description
   * @tags Data
   * @name GetWalletBalance
   * @request GET:/data/{address}/balance
   * @secure
   */
  export namespace GetWalletBalance {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {
      chain: string;
      excludeNative?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetWalletBalanceData;
  }

  /**
   * No description
   * @tags Data
   * @name GetWalletHistory
   * @request GET:/data/{address}/history
   * @secure
   */
  export namespace GetWalletHistory {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {
      chain: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetWalletHistoryData;
  }
}
