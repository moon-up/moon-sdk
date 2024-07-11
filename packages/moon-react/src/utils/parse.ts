import { BigNumber } from "ethers";
import { formatUnits, parseUnits } from "ethers/lib/utils";
/**
 * Convert a BigInt to an int - useful when you are 'evolve'ing a response
 */
export const weiStringAsFloat = (
  num: string | undefined,
  decimalPoints = 18
) => {
  if (!num) return 0;
  return parseFloat(formatUnits(BigNumber.from(num), decimalPoints));
};

export const bigNumAsInt = (num: BigNumber) => parseInt(num.toString());

export const weiBigNumAsFloat = (num: BigNumber, decimalPoints = 18) =>
  parseFloat(formatUnits(num, decimalPoints));

export const safelyParseUnits = (num: string, decimalPoints = 18) => {
  if (!num) {
    return parseUnits("0", decimalPoints);
  }
  const shortenedString = num.includes(".")
    ? num.substring(0, num.indexOf(".") + decimalPoints + 1)
    : num;

  return parseUnits(shortenedString, decimalPoints);
};
