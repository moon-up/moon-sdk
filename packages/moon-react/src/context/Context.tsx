import React, { createContext, ReactNode, useEffect, useReducer } from 'react';

import { MoonProvider } from '@moonup/ethers';
import { MoonSDK } from '@moonup/moon-sdk';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  coinbaseWallet,
  injectedWallet,
  rainbowWallet,
  safeWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { Session, SupabaseClient } from "@supabase/supabase-js";
import { QueryClientProvider, useQueryClient } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/query-core";
import { announceProvider, EIP1193Provider, Store } from "mipd";
import { createConfig, custom, WagmiProvider } from "wagmi";
import { mainnet, mode, optimism, polygon, sepolia } from "wagmi/chains";
import "../index.css";

import { createStore } from "mipd";
import { AuthModal } from "@public-components/index";
import { AuthModalConfig, TransactionResult } from "../types/types";
import { DEFAULT_AUTH_CONFIG } from "../constants";
import { Chains } from "@moonup/moon-sdk";
import { supabase } from "@/supabase";
import {
  SupabaseAdapter,
  UserTokenDBAdapter,
} from "@/components/public/TokenManager";

const walletsRainbowkit = [
  injectedWallet,
  coinbaseWallet,
  rainbowWallet,
  walletConnectWallet,
  safeWallet,
];

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: walletsRainbowkit,
    },
  ],
  {
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
  }
);
export type State = {
  moon: MoonSDK | null;
  dbAdapter: UserTokenDBAdapter;
  authConfig: AuthModalConfig;
  session: Session | null;
  supabase: SupabaseClient | null;
  wallets: string[];
  chains: Chains[];
  chain: Chains | null;
  ethers?: MoonProvider | null;
  loading: boolean;
  wallet?: string;
  chatOpen: boolean;
  transactionHistory: TransactionResult[];
  signOut: () => Promise<void>;
  createWallet: () => Promise<void>;
  listWallets: () => Promise<void>;
  setWallet: (wallet: string) => Promise<void>;
  store: Store;
  connect: (accessToken?: string, refreshToken?: string) => Promise<void>;
  disconnect: () => Promise<void>;
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

type Action =
  | { type: "SET_MOON"; moon: MoonSDK }
  | { type: "SET_SESSION"; session: Session | null }
  | { type: "SET_SUPABASE"; supabase: SupabaseClient }
  | { type: "SET_WALLETS"; wallets: string[] }
  | { type: "SET_ETHERS"; ethers: MoonProvider | null }
  | { type: "SET_LOADING"; loading: boolean }
  | { type: "SET_WALLET"; wallet: string }
  | { type: "SET_CHAINS"; chains: Chains[] }
  | { type: "SET_CHAIN"; chain: Chains }
  | { type: "SET_CHAT_OPEN"; chatOpen: boolean }
  | { type: "SET_STORE"; store: Store }
  | { type: "ADD_TRANSACTION_RESULT"; result: TransactionResult }
  | { type: "CLEAR_TRANSACTION_HISTORY" }
  | {
      type: "LOAD_FROM_STORAGE";
      wallet: string | undefined;
      chain: Chains | null;
    };

// Define the reducer
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_MOON':
      return { ...state, moon: action.moon };
    case 'SET_SESSION':
      return { ...state, session: action.session };
    case 'SET_SUPABASE':
      return { ...state, supabase: action.supabase };
    case 'SET_WALLETS':
      return { ...state, wallets: action.wallets };
    case 'SET_ETHERS':
      return { ...state, ethers: action.ethers };
    case 'SET_LOADING':
      return { ...state, loading: action.loading };
    case 'SET_WALLET':
      return { ...state, wallet: action.wallet };
    case 'SET_STORE':
      return { ...state, store: action.store };
    case 'SET_CHAINS':
      return { ...state, chains: action.chains };
    case "SET_CHAIN":
      return { ...state, chain: action.chain };
    case "SET_CHAT_OPEN":
      return { ...state, chatOpen: action.chatOpen };
    case "ADD_TRANSACTION_RESULT":
      return {
        ...state,
        transactionHistory: [...state.transactionHistory, action.result],
      };
    case "CLEAR_TRANSACTION_HISTORY":
      return { ...state, transactionHistory: [] };
    case "LOAD_FROM_STORAGE":
      console.log("localStorage::LOAD_FROM_STORAGE", action);
      return {
        ...state,
        wallet: action.wallet || state.wallet,
        chain: action.chain || state.chain,
      };
    default:
      return state;
  }
}

const moon = new MoonSDK({
  authInstance: supabase,
});
const provider = new MoonProvider({
  SDK: moon,
  chainId: 1,
  address: '0x',
});
window.moon = provider;

// Define the context
export const MoonSDKContext = createContext<State | undefined>(undefined);
// ...
const config = createConfig({
  chains: [mainnet, optimism, polygon, mode, sepolia],
  connectors: connectors,
  transports: {
    [mainnet.id]: custom(provider),
    [optimism.id]: custom(provider),
    [polygon.id]: custom(provider),
    [mode.id]: custom(provider),
    [sepolia.id]: custom(provider),
  },
});
declare global {
  interface Window {
    moon: MoonProvider;
  }
}

const store = createStore();

type MoonSDKProviderProps = {
  authConfig?: AuthModalConfig;
  children: ReactNode;
};

export const MoonSDKProvider: React.FC<MoonSDKProviderProps> = ({
  children,
  authConfig = DEFAULT_AUTH_CONFIG,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    moon: moon,
    dbAdapter: new SupabaseAdapter(supabase),
    authConfig: authConfig,
    loading: true, // Add a loading state
    session: null,
    supabase: supabase,
    chatOpen: false,
    wallets: [],
    chains: [],
    chain: null,
    wallet: "",
    ethers: provider,
    store: store,
    transactionHistory: [],
    connect: async (accessToken?: string, refreshToken?: string) => {
      if (state.moon) {
        await state.moon.connect(accessToken, refreshToken);
      }
    },
    disconnect: async () => {
      if (state.moon) {
        await state.moon.disconnect();
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getUserSession: async (): Promise<any> => {
      if (state.supabase) {
        const { data, error } = await state.supabase.auth.getSession();
        return { data, error };
      }
    },
    connectEthers: async () => {
      if (state.ethers) {
        await state.ethers.connect();
      }
    },
    disconnectEthers: async () => {
      if (state.ethers) {
        await state.ethers.disconnect();
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    request: async (args: any): Promise<any> => {
      if (state.ethers) {
        return await state.ethers.request(args);
      }
      return null;
    },

    signOut: async () => {
      console.log('signOut');
      console.log('state', state);
      if (state.supabase) {
        const { error } = await state.supabase.auth.signOut();
        if (error) {
          console.error('An error occurred:', error);
        }
      }
    },
    createWallet: async () => {
      if (state.moon) {
        const wallet = await state.moon.createAccount();
        dispatch({ type: 'SET_WALLETS', wallets: [...state.wallets, wallet] });
      }
    },
    listWallets: async () => {
      console.log('accounts');
      console.log('state', state);
      const accounts = await state.moon?.listAccounts();
      console.log('accounts', accounts);
      dispatch({
        type: 'SET_WALLETS',
        wallets: [...state.wallets, ...(accounts || [])],
      });
    },
    setChatOpen: async (isOpen: boolean) => {
      dispatch({ type: "SET_CHAT_OPEN", chatOpen: isOpen });
    },
    setWallet: async (wallet: string) => {
      console.log('state', state);
      if (!state.moon) {
        return;
      }
      state.ethers?.updateConfig({
        SDK: state.moon,
        chainId: state.chain?.chain_id || 1,
        address: wallet,
      });
      dispatch({ type: "SET_WALLET", wallet });
      const session = (await state.getUserSession()).data.session;
      console.log("localStorage::state.session?.user", state, session);
      if (session?.user?.id) {
        console.log("localStorage::setWallet", wallet);
        localStorage.setItem(`moon_wallet_${session?.user?.id}`, wallet);
      }
    },
    listChains: async () => {
      console.log("getChains");
      const chains = await state.moon?.getChains();
      console.log('chains', chains);
      dispatch({
        type: 'SET_CHAINS',
        chains: [...state.chains, ...(chains || [])],
      });
    },
    setChain: async (chain: Chains) => {
      if (!state.moon || !chain?.chain_id) {
        return;
      }
      state.ethers?.updateConfig({
        SDK: state.moon,
        chainId: chain.chain_id,
        address: state.wallet,
      });
      dispatch({ type: "SET_CHAIN", chain });
      const session = (await state.getUserSession()).data.session;
      if (session?.user.id) {
        localStorage.setItem(
          `moon_chain_${session.user.id}`,
          JSON.stringify(chain)
        );
      }
    },
    addTransactionResult: (result: TransactionResult) => {
      dispatch({ type: "ADD_TRANSACTION_RESULT", result });
    },
  });

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session: Session | null) => {
      switch (_event) {
        case "INITIAL_SESSION":
        case "SIGNED_IN":
        case "TOKEN_REFRESHED":
          console.log("localStorage::SIGNED_IN", session);
          dispatch({ type: "SET_SESSION", session });
          if (session?.user.id) {
            const storedWallet = localStorage.getItem(
              `moon_wallet_${session.user.id}`
            );
            const storedChain = localStorage.getItem(
              `moon_chain_${session.user.id}`
            );
            console.log("localStorage::storedWallet", storedWallet);
            console.log("localStorage::storedChain", storedChain);
            dispatch({
              type: "LOAD_FROM_STORAGE",
              wallet: storedWallet || undefined,
              chain: storedChain ? JSON.parse(storedChain) : undefined,
            });
          }
          break;

        case "SIGNED_OUT":
          console.log("SIGNED_OUT");
          dispatch({ type: "SET_SESSION", session: null });
          dispatch({ type: "SET_WALLETS", wallets: [] });
          if (state.session?.user.id) {
            console.log("localStorage::clear wallet/chain");

            localStorage.removeItem(`moon_wallet_${state.session.user.id}`);
            localStorage.removeItem(`moon_chain_${state.session.user.id}`);
          }
          break;
      }
    });
    announceProvider({
      info: {
        icon: 'data:image/svg+xml,<svg width="32px" height="32px" viewBox="0 0 32 32"/>',
        name: 'Moon',
        rdns: 'ai.usemoon',
        uuid: '00000000-0000-0000-0000-000000000000',
      },
      provider: provider as EIP1193Provider,
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  const queryClient = useQueryClient(new QueryClient());

  return (
    <MoonSDKContext.Provider value={state}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <AuthModal config={authConfig}>{children}</AuthModal>
        </QueryClientProvider>
      </WagmiProvider>
    </MoonSDKContext.Provider>
  );
};
