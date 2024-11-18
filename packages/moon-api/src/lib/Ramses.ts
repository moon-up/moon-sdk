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
  AddLiquidityEthResult,
  AddLiquidityResult,
  ApproveOutput1,
  AttachData,
  AttachTokenToGaugeData,
  CalculateOptimalVoteDistributionParams2,
  CalculateOptimalVoteDistributionResult,
  ClaimBribesResult,
  ClaimFeesResult,
  ClaimRewardsOutput,
  CreateGaugeResult,
  CreateLockResult,
  DelegateResult,
  DetachData,
  DetachTokenFromGaugeData,
  DistributeResult,
  GetAmountOutParams2,
  GetAmountOutResult,
  GetAmountsOutParams2,
  GetAmountsOutResult,
  GetBalanceOfNftParams2,
  GetBalanceOfNftResult,
  GetBalanceOfParams6,
  GetBalanceOfResult1,
  GetDelegatesParams2,
  GetDelegatesResult,
  GetFactoryParams2,
  GetFactoryResult,
  GetInfoData,
  GetLastVotedParams2,
  GetLastVotedResult,
  GetLockedData,
  GetLockedParams,
  GetOwnerOfParams2,
  GetOwnerOfResult,
  GetPastVotesParams2,
  GetPastVotesResult,
  GetPoolByAddressResult,
  GetPoolsByTypeResult,
  GetPoolsResult,
  GetReservesData,
  GetReservesParams,
  GetTokenUriParams2,
  GetTokenUriResult,
  GetTokensResult,
  GetTopAprPoolsParams2,
  GetTopAprPoolsResult,
  GetTotalSupplyData1,
  GetTotalSupplyParams6,
  GetTotalValueLockedResult,
  GetTotalWeightParams2,
  GetTotalWeightResult,
  GetVotesParams2,
  GetVotesResult,
  GetWeightsParams2,
  GetWeightsResult,
  GetWethOutput,
  GetWethParams4,
  IncreaseAmountData,
  IncreaseUnlockTimeResult,
  IsGaugeParams2,
  IsGaugeResult,
  IsPairData,
  IsPairParams,
  IsWhitelistedParams2,
  IsWhitelistedResult,
  KillGaugeResult,
  MergeResult,
  NotifyRewardAmountResult,
  PairForData,
  PairForParams,
  PokeResult,
  QuoteAddLiquidityData,
  QuoteAddLiquidityParams,
  QuoteRemoveLiquidityData,
  QuoteRemoveLiquidityParams,
  RamsesNFTInputBody,
  RamsesRouterInputBody,
  RamsesVoterInputBody,
  RemoveLiquidityData,
  RemoveLiquidityEthData,
  ResetResult,
  ReviveGaugeResult,
  SortTokensData,
  SortTokensParams,
  SplitResult,
  SwapExactEthForTokensResult,
  SwapExactTokensForEthResult,
  SwapExactTokensForTokensResult,
  TransferFromResult1,
  UnsafeSwapExactTokensForTokensData,
  VoteResult,
  VoteWithOptimalDistributionBody,
  VoteWithOptimalDistributionResult,
  WhitelistResult,
  WithdrawOutput,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Ramses<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags RamsesNFT
   * @name Abstain
   * @request POST:/ramses/nft/{address}/abstain
   * @secure
   */
  abstain = (
    address: string,
    data: RamsesNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<AbstainData, any>({
      path: `/ramses/nft/${address}/abstain`,
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
   * @tags RamsesRouter
   * @name AddLiquidity
   * @request POST:/ramses/router/{address}/addLiquidity
   * @secure
   */
  addLiquidity = (
    address: string,
    data: RamsesRouterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<AddLiquidityResult, any>({
      path: `/ramses/router/${address}/addLiquidity`,
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
   * @tags RamsesRouter
   * @name AddLiquidityEth
   * @request POST:/ramses/router/{address}/addLiquidityETH
   * @secure
   */
  addLiquidityEth = (
    address: string,
    data: RamsesRouterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<AddLiquidityEthResult, any>({
      path: `/ramses/router/${address}/addLiquidityETH`,
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
   * @tags RamsesNFT
   * @name Approve
   * @request POST:/ramses/nft/{address}/approve
   * @secure
   */
  approve = (
    address: string,
    data: RamsesNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ApproveOutput1, any>({
      path: `/ramses/nft/${address}/approve`,
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
   * @tags RamsesNFT
   * @name Attach
   * @request POST:/ramses/nft/{address}/attach
   * @secure
   */
  attach = (
    address: string,
    data: RamsesNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<AttachData, any>({
      path: `/ramses/nft/${address}/attach`,
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
   * @tags RamsesVoter
   * @name AttachTokenToGauge
   * @request POST:/ramses/voter/{address}/attachTokenToGauge
   * @secure
   */
  attachTokenToGauge = (
    address: string,
    data: RamsesVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<AttachTokenToGaugeData, any>({
      path: `/ramses/voter/${address}/attachTokenToGauge`,
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
   * @tags Ramses
   * @name CalculateOptimalVoteDistribution
   * @request GET:/ramses/data/vote-distribution
   * @secure
   */
  calculateOptimalVoteDistribution = (
    query: CalculateOptimalVoteDistributionParams2,
    params: RequestParams = {}
  ) =>
    this.http.request<CalculateOptimalVoteDistributionResult, any>({
      path: `/ramses/data/vote-distribution`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags RamsesVoter
   * @name ClaimBribes
   * @request POST:/ramses/voter/{address}/claimBribes
   * @secure
   */
  claimBribes = (
    address: string,
    data: RamsesVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ClaimBribesResult, any>({
      path: `/ramses/voter/${address}/claimBribes`,
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
   * @tags RamsesVoter
   * @name ClaimFees
   * @request POST:/ramses/voter/{address}/claimFees
   * @secure
   */
  claimFees = (
    address: string,
    data: RamsesVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ClaimFeesResult, any>({
      path: `/ramses/voter/${address}/claimFees`,
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
   * @tags RamsesVoter
   * @name ClaimRewards
   * @request POST:/ramses/voter/{address}/claimRewards
   * @secure
   */
  claimRewards = (
    address: string,
    data: RamsesVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ClaimRewardsOutput, any>({
      path: `/ramses/voter/${address}/claimRewards`,
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
   * @tags RamsesVoter
   * @name CreateGauge
   * @request POST:/ramses/voter/{address}/createGauge
   * @secure
   */
  createGauge = (
    address: string,
    data: RamsesVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateGaugeResult, any>({
      path: `/ramses/voter/${address}/createGauge`,
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
   * @tags RamsesNFT
   * @name CreateLock
   * @request POST:/ramses/nft/{address}/createLock
   * @secure
   */
  createLock = (
    address: string,
    data: RamsesNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateLockResult, any>({
      path: `/ramses/nft/${address}/createLock`,
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
   * @tags RamsesNFT
   * @name Delegate
   * @request POST:/ramses/nft/{address}/delegate
   * @secure
   */
  delegate = (
    address: string,
    data: RamsesNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<DelegateResult, any>({
      path: `/ramses/nft/${address}/delegate`,
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
   * @tags RamsesNFT
   * @name Detach
   * @request POST:/ramses/nft/{address}/detach
   * @secure
   */
  detach = (
    address: string,
    data: RamsesNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<DetachData, any>({
      path: `/ramses/nft/${address}/detach`,
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
   * @tags RamsesVoter
   * @name DetachTokenFromGauge
   * @request POST:/ramses/voter/{address}/detachTokenFromGauge
   * @secure
   */
  detachTokenFromGauge = (
    address: string,
    data: RamsesVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<DetachTokenFromGaugeData, any>({
      path: `/ramses/voter/${address}/detachTokenFromGauge`,
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
   * @tags RamsesVoter
   * @name Distribute
   * @request POST:/ramses/voter/{address}/distribute
   * @secure
   */
  distribute = (
    address: string,
    data: RamsesVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<DistributeResult, any>({
      path: `/ramses/voter/${address}/distribute`,
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
   * @tags RamsesRouter
   * @name GetAmountOut
   * @request GET:/ramses/router/getAmountOut
   * @secure
   */
  getAmountOut = (query: GetAmountOutParams2, params: RequestParams = {}) =>
    this.http.request<GetAmountOutResult, any>({
      path: `/ramses/router/getAmountOut`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags RamsesRouter
   * @name GetAmountsOut
   * @request GET:/ramses/router/getAmountsOut
   * @secure
   */
  getAmountsOut = (query: GetAmountsOutParams2, params: RequestParams = {}) =>
    this.http.request<GetAmountsOutResult, any>({
      path: `/ramses/router/getAmountsOut`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags RamsesNFT
   * @name GetBalanceOf
   * @request GET:/ramses/nft/balanceOf
   * @secure
   */
  getBalanceOf = (query: GetBalanceOfParams6, params: RequestParams = {}) =>
    this.http.request<GetBalanceOfResult1, any>({
      path: `/ramses/nft/balanceOf`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags RamsesNFT
   * @name GetBalanceOfNft
   * @request GET:/ramses/nft/balanceOfNFT
   * @secure
   */
  getBalanceOfNft = (
    query: GetBalanceOfNftParams2,
    params: RequestParams = {}
  ) =>
    this.http.request<GetBalanceOfNftResult, any>({
      path: `/ramses/nft/balanceOfNFT`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags RamsesNFT
   * @name GetDelegates
   * @request GET:/ramses/nft/delegates
   * @secure
   */
  getDelegates = (query: GetDelegatesParams2, params: RequestParams = {}) =>
    this.http.request<GetDelegatesResult, any>({
      path: `/ramses/nft/delegates`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags RamsesRouter
   * @name GetFactory
   * @request GET:/ramses/router/factory
   * @secure
   */
  getFactory = (query: GetFactoryParams2, params: RequestParams = {}) =>
    this.http.request<GetFactoryResult, any>({
      path: `/ramses/router/factory`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Ramses
   * @name GetInfo
   * @request GET:/ramses/data/info
   * @secure
   */
  getInfo = (params: RequestParams = {}) =>
    this.http.request<GetInfoData, any>({
      path: `/ramses/data/info`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags RamsesVoter
   * @name GetLastVoted
   * @request GET:/ramses/voter/lastVoted
   * @secure
   */
  getLastVoted = (query: GetLastVotedParams2, params: RequestParams = {}) =>
    this.http.request<GetLastVotedResult, any>({
      path: `/ramses/voter/lastVoted`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags RamsesNFT
   * @name GetLocked
   * @request GET:/ramses/nft/locked
   * @secure
   */
  getLocked = (query: GetLockedParams, params: RequestParams = {}) =>
    this.http.request<GetLockedData, any>({
      path: `/ramses/nft/locked`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags RamsesNFT
   * @name GetOwnerOf
   * @request GET:/ramses/nft/ownerOf
   * @secure
   */
  getOwnerOf = (query: GetOwnerOfParams2, params: RequestParams = {}) =>
    this.http.request<GetOwnerOfResult, any>({
      path: `/ramses/nft/ownerOf`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags RamsesNFT
   * @name GetPastVotes
   * @request GET:/ramses/nft/getPastVotes
   * @secure
   */
  getPastVotes = (query: GetPastVotesParams2, params: RequestParams = {}) =>
    this.http.request<GetPastVotesResult, any>({
      path: `/ramses/nft/getPastVotes`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Ramses
   * @name GetPoolByAddress
   * @request GET:/ramses/data/pools/{address}
   * @secure
   */
  getPoolByAddress = (address: string, params: RequestParams = {}) =>
    this.http.request<GetPoolByAddressResult, any>({
      path: `/ramses/data/pools/${address}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Ramses
   * @name GetPools
   * @request GET:/ramses/data/pools
   * @secure
   */
  getPools = (params: RequestParams = {}) =>
    this.http.request<GetPoolsResult, any>({
      path: `/ramses/data/pools`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Ramses
   * @name GetPoolsByType
   * @request GET:/ramses/data/pools/type/{type}
   * @secure
   */
  getPoolsByType = (type: string, params: RequestParams = {}) =>
    this.http.request<GetPoolsByTypeResult, any>({
      path: `/ramses/data/pools/type/${type}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags RamsesRouter
   * @name GetReserves
   * @request GET:/ramses/router/getReserves
   * @secure
   */
  getReserves = (query: GetReservesParams, params: RequestParams = {}) =>
    this.http.request<GetReservesData, any>({
      path: `/ramses/router/getReserves`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Ramses
   * @name GetTokens
   * @request GET:/ramses/data/tokens
   * @secure
   */
  getTokens = (params: RequestParams = {}) =>
    this.http.request<GetTokensResult, any>({
      path: `/ramses/data/tokens`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags RamsesNFT
   * @name GetTokenUri
   * @request GET:/ramses/nft/tokenURI
   * @secure
   */
  getTokenUri = (query: GetTokenUriParams2, params: RequestParams = {}) =>
    this.http.request<GetTokenUriResult, any>({
      path: `/ramses/nft/tokenURI`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Ramses
   * @name GetTopAprPools
   * @request GET:/ramses/data/pools/top-apr
   * @secure
   */
  getTopAprPools = (query: GetTopAprPoolsParams2, params: RequestParams = {}) =>
    this.http.request<GetTopAprPoolsResult, any>({
      path: `/ramses/data/pools/top-apr`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags RamsesNFT
   * @name GetTotalSupply
   * @request GET:/ramses/nft/totalSupply
   * @secure
   */
  getTotalSupply = (query: GetTotalSupplyParams6, params: RequestParams = {}) =>
    this.http.request<GetTotalSupplyData1, any>({
      path: `/ramses/nft/totalSupply`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Ramses
   * @name GetTotalValueLocked
   * @request GET:/ramses/data/tvl
   * @secure
   */
  getTotalValueLocked = (params: RequestParams = {}) =>
    this.http.request<GetTotalValueLockedResult, any>({
      path: `/ramses/data/tvl`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags RamsesVoter
   * @name GetTotalWeight
   * @request GET:/ramses/voter/totalWeight
   * @secure
   */
  getTotalWeight = (query: GetTotalWeightParams2, params: RequestParams = {}) =>
    this.http.request<GetTotalWeightResult, any>({
      path: `/ramses/voter/totalWeight`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags RamsesNFT
   * @name GetVotes
   * @request GET:/ramses/nft/getVotes
   * @secure
   */
  getVotes = (query: GetVotesParams2, params: RequestParams = {}) =>
    this.http.request<GetVotesResult, any>({
      path: `/ramses/nft/getVotes`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags RamsesVoter
   * @name GetWeights
   * @request GET:/ramses/voter/weights
   * @secure
   */
  getWeights = (query: GetWeightsParams2, params: RequestParams = {}) =>
    this.http.request<GetWeightsResult, any>({
      path: `/ramses/voter/weights`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags RamsesRouter
   * @name GetWeth
   * @request GET:/ramses/router/weth
   * @secure
   */
  getWeth = (query: GetWethParams4, params: RequestParams = {}) =>
    this.http.request<GetWethOutput, any>({
      path: `/ramses/router/weth`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags RamsesNFT
   * @name IncreaseAmount
   * @request POST:/ramses/nft/{address}/increaseAmount
   * @secure
   */
  increaseAmount = (
    address: string,
    data: RamsesNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<IncreaseAmountData, any>({
      path: `/ramses/nft/${address}/increaseAmount`,
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
   * @tags RamsesNFT
   * @name IncreaseUnlockTime
   * @request POST:/ramses/nft/{address}/increaseUnlockTime
   * @secure
   */
  increaseUnlockTime = (
    address: string,
    data: RamsesNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<IncreaseUnlockTimeResult, any>({
      path: `/ramses/nft/${address}/increaseUnlockTime`,
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
   * @tags RamsesVoter
   * @name IsGauge
   * @request GET:/ramses/voter/isGauge
   * @secure
   */
  isGauge = (query: IsGaugeParams2, params: RequestParams = {}) =>
    this.http.request<IsGaugeResult, any>({
      path: `/ramses/voter/isGauge`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags RamsesRouter
   * @name IsPair
   * @request GET:/ramses/router/isPair
   * @secure
   */
  isPair = (query: IsPairParams, params: RequestParams = {}) =>
    this.http.request<IsPairData, any>({
      path: `/ramses/router/isPair`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags RamsesVoter
   * @name IsWhitelisted
   * @request GET:/ramses/voter/isWhitelisted
   * @secure
   */
  isWhitelisted = (query: IsWhitelistedParams2, params: RequestParams = {}) =>
    this.http.request<IsWhitelistedResult, any>({
      path: `/ramses/voter/isWhitelisted`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags RamsesVoter
   * @name KillGauge
   * @request POST:/ramses/voter/{address}/killGauge
   * @secure
   */
  killGauge = (
    address: string,
    data: RamsesVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<KillGaugeResult, any>({
      path: `/ramses/voter/${address}/killGauge`,
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
   * @tags RamsesNFT
   * @name Merge
   * @request POST:/ramses/nft/{address}/merge
   * @secure
   */
  merge = (
    address: string,
    data: RamsesNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<MergeResult, any>({
      path: `/ramses/nft/${address}/merge`,
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
   * @tags RamsesVoter
   * @name NotifyRewardAmount
   * @request POST:/ramses/voter/{address}/notifyRewardAmount
   * @secure
   */
  notifyRewardAmount = (
    address: string,
    data: RamsesVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<NotifyRewardAmountResult, any>({
      path: `/ramses/voter/${address}/notifyRewardAmount`,
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
   * @tags RamsesRouter
   * @name PairFor
   * @request GET:/ramses/router/pairFor
   * @secure
   */
  pairFor = (query: PairForParams, params: RequestParams = {}) =>
    this.http.request<PairForData, any>({
      path: `/ramses/router/pairFor`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags RamsesVoter
   * @name Poke
   * @request POST:/ramses/voter/{address}/poke
   * @secure
   */
  poke = (
    address: string,
    data: RamsesVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<PokeResult, any>({
      path: `/ramses/voter/${address}/poke`,
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
   * @tags RamsesRouter
   * @name QuoteAddLiquidity
   * @request GET:/ramses/router/quoteAddLiquidity
   * @secure
   */
  quoteAddLiquidity = (
    query: QuoteAddLiquidityParams,
    params: RequestParams = {}
  ) =>
    this.http.request<QuoteAddLiquidityData, any>({
      path: `/ramses/router/quoteAddLiquidity`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags RamsesRouter
   * @name QuoteRemoveLiquidity
   * @request GET:/ramses/router/quoteRemoveLiquidity
   * @secure
   */
  quoteRemoveLiquidity = (
    query: QuoteRemoveLiquidityParams,
    params: RequestParams = {}
  ) =>
    this.http.request<QuoteRemoveLiquidityData, any>({
      path: `/ramses/router/quoteRemoveLiquidity`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags RamsesRouter
   * @name RemoveLiquidity
   * @request POST:/ramses/router/{address}/removeLiquidity
   * @secure
   */
  removeLiquidity = (
    address: string,
    data: RamsesRouterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<RemoveLiquidityData, any>({
      path: `/ramses/router/${address}/removeLiquidity`,
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
   * @tags RamsesRouter
   * @name RemoveLiquidityEth
   * @request POST:/ramses/router/{address}/removeLiquidityETH
   * @secure
   */
  removeLiquidityEth = (
    address: string,
    data: RamsesRouterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<RemoveLiquidityEthData, any>({
      path: `/ramses/router/${address}/removeLiquidityETH`,
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
   * @tags RamsesVoter
   * @name Reset
   * @request POST:/ramses/voter/{address}/reset
   * @secure
   */
  reset = (
    address: string,
    data: RamsesVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ResetResult, any>({
      path: `/ramses/voter/${address}/reset`,
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
   * @tags RamsesVoter
   * @name ReviveGauge
   * @request POST:/ramses/voter/{address}/reviveGauge
   * @secure
   */
  reviveGauge = (
    address: string,
    data: RamsesVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ReviveGaugeResult, any>({
      path: `/ramses/voter/${address}/reviveGauge`,
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
   * @tags RamsesRouter
   * @name SortTokens
   * @request GET:/ramses/router/sortTokens
   * @secure
   */
  sortTokens = (query: SortTokensParams, params: RequestParams = {}) =>
    this.http.request<SortTokensData, any>({
      path: `/ramses/router/sortTokens`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags RamsesNFT
   * @name Split
   * @request POST:/ramses/nft/{address}/split
   * @secure
   */
  split = (
    address: string,
    data: RamsesNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SplitResult, any>({
      path: `/ramses/nft/${address}/split`,
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
   * @tags RamsesRouter
   * @name SwapExactEthForTokens
   * @request POST:/ramses/router/{address}/swapExactETHForTokens
   * @secure
   */
  swapExactEthForTokens = (
    address: string,
    data: RamsesRouterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SwapExactEthForTokensResult, any>({
      path: `/ramses/router/${address}/swapExactETHForTokens`,
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
   * @tags RamsesRouter
   * @name SwapExactTokensForEth
   * @request POST:/ramses/router/{address}/swapExactTokensForETH
   * @secure
   */
  swapExactTokensForEth = (
    address: string,
    data: RamsesRouterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SwapExactTokensForEthResult, any>({
      path: `/ramses/router/${address}/swapExactTokensForETH`,
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
   * @tags RamsesRouter
   * @name SwapExactTokensForTokens
   * @request POST:/ramses/router/{address}/swapExactTokensForTokens
   * @secure
   */
  swapExactTokensForTokens = (
    address: string,
    data: RamsesRouterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SwapExactTokensForTokensResult, any>({
      path: `/ramses/router/${address}/swapExactTokensForTokens`,
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
   * @tags RamsesNFT
   * @name TransferFrom
   * @request POST:/ramses/nft/{address}/transferFrom
   * @secure
   */
  transferFrom = (
    address: string,
    data: RamsesNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<TransferFromResult1, any>({
      path: `/ramses/nft/${address}/transferFrom`,
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
   * @tags RamsesRouter
   * @name UnsafeSwapExactTokensForTokens
   * @request POST:/ramses/router/{address}/UNSAFE_swapExactTokensForTokens
   * @secure
   */
  unsafeSwapExactTokensForTokens = (
    address: string,
    data: RamsesRouterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<UnsafeSwapExactTokensForTokensData, any>({
      path: `/ramses/router/${address}/UNSAFE_swapExactTokensForTokens`,
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
   * @tags RamsesVoter
   * @name Vote
   * @request POST:/ramses/voter/{address}/vote
   * @secure
   */
  vote = (
    address: string,
    data: RamsesVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VoteResult, any>({
      path: `/ramses/voter/${address}/vote`,
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
   * @tags RamsesVoter
   * @name VoteWithOptimalDistribution
   * @request POST:/ramses/voter/{address}/voteWithOptimalDistribution
   * @secure
   */
  voteWithOptimalDistribution = (
    address: string,
    data: VoteWithOptimalDistributionBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VoteWithOptimalDistributionResult, any>({
      path: `/ramses/voter/${address}/voteWithOptimalDistribution`,
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
   * @tags RamsesVoter
   * @name Whitelist
   * @request POST:/ramses/voter/{address}/whitelist
   * @secure
   */
  whitelist = (
    address: string,
    data: RamsesVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<WhitelistResult, any>({
      path: `/ramses/voter/${address}/whitelist`,
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
   * @tags RamsesNFT
   * @name Withdraw
   * @request POST:/ramses/nft/{address}/withdraw
   * @secure
   */
  withdraw = (
    address: string,
    data: RamsesNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<WithdrawOutput, any>({
      path: `/ramses/nft/${address}/withdraw`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
