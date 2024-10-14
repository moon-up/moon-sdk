import { useMoonSDK, useMoonTransaction } from '@/hooks';
import {
  GetIndexedRouteMapData,
  GetIndexedRouteMapParams,
  GetProgramIdToLabelData,
  GetQuoteData,
  GetSwapInstructionsData,
  GetTokensData,
  Jupiter,
  OmitJupiterInputBodyAccountName,
  SwapData,
} from '@moonup/moon-api';
import { useCallback } from 'react';

/**
 * Custom hook to interact with the Jupiter SDK within the Moon SDK context.
 *
 * @returns {Object} An object containing methods to interact with the Jupiter SDK:
 * - `getIndexedRouteMap`: Fetches the indexed route map based on the provided query parameters.
 * - `getProgramIdToLabel`: Retrieves a mapping of program IDs to their respective labels.
 * - `getQuote`: Obtains a quote for a given account and data payload.
 * - `getSwapInstructions`: Fetches swap instructions for a given account and data payload.
 * - `getTokens`: Retrieves a list of tokens available in the Jupiter SDK.
 * - `swap`: Executes a swap operation for a given account and data payload.
 */
export const useJupiter = () => {
  const context = useMoonSDK();
  const { handleTransaction } = useMoonTransaction();
  const { moon } = context;

  const getJupiterSDK = useCallback((): Jupiter => {
    const jupiterSDK = moon?.getJupiterSDK();
    if (!jupiterSDK) throw new Error('Moon jupiterSDK not initialized');
    return jupiterSDK;
  }, [moon]);

  const getIndexedRouteMap = useCallback(
    async (
      query: GetIndexedRouteMapParams
    ): Promise<GetIndexedRouteMapData> => {
      return handleTransaction('getIndexedRouteMap', async () => {
        const jupiterSDK = getJupiterSDK();
        const response = await jupiterSDK.getIndexedRouteMap(query);
        return response.data;
      });
    },
    [moon]
  );

  const getProgramIdToLabel =
    useCallback(async (): Promise<GetProgramIdToLabelData> => {
      return handleTransaction('getProgramIdToLabel', async () => {
        const jupiterSDK = getJupiterSDK();
        const response = await jupiterSDK.getProgramIdToLabel();
        return response.data;
      });
    }, [moon]);

  const getQuote = useCallback(
    async (payload: {
      accountName: string;
      data: OmitJupiterInputBodyAccountName;
    }): Promise<GetQuoteData> => {
      return handleTransaction('getQuote', async () => {
        const jupiterSDK = getJupiterSDK();
        const response = await jupiterSDK.getQuote(
          payload.accountName,
          payload.data
        );
        return response.data;
      });
    },
    [moon]
  );

  const getSwapInstructions = useCallback(
    async (payload: {
      accountName: string;
      data: OmitJupiterInputBodyAccountName;
    }): Promise<GetSwapInstructionsData> => {
      return handleTransaction('getSwapInstructions', async () => {
        const jupiterSDK = getJupiterSDK();
        const response = await jupiterSDK.getSwapInstructions(
          payload.accountName,
          payload.data
        );
        return response.data;
      });
    },
    [moon]
  );

  const getTokens = useCallback(async (): Promise<GetTokensData> => {
    return handleTransaction('getTokens', async () => {
      const jupiterSDK = getJupiterSDK();
      const response = await jupiterSDK.getTokens();
      return response.data;
    });
  }, [moon]);

  const swap = useCallback(
    async (payload: {
      accountName: string;
      data: OmitJupiterInputBodyAccountName;
    }): Promise<SwapData> => {
      return handleTransaction('swap', async () => {
        const jupiterSDK = getJupiterSDK();
        const response = await jupiterSDK.swap(
          payload.accountName,
          payload.data
        );
        return response.data;
      });
    },
    [moon]
  );

  return {
    getIndexedRouteMap,
    getProgramIdToLabel,
    getQuote,
    getSwapInstructions,
    getTokens,
    swap,
  };
};
