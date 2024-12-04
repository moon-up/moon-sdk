import React from "react";
import { useTheme } from "@/context";
import { TokenSelector } from "./TokenSelector";
import { FiChevronDown } from "react-icons/fi";

interface TokenInputProps {
	token: any;
	amount: string;
	setAmount: (value: string) => void;
	tokens: any[];
	onSelectToken: (token: any) => void;
	balance: string;
	value: number;
	readOnly?: boolean;
}

export const TokenInput: React.FC<TokenInputProps> = ({
	token,
	amount,
	setAmount,
	tokens,
	onSelectToken,
	balance,
	value,
	readOnly = false,
}) => {
	const theme = useTheme();
	console.log(
		"TokenInputProps",
		token,
		amount,
		tokens,
		onSelectToken,
		balance,
		value,
		readOnly,
	);

	return (
		<div
			className={`mb-4 p-4 rounded-2xl bg-${theme?.backgroundColorSecondary}`}
		>
			<div className="flex justify-between items-center mb-2">
				<p className={`text-sm font-medium text-${theme?.textColorSecondary}`}>
					{readOnly ? "You receive" : "You pay"}
				</p>
				<p
					className={`text-sm text-${theme?.textColorSecondary} cursor-pointer`}
					onClick={() => !readOnly && setAmount(balance || "0.00")}
				>
					Balance: {balance || "0.00"}
				</p>
			</div>
			<div className="flex items-center justify-between">
				<input
					type="number"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
					placeholder="0"
					readOnly={readOnly}
					className={`w-1/2 bg-transparent text-${theme?.textColor} text-3xl font-medium focus:outline-none`}
				/>
				<div className="flex items-center">
					<TokenSelector
						tokens={tokens}
						selectedToken={token}
						onSelect={onSelectToken}
					>
						<div
							className={`flex items-center bg-${theme?.backgroundColor} rounded-2xl p-2 cursor-pointer`}
						>
							{token && (
								<img
									src={token.logoURI}
									alt={token.symbol}
									className="w-6 h-6 mr-2 rounded-full"
								/>
							)}
							<span className={`font-medium text-${theme?.textColor} mr-1`}>
								{token ? token.symbol : "Select token"}
							</span>
							<FiChevronDown className={`text-${theme?.textColorSecondary}`} />
						</div>
					</TokenSelector>
				</div>
			</div>
			<p className={`text-sm text-${theme?.textColorSecondary} mt-2`}>
				${value.toFixed(2)} USD
			</p>
		</div>
	);
};
