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
  ApproveData,
  ERC20InputBody,
  GetAllowanceData,
  GetAllowanceParams,
  GetBalanceOfData,
  GetBalanceOfParams,
  GetDecimalsData,
  GetDecimalsParams,
  GetNameData,
  GetNameParams,
  GetSymbolData,
  GetSymbolParams,
  GetTotalSupplyData,
  GetTotalSupplyParams,
  TransferData,
  TransferFromData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Erc20<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ERC20
   * @name Approve
   * @request POST:/erc20/{address}/approve
   * @secure
   */
  approve = (
    address: string,
    data: ERC20InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ApproveData, any>({
      path: `/erc20/${address}/approve`,
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
   * @tags ERC20
   * @name GetAllowance
   * @request GET:/erc20/{account}/allowance
   * @secure
   */
  getAllowance = (
    { account, ...query }: GetAllowanceParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAllowanceData, any>({
      path: `/erc20/${account}/allowance`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC20
   * @name GetBalanceOf
   * @request GET:/erc20/{account}/balanceOf
   * @secure
   */
  getBalanceOf = (
    { account, ...query }: GetBalanceOfParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetBalanceOfData, any>({
      path: `/erc20/${account}/balanceOf`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC20
   * @name GetDecimals
   * @request GET:/erc20/{account}/decimals
   * @secure
   */
  getDecimals = (
    { account, ...query }: GetDecimalsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetDecimalsData, any>({
      path: `/erc20/${account}/decimals`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC20
   * @name GetName
   * @request GET:/erc20/{account}/name
   * @secure
   */
  getName = (
    { account, ...query }: GetNameParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetNameData, any>({
      path: `/erc20/${account}/name`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC20
   * @name GetSymbol
   * @request GET:/erc20/{account}/symbol
   * @secure
   */
  getSymbol = (
    { account, ...query }: GetSymbolParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetSymbolData, any>({
      path: `/erc20/${account}/symbol`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC20
   * @name GetTotalSupply
   * @request GET:/erc20/{account}/totalSupply
   * @secure
   */
  getTotalSupply = (
    { account, ...query }: GetTotalSupplyParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetTotalSupplyData, any>({
      path: `/erc20/${account}/totalSupply`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC20
   * @name Transfer
   * @request POST:/erc20/{address}/transfer
   * @secure
   */
  transfer = (
    address: string,
    data: ERC20InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<TransferData, any>({
      path: `/erc20/${address}/transfer`,
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
   * @tags ERC20
   * @name TransferFrom
   * @request POST:/erc20/{address}/transferFrom
   * @secure
   */
  transferFrom = (
    address: string,
    data: ERC20InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<TransferFromData, any>({
      path: `/erc20/${address}/transferFrom`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
