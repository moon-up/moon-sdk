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
  ListLitecoinAccountsData,
  LitecoinCreateLitecoinAccountData,
  LitecoinDeleteLitecoinAccountData,
  LitecoinExportLitecoinAccountData,
  LitecoinGetLitecoinAccountData,
  LitecoinInput,
  LitecoinSignLitecoinTransactionData,
  LitecoinSignLitecoinTransactionWithMemoData,
  LitecoinTransactionInput,
} from './data-contracts';

export namespace Litecoin {
  /**
   * @description Lists the accounts associated with the provided authorization token.
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
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = ListLitecoinAccountsData;
  }

  /**
   * @description Creates a new Litecoin account.
   * @tags Litecoin
   * @name LitecoinCreateLitecoinAccount
   * @request POST:/litecoin
   * @secure
   */
  export namespace LitecoinCreateLitecoinAccount {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LitecoinInput;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = LitecoinCreateLitecoinAccountData;
  }

  /**
   * @description Deletes a Litecoin account.
   * @tags Litecoin
   * @name LitecoinDeleteLitecoinAccount
   * @request POST:/litecoin/{accountName}/delete
   * @secure
   */
  export namespace LitecoinDeleteLitecoinAccount {
    export type RequestParams = {
      /** - The name of the account to be deleted. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = LitecoinDeleteLitecoinAccountData;
  }

  /**
   * @description Exports the account information for a given account name.
   * @tags Litecoin
   * @name LitecoinExportLitecoinAccount
   * @request POST:/litecoin/{accountName}/export
   * @secure
   */
  export namespace LitecoinExportLitecoinAccount {
    export type RequestParams = {
      /** - The name of the account to be exported. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = LitecoinExportLitecoinAccountData;
  }

  /**
   * @description Retrieves account information for a specified account name.
   * @tags Litecoin
   * @name LitecoinGetLitecoinAccount
   * @request GET:/litecoin/{accountName}
   * @secure
   */
  export namespace LitecoinGetLitecoinAccount {
    export type RequestParams = {
      /** - The name of the account to retrieve information for. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token provided in the request header. */
      Authorization: string;
    };
    export type ResponseBody = LitecoinGetLitecoinAccountData;
  }

  /**
   * @description Signs a Litecoin transaction.
   * @tags Litecoin
   * @name LitecoinSignLitecoinTransaction
   * @request POST:/litecoin/{accountName}/sign-tx
   * @secure
   */
  export namespace LitecoinSignLitecoinTransaction {
    export type RequestParams = {
      /** - The name of the account to sign the transaction for. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LitecoinTransactionInput;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = LitecoinSignLitecoinTransactionData;
  }

  /**
   * @description Signs a Litecoin transaction with a memo.
   * @tags Litecoin
   * @name LitecoinSignLitecoinTransactionWithMemo
   * @request POST:/litecoin/{accountName}/memo-sign-tx
   * @secure
   */
  export namespace LitecoinSignLitecoinTransactionWithMemo {
    export type RequestParams = {
      /** - The account name from the request path. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LitecoinTransactionInput;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = LitecoinSignLitecoinTransactionWithMemoData;
  }
}
