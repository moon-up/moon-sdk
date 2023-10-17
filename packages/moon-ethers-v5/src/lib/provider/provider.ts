import { Block, JsonRpcProvider, TransactionRequest, ethers } from 'ethers';
import { EventEmitter } from 'events';
import { VAULT_URL } from '../hooks/Wallet/config';
import { Accounts } from '../lib/api/moon/Accounts';
import { AccountResponse } from '../lib/api/moon/data-contracts';
import { ApiConfig } from '../lib/api/moon/http-client';
import { Chain, chains } from './config/chains';
import { MoonSigner } from './signer';

interface RequestArguments {
	readonly method: string;
	readonly params?: readonly unknown[] | object;
}

interface ProviderRpcError extends Error {
	code: number;
	data?: unknown;
}

interface ProviderMessage {
	readonly type: string;
	readonly data: unknown;
}

interface ProviderConnectInfo {
	readonly chainId: string;
}

interface EthSubscription extends ProviderMessage {
	readonly type: 'eth_subscription';
	readonly data: {
		readonly subscription: string;
		readonly result: unknown;
	};
}

interface SwitchEthereumChainParams {
	chainId: string;
}
class RateLimitedProvider {
	private _provider: any;
	private queue: Array<{
		txRequest: TransactionRequest;
		resolve: (value: any) => void;
		reject: (reason: any) => void;
	}> = [];
	private readonly MAX_CALLS_PER_SECOND = 20;
	private readonly INTERVAL_MS = 500;

	constructor(provider: any) {
		this._provider = provider;
		setInterval(this.processQueue.bind(this), this.INTERVAL_MS);
	}

	async call(txRequest: TransactionRequest): Promise<any> {
		console.log('RateLimitedProvider::call', txRequest);
		return new Promise((resolve, reject) => {
			this.queue.push({ txRequest, resolve, reject });
		});
	}

	private async processQueue() {
		const callsToProcess = this.queue.splice(0, this.MAX_CALLS_PER_SECOND);
		for (let { txRequest, resolve, reject } of callsToProcess) {
			try {
				console.log('processing', txRequest);
				const result = await this._provider.call(txRequest);
				resolve(result);
			} catch (error) {
				reject(error);
			}
		}
	}
}

type logEvent = {
	address: string;
	blockHash: string;
	blockNumber: number;
	data: string;
	logIndex: number;
	removed: boolean;
	topics: string[];
	transactionHash: string;
	transactionIndex: number;
};

type state = Record<string, any>;

export class MoonProvider extends EventEmitter {
	private _chain: Chain;
	private _provider: JsonRpcProvider;
	private _providerRateLimited: RateLimitedProvider;
	private _accounts: string[];
	private _approvedToConnect: string[];
	public availableChains: Chain[];
	//selectedAddress: The currently selected Ethereum address (account) in the wallet.
	public selectedAddress: string;
	//chainId: Represents the ID of the currently connected blockchain network.
	public chainId: string;

	//_log: Likely an internal logging mechanism.
	private _log: logEvent[];

	//_state: Represents the internal state of the provider.
	private _state: state;

	//isMetaMask: A boolean that indicates whether the provider is MetaMask.
	public isMetaMask: boolean;

	//networkVersion: The version of the Ethereum network the user is connected to (e.g., "1" for mainnet).
	public networkVersion: string;

	// _rpcRequest & _rpcEngine: Used for making remote procedure call (RPC) requests to the Ethereum network.
	// public _rpcEngine: Chain;

	// public _handleChainChanged;
	// public _handleDisconnect;
	// public _handleStreamDisconnect;
	// public _handleUnlockStateChanged;
	// public _jsonRpcConnection;
	// public _sentWarnings;

	//enable: A deprecated method that was previously used to request access to the user's Ethereum accounts.
	// public enable: Chain;

	//send & sendAsync: Methods to send requests to the Ethereum network. sendAsync is the asynchronous version.

	//_sendSync: A synchronous method to send data, though synchronous methods like this are generally discouraged.
	// public _sendSync: Chain;

	//_warnOfDeprecation: An internal method likely used to warn developers when they're using deprecated features.
	// public _warnOfDeprecation: Chain;

	constructor() {
		super();
		this._log = [];
		let moonStateStr = localStorage.getItem('moon_state');
		if (!moonStateStr) {
			this._state = {
				accounts: [],
				approvedToConnect: [],
				chain: chains[0],
				availableChains: chains,
				log: [],
			};
		} else {
			this._state = JSON.parse(moonStateStr) as state;
		}

		this._approvedToConnect = this._state.approvedToConnect;
		this._accounts = this._state.accounts;
		this._chain = this._state?.chain || chains[0];
		this._log = this._state.log;
		this.availableChains = this._state.availableChains || chains;

		this.selectedAddress = this._accounts[0] || '';
		this.chainId = this._chain?.chainId || chains[0].chainId;
		this.networkVersion = this.chainId;
		this.isMetaMask = false;

		//Save to local storage
		localStorage.setItem('moon_state', JSON.stringify(this._state));

		const provider = new ethers.JsonRpcProvider(
			this._chain?.rpcUrls[0] || 'https://grpc.moon.social'
		);

		this._provider = provider;
		this._providerRateLimited = new RateLimitedProvider(provider);

		let token = this._getToken();
		if (token) {
			this._listAccounts();
		}
	}

	private _getToken(): string {
		console.log('Moon::getToken');
		let token = localStorage.getItem('tokenState');
		if (!token) {
			throw new Error('No token found');
		}
		token = token.replace(/^"|"$/g, '');
		console.log('Moon::getToken', token);
		return token;
	}

	private async _updateState(key: string, value: any) {
		this._state[key] = value;
		//Save to local storage
		localStorage.setItem('moon_state', JSON.stringify(this._state));
	}

	// request: A method to make RPC requests. This is the recommended way to interact with the Ethereum provider.
	async request(args: RequestArguments): Promise<unknown> {
		return this._rpcRequest(args);
	}

	private async _rpcRequest(args: RequestArguments): Promise<unknown> {
		console.log('Moon::args', args);
		switch (args.method) {
			case 'eth_requestAccounts':
				return await this._requestAccounts(args);
			case 'eth_getBalance':
				return await this.getBalance(args);
			case 'eth_accounts':
				return await this._accounts;
			case 'eth_chainId':
				return this._chain.chainId;
			case 'wallet_switchEthereumChain':
				return this.switchChain(args);
			case 'wallet_addEthereumChain':
				return this.addChain(args);
			case 'eth_call':
				return this._call(args);
			case 'eth_sendTransaction':
				return this._sendTransaction(args);
			case 'eth_blockNumber':
				return this.getBlockNumber();
			case 'eth_getBlockByNumber':
				return this.getBlockByBlockNumber(args);
			case 'eth_gasPrice':
				return this.getGasPrice();
			case 'eth_estimateGas':
				return this._estimateGas(args);
			default:
				throw this._createRpcError(4200, 'Unsupported Method');
		}
	}

	private async _sendTransaction(args: any) {
		console.log('Moon::_sendTransaction', args);
		const tx = args?.params[0] as TransactionRequest;
		return this.send(tx);
	}

	private async _requestAccounts(args: any) {
		console.log('Moon::_handleConnect', args);
		await this._handleConnect(
			'Allow site to connect to your account?',
			args?.params
		);
		return await this._listAccounts();
	}

	async getBlockNumber(): Promise<number> {
		let res = await this._provider.getBlockNumber();
		console.log('Moon::getBlockNumber', res);
		return res;
	}
	async getBlockByBlockNumber(args: any): Promise<null | Block> {
		if (args?.params[0] && args?.params[1]) {
			let res = await this._provider.getBlock(args?.params[0], args?.params[1]);
			console.log('Moon::getBlockByBlockNumber', res);
			return res;
		}
		return null;
	}

	async getNetwork(): Promise<ethers.Network> {
		return this._provider.getNetwork();
	}

	async getTransaction(
		hash: string
	): Promise<ethers.TransactionResponse | null> {
		return this._provider.getTransaction(hash);
	}

	async _estimateGas(args: any): Promise<bigint> {
		let txRequest = args?.params[0] as TransactionRequest;
		return this.estimateGas(txRequest);
	}

	async estimateGas(txRequest: TransactionRequest): Promise<bigint> {
		console.log('Moon::estimateGas', txRequest);
		return this._provider.estimateGas(txRequest);
	}

	async getGasPrice(): Promise<bigint | null> {
		let feeData = await this._provider.getFeeData();
		return feeData.gasPrice;
	}
	async getFeeData(): Promise<ethers.FeeData> {
		console.log('Moon::getFeeData...');
		let feeData = await this._provider.getFeeData();
		console.log('Moon::getFeeData', feeData);
		return feeData;
	}

	async getTransactionCount(
		addressOrName: ethers.AddressLike,
		blockTag?: ethers.BlockTag
	): Promise<number> {
		return this._provider.getTransactionCount(addressOrName, blockTag);
	}

	async getSigner(): Promise<MoonSigner> {
		return new MoonSigner(this._accounts[0], VAULT_URL, window.moon);
	}

	async buildRequest(args: any): Promise<TransactionRequest> {
		let txRequest: TransactionRequest = {
			from: args?.params[0]?.from,
			to: args?.params[0]?.to,
			data: args?.params[0]?.data,
		};
		console.log('Moon::buildRequest', txRequest);
		return txRequest;
	}

	async _call(args: any): Promise<any> {
		let txRequest = args?.params[0] as TransactionRequest;
		console.log('Making a call with the following parameters:', txRequest);
		let res = await this.call(txRequest);
		console.log('Moon::call result', res);
		return res;
	}

	async call(tx: TransactionRequest): Promise<any> {
		console.log('Making a call with the following parameters:', tx);
		let res = await this._providerRateLimited.call(tx);
		console.log('Moon::call', res);
		return res;
	}

	async getBalance(args: any): Promise<string> {
		let res = await this._provider.getBalance(args?.params[0], args?.params[1]);
		console.log('Moon::getBalance', res);
		return res.toString();
	}

	async sendAsync(args: any): Promise<ethers.TransactionResponse> {
		return this.send(args);
	}

	async send(tx: TransactionRequest): Promise<ethers.TransactionResponse> {
		await this.approveTransaction('Approve Transaction?', [tx]);
		let signer = await this.getSigner();
		let res = await signer.sendTransaction(tx);
		console.log('Moon::sendTransaction', res);
		return res;
	}

	private async _handleConnect(type: string, data: any) {
		if (!this._approvedToConnect.includes(window.location.hostname)) {
			// Emit an approval request to ask the frontend for permission
			this.emit('approvalRequest', { type, data });
			// Wait for the approval from frontend
			await new Promise((resolve, reject) => {
				console.log('Moon::approvalRequest');
				// This event is emitted by the frontend after user action
				this.once('approved', () => {
					this._approvedToConnect.push(window.location.hostname);
					this._updateState('approvedToConnect', this._approvedToConnect);
					this.emit('connect', { chainId: this._chain.chainId });
					resolve(1);
				});
				this.once('rejected', () =>
					reject(new Error('User denied account authorization.'))
				);
			});
		}
	}

	private async approveTransaction(type: string, data: any) {
		this.emit('approvalRequest', { type, data });
		await new Promise((resolve, reject) => {
			console.log('Moon::approveTransaction');
			this.once('approved', () => {
				resolve(1);
			});
			this.once('rejected', () =>
				reject(new Error('User denied the transaction.'))
			);
		});
	}

	private async addChain(args: any): Promise<void> {
		let chainParameters = args?.params[0] || null;
		if (!chainParameters) {
			throw this._createRpcError(4900, 'Missing chain info in parameters.');
		}
		//Check if chain paramets are valid
		if (
			!chainParameters?.chainId ||
			!chainParameters?.chainName ||
			!chainParameters?.nativeCurrency ||
			!chainParameters?.nativeCurrency?.name ||
			!chainParameters?.nativeCurrency?.symbol ||
			!chainParameters?.nativeCurrency?.decimals ||
			!chainParameters?.rpcUrls ||
			!chainParameters?.blockExplorerUrls
		) {
			throw this._createRpcError(4900, 'Invalid chain parameters.');
		}
		//Check if chain already exists
		const existingChain = chains.find(
			(c) => c.chainId === chainParameters.chainId
		);
		if (existingChain) {
			this._chain = existingChain;
			this._updateState('chain', this._chain);

			// save to local storage
			localStorage.setItem('moon_current_chain', JSON.stringify(this._chain));
			// emit chainChanged
			this.emit('chainChanged', this._chain.chainId);
			return;
		}
		//Add chain to available chains
		chains.push(chainParameters);
		// save to local storage
		localStorage.setItem('moon_available_chains', JSON.stringify(chains));
		// set chain
		this._chain = chainParameters;
		// save to local storage
		localStorage.setItem('moon_current_chain', JSON.stringify(this._chain));
		// emit chainChanged
		this.emit('chainChanged', this._chain.chainId);
	}

	private async switchChain(args: any): Promise<void> {
		let chainId = args?.params[0]?.chainId || null;
		console.log('Moon::switchChain', chainId);
		if (!chainId) {
			throw this._createRpcError(4900, 'Missing chainId in parameters.');
		}
		const chain = chains.find((c) => c.chainId === chainId);
		console.log('Moon::found valid chain', chain);

		if (!chain) {
			throw this._createRpcError(4900, 'Unsupported Chain');
		}
		console.log('Moon::updating chain', chain);

		// set chain
		const oldChain = this._chain;
		this._chain = chain;
		this._updateState('chain', this._chain);

		const provider = new ethers.JsonRpcProvider(
			this._chain?.rpcUrls[0] || 'https://grpc.moon.social'
		);
		this._provider = provider;
		this._providerRateLimited = new RateLimitedProvider(this._provider);

		console.log('Moon::updated chain', this._chain);
		this.emit('network', this._chain, oldChain);
		this.emit('chainChanged', this._chain.chainId);
	}

	private async _handleAccountsChanged(account: string): Promise<void> {
		//check if account is in accounts
		if (!this._accounts.includes(account)) {
			throw this._createRpcError(4900, 'Account not found.');
		}
		// set account
		this.selectedAddress = account;
		// save to local storage
		localStorage.setItem('moon_selected_account', JSON.stringify(account));
		// emit accountsChanged
		this.emit('accountsChanged', this.selectedAddress);
		// set account by moving it to the top of the list
		this._accounts = this._accounts.filter((a) => a !== this.selectedAddress);
		this._accounts.unshift(account);
		// save to local storage
		localStorage.setItem('moon_accounts', JSON.stringify(this._accounts));
		// emit accountsChanged
		this.emit('accountsChanged', this._accounts);
		this.emit('selectedAddressChanged', this.selectedAddress);
	}

	private async _listAccounts(): Promise<string[]> {
		// get Token from local storage
		console.log('Moon::_listAccounts');
		let token = this._getToken();
		const api = new Accounts({
			baseUrl: VAULT_URL,
			securityWorker: async (token: string) => {
				return {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				};
			},
		} as ApiConfig);
		api.setSecurityData(token);
		const accounts: AccountResponse = await api
			.listAccounts({ secure: true })
			.then((res: any) => res.data);
		// turn accounts into walletts and set wallets
		console.log('fetchWallets::accounts', accounts);
		this.emit('eth_accounts', accounts?.data?.keys);
		// save to local storage
		this._accounts = accounts?.data?.keys || [];
		localStorage.setItem('moon_accounts', JSON.stringify(this._accounts));
		// return accounts
		return this._accounts;
	}

	private _createRpcError(code: number, message: string): ProviderRpcError {
		return {
			name: 'ProviderRpcError',
			message,
			code,
			data: undefined,
		};
	}

	// Connectivity handlers
	connect(chainId: string) {
		this.emit('connect', { chainId });
	}

	disconnect(error: ProviderRpcError) {
		this.emit('disconnect', error);
	}

	// Chain and account change handlers
	chainChanged(newNetwork: Chain, oldNetwork: Chain) {
		this.emit('network', newNetwork.chainId, oldNetwork.chainId);
	}

	// Message and subscription handlers
	message(type: string, data: unknown) {
		this.emit('message', { type, data });
	}

	ethSubscription(subscription: string, result: unknown) {
		this.emit('message', {
			type: 'eth_subscription',
			data: { subscription, result },
		});
	}
}

// // Usage
// const moonProvider = new MoonProvider();

// // Example: Listen for 'connect' event
// moonProvider.on("connect", (info: ProviderConnectInfo) => {
//   console.log(`Connected to chainId: ${info.chainId}`);
// });

// // Listen for 'disconnect' event
// moonProvider.on("disconnect", (error: ProviderRpcError) => {
//   console.error(`Disconnected due to error: ${error.message}`);
// });

// // Listen for 'chainChanged' event
// moonProvider.on("chainChanged", (chainId: string) => {
//   console.log(`Chain changed to: ${chainId}`);
// });

// // Listen for 'accountsChanged' event
// moonProvider.on("accountsChanged", (accounts: string[]) => {
//   console.log(`Accounts changed: ${accounts.join(", ")}`);
// });

// // Listen for 'message' event
// moonProvider.on("message", (message: ProviderMessage) => {
//   console.log(`Received message of type ${message.type}:`, message.data);
// });

declare global {
	interface Window {
		moon: any; // You can replace 'any' with the type of your MoonProvider if you have one
	}
}

//add moonProvider to window.ethereum with moonProvider

// export default moonProvider;
