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
  BalanceOfResult,
  Erc721Request,
  GetApprovedData,
  IsApprovedForAllResult,
  NameData,
  OwnerOfData,
  SafeTransferFromResult,
  SetApprovalForAllResult,
  SymbolData,
  TokenUriData,
  TransferData,
  TransferFromData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Erc721<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Erc721
   * @name Approve
   * @request POST:/erc721/{name}/approve
   * @secure
   */
  approve = (name: string, data: Erc721Request, params: RequestParams = {}) =>
    this.http.request<ApproveData, any>({
      path: `/erc721/${name}/approve`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Erc721
   * @name BalanceOf
   * @request POST:/erc721/{name}/balance-of
   * @secure
   */
  balanceOf = (name: string, data: Erc721Request, params: RequestParams = {}) =>
    this.http.request<BalanceOfResult, any>({
      path: `/erc721/${name}/balance-of`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Erc721
   * @name GetApproved
   * @request POST:/erc721/{name}/get-approved
   * @secure
   */
  getApproved = (
    name: string,
    data: Erc721Request,
    params: RequestParams = {}
  ) =>
    this.http.request<GetApprovedData, any>({
      path: `/erc721/${name}/get-approved`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Erc721
   * @name IsApprovedForAll
   * @request POST:/erc721/{name}/is-approved-for-all
   * @secure
   */
  isApprovedForAll = (
    name: string,
    data: Erc721Request,
    params: RequestParams = {}
  ) =>
    this.http.request<IsApprovedForAllResult, any>({
      path: `/erc721/${name}/is-approved-for-all`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Erc721
   * @name Name
   * @request POST:/erc721/{name}/name
   * @secure
   */
  name = (name: string, data: Erc721Request, params: RequestParams = {}) =>
    this.http.request<NameData, any>({
      path: `/erc721/${name}/name`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Erc721
   * @name OwnerOf
   * @request POST:/erc721/{name}/owner-of
   * @secure
   */
  ownerOf = (name: string, data: Erc721Request, params: RequestParams = {}) =>
    this.http.request<OwnerOfData, any>({
      path: `/erc721/${name}/owner-of`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Erc721
   * @name SafeTransferFrom
   * @request POST:/erc721/{name}/safe-transfer-from
   * @secure
   */
  safeTransferFrom = (
    name: string,
    data: Erc721Request,
    params: RequestParams = {}
  ) =>
    this.http.request<SafeTransferFromResult, any>({
      path: `/erc721/${name}/safe-transfer-from`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Erc721
   * @name SetApprovalForAll
   * @request POST:/erc721/{name}/set-approval-for-all
   * @secure
   */
  setApprovalForAll = (
    name: string,
    data: Erc721Request,
    params: RequestParams = {}
  ) =>
    this.http.request<SetApprovalForAllResult, any>({
      path: `/erc721/${name}/set-approval-for-all`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Erc721
   * @name Symbol
   * @request POST:/erc721/{name}/symbol
   * @secure
   */
  symbol = (name: string, data: Erc721Request, params: RequestParams = {}) =>
    this.http.request<SymbolData, any>({
      path: `/erc721/${name}/symbol`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Erc721
   * @name TokenUri
   * @request POST:/erc721/{name}/token-uri
   * @secure
   */
  tokenUri = (name: string, data: Erc721Request, params: RequestParams = {}) =>
    this.http.request<TokenUriData, any>({
      path: `/erc721/${name}/token-uri`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Erc721
   * @name Transfer
   * @request POST:/erc721/{name}/transfer
   * @secure
   */
  transfer = (name: string, data: Erc721Request, params: RequestParams = {}) =>
    this.http.request<TransferData, any>({
      path: `/erc721/${name}/transfer`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Erc721
   * @name TransferFrom
   * @request POST:/erc721/{name}/transfer-from
   * @secure
   */
  transferFrom = (
    name: string,
    data: Erc721Request,
    params: RequestParams = {}
  ) =>
    this.http.request<TransferFromData, any>({
      path: `/erc721/${name}/transfer-from`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
