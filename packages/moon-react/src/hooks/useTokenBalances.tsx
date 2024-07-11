import { useQueries } from "@tanstack/react-query";
import { useMoonSDK } from "..";
import { UserToken } from "@/components/public/TokenManager/types";

/**
 * Fetches the erc20 token balances of a list of user tokens for the wallet.
 **/

export function useTokenBalances(
  wallet: string | undefined,
  tokens: UserToken[]
) {
  const { moon } = useMoonSDK();
  if (!moon) {
    throw new Error("Moon SDK not initialized");
  }
  return useQueries({
    queries: tokens.map((token) => {
      return {
        staleTime: 1000 * 30,
        queryKey: ["erc20TokenBalances", wallet, token.address, token.chainId],
        queryFn: async () => {
          if (!wallet) {
            throw new Error("Wallet not found");
          }
          const response = await moon.getErc20SDK().balanceOfErc20(wallet, {
            chain_id: token.chainId.toString(),
            contract_address: token.address,
          });
          if (!response.success) {
            throw new Error(response.message);
          }
          return (response.data as { balance: string }).balance;
        },
      };
    }),
  });
}
