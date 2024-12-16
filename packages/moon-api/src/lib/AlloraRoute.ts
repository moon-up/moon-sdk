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
  Asset,
  GetPriceInferenceData,
  ImpliedFuturePriceData,
  LogReturnToPercentageData,
  TimeFrame,
} from './data-contracts';

export namespace Allora {
  /**
   * @description Get price inference for a specific asset and timeframe
   * @tags Allora
   * @name GetPriceInference
   * @request GET:/allora/inference
   * @secure
   */
  export namespace GetPriceInference {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The asset to get inference for (ETH or BTC) */
      asset: Asset;
      /**
       * - The current price of the asset
       * @format double
       */
      currentPrice: number;
      /** - The timeframe for the inference (5m or 8h) */
      timeframe: TimeFrame;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = GetPriceInferenceData;
  }

  /**
   * @description Calculate implied future price
   * @tags Allora
   * @name ImpliedFuturePrice
   * @request GET:/allora/implied-future-price
   * @secure
   */
  export namespace ImpliedFuturePrice {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * - The current price of the asset
       * @format double
       */
      currentPrice: number;
      /**
       * - The log return
       * @format double
       */
      logReturn: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = ImpliedFuturePriceData;
  }

  /**
   * @description Convert log return to percentage
   * @tags Allora
   * @name LogReturnToPercentage
   * @request GET:/allora/log-return-to-percentage
   * @secure
   */
  export namespace LogReturnToPercentage {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * - The log return to convert
       * @format double
       */
      logReturn: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = LogReturnToPercentageData;
  }
}
