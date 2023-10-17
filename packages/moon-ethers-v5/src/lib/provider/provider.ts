import {
	IEthereumProvider,
	ProviderAccounts,
	ProviderInfo,
	ProviderMessage,
	ProviderRpcError,
	RequestArguments,
} from 'eip1193-provider';
import { EventEmitter } from 'events';
export class MoonProvider implements IEthereumProvider {
	public events: EventEmitter = new EventEmitter();
	public chainId: number;
	public readonly signer: JsonRpcProvider;
	constructor(chainId: number) {
		this.chainId = chainId;
	}
	enable(): Promise<ProviderAccounts> {
		throw new Error('Method not implemented.');
	}
	on(event: 'connect', listener: (info: ProviderInfo) => void): void;
	on(event: 'disconnect', listener: (error: ProviderRpcError) => void): void;
	on(event: 'message', listener: (message: ProviderMessage) => void): void;
	on(event: 'chainChanged', listener: (chainId: string) => void): void;
	on(
		event: 'accountsChanged',
		listener: (accounts: ProviderAccounts) => void
	): void;
	on(event: unknown, listener: unknown): void {
		throw new Error('Method not implemented.');
	}
	request(args: RequestArguments): Promise<unknown> {
		throw new Error('Method not implemented.');
	}
	once(event: string, listener: any): void {
		throw new Error('Method not implemented.');
	}
	removeListener(event: string, listener: any): void {
		throw new Error('Method not implemented.');
	}
	off(event: string, listener: any): void {
		throw new Error('Method not implemented.');
	}
}
