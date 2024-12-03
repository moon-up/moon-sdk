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
  DogeCoinInput,
  DogeCoinListAccountsData,
  DogeCoinTransactionInput,
  DogecoinDogeCoinCreateNewAccountData,
  DogecoinDogeCoinDeleteAccountData,
  DogecoinDogeCoinExportAccountDetailsData,
  DogecoinDogeCoinGetAccountDetailsData,
  DogecoinDogeCoinSignTransactionData,
  DogecoinDogeCoinSignTransactionWithMemoData,
} from './data-contracts';

export namespace Dogecoin {
  /**
   * @description Creates a new Dogecoin account.
   * @tags DogeCoin
   * @name DogecoinDogeCoinCreateNewAccount
   * @request POST:/dogecoin
   * @secure
   */
  export namespace DogecoinDogeCoinCreateNewAccount {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = DogeCoinInput;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = DogecoinDogeCoinCreateNewAccountData;
  }

  /**
   * @description Deletes a Dogecoin account.
   * @tags DogeCoin
   * @name DogecoinDogeCoinDeleteAccount
   * @request POST:/dogecoin/{accountName}/delete
   * @secure
   */
  export namespace DogecoinDogeCoinDeleteAccount {
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
    export type ResponseBody = DogecoinDogeCoinDeleteAccountData;
  }

  /**
   * @description Exports the account details for a given account name.
   * @tags DogeCoin
   * @name DogecoinDogeCoinExportAccountDetails
   * @request POST:/dogecoin/{accountName}/export
   * @secure
   */
  export namespace DogecoinDogeCoinExportAccountDetails {
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
    export type ResponseBody = DogecoinDogeCoinExportAccountDetailsData;
  }

  /**
   * @description Retrieves the account information for a given account name.
   * @tags DogeCoin
   * @name DogecoinDogeCoinGetAccountDetails
   * @request GET:/dogecoin/{accountName}
   * @secure
   */
  export namespace DogecoinDogeCoinGetAccountDetails {
    export type RequestParams = {
      /** - The name of the account to retrieve. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = DogecoinDogeCoinGetAccountDetailsData;
  }

  /**
   * @description Signs a Dogecoin transaction.
   * @tags DogeCoin
   * @name DogecoinDogeCoinSignTransaction
   * @request POST:/dogecoin/{accountName}/sign-tx
   * @secure
   */
  export namespace DogecoinDogeCoinSignTransaction {
    export type RequestParams = {
      /** - The name of the account for which the transaction is being signed. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = DogeCoinTransactionInput;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = DogecoinDogeCoinSignTransactionData;
  }

  /**
   * @description Signs a Dogecoin transaction with a memo.
   * @tags DogeCoin
   * @name DogecoinDogeCoinSignTransactionWithMemo
   * @request POST:/dogecoin/{accountName}/memo-sign-tx
   * @secure
   */
  export namespace DogecoinDogeCoinSignTransactionWithMemo {
    export type RequestParams = {
      /** - The name of the account to sign the transaction for. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = DogeCoinTransactionInput;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = DogecoinDogeCoinSignTransactionWithMemoData;
  }

  /**
   * @description Lists the accounts associated with the provided Dogecoin token.
   * @tags DogeCoin
   * @name DogeCoinListAccounts
   * @request GET:/dogecoin
   * @secure
   */
  export namespace DogeCoinListAccounts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token for accessing Dogecoin accounts. */
      Authorization: string;
    };
    export type ResponseBody = DogeCoinListAccountsData;
  }
}
