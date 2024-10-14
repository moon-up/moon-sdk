import React from "react";
import { TokenInfo } from "@/types";
interface Props {
  message: TokenInfo;
}

const TokenInfoBubble: React.FC<Props> = ({ message }) => (
  <div>
    <h3 className="font-bold text-lg">
      {message.name} ({message.symbol})
    </h3>
    <p className="mt-2">Price: ${message.price.toLocaleString()}</p>
    <p>Market Cap: ${message.marketCap.toLocaleString()}</p>
  </div>
);

export default TokenInfoBubble;
