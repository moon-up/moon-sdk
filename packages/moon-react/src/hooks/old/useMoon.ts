import { MoonSDK } from '@moonup/moon-sdk';
import { useEffect, useState } from 'react';

export const useMoon = () => {
  const [moon, setMoon] = useState<MoonSDK | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const sdk = new MoonSDK();
    setMoon(sdk);
    setIsAuthenticated(sdk.auth.isAuthenticated);
  }, []);

  return { moon, isAuthenticated };
};
