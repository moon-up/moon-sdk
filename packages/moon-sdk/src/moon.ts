import {
	TypedDataDomain,
	TypedDataField,
} from '@ethersproject/abstract-signer';
import { BytesLike } from '@ethersproject/bytes';
import { JsonRpcProvider, TransactionRequest } from '@ethersproject/providers';
import { Chain, MOON_SUPPORTED_NETWORKS } from '@moon/types/src/chains';
import { MoonAccount, MoonSDKConfig } from '@moon/types/src/types';
import { AccountControllerResponse } from '../../moon-api/src/lib/data-contracts';
import { MoonApi } from '../../moon-api/src/moon-api';
import { useAuth } from './auth';
import { useStorage } from './storage';

export class MoonSDK {
	MoonProvider: JsonRpcProvider | undefined;
	MoonApi: MoonApi;
	MoonSDKConfig: MoonSDKConfig;
	MoonAccount: MoonAccount;

	constructor(config: MoonSDKConfig) {
		this.MoonSDKConfig = this.initialiseConfig(config);
		this.MoonApi = new MoonApi(config);
		this.MoonAccount =
			this.MoonSDKConfig.Storage.getItem() ||
			({
				token: '',
				email: '',
				expiry: 0,
				wallet: '',
				network: MOON_SUPPORTED_NETWORKS[0],
			} as MoonAccount);
	}

	private initialiseConfig(config: MoonSDKConfig): MoonSDKConfig {
		const sdkConfig = {
			Auth: useAuth(config.Auth),
			Storage: useStorage(config.Storage.type),
			Networks: config.Networks || MOON_SUPPORTED_NETWORKS,
		};

		return sdkConfig;
	}

	async logout(): Promise<void> {
		this.MoonSDKConfig.Storage.removeItem();
		// this.MoonApi.setToken('');
	}

	public async SignTransaction(transaction: TransactionRequest): Promise<any> {
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

	public async SendTransaction(
		rawTransaction: string
	): Promise<AccountControllerResponse> {
		return this.MoonApi?.SendTransaction(rawTransaction);
	}

	public async getAccounts(): Promise<AccountControllerResponse> {
		return this.MoonApi?.listAccounts();
	}

	public async selectAccount(wallet: MoonAccount): Promise<any> {
		this.MoonAccount = wallet;
		this.MoonSDKConfig?.Storage.setItem(wallet);
		// this.MoonApi?.setWallet(wallet);
	}

	public async setCurrentNetwork(network: Chain): Promise<any> {
		this.MoonAccount.network = network;
	}
}
