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
  Erc4626ApproveErc4626Data,
  Erc4626DepositToErc4626Data,
  Erc4626GetErc4626AllowanceData,
  Erc4626GetErc4626AllowanceParams,
  Erc4626GetErc4626AssetData,
  Erc4626GetErc4626AssetParams,
  Erc4626GetErc4626BalanceOfData,
  Erc4626GetErc4626BalanceOfParams,
  Erc4626GetErc4626ConvertToAssetsData,
  Erc4626GetErc4626ConvertToAssetsParams,
  Erc4626GetErc4626ConvertToSharesData,
  Erc4626GetErc4626ConvertToSharesParams,
  Erc4626GetErc4626MaxDepositData,
  Erc4626GetErc4626MaxDepositParams,
  Erc4626GetErc4626MaxMintData,
  Erc4626GetErc4626MaxMintParams,
  Erc4626GetErc4626MaxRedeemData,
  Erc4626GetErc4626MaxRedeemParams,
  Erc4626GetErc4626MaxWithdrawData,
  Erc4626GetErc4626MaxWithdrawParams,
  Erc4626GetErc4626PreviewDepositData,
  Erc4626GetErc4626PreviewDepositParams,
  Erc4626GetErc4626PreviewMintData,
  Erc4626GetErc4626PreviewMintParams,
  Erc4626GetErc4626PreviewRedeemData,
  Erc4626GetErc4626PreviewRedeemParams,
  Erc4626GetErc4626PreviewWithdrawData,
  Erc4626GetErc4626PreviewWithdrawParams,
  Erc4626GetErc4626TotalAssetsData,
  Erc4626GetErc4626TotalAssetsParams,
  Erc4626GetErc4626TotalSupplyData,
  Erc4626GetErc4626TotalSupplyParams,
  Erc4626MintErc4626SharesData,
  Erc4626RedeemErc4626SharesData,
  Erc4626TransferErc4626Data,
  Erc4626TransferFromErc4626Data,
  Erc4626WithdrawFromErc4626Data,
  InputBody,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Erc4626<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Approves a spender to transfer a specific amount of shares.
   *
   * @tags ERC4626
   * @name Erc4626ApproveErc4626
   * @request POST:/erc4626/{address}/approve
   * @secure
   */
  erc4626ApproveErc4626 = (
    address: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc4626ApproveErc4626Data, any>({
      path: `/erc4626/${address}/approve`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deposits assets into the vault and mints shares to the receiver.
   *
   * @tags ERC4626
   * @name Erc4626DepositToErc4626
   * @request POST:/erc4626/{address}/deposit
   * @secure
   */
  erc4626DepositToErc4626 = (
    address: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc4626DepositToErc4626Data, any>({
      path: `/erc4626/${address}/deposit`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Gets the amount of shares that an owner has allowed a spender to use.
   *
   * @tags ERC4626
   * @name Erc4626GetErc4626Allowance
   * @request GET:/erc4626/{account}/allowance
   * @secure
   */
  erc4626GetErc4626Allowance = (
    { account, ...query }: Erc4626GetErc4626AllowanceParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc4626GetErc4626AllowanceData, any>({
      path: `/erc4626/${account}/allowance`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the underlying asset address of the ERC4626 vault.
   *
   * @tags ERC4626
   * @name Erc4626GetErc4626Asset
   * @request GET:/erc4626/{account}/asset
   * @secure
   */
  erc4626GetErc4626Asset = (
    { account, ...query }: Erc4626GetErc4626AssetParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc4626GetErc4626AssetData, any>({
      path: `/erc4626/${account}/asset`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Gets the balance of shares for an account.
   *
   * @tags ERC4626
   * @name Erc4626GetErc4626BalanceOf
   * @request GET:/erc4626/{account}/balanceOf
   * @secure
   */
  erc4626GetErc4626BalanceOf = (
    { account, ...query }: Erc4626GetErc4626BalanceOfParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc4626GetErc4626BalanceOfData, any>({
      path: `/erc4626/${account}/balanceOf`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Calculates the amount of assets that would be withdrawn for a given amount of shares.
   *
   * @tags ERC4626
   * @name Erc4626GetErc4626ConvertToAssets
   * @request GET:/erc4626/{account}/convertToAssets
   * @secure
   */
  erc4626GetErc4626ConvertToAssets = (
    { account, ...query }: Erc4626GetErc4626ConvertToAssetsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc4626GetErc4626ConvertToAssetsData, any>({
      path: `/erc4626/${account}/convertToAssets`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Calculates the amount of shares that would be minted for a given amount of assets.
   *
   * @tags ERC4626
   * @name Erc4626GetErc4626ConvertToShares
   * @request GET:/erc4626/{account}/convertToShares
   * @secure
   */
  erc4626GetErc4626ConvertToShares = (
    { account, ...query }: Erc4626GetErc4626ConvertToSharesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc4626GetErc4626ConvertToSharesData, any>({
      path: `/erc4626/${account}/convertToShares`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the maximum amount of assets that can be deposited in a single transaction.
   *
   * @tags ERC4626
   * @name Erc4626GetErc4626MaxDeposit
   * @request GET:/erc4626/{account}/maxDeposit
   * @secure
   */
  erc4626GetErc4626MaxDeposit = (
    { account, ...query }: Erc4626GetErc4626MaxDepositParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc4626GetErc4626MaxDepositData, any>({
      path: `/erc4626/${account}/maxDeposit`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the maximum amount of shares that can be minted in a single transaction.
   *
   * @tags ERC4626
   * @name Erc4626GetErc4626MaxMint
   * @request GET:/erc4626/{account}/maxMint
   * @secure
   */
  erc4626GetErc4626MaxMint = (
    { account, ...query }: Erc4626GetErc4626MaxMintParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc4626GetErc4626MaxMintData, any>({
      path: `/erc4626/${account}/maxMint`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the maximum amount of shares that can be redeemed in a single transaction.
   *
   * @tags ERC4626
   * @name Erc4626GetErc4626MaxRedeem
   * @request GET:/erc4626/{account}/maxRedeem
   * @secure
   */
  erc4626GetErc4626MaxRedeem = (
    { account, ...query }: Erc4626GetErc4626MaxRedeemParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc4626GetErc4626MaxRedeemData, any>({
      path: `/erc4626/${account}/maxRedeem`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the maximum amount of assets that can be withdrawn in a single transaction.
   *
   * @tags ERC4626
   * @name Erc4626GetErc4626MaxWithdraw
   * @request GET:/erc4626/{account}/maxWithdraw
   * @secure
   */
  erc4626GetErc4626MaxWithdraw = (
    { account, ...query }: Erc4626GetErc4626MaxWithdrawParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc4626GetErc4626MaxWithdrawData, any>({
      path: `/erc4626/${account}/maxWithdraw`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Simulates the amount of shares that would be received for a deposit of assets.
   *
   * @tags ERC4626
   * @name Erc4626GetErc4626PreviewDeposit
   * @request GET:/erc4626/{account}/previewDeposit
   * @secure
   */
  erc4626GetErc4626PreviewDeposit = (
    { account, ...query }: Erc4626GetErc4626PreviewDepositParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc4626GetErc4626PreviewDepositData, any>({
      path: `/erc4626/${account}/previewDeposit`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Simulates the amount of assets needed for minting a specific amount of shares.
   *
   * @tags ERC4626
   * @name Erc4626GetErc4626PreviewMint
   * @request GET:/erc4626/{account}/previewMint
   * @secure
   */
  erc4626GetErc4626PreviewMint = (
    { account, ...query }: Erc4626GetErc4626PreviewMintParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc4626GetErc4626PreviewMintData, any>({
      path: `/erc4626/${account}/previewMint`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Simulates the amount of assets that would be received for redeeming shares.
   *
   * @tags ERC4626
   * @name Erc4626GetErc4626PreviewRedeem
   * @request GET:/erc4626/{account}/previewRedeem
   * @secure
   */
  erc4626GetErc4626PreviewRedeem = (
    { account, ...query }: Erc4626GetErc4626PreviewRedeemParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc4626GetErc4626PreviewRedeemData, any>({
      path: `/erc4626/${account}/previewRedeem`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Simulates the amount of shares needed to withdraw a specific amount of assets.
   *
   * @tags ERC4626
   * @name Erc4626GetErc4626PreviewWithdraw
   * @request GET:/erc4626/{account}/previewWithdraw
   * @secure
   */
  erc4626GetErc4626PreviewWithdraw = (
    { account, ...query }: Erc4626GetErc4626PreviewWithdrawParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc4626GetErc4626PreviewWithdrawData, any>({
      path: `/erc4626/${account}/previewWithdraw`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Gets the total amount of underlying assets held by the vault.
   *
   * @tags ERC4626
   * @name Erc4626GetErc4626TotalAssets
   * @request GET:/erc4626/{account}/totalAssets
   * @secure
   */
  erc4626GetErc4626TotalAssets = (
    { account, ...query }: Erc4626GetErc4626TotalAssetsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc4626GetErc4626TotalAssetsData, any>({
      path: `/erc4626/${account}/totalAssets`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Gets the total supply of shares.
   *
   * @tags ERC4626
   * @name Erc4626GetErc4626TotalSupply
   * @request GET:/erc4626/{account}/totalSupply
   * @secure
   */
  erc4626GetErc4626TotalSupply = (
    { account, ...query }: Erc4626GetErc4626TotalSupplyParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc4626GetErc4626TotalSupplyData, any>({
      path: `/erc4626/${account}/totalSupply`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Mints shares to the receiver by depositing exact amount of assets.
   *
   * @tags ERC4626
   * @name Erc4626MintErc4626Shares
   * @request POST:/erc4626/{address}/mint
   * @secure
   */
  erc4626MintErc4626Shares = (
    address: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc4626MintErc4626SharesData, any>({
      path: `/erc4626/${address}/mint`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Redeems shares from owner and sends exact amount of assets to receiver.
   *
   * @tags ERC4626
   * @name Erc4626RedeemErc4626Shares
   * @request POST:/erc4626/{address}/redeem
   * @secure
   */
  erc4626RedeemErc4626Shares = (
    address: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc4626RedeemErc4626SharesData, any>({
      path: `/erc4626/${address}/redeem`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Transfers shares to a specified address.
   *
   * @tags ERC4626
   * @name Erc4626TransferErc4626
   * @request POST:/erc4626/{address}/transfer
   * @secure
   */
  erc4626TransferErc4626 = (
    address: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc4626TransferErc4626Data, any>({
      path: `/erc4626/${address}/transfer`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Transfers shares from one address to another.
   *
   * @tags ERC4626
   * @name Erc4626TransferFromErc4626
   * @request POST:/erc4626/{address}/transferFrom
   * @secure
   */
  erc4626TransferFromErc4626 = (
    address: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc4626TransferFromErc4626Data, any>({
      path: `/erc4626/${address}/transferFrom`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Withdraws assets from the vault to the receiver.
   *
   * @tags ERC4626
   * @name Erc4626WithdrawFromErc4626
   * @request POST:/erc4626/{address}/withdraw
   * @secure
   */
  erc4626WithdrawFromErc4626 = (
    address: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Erc4626WithdrawFromErc4626Data, any>({
      path: `/erc4626/${address}/withdraw`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
