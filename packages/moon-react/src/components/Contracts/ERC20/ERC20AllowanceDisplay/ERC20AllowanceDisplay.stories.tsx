import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { mockProvider } from '../../../../../tests/mockProviderParams';
import { MoonSDKContext } from '../../../../context';
import { ERC20AllowanceDisplay } from './ERC20AllowanceDisplay';

const meta: Meta<typeof ERC20AllowanceDisplay> = {
  component: ERC20AllowanceDisplay,
  decorators: [
    (Story) => (
      <MoonSDKContext.Provider value={mockProvider}>
        <Story />
      </MoonSDKContext.Provider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ERC20AllowanceDisplay>;

export const Default: Story = {
  args: {
    owner: '0x1234...',
    spender: '0x5678...',
    tokenAddress: '0xabcd...',
    chainId: '1',
  },
};
