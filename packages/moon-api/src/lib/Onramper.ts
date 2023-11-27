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
  GetSupportedOnRampsResponse,
  Quotes,
  SellQuotes,
  SupportedAssetResponse,
  SupportedCurrenciesResponse,
  SupportedDefaultResponse,
  SupportedPaymentTypesCurrencyResponse,
  TransactionInput,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Onramper<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags onramper
   * @name OnRamperGetSupportedCurrencies
   * @request GET:/onramper/currencies
   * @secure
   */
  onRamperGetSupportedCurrencies = (
    query: {
      type: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<SupportedCurrenciesResponse, any>({
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
   * @name OnRamperGetSupportedPaymentTypes
   * @request GET:/onramper/payment-types
   * @secure
   */
  onRamperGetSupportedPaymentTypes = (
    query: {
      fiat: string;
      country: string;
      type: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<SupportedPaymentTypesCurrencyResponse, any>({
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
    query: {
      fiat: string;
      country: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<SupportedPaymentTypesCurrencyResponse, any>({
      path: `/onramper/payment-types/fiat`,
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
    query: {
      country: string;
      type: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<SupportedDefaultResponse, any>({
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
   * @name OnRamperGetSupportedAssets
   * @request GET:/onramper/assets
   * @secure
   */
  onRamperGetSupportedAssets = (
    query: {
      source: string;
      country: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<SupportedAssetResponse, any>({
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
   * @name OnRamperGetSupportedOnRampsAll
   * @request GET:/onramper/onramps
   * @secure
   */
  onRamperGetSupportedOnRampsAll = (params: RequestParams = {}) =>
    this.request<GetSupportedOnRampsResponse, any>({
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
   * @name OnRamperGetQuotesBuy
   * @request GET:/onramper/quotes/buy
   * @secure
   */
  onRamperGetQuotesBuy = (
    query: {
      fiat: string;
      crypto: string;
      /** @format double */
      amount: number;
      /** @default "creditcard" */
      paymentMethod?: string;
      /** @default "" */
      uuid?: string;
      /** @default "" */
      clientName?: string;
      /** @default "" */
      country?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<Quotes, any>({
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
    query: {
      fiat: string;
      crypto: string;
      /** @format double */
      amount: number;
      /** @default "creditcard" */
      paymentMethod?: string;
      /** @default "" */
      uuid?: string;
      /** @default "" */
      clientName?: string;
      /** @default "" */
      country?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<SellQuotes, any>({
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
   * @name OnRamperCheckout
   * @request POST:/onramper/fund/${accountName}
   * @secure
   */
  onRamperCheckout = (
    accountName: string,
    data: TransactionInput,
    params: RequestParams = {}
  ) =>
    this.request<any, any>({
      path: `/onramper/fund/$${accountName}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
