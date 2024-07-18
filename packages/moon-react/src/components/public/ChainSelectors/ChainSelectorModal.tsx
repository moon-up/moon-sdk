import React, { useEffect, useMemo, useState } from "react";
import { Chains } from "@moonup/moon-sdk";
import Input, { InputProps } from "../../Input/Input";
import { Modal } from "@/components";
import { useMoonChain } from "@/hooks/useMoonChain";

type ChainSelectorProps = {
  chainIdFilterList?: number[];
  title?: string;
  headerProps?: React.HTMLAttributes<HTMLDivElement>;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  inputProps?: InputProps;
  listProps?: React.HTMLAttributes<HTMLDivElement>;
  listItemProps?: React.HTMLAttributes<HTMLDivElement>;
};

const ChainSelectorModal: React.FC<ChainSelectorProps> = ({
  chainIdFilterList,
  title,
  headerProps,
  buttonProps,
  inputProps,
  listProps,
  listItemProps,
}) => {
  const { chains, setChain, currentChain: chain } = useMoonChain();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const mainnet = chains.find((chain: Chains) => chain.chain_id === 1);
    if (!chain && mainnet) setChain(mainnet);
  }, [chains, setChain, chain]);

  const sortedChains = useMemo(() => {
    return chains.sort((a: Chains, b: Chains) => {
      if (!a?.name || !b?.name) return 0;
      return a.name.localeCompare(b.name);
    });
  }, [chains]);

  const filteredChains = useMemo(() => {
    return sortedChains.filter((chain: Chains) => {
      if (!chain.name) return 0;
      return (
        chain.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!chainIdFilterList || chainIdFilterList.includes(chain.chain_id || -1))
      );
    });
  }, [sortedChains, searchTerm]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChainSelect = (chainId: string) => {
    let selectedChain = chains.find((chain: Chains) => chain.id === chainId);
    if (selectedChain) setChain(selectedChain);
    toggleModal();
  };

  return (
    <>
      <button
        className="bg-accent-color rounded-xl p-3 m-1 text-text-primary"
        onClick={toggleModal}
        {...buttonProps}
      >
        {chain?.name || "Select Chain"}
      </button>
      <Modal isOpen={isOpen} toggleModal={toggleModal}>
        {title && (
          <h2 className="text-xl font-semibold mb-4" {...headerProps}>
            {title}
          </h2>
        )}
        <Input
          label="Search Chains"
          type="text"
          placeholder="Search chains..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          {...inputProps}
        />
        <div className="max-h-[300px] overflow-y-auto" {...listProps}>
          {filteredChains.map((chain: Chains) => (
            <div
              key={chain.id}
              onClick={() => handleChainSelect(chain.id)}
              className="p-2 cursor-pointer hover:bg-accent-color rounded-sm"
              {...listItemProps}
            >
              {chain.name}
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default ChainSelectorModal;
