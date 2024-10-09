import { Provider, TransactionRequest } from '@ethersproject/abstract-provider';
import {
  Signer,
  TypedDataDomain,
  TypedDataField,
  TypedDataSigner,
} from '@ethersproject/abstract-signer';
import { BytesLike, arrayify } from '@ethersproject/bytes';
import { hashMessage } from '@ethersproject/hash';
import { defineReadOnly } from '@ethersproject/properties';
import { TransactionResponse } from '@ethersproject/providers';
import type { Transaction as MoonTransaction } from '@moonup/moon-api';
import { InputBody, TransactionData } from '@moonup/moon-api';
import { MoonSDK } from '@moonup/moon-sdk';
import { BigNumber } from 'ethers';

export interface Typed {
  domain: TypedDataDomain;
  types: Record<string, Array<TypedDataField>>;
  message: Record<string, string>;
}

export interface MoonSignerConfig {
  SDK: MoonSDK;
  address: string;
  chainId: number;
}

export class MoonSigner extends Signer implements TypedDataSigner {
  MoonSignerConfig: MoonSignerConfig;
  SDK: MoonSDK;
  address: string;
  chainId: number;

  constructor(config: MoonSignerConfig, provider?: Provider) {
    super();
    defineReadOnly(this, '_isSigner', true);
    defineReadOnly(this, 'provider', provider);
    this.address = config.address;
    this.chainId = config.chainId;
    this.MoonSignerConfig = config;
    this.SDK = config.SDK;
  }
  _signTypedData(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    domain: TypedDataDomain,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    types: Record<string, TypedDataField[]>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    value: Record<string, any>
  ): Promise<string> {
    throw new Error('Method not implemented.');
  }
  updateConfig(config: MoonSignerConfig) {
    this.SDK = config.SDK;
    this.chainId = config.chainId;
    this.address = config.address;
    this.MoonSignerConfig = config;
  }
  connect(provider: Provider): Signer {
    return new MoonSigner(this.MoonSignerConfig, provider);
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
    value: Record<string, string>
  ): Promise<string> {
    const response = await this.SDK.SignTypedData(
      this.address,
      domain,
      types,
      value
    );
    return response || '';
  }

  /**
   * @summary Get address
   * @returns {string} successful operation
   */
  async getAddress(): Promise<string> {
    return this.address;
  }
  async signMessage(message: BytesLike): Promise<string> {
    const hash = new Uint8Array(arrayify(hashMessage(message)));
    const response = await this.SDK.SignMessage(this.address, hash.toString());
    return response || '';
  }
  async broadcastTransaction(signedTransaction: string): Promise<string> {
    const response = await this.SDK.SendTransaction(
      this.address,
      signedTransaction,
      this.chainId.toString()
    );
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
    const txResponse = await this.provider?.getTransaction(response || '');
    console.log('Moon::sendTransaction: txResponse', txResponse);

    return txResponse || ({} as TransactionResponse);
  }
  public transactionRequestToInputBody(tx: TransactionRequest): InputBody {
    return {
      chain_id: BigNumber.from(tx.chainId).toString(),
      data: (tx.data && tx.data?.toString()) || '',
      to: tx.to,
      gasPrice: BigNumber.from(tx.gasPrice).toString(),
      gas: BigNumber.from(tx.gasLimit).toString(),
      nonce: BigNumber.from(tx.nonce).toString(),
      value:
        tx.value !== undefined
          ? BigNumber.from(tx.value).toString()
          : undefined,
      encoding: 'utf-8',
    };
  }
  moonTransactionResponseToTransactions(
    tx: MoonTransaction
  ): TransactionData[] {
    return tx.transactions || [];
  }

  async signTransaction(transaction: TransactionRequest): Promise<string> {
    const response = await this.SDK.SignTransaction(
      this.address,
      this.transactionRequestToInputBody(transaction)
    );
    return response || '';
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
    message: Record<string, string>
  ): Promise<Typed> {
    return {
      domain,
      types,
      message,
    };
  }
}
