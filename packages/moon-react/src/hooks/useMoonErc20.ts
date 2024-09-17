import { useCallback } from "react";
import { useMoonSDK } from "./useMoonSDK";
import { useMoonTransaction } from "./useMoonTransaction";
import {
  Erc20,
  InputBody,
  RequestParams,
  Transaction,
  TransactionData,
} from "@moonup/moon-api";

export const useMoonErc20 = () => {
  const context = useMoonSDK();
  const { handleTransaction } = useMoonTransaction();
  const { moon } = context;

  const getErc20SDK = (): Erc20 => {
    const erc20SDK = moon?.getErc20SDK();
    if (!erc20SDK) throw new Error("Moon SDK not initialized");
    return erc20SDK;
  };

  const approveErc20 = useCallback(
    async (payload: {
      accountName: string;
      transaction: InputBody;
    }): Promise<Transaction> => {
      return handleTransaction("approveErc20", async () => {
        const erc20SDK = getErc20SDK();
        const response = await erc20SDK.approve(
          payload.accountName,
          payload.transaction
        );
        return response.data;
      });
    },
    [moon]
  );

  const transferErc20 = useCallback(
    async (payload: {
      accountName: string;
      transaction: {
        from: string;
        to: string;
        value: string;
        contract_address: string;
        chain_id: string;
      };
      params: RequestParams;
    }): Promise<Transaction> => {
      return handleTransaction("transferErc20", async () => {
        const erc20SDK = getErc20SDK();
        const response = await erc20SDK.transfer(
          payload.accountName,
          payload.transaction,
          payload.params
        );
        return response.data;
      });
    },
    [moon]
  );

  const transferFromErc20 = useCallback(
    async (payload: {
      accountName: string;
      transaction: {
        from: string;
        to: string;
        value: string;
        contract_address: string;
        chain_id: string;
      };
    }): Promise<Transaction> => {
      return handleTransaction("transferFromErc20", async () => {
        const erc20SDK = getErc20SDK();
        const response = await erc20SDK.transferFrom(
          payload.accountName,
          payload.transaction
        );
        return response.data;
      });
    },
    [moon]
  );

  const balanceOfErc20 = useCallback(
    async (payload: {
      accountName: string;
      transaction: {
        chain_id: string;
        contract_address: string;
      };
    }): Promise<{ balance: string }> => {
      return handleTransaction("balanceOfErc20", async () => {
        const erc20SDK = getErc20SDK();
        const response = await erc20SDK.getBalanceOf({
          account: payload.accountName,
          chainId: payload.transaction.chain_id,
          address: payload.transaction.contract_address,
        });
        if (!response.success) {
          throw new Error(response.message);
        }
        return response.data;
      });
    },
    [moon]
  );

  const allowanceErc20 = useCallback(
    async (payload: {
      accountName: string;
      transaction: {
        account: string;
        address: string;
        chainId: string;
        owner: string;
        spender: string;
      };
    }): Promise<TransactionData> => {
      return handleTransaction("allowanceErc20", async () => {
        const erc20SDK = getErc20SDK();
        const response = await erc20SDK.getAllowance({
          account: payload.accountName,
          chainId: payload.transaction.chainId,
          address: payload.transaction.address,
          spender: payload.transaction.spender,
          owner: payload.transaction.owner,
        });
        return response.data;
      });
    },
    [moon]
  );

  return {
    approveErc20,
    transferErc20,
    transferFromErc20,
    balanceOfErc20,
    allowanceErc20,
  };
};
