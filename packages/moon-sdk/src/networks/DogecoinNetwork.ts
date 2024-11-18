import type { DogeCoinInput, DogeCoinTransactionInput } from "@moonup/moon-api";

import type { MoonSDK } from "../moon";

import type { INetwork } from "./INetwork";

/**
 * The `DogecoinNetwork` class implements the `INetwork` interface and provides methods to interact with the Dogecoin network.
 * It utilizes an instance of the `MoonSDK` to perform various operations such as creating, deleting, exporting accounts,
 * signing transactions, and fetching account information.
 *
 * @remarks
 * This class includes several methods that are not yet implemented and will throw an error if called.
 *
 * @example
 * ```typescript
 * const moonSDK = new MoonSDK();
 * const dogecoinNetwork = new DogecoinNetwork(moonSDK);
 *
 * // Create a new Dogecoin account
 * const accountInput: DogeCoinInput = { /* account details *\/ };
 * const newAccount = await dogecoinNetwork.createAccount(accountInput);
 *
 * // Get account information
 * const accountInfo = await dogecoinNetwork.getAccount('accountName');
 * ```
 *
 * @public
 */
export class DogecoinNetwork implements INetwork {
	private moon: MoonSDK;

	/**
	 * Creates an instance of the DogecoinNetwork.
	 *
	 * @param moonSDK - An instance of the MoonSDK.
	 */
	constructor(moonSDK: MoonSDK) {
		this.moon = moonSDK;
	}
	estimateGas(transaction: any): Promise<any> {
		throw new Error("Method not implemented.");
	}

	/**
	 * Creates a new Dogecoin account using the provided input.
	 *
	 * @param {DogeCoinInput} input - The input data required to create a Dogecoin account.
	 * @returns {Promise<any>} A promise that resolves to the response data of the created Dogecoin account.
	 */
	async createAccount(input: DogeCoinInput): Promise<any> {
		const response = await this.moon
			.getDogecoinSDK()
			.createDogeCoinAccount(input);
		return response.data;
	}

	/**
	 * Deletes a Dogecoin account with the specified account name.
	 *
	 * @param accountName - The name of the account to be deleted.
	 * @returns A promise that resolves with the response data from the deletion request.
	 */
	async deleteAccount(accountName: string): Promise<any> {
		const response = await this.moon
			.getDogecoinSDK()
			.deleteDogeCoinAccount(accountName);
		return response.data;
	}

	/**
	 * Exports the Dogecoin account associated with the given account name.
	 *
	 * @param accountName - The name of the account to export.
	 * @returns A promise that resolves to the exported account data.
	 */
	async exportAccount(accountName: string): Promise<any> {
		const response = await this.moon
			.getDogecoinSDK()
			.exportDogeCoinAccount(accountName);
		return response.data;
	}

	/**
	 * Retrieves the Dogecoin account information for the specified account name.
	 *
	 * @param accountName - The name of the Dogecoin account to retrieve.
	 * @returns A promise that resolves to the account information.
	 */
	async getAccount(accountName: string): Promise<any> {
		const response = await this.moon
			.getDogecoinSDK()
			.getDogeCoinAccount(accountName);
		return response.data;
	}

	/**
	 * Lists all Dogecoin accounts.
	 *
	 * @returns {Promise<any>} A promise that resolves to the data containing the list of Dogecoin accounts.
	 */
	async listAccounts(): Promise<any> {
		const response = await this.moon.getDogecoinSDK().listDogeCoinAccounts();
		return response.data;
	}

	/**
	 * Signs a Dogecoin transaction for a given account.
	 *
	 * @param accountName - The name of the account to sign the transaction for.
	 * @param transaction - The Dogecoin transaction input to be signed.
	 * @returns A promise that resolves to the signed transaction data.
	 */
	async signTransaction(
		accountName: string,
		transaction: DogeCoinTransactionInput,
	): Promise<any> {
		const response = await this.moon
			.getDogecoinSDK()
			.signDogeCoinTransaction(accountName, transaction);
		return response.data;
	}

	/**
	 * Retrieves the balance for a given Dogecoin address.
	 *
	 * @param address - The Dogecoin address for which to fetch the balance.
	 * @returns A promise that resolves to the balance of the specified address.
	 * @throws An error if the method is not implemented.
	 */
	async getBalance(address: string): Promise<any> {
		// Implement balance fetching for Dogecoin
		throw new Error("Method not implemented.");
	}

	/**
	 * Fetches the details of a transaction from the Dogecoin network.
	 *
	 * @param hash - The hash of the transaction to fetch.
	 * @returns A promise that resolves to the transaction details.
	 * @throws An error if the method is not implemented.
	 */
	async getTransaction(hash: string): Promise<any> {
		// Implement transaction fetching for Dogecoin
		throw new Error("Method not implemented.");
	}

	/**
	 * Sends a transaction on the Dogecoin network.
	 *
	 * @param transaction - The transaction object to be sent.
	 * @returns A promise that resolves with the result of the transaction.
	 * @throws Will throw an error if the method is not implemented.
	 */
	async sendTransaction(transaction: any): Promise<any> {
		// Implement transaction sending for Dogecoin
		throw new Error("Method not implemented.");
	}

	/**
	 * Signs a message using the specified account.
	 *
	 * @param accountName - The name of the account to use for signing the message.
	 * @param message - The message to be signed.
	 * @returns A promise that resolves with the signed message.
	 * @throws An error if the method is not implemented.
	 */
	async signMessage(accountName: string, message: string): Promise<any> {
		// Implement message signing for Dogecoin
		throw new Error("Method not implemented.");
	}

	/**
	 * Signs typed data for a given account. This method is specific to the Dogecoin network.
	 *
	 * @param accountName - The name of the account to sign the data with.
	 * @param domain - The domain data for the typed data.
	 * @param types - The types definition for the typed data.
	 * @param value - The actual data to be signed.
	 * @returns A promise that resolves to the signed data.
	 * @throws An error indicating that this method is not implemented for Dogecoin.
	 */
	async signTypedData(
		accountName: string,
		domain: any,
		types: any,
		value: any,
	): Promise<any> {
		// Dogecoin doesn't have an exact equivalent to Ethereum's signTypedData
		throw new Error("Method not implemented for Dogecoin.");
	}

	/**
	 * Signs a Dogecoin transaction with a memo.
	 *
	 * @param accountName - The name of the account to sign the transaction with.
	 * @param transaction - The Dogecoin transaction input to be signed.
	 * @returns A promise that resolves to the signed transaction data.
	 */
	async signTransactionWithMemo(
		accountName: string,
		transaction: DogeCoinTransactionInput,
	): Promise<any> {
		const response = await this.moon
			.getDogecoinSDK()
			.signDogeCoinTransactionWithMemo(accountName, transaction);
		return response.data;
	}

	/**
	 * Fetches the unspent transactions for a given Dogecoin address.
	 *
	 * @param address - The Dogecoin address to fetch unspent transactions for.
	 * @returns A promise that resolves to the unspent transactions.
	 * @throws Will throw an error if the method is not implemented.
	 */
	async getUnspentTransactions(address: string): Promise<any> {
		// Implement fetching unspent transactions for a Dogecoin address
		throw new Error("Method not implemented.");
	}

	/**
	 * Estimates the fee for a given Dogecoin transaction.
	 *
	 * @param {DogeCoinTransactionInput} transaction - The Dogecoin transaction input for which the fee is to be estimated.
	 * @returns {Promise<any>} A promise that resolves to the estimated fee for the transaction.
	 * @throws {Error} Throws an error if the method is not implemented.
	 */
	async estimateFee(transaction: DogeCoinTransactionInput): Promise<any> {
		// Implement fee estimation for Dogecoin transactions
		throw new Error("Method not implemented.");
	}

	/**
	 * Fetches the Dogecoin blockchain information.
	 *
	 * @returns {Promise<any>} A promise that resolves to the Dogecoin blockchain information.
	 * @throws {Error} If the method is not implemented.
	 */
	async getBlockchainInfo(): Promise<any> {
		// Implement fetching Dogecoin blockchain info
		throw new Error("Method not implemented.");
	}

	/**
	 * Fetches information for a given Dogecoin address.
	 *
	 * @param address - The Dogecoin address to retrieve information for.
	 * @returns A promise that resolves to the address information.
	 * @throws Will throw an error if the method is not implemented.
	 */
	async getAddressInfo(address: string): Promise<any> {
		// Implement fetching address info for a Dogecoin address
		throw new Error("Method not implemented.");
	}
}
