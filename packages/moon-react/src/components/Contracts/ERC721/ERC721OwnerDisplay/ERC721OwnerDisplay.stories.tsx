import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { mockProvider } from '../../../../../tests/mockProviderParams';
import { MoonSDKContext } from '../../../../context/MoonProvider';
import { ERC721OwnerDisplay } from './ERC721OwnerDisplay';

const meta = {
  component: ERC721OwnerDisplay,
  decorators: [
    (Story) => (
      <MoonSDKContext.Provider value={mockProvider}>
        <Story />
      </MoonSDKContext.Provider>
    ),
  ],

  argTypes: {
    tokenId: { control: 'text' },
    tokenAddress: { control: 'text' },
    chainId: { control: 'text' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof ERC721OwnerDisplay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tokenId: '1',
    tokenAddress: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
    chainId: '1', // Ethereum mainnet
  },
};

export const CustomClassName: Story = {
  args: {
    ...Default.args,
    className: 'custom-owner-display',
  },
};

export const DifferentTokenId: Story = {
  args: {
    ...Default.args,
    tokenId: '42',
  },
};

export const DifferentChain: Story = {
  args: {
    ...Default.args,
    chainId: '137', // Polygon mainnet
  },
};
