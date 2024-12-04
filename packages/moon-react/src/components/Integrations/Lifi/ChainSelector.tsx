import React, { useState, useMemo } from "react";
import { FiChevronDown } from "react-icons/fi";
import * as RadixDialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context";

interface ChainSelectorProps {
	chains: any[];
	selectedChain: any;
	onSelectChain: (chain: any) => void;
	children?: React.ReactNode;
	toolDetails?: {
		key: string;
		name: string;
		logoURI: string;
	};
}

export const ChainSelector: React.FC<ChainSelectorProps> = ({
	chains,
	selectedChain,
	onSelectChain,
	children,
	toolDetails,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const theme = useTheme();

	const filteredChains = useMemo(() => {
		return chains.filter((chain) =>
			chain.name.toLowerCase().includes(searchTerm.toLowerCase()),
		);
	}, [chains, searchTerm]);

	return (
		<RadixDialog.Root open={isOpen} onOpenChange={setIsOpen}>
			<RadixDialog.Trigger asChild>
				{children || (
					<button
						className={`flex items-center justify-between w-full p-2 rounded-md bg-${theme.backgroundColorSecondary} text-${theme.textColor}`}
					>
						{selectedChain ? (
							<>
								<div className="flex items-center">
									<img
										src={selectedChain.logoURI}
										alt={selectedChain.name}
										className="w-6 h-6 mr-2 rounded-full"
										loading="lazy"
									/>
									<span>{selectedChain.name}</span>
								</div>
								{toolDetails && (
									<img
										src={toolDetails.logoURI}
										alt={toolDetails.name}
										className="w-6 h-6 ml-2 rounded-full"
										loading="lazy"
									/>
								)}
								<FiChevronDown />
							</>
						) : (
							<span>Select chain</span>
						)}
					</button>
				)}
			</RadixDialog.Trigger>

			<AnimatePresence>
				{isOpen && (
					<RadixDialog.Portal forceMount>
						<RadixDialog.Overlay asChild>
							<motion.div
								className="fixed inset-0 bg-black/50"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							/>
						</RadixDialog.Overlay>
						<RadixDialog.Content asChild>
							<motion.div
								className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6 rounded-lg bg-${theme.backgroundColor} shadow-xl`}
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.95 }}
							>
								<RadixDialog.Title
									className={`text-lg font-bold mb-4 text-${theme.textColor}`}
								>
									Select a chain
								</RadixDialog.Title>
								<input
									type="text"
									placeholder="Search chains"
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className={`w-full p-2 mb-4 rounded-md bg-${theme.backgroundColorSecondary} text-${theme.textColor}`}
								/>
								<div
									className={`max-h-60 overflow-y-auto bg-${theme.backgroundColorSecondary} rounded-md`}
								>
									{filteredChains.map((chain) => (
										<button
											key={chain.chainId}
											onClick={() => {
												// chain is a nested dict
												onSelectChain(chain);

												setIsOpen(false);
											}}
											className={`flex items-center w-full p-2 hover:bg-${theme.backgroundColor} rounded-md`}
										>
											<img
												src={chain.logoURI}
												alt={chain.name}
												className="w-6 h-6 mr-2 rounded-full"
												loading="lazy"
											/>
											<span className={`text-${theme.textColor}`}>
												{chain.name}
											</span>
										</button>
									))}
								</div>
							</motion.div>
						</RadixDialog.Content>
					</RadixDialog.Portal>
				)}
			</AnimatePresence>
		</RadixDialog.Root>
	);
};
