import { Provider } from '@ethersproject/abstract-provider';
import { JsonRpcProvider } from '@ethersproject/providers';
import { MoonSDK } from '@moonup/moon-sdk';
import { MoonAccount } from '@moonup/moon-types';
import {
  IEthereumProvider,
  ProviderAccounts,
  ProviderRpcError,
  RequestArguments,
} from 'eip1193-provider';
import { EventEmitter } from 'events';
import { MoonProviderOptions } from './types';

export class MoonProvider implements IEthereumProvider {
  private account?: MoonAccount = undefined;
  private MoonSDK: MoonSDK;

  public events: EventEmitter = new EventEmitter();
  public chainId: number;
  public isMetaMask: boolean;
  public readonly provider: Provider;
  public readonly config: MoonProviderOptions;

  constructor(options: MoonProviderOptions) {
    // super();
    this.chainId = options.chainId;
    this.config = options;
    this.isMetaMask = false;
    this.MoonSDK = new MoonSDK(options.MoonSDKConfig);
    this.provider = new JsonRpcProvider(options.rpcUrl);
  }

  public async request(args: RequestArguments): Promise<any> {
    console.log('Moon::args', args);
    switch (args.method) {
      case 'eth_requestAccounts':
        return await this._requestAccounts(args);
      case 'eth_getBalance':
        return await this.getBalance(args);
      case 'eth_accounts':
        return await this.MoonSDK.getAccounts();
      case 'eth_chainId':
        return this.getChainId();
      case 'wallet_switchEthereumChain':
        return this.switchChain(args);
      // case 'eth_signTypedData':
      // 	return this.getSigner().signTypedData(args);
      // case 'eth_signTransaction':
      // 	return this.getSigner().signTransaction(args);
      // case 'personal_sign':
      // 	return this.getSigner().signPersonalMessage(args);
      // case 'eth_sendTransaction':
      // 	return this.getSigner().sendTransaction(args);
      // case 'wallet_addEthereumChain':
      // 	return this.addChain(args);
      // case 'eth_call':
      // 	return this._call(args);
      // case 'eth_sendTransaction':
      // 	return this._sendTransaction(args);
      // case 'eth_blockNumber':
      // 	return this.getBlockNumber();
      // case 'eth_getBlockByNumber':
      // 	return this.getBlockByBlockNumber(args);
      // case 'eth_gasPrice':
      // 	return this.getGasPrice();
      // case 'eth_estimateGas':
      // 	return this._estimateGas(args);
      default:
        throw this._createRpcError(4200, 'Unsupported Method');
    }
  }

  switchChain(args: RequestArguments): void {
    const _params =
      args?.params && Array.isArray(args?.params) && args?.params[0]
        ? args?.params[0]
        : undefined;
    const chainId =
      typeof _params?.chainId === 'string' && _params?.chainId?.startsWith('0x')
        ? parseInt(_params?.chainId, 16)
        : _params?.chainId;

    this.MoonSDK.setCurrentNetwork(chainId);
    // this.provider.new
    this.chainId = chainId;
    this.events.emit('chainChanged', _params?.chainId);
  }
  async _requestAccounts(args: RequestArguments): Promise<any> {
    console.log(args);
    if (this.account) {
      await this.connect();
    }
    const accounts = await this.MoonSDK.getAccounts();

    return accounts.keys;
  }
  private _createRpcError(code: number, message: string): ProviderRpcError {
    return {
      name: 'ProviderRpcError',
      message,
      code,
      data: undefined,
    };
  }

  public async connect() {
    const account = await this.MoonSDK.connect();
    this.account = account;
    this.events.emit('connect', account);
    return account;
  }

  public async disconnect(): Promise<void> {
    await this.MoonSDK.disconnect();
    this.events.emit('disconnect');
    this.account = undefined;
  }

  public sendAsync(
    args: RequestArguments,
    callback: (error: Error | null, response: any) => void
  ): void {
    this.request(args)
      .then(response => callback(null, response))
      .catch(error => callback(error, undefined));
  }

  public async enable(): Promise<ProviderAccounts> {
    const account = await this.request({ method: 'eth_requestAccounts' });
    return [account?.address || ''];
  }

  public isMoonProvider(): boolean {
    return true;
  }

  public isConnected(): boolean {
    return !!this.account;
  }

  public getChainId(): number {
    return this.chainId;
  }

  //   getSigner(addressOrIndex?: string | number | undefined): JsonRpcSigner {
  //     return new MoonSigner(
  //       this.provider,
  //       this.config.MoonSDKConfig
  //     ) as JsonRpcSigner;
  //   }

  on(event: string, listener: any): void {
    this.events.on(event, listener);
  }

  once(event: string, listener: any): void {
    this.events.once(event, listener);
  }

  removeListener(event: string, listener: any): void {
    this.events.removeListener(event, listener);
  }

  off(event: string, listener: any): void {
    this.events.off(event, listener);
  }
}
