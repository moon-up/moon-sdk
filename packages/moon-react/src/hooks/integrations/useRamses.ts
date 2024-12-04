import { useMoonAuth } from "@/context";
import { useMoonTransaction } from "@/hooks";
import type {
	CalculateOptimalVoteDistributionParams2,
	GetAmountOutParams2,
	GetAmountsOutParams2,
	GetBalanceOfNftParams2,
	GetBalanceOfParams2,
	GetDelegatesParams2,
	GetFactoryParams2,
	GetLastVotedParams2,
	GetLockedParams,
	GetOwnerOfParams2,
	GetPastVotesParams2,
	GetReservesParams,
	GetTokenUriParams2,
	GetTopAprPoolsParams2,
	GetTotalSupplyParams2,
	GetTotalWeightParams2,
	GetVotesParams2,
	GetWeightsParams2,
	GetWethParams4,
	IsGaugeParams2,
	IsPairParams,
	IsWhitelistedParams2,
	PairForParams,
	QuoteAddLiquidityParams,
	QuoteRemoveLiquidityParams,
	Ramses,
	RamsesNFTInputBody,
	RamsesRouterInputBody,
	RamsesVoterInputBody,
	SortTokensParams,
	VoteWithOptimalDistributionBody,
} from "@moonup/moon-api";
import { useCallback } from "react";
import {
	useAccount,
	useChainId,
	useSendTransaction,
	useSwitchChain,
} from "wagmi";

/**
 * Custom hook to interact with the Ramses SDK.
 *
 * @returns {Object} An object containing various methods to interact with the Ramses SDK.
 *
 * @function abstain - Abstain from voting.
 * @function addLiquidity - Add liquidity to a pool.
 * @function addLiquidityEth - Add liquidity to a pool using ETH.
 * @function approve - Approve a transaction.
 * @function attach - Attach an NFT.
 * @function attachTokenToGauge - Attach a token to a gauge.
 * @function calculateOptimalVoteDistribution - Calculate the optimal vote distribution.
 * @function claimBribes - Claim bribes.
 * @function claimFees - Claim fees.
 * @function claimRewards - Claim rewards.
 * @function createGauge - Create a gauge.
 * @function createLock - Create a lock.
 * @function delegate - Delegate voting power.
 * @function detach - Detach an NFT.
 * @function detachTokenFromGauge - Detach a token from a gauge.
 * @function distribute - Distribute rewards.
 * @function getAmountOut - Get the amount out for a swap.
 * @function getAmountsOut - Get the amounts out for a swap.
 * @function getBalanceOf - Get the balance of a token.
 * @function getBalanceOfNft - Get the balance of an NFT.
 * @function getDelegates - Get the delegates.
 * @function getFactory - Get the factory information.
 * @function getInfo - Get general information.
 * @function getLastVoted - Get the last voted information.
 * @function getLocked - Get the locked tokens.
 * @function getOwnerOf - Get the owner of a token.
 * @function getPastVotes - Get past votes.
 * @function getPoolByAddress - Get a pool by its address.
 * @function getPools - Get all pools.
 * @function getPoolsByType - Get pools by type.
 * @function getReserves - Get the reserves of a pool.
 * @function getTokens - Get all tokens.
 * @function getTokenUri - Get the URI of a token.
 * @function getTopAprPools - Get the top APR pools.
 * @function getTotalSupply - Get the total supply of a token.
 * @function getTotalValueLocked - Get the total value locked.
 * @function getTotalWeight - Get the total weight.
 * @function getVotes - Get the votes.
 * @function getWeights - Get the weights.
 * @function getWeth - Get the WETH token.
 * @function increaseAmount - Increase the amount of a lock.
 * @function increaseUnlockTime - Increase the unlock time of a lock.
 * @function isGauge - Check if an address is a gauge.
 * @function isPair - Check if an address is a pair.
 * @function isWhitelisted - Check if an address is whitelisted.
 * @function killGauge - Kill a gauge.
 * @function merge - Merge NFTs.
 * @function notifyRewardAmount - Notify the reward amount.
 * @function pairFor - Get the pair for a token.
 * @function poke - Poke a gauge.
 * @function quoteAddLiquidity - Quote the amount of liquidity to add.
 * @function quoteRemoveLiquidity - Quote the amount of liquidity to remove.
 * @function removeLiquidity - Remove liquidity from a pool.
 * @function removeLiquidityEth - Remove liquidity from a pool using ETH.
 * @function reset - Reset a gauge.
 * @function reviveGauge - Revive a gauge.
 * @function sortTokens - Sort tokens.
 * @function split - Split an NFT.
 * @function swapExactEthForTokens - Swap exact ETH for tokens.
 * @function swapExactTokensForEth - Swap exact tokens for ETH.
 * @function swapExactTokensForTokens - Swap exact tokens for tokens.
 * @function transferFrom - Transfer a token from one address to another.
 * @function unsafeSwapExactTokensForTokens - Unsafely swap exact tokens for tokens.
 * @function vote - Vote on a proposal.
 * @function voteWithOptimalDistribution - Vote with optimal distribution.
 * @function whitelist - Whitelist an address.
 * @function withdraw - Withdraw tokens.
 */
export const useRamses = () => {
	const { handleTransaction } = useMoonTransaction();
	const { moon } = useMoonAuth();
	const { isConnected, address } = useAccount();
	const { sendTransactionAsync } = useSendTransaction();
	const chainId = useChainId();
	const { switchChain } = useSwitchChain();

	const getRamsesSDK = useCallback((): Ramses => {
		const ramsesSDK = moon?.getRamsesSDK();
		if (!ramsesSDK) throw new Error("Moon Ramses SDK not initialized");
		return ramsesSDK;
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

	/**
	 * Abstains from a transaction using the Ramses SDK.
	 *
	 * @param payload - The payload containing the address and data for the transaction.
	 * @param payload.address - The address to abstain from.
	 * @param payload.data - The data required for the Ramses NFT input body.
	 * @returns A promise that resolves when the transaction is handled.
	 */
	const abstain = useCallback(
		async (payload: { address: string; data: RamsesNFTInputBody }) =>
			handleTransaction("abstain", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.abstain(payload.address, preparedData);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Adds liquidity to the Ramses protocol.
	 *
	 * @param payload - The payload containing the address and data for the transaction.
	 * @param payload.address - The address to which liquidity is being added.
	 * @param payload.data - The data required by the Ramses router for the transaction.
	 * @returns A promise that resolves with the result of the transaction.
	 *
	 * @example
	 * ```typescript
	 * const payload = {
	 *   address: "0x123...",
	 *   data: {
	 *     // RamsesRouterInputBody data
	 *   }
	 * };
	 * await addLiquidity(payload);
	 * ```
	 */
	const addLiquidity = useCallback(
		async (payload: { address: string; data: RamsesRouterInputBody }) =>
			handleTransaction("addLiquidity", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.addLiquidity(
					payload.address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Adds liquidity to the ETH pool using the Ramses SDK.
	 *
	 * @param payload - The payload containing the address and data for the transaction.
	 * @param payload.address - The address to which liquidity is being added.
	 * @param payload.data - The data required for the Ramses router input.
	 * @returns A promise that resolves with the transaction response.
	 *
	 * @example
	 * ```typescript
	 * const payload = {
	 *   address: "0x123...",
	 *   data: {
	 *     // RamsesRouterInputBody data
	 *   }
	 * };
	 * await addLiquidityEth(payload);
	 * ```
	 */
	const addLiquidityEth = useCallback(
		async (payload: { address: string; data: RamsesRouterInputBody }) =>
			handleTransaction("addLiquidityEth", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.addLiquidityEth(
					payload.address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Approves a transaction using the Ramses SDK.
	 *
	 * @param payload - An object containing the address and data for the transaction.
	 * @param payload.address - The address to approve the transaction for.
	 * @param payload.data - The data required for the Ramses NFT input body.
	 * @returns A promise that resolves with the result of the transaction.
	 */
	const approve = useCallback(
		async (payload: { address: string; data: RamsesNFTInputBody }) =>
			handleTransaction("approve", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.approve(payload.address, preparedData);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Attaches a Ramses NFT to a specified address.
	 *
	 * @param payload - The payload containing the address and data for the Ramses NFT.
	 * @param payload.address - The address to which the Ramses NFT will be attached.
	 * @param payload.data - The data required for the Ramses NFT attachment.
	 * @returns A promise that resolves with the result of the transaction.
	 *
	 * @remarks
	 * This function uses the `handleTransaction` utility to manage the transaction process.
	 * It prepares the transaction data and then calls the `attach` method from the Ramses SDK.
	 * The response is then handled by the `handleWagmiTransaction` function.
	 *
	 * @example
	 * ```typescript
	 * const payload = {
	 *   address: "0x123...",
	 *   data: { /* RamsesNFTInputBody data *\/ }
	 * };
	 * await attach(payload);
	 * ```
	 */
	const attach = useCallback(
		async (payload: { address: string; data: RamsesNFTInputBody }) =>
			handleTransaction("attach", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.attach(payload.address, preparedData);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const attachTokenToGauge = useCallback(
		async (payload: { address: string; data: RamsesVoterInputBody }) =>
			handleTransaction("attachTokenToGauge", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.attachTokenToGauge(
					payload.address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const calculateOptimalVoteDistribution = useCallback(
		async (query: CalculateOptimalVoteDistributionParams2) =>
			handleTransaction("calculateOptimalVoteDistribution", async () => {
				const ramsesSDK = getRamsesSDK();
				const response =
					await ramsesSDK.calculateOptimalVoteDistribution(query);
				return response;
			}),
		[moon],
	);

	const claimBribes = useCallback(
		async (payload: { address: string; data: RamsesVoterInputBody }) =>
			handleTransaction("claimBribes", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.claimBribes(
					payload.address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const claimFees = useCallback(
		async (payload: { address: string; data: RamsesVoterInputBody }) =>
			handleTransaction("claimFees", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.claimFees(
					payload.address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const claimRewards = useCallback(
		async (payload: { address: string; data: RamsesVoterInputBody }) =>
			handleTransaction("claimRewards", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.claimRewards(
					payload.address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const createGauge = useCallback(
		async (payload: { address: string; data: RamsesVoterInputBody }) =>
			handleTransaction("createGauge", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.createGauge(
					payload.address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const createLock = useCallback(
		async (payload: { address: string; data: RamsesNFTInputBody }) =>
			handleTransaction("createLock", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.createLock(
					payload.address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const delegate = useCallback(
		async (payload: { address: string; data: RamsesNFTInputBody }) =>
			handleTransaction("delegate", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.delegate(
					payload.address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const detach = useCallback(
		async (payload: { address: string; data: RamsesNFTInputBody }) =>
			handleTransaction("detach", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.detach(payload.address, preparedData);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const detachTokenFromGauge = useCallback(
		async (payload: { address: string; data: RamsesVoterInputBody }) =>
			handleTransaction("detachTokenFromGauge", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.detachTokenFromGauge(
					payload.address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const distribute = useCallback(
		async (payload: { address: string; data: RamsesVoterInputBody }) =>
			handleTransaction("distribute", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.distribute(
					payload.address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const getAmountOut = useCallback(
		async (query: GetAmountOutParams2) =>
			handleTransaction("getAmountOut", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.getAmountOut(query);
			}),
		[moon],
	);

	const getAmountsOut = useCallback(
		async (query: GetAmountsOutParams2) =>
			handleTransaction("getAmountsOut", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.getAmountsOut(query);
			}),
		[moon],
	);

	const getBalanceOf = useCallback(
		async (query: GetBalanceOfParams2) =>
			handleTransaction("getBalanceOf", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.getBalanceOf(query);
			}),
		[moon],
	);

	const getBalanceOfNft = useCallback(
		async (query: GetBalanceOfNftParams2) =>
			handleTransaction("getBalanceOfNft", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.getBalanceOfNft(query);
			}),
		[moon],
	);

	const getDelegates = useCallback(
		async (query: GetDelegatesParams2) =>
			handleTransaction("getDelegates", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.getDelegates(query);
			}),
		[moon],
	);

	const getFactory = useCallback(
		async (query: GetFactoryParams2) =>
			handleTransaction("getFactory", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.getFactory(query);
			}),
		[moon],
	);

	const getInfo = useCallback(
		async () =>
			handleTransaction("getInfo", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.getInfo();
			}),
		[moon],
	);

	const getLastVoted = useCallback(
		async (query: GetLastVotedParams2) =>
			handleTransaction("getLastVoted", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.getLastVoted(query);
			}),
		[moon],
	);

	const getLocked = useCallback(
		async (query: GetLockedParams) =>
			handleTransaction("getLocked", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.getLocked(query);
			}),
		[moon],
	);

	const getOwnerOf = useCallback(
		async (query: GetOwnerOfParams2) =>
			handleTransaction("getOwnerOf", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.getOwnerOf(query);
			}),
		[moon],
	);

	const getPastVotes = useCallback(
		async (query: GetPastVotesParams2) =>
			handleTransaction("getPastVotes", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.getPastVotes(query);
			}),
		[moon],
	);

	const getPoolByAddress = useCallback(
		async (address: string) =>
			handleTransaction("getPoolByAddress", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.getPoolByAddress(address);
			}),
		[moon],
	);

	const getPools = useCallback(
		async () =>
			handleTransaction("getPools", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.getPools();
			}),
		[moon],
	);

	const getPoolsByType = useCallback(
		async (type: string) =>
			handleTransaction("getPoolsByType", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.getPoolsByType(type);
			}),
		[moon],
	);

	const getReserves = useCallback(
		async (query: GetReservesParams) =>
			handleTransaction("getReserves", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.getReserves(query);
			}),
		[moon],
	);

	const getTokens = useCallback(
		async () =>
			handleTransaction("getTokens", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.getTokens();
			}),
		[moon],
	);

	const getTokenUri = useCallback(
		async (query: GetTokenUriParams2) =>
			handleTransaction("getTokenUri", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.getTokenUri(query);
			}),
		[moon],
	);

	const getTopAprPools = useCallback(
		async (query: GetTopAprPoolsParams2) =>
			handleTransaction("getTopAprPools", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.getTopAprPools(query);
			}),
		[moon],
	);

	const getTotalSupply = useCallback(
		async (query: GetTotalSupplyParams2) =>
			handleTransaction("getTotalSupply", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.getTotalSupply(query);
			}),
		[moon],
	);

	const getTotalValueLocked = useCallback(
		async () =>
			handleTransaction("getTotalValueLocked", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.getTotalValueLocked();
			}),
		[moon],
	);

	const getTotalWeight = useCallback(
		async (query: GetTotalWeightParams2) =>
			handleTransaction("getTotalWeight", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.getTotalWeight(query);
			}),
		[moon],
	);

	const getVotes = useCallback(
		async (query: GetVotesParams2) =>
			handleTransaction("getVotes", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.getVotes(query);
			}),
		[moon],
	);

	const getWeights = useCallback(
		async (query: GetWeightsParams2) =>
			handleTransaction("getWeights", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.getWeights(query);
			}),
		[moon],
	);

	const getWeth = useCallback(
		async (query: GetWethParams4) =>
			handleTransaction("getWeth", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.getWeth(query);
			}),
		[moon],
	);

	const increaseAmount = useCallback(
		async (payload: { address: string; data: RamsesNFTInputBody }) =>
			handleTransaction("increaseAmount", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.increaseAmount(
					payload.address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const increaseUnlockTime = useCallback(
		async (payload: { address: string; data: RamsesNFTInputBody }) =>
			handleTransaction("increaseUnlockTime", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.increaseUnlockTime(
					payload.address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const isGauge = useCallback(
		async (query: IsGaugeParams2) =>
			handleTransaction("isGauge", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.isGauge(query);
			}),
		[moon],
	);

	const isPair = useCallback(
		async (query: IsPairParams) =>
			handleTransaction("isPair", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.isPair(query);
			}),
		[moon],
	);

	const isWhitelisted = useCallback(
		async (query: IsWhitelistedParams2) =>
			handleTransaction("isWhitelisted", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.isWhitelisted(query);
			}),
		[moon],
	);

	const killGauge = useCallback(
		async (payload: { address: string; data: RamsesVoterInputBody }) =>
			handleTransaction("killGauge", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.killGauge(
					payload.address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const merge = useCallback(
		async (payload: { address: string; data: RamsesNFTInputBody }) =>
			handleTransaction("merge", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.merge(payload.address, preparedData);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const notifyRewardAmount = useCallback(
		async (payload: { address: string; data: RamsesVoterInputBody }) =>
			handleTransaction("notifyRewardAmount", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.notifyRewardAmount(
					payload.address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const pairFor = useCallback(
		async (query: PairForParams) =>
			handleTransaction("pairFor", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.pairFor(query);
			}),
		[moon],
	);

	const poke = useCallback(
		async (payload: { address: string; data: RamsesVoterInputBody }) =>
			handleTransaction("poke", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.poke(payload.address, preparedData);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const quoteAddLiquidity = useCallback(
		async (query: QuoteAddLiquidityParams) =>
			handleTransaction("quoteAddLiquidity", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.quoteAddLiquidity(query);
			}),
		[moon],
	);

	const quoteRemoveLiquidity = useCallback(
		async (query: QuoteRemoveLiquidityParams) =>
			handleTransaction("quoteRemoveLiquidity", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.quoteRemoveLiquidity(query);
			}),
		[moon],
	);

	const removeLiquidity = useCallback(
		async (payload: { address: string; data: RamsesRouterInputBody }) =>
			handleTransaction("removeLiquidity", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.removeLiquidity(
					payload.address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const removeLiquidityEth = useCallback(
		async (payload: { address: string; data: RamsesRouterInputBody }) =>
			handleTransaction("removeLiquidityEth", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.removeLiquidityEth(
					payload.address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const reset = useCallback(
		async (payload: { address: string; data: RamsesVoterInputBody }) =>
			handleTransaction("reset", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.reset(payload.address, preparedData);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const reviveGauge = useCallback(
		async (payload: { address: string; data: RamsesVoterInputBody }) =>
			handleTransaction("reviveGauge", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.reviveGauge(
					payload.address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const sortTokens = useCallback(
		async (query: SortTokensParams) =>
			handleTransaction("sortTokens", async () => {
				const ramsesSDK = getRamsesSDK();
				return ramsesSDK.sortTokens(query);
			}),
		[moon],
	);

	const split = useCallback(
		async (payload: { address: string; data: RamsesNFTInputBody }) =>
			handleTransaction("split", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.split(payload.address, preparedData);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const swapExactEthForTokens = useCallback(
		async (payload: { address: string; data: RamsesRouterInputBody }) =>
			handleTransaction("swapExactEthForTokens", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.swapExactEthForTokens(
					payload.address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const swapExactTokensForEth = useCallback(
		async (payload: { address: string; data: RamsesRouterInputBody }) =>
			handleTransaction("swapExactTokensForEth", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.swapExactTokensForEth(
					payload.address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const swapExactTokensForTokens = useCallback(
		async (payload: { address: string; data: RamsesRouterInputBody }) =>
			handleTransaction("swapExactTokensForTokens", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.swapExactTokensForTokens(
					payload.address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const transferFrom = useCallback(
		async (payload: { address: string; data: RamsesNFTInputBody }) =>
			handleTransaction("transferFrom", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.transferFrom(
					payload.address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const unsafeSwapExactTokensForTokens = useCallback(
		async (payload: { address: string; data: RamsesRouterInputBody }) =>
			handleTransaction("unsafeSwapExactTokensForTokens", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.unsafeSwapExactTokensForTokens(
					payload.address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const vote = useCallback(
		async (payload: { address: string; data: RamsesVoterInputBody }) =>
			handleTransaction("vote", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.vote(payload.address, preparedData);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const voteWithOptimalDistribution = useCallback(
		async (payload: {
			address: string;
			data: VoteWithOptimalDistributionBody;
		}) =>
			handleTransaction("voteWithOptimalDistribution", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.voteWithOptimalDistribution(
					payload.address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const whitelist = useCallback(
		async (payload: { address: string; data: RamsesVoterInputBody }) =>
			handleTransaction("whitelist", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.whitelist(
					payload.address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	const withdraw = useCallback(
		async (payload: { address: string; data: RamsesNFTInputBody }) =>
			handleTransaction("withdraw", async () => {
				const ramsesSDK = getRamsesSDK();
				const preparedData = prepareTransaction(payload.address, payload.data);
				const response = await ramsesSDK.withdraw(
					payload.address,
					preparedData,
				);
				return handleWagmiTransaction(response);
			}),
		[moon, isConnected, sendTransactionAsync],
	);

	return {
		abstain,
		addLiquidity,
		addLiquidityEth,
		approve,
		attach,
		attachTokenToGauge,
		calculateOptimalVoteDistribution,
		claimBribes,
		claimFees,
		claimRewards,
		createGauge,
		createLock,
		delegate,
		detach,
		detachTokenFromGauge,
		distribute,
		getAmountOut,
		getAmountsOut,
		getBalanceOf,
		getBalanceOfNft,
		getDelegates,
		getFactory,
		getInfo,
		getLastVoted,
		getLocked,
		getOwnerOf,
		getPastVotes,
		getPoolByAddress,
		getPools,
		getPoolsByType,
		getReserves,
		getTokens,
		getTokenUri,
		getTopAprPools,
		getTotalSupply,
		getTotalValueLocked,
		getTotalWeight,
		getVotes,
		getWeights,
		getWeth,
		increaseAmount,
		increaseUnlockTime,
		isGauge,
		isPair,
		isWhitelisted,
		killGauge,
		merge,
		notifyRewardAmount,
		pairFor,
		poke,
		quoteAddLiquidity,
		quoteRemoveLiquidity,
		removeLiquidity,
		removeLiquidityEth,
		reset,
		reviveGauge,
		sortTokens,
		split,
		swapExactEthForTokens,
		swapExactTokensForEth,
		swapExactTokensForTokens,
		transferFrom,
		unsafeSwapExactTokensForTokens,
		vote,
		voteWithOptimalDistribution,
		whitelist,
		withdraw,
	};
};
