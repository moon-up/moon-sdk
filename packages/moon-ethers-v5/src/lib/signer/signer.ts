import { Provider } from '@ethersproject/abstract-provider';
import { Signer } from '@ethersproject/abstract-signer';
import { BigNumber } from '@ethersproject/bignumber';
import { Deferrable, defineReadOnly } from '@ethersproject/properties';
import {
	TransactionRequest,
	TransactionResponse,
} from '@ethersproject/providers';
import { BytesLike, TypedDataDomain, TypedDataField, ethers } from 'ethers';
import { BroadCastRawTransaction, EnsSDK, RpcSDK } from './vault';
import { MoonApi } from '@moon/moon-api/src/moon-api';

export class MoonSigner extends Signer {
	declare readonly provider: Provider;
	declare readonly _isSigner: boolean;
	MoonApi: MoonApi;

	constructor(accountName: string, provider: Provider, token: string) {
		super();
		defineReadOnly(this, '_isSigner', true);
		this.MoonApi = new MoonApi();
	}
	connect(provider: Provider): Signer {
		console.log('Moon::connect', provider);
		return new MoonSigner(this.accountName, provider, this.token);
	}

	async signTypedData(
		domain: TypedDataDomain,
		types: Record<string, TypedDataField[]>,
		value: Record<string, any>
	): Promise<string> {
		const data = this.getTypedData(domain, types, value);
		// convert data to string
		const response = await this.account.signTypedData(this.accountName, {
			data: JSON.stringify(data),
		});
		return response.signature;
	}

	/**
	 * @summary Get address
	 * @returns {string} successful operation
	 */
	async getAddress(): Promise<string> {
		const address = await this.account.readAccount(this.accountName);
		console.log('Moon::getAddress', address);
		return address.address;
	}

	/**
	 * @summary Get nonce
	 * @returns  {number} successful operation
	 */
	async getNonce(): Promise<number> {
		const response = await this.account.getNonce(this.accountName);
		return response.nonce;
	}

	async signMessage(message: BytesLike): Promise<string> {
		const hash = new Uint8Array(
			ethers.utils.arrayify(ethers.utils.hashMessage(message))
		);
		console.log('Moon::signMessage', message);
		const response = await this.account.signMessage(this.accountName, {
			data: hash.toString(),
		});
		return response.signed_message;
	}

	async sendTransaction(
		transaction: TransactionRequest
	): Promise<TransactionResponse> {
		const tx = await this.populateTransaction(transaction);
		console.log('Moon::sendTransaction: populateTransaction', tx);
		const signedRes = await this.signTransaction(tx);
		console.log('Moon::sendTransaction: signedRawTx', signedRes);

		const response = await this.broadcastTx(signedRes, tx?.chainId);
		console.log('Moon::sendTransaction: broadcastTx res', response);
		const txResponse =
			(await this.provider.getTransaction(signedRes?.transaction_hash || '')) ||
			(tx as TransactionResponse);
		console.log('Moon::sendTransaction: txResponse', txResponse);

		return txResponse;
	}

	async signTransaction(transaction: TransactionRequest): Promise<any> {
		try {
			const tx = await this.populateTransaction(transaction);
			return response;
		} catch (e) {
			console.log(e);
			throw e;
		}
	}
	async getTypedDataDomain(
		name: string,
		version: string,
		chainId: number,
		verifyingContract: string
	): Promise<TypedDataDomain> {
		return {
			name,
			version,
			chainId,
			verifyingContract,
		};
	}

	async getTypedData(
		domain: TypedDataDomain,
		types: Record<string, Array<TypedDataField>>,
		message: Record<string, any>
	): Promise<any> {
		return {
			domain,
			types,
			message,
		};
	}
}
