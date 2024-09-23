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
  CreateAccountResult,
  DeleteAccountResult,
  ExportAccountResult,
  GenerateUnsignedPsbtHexResult,
  ListAccountsResult,
  ReadAccountData,
  SignBitcoinTransactionBody,
  SignBitcoinTransactionResult,
  SignPsbtWithKeyPathAndScriptPathData,
  SignPsbtWithKeyPathAndScriptPathPayload,
  SignTransactionResult,
  SignTransactionWithMemoData,
  UnsignedPSBTInput,
} from './data-contracts';

export namespace Bitcoincash {
  /**
   * No description
   * @tags BitcoinCash
   * @name CreateAccount
   * @request POST:/bitcoincash/accounts
   * @secure
   */
  export namespace CreateAccount {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BitcoinCashInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateAccountResult;
  }

  /**
   * No description
   * @tags BitcoinCash
   * @name DeleteAccount
   * @request POST:/bitcoincash/accounts/{accountName}/delete
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
   * @tags BitcoinCash
   * @name ExportAccount
   * @request POST:/bitcoincash/accounts/{accountName}/export
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
    export type ResponseBody = ExportAccountResult;
  }

  /**
   * No description
   * @tags BitcoinCash
   * @name GenerateUnsignedPsbtHex
   * @request POST:/bitcoincash/accounts/{accountName}/generate-unsigned-psbt
   * @secure
   */
  export namespace GenerateUnsignedPsbtHex {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UnsignedPSBTInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GenerateUnsignedPsbtHexResult;
  }

  /**
   * No description
   * @tags BitcoinCash
   * @name ListAccounts
   * @request GET:/bitcoincash/accounts
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
   * @tags BitcoinCash
   * @name ReadAccount
   * @request GET:/bitcoincash/accounts/{accountName}
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
   * @tags BitcoinCash
   * @name SignBitcoinTransaction
   * @request POST:/bitcoincash/accounts/{accountName}/sign-btc-tx
   * @secure
   */
  export namespace SignBitcoinTransaction {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SignBitcoinTransactionBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SignBitcoinTransactionResult;
  }

  /**
   * No description
   * @tags BitcoinCash
   * @name SignPsbtWithKeyPathAndScriptPath
   * @request POST:/bitcoincash/accounts/{accountName}/sign-psbt-with-key-path-and-script-path
   * @secure
   */
  export namespace SignPsbtWithKeyPathAndScriptPath {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SignPsbtWithKeyPathAndScriptPathPayload;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SignPsbtWithKeyPathAndScriptPathData;
  }

  /**
   * No description
   * @tags BitcoinCash
   * @name SignTransaction
   * @request POST:/bitcoincash/accounts/{accountName}/sign-tx
   * @secure
   */
  export namespace SignTransaction {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = BitcoinCashTransactionInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SignTransactionResult;
  }

  /**
   * No description
   * @tags BitcoinCash
   * @name SignTransactionWithMemo
   * @request POST:/bitcoincash/accounts/{accountName}/memo-sign-tx
   * @secure
   */
  export namespace SignTransactionWithMemo {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = BitcoinCashTransactionInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SignTransactionWithMemoData;
  }
}
