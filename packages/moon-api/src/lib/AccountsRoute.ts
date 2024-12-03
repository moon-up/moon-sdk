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
  AccountsBroadcastEthreeumTransactionData,
  AccountsCreateEthereumAccountData,
  AccountsDeleteEthereumAccountData,
  AccountsDeployContractData,
  AccountsEncodeAbiDataData,
  AccountsEstimateGasData,
  AccountsEthereumGetNativeBalanceData,
  AccountsEthereumGetNonceData,
  AccountsExportEthreumAccountData,
  AccountsGetEthreumAccountData,
  AccountsListEthereumAccountsData,
  AccountsSignEthereumTransactionData,
  AccountsSignEthereumTypedDataData,
  AccountsSignEthreumMessageData,
  AccountsSuggestGasPriceData,
  AccountsTransferEthData,
  BroadcastInput,
  CreateAccountInput,
  DeployInput,
  InputBody,
  SignMessage,
  SignTypedData,
} from './data-contracts';

export namespace Accounts {
  /**
   * @description Broadcasts a transaction using the provided account name and transaction details.
   * @tags Accounts
   * @name AccountsBroadcastEthreeumTransaction
   * @request POST:/accounts/{accountName}/broadcast-tx
   * @secure
   */
  export namespace AccountsBroadcastEthreeumTransaction {
    export type RequestParams = {
      /** - The name of the account to broadcast the transaction from. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = BroadcastInput;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = AccountsBroadcastEthreeumTransactionData;
  }

  /**
   * @description Creates a new account using the provided authorization token and account input data.
   * @tags Accounts
   * @name AccountsCreateEthereumAccount
   * @request POST:/accounts
   * @secure
   */
  export namespace AccountsCreateEthereumAccount {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateAccountInput;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = AccountsCreateEthereumAccountData;
  }

  /**
   * @description Deletes an account based on the provided account name.
   * @tags Accounts
   * @name AccountsDeleteEthereumAccount
   * @request DELETE:/accounts/{accountName}
   * @secure
   */
  export namespace AccountsDeleteEthereumAccount {
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
    export type ResponseBody = AccountsDeleteEthereumAccountData;
  }

  /**
   * @description Deploys a contract using the provided account name and deployment input.
   * @tags Accounts
   * @name AccountsDeployContract
   * @request POST:/accounts/{accountName}/deploy
   * @secure
   */
  export namespace AccountsDeployContract {
    export type RequestParams = {
      /** - The name of the account to deploy the contract to. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = DeployInput;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = AccountsDeployContractData;
  }

  /**
   * @description Encodes data using the provided ABI and function parameters.
   * @tags Accounts
   * @name AccountsEncodeAbiData
   * @request POST:/accounts/encode-data
   * @secure
   */
  export namespace AccountsEncodeAbiData {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AbiEncodeInput;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = AccountsEncodeAbiDataData;
  }

  /**
   * @description Estimates the gas required for a transaction.
   * @tags Accounts
   * @name AccountsEstimateGas
   * @request POST:/accounts/{accountName}/estimate
   * @secure
   */
  export namespace AccountsEstimateGas {
    export type RequestParams = {
      /** - The name of the account for which to estimate gas. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = AccountsEstimateGasData;
  }

  /**
   * @description Retrieves the balance of a specified account.
   * @tags Accounts
   * @name AccountsEthereumGetNativeBalance
   * @request GET:/accounts/{accountName}/balance
   * @secure
   */
  export namespace AccountsEthereumGetNativeBalance {
    export type RequestParams = {
      /** - The name of the account to retrieve the balance for. */
      accountName: string;
    };
    export type RequestQuery = {
      /** - The ID of the blockchain network. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = AccountsEthereumGetNativeBalanceData;
  }

  /**
   * @description Retrieves the nonce for a given account.
   * @tags Accounts
   * @name AccountsEthereumGetNonce
   * @request GET:/accounts/{accountName}/nonce
   * @secure
   */
  export namespace AccountsEthereumGetNonce {
    export type RequestParams = {
      /** - The name of the account to retrieve the nonce for. */
      accountName: string;
    };
    export type RequestQuery = {
      /** - The ID of the blockchain network. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = AccountsEthereumGetNonceData;
  }

  /**
   * @description Exports the account details including address, private key, and public key.
   * @tags Accounts
   * @name AccountsExportEthreumAccount
   * @request GET:/accounts/{accountName}/export
   * @secure
   */
  export namespace AccountsExportEthreumAccount {
    export type RequestParams = {
      /** - The name of the account to be exported. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = AccountsExportEthreumAccountData;
  }

  /**
   * @description Retrieves the account details for a given account name.
   * @tags Accounts
   * @name AccountsGetEthreumAccount
   * @request GET:/accounts/{accountName}
   * @secure
   */
  export namespace AccountsGetEthreumAccount {
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
    export type ResponseBody = AccountsGetEthreumAccountData;
  }

  /**
   * @description Lists accounts using the provided authorization token.
   * @tags Accounts
   * @name AccountsListEthereumAccounts
   * @request GET:/accounts
   * @secure
   */
  export namespace AccountsListEthereumAccounts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = AccountsListEthereumAccountsData;
  }

  /**
   * @description Signs a transaction for the specified account.
   * @tags Accounts
   * @name AccountsSignEthereumTransaction
   * @request POST:/accounts/{accountName}/sign-transaction
   * @secure
   */
  export namespace AccountsSignEthereumTransaction {
    export type RequestParams = {
      /** - The name of the account for which the transaction is to be signed. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = AccountsSignEthereumTransactionData;
  }

  /**
   * @description Handles the signing of typed data for a given account.
   * @tags Accounts
   * @name AccountsSignEthereumTypedData
   * @request POST:/accounts/{accountName}/sign-typed-data
   * @secure
   */
  export namespace AccountsSignEthereumTypedData {
    export type RequestParams = {
      /** - The name of the account for which the data is to be signed. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SignTypedData;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = AccountsSignEthereumTypedDataData;
  }

  /**
   * @description Signs a message using the provided account name and authorization token.
   * @tags Accounts
   * @name AccountsSignEthreumMessage
   * @request POST:/accounts/{accountName}/sign-message
   * @secure
   */
  export namespace AccountsSignEthreumMessage {
    export type RequestParams = {
      /** - The name of the account to sign the message with. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SignMessage;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = AccountsSignEthreumMessageData;
  }

  /**
   * @description Suggests the gas price for a given account and chain ID.
   * @tags Accounts
   * @name AccountsSuggestGasPrice
   * @request GET:/accounts/{accountName}/suggest-gas
   * @secure
   */
  export namespace AccountsSuggestGasPrice {
    export type RequestParams = {
      /** - The name of the account for which to suggest the gas price. */
      accountName: string;
    };
    export type RequestQuery = {
      /** - The ID of the blockchain network. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = AccountsSuggestGasPriceData;
  }

  /**
   * @description Transfers Ethereum from one account to another.
   * @tags Accounts
   * @name AccountsTransferEth
   * @request POST:/accounts/{accountName}/transfer-eth
   * @secure
   */
  export namespace AccountsTransferEth {
    export type RequestParams = {
      /** - The name of the account from which Ethereum will be transferred. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = AccountsTransferEthData;
  }
}
