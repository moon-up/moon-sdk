// import React, { useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import * as RadixDialog from "@radix-ui/react-dialog";
// import * as RadixSlider from "@radix-ui/react-slider";
// import * as RadixTooltip from "@radix-ui/react-tooltip";
// import {
// 	FiSettings,
// 	FiRefreshCw,
// 	FiChevronDown,
// 	FiArrowDown,
// } from "react-icons/fi";
// import { useTheme } from "@/context";
// import { useThorswap, useMoonTokenManager } from "@/hooks";
// import { Transaction } from "@/components/Web3/Transactions/transactions";
// import { useMoonAccount } from "@/hooks";
// import { formatUnits } from "ethers";

// import { Button } from "@/components";
// import { ChainSelectorModal } from "@/components/Web3/Chains/ChainSelectors/ChainSelectorModal";
// import { useQueryClient } from "@tanstack/react-query";
// import { safelyParseUnits } from "../../../utils";
// import { useDebounceValue } from "usehooks-ts";

// const converyGasTokenAddress = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
// type ButtonStatus =
// 	| "Estimate"
// 	| "Estimating..."
// 	| "Swapping..."
// 	| "Swap"
// 	| "Insufficient Balance";

// interface TokenSelectorProps {
// 	tokens: any[];
// 	selectedToken: any;
// 	onSelect: (token: any) => void;
// }

// const TokenSelector: React.FC<TokenSelectorProps> = ({
// 	tokens,
// 	selectedToken,
// 	onSelect,
// }) => {
// 	const [isOpen, setIsOpen] = React.useState(false);
// 	const [searchTerm, setSearchTerm] = React.useState("");
// 	const theme = useTheme();

// 	const filteredTokens = tokens.filter(
// 		(token) =>
// 			token.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
// 			token.name.toLowerCase().includes(searchTerm.toLowerCase()),
// 	);

// 	return (
// 		<RadixDialog.Root open={isOpen} onOpenChange={setIsOpen}>
// 			<RadixDialog.Trigger asChild>
// 				<button
// 					className={`flex items-center justify-between w-full p-2 rounded-md bg-${theme.backgroundColorSecondary} text-${theme.textColor}`}
// 				>
// 					{selectedToken ? (
// 						<>
// 							<div className="flex items-center">
// 								<img
// 									src={selectedToken.logoURI}
// 									alt={selectedToken.symbol}
// 									className="w-6 h-6 mr-2 rounded-full"
// 								/>
// 								<span>{selectedToken.symbol}</span>
// 							</div>
// 							<FiChevronDown />
// 						</>
// 					) : (
// 						<span>Select token</span>
// 					)}
// 				</button>
// 			</RadixDialog.Trigger>

// 			<AnimatePresence>
// 				{isOpen && (
// 					<RadixDialog.Portal forceMount>
// 						<RadixDialog.Overlay asChild>
// 							<motion.div
// 								className="fixed inset-0 bg-black/50"
// 								initial={{ opacity: 0 }}
// 								animate={{ opacity: 1 }}
// 								exit={{ opacity: 0 }}
// 							/>
// 						</RadixDialog.Overlay>
// 						<RadixDialog.Content asChild>
// 							<motion.div
// 								className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6 rounded-lg bg-${theme.backgroundColor} shadow-xl`}
// 								initial={{ opacity: 0, scale: 0.95 }}
// 								animate={{ opacity: 1, scale: 1 }}
// 								exit={{ opacity: 0, scale: 0.95 }}
// 							>
// 								<RadixDialog.Title
// 									className={`text-lg font-bold mb-4 text-${theme.textColor}`}
// 								>
// 									Select a token
// 								</RadixDialog.Title>
// 								<input
// 									type="text"
// 									placeholder="Search tokens"
// 									value={searchTerm}
// 									onChange={(e) => setSearchTerm(e.target.value)}
// 									className={`w-full p-2 mb-4 rounded-md bg-${theme.backgroundColorSecondary} text-${theme.textColor}`}
// 								/>
// 								<div className={`max-h-60 overflow-y-auto`}>
// 									{filteredTokens.map((token) => (
// 										<button
// 											key={token.address}
// 											onClick={() => {
// 												onSelect(token);
// 												setIsOpen(false);
// 											}}
// 											className={`flex items-center w-full p-2 hover:bg-${theme.backgroundColorSecondary} rounded-md`}
// 										>
// 											<img
// 												src={token.logoURI}
// 												alt={token.symbol}
// 												className="w-6 h-6 mr-2 rounded-full"
// 											/>
// 											<span className={`text-${theme.textColor}`}>
// 												{token.symbol}
// 											</span>
// 											<span
// 												className={`ml-2 text-sm text-${theme.textColorSecondary}`}
// 											>
// 												{token.name}
// 											</span>
// 										</button>
// 									))}
// 								</div>
// 							</motion.div>
// 						</RadixDialog.Content>
// 					</RadixDialog.Portal>
// 				)}
// 			</AnimatePresence>
// 		</RadixDialog.Root>
// 	);
// };

export const ThorswapSwap = () => {
	// const theme = useTheme();
	// const { getQuote, swap } = useThorswap();
	// const { tokensWithGasToken: tokenList, chain } = useMoonTokenManager();
	// const { account } = useMoonAccount();
	// const queryClient = useQueryClient();
	// const [fromToken, setFromToken] = React.useState<any>(null);
	// const [toToken, setToToken] = React.useState<any>(null);
	// const [fromAmount, setFromAmount] = React.useState<string>("");
	// const [toAmount, setToAmount] = React.useState<string>("");
	// const [slippage, setSlippage] = React.useState<number>(0.5);
	// const [estimateResult, setEstimateResult] = React.useState<any>(null);
	// const [buttonStatus, setButtonStatus] =
	// 	React.useState<ButtonStatus>("Estimate");
	// const [debouncedFromAmount] = useDebounceValue(fromAmount, 500);
	// const tokensFilteredForChain = tokenList.filter(
	// 	(token) => token.chainId === chain?.chain_id,
	// );
	// useEffect(() => {
	// 	if (fromToken && toToken && debouncedFromAmount) {
	// 		handleEstimate();
	// 	}
	// }, [fromToken, toToken, debouncedFromAmount, slippage]);
	// const handleEstimate = async () => {
	// 	if (!fromToken || !toToken || !debouncedFromAmount) return;
	// 	setButtonStatus("Estimating...");
	// 	const bigAmountWei = safelyParseUnits(
	// 		debouncedFromAmount,
	// 		fromToken.decimals,
	// 	);
	// 	try {
	// 		const quoteParams = {
	// 			fromChain: chain?.chain_id?.toString() || "",
	// 			toChain: chain?.chain_id?.toString() || "",
	// 			fromToken: fromToken.address,
	// 			toToken: toToken.address,
	// 			fromAddress: account || "",
	// 			toAddress: account || "",
	// 			amount: bigAmountWei.toString(),
	// 			slippage: slippage.toString(),
	// 			buyAsset: toToken.symbol,
	// 			chainId: chain?.chain_id?.toString() || "",
	// 			recipientAddress: account || "",
	// 			sellAmount: bigAmountWei.toString(),
	// 			sellAsset: fromToken.symbol,
	// 			senderAddress: account || "",
	// 		};
	// 		const estimateResult = await getQuote(quoteParams);
	// 		setEstimateResult(estimateResult);
	// 		setToAmount(
	// 			estimateResult?.expectedAmountOut
	// 				? formatUnits(estimateResult.expectedAmountOut, toToken.decimals)
	// 				: "0",
	// 		);
	// 		setButtonStatus("Swap");
	// 	} catch (error) {
	// 		console.error("Estimate failed:", error);
	// 		setButtonStatus("Estimate");
	// 	}
	// };
	// const handleSwap = async () => {
	// 	if (!fromToken || !toToken || !fromAmount || !toAmount || !account) return;
	// 	setButtonStatus("Swapping...");
	// 	const bigAmountWei = safelyParseUnits(fromAmount, fromToken.decimals);
	// 	try {
	// 		const swapParams = {
	// 			fromChain: chain?.chain_id?.toString() || "",
	// 			toChain: chain?.chain_id?.toString() || "",
	// 			fromToken: fromToken.address,
	// 			toToken: toToken.address,
	// 			fromAddress: account,
	// 			toAddress: account,
	// 			amount: bigAmountWei.toString(),
	// 			slippage: slippage.toString(),
	// 		};
	// 		const result = await swap(swapParams);
	// 		queryClient.invalidateQueries({ queryKey: ["erc20TokenBalances"] });
	// 		console.log("Swap executed:", result);
	// 		setButtonStatus("Estimate");
	// 	} catch (error) {
	// 		console.error("Swap failed:", error);
	// 		setButtonStatus("Swap");
	// 	}
	// };
	// return (
	// 	<div
	// 		className={`w-full max-w-md mx-auto p-6 rounded-lg bg-${theme.backgroundColor} shadow-xl`}
	// 	>
	// 		<ChainSelectorModal
	// 			chainIdFilterList={[1, 56, 137, 42161, 8453, 10]}
	// 			buttonProps={{
	// 				className: `w-full bg-${theme.backgroundColorSecondary} rounded-lg p-2 mb-4 text-${theme.textColor}`,
	// 			}}
	// 		/>
	// 		<div
	// 			className={`mb-4 p-4 rounded-md bg-${theme.backgroundColorSecondary}`}
	// 		>
	// 			<TokenSelector
	// 				tokens={tokensFilteredForChain}
	// 				selectedToken={fromToken}
	// 				onSelect={(token) =>
	// 					setFromToken(
	// 						token.isGasToken
	// 							? { ...token, address: converyGasTokenAddress }
	// 							: token,
	// 					)
	// 				}
	// 			/>
	// 			<input
	// 				type="number"
	// 				value={fromAmount}
	// 				onChange={(e) => setFromAmount(e.target.value)}
	// 				placeholder="0.0"
	// 				className={`w-full mt-2 p-2 rounded-md bg-${theme.backgroundColor} text-${theme.textColor} text-right text-2xl`}
	// 			/>
	// 			<p className={`text-sm text-${theme.textColorSecondary} mt-1`}>
	// 				Balance: {fromToken?.balance || 0}
	// 			</p>
	// 		</div>
	// 		<div className="flex justify-center my-4">
	// 			<button
	// 				onClick={() => {
	// 					setFromToken(toToken);
	// 					setToToken(fromToken);
	// 					setFromAmount(toAmount);
	// 					setToAmount(fromAmount);
	// 				}}
	// 				className={`p-2 rounded-full bg-${theme.backgroundColorSecondary} text-${theme.textColor}`}
	// 			>
	// 				<FiArrowDown />
	// 			</button>
	// 		</div>
	// 		<div
	// 			className={`mb-4 p-4 rounded-md bg-${theme.backgroundColorSecondary}`}
	// 		>
	// 			<TokenSelector
	// 				tokens={tokensFilteredForChain}
	// 				selectedToken={toToken}
	// 				onSelect={(token) =>
	// 					setToToken(
	// 						token.isGasToken
	// 							? { ...token, address: converyGasTokenAddress }
	// 							: token,
	// 					)
	// 				}
	// 			/>
	// 			<input
	// 				type="number"
	// 				value={toAmount}
	// 				readOnly
	// 				placeholder="0.0"
	// 				className={`w-full mt-2 p-2 rounded-md bg-${theme.backgroundColor} text-${theme.textColor} text-right text-2xl`}
	// 			/>
	// 			<p className={`text-sm text-${theme.textColorSecondary} mt-1`}>
	// 				Balance: {toToken?.balance || 0}
	// 			</p>
	// 		</div>
	// 		<RadixTooltip.Provider>
	// 			<RadixTooltip.Root>
	// 				<RadixTooltip.Trigger asChild>
	// 					<button
	// 						className={`p-2 rounded-full bg-${theme.backgroundColorSecondary} text-${theme.textColor} mb-4`}
	// 					>
	// 						<FiSettings />
	// 					</button>
	// 				</RadixTooltip.Trigger>
	// 				<RadixTooltip.Content
	// 					className={`p-4 rounded-md bg-${theme.backgroundColorSecondary} text-${theme.textColor} shadow-lg`}
	// 				>
	// 					<div className="mb-2">Slippage Tolerance</div>
	// 					<RadixSlider.Root
	// 						className="relative flex items-center w-48 h-5"
	// 						value={[slippage]}
	// 						onValueChange={(value) => setSlippage(value[0])}
	// 						max={5}
	// 						step={0.1}
	// 					>
	// 						<RadixSlider.Track
	// 							className={`relative h-1 flex-grow rounded-full bg-${theme.backgroundColor}`}
	// 						>
	// 							<RadixSlider.Range
	// 								className={`absolute h-full rounded-full bg-${theme.accentColor}`}
	// 							/>
	// 						</RadixSlider.Track>
	// 						<RadixSlider.Thumb
	// 							className={`block w-5 h-5 rounded-full bg-${theme.accentColor}`}
	// 						/>
	// 					</RadixSlider.Root>
	// 					<div className="mt-2">{slippage.toFixed(1)}%</div>
	// 				</RadixTooltip.Content>
	// 			</RadixTooltip.Root>
	// 		</RadixTooltip.Provider>
	// 		{estimateResult && (
	// 			<div
	// 				className={`mb-4 p-4 rounded-md bg-${theme.backgroundColorSecondary} text-${theme.textColor}`}
	// 			>
	// 				<h3 className="font-bold mb-2">Swap Details</h3>
	// 				<div className="flex justify-between">
	// 					<span>Rate</span>
	// 					<span>
	// 						1 {fromToken.symbol} ={" "}
	// 						{(parseFloat(toAmount) / parseFloat(fromAmount)).toFixed(6)}{" "}
	// 						{toToken.symbol}
	// 					</span>
	// 				</div>
	// 				<div className="flex justify-between">
	// 					<span>Minimum received</span>
	// 					<span>
	// 						{(parseFloat(toAmount) * (1 - slippage / 100)).toFixed(6)}{" "}
	// 						{toToken.symbol}
	// 					</span>
	// 				</div>
	// 			</div>
	// 		)}
	// 		<Button
	// 			onClick={handleSwap}
	// 			disabled={buttonStatus !== "Swap"}
	// 			className={`w-full py-3 px-4 bg-${theme.accentColor} text-${theme.backgroundColor} rounded-md font-bold text-lg shadow-md ${
	// 				buttonStatus !== "Swap" ? "opacity-50 cursor-not-allowed" : ""
	// 			}`}
	// 		>
	// 			{buttonStatus === "Estimating..." ? (
	// 				<div className="flex items-center justify-center">
	// 					<FiRefreshCw className="animate-spin mr-2" />
	// 					Fetching quote...
	// 				</div>
	// 			) : (
	// 				buttonStatus
	// 			)}
	// 		</Button>
	// 		{estimateResult && (
	// 			<div className="mt-4">
	// 				<Transaction
	// 					wallet={account}
	// 					transaction={{
	// 						to: estimateResult.to,
	// 						data: estimateResult.data,
	// 						value: estimateResult.value,
	// 						chain_id: chain?.chain_id?.toString() || "1",
	// 					}}
	// 					autoExecute={false}
	// 					isModal={true}
	// 				/>
	// 			</div>
	// 		)}
	// 	</div>
	// );
	return null;
};

export default ThorswapSwap;
