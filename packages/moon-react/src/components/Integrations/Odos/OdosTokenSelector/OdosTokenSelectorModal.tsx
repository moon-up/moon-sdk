import { Input, InputProps, Modal } from '@/components';
import { useOdos } from '@/index';
import { OdosTokenMap } from '@/types';
import React, { useEffect, useMemo, useState } from 'react';

export type OdosTokenSelectorProps = {
  initialTokenAddress?: string;
  onSelect: (tokenAddress: string) => void;
  title?: string;
  headerProps?: React.HTMLAttributes<HTMLDivElement>;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  inputProps?: InputProps;
  listProps?: React.HTMLAttributes<HTMLDivElement>;
  listItemProps?: React.HTMLAttributes<HTMLDivElement>;
};

export const OdosTokenSelectorModal: React.FC<OdosTokenSelectorProps> = ({
  initialTokenAddress,
  onSelect,
  title,
  headerProps,
  buttonProps,
  inputProps,
  listProps,
  listItemProps,
}) => {
  const [selectedTokenAddress, setSelectedTokenAddress] = useState<
    string | undefined
  >(initialTokenAddress);
  const { supportedTokensQuery } = useOdos();

  useEffect(() => {
    if (selectedTokenAddress !== initialTokenAddress)
      setSelectedTokenAddress(initialTokenAddress);
  }, [initialTokenAddress]);

  const tokenData = supportedTokensQuery.isSuccess
    ? ((supportedTokensQuery.data as any).data.tokenMap as OdosTokenMap)
    : ({} as OdosTokenMap);

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTokenAddress = useMemo(() => {
    return Object.keys(tokenData).filter((contractAddress: string) => {
      return (
        contractAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tokenData[contractAddress].name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        tokenData[contractAddress].symbol
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    });
  }, [tokenData, searchTerm]);

  const toggleModal = (e?: any) => {
    e && e.preventDefault(); // Prevent form submission
    setIsOpen(!isOpen);
  };

  const handleTokenSelect = (tokenAddress: string) => {
    setSelectedTokenAddress(tokenAddress);
    onSelect(tokenAddress);
    toggleModal();
  };

  return (
    <>
      <button
        className="bg-accent-color rounded-xl p-3 m-1 text-text-primary"
        onClick={toggleModal}
        {...buttonProps}
      >
        {(selectedTokenAddress && tokenData[selectedTokenAddress]?.name) ||
          'Select Token'}
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
          {filteredTokenAddress.map((tokenAddresses: string) => (
            <div
              key={tokenAddresses}
              onClick={() => handleTokenSelect(tokenAddresses)}
              className="p-2 cursor-pointer hover:bg-accent-color rounded-sm"
              {...listItemProps}
            >
              {tokenData[tokenAddresses].name} (
              {tokenData[tokenAddresses].symbol})
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};
