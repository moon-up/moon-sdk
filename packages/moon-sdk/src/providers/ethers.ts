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
