// services/TransactionService.ts

import { ethers } from 'ethers';

import { MoonSDK } from '../moon';

import { ProviderService } from './ProviderService';

export class TransactionService {
  constructor(private sdk: MoonSDK, private providerService: ProviderService) {}

  async estimateGas(
    transaction: Partial<ethers.providers.TransactionRequest>
  ): Promise<ethers.BigNumber> {
    const provider = await this.providerService.getEthereumProvider(
      this.sdk.getChainService().getSelectedChain()?.network_id || 1
    );
    const gas = await provider.estimateGas(transaction);
    return gas;
  }

  async getGasPrice(): Promise<ethers.BigNumber> {
    const provider = await this.providerService.getEthereumProvider(
      this.sdk.getChainService().getSelectedChain()?.network_id || 1
    );
    const gasPrice = await provider.getGasPrice();
    return gasPrice;
  }

  async watchTransaction(
    txHash: string,
    confirmations = 1
  ): Promise<ethers.providers.TransactionReceipt> {
    const provider = await this.providerService.getEthereumProvider(
      this.sdk.getChainService().getSelectedChain()?.network_id || 1
    );
    return provider.waitForTransaction(txHash, confirmations);
  }
}
