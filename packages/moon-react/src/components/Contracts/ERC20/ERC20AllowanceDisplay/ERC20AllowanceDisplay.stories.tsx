import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ERC20AllowanceDisplay } from "./ERC20AllowanceDisplay";

const meta: Meta<typeof ERC20AllowanceDisplay> = {
	component: ERC20AllowanceDisplay,
	decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof ERC20AllowanceDisplay>;

export const Default: Story = {
	args: {
		owner: "0x1234...",
		spender: "0x5678...",
		tokenAddress: "0xabcd...",
		chainId: "1",
	},
};
