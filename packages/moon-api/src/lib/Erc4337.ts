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
  GetAddressData,
  InputBody,
  SignBroadcastUserOpTxData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Erc4337<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

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
    this.http.request<GetAddressData, any>({
      path: `/erc4337/${accountName}/address`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
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
    this.http.request<SignBroadcastUserOpTxData, any>({
      path: `/erc4337/${accountName}/sign-broadcast-userop-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
