import { AccountResponse, Transaction as MoonAPITransaction } from '@moonup/moon-api';
import { MoonSDK } from '@moonup/moon-sdk';
import { AUTH, MOON_SESSION_KEY, Storage } from '@moonup/moon-types';
import { useEffect, useState } from 'react';

interface MoonSDKHook {
  moon: MoonSDK | null;
  initialize: () => Promise<void>;
  disconnect: () => Promise<void>;
  listAccounts: () => Promise<AccountResponse | undefined>;
  updateToken: (token: string) => Promise<void>;
  // signTransaction: (transaction: TransactionResponse) => Promise<Transaction>;
  // Add other methods as needed
}

export function useMoonSDK(): MoonSDKHook {
  const [moon, setMoon] = useState<MoonSDK | null>(null);

  const initialize = async () => {
    const moonInstance = new MoonSDK({
      Storage: {
        key: MOON_SESSION_KEY,
        type: Storage.SESSION,
      },
      Auth: {
        AuthType: AUTH.JWT,
      },
    });
    setMoon(moonInstance);
    moonInstance.login();
  };

  const disconnect = async () => {
    if (moon) {
      await moon.disconnect();
      setMoon(null);
    }
  };
  const listAccounts = async () => {
    if (moon) {
      return moon.listAccounts();
    }
  };
  const updateToken = async (token: string) => {
    if (moon) {
      return moon.updateToken(token);
    }
  };

  const signTransaction = async (wallet: string, transaction: any) => {
    if (!moon) {
      throw new Error('Moon SDK is not initialized');
    }
    const raw_tx = await moon
      .getAccountsSDK()
      .signTransaction(wallet, {
        to: '0x9D81122ED0283e80A655265ae2651aB4DF0F455',
        data: '',
        gasPrice: '1000000000',
        gas: '200000',
        nonce: '0',
        chain_id: '1891',
        encoding: 'hex',
        EOA: true,
        broadcast: true,
      })
      .then((res) => {
        return (res.data.data as MoonAPITransaction).raw_transaction;
      });
    const tx = await moon.getAccountsSDK().broadcastTx(wallet, {
      chainId: '1891',
      rawTransaction: raw_tx || '',
    });
  };

  // Add other methods as needed

  useEffect(() => {
    initialize();
  }, []);

  return {
    moon,
    initialize,
    disconnect,
    listAccounts,
    updateToken,
    // Add other methods as needed
  };
}
