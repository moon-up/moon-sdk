'use client';
import '@rainbow-me/rainbowkit/styles.css';
import '../styles/globals.css';

import { MoonProvider } from '@moonup/ethers';
import { MoonSDK } from '@moonup/moon-sdk';
import { createMoonAccount } from '@moonup/viem';
import {
  connectorsForWallets,
  getDefaultConfig,
  RainbowKitProvider,
  Wallet,
  WalletDetailsParams,
} from '@rainbow-me/rainbowkit';
import { rainbowWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { Chain, Client, createClient, custom, type ProviderConnectInfo } from 'viem';
import { Address } from 'viem/accounts';
import { cookieStorage, createConnector, WagmiProvider, type CreateConnectorFn } from 'wagmi';
import { arbitrum, base, mainnet, optimism, polygon } from 'wagmi/chains';

// const moonConnector = createMoonConnector({
//   SDK: new MoonSDK(),
//   address: '0x5c8f56243679016d9f9721cc11b1de3998084888',
//   chains: [mainnet, polygon, optimism, arbitrum, base],
//   chainId: 1,
// // });
// export type IntmaxWalletSDKOptions = {
//   wallet: { name?: string; url: string; iconUrl?: string };
//   mode?: 'iframe' | 'popup';
//   defaultChainId?: number;
// };

// export const moonWalletConnector = (options: IntmaxWalletSDKOptions) => (): Wallet => ({
//   id: `moon:${options.wallet.url}:${options.mode}`,
//   name: options.wallet.name || 'Moon',
//   iconUrl: options.wallet.iconUrl ?? '',
//   iconBackground: '#fff',
//   rdns: 'moon',
//   shortName: 'Moon',
//   installed: true,
//   hidden() {
//     return false;
//   },
//   downloadUrls: {
//     desktop: options.wallet.url,
//     mobile: options.wallet.url,
//     qrCode: options.wallet.url,
//     macos: options.wallet.url,
//     ios: options.wallet.url,
//     android: options.wallet.url,
//     windows: options.wallet.url,
//     linux: options.wallet.url,
//     browserExtension: options.wallet.url,
//   },
//   createConnector: () => {
//     //
//   },
// });
// const moonWallet = moonWalletConnector({
//   wallet: {
//     url: 'http://localhost:3001',
//     iconUrl: 'https://svgshare.com/i/iJK.svg',
//   },
//   mode: 'iframe',
// });

// const iframeRef = useRef<HTMLIFrameElement>(null);
export interface MyWalletOptions {
  chains: Chain[];
  shimDisconnect?: boolean | undefined;
}

export interface MoonConnectorOptions {
  chains?: Chain[];
  SDK: MoonSDK;
  address: string;
  chainId: number;
}

export function createMoonConnector(options: MoonConnectorOptions): CreateConnectorFn {
  const { SDK, address, chainId } = options;
  // validate sdk and address and chainId
  // check if sdk is instance of MoonSDK
  if (!(SDK instanceof MoonSDK)) {
    throw new Error('SDK must be an instance of MoonSDK');
  }

  // check if address is a string
  if (typeof address !== 'string') {
    throw new Error('address must be a string');
  }

  // check if address is empty
  // check if address is a valid ethereum address

  // check if chainId is a number
  if (typeof chainId !== 'number') {
    throw new Error('chainId must be a number');
  }
  const provider = new MoonProvider({ SDK, address, chainId });

  return createConnector((config) => ({
    id: 'moon',
    name: 'Moon',
    type: 'wallet',
    connect: async (param: {
      chainId?: number;
      isReconnecting?: boolean;
    }): Promise<{
      accounts: readonly Address[];
      chainId: number;
    }> => {
      const sb = cookieStorage.getItem('sb-api-auth-token');
      console.log(sb);
      // const data = JSON.parse(decodeURIComponent(sb || ''));
      const sb1 = decodeURIComponent(sb || '{}');
      const data = JSON.parse(sb1);

      // console.log(data);
      // console.log(JSON.parse(data));
      // sdk.setAccessToken(data[0], data[1]);
      // await SDK.http.set
      SDK.getAccountsSDK().http.setSecurityData({ token: data[0] });
      // // sdk.setAccessToken(cookieStorage.getItem('accessToken') || '');
      // const chainId = param?.chainId || options.chainId;
      const accounts = (await SDK.listAccounts()) as readonly `0x${string}}`[];
      // change to first account
      // return { accounts: accounts, chainId };
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      });
      await provider.request({
        method: 'wallet_changeAccount',
        params: [{ account: accounts[0] }],
      });

      // const accounts = await provider?.request({
      //   method: 'eth_accounts',
      // });

      // const normalizedChainId = this.normalizeChainId(chainId);

      config.emitter.emit('change', { chainId: chainId, accounts });
      // await config.storage?.setItem('tweedSDK.connected', true);

      return { chainId: chainId, accounts: [accounts[0]] };
    },

    disconnect: async (): Promise<void> => {
      await SDK.disconnect();
    },
    getAccounts: async (): Promise<readonly Address[]> => {
      return (await SDK.listAccounts()) as readonly Address[];
    },
    getChainId: async () => {
      return provider.getChainId();
    },
    getProvider: async () => {
      return new MoonProvider({ SDK, address, chainId });
    },
    getClient: async (parameters: { chainId?: number }): Promise<Client> => {
      // create moon client
      const account = await createMoonAccount({
        sdk: SDK,
        ethereumAddress: address,
      });

      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      });

      return createClient({
        account: account,
        chain: options.chains?.find((x) => x.id === parameters.chainId),
        transport: custom(provider),
      });
    },
    isAuthorized: async () => {
      return SDK.isAuthenticated;
    },
    setup: async (): Promise<void> => {
      return await SDK.connect();
      // const kek = await fetch('https://beta.usemoon.ai/accounts', {
      //   headers: { Authorization: `Bearer ${data[0]}` },
      // }).then((res) => res.json());
      // console.log(kek);
      // // const accounts = (await SDK.listAccounts()) as readonly Address[];
      // return;
    },
    switchChain: async (parameters: { chainId: number }): Promise<Chain> => {
      const chain = options.chains?.find((x) => x.id === parameters.chainId);
      if (!chain) {
        throw new Error('chain not found');
      }
      const provider = new MoonProvider({ SDK, address, chainId });
      await provider?.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      });
      config.emitter.emit('change', {
        chainId: parameters.chainId,
      });
      return { id: chainId } as Chain;
    },

    onAccountsChanged: (accounts: string[]): void => {
      config.emitter.emit('change', {
        accounts: accounts as readonly Address[],
      });
    },
    onChainChanged: (chainId: string): void => {
      config.emitter.emit('change', { chainId: parseInt(chainId, 16) });
    },

    onConnect: async (connectInfo: ProviderConnectInfo): Promise<void> => {
      // fetch accounts
      const accounts = (await SDK.listAccounts()) as readonly Address[];
      config.emitter.emit('connect', {
        accounts: accounts,
        chainId: Number(connectInfo.chainId),
      });
    },

    onDisconnect: (error?: Error): void => {
      config.emitter.emit('disconnect');
      console.error(error);
    },
    onMessage: (message: { type: string; data?: unknown }): void => {
      config.emitter.emit('message', message);
    },
  }));
}

const queryClient = new QueryClient();
const iframeWallet = (): Wallet => {
  const getUri = (uri: string) => uri;
  return {
    id: 'moon',
    name: 'Moon',
    qrCode: { getUri },
    iconUrl: async () => (await import('./iJK.svg')).default,
    iconBackground: '#fff',
    installed: undefined,
    createConnector: (walletDetails: WalletDetailsParams) => {
      return createMoonConnector({
        SDK: new MoonSDK(),
        address: '0x5c8f56243679016d9f9721cc11b1de3998084888',
        chains: [mainnet, polygon, optimism, arbitrum, base], // [options.chainId
        chainId: 1,
      });
    },
  };
};

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [rainbowWallet, walletConnectWallet, iframeWallet],
    },
  ],
  {
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
  }
);

const kek = getDefaultConfig({
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: false,
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  wallets: [
    {
      groupName: 'Recommended',
      wallets: [iframeWallet, rainbowWallet, walletConnectWallet],
    },
  ],
});

export function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={kek}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <iframe id="iframe" src="http://localhost:3001" style={{ display: 'none' }}></iframe>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
