import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import { useErc721 } from '../../../../hooks';
import { ERC721BalanceDisplay } from './ERC721BalanceDisplay';

// Mock the useErc721 hook
vi.mock('@/hooks', () => ({
  useErc721: vi.fn(),
}));

describe('ERC721BalanceDisplay', () => {
  const mockGetErc721BalanceOf = vi.fn();

  beforeEach(() => {
    (useErc721 as jest.Mock).mockReturnValue({
      getErc721BalanceOf: mockGetErc721BalanceOf,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(
      <ERC721BalanceDisplay account="0x123" tokenAddress="0xabc" chainId="1" />
    );
    expect(screen.getByText(/ERC721 Balance:/)).toBeInTheDocument();
  });

  it('fetches and displays the balance', async () => {
    mockGetErc721BalanceOf.mockResolvedValue({ balance: '10' });

    render(
      <ERC721BalanceDisplay account="0x123" tokenAddress="0xabc" chainId="1" />
    );

    await waitFor(() => {
      expect(screen.getByText(/ERC721 Balance: 10/)).toBeInTheDocument();
    });
  });

  it('displays an error message if fetching balance fails', async () => {
    console.error = vi.fn(); // Suppress error logging
    mockGetErc721BalanceOf.mockRejectedValue(
      new Error('Failed to fetch balance')
    );

    render(
      <ERC721BalanceDisplay account="0x123" tokenAddress="0xabc" chainId="1" />
    );

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith(
        'Failed to fetch ERC721 balance:',
        expect.any(Error)
      );
    });
  });

  it('applies additional CSS classes', () => {
    render(
      <ERC721BalanceDisplay
        account="0x123"
        tokenAddress="0xabc"
        chainId="1"
        className="my-custom-class"
      />
    );

    const element = screen.getByText(/ERC721 Balance:/);
    expect(element).toHaveClass('my-custom-class');
  });
});
