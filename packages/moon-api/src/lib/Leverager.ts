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
  LeveragerGetAddressesProviderParams,
  LeveragerGetDefaultAdminRoleData,
  LeveragerGetDefaultAdminRoleParams,
  LeveragerGetLendingPoolData,
  LeveragerGetLendingPoolParams,
  LeveragerGetMinHfData,
  LeveragerGetMinHfParams,
  LeveragerGetRoleAdminData,
  LeveragerGetRoleAdminParams,
  LeveragerGetWethData,
  LeveragerGetWethParams,
  LeveragerGrantRoleData,
  LeveragerHasRoleData,
  LeveragerHasRoleParams,
  LeveragerInputBody,
  LeveragerIsPausedData,
  LeveragerIsPausedParams,
  LeveragerLeverageErc20Data,
  LeveragerLeverageNativeData,
  LeveragerPauseData,
  LeveragerRenounceRoleData,
  LeveragerRevokeRoleData,
  LeveragerSupportsInterfaceData,
  LeveragerSupportsInterfaceParams,
  LeveragerUnpauseData,
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
   * @name LeveragerDeleverageErc20
   * @request POST:/leverager/{accountName}/deleverage-erc20
   * @secure
   */
  leveragerDeleverageErc20 = (
    accountName: string,
    data: LeveragerInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LeveragerDeleverageErc20Data, any>({
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
   * @name LeveragerDeleverageNative
   * @request POST:/leverager/{accountName}/deleverage-native
   * @secure
   */
  leveragerDeleverageNative = (
    accountName: string,
    data: LeveragerInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LeveragerDeleverageNativeData, any>({
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
   * @name LeveragerExecuteOperation
   * @request POST:/leverager/{accountName}/execute-operation
   * @secure
   */
  leveragerExecuteOperation = (
    accountName: string,
    data: LeveragerInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LeveragerExecuteOperationData, any>({
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
   * @name LeveragerGetAddressesProvider
   * @request GET:/leverager/addresses-provider
   * @secure
   */
  leveragerGetAddressesProvider = (
    query: LeveragerGetAddressesProviderParams,
    params: RequestParams = {}
  ) =>
    this.http.request<LeveragerGetAddressesProviderData, any>({
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
   * @name LeveragerGetDefaultAdminRole
   * @request GET:/leverager/default-admin-role
   * @secure
   */
  leveragerGetDefaultAdminRole = (
    query: LeveragerGetDefaultAdminRoleParams,
    params: RequestParams = {}
  ) =>
    this.http.request<LeveragerGetDefaultAdminRoleData, any>({
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
   * @name LeveragerGetLendingPool
   * @request GET:/leverager/lending-pool
   * @secure
   */
  leveragerGetLendingPool = (
    query: LeveragerGetLendingPoolParams,
    params: RequestParams = {}
  ) =>
    this.http.request<LeveragerGetLendingPoolData, any>({
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
   * @name LeveragerGetMinHf
   * @request GET:/leverager/min-hf
   * @secure
   */
  leveragerGetMinHf = (
    query: LeveragerGetMinHfParams,
    params: RequestParams = {}
  ) =>
    this.http.request<LeveragerGetMinHfData, any>({
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
   * @name LeveragerGetRoleAdmin
   * @request GET:/leverager/role-admin
   * @secure
   */
  leveragerGetRoleAdmin = (
    query: LeveragerGetRoleAdminParams,
    params: RequestParams = {}
  ) =>
    this.http.request<LeveragerGetRoleAdminData, any>({
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
   * @name LeveragerGetWeth
   * @request GET:/leverager/weth
   * @secure
   */
  leveragerGetWeth = (
    query: LeveragerGetWethParams,
    params: RequestParams = {}
  ) =>
    this.http.request<LeveragerGetWethData, any>({
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
   * @name LeveragerGrantRole
   * @request POST:/leverager/{accountName}/grant-role
   * @secure
   */
  leveragerGrantRole = (
    accountName: string,
    data: LeveragerInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LeveragerGrantRoleData, any>({
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
   * @name LeveragerHasRole
   * @request GET:/leverager/has-role
   * @secure
   */
  leveragerHasRole = (
    query: LeveragerHasRoleParams,
    params: RequestParams = {}
  ) =>
    this.http.request<LeveragerHasRoleData, any>({
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
   * @name LeveragerIsPaused
   * @request GET:/leverager/paused
   * @secure
   */
  leveragerIsPaused = (
    query: LeveragerIsPausedParams,
    params: RequestParams = {}
  ) =>
    this.http.request<LeveragerIsPausedData, any>({
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
   * @name LeveragerLeverageErc20
   * @request POST:/leverager/{accountName}/leverage-erc20
   * @secure
   */
  leveragerLeverageErc20 = (
    accountName: string,
    data: LeveragerInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LeveragerLeverageErc20Data, any>({
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
   * @name LeveragerLeverageNative
   * @request POST:/leverager/{accountName}/leverage-native
   * @secure
   */
  leveragerLeverageNative = (
    accountName: string,
    data: LeveragerInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LeveragerLeverageNativeData, any>({
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
   * @name LeveragerPause
   * @request POST:/leverager/{accountName}/pause
   * @secure
   */
  leveragerPause = (
    accountName: string,
    data: LeveragerInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LeveragerPauseData, any>({
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
   * @name LeveragerRenounceRole
   * @request POST:/leverager/{accountName}/renounce-role
   * @secure
   */
  leveragerRenounceRole = (
    accountName: string,
    data: LeveragerInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LeveragerRenounceRoleData, any>({
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
   * @name LeveragerRevokeRole
   * @request POST:/leverager/{accountName}/revoke-role
   * @secure
   */
  leveragerRevokeRole = (
    accountName: string,
    data: LeveragerInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LeveragerRevokeRoleData, any>({
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
   * @name LeveragerSupportsInterface
   * @request GET:/leverager/supports-interface
   * @secure
   */
  leveragerSupportsInterface = (
    query: LeveragerSupportsInterfaceParams,
    params: RequestParams = {}
  ) =>
    this.http.request<LeveragerSupportsInterfaceData, any>({
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
   * @name LeveragerUnpause
   * @request POST:/leverager/{accountName}/unpause
   * @secure
   */
  leveragerUnpause = (
    accountName: string,
    data: LeveragerInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LeveragerUnpauseData, any>({
      path: `/leverager/${accountName}/unpause`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
