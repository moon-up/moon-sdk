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
  CosmosIBCTransferInput,
  CosmosSignMessageInput,
  CosmosTransferInput,
  CreateAccountInput,
  CreateAccountOutput,
  DeleteAccountOutput,
  ExportAccountOutput,
  GetAccountResult,
  ListAccountsOutput,
  SignIbcTransferTransactionData,
  SignMessageResult,
  SignTransferTransactionData,
} from './data-contracts';

export namespace Cosmos {
  /**
   * No description
   * @tags Cosmos
   * @name CreateAccount
   * @request POST:/cosmos
   * @secure
   */
  export namespace CreateAccount {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateAccountInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateAccountOutput;
  }

  /**
   * No description
   * @tags Cosmos
   * @name DeleteAccount
   * @request DELETE:/cosmos/{accountName}
   * @secure
   */
  export namespace DeleteAccount {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DeleteAccountOutput;
  }

  /**
   * No description
   * @tags Cosmos
   * @name ExportAccount
   * @request POST:/cosmos/{accountName}/export
   * @secure
   */
  export namespace ExportAccount {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ExportAccountOutput;
  }

  /**
   * No description
   * @tags Cosmos
   * @name GetAccount
   * @request GET:/cosmos/{accountName}
   * @secure
   */
  export namespace GetAccount {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetAccountResult;
  }

  /**
   * No description
   * @tags Cosmos
   * @name ListAccounts
   * @request GET:/cosmos
   * @secure
   */
  export namespace ListAccounts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ListAccountsOutput;
  }

  /**
   * No description
   * @tags Cosmos
   * @name SignIbcTransferTransaction
   * @request POST:/cosmos/{accountName}/sign-ibc-transfer
   * @secure
   */
  export namespace SignIbcTransferTransaction {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CosmosIBCTransferInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SignIbcTransferTransactionData;
  }

  /**
   * No description
   * @tags Cosmos
   * @name SignMessage
   * @request POST:/cosmos/{accountName}/sign-message
   * @secure
   */
  export namespace SignMessage {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CosmosSignMessageInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SignMessageResult;
  }

  /**
   * No description
   * @tags Cosmos
   * @name SignTransferTransaction
   * @request POST:/cosmos/{accountName}/sign-transfer
   * @secure
   */
  export namespace SignTransferTransaction {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CosmosTransferInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SignTransferTransactionData;
  }
}
