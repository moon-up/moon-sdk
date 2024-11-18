import type { Meta, StoryObj } from "@storybook/react";

import React from "react";

import { ERC721NameDisplay } from "./ERC721NameDisplay";

const meta = {
	component: ERC721NameDisplay,
	decorators: [(Story) => <Story />],

	argTypes: {
		tokenAddress: { control: "text" },
		chainId: { control: "text" },
		className: { control: "text" },
	},
} satisfies Meta<typeof ERC721NameDisplay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		tokenAddress: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd",
		chainId: "1", // Ethereum mainnet
	},
};

export const CustomClassName: Story = {
	args: {
		...Default.args,
		className: "custom-name-display",
	},
};

export const DifferentToken: Story = {
	args: {
		...Default.args,
		tokenAddress: "0x1234567890123456789012345678901234567890",
	},
};

export const DifferentChain: Story = {
	args: {
		...Default.args,
		chainId: "137", // Polygon mainnet
	},
};
