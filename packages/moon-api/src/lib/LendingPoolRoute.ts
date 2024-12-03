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
  LendingPoolGetFlashLoanPremiumTotalData,
  LendingPoolGetLendingPoolRevisionData,
  LendingPoolGetMaxNumberReservesData,
  LendingPoolGetMaxStableRateBorrowSizePercentData,
  LendingPoolGetReserveDataData,
  LendingPoolGetReservesListData,
  LendingPoolGetUserAccountDataData,
  LendingPoolInputBody,
  LendingPoolIsPausedData,
  LendingPoolLiquidationCallData,
  LendingPoolRepayData,
  LendingPoolSetUserUseReserveAsCollateralData,
  LendingPoolSwapBorrowRateModeData,
} from './data-contracts';

export namespace LendingPool {
  /**
   * @description Handles the borrowing process from the lending pool.
   * @tags LendingPool
   * @name LendingPoolBorrow
   * @request POST:/lending-pool/{accountName}/borrow
   * @secure
   */
  export namespace LendingPoolBorrow {
    export type RequestParams = {
      /** - The name of the account requesting the borrow. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LendingPoolInputBody;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = LendingPoolBorrowData;
  }

  /**
   * @description Handles the deposit operation for a lending pool.
   * @tags LendingPool
   * @name LendingPoolDeposit
   * @request POST:/lending-pool/{accountName}/deposit
   * @secure
   */
  export namespace LendingPoolDeposit {
    export type RequestParams = {
      /** - The name of the account making the deposit. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LendingPoolInputBody;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = LendingPoolDepositData;
  }

  /**
   * @description Executes a flash loan operation on the lending pool.
   * @tags LendingPool
   * @name LendingPoolFlashLoan
   * @request POST:/lending-pool/{accountName}/flash-loan
   * @secure
   */
  export namespace LendingPoolFlashLoan {
    export type RequestParams = {
      /** - The name of the account requesting the flash loan. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LendingPoolInputBody;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = LendingPoolFlashLoanData;
  }

  /**
   * @description Retrieves the addresses provider from the lending pool instance.
   * @tags LendingPool
   * @name LendingPoolGetAddressesProvider
   * @request GET:/lending-pool/addresses-provider
   * @secure
   */
  export namespace LendingPoolGetAddressesProvider {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The address query parameter. */
      address: string;
      /** - The chain ID query parameter. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = LendingPoolGetAddressesProviderData;
  }

  /**
   * @description Retrieves the total flash loan premium for a given lending pool.
   * @tags LendingPool
   * @name LendingPoolGetFlashLoanPremiumTotal
   * @request GET:/lending-pool/flash-loan-premium
   * @secure
   */
  export namespace LendingPoolGetFlashLoanPremiumTotal {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The address of the lending pool. */
      address: string;
      /** - The chain ID of the blockchain network. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = LendingPoolGetFlashLoanPremiumTotalData;
  }

  /**
   * @description Retrieves the revision number of a lending pool.
   * @tags LendingPool
   * @name LendingPoolGetLendingPoolRevision
   * @request GET:/lending-pool/revision
   * @secure
   */
  export namespace LendingPoolGetLendingPoolRevision {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The address of the lending pool. */
      address: string;
      /** - The chain ID where the lending pool is located. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = LendingPoolGetLendingPoolRevisionData;
  }

  /**
   * @description Retrieves the maximum number of reserves from the lending pool.
   * @tags LendingPool
   * @name LendingPoolGetMaxNumberReserves
   * @request GET:/lending-pool/max-reserves
   * @secure
   */
  export namespace LendingPoolGetMaxNumberReserves {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The address of the lending pool. */
      address: string;
      /** - The chain ID where the lending pool is located. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = LendingPoolGetMaxNumberReservesData;
  }

  /**
   * @description Retrieves the maximum stable rate borrow size percentage from the lending pool.
   * @tags LendingPool
   * @name LendingPoolGetMaxStableRateBorrowSizePercent
   * @request GET:/lending-pool/max-stable-rate-borrow-size-percent
   * @secure
   */
  export namespace LendingPoolGetMaxStableRateBorrowSizePercent {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The address of the lending pool. */
      address: string;
      /** - The chain ID of the blockchain network. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = LendingPoolGetMaxStableRateBorrowSizePercentData;
  }

  /**
   * @description Retrieves reserve data for a specific asset from the lending pool.
   * @tags LendingPool
   * @name LendingPoolGetReserveData
   * @request GET:/lending-pool/reserve-data
   * @secure
   */
  export namespace LendingPoolGetReserveData {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The address of the lending pool. */
      address: string;
      /** - The asset for which to retrieve reserve data. */
      asset: string;
      /** - The chain ID of the blockchain network. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = LendingPoolGetReserveDataData;
  }

  /**
   * @description Retrieves the list of reserves from the lending pool.
   * @tags LendingPool
   * @name LendingPoolGetReservesList
   * @request GET:/lending-pool/reserves-list
   * @secure
   */
  export namespace LendingPoolGetReservesList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The address of the lending pool. */
      address: string;
      /** - The chain ID of the blockchain network. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = LendingPoolGetReservesListData;
  }

  /**
   * @description Retrieves user account data from the lending pool.
   * @tags LendingPool
   * @name LendingPoolGetUserAccountData
   * @request GET:/lending-pool/user-account-data
   * @secure
   */
  export namespace LendingPoolGetUserAccountData {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The address of the lending pool. */
      address: string;
      /** - The chain ID of the blockchain network. */
      chainId: string;
      /** - The user address for which to retrieve account data. */
      user: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = LendingPoolGetUserAccountDataData;
  }

  /**
   * @description Checks if the lending pool is paused.
   * @tags LendingPool
   * @name LendingPoolIsPaused
   * @request GET:/lending-pool/paused
   * @secure
   */
  export namespace LendingPoolIsPaused {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The address of the lending pool from the query parameters. */
      address: string;
      /** - The chain ID of the lending pool from the query parameters. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = LendingPoolIsPausedData;
  }

  /**
   * @description Handles the liquidation call for a lending pool.
   * @tags LendingPool
   * @name LendingPoolLiquidationCall
   * @request POST:/lending-pool/{accountName}/liquidation-call
   * @secure
   */
  export namespace LendingPoolLiquidationCall {
    export type RequestParams = {
      /** - The name of the account to be liquidated. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LendingPoolInputBody;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = LendingPoolLiquidationCallData;
  }

  /**
   * @description Repays a loan in the lending pool.
   * @tags LendingPool
   * @name LendingPoolRepay
   * @request POST:/lending-pool/{accountName}/repay
   * @secure
   */
  export namespace LendingPoolRepay {
    export type RequestParams = {
      /** - The name of the account to repay the loan for. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LendingPoolInputBody;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = LendingPoolRepayData;
  }

  /**
   * @description Sets the user's reserve as collateral.
   * @tags LendingPool
   * @name LendingPoolSetUserUseReserveAsCollateral
   * @request POST:/lending-pool/{accountName}/set-user-use-reserve-as-collateral
   * @secure
   */
  export namespace LendingPoolSetUserUseReserveAsCollateral {
    export type RequestParams = {
      /** - The name of the user's account. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LendingPoolInputBody;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = LendingPoolSetUserUseReserveAsCollateralData;
  }

  /**
   * @description Swaps the borrow rate mode for a given account in the lending pool.
   * @tags LendingPool
   * @name LendingPoolSwapBorrowRateMode
   * @request POST:/lending-pool/{accountName}/swap-borrow-rate-mode
   * @secure
   */
  export namespace LendingPoolSwapBorrowRateMode {
    export type RequestParams = {
      /** - The name of the account for which the borrow rate mode is to be swapped. */
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LendingPoolInputBody;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = LendingPoolSwapBorrowRateModeData;
  }
}
