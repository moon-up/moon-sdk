// import { MoonProvider, MoonProviderOptions } from '@moonup/ethers';
// import { MoonSDK } from '@moonup/moon-sdk';
// import { useEffect, useState } from 'react';
// import { MoonEthersHook } from './types';

// export function useMoonEthers(): MoonEthersHook {
//   const [moonProvider, setMoonProvider] = useState<MoonProvider | null>(null);
//   const [moon, setMoon] = useState<MoonSDK | null>(null);
//   const initialize = async () => {
//     const moonInstance = new MoonSDK();
//     setMoon(moonInstance);
//     moonInstance.connect();
//     const options: MoonProviderOptions = {
//       chainId: 1,
//       address: '0x',
//       SDK: moonInstance,
//     };
//     const moonProviderInstance = new MoonProvider(options);
//     setMoonProvider(moonProviderInstance);
//   };

//   const disconnect = async () => {
//     if (moonProvider) {
//       await moonProvider.disconnect();
//       setMoonProvider(null);
//     }
//     if (moon) {
//       await moon.disconnect();
//       setMoon(null);
//     }
//   };

//   useEffect(() => {
//     initialize();
//   }, []);

//   return {
//     moonProvider,
//     moon,
//     initialize,
//     disconnect,
//     // Add other methods as needed
//   };
// }
