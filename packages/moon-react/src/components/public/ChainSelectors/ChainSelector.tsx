// create a react functional component that is a ChainSelector

import React, { useEffect, useMemo } from "react";
import { Chains } from "@moonup/moon-sdk";
import { useMoonChain } from "@/hooks/useMoonChain";

type ChainSelectorProps = {
  selectProps?: React.SelectHTMLAttributes<HTMLSelectElement>;
  optionProps?: React.OptionHTMLAttributes<HTMLOptionElement>;
};

export const ChainSelector = ({ selectProps, optionProps }: ChainSelectorProps) => {
  const { chains, setChain, currentChain: chain } = useMoonChain();

  useEffect(() => {
    const mainnet = chains.find((chain: Chains) => chain.chain_id === 1);
    if (!chain && mainnet) setChain(mainnet);
  }, [chains, setChain, chain]);

  const sortedChains = useMemo(
    () =>
      chains.sort((a: Chains, b: Chains) => {
        if (!a?.name || !b?.name) return 0;
        return a.name.localeCompare(b.name);
      }),
    [chains]
  );

  return (
    <select
      className="max-h-[300px] bg-accent-color rounded-xl p-3 m-1 text-text-primary"
      value={chain?.id || ""}
      onChange={(e) => {
        const chainId = e.target.value;
        let chain = chains.find((chain: any) => chain.id === chainId);
        if (chain) setChain(chain);
      }}
      {...selectProps}
    >
      {sortedChains.map((chain: any) => (
        <option
          key={chain.id}
          value={chain.id}
          className="p-2"
          {...optionProps}
        >
          {chain.name}
        </option>
      ))}
    </select>
  );
};