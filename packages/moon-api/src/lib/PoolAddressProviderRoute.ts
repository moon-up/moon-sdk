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
  GetAclAdminData,
  GetAclManagerData,
  GetAddressData,
  GetMarketIdData,
  GetPoolConfiguratorData,
  GetPoolData,
  GetPriceOracleData,
  PoolAddressProviderInputBody,
  SetAclAdminData,
  SetAclManagerData,
  SetAddressData,
  SetMarketIdData,
  SetPoolConfiguratorImplData,
  SetPoolImplData,
} from './data-contracts';

export namespace PoolAddressProvider {
  /**
   * No description
   * @tags Pool Address Provider
   * @name GetAclAdmin
   * @request GET:/poolAddressProvider/{account}/getACLAdmin
   * @secure
   */
  export namespace GetAclAdmin {
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
    export type ResponseBody = GetAclAdminData;
  }

  /**
   * No description
   * @tags Pool Address Provider
   * @name GetAclManager
   * @request GET:/poolAddressProvider/{account}/getACLManager
   * @secure
   */
  export namespace GetAclManager {
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
    export type ResponseBody = GetAclManagerData;
  }

  /**
   * No description
   * @tags Pool Address Provider
   * @name GetAddress
   * @request GET:/poolAddressProvider/{account}/getAddress
   * @secure
   */
  export namespace GetAddress {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
      id: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetAddressData;
  }

  /**
   * No description
   * @tags Pool Address Provider
   * @name GetMarketId
   * @request GET:/poolAddressProvider/{account}/getMarketId
   * @secure
   */
  export namespace GetMarketId {
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
    export type ResponseBody = GetMarketIdData;
  }

  /**
   * No description
   * @tags Pool Address Provider
   * @name GetPool
   * @request GET:/poolAddressProvider/{account}/getPool
   * @secure
   */
  export namespace GetPool {
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
    export type ResponseBody = GetPoolData;
  }

  /**
   * No description
   * @tags Pool Address Provider
   * @name GetPoolConfigurator
   * @request GET:/poolAddressProvider/{account}/getPoolConfigurator
   * @secure
   */
  export namespace GetPoolConfigurator {
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
    export type ResponseBody = GetPoolConfiguratorData;
  }

  /**
   * No description
   * @tags Pool Address Provider
   * @name GetPriceOracle
   * @request GET:/poolAddressProvider/{account}/getPriceOracle
   * @secure
   */
  export namespace GetPriceOracle {
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
    export type ResponseBody = GetPriceOracleData;
  }

  /**
   * No description
   * @tags Pool Address Provider
   * @name SetAclAdmin
   * @request POST:/poolAddressProvider/{address}/setACLAdmin
   * @secure
   */
  export namespace SetAclAdmin {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PoolAddressProviderInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SetAclAdminData;
  }

  /**
   * No description
   * @tags Pool Address Provider
   * @name SetAclManager
   * @request POST:/poolAddressProvider/{address}/setACLManager
   * @secure
   */
  export namespace SetAclManager {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PoolAddressProviderInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SetAclManagerData;
  }

  /**
   * No description
   * @tags Pool Address Provider
   * @name SetAddress
   * @request POST:/poolAddressProvider/{address}/setAddress
   * @secure
   */
  export namespace SetAddress {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PoolAddressProviderInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SetAddressData;
  }

  /**
   * No description
   * @tags Pool Address Provider
   * @name SetMarketId
   * @request POST:/poolAddressProvider/{address}/setMarketId
   * @secure
   */
  export namespace SetMarketId {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PoolAddressProviderInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SetMarketIdData;
  }

  /**
   * No description
   * @tags Pool Address Provider
   * @name SetPoolConfiguratorImpl
   * @request POST:/poolAddressProvider/{address}/setPoolConfiguratorImpl
   * @secure
   */
  export namespace SetPoolConfiguratorImpl {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PoolAddressProviderInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SetPoolConfiguratorImplData;
  }

  /**
   * No description
   * @tags Pool Address Provider
   * @name SetPoolImpl
   * @request POST:/poolAddressProvider/{address}/setPoolImpl
   * @secure
   */
  export namespace SetPoolImpl {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PoolAddressProviderInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SetPoolImplData;
  }
}
