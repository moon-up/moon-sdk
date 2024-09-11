import { useCallback } from "react";
import { useMoonSDK } from "./useMoonSDK";
import { useMoonTransaction } from "./useMoonTransaction";
import { Erc721, InputBody, Transaction } from "@moonup/moon-api";

export const useMoonErc721 = () => {
  const context = useMoonSDK();
  const { handleTransaction } = useMoonTransaction();
  const { moon } = context;

  const getErc721SDK = (): Erc721 => {
    const erc721SDK = moon?.getErc721SDK();
    if (!erc721SDK) throw new Error("Moon SDK not initialized");
    return erc721SDK;
  };

  const approveErc721 = useCallback(
    async (payload: {
      accountName: string;
      transaction: InputBody;
    }): Promise<Transaction> => {
      return handleTransaction("approveErc721", async () => {
        const erc721SDK = getErc721SDK();
        const response = await erc721SDK.approve(
          payload.accountName,
          payload.transaction
        );
        return response.data;
      });
    },
    [moon]
  );

  const transferErc721 = useCallback(
    async (payload: {
      accountName: string;
      transaction: InputBody;
    }): Promise<Transaction> => {
      return handleTransaction("transferErc721", async () => {
        const erc721SDK = getErc721SDK();
        const response = await erc721SDK.transfer(
          payload.accountName,
          payload.transaction
        );
        return response.data;
      });
    },
    [moon]
  );

  const transferFromErc721 = useCallback(
    async (payload: {
      accountName: string;
      transaction: InputBody;
    }): Promise<Transaction> => {
      return handleTransaction("transferFromErc721", async () => {
        const erc721SDK = getErc721SDK();
        const response = await erc721SDK.transferFrom(
          payload.accountName,
          payload.transaction
        );
        return response.data;
      });
    },
    [moon]
  );

  const balanceOfErc721 = useCallback(
    async (payload: {
      accountName: string;
      transaction: InputBody;
    }): Promise<{ balance: string }> => {
      return handleTransaction("balanceOfErc721", async () => {
        const erc721SDK = getErc721SDK();
        const response = await erc721SDK.balanceOf(
          payload.accountName,
          payload.transaction
        );
        if (!response.success) {
          throw new Error(response.message);
        }
        return response.data as { balance: string };
      });
    },
    [moon]
  );

  const getApprovedErc721 = useCallback(
    async (payload: {
      accountName: string;
      transaction: InputBody;
    }): Promise<Transaction> => {
      return handleTransaction("getApprovedErc721", async () => {
        const erc721SDK = getErc721SDK();
        const response = await erc721SDK.getApproved(
          payload.accountName,
          payload.transaction
        );
        return response.data;
      });
    },
    [moon]
  );

  return {
    approveErc721,
    transferErc721,
    transferFromErc721,
    balanceOfErc721,
    getApprovedErc721,
  };
};
