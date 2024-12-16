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

export namespace TradingBot {
  /**
   * No description
   * @tags TradingBot
   * @name ActivateBot
   * @request GET:/tradingBot/{botId}/activate
   * @secure
   */
  export namespace ActivateBot {
    export type RequestParams = {
      botId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivateBotData;
  }

  /**
   * No description
   * @tags TradingBot
   * @name Conversation
   * @request GET:/tradingBot/{botId}/twitter/conversation/{tweetId}
   * @secure
   */
  export namespace Conversation {
    export type RequestParams = {
      botId: string;
      tweetId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ConversationData;
  }

  /**
   * No description
   * @tags TradingBot
   * @name CreateTweet
   * @request POST:/tradingBot/{botId}/twitter/createTweet
   * @secure
   */
  export namespace CreateTweet {
    export type RequestParams = {
      botId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = GeneratedTweet;
    export type RequestHeaders = {};
    export type ResponseBody = CreateTweetData;
  }

  /**
   * No description
   * @tags TradingBot
   * @name DeactivateBot
   * @request GET:/tradingBot/{botId}/deactivate
   * @secure
   */
  export namespace DeactivateBot {
    export type RequestParams = {
      botId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeactivateBotData;
  }

  /**
   * No description
   * @tags TradingBot
   * @name FollowingTimeline
   * @request GET:/tradingBot/{botId}/twitter/followingTimeline
   * @secure
   */
  export namespace FollowingTimeline {
    export type RequestParams = {
      botId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FollowingTimelineData;
  }

  /**
   * No description
   * @tags TradingBot
   * @name GetBotLastRunResults
   * @request GET:/tradingBot/{botId}/lastRunResults
   * @secure
   */
  export namespace GetBotLastRunResults {
    export type RequestParams = {
      botId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetBotLastRunResultsData;
  }

  /**
   * No description
   * @tags TradingBot
   * @name GetBotStatus
   * @request GET:/tradingBot/{botId}/status
   * @secure
   */
  export namespace GetBotStatus {
    export type RequestParams = {
      botId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetBotStatusData;
  }

  /**
   * No description
   * @tags TradingBot
   * @name GetConfigs
   * @request GET:/tradingBot/configs
   * @secure
   */
  export namespace GetConfigs {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetConfigsData;
  }

  /**
   * No description
   * @tags TradingBot
   * @name RestartBot
   * @request GET:/tradingBot/{botId}/restart
   * @secure
   */
  export namespace RestartBot {
    export type RequestParams = {
      botId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RestartBotData;
  }

  /**
   * No description
   * @tags TradingBot
   * @name StartBot
   * @request GET:/tradingBot/{botId}/start
   * @secure
   */
  export namespace StartBot {
    export type RequestParams = {
      botId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = StartBotData;
  }

  /**
   * No description
   * @tags TradingBot
   * @name StopBot
   * @request GET:/tradingBot/{botId}/stop
   * @secure
   */
  export namespace StopBot {
    export type RequestParams = {
      botId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = StopBotData;
  }

  /**
   * No description
   * @tags TradingBot
   * @name TriggerBot
   * @request GET:/tradingBot/{botId}/trigger
   * @secure
   */
  export namespace TriggerBot {
    export type RequestParams = {
      botId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TriggerBotData;
  }

  /**
   * No description
   * @tags TradingBot
   * @name TweetHistory
   * @request GET:/tradingBot/{botId}/twitter/tweet/history
   * @secure
   */
  export namespace TweetHistory {
    export type RequestParams = {
      botId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TweetHistoryData;
  }

  /**
   * No description
   * @tags TradingBot
   * @name UpdatePersonality
   * @request PATCH:/tradingBot/{botId}/personality
   * @secure
   */
  export namespace UpdatePersonality {
    export type RequestParams = {
      botId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PersonalityInput;
    export type RequestHeaders = {};
    export type ResponseBody = UpdatePersonalityData;
  }
}
