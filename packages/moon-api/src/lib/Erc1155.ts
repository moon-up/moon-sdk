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

import { AccountControllerResponse, Erc1155Request } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Erc1155<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags ERC1155
   * @name BalanceOf
   * @request POST:/erc1155/{name}/balance-of
   * @secure
   */
  balanceOf = (
    name: string,
    data: Erc1155Request,
    params: RequestParams = {}
  ) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc1155/${name}/balance-of`,
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
   * @tags ERC1155
   * @name BalanceOfBatch
   * @request POST:/erc1155/{name}/balance-of-batch
   * @secure
   */
  balanceOfBatch = (
    name: string,
    data: Erc1155Request,
    params: RequestParams = {}
  ) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc1155/${name}/balance-of-batch`,
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
   * @tags ERC1155
   * @name SetApprovalForAll
   * @request POST:/erc1155/{name}/set-approval-for-all
   * @secure
   */
  setApprovalForAll = (
    name: string,
    data: Erc1155Request,
    params: RequestParams = {}
  ) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc1155/${name}/set-approval-for-all`,
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
   * @tags ERC1155
   * @name IsApprovedForAll
   * @request POST:/erc1155/{name}/is-approved-for-all
   * @secure
   */
  isApprovedForAll = (
    name: string,
    data: Erc1155Request,
    params: RequestParams = {}
  ) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc1155/${name}/is-approved-for-all`,
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
   * @tags ERC1155
   * @name SafeTransferFrom
   * @request POST:/erc1155/{name}/safe-transfer-from
   * @secure
   */
  safeTransferFrom = (
    name: string,
    data: Erc1155Request,
    params: RequestParams = {}
  ) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc1155/${name}/safe-transfer-from`,
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
   * @tags ERC1155
   * @name SafeBatchTransferFrom
   * @request POST:/erc1155/{name}/safe-batch-transfer-from
   * @secure
   */
  safeBatchTransferFrom = (
    name: string,
    data: Erc1155Request,
    params: RequestParams = {}
  ) =>
    this.request<AccountControllerResponse, any>({
      path: `/erc1155/${name}/safe-batch-transfer-from`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
