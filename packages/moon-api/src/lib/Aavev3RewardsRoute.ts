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
  AAVEv3RewardsInputBody,
  ClaimAllRewardsData,
  ClaimAllRewardsOnBehalfData,
  ClaimAllRewardsToSelfData,
  ClaimRewardsData,
  ClaimRewardsOnBehalfData,
  ClaimRewardsToSelfData,
  GetRewardsByAssetData,
  GetRewardsDataData,
  GetUserRewardsData,
} from './data-contracts';

export namespace Aavev3Rewards {
  /**
   * No description
   * @tags AAVEv3Rewards
   * @name ClaimAllRewards
   * @request POST:/aavev3rewards/{address}/claimAllRewards
   * @secure
   */
  export namespace ClaimAllRewards {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AAVEv3RewardsInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ClaimAllRewardsData;
  }

  /**
   * No description
   * @tags AAVEv3Rewards
   * @name ClaimAllRewardsOnBehalf
   * @request POST:/aavev3rewards/{address}/claimAllRewardsOnBehalf
   * @secure
   */
  export namespace ClaimAllRewardsOnBehalf {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AAVEv3RewardsInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ClaimAllRewardsOnBehalfData;
  }

  /**
   * No description
   * @tags AAVEv3Rewards
   * @name ClaimAllRewardsToSelf
   * @request POST:/aavev3rewards/{address}/claimAllRewardsToSelf
   * @secure
   */
  export namespace ClaimAllRewardsToSelf {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AAVEv3RewardsInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ClaimAllRewardsToSelfData;
  }

  /**
   * No description
   * @tags AAVEv3Rewards
   * @name ClaimRewards
   * @request POST:/aavev3rewards/{address}/claimRewards
   * @secure
   */
  export namespace ClaimRewards {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AAVEv3RewardsInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ClaimRewardsData;
  }

  /**
   * No description
   * @tags AAVEv3Rewards
   * @name ClaimRewardsOnBehalf
   * @request POST:/aavev3rewards/{address}/claimRewardsOnBehalf
   * @secure
   */
  export namespace ClaimRewardsOnBehalf {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AAVEv3RewardsInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ClaimRewardsOnBehalfData;
  }

  /**
   * No description
   * @tags AAVEv3Rewards
   * @name ClaimRewardsToSelf
   * @request POST:/aavev3rewards/{address}/claimRewardsToSelf
   * @secure
   */
  export namespace ClaimRewardsToSelf {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AAVEv3RewardsInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ClaimRewardsToSelfData;
  }

  /**
   * No description
   * @tags AAVEv3Rewards
   * @name GetRewardsByAsset
   * @request GET:/aavev3rewards/{account}/rewardsByAsset
   * @secure
   */
  export namespace GetRewardsByAsset {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      asset: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetRewardsByAssetData;
  }

  /**
   * No description
   * @tags AAVEv3Rewards
   * @name GetRewardsData
   * @request GET:/aavev3rewards/{account}/rewardsData
   * @secure
   */
  export namespace GetRewardsData {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      asset: string;
      chainId: string;
      reward: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetRewardsDataData;
  }

  /**
   * No description
   * @tags AAVEv3Rewards
   * @name GetUserRewards
   * @request GET:/aavev3rewards/{account}/userRewards
   * @secure
   */
  export namespace GetUserRewards {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      assets: string[];
      chainId: string;
      reward: string;
      user: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetUserRewardsData;
  }
}
