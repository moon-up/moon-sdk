import { MoonProvider } from '@moonup/ethers';
import { useMoonSDK } from '../context';

const createMoonProviderHook = <T extends keyof MoonProvider>(method: T) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any[]) => {
    const { ethers } = useMoonSDK();
    // null check
    if (ethers === null || ethers === undefined) {
      return null;
    }
    if (typeof ethers[method] === 'function') {
      // Use type assertion to specify the type of moonProvider[method]
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (ethers[method] as (...args: any[]) => any)(...args);
    }
    return null;
  };
};

export const useMoonProviderConnect = () => {
  const { connectEthers } = useMoonSDK();
  return connectEthers;
};

export const useMoonProviderDisconnect = () => {
  const { disconnect } = useMoonSDK();
  return disconnect;
};

export const useMoonProviderRequest = createMoonProviderHook('request');
export const useMoonProviderGetChainId = createMoonProviderHook('getChainId');
export const useMoonProviderGetSigner = createMoonProviderHook('getSigner');
export const useMoonProviderGetNetwork = createMoonProviderHook('getNetwork');
export const useMoonProviderGetBlockNumber =
  createMoonProviderHook('getBlockNumber');
export const useMoonProviderGetGasPrice = createMoonProviderHook('getGasPrice');
export const useMoonProviderGetBalance = createMoonProviderHook('getBalance');
export const useMoonProviderGetTransactionCount = createMoonProviderHook(
  'getTransactionCount'
);
export const useMoonProviderGetCode = createMoonProviderHook('getCode');
export const useMoonProviderGetStorageAt =
  createMoonProviderHook('getStorageAt');
export const useMoonProviderSendTransaction =
  createMoonProviderHook('sendTransaction');
export const useMoonProviderCall = createMoonProviderHook('call');
export const useMoonProviderEstimateGas = createMoonProviderHook('estimateGas');
export const useMoonProviderGetBlock = createMoonProviderHook('getBlock');
export const useMoonProviderGetBlockWithTransactions = createMoonProviderHook(
  'getBlockWithTransactions'
);
export const useMoonProviderGetTransaction =
  createMoonProviderHook('getTransaction');
export const useMoonProviderGetTransactionReceipt = createMoonProviderHook(
  'getTransactionReceipt'
);
export const useMoonProviderGetLogs = createMoonProviderHook('getLogs');
export const useMoonProviderResolveName = createMoonProviderHook('resolveName');
export const useMoonProviderLookupAddress =
  createMoonProviderHook('lookupAddress');
