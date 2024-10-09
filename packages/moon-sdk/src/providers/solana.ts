import { Connection, PublicKey, Transaction } from '@solana/web3.js';

import { MoonSDK } from '../moon';

/**
 * Custom Solana provider for MoonSDK
 */
export class MoonSolanaProvider {
  private moonSDK: MoonSDK;
  private connection: Connection;
  private customPubkey: PublicKey | null = null;

  constructor(moonSDK: MoonSDK, endpoint: string) {
    this.moonSDK = moonSDK;
    this.connection = new Connection(endpoint);
  }

  setCustomPubkey(pubkey: PublicKey) {
    this.customPubkey = pubkey;
    this.moonSDK.emit('solanaPublicKeyChanged', pubkey.toBase58());
  }

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
