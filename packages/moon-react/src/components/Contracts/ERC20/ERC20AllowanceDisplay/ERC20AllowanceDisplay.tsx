import { useErc20 } from "@/hooks";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

/**
 * Props for the ERC20AllowanceDisplay component.
 *
 * @interface ERC20AllowanceDisplayProps
 * @property {string} owner - The address of the token owner.
 * @property {string} spender - The address of the spender.
 * @property {string} tokenAddress - The address of the ERC20 token contract.
 * @property {string} chainId - The ID of the blockchain network.
 * @property {string} [className] - Optional CSS class for styling the component.
 */
export interface ERC20AllowanceDisplayProps {
	owner: string;
	spender: string;
	tokenAddress: string;
	chainId: string;
	className?: string;
}

/**
 * ERC20AllowanceDisplay is a React functional component that displays the allowance of an ERC20 token.
 * It fetches the allowance for a given owner and spender from the blockchain and displays it.
 *
 * @component
 * @param {ERC20AllowanceDisplayProps} props - The properties for the component.
 * @param {string} props.owner - The address of the token owner.
 * @param {string} props.spender - The address of the spender.
 * @param {string} props.tokenAddress - The address of the ERC20 token contract.
 * @param {number} props.chainId - The ID of the blockchain network.
 * @param {string} [props.className] - Optional additional CSS class names to apply to the component.
 *
 * @returns {JSX.Element} The rendered component displaying the allowance.
 */
export const ERC20AllowanceDisplay: React.FC<ERC20AllowanceDisplayProps> = ({
	owner,
	spender,
	tokenAddress,
	chainId,
	className = "",
}) => {
	const { allowanceErc20 } = useErc20();
	const [allowance, setAllowance] = useState<string>("");

	useEffect(() => {
		const fetchAllowance = async () => {
			try {
				const result = await allowanceErc20({
					account: owner,
					address: tokenAddress,
					owner,
					spender,
					chainId,
				});
				setAllowance(result);
			} catch (error) {
				console.error("Failed to fetch allowance:", error);
			}
		};

		fetchAllowance();
	}, [owner, spender, tokenAddress, chainId]);

	return (
		<motion.div
			className={`text-lg font-semibold ${className}`}
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			Allowance: {allowance}
		</motion.div>
	);
};

export default ERC20AllowanceDisplay;
