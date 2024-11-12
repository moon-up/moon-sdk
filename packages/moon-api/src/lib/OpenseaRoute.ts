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
  GetNftData,
  OpenSeaCollectionInputBody,
  OpenSeaNFTInputBody,
  UnwrapWethData,
  UnwrapWethPayload,
  WrapEthData,
  WrapEthPayload,
} from './data-contracts';

export namespace Opensea {
  /**
   * No description
   * @tags OpenSea
   * @name CreateCollectionOffer
   * @request POST:/opensea/{account}/createCollectionOffer
   * @secure
   */
  export namespace CreateCollectionOffer {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = OpenSeaCollectionInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateCollectionOfferData;
  }

  /**
   * No description
   * @tags OpenSea
   * @name CreateOffer
   * @request POST:/opensea/{account}/createOffer
   * @secure
   */
  export namespace CreateOffer {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = OpenSeaNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateOfferData;
  }

  /**
   * No description
   * @tags OpenSea
   * @name GetCollection
   * @request GET:/opensea/{account}/collection/{slug}
   * @secure
   */
  export namespace GetCollection {
    export type RequestParams = {
      account: string;
      slug: string;
    };
    export type RequestQuery = {
      /** @default "1" */
      chainId?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetCollectionData;
  }

  /**
   * No description
   * @tags OpenSea
   * @name GetNft
   * @request GET:/opensea/{account}/nft/{address}/{tokenId}
   * @secure
   */
  export namespace GetNft {
    export type RequestParams = {
      account: string;
      address: string;
      tokenId: string;
    };
    export type RequestQuery = {
      /** @default "1" */
      chainId?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetNftData;
  }

  /**
   * No description
   * @tags OpenSea
   * @name UnwrapWeth
   * @request POST:/opensea/{account}/unwrapWeth
   * @secure
   */
  export namespace UnwrapWeth {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UnwrapWethPayload;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = UnwrapWethData;
  }

  /**
   * No description
   * @tags OpenSea
   * @name WrapEth
   * @request POST:/opensea/{account}/wrapEth
   * @secure
   */
  export namespace WrapEth {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = WrapEthPayload;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = WrapEthData;
  }
}
