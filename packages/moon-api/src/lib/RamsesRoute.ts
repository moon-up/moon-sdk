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
  ApproveData1,
  AttachData,
  AttachTokenToGaugeData,
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
  GetAmountOutResult,
  GetAmountsOutResult,
  GetBalanceOfNftResult,
  GetBalanceOfOutput1,
  GetDelegatesResult,
  GetFactoryResult,
  GetInfoData,
  GetLastVotedResult,
  GetLockedData,
  GetOwnerOfResult,
  GetPastVotesResult,
  GetPoolByAddressResult,
  GetPoolsByTypeResult,
  GetPoolsResult,
  GetReservesData,
  GetTokenUriResult,
  GetTokensResult,
  GetTopAprPoolsResult,
  GetTotalSupplyData1,
  GetTotalValueLockedResult,
  GetTotalWeightResult,
  GetVotesResult,
  GetWeightsResult,
  GetWethOutput,
  IncreaseAmountData,
  IncreaseUnlockTimeResult,
  IsGaugeResult,
  IsPairData,
  IsWhitelistedResult,
  KillGaugeResult,
  MergeResult,
  NotifyRewardAmountResult,
  PairForData,
  PokeResult,
  QuoteAddLiquidityData,
  QuoteRemoveLiquidityData,
  RamsesNFTInputBody,
  RamsesRouterInputBody,
  RamsesVoterInputBody,
  RemoveLiquidityData,
  RemoveLiquidityEthData,
  ResetResult,
  ReviveGaugeResult,
  SortTokensData,
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

export namespace Ramses {
  /**
   * No description
   * @tags RamsesNFT
   * @name Abstain
   * @request POST:/ramses/nft/{address}/abstain
   * @secure
   */
  export namespace Abstain {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = AbstainData;
  }

  /**
   * No description
   * @tags RamsesRouter
   * @name AddLiquidity
   * @request POST:/ramses/router/{address}/addLiquidity
   * @secure
   */
  export namespace AddLiquidity {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesRouterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = AddLiquidityResult;
  }

  /**
   * No description
   * @tags RamsesRouter
   * @name AddLiquidityEth
   * @request POST:/ramses/router/{address}/addLiquidityETH
   * @secure
   */
  export namespace AddLiquidityEth {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesRouterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = AddLiquidityEthResult;
  }

  /**
   * No description
   * @tags RamsesNFT
   * @name Approve
   * @request POST:/ramses/nft/{address}/approve
   * @secure
   */
  export namespace Approve {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ApproveData1;
  }

  /**
   * No description
   * @tags RamsesNFT
   * @name Attach
   * @request POST:/ramses/nft/{address}/attach
   * @secure
   */
  export namespace Attach {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = AttachData;
  }

  /**
   * No description
   * @tags RamsesVoter
   * @name AttachTokenToGauge
   * @request POST:/ramses/voter/{address}/attachTokenToGauge
   * @secure
   */
  export namespace AttachTokenToGauge {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = AttachTokenToGaugeData;
  }

  /**
   * No description
   * @tags Ramses
   * @name CalculateOptimalVoteDistribution
   * @request GET:/ramses/data/vote-distribution
   * @secure
   */
  export namespace CalculateOptimalVoteDistribution {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @format double */
      maxPools?: number;
      /** @format double */
      totalVotes: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CalculateOptimalVoteDistributionResult;
  }

  /**
   * No description
   * @tags RamsesVoter
   * @name ClaimBribes
   * @request POST:/ramses/voter/{address}/claimBribes
   * @secure
   */
  export namespace ClaimBribes {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ClaimBribesResult;
  }

  /**
   * No description
   * @tags RamsesVoter
   * @name ClaimFees
   * @request POST:/ramses/voter/{address}/claimFees
   * @secure
   */
  export namespace ClaimFees {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ClaimFeesResult;
  }

  /**
   * No description
   * @tags RamsesVoter
   * @name ClaimRewards
   * @request POST:/ramses/voter/{address}/claimRewards
   * @secure
   */
  export namespace ClaimRewards {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ClaimRewardsOutput;
  }

  /**
   * No description
   * @tags RamsesVoter
   * @name CreateGauge
   * @request POST:/ramses/voter/{address}/createGauge
   * @secure
   */
  export namespace CreateGauge {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateGaugeResult;
  }

  /**
   * No description
   * @tags RamsesNFT
   * @name CreateLock
   * @request POST:/ramses/nft/{address}/createLock
   * @secure
   */
  export namespace CreateLock {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateLockResult;
  }

  /**
   * No description
   * @tags RamsesNFT
   * @name Delegate
   * @request POST:/ramses/nft/{address}/delegate
   * @secure
   */
  export namespace Delegate {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DelegateResult;
  }

  /**
   * No description
   * @tags RamsesNFT
   * @name Detach
   * @request POST:/ramses/nft/{address}/detach
   * @secure
   */
  export namespace Detach {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DetachData;
  }

  /**
   * No description
   * @tags RamsesVoter
   * @name DetachTokenFromGauge
   * @request POST:/ramses/voter/{address}/detachTokenFromGauge
   * @secure
   */
  export namespace DetachTokenFromGauge {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DetachTokenFromGaugeData;
  }

  /**
   * No description
   * @tags RamsesVoter
   * @name Distribute
   * @request POST:/ramses/voter/{address}/distribute
   * @secure
   */
  export namespace Distribute {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DistributeResult;
  }

  /**
   * No description
   * @tags RamsesRouter
   * @name GetAmountOut
   * @request GET:/ramses/router/getAmountOut
   * @secure
   */
  export namespace GetAmountOut {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      amountIn: string;
      chainId: string;
      tokenIn: string;
      tokenOut: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetAmountOutResult;
  }

  /**
   * No description
   * @tags RamsesRouter
   * @name GetAmountsOut
   * @request GET:/ramses/router/getAmountsOut
   * @secure
   */
  export namespace GetAmountsOut {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      amountIn: string;
      chainId: string;
      routes: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetAmountsOutResult;
  }

  /**
   * No description
   * @tags RamsesNFT
   * @name GetBalanceOf
   * @request GET:/ramses/nft/balanceOf
   * @secure
   */
  export namespace GetBalanceOf {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      owner: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetBalanceOfOutput1;
  }

  /**
   * No description
   * @tags RamsesNFT
   * @name GetBalanceOfNft
   * @request GET:/ramses/nft/balanceOfNFT
   * @secure
   */
  export namespace GetBalanceOfNft {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      tokenId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetBalanceOfNftResult;
  }

  /**
   * No description
   * @tags RamsesNFT
   * @name GetDelegates
   * @request GET:/ramses/nft/delegates
   * @secure
   */
  export namespace GetDelegates {
    export type RequestParams = {};
    export type RequestQuery = {
      account: string;
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetDelegatesResult;
  }

  /**
   * No description
   * @tags RamsesRouter
   * @name GetFactory
   * @request GET:/ramses/router/factory
   * @secure
   */
  export namespace GetFactory {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetFactoryResult;
  }

  /**
   * No description
   * @tags Ramses
   * @name GetInfo
   * @request GET:/ramses/data/info
   * @secure
   */
  export namespace GetInfo {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetInfoData;
  }

  /**
   * No description
   * @tags RamsesVoter
   * @name GetLastVoted
   * @request GET:/ramses/voter/lastVoted
   * @secure
   */
  export namespace GetLastVoted {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      tokenId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetLastVotedResult;
  }

  /**
   * No description
   * @tags RamsesNFT
   * @name GetLocked
   * @request GET:/ramses/nft/locked
   * @secure
   */
  export namespace GetLocked {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      tokenId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetLockedData;
  }

  /**
   * No description
   * @tags RamsesNFT
   * @name GetOwnerOf
   * @request GET:/ramses/nft/ownerOf
   * @secure
   */
  export namespace GetOwnerOf {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      tokenId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetOwnerOfResult;
  }

  /**
   * No description
   * @tags RamsesNFT
   * @name GetPastVotes
   * @request GET:/ramses/nft/getPastVotes
   * @secure
   */
  export namespace GetPastVotes {
    export type RequestParams = {};
    export type RequestQuery = {
      account: string;
      address: string;
      blockNumber: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetPastVotesResult;
  }

  /**
   * No description
   * @tags Ramses
   * @name GetPoolByAddress
   * @request GET:/ramses/data/pools/{address}
   * @secure
   */
  export namespace GetPoolByAddress {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetPoolByAddressResult;
  }

  /**
   * No description
   * @tags Ramses
   * @name GetPools
   * @request GET:/ramses/data/pools
   * @secure
   */
  export namespace GetPools {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetPoolsResult;
  }

  /**
   * No description
   * @tags Ramses
   * @name GetPoolsByType
   * @request GET:/ramses/data/pools/type/{type}
   * @secure
   */
  export namespace GetPoolsByType {
    export type RequestParams = {
      type: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetPoolsByTypeResult;
  }

  /**
   * No description
   * @tags RamsesRouter
   * @name GetReserves
   * @request GET:/ramses/router/getReserves
   * @secure
   */
  export namespace GetReserves {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      stable: boolean;
      tokenA: string;
      tokenB: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetReservesData;
  }

  /**
   * No description
   * @tags Ramses
   * @name GetTokens
   * @request GET:/ramses/data/tokens
   * @secure
   */
  export namespace GetTokens {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetTokensResult;
  }

  /**
   * No description
   * @tags RamsesNFT
   * @name GetTokenUri
   * @request GET:/ramses/nft/tokenURI
   * @secure
   */
  export namespace GetTokenUri {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      tokenId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetTokenUriResult;
  }

  /**
   * No description
   * @tags Ramses
   * @name GetTopAprPools
   * @request GET:/ramses/data/pools/top-apr
   * @secure
   */
  export namespace GetTopAprPools {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @format double */
      limit?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetTopAprPoolsResult;
  }

  /**
   * No description
   * @tags RamsesNFT
   * @name GetTotalSupply
   * @request GET:/ramses/nft/totalSupply
   * @secure
   */
  export namespace GetTotalSupply {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetTotalSupplyData1;
  }

  /**
   * No description
   * @tags Ramses
   * @name GetTotalValueLocked
   * @request GET:/ramses/data/tvl
   * @secure
   */
  export namespace GetTotalValueLocked {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetTotalValueLockedResult;
  }

  /**
   * No description
   * @tags RamsesVoter
   * @name GetTotalWeight
   * @request GET:/ramses/voter/totalWeight
   * @secure
   */
  export namespace GetTotalWeight {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetTotalWeightResult;
  }

  /**
   * No description
   * @tags RamsesNFT
   * @name GetVotes
   * @request GET:/ramses/nft/getVotes
   * @secure
   */
  export namespace GetVotes {
    export type RequestParams = {};
    export type RequestQuery = {
      account: string;
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetVotesResult;
  }

  /**
   * No description
   * @tags RamsesVoter
   * @name GetWeights
   * @request GET:/ramses/voter/weights
   * @secure
   */
  export namespace GetWeights {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      pool: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetWeightsResult;
  }

  /**
   * No description
   * @tags RamsesRouter
   * @name GetWeth
   * @request GET:/ramses/router/weth
   * @secure
   */
  export namespace GetWeth {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetWethOutput;
  }

  /**
   * No description
   * @tags RamsesNFT
   * @name IncreaseAmount
   * @request POST:/ramses/nft/{address}/increaseAmount
   * @secure
   */
  export namespace IncreaseAmount {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = IncreaseAmountData;
  }

  /**
   * No description
   * @tags RamsesNFT
   * @name IncreaseUnlockTime
   * @request POST:/ramses/nft/{address}/increaseUnlockTime
   * @secure
   */
  export namespace IncreaseUnlockTime {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = IncreaseUnlockTimeResult;
  }

  /**
   * No description
   * @tags RamsesVoter
   * @name IsGauge
   * @request GET:/ramses/voter/isGauge
   * @secure
   */
  export namespace IsGauge {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      gauge: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = IsGaugeResult;
  }

  /**
   * No description
   * @tags RamsesRouter
   * @name IsPair
   * @request GET:/ramses/router/isPair
   * @secure
   */
  export namespace IsPair {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      pair: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = IsPairData;
  }

  /**
   * No description
   * @tags RamsesVoter
   * @name IsWhitelisted
   * @request GET:/ramses/voter/isWhitelisted
   * @secure
   */
  export namespace IsWhitelisted {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = IsWhitelistedResult;
  }

  /**
   * No description
   * @tags RamsesVoter
   * @name KillGauge
   * @request POST:/ramses/voter/{address}/killGauge
   * @secure
   */
  export namespace KillGauge {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = KillGaugeResult;
  }

  /**
   * No description
   * @tags RamsesNFT
   * @name Merge
   * @request POST:/ramses/nft/{address}/merge
   * @secure
   */
  export namespace Merge {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = MergeResult;
  }

  /**
   * No description
   * @tags RamsesVoter
   * @name NotifyRewardAmount
   * @request POST:/ramses/voter/{address}/notifyRewardAmount
   * @secure
   */
  export namespace NotifyRewardAmount {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = NotifyRewardAmountResult;
  }

  /**
   * No description
   * @tags RamsesRouter
   * @name PairFor
   * @request GET:/ramses/router/pairFor
   * @secure
   */
  export namespace PairFor {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      stable: boolean;
      tokenA: string;
      tokenB: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = PairForData;
  }

  /**
   * No description
   * @tags RamsesVoter
   * @name Poke
   * @request POST:/ramses/voter/{address}/poke
   * @secure
   */
  export namespace Poke {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = PokeResult;
  }

  /**
   * No description
   * @tags RamsesRouter
   * @name QuoteAddLiquidity
   * @request GET:/ramses/router/quoteAddLiquidity
   * @secure
   */
  export namespace QuoteAddLiquidity {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      amountADesired: string;
      amountBDesired: string;
      chainId: string;
      stable: boolean;
      tokenA: string;
      tokenB: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = QuoteAddLiquidityData;
  }

  /**
   * No description
   * @tags RamsesRouter
   * @name QuoteRemoveLiquidity
   * @request GET:/ramses/router/quoteRemoveLiquidity
   * @secure
   */
  export namespace QuoteRemoveLiquidity {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      liquidity: string;
      stable: boolean;
      tokenA: string;
      tokenB: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = QuoteRemoveLiquidityData;
  }

  /**
   * No description
   * @tags RamsesRouter
   * @name RemoveLiquidity
   * @request POST:/ramses/router/{address}/removeLiquidity
   * @secure
   */
  export namespace RemoveLiquidity {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesRouterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = RemoveLiquidityData;
  }

  /**
   * No description
   * @tags RamsesRouter
   * @name RemoveLiquidityEth
   * @request POST:/ramses/router/{address}/removeLiquidityETH
   * @secure
   */
  export namespace RemoveLiquidityEth {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesRouterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = RemoveLiquidityEthData;
  }

  /**
   * No description
   * @tags RamsesVoter
   * @name Reset
   * @request POST:/ramses/voter/{address}/reset
   * @secure
   */
  export namespace Reset {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ResetResult;
  }

  /**
   * No description
   * @tags RamsesVoter
   * @name ReviveGauge
   * @request POST:/ramses/voter/{address}/reviveGauge
   * @secure
   */
  export namespace ReviveGauge {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ReviveGaugeResult;
  }

  /**
   * No description
   * @tags RamsesRouter
   * @name SortTokens
   * @request GET:/ramses/router/sortTokens
   * @secure
   */
  export namespace SortTokens {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      tokenA: string;
      tokenB: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SortTokensData;
  }

  /**
   * No description
   * @tags RamsesNFT
   * @name Split
   * @request POST:/ramses/nft/{address}/split
   * @secure
   */
  export namespace Split {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SplitResult;
  }

  /**
   * No description
   * @tags RamsesRouter
   * @name SwapExactEthForTokens
   * @request POST:/ramses/router/{address}/swapExactETHForTokens
   * @secure
   */
  export namespace SwapExactEthForTokens {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesRouterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SwapExactEthForTokensResult;
  }

  /**
   * No description
   * @tags RamsesRouter
   * @name SwapExactTokensForEth
   * @request POST:/ramses/router/{address}/swapExactTokensForETH
   * @secure
   */
  export namespace SwapExactTokensForEth {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesRouterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SwapExactTokensForEthResult;
  }

  /**
   * No description
   * @tags RamsesRouter
   * @name SwapExactTokensForTokens
   * @request POST:/ramses/router/{address}/swapExactTokensForTokens
   * @secure
   */
  export namespace SwapExactTokensForTokens {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesRouterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SwapExactTokensForTokensResult;
  }

  /**
   * No description
   * @tags RamsesNFT
   * @name TransferFrom
   * @request POST:/ramses/nft/{address}/transferFrom
   * @secure
   */
  export namespace TransferFrom {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = TransferFromResult1;
  }

  /**
   * No description
   * @tags RamsesRouter
   * @name UnsafeSwapExactTokensForTokens
   * @request POST:/ramses/router/{address}/UNSAFE_swapExactTokensForTokens
   * @secure
   */
  export namespace UnsafeSwapExactTokensForTokens {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesRouterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = UnsafeSwapExactTokensForTokensData;
  }

  /**
   * No description
   * @tags RamsesVoter
   * @name Vote
   * @request POST:/ramses/voter/{address}/vote
   * @secure
   */
  export namespace Vote {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = VoteResult;
  }

  /**
   * No description
   * @tags RamsesVoter
   * @name VoteWithOptimalDistribution
   * @request POST:/ramses/voter/{address}/voteWithOptimalDistribution
   * @secure
   */
  export namespace VoteWithOptimalDistribution {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VoteWithOptimalDistributionBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = VoteWithOptimalDistributionResult;
  }

  /**
   * No description
   * @tags RamsesVoter
   * @name Whitelist
   * @request POST:/ramses/voter/{address}/whitelist
   * @secure
   */
  export namespace Whitelist {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = WhitelistResult;
  }

  /**
   * No description
   * @tags RamsesNFT
   * @name Withdraw
   * @request POST:/ramses/nft/{address}/withdraw
   * @secure
   */
  export namespace Withdraw {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RamsesNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = WithdrawOutput;
  }
}
