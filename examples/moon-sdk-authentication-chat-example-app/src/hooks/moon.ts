import { MoonSDK } from '@moonup/moon-sdk';
import { useEffect, useState } from 'react';

interface MoonSDKHook {
  moon: MoonSDK | null;
  initialize: () => Promise<void>;
  disconnect: () => Promise<void>;
  // Add other methods as needed
}

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
  const listAccounts = async () => {
    if (moon) {
      return moon.listAccounts();
    }
  };

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
