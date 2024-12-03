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
  CreateEosAccountData,
  DeleteEosAccountData,
  EosInput,
  EosTransactionInput,
  ExportEosAccountData,
  GetEosAccountData,
  ListEosAccountsData,
  SignEosTransactionData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Eos<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Creates a new EOS account.
   *
   * @tags eos
   * @name CreateEosAccount
   * @request POST:/eos
   * @secure
   */
  createEosAccount = (data: EosInput, params: RequestParams = {}) =>
    this.http.request<CreateEosAccountData, any>({
      path: `/eos`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes an EOS account.
   *
   * @tags eos
   * @name DeleteEosAccount
   * @request POST:/eos/{accountName}/delete
   * @secure
   */
  deleteEosAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<DeleteEosAccountData, any>({
      path: `/eos/${accountName}/delete`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Exports the account information for a given EOS account name.
   *
   * @tags eos
   * @name ExportEosAccount
   * @request POST:/eos/{accountName}/export
   * @secure
   */
  exportEosAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<ExportEosAccountData, any>({
      path: `/eos/${accountName}/export`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieves account information from the EOS blockchain.
   *
   * @tags eos
   * @name GetEosAccount
   * @request GET:/eos/{accountName}
   * @secure
   */
  getEosAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<GetEosAccountData, any>({
      path: `/eos/${accountName}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Lists EOS accounts associated with the provided authorization token.
   *
   * @tags eos
   * @name ListEosAccounts
   * @request GET:/eos
   * @secure
   */
  listEosAccounts = (params: RequestParams = {}) =>
    this.http.request<ListEosAccountsData, any>({
      path: `/eos`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Signs an EOS transaction.
   *
   * @tags eos
   * @name SignEosTransaction
   * @request POST:/eos/{accountName}/sign-tx
   * @secure
   */
  signEosTransaction = (
    accountName: string,
    data: EosTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<SignEosTransactionData, any>({
      path: `/eos/${accountName}/sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
