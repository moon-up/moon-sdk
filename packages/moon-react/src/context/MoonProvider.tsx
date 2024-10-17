import { SupabaseAdapter } from "@/components";
import type { MoonSDK } from "@moonup/moon-sdk";
// biome-ignore lint/style/useImportType: <explanation>
import React, { ReactNode, createContext, useEffect, useState } from "react";
import { DEFAULT_AUTH_CONFIG } from "../constants/AUTH_CONSTANTS";
import type { DBAdapterBase } from "../database/DBAdapterBase";
import type { AuthModalConfig } from "../types/types";

import type { Chains } from "@moonup/moon-sdk";
import type {
	AuthSession as Session,
	SupabaseClient,
} from "@supabase/supabase-js";
import { useReconnect } from "wagmi";
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

// type Action =
//   | { type: 'SET_MOON'; moon: MoonSDK }
//   | { type: 'SET_WALLETS'; wallets: string[] }
//   | { type: 'SET_ALIASES'; aliases: DbWalletAlias[] }
//   | { type: 'SET_LOADING'; loading: boolean }
//   | { type: 'SET_WALLET'; wallet: string }
//   | { type: 'SET_CHAINS'; chains: Chains[] }
//   | { type: 'SET_CHAIN'; chain: Chains }
//   | { type: 'SET_CHAT_OPEN'; chatOpen: boolean }
//   | { type: 'ADD_TRANSACTION_RESULT'; result: TransactionResult }
//   | { type: 'CLEAR_TRANSACTION_HISTORY' }
//   | { type: 'SET_WAGMI_CONFIG'; config: Config }
//   | {
//       type: 'LOAD_FROM_STORAGE';
//       wallet: string | undefined;
//       chain: Chains | null;
//     }
//   | { type: 'SET_IS_AUTHENTICATED'; isAuthenticated: boolean }
//   | { type: 'SET_SESSION'; session: Session | null };

// function reducer(state: State, action: Action): State {
//   switch (action.type) {
//     case 'SET_MOON':
//       return { ...state, moon: action.moon };
//     case 'SET_IS_AUTHENTICATED':
//       return { ...state, isAuthenticated: action.isAuthenticated };
//     case 'SET_SESSION':
//       return { ...state, session: action.session };
//     case 'SET_WALLETS':
//       return { ...state, wallets: action.wallets };
//     case 'SET_LOADING':
//       return { ...state, loading: action.loading };
//     case 'SET_WALLET':
//       return { ...state, wallet: action.wallet };
//     case 'SET_ALIASES':
//       return { ...state, aliases: action.aliases };
//     case 'SET_CHAINS':
//       return { ...state, chains: action.chains };
//     case 'SET_CHAIN':
//       return { ...state, chain: action.chain };
//     case 'SET_CHAT_OPEN':
//       return { ...state, chatOpen: action.chatOpen };
//     case 'ADD_TRANSACTION_RESULT':
//       return {
//         ...state,
//         transactionHistory: [...state.transactionHistory, action.result],
//       };
//     case 'CLEAR_TRANSACTION_HISTORY':
//       return { ...state, transactionHistory: [] };
//     case 'SET_WAGMI_CONFIG':
//       return { ...state, wagmiConfig: action.config };
//     case 'LOAD_FROM_STORAGE':
//       return {
//         ...state,
//         wallet: action.wallet || state.wallet,
//         chain: action.chain || state.chain,
//       };
//     default:
//       return state;
//   }
// }

export const MoonSDKContext = createContext<State | undefined>(undefined);

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
	const { reconnect } = useReconnect();
	useEffect(() => {
		reconnect();
	}, [reconnect]);

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
