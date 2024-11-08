import React from "react";
import { WalletInfo } from "@/types";

interface Props {
  message: WalletInfo;
}

const WalletInfoBubble: React.FC<Props> = ({ message }) => (
  <div>
    <h3 className="font-bold text-lg">Wallet</h3>
    <p className="mt-2">Address: {message.address}</p>
    <p>Balance: ${message.balance.toLocaleString()}</p>
    <ul className="mt-2">
      {message.tokens.map((token, index) => (
        <li key={index}>
          {token.symbol}: {token.balance}
        </li>
      ))}
    </ul>
  </div>
);

export default WalletInfoBubble;
