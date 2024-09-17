import { useCallback } from "react";
import { useMoonSDK } from "./useMoonSDK";
import { useMoonTransaction } from "./useMoonTransaction";
import {
  AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult,
  AAVEv3RewardsAPIResponseString,
  AAVEv3RewardsAPIResponseStringArray,
  AAVEv3RewardsInputBody,
  AavePoolAPIResponseAavePoolExecuteFunctionResult,
  AavePoolInputBody,
  Aavepool,
  Aavev3Rewards,
  GetRewardsByAssetParams,
  GetRewardsDataParams,
  GetUserRewardsParams,
} from "@moonup/moon-api";

export const useMoonAaveV3 = () => {
  const context = useMoonSDK();
  const { handleTransaction } = useMoonTransaction();
  const { moon } = context;

  const getAavepoolSDK = (): Aavepool => {
    const aavepoolSDK = moon?.getAavepoolSDK();
    if (!aavepoolSDK) throw new Error("Moon aavepoolSDK not initialized");
    return aavepoolSDK;
  };

  const getAaveRewardsSDK = (): Aavev3Rewards => {
    const aavev3RewardsSDK = moon?.getAavev3RewardsSDK();
    if (!aavev3RewardsSDK)
      throw new Error("Moon aavev3RewardsSDK not initialized");
    return aavev3RewardsSDK;
  };

  const supply = useCallback(
    async (payload: {
      accountName: string;
      data: AavePoolInputBody;
    }): Promise<AavePoolAPIResponseAavePoolExecuteFunctionResult> => {
      return handleTransaction("supply", async () => {
        const aavepoolSDK = getAavepoolSDK();
        const response = await aavepoolSDK.supply(
          payload.accountName,
          payload.data
        );
        return response;
      });
    },
    [moon]
  );

  const withdraw = useCallback(
    async (payload: {
      accountName: string;
      data: AavePoolInputBody;
    }): Promise<AavePoolAPIResponseAavePoolExecuteFunctionResult> => {
      return handleTransaction("withdraw", async () => {
        const aavepoolSDK = getAavepoolSDK();
        const response = await aavepoolSDK.withdraw(
          payload.accountName,
          payload.data
        );
        return response;
      });
    },
    [moon]
  );

  const borrow = useCallback(
    async (payload: {
      accountName: string;
      data: AavePoolInputBody;
    }): Promise<AavePoolAPIResponseAavePoolExecuteFunctionResult> => {
      return handleTransaction("borrow", async () => {
        const aavepoolSDK = getAavepoolSDK();
        const response = await aavepoolSDK.borrow(
          payload.accountName,
          payload.data
        );
        return response;
      });
    },
    [moon]
  );

  const repay = useCallback(
    async (payload: {
      accountName: string;
      data: AavePoolInputBody;
    }): Promise<AavePoolAPIResponseAavePoolExecuteFunctionResult> => {
      return handleTransaction("repay", async () => {
        const aavepoolSDK = getAavepoolSDK();
        const response = await aavepoolSDK.repay(
          payload.accountName,
          payload.data
        );
        return response;
      });
    },
    [moon]
  );

  const claimAllRewards = useCallback(
    async (payload: {
      accountName: string;
      data: AAVEv3RewardsInputBody;
    }): Promise<AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult> => {
      return handleTransaction("claimAllRewards", async () => {
        const aaveRewardsSDK = getAaveRewardsSDK();
        const response = await aaveRewardsSDK.claimAllRewards(
          payload.accountName,
          payload.data
        );
        return response;
      });
    },
    [moon]
  );

  const claimRewardsOnBehalf = useCallback(
    async (payload: {
      accountName: string;
      data: AAVEv3RewardsInputBody;
    }): Promise<AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult> => {
      return handleTransaction("claimRewardsOnBehalf", async () => {
        const aaveRewardsSDK = getAaveRewardsSDK();
        const response = await aaveRewardsSDK.claimRewardsOnBehalf(
          payload.accountName,
          payload.data
        );
        return response;
      });
    },
    [moon]
  );

  const claimRewardsToSelf = useCallback(
    async (payload: {
      accountName: string;
      data: AAVEv3RewardsInputBody;
    }): Promise<AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult> => {
      return handleTransaction("claimRewardsToSelf", async () => {
        const aaveRewardsSDK = getAaveRewardsSDK();
        const response = await aaveRewardsSDK.claimRewardsToSelf(
          payload.accountName,
          payload.data
        );
        return response;
      });
    },
    [moon]
  );

  const getRewardsByAsset = useCallback(
    async (payload: GetRewardsByAssetParams): Promise<AAVEv3RewardsAPIResponseStringArray> => {
      return handleTransaction("getRewardsByAsset", async () => {
        const aaveRewardsSDK = getAaveRewardsSDK();
        const response = await aaveRewardsSDK.getRewardsByAsset(payload);
        return response;
      });
    },
    [moon]
  );

  const getRewardsData = useCallback(
    async (payload: GetRewardsDataParams): Promise<AAVEv3RewardsAPIResponseStringArray> => {
      return handleTransaction("getRewardsData", async () => {
        const aaveRewardsSDK = getAaveRewardsSDK();
        const response = await aaveRewardsSDK.getRewardsData(payload);
        return response;
      });
    },
    [moon]
  );

  const getUserRewards = useCallback(
    async (payload: GetUserRewardsParams): Promise<AAVEv3RewardsAPIResponseString> => {
      return handleTransaction("getUserRewards", async () => {
        const aaveRewardsSDK = getAaveRewardsSDK();
        const response = await aaveRewardsSDK.getUserRewards(payload);
        return response;
      });
    },
    [moon]
  );

  return {
    supply,
    withdraw,
    borrow,
    repay,
    claimAllRewards,
    claimRewardsOnBehalf,
    claimRewardsToSelf,
    getRewardsByAsset,
    getRewardsData,
    getUserRewards,
  };
};
