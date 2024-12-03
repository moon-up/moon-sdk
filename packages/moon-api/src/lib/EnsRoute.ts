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
  ENSReverseResolveInput,
  EnsResolveData,
  EnsResolveInput,
  EnsReverseResolveData,
} from './data-contracts';

export namespace Ens {
  /**
   * @description Resolves an ENS (Ethereum Name Service) name to its corresponding address.
   * @tags ENS
   * @name EnsResolve
   * @request POST:/ens/resolve
   * @secure
   */
  export namespace EnsResolve {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = EnsResolveInput;
    export type RequestHeaders = {
      /** - The authorization token for accessing the ENS service. */
      Authorization: string;
    };
    export type ResponseBody = EnsResolveData;
  }

  /**
   * @description Resolves an ENS (Ethereum Name Service) address to its corresponding name.
   * @tags ENS
   * @name EnsReverseResolve
   * @request POST:/ens/reverse
   * @secure
   */
  export namespace EnsReverseResolve {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ENSReverseResolveInput;
    export type RequestHeaders = {
      /** - The authorization token for accessing the ENS service. */
      Authorization: string;
    };
    export type ResponseBody = EnsReverseResolveData;
  }
}
