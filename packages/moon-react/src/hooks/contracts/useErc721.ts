import { useMoonTransaction } from "@/hooks";
import type { Erc721, InputBody, Transaction } from "@moonup/moon-api";
import { useCallback } from "react";
import {
	useAccount,
	useChainId,
	useSendTransaction,
	useSwitchChain,
} from "wagmi";
import { useMoonAuth } from "../../context";

/**
 * Custom hook to interact with ERC-721 contracts using the Moon SDK.
 *
 * @returns {Object} An object containing various functions to interact with ERC-721 contracts:
 * - `approveErc721`: Approves an ERC-721 token for transfer.
 * - `getErc721Approved`: Checks if an ERC-721 token is approved for transfer.
 * - `getErc721BalanceOf`: Retrieves the balance of ERC-721 tokens for a given account.
 * - `getErc721IsApprovedForAll`: Checks if an operator is approved to manage all of the owner's assets.
 * - `getErc721Name`: Retrieves the name of the ERC-721 token.
 * - `getErc721OwnerOf`: Retrieves the owner of a specific ERC-721 token.
 * - `getErc721Symbol`: Retrieves the symbol of the ERC-721 token.
 * - `getErc721TokenUri`: Retrieves the URI of a specific ERC-721 token.
 * - `safeTransferFromErc721`: Safely transfers an ERC-721 token from one address to another.
 * - `safeTransferFromWithDataErc721`: Safely transfers an ERC-721 token with additional data.
 * - `setApprovalForAllErc721`: Sets or unsets the approval of a given operator to manage all of the caller's assets.
 * - `transferFromErc721`: Transfers an ERC-721 token from one address to another.
 */
export const useErc721 = () => {
	const { handleTransaction } = useMoonTransaction();
	const { moon } = useMoonAuth();
	const { isConnected, address } = useAccount();
	const { sendTransactionAsync } = useSendTransaction();
	const { switchChain } = useSwitchChain();
	const chainId = useChainId();

	const getErc721SDK = (): Erc721 => {
		const erc721SDK = moon?.getErc721SDK();
		if (!erc721SDK) throw new Error("Moon SDK not initialized");
		return erc721SDK;
	};
	const prepareTransaction = (account: string, transaction: InputBody) => {
		if (isConnected && address === account) {
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
	};
	/**
	 * Approves an ERC721 transaction.
	 *
	 * @param payload - The payload containing the address and transaction details.
	 * @param payload.address - The address to approve the transaction for.
	 * @param payload.transaction - The transaction details.
	 * @returns A promise that resolves to the transaction.
	 */
	const approveErc721 = useCallback(
		async (payload: {
			address: string;
			transaction: InputBody;
		}): Promise<Transaction> => {
			return handleTransaction("approveErc721", async () => {
				const erc721SDK = getErc721SDK();
				const preparedTransaction = prepareTransaction(
					payload.address,
					payload.transaction,
				);
				const response = await erc721SDK.approveErc721(
					payload.address,
					preparedTransaction,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Retrieves the approved address for a specific ERC-721 token.
	 *
	 * @param payload - The payload containing the necessary parameters.
	 * @param payload.tokenId - The ID of the token to check approval for.
	 * @param payload.address - The address of the token owner.
	 * @param payload.chainId - The ID of the blockchain network.
	 * @returns A promise that resolves to a Transaction object containing the approval details.
	 */
	const getErc721Approved = useCallback(
		async (payload: {
			tokenId: string;
			address: string;
			chainId: string;
		}): Promise<Transaction> => {
			return handleTransaction("getErc721Approved", async () => {
				const erc721SDK = getErc721SDK();
				const response = await erc721SDK.getErc721Approved(payload);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Retrieves the ERC-721 token balance for a specified account.
	 *
	 * @param payload - The payload containing the account, contract address, and chain ID.
	 * @param payload.account - The account address to query the balance for.
	 * @param payload.address - The contract address of the ERC-721 token.
	 * @param payload.chainId - The chain ID where the contract is deployed.
	 * @returns A promise that resolves to an object containing the balance as a string.
	 */
	const getErc721BalanceOf = useCallback(
		async (payload: {
			account: string;
			address: string;
			chainId: string;
		}): Promise<{ balance: string }> => {
			return handleTransaction("getErc721BalanceOf", async () => {
				const erc721SDK = getErc721SDK();
				const response = await erc721SDK.getErc721BalanceOf(payload);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Checks if an operator is approved to manage all assets of an ERC-721 token owner.
	 *
	 * @param payload - The payload containing the necessary parameters.
	 * @param payload.owner - The address of the token owner.
	 * @param payload.operator - The address of the operator.
	 * @param payload.address - The contract address of the ERC-721 token.
	 * @param payload.chainId - The chain ID where the contract is deployed.
	 * @returns A promise that resolves to an object indicating whether the operator is approved.
	 */
	const getErc721IsApprovedForAll = useCallback(
		async (payload: {
			owner: string;
			operator: string;
			address: string;
			chainId: string;
		}): Promise<{ isApproved: boolean }> => {
			return handleTransaction("getErc721IsApprovedForAll", async () => {
				const erc721SDK = getErc721SDK();
				const response = await erc721SDK.getErc721IsApprovedForAll(payload);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Retrieves the name of an ERC-721 token.
	 *
	 * @param payload - The payload containing the address and chainId.
	 * @param payload.address - The address of the ERC-721 contract.
	 * @param payload.chainId - The chain ID where the ERC-721 contract is deployed.
	 * @returns A promise that resolves to an object containing the name of the ERC-721 token.
	 */
	const getErc721Name = useCallback(
		async (payload: {
			address: string;
			chainId: string;
		}): Promise<{ name: string }> => {
			return handleTransaction("getErc721Name", async () => {
				const erc721SDK = getErc721SDK();
				const response = await erc721SDK.getErc721Name(payload);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Retrieves the owner of a specified ERC-721 token.
	 *
	 * @param payload - The payload containing the token ID, address, and chain ID.
	 * @param payload.tokenId - The ID of the token to query.
	 * @param payload.address - The address of the ERC-721 contract.
	 * @param payload.chainId - The chain ID where the contract is deployed.
	 * @returns A promise that resolves to an object containing the owner's address.
	 *
	 * @example
	 * const owner = await getErc721OwnerOf({
	 *   tokenId: '1',
	 *   address: '0x1234567890abcdef1234567890abcdef12345678',
	 *   chainId: '1'
	 * });
	 * console.log(owner); // { owner: '0xabcdef...' }
	 */
	const getErc721OwnerOf = useCallback(
		async (payload: {
			tokenId: string;
			address: string;
			chainId: string;
		}): Promise<{ owner: string }> => {
			return handleTransaction("getErc721OwnerOf", async () => {
				const erc721SDK = getErc721SDK();
				const response = await erc721SDK.getErc721OwnerOf(payload);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Retrieves the symbol of an ERC-721 token.
	 *
	 * @param payload - The payload containing the address and chainId.
	 * @param payload.address - The address of the ERC-721 contract.
	 * @param payload.chainId - The chain ID where the ERC-721 contract is deployed.
	 * @returns A promise that resolves to an object containing the symbol of the ERC-721 token.
	 *
	 * @example
	 * ```typescript
	 * const symbol = await getErc721Symbol({ address: '0x...': '1' });
	 * console.log(symbol); // { symbol: 'TOKEN_SYMBOL' }
	 * ```
	 */
	const getErc721Symbol = useCallback(
		async (payload: {
			address: string;
			chainId: string;
		}): Promise<{ symbol: string }> => {
			return handleTransaction("getErc721Symbol", async () => {
				const erc721SDK = getErc721SDK();
				const response = await erc721SDK.getErc721Symbol(payload);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Retrieves the URI of an ERC-721 token.
	 *
	 * @param payload - The payload containing the token details.
	 * @param payload.tokenId - The ID of the token.
	 * @param payload.address - The address of the token contract.
	 * @param payload.chainId - The ID of the blockchain network.
	 * @returns A promise that resolves to an object containing the token URI.
	 */
	const getErc721TokenUri = useCallback(
		async (payload: {
			tokenId: string;
			address: string;
			chainId: string;
		}): Promise<{ tokenUri: string }> => {
			return handleTransaction("getErc721TokenUri", async () => {
				const erc721SDK = getErc721SDK();
				const response = await erc721SDK.getErc721TokenUri(payload);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Safely transfers an ERC-721 token from one address to another.
	 *
	 * @param payload - The payload containing the address and transaction details.
	 * @param payload.address - The address to transfer the token to.
	 * @param payload.transaction - The transaction details.
	 * @returns A promise that resolves to the transaction details.
	 */
	const safeTransferFromErc721 = useCallback(
		async (payload: {
			address: string;
			transaction: InputBody;
		}): Promise<Transaction> => {
			return handleTransaction("safeTransferFromErc721", async () => {
				const erc721SDK = getErc721SDK();
				const preparedTransaction = prepareTransaction(
					payload.address,
					payload.transaction,
				);
				const response = await erc721SDK.safeTransferFromErc721(
					payload.address,
					preparedTransaction,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Safely transfers an ERC721 token with additional data.
	 *
	 * @param payload - The payload containing the address and transaction details.
	 * @param payload.address - The address to transfer the token to.
	 * @param payload.transaction - The transaction details.
	 * @returns A promise that resolves to the transaction details.
	 */
	const safeTransferFromWithDataErc721 = useCallback(
		async (payload: {
			address: string;
			transaction: InputBody;
		}): Promise<Transaction> => {
			return handleTransaction("safeTransferFromWithDataErc721", async () => {
				const erc721SDK = getErc721SDK();
				const preparedTransaction = prepareTransaction(
					payload.address,
					payload.transaction,
				);
				const response = await erc721SDK.safeTransferFromWithDataErc721(
					payload.address,
					preparedTransaction,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Sets approval for all ERC721 tokens for a given address.
	 *
	 * @param payload - The payload containing the address and transaction details.
	 * @param payload.address - The address to set approval for.
	 * @param payload.transaction - The transaction details.
	 * @returns A promise that resolves to the transaction details.
	 */
	const setApprovalForAllErc721 = useCallback(
		async (payload: {
			address: string;
			transaction: InputBody;
		}): Promise<Transaction> => {
			return handleTransaction("setApprovalForAllErc721", async () => {
				const erc721SDK = getErc721SDK();
				const preparedTransaction = prepareTransaction(
					payload.address,
					payload.transaction,
				);
				const response = await erc721SDK.setApprovalForAllErc721(
					payload.address,
					preparedTransaction,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);
	/**
	 * Transfers an ERC721 token from one address to another.
	 *
	 * @param payload - The payload containing the address and transaction details.
	 * @param payload.address - The address to transfer the token from.
	 * @param payload.transaction - The transaction details for the transfer.
	 * @returns A promise that resolves to the transaction details.
	 */
	const transferFromErc721 = useCallback(
		async (payload: {
			address: string;
			transaction: InputBody;
		}): Promise<Transaction> => {
			return handleTransaction("transferFromErc721", async () => {
				const erc721SDK = getErc721SDK();
				const preparedTransaction = prepareTransaction(
					payload.address,
					payload.transaction,
				);
				const response = await erc721SDK.transferFromErc721(
					payload.address,
					preparedTransaction,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	return {
		approveErc721,
		getErc721Approved,
		getErc721BalanceOf,
		getErc721IsApprovedForAll,
		getErc721Name,
		getErc721OwnerOf,
		getErc721Symbol,
		getErc721TokenUri,
		safeTransferFromErc721,
		safeTransferFromWithDataErc721,
		setApprovalForAllErc721,
		transferFromErc721,
	};
};
