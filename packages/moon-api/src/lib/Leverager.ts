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
  GetAddressesProviderParams2,
  GetAddressesProviderResult,
  GetDefaultAdminRoleData,
  GetDefaultAdminRoleParams,
  GetLendingPoolData,
  GetLendingPoolParams,
  GetMinHfData,
  GetMinHfParams,
  GetRoleAdminData,
  GetRoleAdminParams,
  GetWethData,
  GetWethParams,
  GrantRoleData,
  HasRoleData,
  HasRoleParams,
  IsPausedParams2,
  IsPausedResult,
  LeverageErc20Data,
  LeverageNativeData,
  LeveragerInputBody,
  PauseData,
  RenounceRoleData,
  RevokeRoleData,
  SupportsInterfaceData,
  SupportsInterfaceParams,
  UnpauseData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Leverager<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Leverager
   * @name DeleverageErc20
   * @request POST:/leverager/{accountName}/deleverage-erc20
   * @secure
   */
  deleverageErc20 = (
    accountName: string,
    data: LeveragerInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<DeleverageErc20Data, any>({
      path: `/leverager/${accountName}/deleverage-erc20`,
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
   * @tags Leverager
   * @name DeleverageNative
   * @request POST:/leverager/{accountName}/deleverage-native
   * @secure
   */
  deleverageNative = (
    accountName: string,
    data: LeveragerInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<DeleverageNativeData, any>({
      path: `/leverager/${accountName}/deleverage-native`,
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
   * @tags Leverager
   * @name ExecuteOperation
   * @request POST:/leverager/{accountName}/execute-operation
   * @secure
   */
  executeOperation = (
    accountName: string,
    data: LeveragerInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ExecuteOperationData, any>({
      path: `/leverager/${accountName}/execute-operation`,
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
   * @tags Leverager
   * @name GetAddressesProvider
   * @request GET:/leverager/addresses-provider
   * @secure
   */
  getAddressesProvider = (
    query: GetAddressesProviderParams2,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAddressesProviderResult, any>({
      path: `/leverager/addresses-provider`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Leverager
   * @name GetDefaultAdminRole
   * @request GET:/leverager/default-admin-role
   * @secure
   */
  getDefaultAdminRole = (
    query: GetDefaultAdminRoleParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetDefaultAdminRoleData, any>({
      path: `/leverager/default-admin-role`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Leverager
   * @name GetLendingPool
   * @request GET:/leverager/lending-pool
   * @secure
   */
  getLendingPool = (query: GetLendingPoolParams, params: RequestParams = {}) =>
    this.http.request<GetLendingPoolData, any>({
      path: `/leverager/lending-pool`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Leverager
   * @name GetMinHf
   * @request GET:/leverager/min-hf
   * @secure
   */
  getMinHf = (query: GetMinHfParams, params: RequestParams = {}) =>
    this.http.request<GetMinHfData, any>({
      path: `/leverager/min-hf`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Leverager
   * @name GetRoleAdmin
   * @request GET:/leverager/role-admin
   * @secure
   */
  getRoleAdmin = (query: GetRoleAdminParams, params: RequestParams = {}) =>
    this.http.request<GetRoleAdminData, any>({
      path: `/leverager/role-admin`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Leverager
   * @name GetWeth
   * @request GET:/leverager/weth
   * @secure
   */
  getWeth = (query: GetWethParams, params: RequestParams = {}) =>
    this.http.request<GetWethData, any>({
      path: `/leverager/weth`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Leverager
   * @name GrantRole
   * @request POST:/leverager/{accountName}/grant-role
   * @secure
   */
  grantRole = (
    accountName: string,
    data: LeveragerInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<GrantRoleData, any>({
      path: `/leverager/${accountName}/grant-role`,
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
   * @tags Leverager
   * @name HasRole
   * @request GET:/leverager/has-role
   * @secure
   */
  hasRole = (query: HasRoleParams, params: RequestParams = {}) =>
    this.http.request<HasRoleData, any>({
      path: `/leverager/has-role`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Leverager
   * @name IsPaused
   * @request GET:/leverager/paused
   * @secure
   */
  isPaused = (query: IsPausedParams2, params: RequestParams = {}) =>
    this.http.request<IsPausedResult, any>({
      path: `/leverager/paused`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Leverager
   * @name LeverageErc20
   * @request POST:/leverager/{accountName}/leverage-erc20
   * @secure
   */
  leverageErc20 = (
    accountName: string,
    data: LeveragerInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LeverageErc20Data, any>({
      path: `/leverager/${accountName}/leverage-erc20`,
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
   * @tags Leverager
   * @name LeverageNative
   * @request POST:/leverager/{accountName}/leverage-native
   * @secure
   */
  leverageNative = (
    accountName: string,
    data: LeveragerInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LeverageNativeData, any>({
      path: `/leverager/${accountName}/leverage-native`,
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
   * @tags Leverager
   * @name Pause
   * @request POST:/leverager/{accountName}/pause
   * @secure
   */
  pause = (
    accountName: string,
    data: LeveragerInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<PauseData, any>({
      path: `/leverager/${accountName}/pause`,
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
   * @tags Leverager
   * @name RenounceRole
   * @request POST:/leverager/{accountName}/renounce-role
   * @secure
   */
  renounceRole = (
    accountName: string,
    data: LeveragerInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<RenounceRoleData, any>({
      path: `/leverager/${accountName}/renounce-role`,
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
   * @tags Leverager
   * @name RevokeRole
   * @request POST:/leverager/{accountName}/revoke-role
   * @secure
   */
  revokeRole = (
    accountName: string,
    data: LeveragerInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<RevokeRoleData, any>({
      path: `/leverager/${accountName}/revoke-role`,
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
   * @tags Leverager
   * @name SupportsInterface
   * @request GET:/leverager/supports-interface
   * @secure
   */
  supportsInterface = (
    query: SupportsInterfaceParams,
    params: RequestParams = {}
  ) =>
    this.http.request<SupportsInterfaceData, any>({
      path: `/leverager/supports-interface`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Leverager
   * @name Unpause
   * @request POST:/leverager/{accountName}/unpause
   * @secure
   */
  unpause = (
    accountName: string,
    data: LeveragerInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<UnpauseData, any>({
      path: `/leverager/${accountName}/unpause`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
