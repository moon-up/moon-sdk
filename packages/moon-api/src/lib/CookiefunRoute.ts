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
  CookieFunGetKolCommunityData,
  CookieFunGetKolListData,
  CookieFunGetKolNetworkData,
  CookieFunGetPredictiveMetricsData,
  CookieFunGetTokenAnalyticsData,
  CookieFunGetTrendingNarrativesData,
  CookieFunGetTrendingTokensData,
  CookieFunGetTrendingTweetsData,
} from './data-contracts';

export namespace Cookiefun {
  /**
   * @description Retrieves community metrics for a specific KOL.
   * @tags CookieFun
   * @name CookieFunGetKolCommunity
   * @request GET:/cookiefun/kols/{username}/community
   * @secure
   */
  export namespace CookieFunGetKolCommunity {
    export type RequestParams = {
      /** - The username of the KOL. */
      username: string;
    };
    export type RequestQuery = {
      /** - The filter criteria for the community (optional). */
      filter?: string;
      /** - The specific metrics to retrieve. */
      metrics: string[];
      /** - The time period for the metrics. */
      period: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = CookieFunGetKolCommunityData;
  }

  /**
   * @description Retrieves a list of key opinion leaders (KOLs).
   * @tags CookieFun
   * @name CookieFunGetKolList
   * @request GET:/cookiefun/kols
   * @secure
   */
  export namespace CookieFunGetKolList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The filter criteria (optional). */
      filter?: string;
      /**
       * - The number of results to return (optional).
       * @format double
       */
      limit?: number;
      /**
       * - The page number for pagination (optional).
       * @format double
       */
      page?: number;
      /** - The sorting criteria (optional). */
      sort?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = CookieFunGetKolListData;
  }

  /**
   * @description Retrieves the network information for a specific KOL.
   * @tags CookieFun
   * @name CookieFunGetKolNetwork
   * @request GET:/cookiefun/kols/{username}/network
   * @secure
   */
  export namespace CookieFunGetKolNetwork {
    export type RequestParams = {
      /** - The username of the KOL. */
      username: string;
    };
    export type RequestQuery = {
      /**
       * - The depth of the network to retrieve (optional).
       * @format double
       */
      depth?: number;
      /** - The filter criteria for the network (optional). */
      filter?: string;
      /** - The metric to analyze the network (optional). */
      metric?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = CookieFunGetKolNetworkData;
  }

  /**
   * @description Retrieves predictive metrics.
   * @tags CookieFun
   * @name CookieFunGetPredictiveMetrics
   * @request GET:/cookiefun/predictive/{metric}
   * @secure
   */
  export namespace CookieFunGetPredictiveMetrics {
    export type RequestParams = {
      /** - The specific metric to predict. */
      metric: string;
    };
    export type RequestQuery = {
      /**
       * - The minimum confidence level for the prediction (optional).
       * @format double
       */
      confidence?: number;
      /** - The time horizon for the prediction. */
      horizon: string;
      /** - The target for the prediction. */
      target: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = CookieFunGetPredictiveMetricsData;
  }

  /**
   * @description Retrieves token analytics.
   * @tags CookieFun
   * @name CookieFunGetTokenAnalytics
   * @request GET:/cookiefun/tokens/{tokenId}/analytics
   * @secure
   */
  export namespace CookieFunGetTokenAnalytics {
    export type RequestParams = {
      /** - The ID of the token. */
      tokenId: string;
    };
    export type RequestQuery = {
      /** - The interval for the data points. */
      interval: string;
      /** - The metrics to retrieve for the token. */
      metrics: string[];
      /** - The time period for the analytics. */
      period: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = CookieFunGetTokenAnalyticsData;
  }

  /**
   * @description Retrieves trending narratives.
   * @tags CookieFun
   * @name CookieFunGetTrendingNarratives
   * @request GET:/cookiefun/narratives/trending
   * @secure
   */
  export namespace CookieFunGetTrendingNarratives {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The category of narratives to retrieve (optional). */
      category?: string;
      /**
       * - The minimum threshold for trend strength (optional).
       * @format double
       */
      threshold?: number;
      /** - The timeframe for the trending narratives. */
      timeframe: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = CookieFunGetTrendingNarrativesData;
  }

  /**
   * @description Retrieves trending tokens.
   * @tags CookieFun
   * @name CookieFunGetTrendingTokens
   * @request GET:/cookiefun/tokens/trending
   * @secure
   */
  export namespace CookieFunGetTrendingTokens {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The filter criteria for the trending tokens (optional). */
      filter?: string;
      /**
       * - The number of trending tokens to retrieve (optional).
       * @format double
       */
      limit?: number;
      /** - The metrics to include for each token. */
      metrics: string[];
      /** - The sorting criteria for the trending tokens. */
      sort: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = CookieFunGetTrendingTokensData;
  }

  /**
   * @description Retrieves trending tweets.
   * @tags CookieFun
   * @name CookieFunGetTrendingTweets
   * @request GET:/cookiefun/tweets/trending
   * @secure
   */
  export namespace CookieFunGetTrendingTweets {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The category of tweets to retrieve (optional). */
      category?: string;
      /**
       * - The number of trending tweets to retrieve (optional).
       * @format double
       */
      limit?: number;
      /** - The metrics to include for each tweet. */
      metrics: string[];
      /** - The time period for the trending tweets. */
      period: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = CookieFunGetTrendingTweetsData;
  }
}
