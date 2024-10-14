import { useMoonSDK, useMoonTransaction } from '@/hooks';
import {
  GetAddressesProviderParams2,
  GetAddressesProviderParams4,
  GetDefaultAdminRoleParams,
  GetFlashLoanPremiumTotalParams,
  GetLendingPoolParams,
  GetLendingPoolRevisionParams,
  GetMaxNumberReservesParams,
  GetMaxStableRateBorrowSizePercentParams,
  GetMinHfParams,
  GetReserveDataParams2,
  GetReservesListParams2,
  GetRoleAdminParams,
  GetUserAccountDataParams2,
  GetWethParams,
  HasRoleParams,
  IsPausedParams,
  IsPausedParams2,
  LendingPool,
  LendingPoolInputBody,
  Leverager,
  LeveragerInputBody,
  SupportsInterfaceParams,
} from '@moonup/moon-api';
import { useCallback } from 'react';
export type MrpContractMapping = {
  [key: string]: {
    lendingPool: string;
    leverager: string;
  };
};

export const mrpContractMapping: MrpContractMapping = {
  // mode
  '34443': {
    lendingPool: '0xB702cE183b4E1Faa574834715E5D4a6378D0eEd3',
    leverager: '0x9A6Add057603d3366ac3cA97Fe80126b7f96af05',
  },
  '56': {
    lendingPool: '0xf5Ab6C920af8f1bd4b16fDa9e7EF3173ffb616f7',
    leverager: '0x895103307f051e38Bca5113AaC4D53b262C1efb7',
  },
  '5000': {
    lendingPool: '0x7c9C6F5BEd9Cfe5B9070C7D3322CF39eAD2F9492',
    leverager: '0xEDc83309549e36f3c7FD8c2C5C54B4c8e5FA00FC',
  },
  '534352': {
    lendingPool: '0x4cE1A1eC13DBd9084B1A741b036c061b2d58dABf',
    leverager: '0x9df4Ac62F9E435DbCD85E06c990a7f0ea32739a',
  },
};

export const useMRP = () => {
  const context = useMoonSDK();
  const { handleTransaction } = useMoonTransaction();
  const { moon } = context;

  const getLeveragerSDK = useCallback((): Leverager => {
    const leveragerSDK = moon?.getLeveragerSDK();
    if (!leveragerSDK) throw new Error('Moon LeveragerSDK not initialized');
    return leveragerSDK;
  }, [moon]);

  const getLendingPoolSDK = useCallback((): LendingPool => {
    const lendingPoolSDK = moon?.getLendingPoolSDK();
    if (!lendingPoolSDK) throw new Error('Moon LendingPoolSDK not initialized');
    return lendingPoolSDK;
  }, [moon]);

  // Leverager functions
  const leverageErc20 = useCallback(
    async (payload: { accountName: string; data: LeveragerInputBody }) => {
      return handleTransaction('leverageErc20', async () => {
        const leveragerSDK = getLeveragerSDK();
        return leveragerSDK.leverageErc20(payload.accountName, payload.data);
      });
    },
    [moon]
  );

  const leverageNative = useCallback(
    async (payload: { accountName: string; data: LeveragerInputBody }) => {
      return handleTransaction('leverageNative', async () => {
        const leveragerSDK = getLeveragerSDK();
        return leveragerSDK.leverageNative(payload.accountName, payload.data);
      });
    },
    [moon]
  );

  const deleverageErc20 = useCallback(
    async (payload: { accountName: string; data: LeveragerInputBody }) => {
      return handleTransaction('deleverageErc20', async () => {
        const leveragerSDK = getLeveragerSDK();
        return leveragerSDK.deleverageErc20(payload.accountName, payload.data);
      });
    },
    [moon]
  );

  const deleverageNative = useCallback(
    async (payload: { accountName: string; data: LeveragerInputBody }) => {
      return handleTransaction('deleverageNative', async () => {
        const leveragerSDK = getLeveragerSDK();
        return leveragerSDK.deleverageNative(payload.accountName, payload.data);
      });
    },
    [moon]
  );

  const executeOperation = useCallback(
    async (payload: { accountName: string; data: LeveragerInputBody }) => {
      return handleTransaction('executeOperation', async () => {
        const leveragerSDK = getLeveragerSDK();
        return leveragerSDK.executeOperation(payload.accountName, payload.data);
      });
    },
    [moon]
  );

  const getAddressesProvider = useCallback(
    async (params: GetAddressesProviderParams4) => {
      const leveragerSDK = getLeveragerSDK();
      return leveragerSDK.getAddressesProvider(params);
    },
    [moon]
  );

  const getDefaultAdminRole = useCallback(
    async (params: GetDefaultAdminRoleParams) => {
      const leveragerSDK = getLeveragerSDK();
      return leveragerSDK.getDefaultAdminRole(params);
    },
    [moon]
  );

  const getLendingPool = useCallback(
    async (params: GetLendingPoolParams) => {
      const leveragerSDK = getLeveragerSDK();
      return leveragerSDK.getLendingPool(params);
    },
    [moon]
  );

  const getMinHf = useCallback(
    async (params: GetMinHfParams) => {
      const leveragerSDK = getLeveragerSDK();
      return leveragerSDK.getMinHf(params);
    },
    [moon]
  );

  const getRoleAdmin = useCallback(
    async (params: GetRoleAdminParams) => {
      const leveragerSDK = getLeveragerSDK();
      return leveragerSDK.getRoleAdmin(params);
    },
    [moon]
  );

  const getWeth = useCallback(
    async (params: GetWethParams) => {
      const leveragerSDK = getLeveragerSDK();
      return leveragerSDK.getWeth(params);
    },
    [moon]
  );

  const grantRole = useCallback(
    async (payload: { accountName: string; data: LeveragerInputBody }) => {
      return handleTransaction('grantRole', async () => {
        const leveragerSDK = getLeveragerSDK();
        return leveragerSDK.grantRole(payload.accountName, payload.data);
      });
    },
    [moon]
  );

  const hasRole = useCallback(
    async (params: HasRoleParams) => {
      const leveragerSDK = getLeveragerSDK();
      return leveragerSDK.hasRole(params);
    },
    [moon]
  );

  const isPaused = useCallback(
    async (params: IsPausedParams2) => {
      const leveragerSDK = getLeveragerSDK();
      return leveragerSDK.isPaused(params);
    },
    [moon]
  );

  const pause = useCallback(
    async (payload: { accountName: string; data: LeveragerInputBody }) => {
      return handleTransaction('pause', async () => {
        const leveragerSDK = getLeveragerSDK();
        return leveragerSDK.pause(payload.accountName, payload.data);
      });
    },
    [moon]
  );

  const renounceRole = useCallback(
    async (payload: { accountName: string; data: LeveragerInputBody }) => {
      return handleTransaction('renounceRole', async () => {
        const leveragerSDK = getLeveragerSDK();
        return leveragerSDK.renounceRole(payload.accountName, payload.data);
      });
    },
    [moon]
  );

  const revokeRole = useCallback(
    async (payload: { accountName: string; data: LeveragerInputBody }) => {
      return handleTransaction('revokeRole', async () => {
        const leveragerSDK = getLeveragerSDK();
        return leveragerSDK.revokeRole(payload.accountName, payload.data);
      });
    },
    [moon]
  );

  const supportsInterface = useCallback(
    async (params: SupportsInterfaceParams) => {
      const leveragerSDK = getLeveragerSDK();
      return leveragerSDK.supportsInterface(params);
    },
    [moon]
  );

  const unpause = useCallback(
    async (payload: { accountName: string; data: LeveragerInputBody }) => {
      return handleTransaction('unpause', async () => {
        const leveragerSDK = getLeveragerSDK();
        return leveragerSDK.unpause(payload.accountName, payload.data);
      });
    },
    [moon]
  );

  // LendingPool functions
  const borrow = useCallback(
    async (payload: { accountName: string; data: LendingPoolInputBody }) => {
      return handleTransaction('borrow', async () => {
        const lendingPoolSDK = getLendingPoolSDK();
        return lendingPoolSDK.borrow(payload.accountName, payload.data);
      });
    },
    [moon]
  );

  const deposit = useCallback(
    async (payload: { accountName: string; data: LendingPoolInputBody }) => {
      return handleTransaction('deposit', async () => {
        const lendingPoolSDK = getLendingPoolSDK();
        return lendingPoolSDK.deposit(payload.accountName, payload.data);
      });
    },
    [moon]
  );

  const flashLoan = useCallback(
    async (payload: { accountName: string; data: LendingPoolInputBody }) => {
      return handleTransaction('flashLoan', async () => {
        const lendingPoolSDK = getLendingPoolSDK();
        return lendingPoolSDK.flashLoan(payload.accountName, payload.data);
      });
    },
    [moon]
  );

  const getLendingPoolAddressesProvider = useCallback(
    async (params: GetAddressesProviderParams2) => {
      const lendingPoolSDK = getLendingPoolSDK();
      return lendingPoolSDK.getAddressesProvider(params);
    },
    [moon]
  );

  const getFlashLoanPremiumTotal = useCallback(
    async (params: GetFlashLoanPremiumTotalParams) => {
      const lendingPoolSDK = getLendingPoolSDK();
      return lendingPoolSDK.getFlashLoanPremiumTotal(params);
    },
    [moon]
  );

  const getLendingPoolRevision = useCallback(
    async (params: GetLendingPoolRevisionParams) => {
      const lendingPoolSDK = getLendingPoolSDK();
      return lendingPoolSDK.getLendingPoolRevision(params);
    },
    [moon]
  );

  const getMaxNumberReserves = useCallback(
    async (params: GetMaxNumberReservesParams) => {
      const lendingPoolSDK = getLendingPoolSDK();
      return lendingPoolSDK.getMaxNumberReserves(params);
    },
    [moon]
  );

  const getMaxStableRateBorrowSizePercent = useCallback(
    async (params: GetMaxStableRateBorrowSizePercentParams) => {
      const lendingPoolSDK = getLendingPoolSDK();
      return lendingPoolSDK.getMaxStableRateBorrowSizePercent(params);
    },
    [moon]
  );

  const getReserveData = useCallback(
    async (params: GetReserveDataParams2) => {
      const lendingPoolSDK = getLendingPoolSDK();
      return lendingPoolSDK.getReserveData(params);
    },
    [moon]
  );

  const getReservesList = useCallback(
    async (params: GetReservesListParams2) => {
      const lendingPoolSDK = getLendingPoolSDK();
      return lendingPoolSDK.getReservesList(params);
    },
    [moon]
  );

  const getUserAccountData = useCallback(
    async (params: GetUserAccountDataParams2) => {
      const lendingPoolSDK = getLendingPoolSDK();
      return lendingPoolSDK.getUserAccountData(params);
    },
    [moon]
  );

  const isLendingPoolPaused = useCallback(
    async (params: IsPausedParams) => {
      const lendingPoolSDK = getLendingPoolSDK();
      return lendingPoolSDK.isPaused(params);
    },
    [moon]
  );

  const liquidationCall = useCallback(
    async (payload: { accountName: string; data: LendingPoolInputBody }) => {
      return handleTransaction('liquidationCall', async () => {
        const lendingPoolSDK = getLendingPoolSDK();
        return lendingPoolSDK.liquidationCall(
          payload.accountName,
          payload.data
        );
      });
    },
    [moon]
  );

  const repay = useCallback(
    async (payload: { accountName: string; data: LendingPoolInputBody }) => {
      return handleTransaction('repay', async () => {
        const lendingPoolSDK = getLendingPoolSDK();
        return lendingPoolSDK.repay(payload.accountName, payload.data);
      });
    },
    [moon]
  );

  const setUserUseReserveAsCollateral = useCallback(
    async (payload: { accountName: string; data: LendingPoolInputBody }) => {
      return handleTransaction('setUserUseReserveAsCollateral', async () => {
        const lendingPoolSDK = getLendingPoolSDK();
        return lendingPoolSDK.setUserUseReserveAsCollateral(
          payload.accountName,
          payload.data
        );
      });
    },
    [moon]
  );

  const swapBorrowRateMode = useCallback(
    async (payload: { accountName: string; data: LendingPoolInputBody }) => {
      return handleTransaction('swapBorrowRateMode', async () => {
        const lendingPoolSDK = getLendingPoolSDK();
        return lendingPoolSDK.swapBorrowRateMode(
          payload.accountName,
          payload.data
        );
      });
    },
    [moon]
  );

  return {
    // Leverager functions
    leverageErc20,
    leverageNative,
    deleverageErc20,
    deleverageNative,
    executeOperation,
    getAddressesProvider,
    getDefaultAdminRole,
    getLendingPool,
    getMinHf,
    getRoleAdmin,
    getWeth,
    grantRole,
    hasRole,
    isPaused,
    pause,
    renounceRole,
    revokeRole,
    supportsInterface,
    unpause,

    // LendingPool functions
    borrow,
    deposit,
    flashLoan,
    getLendingPoolAddressesProvider,
    getFlashLoanPremiumTotal,
    getLendingPoolRevision,
    getMaxNumberReserves,
    getMaxStableRateBorrowSizePercent,
    getReserveData,
    getReservesList,
    getUserAccountData,
    isLendingPoolPaused,
    liquidationCall,
    repay,
    setUserUseReserveAsCollateral,
    swapBorrowRateMode,
  };
};
