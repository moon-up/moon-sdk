import { RequestArguments } from 'eip1193-provider';
import { providers } from 'ethers';

import { MoonSDK } from '@moonup/moon-sdk';

import { AccountResponse, Transaction } from '@moonup/moon-api';
import {
  AUTH,
  MOON_SESSION_KEY,
  MoonAccount,
  Storage,
  getChain,
  getRpcUrls,
} from '@moonup/moon-types';
import { getMessage, getSignTypedDataParamsData } from './utils';

export class JsonRpcProvider {
  public chainId: number;
  public http: providers.JsonRpcProvider;
  public readonly moonWallet: MoonSDK;

  constructor(chainId: number) {
    this.chainId = chainId;

    const nodeRPC = getRpcUrls(chainId).pop() || '';

    this.moonWallet = new MoonSDK({
      Storage: {
        key: MOON_SESSION_KEY,
        type: Storage.SESSION,
      },
      Auth: {
        AuthType: AUTH.JWT,
      },
    });

    this.http = new providers.JsonRpcProvider(nodeRPC);
  }

  public async connect(): Promise<MoonAccount> {
    const account = this.moonWallet.getMoonAccount();
    if (account) return account;
    return await this.moonWallet.connect();
  }

  public async disconnect() {
    await this.moonWallet.logout();
  }

  public async request(request: RequestArguments): Promise<any> {
    switch (request.method) {
      case 'eth_requestAccounts':
        const keys = (await this.moonWallet.listAccounts()) as AccountResponse;
        return keys.keys || [];
      case 'personal_sign':
        if (Array.isArray(request.params) && request.params.length > 0) {
          const message = getMessage(request?.params as string[]);
          const signedMessage = (await this.moonWallet.SignMessage(
            message
          )) as Transaction;
          return signedMessage.signed_message || '';
        } else {
          throw new Error('request.params is undefined or not an array');
        }
      case 'eth_signTypedData':
        if (Array.isArray(request.params) && request.params.length > 0) {
          const typedData = getSignTypedDataParamsData(
            request?.params as string[]
          );
          const signedTypedData = (await this.moonWallet.SignTypedData(
            typedData.domain,
            typedData.types,
            typedData.value
          )) as Transaction;
          return signedTypedData.signed_message || '';
        } else {
          throw new Error('request.params is undefined or not an array');
        }

      case 'eth_sendTransaction':
        const _params =
          request?.params &&
          Array.isArray(request?.params) &&
          request?.params[0]
            ? request?.params[0]
            : undefined;
        if (_params) {
          return await this.moonWallet.SendTransaction(_params);
        }
        throw new Error('eth_sendTransaction error');
      default:
        return await this.http.send(
          request.method,
          (request.params || []) as Array<any>
        );
    }
  }

  public updateMoonWalletConfig = (chainId: number) => {
    this.chainId = chainId;
    const chain = getChain(chainId);
    if (chain) {
      this.moonWallet.updateNetwork(chain);
      this.http = new providers.JsonRpcProvider(chain.rpcUrls.pop() || '');
    } else {
      throw new Error('Chain is undefined');
    }
  };
}
