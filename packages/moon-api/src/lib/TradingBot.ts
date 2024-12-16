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
  ActivateBotData,
  ConversationData,
  CreateTweetData,
  DeactivateBotData,
  FollowingTimelineData,
  GeneratedTweet,
  GetBotLastRunResultsData,
  GetBotStatusData,
  GetConfigsData,
  PersonalityInput,
  RestartBotData,
  StartBotData,
  StopBotData,
  TriggerBotData,
  TweetHistoryData,
  UpdatePersonalityData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class TradingBot<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags TradingBot
   * @name ActivateBot
   * @request GET:/tradingBot/{botId}/activate
   * @secure
   */
  activateBot = (botId: string, params: RequestParams = {}) =>
    this.http.request<ActivateBotData, any>({
      path: `/tradingBot/${botId}/activate`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags TradingBot
   * @name Conversation
   * @request GET:/tradingBot/{botId}/twitter/conversation/{tweetId}
   * @secure
   */
  conversation = (botId: string, tweetId: string, params: RequestParams = {}) =>
    this.http.request<ConversationData, any>({
      path: `/tradingBot/${botId}/twitter/conversation/${tweetId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags TradingBot
   * @name CreateTweet
   * @request POST:/tradingBot/{botId}/twitter/createTweet
   * @secure
   */
  createTweet = (
    botId: string,
    data: GeneratedTweet,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateTweetData, any>({
      path: `/tradingBot/${botId}/twitter/createTweet`,
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
   * @tags TradingBot
   * @name DeactivateBot
   * @request GET:/tradingBot/{botId}/deactivate
   * @secure
   */
  deactivateBot = (botId: string, params: RequestParams = {}) =>
    this.http.request<DeactivateBotData, any>({
      path: `/tradingBot/${botId}/deactivate`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags TradingBot
   * @name FollowingTimeline
   * @request GET:/tradingBot/{botId}/twitter/followingTimeline
   * @secure
   */
  followingTimeline = (botId: string, params: RequestParams = {}) =>
    this.http.request<FollowingTimelineData, any>({
      path: `/tradingBot/${botId}/twitter/followingTimeline`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags TradingBot
   * @name GetBotLastRunResults
   * @request GET:/tradingBot/{botId}/lastRunResults
   * @secure
   */
  getBotLastRunResults = (botId: string, params: RequestParams = {}) =>
    this.http.request<GetBotLastRunResultsData, any>({
      path: `/tradingBot/${botId}/lastRunResults`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags TradingBot
   * @name GetBotStatus
   * @request GET:/tradingBot/{botId}/status
   * @secure
   */
  getBotStatus = (botId: string, params: RequestParams = {}) =>
    this.http.request<GetBotStatusData, any>({
      path: `/tradingBot/${botId}/status`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags TradingBot
   * @name GetConfigs
   * @request GET:/tradingBot/configs
   * @secure
   */
  getConfigs = (params: RequestParams = {}) =>
    this.http.request<GetConfigsData, any>({
      path: `/tradingBot/configs`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags TradingBot
   * @name RestartBot
   * @request GET:/tradingBot/{botId}/restart
   * @secure
   */
  restartBot = (botId: string, params: RequestParams = {}) =>
    this.http.request<RestartBotData, any>({
      path: `/tradingBot/${botId}/restart`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags TradingBot
   * @name StartBot
   * @request GET:/tradingBot/{botId}/start
   * @secure
   */
  startBot = (botId: string, params: RequestParams = {}) =>
    this.http.request<StartBotData, any>({
      path: `/tradingBot/${botId}/start`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags TradingBot
   * @name StopBot
   * @request GET:/tradingBot/{botId}/stop
   * @secure
   */
  stopBot = (botId: string, params: RequestParams = {}) =>
    this.http.request<StopBotData, any>({
      path: `/tradingBot/${botId}/stop`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags TradingBot
   * @name TriggerBot
   * @request GET:/tradingBot/{botId}/trigger
   * @secure
   */
  triggerBot = (botId: string, params: RequestParams = {}) =>
    this.http.request<TriggerBotData, any>({
      path: `/tradingBot/${botId}/trigger`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags TradingBot
   * @name TweetHistory
   * @request GET:/tradingBot/{botId}/twitter/tweet/history
   * @secure
   */
  tweetHistory = (botId: string, params: RequestParams = {}) =>
    this.http.request<TweetHistoryData, any>({
      path: `/tradingBot/${botId}/twitter/tweet/history`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags TradingBot
   * @name UpdatePersonality
   * @request PATCH:/tradingBot/{botId}/personality
   * @secure
   */
  updatePersonality = (
    botId: string,
    data: PersonalityInput,
    params: RequestParams = {}
  ) =>
    this.http.request<UpdatePersonalityData, any>({
      path: `/tradingBot/${botId}/personality`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
