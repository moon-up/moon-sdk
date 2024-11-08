import { useMoonSDK } from '../old/useMoonSDK';

export const useMoonChain = () => {
  const { chains, chain, listChains, setChain } = useMoonSDK();
  return {
    chains,
    currentChain: chain,
    listChains,
    setChain,
  };
};
