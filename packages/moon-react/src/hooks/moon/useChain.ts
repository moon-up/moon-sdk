// useChains.ts
import { useMoonSDK } from '@/hooks';
import { Chains } from '@moonup/moon-sdk';
import { useCallback, useEffect, useState } from 'react';

export const useChains = () => {
  const { moon } = useMoonSDK();
  const [chains, setChains] = useState<Chains[]>([]);
  const [selectedChain, setSelectedChain] = useState<Chains | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchChains = useCallback(async () => {
    if (!moon) {
      setError(new Error('MoonSDK not initialized'));
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const chainService = moon.getChainService();
      const fetchedChains = await chainService.getChains();
      setChains(fetchedChains);
      setLoading(false);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error('Failed to fetch chains')
      );
      setLoading(false);
    }
  }, [moon]);

  const switchChain = useCallback(
    async (chainId: number) => {
      if (!moon) {
        setError(new Error('MoonSDK not initialized'));
        return;
      }

      try {
        const newSelectedChain = chains.find(
          (chain) => chain.chain_id === chainId
        );
        setSelectedChain(newSelectedChain || null);
        if (newSelectedChain) {
          await moon.getChainService().setSelectedChain(newSelectedChain);
        }
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('Failed to switch chain')
        );
      }
    },
    [moon, chains]
  );

  const getChainById = useCallback(
    (id: number): Chains | undefined => {
      return chains.find((chain) => chain.chain_id === id);
    },
    [chains]
  );

  useEffect(() => {
    fetchChains();
  }, [fetchChains]);

  useEffect(() => {
    if (moon && chains.length > 0) {
      const initialSelectedChain = moon.getChainService().getSelectedChain();
      setSelectedChain(initialSelectedChain);
    }
  }, [moon, chains]);

  return {
    chains,
    selectedChain,
    loading,
    error,
    fetchChains,
    switchChain,
    getChainById,
  };
};
