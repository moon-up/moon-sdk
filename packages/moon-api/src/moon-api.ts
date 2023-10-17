import { TransactionResponse } from '@ethersproject/abstract-provider';
import {
	TypedDataDomain,
	TypedDataField,
} from '@ethersproject/abstract-signer';
import { BigNumber } from '@ethersproject/bignumber';
import { BytesLike, arrayify } from '@ethersproject/bytes';
import { hashMessage } from '@ethersproject/hash';
import { Accounts } from './lib';
import { AccountControllerResponse, InputBody } from './lib/data-contracts';
import { ContentType } from './lib/http-client';

export class MoonApi {
	private AccountsSDK: Accounts;
	private wallet: string;
	private chainId: number;

	constructor() {
		this.AccountsSDK = new Accounts({
			baseUrl: 'https://vault-api.usemoon.ai',
			baseApiParams: {
				secure: true,
				type: ContentType.Json,
				format: 'json',
			},
			securityWorker(securityData: any) {
				return {
					headers: {
						Authorization: `Bearer ${securityData.token}`,
					},
				};
			},
		});
		this.wallet = '';
		this.chainId = 1;
	}
	public setToken(token: string) {
		return this.AccountsSDK.setSecurityData({ token });
	}
	public setWallet(wallet: string) {
		this.wallet = wallet;
	}

	public getWallet(): string {
		return this.wallet;
	}

	public getAccountsSDK(): Accounts {
		return this.AccountsSDK;
	}

	public setChainId(chainId: number) {
		this.chainId = chainId;
	}

	public getChainId(): number {
		return this.chainId;
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
	): Promise<AccountControllerResponse> {
		const response = await this.AccountsSDK?.signTransaction(
			this.wallet,
			this.transactionRequestToInputBody(transaction)
		);
		return response.data;
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
	): Promise<any> {
		// return this.AccountsSDK.sign;
		throw new Error('Method not implemented.');
	}

	public async SendTransaction(
		rawTransaction: string
	): Promise<AccountControllerResponse> {
		const response = await this.AccountsSDK.broadcastTx(this.wallet, {
			rawTransaction: rawTransaction,
			chainId: this.chainId.toString(),
		});
		return response.data;
	}
}
