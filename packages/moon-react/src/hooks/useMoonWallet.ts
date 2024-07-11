import { MoonSDKContext } from "@/context";
import { useContext, useCallback } from "react";

export const useMoonWallet = () => {
  const context = useContext(MoonSDKContext);
  if (context === undefined) {
    throw new Error("useMoonWallet must be used within a MoonSDKProvider");
  }

  const { wallets, createWallet, listWallets, setWallet, wallet } = context;

  const getBalance = useCallback(async (address: string) => {
    // Implement balance fetching logic here
  }, []);

  return {
    wallets,
    createWallet,
    listWallets,
    setWallet,
    currentWallet: wallet,
    getBalance,
  };
};
