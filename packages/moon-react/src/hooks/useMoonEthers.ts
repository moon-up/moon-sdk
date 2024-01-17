import { MoonProvider, MoonProviderOptions } from '@moonup/ethers';
import { MoonSDK } from '@moonup/moon-sdk';
import { AUTH, MOON_SESSION_KEY, Storage } from '@moonup/moon-types';
import { useEffect, useState } from 'react';

export interface MoonEthersHook {
  moonProvider: MoonProvider | null;
  moon: MoonSDK | null;
  initialize: () => Promise<void>;
  disconnect: () => Promise<void>;
}

export function useMoonEthers(): MoonEthersHook {
  const [moonProvider, setMoonProvider] = useState<MoonProvider | null>(null);
  const [moon, setMoon] = useState<MoonSDK | null>(null);
  const initializeMoonSDK = async () => {
    const moonInstance = new MoonSDK({
      Storage: {
        key: MOON_SESSION_KEY,
        type: Storage.SESSION,
      },
      Auth: {
        AuthType: AUTH.JWT,
      },
    });
    setMoon(moonInstance);
    moonInstance.connect();
  };

  const initialize = async () => {
    const options: MoonProviderOptions = {
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
    };

    const moonInstance = new MoonProvider(options);
    setMoonProvider(moonInstance);
  };

  const disconnect = async () => {
    if (moonProvider) {
      await moonProvider.disconnect();
      setMoonProvider(null);
    }
    if (moon) {
      await moon.disconnect();
      setMoon(null);
    }
  };

  useEffect(() => {
    initialize();
    initializeMoonSDK();
  }, []);

  return {
    moonProvider,
    moon,
    initialize,
    disconnect,
    // Add other methods as needed
  };
}
