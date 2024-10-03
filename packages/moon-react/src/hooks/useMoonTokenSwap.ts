import { useCallback } from "react";
import { useMoonSDK } from "./useMoonSDK";
import { useMoonTransaction } from "./useMoonTransaction";
import {
  GetRouterAddressParams,
  GetSupportedTokensParams,
  Odos,
  OdosAPIResponseOdosExecuteFunctionResult,
  OdosSwapInputBody,
} from "@moonup/moon-api";
import { useQuery } from "@tanstack/react-query";

// create context to hold the supported tokens

export const useMoonTokenSwap = (chainId?: number) => {
  const context = useMoonSDK();
  const { handleTransaction } = useMoonTransaction();
  const { moon, chain } = context;
  let selectedChainId = chainId || chain?.chain_id || 1;

  // react query to fetch supported tokens
  const supportedTokensQuery = useQuery({
    queryKey: ["odosGetSupportedTokens", selectedChainId],
    queryFn: async () => {
      const odosSDK = moon?.getOdosSDK();
      if (!odosSDK) throw new Error("Moon Lifi SDK not initialized");
      const response = await odosSDK.getSupportedTokens({
        chainId: selectedChainId,
      });
      return response.data as OdosAPIResponseOdosExecuteFunctionResult;
    },
    staleTime: 1000 * 60 * 60 * 24,
  });

  const getOdosSDK = (): Odos => {
    const odosSDK = moon?.getOdosSDK();
    if (!odosSDK) throw new Error("Moon Lifi SDK not initialized");
    return odosSDK;
  };

  const getRouterAddress = useCallback(
    async (
      payload: GetRouterAddressParams
    ): Promise<OdosAPIResponseOdosExecuteFunctionResult> => {
      return handleTransaction("getRouterAddressOdos", async () => {
        const odosSDK = getOdosSDK();
        const response = await odosSDK.getRouterAddress(payload);
        return response;
      });
    },
    [moon]
  );

  const getSupportedTokens = useCallback(
    async (
      payload: GetSupportedTokensParams
    ): Promise<OdosAPIResponseOdosExecuteFunctionResult> => {
      return handleTransaction("getQuoteLifi", async () => {
        const odosSDK = getOdosSDK();
        const response = await odosSDK.getSupportedTokens(payload);
        return response.data as OdosAPIResponseOdosExecuteFunctionResult;
      });
    },
    [moon]
  );

  const getQuoteOdos = useCallback(
    async (payload: {
      accountName: string;
      data: OdosSwapInputBody;
    }): Promise<OdosAPIResponseOdosExecuteFunctionResult> => {
      return handleTransaction("getQuoteLifi", async () => {
        const odosSDK = getOdosSDK();
        const response = await odosSDK.getQuote(
          payload.accountName,
          payload.data
        );
        return response.data as OdosAPIResponseOdosExecuteFunctionResult;
      });
    },
    [moon]
  );

  const swapOdos = useCallback(
    async (payload: {
      accountName: string;
      data: OdosSwapInputBody;
    }): Promise<OdosAPIResponseOdosExecuteFunctionResult> => {
      return handleTransaction("getQuoteLifi", async () => {
        const odosSDK = getOdosSDK();
        const response = await odosSDK.swap(payload.accountName, payload.data);
        return response.data;
      });
    },
    [moon]
  );

  return {
    getRouterAddress,
    getQuoteOdos,
    swapOdos,
    getSupportedTokens,
    supportedTokensQuery,
  };
};
