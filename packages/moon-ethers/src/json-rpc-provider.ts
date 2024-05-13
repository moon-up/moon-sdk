import { arrayify } from '@ethersproject/bytes';
import { hashMessage } from '@ethersproject/hash';
import { MoonSDK } from '@moonup/moon-sdk';
import { RequestArguments } from 'eip1193-provider';
import { providers } from 'ethers';

import { MoonSigner } from './signer';
import { MoonProviderOptions } from './types';
import { getMessage, getSignTypedDataParamsData } from './utils';

export class JsonRpcProvider {
  private chainId: number;
  private http: providers.JsonRpcProvider;
  private sdk: MoonSDK;
  private signer: MoonSigner;
  private config: MoonProviderOptions;
  private address: string;

  constructor(options: MoonProviderOptions) {
    this.config = options;
    this.chainId = options.chainId;
    this.address = options.address ?? '';

    this.sdk = options.SDK;
    this.http = new providers.JsonRpcProvider();
    this.setup();
    this.signer = new MoonSigner({
      SDK: this.sdk,
      address: options.address ?? '', // Provide a default value for the address property
      chainId: this.chainId,
    });
  }
  private async setup() {
    const chain = await this.sdk.getChainById(this.chainId.toString());
    const rpcUrls = chain.rpc_urls as string[];
    this.http = new providers.JsonRpcProvider(rpcUrls[0]);
  }

  public getChainId(): number {
    return this.chainId;
  }

  public setChainId(chainId: number): void {
    this.chainId = chainId;
  }

  public getProvider(): providers.JsonRpcProvider {
    return this.http;
  }
  public setProvider(provider: providers.JsonRpcProvider): void {
    this.http = provider;
  }

  public getSigner(): MoonSigner {
    return this.signer;
  }

  public setSigner(signer: MoonSigner): void {
    this.signer = signer;
  }

  public getSDK(): MoonSDK {
    return this.sdk;
  }

  public setSDK(sdk: MoonSDK): void {
    this.sdk = sdk;
  }

  public getConfig(): MoonProviderOptions {
    return this.config;
  }

  public setConfig(config: MoonProviderOptions): void {
    this.config = config;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async request<ResponseType>(
    request: RequestArguments
  ): Promise<ResponseType> {
    switch (request.method) {
      case 'eth_requestAccounts':
        // eslint-disable-next-line no-case-declarations
        const keys = await this.sdk.listAccounts();
        return keys as ResponseType;
      case 'personal_sign':
        if (Array.isArray(request.params) && request.params.length > 0) {
          const message = getMessage(request?.params as string[]);
          const hash = new Uint8Array(arrayify(hashMessage(message)));
          const response = await this.sdk.SignMessage(
            this.address,
            hash.toString()
          );
          return response as ResponseType;
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
          return signedTypedData as ResponseType;
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
          return (await this.signer.sendTransaction(_params)) as ResponseType;
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

  public async updateConfig(options: MoonProviderOptions) {
    this.chainId = options.chainId;
    const chain = await this.sdk.getChainById(this.chainId.toString());
    const rpcUrls = chain.rpc_urls as string[];
    this.http = new providers.JsonRpcProvider(rpcUrls.at(0));
    this.address = options.address ?? '';

    this.config = options;
    // check if address has changed
    this.signer = new MoonSigner({
      SDK: this.sdk,
      address: options.address ?? '', // Provide a default value for the address property
      chainId: this.chainId,
    });
    //   SDK: this.sdk,
    //   address: options.address ?? '',
    //   chainId: this.chainId,
    // });
  }
}
