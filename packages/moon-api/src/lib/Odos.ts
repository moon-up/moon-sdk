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
  OdosCancelLimitOrderParams,
  OdosCreateLimitOrderData,
  OdosCreateLimitOrderPayload,
  OdosGetContractInfoData,
  OdosGetContractInfoParams,
  OdosGetCurrentBlockData,
  OdosGetCurrentBlockParams,
  OdosGetExecutorAddressData,
  OdosGetExecutorAddressParams,
  OdosGetLimitOrdersData,
  OdosGetLimitOrdersParams,
  OdosGetLiquiditySourcesData,
  OdosGetLiquiditySourcesParams,
  OdosGetQuoteData,
  OdosGetRouterAddressData,
  OdosGetRouterAddressParams,
  OdosGetSupportedChainsData,
  OdosGetSupportedTokensData,
  OdosGetSupportedTokensParams,
  OdosLoginData,
  OdosLoginParams,
  OdosSwapInputBody,
  OdosSwapTokensData,
  ZapData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Odos<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Odos
   * @name GetZapQuote
   * @request POST:/odos/{accountName}/get-zap-quote
   * @secure
   */
  getZapQuote = (
    accountName: string,
    data: OdosSwapInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<GetZapQuoteData, any>({
      path: `/odos/${accountName}/get-zap-quote`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Assembles a limit order for a given account.
   *
   * @tags Odos
   * @name OdosAssembleLimitOrder
   * @request POST:/odos/{accountName}/assemble-limit-order
   * @secure
   */
  odosAssembleLimitOrder = (
    accountName: string,
    data: OdosAssembleLimitOrderPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<OdosAssembleLimitOrderData, any>({
      path: `/odos/${accountName}/assemble-limit-order`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Assembles a transaction using the provided authorization token and request body.
   *
   * @tags Odos
   * @name OdosAssembleTransaction
   * @request POST:/odos/assemble-transaction
   * @secure
   */
  odosAssembleTransaction = (
    data: AssembleRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<OdosAssembleTransactionData, any>({
      path: `/odos/assemble-transaction`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Cancels a limit order for a given account.
   *
   * @tags Odos
   * @name OdosCancelLimitOrder
   * @request POST:/odos/{accountName}/cancel-limit-order
   * @secure
   */
  odosCancelLimitOrder = (
    { accountName, ...query }: OdosCancelLimitOrderParams,
    params: RequestParams = {}
  ) =>
    this.http.request<OdosCancelLimitOrderData, any>({
      path: `/odos/${accountName}/cancel-limit-order`,
      method: 'POST',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a limit order for a given account.
   *
   * @tags Odos
   * @name OdosCreateLimitOrder
   * @request POST:/odos/{accountName}/create-limit-order
   * @secure
   */
  odosCreateLimitOrder = (
    accountName: string,
    data: OdosCreateLimitOrderPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<OdosCreateLimitOrderData, any>({
      path: `/odos/${accountName}/create-limit-order`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves contract information from the Odos API.
   *
   * @tags Odos
   * @name OdosGetContractInfo
   * @request GET:/odos/contract-info
   * @secure
   */
  odosGetContractInfo = (
    query: OdosGetContractInfoParams,
    params: RequestParams = {}
  ) =>
    this.http.request<OdosGetContractInfoData, any>({
      path: `/odos/contract-info`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the current block information for a given blockchain.
   *
   * @tags Odos
   * @name OdosGetCurrentBlock
   * @request GET:/odos/current-block
   * @secure
   */
  odosGetCurrentBlock = (
    query: OdosGetCurrentBlockParams,
    params: RequestParams = {}
  ) =>
    this.http.request<OdosGetCurrentBlockData, any>({
      path: `/odos/current-block`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the executor address from the Odos API.
   *
   * @tags Odos
   * @name OdosGetExecutorAddress
   * @request GET:/odos/executor-address
   * @secure
   */
  odosGetExecutorAddress = (
    query: OdosGetExecutorAddressParams,
    params: RequestParams = {}
  ) =>
    this.http.request<OdosGetExecutorAddressData, any>({
      path: `/odos/executor-address`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves limit orders for a given account.
   *
   * @tags Odos
   * @name OdosGetLimitOrders
   * @request GET:/odos/{accountName}/limit-orders
   * @secure
   */
  odosGetLimitOrders = (
    { accountName, ...query }: OdosGetLimitOrdersParams,
    params: RequestParams = {}
  ) =>
    this.http.request<OdosGetLimitOrdersData, any>({
      path: `/odos/${accountName}/limit-orders`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves liquidity sources for a given chain ID.
   *
   * @tags Odos
   * @name OdosGetLiquiditySources
   * @request GET:/odos/liquidity-sources
   * @secure
   */
  odosGetLiquiditySources = (
    query: OdosGetLiquiditySourcesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<OdosGetLiquiditySourcesData, any>({
      path: `/odos/liquidity-sources`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves a quote for a given account and input body.
   *
   * @tags Odos
   * @name OdosGetQuote
   * @request POST:/odos/{accountName}/get-quote
   * @secure
   */
  odosGetQuote = (
    accountName: string,
    data: OdosSwapInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<OdosGetQuoteData, any>({
      path: `/odos/${accountName}/get-quote`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the router address for the specified version and chain ID.
   *
   * @tags Odos
   * @name OdosGetRouterAddress
   * @request GET:/odos/router-address
   * @secure
   */
  odosGetRouterAddress = (
    query: OdosGetRouterAddressParams,
    params: RequestParams = {}
  ) =>
    this.http.request<OdosGetRouterAddressData, any>({
      path: `/odos/router-address`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the supported blockchain networks from the Odos API.
   *
   * @tags Odos
   * @name OdosGetSupportedChains
   * @request GET:/odos/supported-chains
   * @secure
   */
  odosGetSupportedChains = (params: RequestParams = {}) =>
    this.http.request<OdosGetSupportedChainsData, any>({
      path: `/odos/supported-chains`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the supported tokens for a given blockchain network.
   *
   * @tags Odos
   * @name OdosGetSupportedTokens
   * @request GET:/odos/supported-tokens
   * @secure
   */
  odosGetSupportedTokens = (
    query: OdosGetSupportedTokensParams,
    params: RequestParams = {}
  ) =>
    this.http.request<OdosGetSupportedTokensData, any>({
      path: `/odos/supported-tokens`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Logs in a user to the Odos platform.
   *
   * @tags Odos
   * @name OdosLogin
   * @request POST:/odos/{accountName}/login
   * @secure
   */
  odosLogin = (
    { accountName, ...query }: OdosLoginParams,
    params: RequestParams = {}
  ) =>
    this.http.request<OdosLoginData, any>({
      path: `/odos/${accountName}/login`,
      method: 'POST',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Handles the swap operation for the given account.
   *
   * @tags Odos
   * @name OdosSwapTokens
   * @request POST:/odos/{accountName}/swap
   * @secure
   */
  odosSwapTokens = (
    accountName: string,
    data: OdosSwapInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<OdosSwapTokensData, any>({
      path: `/odos/${accountName}/swap`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Odos
   * @name Zap
   * @request POST:/odos/{accountName}/zap
   * @secure
   */
  zap = (
    accountName: string,
    data: OdosSwapInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ZapData, any>({
      path: `/odos/${accountName}/zap`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
