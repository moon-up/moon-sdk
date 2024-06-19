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
  AaveInput,
  BorrowData,
  LendData,
  RepayData,
  UserReserveDataData,
} from './data-contracts';

export namespace Aave {
  /**
   * No description
   * @tags Aave
   * @name Borrow
   * @request POST:/aave/{name}/borrow
   * @secure
   */
  export namespace Borrow {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AaveInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = BorrowData;
  }

  /**
   * No description
   * @tags Aave
   * @name Lend
   * @request POST:/aave/{name}/lend
   * @secure
   */
  export namespace Lend {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AaveInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = LendData;
  }

  /**
   * No description
   * @tags Aave
   * @name Repay
   * @request POST:/aave/{name}/repay
   * @secure
   */
  export namespace Repay {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AaveInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = RepayData;
  }

  /**
   * No description
   * @tags Aave
   * @name UserReserveData
   * @request POST:/aave/{name}/user-reserve-data
   * @secure
   */
  export namespace UserReserveData {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AaveInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = UserReserveDataData;
  }
}
