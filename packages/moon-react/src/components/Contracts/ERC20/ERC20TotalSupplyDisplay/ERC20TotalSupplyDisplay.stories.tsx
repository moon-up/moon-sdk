import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { mockProvider } from '../../../../../tests/mockProviderParams';
import { MoonSDKContext } from '../../../../context';
import { ERC20TotalSupplyDisplay } from './ERC20TotalSupplyDisplay';

const meta: Meta<typeof ERC20TotalSupplyDisplay> = {
  component: ERC20TotalSupplyDisplay,
  decorators: [
    (Story) => (
      <MoonSDKContext.Provider value={mockProvider}>
        <Story />
      </MoonSDKContext.Provider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ERC20TotalSupplyDisplay>;

export const Default: Story = {
  args: {
    tokenAddress: '0xabcd...',
    chainId: '1',
  },
};
