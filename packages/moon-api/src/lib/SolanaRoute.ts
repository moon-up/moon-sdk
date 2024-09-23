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
  CreateSolanaAccountData,
  DeleteSolanaAccountData,
  ExportSolanaAccountData,
  GetSolanaAccountData,
  ListSolanaAccountsData,
  MultiSignSolanaTransactionData,
  SignSolanaTransactionData,
  SolanaInput,
  SolanaSignTransactionInput,
  SolanaTransactionInput,
  TransferSolanaTransactionData,
  TransferTokensSignSolanaTransactionData,
} from './data-contracts';

export namespace Solana {
  /**
   * No description
   * @tags Solana
   * @name CreateSolanaAccount
   * @request POST:/solana
   * @secure
   */
  export namespace CreateSolanaAccount {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SolanaInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateSolanaAccountData;
  }

  /**
   * No description
   * @tags Solana
   * @name DeleteSolanaAccount
   * @request POST:/solana/{accountName}/delete
   * @secure
   */
  export namespace DeleteSolanaAccount {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DeleteSolanaAccountData;
  }

  /**
   * No description
   * @tags Solana
   * @name ExportSolanaAccount
   * @request POST:/solana/{accountName}/export
   * @secure
   */
  export namespace ExportSolanaAccount {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ExportSolanaAccountData;
  }

  /**
   * No description
   * @tags Solana
   * @name GetSolanaAccount
   * @request GET:/solana/{accountName}
   * @secure
   */
  export namespace GetSolanaAccount {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetSolanaAccountData;
  }

  /**
   * No description
   * @tags Solana
   * @name ListSolanaAccounts
   * @request GET:/solana
   * @secure
   */
  export namespace ListSolanaAccounts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ListSolanaAccountsData;
  }

  /**
   * No description
   * @tags Solana
   * @name MultiSignSolanaTransaction
   * @request POST:/solana/{accountName}/multi-sign-tx
   * @secure
   */
  export namespace MultiSignSolanaTransaction {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SolanaSignTransactionInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = MultiSignSolanaTransactionData;
  }

  /**
   * No description
   * @tags Solana
   * @name SignSolanaTransaction
   * @request POST:/solana/{accountName}/sign-tx
   * @secure
   */
  export namespace SignSolanaTransaction {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SolanaSignTransactionInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SignSolanaTransactionData;
  }

  /**
   * No description
   * @tags Solana
   * @name TransferSolanaTransaction
   * @request POST:/solana/{accountName}/transfer
   * @secure
   */
  export namespace TransferSolanaTransaction {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SolanaTransactionInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = TransferSolanaTransactionData;
  }

  /**
   * No description
   * @tags Solana
   * @name TransferTokensSignSolanaTransaction
   * @request POST:/solana/{accountName}/transfer-tokens
   * @secure
   */
  export namespace TransferTokensSignSolanaTransaction {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SolanaTransactionInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = TransferTokensSignSolanaTransactionData;
  }
}
