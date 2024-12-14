import { useMoonTransaction } from "@/hooks";
import type {
	AccountResponse,
	BroadCastRawTransactionResponse,
	InputBody,
	SignMessage,
	SignTypedData,
	Transaction,
	TransactionData,
} from "@moonup/moon-api";
import { useCallback } from "react";
import { useMoonSDK } from "./useMoonSDK";

export const useMoonAccounts = () => {
	const context = useMoonSDK();
	const { handleTransaction } = useMoonTransaction();
	const { moon, addTransactionResult } = context;

	const getAccountsSDK = () => {
		const accountsSDK = moon?.getAccountsSDK();
		if (!accountsSDK) throw new Error("Moon SDK not initialized");
		return accountsSDK;
	};

	const transferEth = useCallback(
		async (payload: {
			accountName: string;
			transaction: InputBody;
		}): Promise<Transaction> => {
			return handleTransaction("transferEth", async () => {
				const accountsSDK = getAccountsSDK();
				console.log("transferEth", payload.accountName, payload.transaction);
				const response = await accountsSDK.accountsTransferEth(
					payload.accountName,
					payload.transaction,
				);
				return response.data;
			});
		},
		[moon, addTransactionResult],
	);

	const getBalance = useCallback(
		async (payload: {
			accountName: string;
			chainId: string;
		}): Promise<{ balance: string }> => {
			return handleTransaction("getBalance", async () => {
				const accountsSDK = getAccountsSDK();
				const response = await accountsSDK.accountsEthereumGetNativeBalance({
					accountName: payload.accountName,
					chainId: payload.chainId,
				});
				if (!response.success) {
					throw new Error(response.message);
				}
				return response.data as { balance: string };
			});
		},
		[moon, addTransactionResult],
	);

	const listAccounts = useCallback(async (): Promise<AccountResponse> => {
		return handleTransaction("listAccounts", async () => {
			const accountsSDK = getAccountsSDK();
			const response = await accountsSDK.accountsListEthereumAccounts();
			return response.data;
		});
	}, [moon, addTransactionResult]);

	const createAccount = useCallback(async (): Promise<AccountResponse> => {
		return handleTransaction("createAccount", async () => {
			const accountsSDK = getAccountsSDK();
			const response = await accountsSDK.accountsCreateEthereumAccount({});
			return response.data;
		});
	}, [moon, addTransactionResult]);

	const getAccount = useCallback(
		async (payload: { id: string }): Promise<AccountResponse> => {
			return handleTransaction("getAccount", async () => {
				const accountsSDK = getAccountsSDK();
				const response = await accountsSDK.accountsGetEthreumAccount(
					payload.id,
				);
				return response.data;
			});
		},
		[moon, addTransactionResult],
	);

	const deleteAccount = useCallback(
		async (payload: { id: string }): Promise<AccountResponse> => {
			return handleTransaction("deleteAccount", async () => {
				const accountsSDK = getAccountsSDK();
				const response = await accountsSDK.accountsDeleteEthereumAccount(
					payload.id,
				);
				return response.data;
			});
		},
		[moon, addTransactionResult],
	);

	const signTransaction = useCallback(
		async (payload: {
			accountName: string;
			transaction: InputBody;
		}): Promise<Transaction> => {
			return handleTransaction("signTransaction", async () => {
				const accountsSDK = getAccountsSDK();
				const response = await accountsSDK.accountsSignEthereumTransaction(
					payload.accountName,
					payload.transaction,
				);
				return response.data;
			});
		},
		[moon, addTransactionResult],
	);

	const signMessage = useCallback(
		async (payload: {
			id: string;
			message: SignMessage;
		}): Promise<TransactionData> => {
			return handleTransaction("signMessage", async () => {
				const accountsSDK = getAccountsSDK();
				const response = await accountsSDK.accountsSignEthreumMessage(
					payload.id,
					payload.message,
				);
				return response.data;
			});
		},
		[moon, addTransactionResult],
	);

	const signTypedData = useCallback(
		async (payload: {
			id: string;
			typedData: SignTypedData;
		}): Promise<TransactionData> => {
			return handleTransaction("signTypedData", async () => {
				const accountsSDK = getAccountsSDK();
				const response = await accountsSDK.accountsSignEthereumTypedData(
					payload.id,
					payload.typedData,
				);
				return response.data;
			});
		},
		[moon, addTransactionResult],
	);

	const broadcastTx = useCallback(
		async (payload: {
			id: string;
			transaction: string;
			chain_id: string;
		}): Promise<BroadCastRawTransactionResponse> => {
			return handleTransaction("broadcastTx", async () => {
				const accountsSDK = getAccountsSDK();
				const response = await accountsSDK.accountsBroadcastEthreeumTransaction(
					payload.id,
					{
						rawTransaction: payload.transaction,
						chainId: payload.chain_id,
					},
				);
				return response.data;
			});
		},
		[moon, addTransactionResult],
	);

	return {
		transferEth,
		getBalance,
		listAccounts,
		createAccount,
		getAccount,
		deleteAccount,
		signTransaction,
		signMessage,
		signTypedData,
		broadcastTx,
	};
};
