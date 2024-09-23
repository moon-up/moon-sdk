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
  GetAclAdminData,
  GetAclAdminParams,
  GetAclManagerData,
  GetAclManagerParams,
  GetAddressData,
  GetAddressParams,
  GetMarketIdData,
  GetMarketIdParams,
  GetPoolConfiguratorData,
  GetPoolConfiguratorParams,
  GetPoolData,
  GetPoolParams,
  GetPriceOracleData,
  GetPriceOracleParams,
  PoolAddressProviderInputBody,
  SetAclAdminData,
  SetAclManagerData,
  SetAddressData,
  SetMarketIdData,
  SetPoolConfiguratorImplData,
  SetPoolImplData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class PoolAddressProvider<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Pool Address Provider
   * @name GetAclAdmin
   * @request GET:/poolAddressProvider/{account}/getACLAdmin
   * @secure
   */
  getAclAdmin = (
    { account, ...query }: GetAclAdminParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAclAdminData, any>({
      path: `/poolAddressProvider/${account}/getACLAdmin`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Pool Address Provider
   * @name GetAclManager
   * @request GET:/poolAddressProvider/{account}/getACLManager
   * @secure
   */
  getAclManager = (
    { account, ...query }: GetAclManagerParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAclManagerData, any>({
      path: `/poolAddressProvider/${account}/getACLManager`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Pool Address Provider
   * @name GetAddress
   * @request GET:/poolAddressProvider/{account}/getAddress
   * @secure
   */
  getAddress = (
    { account, ...query }: GetAddressParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAddressData, any>({
      path: `/poolAddressProvider/${account}/getAddress`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Pool Address Provider
   * @name GetMarketId
   * @request GET:/poolAddressProvider/{account}/getMarketId
   * @secure
   */
  getMarketId = (
    { account, ...query }: GetMarketIdParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetMarketIdData, any>({
      path: `/poolAddressProvider/${account}/getMarketId`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Pool Address Provider
   * @name GetPool
   * @request GET:/poolAddressProvider/{account}/getPool
   * @secure
   */
  getPool = (
    { account, ...query }: GetPoolParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetPoolData, any>({
      path: `/poolAddressProvider/${account}/getPool`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Pool Address Provider
   * @name GetPoolConfigurator
   * @request GET:/poolAddressProvider/{account}/getPoolConfigurator
   * @secure
   */
  getPoolConfigurator = (
    { account, ...query }: GetPoolConfiguratorParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetPoolConfiguratorData, any>({
      path: `/poolAddressProvider/${account}/getPoolConfigurator`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Pool Address Provider
   * @name GetPriceOracle
   * @request GET:/poolAddressProvider/{account}/getPriceOracle
   * @secure
   */
  getPriceOracle = (
    { account, ...query }: GetPriceOracleParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetPriceOracleData, any>({
      path: `/poolAddressProvider/${account}/getPriceOracle`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Pool Address Provider
   * @name SetAclAdmin
   * @request POST:/poolAddressProvider/{address}/setACLAdmin
   * @secure
   */
  setAclAdmin = (
    address: string,
    data: PoolAddressProviderInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SetAclAdminData, any>({
      path: `/poolAddressProvider/${address}/setACLAdmin`,
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
   * @tags Pool Address Provider
   * @name SetAclManager
   * @request POST:/poolAddressProvider/{address}/setACLManager
   * @secure
   */
  setAclManager = (
    address: string,
    data: PoolAddressProviderInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SetAclManagerData, any>({
      path: `/poolAddressProvider/${address}/setACLManager`,
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
   * @tags Pool Address Provider
   * @name SetAddress
   * @request POST:/poolAddressProvider/{address}/setAddress
   * @secure
   */
  setAddress = (
    address: string,
    data: PoolAddressProviderInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SetAddressData, any>({
      path: `/poolAddressProvider/${address}/setAddress`,
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
   * @tags Pool Address Provider
   * @name SetMarketId
   * @request POST:/poolAddressProvider/{address}/setMarketId
   * @secure
   */
  setMarketId = (
    address: string,
    data: PoolAddressProviderInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SetMarketIdData, any>({
      path: `/poolAddressProvider/${address}/setMarketId`,
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
   * @tags Pool Address Provider
   * @name SetPoolConfiguratorImpl
   * @request POST:/poolAddressProvider/{address}/setPoolConfiguratorImpl
   * @secure
   */
  setPoolConfiguratorImpl = (
    address: string,
    data: PoolAddressProviderInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SetPoolConfiguratorImplData, any>({
      path: `/poolAddressProvider/${address}/setPoolConfiguratorImpl`,
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
   * @tags Pool Address Provider
   * @name SetPoolImpl
   * @request POST:/poolAddressProvider/{address}/setPoolImpl
   * @secure
   */
  setPoolImpl = (
    address: string,
    data: PoolAddressProviderInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SetPoolImplData, any>({
      path: `/poolAddressProvider/${address}/setPoolImpl`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
