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
  ApproveErc721Data,
  GetErc721ApprovedData,
  GetErc721ApprovedParams,
  GetErc721BalanceOfData,
  GetErc721BalanceOfParams,
  GetErc721IsApprovedForAllData,
  GetErc721IsApprovedForAllParams,
  GetErc721NameData,
  GetErc721NameParams,
  GetErc721OwnerOfData,
  GetErc721OwnerOfParams,
  GetErc721SymbolData,
  GetErc721SymbolParams,
  GetErc721TokenUriData,
  GetErc721TokenUriParams,
  InputBody,
  SafeTransferFromErc721Data,
  SafeTransferFromWithDataErc721Data,
  SetApprovalForAllErc721Data,
  TransferFromErc721Data,
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
   * @tags ERC721
   * @name ApproveErc721
   * @request POST:/erc721/{address}/approve
   * @secure
   */
  approveErc721 = (
    address: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ApproveErc721Data, any>({
      path: `/erc721/${address}/approve`,
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
   * @tags ERC721
   * @name GetErc721Approved
   * @request GET:/erc721/{tokenId}/getApproved
   * @secure
   */
  getErc721Approved = (
    { tokenId, ...query }: GetErc721ApprovedParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetErc721ApprovedData, any>({
      path: `/erc721/${tokenId}/getApproved`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC721
   * @name GetErc721BalanceOf
   * @request GET:/erc721/{account}/balanceOf
   * @secure
   */
  getErc721BalanceOf = (
    { account, ...query }: GetErc721BalanceOfParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetErc721BalanceOfData, any>({
      path: `/erc721/${account}/balanceOf`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC721
   * @name GetErc721IsApprovedForAll
   * @request GET:/erc721/{owner}/{operator}/isApprovedForAll
   * @secure
   */
  getErc721IsApprovedForAll = (
    { owner, operator, ...query }: GetErc721IsApprovedForAllParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetErc721IsApprovedForAllData, any>({
      path: `/erc721/${owner}/${operator}/isApprovedForAll`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC721
   * @name GetErc721Name
   * @request GET:/erc721/name
   * @secure
   */
  getErc721Name = (query: GetErc721NameParams, params: RequestParams = {}) =>
    this.http.request<GetErc721NameData, any>({
      path: `/erc721/name`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC721
   * @name GetErc721OwnerOf
   * @request GET:/erc721/{tokenId}/ownerOf
   * @secure
   */
  getErc721OwnerOf = (
    { tokenId, ...query }: GetErc721OwnerOfParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetErc721OwnerOfData, any>({
      path: `/erc721/${tokenId}/ownerOf`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC721
   * @name GetErc721Symbol
   * @request GET:/erc721/symbol
   * @secure
   */
  getErc721Symbol = (
    query: GetErc721SymbolParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetErc721SymbolData, any>({
      path: `/erc721/symbol`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC721
   * @name GetErc721TokenUri
   * @request GET:/erc721/{tokenId}/tokenURI
   * @secure
   */
  getErc721TokenUri = (
    { tokenId, ...query }: GetErc721TokenUriParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetErc721TokenUriData, any>({
      path: `/erc721/${tokenId}/tokenURI`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC721
   * @name SafeTransferFromErc721
   * @request POST:/erc721/{address}/safeTransferFrom
   * @secure
   */
  safeTransferFromErc721 = (
    address: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SafeTransferFromErc721Data, any>({
      path: `/erc721/${address}/safeTransferFrom`,
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
   * @tags ERC721
   * @name SafeTransferFromWithDataErc721
   * @request POST:/erc721/{address}/safeTransferFromWithData
   * @secure
   */
  safeTransferFromWithDataErc721 = (
    address: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SafeTransferFromWithDataErc721Data, any>({
      path: `/erc721/${address}/safeTransferFromWithData`,
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
   * @tags ERC721
   * @name SetApprovalForAllErc721
   * @request POST:/erc721/{address}/setApprovalForAll
   * @secure
   */
  setApprovalForAllErc721 = (
    address: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SetApprovalForAllErc721Data, any>({
      path: `/erc721/${address}/setApprovalForAll`,
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
   * @tags ERC721
   * @name TransferFromErc721
   * @request POST:/erc721/{address}/transferFrom
   * @secure
   */
  transferFromErc721 = (
    address: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<TransferFromErc721Data, any>({
      path: `/erc721/${address}/transferFrom`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
