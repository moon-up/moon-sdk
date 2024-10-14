import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import { useErc721 } from '../../../../hooks';
import ERC721SymbolDisplay from './ERC721SymbolDisplay';

// Mock the useErc721 hook
vi.mock('@/hooks', () => ({
  useErc721: vi.fn(),
}));

describe('ERC721SymbolDisplay', () => {
  const mockGetErc721Symbol = vi.fn();

  beforeEach(() => {
    (useErc721 as jest.Mock).mockReturnValue({
      getErc721Symbol: mockGetErc721Symbol,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<ERC721SymbolDisplay tokenAddress="0x123" chainId="1" />);
    expect(screen.getByText(/ERC721 Token Symbol:/)).toBeInTheDocument();
  });

  it('fetches and displays the ERC721 token symbol', async () => {
    mockGetErc721Symbol.mockResolvedValue({ symbol: 'MOCK' });

    render(<ERC721SymbolDisplay tokenAddress="0x123" chainId="1" />);

    await waitFor(() => {
      expect(screen.getByText(/ERC721 Token Symbol: MOCK/)).toBeInTheDocument();
    });
  });

  it('displays an error message if fetching the symbol fails', async () => {
    mockGetErc721Symbol.mockRejectedValue(new Error('Failed to fetch symbol'));

    render(<ERC721SymbolDisplay tokenAddress="0x123" chainId="1" />);

    await waitFor(() => {
      expect(screen.getByText(/ERC721 Token Symbol:/)).toBeInTheDocument();
    });

    // Check console.error is called
    expect(console.error).toHaveBeenCalledWith(
      'Failed to fetch ERC721 symbol:',
      expect.any(Error)
    );
  });

  it('applies additional CSS classes', () => {
    render(
      <ERC721SymbolDisplay
        tokenAddress="0x123"
        chainId="1"
        className="my-class"
      />
    );
    expect(screen.getByText(/ERC721 Token Symbol:/)).toHaveClass('my-class');
  });
});
