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
  ApproveData1,
  BalanceOfOutput,
  BaseUriData,
  BurnResult,
  CollectData,
  CreateAndInitializePoolIfNecessaryData,
  DecreaseLiquidityData,
  DomainSeparatorData,
  ExactInputData,
  ExactInputSingleData,
  ExactOutputData,
  ExactOutputSingleData,
  Factory2Data,
  FactoryData,
  GetAmountInData,
  GetAmountOutOutput,
  GetAmountsInData,
  GetAmountsOutOutput,
  GetApprovedResult,
  GetFactoryOutput,
  GetWethResult1,
  IncreaseLiquidityData,
  IsApprovedForAllOutput,
  MintResult,
  Multicall2Data,
  MulticallData,
  NameData,
  OwnerOfData,
  PermitData,
  PermitTypehashData,
  PositionsData,
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
  TokenByIndexData,
  TokenOfOwnerByIndexData,
  TokenUriData,
  TotalSupplyData,
  TransferFromResult1,
  UniswapV2InputBody,
  UniswapV3InputBody,
  UnwrapWeth92Data,
  UnwrapWeth9Data,
  UnwrapWeth9WithFeeData,
  Weth92Data,
  Weth9Data,
} from './data-contracts';

export namespace Uniswap {
  /**
   * No description
   * @tags UniswapV2Router
   * @name AddLiquidity
   * @request POST:/uniswap/v2/router/{account}/addLiquidity
   * @secure
   */
  export namespace AddLiquidity {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV2InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = AddLiquidityOutput;
  }

  /**
   * No description
   * @tags UniswapV2Router
   * @name AddLiquidityEth
   * @request POST:/uniswap/v2/router/{account}/addLiquidityETH
   * @secure
   */
  export namespace AddLiquidityEth {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV2InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = AddLiquidityEthOutput;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name Approve
   * @request POST:/uniswap/v3/nft/{address}/approve
   * @secure
   */
  export namespace Approve {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ApproveData1;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name BalanceOf
   * @request GET:/uniswap/v3/nft/balanceOf
   * @secure
   */
  export namespace BalanceOf {
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
    export type ResponseBody = BalanceOfOutput;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name BaseUri
   * @request GET:/uniswap/v3/nft/baseURI
   * @secure
   */
  export namespace BaseUri {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = BaseUriData;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name Burn
   * @request POST:/uniswap/v3/nft/{address}/burn
   * @secure
   */
  export namespace Burn {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = BurnResult;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name Collect
   * @request POST:/uniswap/v3/nft/{address}/collect
   * @secure
   */
  export namespace Collect {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CollectData;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name CreateAndInitializePoolIfNecessary
   * @request POST:/uniswap/v3/nft/{address}/createAndInitializePoolIfNecessary
   * @secure
   */
  export namespace CreateAndInitializePoolIfNecessary {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateAndInitializePoolIfNecessaryData;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name DecreaseLiquidity
   * @request POST:/uniswap/v3/nft/{address}/decreaseLiquidity
   * @secure
   */
  export namespace DecreaseLiquidity {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DecreaseLiquidityData;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name DomainSeparator
   * @request GET:/uniswap/v3/nft/DOMAIN_SEPARATOR
   * @secure
   */
  export namespace DomainSeparator {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DomainSeparatorData;
  }

  /**
   * No description
   * @tags UniswapV3Router
   * @name ExactInput
   * @request POST:/uniswap/v3/router/{address}/exactInput
   * @secure
   */
  export namespace ExactInput {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ExactInputData;
  }

  /**
   * No description
   * @tags UniswapV3Router
   * @name ExactInputSingle
   * @request POST:/uniswap/v3/router/{address}/exactInputSingle
   * @secure
   */
  export namespace ExactInputSingle {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ExactInputSingleData;
  }

  /**
   * No description
   * @tags UniswapV3Router
   * @name ExactOutput
   * @request POST:/uniswap/v3/router/{address}/exactOutput
   * @secure
   */
  export namespace ExactOutput {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ExactOutputData;
  }

  /**
   * No description
   * @tags UniswapV3Router
   * @name ExactOutputSingle
   * @request POST:/uniswap/v3/router/{address}/exactOutputSingle
   * @secure
   */
  export namespace ExactOutputSingle {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ExactOutputSingleData;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name Factory
   * @request GET:/uniswap/v3/nft/factory
   * @secure
   */
  export namespace Factory {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = FactoryData;
  }

  /**
   * No description
   * @tags UniswapV3Router
   * @name Factory2
   * @request GET:/uniswap/v3/router/factory
   * @originalName factory
   * @duplicate
   * @secure
   */
  export namespace Factory2 {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = Factory2Data;
  }

  /**
   * No description
   * @tags UniswapV2Router
   * @name GetAmountIn
   * @request POST:/uniswap/v2/router/{account}/getAmountIn
   * @secure
   */
  export namespace GetAmountIn {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV2InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetAmountInData;
  }

  /**
   * No description
   * @tags UniswapV2Router
   * @name GetAmountOut
   * @request POST:/uniswap/v2/router/{account}/getAmountOut
   * @secure
   */
  export namespace GetAmountOut {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV2InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetAmountOutOutput;
  }

  /**
   * No description
   * @tags UniswapV2Router
   * @name GetAmountsIn
   * @request POST:/uniswap/v2/router/{account}/getAmountsIn
   * @secure
   */
  export namespace GetAmountsIn {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV2InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetAmountsInData;
  }

  /**
   * No description
   * @tags UniswapV2Router
   * @name GetAmountsOut
   * @request POST:/uniswap/v2/router/{account}/getAmountsOut
   * @secure
   */
  export namespace GetAmountsOut {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV2InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetAmountsOutOutput;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name GetApproved
   * @request GET:/uniswap/v3/nft/getApproved
   * @secure
   */
  export namespace GetApproved {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      /** @format double */
      tokenId: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetApprovedResult;
  }

  /**
   * No description
   * @tags UniswapV2Router
   * @name GetFactory
   * @request GET:/uniswap/v2/router/{account}/factory
   * @secure
   */
  export namespace GetFactory {
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
    export type ResponseBody = GetFactoryOutput;
  }

  /**
   * No description
   * @tags UniswapV2Router
   * @name GetWeth
   * @request GET:/uniswap/v2/router/{account}/WETH
   * @secure
   */
  export namespace GetWeth {
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
    export type ResponseBody = GetWethResult1;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name IncreaseLiquidity
   * @request POST:/uniswap/v3/nft/{address}/increaseLiquidity
   * @secure
   */
  export namespace IncreaseLiquidity {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = IncreaseLiquidityData;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name IsApprovedForAll
   * @request GET:/uniswap/v3/nft/isApprovedForAll
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
    export type ResponseBody = IsApprovedForAllOutput;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name Mint
   * @request POST:/uniswap/v3/nft/{address}/mint
   * @secure
   */
  export namespace Mint {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = MintResult;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name Multicall
   * @request POST:/uniswap/v3/nft/{address}/multicall
   * @secure
   */
  export namespace Multicall {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = MulticallData;
  }

  /**
   * No description
   * @tags UniswapV3Router
   * @name Multicall2
   * @request POST:/uniswap/v3/router/{address}/multicall
   * @originalName multicall
   * @duplicate
   * @secure
   */
  export namespace Multicall2 {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = Multicall2Data;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name Name
   * @request GET:/uniswap/v3/nft/name
   * @secure
   */
  export namespace Name {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = NameData;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name OwnerOf
   * @request GET:/uniswap/v3/nft/ownerOf
   * @secure
   */
  export namespace OwnerOf {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      /** @format double */
      tokenId: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = OwnerOfData;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name Permit
   * @request POST:/uniswap/v3/nft/{address}/permit
   * @secure
   */
  export namespace Permit {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = PermitData;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name PermitTypehash
   * @request GET:/uniswap/v3/nft/PERMIT_TYPEHASH
   * @secure
   */
  export namespace PermitTypehash {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = PermitTypehashData;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name Positions
   * @request GET:/uniswap/v3/nft/positions
   * @secure
   */
  export namespace Positions {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      /** @format double */
      tokenId: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = PositionsData;
  }

  /**
   * No description
   * @tags UniswapV2Router
   * @name Quote
   * @request POST:/uniswap/v2/router/{account}/quote
   * @secure
   */
  export namespace Quote {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV2InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = QuoteData;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name RefundEth
   * @request POST:/uniswap/v3/nft/{address}/refundETH
   * @secure
   */
  export namespace RefundEth {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = RefundEthData;
  }

  /**
   * No description
   * @tags UniswapV3Router
   * @name RefundEth2
   * @request POST:/uniswap/v3/router/{address}/refundETH
   * @originalName refundEth
   * @duplicate
   * @secure
   */
  export namespace RefundEth2 {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = RefundEth2Data;
  }

  /**
   * No description
   * @tags UniswapV2Router
   * @name RemoveLiquidity
   * @request POST:/uniswap/v2/router/{account}/removeLiquidity
   * @secure
   */
  export namespace RemoveLiquidity {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV2InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = RemoveLiquidityResult;
  }

  /**
   * No description
   * @tags UniswapV2Router
   * @name RemoveLiquidityEth
   * @request POST:/uniswap/v2/router/{account}/removeLiquidityETH
   * @secure
   */
  export namespace RemoveLiquidityEth {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV2InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = RemoveLiquidityEthResult;
  }

  /**
   * No description
   * @tags UniswapV2Router
   * @name RemoveLiquidityEthSupportingFeeOnTransferTokens
   * @request POST:/uniswap/v2/router/{account}/removeLiquidityETHSupportingFeeOnTransferTokens
   * @secure
   */
  export namespace RemoveLiquidityEthSupportingFeeOnTransferTokens {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV2InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody =
      RemoveLiquidityEthSupportingFeeOnTransferTokensData;
  }

  /**
   * No description
   * @tags UniswapV2Router
   * @name RemoveLiquidityEthWithPermit
   * @request POST:/uniswap/v2/router/{account}/removeLiquidityETHWithPermit
   * @secure
   */
  export namespace RemoveLiquidityEthWithPermit {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV2InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = RemoveLiquidityEthWithPermitData;
  }

  /**
   * No description
   * @tags UniswapV2Router
   * @name RemoveLiquidityEthWithPermitSupportingFeeOnTransferTokens
   * @request POST:/uniswap/v2/router/{account}/removeLiquidityETHWithPermitSupportingFeeOnTransferTokens
   * @secure
   */
  export namespace RemoveLiquidityEthWithPermitSupportingFeeOnTransferTokens {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV2InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody =
      RemoveLiquidityEthWithPermitSupportingFeeOnTransferTokensData;
  }

  /**
   * No description
   * @tags UniswapV2Router
   * @name RemoveLiquidityWithPermit
   * @request POST:/uniswap/v2/router/{account}/removeLiquidityWithPermit
   * @secure
   */
  export namespace RemoveLiquidityWithPermit {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV2InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = RemoveLiquidityWithPermitData;
  }

  /**
   * No description
   * @tags UniswapV3Router
   * @name SelfPermit
   * @request POST:/uniswap/v3/router/{address}/selfPermit
   * @secure
   */
  export namespace SelfPermit {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SelfPermitData;
  }

  /**
   * No description
   * @tags UniswapV3Router
   * @name SelfPermitAllowed
   * @request POST:/uniswap/v3/router/{address}/selfPermitAllowed
   * @secure
   */
  export namespace SelfPermitAllowed {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SelfPermitAllowedData;
  }

  /**
   * No description
   * @tags UniswapV3Router
   * @name SelfPermitAllowedIfNecessary
   * @request POST:/uniswap/v3/router/{address}/selfPermitAllowedIfNecessary
   * @secure
   */
  export namespace SelfPermitAllowedIfNecessary {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SelfPermitAllowedIfNecessaryData;
  }

  /**
   * No description
   * @tags UniswapV3Router
   * @name SelfPermitIfNecessary
   * @request POST:/uniswap/v3/router/{address}/selfPermitIfNecessary
   * @secure
   */
  export namespace SelfPermitIfNecessary {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SelfPermitIfNecessaryData;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name SetApprovalForAll
   * @request POST:/uniswap/v3/nft/{address}/setApprovalForAll
   * @secure
   */
  export namespace SetApprovalForAll {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SetApprovalForAllOutput;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name SupportsInterface
   * @request GET:/uniswap/v3/nft/supportsInterface
   * @secure
   */
  export namespace SupportsInterface {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      interfaceId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SupportsInterfaceResult;
  }

  /**
   * No description
   * @tags UniswapV2Router
   * @name SwapEthForExactTokens
   * @request POST:/uniswap/v2/router/{account}/swapETHForExactTokens
   * @secure
   */
  export namespace SwapEthForExactTokens {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV2InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SwapEthForExactTokensData;
  }

  /**
   * No description
   * @tags UniswapV2Router
   * @name SwapExactEthForTokens
   * @request POST:/uniswap/v2/router/{account}/swapExactETHForTokens
   * @secure
   */
  export namespace SwapExactEthForTokens {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV2InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SwapExactEthForTokensOutput;
  }

  /**
   * No description
   * @tags UniswapV2Router
   * @name SwapExactEthForTokensSupportingFeeOnTransferTokens
   * @request POST:/uniswap/v2/router/{account}/swapExactETHForTokensSupportingFeeOnTransferTokens
   * @secure
   */
  export namespace SwapExactEthForTokensSupportingFeeOnTransferTokens {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV2InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody =
      SwapExactEthForTokensSupportingFeeOnTransferTokensData;
  }

  /**
   * No description
   * @tags UniswapV2Router
   * @name SwapExactTokensForEth
   * @request POST:/uniswap/v2/router/{account}/swapExactTokensForETH
   * @secure
   */
  export namespace SwapExactTokensForEth {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV2InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SwapExactTokensForEthOutput;
  }

  /**
   * No description
   * @tags UniswapV2Router
   * @name SwapExactTokensForEthSupportingFeeOnTransferTokens
   * @request POST:/uniswap/v2/router/{account}/swapExactTokensForETHSupportingFeeOnTransferTokens
   * @secure
   */
  export namespace SwapExactTokensForEthSupportingFeeOnTransferTokens {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV2InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody =
      SwapExactTokensForEthSupportingFeeOnTransferTokensData;
  }

  /**
   * No description
   * @tags UniswapV2Router
   * @name SwapExactTokensForTokens
   * @request POST:/uniswap/v2/router/{account}/swapExactTokensForTokens
   * @secure
   */
  export namespace SwapExactTokensForTokens {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV2InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SwapExactTokensForTokensOutput;
  }

  /**
   * No description
   * @tags UniswapV2Router
   * @name SwapExactTokensForTokensSupportingFeeOnTransferTokens
   * @request POST:/uniswap/v2/router/{account}/swapExactTokensForTokensSupportingFeeOnTransferTokens
   * @secure
   */
  export namespace SwapExactTokensForTokensSupportingFeeOnTransferTokens {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV2InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody =
      SwapExactTokensForTokensSupportingFeeOnTransferTokensData;
  }

  /**
   * No description
   * @tags UniswapV2Router
   * @name SwapTokensForExactEth
   * @request POST:/uniswap/v2/router/{account}/swapTokensForExactETH
   * @secure
   */
  export namespace SwapTokensForExactEth {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV2InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SwapTokensForExactEthData;
  }

  /**
   * No description
   * @tags UniswapV2Router
   * @name SwapTokensForExactTokens
   * @request POST:/uniswap/v2/router/{account}/swapTokensForExactTokens
   * @secure
   */
  export namespace SwapTokensForExactTokens {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV2InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SwapTokensForExactTokensData;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name SweepToken
   * @request POST:/uniswap/v3/nft/{address}/sweepToken
   * @secure
   */
  export namespace SweepToken {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SweepTokenData;
  }

  /**
   * No description
   * @tags UniswapV3Router
   * @name SweepToken2
   * @request POST:/uniswap/v3/router/{address}/sweepToken
   * @originalName sweepToken
   * @duplicate
   * @secure
   */
  export namespace SweepToken2 {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SweepToken2Data;
  }

  /**
   * No description
   * @tags UniswapV3Router
   * @name SweepTokenWithFee
   * @request POST:/uniswap/v3/router/{address}/sweepTokenWithFee
   * @secure
   */
  export namespace SweepTokenWithFee {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SweepTokenWithFeeData;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name Symbol
   * @request GET:/uniswap/v3/nft/symbol
   * @secure
   */
  export namespace Symbol {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SymbolData;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name TokenByIndex
   * @request GET:/uniswap/v3/nft/tokenByIndex
   * @secure
   */
  export namespace TokenByIndex {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      /** @format double */
      index: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = TokenByIndexData;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name TokenOfOwnerByIndex
   * @request GET:/uniswap/v3/nft/tokenOfOwnerByIndex
   * @secure
   */
  export namespace TokenOfOwnerByIndex {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      /** @format double */
      index: number;
      owner: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = TokenOfOwnerByIndexData;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name TokenUri
   * @request GET:/uniswap/v3/nft/tokenURI
   * @secure
   */
  export namespace TokenUri {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      /** @format double */
      tokenId: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = TokenUriData;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name TotalSupply
   * @request GET:/uniswap/v3/nft/totalSupply
   * @secure
   */
  export namespace TotalSupply {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = TotalSupplyData;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name TransferFrom
   * @request POST:/uniswap/v3/nft/{address}/transferFrom
   * @secure
   */
  export namespace TransferFrom {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = TransferFromResult1;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name UnwrapWeth9
   * @request POST:/uniswap/v3/nft/{address}/unwrapWETH9
   * @secure
   */
  export namespace UnwrapWeth9 {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = UnwrapWeth9Data;
  }

  /**
   * No description
   * @tags UniswapV3Router
   * @name UnwrapWeth92
   * @request POST:/uniswap/v3/router/{address}/unwrapWETH9
   * @originalName unwrapWeth9
   * @duplicate
   * @secure
   */
  export namespace UnwrapWeth92 {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = UnwrapWeth92Data;
  }

  /**
   * No description
   * @tags UniswapV3Router
   * @name UnwrapWeth9WithFee
   * @request POST:/uniswap/v3/router/{address}/unwrapWETH9WithFee
   * @secure
   */
  export namespace UnwrapWeth9WithFee {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UniswapV3InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = UnwrapWeth9WithFeeData;
  }

  /**
   * No description
   * @tags UniswapV3NFT
   * @name Weth9
   * @request GET:/uniswap/v3/nft/WETH9
   * @secure
   */
  export namespace Weth9 {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = Weth9Data;
  }

  /**
   * No description
   * @tags UniswapV3Router
   * @name Weth92
   * @request GET:/uniswap/v3/router/WETH9
   * @originalName weth9
   * @duplicate
   * @secure
   */
  export namespace Weth92 {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = Weth92Data;
  }
}
