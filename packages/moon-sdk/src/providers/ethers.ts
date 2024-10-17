import {
  EIP1193Provider,
  ProviderAccounts,
  RequestArguments,
} from 'eip1193-provider';
import { JsonRpcProvider } from 'ethers';

import { MoonSDK } from '../moon';

/**
 * Custom Ethereum provider for MoonSDK
 */
/**
 * MoonProvider class that extends JsonRpcProvider and implements its interface.
 * This custom provider is designed to work with MoonSDK, providing additional
 * functionality and integration with the Moon ecosystem.
 *
 * @extends JsonRpcProvider
 * @implements JsonRpcProvider
 */
export class MoonProvider extends JsonRpcProvider implements EIP1193Provider {
  private moonSDK: MoonSDK;
  private customAddress: string | null = null;

  /**
   * Constructs an instance of the class.
   *
   * @param moonSDK - An instance of the MoonSDK.
   * @param url - An optional URL string.
   */
  constructor(moonSDK: MoonSDK, url?: string) {
    super(url);
    this.moonSDK = moonSDK;
  }

  /**
   * Enables the provider by requesting access to the user's Ethereum accounts.
   *
   * @returns {Promise<ProviderAccounts>} A promise that resolves to the user's Ethereum accounts.
   * @throws Will throw an error if the request for accounts fails.
   */
  async enable(): Promise<ProviderAccounts> {
    try {
      const accounts = await this.send('eth_requestAccounts', []);
      return accounts as ProviderAccounts;
    } catch (error) {
      this.moonSDK.emit('error', { method: 'MoonProvider.enable', error });
      throw error;
    }
  }

  /**
   * Looks up and sets a custom address.
   *
   * @param address - The address to look up.
   * @returns A promise that resolves to the provided address.
   */
  lookupAddress(address: string): Promise<string> {
    this.customAddress = address;
    return Promise.resolve(address);
  }
  /**
   * Resolves an Ethereum address to a human-readable name.
   *
   * @param address - The Ethereum address to resolve.
   * @returns A promise that resolves to the human-readable name associated with the given address.
   */
  resolveName(address: string): Promise<string> {
    return Promise.resolve(address);
  }
  /**
   * Handles JSON-RPC requests by method name and delegates them to the appropriate handler.
   *
   * @param args - The request arguments containing the method and parameters.
   * @returns A promise that resolves with the result of the request.
   *
   * @throws Will emit an 'error' event and rethrow the error if an exception occurs during the request handling.
   *
   * @example
   * ```typescript
   * const result = await moonProvider.request({ method: 'eth_accounts', params: [] });
   * ```
   */
  request(args: RequestArguments): Promise<unknown> {
    try {
      switch (args.method) {
        case 'eth_accounts':
          return this.send(args.method, (args.params as any[]) || []);
        case 'eth_sendTransaction':
          return this.send(args.method, (args.params as any[]) || []);
        default:
          return super.send(args.method, (args.params as any[]) || []);
      }
    } catch (error) {
      this.moonSDK.emit('error', { method: 'MoonProvider.request', error });
      throw error;
    }
  }

  /**
   * Sends a JSON-RPC request to the Ethereum network.
   *
   * @param method - The JSON-RPC method to be called.
   * @param params - An array of parameters for the JSON-RPC method.
   * @returns A promise that resolves with the result of the JSON-RPC call.
   * @throws Will emit an 'error' event and throw an error if the request fails.
   *
   * Special handling for:
   * - 'eth_accounts': Returns the custom address if set.
   * - 'eth_sendTransaction': Signs and sends the transaction using moonSDK.
   */
  async send(method: string, params: Array<any>): Promise<any> {
    try {
      if (method === 'eth_accounts' && this.customAddress) {
        return [this.customAddress];
      }
      if (method === 'eth_sendTransaction') {
        const [txParams] = params;
        const signedTx = await this.moonSDK.signTransaction(
          txParams.from,
          txParams
        );
        return this.moonSDK.sendTransaction(
          txParams.from,
          signedTx,
          txParams.chainId
        );
      }
      return super.send(method, params);
    } catch (error) {
      this.moonSDK.emit('error', { method: 'MoonProvider.send', error });
      throw error;
    }
  }
}
