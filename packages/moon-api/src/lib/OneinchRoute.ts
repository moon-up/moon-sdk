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
  ApproveCallDataData,
  ApproveCallDataPayload,
  ApproveSpenderData,
  ApproveSpenderPayload,
  GetSwapDto,
  ProtocolsData,
  ProtocolsPayload,
  QuoteData,
  QuotePayload,
  SwapData,
  TokensData,
  TokensPayload,
} from './data-contracts';

export namespace Oneinch {
  /**
   * No description
   * @tags oneinch
   * @name ApproveCallData
   * @request POST:/oneinch/approve-call-data
   * @secure
   */
  export namespace ApproveCallData {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ApproveCallDataPayload;
    export type RequestHeaders = {};
    export type ResponseBody = ApproveCallDataData;
  }

  /**
   * No description
   * @tags oneinch
   * @name ApproveSpender
   * @request POST:/oneinch/approve-spender
   * @secure
   */
  export namespace ApproveSpender {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ApproveSpenderPayload;
    export type RequestHeaders = {};
    export type ResponseBody = ApproveSpenderData;
  }

  /**
   * No description
   * @tags oneinch
   * @name Protocols
   * @request POST:/oneinch/protocols
   * @secure
   */
  export namespace Protocols {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ProtocolsPayload;
    export type RequestHeaders = {};
    export type ResponseBody = ProtocolsData;
  }

  /**
   * No description
   * @tags oneinch
   * @name Quote
   * @request POST:/oneinch/quote
   * @secure
   */
  export namespace Quote {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = QuotePayload;
    export type RequestHeaders = {};
    export type ResponseBody = QuoteData;
  }

  /**
   * No description
   * @tags oneinch
   * @name Swap
   * @request POST:/oneinch/{accountName}/swap
   * @secure
   */
  export namespace Swap {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = GetSwapDto;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SwapData;
  }

  /**
   * No description
   * @tags oneinch
   * @name Tokens
   * @request POST:/oneinch/tokens
   * @secure
   */
  export namespace Tokens {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TokensPayload;
    export type RequestHeaders = {};
    export type ResponseBody = TokensData;
  }
}
