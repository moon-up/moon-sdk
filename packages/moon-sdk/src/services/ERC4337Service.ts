// packages/moon-sdk/src/services/ERC4337Service.ts

import { JsonRpcProvider } from 'ethers';
import { V06 } from 'userop';

import { MoonSDK } from '../moon';

/**
 * The ERC4337Service class provides methods to interact with ERC-4337 accounts.
 * It allows initializing the service with a wallet address, sending user operations,
 * and retrieving the account address associated with the ERC-4337 account.
 *
 * @class ERC4337Service
 * @example
 * ```typescript
 * const moonSDK = new MoonSDK();
 * const erc4337Service = new ERC4337Service(moonSDK);
 * await erc4337Service.initialize('0xYourWalletAddress');
 * const receipt = await erc4337Service.sendUserOperation('0xRecipientAddress', '1000', '0xData');
 * const accountAddress = await erc4337Service.getAccountAddress();
 * ```
 */
export class ERC4337Service {
  private moonSDK: MoonSDK;
  private account: V06.Account.Instance<any, any> | null = null;

  /**
   * Creates an instance of ERC4337Service.
   *
   * @param moonSDK - An instance of the MoonSDK.
   */
  constructor(moonSDK: MoonSDK) {
    this.moonSDK = moonSDK;
  }

  /**
   * Initializes the ERC4337Service with the provided wallet address.
   *
   * This method sets up the account instance using the selected chain's provider
   * and signer. It retrieves the selected chain ID from the chain service,
   * obtains the Ethereum provider for the selected chain, and then gets the
   * Moon signer for the provided wallet address and selected chain. Finally,
   * it creates a new account instance with the obtained provider and signer.
   *
   * @param walletAddress - The address of the wallet to initialize the service with.
   * @returns A promise that resolves when the initialization is complete.
   */
  async initialize(walletAddress: string) {
    const selectedChain =
      this.moonSDK.getChainService().getSelectedChain()?.chain_id || 1;
    const provider = (await this.moonSDK.getEthereumProvider(
      selectedChain
    )) as JsonRpcProvider;
    const signer = await this.moonSDK
      .getProviderService()
      .getMoonSigner(walletAddress, selectedChain);

    this.account = new V06.Account.Instance({
      ...V06.Account.Common.SimpleAccount.base(provider, signer),
      // You can add additional configurations here, like paymasters
    });
  }

  /**
   * Sends a user operation to the specified address with the given value and data.
   *
   * @param {string} to - The address to send the operation to.
   * @param {string} value - The value to send with the operation.
   * @param {string} data - The data to send with the operation.
   * @returns {Promise<any>} - A promise that resolves to the transaction receipt.
   * @throws {Error} - Throws an error if the ERC4337 account is not initialized.
   */
  async sendUserOperation(to: string, value: string, data: string) {
    if (!this.account) {
      throw new Error('ERC4337 account not initialized');
    }

    const send = await this.account
      .encodeCallData('execute', [to, value, data])
      .sendUserOperation();

    const receipt = await send.wait();
    return receipt;
  }

  /**
   * Retrieves the account address associated with the ERC4337 account.
   *
   * @returns {Promise<string>} A promise that resolves to the account address.
   * @throws {Error} If the ERC4337 account is not initialized.
   */
  async getAccountAddress(): Promise<string> {
    if (!this.account) {
      throw new Error('ERC4337 account not initialized');
    }

    return this.account.getSender();
  }

  // Add more ERC-4337 specific methods as needed
}
