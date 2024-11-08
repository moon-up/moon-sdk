import { BigNumber } from "@ethersproject/bignumber";
import { type BigNumberish, formatUnits, parseUnits } from "ethers";
/**
 * Convert a BigInt to an int - useful when you are 'evolve'ing a response
 */
export const weiStringAsFloat = (
	num: string | undefined,
	decimalPoints = 18,
) => {
	if (!num) return 0;

	// Convert num to BigNumber if it's not already
	const bigNum = BigNumber.isBigNumber(num) ? num : BigNumber.from(num);

	// Use toString() to convert BigNumber to string, which is compatible with BigNumberish
	return Number.parseFloat(formatUnits(bigNum.toString(), decimalPoints));
};

export const bigNumAsInt = (num: BigNumberish) =>
	Number.parseInt(num.toString());

export const weiBigNumAsFloat = (num: BigNumberish, decimalPoints = 18) =>
	Number.parseFloat(formatUnits(num, decimalPoints));

export const safelyParseUnits = (num: string, decimalPoints = 18) => {
	if (!num) {
		return parseUnits("0", decimalPoints);
	}
	const shortenedString = num.includes(".")
		? num.substring(0, num.indexOf(".") + decimalPoints + 1)
		: num;

	return parseUnits(shortenedString, decimalPoints);
};
