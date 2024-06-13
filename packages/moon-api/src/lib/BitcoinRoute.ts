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
  BitcoinInput,
  BitcoinTransactionInput,
  CreateBitcoinAccountData,
  GetBitcoinAccountData,
  ListBitcoinAccountsData,
  SignBitcoinTransactionData,
} from './data-contracts';

export namespace Bitcoin {
  /**
   * No description
   * @tags Bitcoin
   * @name CreateBitcoinAccount
   * @request POST:/bitcoin
   * @secure
   */
  export namespace CreateBitcoinAccount {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BitcoinInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateBitcoinAccountData;
  }

  /**
   * No description
   * @tags Bitcoin
   * @name GetBitcoinAccount
   * @request GET:/bitcoin/{accountName}
   * @secure
   */
  export namespace GetBitcoinAccount {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetBitcoinAccountData;
  }

  /**
   * No description
   * @tags Bitcoin
   * @name ListBitcoinAccounts
   * @request GET:/bitcoin
   * @secure
   */
  export namespace ListBitcoinAccounts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ListBitcoinAccountsData;
  }

  /**
   * No description
   * @tags Bitcoin
   * @name SignBitcoinTransaction
   * @request POST:/bitcoin/{accountName}/sign-tx
   * @secure
   */
  export namespace SignBitcoinTransaction {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = BitcoinTransactionInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SignBitcoinTransactionData;
  }
}
