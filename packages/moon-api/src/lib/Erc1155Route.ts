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
  BalanceOfBatchData,
  BalanceOfResult,
  Erc1155Request,
  IsApprovedForAllData,
  SafeBatchTransferFromData,
  SafeTransferFromData,
  SetApprovalForAllData,
} from './data-contracts';

export namespace Erc1155 {
  /**
   * No description
   * @tags ERC1155
   * @name BalanceOf
   * @request POST:/erc1155/{name}/balance-of
   * @secure
   */
  export namespace BalanceOf {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Erc1155Request;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = BalanceOfResult;
  }

  /**
   * No description
   * @tags ERC1155
   * @name BalanceOfBatch
   * @request POST:/erc1155/{name}/balance-of-batch
   * @secure
   */
  export namespace BalanceOfBatch {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Erc1155Request;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = BalanceOfBatchData;
  }

  /**
   * No description
   * @tags ERC1155
   * @name IsApprovedForAll
   * @request POST:/erc1155/{name}/is-approved-for-all
   * @secure
   */
  export namespace IsApprovedForAll {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Erc1155Request;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = IsApprovedForAllData;
  }

  /**
   * No description
   * @tags ERC1155
   * @name SafeBatchTransferFrom
   * @request POST:/erc1155/{name}/safe-batch-transfer-from
   * @secure
   */
  export namespace SafeBatchTransferFrom {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Erc1155Request;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SafeBatchTransferFromData;
  }

  /**
   * No description
   * @tags ERC1155
   * @name SafeTransferFrom
   * @request POST:/erc1155/{name}/safe-transfer-from
   * @secure
   */
  export namespace SafeTransferFrom {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Erc1155Request;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SafeTransferFromData;
  }

  /**
   * No description
   * @tags ERC1155
   * @name SetApprovalForAll
   * @request POST:/erc1155/{name}/set-approval-for-all
   * @secure
   */
  export namespace SetApprovalForAll {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Erc1155Request;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SetApprovalForAllData;
  }
}
