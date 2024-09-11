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
  DepositData,
  GetAssetData,
  GetConvertToAssetsData,
  GetConvertToSharesData,
  GetMaxDepositData,
  GetTotalAssetsData,
  InputBody,
  WithdrawData,
} from './data-contracts';

export namespace Erc4626 {
  /**
   * No description
   * @tags ERC4626
   * @name Deposit
   * @request POST:/erc4626/{address}/deposit
   * @secure
   */
  export namespace Deposit {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DepositData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetAsset
   * @request GET:/erc4626/{account}/asset
   * @secure
   */
  export namespace GetAsset {
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
    export type ResponseBody = GetAssetData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetConvertToAssets
   * @request GET:/erc4626/{account}/convertToAssets
   * @secure
   */
  export namespace GetConvertToAssets {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
      shares: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetConvertToAssetsData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetConvertToShares
   * @request GET:/erc4626/{account}/convertToShares
   * @secure
   */
  export namespace GetConvertToShares {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      assets: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetConvertToSharesData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetMaxDeposit
   * @request GET:/erc4626/{account}/maxDeposit
   * @secure
   */
  export namespace GetMaxDeposit {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
      receiver: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetMaxDepositData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetTotalAssets
   * @request GET:/erc4626/{account}/totalAssets
   * @secure
   */
  export namespace GetTotalAssets {
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
    export type ResponseBody = GetTotalAssetsData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name Withdraw
   * @request POST:/erc4626/{address}/withdraw
   * @secure
   */
  export namespace Withdraw {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = WithdrawData;
  }
}
