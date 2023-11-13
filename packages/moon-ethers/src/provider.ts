import { MoonAccount } from '@moonup/moon-types';
import {
  IEthereumProvider,
  ProviderAccounts,
  RequestArguments,
} from 'eip1193-provider';
import { EventEmitter } from 'events';
import { JsonRpcProvider } from './json-rpc-provider';
import { MoonProviderOptions } from './types';
export class MoonProvider implements IEthereumProvider {
  private account?: MoonAccount = undefined;

  public events: EventEmitter = new EventEmitter();
  public chainId: number;
  public readonly signer: JsonRpcProvider;

  constructor(options: MoonProviderOptions) {
    this.chainId = options.chainId;
    this.signer = new JsonRpcProvider(this.chainId);
  }

  public async request(args: RequestArguments): Promise<any> {
    switch (args.method) {
      case 'eth_requestAccounts':
        const account = await this.connect();
        this.account = account;
        return (await this.signer.moonWallet.listAccounts()) || [];
      case 'eth_accounts':
        return this.signer.moonWallet.listAccounts() || [];
      case 'eth_chainId':
        return this.chainId;
      case 'wallet_switchEthereumChain':
        const _params =
          args?.params && Array.isArray(args?.params) && args?.params[0]
            ? args?.params[0]
            : undefined;
        const chainId =
          typeof _params?.chainId === 'string' &&
          _params?.chainId?.startsWith('0x')
            ? parseInt(_params?.chainId, 16)
            : _params?.chainId;

        this.signer.updateMoonWalletConfig(chainId);
        this.chainId = chainId;

        this.events.emit('chainChanged', _params?.chainId);
        return;
      default:
        break;
    }
    return await this.signer.request(args);
  }

  public async connect() {
    const account = await this.signer.connect();
    this.account = account;
    this.events.emit('connect', account);
    return account;
  }

  public async disconnect(): Promise<void> {
    await this.signer.disconnect();
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

  public getSigner() {
    return this.signer;
  }

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
