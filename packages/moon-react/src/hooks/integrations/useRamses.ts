import { useMoonSDK, useMoonTransaction } from '@/hooks';
import {
  CalculateOptimalVoteDistributionParams2,
  GetAmountOutParams2,
  GetAmountsOutParams2,
  GetBalanceOfNftParams2,
  GetBalanceOfParams6,
  GetDelegatesParams2,
  GetFactoryParams2,
  GetLastVotedParams2,
  GetLockedParams,
  GetOwnerOfParams2,
  GetPastVotesParams2,
  GetReservesParams,
  GetTokenUriParams2,
  GetTopAprPoolsParams2,
  GetTotalSupplyParams6,
  GetTotalWeightParams2,
  GetVotesParams2,
  GetWeightsParams2,
  GetWethParams4,
  IsGaugeParams2,
  IsPairParams,
  IsWhitelistedParams2,
  PairForParams,
  QuoteAddLiquidityParams,
  QuoteRemoveLiquidityParams,
  RamsesNFTInputBody,
  RamsesRouterInputBody,
  RamsesVoterInputBody,
  SortTokensParams,
  VoteWithOptimalDistributionBody,
} from '@moonup/moon-api';
import { useCallback } from 'react';

export const useRamses = () => {
  const context = useMoonSDK();
  const { handleTransaction } = useMoonTransaction();
  const { moon } = context;

  const getRamsesSDK = () => {
    const ramsesSDK = moon?.getRamsesSDK();
    if (!ramsesSDK) throw new Error('Moon Ramses SDK not initialized');
    return ramsesSDK;
  };

  const abstain = useCallback(
    (address: string, data: RamsesNFTInputBody) =>
      handleTransaction('abstain', () => getRamsesSDK().abstain(address, data)),
    [moon]
  );

  const addLiquidity = useCallback(
    (address: string, data: RamsesRouterInputBody) =>
      handleTransaction('addLiquidity', () =>
        getRamsesSDK().addLiquidity(address, data)
      ),
    [moon]
  );

  const addLiquidityEth = useCallback(
    (address: string, data: RamsesRouterInputBody) =>
      handleTransaction('addLiquidityEth', () =>
        getRamsesSDK().addLiquidityEth(address, data)
      ),
    [moon]
  );

  const approve = useCallback(
    (address: string, data: RamsesNFTInputBody) =>
      handleTransaction('approve', () => getRamsesSDK().approve(address, data)),
    [moon]
  );

  const attach = useCallback(
    (address: string, data: RamsesNFTInputBody) =>
      handleTransaction('attach', () => getRamsesSDK().attach(address, data)),
    [moon]
  );

  const attachTokenToGauge = useCallback(
    (address: string, data: RamsesVoterInputBody) =>
      handleTransaction('attachTokenToGauge', () =>
        getRamsesSDK().attachTokenToGauge(address, data)
      ),
    [moon]
  );

  const calculateOptimalVoteDistribution = useCallback(
    (query: CalculateOptimalVoteDistributionParams2) =>
      handleTransaction('calculateOptimalVoteDistribution', () =>
        getRamsesSDK().calculateOptimalVoteDistribution(query)
      ),
    [moon]
  );

  const claimBribes = useCallback(
    (address: string, data: RamsesVoterInputBody) =>
      handleTransaction('claimBribes', () =>
        getRamsesSDK().claimBribes(address, data)
      ),
    [moon]
  );

  const claimFees = useCallback(
    (address: string, data: RamsesVoterInputBody) =>
      handleTransaction('claimFees', () =>
        getRamsesSDK().claimFees(address, data)
      ),
    [moon]
  );

  const claimRewards = useCallback(
    (address: string, data: RamsesVoterInputBody) =>
      handleTransaction('claimRewards', () =>
        getRamsesSDK().claimRewards(address, data)
      ),
    [moon]
  );

  const createGauge = useCallback(
    (address: string, data: RamsesVoterInputBody) =>
      handleTransaction('createGauge', () =>
        getRamsesSDK().createGauge(address, data)
      ),
    [moon]
  );

  const createLock = useCallback(
    (address: string, data: RamsesNFTInputBody) =>
      handleTransaction('createLock', () =>
        getRamsesSDK().createLock(address, data)
      ),
    [moon]
  );

  const delegate = useCallback(
    (address: string, data: RamsesNFTInputBody) =>
      handleTransaction('delegate', () =>
        getRamsesSDK().delegate(address, data)
      ),
    [moon]
  );

  const detach = useCallback(
    (address: string, data: RamsesNFTInputBody) =>
      handleTransaction('detach', () => getRamsesSDK().detach(address, data)),
    [moon]
  );

  const detachTokenFromGauge = useCallback(
    (address: string, data: RamsesVoterInputBody) =>
      handleTransaction('detachTokenFromGauge', () =>
        getRamsesSDK().detachTokenFromGauge(address, data)
      ),
    [moon]
  );

  const distribute = useCallback(
    (address: string, data: RamsesVoterInputBody) =>
      handleTransaction('distribute', () =>
        getRamsesSDK().distribute(address, data)
      ),
    [moon]
  );

  const getAmountOut = useCallback(
    (query: GetAmountOutParams2) =>
      handleTransaction('getAmountOut', () =>
        getRamsesSDK().getAmountOut(query)
      ),
    [moon]
  );

  const getAmountsOut = useCallback(
    (query: GetAmountsOutParams2) =>
      handleTransaction('getAmountsOut', () =>
        getRamsesSDK().getAmountsOut(query)
      ),
    [moon]
  );

  const getBalanceOf = useCallback(
    (query: GetBalanceOfParams6) =>
      handleTransaction('getBalanceOf', () =>
        getRamsesSDK().getBalanceOf(query)
      ),
    [moon]
  );

  const getBalanceOfNft = useCallback(
    (query: GetBalanceOfNftParams2) =>
      handleTransaction('getBalanceOfNft', () =>
        getRamsesSDK().getBalanceOfNft(query)
      ),
    [moon]
  );

  const getDelegates = useCallback(
    (query: GetDelegatesParams2) =>
      handleTransaction('getDelegates', () =>
        getRamsesSDK().getDelegates(query)
      ),
    [moon]
  );

  const getFactory = useCallback(
    (query: GetFactoryParams2) =>
      handleTransaction('getFactory', () => getRamsesSDK().getFactory(query)),
    [moon]
  );

  const getInfo = useCallback(
    () => handleTransaction('getInfo', () => getRamsesSDK().getInfo()),
    [moon]
  );

  const getLastVoted = useCallback(
    (query: GetLastVotedParams2) =>
      handleTransaction('getLastVoted', () =>
        getRamsesSDK().getLastVoted(query)
      ),
    [moon]
  );

  const getLocked = useCallback(
    (query: GetLockedParams) =>
      handleTransaction('getLocked', () => getRamsesSDK().getLocked(query)),
    [moon]
  );

  const getOwnerOf = useCallback(
    (query: GetOwnerOfParams2) =>
      handleTransaction('getOwnerOf', () => getRamsesSDK().getOwnerOf(query)),
    [moon]
  );

  const getPastVotes = useCallback(
    (query: GetPastVotesParams2) =>
      handleTransaction('getPastVotes', () =>
        getRamsesSDK().getPastVotes(query)
      ),
    [moon]
  );

  const getPoolByAddress = useCallback(
    (address: string) =>
      handleTransaction('getPoolByAddress', () =>
        getRamsesSDK().getPoolByAddress(address)
      ),
    [moon]
  );

  const getPools = useCallback(
    () => handleTransaction('getPools', () => getRamsesSDK().getPools()),
    [moon]
  );

  const getPoolsByType = useCallback(
    (type: string) =>
      handleTransaction('getPoolsByType', () =>
        getRamsesSDK().getPoolsByType(type)
      ),
    [moon]
  );

  const getReserves = useCallback(
    (query: GetReservesParams) =>
      handleTransaction('getReserves', () => getRamsesSDK().getReserves(query)),
    [moon]
  );

  const getTokens = useCallback(
    () => handleTransaction('getTokens', () => getRamsesSDK().getTokens()),
    [moon]
  );

  const getTokenUri = useCallback(
    (query: GetTokenUriParams2) =>
      handleTransaction('getTokenUri', () => getRamsesSDK().getTokenUri(query)),
    [moon]
  );

  const getTopAprPools = useCallback(
    (query: GetTopAprPoolsParams2) =>
      handleTransaction('getTopAprPools', () =>
        getRamsesSDK().getTopAprPools(query)
      ),
    [moon]
  );

  const getTotalSupply = useCallback(
    (query: GetTotalSupplyParams6) =>
      handleTransaction('getTotalSupply', () =>
        getRamsesSDK().getTotalSupply(query)
      ),
    [moon]
  );

  const getTotalValueLocked = useCallback(
    () =>
      handleTransaction('getTotalValueLocked', () =>
        getRamsesSDK().getTotalValueLocked()
      ),
    [moon]
  );

  const getTotalWeight = useCallback(
    (query: GetTotalWeightParams2) =>
      handleTransaction('getTotalWeight', () =>
        getRamsesSDK().getTotalWeight(query)
      ),
    [moon]
  );

  const getVotes = useCallback(
    (query: GetVotesParams2) =>
      handleTransaction('getVotes', () => getRamsesSDK().getVotes(query)),
    [moon]
  );

  const getWeights = useCallback(
    (query: GetWeightsParams2) =>
      handleTransaction('getWeights', () => getRamsesSDK().getWeights(query)),
    [moon]
  );

  const getWeth = useCallback(
    (query: GetWethParams4) =>
      handleTransaction('getWeth', () => getRamsesSDK().getWeth(query)),
    [moon]
  );

  const increaseAmount = useCallback(
    (address: string, data: RamsesNFTInputBody) =>
      handleTransaction('increaseAmount', () =>
        getRamsesSDK().increaseAmount(address, data)
      ),
    [moon]
  );

  const increaseUnlockTime = useCallback(
    (address: string, data: RamsesNFTInputBody) =>
      handleTransaction('increaseUnlockTime', () =>
        getRamsesSDK().increaseUnlockTime(address, data)
      ),
    [moon]
  );

  const isGauge = useCallback(
    (query: IsGaugeParams2) =>
      handleTransaction('isGauge', () => getRamsesSDK().isGauge(query)),
    [moon]
  );

  const isPair = useCallback(
    (query: IsPairParams) =>
      handleTransaction('isPair', () => getRamsesSDK().isPair(query)),
    [moon]
  );

  const isWhitelisted = useCallback(
    (query: IsWhitelistedParams2) =>
      handleTransaction('isWhitelisted', () =>
        getRamsesSDK().isWhitelisted(query)
      ),
    [moon]
  );

  const killGauge = useCallback(
    (address: string, data: RamsesVoterInputBody) =>
      handleTransaction('killGauge', () =>
        getRamsesSDK().killGauge(address, data)
      ),
    [moon]
  );

  const merge = useCallback(
    (address: string, data: RamsesNFTInputBody) =>
      handleTransaction('merge', () => getRamsesSDK().merge(address, data)),
    [moon]
  );

  const notifyRewardAmount = useCallback(
    (address: string, data: RamsesVoterInputBody) =>
      handleTransaction('notifyRewardAmount', () =>
        getRamsesSDK().notifyRewardAmount(address, data)
      ),
    [moon]
  );

  const pairFor = useCallback(
    (query: PairForParams) =>
      handleTransaction('pairFor', () => getRamsesSDK().pairFor(query)),
    [moon]
  );

  const poke = useCallback(
    (address: string, data: RamsesVoterInputBody) =>
      handleTransaction('poke', () => getRamsesSDK().poke(address, data)),
    [moon]
  );

  const quoteAddLiquidity = useCallback(
    (query: QuoteAddLiquidityParams) =>
      handleTransaction('quoteAddLiquidity', () =>
        getRamsesSDK().quoteAddLiquidity(query)
      ),
    [moon]
  );

  const quoteRemoveLiquidity = useCallback(
    (query: QuoteRemoveLiquidityParams) =>
      handleTransaction('quoteRemoveLiquidity', () =>
        getRamsesSDK().quoteRemoveLiquidity(query)
      ),

    [moon]
  );

  const removeLiquidity = useCallback(
    (address: string, data: RamsesRouterInputBody) =>
      handleTransaction('removeLiquidity', () =>
        getRamsesSDK().removeLiquidity(address, data)
      ),
    [moon]
  );

  const removeLiquidityEth = useCallback(
    (address: string, data: RamsesRouterInputBody) =>
      handleTransaction('removeLiquidityEth', () =>
        getRamsesSDK().removeLiquidityEth(address, data)
      ),
    [moon]
  );

  const reset = useCallback(
    (address: string, data: RamsesVoterInputBody) =>
      handleTransaction('reset', () => getRamsesSDK().reset(address, data)),
    [moon]
  );

  const reviveGauge = useCallback(
    (address: string, data: RamsesVoterInputBody) =>
      handleTransaction('reviveGauge', () =>
        getRamsesSDK().reviveGauge(address, data)
      ),
    [moon]
  );

  const sortTokens = useCallback(
    (query: SortTokensParams) =>
      handleTransaction('sortTokens', () => getRamsesSDK().sortTokens(query)),
    [moon]
  );

  const split = useCallback(
    (address: string, data: RamsesNFTInputBody) =>
      handleTransaction('split', () => getRamsesSDK().split(address, data)),
    [moon]
  );

  const swapExactEthForTokens = useCallback(
    (address: string, data: RamsesRouterInputBody) =>
      handleTransaction('swapExactEthForTokens', () =>
        getRamsesSDK().swapExactEthForTokens(address, data)
      ),
    [moon]
  );

  const swapExactTokensForEth = useCallback(
    (address: string, data: RamsesRouterInputBody) =>
      handleTransaction('swapExactTokensForEth', () =>
        getRamsesSDK().swapExactTokensForEth(address, data)
      ),
    [moon]
  );

  const swapExactTokensForTokens = useCallback(
    (address: string, data: RamsesRouterInputBody) =>
      handleTransaction('swapExactTokensForTokens', () =>
        getRamsesSDK().swapExactTokensForTokens(address, data)
      ),
    [moon]
  );

  const transferFrom = useCallback(
    (address: string, data: RamsesNFTInputBody) =>
      handleTransaction('transferFrom', () =>
        getRamsesSDK().transferFrom(address, data)
      ),
    [moon]
  );

  const unsafeSwapExactTokensForTokens = useCallback(
    (address: string, data: RamsesRouterInputBody) =>
      handleTransaction('unsafeSwapExactTokensForTokens', () =>
        getRamsesSDK().unsafeSwapExactTokensForTokens(address, data)
      ),
    [moon]
  );

  const vote = useCallback(
    (address: string, data: RamsesVoterInputBody) =>
      handleTransaction('vote', () => getRamsesSDK().vote(address, data)),
    [moon]
  );

  const voteWithOptimalDistribution = useCallback(
    (address: string, data: VoteWithOptimalDistributionBody) =>
      handleTransaction('voteWithOptimalDistribution', () =>
        getRamsesSDK().voteWithOptimalDistribution(address, data)
      ),
    [moon]
  );

  const whitelist = useCallback(
    (address: string, data: RamsesVoterInputBody) =>
      handleTransaction('whitelist', () =>
        getRamsesSDK().whitelist(address, data)
      ),
    [moon]
  );

  const withdraw = useCallback(
    (address: string, data: RamsesNFTInputBody) =>
      handleTransaction('withdraw', () =>
        getRamsesSDK().withdraw(address, data)
      ),
    [moon]
  );

  return {
    abstain,
    addLiquidity,
    addLiquidityEth,
    approve,
    attach,
    attachTokenToGauge,
    calculateOptimalVoteDistribution,
    claimBribes,
    claimFees,
    claimRewards,
    createGauge,
    createLock,
    delegate,
    detach,
    detachTokenFromGauge,
    distribute,
    getAmountOut,
    getAmountsOut,
    getBalanceOf,
    getBalanceOfNft,
    getDelegates,
    getFactory,
    getInfo,
    getLastVoted,
    getLocked,
    getOwnerOf,
    getPastVotes,
    getPoolByAddress,
    getPools,
    getPoolsByType,
    getReserves,
    getTokens,
    getTokenUri,
    getTopAprPools,
    getTotalSupply,
    getTotalValueLocked,
    getTotalWeight,
    getVotes,
    getWeights,
    getWeth,
    increaseAmount,
    increaseUnlockTime,
    isGauge,
    isPair,
    isWhitelisted,
    killGauge,
    merge,
    notifyRewardAmount,
    pairFor,
    poke,
    quoteAddLiquidity,
    quoteRemoveLiquidity,
    removeLiquidity,
    removeLiquidityEth,
    reset,
    reviveGauge,
    sortTokens,
    split,
    swapExactEthForTokens,
    swapExactTokensForEth,
    swapExactTokensForTokens,
    transferFrom,
    unsafeSwapExactTokensForTokens,
    vote,
    voteWithOptimalDistribution,
    whitelist,
    withdraw,
  };
};
