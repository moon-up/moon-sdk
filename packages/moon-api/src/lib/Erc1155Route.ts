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

export namespace Erc1155 {
  /**
   * @description Retrieves the balance of an ERC1155 token for a specific account.
   * @tags ERC1155
   * @name Erc1155Erc1155BalanceOf
   * @request POST:/erc1155/{name}/balance-of
   * @secure
   */
  export namespace Erc1155Erc1155BalanceOf {
    export type RequestParams = {
      /** - The name identifier for the request */
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Erc1155Request;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc1155Erc1155BalanceOfData;
  }

  /**
   * @description Retrieves balances for multiple token IDs and accounts in a batch operation.
   * @tags ERC1155
   * @name Erc1155Erc1155BalanceOfBatch
   * @request POST:/erc1155/{name}/balance-of-batch
   * @secure
   */
  export namespace Erc1155Erc1155BalanceOfBatch {
    export type RequestParams = {
      /** - The name identifier for the request */
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Erc1155Request;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc1155Erc1155BalanceOfBatchData;
  }

  /**
   * @description Queries if an address is approved to manage all tokens of another address.
   * @tags ERC1155
   * @name Erc1155Erc1155IsApprovedForAll
   * @request POST:/erc1155/{name}/is-approved-for-all
   * @secure
   */
  export namespace Erc1155Erc1155IsApprovedForAll {
    export type RequestParams = {
      /** - The name identifier for the request */
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Erc1155Request;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc1155Erc1155IsApprovedForAllData;
  }

  /**
   * @description Safely transfers multiple tokens between addresses in a batch operation.
   * @tags ERC1155
   * @name Erc1155Erc1155SafeBatchTransferFrom
   * @request POST:/erc1155/{name}/safe-batch-transfer-from
   * @secure
   */
  export namespace Erc1155Erc1155SafeBatchTransferFrom {
    export type RequestParams = {
      /** - The name identifier for the request */
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Erc1155Request;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc1155Erc1155SafeBatchTransferFromData;
  }

  /**
   * @description Safely transfers a single token between addresses.
   * @tags ERC1155
   * @name Erc1155Erc1155SafeTransferFrom
   * @request POST:/erc1155/{name}/safe-transfer-from
   * @secure
   */
  export namespace Erc1155Erc1155SafeTransferFrom {
    export type RequestParams = {
      /** - The name identifier for the request */
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Erc1155Request;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc1155Erc1155SafeTransferFromData;
  }

  /**
   * @description Enables or disables approval for a third party ("operator") to manage all tokens.
   * @tags ERC1155
   * @name Erc1155Erc1155SetApprovalForAll
   * @request POST:/erc1155/{name}/set-approval-for-all
   * @secure
   */
  export namespace Erc1155Erc1155SetApprovalForAll {
    export type RequestParams = {
      /** - The name identifier for the request */
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Erc1155Request;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc1155Erc1155SetApprovalForAllData;
  }
}
