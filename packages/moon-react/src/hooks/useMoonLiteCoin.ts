import { useCallback } from "react";
import { useMoonSDK } from "./useMoonSDK";
import { useMoonTransaction } from "./useMoonTransaction";
import { Litecoin, LitecoinTransactionInput } from "@moonup/moon-api";

export const useMoonLitecoin = () => {
  const context = useMoonSDK();
  const { handleTransaction } = useMoonTransaction();
  const { moon } = context;

  const getLitecoinSDK = (): Litecoin => {
    const litecoinSDK = moon?.getLitecoinSDK();
    if (!litecoinSDK) throw new Error("Moon SDK not initialized");
    return litecoinSDK;
  };

  const listLitecoinAccounts = useCallback(async () => {
    return handleTransaction("listLitecoinAccounts", async () => {
      const litecoinSDK = getLitecoinSDK();
      const response = await litecoinSDK.listLitecoinAccounts();
      return response.data;
    });
  }, [moon]);

  const createLitecoinAccount = useCallback(async () => {
    return handleTransaction("createLitecoinAccount", async () => {
      const litecoinSDK = getLitecoinSDK();
      const response = await litecoinSDK.createLitecoinAccount({});
      return response.data;
    });
  }, [moon]);

  const getLitecoinAccount = useCallback(
    async (payload: { accountName: string }) => {
      return handleTransaction("getLitecoinAccount", async () => {
        const litecoinSDK = getLitecoinSDK();
        const response = await litecoinSDK.getLitecoinAccount(
          payload.accountName
        );
        return response.data;
      });
    },
    [moon]
  );

  const signLitecoinTransaction = useCallback(
    async (payload: {
      accountName: string;
      transaction: {
        to: string;
        amount: string;
        fee: string;
        data: string;
      };
    }) => {
      return handleTransaction("signLitecoinTransaction", async () => {
        const litecoinSDK = getLitecoinSDK();
        const response = await litecoinSDK.signLitecoinTransaction(
          payload.accountName,
          payload.transaction as LitecoinTransactionInput
        );
        return response.data;
      });
    },
    [moon]
  );

  return {
    listLitecoinAccounts,
    createLitecoinAccount,
    getLitecoinAccount,
    signLitecoinTransaction,
  };
};
