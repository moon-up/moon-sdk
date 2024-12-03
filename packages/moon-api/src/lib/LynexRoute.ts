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
  GetAmountsOutData,
  GetApprovedData,
  GetAssetByAddressData,
  GetAssetsData,
  GetBalanceOfData,
  GetBalanceOfNftAtData,
  GetBalanceOfNftData,
  GetDelegatesData,
  GetFactoryData,
  GetLastVotedData,
  GetLockDetailsData,
  GetNameData,
  GetOwnerOfData,
  GetPastVotesData,
  GetPoolByAddressData,
  GetPoolVoteLengthData,
  GetPoolsByTypeData,
  GetPoolsData,
  GetSymbolData,
  GetTokenByIndexData,
  GetTokenOfOwnerByIndexData,
  GetTokenUriData,
  GetTopAprPoolsData,
  GetTotalNftsMintedData,
  GetTotalSupplyData,
  GetTotalValueLockedData,
  GetTotalWeightData,
  GetVestedPayoutAtTimeData,
  GetVestedPayoutData,
  GetVestingPayoutData,
  GetVestingPeriodData,
  GetVotesData,
  GetWeightsData,
  GetWethData,
  GlobalCheckpointData,
  IncreaseLockAmountData,
  IncreaseUnlockTimeData,
  IsApprovedForAllData,
  IsGaugeData,
  IsWhitelistedData,
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

export namespace Lynex {
  /**
   * No description
   * @tags LynexRouter
   * @name AddLiquidity
   * @request POST:/lynex/router/{address}/addLiquidity
   * @secure
   */
  export namespace AddLiquidity {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexRouterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = AddLiquidityData;
  }

  /**
   * No description
   * @tags LynexRouter
   * @name AddLiquidityEth
   * @request POST:/lynex/router/{address}/addLiquidityETH
   * @secure
   */
  export namespace AddLiquidityEth {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexRouterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = AddLiquidityEthData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name Approve
   * @request POST:/lynex/nft/{address}/approve
   * @secure
   */
  export namespace Approve {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ApproveData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name Burn
   * @request POST:/lynex/nft/{address}/burn
   * @secure
   */
  export namespace Burn {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = BurnData;
  }

  /**
   * No description
   * @tags Lynex
   * @name CalculateOptimalVoteDistribution
   * @request GET:/lynex/data/vote-distribution
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
    export type ResponseBody = CalculateOptimalVoteDistributionData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name Checkpoint
   * @request POST:/lynex/nft/{address}/checkpoint
   * @secure
   */
  export namespace Checkpoint {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CheckpointData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name CheckpointDelegatee
   * @request POST:/lynex/nft/{address}/checkpointDelegatee
   * @secure
   */
  export namespace CheckpointDelegatee {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CheckpointDelegateeData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name Claim
   * @request POST:/lynex/nft/{address}/claim
   * @secure
   */
  export namespace Claim {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ClaimData;
  }

  /**
   * No description
   * @tags LynexVoter
   * @name ClaimBribes
   * @request POST:/lynex/voter/{address}/claimBribes
   * @secure
   */
  export namespace ClaimBribes {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ClaimBribesData;
  }

  /**
   * No description
   * @tags LynexVoter
   * @name ClaimFees
   * @request POST:/lynex/voter/{address}/claimFees
   * @secure
   */
  export namespace ClaimFees {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ClaimFeesData;
  }

  /**
   * No description
   * @tags LynexVoter
   * @name ClaimRewards
   * @request POST:/lynex/voter/{address}/claimRewards
   * @secure
   */
  export namespace ClaimRewards {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ClaimRewardsData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name CreateDelegatedLockFor
   * @request POST:/lynex/nft/{address}/createDelegatedLockFor
   * @secure
   */
  export namespace CreateDelegatedLockFor {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateDelegatedLockForData;
  }

  /**
   * No description
   * @tags LynexVoter
   * @name CreateGauge
   * @request POST:/lynex/voter/{address}/createGauge
   * @secure
   */
  export namespace CreateGauge {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateGaugeData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name CreateLock
   * @request POST:/lynex/nft/{address}/createLock
   * @secure
   */
  export namespace CreateLock {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateLockData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name CreateLockFor
   * @request POST:/lynex/nft/{address}/createLockFor
   * @secure
   */
  export namespace CreateLockFor {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateLockForData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name Delegate
   * @request POST:/lynex/nft/{address}/delegate
   * @secure
   */
  export namespace Delegate {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DelegateData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name DelegateBySig
   * @request POST:/lynex/nft/{address}/delegateBySig
   * @secure
   */
  export namespace DelegateBySig {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DelegateBySigData;
  }

  /**
   * No description
   * @tags LynexVoter
   * @name Distribute
   * @request POST:/lynex/voter/{address}/distribute
   * @secure
   */
  export namespace Distribute {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DistributeData;
  }

  /**
   * No description
   * @tags LynexRouter
   * @name GetAmountOut
   * @request GET:/lynex/router/getAmountOut
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
    export type ResponseBody = GetAmountOutData;
  }

  /**
   * No description
   * @tags LynexRouter
   * @name GetAmountsOut
   * @request GET:/lynex/router/getAmountsOut
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
    export type ResponseBody = GetAmountsOutData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name GetApproved
   * @request GET:/lynex/nft/getApproved
   * @secure
   */
  export namespace GetApproved {
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
    export type ResponseBody = GetApprovedData;
  }

  /**
   * @description Retrieves an asset by its address.
   * @tags Lynex
   * @name GetAssetByAddress
   * @request GET:/lynex/data/assets/{address}
   * @secure
   */
  export namespace GetAssetByAddress {
    export type RequestParams = {
      /** - The address of the asset to retrieve. */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = GetAssetByAddressData;
  }

  /**
   * @description Retrieves the assets using the provided authorization token.
   * @tags Lynex
   * @name GetAssets
   * @request GET:/lynex/data/assets
   * @secure
   */
  export namespace GetAssets {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = GetAssetsData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name GetBalanceOf
   * @request GET:/lynex/nft/balanceOf
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
    export type ResponseBody = GetBalanceOfData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name GetBalanceOfNft
   * @request GET:/lynex/nft/balanceOfNFT
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
    export type ResponseBody = GetBalanceOfNftData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name GetBalanceOfNftAt
   * @request GET:/lynex/nft/balanceOfNFTAt
   * @secure
   */
  export namespace GetBalanceOfNftAt {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      timestamp: string;
      tokenId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetBalanceOfNftAtData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name GetDelegates
   * @request GET:/lynex/nft/delegates
   * @secure
   */
  export namespace GetDelegates {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      timestamp: string;
      tokenId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetDelegatesData;
  }

  /**
   * No description
   * @tags LynexRouter
   * @name GetFactory
   * @request GET:/lynex/router/factory
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
    export type ResponseBody = GetFactoryData;
  }

  /**
   * No description
   * @tags LynexVoter
   * @name GetLastVoted
   * @request GET:/lynex/voter/lastVoted
   * @secure
   */
  export namespace GetLastVoted {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      voter: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetLastVotedData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name GetLockDetails
   * @request GET:/lynex/nft/lockDetails
   * @secure
   */
  export namespace GetLockDetails {
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
    export type ResponseBody = GetLockDetailsData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name GetName
   * @request GET:/lynex/nft/name
   * @secure
   */
  export namespace GetName {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetNameData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name GetOwnerOf
   * @request GET:/lynex/nft/ownerOf
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
    export type ResponseBody = GetOwnerOfData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name GetPastVotes
   * @request GET:/lynex/nft/getPastVotes
   * @secure
   */
  export namespace GetPastVotes {
    export type RequestParams = {};
    export type RequestQuery = {
      account: string;
      address: string;
      chainId: string;
      timestamp: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetPastVotesData;
  }

  /**
   * No description
   * @tags Lynex
   * @name GetPoolByAddress
   * @request GET:/lynex/data/pools/{address}
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
    export type ResponseBody = GetPoolByAddressData;
  }

  /**
   * No description
   * @tags Lynex
   * @name GetPools
   * @request GET:/lynex/data/pools
   * @secure
   */
  export namespace GetPools {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetPoolsData;
  }

  /**
   * No description
   * @tags Lynex
   * @name GetPoolsByType
   * @request GET:/lynex/data/pools/type/{type}
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
    export type ResponseBody = GetPoolsByTypeData;
  }

  /**
   * No description
   * @tags LynexVoter
   * @name GetPoolVoteLength
   * @request GET:/lynex/voter/poolVoteLength
   * @secure
   */
  export namespace GetPoolVoteLength {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      voter: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetPoolVoteLengthData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name GetSymbol
   * @request GET:/lynex/nft/symbol
   * @secure
   */
  export namespace GetSymbol {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetSymbolData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name GetTokenByIndex
   * @request GET:/lynex/nft/tokenByIndex
   * @secure
   */
  export namespace GetTokenByIndex {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      index: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetTokenByIndexData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name GetTokenOfOwnerByIndex
   * @request GET:/lynex/nft/tokenOfOwnerByIndex
   * @secure
   */
  export namespace GetTokenOfOwnerByIndex {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      index: string;
      owner: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetTokenOfOwnerByIndexData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name GetTokenUri
   * @request GET:/lynex/nft/tokenURI
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
    export type ResponseBody = GetTokenUriData;
  }

  /**
   * No description
   * @tags Lynex
   * @name GetTopAprPools
   * @request GET:/lynex/data/pools/top-apr
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
    export type ResponseBody = GetTopAprPoolsData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name GetTotalNftsMinted
   * @request GET:/lynex/nft/totalNftsMinted
   * @secure
   */
  export namespace GetTotalNftsMinted {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetTotalNftsMintedData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name GetTotalSupply
   * @request GET:/lynex/nft/totalSupply
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
    export type ResponseBody = GetTotalSupplyData;
  }

  /**
   * No description
   * @tags Lynex
   * @name GetTotalValueLocked
   * @request GET:/lynex/data/tvl
   * @secure
   */
  export namespace GetTotalValueLocked {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetTotalValueLockedData;
  }

  /**
   * No description
   * @tags LynexVoter
   * @name GetTotalWeight
   * @request GET:/lynex/voter/totalWeight
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
    export type ResponseBody = GetTotalWeightData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name GetVestedPayout
   * @request GET:/lynex/nft/vestedPayout
   * @secure
   */
  export namespace GetVestedPayout {
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
    export type ResponseBody = GetVestedPayoutData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name GetVestedPayoutAtTime
   * @request GET:/lynex/nft/vestedPayoutAtTime
   * @secure
   */
  export namespace GetVestedPayoutAtTime {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      timestamp: string;
      tokenId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetVestedPayoutAtTimeData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name GetVestingPayout
   * @request GET:/lynex/nft/vestingPayout
   * @secure
   */
  export namespace GetVestingPayout {
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
    export type ResponseBody = GetVestingPayoutData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name GetVestingPeriod
   * @request GET:/lynex/nft/vestingPeriod
   * @secure
   */
  export namespace GetVestingPeriod {
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
    export type ResponseBody = GetVestingPeriodData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name GetVotes
   * @request GET:/lynex/nft/getVotes
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
    export type ResponseBody = GetVotesData;
  }

  /**
   * No description
   * @tags LynexVoter
   * @name GetWeights
   * @request GET:/lynex/voter/weights
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
    export type ResponseBody = GetWeightsData;
  }

  /**
   * No description
   * @tags LynexRouter
   * @name GetWeth
   * @request GET:/lynex/router/wETH
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
    export type ResponseBody = GetWethData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name GlobalCheckpoint
   * @request POST:/lynex/nft/{address}/globalCheckpoint
   * @secure
   */
  export namespace GlobalCheckpoint {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GlobalCheckpointData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name IncreaseLockAmount
   * @request POST:/lynex/nft/{address}/increaseLockAmount
   * @secure
   */
  export namespace IncreaseLockAmount {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = IncreaseLockAmountData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name IncreaseUnlockTime
   * @request POST:/lynex/nft/{address}/increaseUnlockTime
   * @secure
   */
  export namespace IncreaseUnlockTime {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = IncreaseUnlockTimeData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name IsApprovedForAll
   * @request GET:/lynex/nft/isApprovedForAll
   * @secure
   */
  export namespace IsApprovedForAll {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      operator: string;
      owner: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = IsApprovedForAllData;
  }

  /**
   * No description
   * @tags LynexVoter
   * @name IsGauge
   * @request GET:/lynex/voter/isGauge
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
    export type ResponseBody = IsGaugeData;
  }

  /**
   * No description
   * @tags LynexVoter
   * @name IsWhitelisted
   * @request GET:/lynex/voter/isWhitelisted
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
    export type ResponseBody = IsWhitelistedData;
  }

  /**
   * No description
   * @tags LynexVoter
   * @name KillGauge
   * @request POST:/lynex/voter/{address}/killGauge
   * @secure
   */
  export namespace KillGauge {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = KillGaugeData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name Merge
   * @request POST:/lynex/nft/{address}/merge
   * @secure
   */
  export namespace Merge {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = MergeData;
  }

  /**
   * No description
   * @tags LynexVoter
   * @name NotifyRewardAmount
   * @request POST:/lynex/voter/{address}/notifyRewardAmount
   * @secure
   */
  export namespace NotifyRewardAmount {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = NotifyRewardAmountData;
  }

  /**
   * No description
   * @tags LynexVoter
   * @name Poke
   * @request POST:/lynex/voter/{address}/poke
   * @secure
   */
  export namespace Poke {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = PokeData;
  }

  /**
   * No description
   * @tags LynexVoter
   * @name Reset
   * @request POST:/lynex/voter/{address}/reset
   * @secure
   */
  export namespace Reset {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ResetData;
  }

  /**
   * No description
   * @tags LynexVoter
   * @name ReviveGauge
   * @request POST:/lynex/voter/{address}/reviveGauge
   * @secure
   */
  export namespace ReviveGauge {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ReviveGaugeData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name SafeTransferFrom
   * @request POST:/lynex/nft/{address}/safeTransferFrom
   * @secure
   */
  export namespace SafeTransferFrom {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SafeTransferFromData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name SetApprovalForAll
   * @request POST:/lynex/nft/{address}/setApprovalForAll
   * @secure
   */
  export namespace SetApprovalForAll {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SetApprovalForAllData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name SetClaimApproval
   * @request POST:/lynex/nft/{address}/setClaimApproval
   * @secure
   */
  export namespace SetClaimApproval {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SetClaimApprovalData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name SetClaimApprovalForAll
   * @request POST:/lynex/nft/{address}/setClaimApprovalForAll
   * @secure
   */
  export namespace SetClaimApprovalForAll {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SetClaimApprovalForAllData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name Split
   * @request POST:/lynex/nft/{address}/split
   * @secure
   */
  export namespace Split {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SplitData;
  }

  /**
   * No description
   * @tags LynexRouter
   * @name SwapExactEthForTokens
   * @request POST:/lynex/router/{address}/swapExactETHForTokens
   * @secure
   */
  export namespace SwapExactEthForTokens {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexRouterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SwapExactEthForTokensData;
  }

  /**
   * No description
   * @tags LynexRouter
   * @name SwapExactTokensForEth
   * @request POST:/lynex/router/{address}/swapExactTokensForETH
   * @secure
   */
  export namespace SwapExactTokensForEth {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexRouterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SwapExactTokensForEthData;
  }

  /**
   * No description
   * @tags LynexRouter
   * @name SwapExactTokensForTokens
   * @request POST:/lynex/router/{address}/swapExactTokensForTokens
   * @secure
   */
  export namespace SwapExactTokensForTokens {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexRouterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SwapExactTokensForTokensData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name TransferFrom
   * @request POST:/lynex/nft/{address}/transferFrom
   * @secure
   */
  export namespace TransferFrom {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = TransferFromData;
  }

  /**
   * No description
   * @tags LynexNFT
   * @name UnlockPermanent
   * @request POST:/lynex/nft/{address}/unlockPermanent
   * @secure
   */
  export namespace UnlockPermanent {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = UnlockPermanentData;
  }

  /**
   * No description
   * @tags LynexVoter
   * @name Vote
   * @request POST:/lynex/voter/{address}/vote
   * @secure
   */
  export namespace Vote {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = VoteData;
  }

  /**
   * No description
   * @tags LynexVoter
   * @name VoteWithOptimalDistribution
   * @request POST:/lynex/voter/{address}/voteWithOptimalDistribution
   * @secure
   */
  export namespace VoteWithOptimalDistribution {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VoteWithOptimalDistributionPayload;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = VoteWithOptimalDistributionData;
  }

  /**
   * No description
   * @tags LynexVoter
   * @name Whitelist
   * @request POST:/lynex/voter/{address}/whitelist
   * @secure
   */
  export namespace Whitelist {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LynexVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = WhitelistData;
  }
}
