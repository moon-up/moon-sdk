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

import { AccountControllerResponse, InputBody } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Erc4337<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Erc4337
   * @name GetAddress
   * @request POST:/erc4337/{accountName}/address
   * @secure
   */
  getAddress = (
    accountName: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc4337/${accountName}/address`,
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
   * @tags Erc4337
   * @name SignBroadcastUserOpTx
   * @request POST:/erc4337/{accountName}/sign-broadcast-userop-tx
   * @secure
   */
  signBroadcastUserOpTx = (
    accountName: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc4337/${accountName}/sign-broadcast-userop-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
