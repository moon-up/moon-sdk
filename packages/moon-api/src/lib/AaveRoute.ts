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
  BatchBalanceOfData,
  BorrowData,
  ClaimAllRewardsData,
  ClaimAllRewardsOnBehalfData,
  ClaimAllRewardsToSelfData,
  ClaimRewardsData,
  ClaimRewardsOnBehalfData,
  ClaimRewardsToSelfData,
  GetATokenTotalSupplyData,
  GetAclAdminData,
  GetAclManagerData,
  GetAddressData,
  GetAddressesProviderData,
  GetAllATokensData,
  GetAllReservesTokensData,
  GetDebtCeilingData,
  GetEthCurrencyUnitData,
  GetFullReservesIncentiveDataData,
  GetMarketIdData,
  GetMarketReferenceCurrencyPriceInUsdProxyAggregatorData,
  GetNetworkBaseTokenPriceInUsdProxyAggregatorData,
  GetPoolConfiguratorData,
  GetPoolData,
  GetPriceOracleData,
  GetReserveDataData,
  GetReservesDataData,
  GetReservesIncentivesDataData,
  GetReservesListData,
  GetRewardsByAssetData,
  GetRewardsDataData,
  GetUserAccountDataData,
  GetUserReservesDataData,
  GetUserReservesIncentivesDataData,
  GetUserRewardsData,
  GetUserWalletBalancesData,
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

export namespace Aave {
  /**
   * No description
   * @tags AAVE v3 Wallet Balance Provider
   * @name BalanceOf
   * @request GET:/aave/v3/wallet-balance/balance-of
   * @secure
   */
  export namespace BalanceOf {
    export type RequestParams = {};
    export type RequestQuery = {
      chain_id: string;
      contract_address: string;
      token_address: string;
      user: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = BalanceOfData;
  }

  /**
   * No description
   * @tags AAVE v3 Wallet Balance Provider
   * @name BatchBalanceOf
   * @request GET:/aave/v3/wallet-balance/batch-balance-of
   * @secure
   */
  export namespace BatchBalanceOf {
    export type RequestParams = {};
    export type RequestQuery = {
      chain_id: string;
      contract_address: string;
      tokens: string[];
      users: string[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = BatchBalanceOfData;
  }

  /**
   * No description
   * @tags AAVEv3 Pool
   * @name Borrow
   * @request POST:/aave/v3/pool/{address}/borrow
   * @secure
   */
  export namespace Borrow {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AavePoolInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = BorrowData;
  }

  /**
   * No description
   * @tags AAVEv3Rewards
   * @name ClaimAllRewards
   * @request POST:/aave/v3/rewards/{address}/claimAllRewards
   * @secure
   */
  export namespace ClaimAllRewards {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AAVEv3RewardsInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ClaimAllRewardsData;
  }

  /**
   * No description
   * @tags AAVEv3Rewards
   * @name ClaimAllRewardsOnBehalf
   * @request POST:/aave/v3/rewards/{address}/claimAllRewardsOnBehalf
   * @secure
   */
  export namespace ClaimAllRewardsOnBehalf {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AAVEv3RewardsInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ClaimAllRewardsOnBehalfData;
  }

  /**
   * No description
   * @tags AAVEv3Rewards
   * @name ClaimAllRewardsToSelf
   * @request POST:/aave/v3/rewards/{address}/claimAllRewardsToSelf
   * @secure
   */
  export namespace ClaimAllRewardsToSelf {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AAVEv3RewardsInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ClaimAllRewardsToSelfData;
  }

  /**
   * No description
   * @tags AAVEv3Rewards
   * @name ClaimRewards
   * @request POST:/aave/v3/rewards/{address}/claimRewards
   * @secure
   */
  export namespace ClaimRewards {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AAVEv3RewardsInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ClaimRewardsData;
  }

  /**
   * No description
   * @tags AAVEv3Rewards
   * @name ClaimRewardsOnBehalf
   * @request POST:/aave/v3/rewards/{address}/claimRewardsOnBehalf
   * @secure
   */
  export namespace ClaimRewardsOnBehalf {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AAVEv3RewardsInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ClaimRewardsOnBehalfData;
  }

  /**
   * No description
   * @tags AAVEv3Rewards
   * @name ClaimRewardsToSelf
   * @request POST:/aave/v3/rewards/{address}/claimRewardsToSelf
   * @secure
   */
  export namespace ClaimRewardsToSelf {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AAVEv3RewardsInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ClaimRewardsToSelfData;
  }

  /**
   * No description
   * @tags Pool Address Provider
   * @name GetAclAdmin
   * @request GET:/aave/v3/poolAddressProvider/{account}/getACLAdmin
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
   * @request GET:/aave/v3/poolAddressProvider/{account}/getACLManager
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
   * @request GET:/aave/v3/poolAddressProvider/{account}/getAddress
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
   * @tags PoolAddressProviderRegistry
   * @name GetAddressesProvider
   * @request GET:/aave/v3/poolAddressProviderRegistry/{account}/getAddressesProvider
   * @secure
   */
  export namespace GetAddressesProvider {
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
    export type ResponseBody = GetAddressesProviderData;
  }

  /**
   * No description
   * @tags PoolAddressProviderRegistry
   * @name GetAllATokens
   * @request GET:/aave/v3/poolAddressProviderRegistry/{account}/getAllATokens
   * @secure
   */
  export namespace GetAllATokens {
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
    export type ResponseBody = GetAllATokensData;
  }

  /**
   * No description
   * @tags PoolAddressProviderRegistry
   * @name GetAllReservesTokens
   * @request GET:/aave/v3/poolAddressProviderRegistry/{account}/getAllReservesTokens
   * @secure
   */
  export namespace GetAllReservesTokens {
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
    export type ResponseBody = GetAllReservesTokensData;
  }

  /**
   * No description
   * @tags PoolAddressProviderRegistry
   * @name GetATokenTotalSupply
   * @request GET:/aave/v3/poolAddressProviderRegistry/{account}/getATokenTotalSupply
   * @secure
   */
  export namespace GetATokenTotalSupply {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      asset: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetATokenTotalSupplyData;
  }

  /**
   * No description
   * @tags PoolAddressProviderRegistry
   * @name GetDebtCeiling
   * @request GET:/aave/v3/poolAddressProviderRegistry/{account}/getDebtCeiling
   * @secure
   */
  export namespace GetDebtCeiling {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      asset: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetDebtCeilingData;
  }

  /**
   * No description
   * @tags AAVE v3 UI Pool Data Provider
   * @name GetEthCurrencyUnit
   * @request GET:/aave/v3/pool-data/eth-currency-unit
   * @secure
   */
  export namespace GetEthCurrencyUnit {
    export type RequestParams = {};
    export type RequestQuery = {
      chain_id: string;
      contract_address: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetEthCurrencyUnitData;
  }

  /**
   * No description
   * @tags AAVE v3 UI Incentive Data Provider
   * @name GetFullReservesIncentiveData
   * @request GET:/aave/v3/incentives/fullReservesIncentiveData
   * @secure
   */
  export namespace GetFullReservesIncentiveData {
    export type RequestParams = {};
    export type RequestQuery = {
      chain_id: string;
      contract_address: string;
      provider: string;
      user: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetFullReservesIncentiveDataData;
  }

  /**
   * No description
   * @tags Pool Address Provider
   * @name GetMarketId
   * @request GET:/aave/v3/poolAddressProvider/{account}/getMarketId
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
   * @tags AAVE v3 UI Pool Data Provider
   * @name GetMarketReferenceCurrencyPriceInUsdProxyAggregator
   * @request GET:/aave/v3/pool-data/market-reference-currency-price-in-usd-proxy-aggregator
   * @secure
   */
  export namespace GetMarketReferenceCurrencyPriceInUsdProxyAggregator {
    export type RequestParams = {};
    export type RequestQuery = {
      chain_id: string;
      contract_address: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody =
      GetMarketReferenceCurrencyPriceInUsdProxyAggregatorData;
  }

  /**
   * No description
   * @tags AAVE v3 UI Pool Data Provider
   * @name GetNetworkBaseTokenPriceInUsdProxyAggregator
   * @request GET:/aave/v3/pool-data/network-base-token-price-in-usd-proxy-aggregator
   * @secure
   */
  export namespace GetNetworkBaseTokenPriceInUsdProxyAggregator {
    export type RequestParams = {};
    export type RequestQuery = {
      chain_id: string;
      contract_address: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetNetworkBaseTokenPriceInUsdProxyAggregatorData;
  }

  /**
   * No description
   * @tags Pool Address Provider
   * @name GetPool
   * @request GET:/aave/v3/poolAddressProvider/{account}/getPool
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
   * @request GET:/aave/v3/poolAddressProvider/{account}/getPoolConfigurator
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
   * @request GET:/aave/v3/poolAddressProvider/{account}/getPriceOracle
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
   * @tags AAVEv3 Pool
   * @name GetReserveData
   * @request GET:/aave/v3/pool/{account}/getReserveData
   * @secure
   */
  export namespace GetReserveData {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      asset: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetReserveDataData;
  }

  /**
   * No description
   * @tags AAVE v3 UI Pool Data Provider
   * @name GetReservesData
   * @request GET:/aave/v3/pool-data/reserves-data
   * @secure
   */
  export namespace GetReservesData {
    export type RequestParams = {};
    export type RequestQuery = {
      chain_id: string;
      contract_address: string;
      provider: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetReservesDataData;
  }

  /**
   * No description
   * @tags AAVE v3 UI Incentive Data Provider
   * @name GetReservesIncentivesData
   * @request GET:/aave/v3/incentives/reservesIncentivesData
   * @secure
   */
  export namespace GetReservesIncentivesData {
    export type RequestParams = {};
    export type RequestQuery = {
      chain_id: string;
      contract_address: string;
      provider: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetReservesIncentivesDataData;
  }

  /**
   * No description
   * @tags AAVE v3 UI Pool Data Provider
   * @name GetReservesList
   * @request GET:/aave/v3/pool-data/reserves-list
   * @secure
   */
  export namespace GetReservesList {
    export type RequestParams = {};
    export type RequestQuery = {
      chain_id: string;
      contract_address: string;
      provider: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetReservesListData;
  }

  /**
   * No description
   * @tags AAVEv3Rewards
   * @name GetRewardsByAsset
   * @request GET:/aave/v3/rewards/{account}/rewardsByAsset
   * @secure
   */
  export namespace GetRewardsByAsset {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      asset: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetRewardsByAssetData;
  }

  /**
   * No description
   * @tags AAVEv3Rewards
   * @name GetRewardsData
   * @request GET:/aave/v3/rewards/{account}/rewardsData
   * @secure
   */
  export namespace GetRewardsData {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      asset: string;
      chainId: string;
      reward: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetRewardsDataData;
  }

  /**
   * No description
   * @tags AAVEv3 Pool
   * @name GetUserAccountData
   * @request GET:/aave/v3/pool/{account}/getUserAccountData
   * @secure
   */
  export namespace GetUserAccountData {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
      user: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetUserAccountDataData;
  }

  /**
   * No description
   * @tags AAVE v3 UI Pool Data Provider
   * @name GetUserReservesData
   * @request GET:/aave/v3/pool-data/user-reserves-data
   * @secure
   */
  export namespace GetUserReservesData {
    export type RequestParams = {};
    export type RequestQuery = {
      chain_id: string;
      contract_address: string;
      provider: string;
      user: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetUserReservesDataData;
  }

  /**
   * No description
   * @tags AAVE v3 UI Incentive Data Provider
   * @name GetUserReservesIncentivesData
   * @request GET:/aave/v3/incentives/userReservesIncentivesData
   * @secure
   */
  export namespace GetUserReservesIncentivesData {
    export type RequestParams = {};
    export type RequestQuery = {
      chain_id: string;
      contract_address: string;
      provider: string;
      user: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetUserReservesIncentivesDataData;
  }

  /**
   * No description
   * @tags AAVEv3Rewards
   * @name GetUserRewards
   * @request GET:/aave/v3/rewards/{account}/userRewards
   * @secure
   */
  export namespace GetUserRewards {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      assets: string[];
      chainId: string;
      reward: string;
      user: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetUserRewardsData;
  }

  /**
   * No description
   * @tags AAVE v3 Wallet Balance Provider
   * @name GetUserWalletBalances
   * @request GET:/aave/v3/wallet-balance/user-wallet-balances
   * @secure
   */
  export namespace GetUserWalletBalances {
    export type RequestParams = {};
    export type RequestQuery = {
      chain_id: string;
      contract_address: string;
      provider: string;
      user: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetUserWalletBalancesData;
  }

  /**
   * No description
   * @tags AAVEv3 Pool
   * @name LiquidationCall
   * @request POST:/aave/v3/pool/{address}/liquidationCall
   * @secure
   */
  export namespace LiquidationCall {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AavePoolInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = LiquidationCallData;
  }

  /**
   * No description
   * @tags AAVEv3 Pool
   * @name Repay
   * @request POST:/aave/v3/pool/{address}/repay
   * @secure
   */
  export namespace Repay {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AavePoolInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = RepayData;
  }

  /**
   * No description
   * @tags Pool Address Provider
   * @name SetAclAdmin
   * @request POST:/aave/v3/poolAddressProvider/{address}/setACLAdmin
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
   * @request POST:/aave/v3/poolAddressProvider/{address}/setACLManager
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
   * @request POST:/aave/v3/poolAddressProvider/{address}/setAddress
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
   * @request POST:/aave/v3/poolAddressProvider/{address}/setMarketId
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
   * @request POST:/aave/v3/poolAddressProvider/{address}/setPoolConfiguratorImpl
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
   * @request POST:/aave/v3/poolAddressProvider/{address}/setPoolImpl
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

  /**
   * No description
   * @tags AAVEv3 Pool
   * @name SetUserUseReserveAsCollateral
   * @request POST:/aave/v3/pool/{address}/setUserUseReserveAsCollateral
   * @secure
   */
  export namespace SetUserUseReserveAsCollateral {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AavePoolInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SetUserUseReserveAsCollateralData;
  }

  /**
   * No description
   * @tags AAVEv3 Pool
   * @name Supply
   * @request POST:/aave/v3/pool/{address}/supply
   * @secure
   */
  export namespace Supply {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AavePoolInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SupplyData;
  }

  /**
   * No description
   * @tags AAVEv3 Pool
   * @name Withdraw
   * @request POST:/aave/v3/pool/{address}/withdraw
   * @secure
   */
  export namespace Withdraw {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AavePoolInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = WithdrawData;
  }
}
