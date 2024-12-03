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
  Erc721GetErc721BalanceOfData,
  Erc721GetErc721IsApprovedForAllData,
  Erc721GetErc721NameData,
  Erc721GetErc721OwnerOfData,
  Erc721GetErc721SymbolData,
  Erc721GetErc721TokenUriData,
  Erc721SafeTransferFromErc721Data,
  Erc721SafeTransferFromWithDataErc721Data,
  Erc721SetApprovalForAllErc721Data,
  Erc721TransferFromErc721Data,
  InputBody,
} from './data-contracts';

export namespace Erc721 {
  /**
   * @description Approves an ERC721 token for a given address.
   * @tags ERC721
   * @name Erc721ApproveErc721
   * @request POST:/erc721/{address}/approve
   * @secure
   */
  export namespace Erc721ApproveErc721 {
    export type RequestParams = {
      /** - The address to approve the token for. */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = Erc721ApproveErc721Data;
  }

  /**
   * @description Retrieves the approved address for a specific ERC721 token.
   * @tags ERC721
   * @name Erc721GetErc721Approved
   * @request GET:/erc721/{tokenId}/getApproved
   * @secure
   */
  export namespace Erc721GetErc721Approved {
    export type RequestParams = {
      /** - The ID of the token to check approval for. */
      tokenId: string;
    };
    export type RequestQuery = {
      /** - The address of the ERC721 contract. */
      address: string;
      /** - The ID of the blockchain network. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = Erc721GetErc721ApprovedData;
  }

  /**
   * @description Retrieves the balance of ERC721 tokens for a given account.
   * @tags ERC721
   * @name Erc721GetErc721BalanceOf
   * @request GET:/erc721/{account}/balanceOf
   * @secure
   */
  export namespace Erc721GetErc721BalanceOf {
    export type RequestParams = {
      /** - The account address to query the balance for. */
      account: string;
    };
    export type RequestQuery = {
      /** - The contract address of the ERC721 token. */
      address: string;
      /** - The ID of the blockchain network. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token for accessing the ERC721 instance. */
      Authorization: string;
    };
    export type ResponseBody = Erc721GetErc721BalanceOfData;
  }

  /**
   * @description Checks if an operator is approved to manage all assets of a given owner.
   * @tags ERC721
   * @name Erc721GetErc721IsApprovedForAll
   * @request GET:/erc721/{owner}/{operator}/isApprovedForAll
   * @secure
   */
  export namespace Erc721GetErc721IsApprovedForAll {
    export type RequestParams = {
      /** - The address of the operator to check for approval. */
      operator: string;
      /** - The address of the owner of the assets. */
      owner: string;
    };
    export type RequestQuery = {
      /** - The address of the ERC721 contract. */
      address: string;
      /** - The ID of the blockchain network. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = Erc721GetErc721IsApprovedForAllData;
  }

  /**
   * @description Retrieves the name of an ERC721 token.
   * @tags ERC721
   * @name Erc721GetErc721Name
   * @request GET:/erc721/name
   * @secure
   */
  export namespace Erc721GetErc721Name {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The address of the ERC721 contract. */
      address: string;
      /** - The ID of the blockchain network. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = Erc721GetErc721NameData;
  }

  /**
   * @description Retrieves the owner of a specified ERC721 token.
   * @tags ERC721
   * @name Erc721GetErc721OwnerOf
   * @request GET:/erc721/{tokenId}/ownerOf
   * @secure
   */
  export namespace Erc721GetErc721OwnerOf {
    export type RequestParams = {
      /** - The ID of the token to query. */
      tokenId: string;
    };
    export type RequestQuery = {
      /** - The address of the ERC721 contract. */
      address: string;
      /** - The ID of the blockchain network. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = Erc721GetErc721OwnerOfData;
  }

  /**
   * @description Retrieves the symbol of an ERC721 token.
   * @tags ERC721
   * @name Erc721GetErc721Symbol
   * @request GET:/erc721/symbol
   * @secure
   */
  export namespace Erc721GetErc721Symbol {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The address of the ERC721 contract. */
      address: string;
      /** - The ID of the blockchain network. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = Erc721GetErc721SymbolData;
  }

  /**
   * @description Retrieves the token URI for a given ERC721 token.
   * @tags ERC721
   * @name Erc721GetErc721TokenUri
   * @request GET:/erc721/{tokenId}/tokenURI
   * @secure
   */
  export namespace Erc721GetErc721TokenUri {
    export type RequestParams = {
      /** - The ID of the token to retrieve the URI for. */
      tokenId: string;
    };
    export type RequestQuery = {
      /** - The address of the ERC721 contract. */
      address: string;
      /** - The ID of the blockchain network. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = Erc721GetErc721TokenUriData;
  }

  /**
   * @description Safely transfers an ERC721 token from one address to another.
   * @tags ERC721
   * @name Erc721SafeTransferFromErc721
   * @request POST:/erc721/{address}/safeTransferFrom
   * @secure
   */
  export namespace Erc721SafeTransferFromErc721 {
    export type RequestParams = {
      /** - The address from which the token is being transferred. */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = Erc721SafeTransferFromErc721Data;
  }

  /**
   * @description Safely transfers an ERC721 token from one address to another with additional data.
   * @tags ERC721
   * @name Erc721SafeTransferFromWithDataErc721
   * @request POST:/erc721/{address}/safeTransferFromWithData
   * @secure
   */
  export namespace Erc721SafeTransferFromWithDataErc721 {
    export type RequestParams = {
      /** - The address to transfer the token to. */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = Erc721SafeTransferFromWithDataErc721Data;
  }

  /**
   * @description Sets approval for all ERC721 tokens for a given address.
   * @tags ERC721
   * @name Erc721SetApprovalForAllErc721
   * @request POST:/erc721/{address}/setApprovalForAll
   * @secure
   */
  export namespace Erc721SetApprovalForAllErc721 {
    export type RequestParams = {
      /** - The address to set approval for. */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = Erc721SetApprovalForAllErc721Data;
  }

  /**
   * @description Transfers an ERC721 token from one address to another.
   * @tags ERC721
   * @name Erc721TransferFromErc721
   * @request POST:/erc721/{address}/transferFrom
   * @secure
   */
  export namespace Erc721TransferFromErc721 {
    export type RequestParams = {
      /** - The address from which the token is being transferred. */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = Erc721TransferFromErc721Data;
  }
}
