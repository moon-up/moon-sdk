import { useCallback } from "react";
import { useMoonSDK } from "./useMoonSDK";
import { useMoonTransaction } from "./useMoonTransaction";
import {
  ERC20InputBody,
  Erc20,
  GetAllowanceParams,
  Transaction,
} from "@moonup/moon-api";
import { safelyParseUnits, weiStringAsFloat } from "@/utils/parse";

export const useMoonErc20 = () => {
  const context = useMoonSDK();
  const { handleTransaction } = useMoonTransaction();
  const { moon } = context;

  const getErc20SDK = (): Erc20 => {
    const erc20SDK = moon?.getErc20SDK();
    if (!erc20SDK) throw new Error("Moon SDK not initialized");
    return erc20SDK;
  };

  const approveTokenSpendIfNeeded = async (
    owner: string,
    spender: string,
    tokenAddress: string,
    amountDecimal: number,
    chainId: string
  ) => {
    try {
      const allowance = await allowanceErc20({
        account: owner,
        address: tokenAddress,
        owner: owner,
        spender: spender,
        chainId: chainId,
      });
      const currAllowance = weiStringAsFloat(allowance);
      if (currAllowance < amountDecimal) {
        await approveErc20({
          accountName: owner,
          transaction: {
            to: spender,
            amount: safelyParseUnits(amountDecimal.toString()).toString(),
            contract_address: tokenAddress,
            chain_id: chainId,
            broadcast: true,
            value: "0",
          },
        });
      }
    } catch (error) {
      console.error("approveTokenSpendIfNeeded: Error: ", error);
      return error;
    }
  };

  const approveErc20 = useCallback(
    async (payload: {
      accountName: string;
      transaction: ERC20InputBody;
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
      transaction: ERC20InputBody;
    }): Promise<Transaction> => {
      return handleTransaction("transferErc20", async () => {
        const erc20SDK = getErc20SDK();
        const response = await erc20SDK.transfer(
          payload.accountName,
          payload.transaction
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
    async (payload: GetAllowanceParams): Promise<string> => {
      return handleTransaction("allowanceErc20", async () => {
        const erc20SDK = getErc20SDK();
        const response = await erc20SDK.getAllowance(payload);
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
    approveTokenSpendIfNeeded,
  };
};
