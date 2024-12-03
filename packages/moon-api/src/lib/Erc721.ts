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
  Erc721ApproveErc721Data,
  Erc721GetErc721ApprovedData,
  Erc721GetErc721ApprovedParams,
  Erc721GetErc721BalanceOfData,
  Erc721GetErc721BalanceOfParams,
  Erc721GetErc721IsApprovedForAllData,
  Erc721GetErc721IsApprovedForAllParams,
  Erc721GetErc721NameData,
  Erc721GetErc721NameParams,
  Erc721GetErc721OwnerOfData,
  Erc721GetErc721OwnerOfParams,
  Erc721GetErc721SymbolData,
  Erc721GetErc721SymbolParams,
  Erc721GetErc721TokenUriData,
  Erc721GetErc721TokenUriParams,
  Erc721SafeTransferFromErc721Data,
  Erc721SafeTransferFromWithDataErc721Data,
  Erc721SetApprovalForAllErc721Data,
  Erc721TransferFromErc721Data,
  InputBody,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Erc721<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Approves an ERC721 token for a given address.
   *
   * @tags ERC721
   * @name Erc721ApproveErc721
   * @request POST:/erc721/{address}/approve
   * @secure
   */
  erc721ApproveErc721 = (
    address: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc721ApproveErc721Data, any>({
      path: `/erc721/${address}/approve`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the approved address for a specific ERC721 token.
   *
   * @tags ERC721
   * @name Erc721GetErc721Approved
   * @request GET:/erc721/{tokenId}/getApproved
   * @secure
   */
  erc721GetErc721Approved = (
    { tokenId, ...query }: Erc721GetErc721ApprovedParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc721GetErc721ApprovedData, any>({
      path: `/erc721/${tokenId}/getApproved`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the balance of ERC721 tokens for a given account.
   *
   * @tags ERC721
   * @name Erc721GetErc721BalanceOf
   * @request GET:/erc721/{account}/balanceOf
   * @secure
   */
  erc721GetErc721BalanceOf = (
    { account, ...query }: Erc721GetErc721BalanceOfParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc721GetErc721BalanceOfData, any>({
      path: `/erc721/${account}/balanceOf`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Checks if an operator is approved to manage all assets of a given owner.
   *
   * @tags ERC721
   * @name Erc721GetErc721IsApprovedForAll
   * @request GET:/erc721/{owner}/{operator}/isApprovedForAll
   * @secure
   */
  erc721GetErc721IsApprovedForAll = (
    { owner, operator, ...query }: Erc721GetErc721IsApprovedForAllParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc721GetErc721IsApprovedForAllData, any>({
      path: `/erc721/${owner}/${operator}/isApprovedForAll`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the name of an ERC721 token.
   *
   * @tags ERC721
   * @name Erc721GetErc721Name
   * @request GET:/erc721/name
   * @secure
   */
  erc721GetErc721Name = (
    query: Erc721GetErc721NameParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc721GetErc721NameData, any>({
      path: `/erc721/name`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the owner of a specified ERC721 token.
   *
   * @tags ERC721
   * @name Erc721GetErc721OwnerOf
   * @request GET:/erc721/{tokenId}/ownerOf
   * @secure
   */
  erc721GetErc721OwnerOf = (
    { tokenId, ...query }: Erc721GetErc721OwnerOfParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc721GetErc721OwnerOfData, any>({
      path: `/erc721/${tokenId}/ownerOf`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the symbol of an ERC721 token.
   *
   * @tags ERC721
   * @name Erc721GetErc721Symbol
   * @request GET:/erc721/symbol
   * @secure
   */
  erc721GetErc721Symbol = (
    query: Erc721GetErc721SymbolParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc721GetErc721SymbolData, any>({
      path: `/erc721/symbol`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the token URI for a given ERC721 token.
   *
   * @tags ERC721
   * @name Erc721GetErc721TokenUri
   * @request GET:/erc721/{tokenId}/tokenURI
   * @secure
   */
  erc721GetErc721TokenUri = (
    { tokenId, ...query }: Erc721GetErc721TokenUriParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc721GetErc721TokenUriData, any>({
      path: `/erc721/${tokenId}/tokenURI`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Safely transfers an ERC721 token from one address to another.
   *
   * @tags ERC721
   * @name Erc721SafeTransferFromErc721
   * @request POST:/erc721/{address}/safeTransferFrom
   * @secure
   */
  erc721SafeTransferFromErc721 = (
    address: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc721SafeTransferFromErc721Data, any>({
      path: `/erc721/${address}/safeTransferFrom`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Safely transfers an ERC721 token from one address to another with additional data.
   *
   * @tags ERC721
   * @name Erc721SafeTransferFromWithDataErc721
   * @request POST:/erc721/{address}/safeTransferFromWithData
   * @secure
   */
  erc721SafeTransferFromWithDataErc721 = (
    address: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc721SafeTransferFromWithDataErc721Data, any>({
      path: `/erc721/${address}/safeTransferFromWithData`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets approval for all ERC721 tokens for a given address.
   *
   * @tags ERC721
   * @name Erc721SetApprovalForAllErc721
   * @request POST:/erc721/{address}/setApprovalForAll
   * @secure
   */
  erc721SetApprovalForAllErc721 = (
    address: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc721SetApprovalForAllErc721Data, any>({
      path: `/erc721/${address}/setApprovalForAll`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Transfers an ERC721 token from one address to another.
   *
   * @tags ERC721
   * @name Erc721TransferFromErc721
   * @request POST:/erc721/{address}/transferFrom
   * @secure
   */
  erc721TransferFromErc721 = (
    address: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc721TransferFromErc721Data, any>({
      path: `/erc721/${address}/transferFrom`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
