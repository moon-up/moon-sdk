// services/CacheService.ts

import { LRUCache } from "lru-cache";

/**
 * CacheService provides a simple interface for caching data using an LRU (Least Recently Used) cache.
 */
export class CacheService {
	/**
	 * The LRU cache instance.
	 */
	private cache: LRUCache<string, any>;

	/**
	 * Creates an instance of CacheService.
	 * @param options - Configuration options for the LRU cache.
	 * @param options.max - The maximum size of the cache.
	 * @param options.maxAge - The maximum age of items in the cache (in milliseconds).
	 */
	constructor(options: { max: number; maxAge: number }) {
		this.cache = new LRUCache(options);
	}

	/**
	 * Retrieves a value from the cache.
	 * @param key - The key of the item to retrieve.
	 * @returns The cached value, or undefined if the key is not found.
	 */
	get(key: string): any {
		return this.cache.get(key);
	}

	/**
	 * Adds or updates a value in the cache.
	 * @param key - The key of the item to add or update.
	 * @param value - The value to cache.
	 */
	set(key: string, value: any): void {
		this.cache.set(key, value);
	}

	/**
	 * Checks if a key exists in the cache.
	 * @param key - The key to check.
	 * @returns True if the key exists in the cache, false otherwise.
	 */
	has(key: string): boolean {
		return this.cache.has(key);
	}

	/**
	 * Deletes a value from the cache.
	 * @param key - The key of the item to delete.
	 */
	delete(key: string): void {
		this.cache.delete(key);
	}

	/**
	 * Clears all items from the cache.
	 */
	clear(): void {
		this.cache.clear();
	}
}
