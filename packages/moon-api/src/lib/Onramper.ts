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
  OnRamperCheckoutData,
  OnRamperGetQuotesBuyData,
  OnRamperGetQuotesBuyParams,
  OnRamperGetQuotesSellData,
  OnRamperGetQuotesSellParams,
  OnRamperGetSupportedAssetsData,
  OnRamperGetSupportedAssetsParams,
  OnRamperGetSupportedCurrenciesData,
  OnRamperGetSupportedCurrenciesParams,
  OnRamperGetSupportedDefaultsAllData,
  OnRamperGetSupportedDefaultsAllParams,
  OnRamperGetSupportedOnRampsAllData,
  OnRamperGetSupportedPaymentTypesData,
  OnRamperGetSupportedPaymentTypesFiatData,
  OnRamperGetSupportedPaymentTypesFiatParams,
  OnRamperGetSupportedPaymentTypesParams,
  TransactionInput,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Onramper<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags onramper
   * @name OnRamperCheckout
   * @request POST:/onramper/fund/${accountName}
   * @secure
   */
  onRamperCheckout = (
    accountName: string,
    data: TransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<OnRamperCheckoutData, any>({
      path: `/onramper/fund/$${accountName}`,
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
   * @tags onramper
   * @name OnRamperGetQuotesBuy
   * @request GET:/onramper/quotes/buy
   * @secure
   */
  onRamperGetQuotesBuy = (
    query: OnRamperGetQuotesBuyParams,
    params: RequestParams = {}
  ) =>
    this.http.request<OnRamperGetQuotesBuyData, any>({
      path: `/onramper/quotes/buy`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags onramper
   * @name OnRamperGetQuotesSell
   * @request GET:/onramper/quotes/sell
   * @secure
   */
  onRamperGetQuotesSell = (
    query: OnRamperGetQuotesSellParams,
    params: RequestParams = {}
  ) =>
    this.http.request<OnRamperGetQuotesSellData, any>({
      path: `/onramper/quotes/sell`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags onramper
   * @name OnRamperGetSupportedAssets
   * @request GET:/onramper/assets
   * @secure
   */
  onRamperGetSupportedAssets = (
    query: OnRamperGetSupportedAssetsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<OnRamperGetSupportedAssetsData, any>({
      path: `/onramper/assets`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags onramper
   * @name OnRamperGetSupportedCurrencies
   * @request GET:/onramper/currencies
   * @secure
   */
  onRamperGetSupportedCurrencies = (
    query: OnRamperGetSupportedCurrenciesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<OnRamperGetSupportedCurrenciesData, any>({
      path: `/onramper/currencies`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags onramper
   * @name OnRamperGetSupportedDefaultsAll
   * @request GET:/onramper/defaults
   * @secure
   */
  onRamperGetSupportedDefaultsAll = (
    query: OnRamperGetSupportedDefaultsAllParams,
    params: RequestParams = {}
  ) =>
    this.http.request<OnRamperGetSupportedDefaultsAllData, any>({
      path: `/onramper/defaults`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags onramper
   * @name OnRamperGetSupportedOnRampsAll
   * @request GET:/onramper/onramps
   * @secure
   */
  onRamperGetSupportedOnRampsAll = (params: RequestParams = {}) =>
    this.http.request<OnRamperGetSupportedOnRampsAllData, any>({
      path: `/onramper/onramps`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags onramper
   * @name OnRamperGetSupportedPaymentTypes
   * @request GET:/onramper/payment-types
   * @secure
   */
  onRamperGetSupportedPaymentTypes = (
    query: OnRamperGetSupportedPaymentTypesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<OnRamperGetSupportedPaymentTypesData, any>({
      path: `/onramper/payment-types`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags onramper
   * @name OnRamperGetSupportedPaymentTypesFiat
   * @request GET:/onramper/payment-types/fiat
   * @secure
   */
  onRamperGetSupportedPaymentTypesFiat = (
    query: OnRamperGetSupportedPaymentTypesFiatParams,
    params: RequestParams = {}
  ) =>
    this.http.request<OnRamperGetSupportedPaymentTypesFiatData, any>({
      path: `/onramper/payment-types/fiat`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
}
