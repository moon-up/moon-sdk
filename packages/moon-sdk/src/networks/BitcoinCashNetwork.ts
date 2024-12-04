import type {
	BitcoinCashBitcoinCashSignBitcoinTransactionPayload,
	BitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPathPayload,
	BitcoinCashInput,
	BitcoinCashTransactionInput,
	UnsignedPSBTInput,
} from "@moonup/moon-api";

import type { MoonSDK } from "../moon";

import type { INetwork } from "./INetwork";

/**
 * The `BitcoinCashNetwork` class provides methods to interact with the Bitcoin Cash network.
 * It implements the `INetwork` interface and uses the `MoonSDK` to perform various operations
 * such as creating accounts, deleting accounts, exporting account details, retrieving account
 * information, listing accounts, signing transactions, and more.
 *
 * @class BitcoinCashNetwork
 * @implements {INetwork}
 *
 * @example
 * ```typescript
 * const moonSDK = new MoonSDK();
 * const bitcoinCashNetwork = new BitcoinCashNetwork(moonSDK);
 *
 * // Create a new account
 * const accountInput: BitcoinCashInput = { ... };
 * const newAccount = await bitcoinCashNetwork.createAccount(accountInput);
 *
 * // Get account information
 * const accountInfo = await bitcoinCashNetwork.getAccount('accountName');
 *
 * // List all accounts
 * const accounts = await bitcoinCashNetwork.listAccounts();
 *
 * // Sign a transaction
 * const transactionInput: BitcoinCashTransactionInput = { ... };
 * const signedTransaction = await bitcoinCashNetwork.signTransaction('accountName', transactionInput);
 * ```
 */
export class BitcoinCashNetwork implements INetwork {
	private moon: MoonSDK;

	constructor(moonSDK: MoonSDK) {
		this.moon = moonSDK;
	}
	estimateGas(transaction: any): Promise<any> {
		throw new Error("Method not implemented.");
	}

	/**
	 * Creates a new Bitcoin Cash account using the provided input.
	 *
	 * @param {BitcoinCashInput} input - The input data required to create a Bitcoin Cash account.
	 * @returns {Promise<any>} A promise that resolves to the response data of the created account.
	 */
	async createAccount(input: BitcoinCashInput): Promise<string> {
		const response = await this.moon
			.getBitcoincashSDK()
			.bitcoinCashBitcoinCashCreateAccount(input);
		return response.data?.address || "";
	}

	/**
	 * Deletes an account with the specified account name from the Bitcoin Cash network.
	 *
	 * @param accountName - The name of the account to be deleted.
	 * @returns A promise that resolves with the response data from the deletion operation.
	 */
	async deleteAccount(accountName: string): Promise<any> {
		const response = await this.moon
			.getBitcoincashSDK()
			.bitcoinCashBitcoinCashDeleteAccount(accountName);
		return response.data;
	}

	/**
	 * Exports the account details for the specified account name.
	 *
	 * @param accountName - The name of the account to export.
	 * @returns A promise that resolves to the exported account data.
	 */
	async exportAccount(accountName: string): Promise<any> {
		const response = await this.moon
			.getBitcoincashSDK()
			.bitcoinCashBitcoinCashExportAccount(accountName);
		return response.data;
	}

	/**
	 * Retrieves account information for the specified account name.
	 *
	 * @param accountName - The name of the account to retrieve.
	 * @returns A promise that resolves to the account data.
	 */
	async getAccount(accountName: string): Promise<any> {
		const response = await this.moon
			.getBitcoincashSDK()
			.bitcoinCashBitcoinCashGetAccount(accountName);
		return response.data;
	}

	/**
	 * Lists all accounts associated with the Bitcoin Cash network.
	 *
	 * @returns {Promise<any>} A promise that resolves to the data containing the list of accounts.
	 */
	async listAccounts(): Promise<string[]> {
		const response = await this.moon
			.getBitcoincashSDK()
			.bitcoinCashListAccounts();
		return response.data?.keys || [];
	}

	/**
	 * Signs a Bitcoin Cash transaction for a given account.
	 *
	 * @param accountName - The name of the account to sign the transaction with.
	 * @param transaction - The transaction details to be signed.
	 * @returns A promise that resolves to the signed transaction data.
	 */
	async signTransaction(
		accountName: string,
		transaction: BitcoinCashTransactionInput,
	): Promise<any> {
		const response = await this.moon
			.getBitcoincashSDK()
			.bitcoinCashBitcoinCashSignTransaction(accountName, transaction);
		return response.data;
	}

	/**
	 * Retrieves the balance for a given Bitcoin Cash address.
	 *
	 * @param address - The Bitcoin Cash address for which to fetch the balance.
	 * @returns A promise that resolves to the balance of the specified address.
	 * @throws An error if the method is not implemented.
	 */
	async getBalance(address: string): Promise<any> {
		// Implement balance fetching for Bitcoin Cash
		throw new Error("Method not implemented.");
	}

	/**
	 * Fetches the details of a transaction from the Bitcoin Cash network.
	 *
	 * @param hash - The hash of the transaction to fetch.
	 * @returns A promise that resolves to the transaction details.
	 * @throws An error if the method is not implemented.
	 */
	async getTransaction(hash: string): Promise<any> {
		// Implement transaction fetching for Bitcoin Cash
		throw new Error("Method not implemented.");
	}

	/**
	 * Sends a transaction on the Bitcoin Cash network.
	 *
	 * @param transaction - The transaction object to be sent.
	 * @returns A promise that resolves with the result of the transaction.
	 * @throws An error if the method is not implemented.
	 */
	async sendTransaction(transaction: any): Promise<any> {
		// Implement transaction sending for Bitcoin Cash
		throw new Error("Method not implemented.");
	}

	/**
	 * Signs a message using the specified account on the Bitcoin Cash network.
	 *
	 * @param accountName - The name of the account to use for signing the message.
	 * @param message - The message to be signed.
	 * @returns A promise that resolves with the signed message.
	 * @throws An error if the method is not implemented.
	 */
	async signMessage(accountName: string, message: string): Promise<any> {
		// Implement message signing for Bitcoin Cash
		throw new Error("Method not implemented.");
	}

	/**
	 * Signs typed data for a given account. This method is specific to Ethereum and does not have an exact equivalent in Bitcoin Cash.
	 *
	 * @param accountName - The name of the account to sign the data with.
	 * @param domain - The domain data for the typed data.
	 * @param types - The types definition for the typed data.
	 * @param value - The actual data to be signed.
	 * @returns A promise that resolves to the signed data.
	 * @throws An error indicating that the method is not implemented for Bitcoin Cash.
	 */
	async signTypedData(
		accountName: string,
		domain: any,
		types: any,
		value: any,
	): Promise<any> {
		// Bitcoin Cash doesn't have an exact equivalent to Ethereum's signTypedData
		throw new Error("Method not implemented for Bitcoin Cash.");
	}

	/**
	 * Generates an unsigned PSBT (Partially Signed Bitcoin Transaction) in hexadecimal format.
	 *
	 * @param accountName - The name of the account for which the PSBT is being generated.
	 * @param input - The input data required to generate the unsigned PSBT.
	 * @returns A promise that resolves to the unsigned PSBT in hexadecimal format.
	 */
	async generateUnsignedPsbtHex(
		accountName: string,
		input: UnsignedPSBTInput,
	): Promise<any> {
		const response = await this.moon
			.getBitcoincashSDK()
			.bitcoinCashBitcoinCashGenerateUnsignedPsbtHex(accountName, input);
		return response.data;
	}

	/**
	 * Signs a Bitcoin transaction for the specified account.
	 *
	 * @param accountName - The name of the account for which the transaction is to be signed.
	 * @param transactionBody - The body of the transaction to be signed.
	 * @returns A promise that resolves to the signed transaction data.
	 */
	async signBitcoinTransaction(
		accountName: string,
		transactionBody: BitcoinCashBitcoinCashSignBitcoinTransactionPayload,
	): Promise<any> {
		const response = await this.moon
			.getBitcoincashSDK()
			.bitcoinCashBitcoinCashSignBitcoinTransaction(
				accountName,
				transactionBody,
			);
		return response.data;
	}

	/**
	 * Signs a Partially Signed Bitcoin Transaction (PSBT) using the provided key path and script path.
	 *
	 * @param accountName - The name of the account to use for signing the PSBT.
	 * @param payload - The payload containing the key path and script path information required for signing the PSBT.
	 * @returns A promise that resolves to the signed PSBT data.
	 */
	async signPsbtWithKeyPathAndScriptPath(
		accountName: string,
		payload: BitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPathPayload,
	): Promise<any> {
		const response = await this.moon
			.getBitcoincashSDK()
			.bitcoinCashBitcoinCashSignPsbtWithKeyPathAndScriptPath(
				accountName,
				payload,
			);
		return response.data;
	}

	/**
	 * Signs a Bitcoin Cash transaction with a memo.
	 *
	 * @param accountName - The name of the account to sign the transaction with.
	 * @param transaction - The transaction input details for Bitcoin Cash.
	 * @returns A promise that resolves to the signed transaction data.
	 */
	async signTransactionWithMemo(
		accountName: string,
		transaction: BitcoinCashTransactionInput,
	): Promise<any> {
		const response = await this.moon
			.getBitcoincashSDK()
			.bitcoinCashBitcoinCashSignTransactionWithMemo(accountName, transaction);
		return response.data;
	}

	/**
	 * Fetches the unspent transactions for a given Bitcoin Cash address.
	 *
	 * @param address - The Bitcoin Cash address to fetch unspent transactions for.
	 * @returns A promise that resolves to the unspent transactions for the specified address.
	 * @throws An error if the method is not implemented.
	 */
	async getUnspentTransactions(address: string): Promise<any> {
		// Implement fetching unspent transactions for a Bitcoin Cash address
		throw new Error("Method not implemented.");
	}

	/**
	 * Estimates the fee for a Bitcoin Cash transaction.
	 *
	 * @param transaction - The input transaction for which the fee needs to be estimated.
	 * @returns A promise that resolves to the estimated fee.
	 * @throws An error if the method is not implemented.
	 */
	async estimateFee(transaction: BitcoinCashTransactionInput): Promise<any> {
		// Implement fee estimation for Bitcoin Cash transactions
		throw new Error("Method not implemented.");
	}

	/**
	 * Fetches the Bitcoin Cash blockchain information.
	 *
	 * @returns {Promise<any>} A promise that resolves to the blockchain information.
	 * @throws {Error} If the method is not implemented.
	 */
	async getBlockchainInfo(): Promise<any> {
		// Implement fetching Bitcoin Cash blockchain info
		throw new Error("Method not implemented.");
	}
}
