import {
  BlockTag,
  Provider,
  Signer,
  TransactionLike,
  TransactionRequest,
  TransactionResponse,
  TypedDataDomain,
  TypedDataField,
} from 'ethers';

import { MoonSDK } from '../moon';

/**
 * The `MoonSigner` class implements the `Signer` interface and provides methods for interacting with the MoonSDK.
 * It handles various transaction-related operations such as signing, sending, and populating transactions.
 *
 * @class MoonSigner
 * @implements {Signer}
 *
 * @property {MoonSDK} sdk - The instance of MoonSDK.
 * @property {string} address - The address of the signer.
 * @property {number} chainId - The chain ID of the network.
 * @property {Provider} provider - The provider for interacting with the blockchain.
 *
 * @constructor
 * @param {MoonSDK} sdk - The instance of MoonSDK.
 * @param {string} address - The address of the signer.
 * @param {number} chainId - The chain ID of the network.
 * @param {Provider} provider - The provider for interacting with the blockchain.
 *
 * @method connect
 * @param {Provider} provider - The provider to connect to.
 * @returns {Signer} - A new instance of MoonSigner connected to the specified provider.
 *
 * @method getAddress
 * @returns {Promise<string>} - The address of the signer.
 *
 * @method getNonce
 * @param {BlockTag} [blockTag] - The block tag to get the nonce for.
 * @returns {Promise<number>} - The nonce for the signer's address.
 *
 * @method populateCall
 * @param {TransactionRequest} tx - The transaction request to populate.
 * @returns {Promise<TransactionLike<string>>} - The populated transaction request.
 *
 * @method populateTransaction
 * @param {TransactionRequest} tx - The transaction request to populate.
 * @returns {Promise<TransactionLike<string>>} - The populated transaction request.
 *
 * @method estimateGas
 * @param {TransactionRequest} tx - The transaction request to estimate gas for.
 * @returns {Promise<bigint>} - The estimated gas for the transaction.
 *
 * @method call
 * @param {TransactionRequest} tx - The transaction request to call.
 * @returns {Promise<string>} - The result of the call.
 *
 * @method resolveName
 * @param {string} name - The name to resolve.
 * @returns {Promise<null | string>} - The resolved name or null if not found.
 *
 * @method signTransaction
 * @param {TransactionRequest} tx - The transaction request to sign.
 * @returns {Promise<string>} - The signed transaction.
 *
 * @method sendTransaction
 * @param {TransactionRequest} transaction - The transaction request to send.
 * @returns {Promise<TransactionResponse>} - The transaction response.
 *
 * @method signMessage
 * @param {string | Uint8Array} message - The message to sign.
 * @returns {Promise<string>} - The signed message.
 *
 * @method signTypedData
 * @param {TypedDataDomain} domain - The domain of the typed data.
 * @param {Record<string, Array<TypedDataField>>} types - The types of the typed data.
 * @param {Record<string, any>} value - The value of the typed data.
 * @returns {Promise<string>} - The signed typed data.
 */
export class MoonSigner implements Signer {
  private sdk: MoonSDK;
  private address: string;
  private chainId: number;
  provider: Provider;
  /**
   * Creates an instance of the Signer class.
   *
   * @param sdk - An instance of the MoonSDK.
   * @param address - The address of the signer.
   * @param chainId - The chain ID of the network.
   * @param provider - The provider to interact with the blockchain.
   */
  constructor(
    sdk: MoonSDK,
    address: string,
    chainId: number,
    provider: Provider
  ) {
    this.address = address;
    this.sdk = sdk;
    this.provider = provider;
    this.chainId = chainId;
  }
  populateCall(tx: TransactionRequest): Promise<TransactionLike<string>> {
    throw new Error('Method not implemented.');
  }
  populateTransaction(
    tx: TransactionRequest
  ): Promise<TransactionLike<string>> {
    throw new Error('Method not implemented.');
  }
  /**
   * Establishes a connection to the specified provider and returns a new instance of MoonSigner.
   *
   * @param provider - The provider to connect to.
   * @returns A new instance of MoonSigner configured with the provided provider.
   */
  connect(provider: Provider): Signer {
    return new MoonSigner(this.sdk, this.address, this.chainId, provider);
  }
  /**
   * Retrieves the address associated with the signer.
   *
   * @returns {Promise<string>} A promise that resolves to the address string.
   */
  async getAddress(): Promise<string> {
    return this.address;
  }
  /**
   * Retrieves the nonce for the current address.
   *
   * @param blockTag - Optional parameter to specify the block tag.
   * @returns A promise that resolves to the nonce (transaction count) for the current address.
   */
  async getNonce(blockTag?: BlockTag): Promise<number> {
    const provider = await this.sdk
      .getProviderService()
      .getEthereumProvider(this.chainId);
    return provider.getTransactionCount(this.address, blockTag);
  }

  /**
   * Populates a transaction request with necessary fields if they are not already set.
   *
   * @param tx - The transaction request to populate.
   * @returns A promise that resolves to the populated transaction.
   *
   * @remarks
   * This method ensures that the following fields are set in the transaction request:
   * - `from`: The sender's address. Defaults to the signer's address if not provided.
   * - `chainId`: The chain ID. Defaults to the signer's chain ID if not provided.
   * - `nonce`: The transaction nonce. Fetched from the network if not provided.
   * - `gasPrice`: The gas price for legacy transactions. Fetched from the network if not provided.
   * - `gasLimit`: The gas limit. Estimated if not provided.
   * - `maxFeePerGas` and `maxPriorityFeePerGas`: For EIP-1559 transactions (type 2). Fetched from the network if not provided.
   *
   * @throws Will throw an error if any required field cannot be populated.
   */
  async estimateGas(tx: TransactionRequest): Promise<bigint> {
    const provider = await this.sdk
      .getProviderService()
      .getEthereumProvider(this.chainId);
    return provider.estimateGas(tx);
  }
  /**
   * Executes a transaction request on the Ethereum provider.
   *
   * @param tx - The transaction request to be executed.
   * @returns A promise that resolves to the result of the transaction call as a string.
   */
  async call(tx: TransactionRequest): Promise<string> {
    const provider = await this.sdk
      .getProviderService()
      .getEthereumProvider(this.chainId);
    return provider.call(tx);
  }
  /**
   * Resolves a given name to a string.
   *
   * @param name - The name to be resolved.
   * @returns A promise that resolves to the given name as a string, or null.
   */
  async resolveName(name: string): Promise<null | string> {
    return name;
  }
  /**
   * Signs a transaction using the SDK.
   *
   * @param tx - The transaction request to be signed.
   * @returns A promise that resolves to the signed transaction string.
   */
  async signTransaction(tx: TransactionRequest): Promise<string> {
    const signedTx = await this.sdk.signTransaction(this.address, tx);
    return signedTx;
  }

  /**
   * Sends a transaction using the MoonSDK.
   *
   * @param transaction - The transaction request object containing the details of the transaction to be sent.
   * @returns A promise that resolves to a `TransactionResponse` object containing the transaction hash,
   *          the number of confirmations, the sender's address, and a `wait` method to watch the transaction.
   */
  async sendTransaction(
    transaction: TransactionRequest
  ): Promise<TransactionResponse> {
    const signedTx = await this.signTransaction(transaction);

    // Use MoonSDK to send the transaction
    const txHash = await this.sdk.sendTransaction(
      this.address,
      signedTx,
      this.chainId.toString()
    );

    // Create a TransactionResponse object
    const provider = await this.sdk
      .getProviderService()
      .getEthereumProvider(this.chainId);

    const tx: TransactionResponse = {
      hash: txHash,
      confirmations: 0,
      from: this.address,
      wait: (confirmations?: number) =>
        this.sdk.watchTransaction(txHash, confirmations),
      ...(transaction as any),
    };

    return tx;
  }
  /**
   * Signs a message using the SDK.
   *
   * @param message - The message to be signed. It can be a string or a Uint8Array.
   * @returns A promise that resolves to the signed message as a string.
   */
  async signMessage(message: string | Uint8Array): Promise<string> {
    return this.sdk.signMessage(this.address, message);
  }
  /**
   * Signs typed data using the provided domain, types, and value.
   *
   * @param domain - The domain information for the typed data.
   * @param types - A record of the types used in the typed data.
   * @param value - The actual data to be signed.
   * @returns A promise that resolves to the signed data as a string.
   */
  async signTypedData(
    domain: TypedDataDomain,
    types: Record<string, Array<TypedDataField>>,
    value: Record<string, any>
  ): Promise<string> {
    return this.sdk.signTypedData(this.address, domain, types, value);
  }
}
