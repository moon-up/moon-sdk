import { useErc721 } from '@/hooks';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

/**
 * Props for the ERC721NameDisplay component.
 *
 * @property tokenAddress - The address of the ERC721 token contract.
 * @property chainId - The ID of the blockchain network.
 * @property className - Optional CSS class name for styling the component.
 */
export interface ERC721NameDisplayProps {
  tokenAddress: string;
  chainId: string;
  className?: string;
}

/**
 * ERC721NameDisplay component displays the name of an ERC721 token.
 *
 * @component
 * @param {ERC721NameDisplayProps} props - The properties for the component.
 * @param {string} props.tokenAddress - The address of the ERC721 token.
 * @param {number} props.chainId - The chain ID where the token is deployed.
 * @param {string} [props.className] - Additional CSS classes to apply to the component.
 *
 * @returns {React.FC<ERC721NameDisplayProps>} A React functional component that displays the ERC721 token name.
 *
 * @example
 * <ERC721NameDisplay tokenAddress="0x123..." chainId={1} className="custom-class" />
 */
export const ERC721NameDisplay: React.FC<ERC721NameDisplayProps> = ({
  tokenAddress,
  chainId,
  className = '',
}) => {
  const { getErc721Name } = useErc721();
  const [name, setName] = useState<string>('');

  useEffect(() => {
    const fetchName = async () => {
      try {
        const result = await getErc721Name({
          address: tokenAddress,
          chainId,
        });
        setName(result.name);
      } catch (error) {
        console.error('Failed to fetch ERC721 name:', error);
      }
    };

    fetchName();
  }, [tokenAddress, chainId]);

  return (
    <motion.div
      className={`text-lg font-semibold ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      ERC721 Token Name: {name}
    </motion.div>
  );
};
