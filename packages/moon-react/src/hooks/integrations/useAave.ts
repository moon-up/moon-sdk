import { useMoonAuth } from "@/context";
import { useMoonTransaction } from "@/hooks";
import type {
	AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult,
	AAVEv3RewardsAPIResponseString,
	AAVEv3RewardsAPIResponseStringArray,
	AAVEv3RewardsInputBody,
	AAVEv3UiIncentiveDataProviderAPIResponseFullReservesIncentiveData,
	AAVEv3UiPoolDataProviderAPIResponseUserReserveDataArray,
	AavePoolAPIResponseAavePoolExecuteFunctionResult,
	AavePoolAPIResponseAny,
	AavePoolInputBody,
	GetReservesDataParams,
	PoolAddressProviderRegistryAPIResponseAnyArray,
	Aave,
	AavEv3IncentiveDataProviderGetFullReservesDataParams,
	AavEv3IncentiveDataProviderGetUserReservesDataParams,
	Aavev3PoolAddressProviderRegistryGetAllATokensParams,
	AavEv3RewardsGetUserRewardsParams,
	AavEv3RewardsGetRewardsDataParams,
	AavEv3RewardsGetRewardsByAssetParams,
} from "@moonup/moon-api";
import { useCallback } from "react";
import {
	useAccount,
	useChainId,
	useSendTransaction,
	useSwitchChain,
} from "wagmi";
import { aaveConfig } from "./types";
/**
 * Custom hook to interact with the Aave protocol using the Moon SDK.
 * Provides various functions to supply, withdraw, borrow, repay, and manage rewards on the Aave platform.
 *
 * @returns {Object} An object containing various functions to interact with Aave:
 * - `supply`: Supplies assets to the Aave protocol.
 * - `withdraw`: Withdraws assets from the Aave protocol.
 * - `borrow`: Borrows assets from the Aave protocol.
 * - `repay`: Repays borrowed assets to the Aave protocol.
 * - `claimAllRewards`: Claims all rewards for a user.
 * - `claimRewardsOnBehalf`: Claims rewards on behalf of another user.
 * - `claimRewardsToSelf`: Claims rewards to the user's own account.
 * - `getRewardsByAsset`: Retrieves rewards by asset.
 * - `getRewardsData`: Retrieves rewards data.
 * - `getUserRewards`: Retrieves user rewards.
 * - `getAaveV3PoolAddress`: Retrieves the Aave V3 pool address for a given account and chain ID.
 * - `getAllATokens`: Retrieves all Aave tokens.
 * - `getUserAccountData`: Retrieves user account data.
 * - `getReserveData`: Retrieves reserve data.
 * - `getUserReservesData`: Retrieves user reserves data.
 * - `aaveConfig`: Configuration object for Aave.
 */
export const useAave = () => {
	const { handleTransaction } = useMoonTransaction();
	const { moon } = useMoonAuth();
	const { isConnected, address } = useAccount();
	const { sendTransactionAsync } = useSendTransaction();
	const chainId = useChainId();
	const { switchChain } = useSwitchChain();

	const getAaveSDK = useCallback((): Aave => {
		const aaveSDK = moon?.getAaveSDK();
		if (!aaveSDK) throw new Error("Moon aaveSDK not initialized");
		return aaveSDK;
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
	 * Retrieves the Aave V3 pool address for a given account and chain ID.
	 *
	 * @param accountName - The name of the account for which to retrieve the pool address.
	 * @param chainId - The ID of the blockchain network.
	 * @returns A promise that resolves to the pool address as a string, or undefined if not found.
	 * @throws Will throw an error if the chain ID is unsupported or if the pool address retrieval fails.
	 */
	const getAaveV3PoolAddress = useCallback(
		async (
			accountName: string,
			chainId: string,
		): Promise<string | undefined> => {
			const config = aaveConfig[chainId];
			if (!config) {
				throw new Error(`Unsupported chain ID: ${chainId}`);
			}
			const avveSDK = getAaveSDK();
			const poolAddress = await avveSDK.aavev3PoolAddressProviderGetPool({
				account: accountName,
				address: config.poolAddressesProvider,
				chainId,
			});

			if (!poolAddress.success) {
				throw new Error(
					`getAaveV3PoolAddress::Failed to get pool address: ${poolAddress.message}`,
				);
			}

			return poolAddress.data;
		},
		[moon],
	);

	/**
	 * Supplies assets to the Aave protocol.
	 *
	 * @param payload - The payload containing the account name and data for the supply transaction.
	 * @param payload.accountName - The name of the account supplying the assets.
	 * @param payload.data - The data required for the Aave supply transaction.
	 * @returns A promise that resolves to the result of the Aave supply transaction.
	 */
	const supply = useCallback(
		async (payload: {
			accountName: string;
			data: AavePoolInputBody;
		}): Promise<AavePoolAPIResponseAavePoolExecuteFunctionResult> => {
			return handleTransaction("supply", async () => {
				const aaveSDK = getAaveSDK();
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await aaveSDK.aavev3PoolSupply(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Withdraws assets from the Aave protocol.
	 *
	 * @param payload - The payload containing the account name and data for the withdrawal.
	 * @param payload.accountName - The name of the account from which to withdraw assets.
	 * @param payload.data - The data required for the Aave pool input.
	 * @returns A promise that resolves to the result of the Aave pool execute function.
	 */
	const withdraw = useCallback(
		async (payload: {
			accountName: string;
			data: AavePoolInputBody;
		}): Promise<AavePoolAPIResponseAavePoolExecuteFunctionResult> => {
			return handleTransaction("withdraw", async () => {
				const aaveSDK = getAaveSDK();
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await aaveSDK.aavev3PoolWithdraw(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Borrow assets using the Aave protocol.
	 *
	 * @param payload - The payload containing the account name and data for the borrow transaction.
	 * @param payload.accountName - The name of the account initiating the borrow transaction.
	 * @param payload.data - The data required for the Aave borrow transaction.
	 * @returns A promise that resolves to the result of the Aave borrow transaction.
	 */
	const borrow = useCallback(
		async (payload: {
			accountName: string;
			data: AavePoolInputBody;
		}): Promise<AavePoolAPIResponseAavePoolExecuteFunctionResult> => {
			return handleTransaction("borrow", async () => {
				const aaveSDK = getAaveSDK();
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await aaveSDK.aavev3PoolBorrow(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Repays a loan using the Aave SDK.
	 *
	 * @param payload - The payload containing the account name and data for the repayment.
	 * @param payload.accountName - The name of the account to repay from.
	 * @param payload.data - The data required for the Aave pool input body.
	 * @returns A promise that resolves to the result of the Aave pool execute function.
	 */
	const repay = useCallback(
		async (payload: {
			accountName: string;
			data: AavePoolInputBody;
		}): Promise<AavePoolAPIResponseAavePoolExecuteFunctionResult> => {
			return handleTransaction("repay", async () => {
				const aaveSDK = getAaveSDK();
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await aaveSDK.aavev3PoolRepay(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Claims all rewards for a given account using the Aave SDK.
	 *
	 * @param payload - The payload containing the account name and data required for claiming rewards.
	 * @param payload.accountName - The name of the account for which to claim rewards.
	 * @param payload.data - The data required by the Aave SDK to claim rewards.
	 * @returns A promise that resolves to the result of the claim rewards operation.
	 */
	const claimAllRewards = useCallback(
		async (payload: {
			accountName: string;
			data: AAVEv3RewardsInputBody;
		}): Promise<AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult> => {
			return handleTransaction("claimAllRewards", async () => {
				const aaveSDK = getAaveSDK();
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await aaveSDK.aavEv3RewardsClaimAllRewards(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Claims AAVE rewards on behalf of another account.
	 *
	 * @param payload - The payload containing the account name and reward data.
	 * @param payload.accountName - The name of the account on whose behalf the rewards are being claimed.
	 * @param payload.data - The data required to claim the rewards.
	 * @returns A promise that resolves to the result of the AAVE rewards claim execution.
	 */
	const claimRewardsOnBehalf = useCallback(
		async (payload: {
			accountName: string;
			data: AAVEv3RewardsInputBody;
		}): Promise<AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult> => {
			return handleTransaction("claimRewardsOnBehalf", async () => {
				const aaveSDK = getAaveSDK();
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await aaveSDK.aavEv3RewardsClaimRewardsOnBehalf(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Claims AAVE rewards to the user's own account.
	 *
	 * @param payload - The payload containing the account name and reward data.
	 * @param payload.accountName - The name of the account to claim rewards for.
	 * @param payload.data - The data required to claim the rewards.
	 * @returns A promise that resolves to the result of the AAVE rewards claim execution.
	 */
	const claimRewardsToSelf = useCallback(
		async (payload: {
			accountName: string;
			data: AAVEv3RewardsInputBody;
		}): Promise<AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult> => {
			return handleTransaction("claimRewardsToSelf", async () => {
				const aaveSDK = getAaveSDK();
				const preparedData = prepareTransaction(
					payload.accountName,
					payload.data,
				);
				const response = await aaveSDK.aavEv3RewardsClaimRewardsToSelf(
					payload.accountName,
					preparedData,
				);
				return handleWagmiTransaction(response);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Retrieves rewards by asset using the AAVE SDK.
	 *
	 * @param payload - The parameters required to get rewards by asset.
	 * @returns A promise that resolves to an array of AAVE v3 rewards API response strings.
	 */
	const getRewardsByAsset = useCallback(
		async (
			payload: AavEv3RewardsGetRewardsByAssetParams,
		): Promise<AAVEv3RewardsAPIResponseStringArray> => {
			return handleTransaction("getRewardsByAsset", async () => {
				const avveSDK = getAaveSDK();
				const response = await avveSDK.aavEv3RewardsGetRewardsByAsset(payload);
				return response;
			});
		},
		[moon],
	);

	/**
	 * Fetches rewards data from the AAVE SDK.
	 *
	 * @param payload - The parameters required to fetch the rewards data.
	 * @returns A promise that resolves to an array of strings representing the rewards data.
	 *
	 * @example
	 * ```typescript
	 * const rewardsData = await getRewardsData({
	 *   user: '0x123...',
	 *   assets: ['0xabc...', '0xdef...']
	 * });
	 * console.log(rewardsData);
	 * ```
	 */
	const getRewardsData = useCallback(
		async (
			payload: AavEv3RewardsGetRewardsDataParams,
		): Promise<AAVEv3RewardsAPIResponseStringArray> => {
			return handleTransaction("getRewardsData", async () => {
				const avveSDK = getAaveSDK();
				const response = await avveSDK.aavEv3RewardsGetRewardsData(payload);
				return response;
			});
		},
		[moon],
	);

	/**
	 * Fetches user rewards from the AAVE protocol.
	 *
	 * @param payload - The parameters required to fetch user rewards.
	 * @returns A promise that resolves to the AAVE v3 rewards API response as a string.
	 */
	const getUserRewards = useCallback(
		async (
			payload: AavEv3RewardsGetUserRewardsParams,
		): Promise<AAVEv3RewardsAPIResponseString> => {
			return handleTransaction("getUserRewards", async () => {
				const avveSDK = getAaveSDK();
				const response = await avveSDK.aavEv3RewardsGetUserRewards(payload);
				return response;
			});
		},
		[moon],
	);

	/**
	 * Fetches all Aave tokens using the provided payload.
	 *
	 * @param payload - The parameters required to fetch all Aave tokens.
	 * @returns A promise that resolves to an array of Aave token information.
	 */
	const getAllATokens = useCallback(
		async (
			payload: Aavev3PoolAddressProviderRegistryGetAllATokensParams,
		): Promise<PoolAddressProviderRegistryAPIResponseAnyArray> => {
			return handleTransaction("getAllATokens", async () => {
				const avveSDK = getAaveSDK();
				const response =
					await avveSDK.aavev3PoolAddressProviderRegistryGetAllATokens(payload);
				return response;
			});
		},
		[moon],
	);

	/**
	 * Fetches user account data from the Aave protocol.
	 *
	 * @param payload - An object containing the account and chainId.
	 * @param payload.account - The user's account address.
	 * @param payload.chainId - The chain ID of the network.
	 * @returns A promise that resolves to an AavePoolAPIResponseAny object containing the user's account data.
	 * @throws Will throw an error if the market pool address is not found.
	 */
	const getUserAccountData = useCallback(
		async (payload: {
			account: string;
			chainId: string;
		}): Promise<AavePoolAPIResponseAny> => {
			return handleTransaction("getUserAccountData", async () => {
				const avveSDK = getAaveSDK();
				const poolAdd = await getAaveV3PoolAddress(
					payload.account,
					payload.chainId,
				);
				if (!poolAdd) {
					throw new Error("Market pool Address not found");
				}
				const response = await avveSDK.aavev3PoolGetUserAccountData({
					account: payload.account,
					address: poolAdd,
					chainId: payload.chainId,
					user: payload.account,
				});
				return response;
			});
		},
		[moon],
	);

	/**
	 * Fetches reserve data from the Aave protocol.
	 *
	 * @param payload - The parameters required to fetch the reserve data.
	 * @returns A promise that resolves to the Aave pool API response.
	 *
	 * @example
	 * ```typescript
	 * const payload = { /* parameters *\/ };
	 * const reserveData = await getReserveData(payload);
	 * ```
	 */
	const getReserveData = useCallback(
		async (payload: GetReservesDataParams): Promise<AavePoolAPIResponseAny> => {
			return handleTransaction("getReserveData", async () => {
				const avveSDK = getAaveSDK();

				const response = await avveSDK.getReservesData(payload);
				return response;
			});
		},
		[moon],
	);

	/**
	 * Fetches the user's reserve data from the Aave protocol.
	 *
	 * @param payload - The parameters required to fetch the user's reserve data.
	 * @returns A promise that resolves to an array of user reserve data from the AAVE v3 UI Pool Data Provider API.
	 *
	 * @example
	 * ```typescript
	 * const payload: GetUserReservesDataParams = { /* parameters *\/ };
	 * const userReservesData = await getUserReservesData(payload);
	 * console.log(userReservesData);
	 * ```
	 */
	const getUserReservesData = useCallback(
		async (
			payload: AavEv3IncentiveDataProviderGetUserReservesDataParams,
		): Promise<AAVEv3UiPoolDataProviderAPIResponseUserReserveDataArray> => {
			return handleTransaction("getUserReservesData", async () => {
				const avveSDK = getAaveSDK();
				const response =
					await avveSDK.aavEv3IncentiveDataProviderGetUserReservesData(payload);
				return response;
			});
		},
		[moon],
	);

	const getReservesData = useCallback(
		async (payload: GetReservesDataParams): Promise<any> => {
			return handleTransaction("getReservesData", async () => {
				const avveSDK = getAaveSDK();
				const response = await avveSDK.getReservesData(payload);
				return response;
			});
		},
		[moon],
	);

	const getFullReservesIncentiveData = useCallback(
		async (
			payload: AavEv3IncentiveDataProviderGetFullReservesDataParams,
		): Promise<AAVEv3UiIncentiveDataProviderAPIResponseFullReservesIncentiveData> => {
			return handleTransaction("getFullReservesIncentiveData", async () => {
				const avveSDK = getAaveSDK();
				const response =
					await avveSDK.aavEv3IncentiveDataProviderGetFullReservesData(payload);
				return response;
			});
		},
		[moon],
	);

	return {
		supply,
		withdraw,
		borrow,
		repay,
		claimAllRewards,
		claimRewardsOnBehalf,
		claimRewardsToSelf,
		getRewardsByAsset,
		getRewardsData,
		getUserRewards,
		getAaveV3PoolAddress,
		getAllATokens,
		getUserAccountData,
		getReserveData,
		getUserReservesData,
		getReservesData,
		getFullReservesIncentiveData,
		aaveConfig,
	};
};
