// services/CacheService.ts

import { LRUCache } from 'lru-cache';

export class CacheService {
  private cache: LRUCache<string, any>;

  constructor(options: { max: number; maxAge: number }) {
    this.cache = new LRUCache(options);
  }

  get(key: string): any {
    return this.cache.get(key);
  }

  set(key: string, value: any): void {
    this.cache.set(key, value);
  }

  has(key: string): boolean {
    return this.cache.has(key);
  }

  delete(key: string): void {
    this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }
}
