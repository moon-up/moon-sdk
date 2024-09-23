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
  BRC20TransactionInput,
  BitcoinInput,
  BitcoinTransactionInput,
  CreateBitcoinAccountData,
  CreateBrc20TransactionData,
  CreateSrc20InscriptionData,
  DeleteBitcoinAccountData,
  ExportBitcoinAccountData,
  GenerateUnsignedPsbtHexData,
  GetBitcoinAccountData,
  ListBitcoinAccountsData,
  SRC20InscriptionInput,
  SignBitcoinTransactionData,
  UnsignedPSBTInput,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Bitcoin<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Bitcoin
   * @name CreateBitcoinAccount
   * @request POST:/bitcoin
   * @secure
   */
  createBitcoinAccount = (data: BitcoinInput, params: RequestParams = {}) =>
    this.http.request<CreateBitcoinAccountData, any>({
      path: `/bitcoin`,
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
   * @tags Bitcoin
   * @name CreateBrc20Transaction
   * @request POST:/bitcoin/{accountName}/brc20-tx
   * @secure
   */
  createBrc20Transaction = (
    accountName: string,
    data: BRC20TransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateBrc20TransactionData, any>({
      path: `/bitcoin/${accountName}/brc20-tx`,
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
   * @tags Bitcoin
   * @name CreateSrc20Inscription
   * @request POST:/bitcoin/{accountName}/src20-inscription
   * @secure
   */
  createSrc20Inscription = (
    accountName: string,
    data: SRC20InscriptionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateSrc20InscriptionData, any>({
      path: `/bitcoin/${accountName}/src20-inscription`,
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
   * @tags Bitcoin
   * @name DeleteBitcoinAccount
   * @request POST:/bitcoin/{accountName}/delete
   * @secure
   */
  deleteBitcoinAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<DeleteBitcoinAccountData, any>({
      path: `/bitcoin/${accountName}/delete`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Bitcoin
   * @name ExportBitcoinAccount
   * @request POST:/bitcoin/{accountName}/export
   * @secure
   */
  exportBitcoinAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<ExportBitcoinAccountData, any>({
      path: `/bitcoin/${accountName}/export`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Bitcoin
   * @name GenerateUnsignedPsbtHex
   * @request POST:/bitcoin/{accountName}/generate-unsigned-psbt
   * @secure
   */
  generateUnsignedPsbtHex = (
    accountName: string,
    data: UnsignedPSBTInput,
    params: RequestParams = {}
  ) =>
    this.http.request<GenerateUnsignedPsbtHexData, any>({
      path: `/bitcoin/${accountName}/generate-unsigned-psbt`,
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
   * @tags Bitcoin
   * @name GetBitcoinAccount
   * @request GET:/bitcoin/{accountName}
   * @secure
   */
  getBitcoinAccount = (accountName: string, params: RequestParams = {}) =>
    this.http.request<GetBitcoinAccountData, any>({
      path: `/bitcoin/${accountName}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Bitcoin
   * @name ListBitcoinAccounts
   * @request GET:/bitcoin
   * @secure
   */
  listBitcoinAccounts = (params: RequestParams = {}) =>
    this.http.request<ListBitcoinAccountsData, any>({
      path: `/bitcoin`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Bitcoin
   * @name SignBitcoinTransaction
   * @request POST:/bitcoin/{accountName}/sign-tx
   * @secure
   */
  signBitcoinTransaction = (
    accountName: string,
    data: BitcoinTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<SignBitcoinTransactionData, any>({
      path: `/bitcoin/${accountName}/sign-tx`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
