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
  AbstainData,
  ApproveOutput,
  AttachData,
  AttachTokenToGaugeData,
  CalculateOptimalVoteDistributionData,
  CalculateOptimalVoteDistributionParams,
  CheckpointData,
  ClaimBribesData,
  ClaimFeesData,
  ClaimRewardsResult,
  CreateGaugeData,
  CreateLockData,
  CreateLockForData,
  DelegateBySigData,
  DelegateData,
  DepositForData,
  DetachData,
  DetachTokenFromGaugeData,
  DistributeData,
  GetApprovedData,
  GetApprovedParams,
  GetBalanceOfAtNftData,
  GetBalanceOfAtNftParams,
  GetBalanceOfNftData,
  GetBalanceOfNftParams,
  GetBalanceOfOutput,
  GetBalanceOfParams4,
  GetDelegatesData,
  GetDelegatesParams,
  GetFusionByAddressData,
  GetFusionsByTypeData,
  GetFusionsData,
  GetLastUserSlopeData,
  GetLastUserSlopeParams,
  GetLockedData,
  GetLockedEndData,
  GetLockedEndParams,
  GetLockedParams,
  GetOwnerOfData,
  GetOwnerOfParams,
  GetPastTotalSupplyData,
  GetPastTotalSupplyParams,
  GetPastVotesData,
  GetPastVotesParams,
  GetTokenUriData,
  GetTokenUriParams,
  GetTopAprFusionsData,
  GetTopAprFusionsParams,
  GetTopPairsData,
  GetTopPairsParams,
  GetTopTokensData,
  GetTopTokensParams,
  GetTotalSupplyAtData,
  GetTotalSupplyAtParams,
  GetTotalSupplyAtTData,
  GetTotalSupplyAtTParams,
  GetTotalSupplyOutput,
  GetTotalSupplyParams4,
  GetTotalValueLockedData,
  GetTotalWeightData,
  GetTotalWeightParams,
  GetUserPointHistoryData,
  GetUserPointHistoryParams,
  GetUserPointHistoryTsData,
  GetUserPointHistoryTsParams,
  GetVotesData,
  GetVotesParams,
  GetWeightsData,
  GetWeightsParams,
  IncreaseLockAmountData,
  IncreaseUnlockTimeData,
  IsApprovedForAllParams1,
  IsApprovedForAllResult,
  IsGaugeData,
  IsGaugeParams,
  IsWhitelistedData,
  IsWhitelistedParams,
  KillGaugeData,
  LastVotedData,
  LastVotedParams,
  MergeData,
  NotifyRewardAmountData,
  PokeData,
  PoolVoteLengthData,
  PoolVoteLengthParams,
  ResetData,
  ReviveGaugeData,
  SafeTransferFromResult,
  SetApprovalForAllResult,
  SplitData,
  TransferFromOutput,
  VeNFTInputBody,
  VeTheNftVoterInputBody,
  VoteData,
  VoteWithOptimalDistributionData,
  VoteWithOptimalDistributionPayload,
  VotingData,
  WhitelistData,
  WithdrawOutput,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Thena<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags VeTheNFT
   * @name Abstain
   * @request POST:/thena/nft/{address}/abstain
   * @secure
   */
  abstain = (
    address: string,
    data: VeNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<AbstainData, any>({
      path: `/thena/nft/${address}/abstain`,
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
   * @tags VeTheNFT
   * @name Approve
   * @request POST:/thena/nft/{address}/approve
   * @secure
   */
  approve = (
    address: string,
    data: VeNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ApproveOutput, any>({
      path: `/thena/nft/${address}/approve`,
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
   * @tags VeTheNFT
   * @name Attach
   * @request POST:/thena/nft/{address}/attach
   * @secure
   */
  attach = (
    address: string,
    data: VeNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<AttachData, any>({
      path: `/thena/nft/${address}/attach`,
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
   * @tags VeTheNftVoter
   * @name AttachTokenToGauge
   * @request POST:/thena/voter/{address}/attachTokenToGauge
   * @secure
   */
  attachTokenToGauge = (
    address: string,
    data: VeTheNftVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<AttachTokenToGaugeData, any>({
      path: `/thena/voter/${address}/attachTokenToGauge`,
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
   * @tags Thena
   * @name CalculateOptimalVoteDistribution
   * @request GET:/thena/data/vote-distribution
   * @secure
   */
  calculateOptimalVoteDistribution = (
    query: CalculateOptimalVoteDistributionParams,
    params: RequestParams = {}
  ) =>
    this.http.request<CalculateOptimalVoteDistributionData, any>({
      path: `/thena/data/vote-distribution`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags VeTheNFT
   * @name Checkpoint
   * @request POST:/thena/nft/{address}/checkpoint
   * @secure
   */
  checkpoint = (
    address: string,
    data: VeNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<CheckpointData, any>({
      path: `/thena/nft/${address}/checkpoint`,
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
   * @tags VeTheNftVoter
   * @name ClaimBribes
   * @request POST:/thena/voter/{address}/claimBribes
   * @secure
   */
  claimBribes = (
    address: string,
    data: VeTheNftVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ClaimBribesData, any>({
      path: `/thena/voter/${address}/claimBribes`,
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
   * @tags VeTheNftVoter
   * @name ClaimFees
   * @request POST:/thena/voter/{address}/claimFees
   * @secure
   */
  claimFees = (
    address: string,
    data: VeTheNftVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ClaimFeesData, any>({
      path: `/thena/voter/${address}/claimFees`,
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
   * @tags VeTheNftVoter
   * @name ClaimRewards
   * @request POST:/thena/voter/{address}/claimRewards
   * @secure
   */
  claimRewards = (
    address: string,
    data: VeTheNftVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ClaimRewardsResult, any>({
      path: `/thena/voter/${address}/claimRewards`,
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
   * @tags VeTheNftVoter
   * @name CreateGauge
   * @request POST:/thena/voter/{address}/createGauge
   * @secure
   */
  createGauge = (
    address: string,
    data: VeTheNftVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateGaugeData, any>({
      path: `/thena/voter/${address}/createGauge`,
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
   * @tags VeTheNFT
   * @name CreateLock
   * @request POST:/thena/nft/{address}/createLock
   * @secure
   */
  createLock = (
    address: string,
    data: VeNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateLockData, any>({
      path: `/thena/nft/${address}/createLock`,
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
   * @tags VeTheNFT
   * @name CreateLockFor
   * @request POST:/thena/nft/{address}/createLockFor
   * @secure
   */
  createLockFor = (
    address: string,
    data: VeNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateLockForData, any>({
      path: `/thena/nft/${address}/createLockFor`,
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
   * @tags VeTheNFT
   * @name Delegate
   * @request POST:/thena/nft/{address}/delegate
   * @secure
   */
  delegate = (
    address: string,
    data: VeNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<DelegateData, any>({
      path: `/thena/nft/${address}/delegate`,
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
   * @tags VeTheNFT
   * @name DelegateBySig
   * @request POST:/thena/nft/{address}/delegateBySig
   * @secure
   */
  delegateBySig = (
    address: string,
    data: VeNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<DelegateBySigData, any>({
      path: `/thena/nft/${address}/delegateBySig`,
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
   * @tags VeTheNFT
   * @name DepositFor
   * @request POST:/thena/nft/{address}/depositFor
   * @secure
   */
  depositFor = (
    address: string,
    data: VeNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<DepositForData, any>({
      path: `/thena/nft/${address}/depositFor`,
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
   * @tags VeTheNFT
   * @name Detach
   * @request POST:/thena/nft/{address}/detach
   * @secure
   */
  detach = (
    address: string,
    data: VeNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<DetachData, any>({
      path: `/thena/nft/${address}/detach`,
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
   * @tags VeTheNftVoter
   * @name DetachTokenFromGauge
   * @request POST:/thena/voter/{address}/detachTokenFromGauge
   * @secure
   */
  detachTokenFromGauge = (
    address: string,
    data: VeTheNftVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<DetachTokenFromGaugeData, any>({
      path: `/thena/voter/${address}/detachTokenFromGauge`,
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
   * @tags VeTheNftVoter
   * @name Distribute
   * @request POST:/thena/voter/{address}/distribute
   * @secure
   */
  distribute = (
    address: string,
    data: VeTheNftVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<DistributeData, any>({
      path: `/thena/voter/${address}/distribute`,
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
   * @tags VeTheNFT
   * @name GetApproved
   * @request GET:/thena/nft/{tokenId}/getApproved
   * @secure
   */
  getApproved = (
    { tokenId, ...query }: GetApprovedParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetApprovedData, any>({
      path: `/thena/nft/${tokenId}/getApproved`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags VeTheNFT
   * @name GetBalanceOf
   * @request GET:/thena/nft/{account}/balanceOf
   * @secure
   */
  getBalanceOf = (
    { account, ...query }: GetBalanceOfParams4,
    params: RequestParams = {}
  ) =>
    this.http.request<GetBalanceOfOutput, any>({
      path: `/thena/nft/${account}/balanceOf`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags VeTheNFT
   * @name GetBalanceOfAtNft
   * @request GET:/thena/nft/{tokenId}/balanceOfAtNFT
   * @secure
   */
  getBalanceOfAtNft = (
    { tokenId, ...query }: GetBalanceOfAtNftParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetBalanceOfAtNftData, any>({
      path: `/thena/nft/${tokenId}/balanceOfAtNFT`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags VeTheNFT
   * @name GetBalanceOfNft
   * @request GET:/thena/nft/{tokenId}/balanceOfNFT
   * @secure
   */
  getBalanceOfNft = (
    { tokenId, ...query }: GetBalanceOfNftParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetBalanceOfNftData, any>({
      path: `/thena/nft/${tokenId}/balanceOfNFT`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags VeTheNFT
   * @name GetDelegates
   * @request GET:/thena/nft/{delegator}/delegates
   * @secure
   */
  getDelegates = (
    { delegator, ...query }: GetDelegatesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetDelegatesData, any>({
      path: `/thena/nft/${delegator}/delegates`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Thena
   * @name GetFusionByAddress
   * @request GET:/thena/data/fusions/{address}
   * @secure
   */
  getFusionByAddress = (address: string, params: RequestParams = {}) =>
    this.http.request<GetFusionByAddressData, any>({
      path: `/thena/data/fusions/${address}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Thena
   * @name GetFusions
   * @request GET:/thena/data/fusions
   * @secure
   */
  getFusions = (params: RequestParams = {}) =>
    this.http.request<GetFusionsData, any>({
      path: `/thena/data/fusions`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Thena
   * @name GetFusionsByType
   * @request GET:/thena/data/fusions/type/{type}
   * @secure
   */
  getFusionsByType = (type: string, params: RequestParams = {}) =>
    this.http.request<GetFusionsByTypeData, any>({
      path: `/thena/data/fusions/type/${type}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags VeTheNFT
   * @name GetLastUserSlope
   * @request GET:/thena/nft/{tokenId}/getLastUserSlope
   * @secure
   */
  getLastUserSlope = (
    { tokenId, ...query }: GetLastUserSlopeParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetLastUserSlopeData, any>({
      path: `/thena/nft/${tokenId}/getLastUserSlope`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags VeTheNFT
   * @name GetLocked
   * @request GET:/thena/nft/{tokenId}/locked
   * @secure
   */
  getLocked = (
    { tokenId, ...query }: GetLockedParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetLockedData, any>({
      path: `/thena/nft/${tokenId}/locked`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags VeTheNFT
   * @name GetLockedEnd
   * @request GET:/thena/nft/{tokenId}/lockedEnd
   * @secure
   */
  getLockedEnd = (
    { tokenId, ...query }: GetLockedEndParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetLockedEndData, any>({
      path: `/thena/nft/${tokenId}/lockedEnd`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags VeTheNFT
   * @name GetOwnerOf
   * @request GET:/thena/nft/{tokenId}/ownerOf
   * @secure
   */
  getOwnerOf = (
    { tokenId, ...query }: GetOwnerOfParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetOwnerOfData, any>({
      path: `/thena/nft/${tokenId}/ownerOf`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags VeTheNFT
   * @name GetPastTotalSupply
   * @request GET:/thena/nft/getPastTotalSupply
   * @secure
   */
  getPastTotalSupply = (
    query: GetPastTotalSupplyParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetPastTotalSupplyData, any>({
      path: `/thena/nft/getPastTotalSupply`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags VeTheNFT
   * @name GetPastVotes
   * @request GET:/thena/nft/{account}/getPastVotes
   * @secure
   */
  getPastVotes = (
    { account, ...query }: GetPastVotesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetPastVotesData, any>({
      path: `/thena/nft/${account}/getPastVotes`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags VeTheNFT
   * @name GetTokenUri
   * @request GET:/thena/nft/{tokenId}/tokenURI
   * @secure
   */
  getTokenUri = (
    { tokenId, ...query }: GetTokenUriParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetTokenUriData, any>({
      path: `/thena/nft/${tokenId}/tokenURI`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Thena
   * @name GetTopAprFusions
   * @request GET:/thena/data/fusions/top-apr
   * @secure
   */
  getTopAprFusions = (
    query: GetTopAprFusionsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetTopAprFusionsData, any>({
      path: `/thena/data/fusions/top-apr`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Thena
   * @name GetTopPairs
   * @request GET:/thena/data/pairs/top
   * @secure
   */
  getTopPairs = (query: GetTopPairsParams, params: RequestParams = {}) =>
    this.http.request<GetTopPairsData, any>({
      path: `/thena/data/pairs/top`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Thena
   * @name GetTopTokens
   * @request GET:/thena/data/tokens/top
   * @secure
   */
  getTopTokens = (query: GetTopTokensParams, params: RequestParams = {}) =>
    this.http.request<GetTopTokensData, any>({
      path: `/thena/data/tokens/top`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags VeTheNFT
   * @name GetTotalSupply
   * @request GET:/thena/nft/totalSupply
   * @secure
   */
  getTotalSupply = (query: GetTotalSupplyParams4, params: RequestParams = {}) =>
    this.http.request<GetTotalSupplyOutput, any>({
      path: `/thena/nft/totalSupply`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags VeTheNFT
   * @name GetTotalSupplyAt
   * @request GET:/thena/nft/totalSupplyAt
   * @secure
   */
  getTotalSupplyAt = (
    query: GetTotalSupplyAtParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetTotalSupplyAtData, any>({
      path: `/thena/nft/totalSupplyAt`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags VeTheNFT
   * @name GetTotalSupplyAtT
   * @request GET:/thena/nft/totalSupplyAtT
   * @secure
   */
  getTotalSupplyAtT = (
    query: GetTotalSupplyAtTParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetTotalSupplyAtTData, any>({
      path: `/thena/nft/totalSupplyAtT`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Thena
   * @name GetTotalValueLocked
   * @request GET:/thena/data/tvl
   * @secure
   */
  getTotalValueLocked = (params: RequestParams = {}) =>
    this.http.request<GetTotalValueLockedData, any>({
      path: `/thena/data/tvl`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags VeTheNftVoter
   * @name GetTotalWeight
   * @request GET:/thena/voter/totalWeight
   * @secure
   */
  getTotalWeight = (query: GetTotalWeightParams, params: RequestParams = {}) =>
    this.http.request<GetTotalWeightData, any>({
      path: `/thena/voter/totalWeight`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags VeTheNFT
   * @name GetUserPointHistory
   * @request GET:/thena/nft/{tokenId}/userPointHistory
   * @secure
   */
  getUserPointHistory = (
    { tokenId, ...query }: GetUserPointHistoryParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetUserPointHistoryData, any>({
      path: `/thena/nft/${tokenId}/userPointHistory`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags VeTheNFT
   * @name GetUserPointHistoryTs
   * @request GET:/thena/nft/{tokenId}/userPointHistoryTS
   * @secure
   */
  getUserPointHistoryTs = (
    { tokenId, ...query }: GetUserPointHistoryTsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetUserPointHistoryTsData, any>({
      path: `/thena/nft/${tokenId}/userPointHistoryTS`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags VeTheNFT
   * @name GetVotes
   * @request GET:/thena/nft/{account}/getVotes
   * @secure
   */
  getVotes = (
    { account, ...query }: GetVotesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetVotesData, any>({
      path: `/thena/nft/${account}/getVotes`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags VeTheNftVoter
   * @name GetWeights
   * @request GET:/thena/voter/weights
   * @secure
   */
  getWeights = (query: GetWeightsParams, params: RequestParams = {}) =>
    this.http.request<GetWeightsData, any>({
      path: `/thena/voter/weights`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags VeTheNFT
   * @name IncreaseLockAmount
   * @request POST:/thena/nft/{address}/increaseLockAmount
   * @secure
   */
  increaseLockAmount = (
    address: string,
    data: VeNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<IncreaseLockAmountData, any>({
      path: `/thena/nft/${address}/increaseLockAmount`,
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
   * @tags VeTheNFT
   * @name IncreaseUnlockTime
   * @request POST:/thena/nft/{address}/increaseUnlockTime
   * @secure
   */
  increaseUnlockTime = (
    address: string,
    data: VeNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<IncreaseUnlockTimeData, any>({
      path: `/thena/nft/${address}/increaseUnlockTime`,
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
   * @tags VeTheNFT
   * @name IsApprovedForAll
   * @request GET:/thena/nft/{owner}/isApprovedForAll
   * @secure
   */
  isApprovedForAll = (
    { owner, ...query }: IsApprovedForAllParams1,
    params: RequestParams = {}
  ) =>
    this.http.request<IsApprovedForAllResult, any>({
      path: `/thena/nft/${owner}/isApprovedForAll`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags VeTheNftVoter
   * @name IsGauge
   * @request GET:/thena/voter/isGauge
   * @secure
   */
  isGauge = (query: IsGaugeParams, params: RequestParams = {}) =>
    this.http.request<IsGaugeData, any>({
      path: `/thena/voter/isGauge`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags VeTheNftVoter
   * @name IsWhitelisted
   * @request GET:/thena/voter/isWhitelisted
   * @secure
   */
  isWhitelisted = (query: IsWhitelistedParams, params: RequestParams = {}) =>
    this.http.request<IsWhitelistedData, any>({
      path: `/thena/voter/isWhitelisted`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags VeTheNftVoter
   * @name KillGauge
   * @request POST:/thena/voter/{address}/killGauge
   * @secure
   */
  killGauge = (
    address: string,
    data: VeTheNftVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<KillGaugeData, any>({
      path: `/thena/voter/${address}/killGauge`,
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
   * @tags VeTheNftVoter
   * @name LastVoted
   * @request GET:/thena/voter/lastVoted
   * @secure
   */
  lastVoted = (query: LastVotedParams, params: RequestParams = {}) =>
    this.http.request<LastVotedData, any>({
      path: `/thena/voter/lastVoted`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags VeTheNFT
   * @name Merge
   * @request POST:/thena/nft/{address}/merge
   * @secure
   */
  merge = (address: string, data: VeNFTInputBody, params: RequestParams = {}) =>
    this.http.request<MergeData, any>({
      path: `/thena/nft/${address}/merge`,
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
   * @tags VeTheNftVoter
   * @name NotifyRewardAmount
   * @request POST:/thena/voter/{address}/notifyRewardAmount
   * @secure
   */
  notifyRewardAmount = (
    address: string,
    data: VeTheNftVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<NotifyRewardAmountData, any>({
      path: `/thena/voter/${address}/notifyRewardAmount`,
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
   * @tags VeTheNftVoter
   * @name Poke
   * @request POST:/thena/voter/{address}/poke
   * @secure
   */
  poke = (
    address: string,
    data: VeTheNftVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<PokeData, any>({
      path: `/thena/voter/${address}/poke`,
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
   * @tags VeTheNftVoter
   * @name PoolVoteLength
   * @request GET:/thena/voter/poolVoteLength
   * @secure
   */
  poolVoteLength = (query: PoolVoteLengthParams, params: RequestParams = {}) =>
    this.http.request<PoolVoteLengthData, any>({
      path: `/thena/voter/poolVoteLength`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags VeTheNftVoter
   * @name Reset
   * @request POST:/thena/voter/{address}/reset
   * @secure
   */
  reset = (
    address: string,
    data: VeTheNftVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ResetData, any>({
      path: `/thena/voter/${address}/reset`,
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
   * @tags VeTheNftVoter
   * @name ReviveGauge
   * @request POST:/thena/voter/{address}/reviveGauge
   * @secure
   */
  reviveGauge = (
    address: string,
    data: VeTheNftVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ReviveGaugeData, any>({
      path: `/thena/voter/${address}/reviveGauge`,
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
   * @tags VeTheNFT
   * @name SafeTransferFrom
   * @request POST:/thena/nft/{address}/safeTransferFrom
   * @secure
   */
  safeTransferFrom = (
    address: string,
    data: VeNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SafeTransferFromResult, any>({
      path: `/thena/nft/${address}/safeTransferFrom`,
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
   * @tags VeTheNFT
   * @name SetApprovalForAll
   * @request POST:/thena/nft/{address}/setApprovalForAll
   * @secure
   */
  setApprovalForAll = (
    address: string,
    data: VeNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SetApprovalForAllResult, any>({
      path: `/thena/nft/${address}/setApprovalForAll`,
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
   * @tags VeTheNFT
   * @name Split
   * @request POST:/thena/nft/{address}/split
   * @secure
   */
  split = (address: string, data: VeNFTInputBody, params: RequestParams = {}) =>
    this.http.request<SplitData, any>({
      path: `/thena/nft/${address}/split`,
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
   * @tags VeTheNFT
   * @name TransferFrom
   * @request POST:/thena/nft/{address}/transferFrom
   * @secure
   */
  transferFrom = (
    address: string,
    data: VeNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<TransferFromOutput, any>({
      path: `/thena/nft/${address}/transferFrom`,
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
   * @tags VeTheNftVoter
   * @name Vote
   * @request POST:/thena/voter/{address}/vote
   * @secure
   */
  vote = (
    address: string,
    data: VeTheNftVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VoteData, any>({
      path: `/thena/voter/${address}/vote`,
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
   * @tags VeTheNftVoter
   * @name VoteWithOptimalDistribution
   * @request POST:/thena/voter/{address}/voteWithOptimalDistribution
   * @secure
   */
  voteWithOptimalDistribution = (
    address: string,
    data: VoteWithOptimalDistributionPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<VoteWithOptimalDistributionData, any>({
      path: `/thena/voter/${address}/voteWithOptimalDistribution`,
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
   * @tags VeTheNFT
   * @name Voting
   * @request POST:/thena/nft/{address}/voting
   * @secure
   */
  voting = (
    address: string,
    data: VeNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VotingData, any>({
      path: `/thena/nft/${address}/voting`,
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
   * @tags VeTheNftVoter
   * @name Whitelist
   * @request POST:/thena/voter/{address}/whitelist
   * @secure
   */
  whitelist = (
    address: string,
    data: VeTheNftVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<WhitelistData, any>({
      path: `/thena/voter/${address}/whitelist`,
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
   * @tags VeTheNFT
   * @name Withdraw
   * @request POST:/thena/nft/{address}/withdraw
   * @secure
   */
  withdraw = (
    address: string,
    data: VeNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<WithdrawOutput, any>({
      path: `/thena/nft/${address}/withdraw`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
