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
  CreatePaymentIntentInput,
  IWebhook,
  PaymentIntentResponse,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Payment<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags payment
   * @name PaymentGetAvailableChains
   * @request GET:/payment/chains
   * @secure
   */
  paymentGetAvailableChains = (params: RequestParams = {}) =>
    this.request<string[], any>({
      path: `/payment/chains`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags payment
   * @name PaymentCreatePaymentIntent
   * @request POST:/payment
   * @secure
   */
  paymentCreatePaymentIntent = (
    data: CreatePaymentIntentInput,
    params: RequestParams = {}
  ) =>
    this.request<PaymentIntentResponse, any>({
      path: `/payment`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags payment
   * @name PaymentGetAllPaymentIntents
   * @request GET:/payment
   * @secure
   */
  paymentGetAllPaymentIntents = (params: RequestParams = {}) =>
    this.request<PaymentIntentResponse[], any>({
      path: `/payment`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags payment
   * @name PaymentDeletePaymentIntent
   * @request DELETE:/payment/{id}
   * @secure
   */
  paymentDeletePaymentIntent = (id: string, params: RequestParams = {}) =>
    this.request<PaymentIntentResponse, any>({
      path: `/payment/${id}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags payment
   * @name PaymentUpdatePaymentIntent
   * @request PUT:/payment/{id}
   * @secure
   */
  paymentUpdatePaymentIntent = (
    id: string,
    data: CreatePaymentIntentInput,
    params: RequestParams = {}
  ) =>
    this.request<PaymentIntentResponse, any>({
      path: `/payment/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags payment
   * @name PaymentGetPaymentIntent
   * @request GET:/payment/{id}
   * @secure
   */
  paymentGetPaymentIntent = (id: string, params: RequestParams = {}) =>
    this.request<PaymentIntentResponse, any>({
      path: `/payment/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags payment
   * @name MoralisWebhook
   * @request POST:/payment/webhook/{id}
   * @secure
   */
  moralisWebhook = (id: string, data: IWebhook, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/payment/webhook/${id}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags payment
   * @name TatumWebhook
   * @request POST:/payment/tatum/webhook/{id}
   * @secure
   */
  tatumWebhook = (id: string, data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/payment/tatum/webhook/${id}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
