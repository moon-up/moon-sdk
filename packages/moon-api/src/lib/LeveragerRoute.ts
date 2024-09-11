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
  DeleverageErc20Data,
  DeleverageNativeData,
  ExecuteOperationData,
  GetAddressesProviderResult,
  GetDefaultAdminRoleData,
  GetLendingPoolData,
  GetMinHfData,
  GetRoleAdminData,
  GetWethData,
  GrantRoleData,
  HasRoleData,
  IsPausedResult,
  LeverageErc20Data,
  LeverageNativeData,
  LeveragerInputBody,
  PauseData,
  RenounceRoleData,
  RevokeRoleData,
  SupportsInterfaceData,
  UnpauseData,
} from './data-contracts';

export namespace Leverager {
  /**
   * No description
   * @tags Leverager
   * @name DeleverageErc20
   * @request POST:/leverager/{accountName}/deleverage-erc20
   * @secure
   */
  export namespace DeleverageErc20 {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeveragerInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DeleverageErc20Data;
  }

  /**
   * No description
   * @tags Leverager
   * @name DeleverageNative
   * @request POST:/leverager/{accountName}/deleverage-native
   * @secure
   */
  export namespace DeleverageNative {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeveragerInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DeleverageNativeData;
  }

  /**
   * No description
   * @tags Leverager
   * @name ExecuteOperation
   * @request POST:/leverager/{accountName}/execute-operation
   * @secure
   */
  export namespace ExecuteOperation {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeveragerInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ExecuteOperationData;
  }

  /**
   * No description
   * @tags Leverager
   * @name GetAddressesProvider
   * @request GET:/leverager/addresses-provider
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
    export type ResponseBody = GetAddressesProviderResult;
  }

  /**
   * No description
   * @tags Leverager
   * @name GetDefaultAdminRole
   * @request GET:/leverager/default-admin-role
   * @secure
   */
  export namespace GetDefaultAdminRole {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetDefaultAdminRoleData;
  }

  /**
   * No description
   * @tags Leverager
   * @name GetLendingPool
   * @request GET:/leverager/lending-pool
   * @secure
   */
  export namespace GetLendingPool {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetLendingPoolData;
  }

  /**
   * No description
   * @tags Leverager
   * @name GetMinHf
   * @request GET:/leverager/min-hf
   * @secure
   */
  export namespace GetMinHf {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetMinHfData;
  }

  /**
   * No description
   * @tags Leverager
   * @name GetRoleAdmin
   * @request GET:/leverager/role-admin
   * @secure
   */
  export namespace GetRoleAdmin {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
      role: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetRoleAdminData;
  }

  /**
   * No description
   * @tags Leverager
   * @name GetWeth
   * @request GET:/leverager/weth
   * @secure
   */
  export namespace GetWeth {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetWethData;
  }

  /**
   * No description
   * @tags Leverager
   * @name GrantRole
   * @request POST:/leverager/{accountName}/grant-role
   * @secure
   */
  export namespace GrantRole {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeveragerInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GrantRoleData;
  }

  /**
   * No description
   * @tags Leverager
   * @name HasRole
   * @request GET:/leverager/has-role
   * @secure
   */
  export namespace HasRole {
    export type RequestParams = {};
    export type RequestQuery = {
      account: string;
      address: string;
      chainId: string;
      role: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = HasRoleData;
  }

  /**
   * No description
   * @tags Leverager
   * @name IsPaused
   * @request GET:/leverager/paused
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
    export type ResponseBody = IsPausedResult;
  }

  /**
   * No description
   * @tags Leverager
   * @name LeverageErc20
   * @request POST:/leverager/{accountName}/leverage-erc20
   * @secure
   */
  export namespace LeverageErc20 {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeveragerInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = LeverageErc20Data;
  }

  /**
   * No description
   * @tags Leverager
   * @name LeverageNative
   * @request POST:/leverager/{accountName}/leverage-native
   * @secure
   */
  export namespace LeverageNative {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeveragerInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = LeverageNativeData;
  }

  /**
   * No description
   * @tags Leverager
   * @name Pause
   * @request POST:/leverager/{accountName}/pause
   * @secure
   */
  export namespace Pause {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeveragerInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = PauseData;
  }

  /**
   * No description
   * @tags Leverager
   * @name RenounceRole
   * @request POST:/leverager/{accountName}/renounce-role
   * @secure
   */
  export namespace RenounceRole {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeveragerInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = RenounceRoleData;
  }

  /**
   * No description
   * @tags Leverager
   * @name RevokeRole
   * @request POST:/leverager/{accountName}/revoke-role
   * @secure
   */
  export namespace RevokeRole {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeveragerInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = RevokeRoleData;
  }

  /**
   * No description
   * @tags Leverager
   * @name SupportsInterface
   * @request GET:/leverager/supports-interface
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
    export type ResponseBody = SupportsInterfaceData;
  }

  /**
   * No description
   * @tags Leverager
   * @name Unpause
   * @request POST:/leverager/{accountName}/unpause
   * @secure
   */
  export namespace Unpause {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeveragerInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = UnpauseData;
  }
}
