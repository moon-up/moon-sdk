import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { mockProvider } from '../../../../../tests/mockProviderParams';
import { MoonSDKContext } from '../../../../context';
import { ERC20TransferForm } from './ERC20TransferForm';

const meta: Meta<typeof ERC20TransferForm> = {
  component: ERC20TransferForm,
  decorators: [
    (Story) => (
      <MoonSDKContext.Provider value={mockProvider}>
        <Story />
      </MoonSDKContext.Provider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ERC20TransferForm>;

export const Default: Story = {
  args: {
    accountName: 'testAccount',
    tokenAddress: '0xabcd...',
    chainId: '1',
  },
};
