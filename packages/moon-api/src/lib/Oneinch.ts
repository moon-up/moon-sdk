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
  ApproveCallDataData,
  ApproveCallDataPayload,
  ApproveSpenderData,
  ApproveSpenderPayload,
  GetSwapDto,
  ProtocolsData,
  ProtocolsPayload,
  QuoteData,
  QuotePayload,
  SwapData,
  TokensData,
  TokensPayload,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Oneinch<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags oneinch
   * @name ApproveCallData
   * @request POST:/oneinch/approve-call-data
   * @secure
   */
  approveCallData = (
    data: ApproveCallDataPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<ApproveCallDataData, any>({
      path: `/oneinch/approve-call-data`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags oneinch
   * @name ApproveSpender
   * @request POST:/oneinch/approve-spender
   * @secure
   */
  approveSpender = (data: ApproveSpenderPayload, params: RequestParams = {}) =>
    this.http.request<ApproveSpenderData, any>({
      path: `/oneinch/approve-spender`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags oneinch
   * @name Protocols
   * @request POST:/oneinch/protocols
   * @secure
   */
  protocols = (data: ProtocolsPayload, params: RequestParams = {}) =>
    this.http.request<ProtocolsData, any>({
      path: `/oneinch/protocols`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags oneinch
   * @name Quote
   * @request POST:/oneinch/quote
   * @secure
   */
  quote = (data: QuotePayload, params: RequestParams = {}) =>
    this.http.request<QuoteData, any>({
      path: `/oneinch/quote`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags oneinch
   * @name Swap
   * @request POST:/oneinch/{accountName}/swap
   * @secure
   */
  swap = (accountName: string, data: GetSwapDto, params: RequestParams = {}) =>
    this.http.request<SwapData, any>({
      path: `/oneinch/${accountName}/swap`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags oneinch
   * @name Tokens
   * @request POST:/oneinch/tokens
   * @secure
   */
  tokens = (data: TokensPayload, params: RequestParams = {}) =>
    this.http.request<TokensData, any>({
      path: `/oneinch/tokens`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
