// import {
//   MOON_SUPPORTED_NETWORKS,
//   MoonStorage,
//   Storage,
// } from '@moonup/moon-types';
// import {
//   RainbowKitAuthenticationProvider,
//   createAuthenticationAdapter,
// } from '@rainbow-me/rainbowkit';
// import { useOptions, useSession } from '@randombits/use-siwe';
// import React, { ReactNode } from 'react';
// import { SiweMessage } from 'siwe';

// type RainbowKitUseSiweProviderProps = {
//   children?: ReactNode;
//   onSignIn?: () => void;
//   onSignOut?: () => void;
// };

// export const RainbowKitUseSiweProvider = ({
//   children,
//   onSignIn,
//   onSignOut,
// }: RainbowKitUseSiweProviderProps) => {
//   const { authenticated, isLoading, address } = useSession();
//   const options = useOptions();

//   const adapter = createAuthenticationAdapter({
//     getNonce: async (): Promise<string> => {
//       const response = await fetch(
//         'https://vault-api.usemoon.ai/auth/ethereum/challenge',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//           },
//           body: JSON.stringify({
//             address: address,
//           }),
//         }
//       ).then(function (response) {
//         return response.json();
//       });
//       return response.nonce;
//     },

//     createMessage: ({ nonce, address, chainId }) => {
//       return new SiweMessage({
//         domain: window.location.host,
//         address,
//         statement: 'Sign in with Ethereum to the app.',
//         uri: window.location.origin,
//         version: '1',
//         chainId,
//         nonce,
//       });
//     },

//     getMessageBody: ({ message }): string => {
//       return message.prepareMessage();
//     },

//     verify: async ({ message, signature }) => {
//       const verifyRes = await fetch(
//         'https://vault-api.usemoon.ai/auth/ethereum',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//           },
//           body: JSON.stringify({
//             message: message,
//             signature: signature,
//             address,
//           }),
//         }
//       ).then(function (response) {
//         return response.json();
//       });

//       const storage = new MoonStorage(Storage.SESSION, 'MOON_SESSION_KEY');
//       storage.setItem({
//         email: address || '',
//         token: verifyRes.accessToken || '',
//         refreshToken: verifyRes.refreshToken || '',
//         expiry: verifyRes.expiry || new Date().toString(),
//         wallet: '',
//         network: MOON_SUPPORTED_NETWORKS[0],
//       });
//       onSignIn && onSignIn();
//       return true;
//     },

//     signOut: async () => {
//       const storage = new MoonStorage(Storage.SESSION, 'MOON_SESSION_KEY');
//       storage.setItem({
//         token: '',
//         refreshToken: '',
//         email: '',
//         expiry: 0,
//         wallet: '',
//         network: MOON_SUPPORTED_NETWORKS[0],
//       });
//       onSignOut && onSignOut();
//     },
//   });

//   const status = isLoading
//     ? 'loading'
//     : authenticated
//     ? 'authenticated'
//     : 'unauthenticated';

//   return (
//     <RainbowKitAuthenticationProvider adapter={adapter} status={status}>
//       {children}
//     </RainbowKitAuthenticationProvider>
//   );
// };

// export default RainbowKitUseSiweProvider;
