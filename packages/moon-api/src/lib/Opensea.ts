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
  CreateCollectionOfferData,
  CreateOfferData,
  GetCollectionData,
  GetCollectionParams,
  GetNftData,
  GetNftParams,
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
