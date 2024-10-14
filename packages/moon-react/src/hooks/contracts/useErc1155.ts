import { useMoonSDK, useMoonTransaction } from '@/hooks';
import { Erc1155, InputBody, Transaction } from '@moonup/moon-api';
import { useCallback } from 'react';

/**
 * Custom hook to interact with ERC-1155 contracts using the Moon SDK.
 *
 * @returns {Object} An object containing the following functions:
 * - `balanceOfErc1155`: A function to get the balance of an ERC-1155 token for a given account.
 * - `safeTransferFromErc1155`: A function to safely transfer an ERC-1155 token from one account to another.
 *
 * @throws {Error} If the Moon SDK is not initialized.
 *
 * @example
 * const { balanceOfErc1155, safeTransferFromErc1155 } = useErc1155();
 *
 * // Get balance of ERC-1155 token
 * const balance = await balanceOfErc1155({ accountName: '0x123...', transaction: {...} });
 *
 * // Transfer ERC-1155 token
 * const transaction = await safeTransferFromErc1155({ accountName: '0x123...', transaction: {...} });
 */
export const useErc1155 = () => {
  const context = useMoonSDK();
  const { handleTransaction } = useMoonTransaction();
  const { moon } = context;

  const getErc1155SDK = (): Erc1155 => {
    const erc1155SDK = moon?.getErc1155SDK();
    if (!erc1155SDK) throw new Error('Moon SDK not initialized');
    return erc1155SDK;
  };

  /**
   * Retrieves the balance of an ERC-1155 token for a given account.
   *
   * @param payload - The payload containing the account name and transaction details.
   * @param payload.accountName - The name of the account to query the balance for.
   * @param payload.transaction - The transaction details required for the balance query.
   * @returns A promise that resolves to an object containing the balance as a string.
   */
  const balanceOfErc1155 = useCallback(
    async (payload: {
      accountName: string;
      transaction: InputBody;
    }): Promise<{ balance: string }> => {
      return handleTransaction('balanceOfErc1155', async () => {
        const erc1155SDK = getErc1155SDK();
        const response = await erc1155SDK.balanceOf(
          payload.accountName,
          payload.transaction
        );
        return response.data;
      });
    },
    [moon]
  );

  /**
   * Executes a safe transfer of ERC-1155 tokens from one account to another.
   *
   * @param payload - The payload containing the account name and transaction details.
   * @param payload.accountName - The name of the account initiating the transfer.
   * @param payload.transaction - The transaction details for the transfer.
   * @returns A promise that resolves to the transaction result.
   */
  const safeTransferFromErc1155 = useCallback(
    async (payload: {
      accountName: string;
      transaction: InputBody;
    }): Promise<Transaction> => {
      return handleTransaction('safeTransferFromErc1155', async () => {
        const erc1155SDK = getErc1155SDK();
        const response = await erc1155SDK.safeTransferFrom(
          payload.accountName,
          payload.transaction
        );
        return response.data;
      });
    },
    [moon]
  );

  return {
    balanceOfErc1155,
    safeTransferFromErc1155,
  };
};
