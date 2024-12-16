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
  CookieFunGetKolCommunityParams,
  CookieFunGetKolListData,
  CookieFunGetKolListParams,
  CookieFunGetKolNetworkData,
  CookieFunGetKolNetworkParams,
  CookieFunGetPredictiveMetricsData,
  CookieFunGetPredictiveMetricsParams,
  CookieFunGetTokenAnalyticsData,
  CookieFunGetTokenAnalyticsParams,
  CookieFunGetTrendingNarrativesData,
  CookieFunGetTrendingNarrativesParams,
  CookieFunGetTrendingTokensData,
  CookieFunGetTrendingTokensParams,
  CookieFunGetTrendingTweetsData,
  CookieFunGetTrendingTweetsParams,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Cookiefun<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Retrieves community metrics for a specific KOL.
   *
   * @tags CookieFun
   * @name CookieFunGetKolCommunity
   * @request GET:/cookiefun/kols/{username}/community
   * @secure
   */
  cookieFunGetKolCommunity = (
    { username, ...query }: CookieFunGetKolCommunityParams,
    params: RequestParams = {}
  ) =>
    this.http.request<CookieFunGetKolCommunityData, any>({
      path: `/cookiefun/kols/${username}/community`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves a list of key opinion leaders (KOLs).
   *
   * @tags CookieFun
   * @name CookieFunGetKolList
   * @request GET:/cookiefun/kols
   * @secure
   */
  cookieFunGetKolList = (
    query: CookieFunGetKolListParams,
    params: RequestParams = {}
  ) =>
    this.http.request<CookieFunGetKolListData, any>({
      path: `/cookiefun/kols`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the network information for a specific KOL.
   *
   * @tags CookieFun
   * @name CookieFunGetKolNetwork
   * @request GET:/cookiefun/kols/{username}/network
   * @secure
   */
  cookieFunGetKolNetwork = (
    { username, ...query }: CookieFunGetKolNetworkParams,
    params: RequestParams = {}
  ) =>
    this.http.request<CookieFunGetKolNetworkData, any>({
      path: `/cookiefun/kols/${username}/network`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves predictive metrics.
   *
   * @tags CookieFun
   * @name CookieFunGetPredictiveMetrics
   * @request GET:/cookiefun/predictive/{metric}
   * @secure
   */
  cookieFunGetPredictiveMetrics = (
    { metric, ...query }: CookieFunGetPredictiveMetricsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<CookieFunGetPredictiveMetricsData, any>({
      path: `/cookiefun/predictive/${metric}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves token analytics.
   *
   * @tags CookieFun
   * @name CookieFunGetTokenAnalytics
   * @request GET:/cookiefun/tokens/{tokenId}/analytics
   * @secure
   */
  cookieFunGetTokenAnalytics = (
    { tokenId, ...query }: CookieFunGetTokenAnalyticsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<CookieFunGetTokenAnalyticsData, any>({
      path: `/cookiefun/tokens/${tokenId}/analytics`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves trending narratives.
   *
   * @tags CookieFun
   * @name CookieFunGetTrendingNarratives
   * @request GET:/cookiefun/narratives/trending
   * @secure
   */
  cookieFunGetTrendingNarratives = (
    query: CookieFunGetTrendingNarrativesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<CookieFunGetTrendingNarrativesData, any>({
      path: `/cookiefun/narratives/trending`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves trending tokens.
   *
   * @tags CookieFun
   * @name CookieFunGetTrendingTokens
   * @request GET:/cookiefun/tokens/trending
   * @secure
   */
  cookieFunGetTrendingTokens = (
    query: CookieFunGetTrendingTokensParams,
    params: RequestParams = {}
  ) =>
    this.http.request<CookieFunGetTrendingTokensData, any>({
      path: `/cookiefun/tokens/trending`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves trending tweets.
   *
   * @tags CookieFun
   * @name CookieFunGetTrendingTweets
   * @request GET:/cookiefun/tweets/trending
   * @secure
   */
  cookieFunGetTrendingTweets = (
    query: CookieFunGetTrendingTweetsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<CookieFunGetTrendingTweetsData, any>({
      path: `/cookiefun/tweets/trending`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
}
