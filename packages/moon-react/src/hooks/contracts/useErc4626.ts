import { useMoonTransaction } from "@/hooks";
import type {
	Erc4626,
	Erc4626GetErc4626AllowanceData,
	Erc4626GetErc4626AllowanceParams,
	Erc4626GetErc4626AssetData,
	Erc4626GetErc4626AssetParams,
	Erc4626GetErc4626ConvertToAssetsData,
	Erc4626GetErc4626ConvertToAssetsParams,
	Erc4626GetErc4626ConvertToSharesData,
	Erc4626GetErc4626ConvertToSharesParams,
	Erc4626GetErc4626MaxDepositData,
	Erc4626GetErc4626MaxDepositParams,
	Erc4626GetErc4626MaxMintData,
	Erc4626GetErc4626MaxMintParams,
	Erc4626GetErc4626MaxRedeemData,
	Erc4626GetErc4626MaxRedeemParams,
	Erc4626GetErc4626MaxWithdrawData,
	Erc4626GetErc4626MaxWithdrawParams,
	Erc4626GetErc4626PreviewDepositData,
	Erc4626GetErc4626PreviewDepositParams,
	Erc4626GetErc4626PreviewMintData,
	Erc4626GetErc4626PreviewMintParams,
	Erc4626GetErc4626PreviewRedeemData,
	Erc4626GetErc4626PreviewRedeemParams,
	Erc4626GetErc4626PreviewWithdrawData,
	Erc4626GetErc4626PreviewWithdrawParams,
	Erc4626GetErc4626TotalAssetsData,
	Erc4626GetErc4626TotalAssetsParams,
	Erc4626GetErc4626TotalSupplyData,
	Erc4626GetErc4626TotalSupplyParams,
	InputBody,
} from "@moonup/moon-api";
import { useCallback } from "react";
import {
	useAccount,
	useChainId,
	useSendTransaction,
	useSwitchChain,
} from "wagmi";
import { useMoonAuth } from "../../context";

/**
 * Custom hook to interact with ERC-4626 contracts using the Moon SDK.
 *
 * @returns {Object} An object containing various methods to interact with ERC-4626 contracts:
 * - `approve`: Approves a specified address to spend tokens.
 * - `deposit`: Deposits tokens into the ERC-4626 contract.
 * - `getAllowance`: Retrieves the allowance of a specified address.
 * - `getAsset`: Retrieves asset information.
 * - `getBalanceOf`: Retrieves the balance of a specified address.
 * - `getConvertToAssets`: Converts shares to assets.
 * - `getConvertToShares`: Converts assets to shares.
 * - `getMaxDeposit`: Retrieves the maximum deposit amount.
 * - `getMaxMint`: Retrieves the maximum mint amount.
 * - `getMaxRedeem`: Retrieves the maximum redeem amount.
 * - `getMaxWithdraw`: Retrieves the maximum withdraw amount.
 * - `getPreviewDeposit`: Previews the deposit amount.
 * - `getPreviewMint`: Previews the mint amount.
 * - `getPreviewRedeem`: Previews the redeem amount.
 * - `getPreviewWithdraw`: Previews the withdraw amount.
 * - `getTotalAssets`: Retrieves the total assets.
 * - `getTotalSupply`: Retrieves the total supply.
 * - `mint`: Mints new tokens.
 * - `redeem`: Redeems tokens.
 * - `transfer`: Transfers tokens to a specified address.
 * - `transferFrom`: Transfers tokens from a specified address.
 * - `withdraw`: Withdraws tokens from the ERC-4626 contract.
 */
export const useErc4626 = () => {
	const { moon } = useMoonAuth();

	const { handleTransaction } = useMoonTransaction();
	const { isConnected, address } = useAccount();
	const { sendTransactionAsync } = useSendTransaction();
	const chainId = useChainId();
	const { switchChain } = useSwitchChain();

	const getErc4626SDK = (): Erc4626 => {
		const erc4626SDK = moon?.getErc4626SDK();
		if (!erc4626SDK) throw new Error("Moon SDK not initialized");
		return erc4626SDK;
	};

	/**
	 * Approves a transaction for the ERC-4626 contract.
	 *
	 * @param {string} address - The address to approve the transaction for.
	 * @param {InputBody} data - The input data required for the approval.
	 * @returns {Promise<ApproveResult>} - A promise that resolves to the result of the approval.
	 */
	const approve = useCallback(
		async (address: string, data: InputBody) => {
			return handleTransaction("approveErc4626", async () => {
				const erc4626SDK = getErc4626SDK();
				const preparedTransaction = prepareTransaction(address, data);
				const response = await erc4626SDK.erc4626ApproveErc4626(
					address,
					preparedTransaction,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	const prepareTransaction = (account: string, transaction: InputBody) => {
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
	 * Deposits data into an ERC-4626 contract.
	 *
	 * @param {string} address - The address of the ERC-4626 contract.
	 * @param {InputBody} data - The data to be deposited.
	 * @returns {Promise<DepositData>} A promise that resolves to the deposit data.
	 */
	const deposit = useCallback(
		async (address: string, data: InputBody) => {
			return handleTransaction("depositErc4626", async () => {
				const erc4626SDK = getErc4626SDK();
				const preparedTransaction = prepareTransaction(address, data);
				const response = await erc4626SDK.erc4626DepositToErc4626(
					address,
					preparedTransaction,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Retrieves the allowance for a given set of parameters using the ERC-4626 SDK.
	 *
	 * @param {GetAllowanceParams2} params - The parameters required to get the allowance.
	 * @returns {Promise<GetAllowanceResult>} A promise that resolves to the allowance result.
	 *
	 * @example
	 * const params = { /* parameters here *\/ };
	 * const allowance = await getAllowance(params);
	 */
	const getAllowance = useCallback(
		async (
			params: Erc4626GetErc4626AllowanceParams,
		): Promise<Erc4626GetErc4626AllowanceData> => {
			return handleTransaction("getAllowanceErc4626", async () => {
				const erc4626SDK = getErc4626SDK();
				const response = await erc4626SDK.erc4626GetErc4626Allowance(params);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Retrieves asset data using the ERC-4626 SDK.
	 *
	 * @param {GetAssetParams} params - The parameters required to fetch the asset data.
	 * @returns {Promise<GetAssetData>} A promise that resolves to the asset data.
	 *
	 * @example
	 * const assetData = await getAsset({ assetId: '123' });
	 *
	 * @remarks
	 * This function uses the `handleTransaction` utility to manage the transaction process.
	 * It relies on the `getErc4626SDK` function to obtain an instance of the ERC-4626 SDK.
	 */
	const getAsset = useCallback(
		async (
			params: Erc4626GetErc4626AssetParams,
		): Promise<Erc4626GetErc4626AssetData> => {
			return handleTransaction("getAssetErc4626", async () => {
				const erc4626SDK = getErc4626SDK();
				const response = await erc4626SDK.erc4626GetErc4626Asset(params);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Retrieves the balance of a specific ERC-4626 token for a given set of parameters.
	 *
	 * @param params - The parameters required to get the balance, encapsulated in a `GetBalanceOfParams2` object.
	 * @returns A promise that resolves to a `GetBalanceOfResult` containing the balance data.
	 *
	 * @remarks
	 * This function uses the `handleTransaction` utility to manage the transaction lifecycle and error handling.
	 * It leverages the `erc4626SDK` to interact with the ERC-4626 token contract.
	 *
	 * @example
	 * ```typescript
	 * const params: GetBalanceOfParams2 = { /* parameters here *\/ };
	 * const balance = await getBalanceOf(params);
	 * console.log(balance);
	 * ```
	 */
	const getBalanceOf = useCallback(
		async (
			params: Erc4626GetErc4626AssetParams,
		): Promise<Erc4626GetErc4626AssetData> => {
			return handleTransaction("getAssetErc4626", async () => {
				const erc4626SDK = getErc4626SDK();
				const response = await erc4626SDK.erc4626GetErc4626Asset(params);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Retrieves the converted assets using the ERC-4626 SDK.
	 *
	 * @param params - The parameters required to get the converted assets.
	 * @returns A promise that resolves to the data of the converted assets.
	 *
	 * @example
	 * ```typescript
	 * const params: GetConvertToAssetsParams = { /* parameters *\/ };
	 * const data = await getConvertToAssets(params);
	 * console.log(data);
	 * ```
	 */
	const getConvertToAssets = useCallback(
		async (
			params: Erc4626GetErc4626ConvertToAssetsParams,
		): Promise<Erc4626GetErc4626ConvertToAssetsData> => {
			return handleTransaction("getConvertToAssetsErc4626", async () => {
				const erc4626SDK = getErc4626SDK();
				const response =
					await erc4626SDK.erc4626GetErc4626ConvertToAssets(params);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Retrieves the conversion to shares data for the given parameters.
	 *
	 * @param params - The parameters required to get the conversion to shares data.
	 * @returns A promise that resolves to the conversion to shares data.
	 *
	 * @example
	 * ```typescript
	 * const params: GetConvertToSharesParams = { /* parameters *\/ };
	 * const data = await getConvertToShares(params);
	 * console.log(data);
	 * ```
	 */
	const getConvertToShares = useCallback(
		async (
			params: Erc4626GetErc4626ConvertToSharesParams,
		): Promise<Erc4626GetErc4626ConvertToSharesData> => {
			return handleTransaction("getConvertToSharesErc4626", async () => {
				const erc4626SDK = getErc4626SDK();
				const response =
					await erc4626SDK.erc4626GetErc4626ConvertToShares(params);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Retrieves the maximum deposit amount for an ERC-4626 contract.
	 *
	 * @param {GetMaxDepositParams} params - The parameters required to get the maximum deposit.
	 * @returns {Promise<GetMaxDepositData>} A promise that resolves to the maximum deposit data.
	 *
	 * @example
	 * const params = { /* parameters here *\/ };
	 * const maxDepositData = await getMaxDeposit(params);
	 * console.log(maxDepositData);
	 */
	const getMaxDeposit = useCallback(
		async (
			params: Erc4626GetErc4626MaxDepositParams,
		): Promise<Erc4626GetErc4626MaxDepositData> => {
			return handleTransaction("getMaxDepositErc4626", async () => {
				const erc4626SDK = getErc4626SDK();
				const response = await erc4626SDK.erc4626GetErc4626MaxDeposit(params);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Retrieves the maximum amount of tokens that can be minted for a given set of parameters.
	 *
	 * @param {GetMaxMintParams} params - The parameters required to get the maximum mintable tokens.
	 * @returns {Promise<GetMaxMintData>} A promise that resolves to the data containing the maximum mintable tokens.
	 *
	 * @example
	 * const params = { /* parameters here *\/ };
	 * const maxMintData = await getMaxMint(params);
	 * console.log(maxMintData);
	 */
	const getMaxMint = useCallback(
		async (
			params: Erc4626GetErc4626MaxMintParams,
		): Promise<Erc4626GetErc4626MaxMintData> => {
			return handleTransaction("getMaxMintErc4626", async () => {
				const erc4626SDK = getErc4626SDK();
				const response = await erc4626SDK.erc4626GetErc4626MaxMint(params);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Retrieves the maximum amount of tokens that can be redeemed from an ERC-4626 contract.
	 *
	 * @param {GetMaxRedeemParams} params - The parameters required to get the maximum redeemable amount.
	 * @returns {Promise<GetMaxRedeemData>} A promise that resolves to the data containing the maximum redeemable amount.
	 *
	 * @example
	 * const params = { /* parameters here *\/ };
	 * const maxRedeemData = await getMaxRedeem(params);
	 * console.log(maxRedeemData);
	 */
	const getMaxRedeem = useCallback(
		async (
			params: Erc4626GetErc4626MaxRedeemParams,
		): Promise<Erc4626GetErc4626MaxRedeemData> => {
			return handleTransaction("getMaxRedeemErc4626", async () => {
				const erc4626SDK = getErc4626SDK();
				const response = await erc4626SDK.erc4626GetErc4626MaxRedeem(params);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Retrieves the maximum amount that can be withdrawn from an ERC-4626 contract.
	 *
	 * @param {GetMaxWithdrawParams} params - The parameters required to get the maximum withdrawable amount.
	 * @returns {Promise<GetMaxWithdrawData>} A promise that resolves to the data containing the maximum withdrawable amount.
	 *
	 * @example
	 * const params = { /* parameters here *\/ };
	 * const maxWithdrawData = await getMaxWithdraw(params);
	 * console.log(maxWithdrawData);
	 */
	const getMaxWithdraw = useCallback(
		async (
			params: Erc4626GetErc4626MaxWithdrawParams,
		): Promise<Erc4626GetErc4626MaxWithdrawData> => {
			return handleTransaction("getMaxWithdrawErc4626", async () => {
				const erc4626SDK = getErc4626SDK();
				const response = await erc4626SDK.erc4626GetErc4626MaxWithdraw(params);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Fetches a preview of the deposit for ERC-4626 compliant tokens.
	 *
	 * @param params - The parameters required to get the preview deposit.
	 * @returns A promise that resolves to the preview deposit data.
	 *
	 * @example
	 * ```typescript
	 * const params: GetPreviewDepositParams = { /* parameters here *\/ };
	 * const previewData = await getPreviewDeposit(params);
	 * console.log(previewData);
	 * ```
	 */
	const getPreviewDeposit = useCallback(
		async (
			params: Erc4626GetErc4626PreviewDepositParams,
		): Promise<Erc4626GetErc4626PreviewDepositData> => {
			return handleTransaction("getPreviewDepositErc4626", async () => {
				const erc4626SDK = getErc4626SDK();
				const response =
					await erc4626SDK.erc4626GetErc4626PreviewDeposit(params);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Fetches the preview mint data for ERC-4626 tokens.
	 *
	 * @param {GetPreviewMintParams} params - The parameters required to get the preview mint data.
	 * @returns {Promise<GetPreviewMintData>} A promise that resolves to the preview mint data.
	 *
	 * @example
	 * ```typescript
	 * const params: GetPreviewMintParams = { /* parameters here *\/ };
	 * const previewMintData = await getPreviewMint(params);
	 * console.log(previewMintData);
	 * ```
	 */
	const getPreviewMint = useCallback(
		async (
			params: Erc4626GetErc4626PreviewMintParams,
		): Promise<Erc4626GetErc4626PreviewMintData> => {
			return handleTransaction("getPreviewMintErc4626", async () => {
				const erc4626SDK = getErc4626SDK();
				const response = await erc4626SDK.erc4626GetErc4626PreviewMint(params);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Retrieves a preview of the redeem operation for ERC-4626 tokens.
	 *
	 * @param {GetPreviewRedeemParams} params - The parameters required to get the preview redeem data.
	 * @returns {Promise<GetPreviewRedeemData>} A promise that resolves to the preview redeem data.
	 *
	 * @example
	 * const params = { /* parameters for preview redeem *\/ };
	 * const previewData = await getPreviewRedeem(params);
	 * console.log(previewData);
	 */
	const getPreviewRedeem = useCallback(
		async (
			params: Erc4626GetErc4626PreviewRedeemParams,
		): Promise<Erc4626GetErc4626PreviewRedeemData> => {
			return handleTransaction("getPreviewRedeemErc4626", async () => {
				const erc4626SDK = getErc4626SDK();
				const response =
					await erc4626SDK.erc4626GetErc4626PreviewRedeem(params);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Retrieves a preview of the withdrawal for ERC-4626 compliant tokens.
	 *
	 * @param params - The parameters required to get the preview withdrawal.
	 * @returns A promise that resolves to the preview withdrawal data.
	 *
	 * @example
	 * ```typescript
	 * const previewData = await getPreviewWithdraw({
	 *   amount: 100,
	 *   address: '0x...',
	 * });
	 * console.log(previewData);
	 * ```
	 */
	const getPreviewWithdraw = useCallback(
		async (
			params: Erc4626GetErc4626PreviewWithdrawParams,
		): Promise<Erc4626GetErc4626PreviewWithdrawData> => {
			return handleTransaction("getPreviewWithdrawErc4626", async () => {
				const erc4626SDK = getErc4626SDK();
				const response =
					await erc4626SDK.erc4626GetErc4626PreviewWithdraw(params);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Retrieves the total assets for an ERC-4626 contract.
	 *
	 * @param {GetTotalAssetsParams} params - The parameters required to get the total assets.
	 * @returns {Promise<GetTotalAssetsData>} A promise that resolves to the total assets data.
	 *
	 * @example
	 * ```typescript
	 * const params: GetTotalAssetsParams = { /* parameters here *\/ };
	 * const totalAssets = await getTotalAssets(params);
	 * console.log(totalAssets);
	 * ```
	 */
	const getTotalAssets = useCallback(
		async (
			params: Erc4626GetErc4626TotalAssetsParams,
		): Promise<Erc4626GetErc4626TotalAssetsData> => {
			return handleTransaction("getTotalAssetsErc4626", async () => {
				const erc4626SDK = getErc4626SDK();
				const response = await erc4626SDK.erc4626GetErc4626TotalAssets(params);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Retrieves the total supply of the ERC-4626 token.
	 *
	 * @param {GetTotalSupplyParams2} params - The parameters required to get the total supply.
	 * @returns {Promise<GetTotalSupplyResult>} A promise that resolves to the total supply result.
	 *
	 * @example
	 * ```typescript
	 * const params: GetTotalSupplyParams2 = { /* parameters *\/ };
	 * const totalSupply = await getTotalSupply(params);
	 * console.log(totalSupply);
	 * ```
	 */
	const getTotalSupply = useCallback(
		async (
			params: Erc4626GetErc4626TotalSupplyParams,
		): Promise<Erc4626GetErc4626TotalSupplyData> => {
			return handleTransaction("getTotalSupplyErc4626", async () => {
				const erc4626SDK = getErc4626SDK();
				const response = await erc4626SDK.erc4626GetErc4626TotalSupply(params);
				return response.data;
			});
		},
		[moon],
	);

	/**
	 * Mints ERC-4626 tokens for a given address.
	 *
	 * @param {string} address - The address to mint tokens for.
	 * @param {InputBody} data - The input data required for minting.
	 * @returns {Promise<MintData>} A promise that resolves to the mint data.
	 */
	const mint = useCallback(
		async (address: string, data: InputBody) => {
			return handleTransaction("mintErc4626", async () => {
				const erc4626SDK = getErc4626SDK();
				const preparedTransaction = prepareTransaction(address, data);
				const response = await erc4626SDK.erc4626MintErc4626Shares(
					address,
					preparedTransaction,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Redeems ERC-4626 tokens for the specified address and input data.
	 *
	 * @param {string} address - The address to redeem tokens for.
	 * @param {InputBody} data - The input data required for the redemption process.
	 * @returns {Promise<RedeemData>} A promise that resolves to the redeemed data.
	 *
	 * @example
	 * ```typescript
	 * const address = "0x123...";
	 * const data = { amount: 100 };
	 * const redeemedData = await redeem(address, data);
	 * console.log(redeemedData);
	 * ```
	 */
	const redeem = useCallback(
		async (address: string, data: InputBody) => {
			return handleTransaction("redeemErc4626", async () => {
				const erc4626SDK = getErc4626SDK();
				const preparedTransaction = prepareTransaction(address, data);
				const response = await erc4626SDK.erc4626RedeemErc4626Shares(
					address,
					preparedTransaction,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Transfers ERC-4626 tokens to a specified address.
	 *
	 * @param address - The address to which the tokens will be transferred.
	 * @param data - The input data required for the transfer.
	 * @returns A promise that resolves to the result of the transfer operation.
	 */
	const transfer = useCallback(
		async (address: string, data: InputBody) => {
			return handleTransaction("transferErc4626", async () => {
				const erc4626SDK = getErc4626SDK();
				const preparedTransaction = prepareTransaction(address, data);
				const response = await erc4626SDK.erc4626TransferErc4626(
					address,
					preparedTransaction,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Transfers tokens from one address to another using the ERC-4626 standard.
	 *
	 * @param address - The address from which tokens will be transferred.
	 * @param data - The input data required for the transfer.
	 * @returns A promise that resolves to the result of the transfer operation.
	 */
	const transferFrom = useCallback(
		async (address: string, data: InputBody) => {
			return handleTransaction("transferFromErc4626", async () => {
				const erc4626SDK = getErc4626SDK();
				const preparedTransaction = prepareTransaction(address, data);
				const response = await erc4626SDK.erc4626TransferFromErc4626(
					address,
					preparedTransaction,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	/**
	 * Withdraws assets from an ERC-4626 contract.
	 *
	 * @param {string} address - The address of the ERC-4626 contract.
	 * @param {InputBody} data - The input data required for the withdrawal.
	 * @returns {Promise<WithdrawResult>} A promise that resolves to the result of the withdrawal.
	 */
	const withdraw = useCallback(
		async (address: string, data: InputBody) => {
			return handleTransaction("withdrawErc4626", async () => {
				const erc4626SDK = getErc4626SDK();
				const preparedTransaction = prepareTransaction(address, data);
				const response = await erc4626SDK.erc4626WithdrawFromErc4626(
					address,
					preparedTransaction,
				);
				return handleWagmiTransaction(response.data);
			});
		},
		[moon, isConnected, sendTransactionAsync],
	);

	return {
		approve,
		deposit,
		getAllowance,
		getAsset,
		getBalanceOf,
		getConvertToAssets,
		getConvertToShares,
		getMaxDeposit,
		getMaxMint,
		getMaxRedeem,
		getMaxWithdraw,
		getPreviewDeposit,
		getPreviewMint,
		getPreviewRedeem,
		getPreviewWithdraw,
		getTotalAssets,
		getTotalSupply,
		mint,
		redeem,
		transfer,
		transferFrom,
		withdraw,
	};
};
