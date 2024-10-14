// MockMoonProvider.tsx
import React from 'react';
import { vi } from 'vitest';
import { MoonSDKContext } from '../src/context';

// Mock functions
const mockFn = () => vi.fn();

const mockMoonSDK = {
  connect: mockFn(),
  disconnect: mockFn(),
  createAccount: mockFn(),
  listAccounts: mockFn(),
  getChains: mockFn(),
  getProviderService: mockFn().mockReturnValue({
    initializeMIPD: mockFn(),
    createWagmiConfig: mockFn(),
  }),
};

export const MockMoonProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <MoonSDKContext.Provider
      value={{
        moon: mockFn(),
        session: {
          access_token: 'mock-access-token',
          refresh_token: '<PASSWORD>-refresh-token',
          expires_in: 3600,
          token_type: 'Bearer',
          user: {
            id: 'mock-user-id',
            app_metadata: {},
            user_metadata: {},
            aud: '',
            created_at: '',
          },
        },
        dbAdapter: mockFn(),
        authConfig: {
          enabled: false,
          socialLogins: [],
          walletConnectEnabled: false,
          anonymousLoginEnabled: false,
          appearance: {
            logo: undefined,
            welcomeMessage: undefined,
            signupMessage: undefined,
            modal: {
              backdropColor: undefined,
              backgroundColor: undefined,
              borderRadius: undefined,
              padding: undefined,
              width: undefined,
              className: undefined,
            },
            input: {
              borderRadius: undefined,
              placeholders: {
                email: '',
                password: '',
              },
              className: undefined,
            },
            button: {
              borderRadius: undefined,
              padding: undefined,
              height: undefined,
              className: undefined,
            },
            splashImage: undefined,
            font: undefined,
          },
          theming: {
            accentColor: '',
            successColor: '',
            errorColor: '',
            infoColor: '',
            warningColor: '',
            backgroundColor: '',
            backgroundColorSecondary: '',
            textColor: '',
            textColorSecondary: '',
            buttonColor: '',
            buttonColorSecondary: '',
          },
        },
        loading: false,
        supabase: mockFn(),
        chatOpen: false,
        wallets: [],
        aliases: [],
        chains: [],
        chain: null,
        wallet: '',
        transactionHistory: [],
        wagmiConfig: null,

        connect: mockFn(),
        disconnect: mockFn(),
        getUserSession: mockFn(),
        connectEthers: mockFn(),
        disconnectEthers: mockFn(),
        request: mockFn(),
        signOut: mockFn(),
        createWallet: mockFn(),
        listWallets: mockFn(),
        fetchAliases: mockFn(),
        setWallet: mockFn(),
        listChains: mockFn(),
        setChain: mockFn(),
        setChatOpen: mockFn(),
        addTransactionResult: mockFn(),
      }}
    >
      {children}
    </MoonSDKContext.Provider>
  );
};

// Update the mock in the existing file
const MockMoonSDKProvider = ({ children }: { children: React.ReactNode }) => (
  <MockMoonProvider>{children}</MockMoonProvider>
);

export { MockMoonSDKProvider };
