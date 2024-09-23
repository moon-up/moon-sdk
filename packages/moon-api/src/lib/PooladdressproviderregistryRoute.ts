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
  GetATokenTotalSupplyData,
  GetAddressesProviderData,
  GetAllATokensData,
  GetAllReservesTokensData,
  GetDebtCeilingData,
} from './data-contracts';

export namespace Pooladdressproviderregistry {
  /**
   * No description
   * @tags PoolAddressProviderRegistry
   * @name GetAddressesProvider
   * @request GET:/pooladdressproviderregistry/{account}/getAddressesProvider
   * @secure
   */
  export namespace GetAddressesProvider {
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
    export type ResponseBody = GetAddressesProviderData;
  }

  /**
   * No description
   * @tags PoolAddressProviderRegistry
   * @name GetAllATokens
   * @request GET:/pooladdressproviderregistry/{account}/getAllATokens
   * @secure
   */
  export namespace GetAllATokens {
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
    export type ResponseBody = GetAllATokensData;
  }

  /**
   * No description
   * @tags PoolAddressProviderRegistry
   * @name GetAllReservesTokens
   * @request GET:/pooladdressproviderregistry/{account}/getAllReservesTokens
   * @secure
   */
  export namespace GetAllReservesTokens {
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
    export type ResponseBody = GetAllReservesTokensData;
  }

  /**
   * No description
   * @tags PoolAddressProviderRegistry
   * @name GetATokenTotalSupply
   * @request GET:/pooladdressproviderregistry/{account}/getATokenTotalSupply
   * @secure
   */
  export namespace GetATokenTotalSupply {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      asset: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetATokenTotalSupplyData;
  }

  /**
   * No description
   * @tags PoolAddressProviderRegistry
   * @name GetDebtCeiling
   * @request GET:/pooladdressproviderregistry/{account}/getDebtCeiling
   * @secure
   */
  export namespace GetDebtCeiling {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      asset: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetDebtCeilingData;
  }
}
