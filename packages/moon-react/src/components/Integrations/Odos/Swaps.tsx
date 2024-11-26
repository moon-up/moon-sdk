import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { useTheme } from "@/context";
import { useChains, useOdos } from "@/hooks";
import { Transaction } from "@/components/Web3/Transactions/transactions";
import { useMoonAccount } from "@/hooks";
import { formatUnits } from "ethers";
import { Button } from "@/components";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { safelyParseUnits } from "../../../utils";
import { useDebounceValue } from "usehooks-ts";
import { useErc20 } from "@/hooks/contracts/useErc20";

import { SlippageSettings } from "./SlippageSettings";
import { SwapDetails } from "./SwapDetails";
import { TokenInput } from "./TokenInput";
import type { InputBody } from "@moonup/moon-api";

type ButtonStatus =
	| "Estimate"
	| "Estimating..."
	| "Swapping..."
	| "Swap"
	| "Insufficient Balance";

const tokenPriceBaseUrl = "https://api.odos.xyz/pricing/token";

const fetchTokenPrice = async (chainId: number, tokenAddress: string) => {
	const response = await fetch(
		`${tokenPriceBaseUrl}/${chainId}/${tokenAddress}`,
	);
	if (response.status === 200) {
		const data = await response.json();
		return data.price;
	} else {
		throw new Error("Error fetching token price");
	}
};

const calculatePrice = (amount: string, price: number) => {
	return Number.parseFloat(amount) * price;
};

const formatBalance = (balance: string, decimals: number) => {
	return formatUnits(balance, decimals);
};

const fetchBalances = async (account: string, chainId: string) => {
	const response = await fetch(
		`https://api.odos.xyz/balances/${account}/${chainId}`,
	);
	if (response.status === 200) {
		const data = await response.json();
		console.log(data);
		return data.balances;
	} else {
		throw new Error("Error fetching balances");
	}
};

const fetchContractInfo = async (chainId: number) => {
	const response = await fetch(
		`https://api.odos.xyz/info/contract-info/v2/${chainId}`,
	);
	if (response.status === 200) {
		const data = await response.json();
		return data;
	} else {
		throw new Error("Error fetching contract info");
	}
};

export const OdosSwap = () => {
	const theme = useTheme();
	const { getQuoteOdos, swapOdos, supportedTokensQuery } = useOdos();
	const { account } = useMoonAccount();
	const queryClient = useQueryClient();
	const { selectedChain } = useChains();
	const { approveTokenSpendIfNeeded } = useErc20();
	const [fromToken, setFromToken] = useState<any>(null);
	const [toToken, setToToken] = useState<any>(null);
	const [fromAmount, setFromAmount] = useState("");
	const [toAmount, setToAmount] = useState("");
	const [slippage, setSlippage] = useState(0.5);
	const [estimateResult, setEstimateResult] = useState<any>(null);
	const [buttonStatus, setButtonStatus] = useState<ButtonStatus>("Estimate");
	const [transactionData, setTransactionData] = useState<InputBody | null>(
		null,
	);
	const [_, setError] = useState<string | null>(null);
	const [isSwapComplete, setIsSwapComplete] = useState(false);
	const [showTransactionDetails, setShowTransactionDetails] = useState(false);
	const [contractInfo, setContractInfo] = useState<any>(null);

	const [debouncedFromAmount] = useDebounceValue(fromAmount, 500);
	const { data: tokensFilteredForChain = [] } = supportedTokensQuery;

	const { data: balanceData = [] } = useQuery({
		queryKey: ["OdosSwapBalances", account, selectedChain?.chain_id],
		queryFn: () =>
			fetchBalances(account, selectedChain?.chain_id?.toString() || "1"),
		enabled: !!account && !!selectedChain,
	});

	const tokensWithBalances = useMemo(() => {
		return tokensFilteredForChain.map((token) => {
			const balance = balanceData?.find(
				(b: any) => b.address === token.address,
			);
			return {
				...token,
				balance: balance
					? formatBalance(balance.balance.toString(), token.decimals)
					: "0.00",
			};
		});
	}, [tokensFilteredForChain, balanceData]);

	const { data: fromTokenPrice, refetch: refetchFromTokenPrice } = useQuery({
		queryKey: ["tokenPrice", fromToken],
		queryFn: () =>
			fetchTokenPrice(selectedChain?.chain_id || 1, fromToken?.address),
		enabled: !!fromToken,
	});

	const { data: toTokenPrice, refetch: refetchToTokenPrice } = useQuery({
		queryKey: ["tokenPrice", toToken?.address],
		queryFn: () =>
			fetchTokenPrice(selectedChain?.chain_id || 1, toToken?.address),
		enabled: !!toToken,
	});

	useEffect(() => {
		if (fromToken && toToken) {
			refetchFromTokenPrice();
			refetchToTokenPrice();
		}
	}, [fromToken, toToken, refetchFromTokenPrice, refetchToTokenPrice]);

	const fromValue = calculatePrice(fromAmount, fromTokenPrice || 0);
	const toValue = calculatePrice(toAmount, toTokenPrice || 0);

	useEffect(() => {
		if (fromToken && toToken && debouncedFromAmount) {
			handleEstimate();
		}
	}, [
		fromToken,
		toToken,
		debouncedFromAmount,
		slippage,
		fromTokenPrice,
		toTokenPrice,
	]);

	useEffect(() => {
		if (selectedChain && typeof selectedChain.chain_id === "number") {
			fetchContractInfo(selectedChain.chain_id)
				.then(setContractInfo)
				.catch((error) =>
					console.error("Error fetching contract info:", error),
				);
		}
	}, [selectedChain]);

	const handleEstimate = async () => {
		if (!fromToken || !toToken || !debouncedFromAmount) return;

		setButtonStatus("Estimating...");
		const bigAmountWei = safelyParseUnits(
			debouncedFromAmount,
			fromToken.decimals,
		);

		try {
			const swapParams = {
				inputTokens: [
					{ amount: bigAmountWei.toString(), tokenAddress: fromToken.address },
				],
				outputTokens: [{ proportion: 1, tokenAddress: toToken.address }],
				slippageLimitPercent: Math.round(slippage * 100),
				chain_id: selectedChain?.chain_id?.toString() || "1",
			};

			const estimateResult = await getQuoteOdos({
				accountName: account || "",
				data: swapParams,
			});
			setEstimateResult(estimateResult);
			setToAmount(
				estimateResult?.data
					? formatUnits(estimateResult.data.outAmounts[0], toToken.decimals)
					: "0",
			);
			setButtonStatus("Swap");
		} catch (error) {
			console.error("Estimate failed:", error);
			setButtonStatus("Estimate");
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			handleEstimate();
		}, 60000);
		return () => clearInterval(interval);
	}, [fromToken, toToken, debouncedFromAmount, slippage]);

	const handleSwap = async () => {
		if (
			!fromToken ||
			!toToken ||
			!fromAmount ||
			!toAmount ||
			!account ||
			!contractInfo
		)
			return;

		setButtonStatus("Swapping...");
		const bigAmountWei = safelyParseUnits(fromAmount, fromToken.decimals);

		try {
			// Check if fromToken is not the native token
			if (fromToken.address !== "0x0000000000000000000000000000000000000000") {
				await approveTokenSpendIfNeeded(
					account,
					contractInfo.routerAddress,
					fromToken.address,
					Number.parseFloat(fromAmount),
					selectedChain?.chain_id?.toString() || "1",
				);
			}

			const swapParams = {
				inputTokens: [
					{ amount: bigAmountWei.toString(), tokenAddress: fromToken.address },
				],
				outputTokens: [{ proportion: 1, tokenAddress: toToken.address }],
				slippageLimitPercent: Math.round(slippage * 100),
				chain_id: selectedChain?.chain_id?.toString() || "1",
				broadcast: false,
				dryrun: true,
			};

			const result = (await swapOdos({
				accountName: account,
				data: swapParams,
			})) as any;
			queryClient.invalidateQueries({ queryKey: ["erc20TokenBalances"] });
			console.log(result);

			setTransactionData({
				to: result.data.transaction.to,
				data: result.data.transaction.data,
				value: result.data.transaction.value,
				nonce: result.data.transaction.nonce,
				gasLimit: result.data.transaction.gasLimit,
				maxFeePerGas: result.data.transaction.maxFeePerGas,
				maxPriorityFeePerGas: result.data.transaction.maxPriorityFeePerGas,
				chain_id: selectedChain?.chain_id?.toString() || "1",
			});
			setShowTransactionDetails(true);
			setButtonStatus("Estimate");
		} catch (error) {
			console.error("Swap failed:", error);
			setError((error as Error)?.message || "Swap failed");
			setButtonStatus("Swap");
		}
	};

	const swapTokens = () => {
		setFromToken(toToken);
		setToToken(fromToken);
		setFromAmount(toAmount);
		setToAmount(fromAmount);
	};
	const handleSwapComplete = () => {
		setIsSwapComplete(true);
		setFromAmount("");
		setToAmount("");
		setButtonStatus("Estimate");
		setShowTransactionDetails(false);
	};
	const handleError = (error: any) => {
		console.log("transaction error called", error);
		setError(error);
		setButtonStatus("Estimate");
		setTransactionData(null);
		setShowTransactionDetails(false);
		setEstimateResult(null);
		setFromAmount("");
		setToAmount("");
		// Reset other state variables if needed
	};

	if (isSwapComplete) {
		return (
			<div
				className={`w-full max-w-md mx-auto p-6 rounded-lg bg-${theme?.backgroundColor} shadow-xl text-center`}
			>
				<h2 className={`text-2xl font-bold mb-4 text-${theme?.textColor}`}>
					Swap Complete!
				</h2>
				<p className={`text-${theme?.textColorSecondary} mb-6`}>
					Your transaction has been successfully processed.
				</p>
				<Button
					onClick={() => setIsSwapComplete(false)}
					className={`py-3 px-6 bg-${theme?.accentColor} text-${theme?.backgroundColor} rounded-md font-bold text-lg shadow-md`}
				>
					Make Another Swap
				</Button>
			</div>
		);
	}

	return (
		<div
			className={`w-full max-w-md mx-auto p-6 rounded-lg bg-${theme?.backgroundColor} shadow-xl`}
		>
			{!showTransactionDetails && (
				<>
					<div className="flex justify-between items-center mb-6">
						<h2 className={`text-2xl font-bold text-${theme?.textColor}`}>
							Swap
						</h2>

						<SlippageSettings slippage={slippage} setSlippage={setSlippage} />
					</div>

					<div
						className={`mb-4 p-4 rounded-2xl bg-${theme?.backgroundColorSecondary}`}
					>
						<TokenInput
							token={fromToken}
							amount={fromAmount}
							setAmount={setFromAmount}
							tokens={tokensWithBalances}
							onSelectToken={setFromToken}
							balance={fromToken?.balance}
							value={fromValue}
						/>

						<div className="flex justify-center my-4">
							<Button
								onClick={swapTokens}
								className={`p-2 rounded-full bg-${theme?.backgroundColor} text-${theme?.textColor} shadow-md`}
							>
								<FiArrowDown />
							</Button>
						</div>

						<TokenInput
							token={toToken}
							amount={toAmount}
							setAmount={setToAmount}
							tokens={tokensWithBalances}
							onSelectToken={setToToken}
							balance={toToken?.balance}
							value={toValue}
							readOnly
						/>
					</div>

					<Button
						onClick={handleSwap}
						disabled={buttonStatus !== "Swap"}
						className={`w-full py-4 px-6 bg-${theme?.accentColor} text-${theme?.backgroundColor} rounded-2xl font-bold text-lg shadow-md ${
							buttonStatus !== "Swap" ? "opacity-50 cursor-not-allowed" : ""
						}`}
					>
						{buttonStatus}
					</Button>
					{estimateResult && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
							className="mt-6"
						>
							<SwapDetails
								estimateResult={estimateResult}
								fromToken={fromToken}
								toToken={toToken}
								fromAmount={fromAmount}
								toAmount={toAmount}
								slippage={slippage}
								fromValue={fromValue}
								toValue={toValue}
							/>
						</motion.div>
					)}
				</>
			)}

			{transactionData && (
				<Transaction
					wallet={account}
					transaction={transactionData}
					autoExecute={false}
					isModal={false}
					onSuccess={handleSwapComplete}
					onError={handleError}
				/>
			)}
		</div>
	);
};

export default OdosSwap;
