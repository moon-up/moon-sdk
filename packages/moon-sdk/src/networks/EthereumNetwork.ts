import { type JsonRpcProvider, ethers } from "ethers";

import type { MoonSDK } from "../moon";

import type { CreateAccountInput } from "@moonup/moon-api";
import type { INetwork } from "./INetwork";

/**
 * The `EthereumNetwork` class implements the `INetwork` interface and provides
 * various methods to interact with the Ethereum blockchain. It utilizes the
 * `MoonSDK` to perform operations such as account management, transaction signing,
 * and contract deployment.
 *
 * @class EthereumNetwork
 * @implements {INetwork}
 *
 * @param {MoonSDK} moonSDK - An instance of the MoonSDK.
 *
 * @method createAccount
 * @async
 * @param {any} input - The input data required to create an account.
 * @returns {Promise<any>} - The response data from the account creation.
 *
 * @method deleteAccount
 * @async
 * @param {string} accountName - The name of the account to delete.
 * @returns {Promise<any>} - The response data from the account deletion.
 *
 * @method exportAccount
 * @async
 * @param {string} accountName - The name of the account to export.
 * @returns {Promise<any>} - The response data from the account export.
 *
 * @method getAccount
 * @async
 * @param {string} accountName - The name of the account to retrieve.
 * @returns {Promise<any>} - The response data from the account retrieval.
 *
 * @method listAccounts
 * @async
 * @returns {Promise<any>} - The response data from listing all accounts.
 *
 * @method signTransaction
 * @async
 * @param {string} accountName - The name of the account to sign the transaction.
 * @param {any} transaction - The transaction data to sign.
 * @returns {Promise<any>} - The signed transaction data.
 *
 * @method getBalance
 * @async
 * @param {string} address - The address to get the balance for.
 * @returns {Promise<any>} - The balance of the address.
 *
 * @method getTransaction
 * @async
 * @param {string} hash - The hash of the transaction to retrieve.
 * @returns {Promise<any>} - The transaction data.
 *
 * @method sendTransaction
 * @async
 * @param {any} transaction - The transaction data to send.
 * @returns {Promise<any>} - The response data from sending the transaction.
 *
 * @method signMessage
 * @async
 * @param {string} accountName - The name of the account to sign the message.
 * @param {string} message - The message to sign.
 * @returns {Promise<any>} - The signed message.
 *
 * @method signTypedData
 * @async
 * @param {string} accountName - The name of the account to sign the typed data.
 * @param {any} domain - The domain data for the typed data.
 * @param {any} types - The types data for the typed data.
 * @param {any} value - The value data for the typed data.
 * @returns {Promise<any>} - The signed typed data.
 *
 * @method estimateGas
 * @async
 * @param {any} transaction - The transaction data to estimate gas for.
 * @returns {Promise<any>} - The estimated gas for the transaction.
 *
 * @method getGasPrice
 * @async
 * @returns {Promise<any>} - The current gas price.
 *
 * @method deployContract
 * @async
 * @param {any} abi - The ABI of the contract to deploy.
 * @param {string} bytecode - The bytecode of the contract to deploy.
 * @param {ethers.Signer} signer - The signer to deploy the contract.
 * @param {...any[]} args - The arguments for the contract constructor.
 * @returns {Promise<any>} - The deployment transaction of the contract.
 */
export class EthereumNetwork implements INetwork {
  private moon: MoonSDK;

  constructor ( moonSDK: MoonSDK ) {
    this.moon = moonSDK;
  }

  /**
   * Retrieves the Ethereum JSON-RPC provider for the specified chain ID.
   *
   * @param chainId - The ID of the Ethereum chain to get the provider for. Defaults to 1 (mainnet).
   * @returns A promise that resolves to a JsonRpcProvider instance.
   */
  private async getProvider( chainId = 1 ): Promise<JsonRpcProvider> {
    const selectedChain = this.moon.getChainService().getSelectedChain();
    if ( selectedChain ) {
      return this.moon.getEthereumProvider( selectedChain.chain_id || 1 );
    } else {
      throw new Error( "No chain selected" );
    }
  }

  /**
   * Retrieves a signer for the specified address.
   *
   * @param address - The address for which to retrieve the signer.
   * @returns A promise that resolves to an `ethers.Signer` instance.
   */
  private async getSigner( address: string ): Promise<ethers.Signer> {
    const selectedChain =
      this.moon.getChainService().getSelectedChain()?.chain_id || 1;
    return this.moon.getProviderService().getMoonSigner( address, selectedChain );
  }

  /**
   * Asynchronously creates a new account using the provided input.
   *
   * @param input - The input data required to create the account.
   * @returns A promise that resolves to the address of the created account.
   */
  async createAccount( input: CreateAccountInput ): Promise<string> {
    const response = await this.moon
      .getAccountsSDK()
      .accountsCreateEthereumAccount( input );
    if ( response.data?.data ) {
      const address = response.data.data.address;
      if ( address ) {
        return address;
      }
      throw new Error( "Failed to create account: address is undefined" );
    }
    throw new Error( "Failed to create account: response data is undefined" );
  }
  /**
   * Deletes an account with the specified account name.
   *
   * @param accountName - The name of the account to be deleted.
   * @returns A promise that resolves to the response data of the delete operation.
   */
  async deleteAccount( accountName: string ): Promise<any> {
    const response = await this.moon
      .getAccountsSDK()
      .accountsDeleteEthereumAccount( accountName );
    if ( response.data ) {
      return response.data;
    }
    throw new Error( "Failed to export account: response data is undefined" );
  }

  /**
   * Exports the account details for the given account name.
   *
   * @param accountName - The name of the account to export.
   * @returns A promise that resolves to the exported account data.
   */
  async exportAccount(
    accountName: string,
  ): Promise<{ address: string; privateKey: string; publicKey: string; }> {
    const response = await this.moon
      .getAccountsSDK()
      .accountsExportEthreumAccount( accountName );
    if ( response.data ) {
      return {
        address: response.data.address,
        privateKey: response.data.private_key,
        publicKey: response.data.public_key,
      };
    }
    throw new Error( "Failed to export account: response data is undefined" );
  }

  /**
   * Retrieves the address for a given account name.
   *
   * @param accountName - The name of the account to retrieve the address for.
   * @returns A promise that resolves to the account address.
   */
  async getAccount( accountName: string ): Promise<string> {
    const response = await this.moon
      .getAccountsSDK()
      .accountsGetEthreumAccount( accountName );
    if ( response.data ) {
      const address = response.data.address;
      if ( address ) {
        return address;
      }
      throw new Error( "Failed to get account: address is undefined" );
    }
    throw new Error( "Failed to get account: response data is undefined" );
  }

  /**
   * Lists all accounts associated with the Ethereum network.
   *
   * @returns {Promise<string[]>} A promise that resolves to an array of account addresses.
   */
  async listAccounts(): Promise<string[]> {
    try {
      const response = await this.moon
        .getAccountsSDK()
        .accountsListEthereumAccounts();
      // console.log(response);

      if ( response.success && response.data?.data?.keys ) {
        const keys = response.data.data.keys;
        // console.log(keys);

        if (
          Array.isArray( keys ) &&
          keys.every( ( key ) => typeof key === "string" )
        ) {
          return keys;
        }
      }

      throw new Error( "Invalid response structure" );
    } catch ( error ) {
      throw new Error( `Failed to list accounts: ${ error }` );
    }
  }

  /**
   * Signs a transaction for a given account.
   *
   * @param accountName - The name of the account to sign the transaction with.
   * @param transaction - The transaction object to be signed.
   * @returns A promise that resolves to an object containing the raw signed transaction.
   */
  async signTransaction( accountName: string, transaction: any ): Promise<any> {
    return this.moon.signTransaction( accountName, transaction );
    // const account = await this.getAccount(accountName);
    // const signer = await this.getSigner(account);
    // const signedTx = await signer.signTransaction(transaction);
    // return { raw_transaction: signedTx };
  }

  /**
   * Retrieves the balance of the specified Ethereum address.
   *
   * @param address - The Ethereum address to query the balance for.
   * @returns A promise that resolves to an object containing the balance as a string.
   */
  async getBalance( address: string ): Promise<any> {
    const provider = await this.getProvider();
    const balance = await provider.getBalance( address );
    return { balance: balance.toString() };
  }

  /**
   * Retrieves a transaction by its hash.
   *
   * @param hash - The hash of the transaction to retrieve.
   * @returns A promise that resolves to the transaction details.
   */
  async getTransaction( hash: string ): Promise<any> {
    const provider = await this.getProvider();
    return provider.getTransaction( hash );
  }
  /**
   * Estimates the gas required for a given transaction.
   *
   * @param transaction - The transaction object for which to estimate gas.
   * @returns A promise that resolves to an object containing the gas estimate as a string.
   */
  async estimateGas( transaction: any ): Promise<any> {
    const provider = await this.getProvider();
    const gasEstimate = await provider.estimateGas( transaction );
    return gasEstimate.toString();
  }

  /**
   * Sends a transaction to the Ethereum network and provides status updates.
   *
   * @param transaction - The transaction object to be sent.
   * @returns A promise that resolves to the final transaction receipt and emits status updates.
   */
  async sendTransaction( transaction: any ): Promise<any> {
    const provider = await this.getProvider();
    const tx = await this.signTransaction( transaction.from, transaction );
    return provider.broadcastTransaction( tx.raw_transaction );
  }

  /**
   * Signs a message using the specified account.
   *
   * @param accountName - The name of the account to use for signing the message.
   * @param message - The message to be signed.
   * @returns A promise that resolves to the signed message.
   */
  async signMessage( accountName: string, message: string ): Promise<any> {
    const account = await this.getAccount( accountName );
    const signer = await this.getSigner( account );
    return signer.signMessage( message );
  }

  /**
   * Signs typed data using the specified account.
   *
   * @param accountName - The name of the account to use for signing.
   * @param domain - The domain data for the typed data.
   * @param types - The types definition for the typed data.
   * @param value - The value to be signed.
   * @returns A promise that resolves to the signed data.
   */
  async signTypedData(
    accountName: string,
    domain: any,
    types: any,
    value: any,
  ): Promise<any> {
    return await this.moon.signTypedData( accountName, domain, types, value );
  }

  /**
   * Retrieves the current gas price from the Ethereum network.
   *
   * @returns {Promise<any>} A promise that resolves to an object containing the gas price as a string.
   */
  async getGasPrice(): Promise<any> {
    const provider = await this.getProvider();
    const gasPrice = await provider.getFeeData();
    return { gas_price: gasPrice.toString() };
  }

  /**
   * Deploys a smart contract to the Ethereum network.
   *
   * @param abi - The ABI (Application Binary Interface) of the contract.
   * @param bytecode - The bytecode of the contract.
   * @param signer - The signer object used to sign the transaction.
   * @param args - Additional arguments required for the contract constructor.
   * @returns A promise that resolves to the deployment transaction of the contract.
   */
  async deployContract(
    abi: any,
    bytecode: string,
    signer: ethers.Signer,
    ...args: any[]
  ): Promise<any> {
    const factory = new ethers.ContractFactory( abi, bytecode, signer );
    const contract = await factory.deploy( ...args );
    return contract.deploymentTransaction();
  }
}
