import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { useErc20 } from '../../../../hooks';
import { ERC20TokenInfo } from './ERC20TokenInfo';

vi.mock('@/hooks', () => ({
  useErc20: vi.fn(),
}));

describe('ERC20TokenInfo', () => {
  const mockGetNameErc20 = vi.fn();
  const mockGetSymbolErc20 = vi.fn();
  const mockGetDecimalsErc20 = vi.fn();

  beforeEach(() => {
    (useErc20 as jest.Mock).mockReturnValue({
      getNameErc20: mockGetNameErc20,
      getSymbolErc20: mockGetSymbolErc20,
      getDecimalsErc20: mockGetDecimalsErc20,
    });
  });

  it('renders token information correctly', async () => {
    mockGetNameErc20.mockResolvedValue('Test Token');
    mockGetSymbolErc20.mockResolvedValue('TTK');
    mockGetDecimalsErc20.mockResolvedValue(18);

    render(<ERC20TokenInfo tokenAddress="0x1234567890abcdef" chainId="1" />);

    expect(await screen.findByText('Token Info')).toBeInTheDocument();
    expect(await screen.findByText('Name: Test Token')).toBeInTheDocument();
    expect(await screen.findByText('Symbol: TTK')).toBeInTheDocument();
    expect(await screen.findByText('Decimals: 18')).toBeInTheDocument();
  });

  it('handles errors when fetching token information', async () => {
    mockGetNameErc20.mockRejectedValue(new Error('Failed to fetch name'));
    mockGetSymbolErc20.mockRejectedValue(new Error('Failed to fetch symbol'));
    mockGetDecimalsErc20.mockRejectedValue(
      new Error('Failed to fetch decimals')
    );

    render(<ERC20TokenInfo tokenAddress="0x1234567890abcdef" chainId="1" />);

    expect(await screen.findByText('Token Info')).toBeInTheDocument();
    expect(screen.queryByText('Name:')).not.toBeInTheDocument();
    expect(screen.queryByText('Symbol:')).not.toBeInTheDocument();
    expect(screen.queryByText('Decimals:')).not.toBeInTheDocument();
  });
});
