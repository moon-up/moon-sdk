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
  SearchComponentsParams,
  UpdateComponentData,
  UpdateEmbeddingData,
  UpdateEmbeddingPayload,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Components<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Components
   * @name CreateComponent
   * @request POST:/components
   * @secure
   */
  createComponent = (
    data: OmitComponentDefinitionId,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateComponentData, any>({
      path: `/components`,
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
   * @tags Components
   * @name ForceEmbedding
   * @request POST:/components/{id}/embedding/force
   * @secure
   */
  forceEmbedding = (
    id: string,
    data: ForceEmbeddingPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<ForceEmbeddingData, any>({
      path: `/components/${id}/embedding/force`,
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
   * @tags Components
   * @name GetComponent
   * @request GET:/components/{id}
   * @secure
   */
  getComponent = (id: string, params: RequestParams = {}) =>
    this.http.request<GetComponentData, any>({
      path: `/components/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Components
   * @name GetComponentCapabilitiesDescription
   * @request GET:/components/capabilities
   * @secure
   */
  getComponentCapabilitiesDescription = (params: RequestParams = {}) =>
    this.http.request<GetComponentCapabilitiesDescriptionData, any>({
      path: `/components/capabilities`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Components
   * @name GetComponents
   * @request GET:/components
   * @secure
   */
  getComponents = (params: RequestParams = {}) =>
    this.http.request<GetComponentsData, any>({
      path: `/components`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Components
   * @name SearchComponents
   * @request GET:/components/search
   * @secure
   */
  searchComponents = (
    query: SearchComponentsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<SearchComponentsData, any>({
      path: `/components/search`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Components
   * @name UpdateComponent
   * @request POST:/components/{id}
   * @secure
   */
  updateComponent = (
    id: string,
    data: PartialComponentDefinition,
    params: RequestParams = {}
  ) =>
    this.http.request<UpdateComponentData, any>({
      path: `/components/${id}`,
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
   * @tags Components
   * @name UpdateEmbedding
   * @request POST:/components/{id}/embedding
   * @secure
   */
  updateEmbedding = (
    id: string,
    data: UpdateEmbeddingPayload,
    params: RequestParams = {}
  ) =>
    this.http.request<UpdateEmbeddingData, any>({
      path: `/components/${id}/embedding`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
