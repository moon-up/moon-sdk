import { Connection, PublicKey, Transaction } from '@solana/web3.js';

import { MoonSDK } from '../moon';

/**
 * The `MoonSolanaProvider` class provides methods to interact with the Solana blockchain.
 * It allows setting a custom public key, retrieving the current connection, and signing
 * and sending transactions.
 *
 * @class MoonSolanaProvider
 * @property {MoonSDK} moonSDK - An instance of the MoonSDK.
 * @property {Connection} connection - The Solana connection instance.
 * @property {PublicKey | null} customPubkey - The custom public key for the Solana provider.
 *
 * @method constructor
 * @param {MoonSDK} moonSDK - An instance of the MoonSDK.
 * @param {string} endpoint - The endpoint URL for the Solana connection.
 *
 * @method getConnection
 * @returns {Connection} - The current Solana connection.
 *
 * @method setCustomPubkey
 * @param {PublicKey} pubkey - The new public key to set.
 * @fires moonSDK#solanaPublicKeyChanged - Emits an event when the Solana public key is changed.
 *
 * @method signAndSendTransaction
 * @param {Transaction} transaction - The Solana transaction to be signed and sent.
 * @returns {Promise<string>} - A promise that resolves to the transaction hash.
 * @throws {Error} - Throws an error if the custom public key is not set or if there is an issue during the signing or sending process.
 * @fires MoonSDK#solanaTransactionSent - Emits an event when the transaction is successfully sent.
 * @fires MoonSDK#error - Emits an error event if an error occurs during the process.
 */
export class MoonSolanaProvider {
  private moonSDK: MoonSDK;
  private connection: Connection;
  private customPubkey: PublicKey | null = null;

  /**
   * Creates an instance of the Solana provider.
   *
   * @param moonSDK - An instance of the MoonSDK.
   * @param endpoint - The endpoint URL for the Solana connection.
   */
  constructor(moonSDK: MoonSDK, endpoint: string) {
    this.moonSDK = moonSDK;
    this.connection = new Connection(endpoint);
  }

  /**
   * Retrieves the current Solana connection instance.
   *
   * @returns {Connection} The current Solana connection.
   */
  public getConnection(): Connection {
    return this.connection;
  }

  /**
   * Sets a custom public key for the Solana provider.
   *
   * @param pubkey - The new public key to set.
   * @fires moonSDK#solanaPublicKeyChanged - Emits an event when the Solana public key is changed.
   */
  setCustomPubkey(pubkey: PublicKey) {
    this.customPubkey = pubkey;
    this.moonSDK.emit('solanaPublicKeyChanged', pubkey.toBase58());
  }

  /**
   * Signs and sends a Solana transaction.
   *
   * @param {Transaction} transaction - The Solana transaction to be signed and sent.
   * @returns {Promise<string>} - A promise that resolves to the transaction hash.
   * @throws {Error} - Throws an error if the custom public key is not set or if there is an issue during the signing or sending process.
   *
   * @fires MoonSDK#solanaTransactionSent - Emits an event when the transaction is successfully sent.
   * @fires MoonSDK#error - Emits an error event if an error occurs during the process.
   */
  async signAndSendTransaction(transaction: Transaction): Promise<string> {
    try {
      if (!this.customPubkey) {
        throw new Error('Custom pubkey not set');
      }
      const serializedTx = transaction
        .serialize({ requireAllSignatures: false })
        .toString('base64');
      const signedTx = await this.moonSDK
        .getSolanaService()
        .signTransction(this.customPubkey.toBase58(), {
          unsigned_tx: serializedTx,
        });
      const txHash = await this.connection.sendRawTransaction(
        Buffer.from(signedTx?.signedTx || '', 'base64')
      );
      this.moonSDK.emit('solanaTransactionSent', txHash);
      return txHash;
    } catch (error) {
      this.moonSDK.emit('error', {
        method: 'MoonSolanaProvider.signAndSendTransaction',
        error,
      });
      throw error;
    }
  }
}
