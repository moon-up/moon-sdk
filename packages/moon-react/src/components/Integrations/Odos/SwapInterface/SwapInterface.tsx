import { Button } from "@/components";
import { useMoonTokenManager, useOdos } from "@/hooks";
import { safelyParseUnits, weiStringAsFloat } from "@/utils/parse";
import type {
	OdosAPIResponseOdosExecuteFunctionResult,
	OdosSwapInputBody,
} from "@moonup/moon-api";
import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";
import { useMoonSDK } from "../../../../hooks/old/useMoonSDK";
import { ChainSelectorModal } from "../../../Web3/Chains/ChainSelectors/ChainSelectorModal";
import type { UserToken } from "../../../Web3/TokenManager/types";

// interface Token {
//   address: string;
//   symbol: string;
//   decimals: number;
// }

// type EstimateResult = {
//   message?: string;
//   tx: {
//     from: string;
//     to: string;
//     gas: string;
//     nonce: number;
//     value: string;
//     simulation: {
//       simulationResults: string;
//       data: string;
//     };
//     data: string;
//   };
//   info: {
//     amountOutMin: string;
//     amountOut: string;
//     affiliateAggregator: string;
//     affiliateGas: string;
//     conveyorGas: string;
//     gasPrice: string;
//     poolNames: string[];
//   };
//   tax: {
//     tokenInSellTax: number;
//     tokenInBuyTax: number;
//     tokenOutSellTax: number;
//     tokenOutBuyTax: number;
//   };
//   chainId: number;
//   currentBlockNumber: string;
// };
export const converyGasTokenAddress =
	"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
export type ButtonStatus =
	| "Estimate"
	| "Estimating..."
	| "Swapping..."
	| "Swap"
	| "Insufficient Balance";

export const SwapInterface: React.FC = () => {
	const { wallet } = useMoonSDK();
	const { swapOdos, getQuoteOdos } = useOdos();
	const { tokensWithGasToken: tokenList, chain } = useMoonTokenManager();

	const [estimateResult, setEstimate] =
		useState<OdosAPIResponseOdosExecuteFunctionResult | null>(null);
	const [fromToken, setFromToken] = React.useState<UserToken | null>(null);
	const [toToken, setToToken] = React.useState<UserToken | null>(null);
	const [fromAmount, setFromAmount] = React.useState<string>("");
	const [toAmount, setToAmount] = React.useState<string>("");
	const [slippage, setSlippage] = React.useState<string>("0.5");

	const [buttonStatus, setButtonStatus] =
		React.useState<ButtonStatus>("Estimate");
	const queryClient = useQueryClient();

	// Mock token list - replace with actual token list from your API
	//   const tokenList: Token[] = [
	//     { address: "0x...", symbol: "ETH", decimals: 18 },
	//     { address: "0x...", symbol: "USDC", decimals: 6 },
	//     { address: "0x...", symbol: "DAI", decimals: 18 },
	//   ];

	useEffect(() => {
		if (fromToken && toToken && fromAmount) {
			debouncedHandleEstimate();
		}
	}, [fromToken, toToken, fromAmount, slippage]);

	const handleEstimate = async () => {
		if (!fromToken || !toToken || !fromAmount) return;

		setButtonStatus("Estimating...");
		const bigAmountWei = safelyParseUnits(fromAmount, fromToken.decimals);

		try {
			const swapParams: OdosSwapInputBody = {
				inputTokens: [
					{
						amount: bigAmountWei.toString(),
						tokenAddress: fromToken.address,
					},
				],
				outputTokens: [
					{
						proportion: 1,
						tokenAddress: toToken.address,
					},
				],
				slippageLimitPercent: Math.round(Number.parseFloat(slippage) * 100),
				chain_id: chain?.chain_id?.toString() || "1", // Assuming Ethereum mainnet
			};

			const estimateResult = await getQuoteOdos({
				accountName: wallet || "",
				data: swapParams,
			});
			setEstimate(estimateResult);
			console.log("Estimate result:", estimateResult);
			setToAmount("0");
			setButtonStatus("Swap");
		} catch (error) {
			console.error("Estimate failed:", error);
			setButtonStatus("Estimate");
		}
	};
	const debouncedHandleEstimate = useDebounceCallback(handleEstimate, 1000);

	const handleSwap = async () => {
		if (!fromToken || !toToken || !fromAmount || !toAmount || !wallet) return;

		setButtonStatus("Swapping...");
		//convert fromAmount from float to bigInt
		const bigAmountWei = safelyParseUnits(fromAmount, fromToken.decimals);
		try {
			const swapParams: OdosSwapInputBody = {
				inputTokens: [
					{
						amount: bigAmountWei.toString(),
						tokenAddress: fromToken.address,
					},
				],
				outputTokens: [
					{
						proportion: 1,
						tokenAddress: toToken.address,
					},
				],
				slippageLimitPercent: Math.round(Number.parseFloat(slippage) * 100),
				chain_id: chain?.chain_id?.toString() || "", // Assuming Ethereum mainnet
				broadcast: true,
			};

			const result = await swapOdos({
				accountName: wallet,
				data: swapParams,
			});
			queryClient.invalidateQueries({ queryKey: ["erc20TokenBalances"] });

			console.log("Swap executed:", result);
			setButtonStatus("Estimate");
			// Handle successful swap (e.g., show success message, update balances)
		} catch (error) {
			console.error("Swap failed:", error);
			// Handle swap error (e.g., show error message)
			setButtonStatus("Swap");
		}
	};

	// const formatEth = (value: string) => {
	//   return weiStringAsFloat(value, 10) + " ETH";
	// };

	// const formatUsd = (value: string) => {
	//   let ether = weiStringAsFloat(value, 10);
	//   let usd = ether * (gasToken?.price || 0);
	//   return "$" + usd.toFixed(2);
	// };

	// const calculatePriceImpact = (amountIn: string, amountOut: string) => {
	//   const inValue = parseFloat(amountIn) * (fromToken?.price || 0);
	//   const outValue = parseFloat(amountOut) * (toToken?.price || 0);
	//   console.log("inValue", inValue, fromToken, "outValue", outValue, toToken);
	//   const impact = ((inValue - outValue) / inValue) * 100;
	//   return impact.toFixed(2) + "%";
	// };

	const tokensFilteredForChain = tokenList.filter(
		(token) => token.chainId === chain?.chain_id,
	);

	const onSelectToken = (e: any, setter: any) => {
		const token =
			tokensFilteredForChain.find((t) => t.symbol === e.target.value) || null;
		if (token?.isGasToken)
			setter({ ...token, address: converyGasTokenAddress });
		else setter(token);
	};

	return (
		<div className="bg-background-primary text-white p-6 rounded-xl max-w-lg mx-auto">
			<ChainSelectorModal
				chainIdFilterList={[1, 56, 137, 42161, 8453, 10]}
				buttonProps={{
					className: "w-full bg-gray-800 rounded-lg p-2 mb-4",
				}}
			/>

			<div className="mb-4">
				<label className="block mb-2 text-text-secondary">Swap From</label>
				<div className="flex items-center bg-gray-800 rounded-lg p-2">
					<select
						className="bg-transparent flex-grow"
						value={fromToken?.symbol || ""}
						onChange={(e) => onSelectToken(e, setFromToken)}
					>
						<option value="" className="bg-gray-800">
							Select token
						</option>
						{/* {gasToken && (
              <option
                className="bg-gray-800"
                key={gasToken.symbol + "fromToken"}
                value={gasToken.symbol}
              >
                {gasToken.symbol}
              </option>
            )} */}
						{tokensFilteredForChain &&
							tokensFilteredForChain.map((token) => (
								<option
									className="bg-gray-800"
									key={token.symbol + "fromToken"}
									value={token.symbol}
								>
									{token.symbol}
								</option>
							))}
						<Button>test</Button>
					</select>
					<input
						type="number"
						value={fromAmount}
						onChange={(e) => setFromAmount(e.target.value)}
						placeholder="0.0"
						className="bg-transparent text-right text-2xl "
					/>
				</div>
				<p className="text-sm text-gray-400 mt-1">
					Balance: {fromToken?.balance || 0}
				</p>
			</div>

			<div className="mb-4">
				<label className="block mb-2 text-text-secondary">Swap To</label>
				<div className="flex items-center bg-gray-800 rounded-lg p-2">
					<select
						className="bg-transparent flex-grow"
						value={toToken?.symbol || ""}
						onChange={(e) => onSelectToken(e, setToToken)}
					>
						<option value="" className="bg-gray-800">
							Select token
						</option>
						{/* {gasToken && (
              <option
                className="bg-gray-800"
                key={gasToken.symbol + "toeth"}
                value={gasToken.symbol}
              >
                {gasToken.symbol}
              </option>
            )} */}
						{tokensFilteredForChain.map((token) => (
							<option
								className="bg-gray-800"
								key={token.symbol + "toToken"}
								value={token.symbol}
							>
								{token.symbol}
							</option>
						))}
					</select>
					<input
						type="number"
						value={weiStringAsFloat("0") || "amountOut"}
						readOnly
						placeholder="0.0"
						className="bg-transparent text-right text-2xl "
					/>
				</div>
				<p className="text-sm text-gray-400 mt-1">
					Balance: {toToken?.balance}
				</p>
			</div>

			<div className="mb-4">
				<label className="block mb-2">Slippage Tolerance</label>
				<input
					type="number"
					value={slippage}
					onChange={(e) => setSlippage(e.target.value)}
					className="bg-gray-800 rounded-lg p-2 w-full"
					step="0.1"
				/>
			</div>

			{estimateResult?.message && (
				<div className="bg-red-500 p-4 rounded-lg mb-4">
					{estimateResult.message}
				</div>
			)}
			{/* {estimateResult && !estimateResult?.message && (
        <div className="mb-4 bg-gray-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">
            Best route from {estimateResult.info.affiliateAggregator} API
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>{estimateResult.info.affiliateAggregator} Gas</div>
            <div className="text-right">
              {formatEth(estimateResult.info.affiliateGas)} (
              {formatUsd(estimateResult.info.affiliateGas)})
            </div>
            <div>Conveyor Gas</div>
            <div className="text-right">
              {formatEth(estimateResult.info.conveyorGas)} (
              {formatUsd(estimateResult.info.conveyorGas)})
            </div>
            <div>Gas Saved</div>
            <div className="text-green-500 text-right">
              {formatEth(
                (
                  parseFloat(estimateResult.info.affiliateGas) -
                  parseFloat(estimateResult.info.conveyorGas)
                ).toString()
              )}
              (
              {formatUsd(
                (
                  parseFloat(estimateResult.info.affiliateGas) -
                  parseFloat(estimateResult.info.conveyorGas)
                ).toString()
              )}
              )
            </div>
          </div>
          <div className="mt-2">
            1 {fromToken?.symbol} ={" "}
            {(
              weiStringAsFloat(estimateResult.info.amountOut) /
              parseFloat(fromAmount)
            ).toFixed(4)}{" "}
            {toToken?.symbol}
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div>Slippage:</div>
            <div className="text-right">{slippage}%</div>
            <div>Price impact</div>
            <div className="text-right">
              {calculatePriceImpact(
                fromAmount,
                weiStringAsFloat(estimateResult.info.amountOut).toString()
              )}
            </div>
            <div>Expected Output</div>
            <div className="text-right">
              {weiStringAsFloat(estimateResult.info.amountOut).toFixed(4)}{" "}
              {toToken?.symbol}
            </div>
            <div>Minimum received (@ {slippage}% slippage)</div>
            <div className="text-right">
              {weiStringAsFloat(estimateResult.info.amountOutMin).toFixed(4)}{" "}
              {toToken?.symbol}
            </div>
          </div>
        </div>
      )} */}

			<Button onClick={handleSwap} disabled={buttonStatus != "Swap"}>
				{buttonStatus}
			</Button>
		</div>
	);
};
