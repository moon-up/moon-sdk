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
  TronCreateTronAccountData,
  TronDeleteTronAccountData,
  TronExportTronAccountData,
  TronGetTronAccountData,
  TronInput,
  TronListTronAccountsData,
  TronSignTronTransactionData,
  TronTransactionInput,
} from './data-contracts';

export namespace Tron {
  /**
   * @description Creates a new account using the provided TronInput data.
   * @tags Tron
   * @name TronCreateTronAccount
   * @request POST:/tron
   * @secure
   */
  export namespace TronCreateTronAccount {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TronInput;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = TronCreateTronAccountData;
  }

  /**
   * @description Deletes an account using the provided account name and authorization token.
   * @tags Tron
   * @name TronDeleteTronAccount
   * @request POST:/tron/{accountName}/delete
   * @secure
   */
  export namespace TronDeleteTronAccount {
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
    export type ResponseBody = TronDeleteTronAccountData;
  }

  /**
   * @description Exports the account details for the specified account name.
   * @tags Tron
   * @name TronExportTronAccount
   * @request POST:/tron/{accountName}/export
   * @secure
   */
  export namespace TronExportTronAccount {
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
    export type ResponseBody = TronExportTronAccountData;
  }

  /**
   * @description Retrieves account information from the Tron blockchain.
   * @tags Tron
   * @name TronGetTronAccount
   * @request GET:/tron/{accountName}
   * @secure
   */
  export namespace TronGetTronAccount {
    export type RequestParams = {
      /** - The name of the account to retrieve information for. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = TronGetTronAccountData;
  }

  /**
   * @description Lists accounts using the provided authorization token.
   * @tags Tron
   * @name TronListTronAccounts
   * @request GET:/tron
   * @secure
   */
  export namespace TronListTronAccounts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = TronListTronAccountsData;
  }

  /**
   * @description Signs a Tron transaction using the provided account name and transaction input.
   * @tags Tron
   * @name TronSignTronTransaction
   * @request POST:/tron/{accountName}/sign-tx
   * @secure
   */
  export namespace TronSignTronTransaction {
    export type RequestParams = {
      /** - The name of the account to sign the transaction for. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = TronTransactionInput;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = TronSignTronTransactionData;
  }
}
