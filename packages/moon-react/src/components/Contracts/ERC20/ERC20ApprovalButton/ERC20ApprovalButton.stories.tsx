import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { mockProvider } from '../../../../../tests/mockProviderParams';
import { MoonSDKContext } from '../../../../context/MoonProvider';
import { ERC20ApprovalButton } from './ERC20ApprovalButton';

const meta = {
  component: ERC20ApprovalButton,
  decorators: [
    (Story) => (
      <MoonSDKContext.Provider value={mockProvider}>
        <Story />
      </MoonSDKContext.Provider>
    ),
  ],

  argTypes: {
    spender: { control: 'text' },
    tokenAddress: { control: 'text' },
    amount: { control: 'text' },
    chainId: { control: 'text' },
    onSuccess: { action: 'onSuccess' },
    onError: { action: 'onError' },
  },
} satisfies Meta<typeof ERC20ApprovalButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    spender: '0x1234567890123456789012345678901234567890',
    tokenAddress: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
    amount: '1000000000000000000', // 1 token with 18 decimals
    chainId: '1', // Ethereum mainnet
  },
};

export const CustomLabel: Story = {
  args: {
    ...Default.args,
    label: 'Approve Token',
  },
};

export const LargeAmount: Story = {
  args: {
    ...Default.args,
    amount: '1000000000000000000000', // 1000 tokens with 18 decimals
  },
};

export const DifferentChain: Story = {
  args: {
    ...Default.args,
    chainId: '137', // Polygon mainnet
  },
};
