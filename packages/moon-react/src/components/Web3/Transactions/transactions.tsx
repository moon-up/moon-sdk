import { useTheme } from "@/context";
import { useChains, useMoonAccount } from "@/hooks";
import type { InputBody, SimulateAssetChangesChange } from "@moonup/moon-api";
import * as Progress from "@radix-ui/react-progress";
import * as Dialog from "@radix-ui/react-dialog";
import { useQuery } from "@tanstack/react-query";
import { formatEther, formatUnits } from "ethers";
import { AnimatePresence, motion } from "framer-motion";
import type React from "react";
import { useEffect, useState, useCallback } from "react";
import { CheckCircleIcon, XCircleIcon } from "lucide-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tooltip, Button } from "@/components";
import { TooltipProvider } from "@radix-ui/react-tooltip";

interface TransactionProps {
	wallet: string;
	transaction: InputBody;
	autoExecute?: boolean;
	isModal?: boolean;
	onSuccess?: (receipt: any) => void;
	onError?: (error: string) => void;
}

export const Transaction: React.FC<TransactionProps> = ({
	wallet,
	transaction,
	autoExecute = false,
	isModal = false,
	onSuccess,
	onError,
}) => {
	const theme = useTheme();
	const [isOpen, setIsOpen] = useState(isModal);

	useEffect(() => {
		if (isModal) {
			setIsOpen(true);
		}
	}, [isModal]);

	return (
		<TooltipProvider>
			{isModal ? (
				<Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
					<Dialog.Trigger asChild>
						{/* Your trigger component, e.g., a button */}
					</Dialog.Trigger>
					<Dialog.Portal>
						<Dialog.Overlay className="fixed inset-0 bg-black/30" />
						<Dialog.Content
							className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-${theme.backgroundColor} text-${theme.textColor} p-4 rounded-lg shadow-md`}
						>
							{/* Render the transaction component */}
							<TransactionContent
								wallet={wallet}
								transaction={transaction}
								autoExecute={autoExecute}
								onSuccess={onSuccess}
								onError={onError}
							/>
						</Dialog.Content>
					</Dialog.Portal>
				</Dialog.Root>
			) : (
				<TransactionContent
					wallet={wallet}
					transaction={transaction}
					autoExecute={autoExecute}
					onSuccess={onSuccess}
					onError={onError}
				/>
			)}
		</TooltipProvider>
	);
};

const TransactionContent: React.FC<
	Pick<
		TransactionProps,
		"wallet" | "transaction" | "autoExecute" | "onSuccess" | "onError"
	>
> = ({ wallet, transaction, autoExecute, onSuccess, onError }) => {
	const [status, setStatus] = useState<
		"initial" | "simulating" | "ready" | "pending" | "completed" | "failed"
	>("initial");
	const [txHash, setTxHash] = useState<string | null>(null);
	const [txReceipt, setTxReceipt] = useState<any>(null);
	const [error, setError] = useState<string | null>(null);
	const { selectedChain } = useChains();

	const theme = useTheme();
	const { sendTransaction, signTransaction, watchTransactionStatus } =
		useMoonAccount();
	const {
		data: simulationResult,
		error: simulationError,
		refetch: simulateTransaction,
	} = useQuery({
		queryKey: ["simulateTransaction", transaction],
		queryFn: async () => {
			setStatus("simulating");
			try {
				const result = await signTransaction(wallet, {
					...transaction,
					simulate: true,
				});
				console.log(result);
				setStatus("ready");
				return result;
			} catch (error) {
				const typedError = error as Error;
				setError(typedError.message || "Simulation failed");
				setStatus("failed");
				throw error;
			}
		},
		enabled: false,
	});

	useEffect(() => {
		if (simulationError) {
			setStatus("failed");
			setError(simulationError.message || "Simulation failed");
		}
	}, [simulationError]);
	const handleSign = useCallback(async () => {
		setStatus("pending");
		setError(null);
		try {
			const txResult = await sendTransaction({
				...transaction,
				from: wallet,
			});
			console.log(txResult);
			setTxHash(txResult.transaction_hash);
			watchTransactionStatus(txResult.transaction_hash)
				.then((result) => {
					setTxReceipt(txResult);
					setStatus(result.status);
					if (result.status === "completed" && onSuccess) {
						onSuccess(txResult);
					}
				})
				.catch((error) => {
					setError(error.message);
					setStatus("failed");
					if (onError) {
						onError(error.message);
					}
				});
		} catch (error) {
			const typedError = error as Error;
			console.error("Transaction failed:", error);
			setError(typedError.message || "Transaction failed");
			setStatus("failed");
			if (onError) {
				onError(typedError.message);
			}
		}
	}, [
		transaction,
		wallet,
		sendTransaction,
		watchTransactionStatus,
		onSuccess,
		onError,
	]);

	const handleCancel = useCallback(() => {
		setStatus("failed");
		setError("Transaction cancelled by user.");
		setTxHash(null);
		setTxReceipt(null);
		if (onError) {
			onError("Transaction cancelled by user.");
		}
	}, [txHash, onError]);

	useEffect(() => {
		if (autoExecute) {
			handleSign();
		} else {
			simulateTransaction();
		}
	}, [transaction, autoExecute, simulateTransaction, handleSign]);

	const renderTransactionDetails = () => {
		if (status === "simulating" || status === "pending") {
			return (
				<motion.div
					className={`bg-${theme.backgroundColorSecondary} p-6 rounded-lg shadow-md mb-4`}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
				>
					<div className="flex items-center justify-between mb-4">
						<h3 className={`text-${theme.accentColor} text-2xl font-bold`}>
							Transaction Details
						</h3>
						<div className="animate-pulse">
							<div className={`bg-${theme.accentColor} h-2 w-8 rounded-full`} />
						</div>
					</div>
					<p
						className={`text-${theme.textColor} text-lg leading-relaxed text-center`}
					>
						Simulating transaction...
					</p>
				</motion.div>
			);
		}

		if (simulationResult && simulationResult.transaction) {
			const tx = simulationResult.transaction;
			return (
				<motion.div
					className={`bg-${theme.backgroundColorSecondary} p-6 rounded-lg shadow-md mb-4`}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
				>
					<h3 className={`text-${theme.accentColor} text-2xl font-bold mb-4`}>
						Transaction Details
					</h3>
					<div
						className={`grid grid-cols-2 gap-4 text-${theme.textColor} text-lg`}
					>
						<div className="font-semibold">To:</div>
						<div>{tx.to}</div>
						<div className="font-semibold">From:</div>
						<div>{tx.from}</div>
						<div className="font-semibold">Value:</div>
						<div>
							{formatEther(tx.value || "0")}{" "}
							{tx.chainId === "137" ? "MATIC" : "ETH"}
						</div>
						{tx.gasLimit && (
							<>
								<div className="font-semibold">Gas Limit:</div>
								<div>{tx.gasLimit}</div>
							</>
						)}
						{tx.maxFeePerGas && (
							<>
								<div className="font-semibold">Max Fee:</div>
								<div>{`${formatUnits(tx.maxFeePerGas, "gwei")} Gwei`}</div>
							</>
						)}
						{tx.maxPriorityFeePerGas && (
							<>
								<div className="font-semibold">Max Priority Fee:</div>
								<div>{`${formatUnits(tx.maxPriorityFeePerGas, "gwei")} Gwei`}</div>
							</>
						)}
						<div className="font-semibold">Nonce:</div>
						<div>{tx.nonce}</div>
						<div className="font-semibold">Chain ID:</div>
						<div>{tx.chainId}</div>
						{tx.data && (
							<>
								<div className="font-semibold">Data:</div>
								<div className="truncate">{tx.data}</div>
							</>
						)}
						{tx.access_list?.length > 0 && (
							<>
								<div className="font-semibold">Access List:</div>
								<div>{tx.access_list.join(", ")}</div>
							</>
						)}
						{tx.blob_gas && (
							<>
								<div className="font-semibold">Blob Gas:</div>
								<div>{tx.blob_gas}</div>
							</>
						)}
						{tx.blob_gas_fee_cap && (
							<>
								<div className="font-semibold">Blob Gas Fee Cap:</div>
								<div>{tx.blob_gas_fee_cap}</div>
							</>
						)}
						{tx.blob_hashes?.length > 0 && (
							<>
								<div className="font-semibold">Blob Hashes:</div>
								<div>{tx.blob_hashes.join(", ")}</div>
							</>
						)}
					</div>
				</motion.div>
			);
		}

		return null;
	};

	const renderAssetChanges = (changes: SimulateAssetChangesChange[]) => (
		<motion.div
			className={`bg-${theme.backgroundColorSecondary} p-6 rounded-lg shadow-md mb-4`}
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
		>
			<h3 className={`text-${theme.accentColor} text-2xl font-bold mb-4`}>
				Asset Changes
			</h3>
			<div className="grid grid-cols-1 gap-4">
				{changes.map((change, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.1, duration: 0.3 }}
						className={`flex items-center p-4 bg-${theme.backgroundColor} rounded-lg shadow-md`}
					>
						<img
							src={change.logo}
							alt={`${change.name} logo`}
							className="w-10 h-10 mr-4 rounded-full"
						/>
						<div className="flex-grow">
							<p className={`text-${theme.textColor} text-lg font-semibold`}>
								{change.changeType} {change.amount} {change.symbol}
							</p>
							<p className={`text-${theme.textColorSecondary} text-sm`}>
								From: {change.from.slice(0, 6)}...{change.from.slice(-4)} → To:{" "}
								{change.to.slice(0, 6)}...{change.to.slice(-4)}
							</p>
						</div>
					</motion.div>
				))}
			</div>
		</motion.div>
	);

	const renderStatusIndicator = () => (
		<div className={`mt-4 flex items-center`}>
			<Progress.Root
				className={`h-2 w-full bg-${theme.backgroundColor} rounded-full overflow-hidden`}
				value={status === "completed" ? 100 : status === "pending" ? 50 : 0}
			>
				<Progress.Indicator
					className={`h-full bg-${theme.accentColor} transition-all duration-500 ease-in-out`}
					style={{
						width: `${status === "completed" ? 100 : status === "pending" ? 50 : 0}%`,
					}}
				/>
			</Progress.Root>
		</div>
	);

	return (
		<motion.div
			className={`bg-${theme.backgroundColor} p-4 rounded-lg shadow-md`}
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 10 }}
			transition={{ duration: 0.3 }}
		>
			{error && (
				<motion.div
					className={`mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md flex items-center`}
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 20 }}
					transition={{ duration: 0.3 }}
				>
					<XCircleIcon className="h-6 w-6 mr-2" />
					{error}
				</motion.div>
			)}
			{renderTransactionDetails()}
			{status === "ready" &&
				simulationResult &&
				simulationResult.simulation && (
					<>
						{renderAssetChanges(simulationResult.simulation.changes || [])}
						<motion.div
							className="mt-4 mb-2 flex justify-center"
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2, duration: 0.3 }}
						>
							<Tooltip content="This will execute the transaction. Make sure you have reviewed all details carefully.">
								<p className={`text-${theme.textColor} text-center`}>
									Review the transaction details and asset changes carefully
									before proceeding.
								</p>
							</Tooltip>
						</motion.div>
					</>
				)}
			{(status === "pending" || status === "completed") &&
				renderStatusIndicator()}

			<AnimatePresence>
				{status === "ready" && !autoExecute && !error && (
					<div className="flex space-x-4">
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={handleSign}
							className={`mt-4 w-full py-3 px-4 bg-${theme.accentColor} text-${theme.backgroundColor} rounded-md font-bold text-lg shadow-md`}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3 }}
						>
							Sign and Send Transaction
						</motion.button>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={handleCancel}
							className={`mt-4 w-full py-3 px-4 bg-red-600 text-white rounded-md font-bold text-lg shadow-md`}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3 }}
						>
							<Tooltip content="Cancel the transaction process">
								<Button
									onClick={handleCancel}
									variant="outlined"
									className="text-red-600"
								>
									Cancel
								</Button>
							</Tooltip>
						</motion.button>
					</div>
				)}

				{status === "pending" && (
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 20 }}
						transition={{ duration: 0.3 }}
						className={`mt-4 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-md flex items-center`}
					>
						<svg
							className="animate-spin -ml-1 mr-3 h-5 w-5 text-yellow-500"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="4"
							/>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							/>
						</svg>
						Transaction is pending. Please wait...
					</motion.div>
				)}

				{status === "completed" && txReceipt && (
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 20 }}
						transition={{ duration: 0.3 }}
						className={`mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md flex items-center`}
					>
						<CheckCircleIcon className="h-6 w-6 mr-2" />
						<div className="flex-grow">
							<h3 className="font-bold mb-2">Transaction Completed</h3>
							<p>
								Transaction Hash:{" "}
								<CopyToClipboard
									text={txHash || ""}
									onCopy={() => alert("Transaction hash copied to clipboard!")}
								>
									{selectedChain?.explorers &&
									Array.isArray(selectedChain.explorers) &&
									selectedChain.explorers.length > 0 ? (
										<a
											href={`${(selectedChain?.explorers as { url: string }[])?.[0]?.url}/tx/${txHash}`}
											target="_blank"
											rel="noopener noreferrer"
										>
											{txHash}
										</a>
									) : (
										<div>{txHash}</div>
									)}
								</CopyToClipboard>
							</p>
							<p>Block Number: {txReceipt.blockNumber}</p>
							{txReceipt.gasUsed && (
								<p>Gas Used: {txReceipt.gasUsed.toString()}</p>
							)}
						</div>
					</motion.div>
				)}
				{status === "failed" && (
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 20 }}
						transition={{ duration: 0.3 }}
						className={`mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md flex items-center`}
					>
						<XCircleIcon className="h-6 w-6 mr-2" />
						Transaction failed. Please try again.
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};
