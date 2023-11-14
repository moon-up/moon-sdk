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

import { GetSwapDto } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Oneinch<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags oneinch
   * @name Tokens
   * @request POST:/oneinch/tokens
   * @secure
   */
  tokens = (data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/oneinch/tokens`,
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
   * @tags oneinch
   * @name Protocols
   * @request POST:/oneinch/protocols
   * @secure
   */
  protocols = (data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/oneinch/protocols`,
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
   * @tags oneinch
   * @name Quote
   * @request POST:/oneinch/quote
   * @secure
   */
  quote = (data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/oneinch/quote`,
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
   * @tags oneinch
   * @name Swap
   * @request POST:/oneinch/{accountName}/swap
   * @secure
   */
  swap = (accountName: string, data: GetSwapDto, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/oneinch/${accountName}/swap`,
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
   * @tags oneinch
   * @name ApproveSpender
   * @request POST:/oneinch/approve-spender
   * @secure
   */
  approveSpender = (data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/oneinch/approve-spender`,
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
   * @tags oneinch
   * @name ApproveCallData
   * @request POST:/oneinch/approve-call-data
   * @secure
   */
  approveCallData = (data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/oneinch/approve-call-data`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
