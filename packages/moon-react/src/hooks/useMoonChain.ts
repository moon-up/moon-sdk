import { useMoonSDK } from "./useMoonSDK";

export const useMoonChain = () => {
  const { chains, chain, listChains, setChain } = useMoonSDK();
  return {
    chains,
    currentChain: chain,
    listChains,
    setChain,
  };
};
