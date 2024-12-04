import { LitecoinInput, LitecoinTransactionInput } from "@moonup/moon-api";
import type { MoonSDK } from "../moon";

import type { INetwork } from "./INetwork";

/**
 * The `LitecoinNetwork` class implements the `INetwork` interface and provides methods to interact with the Litecoin network.
 * It uses an instance of the `MoonSDK` to perform various operations such as creating, deleting, exporting, and retrieving accounts,
 * as well as signing transactions and messages.
 *
 * @remarks
 * This class currently has several methods that are not implemented and will throw an error if called.
 *
 * @example
 * ```typescript
 * const moonSDK = new MoonSDK();
 * const litecoinNetwork = new LitecoinNetwork(moonSDK);
 *
 * // Create a new Litecoin account
 * const accountData = await litecoinNetwork.createAccount(inputData);
 *
 * // Get balance of a Litecoin address
 * const balance = await litecoinNetwork.getBalance('litecoinAddress');
 * ```
 *
 * @public
 */
export class LitecoinNetwork implements INetwork {
	private moon: MoonSDK;

	/**
	 * Creates an instance of the LitecoinNetwork.
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
	 *  Retrieves the balance for a given Litecoin address.
	 * @param address - The address to retrieve the balance for.
	 * @returns A promise that resolves with the balance information.
	 */
	getBalance(address: string): Promise<any> {
		throw new Error("Method not implemented.");
	}

	/**
	 *  Retrieves the details of a transaction given its hash.
	 *
	 * @param hash - The hash of the transaction to retrieve.
	 * @returns A promise that resolves to the transaction details.
	 */
	getTransaction(hash: string): Promise<any> {
		throw new Error("Method not implemented.");
	}

	/**
	 *  Signs a message using the specified account.
	 *
	 * @param accountName - The name of the account to be created.
	 * @param message - The message to be signed.
	 * @returns A promise that resolves with the signed message.
	 */
	signMessage(accountName: string, message: string): Promise<any> {
		throw new Error("Method not implemented.");
	}

	/**
	 *  Signs a message using the specified account.
	 *
	 * @param accountName - The name of the account to be created.
	 * @param domain  - The domain to be used for the
	 * @param types  - The types to be used for the
	 * @param value  - The value to be used for the
	 * @returns A promise that resolves with the signed message.
	 */

	signTypedData(
		accountName: string,
		domain: any,
		types: any,
		value: any,
	): Promise<any> {
		throw new Error("Method not implemented.");
	}

	/**
	 * Retrieves the balance for a given Litecoin address.
	 *
	 * @param address - The Litecoin address to query the balance for.
	 * @returns A promise that resolves with the balance information.
	 * @throws Will throw an error if the method is not implemented.
	 */
	sendTransaction(transaction: any): Promise<any> {
		throw new Error("Method not implemented.");
	}

	/**
	 * Asynchronously creates a Litecoin account using the provided input.
	 *
	 * @param input - The input data required to create a Litecoin account.
	 * @returns A promise that resolves to the data of the created Litecoin account.
	 */
	async createAccount(input: LitecoinInput): Promise<string> {
		const response = await this.moon
			.getLitecoinSDK()
			.litecoinCreateLitecoinAccount(input);
		return response.data?.address || "";
	}

	async signTransaction(accountName: string, transaction: any): Promise<any> {
		const response = await this.moon
			.getLitecoinSDK()
			.litecoinSignLitecoinTransaction(accountName, transaction);
		return response.data;
	}

	/**
	 * Deletes a Litecoin account by its name.
	 *
	 * @param accountName - The name of the account to be deleted.
	 * @returns A promise that resolves with the response data from the deletion request.
	 */
	async deleteAccount(accountName: string): Promise<any> {
		const response = await this.moon
			.getLitecoinSDK()
			.litecoinDeleteLitecoinAccount(accountName);
		return response.data;
	}

	/**
	 * Exports the account details for a given account name from the Litecoin network.
	 *
	 * @param accountName - The name of the account to export.
	 * @returns A promise that resolves to the account data.
	 */
	async exportAccount(accountName: string): Promise<any> {
		const response = await this.moon
			.getLitecoinSDK()
			.litecoinExportLitecoinAccount(accountName);
		return response.data;
	}

	/**
	 * Retrieves the Litecoin account information for the specified account name.
	 *
	 * @param accountName - The name of the account to retrieve.
	 * @returns A promise that resolves to the account information.
	 */
	async getAccount(accountName: string): Promise<any> {
		const response = await this.moon
			.getLitecoinSDK()
			.litecoinGetLitecoinAccount(accountName);
		return response.data;
	}

	/**
	 * Lists all Litecoin accounts.
	 *
	 * @returns {Promise<any>} A promise that resolves to the data containing the list of Litecoin accounts.
	 */
	async listAccounts(): Promise<string[]> {
		const response = await this.moon.getLitecoinSDK().listLitecoinAccounts();
		return response.data?.keys || [];
	}

	/**
	 * Signs a Litecoin transaction for a given account.
	 *
	 * @param accountName - The name of the account to sign the transaction with.
	 * @param transaction - The transaction object to be signed.
	 * @returns A promise that resolves to the signed transaction data.
	 */
	async signTransactionWithMemo(
		accountName: string,
		transaction: LitecoinTransactionInput,
	): Promise<any> {
		const response = await this.moon
			.getLitecoinSDK()
			.litecoinSignLitecoinTransactionWithMemo(accountName, transaction);
		return response.data;
	}
}
