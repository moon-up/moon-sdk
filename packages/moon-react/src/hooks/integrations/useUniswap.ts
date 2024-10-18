import { useMoonAuth } from "@/context";
import { useMoonTransaction } from "@/hooks";
import type {
	AddLiquidityEthOutput,
	AddLiquidityOutput,
	ApproveOutput1,
	BalanceOfOutput,
	BalanceOfParams3,
	BaseUriData,
	BaseUriParams,
	BurnResult,
	CollectData,
	CreateAndInitializePoolIfNecessaryData,
	DecreaseLiquidityData,
	DomainSeparatorData,
	DomainSeparatorParams,
	ExactInputData,
	ExactInputSingleData,
	ExactOutputData,
	ExactOutputSingleData,
	Factory2Data,
	Factory2Params,
	FactoryData,
	FactoryParams,
	GetAmountInData,
	GetAmountOutOutput,
	GetAmountsInData,
	GetAmountsOutOutput,
	GetApprovedParams2,
	GetApprovedResult,
	GetFactoryOutput,
	GetFactoryParams4,
	GetWethData1,
	GetWethParams6,
	IncreaseLiquidityData,
	IsApprovedForAllOutput,
	IsApprovedForAllParams3,
	MintResult,
	Multicall2Data,
	MulticallData,
	NameData,
	NameParams,
	OwnerOfData,
	OwnerOfParams,
	PermitData,
	PermitTypehashData,
	PermitTypehashParams,
	PositionsData,
	PositionsParams,
	QuoteData,
	RefundEth2Data,
	RefundEthData,
	RemoveLiquidityEthResult,
	RemoveLiquidityEthSupportingFeeOnTransferTokensData,
	RemoveLiquidityEthWithPermitData,
	RemoveLiquidityEthWithPermitSupportingFeeOnTransferTokensData,
	RemoveLiquidityResult,
	RemoveLiquidityWithPermitData,
	SelfPermitAllowedData,
	SelfPermitAllowedIfNecessaryData,
	SelfPermitData,
	SelfPermitIfNecessaryData,
	SetApprovalForAllOutput,
	SupportsInterfaceParams2,
	SupportsInterfaceResult,
	SwapEthForExactTokensData,
	SwapExactEthForTokensOutput,
	SwapExactEthForTokensSupportingFeeOnTransferTokensData,
	SwapExactTokensForEthOutput,
	SwapExactTokensForEthSupportingFeeOnTransferTokensData,
	SwapExactTokensForTokensOutput,
	SwapExactTokensForTokensSupportingFeeOnTransferTokensData,
	SwapTokensForExactEthData,
	SwapTokensForExactTokensData,
	SweepToken2Data,
	SweepTokenData,
	SweepTokenWithFeeData,
	SymbolData,
	SymbolParams,
	TokenByIndexData,
	TokenByIndexParams,
	TokenOfOwnerByIndexData,
	TokenOfOwnerByIndexParams,
	TokenUriData,
	TokenUriParams,
	TotalSupplyData,
	TotalSupplyParams,
	TransferFromResult1,
	UniswapV2InputBody,
	UniswapV3InputBody,
} from "@moonup/moon-api";
import { useCallback } from "react";
import {
	useAccount,
	useChainId,
	useSendTransaction,
	useSwitchChain,
} from "wagmi";

export const useUniswap = () => {
	const { handleTransaction } = useMoonTransaction();
	const { moon } = useMoonAuth();
	const { isConnected, address } = useAccount();
	const { sendTransactionAsync } = useSendTransaction();
	const chainId = useChainId();
	const { switchChain } = useSwitchChain();

	const getUniswapSDK = useCallback(() => {
		const uniswapSDK = moon?.getUniswapSDK();
		if (!uniswapSDK) throw new Error("Moon Uniswap SDK not initialized");
		return uniswapSDK;
	}, [moon]);

	const prepareTransaction = (transaction: any) => {
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

	// UniswapV2Router methods
	const addLiquidity = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV2InputBody;
		}): Promise<AddLiquidityOutput> => {
			return handleTransaction("addLiquidity", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.addLiquidity(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const addLiquidityEth = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV2InputBody;
		}): Promise<AddLiquidityEthOutput> => {
			return handleTransaction("addLiquidityEth", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.addLiquidityEth(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);
	// UniswapV3NFT methods
	const approve = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV3InputBody;
		}): Promise<ApproveOutput1> => {
			return handleTransaction("approve", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.approve(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	// UniswapV2Router methods (continued)
	const getAmountIn = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV2InputBody;
		}): Promise<GetAmountInData> => {
			return handleTransaction("getAmountIn", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.getAmountIn(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const getAmountOut = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV2InputBody;
		}): Promise<GetAmountOutOutput> => {
			return handleTransaction("getAmountOut", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.getAmountOut(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const getAmountsIn = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV2InputBody;
		}): Promise<GetAmountsInData> => {
			return handleTransaction("getAmountsIn", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.getAmountsIn(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const getAmountsOut = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV2InputBody;
		}): Promise<GetAmountsOutOutput> => {
			return handleTransaction("getAmountsOut", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.getAmountsOut(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	// UniswapV3NFT methods (continued)
	const balanceOf = useCallback(
		async (payload: {
			query: BalanceOfParams3;
		}): Promise<BalanceOfOutput> => {
			return handleTransaction("balanceOf", async () => {
				const uniswapSDK = getUniswapSDK();
				const response = await uniswapSDK.balanceOf(payload.query);
				return response;
			});
		},
		[moon],
	);

	const baseUri = useCallback(
		async (payload: { query: BaseUriParams }): Promise<BaseUriData> => {
			return handleTransaction("baseUri", async () => {
				const uniswapSDK = getUniswapSDK();
				const response = await uniswapSDK.baseUri(payload.query);
				return response;
			});
		},
		[moon],
	);

	const burn = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV3InputBody;
		}): Promise<BurnResult> => {
			return handleTransaction("burn", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.burn(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const collect = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV3InputBody;
		}): Promise<CollectData> => {
			return handleTransaction("collect", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.collect(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const createAndInitializePoolIfNecessary = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV3InputBody;
		}): Promise<CreateAndInitializePoolIfNecessaryData> => {
			return handleTransaction(
				"createAndInitializePoolIfNecessary",
				async () => {
					const uniswapSDK = getUniswapSDK();
					const preparedData = prepareTransaction(payload.data);
					const response = await uniswapSDK.createAndInitializePoolIfNecessary(
						payload.accountName,
						preparedData,
					);
					return handleWagmiTransaction(response);
				},
			);
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const decreaseLiquidity = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV3InputBody;
		}): Promise<DecreaseLiquidityData> => {
			return handleTransaction("decreaseLiquidity", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.decreaseLiquidity(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const domainSeparator = useCallback(
		async (payload: {
			query: DomainSeparatorParams;
		}): Promise<DomainSeparatorData> => {
			return handleTransaction("domainSeparator", async () => {
				const uniswapSDK = getUniswapSDK();
				const response = await uniswapSDK.domainSeparator(payload.query);
				return response;
			});
		},
		[moon],
	);

	const exactInput = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV3InputBody;
		}): Promise<ExactInputData> => {
			return handleTransaction("exactInput", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.exactInput(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const exactInputSingle = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV3InputBody;
		}): Promise<ExactInputSingleData> => {
			return handleTransaction("exactInputSingle", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.exactInputSingle(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const exactOutput = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV3InputBody;
		}): Promise<ExactOutputData> => {
			return handleTransaction("exactOutput", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.exactOutput(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const exactOutputSingle = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV3InputBody;
		}): Promise<ExactOutputSingleData> => {
			return handleTransaction("exactOutputSingle", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.exactOutputSingle(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const factory = useCallback(
		async (payload: { query: FactoryParams }): Promise<FactoryData> => {
			return handleTransaction("factory", async () => {
				const uniswapSDK = getUniswapSDK();
				const response = await uniswapSDK.factory(payload.query);
				return response;
			});
		},
		[moon],
	);

	const factory2 = useCallback(
		async (payload: { query: Factory2Params }): Promise<Factory2Data> => {
			return handleTransaction("factory2", async () => {
				const uniswapSDK = getUniswapSDK();
				const response = await uniswapSDK.factory2(payload.query);
				return response;
			});
		},
		[moon],
	);

	const getApproved = useCallback(
		async (payload: {
			query: GetApprovedParams2;
		}): Promise<GetApprovedResult> => {
			return handleTransaction("getApproved", async () => {
				const uniswapSDK = getUniswapSDK();
				const response = await uniswapSDK.getApproved(payload.query);
				return response;
			});
		},
		[moon],
	);

	const increaseLiquidity = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV3InputBody;
		}): Promise<IncreaseLiquidityData> => {
			return handleTransaction("increaseLiquidity", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.increaseLiquidity(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const isApprovedForAll = useCallback(
		async (payload: {
			query: IsApprovedForAllParams3;
		}): Promise<IsApprovedForAllOutput> => {
			return handleTransaction("isApprovedForAll", async () => {
				const uniswapSDK = getUniswapSDK();
				const response = await uniswapSDK.isApprovedForAll(payload.query);
				return response;
			});
		},
		[moon],
	);

	const mint = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV3InputBody;
		}): Promise<MintResult> => {
			return handleTransaction("mint", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.mint(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const multicall = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV3InputBody;
		}): Promise<MulticallData> => {
			return handleTransaction("multicall", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.multicall(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const multicall2 = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV3InputBody;
		}): Promise<Multicall2Data> => {
			return handleTransaction("multicall2", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.multicall2(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const name = useCallback(
		async (payload: { query: NameParams }): Promise<NameData> => {
			return handleTransaction("name", async () => {
				const uniswapSDK = getUniswapSDK();
				const response = await uniswapSDK.name(payload.query);
				return response;
			});
		},
		[moon],
	);

	const ownerOf = useCallback(
		async (payload: { query: OwnerOfParams }): Promise<OwnerOfData> => {
			return handleTransaction("ownerOf", async () => {
				const uniswapSDK = getUniswapSDK();
				const response = await uniswapSDK.ownerOf(payload.query);
				return response;
			});
		},
		[moon],
	);

	const permit = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV3InputBody;
		}): Promise<PermitData> => {
			return handleTransaction("permit", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.permit(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const permitTypehash = useCallback(
		async (payload: {
			query: PermitTypehashParams;
		}): Promise<PermitTypehashData> => {
			return handleTransaction("permitTypehash", async () => {
				const uniswapSDK = getUniswapSDK();
				const response = await uniswapSDK.permitTypehash(payload.query);
				return response;
			});
		},
		[moon],
	);

	const positions = useCallback(
		async (payload: { query: PositionsParams }): Promise<PositionsData> => {
			return handleTransaction("positions", async () => {
				const uniswapSDK = getUniswapSDK();
				const response = await uniswapSDK.positions(payload.query);
				return response;
			});
		},
		[moon],
	);

	const refundEth = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV3InputBody;
		}): Promise<RefundEthData> => {
			return handleTransaction("refundEth", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.refundEth(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const refundEth2 = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV3InputBody;
		}): Promise<RefundEth2Data> => {
			return handleTransaction("refundEth2", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.refundEth2(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const selfPermit = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV3InputBody;
		}): Promise<SelfPermitData> => {
			return handleTransaction("selfPermit", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.selfPermit(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const selfPermitAllowed = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV3InputBody;
		}): Promise<SelfPermitAllowedData> => {
			return handleTransaction("selfPermitAllowed", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.selfPermitAllowed(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const selfPermitAllowedIfNecessary = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV3InputBody;
		}): Promise<SelfPermitAllowedIfNecessaryData> => {
			return handleTransaction("selfPermitAllowedIfNecessary", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.selfPermitAllowedIfNecessary(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const selfPermitIfNecessary = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV3InputBody;
		}): Promise<SelfPermitIfNecessaryData> => {
			return handleTransaction("selfPermitIfNecessary", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.selfPermitIfNecessary(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const setApprovalForAll = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV3InputBody;
		}): Promise<SetApprovalForAllOutput> => {
			return handleTransaction("setApprovalForAll", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.setApprovalForAll(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const supportsInterface = useCallback(
		async (payload: {
			query: SupportsInterfaceParams2;
		}): Promise<SupportsInterfaceResult> => {
			return handleTransaction("supportsInterface", async () => {
				const uniswapSDK = getUniswapSDK();
				const response = await uniswapSDK.supportsInterface(payload.query);
				return response;
			});
		},
		[moon],
	);

	const sweepToken = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV3InputBody;
		}): Promise<SweepTokenData> => {
			return handleTransaction("sweepToken", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.sweepToken(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const sweepToken2 = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV3InputBody;
		}): Promise<SweepToken2Data> => {
			return handleTransaction("sweepToken2", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.sweepToken2(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const sweepTokenWithFee = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV3InputBody;
		}): Promise<SweepTokenWithFeeData> => {
			return handleTransaction("sweepTokenWithFee", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.sweepTokenWithFee(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const symbol = useCallback(
		async (payload: { query: SymbolParams }): Promise<SymbolData> => {
			return handleTransaction("symbol", async () => {
				const uniswapSDK = getUniswapSDK();
				const response = await uniswapSDK.symbol(payload.query);
				return response;
			});
		},
		[moon],
	);

	const tokenByIndex = useCallback(
		async (payload: {
			query: TokenByIndexParams;
		}): Promise<TokenByIndexData> => {
			return handleTransaction("tokenByIndex", async () => {
				const uniswapSDK = getUniswapSDK();
				const response = await uniswapSDK.tokenByIndex(payload.query);
				return response;
			});
		},
		[moon],
	);

	const tokenOfOwnerByIndex = useCallback(
		async (payload: {
			query: TokenOfOwnerByIndexParams;
		}): Promise<TokenOfOwnerByIndexData> => {
			return handleTransaction("tokenOfOwnerByIndex", async () => {
				const uniswapSDK = getUniswapSDK();
				const response = await uniswapSDK.tokenOfOwnerByIndex(payload.query);
				return response;
			});
		},
		[moon],
	);

	const tokenUri = useCallback(
		async (payload: { query: TokenUriParams }): Promise<TokenUriData> => {
			return handleTransaction("tokenUri", async () => {
				const uniswapSDK = getUniswapSDK();
				const response = await uniswapSDK.tokenUri(payload.query);
				return response;
			});
		},
		[moon],
	);

	const totalSupply = useCallback(
		async (payload: {
			query: TotalSupplyParams;
		}): Promise<TotalSupplyData> => {
			return handleTransaction("totalSupply", async () => {
				const uniswapSDK = getUniswapSDK();
				const response = await uniswapSDK.totalSupply(payload.query);
				return response;
			});
		},
		[moon],
	);

	const transferFrom = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV3InputBody;
		}): Promise<TransferFromResult1> => {
			return handleTransaction("transferFrom", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.transferFrom(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);
	const getFactory = useCallback(
		async (payload: {
			query: GetFactoryParams4;
		}): Promise<GetFactoryOutput> => {
			return handleTransaction("getFactory", async () => {
				const uniswapSDK = getUniswapSDK();
				const response = await uniswapSDK.getFactory(payload.query);
				return response;
			});
		},
		[moon],
	);

	const getWeth = useCallback(
		async (payload: { query: GetWethParams6 }): Promise<GetWethData1> => {
			return handleTransaction("getWeth", async () => {
				const uniswapSDK = getUniswapSDK();
				const response = await uniswapSDK.getWeth(payload.query);
				return response;
			});
		},
		[moon],
	);

	const quote = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV2InputBody;
		}): Promise<QuoteData> => {
			return handleTransaction("quote", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.quote(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const removeLiquidity = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV2InputBody;
		}): Promise<RemoveLiquidityResult> => {
			return handleTransaction("removeLiquidity", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.removeLiquidity(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const removeLiquidityEth = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV2InputBody;
		}): Promise<RemoveLiquidityEthResult> => {
			return handleTransaction("removeLiquidityEth", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.removeLiquidityEth(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const removeLiquidityEthSupportingFeeOnTransferTokens = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV2InputBody;
		}): Promise<RemoveLiquidityEthSupportingFeeOnTransferTokensData> => {
			return handleTransaction(
				"removeLiquidityEthSupportingFeeOnTransferTokens",
				async () => {
					const uniswapSDK = getUniswapSDK();
					const preparedData = prepareTransaction(payload.data);
					const response =
						await uniswapSDK.removeLiquidityEthSupportingFeeOnTransferTokens(
							payload.accountName,
							preparedData,
						);
					return handleWagmiTransaction(response);
				},
			);
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const removeLiquidityEthWithPermit = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV2InputBody;
		}): Promise<RemoveLiquidityEthWithPermitData> => {
			return handleTransaction("removeLiquidityEthWithPermit", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.removeLiquidityEthWithPermit(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const removeLiquidityEthWithPermitSupportingFeeOnTransferTokens = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV2InputBody;
		}): Promise<RemoveLiquidityEthWithPermitSupportingFeeOnTransferTokensData> => {
			return handleTransaction(
				"removeLiquidityEthWithPermitSupportingFeeOnTransferTokens",
				async () => {
					const uniswapSDK = getUniswapSDK();
					const preparedData = prepareTransaction(payload.data);
					const response =
						await uniswapSDK.removeLiquidityEthWithPermitSupportingFeeOnTransferTokens(
							payload.accountName,
							preparedData,
						);
					return handleWagmiTransaction(response);
				},
			);
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const removeLiquidityWithPermit = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV2InputBody;
		}): Promise<RemoveLiquidityWithPermitData> => {
			return handleTransaction("removeLiquidityWithPermit", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.removeLiquidityWithPermit(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const swapEthForExactTokens = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV2InputBody;
		}): Promise<SwapEthForExactTokensData> => {
			return handleTransaction("swapEthForExactTokens", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.swapEthForExactTokens(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const swapExactEthForTokens = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV2InputBody;
		}): Promise<SwapExactEthForTokensOutput> => {
			return handleTransaction("swapExactEthForTokens", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.swapExactEthForTokens(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const swapExactEthForTokensSupportingFeeOnTransferTokens = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV2InputBody;
		}): Promise<SwapExactEthForTokensSupportingFeeOnTransferTokensData> => {
			return handleTransaction(
				"swapExactEthForTokensSupportingFeeOnTransferTokens",
				async () => {
					const uniswapSDK = getUniswapSDK();
					const preparedData = prepareTransaction(payload.data);
					const response =
						await uniswapSDK.swapExactEthForTokensSupportingFeeOnTransferTokens(
							payload.accountName,
							preparedData,
						);
					return handleWagmiTransaction(response);
				},
			);
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const swapExactTokensForEth = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV2InputBody;
		}): Promise<SwapExactTokensForEthOutput> => {
			return handleTransaction("swapExactTokensForEth", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.swapExactTokensForEth(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const swapExactTokensForEthSupportingFeeOnTransferTokens = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV2InputBody;
		}): Promise<SwapExactTokensForEthSupportingFeeOnTransferTokensData> => {
			return handleTransaction(
				"swapExactTokensForEthSupportingFeeOnTransferTokens",
				async () => {
					const uniswapSDK = getUniswapSDK();
					const preparedData = prepareTransaction(payload.data);
					const response =
						await uniswapSDK.swapExactTokensForEthSupportingFeeOnTransferTokens(
							payload.accountName,
							preparedData,
						);
					return handleWagmiTransaction(response);
				},
			);
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const swapExactTokensForTokens = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV2InputBody;
		}): Promise<SwapExactTokensForTokensOutput> => {
			return handleTransaction("swapExactTokensForTokens", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.swapExactTokensForTokens(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const swapExactTokensForTokensSupportingFeeOnTransferTokens = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV2InputBody;
		}): Promise<SwapExactTokensForTokensSupportingFeeOnTransferTokensData> => {
			return handleTransaction(
				"swapExactTokensForTokensSupportingFeeOnTransferTokens",
				async () => {
					const uniswapSDK = getUniswapSDK();
					const preparedData = prepareTransaction(payload.data);
					const response =
						await uniswapSDK.swapExactTokensForTokensSupportingFeeOnTransferTokens(
							payload.accountName,
							preparedData,
						);
					return handleWagmiTransaction(response);
				},
			);
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const swapTokensForExactEth = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV2InputBody;
		}): Promise<SwapTokensForExactEthData> => {
			return handleTransaction("swapTokensForExactEth", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.swapTokensForExactEth(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const swapTokensForExactTokens = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV2InputBody;
		}): Promise<SwapTokensForExactTokensData> => {
			return handleTransaction("swapTokensForExactTokens", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(payload.data);
				const response = await uniswapSDK.swapTokensForExactTokens(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	return {
		// UniswapV2Router methods
		addLiquidity,
		addLiquidityEth,
		getAmountIn,
		getAmountOut,
		getAmountsIn,
		getAmountsOut,
		getFactory,
		getWeth,
		quote,
		removeLiquidity,
		removeLiquidityEth,
		removeLiquidityEthSupportingFeeOnTransferTokens,
		removeLiquidityEthWithPermit,
		removeLiquidityEthWithPermitSupportingFeeOnTransferTokens,
		removeLiquidityWithPermit,
		swapEthForExactTokens,
		swapExactEthForTokens,
		swapExactEthForTokensSupportingFeeOnTransferTokens,
		swapExactTokensForEth,
		swapExactTokensForEthSupportingFeeOnTransferTokens,
		swapExactTokensForTokens,
		swapExactTokensForTokensSupportingFeeOnTransferTokens,
		swapTokensForExactEth,
		swapTokensForExactTokens,

		// UniswapV3NFT methods
		approve,
		balanceOf,
		baseUri,
		burn,
		collect,
		createAndInitializePoolIfNecessary,
		decreaseLiquidity,
		domainSeparator,
		exactInput,
		exactInputSingle,
		exactOutput,
		exactOutputSingle,
		factory,
		factory2,
		getApproved,
		increaseLiquidity,
		isApprovedForAll,
		mint,
		multicall,
		multicall2,
		name,
		ownerOf,
		permit,
		permitTypehash,
		positions,
		refundEth,
		refundEth2,
		selfPermit,
		selfPermitAllowed,
		selfPermitAllowedIfNecessary,
		selfPermitIfNecessary,
		setApprovalForAll,
		supportsInterface,
		sweepToken,
		sweepToken2,
		sweepTokenWithFee,
		symbol,
		tokenByIndex,
		tokenOfOwnerByIndex,
		tokenUri,
		totalSupply,
		transferFrom,

		// Utility functions
		getUniswapSDK,
	};
};

export default useUniswap;
