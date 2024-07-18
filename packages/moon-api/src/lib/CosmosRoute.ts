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
  CreateAccountBody,
  CreateAccountResult,
  DeleteAccountResult,
  IBCTransferTransactionInput,
  ListAccountsResult,
  MessageInput,
  ReadAccountData,
  SignIbcTransferTransactionData,
  SignMessageResult,
  SignTransferTransactionData,
  TransferTransactionInput,
} from './data-contracts';

export namespace Cosmos {
  /**
   * No description
   * @tags Cosmos
   * @name CreateAccount
   * @request POST:/cosmos/accounts
   * @secure
   */
  export namespace CreateAccount {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateAccountBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateAccountResult;
  }

  /**
   * No description
   * @tags Cosmos
   * @name DeleteAccount
   * @request DELETE:/cosmos/accounts/{accountName}
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
    export type ResponseBody = DeleteAccountResult;
  }

  /**
   * No description
   * @tags Cosmos
   * @name ListAccounts
   * @request GET:/cosmos/accounts
   * @secure
   */
  export namespace ListAccounts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ListAccountsResult;
  }

  /**
   * No description
   * @tags Cosmos
   * @name ReadAccount
   * @request GET:/cosmos/accounts/{accountName}
   * @secure
   */
  export namespace ReadAccount {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ReadAccountData;
  }

  /**
   * No description
   * @tags Cosmos
   * @name SignIbcTransferTransaction
   * @request POST:/cosmos/accounts/{accountName}/sign-ibc-transfer
   * @secure
   */
  export namespace SignIbcTransferTransaction {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = IBCTransferTransactionInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SignIbcTransferTransactionData;
  }

  /**
   * No description
   * @tags Cosmos
   * @name SignMessage
   * @request POST:/cosmos/accounts/{accountName}/sign-message
   * @secure
   */
  export namespace SignMessage {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = MessageInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SignMessageResult;
  }

  /**
   * No description
   * @tags Cosmos
   * @name SignTransferTransaction
   * @request POST:/cosmos/accounts/{accountName}/sign-transfer
   * @secure
   */
  export namespace SignTransferTransaction {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = TransferTransactionInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SignTransferTransactionData;
  }
}
