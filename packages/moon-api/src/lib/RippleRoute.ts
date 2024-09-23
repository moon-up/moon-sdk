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
  CreateRippleAccountData,
  DeleteRippleAccountData,
  ExportRippleAccountData,
  GetRippleAccountData,
  ListRippleAccountsData,
  RippleInput,
  RippleTransactionInput,
  SignRippleTransactionData,
} from './data-contracts';

export namespace Ripple {
  /**
   * No description
   * @tags ripple
   * @name CreateRippleAccount
   * @request POST:/ripple
   * @secure
   */
  export namespace CreateRippleAccount {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RippleInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateRippleAccountData;
  }

  /**
   * No description
   * @tags ripple
   * @name DeleteRippleAccount
   * @request POST:/ripple/{accountName}/delete
   * @secure
   */
  export namespace DeleteRippleAccount {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DeleteRippleAccountData;
  }

  /**
   * No description
   * @tags ripple
   * @name ExportRippleAccount
   * @request POST:/ripple/{accountName}/export
   * @secure
   */
  export namespace ExportRippleAccount {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ExportRippleAccountData;
  }

  /**
   * No description
   * @tags ripple
   * @name GetRippleAccount
   * @request GET:/ripple/{accountName}
   * @secure
   */
  export namespace GetRippleAccount {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetRippleAccountData;
  }

  /**
   * No description
   * @tags ripple
   * @name ListRippleAccounts
   * @request GET:/ripple
   * @secure
   */
  export namespace ListRippleAccounts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ListRippleAccountsData;
  }

  /**
   * No description
   * @tags ripple
   * @name SignRippleTransaction
   * @request POST:/ripple/{accountName}/sign-tx
   * @secure
   */
  export namespace SignRippleTransaction {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RippleTransactionInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SignRippleTransactionData;
  }
}
