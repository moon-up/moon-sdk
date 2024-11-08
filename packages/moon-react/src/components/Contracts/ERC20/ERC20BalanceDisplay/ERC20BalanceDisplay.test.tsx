import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, it, vi } from 'vitest';
import { useErc20 } from '../../../../hooks';
import { ERC20BalanceDisplay } from './ERC20BalanceDisplay';

vi.mock('@/hooks', () => ({
  useErc20: vi.fn(),
}));

describe('ERC20BalanceDisplay', () => {
  const mockUseErc20 = useErc20 as jest.MockedFunction<typeof useErc20>;

  it('renders the balance correctly', async () => {
    mockUseErc20.mockReturnValue({
      balanceOfErc20: vi.fn().mockResolvedValue({ balance: '1000' }),
      approveErc20: undefined,
      transferErc20: undefined,
      transferFromErc20: undefined,
      allowanceErc20: undefined,
      approveTokenSpendIfNeeded: undefined,
      getDecimalsErc20: undefined,
      getNameErc20: undefined,
      getSymbolErc20: undefined,
      getTotalSupplyErc20: undefined,
    });

    render(
      <ERC20BalanceDisplay
        account="0x123"
        tokenAddress="0xabc"
        chainId="1"
        className="custom-class"
      />
    );

    await waitFor(() => {
      expect(screen.getByText('Balance: 1000')).toBeInTheDocument();
    });
  });

  it('handles errors when fetching balance', async () => {
    console.error = vi.fn(); // Mock console.error to suppress error logs in test output

    mockUseErc20.mockReturnValue({
      balanceOfErc20: vi
        .fn()
        .mockRejectedValue(new Error('Failed to fetch balance')),
      approveErc20: undefined,
      transferErc20: undefined,
      transferFromErc20: undefined,
      allowanceErc20: undefined,
      approveTokenSpendIfNeeded: undefined,
      getDecimalsErc20: undefined,
      getNameErc20: undefined,
      getSymbolErc20: undefined,
      getTotalSupplyErc20: undefined,
    });

    render(
      <ERC20BalanceDisplay
        account="0x123"
        tokenAddress="0xabc"
        chainId="1"
        className="custom-class"
      />
    );

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith(
        'Failed to fetch balance:',
        expect.any(Error)
      );
    });
  });
});
