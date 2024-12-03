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
  Erc4626GetErc4626AssetData,
  Erc4626GetErc4626BalanceOfData,
  Erc4626GetErc4626ConvertToAssetsData,
  Erc4626GetErc4626ConvertToSharesData,
  Erc4626GetErc4626MaxDepositData,
  Erc4626GetErc4626MaxMintData,
  Erc4626GetErc4626MaxRedeemData,
  Erc4626GetErc4626MaxWithdrawData,
  Erc4626GetErc4626PreviewDepositData,
  Erc4626GetErc4626PreviewMintData,
  Erc4626GetErc4626PreviewRedeemData,
  Erc4626GetErc4626PreviewWithdrawData,
  Erc4626GetErc4626TotalAssetsData,
  Erc4626GetErc4626TotalSupplyData,
  Erc4626MintErc4626SharesData,
  Erc4626RedeemErc4626SharesData,
  Erc4626TransferErc4626Data,
  Erc4626TransferFromErc4626Data,
  Erc4626WithdrawFromErc4626Data,
  InputBody,
} from './data-contracts';

export namespace Erc4626 {
  /**
   * @description Approves a spender to transfer a specific amount of shares.
   * @tags ERC4626
   * @name Erc4626ApproveErc4626
   * @request POST:/erc4626/{address}/approve
   * @secure
   */
  export namespace Erc4626ApproveErc4626 {
    export type RequestParams = {
      /** - The address of the spender */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc4626ApproveErc4626Data;
  }

  /**
   * @description Deposits assets into the vault and mints shares to the receiver.
   * @tags ERC4626
   * @name Erc4626DepositToErc4626
   * @request POST:/erc4626/{address}/deposit
   * @secure
   */
  export namespace Erc4626DepositToErc4626 {
    export type RequestParams = {
      /** - The address of the receiver */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc4626DepositToErc4626Data;
  }

  /**
   * @description Gets the amount of shares that an owner has allowed a spender to use.
   * @tags ERC4626
   * @name Erc4626GetErc4626Allowance
   * @request GET:/erc4626/{account}/allowance
   * @secure
   */
  export namespace Erc4626GetErc4626Allowance {
    export type RequestParams = {
      /** - The account making the request */
      account: string;
    };
    export type RequestQuery = {
      /** - The ERC4626 vault contract address */
      address: string;
      /** - The blockchain network ID */
      chainId: string;
      /** - The address of the owner */
      owner: string;
      /** - The address of the spender */
      spender: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc4626GetErc4626AllowanceData;
  }

  /**
   * @description Retrieves the underlying asset address of the ERC4626 vault.
   * @tags ERC4626
   * @name Erc4626GetErc4626Asset
   * @request GET:/erc4626/{account}/asset
   * @secure
   */
  export namespace Erc4626GetErc4626Asset {
    export type RequestParams = {
      /** - The account making the request */
      account: string;
    };
    export type RequestQuery = {
      /** - The ERC4626 vault contract address */
      address: string;
      /** - The blockchain network ID */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc4626GetErc4626AssetData;
  }

  /**
   * @description Gets the balance of shares for an account.
   * @tags ERC4626
   * @name Erc4626GetErc4626BalanceOf
   * @request GET:/erc4626/{account}/balanceOf
   * @secure
   */
  export namespace Erc4626GetErc4626BalanceOf {
    export type RequestParams = {
      /** - The account making the request */
      account: string;
    };
    export type RequestQuery = {
      /** - The ERC4626 vault contract address */
      address: string;
      /** - The blockchain network ID */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc4626GetErc4626BalanceOfData;
  }

  /**
   * @description Calculates the amount of assets that would be withdrawn for a given amount of shares.
   * @tags ERC4626
   * @name Erc4626GetErc4626ConvertToAssets
   * @request GET:/erc4626/{account}/convertToAssets
   * @secure
   */
  export namespace Erc4626GetErc4626ConvertToAssets {
    export type RequestParams = {
      /** - The account making the request */
      account: string;
    };
    export type RequestQuery = {
      /** - The ERC4626 vault contract address */
      address: string;
      /** - The blockchain network ID */
      chainId: string;
      /** - The amount of shares to redeem */
      shares: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc4626GetErc4626ConvertToAssetsData;
  }

  /**
   * @description Calculates the amount of shares that would be minted for a given amount of assets.
   * @tags ERC4626
   * @name Erc4626GetErc4626ConvertToShares
   * @request GET:/erc4626/{account}/convertToShares
   * @secure
   */
  export namespace Erc4626GetErc4626ConvertToShares {
    export type RequestParams = {
      /** - The account making the request */
      account: string;
    };
    export type RequestQuery = {
      /** - The ERC4626 vault contract address */
      address: string;
      /** - The amount of assets to deposit */
      assets: string;
      /** - The blockchain network ID */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc4626GetErc4626ConvertToSharesData;
  }

  /**
   * @description Returns the maximum amount of assets that can be deposited in a single transaction.
   * @tags ERC4626
   * @name Erc4626GetErc4626MaxDeposit
   * @request GET:/erc4626/{account}/maxDeposit
   * @secure
   */
  export namespace Erc4626GetErc4626MaxDeposit {
    export type RequestParams = {
      /** - The account making the request */
      account: string;
    };
    export type RequestQuery = {
      /** - The ERC4626 vault contract address */
      address: string;
      /** - The blockchain network ID */
      chainId: string;
      /** - The address of the receiver */
      receiver: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc4626GetErc4626MaxDepositData;
  }

  /**
   * @description Returns the maximum amount of shares that can be minted in a single transaction.
   * @tags ERC4626
   * @name Erc4626GetErc4626MaxMint
   * @request GET:/erc4626/{account}/maxMint
   * @secure
   */
  export namespace Erc4626GetErc4626MaxMint {
    export type RequestParams = {
      /** - The account making the request */
      account: string;
    };
    export type RequestQuery = {
      /** - The ERC4626 vault contract address */
      address: string;
      /** - The blockchain network ID */
      chainId: string;
      /** - The address of the receiver */
      receiver: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc4626GetErc4626MaxMintData;
  }

  /**
   * @description Returns the maximum amount of shares that can be redeemed in a single transaction.
   * @tags ERC4626
   * @name Erc4626GetErc4626MaxRedeem
   * @request GET:/erc4626/{account}/maxRedeem
   * @secure
   */
  export namespace Erc4626GetErc4626MaxRedeem {
    export type RequestParams = {
      /** - The account making the request */
      account: string;
    };
    export type RequestQuery = {
      /** - The ERC4626 vault contract address */
      address: string;
      /** - The blockchain network ID */
      chainId: string;
      /** - The address of the owner */
      owner: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc4626GetErc4626MaxRedeemData;
  }

  /**
   * @description Returns the maximum amount of assets that can be withdrawn in a single transaction.
   * @tags ERC4626
   * @name Erc4626GetErc4626MaxWithdraw
   * @request GET:/erc4626/{account}/maxWithdraw
   * @secure
   */
  export namespace Erc4626GetErc4626MaxWithdraw {
    export type RequestParams = {
      /** - The account making the request */
      account: string;
    };
    export type RequestQuery = {
      /** - The ERC4626 vault contract address */
      address: string;
      /** - The blockchain network ID */
      chainId: string;
      /** - The address of the owner */
      owner: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc4626GetErc4626MaxWithdrawData;
  }

  /**
   * @description Simulates the amount of shares that would be received for a deposit of assets.
   * @tags ERC4626
   * @name Erc4626GetErc4626PreviewDeposit
   * @request GET:/erc4626/{account}/previewDeposit
   * @secure
   */
  export namespace Erc4626GetErc4626PreviewDeposit {
    export type RequestParams = {
      /** - The account making the request */
      account: string;
    };
    export type RequestQuery = {
      /** - The ERC4626 vault contract address */
      address: string;
      /** - The amount of assets to deposit */
      assets: string;
      /** - The blockchain network ID */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc4626GetErc4626PreviewDepositData;
  }

  /**
   * @description Simulates the amount of assets needed for minting a specific amount of shares.
   * @tags ERC4626
   * @name Erc4626GetErc4626PreviewMint
   * @request GET:/erc4626/{account}/previewMint
   * @secure
   */
  export namespace Erc4626GetErc4626PreviewMint {
    export type RequestParams = {
      /** - The account making the request */
      account: string;
    };
    export type RequestQuery = {
      /** - The ERC4626 vault contract address */
      address: string;
      /** - The blockchain network ID */
      chainId: string;
      /** - The amount of shares to mint */
      shares: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc4626GetErc4626PreviewMintData;
  }

  /**
   * @description Simulates the amount of assets that would be received for redeeming shares.
   * @tags ERC4626
   * @name Erc4626GetErc4626PreviewRedeem
   * @request GET:/erc4626/{account}/previewRedeem
   * @secure
   */
  export namespace Erc4626GetErc4626PreviewRedeem {
    export type RequestParams = {
      /** - The account making the request */
      account: string;
    };
    export type RequestQuery = {
      /** - The ERC4626 vault contract address */
      address: string;
      /** - The blockchain network ID */
      chainId: string;
      /** - The amount of shares to redeem */
      shares: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc4626GetErc4626PreviewRedeemData;
  }

  /**
   * @description Simulates the amount of shares needed to withdraw a specific amount of assets.
   * @tags ERC4626
   * @name Erc4626GetErc4626PreviewWithdraw
   * @request GET:/erc4626/{account}/previewWithdraw
   * @secure
   */
  export namespace Erc4626GetErc4626PreviewWithdraw {
    export type RequestParams = {
      /** - The account making the request */
      account: string;
    };
    export type RequestQuery = {
      /** - The ERC4626 vault contract address */
      address: string;
      /** - The amount of assets to withdraw */
      assets: string;
      /** - The blockchain network ID */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc4626GetErc4626PreviewWithdrawData;
  }

  /**
   * @description Gets the total amount of underlying assets held by the vault.
   * @tags ERC4626
   * @name Erc4626GetErc4626TotalAssets
   * @request GET:/erc4626/{account}/totalAssets
   * @secure
   */
  export namespace Erc4626GetErc4626TotalAssets {
    export type RequestParams = {
      /** - The account making the request */
      account: string;
    };
    export type RequestQuery = {
      /** - The ERC4626 vault contract address */
      address: string;
      /** - The blockchain network ID */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc4626GetErc4626TotalAssetsData;
  }

  /**
   * @description Gets the total supply of shares.
   * @tags ERC4626
   * @name Erc4626GetErc4626TotalSupply
   * @request GET:/erc4626/{account}/totalSupply
   * @secure
   */
  export namespace Erc4626GetErc4626TotalSupply {
    export type RequestParams = {
      /** - The account making the request */
      account: string;
    };
    export type RequestQuery = {
      /** - The ERC4626 vault contract address */
      address: string;
      /** - The blockchain network ID */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc4626GetErc4626TotalSupplyData;
  }

  /**
   * @description Mints shares to the receiver by depositing exact amount of assets.
   * @tags ERC4626
   * @name Erc4626MintErc4626Shares
   * @request POST:/erc4626/{address}/mint
   * @secure
   */
  export namespace Erc4626MintErc4626Shares {
    export type RequestParams = {
      /** - The address of the receiver */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc4626MintErc4626SharesData;
  }

  /**
   * @description Redeems shares from owner and sends exact amount of assets to receiver.
   * @tags ERC4626
   * @name Erc4626RedeemErc4626Shares
   * @request POST:/erc4626/{address}/redeem
   * @secure
   */
  export namespace Erc4626RedeemErc4626Shares {
    export type RequestParams = {
      /** - The address of the receiver */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc4626RedeemErc4626SharesData;
  }

  /**
   * @description Transfers shares to a specified address.
   * @tags ERC4626
   * @name Erc4626TransferErc4626
   * @request POST:/erc4626/{address}/transfer
   * @secure
   */
  export namespace Erc4626TransferErc4626 {
    export type RequestParams = {
      /** - The address of the receiver */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc4626TransferErc4626Data;
  }

  /**
   * @description Transfers shares from one address to another.
   * @tags ERC4626
   * @name Erc4626TransferFromErc4626
   * @request POST:/erc4626/{address}/transferFrom
   * @secure
   */
  export namespace Erc4626TransferFromErc4626 {
    export type RequestParams = {
      /** - The address of the receiver */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc4626TransferFromErc4626Data;
  }

  /**
   * @description Withdraws assets from the vault to the receiver.
   * @tags ERC4626
   * @name Erc4626WithdrawFromErc4626
   * @request POST:/erc4626/{address}/withdraw
   * @secure
   */
  export namespace Erc4626WithdrawFromErc4626 {
    export type RequestParams = {
      /** - The address of the receiver */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      /** - The authorization token */
      Authorization: string;
    };
    export type ResponseBody = Erc4626WithdrawFromErc4626Data;
  }
}
