import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useErc20 } from '../../../../hooks';
import { ERC20AllowanceDisplay } from './ERC20AllowanceDisplay';

// Mock the useErc20 hook
vi.mock('@/hooks', () => ({
  useErc20: vi.fn(),
}));

vi.mock('@/context', () => ({
  MoonSDKProvider: vi.fn(),
}));

describe('ERC20AllowanceDisplay', () => {
  const mockAllowanceErc20 = vi.fn();

  beforeEach(() => {
    (useErc20 as any).mockReturnValue({
      allowanceErc20: mockAllowanceErc20,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the component with initial state', () => {
    render(
      <ERC20AllowanceDisplay
        owner="0xOwner"
        spender="0xSpender"
        tokenAddress="0xToken"
        chainId="1"
      />
    );

    expect(screen.getByText(/Allowance:/)).toBeDefined();
  });

  it('fetches and displays the allowance', async () => {
    mockAllowanceErc20.mockResolvedValue('1000');

    render(
      <ERC20AllowanceDisplay
        owner="0xOwner"
        spender="0xSpender"
        tokenAddress="0xToken"
        chainId="1"
      />
    );

    await waitFor(() => {
      expect(screen.getByText(/Allowance: 1000/)).toBeDefined();
    });
  });

  it('handles errors when fetching the allowance', async () => {
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    mockAllowanceErc20.mockRejectedValue(
      new Error('Failed to fetch allowance')
    );

    render(
      <ERC20AllowanceDisplay
        owner="0xOwner"
        spender="0xSpender"
        tokenAddress="0xToken"
        chainId="1"
      />
    );

    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Failed to fetch allowance:',
        expect.any(Error)
      );
    });

    consoleErrorSpy.mockRestore();
  });
});
