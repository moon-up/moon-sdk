import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { useErc20 } from '../../../../hooks';
import ERC20TransferForm from './ERC20TransferForm';

vi.mock('@/hooks', () => ({
  useErc20: vi.fn(),
}));

describe('ERC20TransferForm', () => {
  const mockTransferErc20 = vi.fn();

  beforeEach(() => {
    (useErc20 as jest.Mock).mockReturnValue({
      transferErc20: mockTransferErc20,
    });
  });

  it('renders the form with initial values', () => {
    render(
      <ERC20TransferForm
        accountName="testAccount"
        tokenAddress="0x1234567890abcdef"
        chainId="1"
      />
    );

    expect(
      screen.getByPlaceholderText('Recipient Address')
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Amount')).toBeInTheDocument();
    expect(screen.getByText('Transfer')).toBeInTheDocument();
  });

  it('updates recipient and amount state on input change', () => {
    render(
      <ERC20TransferForm
        accountName="testAccount"
        tokenAddress="0x1234567890abcdef"
        chainId="1"
      />
    );

    const recipientInput = screen.getByPlaceholderText('Recipient Address');
    const amountInput = screen.getByPlaceholderText('Amount');

    fireEvent.change(recipientInput, { target: { value: '0xabcdef' } });
    fireEvent.change(amountInput, { target: { value: '100' } });

    expect(recipientInput).toHaveValue('0xabcdef');
    expect(amountInput).toHaveValue('100');
  });

  it('calls transferErc20 with correct parameters on form submit', async () => {
    render(
      <ERC20TransferForm
        accountName="testAccount"
        tokenAddress="0x1234567890abcdef"
        chainId="1"
      />
    );

    const recipientInput = screen.getByPlaceholderText('Recipient Address');
    const amountInput = screen.getByPlaceholderText('Amount');
    const submitButton = screen.getByText('Transfer');

    fireEvent.change(recipientInput, { target: { value: '0xabcdef' } });
    fireEvent.change(amountInput, { target: { value: '100' } });
    fireEvent.click(submitButton);

    expect(mockTransferErc20).toHaveBeenCalledWith({
      accountName: 'testAccount',
      transaction: {
        to: '0xabcdef',
        amount: '100',
        contract_address: '0x1234567890abcdef',
        chain_id: '1',
        broadcast: true,
        value: '0',
      },
    });
  });

  it('handles transfer failure', async () => {
    mockTransferErc20.mockRejectedValueOnce(new Error('Transfer failed'));

    render(
      <ERC20TransferForm
        accountName="testAccount"
        tokenAddress="0x1234567890abcdef"
        chainId="1"
      />
    );

    const recipientInput = screen.getByPlaceholderText('Recipient Address');
    const amountInput = screen.getByPlaceholderText('Amount');
    const submitButton = screen.getByText('Transfer');

    fireEvent.change(recipientInput, { target: { value: '0xabcdef' } });
    fireEvent.change(amountInput, { target: { value: '100' } });
    fireEvent.click(submitButton);

    await new Promise((r) => setTimeout(r, 0)); // wait for async code to complete

    expect(mockTransferErc20).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(
      'Transfer failed:',
      expect.any(Error)
    );
  });
});
