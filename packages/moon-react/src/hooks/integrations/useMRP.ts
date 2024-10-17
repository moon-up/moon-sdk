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
import { useAccount, useSendTransaction } from 'wagmi';

export type MrpContractMapping = {
  [key: string]: {
    lendingPool: string;
    leverager: string;
  };
};

/**
 * A mapping of MRP (Moon React Protocol) contract addresses for different network IDs.
 * Each network ID maps to an object containing the addresses for the lending pool and leverager contracts.
 *
 * @type {MrpContractMapping}
 *
 * @property {Object} 34443 - Contract addresses for network ID 34443.
 * @property {string} 34443.lendingPool - The address of the lending pool contract.
 * @property {string} 34443.leverager - The address of the leverager contract.
 *
 * @property {Object} 56 - Contract addresses for network ID 56.
 * @property {string} 56.lendingPool - The address of the lending pool contract.
 * @property {string} 56.leverager - The address of the leverager contract.
 *
 * @property {Object} 5000 - Contract addresses for network ID 5000.
 * @property {string} 5000.lendingPool - The address of the lending pool contract.
 * @property {string} 5000.leverager - The address of the leverager contract.
 *
 * @property {Object} 534352 - Contract addresses for network ID 534352.
 * @property {string} 534352.lendingPool - The address of the lending pool contract.
 * @property {string} 534352.leverager - The address of the leverager contract.
 */
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

/**
 * Custom hook that provides various functionalities related to leveraging and lending using the Moon SDK.
 *
 * This hook includes methods for leveraging ERC20 tokens and native assets, deleveraging, executing operations,
 * and interacting with the lending pool. It also provides utility functions for fetching data and managing roles.
 *
 * @returns {Object} An object containing various methods for leveraging, lending, and managing roles.
 *
 * @example
 * ```typescript
 * const {
 *   leverageErc20,
 *   leverageNative,
 *   deleverageErc20,
 *   deleverageNative,
 *   executeOperation,
 *   getAddressesProvider,
 *   getDefaultAdminRole,
 *   getLendingPool,
 *   getMinHf,
 *   getRoleAdmin,
 *   getWeth,
 *   grantRole,
 *   hasRole,
 *   isPaused,
 *   supportsInterface,
 *   pause,
 *   renounceRole,
 *   revokeRole,
 *   unpause,
 *   getLendingPoolAddressesProvider,
 *   getFlashLoanPremiumTotal,
 *   getLendingPoolRevision,
 *   getMaxNumberReserves,
 *   getMaxStableRateBorrowSizePercent,
 *   getReserveData,
 *   getReservesList,
 *   getUserAccountData,
 *   borrow,
 *   deposit,
 *   flashLoan,
 *   liquidationCall,
 *   repay,
 *   isLendingPoolPaused,
 *   setUserUseReserveAsCollateral,
 *   swapBorrowRateMode
 * } = useMRP();
 *
 * // Example usage:
 * leverageErc20({ accountName: 'exampleAccount', data: { /* LeveragerInputBody data *\/ } });
 * ```
 */
export const useMRP = () => {
  const context = useMoonSDK();
  const { handleTransaction } = useMoonTransaction();
  const { moon } = context;
  const { isConnected } = useAccount();
  const { sendTransactionAsync } = useSendTransaction();
  const prepareTransaction = (
    transaction: LeveragerInputBody | LendingPoolInputBody
  ) => {
    if (isConnected) {
      return {
        ...transaction,
        broadcast: false,
        dryrun: true,
      };
    }
    return transaction;
  };

  const handleWagmiTransaction = async (transactionData: any) => {
    if (isConnected) {
      const { transaction } = transactionData;

      await sendTransactionAsync({
        to: transaction.to,
        data: transaction.data,
        value: BigInt(transaction.value),
        chainId: transaction.chainId,
      });
    }
    return transactionData;
  };

  /**
   * Retrieves the Leverager SDK instance from the Moon object.
   * Utilizes the `useCallback` hook to memoize the function.
   * Throws an error if the Leverager SDK is not initialized.
   *
   * @returns {Leverager} The Leverager SDK instance.
   * @throws {Error} If the Leverager SDK is not initialized.
   */
  const getLeveragerSDK = useCallback((): Leverager => {
    const leveragerSDK = moon?.getLeveragerSDK();
    if (!leveragerSDK) throw new Error('Moon LeveragerSDK not initialized');
    return leveragerSDK;
  }, [moon]);

  /**
   * Retrieves the LendingPool SDK instance from the Moon object.
   *
   * @returns {LendingPool} The LendingPool SDK instance.
   * @throws {Error} If the LendingPool SDK is not initialized.
   */
  const getLendingPoolSDK = useCallback((): LendingPool => {
    const lendingPoolSDK = moon?.getLendingPoolSDK();
    if (!lendingPoolSDK) throw new Error('Moon LendingPoolSDK not initialized');
    return lendingPoolSDK;
  }, [moon]);

  /**
   * Leverages ERC20 tokens using the provided payload.
   *
   * @param payload - An object containing the account name and data required for the leverage operation.
   * @param payload.accountName - The name of the account to leverage.
   * @param payload.data - The data required for the leverage operation.
   *
   * @returns A promise that resolves with the result of the leverage operation.
   */
  const leverageErc20 = useCallback(
    async (payload: { accountName: string; data: LeveragerInputBody }) => {
      return handleTransaction('leverageErc20', async () => {
        const leveragerSDK = getLeveragerSDK();
        const preparedData = prepareTransaction(payload.data);

        const response = await leveragerSDK.leverageErc20(
          payload.accountName,
          preparedData as LeveragerInputBody
        );
        return handleWagmiTransaction(response);
      });
    },
    [moon]
  );
  /**
   * Leverages native assets using the provided payload.
   *
   * @param payload - An object containing the account name and data required for leveraging.
   * @param payload.accountName - The name of the account to leverage.
   * @param payload.data - The data required for the leveraging process.
   * @returns A promise that resolves with the result of the leveraging transaction.
   */
  const leverageNative = useCallback(
    async (payload: { accountName: string; data: LeveragerInputBody }) => {
      return handleTransaction('leverageNative', async () => {
        const leveragerSDK = getLeveragerSDK();
        const preparedData = prepareTransaction(payload.data);

        const response = await leveragerSDK.leverageNative(
          payload.accountName,
          preparedData as LeveragerInputBody
        );
        return handleWagmiTransaction(response);
      });
    },
    [moon]
  );

  /**
   * A hook that provides a function to deleverage an ERC20 token.
   *
   * @param payload - The payload containing the account name and data for the deleverage transaction.
   * @param payload.accountName - The name of the account to perform the deleverage operation on.
   * @param payload.data - The data required for the deleverage transaction.
   *
   * @returns A promise that resolves with the result of the deleverage transaction.
   *
   * @example
   * ```typescript
   * const payload = {
   *   accountName: 'exampleAccount',
   *   data: {
   *     // LeveragerInputBody data here
   *   }
   * };
   *
   * deleverageErc20(payload).then(response => {
   *   console.log('Deleverage successful:', response);
   * }).catch(error => {
   *   console.error('Deleverage failed:', error);
   * });
   * ```
   */
  const deleverageErc20 = useCallback(
    async (payload: { accountName: string; data: LeveragerInputBody }) => {
      return handleTransaction('deleverageErc20', async () => {
        const leveragerSDK = getLeveragerSDK();
        const preparedData = prepareTransaction(payload.data);

        const response = await leveragerSDK.deleverageErc20(
          payload.accountName,
          preparedData as LeveragerInputBody
        );
        return handleWagmiTransaction(response);
      });
    },
    [moon]
  );

  /**
   * Handles the deleveraging of native assets for a given account.
   *
   * @param payload - The payload containing the account name and data for the deleveraging transaction.
   * @param payload.accountName - The name of the account to deleverage.
   * @param payload.data - The data required for the deleveraging transaction.
   * @returns A promise that resolves with the result of the deleveraging transaction.
   */
  const deleverageNative = useCallback(
    async (payload: { accountName: string; data: LeveragerInputBody }) => {
      return handleTransaction('deleverageNative', async () => {
        const leveragerSDK = getLeveragerSDK();
        const preparedData = prepareTransaction(payload.data);

        const response = await leveragerSDK.deleverageNative(
          payload.accountName,
          preparedData as LeveragerInputBody
        );
        return handleWagmiTransaction(response);
      });
    },
    [moon]
  );

  /**
   * Executes a leverager operation using the provided payload.
   *
   * @param payload - An object containing the account name and data for the operation.
   * @param payload.accountName - The name of the account to execute the operation on.
   * @param payload.data - The data required for the leverager operation.
   *
   * @returns A promise that resolves with the result of the leverager operation.
   */
  const executeOperation = useCallback(
    async (payload: { accountName: string; data: LeveragerInputBody }) => {
      return handleTransaction('executeOperation', async () => {
        const leveragerSDK = getLeveragerSDK();
        const preparedData = prepareTransaction(payload.data);

        const response = await leveragerSDK.executeOperation(
          payload.accountName,
          preparedData as LeveragerInputBody
        );
        return handleWagmiTransaction(response);
      });
    },
    [moon]
  );

  /**
   * Fetches the addresses provider using the Leverager SDK.
   *
   * @param {GetAddressesProviderParams4} params - The parameters required to get the addresses provider.
   * @returns {Promise<AddressesProvider>} A promise that resolves to the addresses provider.
   */
  const getAddressesProvider = useCallback(
    async (params: GetAddressesProviderParams4) => {
      const leveragerSDK = getLeveragerSDK();
      return leveragerSDK.getAddressesProvider(params);
    },
    [moon]
  );

  /**
   * Retrieves the default admin role using the Leverager SDK.
   *
   * @param params - The parameters required to get the default admin role.
   * @returns A promise that resolves to the default admin role.
   */
  const getDefaultAdminRole = useCallback(
    async (params: GetDefaultAdminRoleParams) => {
      const leveragerSDK = getLeveragerSDK();
      return leveragerSDK.getDefaultAdminRole(params);
    },
    [moon]
  );

  /**
   * Fetches the lending pool details using the Leverager SDK.
   *
   * @param {GetLendingPoolParams} params - The parameters required to get the lending pool.
   * @returns {Promise<LendingPool>} A promise that resolves to the lending pool details.
   */
  const getLendingPool = useCallback(
    async (params: GetLendingPoolParams) => {
      const leveragerSDK = getLeveragerSDK();
      return leveragerSDK.getLendingPool(params);
    },
    [moon]
  );

  /**
   * Retrieves the minimum health factor using the Leverager SDK.
   *
   * @param params - The parameters required to get the minimum health factor.
   * @returns A promise that resolves to the minimum health factor.
   */
  const getMinHf = useCallback(
    async (params: GetMinHfParams) => {
      const leveragerSDK = getLeveragerSDK();
      return leveragerSDK.getMinHf(params);
    },
    [moon]
  );

  /**
   * Retrieves the role admin using the Leverager SDK.
   *
   * @param {GetRoleAdminParams} params - The parameters required to get the role admin.
   * @returns {Promise<any>} A promise that resolves to the role admin data.
   */
  const getRoleAdmin = useCallback(
    async (params: GetRoleAdminParams) => {
      const leveragerSDK = getLeveragerSDK();
      return leveragerSDK.getRoleAdmin(params);
    },
    [moon]
  );

  /**
   * Retrieves WETH (Wrapped Ether) using the Leverager SDK.
   *
   * @param {GetWethParams} params - The parameters required to get WETH.
   * @returns {Promise<any>} A promise that resolves to the WETH data.
   */
  const getWeth = useCallback(
    async (params: GetWethParams) => {
      const leveragerSDK = getLeveragerSDK();
      return leveragerSDK.getWeth(params);
    },
    [moon]
  );

  /**
   * Grants a role to a specified account using the Leverager SDK.
   *
   * @param payload - An object containing the account name and the data required for the transaction.
   * @param payload.accountName - The name of the account to which the role will be granted.
   * @param payload.data - The data required for the Leverager SDK transaction.
   * @returns A promise that resolves with the result of the transaction.
   */
  const grantRole = useCallback(
    async (payload: { accountName: string; data: LeveragerInputBody }) => {
      return handleTransaction('grantRole', async () => {
        const leveragerSDK = getLeveragerSDK();
        const preparedData = prepareTransaction(payload.data);

        const response = await leveragerSDK.grantRole(
          payload.accountName,
          preparedData as LeveragerInputBody
        );
        return handleWagmiTransaction(response);
      });
    },
    [moon]
  );

  /**
   * Checks if a user has a specific role using the Leverager SDK.
   *
   * @param {HasRoleParams} params - The parameters required to check the role.
   * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating if the user has the role.
   */
  const hasRole = useCallback(
    async (params: HasRoleParams) => {
      const leveragerSDK = getLeveragerSDK();
      return leveragerSDK.hasRole(params);
    },
    [moon]
  );

  /**
   * Checks if the leverager SDK is paused based on the provided parameters.
   *
   * @param {IsPausedParams2} params - The parameters to check if the SDK is paused.
   * @returns {Promise<boolean>} A promise that resolves to a boolean indicating if the SDK is paused.
   */
  const isPaused = useCallback(
    async (params: IsPausedParams2) => {
      const leveragerSDK = getLeveragerSDK();
      return leveragerSDK.isPaused(params);
    },
    [moon]
  );

  /**
   * Checks if the given interface is supported.
   *
   * @param {SupportsInterfaceParams} params - The parameters required to check interface support.
   * @returns {Promise<boolean>} A promise that resolves to a boolean indicating whether the interface is supported.
   */
  const supportsInterface = useCallback(
    async (params: SupportsInterfaceParams) => {
      const leveragerSDK = getLeveragerSDK();
      return leveragerSDK.supportsInterface(params);
    },
    [moon]
  );

  /**
   * Pauses a transaction for a given account using the Leverager SDK.
   *
   * @param payload - The payload containing the account name and data for the transaction.
   * @param payload.accountName - The name of the account for which the transaction is to be paused.
   * @param payload.data - The data required for the Leverager transaction.
   * @returns A promise that resolves with the result of the transaction handling.
   */
  const pause = useCallback(
    async (payload: { accountName: string; data: LeveragerInputBody }) => {
      return handleTransaction('pause', async () => {
        const leveragerSDK = getLeveragerSDK();
        const preparedData = prepareTransaction(payload.data);

        const response = await leveragerSDK.pause(
          payload.accountName,
          preparedData as LeveragerInputBody
        );
        return handleWagmiTransaction(response);
      });
    },
    [moon]
  );

  /**
   * Renounces a role for a given account using the Leverager SDK.
   *
   * @param payload - The payload containing the account name and data.
   * @param payload.accountName - The name of the account renouncing the role.
   * @param payload.data - The data required for the transaction.
   * @returns A promise that resolves with the transaction response.
   */
  const renounceRole = useCallback(
    async (payload: { accountName: string; data: LeveragerInputBody }) => {
      return handleTransaction('renounceRole', async () => {
        const leveragerSDK = getLeveragerSDK();
        const preparedData = prepareTransaction(payload.data);

        const response = await leveragerSDK.renounceRole(
          payload.accountName,
          preparedData as LeveragerInputBody
        );
        return handleWagmiTransaction(response);
      });
    },
    [moon]
  );

  /**
   * Revokes a role for a specified account using the Leverager SDK.
   *
   * @param payload - The payload containing the account name and data for the transaction.
   * @param payload.accountName - The name of the account from which the role will be revoked.
   * @param payload.data - The data required for the Leverager SDK transaction.
   * @returns A promise that resolves with the result of the transaction.
   */
  const revokeRole = useCallback(
    async (payload: { accountName: string; data: LeveragerInputBody }) => {
      return handleTransaction('revokeRole', async () => {
        const leveragerSDK = getLeveragerSDK();
        const preparedData = prepareTransaction(payload.data);

        const response = await leveragerSDK.revokeRole(
          payload.accountName,
          preparedData as LeveragerInputBody
        );
        return handleWagmiTransaction(response);
      });
    },
    [moon]
  );

  /**
   * Unpauses a transaction for a given account using the Leverager SDK.
   *
   * @param payload - The payload containing the account name and data for the transaction.
   * @param payload.accountName - The name of the account to unpause the transaction for.
   * @param payload.data - The data required for the Leverager SDK to unpause the transaction.
   * @returns A promise that resolves with the result of the unpause transaction.
   *
   * @example
   * ```typescript
   * const payload = {
   *   accountName: 'exampleAccount',
   *   data: {
   *     // LeveragerInputBody data here
   *   }
   * };
   * await unpause(payload);
   * ```
   */
  const unpause = useCallback(
    async (payload: { accountName: string; data: LeveragerInputBody }) => {
      return handleTransaction('unpause', async () => {
        const leveragerSDK = getLeveragerSDK();
        const preparedData = prepareTransaction(payload.data);

        const response = await leveragerSDK.unpause(
          payload.accountName,
          preparedData as LeveragerInputBody
        );
        return handleWagmiTransaction(response);
      });
    },
    [moon]
  );

  /**
   * Retrieves the lending pool addresses provider using the provided parameters.
   *
   * @param {GetAddressesProviderParams2} params - The parameters required to get the addresses provider.
   * @returns {Promise<AddressesProvider>} A promise that resolves to the addresses provider.
   */
  const getLendingPoolAddressesProvider = useCallback(
    async (params: GetAddressesProviderParams2) => {
      const lendingPoolSDK = getLendingPoolSDK();
      return lendingPoolSDK.getAddressesProvider(params);
    },
    [moon]
  );

  /**
   * Retrieves the total premium for a flash loan.
   *
   * @param {GetFlashLoanPremiumTotalParams} params - The parameters required to get the flash loan premium total.
   * @returns {Promise<number>} - A promise that resolves to the total premium amount.
   */
  const getFlashLoanPremiumTotal = useCallback(
    async (params: GetFlashLoanPremiumTotalParams) => {
      const lendingPoolSDK = getLendingPoolSDK();
      return lendingPoolSDK.getFlashLoanPremiumTotal(params);
    },
    [moon]
  );

  /**
   * Retrieves the lending pool revision using the provided parameters.
   *
   * @param {GetLendingPoolRevisionParams} params - The parameters required to get the lending pool revision.
   * @returns {Promise<any>} A promise that resolves to the lending pool revision.
   */
  const getLendingPoolRevision = useCallback(
    async (params: GetLendingPoolRevisionParams) => {
      const lendingPoolSDK = getLendingPoolSDK();
      return lendingPoolSDK.getLendingPoolRevision(params);
    },
    [moon]
  );

  /**
   * Retrieves the maximum number of reserves using the lending pool SDK.
   *
   * @param params - The parameters required to get the maximum number of reserves.
   * @returns A promise that resolves to the maximum number of reserves.
   */
  const getMaxNumberReserves = useCallback(
    async (params: GetMaxNumberReservesParams) => {
      const lendingPoolSDK = getLendingPoolSDK();
      return lendingPoolSDK.getMaxNumberReserves(params);
    },
    [moon]
  );

  /**
   * Retrieves the maximum stable rate borrow size percentage.
   *
   * @param {GetMaxStableRateBorrowSizePercentParams} params - The parameters required to get the maximum stable rate borrow size percentage.
   * @returns {Promise<number>} A promise that resolves to the maximum stable rate borrow size percentage.
   */
  const getMaxStableRateBorrowSizePercent = useCallback(
    async (params: GetMaxStableRateBorrowSizePercentParams) => {
      const lendingPoolSDK = getLendingPoolSDK();
      return lendingPoolSDK.getMaxStableRateBorrowSizePercent(params);
    },
    [moon]
  );

  /**
   * Fetches reserve data using the lending pool SDK.
   *
   * @param {GetReserveDataParams2} params - The parameters required to get the reserve data.
   * @returns {Promise<any>} A promise that resolves with the reserve data.
   */
  const getReserveData = useCallback(
    async (params: GetReserveDataParams2) => {
      const lendingPoolSDK = getLendingPoolSDK();
      return lendingPoolSDK.getReserveData(params);
    },
    [moon]
  );

  /**
   * Fetches the list of reserves using the Lending Pool SDK.
   *
   * @param params - The parameters required to get the reserves list.
   * @returns A promise that resolves to the list of reserves.
   */
  const getReservesList = useCallback(
    async (params: GetReservesListParams2) => {
      const lendingPoolSDK = getLendingPoolSDK();
      return lendingPoolSDK.getReservesList(params);
    },
    [moon]
  );

  /**
   * Fetches user account data from the lending pool SDK.
   *
   * @param params - The parameters required to get user account data.
   * @returns A promise that resolves to the user account data.
   */
  const getUserAccountData = useCallback(
    async (params: GetUserAccountDataParams2) => {
      const lendingPoolSDK = getLendingPoolSDK();
      return lendingPoolSDK.getUserAccountData(params);
    },
    [moon]
  );
  /**
   * Borrow funds from the lending pool.
   *
   * @param payload - The payload containing account information and lending pool input data.
   * @param payload.accountName - The name of the account borrowing the funds.
   * @param payload.data - The input data required for the lending pool transaction.
   * @returns A promise that resolves with the result of the borrowing transaction.
   */
  const borrow = useCallback(
    async (payload: { accountName: string; data: LendingPoolInputBody }) => {
      return handleTransaction('borrow', async () => {
        const lendingPoolSDK = getLendingPoolSDK();
        const preparedData = prepareTransaction(payload.data);

        const response = await lendingPoolSDK.borrow(
          payload.accountName,
          preparedData as LendingPoolInputBody
        );
        return handleWagmiTransaction(response);
      });
    },
    [moon]
  );

  /**
   * Handles the deposit transaction using the LendingPool SDK.
   *
   * @param payload - An object containing the account name and the data for the lending pool input.
   * @param payload.accountName - The name of the account making the deposit.
   * @param payload.data - The data required for the lending pool input.
   * @returns A promise that resolves with the result of the transaction.
   */
  const deposit = useCallback(
    async (payload: { accountName: string; data: LendingPoolInputBody }) => {
      return handleTransaction('deposit', async () => {
        const lendingPoolSDK = getLendingPoolSDK();
        const preparedData = prepareTransaction(payload.data);

        const response = await lendingPoolSDK.deposit(
          payload.accountName,
          preparedData as LendingPoolInputBody
        );
        return handleWagmiTransaction(response);
      });
    },
    [moon]
  );

  /**
   * Executes a flash loan transaction using the LendingPool SDK.
   *
   * @param payload - The payload containing the account name and lending pool input data.
   * @param payload.accountName - The name of the account initiating the flash loan.
   * @param payload.data - The input data required for the lending pool transaction.
   *
   * @returns A promise that resolves with the result of the flash loan transaction.
   */
  const flashLoan = useCallback(
    async (payload: { accountName: string; data: LendingPoolInputBody }) => {
      return handleTransaction('flashLoan', async () => {
        const lendingPoolSDK = getLendingPoolSDK();
        const preparedData = prepareTransaction(payload.data);

        const response = await lendingPoolSDK.flashLoan(
          payload.accountName,
          preparedData as LendingPoolInputBody
        );
        return handleWagmiTransaction(response);
      });
    },
    [moon]
  );

  /**
   * Handles the liquidation call transaction.
   *
   * @param payload - The payload containing the account name and lending pool input data.
   * @param payload.accountName - The name of the account to be liquidated.
   * @param payload.data - The input data for the lending pool transaction.
   * @returns A promise that resolves with the result of the handled transaction.
   */
  const liquidationCall = useCallback(
    async (payload: { accountName: string; data: LendingPoolInputBody }) => {
      return handleTransaction('liquidationCall', async () => {
        const lendingPoolSDK = getLendingPoolSDK();
        const preparedData = prepareTransaction(payload.data);

        const response = await lendingPoolSDK.liquidationCall(
          payload.accountName,
          preparedData as LendingPoolInputBody
        );
        return handleWagmiTransaction(response);
      });
    },
    [moon]
  );

  /**
   * Handles the repayment transaction using the LendingPool SDK.
   *
   * @param payload - The payload containing the account name and lending pool input data.
   * @param payload.accountName - The name of the account to repay from.
   * @param payload.data - The data required for the lending pool transaction.
   * @returns A promise that resolves with the result of the transaction handling.
   */
  const repay = useCallback(
    async (payload: { accountName: string; data: LendingPoolInputBody }) => {
      return handleTransaction('repay', async () => {
        const lendingPoolSDK = getLendingPoolSDK();
        const preparedData = prepareTransaction(payload.data);

        const response = await lendingPoolSDK.repay(
          payload.accountName,
          preparedData as LendingPoolInputBody
        );
        return handleWagmiTransaction(response);
      });
    },
    [moon]
  );

  /**
   * Checks if the lending pool is paused.
   *
   * @param {IsPausedParams} params - The parameters required to check if the lending pool is paused.
   * @returns {Promise<boolean>} A promise that resolves to a boolean indicating whether the lending pool is paused.
   */
  const isLendingPoolPaused = useCallback(
    async (params: IsPausedParams) => {
      const lendingPoolSDK = getLendingPoolSDK();
      return lendingPoolSDK.isPaused(params);
    },
    [moon]
  );

  /**
   * Sets the user's preference to use a reserve as collateral in the lending pool.
   *
   * @param payload - The payload containing the account name and lending pool input data.
   * @param payload.accountName - The name of the user's account.
   * @param payload.data - The input data for the lending pool.
   * @returns A promise that resolves when the transaction is handled.
   */
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

  /**
   * Swaps the borrow rate mode for a given account and lending pool data.
   *
   * @param payload - The payload containing the account name and lending pool input data.
   * @param payload.accountName - The name of the account for which the borrow rate mode is to be swapped.
   * @param payload.data - The lending pool input data required for the swap operation.
   * @returns A promise that resolves when the transaction is handled.
   */
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
