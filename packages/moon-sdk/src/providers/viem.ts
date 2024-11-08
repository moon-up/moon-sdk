import { TypedDataField } from '@ethersproject/abstract-signer';
import type {
  Hex,
  LocalAccount,
  SerializeTransactionFn,
  SignableMessage,
  TransactionSerializable,
  TypedDataDefinition,
  TypedDataDomain,
} from 'viem';
import { serializeTransaction } from 'viem';
import { toAccount } from 'viem/accounts';

import { MoonSDK } from '../moon';

/**
 * Options for configuring a Moon account.
 *
 * @property {MoonSDK} sdk - The MoonSDK instance to use.
 * @property {string} ethereumAddress - The Ethereum address associated with the account.
 */
export interface MoonAccountOptions {
  sdk: MoonSDK;
  ethereumAddress: string;
}

/**
 * Creates a Moon account with the provided options.
 *
 * @param options - The options required to create a Moon account.
 * @param options.sdk - The SDK instance used for signing messages and transactions.
 * @param options.ethereumAddress - The Ethereum address associated with the account.
 *
 * @returns A promise that resolves to a `LocalAccount` object.
 *
 * The returned `LocalAccount` object includes methods for:
 * - `signMessage`: Signs a message using the provided SDK and Ethereum address.
 * - `signTransaction`: Signs a transaction using the provided SDK and Ethereum address.
 * - `signTypedData`: Signs typed data using the provided SDK and Ethereum address.
 */
export async function createMoonAccount(
  options: MoonAccountOptions
): Promise<LocalAccount> {
  const { sdk, ethereumAddress } = options;

  return toAccount({
    address: ethereumAddress as Hex,
    async signMessage({ message }: { message: SignableMessage }): Promise<Hex> {
      return sdk.signMessage(
        ethereumAddress,
        message as string
      ) as Promise<`0x${string}`>;
    },
    async signTransaction<
      TTransactionSerializable extends TransactionSerializable
    >(
      transaction: TTransactionSerializable,
      args?: { serializer?: SerializeTransactionFn<TTransactionSerializable> }
    ): Promise<Hex> {
      const serializer = args?.serializer || serializeTransaction;
      return sdk.signTransaction(
        ethereumAddress,
        serializer(transaction)
      ) as Promise<`0x${string}`>;
    },
    signTypedData: function (
      typedData: TypedDataDefinition | { [key: string]: unknown }
    ): Promise<Hex> {
      return sdk.signTypedData(
        ethereumAddress,
        typedData.domain as TypedDataDomain,
        typedData.types as Record<string, TypedDataField[]>,
        typedData.message as Record<string, string> // Type assertion
      ) as Promise<`0x${string}`>;
    },
  }) as LocalAccount;
}

/**
 * Represents a MoonAccount type which is the resolved type of the promise returned by the createMoonAccount function.
 */
export type MoonAccount = Awaited<ReturnType<typeof createMoonAccount>>;
