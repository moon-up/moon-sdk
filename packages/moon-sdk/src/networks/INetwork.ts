/**
 * Interface representing a network with various account and transaction operations.
 */
export interface INetwork {
	/**
	 * Creates a new account.
	 * @param input - The input data required to create the account.
	 * @returns A promise that resolves with the result of the account creation.
	 */
	createAccount(input: any): Promise<any>;

	/**
	 * Deletes an existing account.
	 * @param accountName - The name of the account to delete.
	 * @returns A promise that resolves with the result of the account deletion.
	 */
	deleteAccount(accountName: string): Promise<any>;

	/**
	 * Exports an existing account.
	 * @param accountName - The name of the account to export.
	 * @returns A promise that resolves with the exported account data.
	 */
	exportAccount(accountName: string): Promise<any>;

	/**
	 * Retrieves an existing account.
	 * @param accountName - The name of the account to retrieve.
	 * @returns A promise that resolves with the account data.
	 */
	getAccount(accountName: string): Promise<any>;

	/**
	 * estimate gas for a transaction.
	 *
	 * @param transaction - The transaction data to estimate gas.
	 * @returns A promise that resolves with the estimated gas.
	 */
	estimateGas(transaction: any): Promise<any>;

	/**
	 * Lists all existing accounts.
	 * @returns A promise that resolves with the list of accounts.
	 */
	listAccounts(): Promise<any>;

	/**
	 * Signs a transaction with the specified account.
	 * @param accountName - The name of the account to use for signing.
	 * @param transaction - The transaction data to sign.
	 * @returns A promise that resolves with the signed transaction.
	 */
	signTransaction(accountName: string, transaction: any): Promise<any>;

	/**
	 * Retrieves the balance of the specified address.
	 * @param address - The address to retrieve the balance for.
	 * @returns A promise that resolves with the balance data.
	 */
	getBalance(address: string): Promise<any>;

	/**
	 * Retrieves a transaction by its hash.
	 * @param hash - The hash of the transaction to retrieve.
	 * @returns A promise that resolves with the transaction data.
	 */
	getTransaction(hash: string): Promise<any>;

	/**
	 * Sends a transaction.
	 * @param transaction - The transaction data to send.
	 * @returns A promise that resolves with the result of the transaction.
	 */
	sendTransaction(transaction: any): Promise<any>;

	/**
	 * Signs a message with the specified account.
	 * @param accountName - The name of the account to use for signing.
	 * @param message - The message to sign.
	 * @returns A promise that resolves with the signed message.
	 */
	signMessage(accountName: string, message: string): Promise<any>;

	/**
	 * Signs typed data with the specified account.
	 * @param accountName - The name of the account to use for signing.
	 * @param domain - The domain data for the typed data.
	 * @param types - The types definition for the typed data.
	 * @param value - The value of the typed data.
	 * @returns A promise that resolves with the signed typed data.
	 */
	signTypedData(
		accountName: string,
		domain: any,
		types: any,
		value: any,
	): Promise<any>;

	// TODO: add more methods
}
