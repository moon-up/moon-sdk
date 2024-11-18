import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Transaction from "./transactions";

const meta: Meta<typeof Transaction> = {
	component: Transaction,
	decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Transaction>;

const mockTransaction = {
	to: "0x1234567890123456789012345678901234567890",
	value: "0.1",
	gasLimit: "21000",
	maxFeePerGas: "20",
	maxPriorityFeePerGas: "1",
};

export const Default: Story = {
	args: {
		transaction: mockTransaction,
	},
};

export const Simulating: Story = {
	args: {
		transaction: mockTransaction,
	},
	parameters: {
		mockData: [
			{
				url: "/api/simulate-transaction",
				method: "POST",
				status: 200,
				delay: 2000,
				response: {
					gasUsed: "21000",
					changes: [
						{
							changeType: "Transfer",
							assetType: "Native",
							from: "0x1234567890123456789012345678901234567890",
							to: "0x0987654321098765432109876543210987654321",
							amount: "0.1",
							symbol: "ETH",
						},
					],
				},
			},
		],
	},
};

export const SimulationFailed: Story = {
	args: {
		transaction: mockTransaction,
	},
	parameters: {
		mockData: [
			{
				url: "/api/simulate-transaction",
				method: "POST",
				status: 400,
				response: {
					error: {
						message: "Insufficient funds for gas * price + value",
					},
				},
			},
		],
	},
};

export const TransactionPending: Story = {
	args: {
		transaction: mockTransaction,
	},
	parameters: {
		mockData: [
			{
				url: "/api/send-transaction",
				method: "POST",
				status: 200,
				response: {
					hash: "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
					status: "pending",
				},
			},
		],
	},
};

export const TransactionCompleted: Story = {
	args: {
		transaction: mockTransaction,
	},
	parameters: {
		mockData: [
			{
				url: "/api/send-transaction",
				method: "POST",
				status: 200,
				response: {
					hash: "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
					status: "completed",
					receipt: {
						blockNumber: 12345678,
						gasUsed: "21000",
					},
				},
			},
		],
	},
};

export const TransactionFailed: Story = {
	args: {
		transaction: mockTransaction,
	},
	parameters: {
		mockData: [
			{
				url: "/api/send-transaction",
				method: "POST",
				status: 400,
				response: {
					error: {
						message: "Transaction failed",
					},
				},
			},
		],
	},
};
