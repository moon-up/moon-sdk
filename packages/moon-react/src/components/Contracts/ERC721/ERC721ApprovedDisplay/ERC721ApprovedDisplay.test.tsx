import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, it, vi } from 'vitest';
import { useErc721 } from '../../../../hooks';
import ERC721ApprovedDisplay from './ERC721ApprovedDisplay';

vi.mock('@/hooks', () => ({
  useErc721: () => ({
    getErc721Approved: vi.fn(),
  }),
}));

describe('ERC721ApprovedDisplay', () => {
  const mockGetErc721Approved = useErc721().getErc721Approved as jest.Mock;

  it('renders without crashing', () => {
    render(
      <ERC721ApprovedDisplay
        tokenId="1"
        tokenAddress="0x1234567890abcdef1234567890abcdef12345678"
        chainId="1"
      />
    );
    expect(screen.getByText(/ERC721 Approved Address:/)).toBeInTheDocument();
  });

  it('fetches and displays the approved address', async () => {
    mockGetErc721Approved.mockResolvedValueOnce({
      transaction: { to: '0xapprovedAddress' },
    });

    render(
      <ERC721ApprovedDisplay
        tokenId="1"
        tokenAddress="0x1234567890abcdef1234567890abcdef12345678"
        chainId="1"
      />
    );

    await waitFor(() => {
      expect(
        screen.getByText(/ERC721 Approved Address: 0xapprovedAddress/)
      ).toBeInTheDocument();
    });
  });

  it('handles errors gracefully', async () => {
    mockGetErc721Approved.mockRejectedValueOnce(new Error('Failed to fetch'));

    render(
      <ERC721ApprovedDisplay
        tokenId="1"
        tokenAddress="0x1234567890abcdef1234567890abcdef12345678"
        chainId="1"
      />
    );

    await waitFor(() => {
      expect(screen.getByText(/ERC721 Approved Address:/)).toBeInTheDocument();
    });
  });
});
