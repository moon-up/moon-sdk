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
  BorrowResult,
  DepositResult,
  FlashLoanData,
  GetAddressesProviderData,
  GetAddressesProviderParams,
  GetFlashLoanPremiumTotalData,
  GetFlashLoanPremiumTotalParams,
  GetLendingPoolRevisionData,
  GetLendingPoolRevisionParams,
  GetMaxNumberReservesData,
  GetMaxNumberReservesParams,
  GetMaxStableRateBorrowSizePercentData,
  GetMaxStableRateBorrowSizePercentParams,
  GetReserveDataParams2,
  GetReserveDataResult,
  GetReservesListData,
  GetReservesListParams,
  GetUserAccountDataParams2,
  GetUserAccountDataResult,
  IsPausedData,
  IsPausedParams,
  LendingPoolInputBody,
  LiquidationCallResult,
  RepayResult,
  SetUserUseReserveAsCollateralResult,
  SwapBorrowRateModeData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class LendingPool<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags LendingPool
   * @name Borrow
   * @request POST:/lending-pool/{accountName}/borrow
   * @secure
   */
  borrow = (
    accountName: string,
    data: LendingPoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<BorrowResult, any>({
      path: `/lending-pool/${accountName}/borrow`,
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
   * @tags LendingPool
   * @name Deposit
   * @request POST:/lending-pool/{accountName}/deposit
   * @secure
   */
  deposit = (
    accountName: string,
    data: LendingPoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<DepositResult, any>({
      path: `/lending-pool/${accountName}/deposit`,
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
   * @tags LendingPool
   * @name FlashLoan
   * @request POST:/lending-pool/{accountName}/flash-loan
   * @secure
   */
  flashLoan = (
    accountName: string,
    data: LendingPoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<FlashLoanData, any>({
      path: `/lending-pool/${accountName}/flash-loan`,
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
   * @tags LendingPool
   * @name GetAddressesProvider
   * @request GET:/lending-pool/addresses-provider
   * @secure
   */
  getAddressesProvider = (
    query: GetAddressesProviderParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAddressesProviderData, any>({
      path: `/lending-pool/addresses-provider`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LendingPool
   * @name GetFlashLoanPremiumTotal
   * @request GET:/lending-pool/flash-loan-premium
   * @secure
   */
  getFlashLoanPremiumTotal = (
    query: GetFlashLoanPremiumTotalParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetFlashLoanPremiumTotalData, any>({
      path: `/lending-pool/flash-loan-premium`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LendingPool
   * @name GetLendingPoolRevision
   * @request GET:/lending-pool/revision
   * @secure
   */
  getLendingPoolRevision = (
    query: GetLendingPoolRevisionParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetLendingPoolRevisionData, any>({
      path: `/lending-pool/revision`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LendingPool
   * @name GetMaxNumberReserves
   * @request GET:/lending-pool/max-reserves
   * @secure
   */
  getMaxNumberReserves = (
    query: GetMaxNumberReservesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetMaxNumberReservesData, any>({
      path: `/lending-pool/max-reserves`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LendingPool
   * @name GetMaxStableRateBorrowSizePercent
   * @request GET:/lending-pool/max-stable-rate-borrow-size-percent
   * @secure
   */
  getMaxStableRateBorrowSizePercent = (
    query: GetMaxStableRateBorrowSizePercentParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetMaxStableRateBorrowSizePercentData, any>({
      path: `/lending-pool/max-stable-rate-borrow-size-percent`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LendingPool
   * @name GetReserveData
   * @request GET:/lending-pool/reserve-data
   * @secure
   */
  getReserveData = (query: GetReserveDataParams2, params: RequestParams = {}) =>
    this.http.request<GetReserveDataResult, any>({
      path: `/lending-pool/reserve-data`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LendingPool
   * @name GetReservesList
   * @request GET:/lending-pool/reserves-list
   * @secure
   */
  getReservesList = (
    query: GetReservesListParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetReservesListData, any>({
      path: `/lending-pool/reserves-list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LendingPool
   * @name GetUserAccountData
   * @request GET:/lending-pool/user-account-data
   * @secure
   */
  getUserAccountData = (
    query: GetUserAccountDataParams2,
    params: RequestParams = {}
  ) =>
    this.http.request<GetUserAccountDataResult, any>({
      path: `/lending-pool/user-account-data`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LendingPool
   * @name IsPaused
   * @request GET:/lending-pool/paused
   * @secure
   */
  isPaused = (query: IsPausedParams, params: RequestParams = {}) =>
    this.http.request<IsPausedData, any>({
      path: `/lending-pool/paused`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags LendingPool
   * @name LiquidationCall
   * @request POST:/lending-pool/{accountName}/liquidation-call
   * @secure
   */
  liquidationCall = (
    accountName: string,
    data: LendingPoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LiquidationCallResult, any>({
      path: `/lending-pool/${accountName}/liquidation-call`,
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
   * @tags LendingPool
   * @name Repay
   * @request POST:/lending-pool/{accountName}/repay
   * @secure
   */
  repay = (
    accountName: string,
    data: LendingPoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<RepayResult, any>({
      path: `/lending-pool/${accountName}/repay`,
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
   * @tags LendingPool
   * @name SetUserUseReserveAsCollateral
   * @request POST:/lending-pool/{accountName}/set-user-use-reserve-as-collateral
   * @secure
   */
  setUserUseReserveAsCollateral = (
    accountName: string,
    data: LendingPoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SetUserUseReserveAsCollateralResult, any>({
      path: `/lending-pool/${accountName}/set-user-use-reserve-as-collateral`,
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
   * @tags LendingPool
   * @name SwapBorrowRateMode
   * @request POST:/lending-pool/{accountName}/swap-borrow-rate-mode
   * @secure
   */
  swapBorrowRateMode = (
    accountName: string,
    data: LendingPoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SwapBorrowRateModeData, any>({
      path: `/lending-pool/${accountName}/swap-borrow-rate-mode`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
