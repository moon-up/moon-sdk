import { useMoonAuth } from "@/context";
import { useMoonTransaction } from "@/hooks";
import type {
	AddLiquidityEthOutput,
	AddLiquidityOutput,
	ApproveOutput,
	BalanceOfParams,
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
	GetAmountInData,
	GetAmountOutOutput,
	GetAmountsInData,
	GetAmountsOutOutput,
	GetApprovedParams2,
	GetApprovedResult,
	GetWethParams4,
	IncreaseLiquidityData,
	IsApprovedForAllParams2,
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

/**
 * Custom hook to interact with Uniswap SDK.
 *
 * This hook provides various methods to interact with Uniswap V2 and V3 contracts,
 * including adding liquidity, swapping tokens, and managing NFTs.
 *
 * @returns {Object} An object containing methods for Uniswap V2 and V3 interactions.
 *
 * @method addLiquidity - Adds liquidity to a Uniswap V2 pool.
 * @method addLiquidityEth - Adds liquidity to a Uniswap V2 pool with ETH.
 * @method getAmountIn - Gets the input amount required for a given output amount.
 * @method getAmountOut - Gets the output amount for a given input amount.
 * @method getAmountsIn - Gets the input amounts required for a given output amount.
 * @method getAmountsOut - Gets the output amounts for a given input amount.
 * @method getWeth - Gets the address of the WETH token.
 * @method quote - Gets the quote for a given input amount.
 * @method removeLiquidity - Removes liquidity from a Uniswap V2 pool.
 * @method removeLiquidityEth - Removes liquidity from a Uniswap V2 pool with ETH.
 * @method removeLiquidityEthSupportingFeeOnTransferTokens - Removes liquidity with fee on transfer tokens.
 * @method removeLiquidityEthWithPermit - Removes liquidity with permit.
 * @method removeLiquidityEthWithPermitSupportingFeeOnTransferTokens - Removes liquidity with permit and fee on transfer tokens.
 * @method removeLiquidityWithPermit - Removes liquidity with permit.
 * @method swapEthForExactTokens - Swaps ETH for exact tokens.
 * @method swapExactEthForTokens - Swaps exact ETH for tokens.
 * @method swapExactEthForTokensSupportingFeeOnTransferTokens - Swaps exact ETH for tokens with fee on transfer tokens.
 * @method swapExactTokensForEth - Swaps exact tokens for ETH.
 * @method swapExactTokensForEthSupportingFeeOnTransferTokens - Swaps exact tokens for ETH with fee on transfer tokens.
 * @method swapExactTokensForTokens - Swaps exact tokens for tokens.
 * @method swapExactTokensForTokensSupportingFeeOnTransferTokens - Swaps exact tokens for tokens with fee on transfer tokens.
 * @method swapTokensForExactEth - Swaps tokens for exact ETH.
 * @method swapTokensForExactTokens - Swaps tokens for exact tokens.
 *
 * @method approve - Approves a Uniswap V3 NFT.
 * @method balanceOf - Gets the balance of a Uniswap V3 NFT.
 * @method baseUri - Gets the base URI of a Uniswap V3 NFT.
 * @method burn - Burns a Uniswap V3 NFT.
 * @method collect - Collects fees from a Uniswap V3 position.
 * @method createAndInitializePoolIfNecessary - Creates and initializes a Uniswap V3 pool if necessary.
 * @method decreaseLiquidity - Decreases liquidity in a Uniswap V3 position.
 * @method domainSeparator - Gets the domain separator for a Uniswap V3 NFT.
 * @method exactInput - Executes an exact input swap on Uniswap V3.
 * @method exactInputSingle - Executes an exact input single swap on Uniswap V3.
 * @method exactOutput - Executes an exact output swap on Uniswap V3.
 * @method exactOutputSingle - Executes an exact output single swap on Uniswap V3.
 * @method getApproved - Gets the approved address for a Uniswap V3 NFT.
 * @method increaseLiquidity - Increases liquidity in a Uniswap V3 position.
 * @method isApprovedForAll - Checks if an address is approved for all Uniswap V3 NFTs.
 * @method mint - Mints a new Uniswap V3 NFT.
 * @method multicall - Executes multiple calls in a single transaction on Uniswap V3.
 * @method multicall2 - Executes multiple calls in a single transaction on Uniswap V3 (alternative method).
 * @method name - Gets the name of a Uniswap V3 NFT.
 * @method ownerOf - Gets the owner of a Uniswap V3 NFT.
 * @method permit - Permits a Uniswap V3 NFT.
 * @method permitTypehash - Gets the permit typehash for a Uniswap V3 NFT.
 * @method positions - Gets the positions of a Uniswap V3 NFT.
 * @method refundEth - Refunds ETH from a Uniswap V3 position.
 * @method refundEth2 - Refunds ETH from a Uniswap V3 position (alternative method).
 * @method selfPermit - Self permits a Uniswap V3 NFT.
 * @method selfPermitAllowed - Self permits a Uniswap V3 NFT with allowance.
 * @method selfPermitAllowedIfNecessary - Self permits a Uniswap V3 NFT with allowance if necessary.
 * @method selfPermitIfNecessary - Self permits a Uniswap V3 NFT if necessary.
 * @method setApprovalForAll - Sets approval for all Uniswap V3 NFTs.
 * @method supportsInterface - Checks if a Uniswap V3 NFT supports a given interface.
 * @method sweepToken - Sweeps tokens from a Uniswap V3 position.
 * @method sweepToken2 - Sweeps tokens from a Uniswap V3 position (alternative method).
 * @method sweepTokenWithFee - Sweeps tokens with fee from a Uniswap V3 position.
 * @method symbol - Gets the symbol of a Uniswap V3 NFT.
 * @method tokenByIndex - Gets a token by index from a Uniswap V3 NFT.
 * @method tokenOfOwnerByIndex - Gets a token of owner by index from a Uniswap V3 NFT.
 * @method tokenUri - Gets the URI of a Uniswap V3 NFT.
 * @method totalSupply - Gets the total supply of a Uniswap V3 NFT.
 * @method transferFrom - Transfers a Uniswap V3 NFT.
 *
 * @method getUniswapSDK - Gets the Uniswap SDK instance.
 */
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
		}): Promise<ApproveOutput> => {
			return handleTransaction("approve", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
			query: BalanceOfParams;
		}) => {
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
					const preparedData = prepareTransaction(
						payload.accountName,
						payload.data,
					);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await uniswapSDK.exactOutputSingle(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
			query: IsApprovedForAllParams2;
		}) => {
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
		}) => {
			return handleTransaction("mint", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await uniswapSDK.setApprovalForAll(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const sweepToken = useCallback(
		async (payload: {
			accountName: string;
			data: UniswapV3InputBody;
		}): Promise<SweepTokenData> => {
			return handleTransaction("sweepToken", async () => {
				const uniswapSDK = getUniswapSDK();
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await uniswapSDK.transferFrom(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const getWeth = useCallback(
		async (payload: { query: GetWethParams4 }) => {
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
					const preparedData = prepareTransaction(
						payload.accountName,
						payload.data,
					);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
					const preparedData = prepareTransaction(
						payload.accountName,
						payload.data,
					);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
					const preparedData = prepareTransaction(
						payload.accountName,
						payload.data,
					);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
					const preparedData = prepareTransaction(
						payload.accountName,
						payload.data,
					);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
					const preparedData = prepareTransaction(
						payload.accountName,
						payload.data,
					);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
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
