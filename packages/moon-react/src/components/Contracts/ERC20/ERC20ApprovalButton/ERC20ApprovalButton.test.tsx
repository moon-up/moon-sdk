import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { useErc20 } from '../../../../hooks';
import { ERC20ApprovalButton } from './ERC20ApprovalButton';

vi.mock('@/hooks');

describe('ERC20ApprovalButton', () => {
  const mockApproveTokenSpendIfNeeded = vi.fn();

  beforeEach(() => {
    (useErc20 as jest.Mock).mockReturnValue({
      approveTokenSpendIfNeeded: mockApproveTokenSpendIfNeeded,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the button with the correct text', () => {
    const { getByText } = render(
      <ERC20ApprovalButton
        owner="0xOwnerAddress"
        spender="0xSpenderAddress"
        tokenAddress="0xTokenAddress"
        amount={1000000000000000000}
        chainId="1"
      />
    );

    expect(getByText('Approve Token Spend')).toBeInTheDocument();
  });

  it('calls approveTokenSpendIfNeeded with correct arguments when clicked', async () => {
    const { getByText } = render(
      <ERC20ApprovalButton
        owner="0xOwnerAddress"
        spender="0xSpenderAddress"
        tokenAddress="0xTokenAddress"
        amount={1000000000000000000}
        chainId="1"
      />
    );

    fireEvent.click(getByText('Approve Token Spend'));

    expect(mockApproveTokenSpendIfNeeded).toHaveBeenCalledWith(
      '0xOwnerAddress',
      '0xSpenderAddress',
      '0xTokenAddress',
      1000000000000000000,
      '1'
    );
  });

  it('handles approval failure gracefully', async () => {
    mockApproveTokenSpendIfNeeded.mockRejectedValueOnce(
      new Error('Approval failed')
    );

    const { getByText } = render(
      <ERC20ApprovalButton
        owner="0xOwnerAddress"
        spender="0xSpenderAddress"
        tokenAddress="0xTokenAddress"
        amount={1000000000000000000}
        chainId="1"
      />
    );

    fireEvent.click(getByText('Approve Token Spend'));

    expect(mockApproveTokenSpendIfNeeded).toHaveBeenCalled();
  });
});
