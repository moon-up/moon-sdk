import { useMoonSDK } from '@moonup/moon-react';
import {
  createAuthenticationAdapter,
  RainbowKitAuthenticationProvider,
} from '@rainbow-me/rainbowkit';
import React, { useState } from 'react';
import { SiweMessage } from 'siwe';
import { useAccount } from 'wagmi';
export function RainbowMoonProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { moon } = useMoonSDK();
  const [nonce, setNonce] = useState('');
  const { address } = useAccount();
  const [isLoading, setIsLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const adapter = createAuthenticationAdapter({
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
      await moon?.setAccessToken(
        response.data.access_token,
        response.data.refresh_token
      );

      setIsLoading(false);
      setAuthenticated(true);
      return true;
    },

    signOut: async () => {
      moon?.disconnect();
      setIsLoading(false);
      setAuthenticated(false);
    },
  });
  const status = isLoading
    ? 'loading'
    : authenticated
    ? 'authenticated'
    : 'unauthenticated';

  return (
    <RainbowKitAuthenticationProvider adapter={adapter} status={status}>
      {children}
    </RainbowKitAuthenticationProvider>
  );
}
