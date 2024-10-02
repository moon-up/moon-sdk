import React, { useEffect, useState } from "react";
import Input, { InputProps } from "../../Input/Input";
import { Modal } from "@/components";
import { useMoonBridging } from "@/index";
import { LiFiToken, LiFiTokenMap, LifiChainData } from "@/types";
import { useDebounceCallback } from "usehooks-ts";

type LifiTokenSelectorModalProps = {
  initialTokenAddress?: string | undefined;
  initialTokenChain?: string | undefined;
  onSelect: (tokenAddress: string) => void;
  title?: string;
  headerProps?: React.HTMLAttributes<HTMLDivElement>;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  inputProps?: InputProps;
  listProps?: React.HTMLAttributes<HTMLDivElement>;
  listItemProps?: React.HTMLAttributes<HTMLDivElement>;
};

type ObjectWithArrays = {
  [key: string]: any[];
};

function combineArraysFromObject<T>(obj: ObjectWithArrays): T[] {
  return Object.values(obj).flat() as T[];
}

export const LifiTokenSelectorModal: React.FC<LifiTokenSelectorModalProps> = ({
  initialTokenAddress,
  initialTokenChain,
  onSelect,
  title,
  headerProps,
  buttonProps,
  inputProps,
  listProps,
  listItemProps,
}) => {
  const [filteredTokens, setFilteredTokens] = useState([] as LiFiToken[]);

  const [selectedTokenAddress, setSelectedTokenAddress] = useState<
    string | undefined
  >(initialTokenAddress);
  const [selectedChainKey, setSelectedChainKey] = useState<string | undefined>(
    initialTokenChain
  );
  const { supportedTokensQuery, supportedChainsQuery } = useMoonBridging();

  console.log("supportedTokensQuery", supportedTokensQuery, selectedChainKey);

  useEffect(() => {
    if (selectedChainKey !== initialTokenChain)
      setSelectedChainKey(initialTokenChain);
  }, [initialTokenChain]);

  useEffect(() => {
    if (selectedTokenAddress !== initialTokenAddress)
      setSelectedTokenAddress(initialTokenAddress);
  }, [initialTokenAddress]);

  const tokenData = supportedTokensQuery.isSuccess
    ? ((supportedTokensQuery.data as any).data.tokens as LiFiTokenMap)
    : ({} as LiFiTokenMap);

  const chainData = supportedChainsQuery.isSuccess
    ? ((supportedChainsQuery.data as any).data.chains as LifiChainData[])
    : ([] as LifiChainData[]);

  const initialChain = chainData.find(
    (chain: LifiChainData) => chain.key === selectedChainKey
  );

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filterTokens = () => {
    let tokens = [];
    tokens = combineArraysFromObject<LiFiToken>(tokenData);
    if (initialChain)
      tokens = tokens.filter((token: LiFiToken) => {
        return token.chainId === initialChain.id;
      });
    tokens = tokens.filter((token: LiFiToken) => {
      return token.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    //sort based on how close the search term length is to the token name length
    if (searchTerm !== "")
      tokens = tokens.sort((a, b) => {
        return (
          Math.abs(a.name.length - searchTerm.length) -
          Math.abs(b.name.length - searchTerm.length)
        );
      });
    setFilteredTokens(tokens);
  };

  const debouncedFilterTokens = useDebounceCallback(filterTokens, 1000);

  useEffect(() => {
    debouncedFilterTokens();
  }, [tokenData, initialChain, searchTerm]);

  const toggleModal = (e?: any) => {
    e && e.preventDefault(); // Prevent form submission
    setIsOpen(!isOpen);
  };

  const handleTokenSelect = (tokenAddress: string) => {
    setSelectedTokenAddress(tokenAddress);
    onSelect(tokenAddress);
    toggleModal();
  };

  const selectedToken = filteredTokens.find(
    (token: LiFiToken) => token.address === selectedTokenAddress
  );

  return (
    <>
      <button
        className="bg-accent-color rounded-xl p-3 m-1 text-text-primary"
        onClick={toggleModal}
        {...buttonProps}
      >
        {(selectedToken && selectedToken?.name) || "Select Token"}
      </button>
      <Modal isOpen={isOpen} toggleModal={toggleModal}>
        {title && (
          <h2 className="text-xl font-semibold mb-4" {...headerProps}>
            {title}
          </h2>
        )}
        <Input
          label="Search Tokens"
          type="text"
          placeholder="Search tokens..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          {...inputProps}
        />
        <div className="max-h-[300px] overflow-y-auto" {...listProps}>
          {filteredTokens.map((token) => (
            <div
              key={token.address + token.chainId}
              onClick={() => handleTokenSelect(token.address)}
              className="p-2 cursor-pointer hover:bg-accent-color rounded-sm"
              {...listItemProps}
            >
              {token.name} ({token.symbol}) - {token.chainId}
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};
