import { TransactionResponse } from '@ethersproject/abstract-provider';
import {
	TypedDataDomain,
	TypedDataField,
} from '@ethersproject/abstract-signer';
import { BigNumber } from '@ethersproject/bignumber';
import { BytesLike, arrayify } from '@ethersproject/bytes';
import { hashMessage } from '@ethersproject/hash';
import { MoonSDKConfig } from '@moonup/types/src/types';
import { Auth, RefreshTokenResponse } from './auth';
import {
	Aave,
	Accounts,
	Conveyorfinance,
	Ens,
	Erc1155,
	Erc20,
	Erc4337,
	Erc721,
	Oneinch,
	Uniswap,
	Yearn,
} from './lib';
import {
	AccountControllerResponse,
	AccountResponse,
	BroadCastRawTransactionResponse,
	InputBody,
	Transaction,
} from './lib/data-contracts';
import { ContentType } from './lib/http-client';

export class MoonApi {
	private AccountsSDK: Accounts;
	private AaveSDK: Aave;
	private ConveyorfinanceSDK: Conveyorfinance;
	private ENSSDK: Ens;
	private Erc20SDK: Erc20;
	private Erc1155SDK: Erc1155;
	private Erc721SDK: Erc721;
	private Erc4337SDK: Erc4337;
	private OneinchSDK: Oneinch;
	private UniswapSDK: Uniswap;
	private YearnSDK: Yearn;
	private AuthSDK: Auth;
	private wallet: string;
	private chainId: number;
	private config: MoonSDKConfig;

	constructor(MoonSDKConfig: MoonSDKConfig) {
		this.config = MoonSDKConfig;
		this.AccountsSDK = new Accounts({
			baseUrl: 'https://vault-api.usemoon.ai',
			baseApiParams: {
				secure: true,
				type: ContentType.Json,
				format: 'json',
			},
			securityWorker: this.config.Auth.securityWorker,
		});
		this.AuthSDK = new Auth({
			baseUrl: 'https://vault-api.usemoon.ai',
			baseApiParams: {
				secure: true,
				type: ContentType.Json,
				format: 'json',
			},
			securityWorker: this.config.Auth.securityWorker,
		});

		this.AaveSDK = new Aave({
			baseUrl: 'https://vault-api.usemoon.ai',
			baseApiParams: {
				secure: true,
				type: ContentType.Json,
				format: 'json',
			},
			securityWorker: this.config.Auth.securityWorker,
		});

		this.ENSSDK = new Ens({
			baseUrl: 'https://vault-api.usemoon.ai',
			baseApiParams: {
				secure: true,
				type: ContentType.Json,
				format: 'json',
			},
			securityWorker: this.config.Auth.securityWorker,
		});

		this.Erc20SDK = new Erc20({
			baseUrl: 'https://vault-api.usemoon.ai',
			baseApiParams: {
				secure: true,
				type: ContentType.Json,
				format: 'json',
			},
			securityWorker: this.config.Auth.securityWorker,
		});

		this.Erc1155SDK = new Erc1155({
			baseUrl: 'https://vault-api.usemoon.ai',
			baseApiParams: {
				secure: true,
				type: ContentType.Json,
				format: 'json',
			},
			securityWorker: this.config.Auth.securityWorker,
		});

		this.Erc721SDK = new Erc721({
			baseUrl: 'https://vault-api.usemoon.ai',
			baseApiParams: {
				secure: true,
				type: ContentType.Json,
				format: 'json',
			},
			securityWorker: this.config.Auth.securityWorker,
		});

		this.Erc4337SDK = new Erc4337({
			baseUrl: 'https://vault-api.usemoon.ai',
			baseApiParams: {
				secure: true,
				type: ContentType.Json,
				format: 'json',
			},
			securityWorker: this.config.Auth.securityWorker,
		});

		this.OneinchSDK = new Oneinch({
			baseUrl: 'https://vault-api.usemoon.ai',
			baseApiParams: {
				secure: true,
				type: ContentType.Json,
				format: 'json',
			},
			securityWorker: this.config.Auth.securityWorker,
		});

		this.UniswapSDK = new Uniswap({
			baseUrl: 'https://vault-api.usemoon.ai',
			baseApiParams: {
				secure: true,
				type: ContentType.Json,
				format: 'json',
			},
			securityWorker: this.config.Auth.securityWorker,
		});

		this.YearnSDK = new Yearn({
			baseUrl: 'https://vault-api.usemoon.ai',
			baseApiParams: {
				secure: true,
				type: ContentType.Json,
				format: 'json',
			},
			securityWorker: this.config.Auth.securityWorker,
		});

		this.ConveyorfinanceSDK = new Conveyorfinance({
			baseUrl: 'https://vault-api.usemoon.ai',
			baseApiParams: {
				secure: true,
				type: ContentType.Json,
				format: 'json',
			},
			securityWorker: this.config.Auth.securityWorker,
		});

		this.wallet = '';
		this.chainId = 1;
	}

	public getAuthSDK(): Auth {
		return this.AuthSDK;
	}

	public getAccountsSDK(): Accounts {
		return this.AccountsSDK;
	}

	public getAaveSDK(): Aave {
		return this.AaveSDK;
	}

	public getConveyorfinanceSDK(): Conveyorfinance {
		return this.ConveyorfinanceSDK;
	}

	public getENSSDK(): Ens {
		return this.ENSSDK;
	}

	public getErc20SDK(): Erc20 {
		return this.Erc20SDK;
	}

	public getErc1155SDK(): Erc1155 {
		return this.Erc1155SDK;
	}

	public getErc721SDK(): Erc721 {
		return this.Erc721SDK;
	}

	public getErc4337SDK(): Erc4337 {
		return this.Erc4337SDK;
	}

	public getOneinchSDK(): Oneinch {
		return this.OneinchSDK;
	}

	public getUniswapSDK(): Uniswap {
		return this.UniswapSDK;
	}

	public getYearnSDK(): Yearn {
		return this.YearnSDK;
	}

	public async refreshAccount(token: string): Promise<RefreshTokenResponse> {
		const response = await this.AuthSDK.refreshToken({ refreshToken: token });
		return response.data;
	}

	public async listAccounts(): Promise<AccountResponse> {
		const response = await this.AccountsSDK.listAccounts();
		return response.data as AccountResponse;
	}
	transactionRequestToInputBody(tx: TransactionResponse): InputBody {
		return {
			chain_id: BigNumber.from(tx.chainId).toString(),
			data: tx.data,
			to: tx.to,
			gasPrice: BigNumber.from(tx.gasPrice).toString(),
			gas: BigNumber.from(tx.gasLimit).toString(),
			nonce: BigNumber.from(tx.nonce).toString(),
			value: tx.value && BigNumber.from(tx.value).toString(),
			encoding: 'other',
		};
	}

	public async SignTransaction(
		transaction: TransactionResponse
	): Promise<Transaction> {
		const response = await this.AccountsSDK?.signTransaction(
			this.wallet,
			this.transactionRequestToInputBody(transaction)
		);
		return response.data as Transaction;
	}

	public async SignMessage(
		message: BytesLike
	): Promise<AccountControllerResponse> {
		const hash = new Uint8Array(arrayify(hashMessage(message)));
		const response = await this.AccountsSDK?.signMessage(this.wallet, {
			data: hash.toString(),
		});
		return response.data;
	}

	public async SignTypedData(
		domain: TypedDataDomain,
		types: Record<string, Array<TypedDataField>>,
		value: Record<string, any>
	): Promise<AccountControllerResponse> {
		const response = await this.AccountsSDK.signTypedData(this.wallet, {
			data: JSON.stringify({
				domain,
				types,
				value,
			}),
		});
		return response.data;
	}

	public async SendTransaction(
		rawTransaction: string
	): Promise<BroadCastRawTransactionResponse> {
		const response = await this.AccountsSDK.broadcastTx(this.wallet, {
			rawTransaction: rawTransaction,
			chainId: this.chainId.toString(),
		});
		return response.data as BroadCastRawTransactionResponse;
	}
}
