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
  ChartsGetChartAnalysisParamsEnum,
  DataExecuteCustomSupabaseQueryData,
  DataExecuteCustomSupabaseQueryPayload,
  DataGetAllUserDebankNfTsData,
  DataGetAllUserDebankNfTsParams,
  DataGetBitcoinBalanceData,
  DataGetBitcoinTransactionsData,
  DataGetBitcoinTransactionsParams,
  DataGetCoinGeckoCoinInfoData,
  DataGetCoinGeckoCoinInfoParams,
  DataGetCoinGeckoCoinListData,
  DataGetCoinGeckoCoinListParams,
  DataGetCoinGeckoCoinMarketsData,
  DataGetCoinGeckoCoinMarketsParams,
  DataGetDogecoinBalanceData,
  DataGetDogecoinTransactionsData,
  DataGetDogecoinTransactionsParams,
  DataGetLitecoinBalanceData,
  DataGetLitecoinTransactionsData,
  DataGetLitecoinTransactionsParams,
  DataGetPortfolioFetchStatusData,
  DataGetTokensMetadataData,
  DataGetTokensMetadataParams,
  DataGetTronBalanceData,
  DataGetTronTransactionsData,
  DataGetTronTransactionsParams,
  DataGetUserDebankComplexProtocolListData,
  DataGetUserDebankComplexProtocolListParams,
  DataGetUserDebankNftListData,
  DataGetUserDebankNftListParams,
  DataGetUserDebankTokenListData,
  DataGetUserDebankTokenListParams,
  DataGetUserDebankTotalBalanceData,
  DataGetUserDebankTotalBalanceParams,
  DataGetUserWalletPortfolioData,
  DataGetUserWalletPortfolioParams,
  DataGetWalletNfTsData,
  DataGetWalletNfTsParams,
  DataGetWalletTokenBalancesData,
  DataGetWalletTokenBalancesParams,
  DataGetWalletTransactionHistoryData,
  DataGetWalletTransactionHistoryParams,
  DataGetXrpBalanceData,
  DataGetXrpTransactionsData,
  GetAllDebankUserTokensData,
  GetAllDebankUserTokensParams,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Data<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Retrieves the chart analysis for a given trading symbol and timeframe.
   *
   * @tags Data
   * @name ChartsGetChartAnalysis
   * @request GET:/data/analysis/{symbol}/{timeframe}
   * @secure
   */
  chartsGetChartAnalysis = (
    symbol: string,
    timeframe: ChartsGetChartAnalysisParamsEnum,
    params: RequestParams = {}
  ) =>
    this.http.request<ChartsGetChartAnalysisData, any>({
      path: `/data/analysis/${symbol}/${timeframe}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Executes a query using the LLMSupabaseQueryGenerator and returns the result.
   *
   * @tags Data
   * @name DataExecuteCustomSupabaseQuery
   * @request POST:/data/query
   * @secure
   */
  dataExecuteCustomSupabaseQuery = (
    data: DataExecuteCustomSupabaseQueryPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<DataExecuteCustomSupabaseQueryData, any>({
      path: `/data/query`,
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
   * @tags Data
   * @name DataGetAllUserDebankNfTs
   * @request GET:/data/{address}/debank/all-nfts
   * @secure
   */
  dataGetAllUserDebankNfTs = (
    { address, ...query }: DataGetAllUserDebankNfTsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DataGetAllUserDebankNfTsData, any>({
      path: `/data/${address}/debank/all-nfts`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Data
   * @name DataGetBitcoinBalance
   * @request GET:/data/{address}/bitcoin/balance
   * @secure
   */
  dataGetBitcoinBalance = (address: string, params: RequestParams = {}) =>
    this.http.request<DataGetBitcoinBalanceData, any>({
      path: `/data/${address}/bitcoin/balance`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Data
   * @name DataGetBitcoinTransactions
   * @request GET:/data/{address}/bitcoin/transactions
   * @secure
   */
  dataGetBitcoinTransactions = (
    { address, ...query }: DataGetBitcoinTransactionsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DataGetBitcoinTransactionsData, any>({
      path: `/data/${address}/bitcoin/transactions`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Data
   * @name DataGetCoinGeckoCoinInfo
   * @request GET:/data/coingecko/coin/{id}
   * @secure
   */
  dataGetCoinGeckoCoinInfo = (
    { id, ...query }: DataGetCoinGeckoCoinInfoParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DataGetCoinGeckoCoinInfoData, any>({
      path: `/data/coingecko/coin/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Data
   * @name DataGetCoinGeckoCoinList
   * @request GET:/data/coingecko/coins/list
   * @secure
   */
  dataGetCoinGeckoCoinList = (
    query: DataGetCoinGeckoCoinListParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DataGetCoinGeckoCoinListData, any>({
      path: `/data/coingecko/coins/list`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Data
   * @name DataGetCoinGeckoCoinMarkets
   * @request GET:/data/coingecko/coins/markets
   * @secure
   */
  dataGetCoinGeckoCoinMarkets = (
    query: DataGetCoinGeckoCoinMarketsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DataGetCoinGeckoCoinMarketsData, any>({
      path: `/data/coingecko/coins/markets`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Data
   * @name DataGetDogecoinBalance
   * @request GET:/data/{address}/dogecoin/balance
   * @secure
   */
  dataGetDogecoinBalance = (address: string, params: RequestParams = {}) =>
    this.http.request<DataGetDogecoinBalanceData, any>({
      path: `/data/${address}/dogecoin/balance`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Data
   * @name DataGetDogecoinTransactions
   * @request GET:/data/{address}/dogecoin/transactions
   * @secure
   */
  dataGetDogecoinTransactions = (
    { address, ...query }: DataGetDogecoinTransactionsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DataGetDogecoinTransactionsData, any>({
      path: `/data/${address}/dogecoin/transactions`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Data
   * @name DataGetLitecoinBalance
   * @request GET:/data/{address}/litecoin/balance
   * @secure
   */
  dataGetLitecoinBalance = (address: string, params: RequestParams = {}) =>
    this.http.request<DataGetLitecoinBalanceData, any>({
      path: `/data/${address}/litecoin/balance`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Data
   * @name DataGetLitecoinTransactions
   * @request GET:/data/{address}/litecoin/transactions
   * @secure
   */
  dataGetLitecoinTransactions = (
    { address, ...query }: DataGetLitecoinTransactionsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DataGetLitecoinTransactionsData, any>({
      path: `/data/${address}/litecoin/transactions`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the status of a portfolio job.
   *
   * @tags Data
   * @name DataGetPortfolioFetchStatus
   * @request GET:/data/portfolio/status/{jobId}
   * @secure
   */
  dataGetPortfolioFetchStatus = (jobId: string, params: RequestParams = {}) =>
    this.http.request<DataGetPortfolioFetchStatusData, any>({
      path: `/data/portfolio/status/${jobId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves token metadata from the Moralis service.
   *
   * @tags Data
   * @name DataGetTokensMetadata
   * @request GET:/data/token-metadata
   * @secure
   */
  dataGetTokensMetadata = (
    query: DataGetTokensMetadataParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DataGetTokensMetadataData, any>({
      path: `/data/token-metadata`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Data
   * @name DataGetTronBalance
   * @request GET:/data/{address}/tron/balance
   * @secure
   */
  dataGetTronBalance = (address: string, params: RequestParams = {}) =>
    this.http.request<DataGetTronBalanceData, any>({
      path: `/data/${address}/tron/balance`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Data
   * @name DataGetTronTransactions
   * @request GET:/data/{address}/tron/transactions
   * @secure
   */
  dataGetTronTransactions = (
    { address, ...query }: DataGetTronTransactionsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DataGetTronTransactionsData, any>({
      path: `/data/${address}/tron/transactions`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the user's complex protocol list from Debank, with Supabase caching.
   *
   * @tags Data
   * @name DataGetUserDebankComplexProtocolList
   * @request GET:/data/{address}/debank/complex-protocols
   * @secure
   */
  dataGetUserDebankComplexProtocolList = (
    { address, ...query }: DataGetUserDebankComplexProtocolListParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DataGetUserDebankComplexProtocolListData, any>({
      path: `/data/${address}/debank/complex-protocols`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Data
   * @name DataGetUserDebankNftList
   * @request GET:/data/{address}/debank/nfts
   * @secure
   */
  dataGetUserDebankNftList = (
    { address, ...query }: DataGetUserDebankNftListParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DataGetUserDebankNftListData, any>({
      path: `/data/${address}/debank/nfts`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the user's token list from Debank, with Supabase caching.
   *
   * @tags Data
   * @name DataGetUserDebankTokenList
   * @request GET:/data/{address}/debank/tokens
   * @secure
   */
  dataGetUserDebankTokenList = (
    { address, ...query }: DataGetUserDebankTokenListParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DataGetUserDebankTokenListData, any>({
      path: `/data/${address}/debank/tokens`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Data
   * @name DataGetUserDebankTotalBalance
   * @request GET:/data/{address}/debank/total-balance
   * @secure
   */
  dataGetUserDebankTotalBalance = (
    { address, ...query }: DataGetUserDebankTotalBalanceParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DataGetUserDebankTotalBalanceData, any>({
      path: `/data/${address}/debank/total-balance`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the user's portfolio based on the provided wallet address.
   *
   * @tags Data
   * @name DataGetUserWalletPortfolio
   * @request GET:/data/{address}/portfolio
   * @secure
   */
  dataGetUserWalletPortfolio = (
    { address, ...query }: DataGetUserWalletPortfolioParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DataGetUserWalletPortfolioData, any>({
      path: `/data/${address}/portfolio`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Data
   * @name DataGetWalletNfTs
   * @request GET:/data/{address}/nfts
   * @secure
   */
  dataGetWalletNfTs = (
    { address, ...query }: DataGetWalletNfTsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DataGetWalletNfTsData, any>({
      path: `/data/${address}/nfts`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the wallet balance for a given address.
   *
   * @tags Data
   * @name DataGetWalletTokenBalances
   * @request GET:/data/{address}/balance
   * @secure
   */
  dataGetWalletTokenBalances = (
    { address, ...query }: DataGetWalletTokenBalancesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DataGetWalletTokenBalancesData, any>({
      path: `/data/${address}/balance`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the wallet history for a given address and blockchain chain.
   *
   * @tags Data
   * @name DataGetWalletTransactionHistory
   * @request GET:/data/{address}/history
   * @secure
   */
  dataGetWalletTransactionHistory = (
    { address, ...query }: DataGetWalletTransactionHistoryParams,
    params: RequestParams = {}
  ) =>
    this.http.request<DataGetWalletTransactionHistoryData, any>({
      path: `/data/${address}/history`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Data
   * @name DataGetXrpBalance
   * @request GET:/data/{account}/xrp/balance
   * @secure
   */
  dataGetXrpBalance = (account: string, params: RequestParams = {}) =>
    this.http.request<DataGetXrpBalanceData, any>({
      path: `/data/${account}/xrp/balance`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Data
   * @name DataGetXrpTransactions
   * @request GET:/data/{account}/xrp/transactions
   * @secure
   */
  dataGetXrpTransactions = (account: string, params: RequestParams = {}) =>
    this.http.request<DataGetXrpTransactionsData, any>({
      path: `/data/${account}/xrp/transactions`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Data
   * @name GetAllDebankUserTokens
   * @request GET:/data/{address}/debank/all-tokens
   * @secure
   */
  getAllDebankUserTokens = (
    { address, ...query }: GetAllDebankUserTokensParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAllDebankUserTokensData, any>({
      path: `/data/${address}/debank/all-tokens`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
}
