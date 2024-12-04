import React from "react";
import * as RadixSlider from "@radix-ui/react-slider";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { FiSettings } from "react-icons/fi";
import { useTheme } from "@/context";

interface SlippageSettingsProps {
	slippage: number;
	setSlippage: (value: number) => void;
}

export const SlippageSettings: React.FC<SlippageSettingsProps> = ({
	slippage,
	setSlippage,
}) => {
	const theme = useTheme();

	return (
		<RadixTooltip.Provider>
			<RadixTooltip.Root>
				<RadixTooltip.Trigger asChild>
					<button
						className={`p-2 rounded-full bg-${theme?.backgroundColorSecondary} text-${theme?.textColor} mb-4`}
					>
						<FiSettings />
					</button>
				</RadixTooltip.Trigger>
				<RadixTooltip.Content
					className={`p-4 rounded-md bg-${theme?.backgroundColorSecondary} text-${theme?.textColor} shadow-lg`}
				>
					<div className="mb-2">Slippage Tolerance</div>
					<RadixSlider.Root
						className="relative flex items-center w-48 h-5"
						value={[slippage]}
						onValueChange={(value) => setSlippage(value[0])}
						max={5}
						step={0.1}
					>
						<RadixSlider.Track
							className={`relative h-1 flex-grow rounded-full bg-${theme?.backgroundColor}`}
						>
							<RadixSlider.Range
								className={`absolute h-full rounded-full bg-${theme?.accentColor}`}
							/>
						</RadixSlider.Track>
						<RadixSlider.Thumb
							className={`block w-5 h-5 rounded-full bg-${theme?.accentColor}`}
						/>
					</RadixSlider.Root>
					<div className="mt-2">{slippage.toFixed(1)}%</div>
				</RadixTooltip.Content>
			</RadixTooltip.Root>
		</RadixTooltip.Provider>
	);
};
