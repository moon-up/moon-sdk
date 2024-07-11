import { useQueries } from "@tanstack/react-query";
import { useMoonAccounts } from "./useMoonAccounts";

/**
 * Fetches the gas balances of the wallets in the list.
 **/
export function useFetchWalletBalances(wallets: string[], chainId: string) {
  const { getBalance } = useMoonAccounts();

  return useQueries({
    queries: wallets.map((wallet) => {
      return {
        queryKey: ["walletBalance", wallet, chainId],
        queryFn: async () => {
          if (!wallet) {
            throw new Error("Wallet not found");
          }
          const response = await getBalance({
            accountName: wallet,
            chainId,
          });
          return response.balance;
        },
      };
    }),
  });
}
