import { useContext } from 'react';
import { MoonSDKContext, State } from '../context/Context';

export const useMoonSDK = (): State => {
  const context = useContext(MoonSDKContext);
  if (context === undefined) {
    throw new Error('useMoonSDK must be used within a MoonSDKProvider');
  }
  return context;
};
