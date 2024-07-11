import { useMoonSDK } from "./useMoonSDK";

export const useMoonTransaction = () => {
  const context = useMoonSDK();
  const { addTransactionResult } = context;

  const handleTransaction = async (
    transactionType: string,
    operation: () => Promise<any>
  ) => {
    const transactionId = Date.now().toString();
    try {
      const result = await operation();
      addTransactionResult({
        id: transactionId,
        type: transactionType,
        status: "success",
        data: result,
        timestamp: Date.now(),
      });
      return result;
    } catch (error) {
      addTransactionResult({
        id: transactionId,
        type: transactionType,
        status: "error",
        error: (error as any).message,
        timestamp: Date.now(),
      });
      throw error;
    }
  };

  return {
    handleTransaction,
  };
};
