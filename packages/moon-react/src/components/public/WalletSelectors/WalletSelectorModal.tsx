import React, { useEffect, useMemo, useState } from "react";
import { useMoonSDK } from "../../..";
import Input, { InputProps } from "../../Input/Input";
import { shortenAddress } from "../../../utils/shortenAddress";
import { Modal } from "@/components";

type WalletSelectorProps = {
  title?: string;
  headerProps?: React.HTMLAttributes<HTMLDivElement>;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  inputProps?: InputProps;
  listProps?: React.HTMLAttributes<HTMLDivElement>;
  listItemProps?: React.HTMLAttributes<HTMLDivElement>;
};

const WalletSelectorModal = ({
  title,
  headerProps,
  buttonProps,
  inputProps,
  listProps,
  listItemProps,
}: WalletSelectorProps) => {
  const { wallets, setWallet, wallet } = useMoonSDK();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!wallet && wallets.length > 0) setWallet(wallets[0]);
  }, [wallet, wallets, setWallet]);

  const filteredWallets = useMemo(() => {
    return wallets.filter((wallet: string) => {
      if (!wallet) return false;
      return wallet.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [wallets, searchTerm]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleWalletSelect = (wallet: string) => {
    if (wallet) setWallet(wallet);
    toggleModal();
  };

  return (
    <>
      <button
        className="bg-accent-color rounded-xl p-3 m-1 text-text-primary"
        onClick={toggleModal}
        {...buttonProps}
      >
        {shortenAddress(wallet) || "Select Wallet"}
      </button>
      <Modal isOpen={isOpen} toggleModal={toggleModal}>
        {title && (
          <h2 className="text-xl font-semibold mb-4" {...headerProps}>
            {title}
          </h2>
        )}
        <Input
          label="Search Wallets"
          type="text"
          placeholder="Search wallets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          {...inputProps}
        />
        <div className="max-h-[300px] overflow-y-auto" {...listProps}>
          {filteredWallets.map((wallet: string) => (
            <div
              key={wallet}
              onClick={() => handleWalletSelect(wallet)}
              className="p-2 cursor-pointer hover:bg-accent-color rounded-sm"
              {...listItemProps}
            >
              {wallet}
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default WalletSelectorModal;
