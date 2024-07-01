import { PoolInfo } from "@/types";
import React from "react";

interface Props {
  message: PoolInfo;
}

const PoolInfoBubble: React.FC<Props> = ({ message }) => (
  <div>
    <h3 className="font-bold text-lg">{message.name}</h3>
    <p className="mt-2">Tokens: {message.tokens.join(", ")}</p>
    <p className="mt-2">
      Total Liquidity: ${message.totalLiquidity.toLocaleString()}
    </p>
    <p>APY: {message.apy}%</p>
  </div>
);

export default PoolInfoBubble;
