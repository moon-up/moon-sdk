import React, { useState, useCallback, useMemo } from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { FixedSizeList as List } from "react-window";
import { useChains } from "@/hooks/moon/useChain";
import { Input } from "@/components";

const MotionRadixContent = motion(RadixDialog.Content);

export type ChainSelectionModalProps = {
	chainIdFilterList?: number[];
	title?: string;
	position?:
		| "center"
		| "top-right"
		| "top-left"
		| "bottom-right"
		| "bottom-left";
	onChange?: (e: any) => void;
};

export const ChainSelectionModal: React.FC<ChainSelectionModalProps> = ({
	chainIdFilterList,
	title = "Select Chain",
	position = "center",
	onChange,
}) => {
	const { selectedChain, switchChain, chains } = useChains();
	const [isOpen, setIsOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	const sortedChains = useMemo(() => {
		return chains.sort((a, b) => {
			if (!a?.name || !b?.name) return 0;
			return a.name.localeCompare(b.name);
		});
	}, [chains]);

	const filteredChains = useMemo(() => {
		return sortedChains.filter((chain) => {
			if (!chain.name) return false;
			return (
				chain.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
				(!chainIdFilterList || chainIdFilterList.includes(chain.chain_id || -1))
			);
		});
	}, [sortedChains, searchTerm, chainIdFilterList]);

	const handleChainSelect = (chainId: number) => {
		switchChain(chainId);
		handleClose();
		const fakeEvent = { target: { value: chainId } };
		onChange && onChange(fakeEvent);
	};

	const getPositionStyles = () => {
		switch (position) {
			case "top-right":
				return "top-4 right-4";
			case "top-left":
				return "top-4 left-4";
			case "bottom-right":
				return "bottom-4 right-4";
			case "bottom-left":
				return "bottom-4 left-4";
			case "center":
			default:
				return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
		}
	};

	const Row = useCallback(
		({ index, style }: { index: number; style: React.CSSProperties }) => {
			const chain = filteredChains[index];
			return (
				<div
					style={style}
					key={chain.id}
					className="flex items-center cursor-pointer hover:bg-gray-700 p-2 rounded-md mb-2"
					onClick={() => handleChainSelect(chain.chain_id!)}
				>
					<img
						src={
							chain.icon
								? `https://icons.llamao.fi/icons/chains/rsz_${chain.icon}.jpg`
								: "/unknown-logo.png"
						}
						alt={chain.name || "Unknown Chain"}
						className="w-6 h-6 mr-2"
					/>
					<span className="text-white">{chain.name}</span>
				</div>
			);
		},
		[filteredChains, handleChainSelect],
	);

	return (
		<RadixDialog.Root open={isOpen} onOpenChange={setIsOpen}>
			<RadixDialog.Trigger
				asChild
				style={{
					transform: "translate(-50%, 0)",
				}}
			>
				<div className="flex items-center cursor-pointer" onClick={handleOpen}>
					<img
						src={
							selectedChain?.icon
								? `https://icons.llamao.fi/icons/chains/rsz_${selectedChain.icon}.jpg`
								: "/unknown-logo.png"
						}
						alt={selectedChain?.name || "Unknown Chain"}
						className="w-6 h-6 mr-2"
					/>
					<span>{selectedChain?.name || "Select Chain"}</span>
				</div>
			</RadixDialog.Trigger>

			<MotionRadixContent
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -20 }}
				transition={{ duration: 0.3 }}
				className={`fixed z-50 ${getPositionStyles()} bg-gray-800 rounded-lg shadow-lg p-6 max-w-md`}
				style={{ width: "50%", transform: "translate(-50%, -50%)" }}
			>
				<RadixDialog.Title className="text-lg font-semibold mb-4 text-white">
					{title}
				</RadixDialog.Title>
				<div className="flex items-center mb-4">
					<FaSearch className="mr-2 text-gray-400" />
					<Input
						type="text"
						placeholder="Search chains..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="flex-1 px-2 py-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<div className="max-h-60 overflow-y-auto">
					<List
						height={240}
						itemCount={filteredChains.length}
						itemSize={50}
						width="100%"
					>
						{Row}
					</List>
				</div>
				<RadixDialog.Close asChild>
					<button
						className="px-4 py-2 mt-4 ml-auto text-sm font-semibold text-blue-500 hover:text-blue-700 rounded-md"
						onClick={handleClose}
					>
						Close
					</button>
				</RadixDialog.Close>
			</MotionRadixContent>
		</RadixDialog.Root>
	);
};

export default ChainSelectionModal;
