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
  AavePoolInputBody,
  BalanceOfData,
  BalanceOfParams,
  BatchBalanceOfData,
  BatchBalanceOfParams,
  BorrowData,
  ClaimAllRewardsData,
  ClaimAllRewardsOnBehalfData,
  ClaimAllRewardsToSelfData,
  ClaimRewardsData,
  ClaimRewardsOnBehalfData,
  ClaimRewardsToSelfData,
  GetATokenTotalSupplyData,
  GetATokenTotalSupplyParams,
  GetAclAdminData,
  GetAclAdminParams,
  GetAclManagerData,
  GetAclManagerParams,
  GetAddressData,
  GetAddressParams,
  GetAddressesProviderData,
  GetAddressesProviderParams,
  GetAllATokensData,
  GetAllATokensParams,
  GetAllReservesTokensData,
  GetAllReservesTokensParams,
  GetDebtCeilingData,
  GetDebtCeilingParams,
  GetFullReservesIncentiveDataData,
  GetFullReservesIncentiveDataParams,
  GetMarketIdData,
  GetMarketIdParams,
  GetPoolConfiguratorData,
  GetPoolConfiguratorParams,
  GetPoolData,
  GetPoolParams,
  GetPriceOracleData,
  GetPriceOracleParams,
  GetReserveDataData,
  GetReserveDataParams,
  GetReservesIncentivesDataData,
  GetReservesIncentivesDataParams,
  GetRewardsByAssetData,
  GetRewardsByAssetParams,
  GetRewardsDataData,
  GetRewardsDataParams,
  GetUserAccountDataData,
  GetUserAccountDataParams,
  GetUserReservesIncentivesDataData,
  GetUserReservesIncentivesDataParams,
  GetUserRewardsData,
  GetUserRewardsParams,
  GetUserWalletBalancesData,
  GetUserWalletBalancesParams,
  LiquidationCallData,
  PoolAddressProviderInputBody,
  RepayData,
  SetAclAdminData,
  SetAclManagerData,
  SetAddressData,
  SetMarketIdData,
  SetPoolConfiguratorImplData,
  SetPoolImplData,
  SetUserUseReserveAsCollateralData,
  SupplyData,
  WithdrawData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Aave<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags AAVE v3 Wallet Balance Provider
   * @name BalanceOf
   * @request GET:/aave/v3/wallet-balance/balance-of
   * @secure
   */
  balanceOf = (query: BalanceOfParams, params: RequestParams = {}) =>
    this.http.request<BalanceOfData, any>({
      path: `/aave/v3/wallet-balance/balance-of`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags AAVE v3 Wallet Balance Provider
   * @name BatchBalanceOf
   * @request GET:/aave/v3/wallet-balance/batch-balance-of
   * @secure
   */
  batchBalanceOf = (query: BatchBalanceOfParams, params: RequestParams = {}) =>
    this.http.request<BatchBalanceOfData, any>({
      path: `/aave/v3/wallet-balance/batch-balance-of`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags AAVEv3 Pool
   * @name Borrow
   * @request POST:/aave/v3/pool/{address}/borrow
   * @secure
   */
  borrow = (
    address: string,
    data: AavePoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<BorrowData, any>({
      path: `/aave/v3/pool/${address}/borrow`,
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
   * @tags AAVEv3Rewards
   * @name ClaimAllRewards
   * @request POST:/aave/v3/rewards/{address}/claimAllRewards
   * @secure
   */
  claimAllRewards = (
    address: string,
    data: AAVEv3RewardsInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ClaimAllRewardsData, any>({
      path: `/aave/v3/rewards/${address}/claimAllRewards`,
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
   * @tags AAVEv3Rewards
   * @name ClaimAllRewardsOnBehalf
   * @request POST:/aave/v3/rewards/{address}/claimAllRewardsOnBehalf
   * @secure
   */
  claimAllRewardsOnBehalf = (
    address: string,
    data: AAVEv3RewardsInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ClaimAllRewardsOnBehalfData, any>({
      path: `/aave/v3/rewards/${address}/claimAllRewardsOnBehalf`,
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
   * @tags AAVEv3Rewards
   * @name ClaimAllRewardsToSelf
   * @request POST:/aave/v3/rewards/{address}/claimAllRewardsToSelf
   * @secure
   */
  claimAllRewardsToSelf = (
    address: string,
    data: AAVEv3RewardsInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ClaimAllRewardsToSelfData, any>({
      path: `/aave/v3/rewards/${address}/claimAllRewardsToSelf`,
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
   * @tags AAVEv3Rewards
   * @name ClaimRewards
   * @request POST:/aave/v3/rewards/{address}/claimRewards
   * @secure
   */
  claimRewards = (
    address: string,
    data: AAVEv3RewardsInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ClaimRewardsData, any>({
      path: `/aave/v3/rewards/${address}/claimRewards`,
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
   * @tags AAVEv3Rewards
   * @name ClaimRewardsOnBehalf
   * @request POST:/aave/v3/rewards/{address}/claimRewardsOnBehalf
   * @secure
   */
  claimRewardsOnBehalf = (
    address: string,
    data: AAVEv3RewardsInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ClaimRewardsOnBehalfData, any>({
      path: `/aave/v3/rewards/${address}/claimRewardsOnBehalf`,
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
   * @tags AAVEv3Rewards
   * @name ClaimRewardsToSelf
   * @request POST:/aave/v3/rewards/{address}/claimRewardsToSelf
   * @secure
   */
  claimRewardsToSelf = (
    address: string,
    data: AAVEv3RewardsInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<ClaimRewardsToSelfData, any>({
      path: `/aave/v3/rewards/${address}/claimRewardsToSelf`,
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
   * @tags Pool Address Provider
   * @name GetAclAdmin
   * @request GET:/aave/v3/poolAddressProvider/{account}/getACLAdmin
   * @secure
   */
  getAclAdmin = (
    { account, ...query }: GetAclAdminParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAclAdminData, any>({
      path: `/aave/v3/poolAddressProvider/${account}/getACLAdmin`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Pool Address Provider
   * @name GetAclManager
   * @request GET:/aave/v3/poolAddressProvider/{account}/getACLManager
   * @secure
   */
  getAclManager = (
    { account, ...query }: GetAclManagerParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAclManagerData, any>({
      path: `/aave/v3/poolAddressProvider/${account}/getACLManager`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Pool Address Provider
   * @name GetAddress
   * @request GET:/aave/v3/poolAddressProvider/{account}/getAddress
   * @secure
   */
  getAddress = (
    { account, ...query }: GetAddressParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAddressData, any>({
      path: `/aave/v3/poolAddressProvider/${account}/getAddress`,
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
   * @name GetAddressesProvider
   * @request GET:/aave/v3/poolAddressProviderRegistry/{account}/getAddressesProvider
   * @secure
   */
  getAddressesProvider = (
    { account, ...query }: GetAddressesProviderParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAddressesProviderData, any>({
      path: `/aave/v3/poolAddressProviderRegistry/${account}/getAddressesProvider`,
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
   * @name GetAllATokens
   * @request GET:/aave/v3/poolAddressProviderRegistry/{account}/getAllATokens
   * @secure
   */
  getAllATokens = (
    { account, ...query }: GetAllATokensParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAllATokensData, any>({
      path: `/aave/v3/poolAddressProviderRegistry/${account}/getAllATokens`,
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
   * @tags PoolAddressProviderRegistry
   * @name GetATokenTotalSupply
   * @request GET:/aave/v3/poolAddressProviderRegistry/{account}/getATokenTotalSupply
   * @secure
   */
  getATokenTotalSupply = (
    { account, ...query }: GetATokenTotalSupplyParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetATokenTotalSupplyData, any>({
      path: `/aave/v3/poolAddressProviderRegistry/${account}/getATokenTotalSupply`,
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
   * @name GetDebtCeiling
   * @request GET:/aave/v3/poolAddressProviderRegistry/{account}/getDebtCeiling
   * @secure
   */
  getDebtCeiling = (
    { account, ...query }: GetDebtCeilingParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetDebtCeilingData, any>({
      path: `/aave/v3/poolAddressProviderRegistry/${account}/getDebtCeiling`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags AAVE v3 UI Incentive Data Provider
   * @name GetFullReservesIncentiveData
   * @request GET:/aave/v3/incentives/fullReservesIncentiveData
   * @secure
   */
  getFullReservesIncentiveData = (
    query: GetFullReservesIncentiveDataParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetFullReservesIncentiveDataData, any>({
      path: `/aave/v3/incentives/fullReservesIncentiveData`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Pool Address Provider
   * @name GetMarketId
   * @request GET:/aave/v3/poolAddressProvider/{account}/getMarketId
   * @secure
   */
  getMarketId = (
    { account, ...query }: GetMarketIdParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetMarketIdData, any>({
      path: `/aave/v3/poolAddressProvider/${account}/getMarketId`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Pool Address Provider
   * @name GetPool
   * @request GET:/aave/v3/poolAddressProvider/{account}/getPool
   * @secure
   */
  getPool = (
    { account, ...query }: GetPoolParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetPoolData, any>({
      path: `/aave/v3/poolAddressProvider/${account}/getPool`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Pool Address Provider
   * @name GetPoolConfigurator
   * @request GET:/aave/v3/poolAddressProvider/{account}/getPoolConfigurator
   * @secure
   */
  getPoolConfigurator = (
    { account, ...query }: GetPoolConfiguratorParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetPoolConfiguratorData, any>({
      path: `/aave/v3/poolAddressProvider/${account}/getPoolConfigurator`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Pool Address Provider
   * @name GetPriceOracle
   * @request GET:/aave/v3/poolAddressProvider/{account}/getPriceOracle
   * @secure
   */
  getPriceOracle = (
    { account, ...query }: GetPriceOracleParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetPriceOracleData, any>({
      path: `/aave/v3/poolAddressProvider/${account}/getPriceOracle`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags AAVEv3 Pool
   * @name GetReserveData
   * @request GET:/aave/v3/pool/{account}/getReserveData
   * @secure
   */
  getReserveData = (
    { account, ...query }: GetReserveDataParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetReserveDataData, any>({
      path: `/aave/v3/pool/${account}/getReserveData`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags AAVE v3 UI Incentive Data Provider
   * @name GetReservesIncentivesData
   * @request GET:/aave/v3/incentives/reservesIncentivesData
   * @secure
   */
  getReservesIncentivesData = (
    query: GetReservesIncentivesDataParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetReservesIncentivesDataData, any>({
      path: `/aave/v3/incentives/reservesIncentivesData`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags AAVEv3Rewards
   * @name GetRewardsByAsset
   * @request GET:/aave/v3/rewards/{account}/rewardsByAsset
   * @secure
   */
  getRewardsByAsset = (
    { account, ...query }: GetRewardsByAssetParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetRewardsByAssetData, any>({
      path: `/aave/v3/rewards/${account}/rewardsByAsset`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags AAVEv3Rewards
   * @name GetRewardsData
   * @request GET:/aave/v3/rewards/{account}/rewardsData
   * @secure
   */
  getRewardsData = (
    { account, ...query }: GetRewardsDataParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetRewardsDataData, any>({
      path: `/aave/v3/rewards/${account}/rewardsData`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags AAVEv3 Pool
   * @name GetUserAccountData
   * @request GET:/aave/v3/pool/{account}/getUserAccountData
   * @secure
   */
  getUserAccountData = (
    { account, ...query }: GetUserAccountDataParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetUserAccountDataData, any>({
      path: `/aave/v3/pool/${account}/getUserAccountData`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags AAVE v3 UI Incentive Data Provider
   * @name GetUserReservesIncentivesData
   * @request GET:/aave/v3/incentives/userReservesIncentivesData
   * @secure
   */
  getUserReservesIncentivesData = (
    query: GetUserReservesIncentivesDataParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetUserReservesIncentivesDataData, any>({
      path: `/aave/v3/incentives/userReservesIncentivesData`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags AAVEv3Rewards
   * @name GetUserRewards
   * @request GET:/aave/v3/rewards/{account}/userRewards
   * @secure
   */
  getUserRewards = (
    { account, ...query }: GetUserRewardsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetUserRewardsData, any>({
      path: `/aave/v3/rewards/${account}/userRewards`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags AAVE v3 Wallet Balance Provider
   * @name GetUserWalletBalances
   * @request GET:/aave/v3/wallet-balance/user-wallet-balances
   * @secure
   */
  getUserWalletBalances = (
    query: GetUserWalletBalancesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetUserWalletBalancesData, any>({
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
   * @tags AAVEv3 Pool
   * @name LiquidationCall
   * @request POST:/aave/v3/pool/{address}/liquidationCall
   * @secure
   */
  liquidationCall = (
    address: string,
    data: AavePoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<LiquidationCallData, any>({
      path: `/aave/v3/pool/${address}/liquidationCall`,
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
   * @tags AAVEv3 Pool
   * @name Repay
   * @request POST:/aave/v3/pool/{address}/repay
   * @secure
   */
  repay = (
    address: string,
    data: AavePoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<RepayData, any>({
      path: `/aave/v3/pool/${address}/repay`,
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
   * @tags Pool Address Provider
   * @name SetAclAdmin
   * @request POST:/aave/v3/poolAddressProvider/{address}/setACLAdmin
   * @secure
   */
  setAclAdmin = (
    address: string,
    data: PoolAddressProviderInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SetAclAdminData, any>({
      path: `/aave/v3/poolAddressProvider/${address}/setACLAdmin`,
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
   * @tags Pool Address Provider
   * @name SetAclManager
   * @request POST:/aave/v3/poolAddressProvider/{address}/setACLManager
   * @secure
   */
  setAclManager = (
    address: string,
    data: PoolAddressProviderInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SetAclManagerData, any>({
      path: `/aave/v3/poolAddressProvider/${address}/setACLManager`,
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
   * @tags Pool Address Provider
   * @name SetAddress
   * @request POST:/aave/v3/poolAddressProvider/{address}/setAddress
   * @secure
   */
  setAddress = (
    address: string,
    data: PoolAddressProviderInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SetAddressData, any>({
      path: `/aave/v3/poolAddressProvider/${address}/setAddress`,
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
   * @tags Pool Address Provider
   * @name SetMarketId
   * @request POST:/aave/v3/poolAddressProvider/{address}/setMarketId
   * @secure
   */
  setMarketId = (
    address: string,
    data: PoolAddressProviderInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SetMarketIdData, any>({
      path: `/aave/v3/poolAddressProvider/${address}/setMarketId`,
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
   * @tags Pool Address Provider
   * @name SetPoolConfiguratorImpl
   * @request POST:/aave/v3/poolAddressProvider/{address}/setPoolConfiguratorImpl
   * @secure
   */
  setPoolConfiguratorImpl = (
    address: string,
    data: PoolAddressProviderInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SetPoolConfiguratorImplData, any>({
      path: `/aave/v3/poolAddressProvider/${address}/setPoolConfiguratorImpl`,
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
   * @tags Pool Address Provider
   * @name SetPoolImpl
   * @request POST:/aave/v3/poolAddressProvider/{address}/setPoolImpl
   * @secure
   */
  setPoolImpl = (
    address: string,
    data: PoolAddressProviderInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SetPoolImplData, any>({
      path: `/aave/v3/poolAddressProvider/${address}/setPoolImpl`,
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
   * @tags AAVEv3 Pool
   * @name SetUserUseReserveAsCollateral
   * @request POST:/aave/v3/pool/{address}/setUserUseReserveAsCollateral
   * @secure
   */
  setUserUseReserveAsCollateral = (
    address: string,
    data: AavePoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SetUserUseReserveAsCollateralData, any>({
      path: `/aave/v3/pool/${address}/setUserUseReserveAsCollateral`,
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
   * @tags AAVEv3 Pool
   * @name Supply
   * @request POST:/aave/v3/pool/{address}/supply
   * @secure
   */
  supply = (
    address: string,
    data: AavePoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<SupplyData, any>({
      path: `/aave/v3/pool/${address}/supply`,
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
   * @tags AAVEv3 Pool
   * @name Withdraw
   * @request POST:/aave/v3/pool/{address}/withdraw
   * @secure
   */
  withdraw = (
    address: string,
    data: AavePoolInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<WithdrawData, any>({
      path: `/aave/v3/pool/${address}/withdraw`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
