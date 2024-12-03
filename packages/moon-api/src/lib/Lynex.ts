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
  AddLiquidityData,
  AddLiquidityEthData,
  ApproveData,
  BurnData,
  CalculateOptimalVoteDistributionData,
  CalculateOptimalVoteDistributionParams,
  CheckpointData,
  CheckpointDelegateeData,
  ClaimBribesData,
  ClaimData,
  ClaimFeesData,
  ClaimRewardsData,
  CreateDelegatedLockForData,
  CreateGaugeData,
  CreateLockData,
  CreateLockForData,
  DelegateBySigData,
  DelegateData,
  DistributeData,
  GetAmountOutData,
  GetAmountOutParams,
  GetAmountsOutData,
  GetAmountsOutParams,
  GetApprovedData,
  GetApprovedParams,
  GetAssetByAddressData,
  GetAssetsData,
  GetBalanceOfData,
  GetBalanceOfNftAtData,
  GetBalanceOfNftAtParams,
  GetBalanceOfNftData,
  GetBalanceOfNftParams,
  GetBalanceOfParams,
  GetDelegatesData,
  GetDelegatesParams,
  GetFactoryData,
  GetFactoryParams,
  GetLastVotedData,
  GetLastVotedParams,
  GetLockDetailsData,
  GetLockDetailsParams,
  GetNameData,
  GetNameParams,
  GetOwnerOfData,
  GetOwnerOfParams,
  GetPastVotesData,
  GetPastVotesParams,
  GetPoolByAddressData,
  GetPoolVoteLengthData,
  GetPoolVoteLengthParams,
  GetPoolsByTypeData,
  GetPoolsData,
  GetSymbolData,
  GetSymbolParams,
  GetTokenByIndexData,
  GetTokenByIndexParams,
  GetTokenOfOwnerByIndexData,
  GetTokenOfOwnerByIndexParams,
  GetTokenUriData,
  GetTokenUriParams,
  GetTopAprPoolsData,
  GetTopAprPoolsParams,
  GetTotalNftsMintedData,
  GetTotalNftsMintedParams,
  GetTotalSupplyData,
  GetTotalSupplyParams,
  GetTotalValueLockedData,
  GetTotalWeightData,
  GetTotalWeightParams,
  GetVestedPayoutAtTimeData,
  GetVestedPayoutAtTimeParams,
  GetVestedPayoutData,
  GetVestedPayoutParams,
  GetVestingPayoutData,
  GetVestingPayoutParams,
  GetVestingPeriodData,
  GetVestingPeriodParams,
  GetVotesData,
  GetVotesParams,
  GetWeightsData,
  GetWeightsParams,
  GetWethData,
  GetWethParams,
  GlobalCheckpointData,
  IncreaseLockAmountData,
  IncreaseUnlockTimeData,
  IsApprovedForAllData,
  IsApprovedForAllParams,
  IsGaugeData,
  IsGaugeParams,
  IsWhitelistedData,
  IsWhitelistedParams,
  KillGaugeData,
  LynexNFTInputBody,
  LynexRouterInputBody,
  LynexVoterInputBody,
  MergeData,
  NotifyRewardAmountData,
  PokeData,
  ResetData,
  ReviveGaugeData,
  SafeTransferFromData,
  SetApprovalForAllData,
  SetClaimApprovalData,
  SetClaimApprovalForAllData,
  SplitData,
  SwapExactEthForTokensData,
  SwapExactTokensForEthData,
  SwapExactTokensForTokensData,
  TransferFromData,
  UnlockPermanentData,
  VoteData,
  VoteWithOptimalDistributionData,
  VoteWithOptimalDistributionPayload,
  WhitelistData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Lynex<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags LynexRouter
   * @name AddLiquidity
   * @request POST:/lynex/router/{address}/addLiquidity
   * @secure
   */
  addLiquidity = (
    address: string,
    data: LynexRouterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<AddLiquidityData, any>({
      path: `/lynex/router/${address}/addLiquidity`,
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
   * @tags LynexRouter
   * @name AddLiquidityEth
   * @request POST:/lynex/router/{address}/addLiquidityETH
   * @secure
   */
  addLiquidityEth = (
    address: string,
    data: LynexRouterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<AddLiquidityEthData, any>({
      path: `/lynex/router/${address}/addLiquidityETH`,
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
   * @tags LynexNFT
   * @name Approve
   * @request POST:/lynex/nft/{address}/approve
   * @secure
   */
  approve = (
    address: string,
    data: LynexNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ApproveData, any>({
      path: `/lynex/nft/${address}/approve`,
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
   * @tags LynexNFT
   * @name Burn
   * @request POST:/lynex/nft/{address}/burn
   * @secure
   */
  burn = (
    address: string,
    data: LynexNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<BurnData, any>({
      path: `/lynex/nft/${address}/burn`,
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
   * @tags Lynex
   * @name CalculateOptimalVoteDistribution
   * @request GET:/lynex/data/vote-distribution
   * @secure
   */
  calculateOptimalVoteDistribution = (
    query: CalculateOptimalVoteDistributionParams,
    params: RequestParams = {}
  ) =>
    this.http.request<CalculateOptimalVoteDistributionData, any>({
      path: `/lynex/data/vote-distribution`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexNFT
   * @name Checkpoint
   * @request POST:/lynex/nft/{address}/checkpoint
   * @secure
   */
  checkpoint = (
    address: string,
    data: LynexNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<CheckpointData, any>({
      path: `/lynex/nft/${address}/checkpoint`,
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
   * @tags LynexNFT
   * @name CheckpointDelegatee
   * @request POST:/lynex/nft/{address}/checkpointDelegatee
   * @secure
   */
  checkpointDelegatee = (
    address: string,
    data: LynexNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<CheckpointDelegateeData, any>({
      path: `/lynex/nft/${address}/checkpointDelegatee`,
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
   * @tags LynexNFT
   * @name Claim
   * @request POST:/lynex/nft/{address}/claim
   * @secure
   */
  claim = (
    address: string,
    data: LynexNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ClaimData, any>({
      path: `/lynex/nft/${address}/claim`,
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
   * @tags LynexVoter
   * @name ClaimBribes
   * @request POST:/lynex/voter/{address}/claimBribes
   * @secure
   */
  claimBribes = (
    address: string,
    data: LynexVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ClaimBribesData, any>({
      path: `/lynex/voter/${address}/claimBribes`,
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
   * @tags LynexVoter
   * @name ClaimFees
   * @request POST:/lynex/voter/{address}/claimFees
   * @secure
   */
  claimFees = (
    address: string,
    data: LynexVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ClaimFeesData, any>({
      path: `/lynex/voter/${address}/claimFees`,
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
   * @tags LynexVoter
   * @name ClaimRewards
   * @request POST:/lynex/voter/{address}/claimRewards
   * @secure
   */
  claimRewards = (
    address: string,
    data: LynexVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ClaimRewardsData, any>({
      path: `/lynex/voter/${address}/claimRewards`,
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
   * @tags LynexNFT
   * @name CreateDelegatedLockFor
   * @request POST:/lynex/nft/{address}/createDelegatedLockFor
   * @secure
   */
  createDelegatedLockFor = (
    address: string,
    data: LynexNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateDelegatedLockForData, any>({
      path: `/lynex/nft/${address}/createDelegatedLockFor`,
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
   * @tags LynexVoter
   * @name CreateGauge
   * @request POST:/lynex/voter/{address}/createGauge
   * @secure
   */
  createGauge = (
    address: string,
    data: LynexVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateGaugeData, any>({
      path: `/lynex/voter/${address}/createGauge`,
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
   * @tags LynexNFT
   * @name CreateLock
   * @request POST:/lynex/nft/{address}/createLock
   * @secure
   */
  createLock = (
    address: string,
    data: LynexNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateLockData, any>({
      path: `/lynex/nft/${address}/createLock`,
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
   * @tags LynexNFT
   * @name CreateLockFor
   * @request POST:/lynex/nft/{address}/createLockFor
   * @secure
   */
  createLockFor = (
    address: string,
    data: LynexNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateLockForData, any>({
      path: `/lynex/nft/${address}/createLockFor`,
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
   * @tags LynexNFT
   * @name Delegate
   * @request POST:/lynex/nft/{address}/delegate
   * @secure
   */
  delegate = (
    address: string,
    data: LynexNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<DelegateData, any>({
      path: `/lynex/nft/${address}/delegate`,
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
   * @tags LynexNFT
   * @name DelegateBySig
   * @request POST:/lynex/nft/{address}/delegateBySig
   * @secure
   */
  delegateBySig = (
    address: string,
    data: LynexNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<DelegateBySigData, any>({
      path: `/lynex/nft/${address}/delegateBySig`,
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
   * @tags LynexVoter
   * @name Distribute
   * @request POST:/lynex/voter/{address}/distribute
   * @secure
   */
  distribute = (
    address: string,
    data: LynexVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<DistributeData, any>({
      path: `/lynex/voter/${address}/distribute`,
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
   * @tags LynexRouter
   * @name GetAmountOut
   * @request GET:/lynex/router/getAmountOut
   * @secure
   */
  getAmountOut = (query: GetAmountOutParams, params: RequestParams = {}) =>
    this.http.request<GetAmountOutData, any>({
      path: `/lynex/router/getAmountOut`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexRouter
   * @name GetAmountsOut
   * @request GET:/lynex/router/getAmountsOut
   * @secure
   */
  getAmountsOut = (query: GetAmountsOutParams, params: RequestParams = {}) =>
    this.http.request<GetAmountsOutData, any>({
      path: `/lynex/router/getAmountsOut`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexNFT
   * @name GetApproved
   * @request GET:/lynex/nft/getApproved
   * @secure
   */
  getApproved = (query: GetApprovedParams, params: RequestParams = {}) =>
    this.http.request<GetApprovedData, any>({
      path: `/lynex/nft/getApproved`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves an asset by its address.
   *
   * @tags Lynex
   * @name GetAssetByAddress
   * @request GET:/lynex/data/assets/{address}
   * @secure
   */
  getAssetByAddress = (address: string, params: RequestParams = {}) =>
    this.http.request<GetAssetByAddressData, any>({
      path: `/lynex/data/assets/${address}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the assets using the provided authorization token.
   *
   * @tags Lynex
   * @name GetAssets
   * @request GET:/lynex/data/assets
   * @secure
   */
  getAssets = (params: RequestParams = {}) =>
    this.http.request<GetAssetsData, any>({
      path: `/lynex/data/assets`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexNFT
   * @name GetBalanceOf
   * @request GET:/lynex/nft/balanceOf
   * @secure
   */
  getBalanceOf = (query: GetBalanceOfParams, params: RequestParams = {}) =>
    this.http.request<GetBalanceOfData, any>({
      path: `/lynex/nft/balanceOf`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexNFT
   * @name GetBalanceOfNft
   * @request GET:/lynex/nft/balanceOfNFT
   * @secure
   */
  getBalanceOfNft = (
    query: GetBalanceOfNftParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetBalanceOfNftData, any>({
      path: `/lynex/nft/balanceOfNFT`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexNFT
   * @name GetBalanceOfNftAt
   * @request GET:/lynex/nft/balanceOfNFTAt
   * @secure
   */
  getBalanceOfNftAt = (
    query: GetBalanceOfNftAtParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetBalanceOfNftAtData, any>({
      path: `/lynex/nft/balanceOfNFTAt`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexNFT
   * @name GetDelegates
   * @request GET:/lynex/nft/delegates
   * @secure
   */
  getDelegates = (query: GetDelegatesParams, params: RequestParams = {}) =>
    this.http.request<GetDelegatesData, any>({
      path: `/lynex/nft/delegates`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexRouter
   * @name GetFactory
   * @request GET:/lynex/router/factory
   * @secure
   */
  getFactory = (query: GetFactoryParams, params: RequestParams = {}) =>
    this.http.request<GetFactoryData, any>({
      path: `/lynex/router/factory`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexVoter
   * @name GetLastVoted
   * @request GET:/lynex/voter/lastVoted
   * @secure
   */
  getLastVoted = (query: GetLastVotedParams, params: RequestParams = {}) =>
    this.http.request<GetLastVotedData, any>({
      path: `/lynex/voter/lastVoted`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexNFT
   * @name GetLockDetails
   * @request GET:/lynex/nft/lockDetails
   * @secure
   */
  getLockDetails = (query: GetLockDetailsParams, params: RequestParams = {}) =>
    this.http.request<GetLockDetailsData, any>({
      path: `/lynex/nft/lockDetails`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexNFT
   * @name GetName
   * @request GET:/lynex/nft/name
   * @secure
   */
  getName = (query: GetNameParams, params: RequestParams = {}) =>
    this.http.request<GetNameData, any>({
      path: `/lynex/nft/name`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexNFT
   * @name GetOwnerOf
   * @request GET:/lynex/nft/ownerOf
   * @secure
   */
  getOwnerOf = (query: GetOwnerOfParams, params: RequestParams = {}) =>
    this.http.request<GetOwnerOfData, any>({
      path: `/lynex/nft/ownerOf`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexNFT
   * @name GetPastVotes
   * @request GET:/lynex/nft/getPastVotes
   * @secure
   */
  getPastVotes = (query: GetPastVotesParams, params: RequestParams = {}) =>
    this.http.request<GetPastVotesData, any>({
      path: `/lynex/nft/getPastVotes`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Lynex
   * @name GetPoolByAddress
   * @request GET:/lynex/data/pools/{address}
   * @secure
   */
  getPoolByAddress = (address: string, params: RequestParams = {}) =>
    this.http.request<GetPoolByAddressData, any>({
      path: `/lynex/data/pools/${address}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Lynex
   * @name GetPools
   * @request GET:/lynex/data/pools
   * @secure
   */
  getPools = (params: RequestParams = {}) =>
    this.http.request<GetPoolsData, any>({
      path: `/lynex/data/pools`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Lynex
   * @name GetPoolsByType
   * @request GET:/lynex/data/pools/type/{type}
   * @secure
   */
  getPoolsByType = (type: string, params: RequestParams = {}) =>
    this.http.request<GetPoolsByTypeData, any>({
      path: `/lynex/data/pools/type/${type}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexVoter
   * @name GetPoolVoteLength
   * @request GET:/lynex/voter/poolVoteLength
   * @secure
   */
  getPoolVoteLength = (
    query: GetPoolVoteLengthParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetPoolVoteLengthData, any>({
      path: `/lynex/voter/poolVoteLength`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexNFT
   * @name GetSymbol
   * @request GET:/lynex/nft/symbol
   * @secure
   */
  getSymbol = (query: GetSymbolParams, params: RequestParams = {}) =>
    this.http.request<GetSymbolData, any>({
      path: `/lynex/nft/symbol`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexNFT
   * @name GetTokenByIndex
   * @request GET:/lynex/nft/tokenByIndex
   * @secure
   */
  getTokenByIndex = (
    query: GetTokenByIndexParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetTokenByIndexData, any>({
      path: `/lynex/nft/tokenByIndex`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexNFT
   * @name GetTokenOfOwnerByIndex
   * @request GET:/lynex/nft/tokenOfOwnerByIndex
   * @secure
   */
  getTokenOfOwnerByIndex = (
    query: GetTokenOfOwnerByIndexParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetTokenOfOwnerByIndexData, any>({
      path: `/lynex/nft/tokenOfOwnerByIndex`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexNFT
   * @name GetTokenUri
   * @request GET:/lynex/nft/tokenURI
   * @secure
   */
  getTokenUri = (query: GetTokenUriParams, params: RequestParams = {}) =>
    this.http.request<GetTokenUriData, any>({
      path: `/lynex/nft/tokenURI`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Lynex
   * @name GetTopAprPools
   * @request GET:/lynex/data/pools/top-apr
   * @secure
   */
  getTopAprPools = (query: GetTopAprPoolsParams, params: RequestParams = {}) =>
    this.http.request<GetTopAprPoolsData, any>({
      path: `/lynex/data/pools/top-apr`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexNFT
   * @name GetTotalNftsMinted
   * @request GET:/lynex/nft/totalNftsMinted
   * @secure
   */
  getTotalNftsMinted = (
    query: GetTotalNftsMintedParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetTotalNftsMintedData, any>({
      path: `/lynex/nft/totalNftsMinted`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexNFT
   * @name GetTotalSupply
   * @request GET:/lynex/nft/totalSupply
   * @secure
   */
  getTotalSupply = (query: GetTotalSupplyParams, params: RequestParams = {}) =>
    this.http.request<GetTotalSupplyData, any>({
      path: `/lynex/nft/totalSupply`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Lynex
   * @name GetTotalValueLocked
   * @request GET:/lynex/data/tvl
   * @secure
   */
  getTotalValueLocked = (params: RequestParams = {}) =>
    this.http.request<GetTotalValueLockedData, any>({
      path: `/lynex/data/tvl`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexVoter
   * @name GetTotalWeight
   * @request GET:/lynex/voter/totalWeight
   * @secure
   */
  getTotalWeight = (query: GetTotalWeightParams, params: RequestParams = {}) =>
    this.http.request<GetTotalWeightData, any>({
      path: `/lynex/voter/totalWeight`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexNFT
   * @name GetVestedPayout
   * @request GET:/lynex/nft/vestedPayout
   * @secure
   */
  getVestedPayout = (
    query: GetVestedPayoutParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetVestedPayoutData, any>({
      path: `/lynex/nft/vestedPayout`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexNFT
   * @name GetVestedPayoutAtTime
   * @request GET:/lynex/nft/vestedPayoutAtTime
   * @secure
   */
  getVestedPayoutAtTime = (
    query: GetVestedPayoutAtTimeParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetVestedPayoutAtTimeData, any>({
      path: `/lynex/nft/vestedPayoutAtTime`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexNFT
   * @name GetVestingPayout
   * @request GET:/lynex/nft/vestingPayout
   * @secure
   */
  getVestingPayout = (
    query: GetVestingPayoutParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetVestingPayoutData, any>({
      path: `/lynex/nft/vestingPayout`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexNFT
   * @name GetVestingPeriod
   * @request GET:/lynex/nft/vestingPeriod
   * @secure
   */
  getVestingPeriod = (
    query: GetVestingPeriodParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetVestingPeriodData, any>({
      path: `/lynex/nft/vestingPeriod`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexNFT
   * @name GetVotes
   * @request GET:/lynex/nft/getVotes
   * @secure
   */
  getVotes = (query: GetVotesParams, params: RequestParams = {}) =>
    this.http.request<GetVotesData, any>({
      path: `/lynex/nft/getVotes`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexVoter
   * @name GetWeights
   * @request GET:/lynex/voter/weights
   * @secure
   */
  getWeights = (query: GetWeightsParams, params: RequestParams = {}) =>
    this.http.request<GetWeightsData, any>({
      path: `/lynex/voter/weights`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexRouter
   * @name GetWeth
   * @request GET:/lynex/router/wETH
   * @secure
   */
  getWeth = (query: GetWethParams, params: RequestParams = {}) =>
    this.http.request<GetWethData, any>({
      path: `/lynex/router/wETH`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexNFT
   * @name GlobalCheckpoint
   * @request POST:/lynex/nft/{address}/globalCheckpoint
   * @secure
   */
  globalCheckpoint = (
    address: string,
    data: LynexNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<GlobalCheckpointData, any>({
      path: `/lynex/nft/${address}/globalCheckpoint`,
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
   * @tags LynexNFT
   * @name IncreaseLockAmount
   * @request POST:/lynex/nft/{address}/increaseLockAmount
   * @secure
   */
  increaseLockAmount = (
    address: string,
    data: LynexNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<IncreaseLockAmountData, any>({
      path: `/lynex/nft/${address}/increaseLockAmount`,
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
   * @tags LynexNFT
   * @name IncreaseUnlockTime
   * @request POST:/lynex/nft/{address}/increaseUnlockTime
   * @secure
   */
  increaseUnlockTime = (
    address: string,
    data: LynexNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<IncreaseUnlockTimeData, any>({
      path: `/lynex/nft/${address}/increaseUnlockTime`,
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
   * @tags LynexNFT
   * @name IsApprovedForAll
   * @request GET:/lynex/nft/isApprovedForAll
   * @secure
   */
  isApprovedForAll = (
    query: IsApprovedForAllParams,
    params: RequestParams = {}
  ) =>
    this.http.request<IsApprovedForAllData, any>({
      path: `/lynex/nft/isApprovedForAll`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexVoter
   * @name IsGauge
   * @request GET:/lynex/voter/isGauge
   * @secure
   */
  isGauge = (query: IsGaugeParams, params: RequestParams = {}) =>
    this.http.request<IsGaugeData, any>({
      path: `/lynex/voter/isGauge`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexVoter
   * @name IsWhitelisted
   * @request GET:/lynex/voter/isWhitelisted
   * @secure
   */
  isWhitelisted = (query: IsWhitelistedParams, params: RequestParams = {}) =>
    this.http.request<IsWhitelistedData, any>({
      path: `/lynex/voter/isWhitelisted`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LynexVoter
   * @name KillGauge
   * @request POST:/lynex/voter/{address}/killGauge
   * @secure
   */
  killGauge = (
    address: string,
    data: LynexVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<KillGaugeData, any>({
      path: `/lynex/voter/${address}/killGauge`,
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
   * @tags LynexNFT
   * @name Merge
   * @request POST:/lynex/nft/{address}/merge
   * @secure
   */
  merge = (
    address: string,
    data: LynexNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<MergeData, any>({
      path: `/lynex/nft/${address}/merge`,
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
   * @tags LynexVoter
   * @name NotifyRewardAmount
   * @request POST:/lynex/voter/{address}/notifyRewardAmount
   * @secure
   */
  notifyRewardAmount = (
    address: string,
    data: LynexVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<NotifyRewardAmountData, any>({
      path: `/lynex/voter/${address}/notifyRewardAmount`,
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
   * @tags LynexVoter
   * @name Poke
   * @request POST:/lynex/voter/{address}/poke
   * @secure
   */
  poke = (
    address: string,
    data: LynexVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<PokeData, any>({
      path: `/lynex/voter/${address}/poke`,
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
   * @tags LynexVoter
   * @name Reset
   * @request POST:/lynex/voter/{address}/reset
   * @secure
   */
  reset = (
    address: string,
    data: LynexVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ResetData, any>({
      path: `/lynex/voter/${address}/reset`,
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
   * @tags LynexVoter
   * @name ReviveGauge
   * @request POST:/lynex/voter/{address}/reviveGauge
   * @secure
   */
  reviveGauge = (
    address: string,
    data: LynexVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ReviveGaugeData, any>({
      path: `/lynex/voter/${address}/reviveGauge`,
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
   * @tags LynexNFT
   * @name SafeTransferFrom
   * @request POST:/lynex/nft/{address}/safeTransferFrom
   * @secure
   */
  safeTransferFrom = (
    address: string,
    data: LynexNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SafeTransferFromData, any>({
      path: `/lynex/nft/${address}/safeTransferFrom`,
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
   * @tags LynexNFT
   * @name SetApprovalForAll
   * @request POST:/lynex/nft/{address}/setApprovalForAll
   * @secure
   */
  setApprovalForAll = (
    address: string,
    data: LynexNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SetApprovalForAllData, any>({
      path: `/lynex/nft/${address}/setApprovalForAll`,
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
   * @tags LynexNFT
   * @name SetClaimApproval
   * @request POST:/lynex/nft/{address}/setClaimApproval
   * @secure
   */
  setClaimApproval = (
    address: string,
    data: LynexNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SetClaimApprovalData, any>({
      path: `/lynex/nft/${address}/setClaimApproval`,
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
   * @tags LynexNFT
   * @name SetClaimApprovalForAll
   * @request POST:/lynex/nft/{address}/setClaimApprovalForAll
   * @secure
   */
  setClaimApprovalForAll = (
    address: string,
    data: LynexNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SetClaimApprovalForAllData, any>({
      path: `/lynex/nft/${address}/setClaimApprovalForAll`,
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
   * @tags LynexNFT
   * @name Split
   * @request POST:/lynex/nft/{address}/split
   * @secure
   */
  split = (
    address: string,
    data: LynexNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SplitData, any>({
      path: `/lynex/nft/${address}/split`,
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
   * @tags LynexRouter
   * @name SwapExactEthForTokens
   * @request POST:/lynex/router/{address}/swapExactETHForTokens
   * @secure
   */
  swapExactEthForTokens = (
    address: string,
    data: LynexRouterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SwapExactEthForTokensData, any>({
      path: `/lynex/router/${address}/swapExactETHForTokens`,
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
   * @tags LynexRouter
   * @name SwapExactTokensForEth
   * @request POST:/lynex/router/{address}/swapExactTokensForETH
   * @secure
   */
  swapExactTokensForEth = (
    address: string,
    data: LynexRouterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SwapExactTokensForEthData, any>({
      path: `/lynex/router/${address}/swapExactTokensForETH`,
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
   * @tags LynexRouter
   * @name SwapExactTokensForTokens
   * @request POST:/lynex/router/{address}/swapExactTokensForTokens
   * @secure
   */
  swapExactTokensForTokens = (
    address: string,
    data: LynexRouterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SwapExactTokensForTokensData, any>({
      path: `/lynex/router/${address}/swapExactTokensForTokens`,
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
   * @tags LynexNFT
   * @name TransferFrom
   * @request POST:/lynex/nft/{address}/transferFrom
   * @secure
   */
  transferFrom = (
    address: string,
    data: LynexNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<TransferFromData, any>({
      path: `/lynex/nft/${address}/transferFrom`,
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
   * @tags LynexNFT
   * @name UnlockPermanent
   * @request POST:/lynex/nft/{address}/unlockPermanent
   * @secure
   */
  unlockPermanent = (
    address: string,
    data: LynexNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<UnlockPermanentData, any>({
      path: `/lynex/nft/${address}/unlockPermanent`,
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
   * @tags LynexVoter
   * @name Vote
   * @request POST:/lynex/voter/{address}/vote
   * @secure
   */
  vote = (
    address: string,
    data: LynexVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<VoteData, any>({
      path: `/lynex/voter/${address}/vote`,
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
   * @tags LynexVoter
   * @name VoteWithOptimalDistribution
   * @request POST:/lynex/voter/{address}/voteWithOptimalDistribution
   * @secure
   */
  voteWithOptimalDistribution = (
    address: string,
    data: VoteWithOptimalDistributionPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<VoteWithOptimalDistributionData, any>({
      path: `/lynex/voter/${address}/voteWithOptimalDistribution`,
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
   * @tags LynexVoter
   * @name Whitelist
   * @request POST:/lynex/voter/{address}/whitelist
   * @secure
   */
  whitelist = (
    address: string,
    data: LynexVoterInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<WhitelistData, any>({
      path: `/lynex/voter/${address}/whitelist`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
