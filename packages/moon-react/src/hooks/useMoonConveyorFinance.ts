import { useCallback } from "react";
import { useMoonSDK } from "./useMoonSDK";
import { useMoonTransaction } from "./useMoonTransaction";
import {
  Conveyorfinance,
  TokenSwapParams,
  TransactionData,
} from "@moonup/moon-api";

interface EstimateParams {
  tokenIn?: string;
  tokenOut?: string;
  tokenInDecimals?: number;
  tokenOutDecimals?: number;
  amountIn?: string;
  slippage?: string;
  chainId?: number;
  recipient?: string;
}

export const useMoonConveyorFinance = () => {
  const context = useMoonSDK();
  const { handleTransaction } = useMoonTransaction();
  const { moon } = context;

  const getConveyorFinanceSDK = (): Conveyorfinance => {
    const conveyorFinanceSDK = moon?.getConveyorfinanceSDK();
    if (!conveyorFinanceSDK) throw new Error("Moon SDK not initialized");
    return conveyorFinanceSDK;
  };

  const swap = useCallback(
    async (payload: {
      accountName: string;
      transaction: TokenSwapParams;
    }): Promise<TransactionData> => {
      return handleTransaction("conveyorFinanceSwap", async () => {
        const conveyorFinanceSDK = getConveyorFinanceSDK();
        const response = await conveyorFinanceSDK.swap(
          payload.accountName,
          payload.transaction
        );
        return response.data;
      });
    },
    [moon]
  );

  const estimate = useCallback(async (payload: EstimateParams): Promise<
    any
  > => {
    return handleTransaction("conveyorFinanceEstimate", async () => {
      const response = await fetch("https://api.conveyor.finance/", {
        method: "POST",
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (data.errorMessage) throw new Error(data.errorMessage);
      return data.body;
    });
  }, []);

  return {
    swap,
    estimate,
  };
};
