// useMoon.ts
import { useMoonSDK } from '@/hooks';
import { ChainType, INetwork } from '@moonup/moon-sdk';
import { useCallback, useState } from 'react';
// useMoon.ts

/**
 * Custom hook to interact with MoonSDK for managing accounts and transactions.
 *
 * @returns {INetwork & {
 *   chainType: ChainType;
 *   changeChainType: (newChainType: ChainType) => void;
 * }} An object containing the current chain type, a function to change the chain type,
 * and various functions to manage accounts and transactions.
 *
 * @throws {Error} If MoonSDK is not initialized.
 *
 * @function createAccount
 * @description Creates a new account.
 * @param {any} input - The input data for creating the account.
 * @returns {Promise<any>} A promise that resolves with the created account data.
 *
 * @function deleteAccount
 * @description Deletes an existing account.
 * @param {string} accountName - The name of the account to delete.
 * @returns {Promise<any>} A promise that resolves when the account is deleted.
 *
 * @function exportAccount
 * @description Exports an existing account.
 * @param {string} accountName - The name of the account to export.
 * @returns {Promise<any>} A promise that resolves with the exported account data.
 *
 * @function getAccount
 * @description Retrieves an existing account.
 * @param {string} accountName - The name of the account to retrieve.
 * @returns {Promise<any>} A promise that resolves with the account data.
 *
 * @function listAccounts
 * @description Lists all existing accounts.
 * @returns {Promise<any>} A promise that resolves with the list of accounts.
 *
 * @function signTransaction
 * @description Signs a transaction with a specified account.
 * @param {string} accountName - The name of the account to sign the transaction.
 * @param {any} transaction - The transaction data to sign.
 * @returns {Promise<any>} A promise that resolves with the signed transaction data.
 *
 * @function getBalance
 * @description Retrieves the balance of a specified address.
 * @param {string} address - The address to get the balance for.
 * @returns {Promise<any>} A promise that resolves with the balance data.
 *
 * @function getTransaction
 * @description Retrieves a transaction by its hash.
 * @param {string} hash - The hash of the transaction to retrieve.
 * @returns {Promise<any>} A promise that resolves with the transaction data.
 *
 * @function sendTransaction
 * @description Sends a transaction.
 * @param {any} transaction - The transaction data to send.
 * @returns {Promise<any>} A promise that resolves with the sent transaction data.
 *
 * @function signMessage
 * @description Signs a message with a specified account.
 * @param {string} accountName - The name of the account to sign the message.
 * @param {string} message - The message to sign.
 * @returns {Promise<any>} A promise that resolves with the signed message data.
 *
 * @function signTypedData
 * @description Signs typed data with a specified account.
 * @param {string} accountName - The name of the account to sign the typed data.
 * @param {any} domain - The domain data for the typed data.
 * @param {any} types - The types data for the typed data.
 * @param {any} value - The value data for the typed data.
 * @returns {Promise<any>} A promise that resolves with the signed typed data.
 *
 * @function changeChainType
 * @description Changes the current chain type.
 * @param {ChainType} newChainType - The new chain type to set.
 */
export const useMoonAccount = (): INetwork & {
  chainType: ChainType;
  changeChainType: (newChainType: ChainType) => void;
} => {
  const { moon } = useMoonSDK();
  const [chainType, setChainType] = useState<ChainType>('ethereum');
  if (!moon) throw new Error('MoonSDK not initialized');

  /**
   * Creates a new account using the provided input.
   *
   * @param input - The input data required to create the account.
   * @returns A promise that resolves to the result of the account creation.
   */
  const createAccount = useCallback(
    async (input: any): Promise<any> => {
      return await moon.getTransactionService().createAccount(chainType, input);
    },
    [moon, chainType]
  );

  /**
   * Deletes an account with the specified account name.
   *
   * @param {string} accountName - The name of the account to be deleted.
   * @returns {Promise<any>} A promise that resolves when the account is deleted.
   */
  const deleteAccount = useCallback(
    async (accountName: string): Promise<any> => {
      return await moon
        .getTransactionService()
        .deleteAccount(chainType, accountName);
    },
    [moon, chainType]
  );

  /**
   * Exports the account details for a given account name.
   *
   * @param {string} accountName - The name of the account to export.
   * @returns {Promise<any>} A promise that resolves with the exported account details.
   */
  const exportAccount = useCallback(
    async (accountName: string): Promise<any> => {
      return await moon
        .getTransactionService()
        .exportAccount(chainType, accountName);
    },
    [moon, chainType]
  );

  /**
   * Retrieves the account information for a given account name.
   *
   * @param accountName - The name of the account to retrieve.
   * @returns A promise that resolves to the account information.
   */
  const getAccount = useCallback(
    async (accountName: string): Promise<any> => {
      return await moon
        .getTransactionService()
        .getAccount(chainType, accountName);
    },
    [moon, chainType]
  );

  /**
   * Fetches a list of accounts from the transaction service.
   *
   * @returns {Promise<any>} A promise that resolves to the list of accounts.
   */
  const listAccounts = useCallback(async (): Promise<any> => {
    return await moon.getTransactionService().listAccounts(chainType);
  }, [moon, chainType]);

  /**
   * Signs a transaction using the Moon SDK's transaction service.
   *
   * @param accountName - The name of the account to sign the transaction with.
   * @param transaction - The transaction object to be signed.
   * @returns A promise that resolves to the signed transaction.
   */
  const signTransaction = useCallback(
    async (accountName: string, transaction: any): Promise<any> => {
      return await moon
        .getTransactionService()
        .signTransaction(chainType, accountName, transaction);
    },
    [moon, chainType]
  );

  /**
   * Retrieves the balance for a given address.
   *
   * @param address - The address to retrieve the balance for.
   * @returns A promise that resolves to the balance of the given address.
   */
  const getBalance = useCallback(
    async (address: string): Promise<any> => {
      return await moon.getTransactionService().getBalance(chainType, address);
    },
    [moon, chainType]
  );

  /**
   * Retrieves a transaction by its hash.
   *
   * @param hash - The hash of the transaction to retrieve.
   * @returns A promise that resolves to the transaction details.
   */
  const getTransaction = useCallback(
    async (hash: string): Promise<any> => {
      return await moon.getTransactionService().getTransaction(chainType, hash);
    },
    [moon, chainType]
  );

  /**
   * Sends a transaction using the Moon SDK's transaction service.
   *
   * @param transaction - The transaction object to be sent.
   * @returns A promise that resolves with the result of the transaction.
   */
  const sendTransaction = useCallback(
    async (transaction: any): Promise<any> => {
      return await moon
        .getTransactionService()
        .sendTransaction(chainType, transaction);
    },
    [moon, chainType]
  );

  /**
   * Signs a message using the specified account name and message.
   *
   * @param {string} accountName - The name of the account to use for signing the message.
   * @param {string} message - The message to be signed.
   * @returns {Promise<any>} A promise that resolves with the signed message.
   */
  const signMessage = useCallback(
    async (accountName: string, message: string): Promise<any> => {
      return await moon
        .getTransactionService()
        .signMessage(chainType, accountName, message);
    },
    [moon, chainType]
  );

  /**
   * Signs typed data using the Moon transaction service.
   *
   * @param accountName - The name of the account to sign the data with.
   * @param domain - The domain data for the typed data.
   * @param types - The types definition for the typed data.
   * @param value - The value to be signed.
   * @returns A promise that resolves to the signed data.
   */
  const signTypedData = useCallback(
    async (
      accountName: string,
      domain: any,
      types: any,
      value: any
    ): Promise<any> => {
      return await moon
        .getTransactionService()
        .signTypedData(chainType, accountName, domain, types, value);
    },
    [moon, chainType]
  );

  /**
   * Changes the current chain type to the specified new chain type.
   *
   * @param newChainType - The new chain type to set.
   */
  const changeChainType = useCallback((newChainType: ChainType) => {
    setChainType(newChainType);
  }, []);

  return {
    chainType,
    changeChainType,
    createAccount,
    deleteAccount,
    exportAccount,
    getTransaction,
    listAccounts,
    signTransaction,
    getBalance,
    getAccount,
    sendTransaction,
    signMessage,
    signTypedData,
  };
};
