import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import { useErc20 } from '../../../../hooks';
import { ERC20TotalSupplyDisplay } from './ERC20TotalSupplyDisplay';

// Mock the useErc20 hook
vi.mock('@/hooks', () => ({
  useErc20: vi.fn(),
}));

describe('ERC20TotalSupplyDisplay', () => {
  const mockGetTotalSupplyErc20 = vi.fn();

  beforeEach(() => {
    (useErc20 as jest.Mock).mockReturnValue({
      getTotalSupplyErc20: mockGetTotalSupplyErc20,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<ERC20TotalSupplyDisplay tokenAddress="0x123" chainId="1" />);
    expect(screen.getByText(/Total Supply:/)).toBeInTheDocument();
  });

  it('fetches and displays the total supply', async () => {
    mockGetTotalSupplyErc20.mockResolvedValue('1000');

    render(<ERC20TotalSupplyDisplay tokenAddress="0x123" chainId="1" />);

    await waitFor(() => {
      expect(screen.getByText(/Total Supply: 1000/)).toBeInTheDocument();
    });
  });

  it('displays an error message if fetching total supply fails', async () => {
    console.error = vi.fn(); // Suppress error logging
    mockGetTotalSupplyErc20.mockRejectedValue(new Error('Failed to fetch'));

    render(<ERC20TotalSupplyDisplay tokenAddress="0x123" chainId="1" />);

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith(
        'Failed to fetch total supply:',
        expect.any(Error)
      );
    });
  });

  it('applies additional CSS classes', () => {
    render(
      <ERC20TotalSupplyDisplay
        tokenAddress="0x123"
        chainId="1"
        className="my-class"
      />
    );
    expect(screen.getByText(/Total Supply:/)).toHaveClass('my-class');
  });
});
