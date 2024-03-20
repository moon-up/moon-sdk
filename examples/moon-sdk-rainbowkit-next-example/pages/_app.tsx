import '@rainbow-me/rainbowkit/styles.css';
import '../styles/globals.css';

import { RainbowKitUseMoonProvider } from '@moonup/moon-rainbowkit';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { WagmiProvider } from 'wagmi';
import { arbitrum, base, mainnet, optimism, polygon, zora } from 'wagmi/chains';

function MyApp({ Component, pageProps }: AppProps) {
  const config = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains: [mainnet, polygon, optimism, arbitrum, base, zora],
    ssr: true, // If your dApp uses server side rendering (SSR)
  });

  const queryClient = new QueryClient();

  const onSignIn = () => {
    console.log('onSignIn');
  };

  const onSignOut = () => {
    console.log('onSignOut');
  };

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitUseMoonProvider onSignIn={onSignIn} onSignOut={onSignOut}>
          <RainbowKitProvider>
            <Component {...pageProps} />
          </RainbowKitProvider>
        </RainbowKitUseMoonProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
