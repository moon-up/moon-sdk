import { Provider } from '@ethersproject/abstract-provider';
import {
	Signer,
	TypedDataDomain,
	TypedDataField,
} from '@ethersproject/abstract-signer';
import { BytesLike } from '@ethersproject/bytes';
import { defineReadOnly } from '@ethersproject/properties';
import {
	TransactionRequest,
	TransactionResponse,
} from '@ethersproject/providers';
// import { MoonApi } from '@moon/moon-api';
// import { BytesLike, TypedDataDomain, TypedDataField, ethers } from 'ethers';
import { MoonSDK } from '@moon/moon-sdk/src/moon';

export class MoonSigner extends Signer {
	declare readonly provider: Provider;
	declare readonly _isSigner: boolean;
	MoonSDK: MoonSDK;

	constructor(provider: Provider) {
		super();
		defineReadOnly(this, '_isSigner', true);
		this.MoonSDK = new MoonSDK();
	}
	connect(provider: Provider): Signer {
		console.log('Moon::connect', provider);
		return new MoonSigner(provider);
	}

	async signTypedData(
		domain: TypedDataDomain,
		types: Record<string, TypedDataField[]>,
		value: Record<string, any>
	): Promise<string> {
		const data = this.getTypedData(domain, types, value);
		const response = await this.MoonSDK.SignTypedData(data);
		return response.signature;
	}

	/**
	 * @summary Get address
	 * @returns {string} successful operation
	 */
	async getAddress(): Promise<string> {
		throw new Error('Method not implemented.');
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
		const response = await this.MoonSDK.SignMessage(message);
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
			const signedTx = await this.MoonSDK.SignTransaction(tx);
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
	): Promise<TypedData> {
		return {
			domain,
			types,
			message,
		};
	}
}

export interface TypedData {
	domain: TypedDataDomain;
	types: Record<string, Array<TypedDataField>>;
	message: Record<string, any>;
}
