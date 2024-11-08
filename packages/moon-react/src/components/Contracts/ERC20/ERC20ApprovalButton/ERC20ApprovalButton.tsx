import { Button } from '@/components';
import { useErc20 } from '@/hooks';
import React from 'react';

/**
 * Props for the ERC20ApprovalButton component.
 *
 * @interface ERC20ApprovalButtonProps
 * @property {string} owner - The address of the token owner.
 * @property {string} spender - The address of the spender.
 * @property {string} tokenAddress - The address of the ERC20 token contract.
 * @property {number} amount - The amount of tokens to approve.
 * @property {string} chainId - The ID of the blockchain network.
 * @property {string} [className] - Optional CSS class for styling the button.
 */
export interface ERC20ApprovalButtonProps {
  owner: string;
  spender: string;
  tokenAddress: string;
  amount: number;
  chainId: string;
  className?: string;
}

/**
 * ERC20ApprovalButton component allows users to approve a token spend for a specified ERC20 token.
 *
 * @component
 * @param {ERC20ApprovalButtonProps} props - The properties for the ERC20ApprovalButton component.
 * @param {string} props.owner - The address of the token owner.
 * @param {string} props.spender - The address of the spender who is being approved to spend the tokens.
 * @param {string} props.tokenAddress - The address of the ERC20 token contract.
 * @param {string} props.amount - The amount of tokens to approve for spending.
 * @param {number} props.chainId - The ID of the blockchain network.
 * @param {string} [props.className] - Optional CSS class name to apply to the button.
 *
 * @returns {JSX.Element} A button that, when clicked, triggers the approval of token spend.
 *
 * @example
 * <ERC20ApprovalButton
 *   owner="0xOwnerAddress"
 *   spender="0xSpenderAddress"
 *   tokenAddress="0xTokenAddress"
 *   amount="1000000000000000000"
 *   chainId={1}
 * />
 */
export const ERC20ApprovalButton: React.FC<ERC20ApprovalButtonProps> = ({
  owner,
  spender,
  tokenAddress,
  amount,
  chainId,
  className = '',
}) => {
  const { approveTokenSpendIfNeeded } = useErc20();

  const handleApproval = async () => {
    try {
      await approveTokenSpendIfNeeded(
        owner,
        spender,
        tokenAddress,
        amount,
        chainId
      );
    } catch (error) {
      console.error('Approval failed:', error);
    }
  };

  return (
    <Button className={className} onClick={handleApproval}>
      Approve Token Spend
    </Button>
  );
};

export default ERC20ApprovalButton;
