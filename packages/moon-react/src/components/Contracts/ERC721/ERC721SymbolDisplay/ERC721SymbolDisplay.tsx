import { useErc721 } from '@/hooks';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

/**
 * Props for the ERC721SymbolDisplay component.
 *
 * @property tokenAddress - The address of the ERC721 token.
 * @property chainId - The ID of the blockchain network.
 * @property className - Optional CSS class name for styling.
 */
export interface ERC721SymbolDisplayProps {
  tokenAddress: string;
  chainId: string;
  className?: string;
}

/**
 * ERC721SymbolDisplay is a React functional component that displays the symbol of an ERC721 token.
 * It fetches the symbol using the `getErc721Symbol` function from the `useErc721` hook.
 *
 * @component
 * @param {ERC721SymbolDisplayProps} props - The properties passed to the component.
 * @param {string} props.tokenAddress - The address of the ERC721 token.
 * @param {number} props.chainId - The chain ID where the token resides.
 * @param {string} [props.className] - Additional CSS classes to apply to the component.
 *
 * @returns {JSX.Element} A motion.div element that displays the ERC721 token symbol.
 *
 * @example
 * ```tsx
 * <ERC721SymbolDisplay tokenAddress="0x123..." chainId={1} className="my-class" />
 * ```
 */
export const ERC721SymbolDisplay: React.FC<ERC721SymbolDisplayProps> = ({
  tokenAddress,
  chainId,
  className = '',
}) => {
  const { getErc721Symbol } = useErc721();
  const [symbol, setSymbol] = useState<string>('');

  useEffect(() => {
    const fetchSymbol = async () => {
      try {
        const result = await getErc721Symbol({
          address: tokenAddress,
          chainId,
        });
        setSymbol(result.symbol);
      } catch (error) {
        console.error('Failed to fetch ERC721 symbol:', error);
      }
    };

    fetchSymbol();
  }, [tokenAddress, chainId]);

  return (
    <motion.div
      className={`text-lg font-semibold ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      ERC721 Token Symbol: {symbol}
    </motion.div>
  );
};

export default ERC721SymbolDisplay;
