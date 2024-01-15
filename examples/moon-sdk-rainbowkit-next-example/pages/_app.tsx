import { rainbowkitUseMoonConnector } from '@moonup/moon-rainbowkit';
import { AUTH, MOON_SESSION_KEY, Storage } from '@moonup/moon-types';
import {
  RainbowKitProvider,
  connectorsForWallets,
  getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { arbitrum, base, goerli, mainnet, optimism, polygon, zora } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import '../styles/globals.css';
import { writeContract } from 'viem/_types/actions/wallet/writeContract';

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [wagmiConfig, setWagmiConfig] = useState<any | null>(null);
  const [chains, setChains] = useState<any | null>(null);

  useEffect(() => {
    setIsMounted(true);
    const { chains, publicClient, webSocketPublicClient } = configureChains(
      [
        mainnet,
        polygon,
        optimism,
        arbitrum,
        base,
        zora,
        ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
      ],
      [publicProvider()]
    );
    setChains(chains);

    const { wallets } = getDefaultWallets({
      appName: 'RainbowKit App',
      projectId: 'YOUR_PROJECT_ID',
      chains,
    });

    const connectors = connectorsForWallets([
      ...wallets,
      {
        groupName: 'Other',
        wallets: [
          rainbowkitUseMoonConnector({
            chains: chains,
            options: {
              chainId: 1,
              MoonSDKConfig: {
                Storage: {
                  key: MOON_SESSION_KEY,
                  type: Storage.SESSION,
                },
                Auth: {
                  AuthType: AUTH.JWT,
                },
              },
            },
          }),
        ],
      },
    ]);

    setWagmiConfig(
      createConfig({
        autoConnect: true,
        connectors,
        publicClient,
        webSocketPublicClient,
      })
    );
    // setWagmiConfig(wagmiConfig);
  }, []);

  if (!isMounted) {
    return null; // or return a placeholder if you want to show something during loading
  }

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
