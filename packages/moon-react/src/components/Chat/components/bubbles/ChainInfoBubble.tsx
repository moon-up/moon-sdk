import { ChainInfo } from "@/types";
import React from "react";

interface Props {
  message: ChainInfo;
}

const ChainInfoBubble: React.FC<Props> = ({ message }) => (
  <div>
    <h3 className="font-bold text-lg">{message.name}</h3>
    <p className="mt-2">Native Currency: {message.nativeCurrency}</p>
    <p>Block Time: {message.blockTime} seconds</p>
    <p>Gas Price: {message.gasPrice} Gwei</p>
  </div>
);

export default ChainInfoBubble;
