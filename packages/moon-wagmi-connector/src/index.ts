import { CoolWalletOptions, CoolWalletProvider } from 'cool-wallet-sdk';
import { Address, Chain, Connector, ConnectorData, WalletClient } from 'wagmi';

export class CoolWalletConnector extends Connector<
	CoolWalletProvider,
	CoolWalletOptions
> {
	readonly id = 'coolWallet';
	readonly name = 'Cool Wallet';
	readonly ready = true;

	#provider?: CoolWalletProvider;

	constructor(config: { chains?: Chain[]; options: CoolWalletOptions }) {
		super(config);
	}
	connect(
		config?: { chainId?: number | undefined } | undefined
	): Promise<Required<ConnectorData>> {
		throw new Error('Method not implemented.');
	}

	disconnect(): Promise<void> {
		throw new Error('Method not implemented.');
	}

	getAccount(): Promise<Address> {
		throw new Error('Method not implemented.');
	}
	getChainId(): Promise<number> {
		throw new Error('Method not implemented.');
	}
	async getProvider() {
		if (!this.#provider) {
			this.#provider = new CoolWalletProvider(this.options);
		}
		return this.#provider;
	}

	getWalletClient(
		config?: { chainId?: number | undefined } | undefined
	): Promise<WalletClient> {
		throw new Error('Method not implemented.');
	}

	isAuthorized(): Promise<boolean> {
		throw new Error('Method not implemented.');
	}

	switchChain?(chainId: number): Promise<Chain> {
		throw new Error('Method not implemented.');
	}

	watchAsset(asset: {
		address: string;
		decimals?: number | undefined;
		image?: string | undefined;
		symbol: string;
	}): Promise<boolean> {
		throw new Error('Method not implemented.');
	}

	protected onAccountsChanged(accounts: `0x${string}`[]): void {
		throw new Error('Method not implemented.');
	}

	protected onChainChanged(chain: string | number): void {
		throw new Error('Method not implemented.');
	}
	protected onDisconnect(error: Error): void {
		throw new Error('Method not implemented.');
	}
	protected getBlockExplorerUrls(chain: Chain): string[] | undefined {
		throw new Error('Method not implemented.');
	}
	protected isChainUnsupported(chainId: number): boolean {
		throw new Error('Method not implemented.');
	}
}
