import { MoonSDK } from '@moonup/moon-sdk';
import { useEffect, useState } from 'react';

import { MoonSDKHook } from './types';

export function useMoonSDK(): MoonSDKHook {
  const [moon, setMoon] = useState<MoonSDK | null>(null);

  const initialize = async () => {
    const moonInstance = new MoonSDK();
    setMoon(moonInstance);
  };

  const disconnect = async () => {
    if (moon) {
      await moon.disconnect();
      setMoon(null);
    }
  };

  // const signTransaction = async (transaction: TransactionResponse) => {
  // 	if (moon) {
  // 		return moon.SignTransaction(transaction);
  // 	}
  // 	throw new Error('Moon SDK is not initialized');
  // };

  // Add other methods as needed

  useEffect(() => {
    initialize();
  }, []);

  return {
    moon,
    initialize,
    disconnect,
    // Add other methods as needed
  };
}
