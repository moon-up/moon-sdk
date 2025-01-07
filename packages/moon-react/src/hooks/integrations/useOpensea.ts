import { useMoonAuth } from "@/context";
import { useMoonTransaction } from "@/hooks";
import type {
	CreateCollectionOfferData,
	CreateOfferData,
	GetCollectionData,
	GetCollectionParams,
	GetNftData,
	GetNftParams,
	OpenSeaCollectionInputBody,
	OpenSeaNFTInputBody,
	UnwrapWethData,
	UnwrapWethPayload,
	WrapEthData,
	WrapEthPayload,
} from "@moonup/moon-api";

import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import {
	useAccount,
	useChainId,
	useSendTransaction,
	useSwitchChain,
} from "wagmi";

export const useOpensea = () => {
	const { handleTransaction } = useMoonTransaction();
	const { moon } = useMoonAuth();
	const chainId = useChainId();
	const { switchChain } = useSwitchChain();
	const { isConnected, address } = useAccount();
	const { sendTransactionAsync } = useSendTransaction();

	const getOpenseaSDK = () => {
		const openseaSDK = moon?.getOpenseaSDK();
		if (!openseaSDK) throw new Error("Moon Opensea SDK not initialized");
		return openseaSDK;
	};

	const prepareTransaction = (account: string, transaction: any) => {
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
				await sendTransactionAsync({
					to: transactionData.transaction.to,
					data: transactionData.transaction.data,
					value: BigInt(transactionData.transaction.value),
					chainId: Number.parseInt(transactionData.transaction.chain_id),
				});
			}
			return transactionData;
		} catch (error) {
			console.error("handleWagmiTransaction: Error: ", error);
			return transactionData;
		}
	};

	const createCollectionOffer = useCallback(
		async (payload: {
			accountName: string;
			data: OpenSeaCollectionInputBody;
		}): Promise<CreateCollectionOfferData> => {
			return handleTransaction("createCollectionOffer", async () => {
				const openseaSDK = getOpenseaSDK();
				const preparedTransaction = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await openseaSDK.createCollectionOffer(
					payload.accountName,
					preparedTransaction,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon, isConnected, address, chainId, switchChain, sendTransactionAsync],
	);

	const createOffer = useCallback(
		async (payload: {
			accountName: string;
			data: OpenSeaNFTInputBody;
		}): Promise<CreateOfferData> => {
			return handleTransaction("createOffer", async () => {
				const openseaSDK = getOpenseaSDK();
				const preparedTransaction = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await openseaSDK.createOffer(
					payload.accountName,
					preparedTransaction,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon, isConnected, address, chainId, switchChain, sendTransactionAsync],
	);

	const getCollection = useCallback(
		async (params: GetCollectionParams): Promise<GetCollectionData> => {
			return handleTransaction("getCollection", async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getCollection(params);
				return response.data;
			});
		},
		[moon, isConnected, address, chainId, switchChain, sendTransactionAsync],
	);

	const getNft = useCallback(
		async (params: GetNftParams): Promise<GetNftData> => {
			return handleTransaction("getNft", async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getNft(params);
				return response.data;
			});
		},
		[moon, isConnected, address, chainId, switchChain, sendTransactionAsync],
	);

	const useGetCollection = (params: GetCollectionParams) => {
		return useQuery({
			queryKey: ["openseaGetCollection", params],
			queryFn: async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getCollection(params);
				return response.data;
			},
			enabled: !!moon,
		});
	};

	const useGetNft = (params: GetNftParams) => {
		return useQuery({
			queryKey: ["openseaGetNft", params],
			queryFn: async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getNft(params);
				return response.data;
			},
			enabled: !!moon,
		});
	};

	const unwrapWeth = useCallback(
		async (payload: {
			accountName: string;
			data: UnwrapWethPayload;
		}): Promise<UnwrapWethData> => {
			return handleTransaction("unwrapWeth", async () => {
				const openseaSDK = getOpenseaSDK();
				const preparedTransaction = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await openseaSDK.unwrapWeth(
					payload.accountName,
					preparedTransaction,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon, isConnected, address, chainId, switchChain, sendTransactionAsync],
	);

	const wrapEth = useCallback(
		async (payload: {
			accountName: string;
			data: WrapEthPayload;
		}): Promise<WrapEthData> => {
			return handleTransaction("wrapEth", async () => {
				const openseaSDK = getOpenseaSDK();
				const preparedTransaction = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await openseaSDK.wrapEth(
					payload.accountName,
					preparedTransaction,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon, isConnected, address, chainId, switchChain, sendTransactionAsync],
	);

	return {
		createCollectionOffer,
		createOffer,
		useGetCollection,
		useGetNft,
		unwrapWeth,
		wrapEth,
		getCollection,
		getNft,
	};
};
