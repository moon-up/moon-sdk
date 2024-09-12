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
  DepositData,
  GetAssetData,
  GetAssetParams,
  GetConvertToAssetsData,
  GetConvertToAssetsParams,
  GetConvertToSharesData,
  GetConvertToSharesParams,
  GetMaxDepositData,
  GetMaxDepositParams,
  GetTotalAssetsData,
  GetTotalAssetsParams,
  InputBody,
  WithdrawResult,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Erc4626<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ERC4626
   * @name Deposit
   * @request POST:/erc4626/{address}/deposit
   * @secure
   */
  deposit = (address: string, data: InputBody, params: RequestParams = {}) =>
    this.http.request<DepositData, any>({
      path: `/erc4626/${address}/deposit`,
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
   * @tags ERC4626
   * @name GetAsset
   * @request GET:/erc4626/{account}/asset
   * @secure
   */
  getAsset = (
    { account, ...query }: GetAssetParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAssetData, any>({
      path: `/erc4626/${account}/asset`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name GetConvertToAssets
   * @request GET:/erc4626/{account}/convertToAssets
   * @secure
   */
  getConvertToAssets = (
    { account, ...query }: GetConvertToAssetsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetConvertToAssetsData, any>({
      path: `/erc4626/${account}/convertToAssets`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name GetConvertToShares
   * @request GET:/erc4626/{account}/convertToShares
   * @secure
   */
  getConvertToShares = (
    { account, ...query }: GetConvertToSharesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetConvertToSharesData, any>({
      path: `/erc4626/${account}/convertToShares`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name GetMaxDeposit
   * @request GET:/erc4626/{account}/maxDeposit
   * @secure
   */
  getMaxDeposit = (
    { account, ...query }: GetMaxDepositParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetMaxDepositData, any>({
      path: `/erc4626/${account}/maxDeposit`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name GetTotalAssets
   * @request GET:/erc4626/{account}/totalAssets
   * @secure
   */
  getTotalAssets = (
    { account, ...query }: GetTotalAssetsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetTotalAssetsData, any>({
      path: `/erc4626/${account}/totalAssets`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name Withdraw
   * @request POST:/erc4626/{address}/withdraw
   * @secure
   */
  withdraw = (address: string, data: InputBody, params: RequestParams = {}) =>
    this.http.request<WithdrawResult, any>({
      path: `/erc4626/${address}/withdraw`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
