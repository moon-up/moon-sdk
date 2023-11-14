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

export class Erc20<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Erc20
   * @name NameErc20
   * @request POST:/erc20/{name}/name
   * @secure
   */
  nameErc20 = (name: string, data: InputBody, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc20/${name}/name`,
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
   * @tags Erc20
   * @name SymbolErc20
   * @request POST:/erc20/{name}/symbol
   * @secure
   */
  symbolErc20 = (name: string, data: InputBody, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc20/${name}/symbol`,
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
   * @tags Erc20
   * @name DecimalsErc20
   * @request POST:/erc20/{name}/decimals
   * @secure
   */
  decimalsErc20 = (name: string, data: InputBody, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc20/${name}/decimals`,
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
   * @tags Erc20
   * @name TotalSupplyErc20
   * @request POST:/erc20/{name}/total-supply
   * @secure
   */
  totalSupplyErc20 = (
    name: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc20/${name}/total-supply`,
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
   * @tags Erc20
   * @name BalanceOfErc20
   * @request POST:/erc20/{name}/balance-of
   * @secure
   */
  balanceOfErc20 = (
    name: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc20/${name}/balance-of`,
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
   * @tags Erc20
   * @name AllowanceErc20
   * @request POST:/erc20/{name}/allowance
   * @secure
   */
  allowanceErc20 = (
    name: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc20/${name}/allowance`,
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
   * @tags Erc20
   * @name TransferErc20
   * @request POST:/erc20/{name}/transfer
   * @secure
   */
  transferErc20 = (name: string, data: InputBody, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc20/${name}/transfer`,
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
   * @tags Erc20
   * @name ApproveErc20
   * @request POST:/erc20/{name}/approve
   * @secure
   */
  approveErc20 = (name: string, data: InputBody, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc20/${name}/approve`,
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
   * @tags Erc20
   * @name TransferFromErc20
   * @request POST:/erc20/{name}/transfer-from
   * @secure
   */
  transferFromErc20 = (
    name: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc20/${name}/transfer-from`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
