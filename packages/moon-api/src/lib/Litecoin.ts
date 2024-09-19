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
  CreateLitecoinAccountData,
  DeleteLitecoinAccountData,
  ExportLitecoinAccountData,
  GetLitecoinAccountData,
  ListLitecoinAccountsData,
  LitecoinInput,
  LitecoinTransactionInput,
  SignLitecoinTransactionData,
  SignLitecoinTransactionWithMemoData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Litecoin<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Litecoin
   * @name CreateLitecoinAccount
   * @request POST:/litecoin
   * @secure
   */
  createLitecoinAccount = (data: LitecoinInput, params: RequestParams = {}) =>
    this.http.request<CreateLitecoinAccountData, any>({
      path: `/litecoin`,
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
   * @tags Litecoin
   * @name DeleteLitecoinAccount
   * @request POST:/litecoin/{accountName}/delete
   * @secure
   */
  deleteLitecoinAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<DeleteLitecoinAccountData, any>({
      path: `/litecoin/${accountName}/delete`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Litecoin
   * @name ExportLitecoinAccount
   * @request POST:/litecoin/{accountName}/export
   * @secure
   */
  exportLitecoinAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<ExportLitecoinAccountData, any>({
      path: `/litecoin/${accountName}/export`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Litecoin
   * @name GetLitecoinAccount
   * @request GET:/litecoin/{accountName}
   * @secure
   */
  getLitecoinAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<GetLitecoinAccountData, any>({
      path: `/litecoin/${accountName}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Litecoin
   * @name ListLitecoinAccounts
   * @request GET:/litecoin
   * @secure
   */
  listLitecoinAccounts = (params: RequestParams = {}) =>
    this.http.request<ListLitecoinAccountsData, any>({
      path: `/litecoin`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Litecoin
   * @name SignLitecoinTransaction
   * @request POST:/litecoin/{accountName}/sign-tx
   * @secure
   */
  signLitecoinTransaction = (
    accountName: string,
    data: LitecoinTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<SignLitecoinTransactionData, any>({
      path: `/litecoin/${accountName}/sign-tx`,
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
   * @tags Litecoin
   * @name SignLitecoinTransactionWithMemo
   * @request POST:/litecoin/{accountName}/memo-sign-tx
   * @secure
   */
  signLitecoinTransactionWithMemo = (
    accountName: string,
    data: LitecoinTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<SignLitecoinTransactionWithMemoData, any>({
      path: `/litecoin/${accountName}/memo-sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
