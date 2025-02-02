// services/ChainService.ts

import type { MoonSDK } from "../moon";
import type { Chains } from "../types";

/**
 * ChainService class for managing blockchain chains.
 * This service provides methods to retrieve chain information,
 * manage selected chains, and cache chain data.
 */
export class ChainService {
	private chains: Chains[] = [];
	private selectedChain: Chains | null = null;
	private readonly SELECTED_CHAIN_KEY = "moonSelectedChain";
	private readonly CHAINS_KEY = "moonChains";

	constructor(private moon: MoonSDK) {
		this.loadFromLocalStorage();
	}

	private loadFromLocalStorage() {
		if (typeof window !== "undefined" && window.localStorage) {
			const storedSelectedChain = localStorage.getItem(this.SELECTED_CHAIN_KEY);
			if (storedSelectedChain) {
				this.selectedChain = JSON.parse(storedSelectedChain);
			} else {
				this.selectedChain = this.moon.getConfig().selectedChain;
			}

			const storedChains = localStorage.getItem(this.CHAINS_KEY);
			if (storedChains) {
				this.chains = JSON.parse(storedChains);
			}
		} else {
			this.selectedChain = this.moon.getConfig().selectedChain;
		}
	}

	private saveToLocalStorage() {
		if (typeof window !== "undefined" && window.localStorage) {
			localStorage.setItem(
				this.SELECTED_CHAIN_KEY,
				JSON.stringify(this.selectedChain),
			);
			localStorage.setItem(this.CHAINS_KEY, JSON.stringify(this.chains));
		}
	}
	/**
	 * Retrieves a chain by its ID. This method first checks the cache for the chain data.
	 * If the data is not found in the cache, it queries the database using Supabase.
	 * The result is then cached for future requests.
	 *
	 * @param id - The unique identifier of the chain.
	 * @returns A promise that resolves to the chain data.
	 * @throws Will throw an error if the database query fails.
	 */
	async getChainById(id: string): Promise<Chains> {
		const cacheKey = `chain:${id}`;
		const cachedChain = this.moon.cache.get(cacheKey);
		if (cachedChain) {
			return cachedChain as Chains;
		}

		const { data, error } = await this.moon.supabase
			.from("chains")
			.select("*")
			.eq("chain_id", id)
			.single();

		if (error) {
			throw new Error(error.message);
		}

		this.moon.cache.set(cacheKey, data);
		return data as Chains;
	}
	/**
	 * Retrieves the list of chains. If the chains are already cached in memory, it returns them directly.
	 * Otherwise, it attempts to fetch the chains from the cache. If the cache is empty, it fetches the chains
	 * from the Supabase database, caches them, and then returns them.
	 *
	 * @returns {Promise<Chains[]>} A promise that resolves to an array of Chains.
	 * @throws {Error} If there is an error fetching the chains from the database.
	 */
	async getChains(): Promise<Chains[]> {
		if (this.chains.length > 0) {
			return this.chains;
		}

		const { data, error } = await this.moon.supabase.from("chains").select("*");
		if (error) {
			throw new Error(error.message);
		}

		this.chains = data as Chains[];
		this.saveToLocalStorage();
		return this.chains;
	}

	/**
	 * Retrieves the currently selected blockchain chain.
	 *
	 * @returns {Chains | null} The selected chain if one is set, otherwise null.
	 */
	public getSelectedChain(): Chains | null {
		return this.selectedChain;
	}

	/**
	 * Sets the selected blockchain chain.
	 *
	 * @param chain - The chain to be selected.
	 */
	setSelectedChain(chain: Chains): void {
		this.selectedChain = chain;
		this.saveToLocalStorage();
	}
}
