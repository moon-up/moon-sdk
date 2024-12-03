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
  ComponentsCreateComponentData,
  ComponentsForceEmbeddingData,
  ComponentsForceEmbeddingPayload,
  ComponentsGetComponentCapabilitiesDescriptionData,
  ComponentsGetComponentData,
  ComponentsGetComponentsData,
  ComponentsSearchComponentsData,
  ComponentsUpdateComponentData,
  ComponentsUpdateEmbeddingData,
  ComponentsUpdateEmbeddingPayload,
  OmitComponentDefinitionId,
  PartialComponentDefinition,
} from './data-contracts';

export namespace Components {
  /**
   * @description Creates a new component in the database.
   * @tags Components
   * @name ComponentsCreateComponent
   * @request POST:/components
   * @secure
   */
  export namespace ComponentsCreateComponent {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = OmitComponentDefinitionId;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = ComponentsCreateComponentData;
  }

  /**
   * @description Forces the embedding of a description for a component.
   * @tags Components
   * @name ComponentsForceEmbedding
   * @request POST:/components/{id}/embedding/force
   * @secure
   */
  export namespace ComponentsForceEmbedding {
    export type RequestParams = {
      /** - The ID of the component. */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ComponentsForceEmbeddingPayload;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = ComponentsForceEmbeddingData;
  }

  /**
   * @description Retrieves a component by its ID.
   * @tags Components
   * @name ComponentsGetComponent
   * @request GET:/components/{id}
   * @secure
   */
  export namespace ComponentsGetComponent {
    export type RequestParams = {
      /** - The ID of the component to retrieve. */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = ComponentsGetComponentData;
  }

  /**
   * @description Retrieves the capabilities description of components from the database.
   * @tags Components
   * @name ComponentsGetComponentCapabilitiesDescription
   * @request GET:/components/capabilities
   * @secure
   */
  export namespace ComponentsGetComponentCapabilitiesDescription {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token provided in the request header. */
      Authorization: string;
    };
    export type ResponseBody =
      ComponentsGetComponentCapabilitiesDescriptionData;
  }

  /**
   * @description Retrieves a list of components from the database.
   * @tags Components
   * @name ComponentsGetComponents
   * @request GET:/components
   * @secure
   */
  export namespace ComponentsGetComponents {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token from the request header. */
      Authorization: string;
    };
    export type ResponseBody = ComponentsGetComponentsData;
  }

  /**
   * @description Searches for components similar to the specified query.
   * @tags Components
   * @name ComponentsSearchComponents
   * @request GET:/components/search
   * @secure
   */
  export namespace ComponentsSearchComponents {
    export type RequestParams = {};
    export type RequestQuery = {
      /** - The maximum number of results to return. */
      limit?: string;
      /** - The query to search for. */
      query: string;
      /** - The similarity threshold for the search. */
      threshold?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = ComponentsSearchComponentsData;
  }

  /**
   * @description Updates a component in the database.
   * @tags Components
   * @name ComponentsUpdateComponent
   * @request POST:/components/{id}
   * @secure
   */
  export namespace ComponentsUpdateComponent {
    export type RequestParams = {
      /** The ID of the component. */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PartialComponentDefinition;
    export type RequestHeaders = {
      /** The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = ComponentsUpdateComponentData;
  }

  /**
   * @description Updates the embedding of a component's description.
   * @tags Components
   * @name ComponentsUpdateEmbedding
   * @request POST:/components/{id}/embedding
   * @secure
   */
  export namespace ComponentsUpdateEmbedding {
    export type RequestParams = {
      /** - The ID of the component. */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ComponentsUpdateEmbeddingPayload;
    export type RequestHeaders = {
      /** - The authorization token. */
      Authorization: string;
    };
    export type ResponseBody = ComponentsUpdateEmbeddingData;
  }
}
