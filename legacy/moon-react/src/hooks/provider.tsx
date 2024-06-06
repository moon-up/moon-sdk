import { MoonSDK } from '@moonup/moon-sdk';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { MoonSDKHook } from './types';

const MoonSDKContext = createContext<MoonSDKHook | undefined>(undefined);

export const MoonSDKProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
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

  useEffect(() => {
    initialize();
  }, []);

  return (
    <MoonSDKContext.Provider value={{ moon, initialize, disconnect }}>
      {children}
    </MoonSDKContext.Provider>
  );
};

export const useMoonSDK = (): MoonSDKHook => {
  const context = useContext(MoonSDKContext);
  if (context === undefined) {
    throw new Error('useMoonSDK must be used within a MoonSDKProvider');
  }
  return context;
};
