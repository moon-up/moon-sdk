import { useMoonSDK, useMoonTransaction } from '@/hooks';
import {
  AddLiquidityEthOutput,
  AddLiquidityOutput,
  ApproveOutput1,
  BalanceOfOutput,
  BalanceOfParams3,
  BaseUriData,
  BaseUriParams,
  BurnResult,
  CollectData,
  CreateAndInitializePoolIfNecessaryData,
  DecreaseLiquidityData,
  DomainSeparatorData,
  DomainSeparatorParams,
  ExactInputData,
  ExactInputSingleData,
  ExactOutputData,
  ExactOutputSingleData,
  Factory2Data,
  Factory2Params,
  FactoryData,
  FactoryParams,
  GetAmountInData,
  GetAmountOutOutput,
  GetAmountsInData,
  GetAmountsOutOutput,
  GetApprovedParams2,
  GetApprovedResult,
  GetFactoryOutput,
  GetFactoryParams4,
  GetWethData1,
  GetWethParams6,
  IncreaseLiquidityData,
  IsApprovedForAllOutput,
  IsApprovedForAllParams3,
  MintResult,
  Multicall2Data,
  MulticallData,
  NameData,
  NameParams,
  OwnerOfData,
  OwnerOfParams,
  PermitData,
  PermitTypehashData,
  PermitTypehashParams,
  PositionsData,
  PositionsParams,
  QuoteData,
  RefundEth2Data,
  RefundEthData,
  RemoveLiquidityEthResult,
  RemoveLiquidityEthSupportingFeeOnTransferTokensData,
  RemoveLiquidityEthWithPermitData,
  RemoveLiquidityEthWithPermitSupportingFeeOnTransferTokensData,
  RemoveLiquidityResult,
  RemoveLiquidityWithPermitData,
  SelfPermitAllowedData,
  SelfPermitAllowedIfNecessaryData,
  SelfPermitData,
  SelfPermitIfNecessaryData,
  SetApprovalForAllOutput,
  SupportsInterfaceParams2,
  SupportsInterfaceResult,
  SwapEthForExactTokensData,
  SwapExactEthForTokensOutput,
  SwapExactEthForTokensSupportingFeeOnTransferTokensData,
  SwapExactTokensForEthOutput,
  SwapExactTokensForEthSupportingFeeOnTransferTokensData,
  SwapExactTokensForTokensOutput,
  SwapExactTokensForTokensSupportingFeeOnTransferTokensData,
  SwapTokensForExactEthData,
  SwapTokensForExactTokensData,
  SweepToken2Data,
  SweepTokenData,
  SweepTokenWithFeeData,
  SymbolData,
  SymbolParams,
  TokenByIndexData,
  TokenByIndexParams,
  TokenOfOwnerByIndexData,
  TokenOfOwnerByIndexParams,
  TokenUriData,
  TokenUriParams,
  TotalSupplyData,
  TotalSupplyParams,
  TransferFromResult1,
  UniswapV2InputBody,
  UniswapV3InputBody,
  UnwrapWeth92Data,
  UnwrapWeth9Data,
  UnwrapWeth9WithFeeData,
  Weth92Data,
  Weth92Params,
  Weth9Data,
  Weth9Params,
} from '@moonup/moon-api';
import { useCallback } from 'react';

export const useUniswap = () => {
  const context = useMoonSDK();
  const { handleTransaction } = useMoonTransaction();
  const { moon } = context;

  const getUniswapSDK = () => {
    const uniswapSDK = moon?.getUniswapSDK();
    if (!uniswapSDK) throw new Error('Moon Uniswap SDK not initialized');
    return uniswapSDK;
  };

  // UniswapV2Router methods
  const addLiquidity = useCallback(
    async (
      account: string,
      data: UniswapV2InputBody
    ): Promise<AddLiquidityOutput> =>
      handleTransaction('addLiquidity', () =>
        getUniswapSDK().addLiquidity(account, data)
      ),
    [moon]
  );

  const addLiquidityEth = useCallback(
    async (
      account: string,
      data: UniswapV2InputBody
    ): Promise<AddLiquidityEthOutput> =>
      handleTransaction('addLiquidityEth', () =>
        getUniswapSDK().addLiquidityEth(account, data)
      ),
    [moon]
  );

  const getAmountIn = useCallback(
    async (
      account: string,
      data: UniswapV2InputBody
    ): Promise<GetAmountInData> =>
      handleTransaction('getAmountIn', () =>
        getUniswapSDK().getAmountIn(account, data)
      ),
    [moon]
  );

  const getAmountOut = useCallback(
    async (
      account: string,
      data: UniswapV2InputBody
    ): Promise<GetAmountOutOutput> =>
      handleTransaction('getAmountOut', () =>
        getUniswapSDK().getAmountOut(account, data)
      ),
    [moon]
  );

  const getAmountsIn = useCallback(
    async (
      account: string,
      data: UniswapV2InputBody
    ): Promise<GetAmountsInData> =>
      handleTransaction('getAmountsIn', () =>
        getUniswapSDK().getAmountsIn(account, data)
      ),
    [moon]
  );

  const getAmountsOut = useCallback(
    async (
      account: string,
      data: UniswapV2InputBody
    ): Promise<GetAmountsOutOutput> =>
      handleTransaction('getAmountsOut', () =>
        getUniswapSDK().getAmountsOut(account, data)
      ),
    [moon]
  );

  const getFactory = useCallback(
    async (params: GetFactoryParams4): Promise<GetFactoryOutput> =>
      handleTransaction('getFactory', () => getUniswapSDK().getFactory(params)),
    [moon]
  );

  const getWeth = useCallback(
    async (params: GetWethParams6): Promise<GetWethData1> =>
      handleTransaction('getWeth', () => getUniswapSDK().getWeth(params)),
    [moon]
  );

  const quote = useCallback(
    async (account: string, data: UniswapV2InputBody): Promise<QuoteData> =>
      handleTransaction('quote', () => getUniswapSDK().quote(account, data)),
    [moon]
  );

  const removeLiquidity = useCallback(
    async (
      account: string,
      data: UniswapV2InputBody
    ): Promise<RemoveLiquidityResult> =>
      handleTransaction('removeLiquidity', () =>
        getUniswapSDK().removeLiquidity(account, data)
      ),
    [moon]
  );

  const removeLiquidityEth = useCallback(
    async (
      account: string,
      data: UniswapV2InputBody
    ): Promise<RemoveLiquidityEthResult> =>
      handleTransaction('removeLiquidityEth', () =>
        getUniswapSDK().removeLiquidityEth(account, data)
      ),
    [moon]
  );

  const removeLiquidityEthSupportingFeeOnTransferTokens = useCallback(
    async (
      account: string,
      data: UniswapV2InputBody
    ): Promise<RemoveLiquidityEthSupportingFeeOnTransferTokensData> =>
      handleTransaction('removeLiquidityEthSupportingFeeOnTransferTokens', () =>
        getUniswapSDK().removeLiquidityEthSupportingFeeOnTransferTokens(
          account,
          data
        )
      ),
    [moon]
  );

  const removeLiquidityEthWithPermit = useCallback(
    async (
      account: string,
      data: UniswapV2InputBody
    ): Promise<RemoveLiquidityEthWithPermitData> =>
      handleTransaction('removeLiquidityEthWithPermit', () =>
        getUniswapSDK().removeLiquidityEthWithPermit(account, data)
      ),
    [moon]
  );

  const removeLiquidityEthWithPermitSupportingFeeOnTransferTokens = useCallback(
    async (
      account: string,
      data: UniswapV2InputBody
    ): Promise<RemoveLiquidityEthWithPermitSupportingFeeOnTransferTokensData> =>
      handleTransaction(
        'removeLiquidityEthWithPermitSupportingFeeOnTransferTokens',
        () =>
          getUniswapSDK().removeLiquidityEthWithPermitSupportingFeeOnTransferTokens(
            account,
            data
          )
      ),
    [moon]
  );

  const removeLiquidityWithPermit = useCallback(
    async (
      account: string,
      data: UniswapV2InputBody
    ): Promise<RemoveLiquidityWithPermitData> =>
      handleTransaction('removeLiquidityWithPermit', () =>
        getUniswapSDK().removeLiquidityWithPermit(account, data)
      ),
    [moon]
  );

  const swapEthForExactTokens = useCallback(
    async (
      account: string,
      data: UniswapV2InputBody
    ): Promise<SwapEthForExactTokensData> =>
      handleTransaction('swapEthForExactTokens', () =>
        getUniswapSDK().swapEthForExactTokens(account, data)
      ),
    [moon]
  );

  const swapExactEthForTokens = useCallback(
    async (
      account: string,
      data: UniswapV2InputBody
    ): Promise<SwapExactEthForTokensOutput> =>
      handleTransaction('swapExactEthForTokens', () =>
        getUniswapSDK().swapExactEthForTokens(account, data)
      ),
    [moon]
  );

  const swapExactEthForTokensSupportingFeeOnTransferTokens = useCallback(
    async (
      account: string,
      data: UniswapV2InputBody
    ): Promise<SwapExactEthForTokensSupportingFeeOnTransferTokensData> =>
      handleTransaction(
        'swapExactEthForTokensSupportingFeeOnTransferTokens',
        () =>
          getUniswapSDK().swapExactEthForTokensSupportingFeeOnTransferTokens(
            account,
            data
          )
      ),
    [moon]
  );

  const swapExactTokensForEth = useCallback(
    async (
      account: string,
      data: UniswapV2InputBody
    ): Promise<SwapExactTokensForEthOutput> =>
      handleTransaction('swapExactTokensForEth', () =>
        getUniswapSDK().swapExactTokensForEth(account, data)
      ),
    [moon]
  );

  const swapExactTokensForEthSupportingFeeOnTransferTokens = useCallback(
    async (
      account: string,
      data: UniswapV2InputBody
    ): Promise<SwapExactTokensForEthSupportingFeeOnTransferTokensData> =>
      handleTransaction(
        'swapExactTokensForEthSupportingFeeOnTransferTokens',
        () =>
          getUniswapSDK().swapExactTokensForEthSupportingFeeOnTransferTokens(
            account,
            data
          )
      ),
    [moon]
  );

  const swapExactTokensForTokens = useCallback(
    async (
      account: string,
      data: UniswapV2InputBody
    ): Promise<SwapExactTokensForTokensOutput> =>
      handleTransaction('swapExactTokensForTokens', () =>
        getUniswapSDK().swapExactTokensForTokens(account, data)
      ),
    [moon]
  );

  const swapExactTokensForTokensSupportingFeeOnTransferTokens = useCallback(
    async (
      account: string,
      data: UniswapV2InputBody
    ): Promise<SwapExactTokensForTokensSupportingFeeOnTransferTokensData> =>
      handleTransaction(
        'swapExactTokensForTokensSupportingFeeOnTransferTokens',
        () =>
          getUniswapSDK().swapExactTokensForTokensSupportingFeeOnTransferTokens(
            account,
            data
          )
      ),
    [moon]
  );

  const swapTokensForExactEth = useCallback(
    async (
      account: string,
      data: UniswapV2InputBody
    ): Promise<SwapTokensForExactEthData> =>
      handleTransaction('swapTokensForExactEth', () =>
        getUniswapSDK().swapTokensForExactEth(account, data)
      ),
    [moon]
  );

  const swapTokensForExactTokens = useCallback(
    async (
      account: string,
      data: UniswapV2InputBody
    ): Promise<SwapTokensForExactTokensData> =>
      handleTransaction('swapTokensForExactTokens', () =>
        getUniswapSDK().swapTokensForExactTokens(account, data)
      ),
    [moon]
  );

  // UniswapV3NFT methods
  const approve = useCallback(
    async (
      address: string,
      data: UniswapV3InputBody
    ): Promise<ApproveOutput1> =>
      handleTransaction('approve', () =>
        getUniswapSDK().approve(address, data)
      ),
    [moon]
  );

  const balanceOf = useCallback(
    async (query: BalanceOfParams3): Promise<BalanceOfOutput> =>
      handleTransaction('balanceOf', () => getUniswapSDK().balanceOf(query)),
    [moon]
  );

  const baseUri = useCallback(
    async (query: BaseUriParams): Promise<BaseUriData> =>
      handleTransaction('baseUri', () => getUniswapSDK().baseUri(query)),
    [moon]
  );

  const burn = useCallback(
    async (address: string, data: UniswapV3InputBody): Promise<BurnResult> =>
      handleTransaction('burn', () => getUniswapSDK().burn(address, data)),
    [moon]
  );

  const collect = useCallback(
    async (address: string, data: UniswapV3InputBody): Promise<CollectData> =>
      handleTransaction('collect', () =>
        getUniswapSDK().collect(address, data)
      ),
    [moon]
  );

  const createAndInitializePoolIfNecessary = useCallback(
    async (
      address: string,
      data: UniswapV3InputBody
    ): Promise<CreateAndInitializePoolIfNecessaryData> =>
      handleTransaction('createAndInitializePoolIfNecessary', () =>
        getUniswapSDK().createAndInitializePoolIfNecessary(address, data)
      ),
    [moon]
  );

  const decreaseLiquidity = useCallback(
    async (
      address: string,
      data: UniswapV3InputBody
    ): Promise<DecreaseLiquidityData> =>
      handleTransaction('decreaseLiquidity', () =>
        getUniswapSDK().decreaseLiquidity(address, data)
      ),
    [moon]
  );

  const domainSeparator = useCallback(
    async (query: DomainSeparatorParams): Promise<DomainSeparatorData> =>
      handleTransaction('domainSeparator', () =>
        getUniswapSDK().domainSeparator(query)
      ),
    [moon]
  );

  const exactInput = useCallback(
    async (
      address: string,
      data: UniswapV3InputBody
    ): Promise<ExactInputData> =>
      handleTransaction('exactInput', () =>
        getUniswapSDK().exactInput(address, data)
      ),
    [moon]
  );

  const exactInputSingle = useCallback(
    async (
      address: string,
      data: UniswapV3InputBody
    ): Promise<ExactInputSingleData> =>
      handleTransaction('exactInputSingle', () =>
        getUniswapSDK().exactInputSingle(address, data)
      ),
    [moon]
  );
  const exactOutput = useCallback(
    async (
      address: string,
      data: UniswapV3InputBody
    ): Promise<ExactOutputData> =>
      handleTransaction('exactOutput', () =>
        getUniswapSDK().exactOutput(address, data)
      ),
    [moon]
  );

  const exactOutputSingle = useCallback(
    async (
      address: string,
      data: UniswapV3InputBody
    ): Promise<ExactOutputSingleData> =>
      handleTransaction('exactOutputSingle', () =>
        getUniswapSDK().exactOutputSingle(address, data)
      ),
    [moon]
  );

  const factory = useCallback(
    async (query: FactoryParams): Promise<FactoryData> =>
      handleTransaction('factory', () => getUniswapSDK().factory(query)),
    [moon]
  );

  const factory2 = useCallback(
    async (query: Factory2Params): Promise<Factory2Data> =>
      handleTransaction('factory2', () => getUniswapSDK().factory2(query)),
    [moon]
  );

  const getApproved = useCallback(
    async (query: GetApprovedParams2): Promise<GetApprovedResult> =>
      handleTransaction('getApproved', () =>
        getUniswapSDK().getApproved(query)
      ),
    [moon]
  );

  const increaseLiquidity = useCallback(
    async (
      address: string,
      data: UniswapV3InputBody
    ): Promise<IncreaseLiquidityData> =>
      handleTransaction('increaseLiquidity', () =>
        getUniswapSDK().increaseLiquidity(address, data)
      ),
    [moon]
  );

  const isApprovedForAll = useCallback(
    async (query: IsApprovedForAllParams3): Promise<IsApprovedForAllOutput> =>
      handleTransaction('isApprovedForAll', () =>
        getUniswapSDK().isApprovedForAll(query)
      ),
    [moon]
  );

  const mint = useCallback(
    async (address: string, data: UniswapV3InputBody): Promise<MintResult> =>
      handleTransaction('mint', () => getUniswapSDK().mint(address, data)),
    [moon]
  );

  const multicall = useCallback(
    async (address: string, data: UniswapV3InputBody): Promise<MulticallData> =>
      handleTransaction('multicall', () =>
        getUniswapSDK().multicall(address, data)
      ),
    [moon]
  );

  const multicall2 = useCallback(
    async (
      address: string,
      data: UniswapV3InputBody
    ): Promise<Multicall2Data> =>
      handleTransaction('multicall2', () =>
        getUniswapSDK().multicall2(address, data)
      ),
    [moon]
  );

  const name = useCallback(
    async (query: NameParams): Promise<NameData> =>
      handleTransaction('name', () => getUniswapSDK().name(query)),
    [moon]
  );

  const ownerOf = useCallback(
    async (query: OwnerOfParams): Promise<OwnerOfData> =>
      handleTransaction('ownerOf', () => getUniswapSDK().ownerOf(query)),
    [moon]
  );

  const permit = useCallback(
    async (address: string, data: UniswapV3InputBody): Promise<PermitData> =>
      handleTransaction('permit', () => getUniswapSDK().permit(address, data)),
    [moon]
  );

  const permitTypehash = useCallback(
    async (query: PermitTypehashParams): Promise<PermitTypehashData> =>
      handleTransaction('permitTypehash', () =>
        getUniswapSDK().permitTypehash(query)
      ),
    [moon]
  );

  const positions = useCallback(
    async (query: PositionsParams): Promise<PositionsData> =>
      handleTransaction('positions', () => getUniswapSDK().positions(query)),
    [moon]
  );

  const refundEth = useCallback(
    async (address: string, data: UniswapV3InputBody): Promise<RefundEthData> =>
      handleTransaction('refundEth', () =>
        getUniswapSDK().refundEth(address, data)
      ),
    [moon]
  );

  const refundEth2 = useCallback(
    async (
      address: string,
      data: UniswapV3InputBody
    ): Promise<RefundEth2Data> =>
      handleTransaction('refundEth2', () =>
        getUniswapSDK().refundEth2(address, data)
      ),
    [moon]
  );

  const selfPermit = useCallback(
    async (
      address: string,
      data: UniswapV3InputBody
    ): Promise<SelfPermitData> =>
      handleTransaction('selfPermit', () =>
        getUniswapSDK().selfPermit(address, data)
      ),
    [moon]
  );

  const selfPermitAllowed = useCallback(
    async (
      address: string,
      data: UniswapV3InputBody
    ): Promise<SelfPermitAllowedData> =>
      handleTransaction('selfPermitAllowed', () =>
        getUniswapSDK().selfPermitAllowed(address, data)
      ),
    [moon]
  );

  const selfPermitAllowedIfNecessary = useCallback(
    async (
      address: string,
      data: UniswapV3InputBody
    ): Promise<SelfPermitAllowedIfNecessaryData> =>
      handleTransaction('selfPermitAllowedIfNecessary', () =>
        getUniswapSDK().selfPermitAllowedIfNecessary(address, data)
      ),
    [moon]
  );

  const selfPermitIfNecessary = useCallback(
    async (
      address: string,
      data: UniswapV3InputBody
    ): Promise<SelfPermitIfNecessaryData> =>
      handleTransaction('selfPermitIfNecessary', () =>
        getUniswapSDK().selfPermitIfNecessary(address, data)
      ),
    [moon]
  );

  const setApprovalForAll = useCallback(
    async (
      address: string,
      data: UniswapV3InputBody
    ): Promise<SetApprovalForAllOutput> =>
      handleTransaction('setApprovalForAll', () =>
        getUniswapSDK().setApprovalForAll(address, data)
      ),
    [moon]
  );

  const supportsInterface = useCallback(
    async (query: SupportsInterfaceParams2): Promise<SupportsInterfaceResult> =>
      handleTransaction('supportsInterface', () =>
        getUniswapSDK().supportsInterface(query)
      ),
    [moon]
  );

  const sweepToken = useCallback(
    async (
      address: string,
      data: UniswapV3InputBody
    ): Promise<SweepTokenData> =>
      handleTransaction('sweepToken', () =>
        getUniswapSDK().sweepToken(address, data)
      ),
    [moon]
  );

  const sweepToken2 = useCallback(
    async (
      address: string,
      data: UniswapV3InputBody
    ): Promise<SweepToken2Data> =>
      handleTransaction('sweepToken2', () =>
        getUniswapSDK().sweepToken2(address, data)
      ),
    [moon]
  );

  const sweepTokenWithFee = useCallback(
    async (
      address: string,
      data: UniswapV3InputBody
    ): Promise<SweepTokenWithFeeData> =>
      handleTransaction('sweepTokenWithFee', () =>
        getUniswapSDK().sweepTokenWithFee(address, data)
      ),
    [moon]
  );

  const symbol = useCallback(
    async (query: SymbolParams): Promise<SymbolData> =>
      handleTransaction('symbol', () => getUniswapSDK().symbol(query)),
    [moon]
  );

  const tokenByIndex = useCallback(
    async (query: TokenByIndexParams): Promise<TokenByIndexData> =>
      handleTransaction('tokenByIndex', () =>
        getUniswapSDK().tokenByIndex(query)
      ),
    [moon]
  );

  const tokenOfOwnerByIndex = useCallback(
    async (
      query: TokenOfOwnerByIndexParams
    ): Promise<TokenOfOwnerByIndexData> =>
      handleTransaction('tokenOfOwnerByIndex', () =>
        getUniswapSDK().tokenOfOwnerByIndex(query)
      ),
    [moon]
  );

  const tokenUri = useCallback(
    async (query: TokenUriParams): Promise<TokenUriData> =>
      handleTransaction('tokenUri', () => getUniswapSDK().tokenUri(query)),
    [moon]
  );

  const totalSupply = useCallback(
    async (query: TotalSupplyParams): Promise<TotalSupplyData> =>
      handleTransaction('totalSupply', () =>
        getUniswapSDK().totalSupply(query)
      ),
    [moon]
  );

  const transferFrom = useCallback(
    async (
      address: string,
      data: UniswapV3InputBody
    ): Promise<TransferFromResult1> =>
      handleTransaction('transferFrom', () =>
        getUniswapSDK().transferFrom(address, data)
      ),
    [moon]
  );

  const unwrapWeth9 = useCallback(
    async (
      address: string,
      data: UniswapV3InputBody
    ): Promise<UnwrapWeth9Data> =>
      handleTransaction('unwrapWeth9', () =>
        getUniswapSDK().unwrapWeth9(address, data)
      ),
    [moon]
  );

  const unwrapWeth92 = useCallback(
    async (
      address: string,
      data: UniswapV3InputBody
    ): Promise<UnwrapWeth92Data> =>
      handleTransaction('unwrapWeth92', () =>
        getUniswapSDK().unwrapWeth92(address, data)
      ),
    [moon]
  );

  const unwrapWeth9WithFee = useCallback(
    async (
      address: string,
      data: UniswapV3InputBody
    ): Promise<UnwrapWeth9WithFeeData> =>
      handleTransaction('unwrapWeth9WithFee', () =>
        getUniswapSDK().unwrapWeth9WithFee(address, data)
      ),
    [moon]
  );

  const weth9 = useCallback(
    async (query: Weth9Params): Promise<Weth9Data> =>
      handleTransaction('weth9', () => getUniswapSDK().weth9(query)),
    [moon]
  );

  const weth92 = useCallback(
    async (query: Weth92Params): Promise<Weth92Data> =>
      handleTransaction('weth92', () => getUniswapSDK().weth92(query)),
    [moon]
  );

  return {
    addLiquidity,
    addLiquidityEth,
    approve,
    balanceOf,
    baseUri,
    burn,
    collect,
    createAndInitializePoolIfNecessary,
    decreaseLiquidity,
    domainSeparator,
    exactInput,
    exactInputSingle,
    exactOutput,
    exactOutputSingle,
    factory,
    factory2,
    getAmountIn,
    getAmountOut,
    getAmountsIn,
    getAmountsOut,
    getApproved,
    getFactory,
    getWeth,
    increaseLiquidity,
    isApprovedForAll,
    mint,
    multicall,
    multicall2,
    name,
    ownerOf,
    permit,
    permitTypehash,
    positions,
    quote,
    refundEth,
    refundEth2,
    removeLiquidity,
    removeLiquidityEth,
    removeLiquidityEthSupportingFeeOnTransferTokens,
    removeLiquidityEthWithPermit,
    removeLiquidityEthWithPermitSupportingFeeOnTransferTokens,
    removeLiquidityWithPermit,
    selfPermit,
    selfPermitAllowed,
    selfPermitAllowedIfNecessary,
    selfPermitIfNecessary,
    setApprovalForAll,
    supportsInterface,
    swapEthForExactTokens,
    swapExactEthForTokens,
    swapExactEthForTokensSupportingFeeOnTransferTokens,
    swapExactTokensForEth,
    swapExactTokensForEthSupportingFeeOnTransferTokens,
    swapExactTokensForTokens,
    swapExactTokensForTokensSupportingFeeOnTransferTokens,
    swapTokensForExactEth,
    swapTokensForExactTokens,
    sweepToken,
    sweepToken2,
    sweepTokenWithFee,
    symbol,
    tokenByIndex,
    tokenOfOwnerByIndex,
    tokenUri,
    totalSupply,
    transferFrom,
    unwrapWeth9,
    unwrapWeth92,
    unwrapWeth9WithFee,
    weth9,
    weth92,
  };
};
