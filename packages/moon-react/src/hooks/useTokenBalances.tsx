import { useQueries, UseQueryResult } from "@tanstack/react-query";
import { useMoonErc1155, useMoonErc20, useMoonErc721 } from "@/index";
import { UserToken } from "@/components/public/TokenManager/types";
import { ethers } from "ethers";

type BalanceQueryResult = UseQueryResult<UserToken, Error>;

export function useTokenBalances(
  wallets: string[],
  tokens: UserToken[]
): BalanceQueryResult[][] {
  const { balanceOfErc20 } = useMoonErc20();
  const { balanceOfErc721 } = useMoonErc721();
  const { balanceOfErc1155 } = useMoonErc1155();
  const queries = wallets.flatMap((wallet) =>
    tokens.map((token) => ({
      queryKey: ["erc20TokenBalances", wallet, token.address, token.chainId],
      queryFn: async () => {
        if (!wallet) {
          throw new Error("Wallet not found");
        }
        let res = null;
        switch (token.type) {
          case "erc721":
            res = await balanceOfErc721({
              account: wallet,
              address: token.address,
              chainId: token.chainId.toString(),
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
            throw new Error("Unsupported token type");
        }
        let balanceDec = ethers.utils.formatUnits(res.balance, token.decimals);
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
  console.log(queries);
  return useQueries({
    queries: queries,
  });
}
