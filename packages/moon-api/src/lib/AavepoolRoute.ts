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
  AavePoolInputBody,
  BorrowData,
  GetReserveDataData,
  GetUserAccountDataData,
  LiquidationCallData,
  RepayData,
  SetUserUseReserveAsCollateralData,
  SupplyData,
  WithdrawData,
} from './data-contracts';

export namespace Aavepool {
  /**
   * No description
   * @tags AAVEv3 Pool
   * @name Borrow
   * @request POST:/aavepool/{address}/borrow
   * @secure
   */
  export namespace Borrow {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AavePoolInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = BorrowData;
  }

  /**
   * No description
   * @tags AAVEv3 Pool
   * @name GetReserveData
   * @request GET:/aavepool/{account}/getReserveData
   * @secure
   */
  export namespace GetReserveData {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      asset: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetReserveDataData;
  }

  /**
   * No description
   * @tags AAVEv3 Pool
   * @name GetUserAccountData
   * @request GET:/aavepool/{account}/getUserAccountData
   * @secure
   */
  export namespace GetUserAccountData {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
      user: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetUserAccountDataData;
  }

  /**
   * No description
   * @tags AAVEv3 Pool
   * @name LiquidationCall
   * @request POST:/aavepool/{address}/liquidationCall
   * @secure
   */
  export namespace LiquidationCall {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AavePoolInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = LiquidationCallData;
  }

  /**
   * No description
   * @tags AAVEv3 Pool
   * @name Repay
   * @request POST:/aavepool/{address}/repay
   * @secure
   */
  export namespace Repay {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AavePoolInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = RepayData;
  }

  /**
   * No description
   * @tags AAVEv3 Pool
   * @name SetUserUseReserveAsCollateral
   * @request POST:/aavepool/{address}/setUserUseReserveAsCollateral
   * @secure
   */
  export namespace SetUserUseReserveAsCollateral {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AavePoolInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SetUserUseReserveAsCollateralData;
  }

  /**
   * No description
   * @tags AAVEv3 Pool
   * @name Supply
   * @request POST:/aavepool/{address}/supply
   * @secure
   */
  export namespace Supply {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AavePoolInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SupplyData;
  }

  /**
   * No description
   * @tags AAVEv3 Pool
   * @name Withdraw
   * @request POST:/aavepool/{address}/withdraw
   * @secure
   */
  export namespace Withdraw {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AavePoolInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = WithdrawData;
  }
}
