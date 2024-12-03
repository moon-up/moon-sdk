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
  AAVEv3RewardsInputBody,
  AavEv3IncentiveDataProviderGetFullReservesDataData,
  AavEv3IncentiveDataProviderGetFullReservesDataParams,
  AavEv3IncentiveDataProviderGetReservesDataData,
  AavEv3IncentiveDataProviderGetReservesDataParams,
  AavEv3IncentiveDataProviderGetUserReservesDataData,
  AavEv3IncentiveDataProviderGetUserReservesDataParams,
  AavEv3RewardsClaimAllRewardsData,
  AavEv3RewardsClaimAllRewardsOnBehalfData,
  AavEv3RewardsClaimAllRewardsToSelfData,
  AavEv3RewardsClaimRewardsData,
  AavEv3RewardsClaimRewardsOnBehalfData,
  AavEv3RewardsClaimRewardsToSelfData,
  AavEv3RewardsGetRewardsByAssetData,
  AavEv3RewardsGetRewardsByAssetParams,
  AavEv3RewardsGetRewardsDataData,
  AavEv3RewardsGetRewardsDataParams,
  AavEv3RewardsGetUserRewardsData,
  AavEv3RewardsGetUserRewardsParams,
  AavePoolInputBody,
  AaveV3UiPoolDataProviderEthCurrencyUnitData,
  AaveV3UiPoolDataProviderEthCurrencyUnitParams,
  AaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorData,
  AaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorParams,
  AaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorData,
  AaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorParams,
  AaveV3UiPoolDataProviderReservesListData,
  AaveV3UiPoolDataProviderReservesListParams,
  AaveV3UiPoolDataProviderUserReservesDataData,
  AaveV3UiPoolDataProviderUserReservesDataParams,
  AaveV3WalletBalanceOfData,
  AaveV3WalletBalanceOfParams,
  AaveV3WalletBatchBalanceOfData,
  AaveV3WalletBatchBalanceOfParams,
  AaveV3WalletUserWalletBalancesData,
  AaveV3WalletUserWalletBalancesParams,
  Aavev3PoolAddressProviderGetAclAdminData,
  Aavev3PoolAddressProviderGetAclAdminParams,
  Aavev3PoolAddressProviderGetAclManagerData,
  Aavev3PoolAddressProviderGetAclManagerParams,
  Aavev3PoolAddressProviderGetAddressData,
  Aavev3PoolAddressProviderGetAddressParams,
  Aavev3PoolAddressProviderGetMarketIdData,
  Aavev3PoolAddressProviderGetMarketIdParams,
  Aavev3PoolAddressProviderGetPoolConfiguratorData,
  Aavev3PoolAddressProviderGetPoolConfiguratorParams,
  Aavev3PoolAddressProviderGetPoolData,
  Aavev3PoolAddressProviderGetPoolParams,
  Aavev3PoolAddressProviderGetPriceOracleData,
  Aavev3PoolAddressProviderGetPriceOracleParams,
  Aavev3PoolAddressProviderRegistryGetATokenTotalSupplyData,
  Aavev3PoolAddressProviderRegistryGetATokenTotalSupplyParams,
  Aavev3PoolAddressProviderRegistryGetAddressesProviderData,
  Aavev3PoolAddressProviderRegistryGetAddressesProviderParams,
  Aavev3PoolAddressProviderRegistryGetAllATokensData,
  Aavev3PoolAddressProviderRegistryGetAllATokensParams,
  Aavev3PoolAddressProviderRegistryGetDebtCeilingData,
  Aavev3PoolAddressProviderRegistryGetDebtCeilingParams,
  Aavev3PoolAddressProviderSetAclAdminData,
  Aavev3PoolAddressProviderSetAclManagerData,
  Aavev3PoolAddressProviderSetAddressData,
  Aavev3PoolAddressProviderSetMarketIdData,
  Aavev3PoolAddressProviderSetPoolConfiguratorImplData,
  Aavev3PoolAddressProviderSetPoolImplData,
  Aavev3PoolBorrowData,
  Aavev3PoolGetReserveDataData,
  Aavev3PoolGetReserveDataParams,
  Aavev3PoolGetUserAccountDataData,
  Aavev3PoolGetUserAccountDataParams,
  Aavev3PoolLiquidationCallData,
  Aavev3PoolRepayData,
  Aavev3PoolSetUserUseReserveAsCollateralData,
  Aavev3PoolSupplyData,
  Aavev3PoolWithdrawData,
  GetAllReservesTokensData,
  GetAllReservesTokensParams,
  GetReservesDataData,
  GetReservesDataParams,
  PoolAddressProviderInputBody,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Aave<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Retrieves full incentive data for all reserves and user positions
   *
   * @tags AAVE v3 UI Incentive Data Provider
   * @name AavEv3IncentiveDataProviderGetFullReservesData
   * @request GET:/aave/v3/incentives/fullReservesIncentiveData
   * @secure
   */
  aavEv3IncentiveDataProviderGetFullReservesData = (
    query: AavEv3IncentiveDataProviderGetFullReservesDataParams,
    params: RequestParams = {}
  ) =>
    this.http.request<AavEv3IncentiveDataProviderGetFullReservesDataData, any>({
      path: `/aave/v3/incentives/fullReservesIncentiveData`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves incentive data for all reserves in the pool
   *
   * @tags AAVE v3 UI Incentive Data Provider
   * @name AavEv3IncentiveDataProviderGetReservesData
   * @request GET:/aave/v3/incentives/reservesIncentivesData
   * @secure
   */
  aavEv3IncentiveDataProviderGetReservesData = (
    query: AavEv3IncentiveDataProviderGetReservesDataParams,
    params: RequestParams = {}
  ) =>
    this.http.request<AavEv3IncentiveDataProviderGetReservesDataData, any>({
      path: `/aave/v3/incentives/reservesIncentivesData`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves incentive data for a user's positions in all reserves
   *
   * @tags AAVE v3 UI Incentive Data Provider
   * @name AavEv3IncentiveDataProviderGetUserReservesData
   * @request GET:/aave/v3/incentives/userReservesIncentivesData
   * @secure
   */
  aavEv3IncentiveDataProviderGetUserReservesData = (
    query: AavEv3IncentiveDataProviderGetUserReservesDataParams,
    params: RequestParams = {}
  ) =>
    this.http.request<AavEv3IncentiveDataProviderGetUserReservesDataData, any>({
      path: `/aave/v3/incentives/userReservesIncentivesData`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the ACL (Access Control List) admin address for a given account.
   *
   * @tags Pool Address Provider
   * @name Aavev3PoolAddressProviderGetAclAdmin
   * @request GET:/aave/v3/poolAddressProvider/{account}/getACLAdmin
   * @secure
   */
  aavev3PoolAddressProviderGetAclAdmin = (
    { account, ...query }: Aavev3PoolAddressProviderGetAclAdminParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Aavev3PoolAddressProviderGetAclAdminData, any>({
      path: `/aave/v3/poolAddressProvider/${account}/getACLAdmin`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the ACL Manager address from the Pool Address Provider.
   *
   * @tags Pool Address Provider
   * @name Aavev3PoolAddressProviderGetAclManager
   * @request GET:/aave/v3/poolAddressProvider/{account}/getACLManager
   * @secure
   */
  aavev3PoolAddressProviderGetAclManager = (
    { account, ...query }: Aavev3PoolAddressProviderGetAclManagerParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Aavev3PoolAddressProviderGetAclManagerData, any>({
      path: `/aave/v3/poolAddressProvider/${account}/getACLManager`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves an address from the Pool Address Provider.
   *
   * @tags Pool Address Provider
   * @name Aavev3PoolAddressProviderGetAddress
   * @request GET:/aave/v3/poolAddressProvider/{account}/getAddress
   * @secure
   */
  aavev3PoolAddressProviderGetAddress = (
    { account, ...query }: Aavev3PoolAddressProviderGetAddressParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Aavev3PoolAddressProviderGetAddressData, any>({
      path: `/aave/v3/poolAddressProvider/${account}/getAddress`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the market ID from the Pool Address Provider.
   *
   * @tags Pool Address Provider
   * @name Aavev3PoolAddressProviderGetMarketId
   * @request GET:/aave/v3/poolAddressProvider/{account}/getMarketId
   * @secure
   */
  aavev3PoolAddressProviderGetMarketId = (
    { account, ...query }: Aavev3PoolAddressProviderGetMarketIdParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Aavev3PoolAddressProviderGetMarketIdData, any>({
      path: `/aave/v3/poolAddressProvider/${account}/getMarketId`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the pool address from the Aave protocol.
   *
   * @tags Pool Address Provider
   * @name Aavev3PoolAddressProviderGetPool
   * @request GET:/aave/v3/poolAddressProvider/{account}/getPool
   * @secure
   */
  aavev3PoolAddressProviderGetPool = (
    { account, ...query }: Aavev3PoolAddressProviderGetPoolParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Aavev3PoolAddressProviderGetPoolData, any>({
      path: `/aave/v3/poolAddressProvider/${account}/getPool`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the pool configurator for a given account.
   *
   * @tags Pool Address Provider
   * @name Aavev3PoolAddressProviderGetPoolConfigurator
   * @request GET:/aave/v3/poolAddressProvider/{account}/getPoolConfigurator
   * @secure
   */
  aavev3PoolAddressProviderGetPoolConfigurator = (
    { account, ...query }: Aavev3PoolAddressProviderGetPoolConfiguratorParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Aavev3PoolAddressProviderGetPoolConfiguratorData, any>({
      path: `/aave/v3/poolAddressProvider/${account}/getPoolConfigurator`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the price oracle address from the Aave pool address provider.
   *
   * @tags Pool Address Provider
   * @name Aavev3PoolAddressProviderGetPriceOracle
   * @request GET:/aave/v3/poolAddressProvider/{account}/getPriceOracle
   * @secure
   */
  aavev3PoolAddressProviderGetPriceOracle = (
    { account, ...query }: Aavev3PoolAddressProviderGetPriceOracleParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Aavev3PoolAddressProviderGetPriceOracleData, any>({
      path: `/aave/v3/poolAddressProvider/${account}/getPriceOracle`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the addresses provider from the Aave V3 Pool Address Provider Registry.
   *
   * @tags PoolAddressProviderRegistry
   * @name Aavev3PoolAddressProviderRegistryGetAddressesProvider
   * @request GET:/aave/v3/poolAddressProviderRegistry/{account}/getAddressesProvider
   * @secure
   */
  aavev3PoolAddressProviderRegistryGetAddressesProvider = (
    {
      account,
      ...query
    }: Aavev3PoolAddressProviderRegistryGetAddressesProviderParams,
    params: RequestParams = {}
  ) =>
    this.http.request<
      Aavev3PoolAddressProviderRegistryGetAddressesProviderData,
      any
    >({
      path: `/aave/v3/poolAddressProviderRegistry/${account}/getAddressesProvider`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves all ATokens associated with the specified account.
   *
   * @tags PoolAddressProviderRegistry
   * @name Aavev3PoolAddressProviderRegistryGetAllATokens
   * @request GET:/aave/v3/poolAddressProviderRegistry/{account}/getAllATokens
   * @secure
   */
  aavev3PoolAddressProviderRegistryGetAllATokens = (
    { account, ...query }: Aavev3PoolAddressProviderRegistryGetAllATokensParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Aavev3PoolAddressProviderRegistryGetAllATokensData, any>({
      path: `/aave/v3/poolAddressProviderRegistry/${account}/getAllATokens`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the total supply of a specific AToken.
   *
   * @tags PoolAddressProviderRegistry
   * @name Aavev3PoolAddressProviderRegistryGetATokenTotalSupply
   * @request GET:/aave/v3/poolAddressProviderRegistry/{account}/getATokenTotalSupply
   * @secure
   */
  aavev3PoolAddressProviderRegistryGetATokenTotalSupply = (
    {
      account,
      ...query
    }: Aavev3PoolAddressProviderRegistryGetATokenTotalSupplyParams,
    params: RequestParams = {}
  ) =>
    this.http.request<
      Aavev3PoolAddressProviderRegistryGetATokenTotalSupplyData,
      any
    >({
      path: `/aave/v3/poolAddressProviderRegistry/${account}/getATokenTotalSupply`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the debt ceiling for a specified asset from the Aave V3 Pool Address Provider Registry.
   *
   * @tags PoolAddressProviderRegistry
   * @name Aavev3PoolAddressProviderRegistryGetDebtCeiling
   * @request GET:/aave/v3/poolAddressProviderRegistry/{account}/getDebtCeiling
   * @secure
   */
  aavev3PoolAddressProviderRegistryGetDebtCeiling = (
    {
      account,
      ...query
    }: Aavev3PoolAddressProviderRegistryGetDebtCeilingParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Aavev3PoolAddressProviderRegistryGetDebtCeilingData, any>(
      {
        path: `/aave/v3/poolAddressProviderRegistry/${account}/getDebtCeiling`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }
    );
  /**
   * @description Sets the ACL (Access Control List) admin for the specified address.
   *
   * @tags Pool Address Provider
   * @name Aavev3PoolAddressProviderSetAclAdmin
   * @request POST:/aave/v3/poolAddressProvider/{address}/setACLAdmin
   * @secure
   */
  aavev3PoolAddressProviderSetAclAdmin = (
    address: string,
    data: PoolAddressProviderInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Aavev3PoolAddressProviderSetAclAdminData, any>({
      path: `/aave/v3/poolAddressProvider/${address}/setACLAdmin`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the ACL Manager for the specified pool address provider.
   *
   * @tags Pool Address Provider
   * @name Aavev3PoolAddressProviderSetAclManager
   * @request POST:/aave/v3/poolAddressProvider/{address}/setACLManager
   * @secure
   */
  aavev3PoolAddressProviderSetAclManager = (
    address: string,
    data: PoolAddressProviderInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Aavev3PoolAddressProviderSetAclManagerData, any>({
      path: `/aave/v3/poolAddressProvider/${address}/setACLManager`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the address for the Pool Address Provider.
   *
   * @tags Pool Address Provider
   * @name Aavev3PoolAddressProviderSetAddress
   * @request POST:/aave/v3/poolAddressProvider/{address}/setAddress
   * @secure
   */
  aavev3PoolAddressProviderSetAddress = (
    address: string,
    data: PoolAddressProviderInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Aavev3PoolAddressProviderSetAddressData, any>({
      path: `/aave/v3/poolAddressProvider/${address}/setAddress`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the market ID for the given pool address provider.
   *
   * @tags Pool Address Provider
   * @name Aavev3PoolAddressProviderSetMarketId
   * @request POST:/aave/v3/poolAddressProvider/{address}/setMarketId
   * @secure
   */
  aavev3PoolAddressProviderSetMarketId = (
    address: string,
    data: PoolAddressProviderInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Aavev3PoolAddressProviderSetMarketIdData, any>({
      path: `/aave/v3/poolAddressProvider/${address}/setMarketId`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the Pool Configurator implementation for the given address.
   *
   * @tags Pool Address Provider
   * @name Aavev3PoolAddressProviderSetPoolConfiguratorImpl
   * @request POST:/aave/v3/poolAddressProvider/{address}/setPoolConfiguratorImpl
   * @secure
   */
  aavev3PoolAddressProviderSetPoolConfiguratorImpl = (
    address: string,
    data: PoolAddressProviderInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<
      Aavev3PoolAddressProviderSetPoolConfiguratorImplData,
      any
    >({
      path: `/aave/v3/poolAddressProvider/${address}/setPoolConfiguratorImpl`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the pool implementation address for the given address.
   *
   * @tags Pool Address Provider
   * @name Aavev3PoolAddressProviderSetPoolImpl
   * @request POST:/aave/v3/poolAddressProvider/{address}/setPoolImpl
   * @secure
   */
  aavev3PoolAddressProviderSetPoolImpl = (
    address: string,
    data: PoolAddressProviderInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Aavev3PoolAddressProviderSetPoolImplData, any>({
      path: `/aave/v3/poolAddressProvider/${address}/setPoolImpl`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Borrows assets from the Aave pool.
   *
   * @tags AAVEv3 Pool
   * @name Aavev3PoolBorrow
   * @request POST:/aave/v3/pool/{address}/borrow
   * @secure
   */
  aavev3PoolBorrow = (
    address: string,
    data: AavePoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Aavev3PoolBorrowData, any>({
      path: `/aave/v3/pool/${address}/borrow`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves reserve data for a specific asset from the Aave pool.
   *
   * @tags AAVEv3 Pool
   * @name Aavev3PoolGetReserveData
   * @request GET:/aave/v3/pool/{account}/getReserveData
   * @secure
   */
  aavev3PoolGetReserveData = (
    { account, ...query }: Aavev3PoolGetReserveDataParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Aavev3PoolGetReserveDataData, any>({
      path: `/aave/v3/pool/${account}/getReserveData`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves user account data from the Aave pool.
   *
   * @tags AAVEv3 Pool
   * @name Aavev3PoolGetUserAccountData
   * @request GET:/aave/v3/pool/{account}/getUserAccountData
   * @secure
   */
  aavev3PoolGetUserAccountData = (
    { account, ...query }: Aavev3PoolGetUserAccountDataParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Aavev3PoolGetUserAccountDataData, any>({
      path: `/aave/v3/pool/${account}/getUserAccountData`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Handles the liquidation call to the Aave pool.
   *
   * @tags AAVEv3 Pool
   * @name Aavev3PoolLiquidationCall
   * @request POST:/aave/v3/pool/{address}/liquidationCall
   * @secure
   */
  aavev3PoolLiquidationCall = (
    address: string,
    data: AavePoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Aavev3PoolLiquidationCallData, any>({
      path: `/aave/v3/pool/${address}/liquidationCall`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Repays a loan on the Aave protocol.
   *
   * @tags AAVEv3 Pool
   * @name Aavev3PoolRepay
   * @request POST:/aave/v3/pool/{address}/repay
   * @secure
   */
  aavev3PoolRepay = (
    address: string,
    data: AavePoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Aavev3PoolRepayData, any>({
      path: `/aave/v3/pool/${address}/repay`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the user's reserve as collateral in the Aave pool.
   *
   * @tags AAVEv3 Pool
   * @name Aavev3PoolSetUserUseReserveAsCollateral
   * @request POST:/aave/v3/pool/{address}/setUserUseReserveAsCollateral
   * @secure
   */
  aavev3PoolSetUserUseReserveAsCollateral = (
    address: string,
    data: AavePoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Aavev3PoolSetUserUseReserveAsCollateralData, any>({
      path: `/aave/v3/pool/${address}/setUserUseReserveAsCollateral`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Supplies assets to the Aave pool.
   *
   * @tags AAVEv3 Pool
   * @name Aavev3PoolSupply
   * @request POST:/aave/v3/pool/{address}/supply
   * @secure
   */
  aavev3PoolSupply = (
    address: string,
    data: AavePoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Aavev3PoolSupplyData, any>({
      path: `/aave/v3/pool/${address}/supply`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Withdraws assets from the Aave pool.
   *
   * @tags AAVEv3 Pool
   * @name Aavev3PoolWithdraw
   * @request POST:/aave/v3/pool/{address}/withdraw
   * @secure
   */
  aavev3PoolWithdraw = (
    address: string,
    data: AavePoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<Aavev3PoolWithdrawData, any>({
      path: `/aave/v3/pool/${address}/withdraw`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Claims all available rewards for the specified assets
   *
   * @tags AAVEv3Rewards
   * @name AavEv3RewardsClaimAllRewards
   * @request POST:/aave/v3/rewards/{address}/claimAllRewards
   * @secure
   */
  aavEv3RewardsClaimAllRewards = (
    address: string,
    data: AAVEv3RewardsInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<AavEv3RewardsClaimAllRewardsData, any>({
      path: `/aave/v3/rewards/${address}/claimAllRewards`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Claims all rewards on behalf of another address
   *
   * @tags AAVEv3Rewards
   * @name AavEv3RewardsClaimAllRewardsOnBehalf
   * @request POST:/aave/v3/rewards/{address}/claimAllRewardsOnBehalf
   * @secure
   */
  aavEv3RewardsClaimAllRewardsOnBehalf = (
    address: string,
    data: AAVEv3RewardsInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<AavEv3RewardsClaimAllRewardsOnBehalfData, any>({
      path: `/aave/v3/rewards/${address}/claimAllRewardsOnBehalf`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Claims all rewards to the calling address
   *
   * @tags AAVEv3Rewards
   * @name AavEv3RewardsClaimAllRewardsToSelf
   * @request POST:/aave/v3/rewards/{address}/claimAllRewardsToSelf
   * @secure
   */
  aavEv3RewardsClaimAllRewardsToSelf = (
    address: string,
    data: AAVEv3RewardsInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<AavEv3RewardsClaimAllRewardsToSelfData, any>({
      path: `/aave/v3/rewards/${address}/claimAllRewardsToSelf`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Claims rewards for the specified assets and rewards
   *
   * @tags AAVEv3Rewards
   * @name AavEv3RewardsClaimRewards
   * @request POST:/aave/v3/rewards/{address}/claimRewards
   * @secure
   */
  aavEv3RewardsClaimRewards = (
    address: string,
    data: AAVEv3RewardsInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<AavEv3RewardsClaimRewardsData, any>({
      path: `/aave/v3/rewards/${address}/claimRewards`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Claims rewards on behalf of another address
   *
   * @tags AAVEv3Rewards
   * @name AavEv3RewardsClaimRewardsOnBehalf
   * @request POST:/aave/v3/rewards/{address}/claimRewardsOnBehalf
   * @secure
   */
  aavEv3RewardsClaimRewardsOnBehalf = (
    address: string,
    data: AAVEv3RewardsInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<AavEv3RewardsClaimRewardsOnBehalfData, any>({
      path: `/aave/v3/rewards/${address}/claimRewardsOnBehalf`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Claims rewards to the calling address
   *
   * @tags AAVEv3Rewards
   * @name AavEv3RewardsClaimRewardsToSelf
   * @request POST:/aave/v3/rewards/{address}/claimRewardsToSelf
   * @secure
   */
  aavEv3RewardsClaimRewardsToSelf = (
    address: string,
    data: AAVEv3RewardsInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<AavEv3RewardsClaimRewardsToSelfData, any>({
      path: `/aave/v3/rewards/${address}/claimRewardsToSelf`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves all rewards for a specific asset
   *
   * @tags AAVEv3Rewards
   * @name AavEv3RewardsGetRewardsByAsset
   * @request GET:/aave/v3/rewards/{account}/rewardsByAsset
   * @secure
   */
  aavEv3RewardsGetRewardsByAsset = (
    { account, ...query }: AavEv3RewardsGetRewardsByAssetParams,
    params: RequestParams = {}
  ) =>
    this.http.request<AavEv3RewardsGetRewardsByAssetData, any>({
      path: `/aave/v3/rewards/${account}/rewardsByAsset`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves rewards configuration data for an asset
   *
   * @tags AAVEv3Rewards
   * @name AavEv3RewardsGetRewardsData
   * @request GET:/aave/v3/rewards/{account}/rewardsData
   * @secure
   */
  aavEv3RewardsGetRewardsData = (
    { account, ...query }: AavEv3RewardsGetRewardsDataParams,
    params: RequestParams = {}
  ) =>
    this.http.request<AavEv3RewardsGetRewardsDataData, any>({
      path: `/aave/v3/rewards/${account}/rewardsData`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Gets reward data for a specific user
   *
   * @tags AAVEv3Rewards
   * @name AavEv3RewardsGetUserRewards
   * @request GET:/aave/v3/rewards/{account}/userRewards
   * @secure
   */
  aavEv3RewardsGetUserRewards = (
    { account, ...query }: AavEv3RewardsGetUserRewardsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<AavEv3RewardsGetUserRewardsData, any>({
      path: `/aave/v3/rewards/${account}/userRewards`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the ETH currency unit from the AAVE V3 UI Pool Data Provider.
   *
   * @tags AAVE v3 UI Pool Data Provider
   * @name AaveV3UiPoolDataProviderEthCurrencyUnit
   * @request GET:/aave/v3/pool-data/eth-currency-unit
   * @secure
   */
  aaveV3UiPoolDataProviderEthCurrencyUnit = (
    query: AaveV3UiPoolDataProviderEthCurrencyUnitParams,
    params: RequestParams = {}
  ) =>
    this.http.request<AaveV3UiPoolDataProviderEthCurrencyUnitData, any>({
      path: `/aave/v3/pool-data/eth-currency-unit`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the market reference currency price in USD using the proxy aggregator.
   *
   * @tags AAVE v3 UI Pool Data Provider
   * @name AaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregator
   * @request GET:/aave/v3/pool-data/market-reference-currency-price-in-usd-proxy-aggregator
   * @secure
   */
  aaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregator = (
    query: AaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorParams,
    params: RequestParams = {}
  ) =>
    this.http.request<
      AaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorData,
      any
    >({
      path: `/aave/v3/pool-data/market-reference-currency-price-in-usd-proxy-aggregator`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the network base token price in USD using the proxy aggregator.
   *
   * @tags AAVE v3 UI Pool Data Provider
   * @name AaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregator
   * @request GET:/aave/v3/pool-data/network-base-token-price-in-usd-proxy-aggregator
   * @secure
   */
  aaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregator = (
    query: AaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorParams,
    params: RequestParams = {}
  ) =>
    this.http.request<
      AaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorData,
      any
    >({
      path: `/aave/v3/pool-data/network-base-token-price-in-usd-proxy-aggregator`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the list of reserves from the AAVE V3 UI Pool Data Provider.
   *
   * @tags AAVE v3 UI Pool Data Provider
   * @name AaveV3UiPoolDataProviderReservesList
   * @request GET:/aave/v3/pool-data/reserves-list
   * @secure
   */
  aaveV3UiPoolDataProviderReservesList = (
    query: AaveV3UiPoolDataProviderReservesListParams,
    params: RequestParams = {}
  ) =>
    this.http.request<AaveV3UiPoolDataProviderReservesListData, any>({
      path: `/aave/v3/pool-data/reserves-list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the user's reserve data from the AAVE v3 UI Pool Data Provider.
   *
   * @tags AAVE v3 UI Pool Data Provider
   * @name AaveV3UiPoolDataProviderUserReservesData
   * @request GET:/aave/v3/pool-data/user-reserves-data
   * @secure
   */
  aaveV3UiPoolDataProviderUserReservesData = (
    query: AaveV3UiPoolDataProviderUserReservesDataParams,
    params: RequestParams = {}
  ) =>
    this.http.request<AaveV3UiPoolDataProviderUserReservesDataData, any>({
      path: `/aave/v3/pool-data/user-reserves-data`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the balance of a specific token for a user from the AAVE v3 Wallet Balance Provider.
   *
   * @tags AAVE v3 Wallet Balance Provider
   * @name AaveV3WalletBalanceOf
   * @request GET:/aave/v3/wallet-balance/balance-of
   * @secure
   */
  aaveV3WalletBalanceOf = (
    query: AaveV3WalletBalanceOfParams,
    params: RequestParams = {}
  ) =>
    this.http.request<AaveV3WalletBalanceOfData, any>({
      path: `/aave/v3/wallet-balance/balance-of`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the batch balance of multiple users for specified tokens.
   *
   * @tags AAVE v3 Wallet Balance Provider
   * @name AaveV3WalletBatchBalanceOf
   * @request GET:/aave/v3/wallet-balance/batch-balance-of
   * @secure
   */
  aaveV3WalletBatchBalanceOf = (
    query: AaveV3WalletBatchBalanceOfParams,
    params: RequestParams = {}
  ) =>
    this.http.request<AaveV3WalletBatchBalanceOfData, any>({
      path: `/aave/v3/wallet-balance/batch-balance-of`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the wallet balances for a user from the AAVE v3 Wallet Balance Provider.
   *
   * @tags AAVE v3 Wallet Balance Provider
   * @name AaveV3WalletUserWalletBalances
   * @request GET:/aave/v3/wallet-balance/user-wallet-balances
   * @secure
   */
  aaveV3WalletUserWalletBalances = (
    query: AaveV3WalletUserWalletBalancesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<AaveV3WalletUserWalletBalancesData, any>({
      path: `/aave/v3/wallet-balance/user-wallet-balances`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags PoolAddressProviderRegistry
   * @name GetAllReservesTokens
   * @request GET:/aave/v3/poolAddressProviderRegistry/{account}/getAllReservesTokens
   * @secure
   */
  getAllReservesTokens = (
    { account, ...query }: GetAllReservesTokensParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAllReservesTokensData, any>({
      path: `/aave/v3/poolAddressProviderRegistry/${account}/getAllReservesTokens`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags AAVE v3 UI Pool Data Provider
   * @name GetReservesData
   * @request GET:/aave/v3/pool-data/reserves-data
   * @secure
   */
  getReservesData = (
    query: GetReservesDataParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetReservesDataData, any>({
      path: `/aave/v3/pool-data/reserves-data`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
}
