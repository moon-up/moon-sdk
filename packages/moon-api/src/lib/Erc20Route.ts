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
  ERC20InputBody,
  Erc20ApproveErc20TokenSpendingData,
  Erc20GetErc20TokenAllowanceData,
  Erc20GetErc20TokenBalanceData,
  Erc20GetErc20TokenDecimalsData,
  Erc20GetErc20TokenNameData,
  Erc20GetErc20TokenSymbolData,
  Erc20GetErc20TokenTotalSupplyData,
  Erc20TransferErc20TokenData,
  Erc20TransferFromErc20TokenData,
} from './data-contracts';

export namespace Erc20 {
  /**
   * @description Approves a specified address to spend tokens on behalf of the user.
   * @tags ERC20
   * @name Erc20ApproveErc20TokenSpending
   * @request POST:/erc20/{address}/approve
   * @secure
   */
  export namespace Erc20ApproveErc20TokenSpending {
    export type RequestParams = {
      /** - The address to be approved. */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ERC20InputBody;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = Erc20ApproveErc20TokenSpendingData;
  }

  /**
   * @description Retrieves the allowance of a specified ERC20 token for a given owner and spender.
   * @tags ERC20
   * @name Erc20GetErc20TokenAllowance
   * @request GET:/erc20/{account}/allowance
   * @secure
   */
  export namespace Erc20GetErc20TokenAllowance {
    export type RequestParams = {
      /** - The account address making the request. */
      account: string;
    };
    export type RequestQuery = {
      /** - The contract address of the ERC20 token. */
      address: string;
      /** - The ID of the blockchain network. */
      chainId: string;
      /** - The address of the token owner. */
      owner: string;
      /** - The address of the spender. */
      spender: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = Erc20GetErc20TokenAllowanceData;
  }

  /**
   * @description Retrieves the balance of a specified ERC20 token for a given account.
   * @tags ERC20
   * @name Erc20GetErc20TokenBalance
   * @request GET:/erc20/{account}/balanceOf
   * @secure
   */
  export namespace Erc20GetErc20TokenBalance {
    export type RequestParams = {
      /** - The address of the account to retrieve the balance for. */
      account: string;
    };
    export type RequestQuery = {
      /** - The address of the ERC20 token contract. */
      address: string;
      /** - The ID of the blockchain network. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token for accessing the ERC20 instance. */
      Authorization: string;
    };
    export type ResponseBody = Erc20GetErc20TokenBalanceData;
  }

  /**
   * @description Retrieves the number of decimals for the provided ERC20 token.
   * @tags ERC20
   * @name Erc20GetErc20TokenDecimals
   * @request GET:/erc20/{account}/decimals
   * @secure
   */
  export namespace Erc20GetErc20TokenDecimals {
    export type RequestParams = {
      /** - The account address for the ERC20 token. */
      account: string;
    };
    export type RequestQuery = {
      /** - The contract address for the ERC20 token. */
      address: string;
      /** - The chain ID for the ERC20 token. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token for accessing the ERC20 token. */
      Authorization: string;
    };
    export type ResponseBody = Erc20GetErc20TokenDecimalsData;
  }

  /**
   * @description Retrieves the name of an ERC20 token.
   * @tags ERC20
   * @name Erc20GetErc20TokenName
   * @request GET:/erc20/{account}/name
   * @secure
   */
  export namespace Erc20GetErc20TokenName {
    export type RequestParams = {
      /** - The account address. */
      account: string;
    };
    export type RequestQuery = {
      /** - The ERC20 token contract address. */
      address: string;
      /** - The blockchain chain ID. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = Erc20GetErc20TokenNameData;
  }

  /**
   * @description Retrieves the symbol of an ERC20 token.
   * @tags ERC20
   * @name Erc20GetErc20TokenSymbol
   * @request GET:/erc20/{account}/symbol
   * @secure
   */
  export namespace Erc20GetErc20TokenSymbol {
    export type RequestParams = {
      /** - The account address. */
      account: string;
    };
    export type RequestQuery = {
      /** - The address of the ERC20 token contract. */
      address: string;
      /** - The ID of the blockchain network. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = Erc20GetErc20TokenSymbolData;
  }

  /**
   * @description Retrieves the total supply of an ERC20 token.
   * @tags ERC20
   * @name Erc20GetErc20TokenTotalSupply
   * @request GET:/erc20/{account}/totalSupply
   * @secure
   */
  export namespace Erc20GetErc20TokenTotalSupply {
    export type RequestParams = {
      /** - The account address. */
      account: string;
    };
    export type RequestQuery = {
      /** - The ERC20 token contract address. */
      address: string;
      /** - The blockchain chain ID. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = Erc20GetErc20TokenTotalSupplyData;
  }

  /**
   * @description Transfers ERC20 tokens to a specified address.
   * @tags ERC20
   * @name Erc20TransferErc20Token
   * @request POST:/erc20/{address}/transfer
   * @secure
   */
  export namespace Erc20TransferErc20Token {
    export type RequestParams = {
      /** - The address to transfer tokens to. */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ERC20InputBody;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = Erc20TransferErc20TokenData;
  }

  /**
   * @description Transfers tokens from one address to another.
   * @tags ERC20
   * @name Erc20TransferFromErc20Token
   * @request POST:/erc20/{address}/transferFrom
   * @secure
   */
  export namespace Erc20TransferFromErc20Token {
    export type RequestParams = {
      /** - The address from which the tokens will be transferred. */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ERC20InputBody;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = Erc20TransferFromErc20TokenData;
  }
}
