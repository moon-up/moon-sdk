import { useMoonTransaction } from "@/hooks";
import type {
	AbstainResult,
	ApproveData,
	AttachResult,
	AttachTokenToGaugeResult,
	CalculateOptimalVoteDistributionOutput,
	CalculateOptimalVoteDistributionParams4,
	CheckpointResult,
	ClaimBribesOutput,
	ClaimFeesOutput,
	ClaimRewardsData,
	CreateGaugeOutput,
	CreateLockForResult,
	CreateLockOutput,
	DelegateBySigResult,
	DelegateOutput,
	DepositForData,
	DetachResult,
	DetachTokenFromGaugeResult,
	DistributeOutput,
	GetApprovedOutput,
	GetApprovedParams4,
	GetBalanceOfAtNftData,
	GetBalanceOfAtNftParams,
	GetBalanceOfData,
	GetBalanceOfNftOutput,
	GetBalanceOfNftParams4,
	GetBalanceOfParams8,
	GetDelegatesOutput,
	GetDelegatesParams4,
	GetFusionByAddressData,
	GetFusionsByTypeData,
	GetFusionsData,
	GetLastUserSlopeData,
	GetLastUserSlopeParams,
	GetLockedEndData,
	GetLockedEndParams,
	GetLockedParams2,
	GetLockedResult,
	GetOwnerOfOutput,
	GetOwnerOfParams4,
	GetPastTotalSupplyData,
	GetPastTotalSupplyParams,
	GetPastVotesOutput,
	GetPastVotesParams4,
	GetTokenUriOutput,
	GetTokenUriParams4,
	GetTopAprFusionsData,
	GetTopAprFusionsParams,
	GetTopPairsData,
	GetTopPairsParams,
	GetTopTokensData,
	GetTopTokensParams,
	GetTotalSupplyAtData,
	GetTotalSupplyAtParams,
	GetTotalSupplyAtTData,
	GetTotalSupplyAtTParams,
	GetTotalSupplyParams8,
	GetTotalSupplyResult,
	GetTotalValueLockedOutput,
	GetTotalWeightOutput,
	GetTotalWeightParams4,
	GetUserPointHistoryData,
	GetUserPointHistoryParams,
	GetUserPointHistoryTsData,
	GetUserPointHistoryTsParams,
	GetVotesOutput,
	GetVotesParams4,
	GetWeightsOutput,
	GetWeightsParams4,
	IncreaseLockAmountResult,
	IncreaseUnlockTimeOutput,
	IsApprovedForAllData,
	IsApprovedForAllParams5,
	IsGaugeOutput,
	IsGaugeParams4,
	IsWhitelistedOutput,
	IsWhitelistedParams4,
	KillGaugeOutput,
	LastVotedData,
	LastVotedParams,
	MergeOutput,
	NotifyRewardAmountOutput,
	PokeOutput,
	PoolVoteLengthData,
	PoolVoteLengthParams,
	ResetOutput,
	ReviveGaugeOutput,
	SafeTransferFromOutput,
	SetApprovalForAllResult,
	SplitOutput,
	TransferFromResult,
	VeNFTInputBody,
	VeTheNftVoterInputBody,
	VoteOutput,
	VoteWithOptimalDistributionInput,
	VoteWithOptimalDistributionOutput,
	VotingData,
	WhitelistOutput,
	WithdrawData,
} from "@moonup/moon-api";
import { useCallback } from "react";
import {
	useAccount,
	useChainId,
	useSendTransaction,
	useSwitchChain,
} from "wagmi";
import { useMoonAuth } from "../../context";
export const useThena = () => {
	const { handleTransaction } = useMoonTransaction();
	const { moon } = useMoonAuth();
	const { isConnected, address } = useAccount();
	const { sendTransactionAsync } = useSendTransaction();
	const chainId = useChainId();
	const { switchChain } = useSwitchChain();
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

	const getThenaSDK = () => {
		const thenaSDK = moon?.getThenaSDK();
		if (!thenaSDK) throw new Error("Moon Thena SDK not initialized");
		return thenaSDK;
	};

	const abstain = useCallback(
		(address: string, data: VeNFTInputBody): Promise<AbstainResult> => {
			return handleTransaction("abstain", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);
				const response = await thenaSDK.abstain(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const approve = useCallback(
		(address: string, data: VeNFTInputBody): Promise<ApproveData> => {
			return handleTransaction("approve", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);
				const response = await thenaSDK.approve(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const attach = useCallback(
		(address: string, data: VeNFTInputBody): Promise<AttachResult> => {
			return handleTransaction("attach", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);
				const response = await thenaSDK.attach(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const attachTokenToGauge = useCallback(
		(
			address: string,
			data: VeTheNftVoterInputBody,
		): Promise<AttachTokenToGaugeResult> => {
			return handleTransaction("attachTokenToGauge", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);
				const response = await thenaSDK.attachTokenToGauge(
					address,
					preparedData,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const calculateOptimalVoteDistribution = useCallback(
		(
			query: CalculateOptimalVoteDistributionParams4,
		): Promise<CalculateOptimalVoteDistributionOutput> => {
			return handleTransaction("calculateOptimalVoteDistribution", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.calculateOptimalVoteDistribution(query);
				return response.data;
			});
		},
		[moon],
	);

	const checkpoint = useCallback(
		(address: string, data: VeNFTInputBody): Promise<CheckpointResult> => {
			return handleTransaction("checkpoint", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);
				const response = await thenaSDK.checkpoint(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const claimBribes = useCallback(
		(
			address: string,
			data: VeTheNftVoterInputBody,
		): Promise<ClaimBribesOutput> => {
			return handleTransaction("claimBribes", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);
				const response = await thenaSDK.claimBribes(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const claimFees = useCallback(
		(
			address: string,
			data: VeTheNftVoterInputBody,
		): Promise<ClaimFeesOutput> => {
			return handleTransaction("claimFees", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);
				const response = await thenaSDK.claimFees(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const claimRewards = useCallback(
		(
			address: string,
			data: VeTheNftVoterInputBody,
		): Promise<ClaimRewardsData> => {
			return handleTransaction("claimRewards", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);
				const response = await thenaSDK.claimRewards(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const createGauge = useCallback(
		(
			address: string,
			data: VeTheNftVoterInputBody,
		): Promise<CreateGaugeOutput> => {
			return handleTransaction("createGauge", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);
				const response = await thenaSDK.createGauge(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const createLock = useCallback(
		(address: string, data: VeNFTInputBody): Promise<CreateLockOutput> => {
			return handleTransaction("createLock", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);
				const response = await thenaSDK.createLock(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const createLockFor = useCallback(
		(address: string, data: VeNFTInputBody): Promise<CreateLockForResult> => {
			return handleTransaction("createLockFor", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);
				const response = await thenaSDK.createLockFor(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const delegate = useCallback(
		(address: string, data: VeNFTInputBody): Promise<DelegateOutput> => {
			return handleTransaction("delegate", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);
				const response = await thenaSDK.delegate(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const delegateBySig = useCallback(
		(address: string, data: VeNFTInputBody): Promise<DelegateBySigResult> => {
			return handleTransaction("delegateBySig", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);

				const response = await thenaSDK.delegateBySig(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const depositFor = useCallback(
		(address: string, data: VeNFTInputBody): Promise<DepositForData> => {
			return handleTransaction("depositFor", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);
				const response = await thenaSDK.depositFor(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const detach = useCallback(
		(address: string, data: VeNFTInputBody): Promise<DetachResult> => {
			return handleTransaction("detach", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);
				const response = await thenaSDK.detach(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const detachTokenFromGauge = useCallback(
		(
			address: string,
			data: VeTheNftVoterInputBody,
		): Promise<DetachTokenFromGaugeResult> => {
			return handleTransaction("detachTokenFromGauge", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);
				const response = await thenaSDK.detachTokenFromGauge(
					address,
					preparedData,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const distribute = useCallback(
		(
			address: string,
			data: VeTheNftVoterInputBody,
		): Promise<DistributeOutput> => {
			return handleTransaction("distribute", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);
				const response = await thenaSDK.distribute(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const getApproved = useCallback(
		(params: GetApprovedParams4): Promise<GetApprovedOutput> => {
			return handleTransaction("getApproved", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.getApproved(params);
				return response.data;
			});
		},
		[moon],
	);

	const getBalanceOf = useCallback(
		(params: GetBalanceOfParams8): Promise<GetBalanceOfData> => {
			return handleTransaction("getBalanceOf", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.getBalanceOf(params);
				return response.data;
			});
		},
		[moon],
	);

	const getBalanceOfAtNft = useCallback(
		(params: GetBalanceOfAtNftParams): Promise<GetBalanceOfAtNftData> => {
			return handleTransaction("getBalanceOfAtNft", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.getBalanceOfAtNft(params);
				return response.data;
			});
		},
		[moon],
	);

	const getBalanceOfNft = useCallback(
		(params: GetBalanceOfNftParams4): Promise<GetBalanceOfNftOutput> => {
			return handleTransaction("getBalanceOfNft", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.getBalanceOfNft(params);
				return response.data;
			});
		},
		[moon],
	);

	const getDelegates = useCallback(
		(params: GetDelegatesParams4): Promise<GetDelegatesOutput> => {
			return handleTransaction("getDelegates", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.getDelegates(params);
				return response.data;
			});
		},
		[moon],
	);

	const getFusionByAddress = useCallback(
		(address: string): Promise<GetFusionByAddressData> => {
			return handleTransaction("getFusionByAddress", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.getFusionByAddress(address);
				return response.data;
			});
		},
		[moon],
	);

	const getFusions = useCallback((): Promise<GetFusionsData> => {
		return handleTransaction("getFusions", async () => {
			const thenaSDK = getThenaSDK();
			const response = await thenaSDK.getFusions();
			return response.data;
		});
	}, [moon]);

	const getFusionsByType = useCallback(
		(type: string): Promise<GetFusionsByTypeData> => {
			return handleTransaction("getFusionsByType", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.getFusionsByType(type);
				return response.data;
			});
		},
		[moon],
	);

	const getLastUserSlope = useCallback(
		(params: GetLastUserSlopeParams): Promise<GetLastUserSlopeData> => {
			return handleTransaction("getLastUserSlope", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.getLastUserSlope(params);
				return response.data;
			});
		},
		[moon],
	);

	const getLocked = useCallback(
		(params: GetLockedParams2): Promise<GetLockedResult> => {
			return handleTransaction("getLocked", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.getLocked(params);
				return response.data;
			});
		},
		[moon],
	);

	const getLockedEnd = useCallback(
		(params: GetLockedEndParams): Promise<GetLockedEndData> => {
			return handleTransaction("getLockedEnd", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.getLockedEnd(params);
				return response.data;
			});
		},
		[moon],
	);

	const getOwnerOf = useCallback(
		(params: GetOwnerOfParams4): Promise<GetOwnerOfOutput> => {
			return handleTransaction("getOwnerOf", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.getOwnerOf(params);
				return response.data;
			});
		},
		[moon],
	);

	const getPastTotalSupply = useCallback(
		(params: GetPastTotalSupplyParams): Promise<GetPastTotalSupplyData> => {
			return handleTransaction("getPastTotalSupply", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.getPastTotalSupply(params);
				return response.data;
			});
		},
		[moon],
	);

	const getPastVotes = useCallback(
		(params: GetPastVotesParams4): Promise<GetPastVotesOutput> => {
			return handleTransaction("getPastVotes", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.getPastVotes(params);
				return response.data;
			});
		},
		[moon],
	);

	const getTokenUri = useCallback(
		(params: GetTokenUriParams4): Promise<GetTokenUriOutput> => {
			return handleTransaction("getTokenUri", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.getTokenUri(params);
				return response.data;
			});
		},
		[moon],
	);

	const getTopAprFusions = useCallback(
		(params: GetTopAprFusionsParams): Promise<GetTopAprFusionsData> => {
			return handleTransaction("getTopAprFusions", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.getTopAprFusions(params);
				return response.data;
			});
		},
		[moon],
	);

	const getTopPairs = useCallback(
		(params: GetTopPairsParams): Promise<GetTopPairsData> => {
			return handleTransaction("getTopPairs", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.getTopPairs(params);
				return response.data;
			});
		},
		[moon],
	);

	const getTopTokens = useCallback(
		(params: GetTopTokensParams): Promise<GetTopTokensData> => {
			return handleTransaction("getTopTokens", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.getTopTokens(params);
				return response.data;
			});
		},
		[moon],
	);

	const getTotalSupply = useCallback(
		(params: GetTotalSupplyParams8): Promise<GetTotalSupplyResult> => {
			return handleTransaction("getTotalSupply", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.getTotalSupply(params);
				return response.data;
			});
		},
		[moon],
	);

	const getTotalSupplyAt = useCallback(
		(params: GetTotalSupplyAtParams): Promise<GetTotalSupplyAtData> => {
			return handleTransaction("getTotalSupplyAt", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.getTotalSupplyAt(params);
				return response.data;
			});
		},
		[moon],
	);

	const getTotalSupplyAtT = useCallback(
		(params: GetTotalSupplyAtTParams): Promise<GetTotalSupplyAtTData> => {
			return handleTransaction("getTotalSupplyAtT", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.getTotalSupplyAtT(params);
				return response.data;
			});
		},
		[moon],
	);

	const getTotalValueLocked =
		useCallback((): Promise<GetTotalValueLockedOutput> => {
			return handleTransaction("getTotalValueLocked", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.getTotalValueLocked();
				return response.data;
			});
		}, [moon]);

	const getTotalWeight = useCallback(
		(params: GetTotalWeightParams4): Promise<GetTotalWeightOutput> => {
			return handleTransaction("getTotalWeight", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.getTotalWeight(params);
				return response.data;
			});
		},
		[moon],
	);

	const getUserPointHistory = useCallback(
		(params: GetUserPointHistoryParams): Promise<GetUserPointHistoryData> => {
			return handleTransaction("getUserPointHistory", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.getUserPointHistory(params);
				return response.data;
			});
		},
		[moon],
	);

	const getUserPointHistoryTs = useCallback(
		(
			params: GetUserPointHistoryTsParams,
		): Promise<GetUserPointHistoryTsData> => {
			return handleTransaction("getUserPointHistoryTs", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.getUserPointHistoryTs(params);
				return response.data;
			});
		},
		[moon],
	);

	const getVotes = useCallback(
		(params: GetVotesParams4): Promise<GetVotesOutput> => {
			return handleTransaction("getVotes", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.getVotes(params);
				return response.data;
			});
		},
		[moon],
	);

	const getWeights = useCallback(
		(params: GetWeightsParams4): Promise<GetWeightsOutput> => {
			return handleTransaction("getWeights", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.getWeights(params);
				return response.data;
			});
		},
		[moon],
	);

	const increaseLockAmount = useCallback(
		(
			address: string,
			data: VeNFTInputBody,
		): Promise<IncreaseLockAmountResult> => {
			return handleTransaction("increaseLockAmount", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);
				const response = await thenaSDK.increaseLockAmount(
					address,
					preparedData,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const increaseUnlockTime = useCallback(
		(
			address: string,
			data: VeNFTInputBody,
		): Promise<IncreaseUnlockTimeOutput> => {
			return handleTransaction("increaseUnlockTime", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);

				const response = await thenaSDK.increaseUnlockTime(
					address,
					preparedData,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const isApprovedForAll = useCallback(
		(params: IsApprovedForAllParams5): Promise<IsApprovedForAllData> => {
			return handleTransaction("isApprovedForAll", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.isApprovedForAll(params);
				return response.data;
			});
		},
		[moon],
	);

	const isGauge = useCallback(
		(params: IsGaugeParams4): Promise<IsGaugeOutput> => {
			return handleTransaction("isGauge", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.isGauge(params);
				return response.data;
			});
		},
		[moon],
	);

	const isWhitelisted = useCallback(
		(params: IsWhitelistedParams4): Promise<IsWhitelistedOutput> => {
			return handleTransaction("isWhitelisted", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.isWhitelisted(params);
				return response.data;
			});
		},
		[moon],
	);

	const killGauge = useCallback(
		(
			address: string,
			data: VeTheNftVoterInputBody,
		): Promise<KillGaugeOutput> => {
			return handleTransaction("killGauge", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);

				const response = await thenaSDK.killGauge(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const lastVoted = useCallback(
		(params: LastVotedParams): Promise<LastVotedData> => {
			return handleTransaction("lastVoted", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.lastVoted(params);
				return response.data;
			});
		},
		[moon],
	);

	const merge = useCallback(
		(address: string, data: VeNFTInputBody): Promise<MergeOutput> => {
			return handleTransaction("merge", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);

				const response = await thenaSDK.merge(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const notifyRewardAmount = useCallback(
		(
			address: string,
			data: VeTheNftVoterInputBody,
		): Promise<NotifyRewardAmountOutput> => {
			return handleTransaction("notifyRewardAmount", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);

				const response = await thenaSDK.notifyRewardAmount(
					address,
					preparedData,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const poke = useCallback(
		(address: string, data: VeTheNftVoterInputBody): Promise<PokeOutput> => {
			return handleTransaction("poke", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);

				const response = await thenaSDK.poke(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const poolVoteLength = useCallback(
		(params: PoolVoteLengthParams): Promise<PoolVoteLengthData> => {
			return handleTransaction("poolVoteLength", async () => {
				const thenaSDK = getThenaSDK();
				const response = await thenaSDK.poolVoteLength(params);
				return response.data;
			});
		},
		[moon],
	);

	const reset = useCallback(
		(address: string, data: VeTheNftVoterInputBody): Promise<ResetOutput> => {
			return handleTransaction("reset", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);

				const response = await thenaSDK.reset(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const reviveGauge = useCallback(
		(
			address: string,
			data: VeTheNftVoterInputBody,
		): Promise<ReviveGaugeOutput> => {
			return handleTransaction("reviveGauge", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);

				const response = await thenaSDK.reviveGauge(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const safeTransferFrom = useCallback(
		(
			address: string,
			data: VeNFTInputBody,
		): Promise<SafeTransferFromOutput> => {
			return handleTransaction("safeTransferFrom", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);

				const response = await thenaSDK.safeTransferFrom(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const setApprovalForAll = useCallback(
		(
			address: string,
			data: VeNFTInputBody,
		): Promise<SetApprovalForAllResult> => {
			return handleTransaction("setApprovalForAll", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);

				const response = await thenaSDK.setApprovalForAll(
					address,
					preparedData,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const split = useCallback(
		(address: string, data: VeNFTInputBody): Promise<SplitOutput> => {
			return handleTransaction("split", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);

				const response = await thenaSDK.split(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const transferFrom = useCallback(
		(address: string, data: VeNFTInputBody): Promise<TransferFromResult> => {
			return handleTransaction("transferFrom", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);

				const response = await thenaSDK.transferFrom(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const vote = useCallback(
		(address: string, data: VeTheNftVoterInputBody): Promise<VoteOutput> => {
			return handleTransaction("vote", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);

				const response = await thenaSDK.vote(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const voteWithOptimalDistribution = useCallback(
		(
			address: string,
			data: VoteWithOptimalDistributionInput,
		): Promise<VoteWithOptimalDistributionOutput> => {
			return handleTransaction("voteWithOptimalDistribution", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);

				const response = await thenaSDK.voteWithOptimalDistribution(
					address,
					preparedData,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const voting = useCallback(
		(address: string, data: VeNFTInputBody): Promise<VotingData> => {
			return handleTransaction("voting", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);

				const response = await thenaSDK.voting(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const whitelist = useCallback(
		(
			address: string,
			data: VeTheNftVoterInputBody,
		): Promise<WhitelistOutput> => {
			return handleTransaction("whitelist", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);

				const response = await thenaSDK.whitelist(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	const withdraw = useCallback(
		(address: string, data: VeNFTInputBody): Promise<WithdrawData> => {
			return handleTransaction("withdraw", async () => {
				const thenaSDK = getThenaSDK();
				const preparedData = prepareTransaction(address, data);

				const response = await thenaSDK.withdraw(address, preparedData);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon],
	);

	return {
		abstain,
		approve,
		attach,
		attachTokenToGauge,
		calculateOptimalVoteDistribution,
		checkpoint,
		claimBribes,
		claimFees,
		claimRewards,
		createGauge,
		createLock,
		createLockFor,
		delegate,
		delegateBySig,
		depositFor,
		detach,
		detachTokenFromGauge,
		distribute,
		getApproved,
		getBalanceOf,
		getBalanceOfAtNft,
		getBalanceOfNft,
		getDelegates,
		getFusionByAddress,
		getFusions,
		getFusionsByType,
		getLastUserSlope,
		getLocked,
		getLockedEnd,
		getOwnerOf,
		getPastTotalSupply,
		getPastVotes,
		getTokenUri,
		getTopAprFusions,
		getTopPairs,
		getTopTokens,
		getTotalSupply,
		getTotalSupplyAt,
		getTotalSupplyAtT,
		getTotalValueLocked,
		getTotalWeight,
		getUserPointHistory,
		getUserPointHistoryTs,
		getVotes,
		getWeights,
		increaseLockAmount,
		increaseUnlockTime,
		isApprovedForAll,
		isGauge,
		isWhitelisted,
		killGauge,
		lastVoted,
		merge,
		notifyRewardAmount,
		poke,
		poolVoteLength,
		reset,
		reviveGauge,
		safeTransferFrom,
		setApprovalForAll,
		split,
		transferFrom,
		vote,
		voteWithOptimalDistribution,
		voting,
		whitelist,
		withdraw,
	};
};
