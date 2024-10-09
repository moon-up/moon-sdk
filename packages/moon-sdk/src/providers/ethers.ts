import {
  IEthereumProvider,
  ProviderAccounts,
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
  estimateGas(
    transaction: ethers.providers.TransactionRequest
  ): Promise<ethers.BigNumber> {
    return super.estimateGas(transaction);
  }

  getGasPrice(): Promise<ethers.BigNumber> {
    return super.getGasPrice();
  }

  getBalance(
    addressOrName: string | ethers.providers.AddressOrName,
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
  on(event: unknown, listener: unknown): void {
    throw new Error('Method not implemented.');
  }
  once(event: string, listener: any): void {
    throw new Error('Method not implemented.');
  }
  removeListener(event: string, listener: any): void {
    throw new Error('Method not implemented.');
  }
  off(event: string, listener: any): void {
    throw new Error('Method not implemented.');
  }
  enable(): Promise<ProviderAccounts> {
    throw new Error('Method not implemented.');
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
