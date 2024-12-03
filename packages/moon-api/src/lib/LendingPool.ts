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
  LendingPoolBorrowData,
  LendingPoolDepositData,
  LendingPoolFlashLoanData,
  LendingPoolGetAddressesProviderData,
  LendingPoolGetAddressesProviderParams,
  LendingPoolGetFlashLoanPremiumTotalData,
  LendingPoolGetFlashLoanPremiumTotalParams,
  LendingPoolGetLendingPoolRevisionData,
  LendingPoolGetLendingPoolRevisionParams,
  LendingPoolGetMaxNumberReservesData,
  LendingPoolGetMaxNumberReservesParams,
  LendingPoolGetMaxStableRateBorrowSizePercentData,
  LendingPoolGetMaxStableRateBorrowSizePercentParams,
  LendingPoolGetReserveDataData,
  LendingPoolGetReserveDataParams,
  LendingPoolGetReservesListData,
  LendingPoolGetReservesListParams,
  LendingPoolGetUserAccountDataData,
  LendingPoolGetUserAccountDataParams,
  LendingPoolInputBody,
  LendingPoolIsPausedData,
  LendingPoolIsPausedParams,
  LendingPoolLiquidationCallData,
  LendingPoolRepayData,
  LendingPoolSetUserUseReserveAsCollateralData,
  LendingPoolSwapBorrowRateModeData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class LendingPool<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Handles the borrowing process from the lending pool.
   *
   * @tags LendingPool
   * @name LendingPoolBorrow
   * @request POST:/lending-pool/{accountName}/borrow
   * @secure
   */
  lendingPoolBorrow = (
    accountName: string,
    data: LendingPoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LendingPoolBorrowData, any>({
      path: `/lending-pool/${accountName}/borrow`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Handles the deposit operation for a lending pool.
   *
   * @tags LendingPool
   * @name LendingPoolDeposit
   * @request POST:/lending-pool/{accountName}/deposit
   * @secure
   */
  lendingPoolDeposit = (
    accountName: string,
    data: LendingPoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LendingPoolDepositData, any>({
      path: `/lending-pool/${accountName}/deposit`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Executes a flash loan operation on the lending pool.
   *
   * @tags LendingPool
   * @name LendingPoolFlashLoan
   * @request POST:/lending-pool/{accountName}/flash-loan
   * @secure
   */
  lendingPoolFlashLoan = (
    accountName: string,
    data: LendingPoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LendingPoolFlashLoanData, any>({
      path: `/lending-pool/${accountName}/flash-loan`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the addresses provider from the lending pool instance.
   *
   * @tags LendingPool
   * @name LendingPoolGetAddressesProvider
   * @request GET:/lending-pool/addresses-provider
   * @secure
   */
  lendingPoolGetAddressesProvider = (
    query: LendingPoolGetAddressesProviderParams,
    params: RequestParams = {}
  ) =>
    this.http.request<LendingPoolGetAddressesProviderData, any>({
      path: `/lending-pool/addresses-provider`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the total flash loan premium for a given lending pool.
   *
   * @tags LendingPool
   * @name LendingPoolGetFlashLoanPremiumTotal
   * @request GET:/lending-pool/flash-loan-premium
   * @secure
   */
  lendingPoolGetFlashLoanPremiumTotal = (
    query: LendingPoolGetFlashLoanPremiumTotalParams,
    params: RequestParams = {}
  ) =>
    this.http.request<LendingPoolGetFlashLoanPremiumTotalData, any>({
      path: `/lending-pool/flash-loan-premium`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the revision number of a lending pool.
   *
   * @tags LendingPool
   * @name LendingPoolGetLendingPoolRevision
   * @request GET:/lending-pool/revision
   * @secure
   */
  lendingPoolGetLendingPoolRevision = (
    query: LendingPoolGetLendingPoolRevisionParams,
    params: RequestParams = {}
  ) =>
    this.http.request<LendingPoolGetLendingPoolRevisionData, any>({
      path: `/lending-pool/revision`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the maximum number of reserves from the lending pool.
   *
   * @tags LendingPool
   * @name LendingPoolGetMaxNumberReserves
   * @request GET:/lending-pool/max-reserves
   * @secure
   */
  lendingPoolGetMaxNumberReserves = (
    query: LendingPoolGetMaxNumberReservesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<LendingPoolGetMaxNumberReservesData, any>({
      path: `/lending-pool/max-reserves`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the maximum stable rate borrow size percentage from the lending pool.
   *
   * @tags LendingPool
   * @name LendingPoolGetMaxStableRateBorrowSizePercent
   * @request GET:/lending-pool/max-stable-rate-borrow-size-percent
   * @secure
   */
  lendingPoolGetMaxStableRateBorrowSizePercent = (
    query: LendingPoolGetMaxStableRateBorrowSizePercentParams,
    params: RequestParams = {}
  ) =>
    this.http.request<LendingPoolGetMaxStableRateBorrowSizePercentData, any>({
      path: `/lending-pool/max-stable-rate-borrow-size-percent`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves reserve data for a specific asset from the lending pool.
   *
   * @tags LendingPool
   * @name LendingPoolGetReserveData
   * @request GET:/lending-pool/reserve-data
   * @secure
   */
  lendingPoolGetReserveData = (
    query: LendingPoolGetReserveDataParams,
    params: RequestParams = {}
  ) =>
    this.http.request<LendingPoolGetReserveDataData, any>({
      path: `/lending-pool/reserve-data`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the list of reserves from the lending pool.
   *
   * @tags LendingPool
   * @name LendingPoolGetReservesList
   * @request GET:/lending-pool/reserves-list
   * @secure
   */
  lendingPoolGetReservesList = (
    query: LendingPoolGetReservesListParams,
    params: RequestParams = {}
  ) =>
    this.http.request<LendingPoolGetReservesListData, any>({
      path: `/lending-pool/reserves-list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves user account data from the lending pool.
   *
   * @tags LendingPool
   * @name LendingPoolGetUserAccountData
   * @request GET:/lending-pool/user-account-data
   * @secure
   */
  lendingPoolGetUserAccountData = (
    query: LendingPoolGetUserAccountDataParams,
    params: RequestParams = {}
  ) =>
    this.http.request<LendingPoolGetUserAccountDataData, any>({
      path: `/lending-pool/user-account-data`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Checks if the lending pool is paused.
   *
   * @tags LendingPool
   * @name LendingPoolIsPaused
   * @request GET:/lending-pool/paused
   * @secure
   */
  lendingPoolIsPaused = (
    query: LendingPoolIsPausedParams,
    params: RequestParams = {}
  ) =>
    this.http.request<LendingPoolIsPausedData, any>({
      path: `/lending-pool/paused`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Handles the liquidation call for a lending pool.
   *
   * @tags LendingPool
   * @name LendingPoolLiquidationCall
   * @request POST:/lending-pool/{accountName}/liquidation-call
   * @secure
   */
  lendingPoolLiquidationCall = (
    accountName: string,
    data: LendingPoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LendingPoolLiquidationCallData, any>({
      path: `/lending-pool/${accountName}/liquidation-call`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Repays a loan in the lending pool.
   *
   * @tags LendingPool
   * @name LendingPoolRepay
   * @request POST:/lending-pool/{accountName}/repay
   * @secure
   */
  lendingPoolRepay = (
    accountName: string,
    data: LendingPoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LendingPoolRepayData, any>({
      path: `/lending-pool/${accountName}/repay`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the user's reserve as collateral.
   *
   * @tags LendingPool
   * @name LendingPoolSetUserUseReserveAsCollateral
   * @request POST:/lending-pool/{accountName}/set-user-use-reserve-as-collateral
   * @secure
   */
  lendingPoolSetUserUseReserveAsCollateral = (
    accountName: string,
    data: LendingPoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LendingPoolSetUserUseReserveAsCollateralData, any>({
      path: `/lending-pool/${accountName}/set-user-use-reserve-as-collateral`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Swaps the borrow rate mode for a given account in the lending pool.
   *
   * @tags LendingPool
   * @name LendingPoolSwapBorrowRateMode
   * @request POST:/lending-pool/{accountName}/swap-borrow-rate-mode
   * @secure
   */
  lendingPoolSwapBorrowRateMode = (
    accountName: string,
    data: LendingPoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LendingPoolSwapBorrowRateModeData, any>({
      path: `/lending-pool/${accountName}/swap-borrow-rate-mode`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
