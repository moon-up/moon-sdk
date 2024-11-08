import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import { useErc721 } from '../../../../hooks';
import { ERC721IsApprovedForAllDisplay } from './ERC721IsApprovedForAllDisplay';

vi.mock('@/hooks', () => ({
  useErc721: vi.fn(),
}));

describe('ERC721IsApprovedForAllDisplay', () => {
  const mockGetErc721IsApprovedForAll = vi.fn();

  beforeEach(() => {
    (useErc721 as jest.Mock).mockReturnValue({
      getErc721IsApprovedForAll: mockGetErc721IsApprovedForAll,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders loading state initially', () => {
    render(
      <ERC721IsApprovedForAllDisplay
        owner="0x123"
        operator="0xabc"
        tokenAddress="0xdef"
        chainId="1"
      />
    );

    expect(
      screen.getByText('ERC721 Is Approved For All: Loading...')
    ).toBeInTheDocument();
  });

  it('renders approval status when fetched successfully', async () => {
    mockGetErc721IsApprovedForAll.mockResolvedValue({ isApproved: true });

    render(
      <ERC721IsApprovedForAllDisplay
        owner="0x123"
        operator="0xabc"
        tokenAddress="0xdef"
        chainId="1"
      />
    );

    await waitFor(() => {
      expect(
        screen.getByText('ERC721 Is Approved For All: true')
      ).toBeInTheDocument();
    });
  });

  it('renders error message when fetch fails', async () => {
    console.error = vi.fn(); // Suppress error logging
    mockGetErc721IsApprovedForAll.mockRejectedValue(new Error('Fetch failed'));

    render(
      <ERC721IsApprovedForAllDisplay
        owner="0x123"
        operator="0xabc"
        tokenAddress="0xdef"
        chainId="1"
      />
    );

    await waitFor(() => {
      expect(
        screen.getByText('ERC721 Is Approved For All: Loading...')
      ).toBeInTheDocument();
    });

    expect(console.error).toHaveBeenCalledWith(
      'Failed to fetch ERC721 approval status:',
      expect.any(Error)
    );
  });
});
