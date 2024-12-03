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
  MakeFunTokenGetClFactoryData,
  MakeFunTokenGetClFactoryParams,
  MakeFunTokenGetMaxTickData,
  MakeFunTokenGetMaxTickParams,
  MakeFunTokenGetMinTickData,
  MakeFunTokenGetMinTickParams,
  MakeFunTokenHelperInputBody,
  MakeFunTokenMakeTokenData,
  MakeFunTokenSetSupplyLimitsData,
  MakeFunTokenSetTickLimitsData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Makefuntoken<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags MakeFunToken
   * @name MakeFunTokenGetClFactory
   * @request GET:/makefuntoken/{account}/CLFactory
   * @secure
   */
  makeFunTokenGetClFactory = (
    { account, ...query }: MakeFunTokenGetClFactoryParams,
    params: RequestParams = {}
  ) =>
    this.http.request<MakeFunTokenGetClFactoryData, any>({
      path: `/makefuntoken/${account}/CLFactory`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags MakeFunToken
   * @name MakeFunTokenGetMaxTick
   * @request GET:/makefuntoken/{account}/maxTick
   * @secure
   */
  makeFunTokenGetMaxTick = (
    { account, ...query }: MakeFunTokenGetMaxTickParams,
    params: RequestParams = {}
  ) =>
    this.http.request<MakeFunTokenGetMaxTickData, any>({
      path: `/makefuntoken/${account}/maxTick`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags MakeFunToken
   * @name MakeFunTokenGetMinTick
   * @request GET:/makefuntoken/{account}/minTick
   * @secure
   */
  makeFunTokenGetMinTick = (
    { account, ...query }: MakeFunTokenGetMinTickParams,
    params: RequestParams = {}
  ) =>
    this.http.request<MakeFunTokenGetMinTickData, any>({
      path: `/makefuntoken/${account}/minTick`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags MakeFunToken
   * @name MakeFunTokenMakeToken
   * @request POST:/makefuntoken/{address}/makeToken
   * @secure
   */
  makeFunTokenMakeToken = (
    address: string,
    data: MakeFunTokenHelperInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<MakeFunTokenMakeTokenData, any>({
      path: `/makefuntoken/${address}/makeToken`,
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
   * @tags MakeFunToken
   * @name MakeFunTokenSetSupplyLimits
   * @request POST:/makefuntoken/{address}/setSupplyLimits
   * @secure
   */
  makeFunTokenSetSupplyLimits = (
    address: string,
    data: MakeFunTokenHelperInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<MakeFunTokenSetSupplyLimitsData, any>({
      path: `/makefuntoken/${address}/setSupplyLimits`,
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
   * @tags MakeFunToken
   * @name MakeFunTokenSetTickLimits
   * @request POST:/makefuntoken/{address}/setTickLimits
   * @secure
   */
  makeFunTokenSetTickLimits = (
    address: string,
    data: MakeFunTokenHelperInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<MakeFunTokenSetTickLimitsData, any>({
      path: `/makefuntoken/${address}/setTickLimits`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
