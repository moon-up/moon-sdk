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
  ENSReverseResolveInput,
  EnsResolveData,
  EnsResolveInput,
  EnsReverseResolveData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Ens<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Resolves an ENS (Ethereum Name Service) name to its corresponding address.
   *
   * @tags ENS
   * @name EnsResolve
   * @request POST:/ens/resolve
   * @secure
   */
  ensResolve = (data: EnsResolveInput, params: RequestParams = {}) =>
    this.http.request<EnsResolveData, any>({
      path: `/ens/resolve`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Resolves an ENS (Ethereum Name Service) address to its corresponding name.
   *
   * @tags ENS
   * @name EnsReverseResolve
   * @request POST:/ens/reverse
   * @secure
   */
  ensReverseResolve = (
    data: ENSReverseResolveInput,
    params: RequestParams = {}
  ) =>
    this.http.request<EnsReverseResolveData, any>({
      path: `/ens/reverse`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
