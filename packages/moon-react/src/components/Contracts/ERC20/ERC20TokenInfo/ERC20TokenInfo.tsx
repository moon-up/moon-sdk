import { useErc20 } from '@/hooks';
import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

/**
 * Props for the ERC20TokenInfo component.
 *
 * @interface ERC20TokenInfoProps
 * @property {string} tokenAddress - The address of the ERC20 token.
 * @property {string} chainId - The ID of the blockchain network.
 * @property {string} [className] - Optional CSS class for styling.
 */
export interface ERC20TokenInfoProps {
  tokenAddress: string;
  chainId: string;
  className?: string;
}

/**
 * ERC20TokenInfo component fetches and displays information about an ERC20 token.
 *
 * @component
 * @param {ERC20TokenInfoProps} props - The properties for the component.
 * @param {string} props.tokenAddress - The address of the ERC20 token.
 * @param {number} props.chainId - The chain ID where the token is deployed.
 * @param {string} [props.className] - Optional additional class names for styling.
 *
 * @returns {JSX.Element} A React component that displays the token's name, symbol, and decimals.
 *
 * @example
 * ```tsx
 * <ERC20TokenInfo tokenAddress="0x1234567890abcdef" chainId={1} />
 * ```
 */
export const ERC20TokenInfo: React.FC<ERC20TokenInfoProps> = ({
  tokenAddress,
  chainId,
  className = '',
}) => {
  const { getNameErc20, getSymbolErc20, getDecimalsErc20 } = useErc20();
  const [name, setName] = useState<string>('');
  const [symbol, setSymbol] = useState<string>('');
  const [decimals, setDecimals] = useState<number>(0);

  useEffect(() => {
    const fetchTokenInfo = async () => {
      try {
        const [nameResult, symbolResult, decimalsResult] = await Promise.all([
          getNameErc20({
            address: tokenAddress,
            chainId,
            account: '0x0000000000000000000000000000000000000000',
          }),
          getSymbolErc20({
            address: tokenAddress,
            chainId,
            account: '0x0000000000000000000000000000000000000000',
          }),
          getDecimalsErc20({
            address: tokenAddress,
            chainId,
            account: '0x0000000000000000000000000000000000000000',
          }),
        ]);
        setName(nameResult);
        setSymbol(symbolResult);
        setDecimals(decimalsResult);
      } catch (error) {
        console.error('Failed to fetch token info:', error);
      }
    };

    fetchTokenInfo();
  }, [tokenAddress, chainId]);

  return (
    <motion.div
      className={`space-y-2 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-lg font-semibold">Token Info</div>
      <div>Name: {name}</div>
      <div>Symbol: {symbol}</div>
      <div>Decimals: {decimals}</div>
    </motion.div>
  );
};

export default ERC20TokenInfo;
