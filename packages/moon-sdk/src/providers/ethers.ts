import {
  IEthereumProvider,
  ProviderAccounts,
  ProviderChainId,
  ProviderInfo,
  ProviderMessage,
  ProviderRpcError,
  RequestArguments,
} from 'eip1193-provider';
import { ethers } from 'ethers';

import { MoonSDK } from '../moon';
/**
 * Custom Ethereum provider for MoonSDK
 */
export class MoonProvider
  extends ethers.providers.JsonRpcProvider
  implements IEthereumProvider
{
  private moonSDK: MoonSDK;
  private customAddress: string | null = null;

  constructor(moonSDK: MoonSDK, url?: string) {
    super(url);
    this.moonSDK = moonSDK;
  }

  // Implement the missing methods from IEthereumProvider
  on(
    eventName: ethers.providers.EventType,
    listener: ethers.providers.Listener
  ): this {
    if (eventName === 'connect') {
      super.on(eventName, (info: ProviderInfo) => listener(info));
    } else if (eventName === 'disconnect') {
      super.on(eventName, (error: ProviderRpcError) => listener(error));
    } else if (eventName === 'message') {
      super.on(eventName, (message: ProviderMessage) => listener(message));
    } else if (eventName === 'chainChanged') {
      super.on(eventName, (chainId: ProviderChainId) => listener(chainId));
    } else if (eventName === 'accountsChanged') {
      super.on(eventName, (accounts: ProviderAccounts) => listener(accounts));
    } else {
      super.on(eventName, listener);
    }
    return this;
  }
  once(
    eventName: ethers.providers.EventType,
    listener: ethers.providers.Listener
  ): this {
    super.once(eventName, listener);
    return this;
  }

  off(
    eventName: ethers.providers.EventType,
    listener?: ethers.providers.Listener
  ): this {
    super.off(eventName, listener);
    return this;
  }

  removeListener(
    eventName: ethers.providers.EventType,
    listener: ethers.providers.Listener
  ): ethers.providers.Provider {
    return super.removeListener(eventName, listener);
  }

  async enable(): Promise<ProviderAccounts> {
    try {
      const accounts = await this.send('eth_requestAccounts', []);
      return accounts as ProviderAccounts;
    } catch (error) {
      this.moonSDK.emit('error', { method: 'MoonProvider.enable', error });
      throw error;
    }
  }
  estimateGas(
    transaction: ethers.providers.TransactionRequest
  ): Promise<ethers.BigNumber> {
    return super.estimateGas(transaction);
  }

  getGasPrice(): Promise<ethers.BigNumber> {
    return super.getGasPrice();
  }

  getBalance(
    addressOrName: string | Promise<string>,
    blockTag?: ethers.providers.BlockTag | Promise<ethers.providers.BlockTag>
  ): Promise<ethers.BigNumber> {
    return super.getBalance(addressOrName, blockTag);
  }
  waitForTransaction(
    transactionHash: string,
    confirmations?: number,
    timeout?: number
  ): Promise<ethers.providers.TransactionReceipt> {
    return super.waitForTransaction(transactionHash, confirmations, timeout);
  }

  lookupAddress(address: string): Promise<string> {
    this.customAddress = address;
    return Promise.resolve(address);
  }
  resolveName(address: string): Promise<string> {
    return Promise.resolve(address);
  }
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

  setCustomAddress(address: string) {
    this.customAddress = address;
    this.moonSDK.emit('addressChanged', address);
  }
}
