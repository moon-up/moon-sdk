import { useMoonSDK, useMoonTransaction } from '@/hooks';
import {
  ApiResponseChainsResponse,
  ApiResponseStatusResponse,
  ApiResponseTokensResponse,
  GetQuoteParams1 as GetQuoteParams,
  GetstatusParams,
  Lifi,
  OptionalChainTypesEnum,
  PostQuote,
  PostQuoteParams,
  Quote,
} from '@moonup/moon-api';
import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';

/**
 * Custom hook to interact with the Moon Lifi SDK.
 *
 * @returns {Object} An object containing various functions and queries to interact with the Lifi SDK.
 *
 * @property {Function} getStatus - Function to get the status of a transaction.
 * @property {Function} getQuoteLifi - Function to get a quote from Lifi.
 * @property {Function} postQuoteLifi - Function to post a quote to Lifi.
 * @property {Function} getSupportedTokens - Function to get supported tokens from Lifi.
 * @property {Function} getSupportedChains - Function to get supported chains from Lifi.
 * @property {Object} supportedTokensQuery - Query object to fetch supported tokens.
 * @property {Object} supportedChainsQuery - Query object to fetch supported chains.
 */
export const useLifi = () => {
  const context = useMoonSDK();
  const { handleTransaction } = useMoonTransaction();
  const { moon } = context;

  /**
   * Fetches the supported tokens using the Lifi SDK.
   *
   * This hook uses the `useQuery` hook from React Query to fetch the supported tokens
   * from the Lifi SDK. The query is identified by the key 'lifiGetSupportedTokens'.
   *
   * @throws {Error} If the Moon Lifi SDK is not initialized.
   *
   * @returns {ApiResponseTokensResponse} The response containing the supported tokens.
   *
   * @remarks
   * The query result is considered fresh for 24 hours (staleTime: 1000 * 60 * 60 * 24).
   */
  const supportedTokensQuery = useQuery({
    queryKey: ['lifiGetSupportedTokens'],
    queryFn: async () => {
      const lifiSDK = moon?.getLifiSDK();
      if (!lifiSDK) throw new Error('Moon Lifi SDK not initialized');
      const response = await lifiSDK.fetchTokens();
      return response as ApiResponseTokensResponse;
    },
    staleTime: 1000 * 60 * 60 * 24,
  });

  /**
   * Fetches the supported chains using the Lifi SDK.
   *
   * This hook uses the `useQuery` function to fetch the supported chains from the Lifi SDK.
   * It queries the `lifiGetSupportedChains` key and retrieves the chains of type `EVM`.
   *
   * @throws {Error} If the Moon Lifi SDK is not initialized.
   *
   * @returns {ApiResponseChainsResponse} The response containing the supported chains.
   *
   * @see {@link https://react-query.tanstack.com/reference/useQuery} for more information on `useQuery`.
   */
  const supportedChainsQuery = useQuery({
    queryKey: ['lifiGetSupportedChains'],
    queryFn: async () => {
      const lifiSDK = moon?.getLifiSDK();
      if (!lifiSDK) throw new Error('Moon Lifi SDK not initialized');
      const response = await lifiSDK.getChains({
        optionalChainTypes: OptionalChainTypesEnum.EVM,
      });
      return response as ApiResponseChainsResponse;
    },
    staleTime: 1000 * 60 * 60 * 24,
  });

  /**
   * Retrieves the Lifi SDK instance from the Moon SDK.
   *
   * @returns {Lifi} The initialized Lifi SDK instance.
   * @throws {Error} If the Moon Lifi SDK is not initialized.
   */
  const getLifiSDK = (): Lifi => {
    const lifiSDK = moon?.getLifiSDK();
    if (!lifiSDK) throw new Error('Moon Lifi SDK not initialized');
    return lifiSDK;
  };

  /**
   * Retrieves the status of a transaction using the provided payload.
   *
   * @param payload - The parameters required to get the status of the transaction.
   * @returns A promise that resolves to an ApiResponseStatusResponse object containing the status of the transaction.
   */
  const getStatus = useCallback(
    async (payload: GetstatusParams): Promise<ApiResponseStatusResponse> => {
      return handleTransaction('getStatus', async () => {
        const lifiSDK = getLifiSDK();
        const response = await lifiSDK.getstatus(payload);
        return response as ApiResponseStatusResponse;
      });
    },
    [moon]
  );

  /**
   * Fetches the supported tokens using the LiFi SDK.
   *
   * This function is memoized using `useCallback` and will only change if the `moon` dependency changes.
   * It handles the transaction by calling `handleTransaction` with the action name 'getSupportedTokens'.
   *
   * @returns {Promise<ApiResponseTokensResponse>} A promise that resolves to the response containing the supported tokens.
   */
  const getSupportedTokens =
    useCallback(async (): Promise<ApiResponseTokensResponse> => {
      return handleTransaction('getSupportedTokens', async () => {
        const lifiSDK = getLifiSDK();
        const response = await lifiSDK.fetchTokens();
        return response as ApiResponseTokensResponse;
      });
    }, [moon]);

  /**
   * Fetches the supported chains using the LiFi SDK.
   *
   * This function is memoized using `useCallback` and will only change if the `moon` dependency changes.
   * It handles the transaction by calling `handleTransaction` with the action name 'getSupportedChains'.
   * The LiFi SDK is used to get the chains with the optional chain type set to EVM.
   *
   * @returns {Promise<ApiResponseTokensResponse>} A promise that resolves to the response from the LiFi SDK, cast to `ApiResponseChainsResponse`.
   */
  const getSupportedChains =
    useCallback(async (): Promise<ApiResponseTokensResponse> => {
      return handleTransaction('getSupportedChains', async () => {
        const lifiSDK = getLifiSDK();
        const response = await lifiSDK.getChains({
          optionalChainTypes: OptionalChainTypesEnum.EVM,
        });
        return response as ApiResponseChainsResponse;
      });
    }, [moon]);

  /**
   * Fetches a quote using the LiFi SDK.
   *
   * @param payload - The parameters required to get a quote.
   * @returns A promise that resolves to a Quote object.
   *
   * @example
   * ```typescript
   * const quoteParams: GetQuoteParams = { /* parameters *\/ };
   * const quote = await getQuoteLifi(quoteParams);
   * console.log(quote);
   * ```
   */
  const getQuoteLifi = useCallback(
    async (payload: GetQuoteParams): Promise<Quote> => {
      return handleTransaction('getQuoteLifi', async () => {
        const lifiSDK = getLifiSDK();
        const response = await lifiSDK.getQuote(payload);
        return response.data as Quote;
      });
    },
    [moon]
  );

  /**
   * Posts a quote to the LiFi SDK.
   *
   * This function uses the `handleTransaction` utility to manage the transaction
   * and ensure proper handling of the quote posting process. It retrieves the
   * LiFi SDK instance and sends the provided payload to the `postQuote` method
   * of the SDK. The response data is then returned.
   *
   * @param payload - The parameters required to post a quote.
   * @returns A promise that resolves to the posted quote.
   */
  const postQuoteLifi = useCallback(
    async (payload: PostQuoteParams): Promise<PostQuote> => {
      return handleTransaction('postQuoteLifi', async () => {
        const lifiSDK = getLifiSDK();
        const response = await lifiSDK.postQuote(payload);
        return response.data;
      });
    },
    [moon]
  );

  return {
    getStatus,
    getQuoteLifi,
    postQuoteLifi,
    getSupportedTokens,
    getSupportedChains,
    supportedTokensQuery,
    supportedChainsQuery,
  };
};
