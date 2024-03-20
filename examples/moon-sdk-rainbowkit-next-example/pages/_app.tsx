import { RainbowKitUseMoonProvider } from '@moonup/moon-rainbowkit';
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

    const connectors = connectorsForWallets(wallets);

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
  const onSignIn = () => {
    console.log('onSignIn');
  };

  const onSignOut = () => {
    console.log('onSignOut');
  };

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitUseMoonProvider onSignIn={onSignIn} onSignOut={onSignOut}>
        <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </RainbowKitUseMoonProvider>
    </WagmiConfig>
  );
}

export default MyApp;
