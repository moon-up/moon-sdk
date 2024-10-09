// services/ChainService.ts

import { MoonSDK } from '../moon';
import { Chains } from '../types';

export class ChainService {
  private chains: Chains[] = [];
  private selectedChain: Chains | null = null;
  constructor(private moon: MoonSDK) {
    this.selectedChain = this.moon.getConfig().selectedChain;
  }

  async getChainById(id: string): Promise<Chains> {
    const cacheKey = `chain:${id}`;
    const cachedChain = this.moon.cache.get(cacheKey);
    if (cachedChain) {
      return cachedChain as Chains;
    }

    const { data, error } = await this.moon.supabase
      .from('chains')
      .select('*')
      .eq('chain_id', id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    this.moon.cache.set(cacheKey, data);
    return data as Chains;
  }
  async getChains(): Promise<Chains[]> {
    if (this.chains.length > 0) {
      return this.chains;
    }

    const cacheKey = 'chains';
    const cachedChains = this.moon.cache.get(cacheKey);
    if (cachedChains) {
      this.chains = cachedChains as Chains[];
      return this.chains;
    }

    const { data, error } = await this.moon.supabase.from('chains').select('*');
    if (error) {
      throw new Error(error.message);
    }

    this.chains = data as Chains[];
    this.moon.cache.set(cacheKey, this.chains);
    return this.chains;
  }

  public getSelectedChain(): Chains | null {
    return this.selectedChain;
  }

  setSelectedChain(chain: Chains): void {
    this.selectedChain = chain;
  }
}
