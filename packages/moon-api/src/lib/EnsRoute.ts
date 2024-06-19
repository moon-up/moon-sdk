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

import { EnsResolveInput, ResolveData } from './data-contracts';

export namespace Ens {
  /**
   * No description
   * @tags ENS
   * @name Resolve
   * @request POST:/ens/resolve
   * @secure
   */
  export namespace Resolve {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = EnsResolveInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ResolveData;
  }
}
