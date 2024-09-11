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

import { GetMessageData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Ping<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @name GetMessage
   * @request GET:/ping
   */
  getMessage = (params: RequestParams = {}) =>
    this.http.request<GetMessageData, any>({
      path: `/ping`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
