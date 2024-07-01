// src/components/chat/bubbles/MultiStepTransactionBubble.tsx

import React, { useState } from "react";
import { ethers } from "ethers";
import { MultiStepTransactionMessage, TransactionStep } from "@/types";

type MultiStepTransactionBubbleProps = {
  message: MultiStepTransactionMessage;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  stepProps?: React.HTMLAttributes<HTMLDivElement>;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

const MultiStepTransactionBubble: React.FC<MultiStepTransactionBubbleProps> = ({
  message,
  containerProps,
  stepProps,
  buttonProps,
}) => {
  const [executedSteps, setExecutedSteps] = useState<number[]>([]);

  const executeStep = async (step: TransactionStep, index: number) => {
    try {
      //   // Assuming you have a way to get the current provider and signer
      //   const provider = new ethers.providers.Web3Provider(window.ethereum);
      //   const signer = provider.getSigner();

      //   const tx = await signer.sendTransaction(step.transaction);
      //   await tx.wait();

      //   setExecutedSteps([...executedSteps, index]);
      console.log(`Step ${index + 1} executed successfully`);
    } catch (error) {
      console.error(`Error executing step ${index + 1}:`, error);
    }
  };

  return (
    <div
      {...containerProps}
      className={`text-black my-2  ${
        containerProps?.className || ""
      }`}
    >
      <h3 className="text-lg font-bold mb-2">Multi-Step Transaction</h3>
      {message.steps.map((step, index) => (
        <div
          key={index}
          {...stepProps}
          className={`border-b border-gray-400 pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0 ${
            stepProps?.className || ""
          }`}
        >
          <h4 className="font-semibold text-md mb-2">{step.title}</h4>
          <p className="text-sm mb-2">{step.description}</p>
          <p className="text-sm mb-2">
            <strong>Success Condition:</strong> {step.successCondition}
          </p>
          <button
            {...buttonProps}
            onClick={() => executeStep(step, index)}
            disabled={executedSteps.includes(index)}
            className={`px-4 py-2 rounded ${
              executedSteps.includes(index)
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            } ${buttonProps?.className || ""}`}
          >
            {executedSteps.includes(index) ? "Executed" : "Execute Step"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MultiStepTransactionBubble;
