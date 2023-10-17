import { TypedDataField } from '@ethersproject/abstract-signer';
import { BytesLike } from '@ethersproject/bytes';
import { JsonRpcProvider, TransactionRequest } from '@ethersproject/providers';
import { TypedDataDomain } from 'ethers';
export class MoonSDK {
	AccountsSDK: Accounts | undefined;
	MoonProvider: JsonRpcProvider | undefined;

	constructor() {
		// this.MoonProvider = new Provider('');
	}

	public async SignTransaction(transaction: TransactionRequest): Promise<any> {
		return this.AccountsSDK?.signTransaction(transaction.from, transaction);
	}

	public async SignMessage(message: BytesLike): Promise<any> {
		return this.AccountsSDK?.signMessage();
	}

	public async SignTypedData(
		domain: TypedDataDomain,
		types: Record<string, Array<TypedDataField>>,
		value: Record<string, any>
	): Promise<any> {
		// return this.AccountsSDK.sign;
		throw new Error('Method not implemented.');
	}

	public async SendTransaction(body: any): Promise<any> {
		throw new Error('Method not implemented.');
	}

	public async getAccounts(): Promise<any> {
		return this.AccountsSDK?.listAccounts();
	}

	public async selectAccount(body: any): Promise<any> {}

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
