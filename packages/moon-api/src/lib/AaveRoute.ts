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
  AavEv3IncentiveDataProviderGetReservesDataData,
  AavEv3IncentiveDataProviderGetUserReservesDataData,
  AavEv3RewardsClaimAllRewardsData,
  AavEv3RewardsClaimAllRewardsOnBehalfData,
  AavEv3RewardsClaimAllRewardsToSelfData,
  AavEv3RewardsClaimRewardsData,
  AavEv3RewardsClaimRewardsOnBehalfData,
  AavEv3RewardsClaimRewardsToSelfData,
  AavEv3RewardsGetRewardsByAssetData,
  AavEv3RewardsGetRewardsDataData,
  AavEv3RewardsGetUserRewardsData,
  AavePoolInputBody,
  AaveV3UiPoolDataProviderEthCurrencyUnitData,
  AaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorData,
  AaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorData,
  AaveV3UiPoolDataProviderReservesListData,
  AaveV3UiPoolDataProviderUserReservesDataData,
  AaveV3WalletBalanceOfData,
  AaveV3WalletBatchBalanceOfData,
  AaveV3WalletUserWalletBalancesData,
  Aavev3PoolAddressProviderGetAclAdminData,
  Aavev3PoolAddressProviderGetAclManagerData,
  Aavev3PoolAddressProviderGetAddressData,
  Aavev3PoolAddressProviderGetMarketIdData,
  Aavev3PoolAddressProviderGetPoolConfiguratorData,
  Aavev3PoolAddressProviderGetPoolData,
  Aavev3PoolAddressProviderGetPriceOracleData,
  Aavev3PoolAddressProviderRegistryGetATokenTotalSupplyData,
  Aavev3PoolAddressProviderRegistryGetAddressesProviderData,
  Aavev3PoolAddressProviderRegistryGetAllATokensData,
  Aavev3PoolAddressProviderRegistryGetDebtCeilingData,
  Aavev3PoolAddressProviderSetAclAdminData,
  Aavev3PoolAddressProviderSetAclManagerData,
  Aavev3PoolAddressProviderSetAddressData,
  Aavev3PoolAddressProviderSetMarketIdData,
  Aavev3PoolAddressProviderSetPoolConfiguratorImplData,
  Aavev3PoolAddressProviderSetPoolImplData,
  Aavev3PoolBorrowData,
  Aavev3PoolGetReserveDataData,
  Aavev3PoolGetUserAccountDataData,
  Aavev3PoolLiquidationCallData,
  Aavev3PoolRepayData,
  Aavev3PoolSetUserUseReserveAsCollateralData,
  Aavev3PoolSupplyData,
  Aavev3PoolWithdrawData,
  GetAllReservesTokensData,
  GetReservesDataData,
  PoolAddressProviderInputBody,
} from './data-contracts';

export namespace Aave {
  /**
   * @description Retrieves full incentive data for all reserves and user positions
   * @tags AAVE v3 UI Incentive Data Provider
   * @name AavEv3IncentiveDataProviderGetFullReservesData
   * @request GET:/aave/v3/incentives/fullReservesIncentiveData
   * @secure
   */
  export namespace AavEv3IncentiveDataProviderGetFullReservesData {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - Chain ID to target */
      chain_id: string;
      /** - Address of the incentive data provider contract */
      contract_address: string;
      /** - Address of the pool address provider */
      provider: string;
      /** - Address of the user to get incentive data for */
      user: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - Authorization token from request header */
      Authorization: string;
    };
    export type ResponseBody =
      AavEv3IncentiveDataProviderGetFullReservesDataData;
  }

  /**
   * @description Retrieves incentive data for all reserves in the pool
   * @tags AAVE v3 UI Incentive Data Provider
   * @name AavEv3IncentiveDataProviderGetReservesData
   * @request GET:/aave/v3/incentives/reservesIncentivesData
   * @secure
   */
  export namespace AavEv3IncentiveDataProviderGetReservesData {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - Chain ID to target */
      chain_id: string;
      /** - Address of the incentive data provider contract */
      contract_address: string;
      /** - Address of the pool address provider */
      provider: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - Authorization token from request header */
      Authorization: string;
    };
    export type ResponseBody = AavEv3IncentiveDataProviderGetReservesDataData;
  }

  /**
   * @description Retrieves incentive data for a user's positions in all reserves
   * @tags AAVE v3 UI Incentive Data Provider
   * @name AavEv3IncentiveDataProviderGetUserReservesData
   * @request GET:/aave/v3/incentives/userReservesIncentivesData
   * @secure
   */
  export namespace AavEv3IncentiveDataProviderGetUserReservesData {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - Chain ID to target */
      chain_id: string;
      /** - Address of the incentive data provider contract */
      contract_address: string;
      /** - Address of the pool address provider */
      provider: string;
      /** - Address of the user to get incentive data for */
      user: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - Authorization token from request header */
      Authorization: string;
    };
    export type ResponseBody =
      AavEv3IncentiveDataProviderGetUserReservesDataData;
  }

  /**
   * @description Retrieves the ACL (Access Control List) admin address for a given account.
   * @tags Pool Address Provider
   * @name Aavev3PoolAddressProviderGetAclAdmin
   * @request GET:/aave/v3/poolAddressProvider/{account}/getACLAdmin
   * @secure
   */
  export namespace Aavev3PoolAddressProviderGetAclAdmin {
    export type RequestParams = {
      /** - The account address to query. */
      account: string;
    };
    export type RequestQuery = {
      /** - The address of the pool address provider. */
      address: string;
      /** - The chain ID of the blockchain network. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = Aavev3PoolAddressProviderGetAclAdminData;
  }

  /**
   * @description Retrieves the ACL Manager address from the Pool Address Provider.
   * @tags Pool Address Provider
   * @name Aavev3PoolAddressProviderGetAclManager
   * @request GET:/aave/v3/poolAddressProvider/{account}/getACLManager
   * @secure
   */
  export namespace Aavev3PoolAddressProviderGetAclManager {
    export type RequestParams = {
      /** - The account path parameter. */
      account: string;
    };
    export type RequestQuery = {
      /** - The address query parameter. */
      address: string;
      /** - The chain ID query parameter. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = Aavev3PoolAddressProviderGetAclManagerData;
  }

  /**
   * @description Retrieves an address from the Pool Address Provider.
   * @tags Pool Address Provider
   * @name Aavev3PoolAddressProviderGetAddress
   * @request GET:/aave/v3/poolAddressProvider/{account}/getAddress
   * @secure
   */
  export namespace Aavev3PoolAddressProviderGetAddress {
    export type RequestParams = {
      /** - The account path parameter. */
      account: string;
    };
    export type RequestQuery = {
      /** - The address from the query parameters. */
      address: string;
      /** - The chain ID from the query parameters. */
      chainId: string;
      /** - The ID from the query parameters. */
      id: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = Aavev3PoolAddressProviderGetAddressData;
  }

  /**
   * @description Retrieves the market ID from the Pool Address Provider.
   * @tags Pool Address Provider
   * @name Aavev3PoolAddressProviderGetMarketId
   * @request GET:/aave/v3/poolAddressProvider/{account}/getMarketId
   * @secure
   */
  export namespace Aavev3PoolAddressProviderGetMarketId {
    export type RequestParams = {
      /** - The account path parameter. */
      account: string;
    };
    export type RequestQuery = {
      /** - The address from the query parameters. */
      address: string;
      /** - The chain ID from the query parameters. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = Aavev3PoolAddressProviderGetMarketIdData;
  }

  /**
   * @description Retrieves the pool address from the Aave protocol.
   * @tags Pool Address Provider
   * @name Aavev3PoolAddressProviderGetPool
   * @request GET:/aave/v3/poolAddressProvider/{account}/getPool
   * @secure
   */
  export namespace Aavev3PoolAddressProviderGetPool {
    export type RequestParams = {
      /** - The account identifier. */
      account: string;
    };
    export type RequestQuery = {
      /** - The address to query. */
      address: string;
      /** - The blockchain network identifier. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = Aavev3PoolAddressProviderGetPoolData;
  }

  /**
   * @description Retrieves the pool configurator for a given account.
   * @tags Pool Address Provider
   * @name Aavev3PoolAddressProviderGetPoolConfigurator
   * @request GET:/aave/v3/poolAddressProvider/{account}/getPoolConfigurator
   * @secure
   */
  export namespace Aavev3PoolAddressProviderGetPoolConfigurator {
    export type RequestParams = {
      /** - The account identifier. */
      account: string;
    };
    export type RequestQuery = {
      /** - The address of the pool. */
      address: string;
      /** - The chain identifier. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = Aavev3PoolAddressProviderGetPoolConfiguratorData;
  }

  /**
   * @description Retrieves the price oracle address from the Aave pool address provider.
   * @tags Pool Address Provider
   * @name Aavev3PoolAddressProviderGetPriceOracle
   * @request GET:/aave/v3/poolAddressProvider/{account}/getPriceOracle
   * @secure
   */
  export namespace Aavev3PoolAddressProviderGetPriceOracle {
    export type RequestParams = {
      /** - The account identifier. */
      account: string;
    };
    export type RequestQuery = {
      /** - The address of the pool address provider. */
      address: string;
      /** - The blockchain chain identifier. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = Aavev3PoolAddressProviderGetPriceOracleData;
  }

  /**
   * @description Retrieves the addresses provider from the Aave V3 Pool Address Provider Registry.
   * @tags PoolAddressProviderRegistry
   * @name Aavev3PoolAddressProviderRegistryGetAddressesProvider
   * @request GET:/aave/v3/poolAddressProviderRegistry/{account}/getAddressesProvider
   * @secure
   */
  export namespace Aavev3PoolAddressProviderRegistryGetAddressesProvider {
    export type RequestParams = {
      /** - The account identifier. */
      account: string;
    };
    export type RequestQuery = {
      /** - The address of the registry. */
      address: string;
      /** - The blockchain chain identifier. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody =
      Aavev3PoolAddressProviderRegistryGetAddressesProviderData;
  }

  /**
   * @description Retrieves all ATokens associated with the specified account.
   * @tags PoolAddressProviderRegistry
   * @name Aavev3PoolAddressProviderRegistryGetAllATokens
   * @request GET:/aave/v3/poolAddressProviderRegistry/{account}/getAllATokens
   * @secure
   */
  export namespace Aavev3PoolAddressProviderRegistryGetAllATokens {
    export type RequestParams = {
      /** - The account identifier. */
      account: string;
    };
    export type RequestQuery = {
      /** - The address to query. */
      address: string;
      /** - The blockchain chain identifier. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody =
      Aavev3PoolAddressProviderRegistryGetAllATokensData;
  }

  /**
   * @description Retrieves the total supply of a specific AToken.
   * @tags PoolAddressProviderRegistry
   * @name Aavev3PoolAddressProviderRegistryGetATokenTotalSupply
   * @request GET:/aave/v3/poolAddressProviderRegistry/{account}/getATokenTotalSupply
   * @secure
   */
  export namespace Aavev3PoolAddressProviderRegistryGetATokenTotalSupply {
    export type RequestParams = {
      /** - The account address. */
      account: string;
    };
    export type RequestQuery = {
      /** - The address of the pool address provider registry. */
      address: string;
      /** - The asset for which to get the total supply. */
      asset: string;
      /** - The chain ID. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody =
      Aavev3PoolAddressProviderRegistryGetATokenTotalSupplyData;
  }

  /**
   * @description Retrieves the debt ceiling for a specified asset from the Aave V3 Pool Address Provider Registry.
   * @tags PoolAddressProviderRegistry
   * @name Aavev3PoolAddressProviderRegistryGetDebtCeiling
   * @request GET:/aave/v3/poolAddressProviderRegistry/{account}/getDebtCeiling
   * @secure
   */
  export namespace Aavev3PoolAddressProviderRegistryGetDebtCeiling {
    export type RequestParams = {
      /** - The account identifier. */
      account: string;
    };
    export type RequestQuery = {
      /** - The address of the Pool Address Provider Registry. */
      address: string;
      /** - The asset for which to retrieve the debt ceiling. */
      asset: string;
      /** - The blockchain chain identifier. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody =
      Aavev3PoolAddressProviderRegistryGetDebtCeilingData;
  }

  /**
   * @description Sets the ACL (Access Control List) admin for the specified address.
   * @tags Pool Address Provider
   * @name Aavev3PoolAddressProviderSetAclAdmin
   * @request POST:/aave/v3/poolAddressProvider/{address}/setACLAdmin
   * @secure
   */
  export namespace Aavev3PoolAddressProviderSetAclAdmin {
    export type RequestParams = {
      /** - The address for which the ACL admin is being set. */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PoolAddressProviderInputBody;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = Aavev3PoolAddressProviderSetAclAdminData;
  }

  /**
   * @description Sets the ACL Manager for the specified pool address provider.
   * @tags Pool Address Provider
   * @name Aavev3PoolAddressProviderSetAclManager
   * @request POST:/aave/v3/poolAddressProvider/{address}/setACLManager
   * @secure
   */
  export namespace Aavev3PoolAddressProviderSetAclManager {
    export type RequestParams = {
      /** - The address of the pool address provider. */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PoolAddressProviderInputBody;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = Aavev3PoolAddressProviderSetAclManagerData;
  }

  /**
   * @description Sets the address for the Pool Address Provider.
   * @tags Pool Address Provider
   * @name Aavev3PoolAddressProviderSetAddress
   * @request POST:/aave/v3/poolAddressProvider/{address}/setAddress
   * @secure
   */
  export namespace Aavev3PoolAddressProviderSetAddress {
    export type RequestParams = {
      /** - The address to be set. */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PoolAddressProviderInputBody;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = Aavev3PoolAddressProviderSetAddressData;
  }

  /**
   * @description Sets the market ID for the given pool address provider.
   * @tags Pool Address Provider
   * @name Aavev3PoolAddressProviderSetMarketId
   * @request POST:/aave/v3/poolAddressProvider/{address}/setMarketId
   * @secure
   */
  export namespace Aavev3PoolAddressProviderSetMarketId {
    export type RequestParams = {
      /** - The address of the pool address provider. */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PoolAddressProviderInputBody;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = Aavev3PoolAddressProviderSetMarketIdData;
  }

  /**
   * @description Sets the Pool Configurator implementation for the given address.
   * @tags Pool Address Provider
   * @name Aavev3PoolAddressProviderSetPoolConfiguratorImpl
   * @request POST:/aave/v3/poolAddressProvider/{address}/setPoolConfiguratorImpl
   * @secure
   */
  export namespace Aavev3PoolAddressProviderSetPoolConfiguratorImpl {
    export type RequestParams = {
      /** - The address of the pool. */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PoolAddressProviderInputBody;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody =
      Aavev3PoolAddressProviderSetPoolConfiguratorImplData;
  }

  /**
   * @description Sets the pool implementation address for the given address.
   * @tags Pool Address Provider
   * @name Aavev3PoolAddressProviderSetPoolImpl
   * @request POST:/aave/v3/poolAddressProvider/{address}/setPoolImpl
   * @secure
   */
  export namespace Aavev3PoolAddressProviderSetPoolImpl {
    export type RequestParams = {
      /** - The address of the pool. */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PoolAddressProviderInputBody;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = Aavev3PoolAddressProviderSetPoolImplData;
  }

  /**
   * @description Borrows assets from the Aave pool.
   * @tags AAVEv3 Pool
   * @name Aavev3PoolBorrow
   * @request POST:/aave/v3/pool/{address}/borrow
   * @secure
   */
  export namespace Aavev3PoolBorrow {
    export type RequestParams = {
      /** - The address of the borrower. */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AavePoolInputBody;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = Aavev3PoolBorrowData;
  }

  /**
   * @description Retrieves reserve data for a specific asset from the Aave pool.
   * @tags AAVEv3 Pool
   * @name Aavev3PoolGetReserveData
   * @request GET:/aave/v3/pool/{account}/getReserveData
   * @secure
   */
  export namespace Aavev3PoolGetReserveData {
    export type RequestParams = {
      /** - The account identifier. */
      account: string;
    };
    export type RequestQuery = {
      /** - The address of the Aave pool. */
      address: string;
      /** - The asset for which to retrieve reserve data. */
      asset: string;
      /** - The blockchain chain ID. */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = Aavev3PoolGetReserveDataData;
  }

  /**
   * @description Retrieves user account data from the Aave pool.
   * @tags AAVEv3 Pool
   * @name Aavev3PoolGetUserAccountData
   * @request GET:/aave/v3/pool/{account}/getUserAccountData
   * @secure
   */
  export namespace Aavev3PoolGetUserAccountData {
    export type RequestParams = {
      /** - The account identifier from the path. */
      account: string;
    };
    export type RequestQuery = {
      /** - The address from the query parameters. */
      address: string;
      /** - The chain ID from the query parameters. */
      chainId: string;
      /** - The user identifier from the query parameters. */
      user: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the header. */
      Authorization: string;
    };
    export type ResponseBody = Aavev3PoolGetUserAccountDataData;
  }

  /**
   * @description Handles the liquidation call to the Aave pool.
   * @tags AAVEv3 Pool
   * @name Aavev3PoolLiquidationCall
   * @request POST:/aave/v3/pool/{address}/liquidationCall
   * @secure
   */
  export namespace Aavev3PoolLiquidationCall {
    export type RequestParams = {
      /** - The address to be liquidated. */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AavePoolInputBody;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = Aavev3PoolLiquidationCallData;
  }

  /**
   * @description Repays a loan on the Aave protocol.
   * @tags AAVEv3 Pool
   * @name Aavev3PoolRepay
   * @request POST:/aave/v3/pool/{address}/repay
   * @secure
   */
  export namespace Aavev3PoolRepay {
    export type RequestParams = {
      /** - The address of the borrower. */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AavePoolInputBody;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = Aavev3PoolRepayData;
  }

  /**
   * @description Sets the user's reserve as collateral in the Aave pool.
   * @tags AAVEv3 Pool
   * @name Aavev3PoolSetUserUseReserveAsCollateral
   * @request POST:/aave/v3/pool/{address}/setUserUseReserveAsCollateral
   * @secure
   */
  export namespace Aavev3PoolSetUserUseReserveAsCollateral {
    export type RequestParams = {
      /** - The address of the user. */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AavePoolInputBody;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = Aavev3PoolSetUserUseReserveAsCollateralData;
  }

  /**
   * @description Supplies assets to the Aave pool.
   * @tags AAVEv3 Pool
   * @name Aavev3PoolSupply
   * @request POST:/aave/v3/pool/{address}/supply
   * @secure
   */
  export namespace Aavev3PoolSupply {
    export type RequestParams = {
      /** - The address of the user supplying the assets. */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AavePoolInputBody;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = Aavev3PoolSupplyData;
  }

  /**
   * @description Withdraws assets from the Aave pool.
   * @tags AAVEv3 Pool
   * @name Aavev3PoolWithdraw
   * @request POST:/aave/v3/pool/{address}/withdraw
   * @secure
   */
  export namespace Aavev3PoolWithdraw {
    export type RequestParams = {
      /** - The address from which to withdraw assets. */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AavePoolInputBody;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = Aavev3PoolWithdrawData;
  }

  /**
   * @description Claims all available rewards for the specified assets
   * @tags AAVEv3Rewards
   * @name AavEv3RewardsClaimAllRewards
   * @request POST:/aave/v3/rewards/{address}/claimAllRewards
   * @secure
   */
  export namespace AavEv3RewardsClaimAllRewards {
    export type RequestParams = {
      /** - Address claiming the rewards */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AAVEv3RewardsInputBody;
    export type RequestHeaders = {
      /** - Authorization token from the request header */
      Authorization: string;
    };
    export type ResponseBody = AavEv3RewardsClaimAllRewardsData;
  }

  /**
   * @description Claims all rewards on behalf of another address
   * @tags AAVEv3Rewards
   * @name AavEv3RewardsClaimAllRewardsOnBehalf
   * @request POST:/aave/v3/rewards/{address}/claimAllRewardsOnBehalf
   * @secure
   */
  export namespace AavEv3RewardsClaimAllRewardsOnBehalf {
    export type RequestParams = {
      /** - Address claiming the rewards */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AAVEv3RewardsInputBody;
    export type RequestHeaders = {
      /** - Authorization token from the request header */
      Authorization: string;
    };
    export type ResponseBody = AavEv3RewardsClaimAllRewardsOnBehalfData;
  }

  /**
   * @description Claims all rewards to the calling address
   * @tags AAVEv3Rewards
   * @name AavEv3RewardsClaimAllRewardsToSelf
   * @request POST:/aave/v3/rewards/{address}/claimAllRewardsToSelf
   * @secure
   */
  export namespace AavEv3RewardsClaimAllRewardsToSelf {
    export type RequestParams = {
      /** - Address claiming the rewards */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AAVEv3RewardsInputBody;
    export type RequestHeaders = {
      /** - Authorization token from the request header */
      Authorization: string;
    };
    export type ResponseBody = AavEv3RewardsClaimAllRewardsToSelfData;
  }

  /**
   * @description Claims rewards for the specified assets and rewards
   * @tags AAVEv3Rewards
   * @name AavEv3RewardsClaimRewards
   * @request POST:/aave/v3/rewards/{address}/claimRewards
   * @secure
   */
  export namespace AavEv3RewardsClaimRewards {
    export type RequestParams = {
      /** - Address claiming the rewards */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AAVEv3RewardsInputBody;
    export type RequestHeaders = {
      /** - Authorization token from the request header */
      Authorization: string;
    };
    export type ResponseBody = AavEv3RewardsClaimRewardsData;
  }

  /**
   * @description Claims rewards on behalf of another address
   * @tags AAVEv3Rewards
   * @name AavEv3RewardsClaimRewardsOnBehalf
   * @request POST:/aave/v3/rewards/{address}/claimRewardsOnBehalf
   * @secure
   */
  export namespace AavEv3RewardsClaimRewardsOnBehalf {
    export type RequestParams = {
      /** - Address claiming the rewards */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AAVEv3RewardsInputBody;
    export type RequestHeaders = {
      /** - Authorization token from the request header */
      Authorization: string;
    };
    export type ResponseBody = AavEv3RewardsClaimRewardsOnBehalfData;
  }

  /**
   * @description Claims rewards to the calling address
   * @tags AAVEv3Rewards
   * @name AavEv3RewardsClaimRewardsToSelf
   * @request POST:/aave/v3/rewards/{address}/claimRewardsToSelf
   * @secure
   */
  export namespace AavEv3RewardsClaimRewardsToSelf {
    export type RequestParams = {
      /** - Address claiming the rewards */
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AAVEv3RewardsInputBody;
    export type RequestHeaders = {
      /** - Authorization token from the request header */
      Authorization: string;
    };
    export type ResponseBody = AavEv3RewardsClaimRewardsToSelfData;
  }

  /**
   * @description Retrieves all rewards for a specific asset
   * @tags AAVEv3Rewards
   * @name AavEv3RewardsGetRewardsByAsset
   * @request GET:/aave/v3/rewards/{account}/rewardsByAsset
   * @secure
   */
  export namespace AavEv3RewardsGetRewardsByAsset {
    export type RequestParams = {
      /** - Account identifier for the request */
      account: string;
    };
    export type RequestQuery = {
      /** - Contract address */
      address: string;
      /** - Asset address to query rewards for */
      asset: string;
      /** - Chain ID to target */
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - Authorization token from the request header */
      Authorization: string;
    };
    export type ResponseBody = AavEv3RewardsGetRewardsByAssetData;
  }

  /**
   * @description Retrieves rewards configuration data for an asset
   * @tags AAVEv3Rewards
   * @name AavEv3RewardsGetRewardsData
   * @request GET:/aave/v3/rewards/{account}/rewardsData
   * @secure
   */
  export namespace AavEv3RewardsGetRewardsData {
    export type RequestParams = {
      /** - Account identifier for the request */
      account: string;
    };
    export type RequestQuery = {
      /** - Contract address */
      address: string;
      /** - Asset address to get rewards data for */
      asset: string;
      /** - Chain ID to target */
      chainId: string;
      /** - Reward token address */
      reward: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - Authorization token from the request header */
      Authorization: string;
    };
    export type ResponseBody = AavEv3RewardsGetRewardsDataData;
  }

  /**
   * @description Gets reward data for a specific user
   * @tags AAVEv3Rewards
   * @name AavEv3RewardsGetUserRewards
   * @request GET:/aave/v3/rewards/{account}/userRewards
   * @secure
   */
  export namespace AavEv3RewardsGetUserRewards {
    export type RequestParams = {
      /** - Account identifier for the request */
      account: string;
    };
    export type RequestQuery = {
      /** - Contract address */
      address: string;
      /** - Array of asset addresses to check rewards for */
      assets: string[];
      /** - Chain ID to target */
      chainId: string;
      /** - Reward token address */
      reward: string;
      /** - User address to check rewards for */
      user: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - Authorization token from the request header */
      Authorization: string;
    };
    export type ResponseBody = AavEv3RewardsGetUserRewardsData;
  }

  /**
   * @description Retrieves the ETH currency unit from the AAVE V3 UI Pool Data Provider.
   * @tags AAVE v3 UI Pool Data Provider
   * @name AaveV3UiPoolDataProviderEthCurrencyUnit
   * @request GET:/aave/v3/pool-data/eth-currency-unit
   * @secure
   */
  export namespace AaveV3UiPoolDataProviderEthCurrencyUnit {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The chain ID to query. */
      chain_id: string;
      /** - The contract address to query. */
      contract_address: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = AaveV3UiPoolDataProviderEthCurrencyUnitData;
  }

  /**
   * @description Retrieves the market reference currency price in USD using the proxy aggregator.
   * @tags AAVE v3 UI Pool Data Provider
   * @name AaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregator
   * @request GET:/aave/v3/pool-data/market-reference-currency-price-in-usd-proxy-aggregator
   * @secure
   */
  export namespace AaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregator {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The chain ID to query. */
      chain_id: string;
      /** - The contract address to query. */
      contract_address: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody =
      AaveV3UiPoolDataProviderMarketReferenceCurrencyPriceInUsdProxyAggregatorData;
  }

  /**
   * @description Retrieves the network base token price in USD using the proxy aggregator.
   * @tags AAVE v3 UI Pool Data Provider
   * @name AaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregator
   * @request GET:/aave/v3/pool-data/network-base-token-price-in-usd-proxy-aggregator
   * @secure
   */
  export namespace AaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregator {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The chain ID to query. */
      chain_id: string;
      /** - The contract address to query. */
      contract_address: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody =
      AaveV3UiPoolDataProviderNetworkBaseTokenPriceInUsdProxyAggregatorData;
  }

  /**
   * @description Retrieves the list of reserves from the AAVE V3 UI Pool Data Provider.
   * @tags AAVE v3 UI Pool Data Provider
   * @name AaveV3UiPoolDataProviderReservesList
   * @request GET:/aave/v3/pool-data/reserves-list
   * @secure
   */
  export namespace AaveV3UiPoolDataProviderReservesList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The chain ID to query. */
      chain_id: string;
      /** - The contract address to query. */
      contract_address: string;
      /** - The provider to use for querying the reserves list. */
      provider: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = AaveV3UiPoolDataProviderReservesListData;
  }

  /**
   * @description Retrieves the user's reserve data from the AAVE v3 UI Pool Data Provider.
   * @tags AAVE v3 UI Pool Data Provider
   * @name AaveV3UiPoolDataProviderUserReservesData
   * @request GET:/aave/v3/pool-data/user-reserves-data
   * @secure
   */
  export namespace AaveV3UiPoolDataProviderUserReservesData {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The chain ID where the contract is deployed. */
      chain_id: string;
      /** - The contract address of the AAVE v3 UI Pool Data Provider. */
      contract_address: string;
      /** - The provider address. */
      provider: string;
      /** - The user address whose reserve data is to be fetched. */
      user: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = AaveV3UiPoolDataProviderUserReservesDataData;
  }

  /**
   * @description Retrieves the balance of a specific token for a user from the AAVE v3 Wallet Balance Provider.
   * @tags AAVE v3 Wallet Balance Provider
   * @name AaveV3WalletBalanceOf
   * @request GET:/aave/v3/wallet-balance/balance-of
   * @secure
   */
  export namespace AaveV3WalletBalanceOf {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The ID of the blockchain network. */
      chain_id: string;
      /** - The address of the contract to query. */
      contract_address: string;
      /** - The address of the token to query the balance for. */
      token_address: string;
      /** - The address of the user whose balance is being queried. */
      user: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = AaveV3WalletBalanceOfData;
  }

  /**
   * @description Retrieves the batch balance of multiple users for specified tokens.
   * @tags AAVE v3 Wallet Balance Provider
   * @name AaveV3WalletBatchBalanceOf
   * @request GET:/aave/v3/wallet-balance/batch-balance-of
   * @secure
   */
  export namespace AaveV3WalletBatchBalanceOf {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The ID of the blockchain network. */
      chain_id: string;
      /** - The address of the contract. */
      contract_address: string;
      /** - An array of token addresses to retrieve balances for. */
      tokens: string[];
      /** - An array of user addresses to retrieve balances for. */
      users: string[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = AaveV3WalletBatchBalanceOfData;
  }

  /**
   * @description Retrieves the wallet balances for a user from the AAVE v3 Wallet Balance Provider.
   * @tags AAVE v3 Wallet Balance Provider
   * @name AaveV3WalletUserWalletBalances
   * @request GET:/aave/v3/wallet-balance/user-wallet-balances
   * @secure
   */
  export namespace AaveV3WalletUserWalletBalances {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The chain ID to query. */
      chain_id: string;
      /** - The contract address to query. */
      contract_address: string;
      /** - The provider to use for querying balances. */
      provider: string;
      /** - The user address to query balances for. */
      user: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = AaveV3WalletUserWalletBalancesData;
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
}
