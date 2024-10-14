import { useErc721 } from '@/hooks';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

/**
 * Props for the ERC721IsApprovedForAllDisplay component.
 *
 * @interface ERC721IsApprovedForAllDisplayProps
 *
 * @property {string} owner - The address of the owner of the ERC721 tokens.
 * @property {string} operator - The address of the operator to check approval status for.
 * @property {string} tokenAddress - The address of the ERC721 token contract.
 * @property {string} chainId - The ID of the blockchain network.
 * @property {string} [className] - Optional CSS class name to apply to the component.
 */
export interface ERC721IsApprovedForAllDisplayProps {
  owner: string;
  operator: string;
  tokenAddress: string;
  chainId: string;
  className?: string;
}

/**
 * ERC721IsApprovedForAllDisplay component displays the approval status of an ERC721 token.
 *
 * @component
 * @param {ERC721IsApprovedForAllDisplayProps} props - The properties for the component.
 * @param {string} props.owner - The address of the owner of the ERC721 token.
 * @param {string} props.operator - The address of the operator to check approval status for.
 * @param {string} props.tokenAddress - The address of the ERC721 token contract.
 * @param {number} props.chainId - The chain ID of the blockchain network.
 * @param {string} [props.className] - Additional CSS classes to apply to the component.
 *
 * @returns {JSX.Element} The rendered component displaying the approval status.
 *
 * @example
 * <ERC721IsApprovedForAllDisplay
 *   owner="0x123..."
 *   operator="0xabc..."
 *   tokenAddress="0xdef..."
 *   chainId={1}
 * />
 */
export const ERC721IsApprovedForAllDisplay: React.FC<
  ERC721IsApprovedForAllDisplayProps
> = ({ owner, operator, tokenAddress, chainId, className = '' }) => {
  const { getErc721IsApprovedForAll } = useErc721();
  const [isApproved, setIsApproved] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchApprovalStatus = async () => {
      try {
        const result = await getErc721IsApprovedForAll({
          owner,
          operator,
          address: tokenAddress,
          chainId,
        });
        setIsApproved(result.isApproved);
      } catch (error) {
        console.error('Failed to fetch ERC721 approval status:', error);
      }
    };

    fetchApprovalStatus();
  }, [owner, operator, tokenAddress, chainId]);

  return (
    <motion.div
      className={`text-lg font-semibold ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      ERC721 Is Approved For All:{' '}
      {isApproved === null ? 'Loading...' : isApproved.toString()}
    </motion.div>
  );
};

export default ERC721IsApprovedForAllDisplay;
