import React, { useEffect, useMemo, useState } from "react";
import { useMoonSDK } from "../../..";
import Input, { InputProps } from "../../Input/Input";
import { shortenAddress } from "../../../utils/shortenAddress";
import { Modal } from "@/components";

/**
 * Wallet Selector Modal
 * Reusable component to select a wallet from a list of moon wallets associated with the moon account.
 * Default behavior will set the selected moon wallet when a wallet is selected.
 * controlSelectedWallet prop can be set to false to disable this behavior.
 */
type WalletSelectorProps = {
  title?: string;
  headerProps?: React.HTMLAttributes<HTMLDivElement>;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  inputProps?: InputProps;
  listProps?: React.HTMLAttributes<HTMLDivElement>;
  listItemProps?: React.HTMLAttributes<HTMLDivElement>;
  modalProps?: React.HTMLAttributes<HTMLDivElement>;
  customButtonContent?: React.ReactNode;
  onChange?: (e: any) => void;
  controlSelectedWallet?: boolean;
};

export const WalletSelectorModal = ({
  title,
  headerProps,
  buttonProps,
  inputProps,
  listProps,
  listItemProps,
  modalProps,
  customButtonContent,
  onChange,
  controlSelectedWallet = true,
}: WalletSelectorProps) => {
  const {
    wallets,
    setWallet,
    wallet,
    createWallet,
    listWallets,
  } = useMoonSDK();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedWallet && wallet) setSelectedWallet(wallet);
  }, [wallet, selectedWallet]);

  useEffect(() => {
    if (!wallet && wallets.length > 0 && controlSelectedWallet)
      setWallet(wallets[0]);
  }, [wallet, wallets, setWallet]);

  const filteredWallets = useMemo(() => {
    return wallets.filter((wallet: string) => {
      if (!wallet) return false;
      return wallet.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [wallets, searchTerm]);

  const toggleModal = (e?: any) => {
    e && e.preventDefault(); // Prevent form submission
    setIsOpen(!isOpen);
  };

  const handleWalletSelect = (wallet: string) => {
    if (wallet && controlSelectedWallet) setWallet(wallet);
    setSelectedWallet(wallet);
    toggleModal();
    const fakeEvent = { target: { value: wallet } };
    onChange && onChange(fakeEvent);
  };

  const createAndRefreshWallet = async () => {
    await createWallet();
    await listWallets();
  };

  return (
    <>
      {customButtonContent ? (
        <button onClick={toggleModal} {...buttonProps}>
          {customButtonContent}
        </button>
      ) : (
        <button
          className="bg-accent-color rounded-xl p-3 m-1 text-text-primary"
          onClick={toggleModal}
          {...buttonProps}
        >
          {shortenAddress(selectedWallet) || "Select Wallet"}
        </button>
      )}
      <Modal isOpen={isOpen} toggleModal={toggleModal} modalProps={modalProps}>
        {title && (
          <h2 className="text-xl font-semibold mb-4" {...headerProps}>
            {title}
            <button
              className="float-right text-text-primary"
              onClick={createAndRefreshWallet}
            >
              + New
            </button>
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
