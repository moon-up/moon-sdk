import { useErc20 } from '@/hooks';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

/**
 * Props for the ERC20TotalSupplyDisplay component.
 *
 * @interface ERC20TotalSupplyDisplayProps
 * @property {string} tokenAddress - The address of the ERC20 token.
 * @property {string} chainId - The ID of the blockchain network.
 * @property {string} [className] - Optional CSS class name for styling.
 */
export interface ERC20TotalSupplyDisplayProps {
  tokenAddress: string;
  chainId: string;
  className?: string;
}

/**
 * ERC20TotalSupplyDisplay is a React functional component that displays the total supply of an ERC20 token.
 * It fetches the total supply using the `getTotalSupplyErc20` function from the `useErc20` hook.
 * The total supply is fetched based on the provided `tokenAddress` and `chainId` props.
 *
 * @component
 * @param {ERC20TotalSupplyDisplayProps} props - The properties for the component.
 * @param {string} props.tokenAddress - The address of the ERC20 token.
 * @param {number} props.chainId - The chain ID of the blockchain network.
 * @param {string} [props.className] - Additional CSS classes to apply to the component.
 *
 * @example
 * <ERC20TotalSupplyDisplay tokenAddress="0x..." chainId={1} className="my-class" />
 *
 * @returns {JSX.Element} The rendered component displaying the total supply of the ERC20 token.
 */
export const ERC20TotalSupplyDisplay: React.FC<
  ERC20TotalSupplyDisplayProps
> = ({ tokenAddress, chainId, className = '' }) => {
  const { getTotalSupplyErc20 } = useErc20();
  const [totalSupply, setTotalSupply] = useState<string>('');

  useEffect(() => {
    const fetchTotalSupply = async () => {
      try {
        const result = await getTotalSupplyErc20({
          account: '0x0000000000000000000000000000000000000000', // Use a dummy address to get the total supply
          address: tokenAddress,
          chainId,
        });
        setTotalSupply(result);
      } catch (error) {
        console.error('Failed to fetch total supply:', error);
      }
    };

    fetchTotalSupply();
  }, [tokenAddress, chainId]);

  return (
    <motion.div
      className={`text-lg font-semibold ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Total Supply: {totalSupply}
    </motion.div>
  );
};

export default ERC20TotalSupplyDisplay;
