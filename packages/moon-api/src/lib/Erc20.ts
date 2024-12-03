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
  ERC20InputBody,
  Erc20ApproveErc20TokenSpendingData,
  Erc20GetErc20TokenAllowanceData,
  Erc20GetErc20TokenAllowanceParams,
  Erc20GetErc20TokenBalanceData,
  Erc20GetErc20TokenBalanceParams,
  Erc20GetErc20TokenDecimalsData,
  Erc20GetErc20TokenDecimalsParams,
  Erc20GetErc20TokenNameData,
  Erc20GetErc20TokenNameParams,
  Erc20GetErc20TokenSymbolData,
  Erc20GetErc20TokenSymbolParams,
  Erc20GetErc20TokenTotalSupplyData,
  Erc20GetErc20TokenTotalSupplyParams,
  Erc20TransferErc20TokenData,
  Erc20TransferFromErc20TokenData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Erc20<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Approves a specified address to spend tokens on behalf of the user.
   *
   * @tags ERC20
   * @name Erc20ApproveErc20TokenSpending
   * @request POST:/erc20/{address}/approve
   * @secure
   */
  erc20ApproveErc20TokenSpending = (
    address: string,
    data: ERC20InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc20ApproveErc20TokenSpendingData, any>({
      path: `/erc20/${address}/approve`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the allowance of a specified ERC20 token for a given owner and spender.
   *
   * @tags ERC20
   * @name Erc20GetErc20TokenAllowance
   * @request GET:/erc20/{account}/allowance
   * @secure
   */
  erc20GetErc20TokenAllowance = (
    { account, ...query }: Erc20GetErc20TokenAllowanceParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc20GetErc20TokenAllowanceData, any>({
      path: `/erc20/${account}/allowance`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the balance of a specified ERC20 token for a given account.
   *
   * @tags ERC20
   * @name Erc20GetErc20TokenBalance
   * @request GET:/erc20/{account}/balanceOf
   * @secure
   */
  erc20GetErc20TokenBalance = (
    { account, ...query }: Erc20GetErc20TokenBalanceParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc20GetErc20TokenBalanceData, any>({
      path: `/erc20/${account}/balanceOf`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the number of decimals for the provided ERC20 token.
   *
   * @tags ERC20
   * @name Erc20GetErc20TokenDecimals
   * @request GET:/erc20/{account}/decimals
   * @secure
   */
  erc20GetErc20TokenDecimals = (
    { account, ...query }: Erc20GetErc20TokenDecimalsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc20GetErc20TokenDecimalsData, any>({
      path: `/erc20/${account}/decimals`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the name of an ERC20 token.
   *
   * @tags ERC20
   * @name Erc20GetErc20TokenName
   * @request GET:/erc20/{account}/name
   * @secure
   */
  erc20GetErc20TokenName = (
    { account, ...query }: Erc20GetErc20TokenNameParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc20GetErc20TokenNameData, any>({
      path: `/erc20/${account}/name`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the symbol of an ERC20 token.
   *
   * @tags ERC20
   * @name Erc20GetErc20TokenSymbol
   * @request GET:/erc20/{account}/symbol
   * @secure
   */
  erc20GetErc20TokenSymbol = (
    { account, ...query }: Erc20GetErc20TokenSymbolParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc20GetErc20TokenSymbolData, any>({
      path: `/erc20/${account}/symbol`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the total supply of an ERC20 token.
   *
   * @tags ERC20
   * @name Erc20GetErc20TokenTotalSupply
   * @request GET:/erc20/{account}/totalSupply
   * @secure
   */
  erc20GetErc20TokenTotalSupply = (
    { account, ...query }: Erc20GetErc20TokenTotalSupplyParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc20GetErc20TokenTotalSupplyData, any>({
      path: `/erc20/${account}/totalSupply`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Transfers ERC20 tokens to a specified address.
   *
   * @tags ERC20
   * @name Erc20TransferErc20Token
   * @request POST:/erc20/{address}/transfer
   * @secure
   */
  erc20TransferErc20Token = (
    address: string,
    data: ERC20InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc20TransferErc20TokenData, any>({
      path: `/erc20/${address}/transfer`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Transfers tokens from one address to another.
   *
   * @tags ERC20
   * @name Erc20TransferFromErc20Token
   * @request POST:/erc20/{address}/transferFrom
   * @secure
   */
  erc20TransferFromErc20Token = (
    address: string,
    data: ERC20InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc20TransferFromErc20TokenData, any>({
      path: `/erc20/${address}/transferFrom`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
