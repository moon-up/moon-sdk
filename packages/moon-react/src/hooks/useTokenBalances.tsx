import { useQueries, UseQueryResult } from "@tanstack/react-query";
import {
  useMoonAccounts,
  useMoonErc1155,
  useMoonErc20,
  useMoonErc721,
} from "@/index";
import { UserToken } from "@/components/public/TokenManager/types";
import { weiStringAsFloat } from "@/utils/parse";

type BalanceQueryResult = UseQueryResult<UserToken, Error>;

export function useTokenBalances(
  wallets: string[],
  tokens: UserToken[]
): BalanceQueryResult[][] {
  const { balanceOfErc20 } = useMoonErc20();
  const { balanceOfErc721 } = useMoonErc721();
  const { balanceOfErc1155 } = useMoonErc1155();
  const { getBalance } = useMoonAccounts();
  const queries = wallets.flatMap((wallet) =>
    tokens.map((token) => ({
      queryKey: ["erc20TokenBalances", wallet, token.address, token.chainId],
      queryFn: async () => {
        if (!wallet) {
          throw new Error("useTokenBalances::Wallet not found");
        }
        let res = null;
        switch (token.type) {
          case "native":
            res = await getBalance({
              accountName: wallet,
              chainId: token.chainId.toString(),
            });
            break;
          case "erc721":
            res = await balanceOfErc721({
              accountName: wallet,
              transaction: {
                chain_id: token.chainId.toString(),
                contract_address: token.address,
              },
            });

            break;
          case "erc1155":
            res = await balanceOfErc1155({
              accountName: wallet,
              transaction: {
                chain_id: token.chainId.toString(),
                contract_address: token.address,
              },
            });
            break;
          case "erc20":
            res = await balanceOfErc20({
              accountName: wallet,
              transaction: {
                chain_id: token.chainId.toString(),
                contract_address: token.address,
              },
            });
            break;
          default:
            res = await balanceOfErc20({
              accountName: wallet,
              transaction: {
                chain_id: token.chainId.toString(),
                contract_address: token.address,
              },
            });
            console.warn(
              "useTokenBalances::Unsupported token type" +
                token.type +
                " for token " +
                token.address +
                " on chain " +
                token.chainId
            );
        }
        console.warn("useTokenBalances::res", res, token);
        let balanceDec = weiStringAsFloat(res.balance, token.decimals);
        return {
          ...token,
          wallet: wallet,
          balance: balanceDec,
        };
      },
      staleTime: 30000, // 30 seconds
      retry: 2,
    }))
  );
  return useQueries({
    queries: queries,
  });
}
