import { useMoonAuth } from "@/context";
import { useMoonTransaction } from "@/hooks";
import type {
	CancelOrderData,
	CancelOrderPayload,
	CreateCollectionOfferData,
	CreateListingData,
	CreateOfferData,
	FulfillOrderData,
	FulfillOrderPayload,
	GetAccountParams,
	GetAllListingsParams,
	GetAllOffersParams,
	GetBestListingParams,
	GetBestOfferParams,
	GetCollectionData,
	GetCollectionParams,
	GetCollectionStatsParams,
	GetCollectionsParams,
	GetNfTsByAccountParams,
	GetNfTsByCollectionParams,
	GetNfTsByContractParams,
	GetNftData,
	GetNftParams,
	GetOrdersParams,
	GetPaymentTokenParams,
	OffchainCancelOrderData,
	OffchainCancelOrderPayload,
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

	const cancelOrder = useCallback(
		async (payload: {
			accountName: string;
			data: CancelOrderPayload;
		}): Promise<CancelOrderData> => {
			return handleTransaction("cancelOrder", async () => {
				const openseaSDK = getOpenseaSDK();
				const preparedTransaction = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await openseaSDK.cancelOrder(
					payload.accountName,
					preparedTransaction,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon, isConnected, address, chainId, switchChain, sendTransactionAsync],
	);

	const createListing = useCallback(
		async (payload: {
			accountName: string;
			data: OpenSeaNFTInputBody;
		}): Promise<CreateListingData> => {
			return handleTransaction("createListing", async () => {
				const openseaSDK = getOpenseaSDK();
				const preparedTransaction = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await openseaSDK.createListing(
					payload.accountName,
					preparedTransaction,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon, isConnected, address, chainId, switchChain, sendTransactionAsync],
	);

	const fulfillOrder = useCallback(
		async (payload: {
			accountName: string;
			data: FulfillOrderPayload;
		}): Promise<FulfillOrderData> => {
			return handleTransaction("fulfillOrder", async () => {
				const openseaSDK = getOpenseaSDK();
				const preparedTransaction = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await openseaSDK.fulfillOrder(
					payload.accountName,
					preparedTransaction,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon, isConnected, address, chainId, switchChain, sendTransactionAsync],
	);

	const useGetAccount = (params: GetAccountParams) => {
		return useQuery({
			queryKey: ["openseaGetAccount", params],
			queryFn: async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getAccount(params);
				return response.data;
			},
			enabled: !!moon,
		});
	};

	const useGetAllListings = (params: GetAllListingsParams) => {
		return useQuery({
			queryKey: ["openseaGetAllListings", params],
			queryFn: async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getAllListings(params);
				return response.data;
			},
			enabled: !!moon,
		});
	};

	const useGetAllOffers = (params: GetAllOffersParams) => {
		return useQuery({
			queryKey: ["openseaGetAllOffers", params],
			queryFn: async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getAllOffers(params);
				return response.data;
			},
			enabled: !!moon,
		});
	};

	const useGetBestListing = (params: GetBestListingParams) => {
		return useQuery({
			queryKey: ["openseaGetBestListing", params],
			queryFn: async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getBestListing(params);
				return response.data;
			},
			enabled: !!moon,
		});
	};

	const useGetBestOffer = (params: GetBestOfferParams) => {
		return useQuery({
			queryKey: ["openseaGetBestOffer", params],
			queryFn: async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getBestOffer(params);
				return response.data;
			},
			enabled: !!moon,
		});
	};

	const useGetCollections = (params: GetCollectionsParams) => {
		return useQuery({
			queryKey: ["openseaGetCollections", params],
			queryFn: async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getCollections(params);
				return response.data;
			},
			enabled: !!moon,
		});
	};

	const useGetCollectionStats = (params: GetCollectionStatsParams) => {
		return useQuery({
			queryKey: ["openseaGetCollectionStats", params],
			queryFn: async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getCollectionStats(params);
				return response.data;
			},
			enabled: !!moon,
		});
	};

	const useGetNfTsByAccount = (params: GetNfTsByAccountParams) => {
		return useQuery({
			queryKey: ["openseaGetNfTsByAccount", params],
			queryFn: async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getNfTsByAccount(params);
				return response.data;
			},
			enabled: !!moon,
		});
	};

	const useGetNfTsByCollection = (params: GetNfTsByCollectionParams) => {
		return useQuery({
			queryKey: ["openseaGetNfTsByCollection", params],
			queryFn: async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getNfTsByCollection(params);
				return response.data;
			},
			enabled: !!moon,
		});
	};

	const useGetNfTsByContract = (params: GetNfTsByContractParams) => {
		return useQuery({
			queryKey: ["openseaGetNfTsByContract", params],
			queryFn: async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getNfTsByContract(params);
				return response.data;
			},
			enabled: !!moon,
		});
	};

	const useGetOrders = (params: GetOrdersParams) => {
		return useQuery({
			queryKey: ["openseaGetOrders", params],
			queryFn: async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getOrders(params);
				return response.data;
			},
			enabled: !!moon,
		});
	};

	const useGetPaymentToken = (params: GetPaymentTokenParams) => {
		return useQuery({
			queryKey: ["openseaGetPaymentToken", params],
			queryFn: async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getPaymentToken(params);
				return response.data;
			},
			enabled: !!moon,
		});
	};

	const offchainCancelOrder = useCallback(
		async (payload: {
			accountName: string;
			data: OffchainCancelOrderPayload;
		}): Promise<OffchainCancelOrderData> => {
			return handleTransaction("offchainCancelOrder", async () => {
				const openseaSDK = getOpenseaSDK();
				const preparedTransaction = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await openseaSDK.offchainCancelOrder(
					payload.accountName,
					preparedTransaction,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon, isConnected, address, chainId, switchChain, sendTransactionAsync],
	);

	const getAccount = useCallback(
		async (params: GetAccountParams) => {
			return handleTransaction("getAccount", async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getAccount(params);
				return response.data;
			});
		},
		[moon],
	);

	const getAllListings = useCallback(
		async (params: GetAllListingsParams) => {
			return handleTransaction("getAllListings", async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getAllListings(params);
				return response.data;
			});
		},
		[moon],
	);

	const getAllOffers = useCallback(
		async (params: GetAllOffersParams) => {
			return handleTransaction("getAllOffers", async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getAllOffers(params);
				return response.data;
			});
		},
		[moon],
	);

	const getBestListing = useCallback(
		async (params: GetBestListingParams) => {
			return handleTransaction("getBestListing", async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getBestListing(params);
				return response.data;
			});
		},
		[moon],
	);

	const getBestOffer = useCallback(
		async (params: GetBestOfferParams) => {
			return handleTransaction("getBestOffer", async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getBestOffer(params);
				return response.data;
			});
		},
		[moon],
	);

	const getCollections = useCallback(
		async (params: GetCollectionsParams) => {
			return handleTransaction("getCollections", async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getCollections(params);
				return response.data;
			});
		},
		[moon],
	);

	const getCollectionStats = useCallback(
		async (params: GetCollectionStatsParams) => {
			return handleTransaction("getCollectionStats", async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getCollectionStats(params);
				return response.data;
			});
		},
		[moon],
	);

	const getNfTsByAccount = useCallback(
		async (params: GetNfTsByAccountParams) => {
			return handleTransaction("getNfTsByAccount", async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getNfTsByAccount(params);
				return response.data;
			});
		},
		[moon],
	);

	const getNfTsByCollection = useCallback(
		async (params: GetNfTsByCollectionParams) => {
			return handleTransaction("getNfTsByCollection", async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getNfTsByCollection(params);
				return response.data;
			});
		},
		[moon],
	);

	const getNfTsByContract = useCallback(
		async (params: GetNfTsByContractParams) => {
			return handleTransaction("getNfTsByContract", async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getNfTsByContract(params);
				return response.data;
			});
		},
		[moon],
	);

	const getOrders = useCallback(
		async (params: GetOrdersParams) => {
			return handleTransaction("getOrders", async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getOrders(params);
				return response.data;
			});
		},
		[moon],
	);

	const getPaymentToken = useCallback(
		async (params: GetPaymentTokenParams) => {
			return handleTransaction("getPaymentToken", async () => {
				const openseaSDK = getOpenseaSDK();
				const response = await openseaSDK.getPaymentToken(params);
				return response.data;
			});
		},
		[moon],
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
		cancelOrder,
		createListing,
		fulfillOrder,
		useGetAccount,
		useGetAllListings,
		useGetAllOffers,
		useGetBestListing,
		useGetBestOffer,
		useGetCollections,
		useGetCollectionStats,
		useGetNfTsByAccount,
		useGetNfTsByCollection,
		useGetNfTsByContract,
		useGetOrders,
		useGetPaymentToken,
		offchainCancelOrder,
		getAccount,
		getAllListings,
		getAllOffers,
		getBestListing,
		getBestOffer,
		getCollections,
		getCollectionStats,
		getNfTsByAccount,
		getNfTsByCollection,
		getNfTsByContract,
		getOrders,
		getPaymentToken,
	};
};
