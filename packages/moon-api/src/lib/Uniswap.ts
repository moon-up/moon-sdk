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
  AddLiquidityEthOutput,
  AddLiquidityOutput,
  ApproveOutput,
  BalanceOfData,
  BalanceOfParams,
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
  GetWethOutput,
  GetWethParams4,
  IncreaseLiquidityData,
  IsApprovedForAllParams2,
  IsApprovedForAllResult,
  MintData,
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
  SetApprovalForAllResult,
  SupportsInterfaceData,
  SupportsInterfaceParams,
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
  TransferFromOutput,
  UniswapV2InputBody,
  UniswapV3InputBody,
  UnwrapWeth92Data,
  UnwrapWeth9Data,
  UnwrapWeth9WithFeeData,
  Weth92Data,
  Weth92Params,
  Weth9Data,
  Weth9Params,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Uniswap<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags UniswapV2Router
   * @name AddLiquidity
   * @request POST:/uniswap/v2/router/{account}/addLiquidity
   * @secure
   */
  addLiquidity = (
    account: string,
    data: UniswapV2InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<AddLiquidityOutput, any>({
      path: `/uniswap/v2/router/${account}/addLiquidity`,
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
   * @tags UniswapV2Router
   * @name AddLiquidityEth
   * @request POST:/uniswap/v2/router/{account}/addLiquidityETH
   * @secure
   */
  addLiquidityEth = (
    account: string,
    data: UniswapV2InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<AddLiquidityEthOutput, any>({
      path: `/uniswap/v2/router/${account}/addLiquidityETH`,
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
   * @tags UniswapV3NFT
   * @name Approve
   * @request POST:/uniswap/v3/nft/{address}/approve
   * @secure
   */
  approve = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ApproveOutput, any>({
      path: `/uniswap/v3/nft/${address}/approve`,
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
   * @tags UniswapV3NFT
   * @name BalanceOf
   * @request GET:/uniswap/v3/nft/balanceOf
   * @secure
   */
  balanceOf = (query: BalanceOfParams, params: RequestParams = {}) =>
    this.http.request<BalanceOfData, any>({
      path: `/uniswap/v3/nft/balanceOf`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UniswapV3NFT
   * @name BaseUri
   * @request GET:/uniswap/v3/nft/baseURI
   * @secure
   */
  baseUri = (query: BaseUriParams, params: RequestParams = {}) =>
    this.http.request<BaseUriData, any>({
      path: `/uniswap/v3/nft/baseURI`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UniswapV3NFT
   * @name Burn
   * @request POST:/uniswap/v3/nft/{address}/burn
   * @secure
   */
  burn = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<BurnResult, any>({
      path: `/uniswap/v3/nft/${address}/burn`,
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
   * @tags UniswapV3NFT
   * @name Collect
   * @request POST:/uniswap/v3/nft/{address}/collect
   * @secure
   */
  collect = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<CollectData, any>({
      path: `/uniswap/v3/nft/${address}/collect`,
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
   * @tags UniswapV3NFT
   * @name CreateAndInitializePoolIfNecessary
   * @request POST:/uniswap/v3/nft/{address}/createAndInitializePoolIfNecessary
   * @secure
   */
  createAndInitializePoolIfNecessary = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateAndInitializePoolIfNecessaryData, any>({
      path: `/uniswap/v3/nft/${address}/createAndInitializePoolIfNecessary`,
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
   * @tags UniswapV3NFT
   * @name DecreaseLiquidity
   * @request POST:/uniswap/v3/nft/{address}/decreaseLiquidity
   * @secure
   */
  decreaseLiquidity = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<DecreaseLiquidityData, any>({
      path: `/uniswap/v3/nft/${address}/decreaseLiquidity`,
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
   * @tags UniswapV3NFT
   * @name DomainSeparator
   * @request GET:/uniswap/v3/nft/DOMAIN_SEPARATOR
   * @secure
   */
  domainSeparator = (
    query: DomainSeparatorParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DomainSeparatorData, any>({
      path: `/uniswap/v3/nft/DOMAIN_SEPARATOR`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UniswapV3Router
   * @name ExactInput
   * @request POST:/uniswap/v3/router/{address}/exactInput
   * @secure
   */
  exactInput = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ExactInputData, any>({
      path: `/uniswap/v3/router/${address}/exactInput`,
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
   * @tags UniswapV3Router
   * @name ExactInputSingle
   * @request POST:/uniswap/v3/router/{address}/exactInputSingle
   * @secure
   */
  exactInputSingle = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ExactInputSingleData, any>({
      path: `/uniswap/v3/router/${address}/exactInputSingle`,
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
   * @tags UniswapV3Router
   * @name ExactOutput
   * @request POST:/uniswap/v3/router/{address}/exactOutput
   * @secure
   */
  exactOutput = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ExactOutputData, any>({
      path: `/uniswap/v3/router/${address}/exactOutput`,
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
   * @tags UniswapV3Router
   * @name ExactOutputSingle
   * @request POST:/uniswap/v3/router/{address}/exactOutputSingle
   * @secure
   */
  exactOutputSingle = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ExactOutputSingleData, any>({
      path: `/uniswap/v3/router/${address}/exactOutputSingle`,
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
   * @tags UniswapV3NFT
   * @name Factory
   * @request GET:/uniswap/v3/nft/factory
   * @secure
   */
  factory = (query: FactoryParams, params: RequestParams = {}) =>
    this.http.request<FactoryData, any>({
      path: `/uniswap/v3/nft/factory`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UniswapV3Router
   * @name Factory2
   * @request GET:/uniswap/v3/router/factory
   * @originalName factory
   * @duplicate
   * @secure
   */
  factory2 = (query: Factory2Params, params: RequestParams = {}) =>
    this.http.request<Factory2Data, any>({
      path: `/uniswap/v3/router/factory`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UniswapV2Router
   * @name GetAmountIn
   * @request POST:/uniswap/v2/router/{account}/getAmountIn
   * @secure
   */
  getAmountIn = (
    account: string,
    data: UniswapV2InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAmountInData, any>({
      path: `/uniswap/v2/router/${account}/getAmountIn`,
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
   * @tags UniswapV2Router
   * @name GetAmountOut
   * @request POST:/uniswap/v2/router/{account}/getAmountOut
   * @secure
   */
  getAmountOut = (
    account: string,
    data: UniswapV2InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAmountOutOutput, any>({
      path: `/uniswap/v2/router/${account}/getAmountOut`,
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
   * @tags UniswapV2Router
   * @name GetAmountsIn
   * @request POST:/uniswap/v2/router/{account}/getAmountsIn
   * @secure
   */
  getAmountsIn = (
    account: string,
    data: UniswapV2InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAmountsInData, any>({
      path: `/uniswap/v2/router/${account}/getAmountsIn`,
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
   * @tags UniswapV2Router
   * @name GetAmountsOut
   * @request POST:/uniswap/v2/router/{account}/getAmountsOut
   * @secure
   */
  getAmountsOut = (
    account: string,
    data: UniswapV2InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAmountsOutOutput, any>({
      path: `/uniswap/v2/router/${account}/getAmountsOut`,
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
   * @tags UniswapV3NFT
   * @name GetApproved
   * @request GET:/uniswap/v3/nft/getApproved
   * @secure
   */
  getApproved = (query: GetApprovedParams2, params: RequestParams = {}) =>
    this.http.request<GetApprovedResult, any>({
      path: `/uniswap/v3/nft/getApproved`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UniswapV2Router
   * @name GetWeth
   * @request GET:/uniswap/v2/router/{account}/WETH
   * @secure
   */
  getWeth = (
    { account, ...query }: GetWethParams4,
    params: RequestParams = {}
  ) =>
    this.http.request<GetWethOutput, any>({
      path: `/uniswap/v2/router/${account}/WETH`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UniswapV3NFT
   * @name IncreaseLiquidity
   * @request POST:/uniswap/v3/nft/{address}/increaseLiquidity
   * @secure
   */
  increaseLiquidity = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<IncreaseLiquidityData, any>({
      path: `/uniswap/v3/nft/${address}/increaseLiquidity`,
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
   * @tags UniswapV3NFT
   * @name IsApprovedForAll
   * @request GET:/uniswap/v3/nft/isApprovedForAll
   * @secure
   */
  isApprovedForAll = (
    query: IsApprovedForAllParams2,
    params: RequestParams = {}
  ) =>
    this.http.request<IsApprovedForAllResult, any>({
      path: `/uniswap/v3/nft/isApprovedForAll`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UniswapV3NFT
   * @name Mint
   * @request POST:/uniswap/v3/nft/{address}/mint
   * @secure
   */
  mint = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<MintData, any>({
      path: `/uniswap/v3/nft/${address}/mint`,
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
   * @tags UniswapV3NFT
   * @name Multicall
   * @request POST:/uniswap/v3/nft/{address}/multicall
   * @secure
   */
  multicall = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<MulticallData, any>({
      path: `/uniswap/v3/nft/${address}/multicall`,
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
   * @tags UniswapV3Router
   * @name Multicall2
   * @request POST:/uniswap/v3/router/{address}/multicall
   * @originalName multicall
   * @duplicate
   * @secure
   */
  multicall2 = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Multicall2Data, any>({
      path: `/uniswap/v3/router/${address}/multicall`,
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
   * @tags UniswapV3NFT
   * @name Name
   * @request GET:/uniswap/v3/nft/name
   * @secure
   */
  name = (query: NameParams, params: RequestParams = {}) =>
    this.http.request<NameData, any>({
      path: `/uniswap/v3/nft/name`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UniswapV3NFT
   * @name OwnerOf
   * @request GET:/uniswap/v3/nft/ownerOf
   * @secure
   */
  ownerOf = (query: OwnerOfParams, params: RequestParams = {}) =>
    this.http.request<OwnerOfData, any>({
      path: `/uniswap/v3/nft/ownerOf`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UniswapV3NFT
   * @name Permit
   * @request POST:/uniswap/v3/nft/{address}/permit
   * @secure
   */
  permit = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<PermitData, any>({
      path: `/uniswap/v3/nft/${address}/permit`,
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
   * @tags UniswapV3NFT
   * @name PermitTypehash
   * @request GET:/uniswap/v3/nft/PERMIT_TYPEHASH
   * @secure
   */
  permitTypehash = (query: PermitTypehashParams, params: RequestParams = {}) =>
    this.http.request<PermitTypehashData, any>({
      path: `/uniswap/v3/nft/PERMIT_TYPEHASH`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UniswapV3NFT
   * @name Positions
   * @request GET:/uniswap/v3/nft/positions
   * @secure
   */
  positions = (query: PositionsParams, params: RequestParams = {}) =>
    this.http.request<PositionsData, any>({
      path: `/uniswap/v3/nft/positions`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UniswapV2Router
   * @name Quote
   * @request POST:/uniswap/v2/router/{account}/quote
   * @secure
   */
  quote = (
    account: string,
    data: UniswapV2InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<QuoteData, any>({
      path: `/uniswap/v2/router/${account}/quote`,
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
   * @tags UniswapV3NFT
   * @name RefundEth
   * @request POST:/uniswap/v3/nft/{address}/refundETH
   * @secure
   */
  refundEth = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<RefundEthData, any>({
      path: `/uniswap/v3/nft/${address}/refundETH`,
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
   * @tags UniswapV3Router
   * @name RefundEth2
   * @request POST:/uniswap/v3/router/{address}/refundETH
   * @originalName refundEth
   * @duplicate
   * @secure
   */
  refundEth2 = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<RefundEth2Data, any>({
      path: `/uniswap/v3/router/${address}/refundETH`,
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
   * @tags UniswapV2Router
   * @name RemoveLiquidity
   * @request POST:/uniswap/v2/router/{account}/removeLiquidity
   * @secure
   */
  removeLiquidity = (
    account: string,
    data: UniswapV2InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<RemoveLiquidityResult, any>({
      path: `/uniswap/v2/router/${account}/removeLiquidity`,
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
   * @tags UniswapV2Router
   * @name RemoveLiquidityEth
   * @request POST:/uniswap/v2/router/{account}/removeLiquidityETH
   * @secure
   */
  removeLiquidityEth = (
    account: string,
    data: UniswapV2InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<RemoveLiquidityEthResult, any>({
      path: `/uniswap/v2/router/${account}/removeLiquidityETH`,
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
   * @tags UniswapV2Router
   * @name RemoveLiquidityEthSupportingFeeOnTransferTokens
   * @request POST:/uniswap/v2/router/{account}/removeLiquidityETHSupportingFeeOnTransferTokens
   * @secure
   */
  removeLiquidityEthSupportingFeeOnTransferTokens = (
    account: string,
    data: UniswapV2InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<RemoveLiquidityEthSupportingFeeOnTransferTokensData, any>(
      {
        path: `/uniswap/v2/router/${account}/removeLiquidityETHSupportingFeeOnTransferTokens`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }
    );
  /**
   * No description
   *
   * @tags UniswapV2Router
   * @name RemoveLiquidityEthWithPermit
   * @request POST:/uniswap/v2/router/{account}/removeLiquidityETHWithPermit
   * @secure
   */
  removeLiquidityEthWithPermit = (
    account: string,
    data: UniswapV2InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<RemoveLiquidityEthWithPermitData, any>({
      path: `/uniswap/v2/router/${account}/removeLiquidityETHWithPermit`,
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
   * @tags UniswapV2Router
   * @name RemoveLiquidityEthWithPermitSupportingFeeOnTransferTokens
   * @request POST:/uniswap/v2/router/{account}/removeLiquidityETHWithPermitSupportingFeeOnTransferTokens
   * @secure
   */
  removeLiquidityEthWithPermitSupportingFeeOnTransferTokens = (
    account: string,
    data: UniswapV2InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<
      RemoveLiquidityEthWithPermitSupportingFeeOnTransferTokensData,
      any
    >({
      path: `/uniswap/v2/router/${account}/removeLiquidityETHWithPermitSupportingFeeOnTransferTokens`,
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
   * @tags UniswapV2Router
   * @name RemoveLiquidityWithPermit
   * @request POST:/uniswap/v2/router/{account}/removeLiquidityWithPermit
   * @secure
   */
  removeLiquidityWithPermit = (
    account: string,
    data: UniswapV2InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<RemoveLiquidityWithPermitData, any>({
      path: `/uniswap/v2/router/${account}/removeLiquidityWithPermit`,
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
   * @tags UniswapV3Router
   * @name SelfPermit
   * @request POST:/uniswap/v3/router/{address}/selfPermit
   * @secure
   */
  selfPermit = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SelfPermitData, any>({
      path: `/uniswap/v3/router/${address}/selfPermit`,
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
   * @tags UniswapV3Router
   * @name SelfPermitAllowed
   * @request POST:/uniswap/v3/router/{address}/selfPermitAllowed
   * @secure
   */
  selfPermitAllowed = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SelfPermitAllowedData, any>({
      path: `/uniswap/v3/router/${address}/selfPermitAllowed`,
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
   * @tags UniswapV3Router
   * @name SelfPermitAllowedIfNecessary
   * @request POST:/uniswap/v3/router/{address}/selfPermitAllowedIfNecessary
   * @secure
   */
  selfPermitAllowedIfNecessary = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SelfPermitAllowedIfNecessaryData, any>({
      path: `/uniswap/v3/router/${address}/selfPermitAllowedIfNecessary`,
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
   * @tags UniswapV3Router
   * @name SelfPermitIfNecessary
   * @request POST:/uniswap/v3/router/{address}/selfPermitIfNecessary
   * @secure
   */
  selfPermitIfNecessary = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SelfPermitIfNecessaryData, any>({
      path: `/uniswap/v3/router/${address}/selfPermitIfNecessary`,
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
   * @tags UniswapV3NFT
   * @name SetApprovalForAll
   * @request POST:/uniswap/v3/nft/{address}/setApprovalForAll
   * @secure
   */
  setApprovalForAll = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SetApprovalForAllResult, any>({
      path: `/uniswap/v3/nft/${address}/setApprovalForAll`,
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
   * @tags UniswapV3NFT
   * @name SupportsInterface
   * @request GET:/uniswap/v3/nft/supportsInterface
   * @secure
   */
  supportsInterface = (
    query: SupportsInterfaceParams,
    params: RequestParams = {}
  ) =>
    this.http.request<SupportsInterfaceData, any>({
      path: `/uniswap/v3/nft/supportsInterface`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UniswapV2Router
   * @name SwapEthForExactTokens
   * @request POST:/uniswap/v2/router/{account}/swapETHForExactTokens
   * @secure
   */
  swapEthForExactTokens = (
    account: string,
    data: UniswapV2InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SwapEthForExactTokensData, any>({
      path: `/uniswap/v2/router/${account}/swapETHForExactTokens`,
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
   * @tags UniswapV2Router
   * @name SwapExactEthForTokens
   * @request POST:/uniswap/v2/router/{account}/swapExactETHForTokens
   * @secure
   */
  swapExactEthForTokens = (
    account: string,
    data: UniswapV2InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SwapExactEthForTokensOutput, any>({
      path: `/uniswap/v2/router/${account}/swapExactETHForTokens`,
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
   * @tags UniswapV2Router
   * @name SwapExactEthForTokensSupportingFeeOnTransferTokens
   * @request POST:/uniswap/v2/router/{account}/swapExactETHForTokensSupportingFeeOnTransferTokens
   * @secure
   */
  swapExactEthForTokensSupportingFeeOnTransferTokens = (
    account: string,
    data: UniswapV2InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<
      SwapExactEthForTokensSupportingFeeOnTransferTokensData,
      any
    >({
      path: `/uniswap/v2/router/${account}/swapExactETHForTokensSupportingFeeOnTransferTokens`,
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
   * @tags UniswapV2Router
   * @name SwapExactTokensForEth
   * @request POST:/uniswap/v2/router/{account}/swapExactTokensForETH
   * @secure
   */
  swapExactTokensForEth = (
    account: string,
    data: UniswapV2InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SwapExactTokensForEthOutput, any>({
      path: `/uniswap/v2/router/${account}/swapExactTokensForETH`,
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
   * @tags UniswapV2Router
   * @name SwapExactTokensForEthSupportingFeeOnTransferTokens
   * @request POST:/uniswap/v2/router/{account}/swapExactTokensForETHSupportingFeeOnTransferTokens
   * @secure
   */
  swapExactTokensForEthSupportingFeeOnTransferTokens = (
    account: string,
    data: UniswapV2InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<
      SwapExactTokensForEthSupportingFeeOnTransferTokensData,
      any
    >({
      path: `/uniswap/v2/router/${account}/swapExactTokensForETHSupportingFeeOnTransferTokens`,
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
   * @tags UniswapV2Router
   * @name SwapExactTokensForTokens
   * @request POST:/uniswap/v2/router/{account}/swapExactTokensForTokens
   * @secure
   */
  swapExactTokensForTokens = (
    account: string,
    data: UniswapV2InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SwapExactTokensForTokensOutput, any>({
      path: `/uniswap/v2/router/${account}/swapExactTokensForTokens`,
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
   * @tags UniswapV2Router
   * @name SwapExactTokensForTokensSupportingFeeOnTransferTokens
   * @request POST:/uniswap/v2/router/{account}/swapExactTokensForTokensSupportingFeeOnTransferTokens
   * @secure
   */
  swapExactTokensForTokensSupportingFeeOnTransferTokens = (
    account: string,
    data: UniswapV2InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<
      SwapExactTokensForTokensSupportingFeeOnTransferTokensData,
      any
    >({
      path: `/uniswap/v2/router/${account}/swapExactTokensForTokensSupportingFeeOnTransferTokens`,
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
   * @tags UniswapV2Router
   * @name SwapTokensForExactEth
   * @request POST:/uniswap/v2/router/{account}/swapTokensForExactETH
   * @secure
   */
  swapTokensForExactEth = (
    account: string,
    data: UniswapV2InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SwapTokensForExactEthData, any>({
      path: `/uniswap/v2/router/${account}/swapTokensForExactETH`,
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
   * @tags UniswapV2Router
   * @name SwapTokensForExactTokens
   * @request POST:/uniswap/v2/router/{account}/swapTokensForExactTokens
   * @secure
   */
  swapTokensForExactTokens = (
    account: string,
    data: UniswapV2InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SwapTokensForExactTokensData, any>({
      path: `/uniswap/v2/router/${account}/swapTokensForExactTokens`,
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
   * @tags UniswapV3NFT
   * @name SweepToken
   * @request POST:/uniswap/v3/nft/{address}/sweepToken
   * @secure
   */
  sweepToken = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SweepTokenData, any>({
      path: `/uniswap/v3/nft/${address}/sweepToken`,
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
   * @tags UniswapV3Router
   * @name SweepToken2
   * @request POST:/uniswap/v3/router/{address}/sweepToken
   * @originalName sweepToken
   * @duplicate
   * @secure
   */
  sweepToken2 = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SweepToken2Data, any>({
      path: `/uniswap/v3/router/${address}/sweepToken`,
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
   * @tags UniswapV3Router
   * @name SweepTokenWithFee
   * @request POST:/uniswap/v3/router/{address}/sweepTokenWithFee
   * @secure
   */
  sweepTokenWithFee = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SweepTokenWithFeeData, any>({
      path: `/uniswap/v3/router/${address}/sweepTokenWithFee`,
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
   * @tags UniswapV3NFT
   * @name Symbol
   * @request GET:/uniswap/v3/nft/symbol
   * @secure
   */
  symbol = (query: SymbolParams, params: RequestParams = {}) =>
    this.http.request<SymbolData, any>({
      path: `/uniswap/v3/nft/symbol`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UniswapV3NFT
   * @name TokenByIndex
   * @request GET:/uniswap/v3/nft/tokenByIndex
   * @secure
   */
  tokenByIndex = (query: TokenByIndexParams, params: RequestParams = {}) =>
    this.http.request<TokenByIndexData, any>({
      path: `/uniswap/v3/nft/tokenByIndex`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UniswapV3NFT
   * @name TokenOfOwnerByIndex
   * @request GET:/uniswap/v3/nft/tokenOfOwnerByIndex
   * @secure
   */
  tokenOfOwnerByIndex = (
    query: TokenOfOwnerByIndexParams,
    params: RequestParams = {}
  ) =>
    this.http.request<TokenOfOwnerByIndexData, any>({
      path: `/uniswap/v3/nft/tokenOfOwnerByIndex`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UniswapV3NFT
   * @name TokenUri
   * @request GET:/uniswap/v3/nft/tokenURI
   * @secure
   */
  tokenUri = (query: TokenUriParams, params: RequestParams = {}) =>
    this.http.request<TokenUriData, any>({
      path: `/uniswap/v3/nft/tokenURI`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UniswapV3NFT
   * @name TotalSupply
   * @request GET:/uniswap/v3/nft/totalSupply
   * @secure
   */
  totalSupply = (query: TotalSupplyParams, params: RequestParams = {}) =>
    this.http.request<TotalSupplyData, any>({
      path: `/uniswap/v3/nft/totalSupply`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UniswapV3NFT
   * @name TransferFrom
   * @request POST:/uniswap/v3/nft/{address}/transferFrom
   * @secure
   */
  transferFrom = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<TransferFromOutput, any>({
      path: `/uniswap/v3/nft/${address}/transferFrom`,
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
   * @tags UniswapV3NFT
   * @name UnwrapWeth9
   * @request POST:/uniswap/v3/nft/{address}/unwrapWETH9
   * @secure
   */
  unwrapWeth9 = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<UnwrapWeth9Data, any>({
      path: `/uniswap/v3/nft/${address}/unwrapWETH9`,
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
   * @tags UniswapV3Router
   * @name UnwrapWeth92
   * @request POST:/uniswap/v3/router/{address}/unwrapWETH9
   * @originalName unwrapWeth9
   * @duplicate
   * @secure
   */
  unwrapWeth92 = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<UnwrapWeth92Data, any>({
      path: `/uniswap/v3/router/${address}/unwrapWETH9`,
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
   * @tags UniswapV3Router
   * @name UnwrapWeth9WithFee
   * @request POST:/uniswap/v3/router/{address}/unwrapWETH9WithFee
   * @secure
   */
  unwrapWeth9WithFee = (
    address: string,
    data: UniswapV3InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<UnwrapWeth9WithFeeData, any>({
      path: `/uniswap/v3/router/${address}/unwrapWETH9WithFee`,
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
   * @tags UniswapV3NFT
   * @name Weth9
   * @request GET:/uniswap/v3/nft/WETH9
   * @secure
   */
  weth9 = (query: Weth9Params, params: RequestParams = {}) =>
    this.http.request<Weth9Data, any>({
      path: `/uniswap/v3/nft/WETH9`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags UniswapV3Router
   * @name Weth92
   * @request GET:/uniswap/v3/router/WETH9
   * @originalName weth9
   * @duplicate
   * @secure
   */
  weth92 = (query: Weth92Params, params: RequestParams = {}) =>
    this.http.request<Weth92Data, any>({
      path: `/uniswap/v3/router/WETH9`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
}
