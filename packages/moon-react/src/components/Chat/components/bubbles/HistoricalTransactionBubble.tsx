import React from "react";
import { HistoricalTransaction } from "@/types";

interface Props {
  message: HistoricalTransaction;
}

const HistoricalTransactionBubble: React.FC<Props> = ({ message }) => (
  <div>
    <h3 className="font-bold text-lg">Transaction History</h3>
    <ul className="mt-2">
      {message.transactions.map((tx, index) => (
        <li key={index} className="mb-1">
          {tx.date.toLocaleDateString()}: {tx.type} {tx.amount} {tx.currency}
        </li>
      ))}
    </ul>
  </div>
);

export default HistoricalTransactionBubble;
