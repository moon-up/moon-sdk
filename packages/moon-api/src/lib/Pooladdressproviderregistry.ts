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
  GetATokenTotalSupplyData,
  GetATokenTotalSupplyParams,
  GetAddressesProviderData,
  GetAddressesProviderParams,
  GetAllATokensData,
  GetAllATokensParams,
  GetAllReservesTokensData,
  GetAllReservesTokensParams,
  GetDebtCeilingData,
  GetDebtCeilingParams,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Pooladdressproviderregistry<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags PoolAddressProviderRegistry
   * @name GetAddressesProvider
   * @request GET:/pooladdressproviderregistry/{account}/getAddressesProvider
   * @secure
   */
  getAddressesProvider = (
    { account, ...query }: GetAddressesProviderParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAddressesProviderData, any>({
      path: `/pooladdressproviderregistry/${account}/getAddressesProvider`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags PoolAddressProviderRegistry
   * @name GetAllATokens
   * @request GET:/pooladdressproviderregistry/{account}/getAllATokens
   * @secure
   */
  getAllATokens = (
    { account, ...query }: GetAllATokensParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAllATokensData, any>({
      path: `/pooladdressproviderregistry/${account}/getAllATokens`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags PoolAddressProviderRegistry
   * @name GetAllReservesTokens
   * @request GET:/pooladdressproviderregistry/{account}/getAllReservesTokens
   * @secure
   */
  getAllReservesTokens = (
    { account, ...query }: GetAllReservesTokensParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAllReservesTokensData, any>({
      path: `/pooladdressproviderregistry/${account}/getAllReservesTokens`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags PoolAddressProviderRegistry
   * @name GetATokenTotalSupply
   * @request GET:/pooladdressproviderregistry/{account}/getATokenTotalSupply
   * @secure
   */
  getATokenTotalSupply = (
    { account, ...query }: GetATokenTotalSupplyParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetATokenTotalSupplyData, any>({
      path: `/pooladdressproviderregistry/${account}/getATokenTotalSupply`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags PoolAddressProviderRegistry
   * @name GetDebtCeiling
   * @request GET:/pooladdressproviderregistry/{account}/getDebtCeiling
   * @secure
   */
  getDebtCeiling = (
    { account, ...query }: GetDebtCeilingParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetDebtCeilingData, any>({
      path: `/pooladdressproviderregistry/${account}/getDebtCeiling`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
}
