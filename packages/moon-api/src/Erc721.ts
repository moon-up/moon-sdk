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

import { AccountControllerResponse, Erc721Request } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Erc721<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Erc721
   * @name TokenUri
   * @request POST:/erc721/{name}/token-uri
   */
  tokenUri = (name: string, data: Erc721Request, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc721/${name}/token-uri`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Erc721
   * @name Transfer
   * @request POST:/erc721/{name}/transfer
   */
  transfer = (name: string, data: Erc721Request, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc721/${name}/transfer`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Erc721
   * @name TransferFrom
   * @request POST:/erc721/{name}/transfer-from
   */
  transferFrom = (name: string, data: Erc721Request, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc721/${name}/transfer-from`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Erc721
   * @name Approve
   * @request POST:/erc721/{name}/approve
   */
  approve = (name: string, data: Erc721Request, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc721/${name}/approve`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Erc721
   * @name GetApproved
   * @request POST:/erc721/{name}/get-approved
   */
  getApproved = (name: string, data: Erc721Request, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc721/${name}/get-approved`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Erc721
   * @name IsApprovedForAll
   * @request POST:/erc721/{name}/is-approved-for-all
   */
  isApprovedForAll = (name: string, data: Erc721Request, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc721/${name}/is-approved-for-all`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Erc721
   * @name Name
   * @request POST:/erc721/{name}/name
   */
  name = (name: string, data: Erc721Request, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc721/${name}/name`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Erc721
   * @name Symbol
   * @request POST:/erc721/{name}/symbol
   */
  symbol = (name: string, data: Erc721Request, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc721/${name}/symbol`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Erc721
   * @name BalanceOf
   * @request POST:/erc721/{name}/balance-of
   */
  balanceOf = (name: string, data: Erc721Request, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc721/${name}/balance-of`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Erc721
   * @name OwnerOf
   * @request POST:/erc721/{name}/owner-of
   */
  ownerOf = (name: string, data: Erc721Request, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc721/${name}/owner-of`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Erc721
   * @name SafeTransferFrom
   * @request POST:/erc721/{name}/safe-transfer-from
   */
  safeTransferFrom = (name: string, data: Erc721Request, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc721/${name}/safe-transfer-from`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Erc721
   * @name SetApprovalForAll
   * @request POST:/erc721/{name}/set-approval-for-all
   */
  setApprovalForAll = (name: string, data: Erc721Request, params: RequestParams = {}) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc721/${name}/set-approval-for-all`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
