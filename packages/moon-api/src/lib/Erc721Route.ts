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

export namespace Erc721 {
  /**
   * No description
   * @tags Erc721
   * @name Approve
   * @request POST:/erc721/{name}/approve
   * @secure
   */
  export namespace Approve {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Erc721Request;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ApproveData;
  }

  /**
   * No description
   * @tags Erc721
   * @name BalanceOf
   * @request POST:/erc721/{name}/balance-of
   * @secure
   */
  export namespace BalanceOf {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Erc721Request;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = BalanceOfResult;
  }

  /**
   * No description
   * @tags Erc721
   * @name GetApproved
   * @request POST:/erc721/{name}/get-approved
   * @secure
   */
  export namespace GetApproved {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Erc721Request;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetApprovedData;
  }

  /**
   * No description
   * @tags Erc721
   * @name IsApprovedForAll
   * @request POST:/erc721/{name}/is-approved-for-all
   * @secure
   */
  export namespace IsApprovedForAll {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Erc721Request;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = IsApprovedForAllResult;
  }

  /**
   * No description
   * @tags Erc721
   * @name Name
   * @request POST:/erc721/{name}/name
   * @secure
   */
  export namespace Name {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Erc721Request;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = NameData;
  }

  /**
   * No description
   * @tags Erc721
   * @name OwnerOf
   * @request POST:/erc721/{name}/owner-of
   * @secure
   */
  export namespace OwnerOf {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Erc721Request;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = OwnerOfData;
  }

  /**
   * No description
   * @tags Erc721
   * @name SafeTransferFrom
   * @request POST:/erc721/{name}/safe-transfer-from
   * @secure
   */
  export namespace SafeTransferFrom {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Erc721Request;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SafeTransferFromResult;
  }

  /**
   * No description
   * @tags Erc721
   * @name SetApprovalForAll
   * @request POST:/erc721/{name}/set-approval-for-all
   * @secure
   */
  export namespace SetApprovalForAll {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Erc721Request;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SetApprovalForAllResult;
  }

  /**
   * No description
   * @tags Erc721
   * @name Symbol
   * @request POST:/erc721/{name}/symbol
   * @secure
   */
  export namespace Symbol {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Erc721Request;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SymbolData;
  }

  /**
   * No description
   * @tags Erc721
   * @name TokenUri
   * @request POST:/erc721/{name}/token-uri
   * @secure
   */
  export namespace TokenUri {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Erc721Request;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = TokenUriData;
  }

  /**
   * No description
   * @tags Erc721
   * @name Transfer
   * @request POST:/erc721/{name}/transfer
   * @secure
   */
  export namespace Transfer {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Erc721Request;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = TransferData;
  }

  /**
   * No description
   * @tags Erc721
   * @name TransferFrom
   * @request POST:/erc721/{name}/transfer-from
   * @secure
   */
  export namespace TransferFrom {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Erc721Request;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = TransferFromData;
  }
}
