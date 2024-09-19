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
  BitcoinCashInput,
  BitcoinCashTransactionInput,
  CreateBitcoinCashAccountData,
  DeleteBitcoinCashAccountData,
  ExportBitcoinCashAccountData,
  GetBitcoinCashAccountData,
  ListBitcoinCashAccountsData,
  SignBitcoinCashTransactionData,
  SignBitcoinCashTransactionWithMemoData,
} from './data-contracts';

export namespace Bitcoincash {
  /**
   * No description
   * @tags bitcoincash
   * @name CreateBitcoinCashAccount
   * @request POST:/bitcoincash
   * @secure
   */
  export namespace CreateBitcoinCashAccount {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BitcoinCashInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateBitcoinCashAccountData;
  }

  /**
   * No description
   * @tags bitcoincash
   * @name DeleteBitcoinCashAccount
   * @request POST:/bitcoincash/{accountName}/delete
   * @secure
   */
  export namespace DeleteBitcoinCashAccount {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DeleteBitcoinCashAccountData;
  }

  /**
   * No description
   * @tags bitcoincash
   * @name ExportBitcoinCashAccount
   * @request POST:/bitcoincash/{accountName}/export
   * @secure
   */
  export namespace ExportBitcoinCashAccount {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ExportBitcoinCashAccountData;
  }

  /**
   * No description
   * @tags bitcoincash
   * @name GetBitcoinCashAccount
   * @request GET:/bitcoincash/{accountName}
   * @secure
   */
  export namespace GetBitcoinCashAccount {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetBitcoinCashAccountData;
  }

  /**
   * No description
   * @tags bitcoincash
   * @name ListBitcoinCashAccounts
   * @request GET:/bitcoincash
   * @secure
   */
  export namespace ListBitcoinCashAccounts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ListBitcoinCashAccountsData;
  }

  /**
   * No description
   * @tags bitcoincash
   * @name SignBitcoinCashTransaction
   * @request POST:/bitcoincash/{accountName}/sign-tx
   * @secure
   */
  export namespace SignBitcoinCashTransaction {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = BitcoinCashTransactionInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SignBitcoinCashTransactionData;
  }

  /**
   * No description
   * @tags bitcoincash
   * @name SignBitcoinCashTransactionWithMemo
   * @request POST:/bitcoincash/{accountName}/memo-sign-tx
   * @secure
   */
  export namespace SignBitcoinCashTransactionWithMemo {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = BitcoinCashTransactionInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SignBitcoinCashTransactionWithMemoData;
  }
}
