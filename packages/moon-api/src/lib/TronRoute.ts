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
  CreateTronAccountData,
  GetTronAccountData,
  ListTronAccountsData,
  SignTronTransactionData,
  TronInput,
  TronTransactionInput,
} from './data-contracts';

export namespace Tron {
  /**
   * No description
   * @tags Tron
   * @name CreateTronAccount
   * @request POST:/tron
   * @secure
   */
  export namespace CreateTronAccount {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TronInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateTronAccountData;
  }

  /**
   * No description
   * @tags Tron
   * @name GetTronAccount
   * @request GET:/tron/{accountName}
   * @secure
   */
  export namespace GetTronAccount {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetTronAccountData;
  }

  /**
   * No description
   * @tags Tron
   * @name ListTronAccounts
   * @request GET:/tron
   * @secure
   */
  export namespace ListTronAccounts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ListTronAccountsData;
  }

  /**
   * No description
   * @tags Tron
   * @name SignTronTransaction
   * @request POST:/tron/{accountName}/sign-tx
   * @secure
   */
  export namespace SignTronTransaction {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = TronTransactionInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SignTronTransactionData;
  }
}
