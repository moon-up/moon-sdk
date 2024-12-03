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
  GetToolsData,
  LifiGetAllPossibleConnectionsData,
  LifiGetChainsData,
  LifiGetChainsParams1OptionalChainTypesEnum,
  LifiGetConnectionsData,
  LifiGetQuoteData,
  LifiGetQuoteParams1OrderEnum,
  LifiGetStatusData,
  LifiGetTokenDetailsData,
  LifiGetTokensData,
  LifiPostQuoteData,
  LifiPostQuoteParams1OrderEnum,
} from './data-contracts';

export namespace Lifi {
  /**
   * @description Retrieves tools based on the provided chains.
   * @name GetTools
   * @request GET:/lifi/tools
   */
  export namespace GetTools {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - Optional query parameter specifying the chains to filter tools. */
      chains?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetToolsData;
  }

  /**
   * @description Retrieves all possible connections for a given chain and token.
   * @name LifiGetAllPossibleConnections
   * @request GET:/lifi/allPossibleConnections
   */
  export namespace LifiGetAllPossibleConnections {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The target chain identifier. */
      toChain: string;
      /** - The target token identifier. */
      toToken: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LifiGetAllPossibleConnectionsData;
  }

  /**
   * @description Retrieves a list of supported chains.
   * @name LifiGetChains
   * @request GET:/lifi/chains
   */
  export namespace LifiGetChains {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - Optional parameter to filter chains by type ('EVM' or 'SOL'). */
      optionalChainTypes?: LifiGetChainsParams1OptionalChainTypesEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LifiGetChainsData;
  }

  /**
   * @description Retrieves connections between specified chains and tokens.
   * @name LifiGetConnections
   * @request GET:/lifi/connections
   */
  export namespace LifiGetConnections {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - Optional parameter to specify types of chains. */
      chainTypes?: string;
      /** - The source blockchain identifier. */
      fromChain: string;
      /** - The source token identifier. */
      fromToken: string;
      /** - The destination blockchain identifier. */
      toChain: string;
      /** - The destination token identifier. */
      toToken: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LifiGetConnectionsData;
  }

  /**
   * @description Retrieves a quote for a token swap between different chains.
   * @name LifiGetQuote
   * @request GET:/lifi/quote
   */
  export namespace LifiGetQuote {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - A list of allowed bridges (optional). */
      allowBridges?: string[];
      /** - A list of allowed exchanges (optional). */
      allowExchanges?: string[];
      /** - A list of denied bridges (optional). */
      denyBridges?: string[];
      /** - A list of denied exchanges (optional). */
      denyExchanges?: string[];
      /**
       * - The fee amount (optional).
       * @format double
       */
      fee?: number;
      /** - The address of the sender on the source chain. */
      fromAddress: string;
      /** - The amount of the source token to swap. */
      fromAmount: string;
      /** - The source blockchain identifier. */
      fromChain: string;
      /** - The token address on the source chain. */
      fromToken: string;
      /** - The integrator identifier (optional). */
      integrator?: string;
      /** - The order preference for the quote ('BEST_VALUE', 'BEST_FEE', 'BEST_FEE_GAS') (optional). */
      order?: LifiGetQuoteParams1OrderEnum;
      /** - A list of preferred bridges (optional). */
      preferBridges?: string[];
      /** - A list of preferred exchanges (optional). */
      preferExchanges?: string[];
      /** - The referrer identifier (optional). */
      referrer?: string;
      /**
       * - The maximum acceptable slippage percentage (optional).
       * @format double
       */
      slippage?: number;
      /** - The address of the recipient on the destination chain (optional). */
      toAddress?: string;
      /** - The destination blockchain identifier. */
      toChain: string;
      /** - The token address on the destination chain. */
      toToken: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LifiGetQuoteData;
  }

  /**
   * @description Retrieves the status of a transaction based on the provided transaction hash.
   * @name LifiGetStatus
   * @request GET:/lifi/status
   */
  export namespace LifiGetStatus {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The hash of the transaction to retrieve the status for. */
      txHash: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LifiGetStatusData;
  }

  /**
   * @description Fetches the details of a specified token on a given blockchain.
   * @name LifiGetTokenDetails
   * @request GET:/lifi/token
   */
  export namespace LifiGetTokenDetails {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The blockchain on which the token resides. */
      chain: string;
      /** - The address or symbol of the token to fetch details for. */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LifiGetTokenDetailsData;
  }

  /**
   * @description Fetches tokens from the LiFi service.
   * @name LifiGetTokens
   * @request GET:/lifi/tokens
   */
  export namespace LifiGetTokens {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LifiGetTokensData;
  }

  /**
   * @description Handles the retrieval of a quote for a token swap between different chains.
   * @name LifiPostQuote
   * @request POST:/lifi/{accountName}/quote
   */
  export namespace LifiPostQuote {
    export type RequestParams = {
      /** - The name of the account requesting the quote. */
      accountName: string;
    };
    export type RequestQuery = {
      /** - (Optional) The list of allowed bridges for the swap. */
      allowBridges?: string[];
      /** - (Optional) The list of allowed exchanges for the swap. */
      allowExchanges?: string[];
      /** - (Optional) The list of denied bridges for the swap. */
      denyBridges?: string[];
      /** - (Optional) The list of denied exchanges for the swap. */
      denyExchanges?: string[];
      /**
       * - (Optional) The fee for the swap.
       * @format double
       */
      fee?: number;
      /** - The address from which the token swap will originate. */
      fromAddress: string;
      /** - The amount of the token to be swapped from. */
      fromAmount: string;
      /** - The chain from which the token swap will originate. */
      fromChain: string;
      /** - The token to be swapped from. */
      fromToken: string;
      /** - (Optional) The integrator identifier. */
      integrator?: string;
      /** - (Optional) The order preference for the quote (BEST_VALUE, BEST_FEE, BEST_FEE_GAS). */
      order?: LifiPostQuoteParams1OrderEnum;
      /** - (Optional) The list of preferred bridges for the swap. */
      preferBridges?: string[];
      /** - (Optional) The list of preferred exchanges for the swap. */
      preferExchanges?: string[];
      /** - (Optional) The referrer identifier. */
      referrer?: string;
      /**
       * - (Optional) The acceptable slippage percentage for the swap.
       * @format double
       */
      slippage?: number;
      /** - (Optional) The address to which the token swap will be sent. */
      toAddress?: string;
      /** - The chain to which the token swap will be sent. */
      toChain: string;
      /** - The token to be swapped to. */
      toToken: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = LifiPostQuoteData;
  }
}
