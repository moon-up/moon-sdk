import {
	TypedDataDomain,
	TypedDataField,
} from '@ethersproject/abstract-signer';
import { BytesLike } from '@ethersproject/bytes';
import { JsonRpcProvider, TransactionResponse } from '@ethersproject/providers';
import {
	AccountResponse,
	BroadCastRawTransactionResponse,
	Transaction,
} from '@moonup/moon-api/src/lib/data-contracts';
import { MoonApi } from '@moonup/moon-api/src/moon-api';
import { Chain, MOON_SUPPORTED_NETWORKS } from '@moonup/types/src/chains';
import { MoonAccount, MoonSDKConfig } from '@moonup/types/src/types';
import { useAuth } from './auth';
import { MoonMessageHandler, MoonMessageType } from './messages';
import { useStorage } from './storage';
import { IframeController } from './viewController';

export class MoonSDK {
	MoonProvider: JsonRpcProvider | undefined;
	MoonApi: MoonApi;
	MoonSDKConfig: MoonSDKConfig;
	MoonAccount: MoonAccount;
	MoonMessageHandler: MoonMessageHandler;
	MoonIframe: IframeController | undefined;

	constructor(config: MoonSDKConfig) {
		this.MoonSDKConfig = this.initialiseConfig(config);
		this.MoonApi = new MoonApi(config);
		this.MoonMessageHandler = new MoonMessageHandler();
		this.MoonAccount =
			this.MoonSDKConfig.Storage.getItem() ||
			({
				token: '',
				email: '',
				expiry: 0,
				refreshToken: '',
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
	public updateAccount(account: MoonAccount) {
		this.MoonAccount = account;
		this.MoonSDKConfig.Storage.setItem(account);
	}

	public async connect() {
		// fetch account
		this.MoonAccount =
			this.MoonSDKConfig.Storage.getItem() ||
			({
				token: '',
				email: '',
				expiry: 0,
				refreshToken: '',
				wallet: '',
				network: MOON_SUPPORTED_NETWORKS[0],
			} as MoonAccount);
		// check if account is valid
		if (this.MoonAccount) {
			// check if account is expired
			if (this.MoonAccount.expiry < Date.now()) {
				// refresh account
				const account = await this.MoonApi.refreshAccount(
					this.MoonAccount.token
				);
				this.updateAccount({
					...this.MoonAccount,
					token: account.accessToken,
				});
			}
		}
		await this.MoonMessageHandler.handle({
			type: MoonMessageType.login,
			data: this.MoonAccount,
		});
		return this.MoonAccount;
	}

	public async disconnect() {
		this.MoonSDKConfig.Storage.removeItem();
		this.MoonAccount = {
			token: '',
			email: '',
			expiry: 0,
			refreshToken: '',
			wallet: '',
			network: MOON_SUPPORTED_NETWORKS[0],
		};
		await this.MoonMessageHandler.handle({
			type: MoonMessageType.logout,
			data: this.MoonAccount,
		});
		return this.MoonAccount;
	}

	async logout(): Promise<void> {
		this.MoonSDKConfig.Storage.removeItem();
		// this.MoonApi.setToken('');
	}

	public async SignTransaction(
		transaction: TransactionResponse
	): Promise<Transaction> {
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
		this.MoonApi.SignTypedData(domain, types, value);
	}

	public async SendTransaction(
		rawTransaction: string
	): Promise<BroadCastRawTransactionResponse> {
		return this.MoonApi?.SendTransaction(rawTransaction);
	}

	public async getAccounts(): Promise<AccountResponse> {
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
