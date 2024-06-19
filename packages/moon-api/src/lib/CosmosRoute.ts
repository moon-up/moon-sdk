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
  CosmosInput,
  CosmosTransactionInput,
  CreateCosmosAccountData,
  GetCosmosAccountData,
  ListCosmosAccountsData,
  SignCosmosTransactionData,
} from './data-contracts';

export namespace Cosmos {
  /**
   * No description
   * @tags Cosmos
   * @name CreateCosmosAccount
   * @request POST:/cosmos
   * @secure
   */
  export namespace CreateCosmosAccount {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CosmosInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateCosmosAccountData;
  }

  /**
   * No description
   * @tags Cosmos
   * @name GetCosmosAccount
   * @request GET:/cosmos/{accountName}
   * @secure
   */
  export namespace GetCosmosAccount {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetCosmosAccountData;
  }

  /**
   * No description
   * @tags Cosmos
   * @name ListCosmosAccounts
   * @request GET:/cosmos
   * @secure
   */
  export namespace ListCosmosAccounts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ListCosmosAccountsData;
  }

  /**
   * No description
   * @tags Cosmos
   * @name SignCosmosTransaction
   * @request POST:/cosmos/{accountName}/sign-tx
   * @secure
   */
  export namespace SignCosmosTransaction {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CosmosTransactionInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SignCosmosTransactionData;
  }
}
