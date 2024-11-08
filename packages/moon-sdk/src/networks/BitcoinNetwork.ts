import type { MoonSDK } from "../moon";

import type { INetwork } from "./INetwork";

/**
 * The `BitcoinNetwork` class provides methods to interact with the Bitcoin network.
 * It implements the `INetwork` interface and uses an instance of `MoonSDK` to perform various operations.
 *
 * @class
 * @implements {INetwork}
 */
export class BitcoinNetwork implements INetwork {
	private moon: MoonSDK;

	/**
	 * Creates an instance of BitcoinNetwork.
	 *
	 * @param moonSDK - An instance of the MoonSDK class.
	 */
	constructor(moonSDK: MoonSDK) {
		this.moon = moonSDK;
	}
	/**
	 * Retrieves the balance for a given Bitcoin address.
	 *
	 * @param address - The Bitcoin address for which to retrieve the balance.
	 * @returns A promise that resolves with the balance information.
	 * @throws An error if the method is not implemented.
	 */
	getBalance(address: string): Promise<any> {
		throw new Error("Method not implemented.");
	}
	/**
	 * Retrieves the details of a transaction given its hash.
	 *
	 * @param hash - The hash of the transaction to retrieve.
	 * @returns A promise that resolves to the transaction details.
	 * @throws An error if the method is not implemented.
	 */
	getTransaction(hash: string): Promise<any> {
		throw new Error("Method not implemented.");
	}
	/**
	 * Sends a transaction to the Bitcoin network.
	 *
	 * @param transaction - The transaction object to be sent.
	 * @returns A promise that resolves with the result of the transaction.
	 * @throws Will throw an error if the method is not implemented.
	 */
	sendTransaction(transaction: any): Promise<any> {
		throw new Error("Method not implemented.");
	}

	async createAccount(input: any): Promise<any> {
		const response = await this.moon
			.getBitcoinSDK()
			.createBitcoinAccount(input);
		return response.data;
	}

	/**
	 * Deletes a Bitcoin account with the specified account name.
	 *
	 * @param accountName - The name of the account to be deleted.
	 * @returns A promise that resolves to the response data of the delete operation.
	 */
	async deleteAccount(accountName: string): Promise<any> {
		const response = await this.moon
			.getBitcoinSDK()
			.deleteBitcoinAccount(accountName);
		return response.data;
	}

	/**
	 * Exports the Bitcoin account associated with the given account name.
	 *
	 * @param accountName - The name of the account to export.
	 * @returns A promise that resolves to the exported account data.
	 */
	async exportAccount(accountName: string): Promise<any> {
		const response = await this.moon
			.getBitcoinSDK()
			.exportBitcoinAccount(accountName);
		return response.data;
	}

	/**
	 * Retrieves the Bitcoin account details for the specified account name.
	 *
	 * @param accountName - The name of the account to retrieve.
	 * @returns A promise that resolves to the account details.
	 */
	async getAccount(accountName: string): Promise<any> {
		const response = await this.moon
			.getBitcoinSDK()
			.getBitcoinAccount(accountName);
		return response.data;
	}

	/**
	 * Lists all Bitcoin accounts associated with the current instance.
	 *
	 * @returns {Promise<any>} A promise that resolves to the data containing the list of Bitcoin accounts.
	 */
	async listAccounts(): Promise<string[]> {
		const response = await this.moon.getBitcoinSDK().listBitcoinAccounts();
		return response.data?.keys || [];
	}

	/**
	 * Signs a Bitcoin transaction for the given account.
	 *
	 * @param accountName - The name of the account to sign the transaction with.
	 * @param transaction - The transaction object to be signed.
	 * @returns A promise that resolves to the signed transaction data.
	 */
	async signTransaction(accountName: string, transaction: any): Promise<any> {
		const response = await this.moon
			.getBitcoinSDK()
			.signBitcoinTransaction(accountName, transaction);
		return response.data;
	}

	/**
	 * Signs a message using the specified account.
	 *
	 * @param accountName - The name of the account to use for signing the message.
	 * @param message - The message to be signed.
	 * @returns A promise that resolves to the signed message.
	 * @throws An error indicating that message signing is not supported for Bitcoin.
	 */
	async signMessage(accountName: string, message: string): Promise<any> {
		throw new Error("Message signing is not supported for Bitcoin");
	}

	/**
	 * Signs typed data for a given account. This method is not supported for Bitcoin networks.
	 *
	 * @param accountName - The name of the account to sign the data with.
	 * @param domain - The domain data for the typed data.
	 * @param types - The types definition for the typed data.
	 * @param value - The actual data to be signed.
	 * @returns A promise that resolves to the signed data.
	 * @throws An error indicating that typed data signing is not supported for Bitcoin.
	 */
	async signTypedData(
		accountName: string,
		domain: any,
		types: any,
		value: any,
	): Promise<any> {
		throw new Error("Typed data signing is not supported for Bitcoin");
	}

	/**
	 * Creates a BRC-20 transaction for the specified account.
	 *
	 * @param accountName - The name of the account for which the transaction is being created.
	 * @param transactionInput - The input data required to create the transaction.
	 * @returns A promise that resolves to the transaction data.
	 */
	async createBrc20Transaction(
		accountName: string,
		transactionInput: any,
	): Promise<any> {
		const response = await this.moon
			.getBitcoinSDK()
			.createBrc20Transaction(accountName, transactionInput);
		return response.data;
	}

	/**
	 * Creates an SRC20 inscription on the Bitcoin network.
	 *
	 * @param accountName - The name of the account to use for the inscription.
	 * @param inscriptionInput - The input data required for the inscription.
	 * @returns A promise that resolves to the response data of the inscription creation.
	 */
	async createSrc20Inscription(
		accountName: string,
		inscriptionInput: any,
	): Promise<any> {
		const response = await this.moon
			.getBitcoinSDK()
			.createSrc20Inscription(accountName, inscriptionInput);
		return response.data;
	}

	/**
	 * Generates an unsigned PSBT (Partially Signed Bitcoin Transaction) hex string.
	 *
	 * @param accountName - The name of the account for which the PSBT is being generated.
	 * @param psbtInput - The input data required to generate the PSBT.
	 * @returns A promise that resolves to the unsigned PSBT hex string.
	 */
	async generateUnsignedPsbtHex(
		accountName: string,
		psbtInput: any,
	): Promise<any> {
		const response = await this.moon
			.getBitcoinSDK()
			.generateUnsignedPsbtHex(accountName, psbtInput);
		return response.data;
	}
}
