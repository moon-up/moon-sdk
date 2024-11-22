// ... existing code ...

import * as RadixDialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useChains } from "@/hooks/moon/useChain";
// ... existing code ...

const MotionRadixContent = motion(RadixDialog.Content);

export const ChainSelectionModal = () => {
	const { selectedChain, switchChain, chains } = useChains();
	const [isOpen, setIsOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	const handleChainSwitch = (chainId: number) => {
		switchChain(chainId);
		handleClose();
	};

	const filteredChains = chains.filter((chain) =>
		chain.name?.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	useEffect(() => {
		// Ensure any necessary cleanup
		return () => {
			setIsOpen(false);
		};
	}, []);

	return (
		<RadixDialog.Root open={isOpen} onOpenChange={setIsOpen}>
			<RadixDialog.Trigger asChild>
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
				className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-lg shadow-lg p-6 max-w-md"
			>
				<RadixDialog.Title className="text-lg font-semibold mb-4 text-white">
					Select Chain
				</RadixDialog.Title>
				<div className="flex items-center mb-4">
					<FaSearch className="mr-2 text-gray-400" />
					<input
						type="text"
						placeholder="Search chains..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="flex-1 px-2 py-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<div className="max-h-60 overflow-y-auto">
					{filteredChains.map((chain) => (
						<div
							key={chain.id}
							className="flex items-center cursor-pointer hover:bg-gray-700 p-2 rounded-md mb-2"
							onClick={() => handleChainSwitch(chain.chain_id!)}
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
					))}
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
