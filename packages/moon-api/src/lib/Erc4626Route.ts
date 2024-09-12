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
  GetAllowanceResult,
  GetAssetData,
  GetBalanceOfResult,
  GetConvertToAssetsData,
  GetConvertToSharesData,
  GetMaxDepositData,
  GetMaxMintData,
  GetMaxRedeemData,
  GetMaxWithdrawData,
  GetPreviewDepositData,
  GetPreviewMintData,
  GetPreviewRedeemData,
  GetPreviewWithdrawData,
  GetTotalAssetsData,
  GetTotalSupplyResult,
  InputBody,
  MintData,
  RedeemData,
  TransferFromResult,
  TransferResult,
  WithdrawResult,
} from './data-contracts';

export namespace Erc4626 {
  /**
   * No description
   * @tags ERC4626
   * @name Approve
   * @request POST:/erc4626/{address}/approve
   * @secure
   */
  export namespace Approve {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ApproveResult;
  }

  /**
   * No description
   * @tags ERC4626
   * @name Deposit
   * @request POST:/erc4626/{address}/deposit
   * @secure
   */
  export namespace Deposit {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DepositData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetAllowance
   * @request GET:/erc4626/{account}/allowance
   * @secure
   */
  export namespace GetAllowance {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
      owner: string;
      spender: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetAllowanceResult;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetAsset
   * @request GET:/erc4626/{account}/asset
   * @secure
   */
  export namespace GetAsset {
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
    export type ResponseBody = GetAssetData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetBalanceOf
   * @request GET:/erc4626/{account}/balanceOf
   * @secure
   */
  export namespace GetBalanceOf {
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
    export type ResponseBody = GetBalanceOfResult;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetConvertToAssets
   * @request GET:/erc4626/{account}/convertToAssets
   * @secure
   */
  export namespace GetConvertToAssets {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
      shares: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetConvertToAssetsData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetConvertToShares
   * @request GET:/erc4626/{account}/convertToShares
   * @secure
   */
  export namespace GetConvertToShares {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      assets: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetConvertToSharesData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetMaxDeposit
   * @request GET:/erc4626/{account}/maxDeposit
   * @secure
   */
  export namespace GetMaxDeposit {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
      receiver: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetMaxDepositData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetMaxMint
   * @request GET:/erc4626/{account}/maxMint
   * @secure
   */
  export namespace GetMaxMint {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
      receiver: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetMaxMintData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetMaxRedeem
   * @request GET:/erc4626/{account}/maxRedeem
   * @secure
   */
  export namespace GetMaxRedeem {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
      owner: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetMaxRedeemData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetMaxWithdraw
   * @request GET:/erc4626/{account}/maxWithdraw
   * @secure
   */
  export namespace GetMaxWithdraw {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
      owner: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetMaxWithdrawData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetPreviewDeposit
   * @request GET:/erc4626/{account}/previewDeposit
   * @secure
   */
  export namespace GetPreviewDeposit {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      assets: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetPreviewDepositData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetPreviewMint
   * @request GET:/erc4626/{account}/previewMint
   * @secure
   */
  export namespace GetPreviewMint {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
      shares: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetPreviewMintData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetPreviewRedeem
   * @request GET:/erc4626/{account}/previewRedeem
   * @secure
   */
  export namespace GetPreviewRedeem {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
      shares: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetPreviewRedeemData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetPreviewWithdraw
   * @request GET:/erc4626/{account}/previewWithdraw
   * @secure
   */
  export namespace GetPreviewWithdraw {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      assets: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetPreviewWithdrawData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetTotalAssets
   * @request GET:/erc4626/{account}/totalAssets
   * @secure
   */
  export namespace GetTotalAssets {
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
    export type ResponseBody = GetTotalAssetsData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetTotalSupply
   * @request GET:/erc4626/{account}/totalSupply
   * @secure
   */
  export namespace GetTotalSupply {
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
    export type ResponseBody = GetTotalSupplyResult;
  }

  /**
   * No description
   * @tags ERC4626
   * @name Mint
   * @request POST:/erc4626/{address}/mint
   * @secure
   */
  export namespace Mint {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = MintData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name Redeem
   * @request POST:/erc4626/{address}/redeem
   * @secure
   */
  export namespace Redeem {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = RedeemData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name Transfer
   * @request POST:/erc4626/{address}/transfer
   * @secure
   */
  export namespace Transfer {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = TransferResult;
  }

  /**
   * No description
   * @tags ERC4626
   * @name TransferFrom
   * @request POST:/erc4626/{address}/transferFrom
   * @secure
   */
  export namespace TransferFrom {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = TransferFromResult;
  }

  /**
   * No description
   * @tags ERC4626
   * @name Withdraw
   * @request POST:/erc4626/{address}/withdraw
   * @secure
   */
  export namespace Withdraw {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = WithdrawResult;
  }
}
