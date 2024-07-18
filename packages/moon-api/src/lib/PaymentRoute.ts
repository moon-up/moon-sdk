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

export namespace Payment {
  /**
   * No description
   * @tags payment
   * @name CreatePaymentIntentConfig
   * @request POST:/payment/config
   * @secure
   */
  export namespace CreatePaymentIntentConfig {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreatePaymentIntentConfigPayload;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreatePaymentIntentConfigData;
  }

  /**
   * No description
   * @tags payment
   * @name DeletePaymentIntentConfig
   * @request DELETE:/payment/config/{id}
   * @secure
   */
  export namespace DeletePaymentIntentConfig {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DeletePaymentIntentConfigData;
  }

  /**
   * No description
   * @tags payment
   * @name GetAllPaymentIntentConfigs
   * @request GET:/payment/config
   * @secure
   */
  export namespace GetAllPaymentIntentConfigs {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetAllPaymentIntentConfigsData;
  }

  /**
   * No description
   * @tags payment
   * @name GetOnePaymentIntentConfigs
   * @request GET:/payment/config/{id}
   * @secure
   */
  export namespace GetOnePaymentIntentConfigs {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetOnePaymentIntentConfigsData;
  }

  /**
   * No description
   * @tags payment
   * @name MoralisWebhook
   * @request POST:/payment/webhook/{id}
   * @secure
   */
  export namespace MoralisWebhook {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = IWebhook;
    export type RequestHeaders = {};
    export type ResponseBody = MoralisWebhookData;
  }

  /**
   * No description
   * @tags payment
   * @name PaymentCreatePaymentIntent
   * @request POST:/payment
   * @secure
   */
  export namespace PaymentCreatePaymentIntent {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreatePaymentIntentInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = PaymentCreatePaymentIntentData;
  }

  /**
   * No description
   * @tags payment
   * @name PaymentDeletePaymentIntent
   * @request DELETE:/payment/{id}
   * @secure
   */
  export namespace PaymentDeletePaymentIntent {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = PaymentDeletePaymentIntentData;
  }

  /**
   * No description
   * @tags payment
   * @name PaymentGetAllPaymentIntents
   * @request GET:/payment
   * @secure
   */
  export namespace PaymentGetAllPaymentIntents {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = PaymentGetAllPaymentIntentsData;
  }

  /**
   * No description
   * @tags payment
   * @name PaymentGetAvailableChains
   * @request GET:/payment/chains
   * @secure
   */
  export namespace PaymentGetAvailableChains {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PaymentGetAvailableChainsData;
  }

  /**
   * No description
   * @tags payment
   * @name PaymentGetPaymentIntent
   * @request GET:/payment/{id}
   * @secure
   */
  export namespace PaymentGetPaymentIntent {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = PaymentGetPaymentIntentData;
  }

  /**
   * No description
   * @tags payment
   * @name PaymentUpdatePaymentIntent
   * @request PUT:/payment/{id}
   * @secure
   */
  export namespace PaymentUpdatePaymentIntent {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CreatePaymentIntentInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = PaymentUpdatePaymentIntentData;
  }

  /**
   * No description
   * @tags payment
   * @name TatumWebhook
   * @request POST:/payment/webhook/tatum/{id}
   * @secure
   */
  export namespace TatumWebhook {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = TatumTransactionEvent;
    export type RequestHeaders = {};
    export type ResponseBody = TatumWebhookData;
  }

  /**
   * No description
   * @tags payment
   * @name UpdatePaymentIntentConfig
   * @request PUT:/payment/config/{id}
   * @secure
   */
  export namespace UpdatePaymentIntentConfig {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdatePaymentIntentConfigPayload;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = UpdatePaymentIntentConfigData;
  }
}
