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
  CreateComponentData,
  ForceEmbeddingData,
  ForceEmbeddingPayload,
  GetComponentCapabilitiesDescriptionData,
  GetComponentData,
  GetComponentsData,
  OmitComponentDefinitionId,
  PartialComponentDefinition,
  SearchComponentsData,
  UpdateComponentData,
  UpdateEmbeddingData,
  UpdateEmbeddingPayload,
} from './data-contracts';

export namespace Components {
  /**
   * No description
   * @tags Components
   * @name CreateComponent
   * @request POST:/components
   * @secure
   */
  export namespace CreateComponent {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = OmitComponentDefinitionId;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = CreateComponentData;
  }

  /**
   * No description
   * @tags Components
   * @name ForceEmbedding
   * @request POST:/components/{id}/embedding/force
   * @secure
   */
  export namespace ForceEmbedding {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ForceEmbeddingPayload;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ForceEmbeddingData;
  }

  /**
   * No description
   * @tags Components
   * @name GetComponent
   * @request GET:/components/{id}
   * @secure
   */
  export namespace GetComponent {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetComponentData;
  }

  /**
   * No description
   * @tags Components
   * @name GetComponentCapabilitiesDescription
   * @request GET:/components/capabilities
   * @secure
   */
  export namespace GetComponentCapabilitiesDescription {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetComponentCapabilitiesDescriptionData;
  }

  /**
   * No description
   * @tags Components
   * @name GetComponents
   * @request GET:/components
   * @secure
   */
  export namespace GetComponents {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetComponentsData;
  }

  /**
   * No description
   * @tags Components
   * @name SearchComponents
   * @request GET:/components/search
   * @secure
   */
  export namespace SearchComponents {
    export type RequestParams = {};
    export type RequestQuery = {
      limit?: string;
      query: string;
      threshold?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SearchComponentsData;
  }

  /**
   * No description
   * @tags Components
   * @name UpdateComponent
   * @request POST:/components/{id}
   * @secure
   */
  export namespace UpdateComponent {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PartialComponentDefinition;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = UpdateComponentData;
  }

  /**
   * No description
   * @tags Components
   * @name UpdateEmbedding
   * @request POST:/components/{id}/embedding
   * @secure
   */
  export namespace UpdateEmbedding {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateEmbeddingPayload;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = UpdateEmbeddingData;
  }
}
