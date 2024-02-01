import { MoonSDK } from '@moonup/moon-sdk';
import { getRpcUrls } from '@moonup/moon-types';
import { RequestArguments } from 'eip1193-provider';
import { providers } from 'ethers';

import { MoonSigner } from './signer';
import { MoonProviderOptions } from './types';
import { getMessage, getSignTypedDataParamsData } from './utils';

export class JsonRpcProvider {
  public chainId: number;
  public http: providers.JsonRpcProvider;
  public sdk: MoonSDK;
  public signer: MoonSigner;
  public config: MoonProviderOptions;

  constructor(options: MoonProviderOptions) {
    this.config = options;
    this.chainId = options.chainId;

    const nodeRPC = getRpcUrls(this.chainId).pop() || '';
    this.sdk = options.SDK;
    this.http = new providers.JsonRpcProvider(nodeRPC);

    this.signer = new MoonSigner({
      SDK: this.sdk,
      address: options.address,
      chainId: this.chainId.toString(),
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async request(request: RequestArguments): Promise<any> {
    switch (request.method) {
      case 'eth_requestAccounts':
        // eslint-disable-next-line no-case-declarations
        const keys = await this.sdk.listAccounts();
        return keys.keys || [];
      case 'personal_sign':
        if (Array.isArray(request.params) && request.params.length > 0) {
          const message = getMessage(request?.params as string[]);
          const signedMessage = await this.signer.signMessage(message);
          return signedMessage;
        } else {
          throw new Error('request.params is undefined or not an array');
        }
      case 'eth_signTypedData':
        if (Array.isArray(request.params) && request.params.length > 0) {
          const typedData = getSignTypedDataParamsData(
            request?.params as string[]
          );

          const signedTypedData = await this.signer.signTypedData(
            typedData.domain,
            typedData.types,
            typedData.value
          );
          return signedTypedData || '';
        } else {
          throw new Error('request.params is undefined or not an array');
        }

      case 'eth_sendTransaction':
        // eslint-disable-next-line no-case-declarations
        const _params =
          request?.params &&
          Array.isArray(request?.params) &&
          request?.params[0]
            ? request?.params[0]
            : undefined;
        if (_params) {
          return await this.signer.sendTransaction(_params);
        }
        throw new Error('eth_sendTransaction error');
      default:
        return await this.http.send(
          request.method,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (request.params || []) as Array<any>
        );
    }
  }

  public updateConfig(options: MoonProviderOptions) {
    this.chainId = options.chainId;
    this.sdk = options.SDK;
    this.http = new providers.JsonRpcProvider(
      getRpcUrls(this.chainId).pop() || ''
    );
    this.signer.updateConfig({
      SDK: this.sdk,
      address: '',
      chainId: this.chainId.toString(),
    });
  }
}
