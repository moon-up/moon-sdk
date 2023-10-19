import { Provider } from '@ethersproject/abstract-provider';
import { JsonRpcProvider } from '@ethersproject/providers';
import { MoonSDK } from '@moon/moon-sdk/src/moon';
import { MoonAccount } from '@moon/types/src/types';
import {
	IEthereumProvider,
	ProviderAccounts,
	RequestArguments,
} from 'eip1193-provider';
import { EventEmitter } from 'events';
import { MoonProviderOptions } from './types';

export class MoonProvider implements IEthereumProvider {
	private account?: MoonAccount = undefined;
	private MoonSDK: MoonSDK;

	public events: EventEmitter = new EventEmitter();
	public chainId: number;
	public readonly provider: Provider;

	constructor(options: MoonProviderOptions) {
		this.chainId = options.chainId;
		this.MoonSDK = new MoonSDK(options.MoonSDKConfig);
		this.provider = new JsonRpcProvider(options.rpcUrl);
	}

	public async request(args: RequestArguments): Promise<any> {
		console.log('Moon::args', args);
		switch (
			args.method
			// case 'eth_requestAccounts':
			// 	return await this._requestAccounts(args);
			// case 'eth_getBalance':
			// 	return await this.getBalance(args);
			// case 'eth_accounts':
			// 	return await this._accounts;
			// case 'eth_chainId':
			// 	return this._chain.chainId;
			// case 'wallet_switchEthereumChain':
			// 	return this.switchChain(args);
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
			// default:
			// 	throw this._createRpcError(4200, 'Unsupported Method');
		) {
		}
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
			.then((response) => callback(null, response))
			.catch((error) => callback(error, undefined));
	}

	public async enable(): Promise<ProviderAccounts> {
		const account = await this.request({ method: 'eth_requestAccounts' });
		return [account?.address || ''];
	}

	public isUniPassProvider(): boolean {
		return true;
	}

	public isConnected(): boolean {
		return !!this.account;
	}

	public getChainId(): number {
		return this.chainId;
	}

	public getSigner() {
		return this.MoonSDK;
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
