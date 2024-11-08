import { UserToken } from '@/components';
import { useErc1155, useErc20, useErc721, useMoonAccount } from '@/hooks';
import { weiStringAsFloat } from '@/utils/parse';
import { useQueries, UseQueryResult } from '@tanstack/react-query';

export type BalanceQueryResult = UseQueryResult<UserToken, Error>;

export function useTokenBalances(
  wallets: string[],
  tokens: UserToken[]
): BalanceQueryResult[][] {
  const { balanceOfErc20 } = useErc20();
  const { getErc721BalanceOf: balanceOfErc721 } = useErc721();
  const { balanceOfErc1155 } = useErc1155();
  const { getBalance } = useMoonAccount();
  const queries = wallets.flatMap((wallet) =>
    tokens.map((token) => ({
      queryKey: ['erc20TokenBalances', wallet, token.address, token.chainId],
      queryFn: async () => {
        if (!wallet) {
          throw new Error('useTokenBalances::Wallet not found');
        }
        let res = null;
        switch (token.type) {
          case 'native':
            res = await getBalance(wallet);
            break;
          case 'erc721':
            res = await balanceOfErc721({
              account: wallet,
              address: token.address,
              chainId: token.chainId.toString(),
            });
            break;
          case 'erc1155':
            res = await balanceOfErc1155({
              accountName: wallet,
              transaction: {
                chain_id: token.chainId.toString(),
                contract_address: token.address,
              },
            });
            break;
          case 'erc20':
            res = await balanceOfErc20({
              account: wallet,
              address: token.address,
              chainId: token.chainId.toString(),
            });
            break;
          default:
            res = await balanceOfErc20({
              account: wallet,
              address: token.address,
              chainId: token.chainId.toString(),
            });
            console.warn(
              'useTokenBalances::Unsupported token type' +
                token.type +
                ' for token ' +
                token.address +
                ' on chain ' +
                token.chainId
            );
        }
        console.warn('useTokenBalances::res', res, token);
        const balanceDec = weiStringAsFloat(res.balance, token.decimals);
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
