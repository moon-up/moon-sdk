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
  GetFlashLoanPremiumTotalData,
  GetLendingPoolRevisionData,
  GetMaxNumberReservesData,
  GetMaxStableRateBorrowSizePercentData,
  GetReserveDataResult,
  GetReservesListData,
  GetUserAccountDataResult,
  IsPausedData,
  LendingPoolInputBody,
  LiquidationCallResult,
  RepayResult,
  SetUserUseReserveAsCollateralResult,
  SwapBorrowRateModeData,
} from './data-contracts';

export namespace LendingPool {
  /**
   * No description
   * @tags LendingPool
   * @name Borrow
   * @request POST:/lending-pool/{accountName}/borrow
   * @secure
   */
  export namespace Borrow {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LendingPoolInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = BorrowResult;
  }

  /**
   * No description
   * @tags LendingPool
   * @name Deposit
   * @request POST:/lending-pool/{accountName}/deposit
   * @secure
   */
  export namespace Deposit {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LendingPoolInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DepositResult;
  }

  /**
   * No description
   * @tags LendingPool
   * @name FlashLoan
   * @request POST:/lending-pool/{accountName}/flash-loan
   * @secure
   */
  export namespace FlashLoan {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LendingPoolInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = FlashLoanData;
  }

  /**
   * No description
   * @tags LendingPool
   * @name GetAddressesProvider
   * @request GET:/lending-pool/addresses-provider
   * @secure
   */
  export namespace GetAddressesProvider {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetAddressesProviderData;
  }

  /**
   * No description
   * @tags LendingPool
   * @name GetFlashLoanPremiumTotal
   * @request GET:/lending-pool/flash-loan-premium
   * @secure
   */
  export namespace GetFlashLoanPremiumTotal {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetFlashLoanPremiumTotalData;
  }

  /**
   * No description
   * @tags LendingPool
   * @name GetLendingPoolRevision
   * @request GET:/lending-pool/revision
   * @secure
   */
  export namespace GetLendingPoolRevision {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetLendingPoolRevisionData;
  }

  /**
   * No description
   * @tags LendingPool
   * @name GetMaxNumberReserves
   * @request GET:/lending-pool/max-reserves
   * @secure
   */
  export namespace GetMaxNumberReserves {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetMaxNumberReservesData;
  }

  /**
   * No description
   * @tags LendingPool
   * @name GetMaxStableRateBorrowSizePercent
   * @request GET:/lending-pool/max-stable-rate-borrow-size-percent
   * @secure
   */
  export namespace GetMaxStableRateBorrowSizePercent {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetMaxStableRateBorrowSizePercentData;
  }

  /**
   * No description
   * @tags LendingPool
   * @name GetReserveData
   * @request GET:/lending-pool/reserve-data
   * @secure
   */
  export namespace GetReserveData {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      asset: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetReserveDataResult;
  }

  /**
   * No description
   * @tags LendingPool
   * @name GetReservesList
   * @request GET:/lending-pool/reserves-list
   * @secure
   */
  export namespace GetReservesList {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetReservesListData;
  }

  /**
   * No description
   * @tags LendingPool
   * @name GetUserAccountData
   * @request GET:/lending-pool/user-account-data
   * @secure
   */
  export namespace GetUserAccountData {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      user: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetUserAccountDataResult;
  }

  /**
   * No description
   * @tags LendingPool
   * @name IsPaused
   * @request GET:/lending-pool/paused
   * @secure
   */
  export namespace IsPaused {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = IsPausedData;
  }

  /**
   * No description
   * @tags LendingPool
   * @name LiquidationCall
   * @request POST:/lending-pool/{accountName}/liquidation-call
   * @secure
   */
  export namespace LiquidationCall {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LendingPoolInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = LiquidationCallResult;
  }

  /**
   * No description
   * @tags LendingPool
   * @name Repay
   * @request POST:/lending-pool/{accountName}/repay
   * @secure
   */
  export namespace Repay {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LendingPoolInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = RepayResult;
  }

  /**
   * No description
   * @tags LendingPool
   * @name SetUserUseReserveAsCollateral
   * @request POST:/lending-pool/{accountName}/set-user-use-reserve-as-collateral
   * @secure
   */
  export namespace SetUserUseReserveAsCollateral {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LendingPoolInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SetUserUseReserveAsCollateralResult;
  }

  /**
   * No description
   * @tags LendingPool
   * @name SwapBorrowRateMode
   * @request POST:/lending-pool/{accountName}/swap-borrow-rate-mode
   * @secure
   */
  export namespace SwapBorrowRateMode {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LendingPoolInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SwapBorrowRateModeData;
  }
}
