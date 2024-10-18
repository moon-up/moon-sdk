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

	// Voter methods
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

	// Data retrieval methods
	const calculateOptimalVoteDistribution = useCallback(
		async (
			params: CalculateOptimalVoteDistributionParams,
		): Promise<CalculateOptimalVoteDistributionData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.calculateOptimalVoteDistribution(params);
		},
		[moon],
	);

	const getAmountOut = useCallback(
		async (params: GetAmountOutParams): Promise<GetAmountOutData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getAmountOut(params);
		},
		[moon],
	);

	const getAmountsOut = useCallback(
		async (params: GetAmountsOutParams): Promise<GetAmountsOutData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getAmountsOut(params);
		},
		[moon],
	);

	const getApproved = useCallback(
		async (params: GetApprovedParams): Promise<GetApprovedData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getApproved(params);
		},
		[moon],
	);

	const getAssetByAddress = useCallback(
		async (address: string): Promise<GetAssetByAddressData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getAssetByAddress(address);
		},
		[moon],
	);

	const getAssets = useCallback(async (): Promise<GetAssetsData> => {
		const lynexSDK = getLynexSDK();
		return lynexSDK.getAssets();
	}, [moon]);

	const getBalanceOf = useCallback(
		async (params: GetBalanceOfParams4): Promise<GetBalanceOfOutput> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getBalanceOf(params);
		},
		[moon],
	);

	const getBalanceOfNft = useCallback(
		async (params: GetBalanceOfNftParams): Promise<GetBalanceOfNftData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getBalanceOfNft(params);
		},
		[moon],
	);

	const getBalanceOfNftAt = useCallback(
		async (params: GetBalanceOfNftAtParams): Promise<GetBalanceOfNftAtData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getBalanceOfNftAt(params);
		},
		[moon],
	);

	const getDelegates = useCallback(
		async (params: GetDelegatesParams): Promise<GetDelegatesData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getDelegates(params);
		},
		[moon],
	);

	const getFactory = useCallback(
		async (params: GetFactoryParams): Promise<GetFactoryData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getFactory(params);
		},
		[moon],
	);

	const getLastVoted = useCallback(
		async (params: GetLastVotedParams): Promise<GetLastVotedData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getLastVoted(params);
		},
		[moon],
	);

	const getLockDetails = useCallback(
		async (params: GetLockDetailsParams): Promise<GetLockDetailsData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getLockDetails(params);
		},
		[moon],
	);

	const getName = useCallback(
		async (params: GetNameParams2): Promise<GetNameResult> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getName(params);
		},
		[moon],
	);

	const getOwnerOf = useCallback(
		async (params: GetOwnerOfParams): Promise<GetOwnerOfData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getOwnerOf(params);
		},
		[moon],
	);

	const getPastVotes = useCallback(
		async (params: GetPastVotesParams): Promise<GetPastVotesData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getPastVotes(params);
		},
		[moon],
	);

	const getPoolByAddress = useCallback(
		async (address: string): Promise<GetPoolByAddressData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getPoolByAddress(address);
		},
		[moon],
	);

	const getPools = useCallback(async (): Promise<GetPoolsData> => {
		const lynexSDK = getLynexSDK();
		return lynexSDK.getPools();
	}, [moon]);

	const getPoolsByType = useCallback(
		async (type: string): Promise<GetPoolsByTypeData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getPoolsByType(type);
		},
		[moon],
	);

	const getPoolVoteLength = useCallback(
		async (params: GetPoolVoteLengthParams): Promise<GetPoolVoteLengthData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getPoolVoteLength(params);
		},
		[moon],
	);

	const getSymbol = useCallback(
		async (params: GetSymbolParams2): Promise<GetSymbolResult> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getSymbol(params);
		},
		[moon],
	);

	const getTokenByIndex = useCallback(
		async (params: GetTokenByIndexParams): Promise<GetTokenByIndexData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getTokenByIndex(params);
		},
		[moon],
	);

	const getTokenOfOwnerByIndex = useCallback(
		async (
			params: GetTokenOfOwnerByIndexParams,
		): Promise<GetTokenOfOwnerByIndexData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getTokenOfOwnerByIndex(params);
		},
		[moon],
	);

	const getTokenUri = useCallback(
		async (params: GetTokenUriParams): Promise<GetTokenUriData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getTokenUri(params);
		},
		[moon],
	);

	const getTopAprPools = useCallback(
		async (params: GetTopAprPoolsParams): Promise<GetTopAprPoolsData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getTopAprPools(params);
		},
		[moon],
	);

	const getTotalNftsMinted = useCallback(
		async (
			params: GetTotalNftsMintedParams,
		): Promise<GetTotalNftsMintedData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getTotalNftsMinted(params);
		},
		[moon],
	);

	const getTotalSupply = useCallback(
		async (params: GetTotalSupplyParams4): Promise<GetTotalSupplyOutput> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getTotalSupply(params);
		},
		[moon],
	);

	const getTotalValueLocked =
		useCallback(async (): Promise<GetTotalValueLockedData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getTotalValueLocked();
		}, [moon]);

	const getTotalWeight = useCallback(
		async (params: GetTotalWeightParams): Promise<GetTotalWeightData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getTotalWeight(params);
		},
		[moon],
	);

	const getVestedPayout = useCallback(
		async (params: GetVestedPayoutParams): Promise<GetVestedPayoutData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getVestedPayout(params);
		},
		[moon],
	);

	const getVestedPayoutAtTime = useCallback(
		async (
			params: GetVestedPayoutAtTimeParams,
		): Promise<GetVestedPayoutAtTimeData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getVestedPayoutAtTime(params);
		},
		[moon],
	);

	const getVestingPayout = useCallback(
		async (params: GetVestingPayoutParams): Promise<GetVestingPayoutData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getVestingPayout(params);
		},
		[moon],
	);

	const getVestingPeriod = useCallback(
		async (params: GetVestingPeriodParams): Promise<GetVestingPeriodData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getVestingPeriod(params);
		},
		[moon],
	);

	const getVotes = useCallback(
		async (params: GetVotesParams): Promise<GetVotesData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getVotes(params);
		},
		[moon],
	);

	const getWeights = useCallback(
		async (params: GetWeightsParams): Promise<GetWeightsData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getWeights(params);
		},
		[moon],
	);

	const getWeth = useCallback(
		async (params: GetWethParams2): Promise<GetWethResult> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.getWeth(params);
		},
		[moon],
	);

	const isApprovedForAll = useCallback(
		async (
			params: IsApprovedForAllParams1,
		): Promise<IsApprovedForAllResult> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.isApprovedForAll(params);
		},
		[moon],
	);

	const isGauge = useCallback(
		async (params: IsGaugeParams): Promise<IsGaugeData> => {
			const lynexSDK = getLynexSDK();
			return lynexSDK.isGauge(params);
		},
		[moon],
	);

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
