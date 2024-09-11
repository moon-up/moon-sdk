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
  GetErc721BalanceOfData,
  GetErc721IsApprovedForAllData,
  GetErc721NameData,
  GetErc721OwnerOfData,
  GetErc721SymbolData,
  GetErc721TokenUriData,
  InputBody,
  SafeTransferFromErc721Data,
  SafeTransferFromWithDataErc721Data,
  SetApprovalForAllErc721Data,
  TransferFromErc721Data,
} from './data-contracts';

export namespace Erc721 {
  /**
   * No description
   * @tags ERC721
   * @name ApproveErc721
   * @request POST:/erc721/{address}/approve
   * @secure
   */
  export namespace ApproveErc721 {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ApproveErc721Data;
  }

  /**
   * No description
   * @tags ERC721
   * @name GetErc721Approved
   * @request GET:/erc721/{tokenId}/getApproved
   * @secure
   */
  export namespace GetErc721Approved {
    export type RequestParams = {
      tokenId: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetErc721ApprovedData;
  }

  /**
   * No description
   * @tags ERC721
   * @name GetErc721BalanceOf
   * @request GET:/erc721/{account}/balanceOf
   * @secure
   */
  export namespace GetErc721BalanceOf {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetErc721BalanceOfData;
  }

  /**
   * No description
   * @tags ERC721
   * @name GetErc721IsApprovedForAll
   * @request GET:/erc721/{owner}/{operator}/isApprovedForAll
   * @secure
   */
  export namespace GetErc721IsApprovedForAll {
    export type RequestParams = {
      operator: string;
      owner: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetErc721IsApprovedForAllData;
  }

  /**
   * No description
   * @tags ERC721
   * @name GetErc721Name
   * @request GET:/erc721/name
   * @secure
   */
  export namespace GetErc721Name {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetErc721NameData;
  }

  /**
   * No description
   * @tags ERC721
   * @name GetErc721OwnerOf
   * @request GET:/erc721/{tokenId}/ownerOf
   * @secure
   */
  export namespace GetErc721OwnerOf {
    export type RequestParams = {
      tokenId: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetErc721OwnerOfData;
  }

  /**
   * No description
   * @tags ERC721
   * @name GetErc721Symbol
   * @request GET:/erc721/symbol
   * @secure
   */
  export namespace GetErc721Symbol {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetErc721SymbolData;
  }

  /**
   * No description
   * @tags ERC721
   * @name GetErc721TokenUri
   * @request GET:/erc721/{tokenId}/tokenURI
   * @secure
   */
  export namespace GetErc721TokenUri {
    export type RequestParams = {
      tokenId: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetErc721TokenUriData;
  }

  /**
   * No description
   * @tags ERC721
   * @name SafeTransferFromErc721
   * @request POST:/erc721/{address}/safeTransferFrom
   * @secure
   */
  export namespace SafeTransferFromErc721 {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SafeTransferFromErc721Data;
  }

  /**
   * No description
   * @tags ERC721
   * @name SafeTransferFromWithDataErc721
   * @request POST:/erc721/{address}/safeTransferFromWithData
   * @secure
   */
  export namespace SafeTransferFromWithDataErc721 {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SafeTransferFromWithDataErc721Data;
  }

  /**
   * No description
   * @tags ERC721
   * @name SetApprovalForAllErc721
   * @request POST:/erc721/{address}/setApprovalForAll
   * @secure
   */
  export namespace SetApprovalForAllErc721 {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SetApprovalForAllErc721Data;
  }

  /**
   * No description
   * @tags ERC721
   * @name TransferFromErc721
   * @request POST:/erc721/{address}/transferFrom
   * @secure
   */
  export namespace TransferFromErc721 {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = TransferFromErc721Data;
  }
}
