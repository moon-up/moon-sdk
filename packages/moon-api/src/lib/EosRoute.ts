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
  CreateEosAccountData,
  DeleteEosAccountData,
  EosInput,
  EosTransactionInput,
  ExportEosAccountData,
  GetEosAccountData,
  ListEosAccountsData,
  SignEosTransactionData,
} from './data-contracts';

export namespace Eos {
  /**
   * No description
   * @tags eos
   * @name CreateEosAccount
   * @request POST:/eos
   * @secure
   */
  export namespace CreateEosAccount {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = EosInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateEosAccountData;
  }

  /**
   * No description
   * @tags eos
   * @name DeleteEosAccount
   * @request POST:/eos/{accountName}/delete
   * @secure
   */
  export namespace DeleteEosAccount {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DeleteEosAccountData;
  }

  /**
   * No description
   * @tags eos
   * @name ExportEosAccount
   * @request POST:/eos/{accountName}/export
   * @secure
   */
  export namespace ExportEosAccount {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ExportEosAccountData;
  }

  /**
   * No description
   * @tags eos
   * @name GetEosAccount
   * @request GET:/eos/{accountName}
   * @secure
   */
  export namespace GetEosAccount {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetEosAccountData;
  }

  /**
   * No description
   * @tags eos
   * @name ListEosAccounts
   * @request GET:/eos
   * @secure
   */
  export namespace ListEosAccounts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ListEosAccountsData;
  }

  /**
   * No description
   * @tags eos
   * @name SignEosTransaction
   * @request POST:/eos/{accountName}/sign-tx
   * @secure
   */
  export namespace SignEosTransaction {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = EosTransactionInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SignEosTransactionData;
  }
}
