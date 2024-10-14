// services/TransactionService.ts

import { BigNumberish, TransactionReceipt, TransactionRequest } from 'ethers';

import { MoonSDK } from '../moon';
import { LitecoinNetwork } from '../networks';
import { BitcoinCashNetwork } from '../networks/BitcoinCashNetwork';
import { BitcoinNetwork } from '../networks/BitcoinNetwork';
import { CosmosNetwork } from '../networks/CosmosNetwork';
import { DogecoinNetwork } from '../networks/DogecoinNetwork';
import { EOSNetwork } from '../networks/EOSNetwork';
import { EthereumNetwork } from '../networks/EthereumNetwork';
import { INetwork } from '../networks/INetwork';
import { RippleNetwork } from '../networks/RippleNetwork';
import { SolanaNetwork } from '../networks/SolanaNetwork';
import { TronNetwork } from '../networks/TronNetwork';
import { ChainType } from '../types';

import { ProviderService } from './ProviderService';

/**
 * The `TransactionService` class provides methods to interact with various blockchain networks.
 * It supports operations such as creating accounts, retrieving account information, exporting
 * accounts, deleting accounts, retrieving balances, signing transactions, sending transactions,
 * retrieving transactions, signing messages, listing accounts, signing typed data, estimating gas,
 * and watching transactions.
 *
 * @class
 * @classdesc This service initializes network mappings for different blockchain networks and
 * provides methods to perform various blockchain-related operations.
 *
 * @example
 * const transactionService = new TransactionService(sdk, providerService);
 * const account = await transactionService.createAccount('ethereum', { ... });
 *
 * @param {MoonSDK} sdk - The SDK instance used for network interactions.
 * @param {ProviderService} providerService - The service used to get blockchain providers.
 */
export class TransactionService {
  private networks: Map<ChainType, INetwork>;

  /**
   * Creates an instance of TransactionService.
   *
   * @param sdk - An instance of the MoonSDK.
   * @param providerService - An instance of the ProviderService.
   */
  constructor(private sdk: MoonSDK, private providerService: ProviderService) {
    this.networks = new Map();
    this.initializeNetworks();
  }

  /**
   * Initializes the network mappings for various blockchain networks.
   *
   * This method sets up the `networks` map with instances of different network classes,
   * each corresponding to a specific blockchain. The following networks are initialized:
   *
   * - Ethereum
   * - Bitcoin
   * - Cosmos
   * - Dogecoin
   * - Bitcoin Cash
   * - EOS
   * - Ripple
   * - Tron
   * - Solana
   * - Litecoin
   *
   * Each network is instantiated with the SDK instance.
   *
   * @private
   */
  private initializeNetworks() {
    this.networks.set('ethereum', new EthereumNetwork(this.sdk));
    this.networks.set('bitcoin', new BitcoinNetwork(this.sdk));
    this.networks.set('cosmos', new CosmosNetwork(this.sdk));
    this.networks.set('dogecoin', new DogecoinNetwork(this.sdk));
    this.networks.set('bitcoincash', new BitcoinCashNetwork(this.sdk));
    this.networks.set('eos', new EOSNetwork(this.sdk));
    this.networks.set('ripple', new RippleNetwork(this.sdk));
    this.networks.set('tron', new TronNetwork(this.sdk));
    this.networks.set('solana', new SolanaNetwork(this.sdk));
    this.networks.set('litecoin', new LitecoinNetwork(this.sdk));
  }

  /**
   * Retrieves the network configuration for a given chain type.
   *
   * @param type - The type of the blockchain network.
   * @returns The network configuration corresponding to the specified chain type.
   * @throws Will throw an error if the specified network type is not supported.
   */
  private getNetwork(type: ChainType): INetwork {
    const network = this.networks.get(type);
    if (!network) {
      throw new Error(`Network type ${type} not supported`);
    }
    return network;
  }

  /**
   * Creates a new account on the specified blockchain network.
   *
   * @param type - The type of blockchain network (e.g., Ethereum, Bitcoin).
   * @param input - A record containing the necessary parameters for account creation.
   * @returns A promise that resolves to a record containing the details of the created account.
   */
  async createAccount(
    type: ChainType,
    input: Record<string, unknown>
  ): Promise<Record<string, unknown>> {
    return this.getNetwork(type).createAccount(input);
  }
  /**
   * Retrieves account information for a given account name on a specified blockchain network.
   *
   * @param type - The type of blockchain network (e.g., Ethereum, Bitcoin).
   * @param accountName - The name of the account to retrieve information for.
   * @returns A promise that resolves to a record containing the account information.
   */
  async getAccount(
    type: ChainType,
    accountName: string
  ): Promise<Record<string, unknown>> {
    return this.getNetwork(type).getAccount(accountName);
  }

  /**
   * Exports the account details for a given account name and chain type.
   *
   * @param type - The type of blockchain network (e.g., Ethereum, Bitcoin).
   * @param accountName - The name of the account to be exported.
   * @returns A promise that resolves to a record containing the account details.
   */
  async exportAccount(
    type: ChainType,
    accountName: string
  ): Promise<Record<string, unknown>> {
    return this.getNetwork(type).exportAccount(accountName);
  }

  /**
   * Deletes an account from the specified blockchain network.
   *
   * @param type - The type of blockchain network (e.g., Ethereum, Bitcoin).
   * @param accountName - The name of the account to be deleted.
   * @returns A promise that resolves to a record containing the result of the deletion operation.
   */
  async deleteAccount(
    type: ChainType,
    accountName: string
  ): Promise<Record<string, unknown>> {
    return this.getNetwork(type).deleteAccount(accountName);
  }

  /**
   * Retrieves the balance for a given address on a specified blockchain network.
   *
   * @param type - The type of blockchain network (e.g., Ethereum, Bitcoin).
   * @param address - The address for which to retrieve the balance.
   * @returns A promise that resolves to a record containing the balance information.
   */
  async getBalance(
    type: ChainType,
    address: string
  ): Promise<Record<string, unknown>> {
    return this.getNetwork(type).getBalance(address);
  }

  /**
   * Signs a transaction for a given blockchain network.
   *
   * @param type - The type of blockchain network (e.g., Ethereum, Bitcoin).
   * @param accountName - The name of the account that will sign the transaction.
   * @param transaction - The transaction details to be signed.
   * @returns A promise that resolves to the signed transaction details.
   */
  async signTransaction(
    type: ChainType,
    accountName: string,
    transaction: Record<string, unknown>
  ): Promise<Record<string, unknown>> {
    return this.getNetwork(type).signTransaction(accountName, transaction);
  }

  /**
   * Sends a transaction to the specified blockchain network.
   *
   * @param type - The type of blockchain network (e.g., Ethereum, Bitcoin).
   * @param transaction - An object containing the transaction details.
   * @returns A promise that resolves to an object containing the transaction result.
   */
  async sendTransaction(
    type: ChainType,
    transaction: Record<string, unknown>
  ): Promise<Record<string, unknown>> {
    return this.getNetwork(type).sendTransaction(transaction);
  }

  /**
   * Retrieves a transaction from the specified blockchain network.
   *
   * @param type - The type of blockchain network (e.g., Ethereum, Bitcoin).
   * @param hash - The hash of the transaction to retrieve.
   * @returns A promise that resolves to a record containing the transaction details.
   */
  async getTransaction(
    type: ChainType,
    hash: string
  ): Promise<Record<string, unknown>> {
    return this.getNetwork(type).getTransaction(hash);
  }
  /**
   * Signs a message using the specified account on the given blockchain network.
   *
   * @param type - The type of blockchain network (e.g., Ethereum, Bitcoin).
   * @param accountName - The name of the account to use for signing the message.
   * @param message - The message to be signed.
   * @returns A promise that resolves to the signed message.
   */
  async signMessage(
    type: ChainType,
    accountName: string,
    message: string
  ): Promise<any> {
    return this.getNetwork(type).signMessage(accountName, message);
  }

  /**
   * Lists the accounts for a given chain type.
   *
   * @param {ChainType} type - The type of the blockchain network.
   * @returns {Promise<Record<string, unknown>>} A promise that resolves to a record of accounts.
   */
  async listAccounts(type: ChainType): Promise<Record<string, unknown>> {
    return this.getNetwork(type).listAccounts();
  }
  /**
   * Signs typed data using the specified network.
   *
   * @param type - The type of blockchain network (e.g., Ethereum, Binance Smart Chain).
   * @param accountName - The name of the account to sign the data with.
   * @param domain - The domain information for the typed data.
   * @param types - The types definition for the typed data.
   * @param value - The actual data to be signed.
   * @returns A promise that resolves with the signed data.
   */
  async signTypedData(
    type: ChainType,
    accountName: string,
    domain: Record<string, unknown>,
    types: Record<string, unknown>,
    value: Record<string, unknown>
  ): Promise<any> {
    return this.getNetwork(type).signTypedData(
      accountName,
      domain,
      types,
      value
    );
  }

  /**
   * Estimates the gas required for a given transaction.
   *
   * @param transaction - A partial transaction request object.
   * @returns A promise that resolves to the estimated gas as a BigNumberish value.
   */
  async estimateGas(
    transaction: Partial<TransactionRequest>
  ): Promise<BigNumberish> {
    const provider = await this.providerService.getEthereumProvider(
      this.sdk.getChainService().getSelectedChain()?.network_id || 1
    );
    const gas = await provider.estimateGas(transaction);
    return gas;
  }
  /**
   * Watches a transaction until it is mined and reaches the specified number of confirmations.
   *
   * @param txHash - The hash of the transaction to watch.
   * @param confirmations - The number of confirmations to wait for (optional).
   * @returns A promise that resolves to the transaction receipt once the transaction is confirmed.
   * @throws Will throw an error if the transaction is not found or fails.
   */
  async watchTransaction(
    txHash: string,
    confirmations?: number
  ): Promise<TransactionReceipt> {
    const provider = await this.providerService.getEthereumProvider(
      this.sdk.getChainService().getSelectedChain()?.network_id || 1
    );
    const receipt = await provider.waitForTransaction(txHash, confirmations);

    if (receipt === null) {
      throw new Error(`Transaction ${txHash} not found or failed`);
    }

    return receipt;
  }
}
