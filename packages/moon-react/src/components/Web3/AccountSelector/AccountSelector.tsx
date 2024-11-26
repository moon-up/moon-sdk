import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context";
import { useMoonAccount } from "@/hooks";

interface AccountSelectorProps {
	onAccountSelect: (account: string) => void;
	className?: string;
}

export const AccountSelector: React.FC<AccountSelectorProps> = ({
	onAccountSelect,
	className,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const { accounts, account: selectedAccount, setAccount } = useMoonAccount();
	const theme = useTheme();

	const handleAccountSelect = (account: string) => {
		setAccount(account);
		onAccountSelect(account);
		setIsOpen(false);
	};

	return (
		<div className={`relative ${className}`}>
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={() => setIsOpen(!isOpen)}
				className={`
          flex items-center justify-between w-full px-4 py-2 text-left
          bg-${theme?.colors.primary} text-${theme?.colors.text}
          rounded-lg shadow-md hover:shadow-lg transition-all duration-300
        `}
			>
				<span className="truncate">
					{selectedAccount || "Select an account"}
				</span>
				<svg
					className={`w-5 h-5 ml-2 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</motion.button>

			<AnimatePresence>
				{isOpen && (
					<motion.ul
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.2 }}
						className={`
              absolute z-10 w-full mt-2 py-1 bg-${theme?.colors.background}
              rounded-lg shadow-lg max-h-60 overflow-auto
            `}
					>
						{accounts.map((account) => (
							<motion.li
								key={account}
								whileHover={{ backgroundColor: theme?.colors.hover }}
								className={`
                  px-4 py-2 cursor-pointer
                  ${selectedAccount === account ? `bg-${theme?.colors.selected} text-${theme?.colors.selectedText}` : ""}
                `}
								onClick={() => handleAccountSelect(account)}
							>
								<span className="truncate">{account}</span>
							</motion.li>
						))}
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	);
};
