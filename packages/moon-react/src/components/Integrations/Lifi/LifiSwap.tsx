import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { useTheme } from "@/context";
import { useLifi, useMoonAccount, useMoonDataSDK } from "@/hooks";
import { Transaction } from "@/components/Web3/Transactions/transactions";
import { formatUnits, parseUnits } from "ethers";
import { Button } from "@/components";
import { useQueryClient } from "@tanstack/react-query";
import { useDebounceValue } from "usehooks-ts";
import { useErc20 } from "@/hooks";
import { TokenInput } from "./TokenInput";
import { ChainSelector } from "./ChainSelector";
import { SlippageSettings } from "./SlippageSettings";
import { SwapDetails } from "./SwapDetails";
import type { InputBody, Quote } from "@moonup/moon-api";

type ButtonStatus =
	| "Get Quote"
	| "Getting Quote..."
	| "Bridging..."
	| "Bridge"
	| "Insufficient Balance"
	| "Enter an amount"
	| "Select tokens and chains";

export const LifiBridge: React.FC = () => {
	const theme = useTheme();
	const {
		getQuoteLifi,
		postQuoteLifi,
		supportedTokensQuery,
		supportedChainsQuery,
	} = useLifi();
	const { account } = useMoonAccount();
	const queryClient = useQueryClient();
	const { approveTokenSpendIfNeeded } = useErc20();
	const { walletBalanceQuery, walletBalanceChainIdQuery } = useMoonDataSDK();

	const [fromToken, setFromToken] = useState<any>(null);
	const [toToken, setToToken] = useState<any>(null);
	const [fromChain, setFromChain] = useState<any>(null);
	const [toChain, setToChain] = useState<any>(null);
	const [fromAmount, setFromAmount] = useState("");
	const [toAmount, setToAmount] = useState("");
	const [slippage, setSlippage] = useState(0.5);
	const [quoteResult, setQuoteResult] = useState<Quote | null>(null);
	const [buttonStatus, setButtonStatus] = useState<ButtonStatus>("Get Quote");
	const [transactionData, setTransactionData] = useState<InputBody | null>(
		null,
	);
	const [error, setError] = useState<string | null>(null);
	const [isSwapComplete, setIsSwapComplete] = useState(false);
	const [showTransactionDetails, setShowTransactionDetails] = useState(false);

	const [debouncedFromAmount] = useDebounceValue(fromAmount, 500);
	const { data: walletBalanceData = { balances: {} } } = walletBalanceQuery;
	const { data: walletBalanceChainIdData = { balances: {} } } =
		walletBalanceChainIdQuery(toChain?.id ?? 1);
	const { data: tokensData = { tokens: {} } } = supportedTokensQuery;

	const { data: chainsData = { chains: [] } } = supportedChainsQuery;
	const tokensFilteredForChain = useMemo(() => {
		if (!fromChain) return [];
		// add the balance to the token object
		const tokens = tokensData.tokens[fromChain.id.toString()] || [];
		return tokens.map((token: any) => {
			const balances: { [key: string]: string } = Array.isArray(
				walletBalanceData,
			)
				? {}
				: walletBalanceData?.balances || {};
			token.balance = balances[token.address] || "0";
			return token;
		});
	}, [tokensData, fromChain, walletBalanceData]);

	const tokensFilteredToChain = useMemo(() => {
		if (!toChain) return [];

		const tokens = tokensData.tokens[toChain.id.toString()] || [];
		return tokens.map((token: any) => {
			const balances: { [key: string]: string } = Array.isArray(
				walletBalanceChainIdData,
			)
				? {}
				: walletBalanceChainIdData?.balances || {};
			token.balance = balances[token.address] || "0";
			return token;
		});
	}, [tokensData, toChain]);

	const fromValue = useMemo(() => {
		return quoteResult
			? Number.parseFloat(quoteResult.estimate.fromAmountUSD)
			: 0;
	}, [quoteResult]);

	const toValue = useMemo(() => {
		return quoteResult
			? Number.parseFloat(quoteResult.estimate.toAmountUSD)
			: 0;
	}, [quoteResult]);

	const isSwapDisabled = useMemo(() => {
		if (!fromToken || !toToken || !fromChain || !toChain) {
			return "Select tokens and chains";
		}
		if (!fromAmount || Number.parseFloat(fromAmount) === 0) {
			return "Enter an amount";
		}
		if (
			Number.parseFloat(fromAmount) >
			Number.parseFloat(fromToken.balance || "0")
		) {
			return "Insufficient Balance";
		}
		if (!quoteResult) {
			return "Get Quote";
		}
		return false;
	}, [fromToken, toToken, fromChain, toChain, fromAmount, quoteResult]);

	useEffect(() => {
		if (fromToken && toToken && fromChain && toChain && debouncedFromAmount) {
			handleGetQuote();
		} else {
			setQuoteResult(null);
			setToAmount("");
		}
	}, [fromToken, toToken, fromChain, toChain, debouncedFromAmount, slippage]);

	const handleGetQuote = async () => {
		if (
			!fromToken ||
			!toToken ||
			!fromChain ||
			!toChain ||
			!debouncedFromAmount
		)
			return;

		setButtonStatus("Getting Quote...");
		setError(null);

		const fromAmountBigInt = parseUnits(
			debouncedFromAmount,
			fromToken.decimals,
		);

		try {
			const quoteParams = {
				fromChain: fromChain.key,
				toChain: toChain.key,
				fromToken: fromToken.address,
				toToken: toToken.address,
				fromAmount: fromAmountBigInt.toString(),
				fromAddress: account || "",
				slippage: slippage,
			};

			const quote = await getQuoteLifi(quoteParams);
			setQuoteResult(quote);
			setToAmount(formatUnits(quote.estimate.toAmount, toToken.decimals));
			setButtonStatus("Bridge");
		} catch (error) {
			console.error("Quote failed:", error);
			setError((error as Error)?.message || "Failed to get quote");
			setButtonStatus("Get Quote");
		}
	};

	const handleBridge = async () => {
		if (!quoteResult || !account) return;

		setButtonStatus("Bridging...");

		try {
			if (fromToken.address !== "0x0000000000000000000000000000000000000000") {
				await approveTokenSpendIfNeeded(
					account,
					quoteResult.transactionRequest.to || "",
					fromToken.address,
					Number.parseFloat(fromAmount),
					fromChain.chainId.toString(),
				);
			}

			const bridgeParams = {
				accountName: account,
				fromAmount: quoteResult.estimate.fromAmount,
				fromChain: fromChain.key,
				fromToken: fromToken.address,
				toAmount: quoteResult.estimate.toAmount,
				toChain: toChain.key,
				toToken: toToken.address,
				fromAddress: account,
				toAddress: account,
				action: quoteResult.action,
				estimate: quoteResult.estimate,
				id: quoteResult.id,
				includedSteps: quoteResult.includedSteps,
				tool: quoteResult.tool,
				transactionRequest: quoteResult.transactionRequest,
				type: quoteResult.type,
			};

			const result = await postQuoteLifi(bridgeParams);
			queryClient.invalidateQueries({ queryKey: ["erc20TokenBalances"] });

			setTransactionData({
				to: result.quote.transactionRequest.to,
				data: result.quote.transactionRequest.data,
				value: result.quote.transactionRequest.value,
				chain_id: fromChain.chainId.toString(),
				maxFeePerGas: result.quote.transactionRequest.maxFeePerGas,
				maxPriorityFeePerGas:
					result.quote.transactionRequest.maxPriorityFeePerGas,
				nonce: result.quote.transactionRequest.nonce,
			});
			setShowTransactionDetails(true);
			setButtonStatus("Get Quote");
		} catch (error) {
			console.error("Bridge failed:", error);
			setError((error as Error)?.message || "Bridge failed");
			setButtonStatus("Bridge");
		}
	};

	const handleSwapComplete = () => {
		setIsSwapComplete(true);
		setFromAmount("");
		setToAmount("");
		setButtonStatus("Get Quote");
		setShowTransactionDetails(false);
	};

	const handleError = (error: any) => {
		console.log("transaction error called", error);
		setError(error);
		setButtonStatus("Get Quote");
		setTransactionData(null);
		setShowTransactionDetails(false);
		setQuoteResult(null);
		setFromAmount("");
		setToAmount("");
	};

	if (isSwapComplete) {
		return (
			<div
				className={`w-full max-w-md mx-auto p-6 rounded-lg bg-${theme?.backgroundColor} shadow-xl text-center`}
			>
				<h2 className={`text-2xl font-bold mb-4 text-${theme?.textColor}`}>
					Bridge Complete!
				</h2>
				<p className={`text-${theme?.textColorSecondary} mb-6`}>
					Your transaction has been successfully processed.
				</p>
				<Button
					onClick={() => setIsSwapComplete(false)}
					className={`py-3 px-6 bg-${theme?.accentColor} text-${theme?.backgroundColor} rounded-md font-bold text-lg shadow-md`}
				>
					Make Another Bridge
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
							Lifi Bridge
						</h2>
						<SlippageSettings slippage={slippage} setSlippage={setSlippage} />
					</div>

					<div
						className={`mb-4 p-4 rounded-2xl bg-${theme?.backgroundColorSecondary}`}
					>
						<ChainSelector
							chains={chainsData.chains}
							selectedChain={fromChain}
							onSelectChain={setFromChain}
						/>
						<TokenInput
							token={fromToken}
							amount={fromAmount}
							setAmount={setFromAmount}
							tokens={tokensFilteredForChain}
							onSelectToken={setFromToken}
							balance={fromToken?.balance}
							value={fromValue}
						/>

						<div className="flex justify-center my-4">
							<Button
								className={`p-2 rounded-full bg-${theme?.backgroundColor} text-${theme?.textColor} shadow-md`}
							>
								<FiArrowDown />
							</Button>
						</div>

						<ChainSelector
							chains={chainsData.chains as any[]}
							selectedChain={toChain}
							onSelectChain={setToChain}
						/>
						<TokenInput
							token={toToken}
							amount={toAmount}
							setAmount={setToAmount}
							tokens={tokensFilteredToChain}
							onSelectToken={setToToken}
							balance={toToken?.balance}
							value={toValue}
							readOnly
						/>
					</div>

					<Button
						onClick={handleBridge}
						disabled={!!isSwapDisabled}
						className={`w-full py-4 px-6 bg-${theme?.accentColor} text-${theme?.backgroundColor} rounded-2xl font-bold text-lg shadow-md ${
							isSwapDisabled ? "opacity-50 cursor-not-allowed" : ""
						}`}
					>
						{isSwapDisabled || buttonStatus}
					</Button>

					{error && <p className={`mt-2 text-sm text-red-500`}>{error}</p>}

					{quoteResult && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
							className="mt-6"
						>
							<SwapDetails
								quoteResult={quoteResult}
								fromToken={fromToken}
								toToken={toToken}
								slippage={slippage}
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

export default LifiBridge;
