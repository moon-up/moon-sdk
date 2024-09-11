import { useQueries, UseQueryResult } from "@tanstack/react-query";
import {
  useMoonErc1155,
  useMoonErc20,
  useMoonErc721,
  useMoonSDK,
} from "@/index";
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
        let balanceFnc = null;
        switch (token.type) {
          case "erc721":
            balanceFnc = balanceOfErc721;
            break;
          case "erc1155":
            balanceFnc = balanceOfErc1155;
            break;
          case "erc20":
          default:
            balanceFnc = balanceOfErc20;
            break;
        }
        if (!balanceFnc) {
          throw new Error("Unsupported token type");
        }
        const res = await balanceFnc({
          accountName: wallet,
          transaction: {
            chain_id: token.chainId.toString(),
            contract_address: token.address,
          },
        });
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
