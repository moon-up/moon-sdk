import { MoonProvider, MoonProviderOptions } from '@moonup/ethers';
import { MoonAccount } from '@moonup/moon-types';
import { providers } from 'ethers';
import {
  ProviderRpcError,
  UserRejectedRequestError,
  createWalletClient,
  custom,
} from 'viem';
import { Address, Chain, Connector, ConnectorData } from 'wagmi';

export interface MoonConnectorOptions {
  chains?: Chain[];
  options: MoonProviderOptions;
}

export class MoonConnector extends Connector<
  MoonProvider,
  MoonProviderOptions
> {
  id = 'moon';
  name = 'Moon';
  ready = true;

  override options: MoonProviderOptions;
  provider: MoonProvider;

  constructor({ chains, options }: MoonConnectorOptions) {
    super({ chains, options });
    this.options = options;
    this.provider = new MoonProvider(options);
  }

  public get MoonAccount() {
    return this.getMoonAccount();
  }

  async connect(): Promise<Required<ConnectorData>> {
    let _account: MoonAccount;
    try {
      this?.emit('message', { type: 'connecting' });
      _account = await this.provider.connect();
    } catch (error) {
      if (/user rejected/i.test((error as ProviderRpcError)?.message)) {
        throw new UserRejectedRequestError(error as Error);
      }
      throw error;
    }

    const chianId = this.provider.getChainId();
    const address = _account.getWallet() as Address;

    return {
      account: address,
      chain: {
        id: chianId,
        unsupported: false,
      },
    };
  }

  async disconnect(): Promise<void> {
    await this.provider.disconnect();
  }

  async getWalletClient({
    chainId,
  }: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { chainId?: number } = {}): Promise<any> {
    const [provider, account] = await Promise.all([
      this.getProvider(),
      this.getAccount(),
    ]);
    const chain = this.chains.find((x) => x.id === chainId);
    if (!provider || !account || !chain)
      throw new Error('provider, account and chain are required.');

    return createWalletClient({
      account: {
        address: account,
        type: 'json-rpc',
      },
      chain,
      transport: custom(provider),
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async getAccount(): Promise<any> {
    return Promise.resolve(this.MoonAccount?.wallet || '');
  }

  async getChainId(): Promise<number> {
    return Promise.resolve(this.provider.getChainId());
  }

  async getProvider() {
    return Promise.resolve(this.provider);
  }

  async getSigner() {
    const chainId = await this.getChainId();
    const account = await this.getAccount();
    return Promise.resolve(
      new providers.Web3Provider(this.provider, chainId).getSigner(account)
    );
  }

  override async switchChain(chainId: number): Promise<Chain> {
    await this.provider?.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: `0x${chainId.toString(16)}` }],
    });
    this?.emit('change', { chain: { id: chainId, unsupported: false } });
    return { id: chainId } as Chain;
  }

  async isAuthorized(): Promise<boolean> {
    return Promise.resolve(!!sessionStorage.getItem('UP-A'));
  }

  protected onAccountsChanged(accounts: string[]) {
    return { account: accounts[0] };
  }

  protected onChainChanged(chain: number): void {
    this.provider?.events?.emit('chainChanged', chain);
    this?.emit('change', { chain: { id: chain, unsupported: true } });
  }

  protected onDisconnect() {
    this?.emit('disconnect');
  }

  private getMoonAccount(): MoonAccount | undefined {
    try {
      const sessionAccount = sessionStorage.getItem('UP-A');
      const localAccount = localStorage.getItem('UP-A');
      if (sessionAccount) return JSON.parse(sessionAccount);
      if (localAccount) return JSON.parse(localAccount);
    } catch {
      return;
    }
    return;
  }
}
