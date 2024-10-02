import React, { useEffect, useMemo, useState } from "react";
import Input, { InputProps } from "../../Input/Input";
import { Modal } from "@/components";
import { useMoonBridging } from "@/index";
import { LifiChainData } from "@/types";

type LifiChainSelectorModalProps = {
  initialChainKey?: string;
  onSelect: (tokenAddress: string) => void;
  title?: string;
  headerProps?: React.HTMLAttributes<HTMLDivElement>;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  inputProps?: InputProps;
  listProps?: React.HTMLAttributes<HTMLDivElement>;
  listItemProps?: React.HTMLAttributes<HTMLDivElement>;
};

export const LifiChainSelectorModal: React.FC<LifiChainSelectorModalProps> = ({
  initialChainKey,
  onSelect,
  title,
  headerProps,
  buttonProps,
  inputProps,
  listProps,
  listItemProps,
}) => {
  const [selectedChainKey, setSelectedChainKey] = useState<string | undefined>(
    initialChainKey
  );
  const { supportedChainsQuery } = useMoonBridging();
  useEffect(() => {
    if (selectedChainKey !== initialChainKey)
      setSelectedChainKey(initialChainKey);
  }, [initialChainKey]);

  const chainData = supportedChainsQuery.isSuccess
    ? ((supportedChainsQuery.data as any).data.chains as LifiChainData[])
    : ([] as LifiChainData[]);

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredChains = useMemo(() => {
    return chainData.filter((chain) => {
      return (
        chain.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chain.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chain.coin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chain.id.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [chainData, searchTerm]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChainSelect = (chainKey: string) => {
    setSelectedChainKey(chainKey);
    onSelect(chainKey);
    toggleModal();
  };
  const selectedChain = chainData.find(
    (chain) => chain.key === selectedChainKey
  );
  return (
    <>
      <button
        className="bg-accent-color rounded-xl p-3 m-1 text-text-primary"
        onClick={toggleModal}
        {...buttonProps}
      >
        {(selectedChainKey && selectedChain?.name) || "Select Chain"}
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
          placeholder="Search Chains..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          {...inputProps}
        />
        <div className="max-h-[300px] overflow-y-auto" {...listProps}>
          {filteredChains.map((chain) => (
            <div
              key={chain.id}
              onClick={() => handleChainSelect(chain.key)}
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
