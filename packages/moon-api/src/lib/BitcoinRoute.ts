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
  BRC20TransactionInput,
  BitcoinInput,
  BitcoinTransactionInput,
  CreateBitcoinAccountData,
  CreateBrc20TransactionData,
  CreateSrc20InscriptionData,
  GenerateUnsignedPsbtHexData,
  GetBitcoinAccountData,
  ListBitcoinAccountsData,
  SRC20InscriptionInput,
  SignBitcoinTransactionData,
  UnsignedPSBTInput,
} from './data-contracts';

export namespace Bitcoin {
  /**
   * No description
   * @tags Bitcoin
   * @name CreateBitcoinAccount
   * @request POST:/bitcoin
   * @secure
   */
  export namespace CreateBitcoinAccount {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BitcoinInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateBitcoinAccountData;
  }

  /**
   * No description
   * @tags Bitcoin
   * @name CreateBrc20Transaction
   * @request POST:/bitcoin/{accountName}/brc20-tx
   * @secure
   */
  export namespace CreateBrc20Transaction {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = BRC20TransactionInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateBrc20TransactionData;
  }

  /**
   * No description
   * @tags Bitcoin
   * @name CreateSrc20Inscription
   * @request POST:/bitcoin/{accountName}/src20-inscription
   * @secure
   */
  export namespace CreateSrc20Inscription {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SRC20InscriptionInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateSrc20InscriptionData;
  }

  /**
   * No description
   * @tags Bitcoin
   * @name GenerateUnsignedPsbtHex
   * @request POST:/bitcoin/{accountName}/generate-unsigned-psbt
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
    export type ResponseBody = GenerateUnsignedPsbtHexData;
  }

  /**
   * No description
   * @tags Bitcoin
   * @name GetBitcoinAccount
   * @request GET:/bitcoin/{accountName}
   * @secure
   */
  export namespace GetBitcoinAccount {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetBitcoinAccountData;
  }

  /**
   * No description
   * @tags Bitcoin
   * @name ListBitcoinAccounts
   * @request GET:/bitcoin
   * @secure
   */
  export namespace ListBitcoinAccounts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ListBitcoinAccountsData;
  }

  /**
   * No description
   * @tags Bitcoin
   * @name SignBitcoinTransaction
   * @request POST:/bitcoin/{accountName}/sign-tx
   * @secure
   */
  export namespace SignBitcoinTransaction {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = BitcoinTransactionInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SignBitcoinTransactionData;
  }
}
