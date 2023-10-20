import { Provider } from '@ethersproject/abstract-provider';
import { JsonRpcProvider } from '@ethersproject/providers';
import { MoonSDK } from '@moonup/moon-sdk/src/moon';
import { MoonAccount } from '@moonup/types/src/types';
import {
	IEthereumProvider,
	ProviderAccounts,
	ProviderRpcError,
	RequestArguments,
} from 'eip1193-provider';
import { EventEmitter } from 'events';
import { MoonSigner } from './signer';
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
			default:
				throw this._createRpcError(4200, 'Unsupported Method');
		}
	}

	// private async _sendTransaction(args: any) {
	// 	console.log('Moon::_sendTransaction', args);
	// 	const tx = args?.params[0] as TransactionRequest;
	// 	return this.send(tx);
	// }

	// async getBlockNumber(): Promise<number> {
	// 	let res = await this._provider.getBlockNumber();
	// 	console.log('Moon::getBlockNumber', res);
	// 	return res;
	// }
	// async getBlockByBlockNumber(args: any): Promise<null | Block> {
	// 	if (args?.params[0] && args?.params[1]) {
	// 		let res = await this._provider.getBlock(args?.params[0], args?.params[1]);
	// 		console.log('Moon::getBlockByBlockNumber', res);
	// 		return res;
	// 	}
	// 	return null;
	// }

	// async getNetwork(): Promise<Network> {
	// 	return this._provider.getNetwork();
	// }

	// async getTransaction(
	// 	hash: string
	// ): Promise<ethers.TransactionResponse | null> {
	// 	return this._provider.getTransaction(hash);
	// }

	// async _estimateGas(args: any): Promise<bigint> {
	// 	let txRequest = args?.params[0] as TransactionRequest;
	// 	return this.estimateGas(txRequest);
	// }

	// async estimateGas(txRequest: TransactionRequest): Promise<bigint> {
	// 	console.log('Moon::estimateGas', txRequest);
	// 	return this._provider.estimateGas(txRequest);
	// }

	// async getGasPrice(): Promise<bigint | null> {
	// 	let feeData = await this._provider.getFeeData();
	// 	return feeData.gasPrice;
	// }
	// async getFeeData(): Promise<ethers.FeeData> {
	// 	console.log('Moon::getFeeData...');
	// 	let feeData = await this._provider.getFeeData();
	// 	console.log('Moon::getFeeData', feeData);
	// 	return feeData;
	// }

	// async getTransactionCount(
	// 	addressOrName: ethers.AddressLike,
	// 	blockTag?: ethers.BlockTag
	// ): Promise<number> {
	// 	return this._provider.getTransactionCount(addressOrName, blockTag);
	// }

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

	async getBalance(args: RequestArguments): Promise<any> {
		console.log(args);
		const balance = await this.provider.getBalance(this.account?.wallet || '');
		return balance;
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
		return new MoonSigner(this.provider, this.config.MoonSDKConfig);
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
