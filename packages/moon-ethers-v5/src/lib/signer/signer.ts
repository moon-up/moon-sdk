import { Provider } from '@ethersproject/abstract-provider';
import { Signer } from '@ethersproject/abstract-signer';
import { BigNumber } from '@ethersproject/bignumber';
import { Deferrable } from '@ethersproject/properties';
import {
	TransactionRequest,
	TransactionResponse,
} from '@ethersproject/providers';
import { BytesLike, TypedDataDomain, TypedDataField, ethers } from 'ethers';
import { BroadCastRawTransaction, EnsSDK, RpcSDK } from './vault';

export class MoonSigner extends Signer {
	private accountName: string;
	declare readonly provider: Provider;
	private account: RpcSDK;
	private ens: EnsSDK;
	private token: string;

	constructor(accountName: string, provider: Provider, token: string) {
		super();
		this.accountName = accountName;
		// this.provider = provider;
		this.token = token;
		this.provider = provider;

		this.account = new RpcSDK(this.token);
		this.ens = new EnsSDK(this.token);
	}
	connect(provider: Provider): Signer {
		console.log('Moon::connect', provider);
		return new MoonSigner(this.accountName, provider, this.token);
	}

	async populateTransaction(
		txIn: TransactionRequest
	): Promise<TransactionResponse> {
		let tx: TransactionRequest = { ...txIn };

		// If 'from' address is not provided, set it using the signer's address
		if (!tx.from) {
			tx.from = await this.getAddress();
		}

		// If 'nonce' is not provided, fetch the current nonce for the 'from' address
		if (!tx.nonce) {
			tx.nonce = await this.provider.getTransactionCount(tx.from, 'latest');
		}

		// If 'gasPrice' is not provided, fetch the current gas price
		if (!tx.gasPrice) {
			let feeData = await this.provider.getFeeData();
			tx.gasPrice = feeData.gasPrice;
		}

		// If 'gasLimit' is not provided and 'to' address is provided, estimate the gas limit
		if (!tx.gasLimit && tx.to) {
			tx.gasLimit = await this.provider.estimateGas(tx);
		}

		// If 'chainId' is not provided, get it from the provider
		if (!tx.chainId) {
			let network = await this.provider.getNetwork();
			tx.chainId = network.chainId;
		}
		// Return the populated transaction
		return tx as TransactionResponse;
	}

	async estimateGas(
		transaction: Deferrable<TransactionRequest>
	): Promise<BigNumber> {
		const res = await this.provider.estimateGas(transaction);
		return res;
	}
	async call(tx: TransactionRequest): Promise<string> {
		console.log('Moon::call', tx);
		const res = await this.provider.call(tx);
		return res.toString();
	}
	async resolveName(name: string): Promise<string> {
		const response = await this.ens.resolve({
			domain: name,
			chain_id: '1',
		});
		return response.address;
	}
	async signTypedData(
		domain: TypedDataDomain,
		types: Record<string, TypedDataField[]>,
		value: Record<string, any>
	): Promise<string> {
		// throw new Error('Method not implemented.');
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

	async broadcastTx(signedRes: any, chainId: number): Promise<any> {
		const response = await BroadCastRawTransaction(
			BigNumber.from(chainId).toString(),
			signedRes.raw_transaction
		);
		return response.data;
	}

	async signTransaction(transaction: TransactionRequest): Promise<any> {
		try {
			const tx = await this.populateTransaction(transaction);
			const response = await this.account.signTransaction(this.accountName, {
				chain_id: BigNumber.from(tx.chainId).toString(),
				data: tx.data,
				to: tx.to,
				gasPrice: BigNumber.from(tx.gasPrice).toString(),
				gas: BigNumber.from(tx.gasLimit).toString(),
				nonce: BigNumber.from(tx.nonce).toString(),
				value: tx.value && BigNumber.from(tx.value).toString(),
				encoding: 'other',
			});
			console.log('Moon::signTransaction: response', response);
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
