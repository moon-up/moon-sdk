import { useCallback } from "react";
import { useMoonSDK } from "./useMoonSDK";
import { useMoonTransaction } from "./useMoonTransaction";
import {
  Lifi,
  Quote,
  PostQuote,
  GetQuoteParams1 as GetQuoteParams,
  PostQuoteParams,
  ApiResponseTokensResponse,
  OptionalChainTypesEnum,
  ApiResponseChainsResponse,
  GetstatusParams,
  ApiResponseStatusResponse,
} from "@moonup/moon-api";
import { useQuery } from "@tanstack/react-query";

export const useMoonBridging = () => {
  const context = useMoonSDK();
  const { handleTransaction } = useMoonTransaction();
  const { moon } = context;

  const supportedTokensQuery = useQuery({
    queryKey: ["lifiGetSupportedTokens"],
    queryFn: async () => {
      const lifiSDK = moon?.getLifiSDK();
      if (!lifiSDK) throw new Error("Moon Lifi SDK not initialized");
      const response = await lifiSDK.fetchTokens();
      return response as ApiResponseTokensResponse;
    },
    staleTime: 1000 * 60 * 60 * 24,
  });

  const supportedChainsQuery = useQuery({
    queryKey: ["lifiGetSupportedChains"],
    queryFn: async () => {
      const lifiSDK = moon?.getLifiSDK();
      if (!lifiSDK) throw new Error("Moon Lifi SDK not initialized");
      const response = await lifiSDK.getChains({
        optionalChainTypes: OptionalChainTypesEnum.EVM,
      });
      return response as ApiResponseChainsResponse;
    },
    staleTime: 1000 * 60 * 60 * 24,
  });

  const getLifiSDK = (): Lifi => {
    const lifiSDK = moon?.getLifiSDK();
    if (!lifiSDK) throw new Error("Moon Lifi SDK not initialized");
    return lifiSDK;
  };

  const getStatus = useCallback(
    async (payload: GetstatusParams): Promise<ApiResponseStatusResponse> => {
      return handleTransaction("getStatus", async () => {
        const lifiSDK = getLifiSDK();
        const response = await lifiSDK.getstatus(payload);
        return response as ApiResponseStatusResponse;
      });
    },
    [moon]
  );

  const getSupportedTokens = useCallback(async (): Promise<
    ApiResponseTokensResponse
  > => {
    return handleTransaction("getSupportedTokens", async () => {
      const lifiSDK = getLifiSDK();
      const response = await lifiSDK.fetchTokens();
      return response as ApiResponseTokensResponse;
    });
  }, [moon]);

  const getSupportedChains = useCallback(async (): Promise<
    ApiResponseTokensResponse
  > => {
    return handleTransaction("getSupportedChains", async () => {
      const lifiSDK = getLifiSDK();
      const response = await lifiSDK.getChains({
        optionalChainTypes: OptionalChainTypesEnum.EVM,
      });
      return response as ApiResponseChainsResponse;
    });
  }, [moon]);

  const getQuoteLifi = useCallback(
    async (payload: GetQuoteParams): Promise<Quote> => {
      return handleTransaction("getQuoteLifi", async () => {
        const lifiSDK = getLifiSDK();
        const response = await lifiSDK.getQuote(payload);
        return response.data as Quote;
      });
    },
    [moon]
  );

  const postQuoteLifi = useCallback(
    async (payload: PostQuoteParams): Promise<PostQuote> => {
      return handleTransaction("postQuoteLifi", async () => {
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
