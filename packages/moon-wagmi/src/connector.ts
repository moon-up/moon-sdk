import { MoonProvider, MoonProviderOptions, MoonSigner } from '@moonup/ethers';
import { MoonSDK } from '@moonup/moon-sdk';
import { Signer } from 'ethers';
import {
  ProviderRpcError,
  UserRejectedRequestError,
  createWalletClient,
  custom,
} from 'viem';
import { Address, Chain, Connector, ConnectorData } from 'wagmi';

export interface MoonConnectorOptions {
  chains?: Chain[];
  SDK: MoonSDK;
  address: string;
  chainId: number;
}

export class MoonConnector extends Connector<
  MoonProvider,
  MoonProviderOptions
> {
  id = 'moon';
  name = 'Moon';
  ready = true;

  config: MoonProviderOptions;
  provider: MoonProvider;

  constructor({ chains, SDK, address, chainId }: MoonConnectorOptions) {
    super({ chains, options: { chainId, SDK, address } });
    this.config = { SDK, address, chainId };
    this.provider = new MoonProvider(this.config);
  }
  async connect(): Promise<Required<ConnectorData>> {
    let _account: string;
    try {
      this?.emit('message', { type: 'connecting' });
      _account = await this.provider.address;
    } catch (error) {
      if (/user rejected/i.test((error as ProviderRpcError)?.message)) {
        throw new UserRejectedRequestError(error as Error);
      }
      throw error;
    }

    const chianId = this.provider.getChainId();
    const address = _account as Address;

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
    return Promise.resolve(this.config.address);
  }

  async getChainId(): Promise<number> {
    return Promise.resolve(this.provider.getChainId());
  }

  async getProvider() {
    return Promise.resolve(this.provider);
  }

  async getSigner() {
    const chainId = (await this.getChainId()).toString(16);
    const account = await this.getAccount();
    return Promise.resolve(
      new MoonSigner({
        chainId,
        SDK: this.config.SDK,
        address: account,
      }).connect(this.provider) as Signer
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
    return Promise.resolve(!!this.options.SDK.isAuthenticated);
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

  public updateconfig(options: MoonProviderOptions) {
    this.config = options;
    this.provider?.updateConfig(options);
  }
}
