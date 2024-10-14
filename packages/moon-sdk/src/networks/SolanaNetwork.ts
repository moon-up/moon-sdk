import { PublicKey, SystemProgram, Transaction } from '@solana/web3.js';

import { MoonSDK } from '../moon';

import { INetwork } from './INetwork';

/**
 * The `SolanaNetwork` class provides methods to interact with the Solana blockchain network.
 * It implements the `INetwork` interface and utilizes the `MoonSDK` instance to perform various
 * operations such as account management, transaction handling, and balance inquiries.
 *
 * @remarks
 * This class is designed to work with the MoonSDK to facilitate interactions with the Solana network.
 *
 * @example
 * ```typescript
 * const moonSDK = new MoonSDK();
 * const solanaNetwork = new SolanaNetwork(moonSDK);
 *
 * // Create a new Solana account
 * const account = await solanaNetwork.createAccount(inputData);
 *
 * // Get account balance
 * const balance = await solanaNetwork.getBalance(accountAddress);
 * ```
 */
export class SolanaNetwork implements INetwork {
  private moonSDK: MoonSDK;

  /**
   * Creates an instance of SolanaNetwork.
   *
   * @param moonSDK - An instance of the MoonSDK class.
   */
  constructor(moonSDK: MoonSDK) {
    this.moonSDK = moonSDK;
  }

  /**
   * Creates a new Solana account using the provided input.
   *
   * @param input - The input data required to create the Solana account.
   * @returns A promise that resolves to the result of the account creation.
   */
  async createAccount(input: any): Promise<any> {
    return this.moonSDK.getSolanaSDK().createSolanaAccount(input);
  }

  /**
   * Deletes a Solana account with the specified account name.
   *
   * @param accountName - The name of the account to be deleted.
   * @returns A promise that resolves with the result of the account deletion.
   */
  async deleteAccount(accountName: string): Promise<any> {
    return this.moonSDK.getSolanaSDK().deleteSolanaAccount(accountName);
  }

  /**
   * Exports the Solana account associated with the given account name.
   *
   * @param accountName - The name of the account to export.
   * @returns A promise that resolves to the exported account data.
   */
  async exportAccount(accountName: string): Promise<any> {
    return this.moonSDK.getSolanaSDK().exportSolanaAccount(accountName);
  }

  /**
   * Retrieves the account information for a given Solana account name.
   *
   * @param accountName - The name of the account to
   * @returns A promise that resolves to the account data.
   */
  async getAccount(accountName: string): Promise<any> {
    return this.moonSDK.getSolanaSDK().getSolanaAccount(accountName);
  }

  /**
   * Lists all Solana accounts associated with the current instance of moonSDK.
   *
   * @returns {Promise<any>} A promise that resolves to the list of Solana accounts.
   */
  async listAccounts(): Promise<any> {
    return this.moonSDK.getSolanaSDK().listSolanaAccounts();
  }

  /**
   * Signs a Solana transaction using the specified account name.
   *
   * @param accountName - The name of the account to sign the transaction with.
   * @param transaction - The transaction object to be signed.
   * @returns A promise that resolves to the signed transaction.
   */
  async signTransaction(accountName: string, transaction: any): Promise<any> {
    return this.moonSDK
      .getSolanaSDK()
      .signSolanaTransaction(accountName, transaction);
  }

  /**
   * Retrieves the balance of the specified Solana address.
   *
   * @param address - The Solana address to query the balance for.
   * @returns A promise that resolves to the balance of the specified address.
   */
  async getBalance(address: string): Promise<any> {
    const publicKey = new PublicKey(address);
    const balance = await this.moonSDK
      .getSolanaProvider()
      .getConnection()
      .getBalance(publicKey);
    return balance;
  }

  /**
   * Retrieves the transaction details for a given transaction hash on the Solana network.
   *
   * @param hash - The hash of the transaction to retrieve.
   * @returns A promise that resolves to the transaction details.
   */
  async getTransaction(hash: string): Promise<any> {
    return await this.moonSDK
      .getSolanaProvider()
      .getConnection()
      .getTransaction(hash);
  }

  /**
   * Sends a transaction using the Solana provider.
   *
   * @param transaction - The transaction object to be sent.
   * @returns A promise that resolves with the result of the transaction.
   */
  async sendTransaction(transaction: any): Promise<any> {
    return await this.moonSDK
      .getSolanaProvider()
      .signAndSendTransaction(transaction);
  }

  /**
   * Signs a message using the specified account on the Solana network.
   *
   * @param accountName - The name of the account to use for signing the message.
   * @param message - The message to be signed.
   * @returns A promise that resolves with the signed message.
   * @throws An error if the method is not implemented.
   */
  async signMessage(accountName: string, message: string): Promise<any> {
    // Implement message signing for Solana
    throw new Error('Method not implemented.');
  }

  /**
   * Signs typed data for a given account. This method is specific to the Solana network.
   *
   * @param accountName - The name of the account to sign the data with.
   * @param domain - The domain data for the typed data.
   * @param types - The types definition for the typed data.
   * @param value - The actual data to be signed.
   * @returns A promise that resolves to the signed data.
   * @throws An error indicating that the method is not implemented for Solana.
   */
  async signTypedData(
    accountName: string,
    domain: any,
    types: any,
    value: any
  ): Promise<any> {
    // Solana doesn't have an exact equivalent to Ethereum's signTypedData
    throw new Error('Method not implemented for Solana.');
  }

  /**
   * Retrieves the most recent blockhash from the Solana network.
   *
   * @returns {Promise<string>} A promise that resolves to the most recent blockhash as a string.
   */
  async getRecentBlockhash(): Promise<string> {
    const { blockhash } = await this.moonSDK
      .getSolanaProvider()
      .getConnection()
      .getRecentBlockhash();
    return blockhash;
  }

  /**
   * Retrieves the balance of a specified token account on the Solana network.
   *
   * @param tokenAccountAddress - The address of the token account to query.
   * @returns A promise that resolves to the balance of the token account in the smallest unit of the token.
   */
  async getTokenAccountBalance(tokenAccountAddress: string): Promise<number> {
    const publicKey = new PublicKey(tokenAccountAddress);
    const balance = await this.moonSDK
      .getSolanaProvider()
      .getConnection()
      .getTokenAccountBalance(publicKey);
    return balance.value.uiAmount || 0;
  }

  /**
   * Creates a transfer transaction on the Solana network.
   *
   * @param fromPubkey - The public key of the sender.
   * @param toPubkey - The public key of the recipient.
   * @param amount - The amount to transfer in lamports.
   * @param recentBlockhash - The recent blockhash for the transaction.
   * @returns A promise that resolves to the created transaction.
   */
  async createTransferTransaction(
    fromPubkey: PublicKey,
    toPubkey: PublicKey,
    amount: number,
    recentBlockhash: string
  ): Promise<Transaction> {
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey,
        toPubkey,
        lamports: amount,
      })
    );
    transaction.recentBlockhash = recentBlockhash;
    transaction.feePayer = fromPubkey;
    return transaction;
  }

  /**
   * Sets a custom public key for the Solana network.
   *
   * @param pubkey - The public key to be set.
   * @remarks
   * This method updates the Solana provider with the specified custom public key.
   */
  setCustomPublicKey(pubkey: PublicKey): void {
    this.moonSDK.getSolanaProvider().setCustomPubkey(pubkey);
  }

  /**
   * Retrieves account information for a given Solana address.
   *
   * @param address - The Solana address to fetch account information for.
   * @returns A promise that resolves to the account information.
   */
  async getAccountInfo(address: string): Promise<any> {
    const publicKey = new PublicKey(address);
    return this.moonSDK
      .getSolanaProvider()
      .getConnection()
      .getAccountInfo(publicKey);
  }
}
