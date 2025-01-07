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
  ChartsGetChartAnalysisData,
  ChartsGetChartAnalysisParamsTimeframeEnum,
  DataExecuteCustomSupabaseQueryData,
  DataExecuteCustomSupabaseQueryPayload,
  DataGetAllUserDebankNfTsData,
  DataGetBitcoinBalanceData,
  DataGetBitcoinTransactionsData,
  DataGetCoinGeckoCoinInfoData,
  DataGetCoinGeckoCoinListData,
  DataGetCoinGeckoCoinMarketsData,
  DataGetDogecoinBalanceData,
  DataGetDogecoinTransactionsData,
  DataGetLitecoinBalanceData,
  DataGetLitecoinTransactionsData,
  DataGetPortfolioFetchStatusData,
  DataGetTokensMetadataData,
  DataGetTronBalanceData,
  DataGetTronTransactionsData,
  DataGetUserDebankComplexProtocolListData,
  DataGetUserDebankNftListData,
  DataGetUserDebankTokenListData,
  DataGetUserDebankTotalBalanceData,
  DataGetUserWalletPortfolioData,
  DataGetWalletNfTsData,
  DataGetWalletTokenBalancesData,
  DataGetWalletTransactionHistoryData,
  DataGetXrpBalanceData,
  DataGetXrpTransactionsData,
  GetAllDebankUserTokensData,
} from './data-contracts';

export namespace Data {
  /**
   * @description Retrieves the chart analysis for a given trading symbol and timeframe.
   * @tags Data
   * @name ChartsGetChartAnalysis
   * @request GET:/data/analysis/{symbol}/{timeframe}
   * @secure
   */
  export namespace ChartsGetChartAnalysis {
    export type RequestParams = {
      /** - The trading view symbol for which the chart analysis is requested. */
      symbol: string;
      /**
       * - The timeframe for the chart analysis. Defaults to "1D". Can be "1D", "4H", or "1H".
       * @default "1D"
       */
      timeframe: ChartsGetChartAnalysisParamsTimeframeEnum;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = ChartsGetChartAnalysisData;
  }

  /**
   * @description Executes a query using the LLMSupabaseQueryGenerator and returns the result.
   * @tags Data
   * @name DataExecuteCustomSupabaseQuery
   * @request POST:/data/query
   * @secure
   */
  export namespace DataExecuteCustomSupabaseQuery {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = DataExecuteCustomSupabaseQueryPayload;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = DataExecuteCustomSupabaseQueryData;
  }

  /**
   * No description
   * @tags Data
   * @name DataGetAllUserDebankNfTs
   * @request GET:/data/{address}/debank/all-nfts
   * @secure
   */
  export namespace DataGetAllUserDebankNfTs {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {
      chainIds?: string;
      /** @default false */
      isAll?: boolean;
      refresh?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DataGetAllUserDebankNfTsData;
  }

  /**
   * No description
   * @tags Data
   * @name DataGetBitcoinBalance
   * @request GET:/data/{address}/bitcoin/balance
   * @secure
   */
  export namespace DataGetBitcoinBalance {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DataGetBitcoinBalanceData;
  }

  /**
   * No description
   * @tags Data
   * @name DataGetBitcoinTransactions
   * @request GET:/data/{address}/bitcoin/transactions
   * @secure
   */
  export namespace DataGetBitcoinTransactions {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {
      /** @format double */
      blockFrom?: number;
      /** @format double */
      blockTo?: number;
      /**
       * @format double
       * @default 0
       */
      offset?: number;
      /**
       * @format double
       * @default 10
       */
      pageSize?: number;
      txType?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DataGetBitcoinTransactionsData;
  }

  /**
   * No description
   * @tags Data
   * @name DataGetCoinGeckoCoinInfo
   * @request GET:/data/coingecko/coin/{id}
   * @secure
   */
  export namespace DataGetCoinGeckoCoinInfo {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      refresh?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DataGetCoinGeckoCoinInfoData;
  }

  /**
   * No description
   * @tags Data
   * @name DataGetCoinGeckoCoinList
   * @request GET:/data/coingecko/coins/list
   * @secure
   */
  export namespace DataGetCoinGeckoCoinList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @default false */
      includePlatform?: boolean;
      refresh?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DataGetCoinGeckoCoinListData;
  }

  /**
   * No description
   * @tags Data
   * @name DataGetCoinGeckoCoinMarkets
   * @request GET:/data/coingecko/coins/markets
   * @secure
   */
  export namespace DataGetCoinGeckoCoinMarkets {
    export type RequestParams = {};
    export type RequestQuery = {
      ids?: string;
      /** @default "market_cap_desc" */
      order?: string;
      /**
       * @format double
       * @default 1
       */
      page?: number;
      /**
       * @format double
       * @default 100
       */
      perPage?: number;
      priceChangePercentage?: string;
      refresh?: boolean;
      /** @default false */
      sparkline?: boolean;
      vsCurrency: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DataGetCoinGeckoCoinMarketsData;
  }

  /**
   * No description
   * @tags Data
   * @name DataGetDogecoinBalance
   * @request GET:/data/{address}/dogecoin/balance
   * @secure
   */
  export namespace DataGetDogecoinBalance {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DataGetDogecoinBalanceData;
  }

  /**
   * No description
   * @tags Data
   * @name DataGetDogecoinTransactions
   * @request GET:/data/{address}/dogecoin/transactions
   * @secure
   */
  export namespace DataGetDogecoinTransactions {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {
      /** @format double */
      blockFrom?: number;
      /** @format double */
      blockTo?: number;
      /**
       * @format double
       * @default 0
       */
      offset?: number;
      /**
       * @format double
       * @default 10
       */
      pageSize?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DataGetDogecoinTransactionsData;
  }

  /**
   * No description
   * @tags Data
   * @name DataGetLitecoinBalance
   * @request GET:/data/{address}/litecoin/balance
   * @secure
   */
  export namespace DataGetLitecoinBalance {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DataGetLitecoinBalanceData;
  }

  /**
   * No description
   * @tags Data
   * @name DataGetLitecoinTransactions
   * @request GET:/data/{address}/litecoin/transactions
   * @secure
   */
  export namespace DataGetLitecoinTransactions {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {
      /** @format double */
      blockFrom?: number;
      /** @format double */
      blockTo?: number;
      /**
       * @format double
       * @default 0
       */
      offset?: number;
      /**
       * @format double
       * @default 10
       */
      pageSize?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DataGetLitecoinTransactionsData;
  }

  /**
   * @description Retrieves the status of a portfolio job.
   * @tags Data
   * @name DataGetPortfolioFetchStatus
   * @request GET:/data/portfolio/status/{jobId}
   * @secure
   */
  export namespace DataGetPortfolioFetchStatus {
    export type RequestParams = {
      /** - The ID of the job to retrieve the status for. */
      jobId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = DataGetPortfolioFetchStatusData;
  }

  /**
   * @description Retrieves token metadata from the Moralis service.
   * @tags Data
   * @name DataGetTokensMetadata
   * @request GET:/data/token-metadata
   * @secure
   */
  export namespace DataGetTokensMetadata {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - An array of token addresses to fetch metadata for. */
      addresses: string[];
      /** - The blockchain network identifier. */
      chain: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = DataGetTokensMetadataData;
  }

  /**
   * No description
   * @tags Data
   * @name DataGetTronBalance
   * @request GET:/data/{address}/tron/balance
   * @secure
   */
  export namespace DataGetTronBalance {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DataGetTronBalanceData;
  }

  /**
   * No description
   * @tags Data
   * @name DataGetTronTransactions
   * @request GET:/data/{address}/tron/transactions
   * @secure
   */
  export namespace DataGetTronTransactions {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {
      /** @format double */
      maxTimestamp?: number;
      /** @format double */
      minTimestamp?: number;
      next?: string;
      onlyConfirmed?: boolean;
      onlyFrom?: boolean;
      onlyTo?: boolean;
      onlyUnconfirmed?: boolean;
      orderBy?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DataGetTronTransactionsData;
  }

  /**
   * @description Retrieves the user's complex protocol list from Debank, with Supabase caching.
   * @tags Data
   * @name DataGetUserDebankComplexProtocolList
   * @request GET:/data/{address}/debank/complex-protocols
   * @secure
   */
  export namespace DataGetUserDebankComplexProtocolList {
    export type RequestParams = {
      /** - The wallet address of the user. */
      address: string;
    };
    export type RequestQuery = {
      refresh?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = DataGetUserDebankComplexProtocolListData;
  }

  /**
   * No description
   * @tags Data
   * @name DataGetUserDebankNftList
   * @request GET:/data/{address}/debank/nfts
   * @secure
   */
  export namespace DataGetUserDebankNftList {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {
      chainId: string;
      /** @default false */
      isAll?: boolean;
      refresh?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DataGetUserDebankNftListData;
  }

  /**
   * @description Retrieves the user's token list from Debank, with Supabase caching.
   * @tags Data
   * @name DataGetUserDebankTokenList
   * @request GET:/data/{address}/debank/tokens
   * @secure
   */
  export namespace DataGetUserDebankTokenList {
    export type RequestParams = {
      /** - The wallet address of the user. */
      address: string;
    };
    export type RequestQuery = {
      /** - The chain ID to fetch tokens for. */
      chainId: string;
      refresh?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = DataGetUserDebankTokenListData;
  }

  /**
   * No description
   * @tags Data
   * @name DataGetUserDebankTotalBalance
   * @request GET:/data/{address}/debank/total-balance
   * @secure
   */
  export namespace DataGetUserDebankTotalBalance {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {
      refresh?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DataGetUserDebankTotalBalanceData;
  }

  /**
   * @description Retrieves the user's portfolio based on the provided wallet address.
   * @tags Data
   * @name DataGetUserWalletPortfolio
   * @request GET:/data/{address}/portfolio
   * @secure
   */
  export namespace DataGetUserWalletPortfolio {
    export type RequestParams = {
      /** - The wallet address of the user. */
      address: string;
    };
    export type RequestQuery = {
      /**
       * - The page number for pagination (default is 1).
       * @format double
       * @default 1
       */
      page?: number;
      /**
       * - The number of items per page for pagination (default is 100).
       * @format double
       * @default 100
       */
      pageSize?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = DataGetUserWalletPortfolioData;
  }

  /**
   * No description
   * @tags Data
   * @name DataGetWalletNfTs
   * @request GET:/data/{address}/nfts
   * @secure
   */
  export namespace DataGetWalletNfTs {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {
      chainIds?: string[];
      /** @default false */
      isAll?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DataGetWalletNfTsData;
  }

  /**
   * @description Retrieves the wallet balance for a given address.
   * @tags Data
   * @name DataGetWalletTokenBalances
   * @request GET:/data/{address}/balance
   * @secure
   */
  export namespace DataGetWalletTokenBalances {
    export type RequestParams = {
      /** - The wallet address to retrieve the balance for. */
      address: string;
    };
    export type RequestQuery = {
      /** - The blockchain network to query. */
      chain: string;
      /** - Optional flag to exclude native currency from the balance. */
      excludeNative?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = DataGetWalletTokenBalancesData;
  }

  /**
   * @description Retrieves the wallet history for a given address and blockchain chain.
   * @tags Data
   * @name DataGetWalletTransactionHistory
   * @request GET:/data/{address}/history
   * @secure
   */
  export namespace DataGetWalletTransactionHistory {
    export type RequestParams = {
      /** - The wallet address to retrieve history for. */
      address: string;
    };
    export type RequestQuery = {
      chainIds?: string[];
      /**
       * @format double
       * @default 20
       */
      pageCount?: number;
      /** @format double */
      startTime?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token for the request. */
      Authorization: string;
    };
    export type ResponseBody = DataGetWalletTransactionHistoryData;
  }

  /**
   * No description
   * @tags Data
   * @name DataGetXrpBalance
   * @request GET:/data/{account}/xrp/balance
   * @secure
   */
  export namespace DataGetXrpBalance {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DataGetXrpBalanceData;
  }

  /**
   * No description
   * @tags Data
   * @name DataGetXrpTransactions
   * @request GET:/data/{account}/xrp/transactions
   * @secure
   */
  export namespace DataGetXrpTransactions {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DataGetXrpTransactionsData;
  }

  /**
   * No description
   * @tags Data
   * @name GetAllDebankUserTokens
   * @request GET:/data/{address}/debank/all-tokens
   * @secure
   */
  export namespace GetAllDebankUserTokens {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {
      isAll: boolean;
      refresh?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetAllDebankUserTokensData;
  }
}
