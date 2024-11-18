import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { ERC20TransferForm } from "./ERC20TransferForm";

const meta: Meta<typeof ERC20TransferForm> = {
	component: ERC20TransferForm,
	decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof ERC20TransferForm>;

export const Default: Story = {
	args: {
		accountName: "testAccount",
		tokenAddress: "0xabcd...",
		chainId: "1",
	},
};
