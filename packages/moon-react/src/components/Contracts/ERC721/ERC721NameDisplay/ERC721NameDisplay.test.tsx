import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import { useErc721 } from '../../../../hooks';
import { ERC721NameDisplay } from './ERC721NameDisplay';

// Mock the useErc721 hook
vi.mock('@/hooks', () => ({
  useErc721: vi.fn(),
}));

describe('ERC721NameDisplay', () => {
  const mockGetErc721Name = vi.fn();

  beforeEach(() => {
    (useErc721 as jest.Mock).mockReturnValue({
      getErc721Name: mockGetErc721Name,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<ERC721NameDisplay tokenAddress="0x123" chainId="1" />);
    expect(screen.getByText(/ERC721 Token Name:/)).toBeInTheDocument();
  });

  it('displays the fetched token name', async () => {
    mockGetErc721Name.mockResolvedValueOnce({ name: 'Mock Token' });

    render(<ERC721NameDisplay tokenAddress="0x123" chainId="1" />);

    await waitFor(() => {
      expect(
        screen.getByText(/ERC721 Token Name: Mock Token/)
      ).toBeInTheDocument();
    });
  });

  it('handles errors gracefully', async () => {
    mockGetErc721Name.mockRejectedValueOnce(new Error('Failed to fetch'));

    render(<ERC721NameDisplay tokenAddress="0x123" chainId="1" />);

    await waitFor(() => {
      expect(screen.getByText(/ERC721 Token Name:/)).toBeInTheDocument();
    });

    expect(console.error).toHaveBeenCalledWith(
      'Failed to fetch ERC721 name:',
      expect.any(Error)
    );
  });
});
