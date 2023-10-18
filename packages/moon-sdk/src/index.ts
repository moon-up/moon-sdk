import {
	TypedDataDomain,
	TypedDataField,
} from '@ethersproject/abstract-signer';
import { BytesLike } from '@ethersproject/bytes';
import { JsonRpcProvider, TransactionResponse } from '@ethersproject/providers';
import { MoonApi } from '../../moon-api/src/moon-api';
import { MoonSDKConfig } from './config';
export class MoonSDK {
	MoonProvider: JsonRpcProvider | undefined;
	MoonApi: MoonApi | undefined;
	MoonSDKConfig: MoonSDKConfig | undefined;

	constructor(config: MoonSDKConfig) {
		this.MoonApi = new MoonApi();
		this.MoonSDKConfig = config;
	}

	public async SignTransaction(transaction: TransactionResponse): Promise<any> {
		return this.MoonApi?.SignTransaction(transaction);
	}

	public async SignMessage(message: BytesLike): Promise<any> {
		return this.MoonApi?.SignMessage(message);
	}

	public async SignTypedData(
		domain: TypedDataDomain,
		types: Record<string, Array<TypedDataField>>,
		value: Record<string, any>
	): Promise<any> {
		// return this.AccountsSDK.sign;
		throw new Error('Method not implemented.');
	}

	public async SendTransaction(rawTransaction: string): Promise<any> {
		this.MoonApi?.SendTransaction(rawTransaction);
	}

	public async getAccounts(): Promise<any> {
		return this.MoonApi?.listAccounts();
	}

	public async selectAccount(wallet: string): Promise<any> {
		this.MoonApi?.setWallet(wallet);
	}

	public async setCurrentNetwork(network: number): Promise<any> {
		this.MoonApi?.setChainId(network);
	}

	// todo
	// handle configuration options
	// setup json rpc provider
	// setup auth methods
	// setup session storage

	// authentication methods

	// check auth provider,, login, logout

	// sign transaction, sign message, sign typed data, sign arbitrary data

	// send transaction

	// get account, get accounts, get balances, get transactions, get transaction history, get token balances, get token transactions, get token transaction history

	// get chain data, get chain transactions, get chain transaction history

	// return provider and signer and wagmi connector

	// swap tokens via oneinch
}
