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
  CreateLitecoinAccountData,
  GetLitecoinAccountData,
  ListLitecoinAccountsData,
  LitecoinInput,
  LitecoinTransactionInput,
  SignLitecoinTransactionData,
} from './data-contracts';

export namespace Litecoin {
  /**
   * No description
   * @tags Litecoin
   * @name CreateLitecoinAccount
   * @request POST:/litecoin
   * @secure
   */
  export namespace CreateLitecoinAccount {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LitecoinInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateLitecoinAccountData;
  }

  /**
   * No description
   * @tags Litecoin
   * @name GetLitecoinAccount
   * @request GET:/litecoin/{accountName}
   * @secure
   */
  export namespace GetLitecoinAccount {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetLitecoinAccountData;
  }

  /**
   * No description
   * @tags Litecoin
   * @name ListLitecoinAccounts
   * @request GET:/litecoin
   * @secure
   */
  export namespace ListLitecoinAccounts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ListLitecoinAccountsData;
  }

  /**
   * No description
   * @tags Litecoin
   * @name SignLitecoinTransaction
   * @request POST:/litecoin/{accountName}/sign-tx
   * @secure
   */
  export namespace SignLitecoinTransaction {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LitecoinTransactionInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SignLitecoinTransactionData;
  }
}
