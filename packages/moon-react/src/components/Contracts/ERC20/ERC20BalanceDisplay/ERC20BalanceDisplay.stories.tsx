import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { mockProvider } from '../../../../../tests/mockProviderParams';
import { MoonSDKContext } from '../../../../context';
import { ERC20BalanceDisplay } from './ERC20BalanceDisplay';

const meta: Meta<typeof ERC20BalanceDisplay> = {
  component: ERC20BalanceDisplay,
  decorators: [
    (Story) => (
      <MoonSDKContext.Provider value={mockProvider}>
        <Story />
      </MoonSDKContext.Provider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ERC20BalanceDisplay>;

export const Default: Story = {
  args: {
    account: '0x1234...',
    tokenAddress: '0xabcd...',
    chainId: '1',
  },
};
