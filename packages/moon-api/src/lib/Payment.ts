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
  CreatePaymentIntentConfigData,
  CreatePaymentIntentConfigPayload,
  CreatePaymentIntentInput,
  DeletePaymentIntentConfigData,
  GetAllPaymentIntentConfigsData,
  GetOnePaymentIntentConfigsData,
  IWebhook,
  MoralisWebhookData,
  PaymentCreatePaymentIntentData,
  PaymentDeletePaymentIntentData,
  PaymentGetAllPaymentIntentsData,
  PaymentGetAvailableChainsData,
  PaymentGetPaymentIntentData,
  PaymentUpdatePaymentIntentData,
  TatumTransactionEvent,
  TatumWebhookData,
  UpdatePaymentIntentConfigData,
  UpdatePaymentIntentConfigPayload,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Payment<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags payment
   * @name CreatePaymentIntentConfig
   * @request POST:/payment/config
   * @secure
   */
  createPaymentIntentConfig = (
    data: CreatePaymentIntentConfigPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<CreatePaymentIntentConfigData, any>({
      path: `/payment/config`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags payment
   * @name DeletePaymentIntentConfig
   * @request DELETE:/payment/config/{id}
   * @secure
   */
  deletePaymentIntentConfig = (id: string, params: RequestParams = {}) =>
    this.http.request<DeletePaymentIntentConfigData, any>({
      path: `/payment/config/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags payment
   * @name GetAllPaymentIntentConfigs
   * @request GET:/payment/config
   * @secure
   */
  getAllPaymentIntentConfigs = (params: RequestParams = {}) =>
    this.http.request<GetAllPaymentIntentConfigsData, any>({
      path: `/payment/config`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags payment
   * @name GetOnePaymentIntentConfigs
   * @request GET:/payment/config/{id}
   * @secure
   */
  getOnePaymentIntentConfigs = (id: string, params: RequestParams = {}) =>
    this.http.request<GetOnePaymentIntentConfigsData, any>({
      path: `/payment/config/${id}`,
      method: 'GET',
      secure: true,
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
    this.http.request<MoralisWebhookData, any>({
      path: `/payment/webhook/${id}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
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
    this.http.request<PaymentCreatePaymentIntentData, any>({
      path: `/payment`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
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
    this.http.request<PaymentDeletePaymentIntentData, any>({
      path: `/payment/${id}`,
      method: 'DELETE',
      secure: true,
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
    this.http.request<PaymentGetAllPaymentIntentsData, any>({
      path: `/payment`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags payment
   * @name PaymentGetAvailableChains
   * @request GET:/payment/chains
   * @secure
   */
  paymentGetAvailableChains = (params: RequestParams = {}) =>
    this.http.request<PaymentGetAvailableChainsData, any>({
      path: `/payment/chains`,
      method: 'GET',
      secure: true,
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
    this.http.request<PaymentGetPaymentIntentData, any>({
      path: `/payment/${id}`,
      method: 'GET',
      secure: true,
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
    this.http.request<PaymentUpdatePaymentIntentData, any>({
      path: `/payment/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags payment
   * @name TatumWebhook
   * @request POST:/payment/webhook/tatum/{id}
   * @secure
   */
  tatumWebhook = (
    id: string,
    data: TatumTransactionEvent,
    params: RequestParams = {}
  ) =>
    this.http.request<TatumWebhookData, any>({
      path: `/payment/webhook/tatum/${id}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags payment
   * @name UpdatePaymentIntentConfig
   * @request PUT:/payment/config/{id}
   * @secure
   */
  updatePaymentIntentConfig = (
    id: string,
    data: UpdatePaymentIntentConfigPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<UpdatePaymentIntentConfigData, any>({
      path: `/payment/config/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
