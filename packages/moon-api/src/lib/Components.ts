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
  ComponentsSearchComponentsParams,
  ComponentsUpdateComponentData,
  ComponentsUpdateEmbeddingData,
  ComponentsUpdateEmbeddingPayload,
  OmitComponentDefinitionId,
  PartialComponentDefinition,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Components<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Creates a new component in the database.
   *
   * @tags Components
   * @name ComponentsCreateComponent
   * @request POST:/components
   * @secure
   */
  componentsCreateComponent = (
    data: OmitComponentDefinitionId,
    params: RequestParams = {}
  ) =>
    this.http.request<ComponentsCreateComponentData, any>({
      path: `/components`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Forces the embedding of a description for a component.
   *
   * @tags Components
   * @name ComponentsForceEmbedding
   * @request POST:/components/{id}/embedding/force
   * @secure
   */
  componentsForceEmbedding = (
    id: string,
    data: ComponentsForceEmbeddingPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<ComponentsForceEmbeddingData, any>({
      path: `/components/${id}/embedding/force`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves a component by its ID.
   *
   * @tags Components
   * @name ComponentsGetComponent
   * @request GET:/components/{id}
   * @secure
   */
  componentsGetComponent = (id: string, params: RequestParams = {}) =>
    this.http.request<ComponentsGetComponentData, any>({
      path: `/components/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves the capabilities description of components from the database.
   *
   * @tags Components
   * @name ComponentsGetComponentCapabilitiesDescription
   * @request GET:/components/capabilities
   * @secure
   */
  componentsGetComponentCapabilitiesDescription = (
    params: RequestParams = {}
  ) =>
    this.http.request<ComponentsGetComponentCapabilitiesDescriptionData, any>({
      path: `/components/capabilities`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves a list of components from the database.
   *
   * @tags Components
   * @name ComponentsGetComponents
   * @request GET:/components
   * @secure
   */
  componentsGetComponents = (params: RequestParams = {}) =>
    this.http.request<ComponentsGetComponentsData, any>({
      path: `/components`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Searches for components similar to the specified query.
   *
   * @tags Components
   * @name ComponentsSearchComponents
   * @request GET:/components/search
   * @secure
   */
  componentsSearchComponents = (
    query: ComponentsSearchComponentsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<ComponentsSearchComponentsData, any>({
      path: `/components/search`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates a component in the database.
   *
   * @tags Components
   * @name ComponentsUpdateComponent
   * @request POST:/components/{id}
   * @secure
   */
  componentsUpdateComponent = (
    id: string,
    data: PartialComponentDefinition,
    params: RequestParams = {}
  ) =>
    this.http.request<ComponentsUpdateComponentData, any>({
      path: `/components/${id}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates the embedding of a component's description.
   *
   * @tags Components
   * @name ComponentsUpdateEmbedding
   * @request POST:/components/{id}/embedding
   * @secure
   */
  componentsUpdateEmbedding = (
    id: string,
    data: ComponentsUpdateEmbeddingPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<ComponentsUpdateEmbeddingData, any>({
      path: `/components/${id}/embedding`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
