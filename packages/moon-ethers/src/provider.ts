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
import { MoonSDK } from '@moonup/moon-sdk';
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
  public events: EventEmitter = new EventEmitter();
  public chainId: number;
  public rpc: JsonRpcProvider;
  public sdk: MoonSDK;
  public address = '';

  constructor(options: MoonProviderOptions) {
    super();
    this.chainId = options.chainId;
    this.sdk = options.SDK;
    this.address = options.address;
    this.rpc = new JsonRpcProvider(options);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async request(args: RequestArguments): Promise<any> {
    switch (args.method) {
      case 'eth_requestAccounts':
        return await this.sdk.listAccounts();
      case 'eth_accounts':
        return this.rpc.signer.getAddress();
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
        this.updateConfig({
          chainId,
          SDK: this.sdk,
          address: this.address,
        });
        this.chainId = chainId;

        this.events.emit('chainChanged', _params?.chainId);
        return;
      // address change
      case 'accountsChanged':
        // eslint-disable-next-line no-case-declarations
        const accounts =
          args?.params && Array.isArray(args?.params) && args?.params[0]
            ? // eslint-disable-next-line no-case-declarations
              args?.params[0]
            : undefined;
        this.address = accounts[0];
        this.updateConfig({
          chainId: this.chainId,
          SDK: this.sdk,
          address: accounts[0],
        });
        this.events.emit('accountsChanged', accounts);
        return;
      default:
        break;
    }
    return await this.rpc.request(args);
  }
  public updateConfig(options: MoonProviderOptions) {
    this.chainId = options.chainId;
    this.sdk = options.SDK;
    this.rpc.updateConfig(options);
  }

  public async connect() {
    // const account = await this.signer.connect();
    // this.account = account;
    this.events.emit('connect');
    // return account;
  }

  public async disconnect(): Promise<void> {
    // await this.signer.disconnect();
    this.events.emit('disconnect');
    // this.account = undefined;
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

  public getChainId(): number {
    return this.chainId;
  }

  public getSigner() {
    return this.rpc.signer;
  }

  getNetwork(): Promise<Network> {
    return this.rpc.http.getNetwork();
  }
  getBlockNumber(): Promise<number> {
    return this.rpc.http.getBlockNumber();
  }
  getGasPrice(): Promise<BigNumber> {
    return this.rpc.http.getGasPrice();
  }
  getBalance(
    addressOrName: string | Promise<string>,
    blockTag?: BlockTag | Promise<BlockTag> | undefined
  ): Promise<BigNumber> {
    return this.rpc.http.getBalance(addressOrName, blockTag);
  }
  getTransactionCount(
    addressOrName: string | Promise<string>,
    blockTag?: BlockTag | Promise<BlockTag> | undefined
  ): Promise<number> {
    return this.rpc.http.getTransactionCount(addressOrName, blockTag);
  }
  getCode(
    addressOrName: string | Promise<string>,
    blockTag?: BlockTag | Promise<BlockTag> | undefined
  ): Promise<string> {
    return this.rpc.http.getCode(addressOrName, blockTag);
  }
  getStorageAt(
    addressOrName: string | Promise<string>,
    position: BigNumberish | Promise<BigNumberish>,
    blockTag?: BlockTag | Promise<BlockTag> | undefined
  ): Promise<string> {
    return this.rpc.http.getStorageAt(addressOrName, position, blockTag);
  }
  sendTransaction(
    signedTransaction: string | Promise<string>
  ): Promise<TransactionResponse> {
    return this.rpc.http.sendTransaction(signedTransaction);
  }
  call(
    transaction: Deferrable<TransactionRequest>,
    blockTag?: BlockTag | Promise<BlockTag> | undefined
  ): Promise<string> {
    return this.rpc.http.call(transaction, blockTag);
  }
  estimateGas(transaction: Deferrable<TransactionRequest>): Promise<BigNumber> {
    return this.rpc.http.estimateGas(transaction);
  }
  getBlock(blockHashOrBlockTag: BlockTag | Promise<BlockTag>): Promise<Block> {
    return this.rpc.http.getBlock(blockHashOrBlockTag);
  }
  getBlockWithTransactions(
    blockHashOrBlockTag: BlockTag | Promise<BlockTag>
  ): Promise<BlockWithTransactions> {
    return this.rpc.http.getBlockWithTransactions(blockHashOrBlockTag);
  }
  getTransaction(transactionHash: string): Promise<TransactionResponse> {
    return this.rpc.http.getTransaction(transactionHash);
  }
  getTransactionReceipt(transactionHash: string): Promise<TransactionReceipt> {
    return this.rpc.http.getTransactionReceipt(transactionHash);
  }
  getLogs(filter: Filter): Promise<Log[]> {
    return this.rpc.http.getLogs(filter);
  }
  resolveName(name: string | Promise<string>): Promise<string | null> {
    return this.rpc.http.resolveName(name);
  }
  lookupAddress(address: string | Promise<string>): Promise<string | null> {
    return this.rpc.http.lookupAddress(address);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  emit(eventName: EventType, ...args: any[]): boolean {
    return this.rpc.http.emit(eventName, ...args);
  }
  listenerCount(eventName?: EventType | undefined): number {
    return this.rpc.http.listenerCount(eventName);
  }
  listeners(eventName?: EventType | undefined): Listener[] {
    return this.rpc.http.listeners(eventName);
  }
  removeAllListeners(eventName?: EventType | undefined): Provider {
    return this.rpc.http.removeAllListeners(eventName);
  }
  waitForTransaction(
    transactionHash: string,
    confirmations?: number | undefined,
    timeout?: number | undefined
  ): Promise<TransactionReceipt> {
    return this.rpc.http.waitForTransaction(
      transactionHash,
      confirmations,
      timeout
    );
  }
  on(eventName: EventType, listener: Listener): Provider {
    return this.rpc.http.on(eventName, listener);
  }
  once(eventName: EventType, listener: Listener): Provider {
    return this.rpc.http.once(eventName, listener);
  }
  off(eventName: EventType, listener?: Listener | undefined): Provider {
    return this.rpc.http.off(eventName, listener);
  }
}
