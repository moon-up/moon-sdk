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
  AavePoolInputBody,
  BorrowData,
  GetReserveDataData,
  GetReserveDataParams,
  GetUserAccountDataData,
  GetUserAccountDataParams,
  LiquidationCallData,
  RepayData,
  SetUserUseReserveAsCollateralData,
  SupplyData,
  WithdrawData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Aavepool<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags AAVEv3 Pool
   * @name Borrow
   * @request POST:/aavepool/{address}/borrow
   * @secure
   */
  borrow = (
    address: string,
    data: AavePoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<BorrowData, any>({
      path: `/aavepool/${address}/borrow`,
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
   * @tags AAVEv3 Pool
   * @name GetReserveData
   * @request GET:/aavepool/{account}/getReserveData
   * @secure
   */
  getReserveData = (
    { account, ...query }: GetReserveDataParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetReserveDataData, any>({
      path: `/aavepool/${account}/getReserveData`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags AAVEv3 Pool
   * @name GetUserAccountData
   * @request GET:/aavepool/{account}/getUserAccountData
   * @secure
   */
  getUserAccountData = (
    { account, ...query }: GetUserAccountDataParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetUserAccountDataData, any>({
      path: `/aavepool/${account}/getUserAccountData`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags AAVEv3 Pool
   * @name LiquidationCall
   * @request POST:/aavepool/{address}/liquidationCall
   * @secure
   */
  liquidationCall = (
    address: string,
    data: AavePoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LiquidationCallData, any>({
      path: `/aavepool/${address}/liquidationCall`,
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
   * @tags AAVEv3 Pool
   * @name Repay
   * @request POST:/aavepool/{address}/repay
   * @secure
   */
  repay = (
    address: string,
    data: AavePoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<RepayData, any>({
      path: `/aavepool/${address}/repay`,
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
   * @tags AAVEv3 Pool
   * @name SetUserUseReserveAsCollateral
   * @request POST:/aavepool/{address}/setUserUseReserveAsCollateral
   * @secure
   */
  setUserUseReserveAsCollateral = (
    address: string,
    data: AavePoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SetUserUseReserveAsCollateralData, any>({
      path: `/aavepool/${address}/setUserUseReserveAsCollateral`,
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
   * @tags AAVEv3 Pool
   * @name Supply
   * @request POST:/aavepool/{address}/supply
   * @secure
   */
  supply = (
    address: string,
    data: AavePoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SupplyData, any>({
      path: `/aavepool/${address}/supply`,
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
   * @tags AAVEv3 Pool
   * @name Withdraw
   * @request POST:/aavepool/{address}/withdraw
   * @secure
   */
  withdraw = (
    address: string,
    data: AavePoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<WithdrawData, any>({
      path: `/aavepool/${address}/withdraw`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
