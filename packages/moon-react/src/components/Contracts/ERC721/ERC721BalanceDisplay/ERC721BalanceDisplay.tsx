import { useErc721 } from '@/hooks';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

/**
 * Props for the ERC721BalanceDisplay component.
 *
 * @interface ERC721BalanceDisplayProps
 * @property {string} account - The account address to check the balance for.
 * @property {string} tokenAddress - The address of the ERC721 token contract.
 * @property {string} chainId - The ID of the blockchain network.
 * @property {string} [className] - Optional CSS class name for styling the component.
 */
export interface ERC721BalanceDisplayProps {
  account: string;
  tokenAddress: string;
  chainId: string;
  className?: string;
}

/**
 * ERC721BalanceDisplay component displays the balance of ERC721 tokens for a given account.
 *
 * @component
 * @param {ERC721BalanceDisplayProps} props - The properties for the component.
 * @param {string} props.account - The account address to fetch the balance for.
 * @param {string} props.tokenAddress - The address of the ERC721 token contract.
 * @param {number} props.chainId - The chain ID of the blockchain network.
 * @param {string} [props.className] - Additional CSS classes to apply to the component.
 *
 * @returns {React.FC<ERC721BalanceDisplayProps>} A React functional component that displays the ERC721 token balance.
 *
 * @example
 * <ERC721BalanceDisplay
 *   account="0x123..."
 *   tokenAddress="0xabc..."
 *   chainId={1}
 *   className="my-custom-class"
 * />
 */
export const ERC721BalanceDisplay: React.FC<ERC721BalanceDisplayProps> = ({
  account,
  tokenAddress,
  chainId,
  className = '',
}) => {
  const { getErc721BalanceOf } = useErc721();
  const [balance, setBalance] = useState<string>('');

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const result = await getErc721BalanceOf({
          account,
          address: tokenAddress,
          chainId,
        });
        setBalance(result.balance);
      } catch (error) {
        console.error('Failed to fetch ERC721 balance:', error);
      }
    };

    fetchBalance();
  }, [account, tokenAddress, chainId]);

  return (
    <motion.div
      className={`text-lg font-semibold ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      ERC721 Balance: {balance}
    </motion.div>
  );
};
