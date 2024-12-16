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
  GetPriceInferenceData,
  GetPriceInferenceParams,
  ImpliedFuturePriceData,
  ImpliedFuturePriceParams,
  LogReturnToPercentageData,
  LogReturnToPercentageParams,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Allora<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Get price inference for a specific asset and timeframe
   *
   * @tags Allora
   * @name GetPriceInference
   * @request GET:/allora/inference
   * @secure
   */
  getPriceInference = (
    query: GetPriceInferenceParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetPriceInferenceData, any>({
      path: `/allora/inference`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Calculate implied future price
   *
   * @tags Allora
   * @name ImpliedFuturePrice
   * @request GET:/allora/implied-future-price
   * @secure
   */
  impliedFuturePrice = (
    query: ImpliedFuturePriceParams,
    params: RequestParams = {}
  ) =>
    this.http.request<ImpliedFuturePriceData, any>({
      path: `/allora/implied-future-price`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Convert log return to percentage
   *
   * @tags Allora
   * @name LogReturnToPercentage
   * @request GET:/allora/log-return-to-percentage
   * @secure
   */
  logReturnToPercentage = (
    query: LogReturnToPercentageParams,
    params: RequestParams = {}
  ) =>
    this.http.request<LogReturnToPercentageData, any>({
      path: `/allora/log-return-to-percentage`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
}
