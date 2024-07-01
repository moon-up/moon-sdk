import { PortfolioChange } from "@/types";
import React from "react";

interface Props {
  message: PortfolioChange;
}

const PortfolioChangeBubble: React.FC<Props> = ({ message }) => (
  <div>
    <h3 className="font-bold text-lg">Portfolio Change</h3>
    <p
      className={`mt-2 ${
        message.changePercentage >= 0 ? "bg-green-100" : "bg-red-100"
      }`}
    >
      Change: {message.changePercentage}%
    </p>
    <p>New Total: ${message.newTotal.toLocaleString()}</p>
  </div>
);

export default PortfolioChangeBubble;
