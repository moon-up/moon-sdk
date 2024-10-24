import { SupabaseAdapter } from "@/components";
import type { MoonSDK } from "@moonup/moon-sdk";
// biome-ignore lint/style/useImportType: <explanation>
import React, { ReactNode, useEffect, useState } from "react";
import { DEFAULT_AUTH_CONFIG } from "../constants/AUTH_CONSTANTS";
import type { DBAdapterBase } from "../database/DBAdapterBase";
import type { AuthModalConfig } from "../types/types";

import type { Chains } from "@moonup/moon-sdk";
import type {
	AuthSession as Session,
	SupabaseClient,
} from "@supabase/supabase-js";
import type { DbWalletAlias } from "../database/DBAdapterBase";
import { useChains, useMoonAccount } from "../hooks";
import type { TransactionResult } from "../types/types";
import { useMoonAuth } from "./AuthProvider";

export type State = {
	moon: MoonSDK | null;
	dbAdapter: DBAdapterBase;
	authConfig: AuthModalConfig;
	connect: (accessToken?: string, refreshToken?: string) => Promise<void>;
	disconnect: () => Promise<void>;

	isAuthenticated: boolean;
	session: Session | null;
	setIsAuthenticated: (value: boolean) => void;
	setSession: (session: Session | null) => void;

	supabase: SupabaseClient | null;
	wallets: string[];
	aliases: DbWalletAlias[];
	chains: Chains[];
	chain: Chains | null;
	loading: boolean;
	wallet?: string;
	chatOpen: boolean;
	transactionHistory: TransactionResult[];
	signOut: () => Promise<void>;
	createWallet: () => Promise<void>;
	listWallets: () => Promise<void>;
	fetchAliases: () => Promise<void>;
	setWallet: (wallet: string) => Promise<void>;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getUserSession: () => Promise<any>;
	connectEthers: () => Promise<void>;
	disconnectEthers: () => Promise<void>;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	request: (args: any) => Promise<any>;
	listChains: () => Promise<void>;
	setChain: (chain: Chains) => Promise<void>;
	setChatOpen: (isOpen: boolean) => Promise<void>;
	addTransactionResult: (result: TransactionResult) => void;
};
export const MoonSDKContext = React.createContext<State | undefined>(undefined);

type MoonSDKProviderProps = {
	authConfig?: AuthModalConfig;
	children: ReactNode;
};

export const MoonSDKProvider: React.FC<MoonSDKProviderProps> = ({
	children,
	authConfig = DEFAULT_AUTH_CONFIG,
}) => {
	const { supabaseClient, moon, isAuthenticated, session } = useMoonAuth();
	const [dbAdapter, setDbAdapter] = useState<DBAdapterBase | null>(null);
	const [aliases, setAliases] = useState<DbWalletAlias[]>([]);
	const [chain, setChain] = useState<Chains | null>(null);
	const [chatOpen, setChatOpen] = useState(false);
	const [transactionHistory, setTransactionHistory] = useState<
		TransactionResult[]
	>([]);
	const { fetchChains, chains } = useChains();
	const {
		accounts: wallets,
		listAccounts,
		createAccount,
		account: wallet,
		setAccount: setWallet,
	} = useMoonAccount();
	useEffect(() => {
		if (supabaseClient) {
			setDbAdapter(new SupabaseAdapter(supabaseClient));
		}
	}, [supabaseClient]);

	// useEffect(() => {
	// 	if (moon && isAuthenticated) {
	// 		listWallets();
	// 		listChains();
	// 		fetchAliases();
	// 	}
	// }, [moon, isAuthenticated]);

	const connect = async (accessToken?: string, refreshToken?: string) => {
		if (moon) {
			await moon.connect(accessToken, refreshToken);
		}
	};

	const disconnect = async () => {
		if (moon) {
			await moon.disconnect();
		}
	};

	const createWallet = async () => {
		return await createAccount({});
	};

	const fetchAliases = async () => {
		if (dbAdapter) {
			const fetchedAliases = await dbAdapter.getUserWalletAliases();
			setAliases(fetchedAliases);
		}
	};

	const listWallets = async () => {
		return await listAccounts();
	};

	const listChains = async () => {
		return await fetchChains();
	};

	const setActiveWallet = async (newWallet: string) => {
		setWallet(newWallet);
		if (session?.user?.id) {
			localStorage.setItem(`moon_wallet_${session.user.id}`, newWallet);
		}
	};

	const setActiveChain = async (newChain: Chains) => {
		setChain(newChain);
		if (session?.user?.id) {
			localStorage.setItem(
				`moon_chain_${session.user.id}`,
				JSON.stringify(newChain),
			);
		}
	};

	const addTransactionResult = (result: TransactionResult) => {
		setTransactionHistory((prev) => [...prev, result]);
	};

	const contextValue: State = {
		moon,
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		dbAdapter: dbAdapter!,
		authConfig,
		connect,
		disconnect,
		isAuthenticated,
		session,
		supabase: supabaseClient,
		wallets,
		aliases,
		chains,
		chain,
		loading: false,
		wallet,
		chatOpen,
		transactionHistory,
		signOut: async () => {
			// This should be handled by the AuthProvider
		},
		createWallet,
		listWallets,
		fetchAliases,
		setWallet: setActiveWallet,
		getUserSession: async () => {
			// This should be handled by the AuthProvider
		},
		connectEthers: async () => {
			// Implement if needed
		},
		disconnectEthers: async () => {
			// Implement if needed
		},
		request: async (args: any) => {
			console.log(args);
		},
		listChains,
		setChain: setActiveChain,
		setChatOpen: (isOpen: boolean): Promise<void> => {
			setChatOpen(isOpen);
			return Promise.resolve();
		},
		addTransactionResult,
		setIsAuthenticated: (value: boolean): void => {
			console.log(value);
		},
		setSession: (session: Session | null): void => {
			console.log(session);
		},
	};

	return (
		<MoonSDKContext.Provider value={contextValue}>
			{children}
		</MoonSDKContext.Provider>
	);
};
