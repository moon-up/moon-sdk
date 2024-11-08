import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { mockProvider } from '../../../../../tests/mockProviderParams';
import { MoonSDKContext } from '../../../../context/MoonProvider';
import { ERC721BalanceDisplay } from './ERC721BalanceDisplay';

const meta = {
  component: ERC721BalanceDisplay,
  decorators: [
    (Story) => (
      <MoonSDKContext.Provider value={mockProvider}>
        <Story />
      </MoonSDKContext.Provider>
    ),
  ],

  argTypes: {
    account: { control: 'text' },
    tokenAddress: { control: 'text' },
    chainId: { control: 'text' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof ERC721BalanceDisplay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    account: '0x1234567890123456789012345678901234567890',
    tokenAddress: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
    chainId: '1', // Ethereum mainnet
  },
};

export const CustomClassName: Story = {
  args: {
    ...Default.args,
    className: 'custom-balance-display',
  },
};

export const DifferentAccount: Story = {
  args: {
    ...Default.args,
    account: '0x9876543210987654321098765432109876543210',
  },
};

export const DifferentChain: Story = {
  args: {
    ...Default.args,
    chainId: '137', // Polygon mainnet
  },
};
