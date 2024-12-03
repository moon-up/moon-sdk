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
   * @description Creates a new EOS account.
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
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = CreateEosAccountData;
  }

  /**
   * @description Deletes an EOS account.
   * @tags eos
   * @name DeleteEosAccount
   * @request POST:/eos/{accountName}/delete
   * @secure
   */
  export namespace DeleteEosAccount {
    export type RequestParams = {
      /** - The name of the EOS account to be deleted. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = DeleteEosAccountData;
  }

  /**
   * @description Exports the account information for a given EOS account name.
   * @tags eos
   * @name ExportEosAccount
   * @request POST:/eos/{accountName}/export
   * @secure
   */
  export namespace ExportEosAccount {
    export type RequestParams = {
      /** - The name of the EOS account to export. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = ExportEosAccountData;
  }

  /**
   * @description Retrieves account information from the EOS blockchain.
   * @tags eos
   * @name GetEosAccount
   * @request GET:/eos/{accountName}
   * @secure
   */
  export namespace GetEosAccount {
    export type RequestParams = {
      /** - The name of the EOS account to retrieve information for. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = GetEosAccountData;
  }

  /**
   * @description Lists EOS accounts associated with the provided authorization token.
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
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = ListEosAccountsData;
  }

  /**
   * @description Signs an EOS transaction.
   * @tags eos
   * @name SignEosTransaction
   * @request POST:/eos/{accountName}/sign-tx
   * @secure
   */
  export namespace SignEosTransaction {
    export type RequestParams = {
      /** - The EOS account name from the request path. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = EosTransactionInput;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = SignEosTransactionData;
  }
}
