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
  OnRamperGetQuotesSellData,
  OnRamperGetSupportedAssetsData,
  OnRamperGetSupportedCurrenciesData,
  OnRamperGetSupportedDefaultsAllData,
  OnRamperGetSupportedOnRampsAllData,
  OnRamperGetSupportedPaymentTypesData,
  OnRamperGetSupportedPaymentTypesFiatData,
  TransactionInput,
} from './data-contracts';

export namespace Onramper {
  /**
   * No description
   * @tags onramper
   * @name OnRamperCheckout
   * @request POST:/onramper/fund/${accountName}
   * @secure
   */
  export namespace OnRamperCheckout {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = TransactionInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = OnRamperCheckoutData;
  }

  /**
   * No description
   * @tags onramper
   * @name OnRamperGetQuotesBuy
   * @request GET:/onramper/quotes/buy
   * @secure
   */
  export namespace OnRamperGetQuotesBuy {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @format double */
      amount: number;
      /** @default "" */
      clientName?: string;
      /** @default "" */
      country?: string;
      crypto: string;
      fiat: string;
      /** @default "creditcard" */
      paymentMethod?: string;
      /** @default "" */
      uuid?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = OnRamperGetQuotesBuyData;
  }

  /**
   * No description
   * @tags onramper
   * @name OnRamperGetQuotesSell
   * @request GET:/onramper/quotes/sell
   * @secure
   */
  export namespace OnRamperGetQuotesSell {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @format double */
      amount: number;
      /** @default "" */
      clientName?: string;
      /** @default "" */
      country?: string;
      crypto: string;
      fiat: string;
      /** @default "creditcard" */
      paymentMethod?: string;
      /** @default "" */
      uuid?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = OnRamperGetQuotesSellData;
  }

  /**
   * No description
   * @tags onramper
   * @name OnRamperGetSupportedAssets
   * @request GET:/onramper/assets
   * @secure
   */
  export namespace OnRamperGetSupportedAssets {
    export type RequestParams = {};
    export type RequestQuery = {
      country: string;
      source: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = OnRamperGetSupportedAssetsData;
  }

  /**
   * No description
   * @tags onramper
   * @name OnRamperGetSupportedCurrencies
   * @request GET:/onramper/currencies
   * @secure
   */
  export namespace OnRamperGetSupportedCurrencies {
    export type RequestParams = {};
    export type RequestQuery = {
      type: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = OnRamperGetSupportedCurrenciesData;
  }

  /**
   * No description
   * @tags onramper
   * @name OnRamperGetSupportedDefaultsAll
   * @request GET:/onramper/defaults
   * @secure
   */
  export namespace OnRamperGetSupportedDefaultsAll {
    export type RequestParams = {};
    export type RequestQuery = {
      country: string;
      type: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = OnRamperGetSupportedDefaultsAllData;
  }

  /**
   * No description
   * @tags onramper
   * @name OnRamperGetSupportedOnRampsAll
   * @request GET:/onramper/onramps
   * @secure
   */
  export namespace OnRamperGetSupportedOnRampsAll {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = OnRamperGetSupportedOnRampsAllData;
  }

  /**
   * No description
   * @tags onramper
   * @name OnRamperGetSupportedPaymentTypes
   * @request GET:/onramper/payment-types
   * @secure
   */
  export namespace OnRamperGetSupportedPaymentTypes {
    export type RequestParams = {};
    export type RequestQuery = {
      country: string;
      fiat: string;
      type: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = OnRamperGetSupportedPaymentTypesData;
  }

  /**
   * No description
   * @tags onramper
   * @name OnRamperGetSupportedPaymentTypesFiat
   * @request GET:/onramper/payment-types/fiat
   * @secure
   */
  export namespace OnRamperGetSupportedPaymentTypesFiat {
    export type RequestParams = {};
    export type RequestQuery = {
      country: string;
      fiat: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = OnRamperGetSupportedPaymentTypesFiatData;
  }
}
