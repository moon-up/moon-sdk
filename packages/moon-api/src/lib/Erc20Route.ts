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
  AllowanceErc20Data,
  ApproveErc20Data,
  BalanceOfErc20Data,
  DecimalsErc20Data,
  InputBody,
  NameErc20Data,
  SymbolErc20Data,
  TotalSupplyErc20Data,
  TransferErc20Data,
  TransferFromErc20Data,
} from './data-contracts';

export namespace Erc20 {
  /**
   * No description
   * @tags Erc20
   * @name AllowanceErc20
   * @request POST:/erc20/{name}/allowance
   * @secure
   */
  export namespace AllowanceErc20 {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = AllowanceErc20Data;
  }

  /**
   * No description
   * @tags Erc20
   * @name ApproveErc20
   * @request POST:/erc20/{name}/approve
   * @secure
   */
  export namespace ApproveErc20 {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ApproveErc20Data;
  }

  /**
   * No description
   * @tags Erc20
   * @name BalanceOfErc20
   * @request POST:/erc20/{name}/balance-of
   * @secure
   */
  export namespace BalanceOfErc20 {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = BalanceOfErc20Data;
  }

  /**
   * No description
   * @tags Erc20
   * @name DecimalsErc20
   * @request POST:/erc20/{name}/decimals
   * @secure
   */
  export namespace DecimalsErc20 {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DecimalsErc20Data;
  }

  /**
   * No description
   * @tags Erc20
   * @name NameErc20
   * @request POST:/erc20/{name}/name
   * @secure
   */
  export namespace NameErc20 {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = NameErc20Data;
  }

  /**
   * No description
   * @tags Erc20
   * @name SymbolErc20
   * @request POST:/erc20/{name}/symbol
   * @secure
   */
  export namespace SymbolErc20 {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SymbolErc20Data;
  }

  /**
   * No description
   * @tags Erc20
   * @name TotalSupplyErc20
   * @request POST:/erc20/{name}/total-supply
   * @secure
   */
  export namespace TotalSupplyErc20 {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = TotalSupplyErc20Data;
  }

  /**
   * No description
   * @tags Erc20
   * @name TransferErc20
   * @request POST:/erc20/{name}/transfer
   * @secure
   */
  export namespace TransferErc20 {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = TransferErc20Data;
  }

  /**
   * No description
   * @tags Erc20
   * @name TransferFromErc20
   * @request POST:/erc20/{name}/transfer-from
   * @secure
   */
  export namespace TransferFromErc20 {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = TransferFromErc20Data;
  }
}
