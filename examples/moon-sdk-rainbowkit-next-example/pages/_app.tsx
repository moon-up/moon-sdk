'use client';
import '@rainbow-me/rainbowkit/styles.css';
import '../styles/globals.css';

// import { RainbowMoonProvider } from '@moonup/moon-rainbowkit';
import { MoonSDK } from '@moonup/moon-sdk';
import {
  createAuthenticationAdapter,
  getDefaultConfig,
  RainbowKitAuthenticationProvider,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import React, { useMemo, useState } from 'react';
import { SiweMessage } from 'siwe';
import { Hex } from 'viem';
import { useAccount, WagmiProvider } from 'wagmi';
import { arbitrum, base, mainnet, optimism, polygon, zora } from 'wagmi/chains';
import { useMoonSDK } from '../../../packages/moon-react/src/hooks/useMoon';
export function RainbowMoonProvider({
  children,
  address,
  moon,
}: {
  children: React.ReactNode;
  address: Hex | undefined;
  moon: MoonSDK | null;
}) {
  const [nonce, setNonce] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const adapter = useMemo(
    () =>
      createAuthenticationAdapter({
        getNonce: async (): Promise<string> => {
          // 1. Get a nonce from the server
          const nonceResponse = await fetch(
            `https://moon-wallet-supabase-next-app.vercel.app/api/ethereum/nonce`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                address: address,
              }),
            }
          );

          const {
            user: [user],
          } = await nonceResponse.json();
          setNonce(user.auth.genNonce as string);
          return user.auth.genNonce as string;
        },

        createMessage: ({ nonce, address, chainId }) => {
          return new SiweMessage({
            domain: window.location.host,
            address,
            statement: 'Sign in with Ethereum to the app.',
            uri: window.location.origin,
            version: '1',
            chainId,
            nonce,
          });
        },

        getMessageBody: ({ message }): string => {
          return message.prepareMessage();
        },

        verify: async ({ message, signature }) => {
          setIsLoading(true);
          // // 3. Send the signed message to our API
          const response = await fetch(
            `https://moon-wallet-supabase-next-app.vercel.app/api/ethereum/login`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                address: address,
                signedMessage: signature,
                nonce: nonce,
                message: message.prepareMessage(),
              }),
            }
          ).then((res) => res.json());
          console.log(response);
          if (!response.token.access_token || !response.token.refresh_token) {
            // check if the response returned a valid access token and refresh token
            console.error('Invalid response');
            setAuthenticated(false);
            return false;
          }
          await moon?.setAccessToken(response.data.access_token, response.data.refresh_token);

          setIsLoading(false);
          setAuthenticated(true);
          return true;
        },

        signOut: async () => {
          moon?.disconnect();
          setIsLoading(false);
          setAuthenticated(false);
        },
      }),
    []
  );
  const status = useMemo(
    () => (isLoading ? 'loading' : authenticated ? 'authenticated' : 'unauthenticated'),
    [isLoading, authenticated]
  );

  return (
    <RainbowKitAuthenticationProvider adapter={adapter} status={status}>
      {children}
    </RainbowKitAuthenticationProvider>
  );
}

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, polygon, optimism, arbitrum, base, zora],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const { address } = useAccount();
const { moon } = useMoonSDK();
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowMoonProvider address={address} moon={moon}>
          <RainbowKitProvider>
            <Component {...pageProps} />
          </RainbowKitProvider>
        </RainbowMoonProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
