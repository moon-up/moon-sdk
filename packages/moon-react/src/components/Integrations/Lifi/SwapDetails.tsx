import React from "react";
import { useTheme } from "@/context";
import { formatUnits } from "ethers";
import type { Quote } from "@moonup/moon-api";

interface SwapDetailsProps {
	quoteResult: Quote;
	fromToken: any;
	toToken: any;
	slippage: number;
}

export const SwapDetails: React.FC<SwapDetailsProps> = ({
	quoteResult,
	fromToken,
	toToken,
	slippage,
}) => {
	const theme = useTheme();
	const { estimate } = quoteResult;

	const gasCost = estimate.gasCosts.reduce(
		(total, cost) =>
			total + Number(formatUnits(cost.amount, cost.token.decimals)),
		0,
	);

	const exchangeRate = Number(estimate.toAmount) / Number(estimate.fromAmount);

	return (
		<div
			className={`p-4 rounded-2xl bg-${theme?.backgroundColorSecondary} text-${theme?.textColor}`}
		>
			<h3 className="font-bold mb-4">Transaction Details</h3>
			<div className="space-y-2">
				<DetailRow
					label="Rate"
					value={`1 ${fromToken.symbol} = ${exchangeRate.toFixed(6)} ${toToken.symbol}`}
				/>
				<DetailRow
					label="Minimum received"
					value={`${formatUnits(estimate.toAmountMin, toToken.decimals)} ${toToken.symbol}`}
				/>
				<DetailRow
					label="Price Impact"
					value={`${(((Number(estimate.fromAmountUSD) - Number(estimate.toAmountUSD)) / Number(estimate.fromAmountUSD)) * 100).toFixed(2)}%`}
				/>
				<DetailRow label="Network Fee" value={`≈ $${gasCost.toFixed(2)}`} />
				{quoteResult.includedSteps.length > 1 && (
					<DetailRow
						label="Route"
						value={quoteResult.includedSteps
							.map((step) => step.tool)
							.join(" > ")}
					/>
				)}
			</div>
		</div>
	);
};

const DetailRow: React.FC<{ label: string; value: string }> = ({
	label,
	value,
}) => {
	const theme = useTheme();
	return (
		<div className="flex justify-between">
			<span className={`text-${theme?.textColorSecondary}`}>{label}</span>
			<span className="font-medium">{value}</span>
		</div>
	);
};
