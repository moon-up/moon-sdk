import {
  AAVEv3RewardsAPIResponseAAVEv3RewardsExecuteFunctionResult,
  AAVEv3RewardsAPIResponseString,
  AAVEv3RewardsAPIResponseStringArray,
  AAVEv3RewardsInputBody,
  Aave,
  AavePoolAPIResponseAavePoolExecuteFunctionResult,
  AavePoolInputBody,
  GetAllATokensParams,
  GetRewardsByAssetParams,
  GetRewardsDataParams,
  GetUserRewardsParams,
  PoolAddressProviderRegistryAPIResponseAnyArray,
  AavePoolAPIResponseAny,
  GetReserveDataParams,
  GetUserReservesDataParams,
  AAVEv3UiPoolDataProviderAPIResponseUserReserveDataArray,
  GetReservesDataParams,
  AAVEv3UiPoolDataProviderAPIResponseReservesData,
  AAVEv3UiIncentiveDataProviderAPIResponseFullReservesIncentiveData,
  GetFullReservesIncentiveDataParams,
} from "@moonup/moon-api";
import { useMoonSDK } from "./useMoonSDK";
import { useMoonTransaction } from "./useMoonTransaction";
import { useCallback } from "react";]

type NetworkConfigType = {
  [key: string]: {
    pool: string;
    poolAddressesProvider: string;
    poolAddressesProviderRegistry: string;
    uiPoolDataProvider: string;
    uiIncentiveDataProvider: string;
  };
};
const networkConfig: NetworkConfigType = {
  '1': {
    // Ethereum Mainnet
    poolAddressesProvider: "0x2f39d218133AFaB8F2B819B1066c7E434Ad94E9e",
    poolAddressesProviderRegistry: "0xbaA999AC55EAce41CcAE355c77809e68Bb345170",
    uiPoolDataProvider: "0x5c5228aC8BC1528482514aF3e27E692495148717",
    uiIncentiveDataProvider: "0x162A7AC02f547ad796CA549f757e2b8d1D9b10a6",
    pool: "0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2",
  },
  '10': {
    // optimism
    poolAddressesProvider: "0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb",
    poolAddressesProviderRegistry: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
    uiPoolDataProvider: "0x5598BbFA2f4fE8151f45bBA0a3edE1b54B51a0a9",
    uiIncentiveDataProvider: "0x6F143FE2F7B02424ad3CaD1593D6f36c0Aab69d7",
    pool: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
  },
  '42161': {
    // Arbitrum
    poolAddressesProvider: "0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb",
    poolAddressesProviderRegistry: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
    pool: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
    uiPoolDataProvider: "0x5d4D4007A4c6336550DdAa2a7c0d5e7972eebd16",
    uiIncentiveDataProvider: "0xDA67AF3403555Ce0AE3ffC22fDb7354458277358",
  },
  '137': {
    // Polygon
    poolAddressesProvider: "0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb",
    poolAddressesProviderRegistry: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
    pool: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
    uiPoolDataProvider: "0x5598BbFA2f4fE8151f45bBA0a3edE1b54B51a0a9",
    uiIncentiveDataProvider: "0x874313A46e4957D29FAAC43BF5Eb2B144894f557",
  },
  '250': {
    // Fantom
    poolAddressesProvider: "0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb",
    poolAddressesProviderRegistry: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
    pool: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
    uiPoolDataProvider: "0xddf65434502E459C22263BE2ed7cF0f1FaFD44c0",
    uiIncentiveDataProvider: "0x67Da261c14fd94cE7fDd77a0A8476E5b244089A9",
  },
  '43114': {
    // Avalanche
    poolAddressesProvider: "0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb",
    poolAddressesProviderRegistry: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
    pool: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
    uiPoolDataProvider: "0x5598BbFA2f4fE8151f45bBA0a3edE1b54B51a0a9",
    uiIncentiveDataProvider: "0x265d414f80b0fca9505710e6F16dB4b67555D365",
  },
  '1666600000': {
    // harmony
    poolAddressesProvider: "0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb",
    poolAddressesProviderRegistry: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
    pool: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
    uiPoolDataProvider: "0xc851e6147dcE6A469CC33BE3121b6B2D4CaD2763",
    uiIncentiveDataProvider: "0xf7a60467aBb8A3240A0382b22E1B03c7d4F59Da5",
  },
  '1088': {
    // Metis
    poolAddressesProvider: "0xB9FABd7500B2C6781c35Dd48d54f81fc2299D7AF",
    poolAddressesProviderRegistry: "0x9E7B73ffD9D2026F3ff4212c29E209E09C8A91F5",
    pool: "0x90df02551bB792286e8D4f13E0e357b4Bf1D6a57",
    uiPoolDataProvider: "0x1DcDA4de2Bf6c7AD9a34788D22aE6b7d55016e1f",
    uiIncentiveDataProvider: "0x3e7BC5EcE0f22DbB16c3e3EeA288a10A57d68927",
  },
  '8453': {
    // Base
    poolAddressesProvider: "0xe20fCBdBfFC4Dd138cE8b2E6FBb6CB49777ad64D",
    poolAddressesProviderRegistry: "0x2f6571d3Eb9a4e350C68C36bCD2afe39530078E2",
    pool: "0xA238Dd80C259a72e81d7e4664a9801593F98d1c5",
    uiPoolDataProvider: "0x5d4D4007A4c6336550DdAa2a7c0d5e7972eebd16",
    uiIncentiveDataProvider: "0xEdD3b4737C1a0011626631a977b91Cf3E944982d",
  },
  '100': {
    // Gnosis
    poolAddressesProvider: "0x36616cf17557639614c1cdDb356b1B83fc0B2132",
    poolAddressesProviderRegistry: "0x1236010CECea55998384e795B59815D871f5f94d",
    pool: "0xb50201558B00496A145fE76f7424749556E326D8",
    uiPoolDataProvider: "0xc851e6147dcE6A469CC33BE3121b6B2D4CaD2763",
    uiIncentiveDataProvider: "0xCFDAdA7DCd2e785cF706BaDBC2B8Af5084d595e9",
  },
  '56': {
    // BNB
    poolAddressesProvider: "0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D",
    poolAddressesProviderRegistry: "0x117684358D990E42Eb1649E7e8C4691951dc1E71",
    pool: "0x6807dc923806fE8Fd134338EABCA509979a7e0cB",
    uiPoolDataProvider: "0x78F8Bd884C3D738B74B420540659c82f392820e0",
    uiIncentiveDataProvider: "0x1236010CECea55998384e795B59815D871f5f94d",
  },
  '534352': {
    // Scroll
    poolAddressesProvider: "0x69850D0B276776781C063771b161bd8894BCdD04",
    poolAddressesProviderRegistry: "0xFBedc64AeE24921cb43004312B9eF367a4162b57",
    pool: "0x11fCfe756c05AD438e312a7fd934381537D3cFfe",
    uiPoolDataProvider: "0xc851e6147dcE6A469CC33BE3121b6B2D4CaD2763",
    uiIncentiveDataProvider: "0x37A2f0b0b5FC33999e3E7fdECcFAe1e894fF9b07",
  },
  '324': {
    // zksync
    poolAddressesProvider: "0x2A3948BB219D6B2Fa83D64100006391a96bE6cb7",
    poolAddressesProviderRegistry: "0x0753E3637ddC6efc40759D9c347251046644F25F",
    pool: "0x78e30497a3c7527d953c6B1E3541b021A98Ac43c",
    uiPoolDataProvider: "0x43312730DB351Dc099924462A42B442c0993F6B5",
    uiIncentiveDataProvider: "0x82B3B951Cf43B42324B915Ab651a83D910f29D67",
  },
  // Add more networks as needed
};

export const useMoonAaveV3 = () => {
  const context = useMoonSDK();
  const { handleTransaction } = useMoonTransaction();
  const { moon } = context;

  const getAaveSDK = useCallback((): Aave => {
    const aaveSDK = moon?.getAaveSDK();
    if (!aaveSDK) throw new Error('Moon aaveSDK not initialized');
    return aaveSDK;
  }, [moon]);

  const getAaveV3PoolAddress = useCallback(
    async (
      accountName: string,
      chainId: string
    ): Promise<string | undefined> => {
      const config = networkConfig[chainId];
      if (!config) {
        throw new Error(`Unsupported chain ID: ${chainId}`);
      }
      const avveSDK = getAaveSDK();
      const poolAddress = await avveSDK.getPool({
        account: accountName,
        address: config.poolAddressesProvider,
        chainId,
      });

      if (!poolAddress.success) {
        throw new Error(
          `getAaveV3PoolAddress::Failed to get pool address: ${poolAddress.message}`
        );
      }

      return poolAddress.data;
    },
    [moon]
  );

  const supply = useCallback(
    async (payload: {
      accountName: string;
      data: AavePoolInputBody;
    }): Promise<AavePoolAPIResponseAavePoolExecuteFunctionResult> => {
      return handleTransaction('supply', async () => {
        const avveSDK = getAaveSDK();
        const response = await avveSDK.supply(
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
      return handleTransaction('withdraw', async () => {
        const avveSDK = getAaveSDK();
        const response = await avveSDK.withdraw(
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
      return handleTransaction('borrow', async () => {
        const avveSDK = getAaveSDK();
        const response = await avveSDK.borrow(
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
      return handleTransaction('repay', async () => {
        const avveSDK = getAaveSDK();
        const response = await avveSDK.repay(payload.accountName, payload.data);
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
      return handleTransaction('claimAllRewards', async () => {
        const avveSDK = getAaveSDK();
        const response = await avveSDK.claimAllRewards(
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
      return handleTransaction('claimRewardsOnBehalf', async () => {
        const avveSDK = getAaveSDK();
        const response = await avveSDK.claimRewardsOnBehalf(
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
      return handleTransaction('claimRewardsToSelf', async () => {
        const avveSDK = getAaveSDK();
        const response = await avveSDK.claimRewardsToSelf(
          payload.accountName,
          payload.data
        );
        return response;
      });
    },
    [moon]
  );

  const getRewardsByAsset = useCallback(
    async (
      payload: GetRewardsByAssetParams
    ): Promise<AAVEv3RewardsAPIResponseStringArray> => {
      return handleTransaction('getRewardsByAsset', async () => {
        const avveSDK = getAaveSDK();
        const response = await avveSDK.getRewardsByAsset(payload);
        return response;
      });
    },
    [moon]
  );

  const getRewardsData = useCallback(
    async (
      payload: GetRewardsDataParams
    ): Promise<AAVEv3RewardsAPIResponseStringArray> => {
      return handleTransaction('getRewardsData', async () => {
        const avveSDK = getAaveSDK();
        const response = await avveSDK.getRewardsData(payload);
        return response;
      });
    },
    [moon]
  );

  const getUserRewards = useCallback(
    async (
      payload: GetUserRewardsParams
    ): Promise<AAVEv3RewardsAPIResponseString> => {
      return handleTransaction('getUserRewards', async () => {
        const avveSDK = getAaveSDK();
        const response = await avveSDK.getUserRewards(payload);
        return response;
      });
    },
    [moon]
  );

  const getAllATokens = useCallback(
    async (
      payload: GetAllATokensParams
    ): Promise<PoolAddressProviderRegistryAPIResponseAnyArray> => {
      return handleTransaction('getAllATokens', async () => {
        const avveSDK = getAaveSDK();
        const response = await avveSDK.getAllATokens(payload);
        return response;
      });
    },
    [moon]
  );

  const getUserAccountData = useCallback(
    async (payload: {
      account: string;
      chainId: string;
    }): Promise<AavePoolAPIResponseAny> => {
      return handleTransaction('getUserAccountData', async () => {
        const avveSDK = getAaveSDK();
        const poolAdd = await getAaveV3PoolAddress(
          payload.account,
          payload.chainId
        );
        if (!poolAdd) {
          throw new Error('Market pool Address not found');
        }
        const response = await avveSDK.getUserAccountData({
          account: payload.account,
          address: poolAdd,
          chainId: payload.chainId,
          user: payload.account,
        });
        return response;
      });
    },
    [moon]
  );

  const getReserveData = useCallback(
    async (payload: GetReserveDataParams): Promise<AavePoolAPIResponseAny> => {
      return handleTransaction('getReserveData', async () => {
        const avveSDK = getAaveSDK();

        const response = await avveSDK.getReserveData(payload);
        return response;
      });
    },
    [moon]
  );

  const getUserReservesData = useCallback(
    async (
      payload: GetUserReservesDataParams
    ): Promise<AAVEv3UiPoolDataProviderAPIResponseUserReserveDataArray> => {
      return handleTransaction("getUserReservesData", async () => {
        const avveSDK = getAaveSDK();
        const response = await avveSDK.getUserReservesData(payload);
        return response;
      });
    },
    [moon]
  );

  const getReservesData = useCallback(
    async (
      payload: GetReservesDataParams
    ): Promise<AAVEv3UiPoolDataProviderAPIResponseReservesData> => {
      return handleTransaction("getReservesData", async () => {
        const avveSDK = getAaveSDK();
        const response = await avveSDK.getReservesData(payload);
        return response;
      });
    },
    [moon]
  );

  const getFullReservesIncentiveData = useCallback(
    async (
      payload: GetFullReservesIncentiveDataParams
    ): Promise<
      AAVEv3UiIncentiveDataProviderAPIResponseFullReservesIncentiveData
    > => {
      return handleTransaction("getFullReservesIncentiveData", async () => {
        const avveSDK = getAaveSDK();
        const response = await avveSDK.getFullReservesIncentiveData(payload);
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
    getAaveV3PoolAddress,
    getAllATokens,
    getUserAccountData,
    getReserveData,
    getUserReservesData,
    getReservesData,
    getFullReservesIncentiveData,
    networkConfig,
  };
};
