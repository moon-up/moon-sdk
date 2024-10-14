import { AuthModal } from '@/components';
import { DBAdapterBase, SupabaseAdapter } from '@/database';
import { supabase } from '@/supabase';
import { Chains, MoonSDK, MoonSDKConfig } from '@moonup/moon-sdk';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  coinbaseWallet,
  injectedWallet,
  rainbowWallet,
  safeWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { AuthSession as Session, SupabaseClient } from '@supabase/supabase-js';
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from '@tanstack/react-query';
import React, { createContext, ReactNode, useEffect, useReducer } from 'react';
import { Config, WagmiProvider } from 'wagmi';
import { DEFAULT_AUTH_CONFIG } from '../constants/AUTH_CONSTANTS';
import { DbWalletAlias } from '../database/DBAdapterBase';
import { AuthModalConfig, TransactionResult } from '../types/types';
import { ThemeProvider } from './ThemeProvider';

export type State = {
  moon: MoonSDK | null;
  dbAdapter: DBAdapterBase;
  authConfig: AuthModalConfig;
  session: Session | null;
  supabase: SupabaseClient | null;
  wallets: string[];
  aliases: DbWalletAlias[];
  chains: Chains[];
  chain: Chains | null;
  loading: boolean;
  wallet?: string;
  chatOpen: boolean;
  transactionHistory: TransactionResult[];
  wagmiConfig: Config | null;
  signOut: () => Promise<void>;
  createWallet: () => Promise<void>;
  listWallets: () => Promise<void>;
  fetchAliases: () => Promise<void>;
  setWallet: (wallet: string) => Promise<void>;
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
  | { type: 'SET_MOON'; moon: MoonSDK }
  | { type: 'SET_SESSION'; session: Session | null }
  | { type: 'SET_WALLETS'; wallets: string[] }
  | { type: 'SET_ALIASES'; aliases: DbWalletAlias[] }
  | { type: 'SET_LOADING'; loading: boolean }
  | { type: 'SET_WALLET'; wallet: string }
  | { type: 'SET_CHAINS'; chains: Chains[] }
  | { type: 'SET_CHAIN'; chain: Chains }
  | { type: 'SET_CHAT_OPEN'; chatOpen: boolean }
  | { type: 'ADD_TRANSACTION_RESULT'; result: TransactionResult }
  | { type: 'CLEAR_TRANSACTION_HISTORY' }
  | { type: 'SET_WAGMI_CONFIG'; config: Config }
  | {
      type: 'LOAD_FROM_STORAGE';
      wallet: string | undefined;
      chain: Chains | null;
    };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_MOON':
      return { ...state, moon: action.moon };
    case 'SET_SESSION':
      return { ...state, session: action.session };
    case 'SET_WALLETS':
      return { ...state, wallets: action.wallets };
    case 'SET_LOADING':
      return { ...state, loading: action.loading };
    case 'SET_WALLET':
      return { ...state, wallet: action.wallet };
    case 'SET_ALIASES':
      return { ...state, aliases: action.aliases };
    case 'SET_CHAINS':
      return { ...state, chains: action.chains };
    case 'SET_CHAIN':
      return { ...state, chain: action.chain };
    case 'SET_CHAT_OPEN':
      return { ...state, chatOpen: action.chatOpen };
    case 'ADD_TRANSACTION_RESULT':
      return {
        ...state,
        transactionHistory: [...state.transactionHistory, action.result],
      };
    case 'CLEAR_TRANSACTION_HISTORY':
      return { ...state, transactionHistory: [] };
    case 'SET_WAGMI_CONFIG':
      return { ...state, wagmiConfig: action.config };
    case 'LOAD_FROM_STORAGE':
      return {
        ...state,
        wallet: action.wallet || state.wallet,
        chain: action.chain || state.chain,
      };
    default:
      return state;
  }
}

export const MoonSDKContext = createContext<State | undefined>(undefined);

type MoonSDKProviderProps = {
  authConfig?: AuthModalConfig;
  sdkConfig?: MoonSDKConfig;
  children: ReactNode;
};

export const MoonSDKProvider: React.FC<MoonSDKProviderProps> = ({
  children,
  authConfig = DEFAULT_AUTH_CONFIG,
  sdkConfig,
}) => {
  const moon = new MoonSDK({
    ...sdkConfig,
    authInstance: supabase,
  });

  const [state, dispatch] = useReducer(reducer, {
    moon,
    dbAdapter: new SupabaseAdapter(supabase),
    authConfig: authConfig,
    loading: true,
    session: null,
    supabase,
    chatOpen: false,
    wallets: [],
    aliases: [],
    chains: [],
    chain: null,
    wallet: '',
    transactionHistory: [],
    wagmiConfig: null,
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
      // if (state.ethers) {
      //   await state.ethers.connect();
      // }
    },
    disconnectEthers: async () => {
      // if (state.ethers) {
      //   await state.ethers.disconnect();
      // }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    request: async (args: any): Promise<any> => {
      console.log('request', args);
      // if (state.ethers) {
      //   return await state.ethers.request(args);
      // }
      // return null;
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
    fetchAliases: async () => {
      const aliases = await state.dbAdapter.getUserWalletAliases();
      dispatch({ type: 'SET_ALIASES', aliases });
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
      dispatch({ type: 'SET_CHAT_OPEN', chatOpen: isOpen });
    },
    setWallet: async (wallet: string) => {
      console.log('state', state);
      if (!state.moon) {
        return;
      }
      // state.ethers?.updateConfig({
      //   SDK: state.moon,
      //   chainId: state.chain?.chain_id || 1,
      //   address: wallet,
      // });
      dispatch({ type: 'SET_WALLET', wallet });
      const session = (await state.getUserSession()).data.session;
      console.log('localStorage::state.session?.user', state, session);
      if (session?.user?.id) {
        console.log('localStorage::setWallet', wallet);
        localStorage.setItem(`moon_wallet_${session?.user?.id}`, wallet);
      }
    },
    listChains: async () => {
      console.log('getChains');
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
      // state.ethers?.updateConfig({
      //   SDK: state.moon,
      //   chainId: chain.chain_id,
      //   address: state.wallet,
      // });
      dispatch({ type: 'SET_CHAIN', chain });
      const session = (await state.getUserSession()).data.session;
      if (session?.user.id) {
        localStorage.setItem(
          `moon_chain_${session.user.id}`,
          JSON.stringify(chain)
        );
      }
    },
    addTransactionResult: (result: TransactionResult) => {
      dispatch({ type: 'ADD_TRANSACTION_RESULT', result });
    },
  });

  useEffect(() => {
    const setupWagmi = async () => {
      if (!state.moon) {
        return;
      }
      state.moon.getProviderService().initializeMIPD();
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

      const config = await state.moon?.getProviderService().createWagmiConfig({
        connectors: [...connectors],
      });
      dispatch({
        type: 'SET_WAGMI_CONFIG',
        config: config as Config,
      });
    };

    setupWagmi();
  }, [state.moon]);
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session: Session | null) => {
      switch (_event) {
        case 'INITIAL_SESSION':
        case 'SIGNED_IN':
        case 'TOKEN_REFRESHED':
          console.log('localStorage::SIGNED_IN', session);
          dispatch({ type: 'SET_SESSION', session });
          if (session?.user.id) {
            const storedWallet = localStorage.getItem(
              `moon_wallet_${session.user.id}`
            );
            const storedChain = localStorage.getItem(
              `moon_chain_${session.user.id}`
            );
            console.log('localStorage::storedWallet', storedWallet);
            console.log('localStorage::storedChain', storedChain);
            state.fetchAliases();
            state.listWallets();

            dispatch({
              type: 'LOAD_FROM_STORAGE',
              wallet: storedWallet || undefined,
              chain: storedChain ? JSON.parse(storedChain) : undefined,
            });
          }
          break;

        case 'SIGNED_OUT':
          console.log('SIGNED_OUT');
          dispatch({ type: 'SET_SESSION', session: null });
          dispatch({ type: 'SET_WALLETS', wallets: [] });
          if (state.session?.user.id) {
            console.log('localStorage::clear wallet/chain');

            localStorage.removeItem(`moon_wallet_${state.session.user.id}`);
            localStorage.removeItem(`moon_chain_${state.session.user.id}`);
          }
          break;
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const queryClient = useQueryClient(new QueryClient());

  // ... (keep the rest of the component logic)

  return (
    <ThemeProvider
      theme={{
        accentColor: '#5B22FF',
        successColor: '#0ed145',
        errorColor: '#ff1744',
        infoColor: '#39a9db',
        warningColor: '#ff9100',
        backgroundColor: '#000000',
        backgroundColorSecondary: '#131313',
        textColor: '#ffffff',
        textColorSecondary: '#ffffff59',
        buttonColor: '#0066ff',
        buttonColorSecondary: '#0ed145',
        fontFamily: 'Inter, sans-serif',
        borderRadius: '12px',
        boxShadow:
          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      }}
    >
      <MoonSDKContext.Provider value={state}>
        {state.wagmiConfig ? (
          <WagmiProvider config={state.wagmiConfig}>
            <QueryClientProvider client={queryClient}>
              <AuthModal config={authConfig}>{children}</AuthModal>
            </QueryClientProvider>
          </WagmiProvider>
        ) : (
          <div>Loading...</div>
        )}
      </MoonSDKContext.Provider>
    </ThemeProvider>
  );
};
