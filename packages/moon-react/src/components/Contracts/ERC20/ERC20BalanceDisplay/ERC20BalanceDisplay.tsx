import { useErc20 } from '@/hooks';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

/**
 * Props for the ERC20BalanceDisplay component.
 *
 * @interface ERC20BalanceDisplayProps
 * @property {string} account - The account address to display the balance for.
 * @property {string} tokenAddress - The address of the ERC20 token contract.
 * @property {string} chainId - The ID of the blockchain network.
 * @property {string} [className] - Optional CSS class name for styling the component.
 */
export interface ERC20BalanceDisplayProps {
  account: string;
  tokenAddress: string;
  chainId: string;
  className?: string;
}

/**
 * ERC20BalanceDisplay is a React functional component that displays the balance of an ERC20 token for a given account.
 *
 * @param {ERC20BalanceDisplayProps} props - The properties for the component.
 * @param {string} props.account - The account address to fetch the balance for.
 * @param {string} props.tokenAddress - The address of the ERC20 token contract.
 * @param {number} props.chainId - The chain ID of the blockchain network.
 * @param {string} [props.className] - Optional additional class names for styling the component.
 *
 * @returns {JSX.Element} The rendered component displaying the ERC20 token balance.
 *
 * @example
 * ```tsx
 * <ERC20BalanceDisplay
 *   account="0x123..."
 *   tokenAddress="0xabc..."
 *   chainId={1}
 *   className="custom-class"
 * />
 * ```
 */
export const ERC20BalanceDisplay: React.FC<ERC20BalanceDisplayProps> = ({
  account,
  tokenAddress,
  chainId,
  className = '',
}) => {
  const { balanceOfErc20 } = useErc20();
  const [balance, setBalance] = useState<string>('');

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const result = await balanceOfErc20({
          account,
          address: tokenAddress,
          chainId,
        });
        setBalance(result.balance);
      } catch (error) {
        console.error('Failed to fetch balance:', error);
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
      Balance: {balance}
    </motion.div>
  );
};

export default ERC20BalanceDisplay;
