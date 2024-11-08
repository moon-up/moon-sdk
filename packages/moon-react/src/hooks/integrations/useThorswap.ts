import { useMoonSDK, useMoonTransaction } from '@/hooks';
import {
  GetGasPriceData,
  GetGasPriceParams,
  GetQuoteParams4,
  GetQuoteResult1,
  GetSupportedChainsParams1,
  GetSupportedChainsResult,
  GetSupportedProvidersData,
  GetSupportedProvidersParams,
  SwapInput,
  SwapOutput,
  Thorswap,
} from '@moonup/moon-api';
import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';

/**
 * Custom hook to interact with the Thorswap SDK.
 *
 * @returns {Object} An object containing various functions to interact with Thorswap:
 * - `getGasPrice`: Fetches the gas price for a given payload.
 * - `getQuote`: Fetches a quote for a given payload.
 * - `getSupportedChains`: Fetches supported chains for a given payload.
 * - `getSupportedProviders`: Fetches supported providers for a given payload.
 * - `swap`: Executes a swap transaction for a given payload.
 * - `getSupportedChainsQuery`: React Query hook to fetch supported chains for a given address and chain ID.
 * - `getSupportedProvidersQuery`: React Query hook to fetch supported providers for a given address and chain ID.
 */
export const useThorswap = () => {
  const context = useMoonSDK();
  const { handleTransaction } = useMoonTransaction();
  const { moon } = context;
  /**
   * Fetches the supported chains for a given address and chain ID using the Thorswap SDK.
   *
   * @param address - The address for which to fetch supported chains.
   * @param chainId - The chain ID for which to fetch supported chains.
   * @returns A query object that can be used to track the status and result of the fetch operation.
   */
  const getSupportedChainsQuery = (address: string, chainId: string) =>
    useQuery({
      queryKey: ['thorswapGetSupportedChains', address, chainId],
      queryFn: async ({ queryKey }) => {
        const [_key, address, chainId] = queryKey;
        const thorswapSDK = getThorswapSDK();
        const response = await thorswapSDK.getSupportedChains({
          address,
          chainId,
        });
        return response;
      },
    });

  /**
   * Fetches the supported providers for a given address and chain ID using the Thorswap SDK.
   *
   * @param address - The address for which to fetch supported providers.
   * @param chainId - The chain ID for which to fetch supported providers.
   * @returns A query object that can be used to access the supported providers data.
   *
   * @remarks
   * This hook uses the `useQuery` hook from React Query to fetch the data asynchronously.
   * The data is considered stale after 24 hours.
   *
   * @example
   * ```typescript
   * const { data, error, isLoading } = getSupportedProvidersQuery('0x123...', '1');
   * ```
   */
  const getSupportedProvidersQuery = (address: string, chainId: string) =>
    useQuery({
      queryKey: ['thorswapGetSupportedProviders', address, chainId],
      queryFn: async () => {
        const thorswapSDK = getThorswapSDK();
        const response = await thorswapSDK.getSupportedProviders({
          address,
          chainId,
        });
        return response as GetSupportedProvidersData;
      },
      staleTime: 1000 * 60 * 60 * 24,
    });

  /**
   * Retrieves the Thorswap SDK instance from the Moon object.
   *
   * @returns {Thorswap} The initialized Thorswap SDK instance.
   * @throws {Error} If the Thorswap SDK is not initialized.
   */
  const getThorswapSDK = (): Thorswap => {
    const thorswapSDK = moon?.getThorswapSDK();
    if (!thorswapSDK) throw new Error('Moon Thorswap SDK not initialized');
    return thorswapSDK;
  };

  /**
   * Fetches the gas price using the Thorswap SDK.
   *
   * @param payload - The parameters required to get the gas price.
   * @returns A promise that resolves to the gas price data.
   */
  const getGasPrice = useCallback(
    async (payload: GetGasPriceParams): Promise<GetGasPriceData> => {
      return handleTransaction('getGasPrice', async () => {
        const thorswapSDK = getThorswapSDK();
        const response = await thorswapSDK.getGasPrice(payload);
        return response.data;
      });
    },
    [moon]
  );

  /**
   * Retrieves a quote using the Thorswap SDK.
   *
   * @param payload - The parameters required to get a quote.
   * @returns A promise that resolves to the quote result.
   */
  const getQuote = useCallback(
    async (payload: GetQuoteParams4): Promise<GetQuoteResult1> => {
      return handleTransaction('getQuote', async () => {
        const thorswapSDK = getThorswapSDK();
        const response = await thorswapSDK.getQuote(payload);
        return response.data;
      });
    },
    [moon]
  );

  /**
   * Fetches the supported chains using the Thorswap SDK.
   *
   * @param payload - The parameters required to get the supported chains.
   * @returns A promise that resolves to the result of the supported chains.
   */
  const getSupportedChains = useCallback(
    async (
      payload: GetSupportedChainsParams1
    ): Promise<GetSupportedChainsResult> => {
      return handleTransaction('getSupportedChains', async () => {
        const thorswapSDK = getThorswapSDK();
        const response = await thorswapSDK.getSupportedChains(payload);
        return response.data;
      });
    },
    [moon]
  );

  /**
   * Fetches the supported providers using the Thorswap SDK.
   *
   * @param payload - The parameters required to get the supported providers.
   * @returns A promise that resolves to the data of supported providers.
   */
  const getSupportedProviders = useCallback(
    async (
      payload: GetSupportedProvidersParams
    ): Promise<GetSupportedProvidersData> => {
      return handleTransaction('getSupportedProviders', async () => {
        const thorswapSDK = getThorswapSDK();
        const response = await thorswapSDK.getSupportedProviders(payload);
        return response.data;
      });
    },
    [moon]
  );

  /**
   * Executes a swap transaction using the Thorswap SDK.
   *
   * @param payload - The input parameters required for the swap operation.
   * @returns A promise that resolves to the output of the swap operation.
   */
  const swap = useCallback(
    async (payload: SwapInput): Promise<SwapOutput> => {
      return handleTransaction('swap', async () => {
        const thorswapSDK = getThorswapSDK();
        const response = await thorswapSDK.swap(payload);
        return response.data;
      });
    },
    [moon]
  );

  return {
    getGasPrice,
    getQuote,
    getSupportedChains,
    getSupportedProviders,
    swap,
    getSupportedChainsQuery,
    getSupportedProvidersQuery,
  };
};
