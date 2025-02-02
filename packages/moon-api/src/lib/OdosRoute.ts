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
  AssembleRequest,
  GetZapQuoteData,
  OdosAssembleLimitOrderData,
  OdosAssembleLimitOrderPayload,
  OdosAssembleTransactionData,
  OdosCancelLimitOrderData,
  OdosCreateLimitOrderData,
  OdosCreateLimitOrderPayload,
  OdosGetContractInfoData,
  OdosGetContractInfoParams1VersionEnum,
  OdosGetCurrentBlockData,
  OdosGetExecutorAddressData,
  OdosGetExecutorAddressParams1VersionEnum,
  OdosGetLimitOrdersData,
  OdosGetLiquiditySourcesData,
  OdosGetQuoteData,
  OdosGetRouterAddressData,
  OdosGetRouterAddressParams1VersionEnum,
  OdosGetSupportedChainsData,
  OdosGetSupportedTokensData,
  OdosLoginData,
  OdosSwapInputBody,
  OdosSwapTokensData,
  ZapData,
} from './data-contracts';

export namespace Odos {
  /**
   * No description
   * @tags Odos
   * @name GetZapQuote
   * @request POST:/odos/{accountName}/get-zap-quote
   * @secure
   */
  export namespace GetZapQuote {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = OdosSwapInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetZapQuoteData;
  }

  /**
   * @description Assembles a limit order for a given account.
   * @tags Odos
   * @name OdosAssembleLimitOrder
   * @request POST:/odos/{accountName}/assemble-limit-order
   * @secure
   */
  export namespace OdosAssembleLimitOrder {
    export type RequestParams = {
      /** - The name of the account to assemble the limit order for. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = OdosAssembleLimitOrderPayload;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = OdosAssembleLimitOrderData;
  }

  /**
   * @description Assembles a transaction using the provided authorization token and request body.
   * @tags Odos
   * @name OdosAssembleTransaction
   * @request POST:/odos/assemble-transaction
   * @secure
   */
  export namespace OdosAssembleTransaction {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AssembleRequest;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = OdosAssembleTransactionData;
  }

  /**
   * @description Cancels a limit order for a given account.
   * @tags Odos
   * @name OdosCancelLimitOrder
   * @request POST:/odos/{accountName}/cancel-limit-order
   * @secure
   */
  export namespace OdosCancelLimitOrder {
    export type RequestParams = {
      /** - The name of the account to cancel the limit order for. */
      accountName: string;
    };
    export type RequestQuery = {
      /** - The hash of the order to cancel. */
      orderHash: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = OdosCancelLimitOrderData;
  }

  /**
   * @description Creates a limit order for a given account.
   * @tags Odos
   * @name OdosCreateLimitOrder
   * @request POST:/odos/{accountName}/create-limit-order
   * @secure
   */
  export namespace OdosCreateLimitOrder {
    export type RequestParams = {
      /** - The name of the account to create the limit order for. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = OdosCreateLimitOrderPayload;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = OdosCreateLimitOrderData;
  }

  /**
   * @description Retrieves contract information from the Odos API.
   * @tags Odos
   * @name OdosGetContractInfo
   * @request GET:/odos/contract-info
   * @secure
   */
  export namespace OdosGetContractInfo {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * - The chain ID for which the contract information is requested.
       * @format double
       */
      chainId: number;
      /** - The version of the API to use, expected to be 'v2'. */
      version: OdosGetContractInfoParams1VersionEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = OdosGetContractInfoData;
  }

  /**
   * @description Retrieves the current block information for a given blockchain.
   * @tags Odos
   * @name OdosGetCurrentBlock
   * @request GET:/odos/current-block
   * @secure
   */
  export namespace OdosGetCurrentBlock {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * - The ID of the blockchain to query.
       * @format double
       */
      chainId: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = OdosGetCurrentBlockData;
  }

  /**
   * @description Retrieves the executor address from the Odos API.
   * @tags Odos
   * @name OdosGetExecutorAddress
   * @request GET:/odos/executor-address
   * @secure
   */
  export namespace OdosGetExecutorAddress {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * - The chain ID for which the executor address is requested.
       * @format double
       */
      chainId: number;
      /** - The API version, expected to be 'v2'. */
      version: OdosGetExecutorAddressParams1VersionEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = OdosGetExecutorAddressData;
  }

  /**
   * @description Retrieves limit orders for a given account.
   * @tags Odos
   * @name OdosGetLimitOrders
   * @request GET:/odos/{accountName}/limit-orders
   * @secure
   */
  export namespace OdosGetLimitOrders {
    export type RequestParams = {
      /** - The name of the account to retrieve limit orders for. */
      accountName: string;
    };
    export type RequestQuery = {
      /** - The status of the orders to retrieve. */
      orderStatus: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = OdosGetLimitOrdersData;
  }

  /**
   * @description Retrieves liquidity sources for a given chain ID.
   * @tags Odos
   * @name OdosGetLiquiditySources
   * @request GET:/odos/liquidity-sources
   * @secure
   */
  export namespace OdosGetLiquiditySources {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * - The ID of the blockchain to query for liquidity sources.
       * @format double
       */
      chainId: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = OdosGetLiquiditySourcesData;
  }

  /**
   * @description Retrieves a quote for a given account and input body.
   * @tags Odos
   * @name OdosGetQuote
   * @request POST:/odos/{accountName}/get-quote
   * @secure
   */
  export namespace OdosGetQuote {
    export type RequestParams = {
      /** - The name of the account for which the quote is being retrieved. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = OdosSwapInputBody;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = OdosGetQuoteData;
  }

  /**
   * @description Retrieves the router address for the specified version and chain ID.
   * @tags Odos
   * @name OdosGetRouterAddress
   * @request GET:/odos/router-address
   * @secure
   */
  export namespace OdosGetRouterAddress {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * - The ID of the blockchain network.
       * @format double
       */
      chainId: number;
      /** - The version of the API to use, default is 'v2'. */
      version: OdosGetRouterAddressParams1VersionEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = OdosGetRouterAddressData;
  }

  /**
   * @description Retrieves the supported blockchain networks from the Odos API.
   * @tags Odos
   * @name OdosGetSupportedChains
   * @request GET:/odos/supported-chains
   * @secure
   */
  export namespace OdosGetSupportedChains {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token provided in the request header. */
      Authorization: string;
    };
    export type ResponseBody = OdosGetSupportedChainsData;
  }

  /**
   * @description Retrieves the supported tokens for a given blockchain network.
   * @tags Odos
   * @name OdosGetSupportedTokens
   * @request GET:/odos/supported-tokens
   * @secure
   */
  export namespace OdosGetSupportedTokens {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * - The ID of the blockchain network to query.
       * @format double
       */
      chainId: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = OdosGetSupportedTokensData;
  }

  /**
   * @description Logs in a user to the Odos platform.
   * @tags Odos
   * @name OdosLogin
   * @request POST:/odos/{accountName}/login
   * @secure
   */
  export namespace OdosLogin {
    export type RequestParams = {
      /** - The name of the account to log in. */
      accountName: string;
    };
    export type RequestQuery = {
      /**
       * - The ID of the blockchain network.
       * @format double
       */
      chainId: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = OdosLoginData;
  }

  /**
   * @description Handles the swap operation for the given account.
   * @tags Odos
   * @name OdosSwapTokens
   * @request POST:/odos/{accountName}/swap
   * @secure
   */
  export namespace OdosSwapTokens {
    export type RequestParams = {
      /** - The name of the account to perform the swap for. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = OdosSwapInputBody;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = OdosSwapTokensData;
  }

  /**
   * No description
   * @tags Odos
   * @name Zap
   * @request POST:/odos/{accountName}/zap
   * @secure
   */
  export namespace Zap {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = OdosSwapInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ZapData;
  }
}
