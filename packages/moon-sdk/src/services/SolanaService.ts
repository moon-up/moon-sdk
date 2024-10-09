// services/SolanaService.ts

import { SolanaSignTransactionInput } from '@moonup/moon-api';

import { MoonAPIService } from './MoonAPIService';

export class SolanaService {
  constructor(private moonAPIService: MoonAPIService) {}

  async getBalance(address: string): Promise<string> {
    const response = await this.moonAPIService
      .getSDK('Solana')
      .getBalance(address);
    return response.data?.balance || '0';
  }

  async signTransction(
    accountName: string,
    transaction: SolanaSignTransactionInput
  ) {
    const response = await this.moonAPIService
      .getSolanaSDK()
      .signSolanaTransaction(accountName, transaction);
    return response.data;
  }
}
