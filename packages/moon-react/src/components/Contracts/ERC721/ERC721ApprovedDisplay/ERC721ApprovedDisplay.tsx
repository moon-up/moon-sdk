import { useErc721 } from '@/hooks';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

/**
 * Props for the ERC721ApprovedDisplay component.
 *
 * @interface ERC721ApprovedDisplayProps
 *
 * @property {string} tokenId - The ID of the token to display.
 * @property {string} tokenAddress - The address of the token contract.
 * @property {string} chainId - The ID of the blockchain network.
 * @property {string} [className] - Optional CSS class name for styling the component.
 */
export interface ERC721ApprovedDisplayProps {
  tokenId: string;
  tokenAddress: string;
  chainId: string;
  className?: string;
}

/**
 * ERC721ApprovedDisplay component fetches and displays the approved address for a given ERC721 token.
 *
 * @component
 * @param {ERC721ApprovedDisplayProps} props - The properties for the component.
 * @param {string} props.tokenId - The ID of the ERC721 token.
 * @param {string} props.tokenAddress - The address of the ERC721 token contract.
 * @param {number} props.chainId - The ID of the blockchain network.
 * @param {string} [props.className] - Additional CSS classes to apply to the component.
 *
 * @returns {JSX.Element} The rendered component displaying the approved address.
 *
 * @example
 * <ERC721ApprovedDisplay
 *   tokenId="1"
 *   tokenAddress="0x1234567890abcdef1234567890abcdef12345678"
 *   chainId={1}
 *   className="my-custom-class"
 * />
 */
export const ERC721ApprovedDisplay: React.FC<ERC721ApprovedDisplayProps> = ({
  tokenId,
  tokenAddress,
  chainId,
  className = '',
}) => {
  const { getErc721Approved } = useErc721();
  const [approvedAddress, setApprovedAddress] = useState<string>('');

  useEffect(() => {
    const fetchApproved = async () => {
      try {
        const result = await getErc721Approved({
          tokenId,
          address: tokenAddress,
          chainId,
        });
        setApprovedAddress(result.transaction?.to || '');
      } catch (error) {
        console.error('Failed to fetch ERC721 approved address:', error);
      }
    };

    fetchApproved();
  }, [tokenId, tokenAddress, chainId]);

  return (
    <motion.div
      className={`text-lg font-semibold ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      ERC721 Approved Address: {approvedAddress}
    </motion.div>
  );
};
