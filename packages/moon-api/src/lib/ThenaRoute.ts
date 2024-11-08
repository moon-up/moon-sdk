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
  AbstainResult,
  ApproveResult3,
  AttachResult,
  AttachTokenToGaugeResult,
  CalculateOptimalVoteDistributionOutput,
  CheckpointResult,
  ClaimBribesOutput,
  ClaimFeesOutput,
  ClaimRewardsResult1,
  CreateGaugeOutput,
  CreateLockForResult,
  CreateLockOutput,
  DelegateBySigResult,
  DelegateOutput,
  DepositForData,
  DetachResult,
  DetachTokenFromGaugeResult,
  DistributeOutput,
  GetApprovedOutput,
  GetBalanceOfAtNftData,
  GetBalanceOfNftOutput,
  GetBalanceOfResult2,
  GetDelegatesOutput,
  GetFusionByAddressData,
  GetFusionsByTypeData,
  GetFusionsData,
  GetLastUserSlopeData,
  GetLockedEndData,
  GetLockedResult,
  GetOwnerOfOutput,
  GetPastTotalSupplyData,
  GetPastVotesOutput,
  GetTokenUriOutput,
  GetTopAprFusionsData,
  GetTopPairsData,
  GetTopTokensData,
  GetTotalSupplyAtData,
  GetTotalSupplyAtTData,
  GetTotalSupplyData2,
  GetTotalValueLockedOutput,
  GetTotalWeightOutput,
  GetUserPointHistoryData,
  GetUserPointHistoryTsData,
  GetVotesOutput,
  GetWeightsOutput,
  IncreaseLockAmountResult,
  IncreaseUnlockTimeOutput,
  IsApprovedForAllResult1,
  IsGaugeOutput,
  IsWhitelistedOutput,
  KillGaugeOutput,
  LastVotedData,
  MergeOutput,
  NotifyRewardAmountOutput,
  PokeOutput,
  PoolVoteLengthData,
  ResetOutput,
  ReviveGaugeOutput,
  SafeTransferFromOutput,
  SetApprovalForAllData1,
  SplitOutput,
  TransferFromOutput1,
  VeNFTInputBody,
  VeTheNftVoterInputBody,
  VoteOutput,
  VoteWithOptimalDistributionInput,
  VoteWithOptimalDistributionOutput,
  VotingData,
  WhitelistOutput,
  WithdrawResult1,
} from './data-contracts';

export namespace Thena {
  /**
   * No description
   * @tags VeTheNFT
   * @name Abstain
   * @request POST:/thena/nft/{address}/abstain
   * @secure
   */
  export namespace Abstain {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = AbstainResult;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name Approve
   * @request POST:/thena/nft/{address}/approve
   * @secure
   */
  export namespace Approve {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ApproveResult3;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name Attach
   * @request POST:/thena/nft/{address}/attach
   * @secure
   */
  export namespace Attach {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = AttachResult;
  }

  /**
   * No description
   * @tags VeTheNftVoter
   * @name AttachTokenToGauge
   * @request POST:/thena/voter/{address}/attachTokenToGauge
   * @secure
   */
  export namespace AttachTokenToGauge {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeTheNftVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = AttachTokenToGaugeResult;
  }

  /**
   * No description
   * @tags Thena
   * @name CalculateOptimalVoteDistribution
   * @request GET:/thena/data/vote-distribution
   * @secure
   */
  export namespace CalculateOptimalVoteDistribution {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @format double */
      maxFusions?: number;
      /** @format double */
      totalVotes: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CalculateOptimalVoteDistributionOutput;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name Checkpoint
   * @request POST:/thena/nft/{address}/checkpoint
   * @secure
   */
  export namespace Checkpoint {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CheckpointResult;
  }

  /**
   * No description
   * @tags VeTheNftVoter
   * @name ClaimBribes
   * @request POST:/thena/voter/{address}/claimBribes
   * @secure
   */
  export namespace ClaimBribes {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeTheNftVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ClaimBribesOutput;
  }

  /**
   * No description
   * @tags VeTheNftVoter
   * @name ClaimFees
   * @request POST:/thena/voter/{address}/claimFees
   * @secure
   */
  export namespace ClaimFees {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeTheNftVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ClaimFeesOutput;
  }

  /**
   * No description
   * @tags VeTheNftVoter
   * @name ClaimRewards
   * @request POST:/thena/voter/{address}/claimRewards
   * @secure
   */
  export namespace ClaimRewards {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeTheNftVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ClaimRewardsResult1;
  }

  /**
   * No description
   * @tags VeTheNftVoter
   * @name CreateGauge
   * @request POST:/thena/voter/{address}/createGauge
   * @secure
   */
  export namespace CreateGauge {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeTheNftVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateGaugeOutput;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name CreateLock
   * @request POST:/thena/nft/{address}/createLock
   * @secure
   */
  export namespace CreateLock {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateLockOutput;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name CreateLockFor
   * @request POST:/thena/nft/{address}/createLockFor
   * @secure
   */
  export namespace CreateLockFor {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateLockForResult;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name Delegate
   * @request POST:/thena/nft/{address}/delegate
   * @secure
   */
  export namespace Delegate {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DelegateOutput;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name DelegateBySig
   * @request POST:/thena/nft/{address}/delegateBySig
   * @secure
   */
  export namespace DelegateBySig {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DelegateBySigResult;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name DepositFor
   * @request POST:/thena/nft/{address}/depositFor
   * @secure
   */
  export namespace DepositFor {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DepositForData;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name Detach
   * @request POST:/thena/nft/{address}/detach
   * @secure
   */
  export namespace Detach {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DetachResult;
  }

  /**
   * No description
   * @tags VeTheNftVoter
   * @name DetachTokenFromGauge
   * @request POST:/thena/voter/{address}/detachTokenFromGauge
   * @secure
   */
  export namespace DetachTokenFromGauge {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeTheNftVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DetachTokenFromGaugeResult;
  }

  /**
   * No description
   * @tags VeTheNftVoter
   * @name Distribute
   * @request POST:/thena/voter/{address}/distribute
   * @secure
   */
  export namespace Distribute {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeTheNftVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DistributeOutput;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name GetApproved
   * @request GET:/thena/nft/{tokenId}/getApproved
   * @secure
   */
  export namespace GetApproved {
    export type RequestParams = {
      tokenId: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetApprovedOutput;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name GetBalanceOf
   * @request GET:/thena/nft/{account}/balanceOf
   * @secure
   */
  export namespace GetBalanceOf {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetBalanceOfResult2;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name GetBalanceOfAtNft
   * @request GET:/thena/nft/{tokenId}/balanceOfAtNFT
   * @secure
   */
  export namespace GetBalanceOfAtNft {
    export type RequestParams = {
      tokenId: string;
    };
    export type RequestQuery = {
      address: string;
      block: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetBalanceOfAtNftData;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name GetBalanceOfNft
   * @request GET:/thena/nft/{tokenId}/balanceOfNFT
   * @secure
   */
  export namespace GetBalanceOfNft {
    export type RequestParams = {
      tokenId: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetBalanceOfNftOutput;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name GetDelegates
   * @request GET:/thena/nft/{delegator}/delegates
   * @secure
   */
  export namespace GetDelegates {
    export type RequestParams = {
      delegator: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetDelegatesOutput;
  }

  /**
   * No description
   * @tags Thena
   * @name GetFusionByAddress
   * @request GET:/thena/data/fusions/{address}
   * @secure
   */
  export namespace GetFusionByAddress {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetFusionByAddressData;
  }

  /**
   * No description
   * @tags Thena
   * @name GetFusions
   * @request GET:/thena/data/fusions
   * @secure
   */
  export namespace GetFusions {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetFusionsData;
  }

  /**
   * No description
   * @tags Thena
   * @name GetFusionsByType
   * @request GET:/thena/data/fusions/type/{type}
   * @secure
   */
  export namespace GetFusionsByType {
    export type RequestParams = {
      type: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetFusionsByTypeData;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name GetLastUserSlope
   * @request GET:/thena/nft/{tokenId}/getLastUserSlope
   * @secure
   */
  export namespace GetLastUserSlope {
    export type RequestParams = {
      tokenId: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetLastUserSlopeData;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name GetLocked
   * @request GET:/thena/nft/{tokenId}/locked
   * @secure
   */
  export namespace GetLocked {
    export type RequestParams = {
      tokenId: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetLockedResult;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name GetLockedEnd
   * @request GET:/thena/nft/{tokenId}/lockedEnd
   * @secure
   */
  export namespace GetLockedEnd {
    export type RequestParams = {
      tokenId: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetLockedEndData;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name GetOwnerOf
   * @request GET:/thena/nft/{tokenId}/ownerOf
   * @secure
   */
  export namespace GetOwnerOf {
    export type RequestParams = {
      tokenId: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetOwnerOfOutput;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name GetPastTotalSupply
   * @request GET:/thena/nft/getPastTotalSupply
   * @secure
   */
  export namespace GetPastTotalSupply {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      timestamp: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetPastTotalSupplyData;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name GetPastVotes
   * @request GET:/thena/nft/{account}/getPastVotes
   * @secure
   */
  export namespace GetPastVotes {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
      timestamp: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetPastVotesOutput;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name GetTokenUri
   * @request GET:/thena/nft/{tokenId}/tokenURI
   * @secure
   */
  export namespace GetTokenUri {
    export type RequestParams = {
      tokenId: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetTokenUriOutput;
  }

  /**
   * No description
   * @tags Thena
   * @name GetTopAprFusions
   * @request GET:/thena/data/fusions/top-apr
   * @secure
   */
  export namespace GetTopAprFusions {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @format double */
      limit?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetTopAprFusionsData;
  }

  /**
   * No description
   * @tags Thena
   * @name GetTopPairs
   * @request GET:/thena/data/pairs/top
   * @secure
   */
  export namespace GetTopPairs {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @format double */
      limit?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetTopPairsData;
  }

  /**
   * No description
   * @tags Thena
   * @name GetTopTokens
   * @request GET:/thena/data/tokens/top
   * @secure
   */
  export namespace GetTopTokens {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @format double */
      limit?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetTopTokensData;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name GetTotalSupply
   * @request GET:/thena/nft/totalSupply
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
    export type ResponseBody = GetTotalSupplyData2;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name GetTotalSupplyAt
   * @request GET:/thena/nft/totalSupplyAt
   * @secure
   */
  export namespace GetTotalSupplyAt {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      block: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetTotalSupplyAtData;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name GetTotalSupplyAtT
   * @request GET:/thena/nft/totalSupplyAtT
   * @secure
   */
  export namespace GetTotalSupplyAtT {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      t: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetTotalSupplyAtTData;
  }

  /**
   * No description
   * @tags Thena
   * @name GetTotalValueLocked
   * @request GET:/thena/data/tvl
   * @secure
   */
  export namespace GetTotalValueLocked {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetTotalValueLockedOutput;
  }

  /**
   * No description
   * @tags VeTheNftVoter
   * @name GetTotalWeight
   * @request GET:/thena/voter/totalWeight
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
    export type ResponseBody = GetTotalWeightOutput;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name GetUserPointHistory
   * @request GET:/thena/nft/{tokenId}/userPointHistory
   * @secure
   */
  export namespace GetUserPointHistory {
    export type RequestParams = {
      tokenId: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
      loc: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetUserPointHistoryData;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name GetUserPointHistoryTs
   * @request GET:/thena/nft/{tokenId}/userPointHistoryTS
   * @secure
   */
  export namespace GetUserPointHistoryTs {
    export type RequestParams = {
      tokenId: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
      idx: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetUserPointHistoryTsData;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name GetVotes
   * @request GET:/thena/nft/{account}/getVotes
   * @secure
   */
  export namespace GetVotes {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetVotesOutput;
  }

  /**
   * No description
   * @tags VeTheNftVoter
   * @name GetWeights
   * @request GET:/thena/voter/weights
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
    export type ResponseBody = GetWeightsOutput;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name IncreaseLockAmount
   * @request POST:/thena/nft/{address}/increaseLockAmount
   * @secure
   */
  export namespace IncreaseLockAmount {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = IncreaseLockAmountResult;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name IncreaseUnlockTime
   * @request POST:/thena/nft/{address}/increaseUnlockTime
   * @secure
   */
  export namespace IncreaseUnlockTime {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = IncreaseUnlockTimeOutput;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name IsApprovedForAll
   * @request GET:/thena/nft/{owner}/isApprovedForAll
   * @secure
   */
  export namespace IsApprovedForAll {
    export type RequestParams = {
      owner: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
      operator: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = IsApprovedForAllResult1;
  }

  /**
   * No description
   * @tags VeTheNftVoter
   * @name IsGauge
   * @request GET:/thena/voter/isGauge
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
    export type ResponseBody = IsGaugeOutput;
  }

  /**
   * No description
   * @tags VeTheNftVoter
   * @name IsWhitelisted
   * @request GET:/thena/voter/isWhitelisted
   * @secure
   */
  export namespace IsWhitelisted {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      tokenAddress: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = IsWhitelistedOutput;
  }

  /**
   * No description
   * @tags VeTheNftVoter
   * @name KillGauge
   * @request POST:/thena/voter/{address}/killGauge
   * @secure
   */
  export namespace KillGauge {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeTheNftVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = KillGaugeOutput;
  }

  /**
   * No description
   * @tags VeTheNftVoter
   * @name LastVoted
   * @request GET:/thena/voter/lastVoted
   * @secure
   */
  export namespace LastVoted {
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
    export type ResponseBody = LastVotedData;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name Merge
   * @request POST:/thena/nft/{address}/merge
   * @secure
   */
  export namespace Merge {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = MergeOutput;
  }

  /**
   * No description
   * @tags VeTheNftVoter
   * @name NotifyRewardAmount
   * @request POST:/thena/voter/{address}/notifyRewardAmount
   * @secure
   */
  export namespace NotifyRewardAmount {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeTheNftVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = NotifyRewardAmountOutput;
  }

  /**
   * No description
   * @tags VeTheNftVoter
   * @name Poke
   * @request POST:/thena/voter/{address}/poke
   * @secure
   */
  export namespace Poke {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeTheNftVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = PokeOutput;
  }

  /**
   * No description
   * @tags VeTheNftVoter
   * @name PoolVoteLength
   * @request GET:/thena/voter/poolVoteLength
   * @secure
   */
  export namespace PoolVoteLength {
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
    export type ResponseBody = PoolVoteLengthData;
  }

  /**
   * No description
   * @tags VeTheNftVoter
   * @name Reset
   * @request POST:/thena/voter/{address}/reset
   * @secure
   */
  export namespace Reset {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeTheNftVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ResetOutput;
  }

  /**
   * No description
   * @tags VeTheNftVoter
   * @name ReviveGauge
   * @request POST:/thena/voter/{address}/reviveGauge
   * @secure
   */
  export namespace ReviveGauge {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeTheNftVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ReviveGaugeOutput;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name SafeTransferFrom
   * @request POST:/thena/nft/{address}/safeTransferFrom
   * @secure
   */
  export namespace SafeTransferFrom {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SafeTransferFromOutput;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name SetApprovalForAll
   * @request POST:/thena/nft/{address}/setApprovalForAll
   * @secure
   */
  export namespace SetApprovalForAll {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SetApprovalForAllData1;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name Split
   * @request POST:/thena/nft/{address}/split
   * @secure
   */
  export namespace Split {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SplitOutput;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name TransferFrom
   * @request POST:/thena/nft/{address}/transferFrom
   * @secure
   */
  export namespace TransferFrom {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = TransferFromOutput1;
  }

  /**
   * No description
   * @tags VeTheNftVoter
   * @name Vote
   * @request POST:/thena/voter/{address}/vote
   * @secure
   */
  export namespace Vote {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeTheNftVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = VoteOutput;
  }

  /**
   * No description
   * @tags VeTheNftVoter
   * @name VoteWithOptimalDistribution
   * @request POST:/thena/voter/{address}/voteWithOptimalDistribution
   * @secure
   */
  export namespace VoteWithOptimalDistribution {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VoteWithOptimalDistributionInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = VoteWithOptimalDistributionOutput;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name Voting
   * @request POST:/thena/nft/{address}/voting
   * @secure
   */
  export namespace Voting {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = VotingData;
  }

  /**
   * No description
   * @tags VeTheNftVoter
   * @name Whitelist
   * @request POST:/thena/voter/{address}/whitelist
   * @secure
   */
  export namespace Whitelist {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeTheNftVoterInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = WhitelistOutput;
  }

  /**
   * No description
   * @tags VeTheNFT
   * @name Withdraw
   * @request POST:/thena/nft/{address}/withdraw
   * @secure
   */
  export namespace Withdraw {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = VeNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = WithdrawResult1;
  }
}
