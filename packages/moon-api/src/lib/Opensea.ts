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
  CancelOrderData,
  CancelOrderPayload,
  CreateCollectionOfferData,
  CreateListingData,
  CreateOfferData,
  FulfillOrderData,
  FulfillOrderPayload,
  GetAccountData,
  GetAccountParams,
  GetAllListingsData,
  GetAllListingsParams,
  GetAllOffersData,
  GetAllOffersParams,
  GetBestListingData,
  GetBestListingParams,
  GetBestOfferData,
  GetBestOfferParams,
  GetCollectionData,
  GetCollectionParams,
  GetCollectionStatsData,
  GetCollectionStatsParams,
  GetCollectionsData,
  GetCollectionsParams,
  GetNfTsByAccountData,
  GetNfTsByAccountParams,
  GetNfTsByCollectionData,
  GetNfTsByCollectionParams,
  GetNfTsByContractData,
  GetNfTsByContractParams,
  GetNftData,
  GetNftParams,
  GetOrdersData,
  GetOrdersParams,
  GetPaymentTokenData,
  GetPaymentTokenParams,
  OffchainCancelOrderData,
  OffchainCancelOrderPayload,
  OpenSeaCollectionInputBody,
  OpenSeaNFTInputBody,
  UnwrapWethData,
  UnwrapWethPayload,
  WrapEthData,
  WrapEthPayload,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Opensea<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags OpenSea
   * @name CancelOrder
   * @request POST:/opensea/{account}/cancelOrder
   * @secure
   */
  cancelOrder = (
    account: string,
    data: CancelOrderPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<CancelOrderData, any>({
      path: `/opensea/${account}/cancelOrder`,
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
   * @tags OpenSea
   * @name CreateCollectionOffer
   * @request POST:/opensea/{account}/createCollectionOffer
   * @secure
   */
  createCollectionOffer = (
    account: string,
    data: OpenSeaCollectionInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateCollectionOfferData, any>({
      path: `/opensea/${account}/createCollectionOffer`,
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
   * @tags OpenSea
   * @name CreateListing
   * @request POST:/opensea/{account}/createListing
   * @secure
   */
  createListing = (
    account: string,
    data: OpenSeaNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateListingData, any>({
      path: `/opensea/${account}/createListing`,
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
   * @tags OpenSea
   * @name CreateOffer
   * @request POST:/opensea/{account}/createOffer
   * @secure
   */
  createOffer = (
    account: string,
    data: OpenSeaNFTInputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateOfferData, any>({
      path: `/opensea/${account}/createOffer`,
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
   * @tags OpenSea
   * @name FulfillOrder
   * @request POST:/opensea/{account}/fulfillOrder
   * @secure
   */
  fulfillOrder = (
    account: string,
    data: FulfillOrderPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<FulfillOrderData, any>({
      path: `/opensea/${account}/fulfillOrder`,
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
   * @tags OpenSea
   * @name GetAccount
   * @request GET:/opensea/{account}/getAccount/{address}
   * @secure
   */
  getAccount = (
    { account, address, ...query }: GetAccountParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAccountData, any>({
      path: `/opensea/${account}/getAccount/${address}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags OpenSea
   * @name GetAllListings
   * @request GET:/opensea/{account}/getAllListings/{collectionSlug}
   * @secure
   */
  getAllListings = (
    { account, collectionSlug, ...query }: GetAllListingsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAllListingsData, any>({
      path: `/opensea/${account}/getAllListings/${collectionSlug}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags OpenSea
   * @name GetAllOffers
   * @request GET:/opensea/{account}/getAllOffers/{collectionSlug}
   * @secure
   */
  getAllOffers = (
    { account, collectionSlug, ...query }: GetAllOffersParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAllOffersData, any>({
      path: `/opensea/${account}/getAllOffers/${collectionSlug}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags OpenSea
   * @name GetBestListing
   * @request GET:/opensea/{account}/getBestListing/{collectionSlug}/{tokenId}
   * @secure
   */
  getBestListing = (
    { account, collectionSlug, tokenId, ...query }: GetBestListingParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetBestListingData, any>({
      path: `/opensea/${account}/getBestListing/${collectionSlug}/${tokenId}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags OpenSea
   * @name GetBestOffer
   * @request GET:/opensea/{account}/getBestOffer/{collectionSlug}/{tokenId}
   * @secure
   */
  getBestOffer = (
    { account, collectionSlug, tokenId, ...query }: GetBestOfferParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetBestOfferData, any>({
      path: `/opensea/${account}/getBestOffer/${collectionSlug}/${tokenId}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags OpenSea
   * @name GetCollection
   * @request GET:/opensea/{account}/collection/{slug}
   * @secure
   */
  getCollection = (
    { account, slug, ...query }: GetCollectionParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetCollectionData, any>({
      path: `/opensea/${account}/collection/${slug}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags OpenSea
   * @name GetCollections
   * @request GET:/opensea/{account}/getCollections
   * @secure
   */
  getCollections = (
    { account, ...query }: GetCollectionsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetCollectionsData, any>({
      path: `/opensea/${account}/getCollections`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags OpenSea
   * @name GetCollectionStats
   * @request GET:/opensea/{account}/getCollectionStats/{slug}
   * @secure
   */
  getCollectionStats = (
    { account, slug, ...query }: GetCollectionStatsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetCollectionStatsData, any>({
      path: `/opensea/${account}/getCollectionStats/${slug}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags OpenSea
   * @name GetNft
   * @request GET:/opensea/{account}/nft/{address}/{tokenId}
   * @secure
   */
  getNft = (
    { account, address, tokenId, ...query }: GetNftParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetNftData, any>({
      path: `/opensea/${account}/nft/${address}/${tokenId}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags OpenSea
   * @name GetNfTsByAccount
   * @request GET:/opensea/{account}/getNFTsByAccount/{address}
   * @secure
   */
  getNfTsByAccount = (
    { account, address, ...query }: GetNfTsByAccountParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetNfTsByAccountData, any>({
      path: `/opensea/${account}/getNFTsByAccount/${address}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags OpenSea
   * @name GetNfTsByCollection
   * @request GET:/opensea/{account}/getNFTsByCollection/{slug}
   * @secure
   */
  getNfTsByCollection = (
    { account, slug, ...query }: GetNfTsByCollectionParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetNfTsByCollectionData, any>({
      path: `/opensea/${account}/getNFTsByCollection/${slug}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags OpenSea
   * @name GetNfTsByContract
   * @request GET:/opensea/{account}/getNFTsByContract/{address}
   * @secure
   */
  getNfTsByContract = (
    { account, address, ...query }: GetNfTsByContractParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetNfTsByContractData, any>({
      path: `/opensea/${account}/getNFTsByContract/${address}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags OpenSea
   * @name GetOrders
   * @request GET:/opensea/{account}/getOrders
   * @secure
   */
  getOrders = (
    { account, ...query }: GetOrdersParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetOrdersData, any>({
      path: `/opensea/${account}/getOrders`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags OpenSea
   * @name GetPaymentToken
   * @request GET:/opensea/{account}/getPaymentToken/{address}
   * @secure
   */
  getPaymentToken = (
    { account, address, ...query }: GetPaymentTokenParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetPaymentTokenData, any>({
      path: `/opensea/${account}/getPaymentToken/${address}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags OpenSea
   * @name OffchainCancelOrder
   * @request POST:/opensea/{account}/offchainCancelOrder
   * @secure
   */
  offchainCancelOrder = (
    account: string,
    data: OffchainCancelOrderPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<OffchainCancelOrderData, any>({
      path: `/opensea/${account}/offchainCancelOrder`,
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
   * @tags OpenSea
   * @name UnwrapWeth
   * @request POST:/opensea/{account}/unwrapWeth
   * @secure
   */
  unwrapWeth = (
    account: string,
    data: UnwrapWethPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<UnwrapWethData, any>({
      path: `/opensea/${account}/unwrapWeth`,
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
   * @tags OpenSea
   * @name WrapEth
   * @request POST:/opensea/{account}/wrapEth
   * @secure
   */
  wrapEth = (
    account: string,
    data: WrapEthPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<WrapEthData, any>({
      path: `/opensea/${account}/wrapEth`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
