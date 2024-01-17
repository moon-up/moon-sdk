import { MoonProvider, MoonProviderOptions } from '@moonup/ethers';
import { Transaction as MoonAPITransaction } from '@moonup/moon-api';
import { MoonSDK } from '@moonup/moon-sdk';
import { AUTH, MOON_SESSION_KEY, Storage } from '@moonup/moon-types';
import BN from 'bn.js';
import crypto from 'crypto';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

const DIFFICULTY = new BN(1);

interface Transaction {
  from?: string;
  nonce?: ethers.BigNumberish;
  gasLimit?: ethers.BigNumberish;
  gasPrice?: ethers.BigNumberish;
}

async function mineGasForTransaction(
  provider: ethers.providers.Provider,
  tx: Transaction
) {
  if (tx.from === undefined || tx.nonce === undefined) {
    throw new Error('Not enough fields for mining gas (from, nonce)');
  }
  if (!tx.gasLimit) {
    tx.gasLimit = await provider.estimateGas(tx);
  }
  const address = tx.from;
  const nonce = ethers.BigNumber.from(tx.nonce).toNumber();
  const gas = ethers.BigNumber.from(tx.gasLimit).toNumber();
  tx.gasPrice = mineFreeGas(gas, address, nonce);
}

function mineFreeGas(
  gasAmount: number,
  address: string,
  nonce: number
): string {
  console.log('Mining free gas: ', gasAmount);
  const nonceHash = new BN(
    ethers.utils.solidityKeccak256(['uint256'], [nonce]).slice(2),
    16
  );
  const addressHash = new BN(
    ethers.utils.solidityKeccak256(['address'], [address]).slice(2),
    16
  );
  const nonceAddressXOR = nonceHash.xor(addressHash);
  const maxNumber = new BN(2).pow(new BN(256)).sub(new BN(1));
  const divConstant = maxNumber.div(DIFFICULTY);
  let candidate: BN;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    candidate = new BN(crypto.randomBytes(32).toString('hex'), 16);
    const candidateHash = new BN(
      ethers.utils
        .solidityKeccak256(['uint256'], [candidate.toString()])
        .slice(2),
      16
    );
    const resultHash = nonceAddressXOR.xor(candidateHash);
    const externalGas = divConstant.div(resultHash).toNumber();
    if (externalGas >= gasAmount) {
      break;
    }
  }
  return candidate.toString();
}

export interface MoonSkaleEthersHook {
  moonProvider: MoonProvider | null;
  moon: MoonSDK | null;
  initialize: () => Promise<void>;
  disconnect: () => Promise<void>;
  mineForGas: (contractAddress: string) => Promise<string>;
}

export function useMoonSkaleEthers(): MoonSkaleEthersHook {
  const [moonProvider, setMoonProvider] = useState<MoonProvider | null>(null);
  const [moon, setMoon] = useState<MoonSDK | null>(null);
  const initializeMoonSDK = async () => {
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
    moonInstance.connect();
  };

  const initialize = async () => {
    const options: MoonProviderOptions = {
      chainId: 1,
      MoonSDKConfig: {
        Storage: {
          key: MOON_SESSION_KEY,
          type: Storage.SESSION,
        },
        Auth: {
          AuthType: AUTH.JWT,
        },
      },
    };

    const moonInstance = new MoonProvider(options);
    setMoonProvider(moonInstance);
  };

  const disconnect = async () => {
    if (moonProvider) {
      await moonProvider.disconnect();
      setMoonProvider(null);
    }
    if (moon) {
      await moon.disconnect();
      setMoon(null);
    }
  };

  const mineForGas = async (contractAddress: string): Promise<string> => {
    if (!moonProvider) {
      throw new Error('Moon Provider is not initialized');
    }
    if (!moon) {
      throw new Error('Moon SDK is not initialized');
    }

    const wallet = moon?.getMoonAccount().getWallet() || '';
    const nonce = await moonProvider.getTransactionCount(wallet);
    const tx = {
      from: wallet,
      to: contractAddress,
      data: ethers.utils.hexZeroPad(wallet, 32), // assuming userAccount is an array of addresses
      nonce: nonce.toString(),
    };

    // Use PoW from skale-miner.js and send transaction
    // Note: mineGasForTransaction is not a standard function and is not provided by ethers.js or MoonProvider
    // You need to implement it yourself or import it from 'skale-miner.js'
    await mineGasForTransaction(moonProvider, tx);

    // Sign and send the transaction with the session key
    const signedTx: string =
      (await moon
        .getAccountsSDK()
        .signTransaction(wallet, tx)
        .then((signedTx) => {
          return (signedTx.data.data as MoonAPITransaction).raw_transaction;
        })) || '';

    // Send the signed transaction
    const hash =
      (await moonProvider.sendTransaction(signedTx).then((tx) => {
        return tx.hash;
      })) || '';
    return hash;
  };

  useEffect(() => {
    initialize();
    initializeMoonSDK();
  }, []);

  return {
    moonProvider,
    moon,
    initialize,
    disconnect,
    mineForGas,
    // Add other methods as needed
  };
}
