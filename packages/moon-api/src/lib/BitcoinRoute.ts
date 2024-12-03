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
  BitcoinBitcoinCreateAccountData,
  BitcoinBitcoinCreateBrc20TransactionData,
  BitcoinBitcoinCreateSrc20InscriptionData,
  BitcoinBitcoinDeleteAccountData,
  BitcoinBitcoinExportAccountData,
  BitcoinBitcoinGenerateUnsignedPsbtHexData,
  BitcoinBitcoinGetAccountData,
  BitcoinBitcoinSignTransactionData,
  BitcoinInput,
  BitcoinListAccountsData,
  BitcoinTransactionInput,
  SRC20InscriptionInput,
  UnsignedPSBTInput,
} from './data-contracts';

export namespace Bitcoin {
  /**
   * @description Creates a new Bitcoin account.
   * @tags Bitcoin
   * @name BitcoinBitcoinCreateAccount
   * @request POST:/bitcoin
   * @secure
   */
  export namespace BitcoinBitcoinCreateAccount {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BitcoinInput;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = BitcoinBitcoinCreateAccountData;
  }

  /**
   * @description Creates a BRC20 transaction.
   * @tags Bitcoin
   * @name BitcoinBitcoinCreateBrc20Transaction
   * @request POST:/bitcoin/{accountName}/brc20-tx
   * @secure
   */
  export namespace BitcoinBitcoinCreateBrc20Transaction {
    export type RequestParams = {
      /** - The name of the account for which the transaction is being created. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = BRC20TransactionInput;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = BitcoinBitcoinCreateBrc20TransactionData;
  }

  /**
   * @description Creates an SRC20 inscription using the provided account name and inscription input.
   * @tags Bitcoin
   * @name BitcoinBitcoinCreateSrc20Inscription
   * @request POST:/bitcoin/{accountName}/src20-inscription
   * @secure
   */
  export namespace BitcoinBitcoinCreateSrc20Inscription {
    export type RequestParams = {
      /** - The name of the account for which the inscription is being created. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SRC20InscriptionInput;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = BitcoinBitcoinCreateSrc20InscriptionData;
  }

  /**
   * @description Deletes a Bitcoin account.
   * @tags Bitcoin
   * @name BitcoinBitcoinDeleteAccount
   * @request POST:/bitcoin/{accountName}/delete
   * @secure
   */
  export namespace BitcoinBitcoinDeleteAccount {
    export type RequestParams = {
      /** - The name of the account to be deleted. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = BitcoinBitcoinDeleteAccountData;
  }

  /**
   * @description Exports the account details for the specified account name.
   * @tags Bitcoin
   * @name BitcoinBitcoinExportAccount
   * @request POST:/bitcoin/{accountName}/export
   * @secure
   */
  export namespace BitcoinBitcoinExportAccount {
    export type RequestParams = {
      /** - The name of the account to be exported. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = BitcoinBitcoinExportAccountData;
  }

  /**
   * @description Generates an unsigned PSBT (Partially Signed Bitcoin Transaction) hex string.
   * @tags Bitcoin
   * @name BitcoinBitcoinGenerateUnsignedPsbtHex
   * @request POST:/bitcoin/{accountName}/generate-unsigned-psbt
   * @secure
   */
  export namespace BitcoinBitcoinGenerateUnsignedPsbtHex {
    export type RequestParams = {
      /** - The name of the account for which to generate the PSBT. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UnsignedPSBTInput;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = BitcoinBitcoinGenerateUnsignedPsbtHexData;
  }

  /**
   * @description Retrieves the account information for a given account name.
   * @tags Bitcoin
   * @name BitcoinBitcoinGetAccount
   * @request GET:/bitcoin/{accountName}
   * @secure
   */
  export namespace BitcoinBitcoinGetAccount {
    export type RequestParams = {
      /** - The name of the account to retrieve. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = BitcoinBitcoinGetAccountData;
  }

  /**
   * @description Signs a Bitcoin transaction using the provided account name and transaction input.
   * @tags Bitcoin
   * @name BitcoinBitcoinSignTransaction
   * @request POST:/bitcoin/{accountName}/sign-tx
   * @secure
   */
  export namespace BitcoinBitcoinSignTransaction {
    export type RequestParams = {
      /** - The name of the account to sign the transaction for. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = BitcoinTransactionInput;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = BitcoinBitcoinSignTransactionData;
  }

  /**
   * @description Lists the accounts associated with the provided authorization token.
   * @tags Bitcoin
   * @name BitcoinListAccounts
   * @request GET:/bitcoin
   * @secure
   */
  export namespace BitcoinListAccounts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = BitcoinListAccountsData;
  }
}
