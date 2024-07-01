import React from "react";
import { TransactionResult } from "@/types";
import { IconCheck } from "@/assets/icons";

interface Props {
  message: TransactionResult;
}

const TransactionResultBubble: React.FC<Props> = ({ message }) => (
  <div>
    <h3 className="font-bold text-lg flex gap-3">
      Transaction {message.status}
      {message.status === "success" && (
        <span>
          <IconCheck className="w-6 h-6 text-green-500" />
        </span>
      )}
    </h3>
    <p className="mt-2">Hash: {message.hash}</p>
    <p>From: {message.from}</p>
    <p>To: {message.to}</p>
    <p>
      Amount: {message.amount} {message.currency}
    </p>
  </div>
);

export default TransactionResultBubble;
