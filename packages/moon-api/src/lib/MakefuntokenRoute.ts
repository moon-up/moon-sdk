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
  MakeFunTokenGetClFactoryData,
  MakeFunTokenGetMaxTickData,
  MakeFunTokenGetMinTickData,
  MakeFunTokenHelperInputBody,
  MakeFunTokenMakeTokenData,
  MakeFunTokenSetSupplyLimitsData,
  MakeFunTokenSetTickLimitsData,
} from './data-contracts';

export namespace Makefuntoken {
  /**
   * No description
   * @tags MakeFunToken
   * @name MakeFunTokenGetClFactory
   * @request GET:/makefuntoken/{account}/CLFactory
   * @secure
   */
  export namespace MakeFunTokenGetClFactory {
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
    export type ResponseBody = MakeFunTokenGetClFactoryData;
  }

  /**
   * No description
   * @tags MakeFunToken
   * @name MakeFunTokenGetMaxTick
   * @request GET:/makefuntoken/{account}/maxTick
   * @secure
   */
  export namespace MakeFunTokenGetMaxTick {
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
    export type ResponseBody = MakeFunTokenGetMaxTickData;
  }

  /**
   * No description
   * @tags MakeFunToken
   * @name MakeFunTokenGetMinTick
   * @request GET:/makefuntoken/{account}/minTick
   * @secure
   */
  export namespace MakeFunTokenGetMinTick {
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
    export type ResponseBody = MakeFunTokenGetMinTickData;
  }

  /**
   * No description
   * @tags MakeFunToken
   * @name MakeFunTokenMakeToken
   * @request POST:/makefuntoken/{address}/makeToken
   * @secure
   */
  export namespace MakeFunTokenMakeToken {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = MakeFunTokenHelperInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = MakeFunTokenMakeTokenData;
  }

  /**
   * No description
   * @tags MakeFunToken
   * @name MakeFunTokenSetSupplyLimits
   * @request POST:/makefuntoken/{address}/setSupplyLimits
   * @secure
   */
  export namespace MakeFunTokenSetSupplyLimits {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = MakeFunTokenHelperInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = MakeFunTokenSetSupplyLimitsData;
  }

  /**
   * No description
   * @tags MakeFunToken
   * @name MakeFunTokenSetTickLimits
   * @request POST:/makefuntoken/{address}/setTickLimits
   * @secure
   */
  export namespace MakeFunTokenSetTickLimits {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = MakeFunTokenHelperInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = MakeFunTokenSetTickLimitsData;
  }
}
