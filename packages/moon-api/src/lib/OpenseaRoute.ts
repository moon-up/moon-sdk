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
  CollectionOrderByOption,
  CreateCollectionOfferData,
  CreateListingData,
  CreateOfferData,
  FulfillOrderData,
  FulfillOrderPayload,
  GetAccountData,
  GetAllListingsData,
  GetAllOffersData,
  GetBestListingData,
  GetBestOfferData,
  GetCollectionData,
  GetCollectionStatsData,
  GetCollectionsData,
  GetNfTsByAccountData,
  GetNfTsByCollectionData,
  GetNfTsByContractData,
  GetNftData,
  GetOrdersData,
  GetPaymentTokenData,
  OffchainCancelOrderData,
  OffchainCancelOrderPayload,
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
   * @name CancelOrder
   * @request POST:/opensea/{account}/cancelOrder
   * @secure
   */
  export namespace CancelOrder {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CancelOrderPayload;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CancelOrderData;
  }

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
   * @name CreateListing
   * @request POST:/opensea/{account}/createListing
   * @secure
   */
  export namespace CreateListing {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = OpenSeaNFTInputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateListingData;
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
   * @name FulfillOrder
   * @request POST:/opensea/{account}/fulfillOrder
   * @secure
   */
  export namespace FulfillOrder {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = FulfillOrderPayload;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = FulfillOrderData;
  }

  /**
   * No description
   * @tags OpenSea
   * @name GetAccount
   * @request GET:/opensea/{account}/getAccount/{address}
   * @secure
   */
  export namespace GetAccount {
    export type RequestParams = {
      account: string;
      address: string;
    };
    export type RequestQuery = {
      /** @default "1" */
      chainId?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetAccountData;
  }

  /**
   * No description
   * @tags OpenSea
   * @name GetAllListings
   * @request GET:/opensea/{account}/getAllListings/{collectionSlug}
   * @secure
   */
  export namespace GetAllListings {
    export type RequestParams = {
      account: string;
      collectionSlug: string;
    };
    export type RequestQuery = {
      /** @default "1" */
      chainId?: string;
      /** @format double */
      limit?: number;
      next?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetAllListingsData;
  }

  /**
   * No description
   * @tags OpenSea
   * @name GetAllOffers
   * @request GET:/opensea/{account}/getAllOffers/{collectionSlug}
   * @secure
   */
  export namespace GetAllOffers {
    export type RequestParams = {
      account: string;
      collectionSlug: string;
    };
    export type RequestQuery = {
      /** @default "1" */
      chainId?: string;
      /** @format double */
      limit?: number;
      next?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetAllOffersData;
  }

  /**
   * No description
   * @tags OpenSea
   * @name GetBestListing
   * @request GET:/opensea/{account}/getBestListing/{collectionSlug}/{tokenId}
   * @secure
   */
  export namespace GetBestListing {
    export type RequestParams = {
      account: string;
      collectionSlug: string;
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
    export type ResponseBody = GetBestListingData;
  }

  /**
   * No description
   * @tags OpenSea
   * @name GetBestOffer
   * @request GET:/opensea/{account}/getBestOffer/{collectionSlug}/{tokenId}
   * @secure
   */
  export namespace GetBestOffer {
    export type RequestParams = {
      account: string;
      collectionSlug: string;
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
    export type ResponseBody = GetBestOfferData;
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
   * @name GetCollections
   * @request GET:/opensea/{account}/getCollections
   * @secure
   */
  export namespace GetCollections {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      /** @default "1" */
      chainId?: string;
      creatorUsername?: string;
      includeHidden?: boolean;
      /** @format double */
      limit?: number;
      next?: string;
      orderBy?: CollectionOrderByOption;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetCollectionsData;
  }

  /**
   * No description
   * @tags OpenSea
   * @name GetCollectionStats
   * @request GET:/opensea/{account}/getCollectionStats/{slug}
   * @secure
   */
  export namespace GetCollectionStats {
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
    export type ResponseBody = GetCollectionStatsData;
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
   * @name GetNfTsByAccount
   * @request GET:/opensea/{account}/getNFTsByAccount/{address}
   * @secure
   */
  export namespace GetNfTsByAccount {
    export type RequestParams = {
      account: string;
      address: string;
    };
    export type RequestQuery = {
      /** @default "1" */
      chainId?: string;
      /** @format double */
      limit?: number;
      next?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetNfTsByAccountData;
  }

  /**
   * No description
   * @tags OpenSea
   * @name GetNfTsByCollection
   * @request GET:/opensea/{account}/getNFTsByCollection/{slug}
   * @secure
   */
  export namespace GetNfTsByCollection {
    export type RequestParams = {
      account: string;
      slug: string;
    };
    export type RequestQuery = {
      /** @default "1" */
      chainId?: string;
      /** @format double */
      limit?: number;
      next?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetNfTsByCollectionData;
  }

  /**
   * No description
   * @tags OpenSea
   * @name GetNfTsByContract
   * @request GET:/opensea/{account}/getNFTsByContract/{address}
   * @secure
   */
  export namespace GetNfTsByContract {
    export type RequestParams = {
      account: string;
      address: string;
    };
    export type RequestQuery = {
      /** @default "1" */
      chainId?: string;
      /** @format double */
      limit?: number;
      next?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetNfTsByContractData;
  }

  /**
   * No description
   * @tags OpenSea
   * @name GetOrders
   * @request GET:/opensea/{account}/getOrders
   * @secure
   */
  export namespace GetOrders {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      /** @default "1" */
      chainId?: string;
      options: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetOrdersData;
  }

  /**
   * No description
   * @tags OpenSea
   * @name GetPaymentToken
   * @request GET:/opensea/{account}/getPaymentToken/{address}
   * @secure
   */
  export namespace GetPaymentToken {
    export type RequestParams = {
      account: string;
      address: string;
    };
    export type RequestQuery = {
      /** @default "1" */
      chainId?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetPaymentTokenData;
  }

  /**
   * No description
   * @tags OpenSea
   * @name OffchainCancelOrder
   * @request POST:/opensea/{account}/offchainCancelOrder
   * @secure
   */
  export namespace OffchainCancelOrder {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {};
    export type RequestBody = OffchainCancelOrderPayload;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = OffchainCancelOrderData;
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
