// useMoon.ts
import type { ChainType, INetwork } from "@moonup/moon-sdk";
import { useCallback, useState } from "react";
import {
	useAccount,
	useChainId,
	useSendTransaction,
	useSignMessage,
	useSignTypedData,
	useSwitchChain,
} from "wagmi";
import { useMoonAuth } from "../../context";
// useMoon.ts

/**
 * Custom hook to interact with MoonSDK for managing accounts and transactions.
 *
 * @returns {INetwork & {
 *   chainType: ChainType;
 *   changeChainType: (newChainType: ChainType) => void;
 * }} An object containing the current chain type, a function to change the chain type,
 * and various functions to manage accounts and transactions.
 *
 * @throws {Error} If MoonSDK is not initialized.
 *
 * @function createAccount
 * @description Creates a new account.
 * @param {any} input - The input data for creating the account.
 * @returns {Promise<any>} A promise that resolves with the created account data.
 *
 * @function deleteAccount
 * @description Deletes an existing account.
 * @param {string} accountName - The name of the account to delete.
 * @returns {Promise<any>} A promise that resolves when the account is deleted.
 *
 * @function exportAccount
 * @description Exports an existing account.
 * @param {string} accountName - The name of the account to export.
 * @returns {Promise<any>} A promise that resolves with the exported account data.
 *
 * @function getAccount
 * @description Retrieves an existing account.
 * @param {string} accountName - The name of the account to retrieve.
 * @returns {Promise<any>} A promise that resolves with the account data.
 *
 * @function listAccounts
 * @description Lists all existing accounts.
 * @returns {Promise<any>} A promise that resolves with the list of accounts.
 *
 * @function signTransaction
 * @description Signs a transaction with a specified account.
 * @param {string} accountName - The name of the account to sign the transaction.
 * @param {any} transaction - The transaction data to sign.
 * @returns {Promise<any>} A promise that resolves with the signed transaction data.
 *
 * @function getBalance
 * @description Retrieves the balance of a specified address.
 * @param {string} address - The address to get the balance for.
 * @returns {Promise<any>} A promise that resolves with the balance data.
 *
 * @function getTransaction
 * @description Retrieves a transaction by its hash.
 * @param {string} hash - The hash of the transaction to retrieve.
 * @returns {Promise<any>} A promise that resolves with the transaction data.
 *
 * @function sendTransaction
 * @description Sends a transaction.
 * @param {any} transaction - The transaction data to send.
 * @returns {Promise<any>} A promise that resolves with the sent transaction data.
 *
 * @function signMessage
 * @description Signs a message with a specified account.
 * @param {string} accountName - The name of the account to sign the message.
 * @param {string} message - The message to sign.
 * @returns {Promise<any>} A promise that resolves with the signed message data.
 *
 * @function signTypedData
 * @description Signs typed data with a specified account.
 * @param {string} accountName - The name of the account to sign the typed data.
 * @param {any} domain - The domain data for the typed data.
 * @param {any} types - The types data for the typed data.
 * @param {any} value - The value data for the typed data.
 * @returns {Promise<any>} A promise that resolves with the signed typed data.
 *
 * @function changeChainType
 * @description Changes the current chain type.
 * @param {ChainType} newChainType - The new chain type to set.
 */
export const useMoonAccount = (): INetwork & {
	chainType: ChainType;
	changeChainType: (newChainType: ChainType) => void;
	accounts: string[];
	account: string;
	setAccount: (account: string) => void;
} => {
	const { moon } = useMoonAuth();
	const [chainType, setChainType] = useState<ChainType>("ethereum");
	const [accounts, setAccounts] = useState<string[]>([]);
	const [account, setAccount] = useState<string>("");

	const { address, isConnected } = useAccount();
	const { signMessageAsync } = useSignMessage();
	const { signTypedDataAsync } = useSignTypedData();
	const { sendTransactionAsync } = useSendTransaction();
	const { switchChain } = useSwitchChain();
	const chainId = useChainId();

	if (!moon) throw new Error("MoonSDK not initialized");

	/**
	 * Creates a new account using the provided input.
	 *
	 * @param input - The input data required to create the account.
	 * @returns A promise that resolves to the result of the account creation.
	 */
	const createAccount = useCallback(
		async (input?: any): Promise<any> => {
			return await moon.getTransactionService().createAccount(chainType, input);
		},
		[moon, chainType],
	);

	/**
	 * Deletes an account with the specified account name.
	 *
	 * @param {string} accountName - The name of the account to be deleted.
	 * @returns {Promise<any>} A promise that resolves when the account is deleted.
	 */
	const deleteAccount = useCallback(
		async (accountName: string): Promise<any> => {
			return await moon
				.getTransactionService()
				.deleteAccount(chainType, accountName);
		},
		[moon, chainType],
	);

	/**
	 * Exports the account details for a given account name.
	 *
	 * @param {string} accountName - The name of the account to export.
	 * @returns {Promise<any>} A promise that resolves with the exported account details.
	 */
	const exportAccount = useCallback(
		async (accountName: string): Promise<any> => {
			return await moon
				.getTransactionService()
				.exportAccount(chainType, accountName);
		},
		[moon, chainType],
	);

	/**
	 * Retrieves the account information for a given account name.
	 *
	 * @param accountName - The name of the account to retrieve.
	 * @returns A promise that resolves to the account information.
	 */
	const getAccount = useCallback(
		async (accountName: string): Promise<any> => {
			return await moon
				.getTransactionService()
				.getAccount(chainType, accountName);
		},
		[moon, chainType],
	);

	/**
	 * Fetches a list of accounts from the transaction service and updates the state.
	 *
	 * @returns {Promise<void>} A promise that resolves when the accounts are fetched and state is updated.
	 */
	const listAccounts = useCallback(async (): Promise<void> => {
		try {
			const accountList = await moon
				.getTransactionService()
				.listAccounts(chainType);
			console.log("accountList", accountList);
			const typedAccountList = accountList as any;
			setAccounts(() => {
				const newAccounts = [...typedAccountList.data.keys];
				if (isConnected && address && !newAccounts.includes(address)) {
					newAccounts.push(address);
				}
				console.log("newAccounts", newAccounts);
				return newAccounts;
			});
		} catch (error) {
			console.error("Error fetching accounts:", error);
			setAccounts([]);
		}
	}, [moon, chainType, address, isConnected]);

	/**
	 * Retrieves the balance for a given address.
	 *
	 * @param address - The address to retrieve the balance for.
	 * @returns A promise that resolves to the balance of the given address.
	 */
	const getBalance = useCallback(
		async (address: string): Promise<any> => {
			return await moon.getTransactionService().getBalance(chainType, address);
		},
		[moon, chainType],
	);

	/**
	 * Retrieves a transaction by its hash.
	 *
	 * @param hash - The hash of the transaction to retrieve.
	 * @returns A promise that resolves to the transaction details.
	 */
	const getTransaction = useCallback(
		async (hash: string): Promise<any> => {
			return await moon.getTransactionService().getTransaction(chainType, hash);
		},
		[moon, chainType],
	);

	/**
	 * Signs a transaction using either the connected wagmi account or the Moon API.
	 *
	 * @param {string} accountName - The name of the account to sign the transaction with.
	 * @param {any} transaction - The transaction object to be signed.
	 * @returns {Promise<any>} - A promise that resolves to the signed transaction.
	 *
	 * @remarks
	 * If a wagmi account is connected and an address is available, the transaction will be signed using wagmi's `sendTransactionAsync` method.
	 * Otherwise, the transaction will be signed using the Moon API's `signTransaction` method.
	 *
	 * @example
	 * ```typescript
	 * const signedTx = await signTransaction('myAccount', transactionData);
	 * console.log(signedTx);
	 * ```
	 */
	const signTransaction = useCallback(
		async (accountName: string, transaction: any): Promise<any> => {
			try {
				if (isConnected && address === accountName) {
					if (isConnected && address) {
						if (chainId !== Number.parseInt(transaction.chain_id)) {
							await switchChain({
								chainId: Number.parseInt(transaction.chain_id),
							});
						}
						// Use wagmi's sendTransaction if a wagmi account is connected
						await sendTransactionAsync({
							to: transaction.to,
							data: transaction.data,
							value: BigInt(transaction.value),
							chainId: Number.parseInt(transaction.chain_id),
						});
					}
				}
				// Fall back to Moon API if no wagmi account is connected
				return await moon
					.getTransactionService()
					.signTransaction(chainType, accountName, transaction);
			} catch (error) {
				console.error("Error signing transaction:", error);
				return error;
			}
		},
		[
			moon,
			chainType,
			isConnected,
			address,
			sendTransactionAsync,
			switchChain,
			chainId,
		],
	);

	/**
	 * Sends a transaction using either wagmi's sendTransaction or Moon API's sendTransaction.
	 *
	 * @param transaction - The transaction object to be sent.
	 * @returns A promise that resolves to the result of the transaction.
	 *
	 * The function first checks if a wagmi account is connected and an address is available.
	 * If so, it uses wagmi's sendTransactionAsync to send the transaction.
	 * If not, it falls back to using the Moon API's sendTransaction method.
	 *
	 * @remarks
	 * - Ensure that `isConnected` and `address` are properly set when using wagmi's sendTransaction.
	 * - The Moon API's sendTransaction method requires `chainType` to be specified.
	 */

	const sendTransaction = useCallback(
		async (transaction: any): Promise<any> => {
			try {
				if (isConnected && address) {
					console.log("chainId", chainId);
					console.log("transaction.chain_id", transaction.chain_id);
					if (chainId !== transaction.chain_id) {
						await switchChain(transaction.chainId);
					}
					// Use wagmi's sendTransaction if a wagmi account is connected
					return await sendTransactionAsync(transaction);
				}
				// Fall back to Moon API if no wagmi account is connected
				return await moon
					.getTransactionService()
					.sendTransaction(chainType, transaction);
			} catch (error) {
				console.error("Error sending transaction:", error);
				return error;
			}
		},
		[moon, chainType, isConnected, address, sendTransactionAsync],
	);

	/**
	 * Signs a message using either the connected wagmi account or the Moon API.
	 *
	 * @param accountName - The name of the account to sign the message with.
	 * @param message - The message to be signed.
	 * @returns A promise that resolves to the signed message.
	 *
	 * @remarks
	 * If a wagmi account is connected, it uses wagmi's `signMessageAsync` method.
	 * Otherwise, it falls back to using the Moon API's `signMessage` method.
	 *
	 * @example
	 * ```typescript
	 * const signedMessage = await signMessage('myAccount', 'Hello, World!');
	 * console.log(signedMessage);
	 * ```
	 */
	const signMessage = useCallback(
		async (accountName: string, message: string): Promise<any> => {
			if (isConnected && address === accountName) {
				// Use wagmi's signMessage if a wagmi account is connected
				return await signMessageAsync({ message });
			}
			// Fall back to Moon API if no wagmi account is connected
			return await moon
				.getTransactionService()
				.signMessage(chainType, accountName, message);
		},
		[moon, chainType, isConnected, address, signMessageAsync],
	);

	/**
	 * Signs typed data using either wagmi's signTypedDataAsync or Moon API's signTypedData method.
	 *
	 * @param accountName - The name of the account to sign the data with.
	 * @param domain - The domain information for the typed data.
	 * @param types - The types definition for the typed data.
	 * @param value - The actual data to be signed.
	 * @returns A promise that resolves to the signed data.
	 *
	 * The function first checks if a wagmi account is connected and uses wagmi's signTypedDataAsync method.
	 * If no wagmi account is connected, it falls back to using the Moon API's signTypedData method.
	 */
	const signTypedData = useCallback(
		async (
			accountName: string,
			domain: any,
			types: any,
			value: any,
		): Promise<any> => {
			if (isConnected && address === accountName) {
				// Use wagmi's signTypedData if a wagmi account is connected
				return await signTypedDataAsync({
					domain: domain,
					types: types,
					primaryType: Object.keys(types)[0], // Assuming the first key is the primary type
					message: value,
				});
			}
			// Fall back to Moon API if no wagmi account is connected
			return await moon
				.getTransactionService()
				.signTypedData(chainType, accountName, domain, types, value);
		},
		[moon, chainType, isConnected, address, signTypedDataAsync],
	);

	/**
	 * Changes the current chain type to the specified new chain type.
	 *
	 * @param newChainType - The new chain type to set.
	 */
	const changeChainType = useCallback((newChainType: ChainType) => {
		setChainType(newChainType);
	}, []);

	return {
		account,
		setAccount,
		accounts,
		chainType,
		changeChainType,
		createAccount,
		deleteAccount,
		exportAccount,
		getTransaction,
		listAccounts,
		signTransaction,
		getBalance,
		getAccount,
		sendTransaction,
		signMessage,
		signTypedData,
	};
};
