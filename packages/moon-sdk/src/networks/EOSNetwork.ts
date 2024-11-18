import type { EosInput, EosTransactionInput } from "@moonup/moon-api";

import type { MoonSDK } from "../moon";

import type { INetwork } from "./INetwork";

/**
 * The `EOSNetwork` class implements the `INetwork` interface and provides methods to interact with the EOS blockchain.
 * It utilizes the `MoonSDK` to perform various operations such as account management, transaction signing, and data retrieval.
 *
 * @class
 * @implements {INetwork}
 */
export class EOSNetwork implements INetwork {
	private moon: MoonSDK;

	/**
	 * Creates an instance of the EOSNetwork class.
	 *
	 * @param moonSDK - An instance of the MoonSDK class.
	 */
	constructor(moonSDK: MoonSDK) {
		this.moon = moonSDK;
	}
	estimateGas(transaction: any): Promise<any> {
		throw new Error("Method not implemented.");
	}

	/**
	 * Creates a new EOS account using the provided input.
	 *
	 * @param {EosInput} input - The input data required to create the EOS account.
	 * @returns {Promise<any>} A promise that resolves to the response data of the created EOS account.
	 */
	async createAccount(input: EosInput): Promise<any> {
		const response = await this.moon.getEosSDK().createEosAccount(input);
		return response.data;
	}

	/**
	 * Deletes an EOS account with the specified account name.
	 *
	 * @param accountName - The name of the EOS account to be deleted.
	 * @returns A promise that resolves with the response data from the EOS SDK.
	 */
	async deleteAccount(accountName: string): Promise<any> {
		const response = await this.moon.getEosSDK().deleteEosAccount(accountName);
		return response.data;
	}

	/**
	 * Exports the account details for a given EOS account name.
	 *
	 * @param accountName - The name of the EOS account to export.
	 * @returns A promise that resolves to the account data.
	 */
	async exportAccount(accountName: string): Promise<any> {
		const response = await this.moon.getEosSDK().exportEosAccount(accountName);
		return response.data;
	}

	/**
	 * Retrieves the account information for a given EOS account name.
	 *
	 * @param accountName - The name of the EOS account to retrieve information for.
	 * @returns A promise that resolves to the account information.
	 */
	async getAccount(accountName: string): Promise<any> {
		const response = await this.moon.getEosSDK().getEosAccount(accountName);
		return response.data;
	}

	/**
	 * Lists all EOS accounts.
	 *
	 * @returns {Promise<any>} A promise that resolves to the data containing the list of EOS accounts.
	 */
	async listAccounts(): Promise<any> {
		const response = await this.moon.getEosSDK().listEosAccounts();
		return response.data;
	}

	/**
	 * Signs an EOS transaction for a given account.
	 *
	 * @param accountName - The name of the account that will sign the transaction.
	 * @param transaction - The transaction details to be signed.
	 * @returns A promise that resolves to the signed transaction data.
	 */
	async signTransaction(
		accountName: string,
		transaction: EosTransactionInput,
	): Promise<any> {
		const response = await this.moon
			.getEosSDK()
			.signEosTransaction(accountName, transaction);
		return response.data;
	}

	/**
	 * Retrieves the balance for a given EOS address.
	 *
	 * @param address - The EOS address to fetch the balance for.
	 * @returns A promise that resolves to the balance of the specified address.
	 * @throws An error if the method is not implemented.
	 */
	async getBalance(address: string): Promise<any> {
		// Implement balance fetching for EOS
		throw new Error("Method not implemented.");
	}

	/**
	 * Fetches the details of a transaction from the EOS network using the provided transaction hash.
	 *
	 * @param hash - The unique identifier of the transaction to fetch.
	 * @returns A promise that resolves to the transaction details.
	 * @throws Will throw an error if the method is not implemented.
	 */
	async getTransaction(hash: string): Promise<any> {
		// Implement transaction fetching for EOS
		throw new Error("Method not implemented.");
	}

	/**
	 * Sends a transaction on the EOS network.
	 *
	 * @param transaction - The transaction object to be sent.
	 * @returns A promise that resolves with the result of the transaction.
	 * @throws Will throw an error if the method is not implemented.
	 */
	async sendTransaction(transaction: any): Promise<any> {
		// Implement transaction sending for EOS
		throw new Error("Method not implemented.");
	}

	/**
	 * Signs a message using the specified EOS account.
	 *
	 * @param accountName - The name of the EOS account to use for signing the message.
	 * @param message - The message to be signed.
	 * @returns A promise that resolves with the signed message.
	 * @throws An error if the method is not implemented.
	 */
	async signMessage(accountName: string, message: string): Promise<any> {
		// Implement message signing for EOS
		throw new Error("Method not implemented.");
	}

	/**
	 * Signs typed data for a given account on the EOS network.
	 *
	 * @param accountName - The name of the account to sign the data with.
	 * @param domain - The domain information for the typed data.
	 * @param types - The types definition for the typed data.
	 * @param value - The value to be signed.
	 * @returns A promise that resolves to the signed data.
	 * @throws An error indicating that the method is not implemented for EOS.
	 */
	async signTypedData(
		accountName: string,
		domain: any,
		types: any,
		value: any,
	): Promise<any> {
		// EOS doesn't have an exact equivalent to Ethereum's signTypedData
		throw new Error("Method not implemented for EOS.");
	}

	/**
	 * Fetches detailed account information for a given EOS account.
	 *
	 * @param accountName - The name of the EOS account to retrieve information for.
	 * @returns A promise that resolves to the account information.
	 * @throws An error if the method is not implemented.
	 */
	async getAccountInfo(accountName: string): Promise<any> {
		// Implement fetching detailed account info for an EOS account
		throw new Error("Method not implemented.");
	}

	/**
	 * Fetches table rows from an EOS smart contract.
	 *
	 * @param code - The account name of the contract that owns the table.
	 * @param scope - The scope within the contract in which the table is found.
	 * @param table - The name of the table to query.
	 * @returns A promise that resolves to the table rows.
	 * @throws An error if the method is not implemented.
	 */
	async pushAction(
		accountName: string,
		action: string,
		data: any,
	): Promise<any> {
		// Implement pushing an action to an EOS smart contract
		throw new Error("Method not implemented.");
	}

	/**
	 * Fetches the current RAM price from the EOS network.
	 *
	 * @returns {Promise<any>} A promise that resolves to the current RAM price.
	 * @throws {Error} Throws an error if the method is not implemented.
	 */
	async getRamPrice(): Promise<any> {
		// Implement fetching current RAM price
		throw new Error("Method not implemented.");
	}

	/**
	 * Estimates the CPU and NET resource usage for a given EOS transaction.
	 *
	 * @param {EosTransactionInput} transaction - The EOS transaction input for which to estimate resource usage.
	 * @returns {Promise<any>} A promise that resolves with the estimated resource usage.
	 * @throws {Error} If the method is not implemented.
	 */
	async estimateResourceUsage(transaction: EosTransactionInput): Promise<any> {
		// Implement estimating CPU and NET usage for a transaction
		throw new Error("Method not implemented.");
	}

	/**
	 * Retrieves information about a specific block from the EOS network.
	 *
	 * @param blockNumOrId - The block number or block ID to fetch information for.
	 * @returns A promise that resolves to the block information.
	 * @throws Will throw an error if the method is not implemented.
	 */
	async getBlockInfo(blockNumOrId: string | number): Promise<any> {
		// Implement fetching block information
		throw new Error("Method not implemented.");
	}
}
