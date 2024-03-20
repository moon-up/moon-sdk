import { MoonSDK } from '@moonup/moon-sdk';
import { createAuthenticationAdapter } from '@rainbow-me/rainbowkit';
import { SiweMessage } from 'siwe';

export type CreateMoonRainbowkitAdapterProps = {
  address: string;
  moon: MoonSDK;
  onSignIn?: () => void;
  onSignOut?: () => void;
};

export const createMoonRainbowKitAdapter = ({
  address,
  moon,
  onSignIn,
  onSignOut,
}: CreateMoonRainbowkitAdapterProps) => {
  let nonce = '';
  return createAuthenticationAdapter({
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
      nonce = user.auth.genNonce as string;
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

      if (response.ok) {
        // check if the response returned a valid access token and refresh token
        if (!response.data.access_token || !response.data.refresh_token) {
          console.error('No access token or refresh token');
          return false;
        }

        moon?.setAccessToken(
          response.data.access_token,
          response.data.refresh_token
        );
        console.log('Verification successful!');
      } else {
        // The verification failed
        console.error('Verification failed!');
      }

      onSignIn && onSignIn();
      return true;
    },

    signOut: async () => {
      moon?.disconnect();
      onSignOut && onSignOut();
    },
  });
};
