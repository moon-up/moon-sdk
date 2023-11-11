import { Provider } from '@ethersproject/abstract-provider';
import {
  Signer,
  TypedDataDomain,
  TypedDataField,
} from '@ethersproject/abstract-signer';
import { BytesLike } from '@ethersproject/bytes';
import { defineReadOnly } from '@ethersproject/properties';
import {
  TransactionRequest,
  TransactionResponse,
} from '@ethersproject/providers';
import {
  BroadCastRawTransactionResponse,
  Transaction,
} from '@moonup/moon-api/src/lib/data-contracts';
import { MoonSDK } from '@moonup/moon-sdk';
import { MoonConfig } from '@moonup/moon-types';

export class MoonSigner extends Signer {
  declare readonly provider: Provider;
  declare readonly _isSigner: boolean;
  MoonSDK: MoonSDK;
  Config: MoonConfig;

  constructor(provider: Provider, MoonSDKConfig: MoonConfig) {
    super();
    defineReadOnly(this, '_isSigner', true);
    this.Config = MoonSDKConfig;
    this.provider = provider;
    this.MoonSDK = new MoonSDK(MoonSDKConfig);
  }
  connect(provider: Provider): Signer {
    console.log('Moon::connect', provider);
    return new MoonSigner(provider, this.Config);
  }

  /**
   * Signs a typed data object.
   *
   * @param domain - The domain of the typed data object.
   * @param types - The type definitions of the typed data object.
   * @param value - The value of the typed data object.
   * @returns The signature of the typed data object.
   */
  async signTypedData(
    domain: TypedDataDomain,
    types: Record<string, TypedDataField[]>,
    value: Record<string, any>
  ): Promise<string> {
    const response = await this.MoonSDK.SignTypedData(domain, types, value);
    return response.data;
  }

  /**
   * @summary Get address
   * @returns {string} successful operation
   */
  async getAddress(): Promise<string> {
    throw new Error('Method not implemented.');
  }
  async signMessage(message: BytesLike): Promise<string> {
    const response = await this.MoonSDK.SignMessage(message);
    return response.signed_message;
  }
  async broadcastTransaction(
    signedTransaction: string
  ): Promise<BroadCastRawTransactionResponse> {
    const response = await this.MoonSDK.SendTransaction(signedTransaction);
    return response;
  }

  async sendTransaction(
    transaction: TransactionRequest
  ): Promise<TransactionResponse> {
    const tx = await this.populateTransaction(transaction);
    console.log('Moon::sendTransaction: populateTransaction', tx);
    const signedRes = await this.signTransaction(tx);
    console.log('Moon::sendTransaction: signedRawTx', signedRes);

    const response = await this.broadcastTransaction(signedRes || '');
    console.log('Moon::sendTransaction: broadcastTx res', response);
    const txResponse =
      (await this.provider.getTransaction(response.data || '')) ||
      (tx as TransactionResponse);
    console.log('Moon::sendTransaction: txResponse', txResponse);

    return txResponse;
  }

  async signTransaction(transaction: TransactionRequest): Promise<string> {
    try {
      const tx = (await this.populateTransaction(
        transaction
      )) as TransactionResponse;
      const signedTx: Transaction = await this.MoonSDK.SignTransaction(tx);
      return signedTx.signed_transaction;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
  async getTypedDataDomain(
    name: string,
    version: string,
    chainId: number,
    verifyingContract: string
  ): Promise<TypedDataDomain> {
    return {
      name,
      version,
      chainId,
      verifyingContract,
    };
  }

  async getTypedData(
    domain: TypedDataDomain,
    types: Record<string, Array<TypedDataField>>,
    message: Record<string, any>
  ): Promise<any> {
    return {
      domain,
      types,
      message,
    };
  }
}
