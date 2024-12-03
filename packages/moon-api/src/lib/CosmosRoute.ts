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
  CosmosCosmosCreateAccountData,
  CosmosCosmosCreateAccountPayload,
  CosmosCosmosDeleteAccountData,
  CosmosCosmosExportAccountData,
  CosmosCosmosGetAccountData,
  CosmosCosmosListAccountsData,
  CosmosCosmosSignIbcTransferTransactionData,
  CosmosCosmosSignMessageData,
  CosmosCosmosSignTransferTransactionData,
  CosmosIBCTransferInput,
  CosmosSignMessageInput,
  CosmosTransferInput,
} from './data-contracts';

export namespace Cosmos {
  /**
   * @description Creates a new Cosmos account.
   * @tags Cosmos
   * @name CosmosCosmosCreateAccount
   * @request POST:/cosmos
   * @secure
   */
  export namespace CosmosCosmosCreateAccount {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CosmosCosmosCreateAccountPayload;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = CosmosCosmosCreateAccountData;
  }

  /**
   * @description Deletes an account in the Cosmos SDK.
   * @tags Cosmos
   * @name CosmosCosmosDeleteAccount
   * @request DELETE:/cosmos/{accountName}
   * @secure
   */
  export namespace CosmosCosmosDeleteAccount {
    export type RequestParams = {
      /** - The name of the account to be deleted. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token provided in the request header. */
      Authorization: string;
    };
    export type ResponseBody = CosmosCosmosDeleteAccountData;
  }

  /**
   * @description Exports a Cosmos account.
   * @tags Cosmos
   * @name CosmosCosmosExportAccount
   * @request POST:/cosmos/{accountName}/export
   * @secure
   */
  export namespace CosmosCosmosExportAccount {
    export type RequestParams = {
      /** - The name of the account to be exported. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token provided in the request header. */
      Authorization: string;
    };
    export type ResponseBody = CosmosCosmosExportAccountData;
  }

  /**
   * @description Retrieves account information from the Cosmos SDK.
   * @tags Cosmos
   * @name CosmosCosmosGetAccount
   * @request GET:/cosmos/{accountName}
   * @secure
   */
  export namespace CosmosCosmosGetAccount {
    export type RequestParams = {
      /** - The name of the account to retrieve. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token provided in the request header. */
      Authorization: string;
    };
    export type ResponseBody = CosmosCosmosGetAccountData;
  }

  /**
   * @description Lists Cosmos accounts associated with the provided authorization token.
   * @tags Cosmos
   * @name CosmosCosmosListAccounts
   * @request GET:/cosmos
   * @secure
   */
  export namespace CosmosCosmosListAccounts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = CosmosCosmosListAccountsData;
  }

  /**
   * @description Signs an IBC transfer transaction for a given account.
   * @tags Cosmos
   * @name CosmosCosmosSignIbcTransferTransaction
   * @request POST:/cosmos/{accountName}/sign-ibc-transfer
   * @secure
   */
  export namespace CosmosCosmosSignIbcTransferTransaction {
    export type RequestParams = {
      /** - The name of the account for which the transaction is being signed. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CosmosIBCTransferInput;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = CosmosCosmosSignIbcTransferTransactionData;
  }

  /**
   * @description Signs a message using the Cosmos SDK.
   * @tags Cosmos
   * @name CosmosCosmosSignMessage
   * @request POST:/cosmos/{accountName}/sign-message
   * @secure
   */
  export namespace CosmosCosmosSignMessage {
    export type RequestParams = {
      /** - The name of the account to sign the message for. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CosmosSignMessageInput;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = CosmosCosmosSignMessageData;
  }

  /**
   * @description Signs a transfer transaction using the provided authorization token and account name.
   * @tags Cosmos
   * @name CosmosCosmosSignTransferTransaction
   * @request POST:/cosmos/{accountName}/sign-transfer
   * @secure
   */
  export namespace CosmosCosmosSignTransferTransaction {
    export type RequestParams = {
      /** - The name of the account to sign the transaction for. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CosmosTransferInput;
    export type RequestHeaders = {
      /** - The authorization token provided in the request header. */
      Authorization: string;
    };
    export type ResponseBody = CosmosCosmosSignTransferTransactionData;
  }
}
