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
  AbiEncodeInput,
  BroadcastInput,
  BroadcastTxData,
  CreateAccountData,
  CreateAccountInput,
  DeleteAccountData,
  DeployContractData,
  DeployInput,
  EncodeDataData,
  EstimateGasData,
  GetAccountData,
  GetBalanceData,
  GetNonceData,
  InputBody,
  ListAccountsData,
  SignMessage,
  SignMessageData,
  SignTransactionData,
  SignTypedData,
  SignTypedDataData,
  SuggestGasPriceData,
  TransferEthData,
} from './data-contracts';

export namespace Accounts {
  /**
   * No description
   * @tags Accounts
   * @name BroadcastTx
   * @request POST:/accounts/{accountName}/broadcast-tx
   * @secure
   */
  export namespace BroadcastTx {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = BroadcastInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = BroadcastTxData;
  }

  /**
   * No description
   * @tags Accounts
   * @name CreateAccount
   * @request POST:/accounts
   * @secure
   */
  export namespace CreateAccount {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateAccountInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateAccountData;
  }

  /**
   * No description
   * @tags Accounts
   * @name DeleteAccount
   * @request DELETE:/accounts/{accountName}
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
    export type ResponseBody = DeleteAccountData;
  }

  /**
   * No description
   * @tags Accounts
   * @name DeployContract
   * @request POST:/accounts/{accountName}/deploy
   * @secure
   */
  export namespace DeployContract {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = DeployInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DeployContractData;
  }

  /**
   * No description
   * @tags Accounts
   * @name EncodeData
   * @request POST:/accounts/encode-data
   * @secure
   */
  export namespace EncodeData {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AbiEncodeInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = EncodeDataData;
  }

  /**
   * No description
   * @tags Accounts
   * @name EstimateGas
   * @request POST:/accounts/{accountName}/estimate
   * @secure
   */
  export namespace EstimateGas {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = EstimateGasData;
  }

  /**
   * No description
   * @tags Accounts
   * @name GetAccount
   * @request GET:/accounts/{accountName}
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
    export type ResponseBody = GetAccountData;
  }

  /**
   * No description
   * @tags Accounts
   * @name GetBalance
   * @request GET:/accounts/{accountName}/balance
   * @secure
   */
  export namespace GetBalance {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetBalanceData;
  }

  /**
   * No description
   * @tags Accounts
   * @name GetNonce
   * @request GET:/accounts/{accountName}/nonce
   * @secure
   */
  export namespace GetNonce {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetNonceData;
  }

  /**
   * No description
   * @tags Accounts
   * @name ListAccounts
   * @request GET:/accounts
   * @secure
   */
  export namespace ListAccounts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ListAccountsData;
  }

  /**
   * No description
   * @tags Accounts
   * @name SignMessage
   * @request POST:/accounts/{accountName}/sign-message
   * @secure
   */
  export namespace SignMessage {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SignMessage;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SignMessageData;
  }

  /**
   * No description
   * @tags Accounts
   * @name SignTransaction
   * @request POST:/accounts/{accountName}/sign-transaction
   * @secure
   */
  export namespace SignTransaction {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SignTransactionData;
  }

  /**
   * No description
   * @tags Accounts
   * @name SignTypedData
   * @request POST:/accounts/{accountName}/sign-typed-data
   * @secure
   */
  export namespace SignTypedData {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SignTypedData;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SignTypedDataData;
  }

  /**
   * No description
   * @tags Accounts
   * @name SuggestGasPrice
   * @request GET:/accounts/{accountName}/suggest-gas
   * @secure
   */
  export namespace SuggestGasPrice {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SuggestGasPriceData;
  }

  /**
   * No description
   * @tags Accounts
   * @name TransferEth
   * @request POST:/accounts/{accountName}/transfer-eth
   * @secure
   */
  export namespace TransferEth {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = TransferEthData;
  }
}
