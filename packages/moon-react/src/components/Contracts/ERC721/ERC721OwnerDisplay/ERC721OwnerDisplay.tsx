import { useErc721 } from '@/hooks';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

/**
 * Props for the ERC721OwnerDisplay component.
 *
 * @property {string} tokenId - The ID of the token.
 * @property {string} tokenAddress - The address of the token contract.
 * @property {string} chainId - The ID of the blockchain network.
 * @property {string} [className] - Optional CSS class name for styling.
 */
export interface ERC721OwnerDisplayProps {
  tokenId: string;
  tokenAddress: string;
  chainId: string;
  className?: string;
}

/**
 * ERC721OwnerDisplay component displays the owner of an ERC721 token.
 *
 * @component
 * @param {ERC721OwnerDisplayProps} props - The properties for the component.
 * @param {string} props.tokenId - The ID of the ERC721 token.
 * @param {string} props.tokenAddress - The address of the ERC721 token contract.
 * @param {number} props.chainId - The ID of the blockchain network.
 * @param {string} [props.className] - Additional CSS classes to apply to the component.
 *
 * @returns {React.FC} A React functional component that displays the owner of the specified ERC721 token.
 *
 * @example
 * <ERC721OwnerDisplay
 *   tokenId="1"
 *   tokenAddress="0x1234567890abcdef1234567890abcdef12345678"
 *   chainId={1}
 *   className="custom-class"
 * />
 */
export const ERC721OwnerDisplay: React.FC<ERC721OwnerDisplayProps> = ({
  tokenId,
  tokenAddress,
  chainId,
  className = '',
}) => {
  const { getErc721OwnerOf } = useErc721();
  const [owner, setOwner] = useState<string>('');

  useEffect(() => {
    const fetchOwner = async () => {
      try {
        const result = await getErc721OwnerOf({
          tokenId,
          address: tokenAddress,
          chainId,
        });
        setOwner(result.owner);
      } catch (error) {
        console.error('Failed to fetch ERC721 owner:', error);
      }
    };

    fetchOwner();
  }, [tokenId, tokenAddress, chainId]);

  return (
    <motion.div
      className={`text-lg font-semibold ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      ERC721 Token Owner: {owner}
    </motion.div>
  );
};

export default ERC721OwnerDisplay;
