import { useCallback } from "react";
import { useMoonSDK } from "./useMoonSDK";
import { useMoonTransaction } from "./useMoonTransaction";
import { Bitcoin, BitcoinTransactionInput } from "@moonup/moon-api";

export const useMoonBitcoin = () => {
  const context = useMoonSDK();
  const { handleTransaction } = useMoonTransaction();
  const { moon } = context;

  const getBitcoinSDK = (): Bitcoin => {
    const bitcoinSDK = moon?.getBitcoinSDK();
    if (!bitcoinSDK) throw new Error("Moon SDK not initialized");
    return bitcoinSDK;
  };

  const listBitcoinAccounts = useCallback(async () => {
    return handleTransaction("listBitcoinAccounts", async () => {
      const bitcoinSDK = getBitcoinSDK();
      const response = await bitcoinSDK.listBitcoinAccounts();
      return response.data;
    });
  }, [moon]);

  const createBitcoinAccount = useCallback(async () => {
    return handleTransaction("createBitcoinAccount", async () => {
      const bitcoinSDK = getBitcoinSDK();
      const response = await bitcoinSDK.createBitcoinAccount({});
      return response.data;
    });
  }, [moon]);

  const getBitcoinAccount = useCallback(
    async (payload: { accountName: string }) => {
      return handleTransaction("getBitcoinAccount", async () => {
        const bitcoinSDK = getBitcoinSDK();
        const response = await bitcoinSDK.getBitcoinAccount(
          payload.accountName
        );
        return response.data;
      });
    },
    [moon]
  );

  const signBitcoinTransaction = useCallback(
    async (payload: {
      accountName: string;
      transaction: {
        to: string;
        amount: string;
        fee: string;
        data: string;
      };
    }) => {
      return handleTransaction("signBitcoinTransaction", async () => {
        const bitcoinSDK = getBitcoinSDK();
        const response = await bitcoinSDK.signBitcoinTransaction(
          payload.accountName,
          payload.transaction as BitcoinTransactionInput
        );
        return response.data;
      });
    },
    [moon]
  );

  return {
    listBitcoinAccounts,
    createBitcoinAccount,
    getBitcoinAccount,
    signBitcoinTransaction,
  };
};
