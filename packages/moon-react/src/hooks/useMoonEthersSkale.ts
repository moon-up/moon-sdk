import { MoonProvider, MoonProviderOptions } from '@moonup/ethers';
import { MoonSDK } from '@moonup/moon-sdk';
import BN from 'bn.js';
import * as crypto from 'crypto';
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
  mineForGas: (contractAddress: string, address: string) => Promise<string>;
}

export function useMoonSkaleEthers(): MoonSkaleEthersHook {
  const [moonProvider, setMoonProvider] = useState<MoonProvider | null>(null);
  const [moon, setMoon] = useState<MoonSDK | null>(null);
  const initializeMoonSDK = async () => {
    const moonInstance = new MoonSDK();
    setMoon(moonInstance);
  };

  const initialize = async () => {
    const moonInstance = new MoonSDK();
    setMoon(moonInstance);
    moonInstance.connect();
    const options: MoonProviderOptions = {
      chainId: 1,
      address: '0x',
      SDK: moonInstance,
    };
    const moonProviderInstance = new MoonProvider(options);
    setMoonProvider(moonProviderInstance);
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

  const mineForGas = async (
    contractAddress: string,
    address: string
  ): Promise<string> => {
    if (!moonProvider) {
      throw new Error('Moon Provider is not initialized');
    }
    if (!moon) {
      throw new Error('Moon SDK is not initialized');
    }

    const wallet = address;
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
    const signedTx: string = await moon.SignTransaction(wallet, tx);

    // Send the signed transaction
    const hash = await moonProvider.sendTransaction(signedTx);
    return hash.hash;
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
