import {
  Block,
  BlockTag,
  BlockWithTransactions,
  EventType,
  Filter,
  Listener,
  Log,
  Provider,
  TransactionReceipt,
  TransactionRequest,
  TransactionResponse,
} from '@ethersproject/abstract-provider';
import { Deferrable } from '@ethersproject/properties';
import { Network } from '@ethersproject/providers';
import { MoonAccount } from '@moonup/moon-types';
import {
  IEthereumProvider,
  ProviderAccounts,
  RequestArguments,
} from 'eip1193-provider';
import { BigNumber, BigNumberish } from 'ethers';
import { EventEmitter } from 'events';

import { JsonRpcProvider } from './json-rpc-provider';
import { MoonProviderOptions } from './types';
export class MoonProvider extends Provider implements IEthereumProvider {
  private account?: MoonAccount = undefined;

  public events: EventEmitter = new EventEmitter();
  public chainId: number;
  public readonly signer: JsonRpcProvider;

  constructor(options: MoonProviderOptions) {
    super();
    this.chainId = options.chainId;
    this.signer = new JsonRpcProvider(this.chainId);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async request(args: RequestArguments): Promise<any> {
    switch (args.method) {
      case 'eth_requestAccounts':
        // eslint-disable-next-line no-case-declarations
        const account = await this.connect();
        this.account = account;
        return (await this.signer.moonWallet.listAccounts()) || [];
      case 'eth_accounts':
        return this.signer.moonWallet.listAccounts() || [];
      case 'eth_chainId':
        return this.chainId;
      case 'wallet_switchEthereumChain':
        // eslint-disable-next-line no-case-declarations
        const _params =
          args?.params && Array.isArray(args?.params) && args?.params[0]
            ? // eslint-disable-next-line no-case-declarations
              args?.params[0]
            : undefined;
        // eslint-disable-next-line no-case-declarations
        const chainId =
          typeof _params?.chainId === 'string' &&
          _params?.chainId?.startsWith('0x')
            ? parseInt(_params?.chainId, 16)
            : _params?.chainId;

        this.signer.updateMoonWalletConfig(chainId);
        this.chainId = chainId;

        this.events.emit('chainChanged', _params?.chainId);
        return;
      default:
        break;
    }
    return await this.signer.request(args);
  }

  public async connect() {
    const account = await this.signer.connect();
    this.account = account;
    this.events.emit('connect', account);
    return account;
  }

  public async disconnect(): Promise<void> {
    await this.signer.disconnect();
    this.events.emit('disconnect');
    this.account = undefined;
  }

  public sendAsync(
    args: RequestArguments,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback: (error: Error | null, response: any) => void
  ): void {
    this.request(args)
      .then((response) => callback(null, response))
      .catch((error) => callback(error, undefined));
  }

  public async enable(): Promise<ProviderAccounts> {
    const account = await this.request({ method: 'eth_requestAccounts' });
    return [account?.address || ''];
  }

  public isMoonProvider(): boolean {
    return true;
  }

  public isConnected(): boolean {
    return !!this.account;
  }

  public getChainId(): number {
    return this.chainId;
  }

  public getSigner() {
    return this.signer;
  }

  getNetwork(): Promise<Network> {
    return this.signer.http.getNetwork();
  }
  getBlockNumber(): Promise<number> {
    return this.signer.http.getBlockNumber();
  }
  getGasPrice(): Promise<BigNumber> {
    return this.signer.http.getGasPrice();
  }
  getBalance(
    addressOrName: string | Promise<string>,
    blockTag?: BlockTag | Promise<BlockTag> | undefined
  ): Promise<BigNumber> {
    return this.signer.http.getBalance(addressOrName, blockTag);
  }
  getTransactionCount(
    addressOrName: string | Promise<string>,
    blockTag?: BlockTag | Promise<BlockTag> | undefined
  ): Promise<number> {
    return this.signer.http.getTransactionCount(addressOrName, blockTag);
  }
  getCode(
    addressOrName: string | Promise<string>,
    blockTag?: BlockTag | Promise<BlockTag> | undefined
  ): Promise<string> {
    return this.signer.http.getCode(addressOrName, blockTag);
  }
  getStorageAt(
    addressOrName: string | Promise<string>,
    position: BigNumberish | Promise<BigNumberish>,
    blockTag?: BlockTag | Promise<BlockTag> | undefined
  ): Promise<string> {
    return this.signer.http.getStorageAt(addressOrName, position, blockTag);
  }
  sendTransaction(
    signedTransaction: string | Promise<string>
  ): Promise<TransactionResponse> {
    return this.signer.http.sendTransaction(signedTransaction);
  }
  call(
    transaction: Deferrable<TransactionRequest>,
    blockTag?: BlockTag | Promise<BlockTag> | undefined
  ): Promise<string> {
    return this.signer.http.call(transaction, blockTag);
  }
  estimateGas(transaction: Deferrable<TransactionRequest>): Promise<BigNumber> {
    return this.signer.http.estimateGas(transaction);
  }
  getBlock(blockHashOrBlockTag: BlockTag | Promise<BlockTag>): Promise<Block> {
    return this.signer.http.getBlock(blockHashOrBlockTag);
  }
  getBlockWithTransactions(
    blockHashOrBlockTag: BlockTag | Promise<BlockTag>
  ): Promise<BlockWithTransactions> {
    return this.signer.http.getBlockWithTransactions(blockHashOrBlockTag);
  }
  getTransaction(transactionHash: string): Promise<TransactionResponse> {
    return this.signer.http.getTransaction(transactionHash);
  }
  getTransactionReceipt(transactionHash: string): Promise<TransactionReceipt> {
    return this.signer.http.getTransactionReceipt(transactionHash);
  }
  getLogs(filter: Filter): Promise<Log[]> {
    return this.signer.http.getLogs(filter);
  }
  resolveName(name: string | Promise<string>): Promise<string | null> {
    return this.signer.http.resolveName(name);
  }
  lookupAddress(address: string | Promise<string>): Promise<string | null> {
    return this.signer.http.lookupAddress(address);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  emit(eventName: EventType, ...args: any[]): boolean {
    return this.signer.http.emit(eventName, ...args);
  }
  listenerCount(eventName?: EventType | undefined): number {
    return this.signer.http.listenerCount(eventName);
  }
  listeners(eventName?: EventType | undefined): Listener[] {
    return this.signer.http.listeners(eventName);
  }
  removeAllListeners(eventName?: EventType | undefined): Provider {
    return this.signer.http.removeAllListeners(eventName);
  }
  waitForTransaction(
    transactionHash: string,
    confirmations?: number | undefined,
    timeout?: number | undefined
  ): Promise<TransactionReceipt> {
    return this.signer.http.waitForTransaction(
      transactionHash,
      confirmations,
      timeout
    );
  }
  on(eventName: EventType, listener: Listener): Provider {
    return this.signer.http.on(eventName, listener);
  }
  once(eventName: EventType, listener: Listener): Provider {
    return this.signer.http.once(eventName, listener);
  }
  off(eventName: EventType, listener?: Listener | undefined): Provider {
    return this.signer.http.off(eventName, listener);
  }
}
