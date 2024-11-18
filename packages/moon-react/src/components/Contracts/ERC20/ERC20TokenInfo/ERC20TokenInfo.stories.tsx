import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { ERC20TokenInfo } from "./ERC20TokenInfo";

const meta: Meta<typeof ERC20TokenInfo> = {
	component: ERC20TokenInfo,
	decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof ERC20TokenInfo>;

export const Default: Story = {
	args: {
		tokenAddress: "0xabcd...",
		chainId: "1",
	},
};
