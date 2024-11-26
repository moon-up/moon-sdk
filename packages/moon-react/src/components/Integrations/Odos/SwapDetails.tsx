import React from "react";
import { useTheme } from "@/context";

interface SwapDetailsProps {
	estimateResult: any;
	fromToken: any;
	toToken: any;
	fromAmount: string;
	toAmount: string;
	slippage: number;
	fromValue: number;
	toValue: number;
}

export const SwapDetails: React.FC<SwapDetailsProps> = ({
	estimateResult,
	fromToken,
	toToken,
	fromAmount,
	toAmount,
	slippage,
	fromValue,
	toValue,
}) => {
	const theme = useTheme();

	return (
		<div
			className={`p-4 rounded-2xl bg-${theme?.backgroundColorSecondary} text-${theme?.textColor}`}
		>
			<h3 className="font-bold mb-4">Transaction Details</h3>
			<div className="space-y-2">
				<DetailRow
					label="Rate"
					value={`1 ${fromToken.symbol} = ${(Number.parseFloat(toAmount) / Number.parseFloat(fromAmount)).toFixed(6)} ${toToken.symbol}`}
				/>
				<DetailRow
					label="Minimum received"
					value={`${(Number.parseFloat(toAmount) * (1 - slippage / 100)).toFixed(6)} ${toToken.symbol}`}
				/>
				<DetailRow
					label="Price Impact"
					value={estimateResult.data.priceImpact}
				/>
				<DetailRow
					label="Network Fee"
					value={`≈ $${estimateResult.data.gasEstimateValue}`}
				/>
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
