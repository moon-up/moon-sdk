import { useCallback } from "react";
import { useMoonSDK } from "./useMoonSDK";
import { useMoonTransaction } from "./useMoonTransaction";
import {
  Lifi,
  Quote,
  PostQuote,
  GetQuoteParams,
  PostQuoteParams,
} from "@moonup/moon-api";

export const useMoonBridging = () => {
  const context = useMoonSDK();
  const { handleTransaction } = useMoonTransaction();
  const { moon } = context;

  const getLifiSDK = (): Lifi => {
    const lifiSDK = moon?.getLifiSDK();
    if (!lifiSDK) throw new Error("Moon Lifi SDK not initialized");
    return lifiSDK;
  };

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
      return handleTransaction("getQuoteLifi", async () => {
        const lifiSDK = getLifiSDK();
        const response = await lifiSDK.postQuote(payload);
        return response.data;
      });
    },
    [moon]
  );

  return {
    getQuoteLifi,
    postQuoteLifi,
  };
};
