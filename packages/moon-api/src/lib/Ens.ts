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

import { EnsResolveInput, ResolveData } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Ens<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ENS
   * @name Resolve
   * @request POST:/ens/resolve
   * @secure
   */
  resolve = (data: EnsResolveInput, params: RequestParams = {}) =>
    this.http.request<ResolveData, any>({
      path: `/ens/resolve`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
