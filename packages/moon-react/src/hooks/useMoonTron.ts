import { useCallback } from "react";
import { useMoonSDK } from "./useMoonSDK";
import { useMoonTransaction } from "./useMoonTransaction";
import { Tron, TronTransactionInput } from "@moonup/moon-api";

export const useMoonTron = () => {
  const context = useMoonSDK();
  const { handleTransaction } = useMoonTransaction();
  const { moon } = context;

  const getTronSDK = (): Tron => {
    const tronSDK = moon?.getTronSDK();
    if (!tronSDK) throw new Error("Moon SDK not initialized");
    return tronSDK;
  };

  const listTronAccounts = useCallback(async () => {
    return handleTransaction("listTronAccounts", async () => {
      const tronSDK = getTronSDK();
      const response = await tronSDK.listTronAccounts();
      return response.data;
    });
  }, [moon]);

  const createTronAccount = useCallback(async () => {
    return handleTransaction("createTronAccount", async () => {
      const tronSDK = getTronSDK();
      const response = await tronSDK.createTronAccount({});
      return response.data;
    });
  }, [moon]);

  const getTronAccount = useCallback(
    async (payload: { accountName: string }) => {
      return handleTransaction("getTronAccount", async () => {
        const tronSDK = getTronSDK();
        const response = await tronSDK.getTronAccount(payload.accountName);
        return response.data;
      });
    },
    [moon]
  );

  const signTronTransaction = useCallback(
    async (payload: {
      accountName: string;
      transaction: {
        to: string;
        amount: string;
        fee: string;
        data: string;
      };
    }) => {
      return handleTransaction("signTronTransaction", async () => {
        const tronSDK = getTronSDK();
        const response = await tronSDK.signTronTransaction(
          payload.accountName,
          payload.transaction as TronTransactionInput
        );
        return response.data;
      });
    },
    [moon]
  );

  return {
    listTronAccounts,
    createTronAccount,
    getTronAccount,
    signTronTransaction,
  };
};
