import type {
	CosmosIBCTransferInput,
	CosmosTransferInput,
} from "@moonup/moon-api";

import type { MoonSDK } from "../moon";

import type { INetwork } from "./INetwork";

export class CosmosNetwork implements INetwork {
	private moonSDK: MoonSDK;
	signTypedData(
		accountName: string,
		domain: any,
		types: any,
		value: any,
	): Promise<any> {
		throw new Error("Method not implemented.");
	}

	constructor(moonSDK: MoonSDK) {
		this.moonSDK = moonSDK;
	}
	estimateGas(transaction: any): Promise<any> {
		throw new Error("Method not implemented.");
	}

	async createAccount(input: any): Promise<any> {
		return this.moonSDK.getCosmosSDK().cosmosCosmosCreateAccount(input);
	}

	async deleteAccount(accountName: string): Promise<any> {
		return this.moonSDK.getCosmosSDK().cosmosCosmosDeleteAccount(accountName);
	}

	async exportAccount(accountName: string): Promise<any> {
		return this.moonSDK.getCosmosSDK().cosmosCosmosExportAccount(accountName);
	}

	async getAccount(accountName: string): Promise<any> {
		return this.moonSDK.getCosmosSDK().cosmosCosmosGetAccount(accountName);
	}

	async listAccounts(): Promise<any> {
		const response = await this.moonSDK
			.getCosmosSDK()
			.cosmosCosmosListAccounts();
		return response.data;
	}

	async signTransaction(
		accountName: string,
		transaction: CosmosTransferInput,
	): Promise<any> {
		return this.moonSDK
			.getCosmosSDK()
			.cosmosCosmosSignTransferTransaction(accountName, transaction);
	}

	async signIBCTransaction(
		accountName: string,
		transaction: CosmosIBCTransferInput,
	): Promise<any> {
		return this.moonSDK
			.getCosmosSDK()
			.cosmosCosmosSignIbcTransferTransaction(accountName, transaction);
	}

	async signMessage(accountName: string, message: string): Promise<any> {
		return this.moonSDK.getCosmosSDK().cosmosCosmosSignMessage(accountName, {
			message: message,
		});
	}

	async getBalance(address: string): Promise<any> {
		// Implement balance fetching for Cosmos
		throw new Error("Method not implemented.");
	}

	async getTransaction(hash: string): Promise<any> {
		// Implement transaction fetching for Cosmos
		throw new Error("Method not implemented.");
	}

	async sendTransaction(transaction: any): Promise<any> {
		throw new Error("Method not implemented.");
	}

	// Additional Cosmos-specific methods

	async getChainId(): Promise<string> {
		// Implement chain ID fetching for Cosmos
		throw new Error("Method not implemented.");
	}

	async getDelegations(address: string): Promise<any> {
		// Implement fetching delegations for a Cosmos address
		throw new Error("Method not implemented.");
	}

	async getRewards(address: string): Promise<any> {
		// Implement fetching rewards for a Cosmos address
		throw new Error("Method not implemented.");
	}

	async getValidators(): Promise<any> {
		// Implement fetching list of validators
		throw new Error("Method not implemented.");
	}

	async estimateFee(transaction: CosmosTransferInput): Promise<any> {
		// Implement fee estimation for Cosmos transactions
		throw new Error("Method not implemented.");
	}

	setCustomAddress(address: string): void {
		throw new Error("Method not implemented.");
	}
}
