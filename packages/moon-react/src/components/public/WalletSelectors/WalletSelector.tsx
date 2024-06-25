// create a react functional component that is a ChainSelector

import React, { useEffect } from "react";
import { useMoonSDK } from "../../..";
import { shortenAddress } from "../../../utils/shortenAddress";

type WalletSelectorProps = {
  selectProps?: React.SelectHTMLAttributes<HTMLSelectElement>;
  optionProps?: React.OptionHTMLAttributes<HTMLOptionElement>;
};

const WalletSelector = ({ selectProps, optionProps }: WalletSelectorProps) => {
  const { wallets, setWallet, wallet } = useMoonSDK();

  useEffect(() => {
    if (!wallet && wallets.length > 0) setWallet(wallets[0]);
  }, [wallet, wallets, setWallet]);

  return (
    <select
      className="max-h-[300px] bg-accent-color rounded-xl p-3 m-1 text-text-primary"
      value={wallet || ""}
      onChange={(e) => setWallet(e.target.value)}
      {...selectProps}
    >
      {wallets.map((wal: string) => (
        <option key={wal} value={wal} className="p-2" {...optionProps}>
          {shortenAddress(wal)}
        </option>
      ))}
    </select>
  );
};

export default WalletSelector;
