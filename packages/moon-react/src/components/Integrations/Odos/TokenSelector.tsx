import React, { useState, useMemo } from "react";
import { FiChevronDown } from "react-icons/fi";
import * as RadixDialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context";

interface TokenSelectorProps {
	tokens: any[];
	selectedToken: any;
	onSelect: (token: any) => void;

	children?: React.ReactNode;
}

export const TokenSelector: React.FC<TokenSelectorProps> = ({
	tokens,
	selectedToken,
	onSelect,
	children,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const theme = useTheme();

	const filteredTokens = useMemo(() => {
		return tokens.filter(
			(token) =>
				token.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
				token.name.toLowerCase().includes(searchTerm.toLowerCase()),
		);
	}, [tokens, searchTerm]);

	const sortedTokens = useMemo(() => {
		return filteredTokens.sort((a, b) => {
			const balanceA = Number.parseFloat(a.balance || "0");
			const balanceB = Number.parseFloat(b.balance || "0");
			return balanceB - balanceA;
		});
	}, [filteredTokens]);

	return (
		<RadixDialog.Root open={isOpen} onOpenChange={setIsOpen}>
			<RadixDialog.Trigger asChild>
				{children || (
					<button
						className={`flex items-center justify-between w-full p-2 rounded-md bg-${theme.backgroundColorSecondary} text-${theme.textColor}`}
					>
						{selectedToken ? (
							<>
								<div className="flex items-center">
									<img
										src={`https://assets.odos.xyz/tokens/${selectedToken.symbol}.webp`}
										alt={selectedToken.symbol}
										className="w-6 h-6 mr-2 rounded-full"
										loading="lazy"
									/>
									<span>{selectedToken.symbol}</span>
								</div>
								<FiChevronDown />
							</>
						) : (
							<span>Select token</span>
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
									Select a token
								</RadixDialog.Title>
								<input
									type="text"
									placeholder="Search tokens"
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className={`w-full p-2 mb-4 rounded-md bg-${theme.backgroundColorSecondary} text-${theme.textColor}`}
								/>
								<div
									className={`max-h-60 overflow-y-auto bg-${theme.backgroundColorSecondary} rounded-md`}
								>
									{sortedTokens.map((token) => (
										<button
											key={token.address}
											onClick={() => {
												onSelect(token);
												setIsOpen(false);
											}}
											className={`flex items-center w-full p-2 hover:bg-${theme.backgroundColorSecondary} rounded-md`}
										>
											<img
												src={`https://assets.odos.xyz/tokens/${token.symbol}.webp`}
												alt={token.symbol}
												className="w-6 h-6 mr-2 rounded-full"
												loading="lazy"
											/>
											<span className={`text-${theme.textColor}`}>
												{token.symbol}
											</span>
											<span
												className={`ml-2 text-sm text-${theme.textColorSecondary}`}
											>
												{token.name}
											</span>
											<span
												className={`ml-auto text-sm text-${theme.textColorSecondary}`}
											>
												{token.balance}
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
