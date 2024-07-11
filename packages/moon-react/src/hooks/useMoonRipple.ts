import { useCallback } from "react";
import { useMoonSDK } from "./useMoonSDK";
import { useMoonTransaction } from "./useMoonTransaction";
import { Ripple, RippleTransactionInput } from "@moonup/moon-api";

export const useMoonRipple = () => {
  const context = useMoonSDK();
  const { handleTransaction } = useMoonTransaction();
  const { moon } = context;

  const getRippleSDK = (): Ripple => {
    const rippleSDK = moon?.getRippleSDK();
    if (!rippleSDK) throw new Error("Moon SDK not initialized");
    return rippleSDK;
  };

  const createRippleAccount = useCallback(async () => {
    return handleTransaction("createRippleAccount", async () => {
      const rippleSDK = getRippleSDK();
      const response = await rippleSDK.createRippleAccount({});
      return response.data;
    });
  }, [moon]);

  const listRippleAccounts = useCallback(async () => {
    return handleTransaction("listRippleAccounts", async () => {
      const rippleSDK = getRippleSDK();
      const response = await rippleSDK.listRippleAccounts();
      return response.data;
    });
  }, [moon]);

  const getRippleAccount = useCallback(
    async (payload: { accountName: string }) => {
      return handleTransaction("getRippleAccount", async () => {
        const rippleSDK = getRippleSDK();
        const response = await rippleSDK.getRippleAccount(payload.accountName);
        return response.data;
      });
    },
    [moon]
  );

  const signRippleTransaction = useCallback(
    async (payload: {
      accountName: string;
      transaction: {
        to: string;
        amount: string;
        fee: string;
        data: string;
      };
    }) => {
      return handleTransaction("signRippleTransaction", async () => {
        const rippleSDK = getRippleSDK();
        const response = await rippleSDK.signRippleTransaction(
          payload.accountName,
          payload.transaction as RippleTransactionInput
        );
        return response.data;
      });
    },
    [moon]
  );

  return {
    createRippleAccount,
    listRippleAccounts,
    getRippleAccount,
    signRippleTransaction,
  };
};
