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

import { PingResponse } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Ping<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name GetMessage
   * @request GET:/ping
   */
  getMessage = (params: RequestParams = {}) =>
    this.request<PingResponse, any>({
      path: `/ping`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
