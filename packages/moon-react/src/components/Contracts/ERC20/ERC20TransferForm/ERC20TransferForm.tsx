import { Button, Input } from '@/components';
import { useErc20 } from '@/hooks';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

/**
 * Props for the ERC20TransferForm component.
 *
 * @interface ERC20TransferFormProps
 * @property {string} accountName - The name of the account initiating the transfer.
 * @property {string} tokenAddress - The address of the ERC20 token contract.
 * @property {string} chainId - The ID of the blockchain network.
 * @property {string} [className] - Optional CSS class for custom styling.
 */
export interface ERC20TransferFormProps {
  accountName: string;
  tokenAddress: string;
  chainId: string;
  className?: string;
}

/**
 * ERC20TransferForm is a React functional component that renders a form for transferring ERC20 tokens.
 *
 * @param {ERC20TransferFormProps} props - The properties for the ERC20TransferForm component.
 * @param {string} props.accountName - The name of the account initiating the transfer.
 * @param {string} props.tokenAddress - The address of the ERC20 token contract.
 * @param {number} props.chainId - The ID of the blockchain network.
 * @param {string} [props.className] - Optional additional class names for styling the form.
 *
 * @returns {JSX.Element} The rendered ERC20 transfer form component.
 *
 * @example
 * ```tsx
 * <ERC20TransferForm
 *   accountName="myAccount"
 *   tokenAddress="0x1234567890abcdef"
 *   chainId={1}
 *   className="my-custom-class"
 * />
 * ```
 */
export const ERC20TransferForm: React.FC<ERC20TransferFormProps> = ({
  accountName,
  tokenAddress,
  chainId,
  className = '',
}) => {
  const { transferErc20 } = useErc20();
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleTransfer = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await transferErc20({
        accountName,
        transaction: {
          to: recipient,
          amount,
          contract_address: tokenAddress,
          chain_id: chainId,
          broadcast: true,
          value: '0',
        },
      });
    } catch (error) {
      console.error('Transfer failed:', error);
    }
  };

  return (
    <motion.form
      className={`space-y-4 ${className}`}
      onSubmit={handleTransfer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Input
        type="text"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        placeholder="Recipient Address"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Button type="submit">Transfer</Button>
    </motion.form>
  );
};

export default ERC20TransferForm;
