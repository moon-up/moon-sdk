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
  BitcoinCashBitcoinCashCreateAccountData,
  BitcoinCashBitcoinCashDeleteAccountData,
  BitcoinCashBitcoinCashExportAccountData,
  BitcoinCashBitcoinCashGenerateUnsignedPsbtHexData,
  BitcoinCashBitcoinCashGetAccountData,
  BitcoinCashBitcoinCashSignBitcoinTransactionData,
  BitcoinCashBitcoinCashSignBitcoinTransactionPayload,
  BitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPathData,
  BitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPathPayload,
  BitcoinCashBitcoinCashSignTransactionData,
  BitcoinCashBitcoinCashSignTransactionWithMemoData,
  BitcoinCashInput,
  BitcoinCashListAccountsData,
  BitcoinCashTransactionInput,
  UnsignedPSBTInput,
} from './data-contracts';

export namespace Bitcoincash {
  /**
   * @description Creates a new Bitcoin Cash account.
   * @tags BitcoinCash
   * @name BitcoinCashBitcoinCashCreateAccount
   * @request POST:/bitcoincash/accounts
   * @secure
   */
  export namespace BitcoinCashBitcoinCashCreateAccount {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BitcoinCashInput;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = BitcoinCashBitcoinCashCreateAccountData;
  }

  /**
   * @description Deletes a Bitcoin Cash account.
   * @tags BitcoinCash
   * @name BitcoinCashBitcoinCashDeleteAccount
   * @request POST:/bitcoincash/accounts/{accountName}/delete
   * @secure
   */
  export namespace BitcoinCashBitcoinCashDeleteAccount {
    export type RequestParams = {
      /** - The name of the account to be deleted. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = BitcoinCashBitcoinCashDeleteAccountData;
  }

  /**
   * @description Exports the account details for the specified account name.
   * @tags BitcoinCash
   * @name BitcoinCashBitcoinCashExportAccount
   * @request POST:/bitcoincash/accounts/{accountName}/export
   * @secure
   */
  export namespace BitcoinCashBitcoinCashExportAccount {
    export type RequestParams = {
      /** - The name of the account to export. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = BitcoinCashBitcoinCashExportAccountData;
  }

  /**
   * @description Generates an unsigned PSBT (Partially Signed Bitcoin Transaction) hex string.
   * @tags BitcoinCash
   * @name BitcoinCashBitcoinCashGenerateUnsignedPsbtHex
   * @request POST:/bitcoincash/accounts/{accountName}/generate-unsigned-psbt
   * @secure
   */
  export namespace BitcoinCashBitcoinCashGenerateUnsignedPsbtHex {
    export type RequestParams = {
      /** - The name of the account for which to generate the PSBT. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UnsignedPSBTInput;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody =
      BitcoinCashBitcoinCashGenerateUnsignedPsbtHexData;
  }

  /**
   * @description Reads the account information for a given account name.
   * @tags BitcoinCash
   * @name BitcoinCashBitcoinCashGetAccount
   * @request GET:/bitcoincash/accounts/{accountName}
   * @secure
   */
  export namespace BitcoinCashBitcoinCashGetAccount {
    export type RequestParams = {
      /** - The name of the account to read. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = BitcoinCashBitcoinCashGetAccountData;
  }

  /**
   * @description Signs a Bitcoin transaction for the specified account.
   * @tags BitcoinCash
   * @name BitcoinCashBitcoinCashSignBitcoinTransaction
   * @request POST:/bitcoincash/accounts/{accountName}/sign-btc-tx
   * @secure
   */
  export namespace BitcoinCashBitcoinCashSignBitcoinTransaction {
    export type RequestParams = {
      /** - The name of the account to sign the transaction for. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody =
      BitcoinCashBitcoinCashSignBitcoinTransactionPayload;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = BitcoinCashBitcoinCashSignBitcoinTransactionData;
  }

  /**
   * @description Signs a Partially Signed Bitcoin Transaction (PSBT) using a key path and script path.
   * @tags BitcoinCash
   * @name BitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPath
   * @request POST:/bitcoincash/accounts/{accountName}/sign-psbt-with-key-path-and-script-path
   * @secure
   */
  export namespace BitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPath {
    export type RequestParams = {
      /** - The name of the account to use for signing. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody =
      BitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPathPayload;
    export type RequestHeaders = {
      /** - The authorization token for authentication. */
      Authorization: string;
    };
    export type ResponseBody =
      BitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPathData;
  }

  /**
   * @description Signs a Bitcoin Cash transaction.
   * @tags BitcoinCash
   * @name BitcoinCashBitcoinCashSignTransaction
   * @request POST:/bitcoincash/accounts/{accountName}/sign-tx
   * @secure
   */
  export namespace BitcoinCashBitcoinCashSignTransaction {
    export type RequestParams = {
      /** - The name of the account to sign the transaction for. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = BitcoinCashTransactionInput;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = BitcoinCashBitcoinCashSignTransactionData;
  }

  /**
   * @description Signs a Bitcoin Cash transaction with a memo.
   * @tags BitcoinCash
   * @name BitcoinCashBitcoinCashSignTransactionWithMemo
   * @request POST:/bitcoincash/accounts/{accountName}/memo-sign-tx
   * @secure
   */
  export namespace BitcoinCashBitcoinCashSignTransactionWithMemo {
    export type RequestParams = {
      /** - The name of the account to sign the transaction for. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = BitcoinCashTransactionInput;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody =
      BitcoinCashBitcoinCashSignTransactionWithMemoData;
  }

  /**
   * @description Lists Bitcoin Cash accounts associated with the provided authorization token.
   * @tags BitcoinCash
   * @name BitcoinCashListAccounts
   * @request GET:/bitcoincash/accounts
   * @secure
   */
  export namespace BitcoinCashListAccounts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = BitcoinCashListAccountsData;
  }
}
