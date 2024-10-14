import { useMoonSDK } from '@/hooks';
import { shortenAddress } from '@/utils/shortenAddress';
import { useCallback } from 'react';

export const useWalletAlias = () => {
  const context = useMoonSDK();
  const { aliases, dbAdapter, fetchAliases } = context;

  const wallet2Alias = useCallback(
    (wallet: string | null): string => {
      return (
        aliases.find((alias) => alias.address === wallet)?.alias ||
        shortenAddress(wallet) ||
        ''
      );
    },
    [aliases]
  );

  const alias2Wallet = useCallback(
    (alias: string): string => {
      return aliases.find((a) => a.alias === alias)?.address || alias;
    },
    [aliases]
  );

  const setWalletAlias = useCallback(
    async (alias: string, wallet: string) => {
      await dbAdapter.upsertWalletAlias(alias, wallet);
      await fetchAliases();
    },
    [dbAdapter]
  );

  return {
    wallet2Alias,
    alias2Wallet,
    setWalletAlias,
  };
};
