import { useCallback } from "react";
import { useMoonSDK } from "./useMoonSDK";
import { useMoonTransaction } from "./useMoonTransaction";
import {
  Erc1155,
  InputBody,
  Transaction,
} from "@moonup/moon-api";

export const useMoonErc1155 = () => {
  const context = useMoonSDK();
  const { handleTransaction } = useMoonTransaction();
  const { moon } = context;

  const getErc1155SDK = (): Erc1155 => {
    const erc1155SDK = moon?.getErc1155SDK();
    if (!erc1155SDK) throw new Error("Moon SDK not initialized");
    return erc1155SDK;
  };

  const balanceOfErc1155 = useCallback(
    async (payload: {
      accountName: string;
      transaction: InputBody;
    }): Promise<Transaction> => {
      return handleTransaction("balanceOfErc1155", async () => {
        const erc1155SDK = getErc1155SDK();
        const response = await erc1155SDK.balanceOf(
          payload.accountName,
          payload.transaction
        );
        return response.data;
      });
    },
    [moon]
  );

  const safeTransferFromErc1155 = useCallback(
    async (payload: {
      accountName: string;
      transaction: InputBody;
    }): Promise<Transaction> => {
      return handleTransaction("safeTransferFromErc1155", async () => {
        const erc1155SDK = getErc1155SDK();
        const response = await erc1155SDK.safeTransferFrom(
          payload.accountName,
          payload.transaction
        );
        return response.data;
      });
    },
    [moon]
  );

  return {
    balanceOfErc1155,
    safeTransferFromErc1155,
  };
};