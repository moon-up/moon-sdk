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
  ApproveResult,
  DepositData,
  GetAllowanceParams2,
  GetAllowanceResult,
  GetAssetData,
  GetAssetParams,
  GetBalanceOfParams2,
  GetBalanceOfResult,
  GetConvertToAssetsData,
  GetConvertToAssetsParams,
  GetConvertToSharesData,
  GetConvertToSharesParams,
  GetMaxDepositData,
  GetMaxDepositParams,
  GetMaxMintData,
  GetMaxMintParams,
  GetMaxRedeemData,
  GetMaxRedeemParams,
  GetMaxWithdrawData,
  GetMaxWithdrawParams,
  GetPreviewDepositData,
  GetPreviewDepositParams,
  GetPreviewMintData,
  GetPreviewMintParams,
  GetPreviewRedeemData,
  GetPreviewRedeemParams,
  GetPreviewWithdrawData,
  GetPreviewWithdrawParams,
  GetTotalAssetsData,
  GetTotalAssetsParams,
  GetTotalSupplyParams2,
  GetTotalSupplyResult,
  InputBody,
  MintData,
  RedeemData,
  TransferFromResult,
  TransferResult,
  WithdrawResult,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Erc4626<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ERC4626
   * @name Approve
   * @request POST:/erc4626/{address}/approve
   * @secure
   */
  approve = (address: string, data: InputBody, params: RequestParams = {}) =>
    this.http.request<ApproveResult, any>({
      path: `/erc4626/${address}/approve`,
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
   * @tags ERC4626
   * @name Deposit
   * @request POST:/erc4626/{address}/deposit
   * @secure
   */
  deposit = (address: string, data: InputBody, params: RequestParams = {}) =>
    this.http.request<DepositData, any>({
      path: `/erc4626/${address}/deposit`,
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
   * @tags ERC4626
   * @name GetAllowance
   * @request GET:/erc4626/{account}/allowance
   * @secure
   */
  getAllowance = (
    { account, ...query }: GetAllowanceParams2,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAllowanceResult, any>({
      path: `/erc4626/${account}/allowance`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name GetAsset
   * @request GET:/erc4626/{account}/asset
   * @secure
   */
  getAsset = (
    { account, ...query }: GetAssetParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAssetData, any>({
      path: `/erc4626/${account}/asset`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name GetBalanceOf
   * @request GET:/erc4626/{account}/balanceOf
   * @secure
   */
  getBalanceOf = (
    { account, ...query }: GetBalanceOfParams2,
    params: RequestParams = {}
  ) =>
    this.http.request<GetBalanceOfResult, any>({
      path: `/erc4626/${account}/balanceOf`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name GetConvertToAssets
   * @request GET:/erc4626/{account}/convertToAssets
   * @secure
   */
  getConvertToAssets = (
    { account, ...query }: GetConvertToAssetsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetConvertToAssetsData, any>({
      path: `/erc4626/${account}/convertToAssets`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name GetConvertToShares
   * @request GET:/erc4626/{account}/convertToShares
   * @secure
   */
  getConvertToShares = (
    { account, ...query }: GetConvertToSharesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetConvertToSharesData, any>({
      path: `/erc4626/${account}/convertToShares`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name GetMaxDeposit
   * @request GET:/erc4626/{account}/maxDeposit
   * @secure
   */
  getMaxDeposit = (
    { account, ...query }: GetMaxDepositParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetMaxDepositData, any>({
      path: `/erc4626/${account}/maxDeposit`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name GetMaxMint
   * @request GET:/erc4626/{account}/maxMint
   * @secure
   */
  getMaxMint = (
    { account, ...query }: GetMaxMintParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetMaxMintData, any>({
      path: `/erc4626/${account}/maxMint`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name GetMaxRedeem
   * @request GET:/erc4626/{account}/maxRedeem
   * @secure
   */
  getMaxRedeem = (
    { account, ...query }: GetMaxRedeemParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetMaxRedeemData, any>({
      path: `/erc4626/${account}/maxRedeem`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name GetMaxWithdraw
   * @request GET:/erc4626/{account}/maxWithdraw
   * @secure
   */
  getMaxWithdraw = (
    { account, ...query }: GetMaxWithdrawParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetMaxWithdrawData, any>({
      path: `/erc4626/${account}/maxWithdraw`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name GetPreviewDeposit
   * @request GET:/erc4626/{account}/previewDeposit
   * @secure
   */
  getPreviewDeposit = (
    { account, ...query }: GetPreviewDepositParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetPreviewDepositData, any>({
      path: `/erc4626/${account}/previewDeposit`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name GetPreviewMint
   * @request GET:/erc4626/{account}/previewMint
   * @secure
   */
  getPreviewMint = (
    { account, ...query }: GetPreviewMintParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetPreviewMintData, any>({
      path: `/erc4626/${account}/previewMint`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name GetPreviewRedeem
   * @request GET:/erc4626/{account}/previewRedeem
   * @secure
   */
  getPreviewRedeem = (
    { account, ...query }: GetPreviewRedeemParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetPreviewRedeemData, any>({
      path: `/erc4626/${account}/previewRedeem`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name GetPreviewWithdraw
   * @request GET:/erc4626/{account}/previewWithdraw
   * @secure
   */
  getPreviewWithdraw = (
    { account, ...query }: GetPreviewWithdrawParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetPreviewWithdrawData, any>({
      path: `/erc4626/${account}/previewWithdraw`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name GetTotalAssets
   * @request GET:/erc4626/{account}/totalAssets
   * @secure
   */
  getTotalAssets = (
    { account, ...query }: GetTotalAssetsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetTotalAssetsData, any>({
      path: `/erc4626/${account}/totalAssets`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name GetTotalSupply
   * @request GET:/erc4626/{account}/totalSupply
   * @secure
   */
  getTotalSupply = (
    { account, ...query }: GetTotalSupplyParams2,
    params: RequestParams = {}
  ) =>
    this.http.request<GetTotalSupplyResult, any>({
      path: `/erc4626/${account}/totalSupply`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name Mint
   * @request POST:/erc4626/{address}/mint
   * @secure
   */
  mint = (address: string, data: InputBody, params: RequestParams = {}) =>
    this.http.request<MintData, any>({
      path: `/erc4626/${address}/mint`,
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
   * @tags ERC4626
   * @name Redeem
   * @request POST:/erc4626/{address}/redeem
   * @secure
   */
  redeem = (address: string, data: InputBody, params: RequestParams = {}) =>
    this.http.request<RedeemData, any>({
      path: `/erc4626/${address}/redeem`,
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
   * @tags ERC4626
   * @name Transfer
   * @request POST:/erc4626/{address}/transfer
   * @secure
   */
  transfer = (address: string, data: InputBody, params: RequestParams = {}) =>
    this.http.request<TransferResult, any>({
      path: `/erc4626/${address}/transfer`,
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
   * @tags ERC4626
   * @name TransferFrom
   * @request POST:/erc4626/{address}/transferFrom
   * @secure
   */
  transferFrom = (
    address: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<TransferFromResult, any>({
      path: `/erc4626/${address}/transferFrom`,
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
   * @tags ERC4626
   * @name Withdraw
   * @request POST:/erc4626/{address}/withdraw
   * @secure
   */
  withdraw = (address: string, data: InputBody, params: RequestParams = {}) =>
    this.http.request<WithdrawResult, any>({
      path: `/erc4626/${address}/withdraw`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
