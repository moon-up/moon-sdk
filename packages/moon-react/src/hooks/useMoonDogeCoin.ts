import { useCallback } from "react";
import { useMoonSDK } from "./useMoonSDK";
import { useMoonTransaction } from "./useMoonTransaction";
import { Dogecoin } from "@moonup/moon-api";

export const useMoonDogecoin = () => {
  const context = useMoonSDK();
  const { handleTransaction } = useMoonTransaction();
  const { moon } = context;

  const getDogecoinSDK = (): Dogecoin => {
    const dogecoinSDK = moon?.getDogecoinSDK();
    if (!dogecoinSDK) throw new Error("Moon SDK not initialized");
    return dogecoinSDK;
  };

  const listDogecoinAccounts = useCallback(async () => {
    return handleTransaction("listDogecoinAccounts", async () => {
      const dogecoinSDK = getDogecoinSDK();
      const response = await dogecoinSDK.listDogeCoinAccounts();
      return response.data;
    });
  }, [moon]);

  const createDogecoinAccount = useCallback(async () => {
    return handleTransaction("createDogecoinAccount", async () => {
      const dogecoinSDK = getDogecoinSDK();
      const response = await dogecoinSDK.createDogeCoinAccount({});
      return response.data;
    });
  }, [moon]);

  const getDogecoinAccount = useCallback(
    async (payload: { accountName: string }) => {
      return handleTransaction("getDogecoinAccount", async () => {
        const dogecoinSDK = getDogecoinSDK();
        const response = await dogecoinSDK.getDogeCoinAccount(
          payload.accountName
        );
        return response.data;
      });
    },
    [moon]
  );

  const signDogecoinTransaction = useCallback(
    async (payload: {
      accountName: string;
      transaction: {
        to: string;
        amount: string;
        fee: string;
        data: string;
      };
    }) => {
      return handleTransaction("signDogecoinTransaction", async () => {
        const dogecoinSDK = getDogecoinSDK();
        const response = await dogecoinSDK.signDogeCoinTransaction(
          payload.accountName,
          payload.transaction
        );
        return response.data;
      });
    },
    [moon]
  );

  return {
    listDogecoinAccounts,
    createDogecoinAccount,
    getDogecoinAccount,
    signDogecoinTransaction,
  };
};
