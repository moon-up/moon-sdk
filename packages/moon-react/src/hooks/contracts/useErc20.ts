import { useMoonTransaction } from "@/hooks";
import { safelyParseUnits, weiStringAsFloat } from "@/utils/parse";
import type {
	ERC20InputBody,
	Erc20,
	GetAllowanceParams,
	GetBalanceOfParams,
	GetDecimalsParams,
	GetNameParams,
	GetSymbolParams,
	GetTotalSupplyParams,
	Transaction,
} from "@moonup/moon-api";
import { useCallback } from "react";
import {
	useAccount,
	useChainId,
	useSendTransaction,
	useSwitchChain,
} from "wagmi";
import { useMoonAuth } from "../../context";

/**
 * Custom hook to interact with ERC20 tokens using the Moon SDK.
 *
 * @returns {Object} An object containing various functions to interact with ERC20 tokens:
 * - `approveErc20`: Approves a spender to spend a specified amount of tokens on behalf of the owner.
 * - `transferErc20`: Transfers tokens from the owner's account to another account.
 * - `transferFromErc20`: Transfers tokens from one account to another on behalf of the owner.
 * - `balanceOfErc20`: Retrieves the balance of tokens for a specified account.
 * - `allowanceErc20`: Retrieves the allowance of tokens that a spender is allowed to spend on behalf of the owner.
 * - `approveTokenSpendIfNeeded`: Approves token spend if the current allowance is less than the specified amount.
 * - `getDecimalsErc20`: Retrieves the number of decimals used by the token.
 * - `getNameErc20`: Retrieves the name of the token.
 * - `getSymbolErc20`: Retrieves the symbol of the token.
 * - `getTotalSupplyErc20`: Retrieves the total supply of the token.
 */
export const useErc20 = () => {
	const { handleTransaction } = useMoonTransaction();
	const { moon } = useMoonAuth();
	const { isConnected, address } = useAccount();
	const { sendTransactionAsync } = useSendTransaction();
	const { switchChain } = useSwitchChain();
	const chainId = useChainId();

	const getErc20SDK = (): Erc20 => {
		const erc20SDK = moon?.getErc20SDK();
		if (!erc20SDK) throw new Error("Moon SDK not initialized");
		return erc20SDK;
	};

	const prepareTransaction = (transaction: ERC20InputBody) => {
		if (isConnected) {
			return {
				...transaction,
				broadcast: false,
				dryrun: true,
			};
		}
		return transaction;
	};

	const handleWagmiTransaction = async (transactionData: any) => {
		try {
			if (isConnected && address === transactionData.transaction.from) {
				if (chainId !== Number.parseInt(transactionData.transaction.chainId)) {
					await switchChain({
						chainId: Number.parseInt(transactionData.transaction.chainId),
					});
				}
				// Use wagmi's sendTransaction if a wagmi account is connected
				await sendTransactionAsync({
					to: transactionData.transaction.to,
					data: transactionData.transaction.data,
					value: BigInt(transactionData.transaction.value),
					chainId: Number.parseInt(transactionData.transaction.chain_id),
				});
			}
		} catch (error) {
			console.error("handleWagmiTransaction: Error: ", error);
			return transactionData;
		}
		return transactionData;
	};
	/**
	 * Approves token spend if needed.
	 *
	 * This function checks the current allowance of a token for a given spender and owner.
	 * If the current allowance is less than the specified amount, it approves the token spend.
	 *
	 * @param owner - The address of the token owner.
	 * @param spender - The address of the spender.
	 * @param tokenAddress - The address of the token contract.
	 * @param amountDecimal - The amount to be approved in decimal format.
	 * @param chainId - The chain ID where the token contract is deployed.
	 * @returns A promise that resolves when the approval transaction is completed or rejects with an error.
	 */
	const approveTokenSpendIfNeeded = async (
		owner: string,
		spender: string,
		tokenAddress: string,
		amountDecimal: number,
		chainId: string,
	) => {
		try {
			const allowance = await allowanceErc20({
				account: owner,
				address: tokenAddress,
				owner: owner,
				spender: spender,
				chainId: chainId,
			});
			const currAllowance = weiStringAsFloat(allowance);
			if (currAllowance < amountDecimal) {
				await approveErc20({
					accountName: owner,
					transaction: {
						to: spender,
						amount: safelyParseUnits(amountDecimal.toString()).toString(),
						contract_address: tokenAddress,
						chain_id: chainId,
						broadcast: true,
						value: "0",
					},
				});
			}
		} catch (error) {
			console.error("approveTokenSpendIfNeeded: Error: ", error);
			return error;
		}
	};

	/**
	 * Approves an ERC20 transaction.
	 *
	 * @param payload - The payload containing the account name and transaction details.
	 * @param payload.accountName - The name of the account initiating the transaction.
	 * @param payload.transaction - The transaction details conforming to the ERC20InputBody interface.
	 * @returns A promise that resolves to a Transaction object.
	 */
	const approveErc20 = useCallback(
		async (payload: {
			accountName: string;
			transaction: ERC20InputBody;
		}): Promise<Transaction> => {
			return handleTransaction("approveErc20", async () => {
				const erc20SDK = getErc20SDK();
				const preparedTransaction = prepareTransaction(payload.transaction);
				const response = await erc20SDK.approve(
					payload.accountName,
					preparedTransaction,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon, isConnected],
	);

	/**
	 * Transfers ERC20 tokens using the provided account name and transaction details.
	 *
	 * @param payload - The payload containing the account name and transaction details.
	 * @param payload.accountName - The name of the account initiating the transfer.
	 * @param payload.transaction - The transaction details for the ERC20 transfer.
	 * @returns A promise that resolves to the transaction details.
	 */
	const transferErc20 = useCallback(
		async (payload: {
			accountName: string;
			transaction: ERC20InputBody;
		}): Promise<Transaction> => {
			return handleTransaction("transferErc20", async () => {
				const erc20SDK = getErc20SDK();
				const preparedTransaction = prepareTransaction(payload.transaction);
				const response = await erc20SDK.transfer(
					payload.accountName,
					preparedTransaction,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Transfers ERC20 tokens from one account to another.
	 *
	 * @param payload - The payload containing the account name and transaction details.
	 * @param payload.accountName - The name of the account initiating the transfer.
	 * @param payload.transaction - The transaction details for the ERC20 transfer.
	 * @returns A promise that resolves to the transaction details.
	 */
	const transferFromErc20 = useCallback(
		async (payload: {
			accountName: string;
			transaction: ERC20InputBody;
		}): Promise<Transaction> => {
			return handleTransaction("transferFromErc20", async () => {
				const erc20SDK = getErc20SDK();
				const preparedTransaction = prepareTransaction(payload.transaction);
				const response = await erc20SDK.transferFrom(
					payload.accountName,
					preparedTransaction,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Fetches the balance of an ERC-20 token for a given address.
	 *
	 * @param payload - The parameters required to get the balance, including the token address and the user's address.
	 * @returns A promise that resolves to an object containing the balance as a string.
	 * @throws Will throw an error if the transaction fails or if the response indicates failure.
	 */
	const balanceOfErc20 = useCallback(
		async (payload: GetBalanceOfParams): Promise<{ balance: string }> => {
			return handleTransaction("balanceOfErc20", async () => {
				const erc20SDK = getErc20SDK();
				const response = await erc20SDK.getBalanceOf(payload);
				if (!response.success) {
					throw new Error(response.message);
				}
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Asynchronously retrieves the allowance of an ERC-20 token.
	 *
	 * @param {GetAllowanceParams} payload - The parameters required to get the allowance.
	 * @returns {Promise<string>} A promise that resolves to the allowance amount as a string.
	 *
	 * @example
	 * const allowance = await allowanceErc20({ owner: '0x...', spender: '0x...' });
	 * console.log(`Allowance: ${allowance}`);
	 */
	const allowanceErc20 = useCallback(
		async (payload: GetAllowanceParams): Promise<string> => {
			return handleTransaction("allowanceErc20", async () => {
				const erc20SDK = getErc20SDK();
				const response = await erc20SDK.getAllowance(payload);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Retrieves the number of decimals for an ERC-20 token.
	 *
	 * @param payload - The parameters required to get the decimals, encapsulated in a `GetDecimalsParams` object.
	 * @returns A promise that resolves to the number of decimals for the specified ERC-20 token.
	 */
	const getDecimalsErc20 = useCallback(
		async (payload: GetDecimalsParams): Promise<number> => {
			return handleTransaction("getDecimalsErc20", async () => {
				const erc20SDK = getErc20SDK();
				const response = await erc20SDK.getDecimals(payload);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Retrieves the name of an ERC-20 token.
	 *
	 * @param payload - The parameters required to get the name of the ERC-20 token.
	 * @returns A promise that resolves to the name of the ERC-20 token as a string.
	 *
	 * @example
	 * ```typescript
	 * const name = await getNameErc20({ contractAddress: '0x...' });
	 * console.log(name); // Outputs the name of the ERC-20 token
	 * ```
	 */
	const getNameErc20 = useCallback(
		async (payload: GetNameParams): Promise<string> => {
			return handleTransaction("getNameErc20", async () => {
				const erc20SDK = getErc20SDK();
				const response = await erc20SDK.getName(payload);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Retrieves the symbol of an ERC20 token.
	 *
	 * @param {GetSymbolParams} payload - The parameters required to get the symbol of the ERC20 token.
	 * @returns {Promise<string>} A promise that resolves to the symbol of the ERC20 token.
	 *
	 * @example
	 * ```typescript
	 * const symbol = await getSymbolErc20({ contractAddress: '0x...' });
	 * console.log(symbol); // Outputs the symbol of the ERC20 token
	 * ```
	 */
	const getSymbolErc20 = useCallback(
		async (payload: GetSymbolParams): Promise<string> => {
			return handleTransaction("getSymbolErc20", async () => {
				const erc20SDK = getErc20SDK();
				const response = await erc20SDK.getSymbol(payload);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Retrieves the total supply of an ERC-20 token.
	 *
	 * @param payload - The parameters required to get the total supply.
	 * @returns A promise that resolves to a string representing the total supply of the ERC-20 token.
	 *
	 * @example
	 * ```typescript
	 * const totalSupply = await getTotalSupplyErc20({ contractAddress: '0x...' });
	 * console.log(totalSupply);
	 * ```
	 */
	const getTotalSupplyErc20 = useCallback(
		async (payload: GetTotalSupplyParams): Promise<string> => {
			return handleTransaction("getTotalSupplyErc20", async () => {
				const erc20SDK = getErc20SDK();
				const response = await erc20SDK.getTotalSupply(payload);
				return response.data;
			});
		},
		[moon],
	);

	return {
		approveErc20,
		transferErc20,
		transferFromErc20,
		balanceOfErc20,
		allowanceErc20,
		approveTokenSpendIfNeeded,
		getDecimalsErc20,
		getNameErc20,
		getSymbolErc20,
		getTotalSupplyErc20,
	};
};
