// create a react functional component that is a ChainSelector
import { IconGas } from "@/assets/icons";
import { useChains, useFetchWalletBalances, useMoonAccount } from "@/hooks";
import { shortenAddress } from "@/utils";
import { formatUnits } from "ethers";
import React from "react";

type WalletSelectorProps = {
	selectProps?: React.SelectHTMLAttributes<HTMLSelectElement>;
	optionProps?: React.OptionHTMLAttributes<HTMLOptionElement>;
};

export const WalletSelector = ({
	selectProps,
	optionProps,
}: WalletSelectorProps) => {
	const {
		accounts: wallets,
		account: wallet,
		setAccount: setWallet,
	} = useMoonAccount();
	const { selectedChain: chain } = useChains();
	const gasBalanceQueries = useFetchWalletBalances(
		wallets,
		chain?.chain_id?.toString() || "1",
	);
	// console.log(
	//   "gasBalanceQueries",
	//   gasBalanceQueries.map((r) => r.data),
	//   gasBalanceQueries.map((r) => r.error)
	// );
	React.useEffect(() => {
		if (!wallet && wallets.length > 0) setWallet(wallets[0]);
	}, [wallet, wallets, setWallet]);

	return (
		<select
			className="max-h-[300px] bg-accent-color rounded-xl p-3 m-1 text-text-primary"
			value={wallet || ""}
			onChange={(e) => setWallet(e.target.value)}
			{...selectProps}
		>
			{wallets.map((wal: string, i: number) => (
				<option key={wal} value={wal} className="p-2" {...optionProps}>
					{shortenAddress(wal)} - <IconGas className="w-6 h-6" />{" "}
					{formatUnits(
						gasBalanceQueries[i].data || "0",
						(chain?.native_currency as any)?.decimals || 18,
					)}
				</option>
			))}
		</select>
	);
};
