import { MoonSDK } from '@moonup/moon-sdk';
import { useMoonSDK } from '../context';

// import { useMoon } from '../contexts';

const createMoonHook = <T extends keyof MoonSDK>(method: T) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any[]) => {
    const { moon } = useMoonSDK();
    // null check
    if (moon === null) {
      return null;
    }
    if (typeof moon[method] === 'function') {
      // Use type assertion to specify the type of moon[method]
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (moon[method] as (...args: any[]) => any)(...args);
    }
    return null;
  };
};

export const useMoonConnect = () => {
  const { connect } = useMoonSDK();
  return connect;
};

export const useMoonDisconnect = () => {
  const { disconnect } = useMoonSDK();
  return disconnect;
};

export const useUserSession = () => {
  const { getUserSession } = useMoonSDK();
  return getUserSession;
};

export const useSolanaSDK = createMoonHook('getSolanaSDK');
export const useBitcoinSDK = createMoonHook('getBitcoinSDK');
export const useCosmosSDK = createMoonHook('getCosmosSDK');
export const useEosSDK = createMoonHook('getEosSDK');
export const useLitecoinSDK = createMoonHook('getLitecoinSDK');
export const useRippleSDK = createMoonHook('getRippleSDK');
export const useTronSDK = createMoonHook('getTronSDK');
export const useBitcoincashSDK = createMoonHook('getBitcoincashSDK');
export const useDogecoinSDK = createMoonHook('getDogecoinSDK');
export const useAccountsSDK = createMoonHook('getAccountsSDK');
export const useENSSDK = createMoonHook('getENSSDK');
export const useErc20SDK = createMoonHook('getErc20SDK');
export const useErc1155SDK = createMoonHook('getErc1155SDK');
export const useErc721SDK = createMoonHook('getErc721SDK');
export const useErc4626SDK = createMoonHook('getErc4626SDK');
export const useLendingPoolSDK = createMoonHook('getLendingPoolSDK');
export const useLeveragerSDK = createMoonHook('getLeveragerSDK');
export const useLifiSDK = createMoonHook('getLifiSDK');
export const useOdosSDK = createMoonHook('getOdosSDK');
export const useOnramperSDK = createMoonHook('getOnramperSDK');
export const useThorswapSDK = createMoonHook('getThorswapSDK');
