import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { mockProvider } from '../../../../../tests/mockProviderParams';
import { MoonSDKContext } from '../../../../context/MoonProvider';
import { ERC721IsApprovedForAllDisplay } from './ERC721IsApprovedForAllDisplay';

const meta = {
  component: ERC721IsApprovedForAllDisplay,
  decorators: [
    (Story) => (
      <MoonSDKContext.Provider value={mockProvider}>
        <Story />
      </MoonSDKContext.Provider>
    ),
  ],

  argTypes: {
    owner: { control: 'text' },
    operator: { control: 'text' },
    tokenAddress: { control: 'text' },
    chainId: { control: 'text' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof ERC721IsApprovedForAllDisplay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    owner: '0x1234567890123456789012345678901234567890',
    operator: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
    tokenAddress: '0x9876543210987654321098765432109876543210',
    chainId: '1', // Ethereum mainnet
  },
};

export const CustomClassName: Story = {
  args: {
    ...Default.args,
    className: 'custom-approval-display',
  },
};

export const DifferentOperator: Story = {
  args: {
    ...Default.args,
    operator: '0xfedcbafedcbafedcbafedcbafedcbafedcbafed',
  },
};

export const DifferentChain: Story = {
  args: {
    ...Default.args,
    chainId: '137', // Polygon mainnet
  },
};
