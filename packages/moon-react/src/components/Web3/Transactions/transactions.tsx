import { useTheme } from "@/context";
import { useMoonAccount } from "@/hooks";
import type {
	SimulateAssetChangesChange,
	SimulateAssetChangesResponse,
} from "@moonup/moon-api";
import * as Dialog from "@radix-ui/react-dialog";
import * as Progress from "@radix-ui/react-progress";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

interface TransactionProps {
	wallet: string;
	transaction: any;
}

export const Transaction: React.FC<TransactionProps> = ({
	wallet,
	transaction,
}) => {
	const [status, setStatus] = useState<
		"initial" | "simulating" | "ready" | "pending" | "completed" | "failed"
	>("initial");
	const [simulationResult, setSimulationResult] =
		useState<SimulateAssetChangesResponse | null>(null);
	const [txHash, setTxHash] = useState<string | null>(null);
	const [txReceipt, setTxReceipt] = useState<any>(null);

	const theme = useTheme();
	const { sendTransaction, signTransaction } = useMoonAccount();

	React.useEffect(() => {
		simulateTransaction();
	}, [transaction]);

	const simulateTransaction = async () => {
		setStatus("simulating");
		try {
			// await estimateGas(transaction);
			const simulationResult = await signTransaction(wallet, {
				...transaction,
				simulate: true,
			});
			console.log(simulationResult);
			setSimulationResult(simulationResult.simulation);
			setStatus("ready");
		} catch (error) {
			console.error("Simulation failed:", error);
			setStatus("failed");
		}
	};

	const handleSign = async () => {
		setStatus("pending");
		try {
			const result = await sendTransaction(transaction);
			setTxHash(result.hash);
			watchTransactionStatus(result);
		} catch (error) {
			console.error("Transaction failed:", error);
			setStatus("failed");
		}
	};

	const watchTransactionStatus = async (txResult: any) => {
		if (txResult.status === "pending") {
			setTxHash(txResult.hash);
			setStatus("pending");
		} else if (txResult.status === "completed") {
			setTxHash(txResult.hash);
			setTxReceipt(txResult.receipt);
			setStatus("completed");
		} else if (txResult.status === "failed") {
			setStatus("failed");
		}
	};

	const renderTransactionDetails = () => (
		<div className={`bg-${theme.backgroundColor} p-4 rounded-lg shadow-md`}>
			<h3 className={`text-${theme.accentColor} text-xl font-bold mb-2`}>
				Transaction Details
			</h3>
			<ul className={`text-${theme.textColor}`}>
				<li>To: {transaction.to}</li>
				<li>Value: {transaction.value?.toString() ?? "N/A"} ETH</li>
				<li>Gas Limit: {transaction.gasLimit?.toString() ?? "N/A"}</li>
				<li>Max Fee: {transaction.maxFeePerGas?.toString() ?? "N/A"} Gwei</li>

				<li>
					Max Priority Fee:{" "}
					{transaction.maxPriorityFeePerGas?.toString() ?? "N/A"} Gwei
				</li>
			</ul>
		</div>
	);
	const renderAssetChanges = (changes: SimulateAssetChangesChange[]) => (
		<div
			className={`mt-4 bg-${theme.backgroundColor} p-4 rounded-lg shadow-md`}
		>
			<h3 className={`text-${theme.accentColor} text-xl font-bold mb-2`}>
				Asset Changes
			</h3>
			{changes.map((change, index) => (
				<div
					key={index}
					className={`mb-2 p-2 bg-${theme.backgroundColorSecondary} bg-opacity-10 rounded`}
				>
					<p>
						{change.changeType} {change.assetType}
					</p>
					<p>From: {change.from}</p>
					<p>To: {change.to}</p>
					{change.amount && (
						<p>
							Amount: {change.amount} {change.symbol}
						</p>
					)}
					{change.symbol && <p>Symbol: {change.symbol}</p>}
					{change.name && <p>Name: {change.name}</p>}
					{change.logo && (
						<img
							src={change.logo}
							alt={`${change.name} logo`}
							className="w-6 h-6 mt-2"
						/>
					)}
				</div>
			))}
		</div>
	);

	const renderSimulationResult = () => (
		<div
			className={`bg-${theme.backgroundColor} p-4 rounded-lg shadow-md mt-4`}
		>
			<h3 className={`text-${theme.accentColor} text-xl font-bold mb-2`}>
				Simulation Result
			</h3>
			{simulationResult?.error ? (
				<p className="text-red-500">{simulationResult.error.message}</p>
			) : (
				<>
					<p>
						Gas Used: {Number.parseInt(simulationResult?.gasUsed || "0", 16)}
					</p>
					{simulationResult?.changes &&
						renderAssetChanges(simulationResult.changes)}
				</>
			)}
		</div>
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
			<span className={`ml-2 text-${theme.textColor}`}>
				{status === "completed"
					? "Completed"
					: status === "pending"
						? "Pending"
						: "Preparing"}
			</span>
		</div>
	);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			className={`max-w-md mx-auto bg-${theme.backgroundColor} p-6 rounded-xl shadow-lg`}
		>
			{renderTransactionDetails()}
			{status === "ready" && simulationResult && renderSimulationResult()}
			{(status === "pending" || status === "completed") &&
				renderStatusIndicator()}

			<AnimatePresence>
				{status === "ready" && (
					<Dialog.Root>
						<Dialog.Trigger asChild>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={`mt-4 w-full py-2 px-4 bg-${theme.accentColor} text-${theme.backgroundColor} rounded-md font-bold`}
							>
								Sign Transaction
							</motion.button>
						</Dialog.Trigger>
						<Dialog.Portal>
							<Dialog.Overlay className="bg-black bg-opacity-50 fixed inset-0" />
							<Dialog.Content
								className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-${theme.backgroundColor} p-6 rounded-xl shadow-lg`}
							>
								<Dialog.Title
									className={`text-${theme.accentColor} text-xl font-bold mb-4`}
								>
									Confirm Transaction
								</Dialog.Title>
								<Dialog.Description className={`text-${theme.textColor} mb-4`}>
									Are you sure you want to sign and send this transaction?
								</Dialog.Description>
								<div className="flex justify-end space-x-2">
									<Dialog.Close asChild>
										<motion.button
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											className={`py-2 px-4 bg-${theme.buttonColorSecondary} text-${theme.backgroundColor} rounded-md font-bold`}
										>
											Cancel
										</motion.button>
									</Dialog.Close>
									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										onClick={handleSign}
										className={`py-2 px-4 bg-${theme.accentColor} text-${theme.backgroundColor} rounded-md font-bold`}
									>
										Confirm
									</motion.button>
								</div>
							</Dialog.Content>
						</Dialog.Portal>
					</Dialog.Root>
				)}

				{status === "completed" && txReceipt && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className={`mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md`}
					>
						<h3 className="font-bold mb-2">Transaction Completed</h3>
						<p>Transaction Hash: {txHash}</p>
						<p>Block Number: {txReceipt.blockNumber}</p>
						<p>Gas Used: {txReceipt.gasUsed.toString()}</p>
					</motion.div>
				)}

				{status === "failed" && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className={`mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md`}
					>
						Transaction failed. Please try again.
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};
