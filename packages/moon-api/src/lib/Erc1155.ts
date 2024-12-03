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
  Erc1155Erc1155BalanceOfBatchData,
  Erc1155Erc1155BalanceOfData,
  Erc1155Erc1155IsApprovedForAllData,
  Erc1155Erc1155SafeBatchTransferFromData,
  Erc1155Erc1155SafeTransferFromData,
  Erc1155Erc1155SetApprovalForAllData,
  Erc1155Request,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Erc1155<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Retrieves the balance of an ERC1155 token for a specific account.
   *
   * @tags ERC1155
   * @name Erc1155Erc1155BalanceOf
   * @request POST:/erc1155/{name}/balance-of
   * @secure
   */
  erc1155Erc1155BalanceOf = (
    name: string,
    data: Erc1155Request,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc1155Erc1155BalanceOfData, any>({
      path: `/erc1155/${name}/balance-of`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves balances for multiple token IDs and accounts in a batch operation.
   *
   * @tags ERC1155
   * @name Erc1155Erc1155BalanceOfBatch
   * @request POST:/erc1155/{name}/balance-of-batch
   * @secure
   */
  erc1155Erc1155BalanceOfBatch = (
    name: string,
    data: Erc1155Request,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc1155Erc1155BalanceOfBatchData, any>({
      path: `/erc1155/${name}/balance-of-batch`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Queries if an address is approved to manage all tokens of another address.
   *
   * @tags ERC1155
   * @name Erc1155Erc1155IsApprovedForAll
   * @request POST:/erc1155/{name}/is-approved-for-all
   * @secure
   */
  erc1155Erc1155IsApprovedForAll = (
    name: string,
    data: Erc1155Request,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc1155Erc1155IsApprovedForAllData, any>({
      path: `/erc1155/${name}/is-approved-for-all`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Safely transfers multiple tokens between addresses in a batch operation.
   *
   * @tags ERC1155
   * @name Erc1155Erc1155SafeBatchTransferFrom
   * @request POST:/erc1155/{name}/safe-batch-transfer-from
   * @secure
   */
  erc1155Erc1155SafeBatchTransferFrom = (
    name: string,
    data: Erc1155Request,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc1155Erc1155SafeBatchTransferFromData, any>({
      path: `/erc1155/${name}/safe-batch-transfer-from`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Safely transfers a single token between addresses.
   *
   * @tags ERC1155
   * @name Erc1155Erc1155SafeTransferFrom
   * @request POST:/erc1155/{name}/safe-transfer-from
   * @secure
   */
  erc1155Erc1155SafeTransferFrom = (
    name: string,
    data: Erc1155Request,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc1155Erc1155SafeTransferFromData, any>({
      path: `/erc1155/${name}/safe-transfer-from`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Enables or disables approval for a third party ("operator") to manage all tokens.
   *
   * @tags ERC1155
   * @name Erc1155Erc1155SetApprovalForAll
   * @request POST:/erc1155/{name}/set-approval-for-all
   * @secure
   */
  erc1155Erc1155SetApprovalForAll = (
    name: string,
    data: Erc1155Request,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc1155Erc1155SetApprovalForAllData, any>({
      path: `/erc1155/${name}/set-approval-for-all`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
