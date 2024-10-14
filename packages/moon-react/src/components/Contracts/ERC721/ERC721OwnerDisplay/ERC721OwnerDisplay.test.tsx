import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, it, vi } from 'vitest';
import { useErc721 } from '../../../../hooks';
import { ERC721OwnerDisplay } from './ERC721OwnerDisplay';

vi.mock('@/hooks', () => ({
  useErc721: vi.fn(),
}));

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  },
}));

describe('ERC721OwnerDisplay', () => {
  it('renders the component and fetches the owner', async () => {
    const mockGetErc721OwnerOf = vi
      .fn()
      .mockResolvedValue({ owner: '0xOwnerAddress' });
    (useErc721 as jest.Mock).mockReturnValue({
      getErc721OwnerOf: mockGetErc721OwnerOf,
    });

    render(
      <ERC721OwnerDisplay
        tokenId="1"
        tokenAddress="0x1234567890abcdef1234567890abcdef12345678"
        chainId={'1'}
        className="custom-class"
      />
    );

    await waitFor(() =>
      expect(mockGetErc721OwnerOf).toHaveBeenCalledWith({
        tokenId: '1',
        address: '0x1234567890abcdef1234567890abcdef12345678',
        chainId: 1,
      })
    );

    expect(
      screen.getByText('ERC721 Token Owner: 0xOwnerAddress')
    ).toBeInTheDocument();
  });

  it('displays an error message if fetching the owner fails', async () => {
    const mockGetErc721OwnerOf = vi
      .fn()
      .mockRejectedValue(new Error('Failed to fetch owner'));
    (useErc721 as jest.Mock).mockReturnValue({
      getErc721OwnerOf: mockGetErc721OwnerOf,
    });

    render(
      <ERC721OwnerDisplay
        tokenId="1"
        tokenAddress="0x1234567890abcdef1234567890abcdef12345678"
        chainId={'1'}
        className="custom-class"
      />
    );

    await waitFor(() => expect(mockGetErc721OwnerOf).toHaveBeenCalled());

    expect(screen.getByText('ERC721 Token Owner:')).toBeInTheDocument();
  });
});
