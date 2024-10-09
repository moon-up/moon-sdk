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

export interface MoonAccountOptions {
  sdk: MoonSDK;
  ethereumAddress: string;
}

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

export type MoonAccount = Awaited<ReturnType<typeof createMoonAccount>>;
