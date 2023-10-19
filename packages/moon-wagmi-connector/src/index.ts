import {
	UniPassProvider,
	UniPassProviderOptions,
} from '@unipasswallet/ethereum-provider';
import { UPAccount } from '@unipasswallet/popup-types';
import { providers } from 'ethers';
import {
	ProviderRpcError,
	UserRejectedRequestError,
	createWalletClient,
	custom,
} from 'viem';
import { Address, Chain, Connector, WalletClient } from 'wagmi';

interface UniPassConnectorOptions {
	chains?: Chain[];
	options: UniPassProviderOptions;
}

export class UniPassConnector extends Connector<
	UniPassProvider,
	UniPassProviderOptions
> {
	id = 'unipass';
	name = 'UniPass';
	ready = true;

	options: UniPassProviderOptions;
	provider: UniPassProvider;

	constructor({ chains, options }: UniPassConnectorOptions) {
		super({ chains, options });
		this.options = options;
		this.provider = new UniPassProvider(options);
	}

	public get upAccount() {
		return this.getUpAccount();
	}

	async connect() {
		let _account: any;
		try {
			// @ts-ignore-next-line
			this?.emit('message', { type: 'connecting' });
			_account = await this.provider.connect();
		} catch (error) {
			if (/user rejected/i.test((error as ProviderRpcError)?.message)) {
				throw new UserRejectedRequestError(error as Error);
			}
			throw error;
		}

		const chianId = this.provider.getChainId();
		const address = _account.address as Address;

		return {
			account: address,
			chain: {
				id: chianId,
				unsupported: false,
			},
			provider: new providers.Web3Provider(this.provider, 'any'),
		};
	}

	async disconnect(): Promise<void> {
		await this.provider.disconnect();
	}

	async getWalletClient(): Promise<WalletClient> {
		const [provider, account] = await Promise.all([
			this.getProvider(),
			this.getAccount(),
		]);
		const chainId = await this.getChainId();
		const chain = this.chains.find((x) => x.id === chainId);
		if (!provider || !account) throw new Error('provider is required.');

		return createWalletClient({
			account: account as `0x${any}`,
			chain,
			transport: custom(provider),
		});
	}

	async getAccount(): Promise<any> {
		return Promise.resolve(this.upAccount?.address || '');
	}

	async getChainId(): Promise<number> {
		return Promise.resolve(this.provider.getChainId());
	}

	async getProvider(): Promise<UniPassProvider> {
		return Promise.resolve(this.provider);
	}

	async getSigner(): Promise<any> {
		const chainId = await this.getChainId();
		const account = await this.getAccount();
		return Promise.resolve(
			new providers.Web3Provider(this.provider, chainId).getSigner(account)
		);
	}

	async switchChain(chainId: number): Promise<Chain> {
		await this.provider?.request({
			method: 'wallet_switchEthereumChain',
			params: [{ chainId: `0x${chainId.toString(16)}` }],
		});
		// @ts-ignore-next-line
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
		// @ts-ignore-next-line
		this?.emit('change', { chain: { id: chain, unsupported: true } });
	}

	protected onDisconnect() {
		// @ts-ignore-next-line
		this?.emit('disconnect');
	}

	private getUpAccount(): UPAccount | undefined {
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
