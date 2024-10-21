import { useMoonAuth } from "@/context";
import { useMoonTransaction } from "@/hooks";
import type {
	AddLiquidityData,
	AddLiquidityEthData,
	ApproveOutput,
	BurnData,
	CalculateOptimalVoteDistributionData,
	CalculateOptimalVoteDistributionParams,
	CheckpointData,
	CheckpointDelegateeData,
	ClaimBribesData,
	ClaimData,
	ClaimFeesData,
	ClaimRewardsResult,
	CreateDelegatedLockForData,
	CreateGaugeData,
	CreateLockData,
	CreateLockForData,
	DelegateBySigData,
	DelegateData,
	DistributeData,
	GetAmountOutData,
	GetAmountOutParams,
	GetAmountsOutData,
	GetAmountsOutParams,
	GetApprovedData,
	GetApprovedParams,
	GetAssetByAddressData,
	GetAssetsData,
	GetBalanceOfNftAtData,
	GetBalanceOfNftAtParams,
	GetBalanceOfNftData,
	GetBalanceOfNftParams,
	GetBalanceOfOutput,
	GetBalanceOfParams4,
	GetDelegatesData,
	GetDelegatesParams,
	GetFactoryData,
	GetFactoryParams,
	GetLastVotedData,
	GetLastVotedParams,
	GetLockDetailsData,
	GetLockDetailsParams,
	GetNameParams2,
	GetNameResult,
	GetOwnerOfData,
	GetOwnerOfParams,
	GetPastVotesData,
	GetPastVotesParams,
	GetPoolByAddressData,
	GetPoolVoteLengthData,
	GetPoolVoteLengthParams,
	GetPoolsByTypeData,
	GetPoolsData,
	GetSymbolParams2,
	GetSymbolResult,
	GetTokenByIndexData,
	GetTokenByIndexParams,
	GetTokenOfOwnerByIndexData,
	GetTokenOfOwnerByIndexParams,
	GetTokenUriData,
	GetTokenUriParams,
	GetTopAprPoolsData,
	GetTopAprPoolsParams,
	GetTotalNftsMintedData,
	GetTotalNftsMintedParams,
	GetTotalSupplyOutput,
	GetTotalSupplyParams4,
	GetTotalValueLockedData,
	GetTotalWeightData,
	GetTotalWeightParams,
	GetVestedPayoutAtTimeData,
	GetVestedPayoutAtTimeParams,
	GetVestedPayoutData,
	GetVestedPayoutParams,
	GetVestingPayoutData,
	GetVestingPayoutParams,
	GetVestingPeriodData,
	GetVestingPeriodParams,
	GetVotesData,
	GetVotesParams,
	GetWeightsData,
	GetWeightsParams,
	GetWethParams2,
	GetWethResult,
	GlobalCheckpointData,
	IncreaseLockAmountData,
	IncreaseUnlockTimeData,
	IsApprovedForAllParams1,
	IsApprovedForAllResult,
	IsGaugeData,
	IsGaugeParams,
	IsWhitelistedData,
	IsWhitelistedParams,
	KillGaugeData,
	Lynex,
	LynexNFTInputBody,
	LynexRouterInputBody,
	LynexVoterInputBody,
	MergeData,
	NotifyRewardAmountData,
	PokeData,
	ResetData,
	ReviveGaugeData,
	SafeTransferFromResult,
	SetApprovalForAllResult,
	SetClaimApprovalData,
	SetClaimApprovalForAllData,
	SplitData,
	SwapExactEthForTokensData,
	SwapExactTokensForEthData,
	SwapExactTokensForTokensData,
	TransferFromOutput,
	UnlockPermanentData,
	VoteData,
	VoteWithOptimalDistributionData,
	VoteWithOptimalDistributionPayload,
	WhitelistData,
} from "@moonup/moon-api";
import { useCallback } from "react";
import {
	useAccount,
	useChainId,
	useSendTransaction,
	useSwitchChain,
} from "wagmi";

/**
 * A custom hook that provides various functionalities for interacting with the Lynex SDK.
 *
 * @returns An object containing functions to interact with the Lynex SDK, including:
 * - `addLiquidity`: Adds liquidity to the Lynex protocol.
 * - `addLiquidityEth`: Adds liquidity to the ETH pool using the Lynex SDK.
 * - `approve`: Approves a transaction using the Lynex SDK.
 * - `burn`: Burns a Lynex NFT.
 * - `calculateOptimalVoteDistribution`: Calculates the optimal vote distribution using the Lynex SDK.
 * - `checkpoint`: Performs a checkpoint operation using the Lynex SDK.
 * - `checkpointDelegatee`: Checkpoints a delegatee using the Lynex SDK.
 * - `claim`: Claims an NFT using the Lynex SDK.
 * - `claimBribes`: Claims bribes for a given address using the Lynex SDK.
 * - `claimFees`: Claims fees for a given address using the Lynex SDK.
 * - `claimRewards`: Claims rewards for a given address using the Lynex SDK.
 * - `createDelegatedLockFor`: Creates a delegated lock for a given address and data.
 * - `createGauge`: Creates a gauge using the Lynex SDK.
 * - `createLock`: Creates a lock using the Lynex SDK.
 * - `createLockFor`: Creates a lock for a given address using the Lynex SDK.
 * - `delegate`: Delegates a transaction to the Lynex SDK.
 * - `delegateBySig`: Delegates by signature using the Lynex SDK.
 * - `distribute`: Distributes data to a specified address using the Lynex SDK.
 * - `getAmountOut`: Retrieves the output amount for a given set of parameters using the Lynex SDK.
 * - `getAmountsOut`: Retrieves the output amounts for a given set of input parameters using the Lynex SDK.
 * - `getApproved`: Retrieves the approved data using the Lynex SDK.
 * - `getAssetByAddress`: Retrieves asset information by its address using the Lynex SDK.
 * - `getAssets`: Fetches assets using the Lynex SDK.
 * - `getBalanceOf`: Retrieves the balance of a specified account using the Lynex SDK.
 * - `getBalanceOfNft`: Retrieves the balance of a specific NFT using the Lynex SDK.
 * - `getBalanceOfNftAt`: Retrieves the balance of an NFT at a specific point in time.
 * - `getDelegates`: Fetches delegate data using the Lynex SDK.
 * - `getFactory`: Retrieves factory data using the Lynex SDK.
 * - `getLastVoted`: Retrieves the last voted data using the Lynex SDK.
 * - `getLockDetails`: Retrieves lock details using the Lynex SDK.
 * - `getName`: Retrieves the name using the Lynex SDK.
 * - `getOwnerOf`: Retrieves the owner of a specified entity using the Lynex SDK.
 * - `getPastVotes`: Fetches past votes using the Lynex SDK.
 * - `getPoolByAddress`: Retrieves pool data by its address using the Lynex SDK.
 * - `getPools`: Fetches the pool data using the Lynex SDK.
 * - `getPoolsByType`: Fetches pools by the specified type using the Lynex SDK.
 * - `getPoolVoteLength`: Retrieves the length of the pool vote using the Lynex SDK.
 * - `getSymbol`: Fetches the symbol information using the Lynex SDK.
 * - `getTokenByIndex`: Retrieves a token by its index using the Lynex SDK.
 * - `getTokenOfOwnerByIndex`: Retrieves the token of an owner by index using the Lynex SDK.
 * - `getTokenUri`: Retrieves the token URI using the Lynex SDK.
 * - `getTopAprPools`: Fetches the top APR pools using the Lynex SDK.
 * - `getTotalNftsMinted`: Retrieves the total number of NFTs minted using the Lynex SDK.
 * - `getTotalSupply`: Retrieves the total supply using the Lynex SDK.
 * - `getTotalValueLocked`: Retrieves the total value locked (TVL) from the Lynex SDK.
 * - `getTotalWeight`: Retrieves the total weight using the Lynex SDK.
 * - `getVestedPayout`: Retrieves the vested payout data using the Lynex SDK.
 * - `getVestedPayoutAtTime`: Retrieves the vested payout at a specific time using the Lynex SDK.
 * - `getVestingPayout`: Retrieves the vesting payout data using the Lynex SDK.
 * - `getVestingPeriod`: Retrieves the vesting period data using the Lynex SDK.
 * - `getVotes`: Fetches votes data using the Lynex SDK.
 * - `getWeights`: Fetches weight data using the Lynex SDK.
 * - `getWeth`: Retrieves WETH (Wrapped Ether) using the Lynex SDK.
 * - `globalCheckpoint`: Executes a global checkpoint transaction using the Lynex SDK.
 * - `increaseLockAmount`: Increases the lock amount for a given address using the Lynex SDK.
 * - `increaseUnlockTime`: Increases the unlock time for a given address using the Lynex SDK.
 * - `isApprovedForAll`: Checks if the given parameters are approved for all using the Lynex SDK.
 * - `isGauge`: Determines if the given parameters correspond to a gauge using the Lynex SDK.
 * - `isWhitelisted`: Checks if the given parameters are whitelisted using the Lynex SDK.
 * - `killGauge`: Asynchronously kills a gauge using the Lynex SDK.
 * - `merge`: Merges data with the specified address using the Lynex SDK.
 * - `notifyRewardAmount`: Notifies the reward amount using the Lynex SDK.
 * - `poke`: Pokes a specified address with the provided data using the Lynex SDK.
 * - `reset`: Resets the Lynex voter data for a given address.
 * - `reviveGauge`: Revives a gauge for a given address using the Lynex SDK.
 * - `safeTransferFrom`: Safely transfers an NFT from one address to another using the Lynex SDK.
 * - `setApprovalForAll`: Sets approval for all NFTs for a given address.
 * - `setClaimApproval`: Sets the claim approval for a given address and data.
 * - `setClaimApprovalForAll`: Sets claim approval for all NFTs for a given address.
 * - `split`: Splits an NFT using the Lynex SDK.
 * - `swapExactEthForTokens`: Executes a swap of exact ETH for tokens using the Lynex SDK.
 * - `swapExactTokensForEth`: Swaps an exact amount of tokens for ETH using the Lynex SDK.
 * - `swapExactTokensForTokens`: Executes a token swap transaction using the Lynex SDK.
 * - `transferFrom`: Transfers an NFT from one address to another using the Lynex SDK.
 * - `unlockPermanent`: Unlocks a permanent feature for a given address using the Lynex SDK.
 * - `vote`: Asynchronously casts a vote using the Lynex SDK.
 * - `voteWithOptimalDistribution`: Votes with optimal distribution using the Lynex SDK.
 * - `whitelist`: Whitelists an address using the Lynex SDK.
 */
export const useLynex = () => {
	const { handleTransaction } = useMoonTransaction();
	const { moon } = useMoonAuth();
	const { isConnected, address } = useAccount();
	const { sendTransactionAsync } = useSendTransaction();
	const chainId = useChainId();
	const { switchChain } = useSwitchChain();

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

	const getLynexSDK = useCallback((): Lynex => {
		const lynexSDK = moon?.getLynexSDK();
		if (!lynexSDK) throw new Error("Moon lynexSDK not initialized");
		return lynexSDK;
	}, [moon]);

	/**
	 * Adds liquidity to the Lynex protocol.
	 *
	 * @param address - The address to which liquidity is being added.
	 * @param data - The input data required by the Lynex router.
	 * @returns A promise that resolves to the data of the added liquidity.
	 */
	const addLiquidity = useCallback(
		async (
			address: string,
			data: LynexRouterInputBody,
		): Promise<AddLiquidityData> => {
			return handleTransaction("addLiquidity", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);
				const response = await lynexSDK.addLiquidity(address, preparedData);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Adds liquidity to the ETH pool using the Lynex SDK.
	 *
	 * @param address - The address to which the liquidity will be added.
	 * @param data - The input data required by the Lynex router.
	 * @returns A promise that resolves to the data returned by the addLiquidityEth function of the Lynex SDK.
	 */

	const addLiquidityEth = useCallback(
		async (
			address: string,
			data: LynexRouterInputBody,
		): Promise<AddLiquidityEthData> => {
			return handleTransaction("addLiquidityEth", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);
				const response = await lynexSDK.addLiquidityEth(address, preparedData);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Executes a swap of exact ETH for tokens using the Lynex SDK.
	 *
	 * @param address - The address to which the tokens will be sent.
	 * @param data - The input data required by the Lynex router for the swap.
	 * @returns A promise that resolves to the data of the swap transaction.
	 */
	const swapExactEthForTokens = useCallback(
		async (
			address: string,
			data: LynexRouterInputBody,
		): Promise<SwapExactEthForTokensData> => {
			return handleTransaction("swapExactEthForTokens", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);
				const response = await lynexSDK.swapExactEthForTokens(
					address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Swaps an exact amount of tokens for ETH using the Lynex SDK.
	 *
	 * @param address - The address to send the swapped ETH to.
	 * @param data - The input data required by the Lynex router for the swap.
	 * @returns A promise that resolves to the data of the swap transaction.
	 */
	const swapExactTokensForEth = useCallback(
		async (
			address: string,
			data: LynexRouterInputBody,
		): Promise<SwapExactTokensForEthData> => {
			return handleTransaction("swapExactTokensForEth", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);
				const response = await lynexSDK.swapExactTokensForEth(
					address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Executes a token swap transaction using the Lynex SDK.
	 *
	 * @param address - The address to perform the swap for.
	 * @param data - The input data required for the Lynex router.
	 * @returns A promise that resolves to the data of the swap transaction.
	 */

	const swapExactTokensForTokens = useCallback(
		async (
			address: string,
			data: LynexRouterInputBody,
		): Promise<SwapExactTokensForTokensData> => {
			return handleTransaction("swapExactTokensForTokens", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);
				const response = await lynexSDK.swapExactTokensForTokens(
					address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Approves a transaction using the Lynex SDK.
	 *
	 * @param address - The address to approve the transaction for.
	 * @param data - The data required for the Lynex NFT input body.
	 * @returns A promise that resolves to the approval output.
	 */
	const approve = useCallback(
		async (
			address: string,
			data: LynexNFTInputBody,
		): Promise<ApproveOutput> => {
			return handleTransaction("approve", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);
				const response = await lynexSDK.approve(address, preparedData);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Burns a Lynex NFT.
	 *
	 * @param {string} address - The address of the NFT to burn.
	 * @param {LynexNFTInputBody} data - The data required to burn the NFT.
	 * @returns {Promise<BurnData>} A promise that resolves to the burn data.
	 */
	const burn = useCallback(
		async (address: string, data: LynexNFTInputBody): Promise<BurnData> => {
			return handleTransaction("burn", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.burn(address, preparedData);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * A hook that provides a function to perform a checkpoint operation using the Lynex SDK.
	 *
	 * @param address - The address to perform the checkpoint on.
	 * @param data - The data required for the checkpoint operation.
	 * @returns A promise that resolves to the checkpoint data.
	 */
	const checkpoint = useCallback(
		async (
			address: string,
			data: LynexNFTInputBody,
		): Promise<CheckpointData> => {
			return handleTransaction("checkpoint", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.checkpoint(address, preparedData);

				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Asynchronously checkpoints a delegatee using the Lynex SDK.
	 *
	 * @param address - The address of the delegatee.
	 * @param data - The data required for the Lynex NFT input body.
	 * @returns A promise that resolves to the checkpoint delegatee data.
	 */
	const checkpointDelegatee = useCallback(
		async (
			address: string,
			data: LynexNFTInputBody,
		): Promise<CheckpointDelegateeData> => {
			return handleTransaction("checkpointDelegatee", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);
				const response = await lynexSDK.checkpointDelegatee(
					address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Claims an NFT using the Lynex SDK.
	 *
	 * @param {string} address - The address to which the NFT will be claimed.
	 * @param {LynexNFTInputBody} data - The data required to claim the NFT.
	 * @returns {Promise<ClaimData>} A promise that resolves to the claim data.
	 */
	const claim = useCallback(
		async (address: string, data: LynexNFTInputBody): Promise<ClaimData> => {
			return handleTransaction("claim", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.claim(address, preparedData);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Creates a delegated lock for a given address and data.
	 *
	 * @param address - The address for which the delegated lock is to be created.
	 * @param data - The data required to create the delegated lock.
	 * @returns A promise that resolves to the data of the created delegated lock.
	 */
	const createDelegatedLockFor = useCallback(
		async (
			address: string,
			data: LynexNFTInputBody,
		): Promise<CreateDelegatedLockForData> => {
			return handleTransaction("createDelegatedLockFor", async () => {
				const lynexSDK = getLynexSDK();

				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.createDelegatedLockFor(
					address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Creates a lock using the Lynex SDK.
	 *
	 * @param address - The address to create the lock for.
	 * @param data - The data required to create the lock, conforming to the LynexNFTInputBody interface.
	 * @returns A promise that resolves to the created lock data.
	 */
	const createLock = useCallback(
		async (
			address: string,
			data: LynexNFTInputBody,
		): Promise<CreateLockData> => {
			return handleTransaction("createLock", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.createLock(address, preparedData);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Creates a lock for a given address using the Lynex SDK.
	 *
	 * @param address - The address for which the lock is to be created.
	 * @param data - The data required to create the lock, adhering to the LynexNFTInputBody interface.
	 * @returns A promise that resolves to CreateLockForData.
	 *
	 * @remarks
	 * This function uses the `handleTransaction` utility to manage the transaction process.
	 * It prepares the transaction data and then calls the `createLockFor` method of the Lynex SDK.
	 * The response is then processed using the `handleWagmiTransaction` function.
	 *
	 * @example
	 * ```typescript
	 * const address = "0x123...";
	 * const data = { /* LynexNFTInputBody data *\/ };
	 * const result = await createLockFor(address, data);
	 * console.log(result);
	 * ```
	 */
	const createLockFor = useCallback(
		async (
			address: string,
			data: LynexNFTInputBody,
		): Promise<CreateLockForData> => {
			return handleTransaction("createLockFor", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.createLockFor(address, preparedData);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Delegates a transaction to the Lynex SDK.
	 *
	 * @param {string} address - The address to which the transaction is delegated.
	 * @param {LynexNFTInputBody} data - The data required for the Lynex NFT transaction.
	 * @returns {Promise<DelegateData>} - A promise that resolves to the delegate data.
	 *
	 * @example
	 * const address = "0x123...";
	 * const data = { /* LynexNFTInputBody data *\/ };
	 * const result = await delegate(address, data);
	 * console.log(result);
	 */
	const delegate = useCallback(
		async (address: string, data: LynexNFTInputBody): Promise<DelegateData> => {
			return handleTransaction("delegate", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.delegate(address, preparedData);

				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * A hook that provides a function to delegate by signature using the Lynex SDK.
	 *
	 * @param address - The address to delegate to.
	 * @param data - The data required for the Lynex NFT input body.
	 * @returns A promise that resolves to the DelegateBySigData.
	 *
	 * @example
	 * ```typescript
	 * const { delegateBySig } = useLynex();
	 *
	 * const address = "0x123...";
	 * const data = {
	 *   // LynexNFTInputBody data
	 * };
	 *
	 * delegateBySig(address, data)
	 *   .then((result) => {
	 *     console.log("Delegation successful:", result);
	 *   })
	 *   .catch((error) => {
	 *     console.error("Delegation failed:", error);
	 *   });
	 * ```
	 */
	const delegateBySig = useCallback(
		async (
			address: string,
			data: LynexNFTInputBody,
		): Promise<DelegateBySigData> => {
			return handleTransaction("delegateBySig", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.delegateBySig(address, preparedData);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Executes a global checkpoint transaction using the Lynex SDK.
	 *
	 * @param address - The address to perform the global checkpoint on.
	 * @param data - The data required for the Lynex NFT input body.
	 * @returns A promise that resolves to the global checkpoint data.
	 *
	 * @example
	 * ```typescript
	 * const checkpointData = await globalCheckpoint("0x123...", {
	 *   // LynexNFTInputBody data
	 * });
	 * ```
	 */
	const globalCheckpoint = useCallback(
		async (
			address: string,
			data: LynexNFTInputBody,
		): Promise<GlobalCheckpointData> => {
			return handleTransaction("globalCheckpoint", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.globalCheckpoint(address, preparedData);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Increases the lock amount for a given address using the Lynex SDK.
	 *
	 * @param address - The address for which the lock amount is to be increased.
	 * @param data - The data required for the Lynex NFT input body.
	 * @returns A promise that resolves to the data of the increased lock amount.
	 */
	const increaseLockAmount = useCallback(
		async (
			address: string,
			data: LynexNFTInputBody,
		): Promise<IncreaseLockAmountData> => {
			return handleTransaction("increaseLockAmount", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.increaseLockAmount(
					address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Increases the unlock time for a given address using the Lynex SDK.
	 *
	 * @param address - The address for which the unlock time is to be increased.
	 * @param data - The input data required for the Lynex NFT transaction.
	 * @returns A promise that resolves to the data of the increased unlock time transaction.
	 */
	const increaseUnlockTime = useCallback(
		async (
			address: string,
			data: LynexNFTInputBody,
		): Promise<IncreaseUnlockTimeData> => {
			return handleTransaction("increaseUnlockTime", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.increaseUnlockTime(
					address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Merges data with the specified address using the Lynex SDK.
	 *
	 * @param {string} address - The address to merge the data with.
	 * @param {LynexNFTInputBody} data - The data to be merged.
	 * @returns {Promise<MergeData>} - A promise that resolves to the merged data.
	 */
	const merge = useCallback(
		async (address: string, data: LynexNFTInputBody): Promise<MergeData> => {
			return handleTransaction("merge", async () => {
				const lynexSDK = getLynexSDK();

				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.merge(address, preparedData);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Safely transfers an NFT from one address to another using the Lynex SDK.
	 *
	 * @param address - The address to transfer the NFT to.
	 * @param data - The data required for the NFT transfer.
	 * @returns A promise that resolves to the result of the safe transfer operation.
	 *
	 * @example
	 * ```typescript
	 * const result = await safeTransferFrom("0xRecipientAddress", {
	 *   tokenId: "123",
	 *   from: "0xSenderAddress",
	 *   to: "0xRecipientAddress",
	 *   data: "0x"
	 * });
	 * ```
	 */
	const safeTransferFrom = useCallback(
		async (
			address: string,
			data: LynexNFTInputBody,
		): Promise<SafeTransferFromResult> => {
			return handleTransaction("safeTransferFrom", async () => {
				const lynexSDK = getLynexSDK();

				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.safeTransferFrom(address, preparedData);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Sets approval for all NFTs for a given address.
	 *
	 * @param address - The address to set approval for.
	 * @param data - The data required for the Lynex NFT transaction.
	 * @returns A promise that resolves to the result of the setApprovalForAll transaction.
	 */
	const setApprovalForAll = useCallback(
		async (
			address: string,
			data: LynexNFTInputBody,
		): Promise<SetApprovalForAllResult> => {
			return handleTransaction("setApprovalForAll", async () => {
				const lynexSDK = getLynexSDK();

				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.setApprovalForAll(
					address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Sets the claim approval for a given address and data.
	 *
	 * @param address - The address for which the claim approval is being set.
	 * @param data - The data required for the Lynex NFT input body.
	 * @returns A promise that resolves to the data of the set claim approval.
	 *
	 * @example
	 * ```typescript
	 * const address = "0x123...";
	 * const data = { /* LynexNFTInputBody data *\/ };
	 * const result = await setClaimApproval(address, data);
	 * ```
	 */
	const setClaimApproval = useCallback(
		async (
			address: string,
			data: LynexNFTInputBody,
		): Promise<SetClaimApprovalData> => {
			return handleTransaction("setClaimApproval", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.setClaimApproval(address, preparedData);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Sets claim approval for all NFTs for a given address.
	 *
	 * @param address - The address for which to set claim approval.
	 * @param data - The data required for the Lynex NFT input body.
	 * @returns A promise that resolves to the data of the set claim approval transaction.
	 */
	const setClaimApprovalForAll = useCallback(
		async (
			address: string,
			data: LynexNFTInputBody,
		): Promise<SetClaimApprovalForAllData> => {
			return handleTransaction("setClaimApprovalForAll", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.setClaimApprovalForAll(
					address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Splits an NFT using the Lynex SDK.
	 *
	 * @param address - The address of the NFT owner.
	 * @param data - The input data required for the Lynex NFT split operation.
	 * @returns A promise that resolves to the split data.
	 *
	 * @example
	 * ```typescript
	 * const splitData = await split("0x123...", { tokenId: "1", amount: 2 });
	 * ```
	 */
	const split = useCallback(
		async (address: string, data: LynexNFTInputBody): Promise<SplitData> => {
			return handleTransaction("split", async () => {
				const lynexSDK = getLynexSDK();

				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.split(address, preparedData);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Transfers an NFT from one address to another using the Lynex SDK.
	 *
	 * @param address - The address to transfer the NFT from.
	 * @param data - The data required for the transfer, encapsulated in a LynexNFTInputBody object.
	 * @returns A promise that resolves to a TransferFromOutput object.
	 *
	 * @example
	 * ```typescript
	 * const address = "0x123...";
	 * const data = { /* LynexNFTInputBody data *\/ };
	 * const result = await transferFrom(address, data);
	 * ```
	 */
	const transferFrom = useCallback(
		async (
			address: string,
			data: LynexNFTInputBody,
		): Promise<TransferFromOutput> => {
			return handleTransaction("transferFrom", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.transferFrom(address, preparedData);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Unlocks a permanent feature for a given address using the Lynex SDK.
	 *
	 * @param address - The address for which the permanent feature is to be unlocked.
	 * @param data - The data required to unlock the permanent feature, conforming to the LynexNFTInputBody interface.
	 * @returns A promise that resolves to an UnlockPermanentData object.
	 *
	 * @example
	 * ```typescript
	 * const address = "0x123...";
	 * const data = { /* LynexNFTInputBody data *\/ };
	 * const result = await unlockPermanent(address, data);
	 * ```
	 */
	const unlockPermanent = useCallback(
		async (
			address: string,
			data: LynexNFTInputBody,
		): Promise<UnlockPermanentData> => {
			return handleTransaction("unlockPermanent", async () => {
				const lynexSDK = getLynexSDK();

				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.unlockPermanent(address, preparedData);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);
	/**
	 * Claims fees for a given address using the Lynex SDK.
	 *
	 * @param address - The address for which to claim fees.
	 * @param data - The input data required by the Lynex SDK to claim fees.
	 * @returns A promise that resolves to the data returned by the claim fees transaction.
	 */
	const claimFees = useCallback(
		async (
			address: string,
			data: LynexVoterInputBody,
		): Promise<ClaimFeesData> => {
			return handleTransaction("claimFees", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.claimFees(address, preparedData);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Claims bribes for a given address using the Lynex SDK.
	 *
	 * @param address - The address to claim bribes for.
	 * @param data - The input data required by the Lynex voter.
	 * @returns A promise that resolves to the data of the claimed bribes.
	 */
	const claimBribes = useCallback(
		async (
			address: string,
			data: LynexVoterInputBody,
		): Promise<ClaimBribesData> => {
			return handleTransaction("claimBribes", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.claimBribes(address, preparedData);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Claims rewards for a given address using the Lynex SDK.
	 *
	 * @param address - The address to claim rewards for.
	 * @param data - The input data required for the Lynex voter.
	 * @returns A promise that resolves to the result of the claim rewards transaction.
	 */
	const claimRewards = useCallback(
		async (
			address: string,
			data: LynexVoterInputBody,
		): Promise<ClaimRewardsResult> => {
			return handleTransaction("claimRewards", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.claimRewards(address, preparedData);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Creates a gauge using the Lynex SDK.
	 *
	 * @param address - The address to create the gauge for.
	 * @param data - The data required to create the gauge, conforming to the LynexVoterInputBody interface.
	 * @returns A promise that resolves to CreateGaugeData.
	 *
	 * @example
	 * ```typescript
	 * const address = "0x123...";
	 * const data: LynexVoterInputBody = { /* ... *\/ };
	 * const result = await createGauge(address, data);
	 * ```
	 */
	const createGauge = useCallback(
		async (
			address: string,
			data: LynexVoterInputBody,
		): Promise<CreateGaugeData> => {
			return handleTransaction("createGauge", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.createGauge(address, preparedData);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Distributes data to a specified address using the Lynex SDK.
	 *
	 * @param address - The address to which the data will be distributed.
	 * @param data - The data to be distributed, formatted as a LynexVoterInputBody.
	 * @returns A promise that resolves to the distributed data.
	 */
	const distribute = useCallback(
		async (
			address: string,
			data: LynexVoterInputBody,
		): Promise<DistributeData> => {
			return handleTransaction("distribute", async () => {
				const lynexSDK = getLynexSDK();

				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.distribute(address, preparedData);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Asynchronously kills a gauge using the Lynex SDK.
	 *
	 * @param address - The address of the gauge to be killed.
	 * @param data - The input data required for the Lynex voter.
	 * @returns A promise that resolves to the KillGaugeData.
	 */
	const killGauge = useCallback(
		async (
			address: string,
			data: LynexVoterInputBody,
		): Promise<KillGaugeData> => {
			return handleTransaction("killGauge", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.killGauge(address, preparedData);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	const notifyRewardAmount = useCallback(
		async (
			address: string,
			data: LynexVoterInputBody,
		): Promise<NotifyRewardAmountData> => {
			return handleTransaction("notifyRewardAmount", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.notifyRewardAmount(
					address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Pokes a specified address with the provided data using the Lynex SDK.
	 *
	 * @param {string} address - The address to poke.
	 * @param {LynexVoterInputBody} data - The data to send with the poke.
	 * @returns {Promise<PokeData>} A promise that resolves to the poke data.
	 */
	const poke = useCallback(
		async (address: string, data: LynexVoterInputBody): Promise<PokeData> => {
			return handleTransaction("poke", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.poke(address, preparedData);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Resets the Lynex voter data for a given address.
	 *
	 * @param {string} address - The address of the voter to reset.
	 * @param {LynexVoterInputBody} data - The data to be used for the reset operation.
	 * @returns {Promise<ResetData>} A promise that resolves to the reset data.
	 *
	 * @example
	 * ```typescript
	 * const address = "0x123...";
	 * const data = { /* Lynex voter input body data *\/ };
	 * const resetData = await reset(address, data);
	 * ```
	 */
	const reset = useCallback(
		async (address: string, data: LynexVoterInputBody): Promise<ResetData> => {
			return handleTransaction("reset", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.reset(address, preparedData);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Revives a gauge for a given address using the Lynex SDK.
	 *
	 * @param {string} address - The address for which the gauge is to be revived.
	 * @param {LynexVoterInputBody} data - The data required to revive the gauge.
	 * @returns {Promise<ReviveGaugeData>} - A promise that resolves to the revived gauge data.
	 *
	 * @example
	 * ```typescript
	 * const address = "0x123...";
	 * const data = { /* LynexVoterInputBody data *\/ };
	 * const revivedGauge = await reviveGauge(address, data);
	 * ```
	 */
	const reviveGauge = useCallback(
		async (
			address: string,
			data: LynexVoterInputBody,
		): Promise<ReviveGaugeData> => {
			return handleTransaction("reviveGauge", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.reviveGauge(address, preparedData);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Asynchronously casts a vote using the Lynex SDK.
	 *
	 * @param {string} address - The address of the voter.
	 * @param {LynexVoterInputBody} data - The data required for voting.
	 * @returns {Promise<VoteData>} A promise that resolves to the vote data.
	 *
	 * @example
	 * const voteData = await vote("0x123...", { candidateId: "abc123", amount: 10 });
	 *
	 * @function
	 * @name vote
	 */
	const vote = useCallback(
		async (address: string, data: LynexVoterInputBody): Promise<VoteData> => {
			return handleTransaction("vote", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.vote(address, preparedData);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * A hook that provides a function to vote with optimal distribution using the Lynex SDK.
	 *
	 * @param address - The address of the voter.
	 * @param data - The payload containing the voting data.
	 * @returns A promise that resolves to the voting result data.
	 *
	 * @example
	 * ```typescript
	 * const result = await voteWithOptimalDistribution("0x123...", {
	 *   proposalId: "proposal-1",
	 *   votes: [
	 *     { option: "yes", weight: 70 },
	 *     { option: "no", weight: 30 },
	 *   ],
	 * });
	 * ```
	 */
	const voteWithOptimalDistribution = useCallback(
		async (
			address: string,
			data: VoteWithOptimalDistributionPayload,
		): Promise<VoteWithOptimalDistributionData> => {
			return handleTransaction("voteWithOptimalDistribution", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.voteWithOptimalDistribution(
					address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Whitelists an address using the Lynex SDK.
	 *
	 * @param address - The address to be whitelisted.
	 * @param data - The data required for the Lynex voter input.
	 * @returns A promise that resolves to the whitelisted data.
	 */
	const whitelist = useCallback(
		async (
			address: string,
			data: LynexVoterInputBody,
		): Promise<WhitelistData> => {
			return handleTransaction("whitelist", async () => {
				const lynexSDK = getLynexSDK();
				const preparedData = prepareTransaction(data);

				const response = await lynexSDK.whitelist(address, preparedData);
				return handleWagmiTransaction(response);
			});
		},
		[moon],
	);

	/**
	 * Calculates the optimal vote distribution using the Lynex SDK.
	 *
	 * @param params - The parameters required to calculate the optimal vote distribution.
	 * @returns A promise that resolves to the calculated optimal vote distribution data.
	 */
	const calculateOptimalVoteDistribution = useCallback(
		async (
			params: CalculateOptimalVoteDistributionParams,
		): Promise<CalculateOptimalVoteDistributionData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.calculateOptimalVoteDistribution(params);
		},
		[moon],
	);

	/**
	 * Retrieves the output amount for a given set of parameters using the Lynex SDK.
	 *
	 * @param {GetAmountOutParams} params - The parameters required to calculate the output amount.
	 * @returns {Promise<GetAmountOutData>} A promise that resolves to the output amount data.
	 */
	const getAmountOut = useCallback(
		async (params: GetAmountOutParams): Promise<GetAmountOutData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getAmountOut(params);
		},
		[moon],
	);

	/**
	 * Retrieves the output amounts for a given set of input parameters using the Lynex SDK.
	 *
	 * @param {GetAmountsOutParams} params - The parameters required to get the output amounts.
	 * @returns {Promise<GetAmountsOutData>} A promise that resolves to the output amounts data.
	 */
	const getAmountsOut = useCallback(
		async (params: GetAmountsOutParams): Promise<GetAmountsOutData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getAmountsOut(params);
		},
		[moon],
	);

	/**
	 * Retrieves the approved data using the Lynex SDK.
	 *
	 * @param params - The parameters required to get the approved data.
	 * @returns A promise that resolves to the approved data.
	 */
	const getApproved = useCallback(
		async (params: GetApprovedParams): Promise<GetApprovedData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getApproved(params);
		},
		[moon],
	);

	/**
	 * Retrieves asset information by its address using the Lynex SDK.
	 *
	 * @param address - The address of the asset to retrieve.
	 * @returns A promise that resolves to the asset data.
	 */
	const getAssetByAddress = useCallback(
		async (address: string): Promise<GetAssetByAddressData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getAssetByAddress(address);
		},
		[moon],
	);

	/**
	 * Fetches assets using the Lynex SDK.
	 *
	 * This function is memoized using `useCallback` and will only change if the `moon` dependency changes.
	 *
	 * @returns {Promise<GetAssetsData>} A promise that resolves to the assets data.
	 */
	const getAssets = useCallback(async (): Promise<GetAssetsData> => {
		const lynexSDK = getLynexSDK();
		return lynexSDK.getAssets();
	}, [moon]);

	/**
	 * Retrieves the balance of a specified account using the Lynex SDK.
	 *
	 * @param {GetBalanceOfParams4} params - The parameters required to get the balance.
	 * @returns {Promise<GetBalanceOfOutput>} A promise that resolves to the balance of the specified account.
	 */
	const getBalanceOf = useCallback(
		async (params: GetBalanceOfParams4): Promise<GetBalanceOfOutput> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getBalanceOf(params);
		},
		[moon],
	);

	/**
	 * Retrieves the balance of a specific NFT using the Lynex SDK.
	 *
	 * @param {GetBalanceOfNftParams} params - The parameters required to get the balance of the NFT.
	 * @returns {Promise<GetBalanceOfNftData>} A promise that resolves to the balance data of the NFT.
	 */
	const getBalanceOfNft = useCallback(
		async (params: GetBalanceOfNftParams): Promise<GetBalanceOfNftData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getBalanceOfNft(params);
		},
		[moon],
	);

	/**
	 * Retrieves the balance of an NFT at a specific point in time.
	 *
	 * @param params - The parameters required to get the balance of the NFT.
	 * @returns A promise that resolves to the balance data of the NFT.
	 */
	const getBalanceOfNftAt = useCallback(
		async (params: GetBalanceOfNftAtParams): Promise<GetBalanceOfNftAtData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getBalanceOfNftAt(params);
		},
		[moon],
	);

	/**
	 * Fetches delegate data using the Lynex SDK.
	 *
	 * @param params - The parameters required to fetch the delegates.
	 * @returns A promise that resolves to the delegate data.
	 */
	const getDelegates = useCallback(
		async (params: GetDelegatesParams): Promise<GetDelegatesData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getDelegates(params);
		},
		[moon],
	);

	/**
	 * Retrieves factory data using the Lynex SDK.
	 *
	 * @param {GetFactoryParams} params - The parameters required to get the factory data.
	 * @returns {Promise<GetFactoryData>} A promise that resolves to the factory data.
	 */
	const getFactory = useCallback(
		async (params: GetFactoryParams): Promise<GetFactoryData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getFactory(params);
		},
		[moon],
	);

	/**
	 * Retrieves the last voted data using the Lynex SDK.
	 *
	 * @param {GetLastVotedParams} params - The parameters required to fetch the last voted data.
	 * @returns {Promise<GetLastVotedData>} A promise that resolves to the last voted data.
	 */
	const getLastVoted = useCallback(
		async (params: GetLastVotedParams): Promise<GetLastVotedData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getLastVoted(params);
		},
		[moon],
	);

	/**
	 * Retrieves lock details using the Lynex SDK.
	 *
	 * @param params - The parameters required to get lock details.
	 * @returns A promise that resolves to the lock details data.
	 */
	const getLockDetails = useCallback(
		async (params: GetLockDetailsParams): Promise<GetLockDetailsData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getLockDetails(params);
		},
		[moon],
	);

	/**
	 * Retrieves the name using the Lynex SDK.
	 *
	 * @param params - The parameters required to get the name.
	 * @returns A promise that resolves to the result of the getName operation.
	 */
	const getName = useCallback(
		async (params: GetNameParams2): Promise<GetNameResult> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getName(params);
		},
		[moon],
	);

	/**
	 * Retrieves the owner of a specified entity using the Lynex SDK.
	 *
	 * @param {GetOwnerOfParams} params - The parameters required to get the owner information.
	 * @returns {Promise<GetOwnerOfData>} A promise that resolves to the owner data.
	 */
	const getOwnerOf = useCallback(
		async (params: GetOwnerOfParams): Promise<GetOwnerOfData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getOwnerOf(params);
		},
		[moon],
	);

	/**
	 * Fetches past votes using the Lynex SDK.
	 *
	 * @param {GetPastVotesParams} params - The parameters required to fetch past votes.
	 * @returns {Promise<GetPastVotesData>} A promise that resolves to the past votes data.
	 */
	const getPastVotes = useCallback(
		async (params: GetPastVotesParams): Promise<GetPastVotesData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getPastVotes(params);
		},
		[moon],
	);

	/**
	 * Retrieves pool data by its address using the Lynex SDK.
	 *
	 * @param address - The address of the pool to retrieve.
	 * @returns A promise that resolves to the pool data.
	 */
	const getPoolByAddress = useCallback(
		async (address: string): Promise<GetPoolByAddressData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getPoolByAddress(address);
		},
		[moon],
	);

	/**
	 * Fetches the pool data using the Lynex SDK.
	 *
	 * @returns {Promise<GetPoolsData>} A promise that resolves to the pool data.
	 */
	const getPools = useCallback(async (): Promise<GetPoolsData> => {
		const lynexSDK = getLynexSDK();
		return lynexSDK.getPools();
	}, [moon]);

	/**
	 * Fetches pools by the specified type using the Lynex SDK.
	 *
	 * @param type - The type of pools to fetch.
	 * @returns A promise that resolves to the data of the pools of the specified type.
	 */
	const getPoolsByType = useCallback(
		async (type: string): Promise<GetPoolsByTypeData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getPoolsByType(type);
		},
		[moon],
	);

	/**
	 * Retrieves the length of the pool vote using the Lynex SDK.
	 *
	 * @param {GetPoolVoteLengthParams} params - The parameters required to get the pool vote length.
	 * @returns {Promise<GetPoolVoteLengthData>} A promise that resolves to the pool vote length data.
	 */
	const getPoolVoteLength = useCallback(
		async (params: GetPoolVoteLengthParams): Promise<GetPoolVoteLengthData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getPoolVoteLength(params);
		},
		[moon],
	);

	/**
	 * Fetches the symbol information using the Lynex SDK.
	 *
	 * @param {GetSymbolParams2} params - The parameters required to fetch the symbol.
	 * @returns {Promise<GetSymbolResult>} A promise that resolves to the symbol result.
	 */
	const getSymbol = useCallback(
		async (params: GetSymbolParams2): Promise<GetSymbolResult> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getSymbol(params);
		},
		[moon],
	);

	/**
	 * Retrieves a token by its index using the Lynex SDK.
	 *
	 * @param params - The parameters required to get the token by index.
	 * @returns A promise that resolves to the token data.
	 */
	const getTokenByIndex = useCallback(
		async (params: GetTokenByIndexParams): Promise<GetTokenByIndexData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getTokenByIndex(params);
		},
		[moon],
	);

	/**
	 * Retrieves the token of an owner by index using the Lynex SDK.
	 *
	 * @param params - The parameters required to get the token of an owner by index.
	 * @returns A promise that resolves to the data of the token of the owner by index.
	 */
	const getTokenOfOwnerByIndex = useCallback(
		async (
			params: GetTokenOfOwnerByIndexParams,
		): Promise<GetTokenOfOwnerByIndexData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getTokenOfOwnerByIndex(params);
		},
		[moon],
	);

	/**
	 * Retrieves the token URI using the Lynex SDK.
	 *
	 * @param {GetTokenUriParams} params - The parameters required to get the token URI.
	 * @returns {Promise<GetTokenUriData>} A promise that resolves to the token URI data.
	 */
	const getTokenUri = useCallback(
		async (params: GetTokenUriParams): Promise<GetTokenUriData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getTokenUri(params);
		},
		[moon],
	);

	/**
	 * Fetches the top APR pools using the Lynex SDK.
	 *
	 * @param {GetTopAprPoolsParams} params - The parameters required to fetch the top APR pools.
	 * @returns {Promise<GetTopAprPoolsData>} A promise that resolves to the data of the top APR pools.
	 */
	const getTopAprPools = useCallback(
		async (params: GetTopAprPoolsParams): Promise<GetTopAprPoolsData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getTopAprPools(params);
		},
		[moon],
	);

	/**
	 * Retrieves the total number of NFTs minted using the Lynex SDK.
	 *
	 * @param params - The parameters required to get the total number of NFTs minted.
	 * @returns A promise that resolves to the data containing the total number of NFTs minted.
	 */
	const getTotalNftsMinted = useCallback(
		async (
			params: GetTotalNftsMintedParams,
		): Promise<GetTotalNftsMintedData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getTotalNftsMinted(params);
		},
		[moon],
	);

	/**
	 * Retrieves the total supply using the Lynex SDK.
	 *
	 * @param {GetTotalSupplyParams4} params - The parameters required to get the total supply.
	 * @returns {Promise<GetTotalSupplyOutput>} A promise that resolves to the total supply output.
	 */
	const getTotalSupply = useCallback(
		async (params: GetTotalSupplyParams4): Promise<GetTotalSupplyOutput> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getTotalSupply(params);
		},
		[moon],
	);

	/**
	 * Retrieves the total value locked (TVL) from the Lynex SDK.
	 *
	 * @returns {Promise<GetTotalValueLockedData>} A promise that resolves to the total value locked data.
	 */
	const getTotalValueLocked =
		useCallback(async (): Promise<GetTotalValueLockedData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getTotalValueLocked();
		}, [moon]);

	/**
	 * Retrieves the total weight using the Lynex SDK.
	 *
	 * @param {GetTotalWeightParams} params - The parameters required to get the total weight.
	 * @returns {Promise<GetTotalWeightData>} A promise that resolves to the total weight data.
	 */
	const getTotalWeight = useCallback(
		async (params: GetTotalWeightParams): Promise<GetTotalWeightData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getTotalWeight(params);
		},
		[moon],
	);

	/**
	 * Retrieves the vested payout data using the Lynex SDK.
	 *
	 * @param params - The parameters required to get the vested payout.
	 * @returns A promise that resolves to the vested payout data.
	 */
	const getVestedPayout = useCallback(
		async (params: GetVestedPayoutParams): Promise<GetVestedPayoutData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getVestedPayout(params);
		},
		[moon],
	);

	/**
	 * Retrieves the vested payout at a specific time using the Lynex SDK.
	 *
	 * @param params - The parameters required to get the vested payout at a specific time.
	 * @returns A promise that resolves to the vested payout data.
	 */
	const getVestedPayoutAtTime = useCallback(
		async (
			params: GetVestedPayoutAtTimeParams,
		): Promise<GetVestedPayoutAtTimeData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getVestedPayoutAtTime(params);
		},
		[moon],
	);

	/**
	 * Retrieves the vesting payout data using the Lynex SDK.
	 *
	 * @param {GetVestingPayoutParams} params - The parameters required to get the vesting payout.
	 * @returns {Promise<GetVestingPayoutData>} A promise that resolves to the vesting payout data.
	 */
	const getVestingPayout = useCallback(
		async (params: GetVestingPayoutParams): Promise<GetVestingPayoutData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getVestingPayout(params);
		},
		[moon],
	);

	/**
	 * Retrieves the vesting period data using the Lynex SDK.
	 *
	 * @param {GetVestingPeriodParams} params - The parameters required to get the vesting period.
	 * @returns {Promise<GetVestingPeriodData>} A promise that resolves to the vesting period data.
	 */
	const getVestingPeriod = useCallback(
		async (params: GetVestingPeriodParams): Promise<GetVestingPeriodData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getVestingPeriod(params);
		},
		[moon],
	);

	/**
	 * Fetches votes data using the Lynex SDK.
	 *
	 * @param params - The parameters required to fetch the votes.
	 * @returns A promise that resolves to the votes data.
	 */
	const getVotes = useCallback(
		async (params: GetVotesParams): Promise<GetVotesData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getVotes(params);
		},
		[moon],
	);

	/**
	 * Fetches weight data using the Lynex SDK.
	 *
	 * @param {GetWeightsParams} params - The parameters required to fetch the weights.
	 * @returns {Promise<GetWeightsData>} A promise that resolves to the weight data.
	 */
	const getWeights = useCallback(
		async (params: GetWeightsParams): Promise<GetWeightsData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getWeights(params);
		},
		[moon],
	);

	/**
	 * Retrieves WETH (Wrapped Ether) using the Lynex SDK.
	 *
	 * @param {GetWethParams2} params - The parameters required to get WETH.
	 * @returns {Promise<GetWethResult>} A promise that resolves to the result of the WETH retrieval.
	 */
	const getWeth = useCallback(
		async (params: GetWethParams2): Promise<GetWethResult> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getWeth(params);
		},
		[moon],
	);

	/**
	 * Checks if the given parameters are approved for all using the Lynex SDK.
	 *
	 * @param params - The parameters required to check approval status.
	 * @returns A promise that resolves to the result of the approval check.
	 */
	const isApprovedForAll = useCallback(
		async (
			params: IsApprovedForAllParams1,
		): Promise<IsApprovedForAllResult> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.isApprovedForAll(params);
		},
		[moon],
	);

	/**
	 * Determines if the given parameters correspond to a gauge using the Lynex SDK.
	 *
	 * @param {IsGaugeParams} params - The parameters to check if they correspond to a gauge.
	 * @returns {Promise<IsGaugeData>} A promise that resolves to the data indicating if the parameters correspond to a gauge.
	 */
	const isGauge = useCallback(
		async (params: IsGaugeParams): Promise<IsGaugeData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.isGauge(params);
		},
		[moon],
	);

	/**
	 * Checks if the given parameters are whitelisted using the Lynex SDK.
	 *
	 * @param params - The parameters to check for whitelisting.
	 * @returns A promise that resolves to the whitelisted data.
	 */
	const isWhitelisted = useCallback(
		async (params: IsWhitelistedParams): Promise<IsWhitelistedData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.isWhitelisted(params);
		},
		[moon],
	);

	return {
		addLiquidity,
		addLiquidityEth,
		approve,
		burn,
		calculateOptimalVoteDistribution,
		checkpoint,
		checkpointDelegatee,
		claim,
		claimBribes,
		claimFees,
		claimRewards,
		createDelegatedLockFor,
		createGauge,
		createLock,
		createLockFor,
		delegate,
		delegateBySig,
		distribute,
		getAmountOut,
		getAmountsOut,
		getApproved,
		getAssetByAddress,
		getAssets,
		getBalanceOf,
		getBalanceOfNft,
		getBalanceOfNftAt,
		getDelegates,
		getFactory,
		getLastVoted,
		getLockDetails,
		getName,
		getOwnerOf,
		getPastVotes,
		getPoolByAddress,
		getPools,
		getPoolsByType,
		getPoolVoteLength,
		getSymbol,
		getTokenByIndex,
		getTokenOfOwnerByIndex,
		getTokenUri,
		getTopAprPools,
		getTotalNftsMinted,
		getTotalSupply,
		getTotalValueLocked,
		getTotalWeight,
		getVestedPayout,
		getVestedPayoutAtTime,
		getVestingPayout,
		getVestingPeriod,
		getVotes,
		getWeights,
		getWeth,
		globalCheckpoint,
		increaseLockAmount,
		increaseUnlockTime,
		isApprovedForAll,
		isGauge,
		isWhitelisted,
		killGauge,
		merge,
		notifyRewardAmount,
		poke,
		reset,
		reviveGauge,
		safeTransferFrom,
		setApprovalForAll,
		setClaimApproval,
		setClaimApprovalForAll,
		split,
		swapExactEthForTokens,
		swapExactTokensForEth,
		swapExactTokensForTokens,
		transferFrom,
		unlockPermanent,
		vote,
		voteWithOptimalDistribution,
		whitelist,
	};
};
