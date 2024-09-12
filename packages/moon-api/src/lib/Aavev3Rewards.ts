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
  GetRewardsByAssetParams,
  GetRewardsDataData,
  GetRewardsDataParams,
  GetUserRewardsData,
  GetUserRewardsParams,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Aavev3Rewards<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags AAVEv3Rewards
   * @name ClaimAllRewards
   * @request POST:/aavev3rewards/{address}/claimAllRewards
   * @secure
   */
  claimAllRewards = (
    address: string,
    data: AAVEv3RewardsInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ClaimAllRewardsData, any>({
      path: `/aavev3rewards/${address}/claimAllRewards`,
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
   * @tags AAVEv3Rewards
   * @name ClaimAllRewardsOnBehalf
   * @request POST:/aavev3rewards/{address}/claimAllRewardsOnBehalf
   * @secure
   */
  claimAllRewardsOnBehalf = (
    address: string,
    data: AAVEv3RewardsInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ClaimAllRewardsOnBehalfData, any>({
      path: `/aavev3rewards/${address}/claimAllRewardsOnBehalf`,
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
   * @tags AAVEv3Rewards
   * @name ClaimAllRewardsToSelf
   * @request POST:/aavev3rewards/{address}/claimAllRewardsToSelf
   * @secure
   */
  claimAllRewardsToSelf = (
    address: string,
    data: AAVEv3RewardsInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ClaimAllRewardsToSelfData, any>({
      path: `/aavev3rewards/${address}/claimAllRewardsToSelf`,
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
   * @tags AAVEv3Rewards
   * @name ClaimRewards
   * @request POST:/aavev3rewards/{address}/claimRewards
   * @secure
   */
  claimRewards = (
    address: string,
    data: AAVEv3RewardsInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ClaimRewardsData, any>({
      path: `/aavev3rewards/${address}/claimRewards`,
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
   * @tags AAVEv3Rewards
   * @name ClaimRewardsOnBehalf
   * @request POST:/aavev3rewards/{address}/claimRewardsOnBehalf
   * @secure
   */
  claimRewardsOnBehalf = (
    address: string,
    data: AAVEv3RewardsInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ClaimRewardsOnBehalfData, any>({
      path: `/aavev3rewards/${address}/claimRewardsOnBehalf`,
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
   * @tags AAVEv3Rewards
   * @name ClaimRewardsToSelf
   * @request POST:/aavev3rewards/{address}/claimRewardsToSelf
   * @secure
   */
  claimRewardsToSelf = (
    address: string,
    data: AAVEv3RewardsInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ClaimRewardsToSelfData, any>({
      path: `/aavev3rewards/${address}/claimRewardsToSelf`,
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
   * @tags AAVEv3Rewards
   * @name GetRewardsByAsset
   * @request GET:/aavev3rewards/{account}/rewardsByAsset
   * @secure
   */
  getRewardsByAsset = (
    { account, ...query }: GetRewardsByAssetParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetRewardsByAssetData, any>({
      path: `/aavev3rewards/${account}/rewardsByAsset`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags AAVEv3Rewards
   * @name GetRewardsData
   * @request GET:/aavev3rewards/{account}/rewardsData
   * @secure
   */
  getRewardsData = (
    { account, ...query }: GetRewardsDataParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetRewardsDataData, any>({
      path: `/aavev3rewards/${account}/rewardsData`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags AAVEv3Rewards
   * @name GetUserRewards
   * @request GET:/aavev3rewards/{account}/userRewards
   * @secure
   */
  getUserRewards = (
    { account, ...query }: GetUserRewardsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetUserRewardsData, any>({
      path: `/aavev3rewards/${account}/userRewards`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
}
