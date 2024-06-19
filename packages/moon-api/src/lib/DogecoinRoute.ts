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
  CreateDogeCoinAccountData,
  DogeCoinInput,
  DogeCoinTransactionInput,
  GetDogeCoinAccountData,
  ListDogeCoinAccountsData,
  SignDogeCoinTransactionData,
} from './data-contracts';

export namespace Dogecoin {
  /**
   * No description
   * @tags DogeCoin
   * @name CreateDogeCoinAccount
   * @request POST:/dogecoin
   * @secure
   */
  export namespace CreateDogeCoinAccount {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = DogeCoinInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateDogeCoinAccountData;
  }

  /**
   * No description
   * @tags DogeCoin
   * @name GetDogeCoinAccount
   * @request GET:/dogecoin/{accountName}
   * @secure
   */
  export namespace GetDogeCoinAccount {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetDogeCoinAccountData;
  }

  /**
   * No description
   * @tags DogeCoin
   * @name ListDogeCoinAccounts
   * @request GET:/dogecoin
   * @secure
   */
  export namespace ListDogeCoinAccounts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ListDogeCoinAccountsData;
  }

  /**
   * No description
   * @tags DogeCoin
   * @name SignDogeCoinTransaction
   * @request POST:/dogecoin/{accountName}/sign-tx
   * @secure
   */
  export namespace SignDogeCoinTransaction {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = DogeCoinTransactionInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SignDogeCoinTransactionData;
  }
}
