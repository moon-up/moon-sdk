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
  LeveragerDeleverageErc20Data,
  LeveragerDeleverageNativeData,
  LeveragerExecuteOperationData,
  LeveragerGetAddressesProviderData,
  LeveragerGetDefaultAdminRoleData,
  LeveragerGetLendingPoolData,
  LeveragerGetMinHfData,
  LeveragerGetRoleAdminData,
  LeveragerGetWethData,
  LeveragerGrantRoleData,
  LeveragerHasRoleData,
  LeveragerInputBody,
  LeveragerIsPausedData,
  LeveragerLeverageErc20Data,
  LeveragerLeverageNativeData,
  LeveragerPauseData,
  LeveragerRenounceRoleData,
  LeveragerRevokeRoleData,
  LeveragerSupportsInterfaceData,
  LeveragerUnpauseData,
} from './data-contracts';

export namespace Leverager {
  /**
   * No description
   * @tags Leverager
   * @name LeveragerDeleverageErc20
   * @request POST:/leverager/{accountName}/deleverage-erc20
   * @secure
   */
  export namespace LeveragerDeleverageErc20 {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeveragerInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = LeveragerDeleverageErc20Data;
  }

  /**
   * No description
   * @tags Leverager
   * @name LeveragerDeleverageNative
   * @request POST:/leverager/{accountName}/deleverage-native
   * @secure
   */
  export namespace LeveragerDeleverageNative {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeveragerInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = LeveragerDeleverageNativeData;
  }

  /**
   * No description
   * @tags Leverager
   * @name LeveragerExecuteOperation
   * @request POST:/leverager/{accountName}/execute-operation
   * @secure
   */
  export namespace LeveragerExecuteOperation {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeveragerInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = LeveragerExecuteOperationData;
  }

  /**
   * No description
   * @tags Leverager
   * @name LeveragerGetAddressesProvider
   * @request GET:/leverager/addresses-provider
   * @secure
   */
  export namespace LeveragerGetAddressesProvider {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = LeveragerGetAddressesProviderData;
  }

  /**
   * No description
   * @tags Leverager
   * @name LeveragerGetDefaultAdminRole
   * @request GET:/leverager/default-admin-role
   * @secure
   */
  export namespace LeveragerGetDefaultAdminRole {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = LeveragerGetDefaultAdminRoleData;
  }

  /**
   * No description
   * @tags Leverager
   * @name LeveragerGetLendingPool
   * @request GET:/leverager/lending-pool
   * @secure
   */
  export namespace LeveragerGetLendingPool {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = LeveragerGetLendingPoolData;
  }

  /**
   * No description
   * @tags Leverager
   * @name LeveragerGetMinHf
   * @request GET:/leverager/min-hf
   * @secure
   */
  export namespace LeveragerGetMinHf {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = LeveragerGetMinHfData;
  }

  /**
   * No description
   * @tags Leverager
   * @name LeveragerGetRoleAdmin
   * @request GET:/leverager/role-admin
   * @secure
   */
  export namespace LeveragerGetRoleAdmin {
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
    export type ResponseBody = LeveragerGetRoleAdminData;
  }

  /**
   * No description
   * @tags Leverager
   * @name LeveragerGetWeth
   * @request GET:/leverager/weth
   * @secure
   */
  export namespace LeveragerGetWeth {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = LeveragerGetWethData;
  }

  /**
   * No description
   * @tags Leverager
   * @name LeveragerGrantRole
   * @request POST:/leverager/{accountName}/grant-role
   * @secure
   */
  export namespace LeveragerGrantRole {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeveragerInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = LeveragerGrantRoleData;
  }

  /**
   * No description
   * @tags Leverager
   * @name LeveragerHasRole
   * @request GET:/leverager/has-role
   * @secure
   */
  export namespace LeveragerHasRole {
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
    export type ResponseBody = LeveragerHasRoleData;
  }

  /**
   * No description
   * @tags Leverager
   * @name LeveragerIsPaused
   * @request GET:/leverager/paused
   * @secure
   */
  export namespace LeveragerIsPaused {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = LeveragerIsPausedData;
  }

  /**
   * No description
   * @tags Leverager
   * @name LeveragerLeverageErc20
   * @request POST:/leverager/{accountName}/leverage-erc20
   * @secure
   */
  export namespace LeveragerLeverageErc20 {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeveragerInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = LeveragerLeverageErc20Data;
  }

  /**
   * No description
   * @tags Leverager
   * @name LeveragerLeverageNative
   * @request POST:/leverager/{accountName}/leverage-native
   * @secure
   */
  export namespace LeveragerLeverageNative {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeveragerInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = LeveragerLeverageNativeData;
  }

  /**
   * No description
   * @tags Leverager
   * @name LeveragerPause
   * @request POST:/leverager/{accountName}/pause
   * @secure
   */
  export namespace LeveragerPause {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeveragerInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = LeveragerPauseData;
  }

  /**
   * No description
   * @tags Leverager
   * @name LeveragerRenounceRole
   * @request POST:/leverager/{accountName}/renounce-role
   * @secure
   */
  export namespace LeveragerRenounceRole {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeveragerInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = LeveragerRenounceRoleData;
  }

  /**
   * No description
   * @tags Leverager
   * @name LeveragerRevokeRole
   * @request POST:/leverager/{accountName}/revoke-role
   * @secure
   */
  export namespace LeveragerRevokeRole {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeveragerInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = LeveragerRevokeRoleData;
  }

  /**
   * No description
   * @tags Leverager
   * @name LeveragerSupportsInterface
   * @request GET:/leverager/supports-interface
   * @secure
   */
  export namespace LeveragerSupportsInterface {
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
    export type ResponseBody = LeveragerSupportsInterfaceData;
  }

  /**
   * No description
   * @tags Leverager
   * @name LeveragerUnpause
   * @request POST:/leverager/{accountName}/unpause
   * @secure
   */
  export namespace LeveragerUnpause {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeveragerInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = LeveragerUnpauseData;
  }
}
