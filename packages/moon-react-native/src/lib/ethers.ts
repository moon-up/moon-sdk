// import 'react-native-get-random-values';

// // Import the the ethers shims (**BEFORE** ethers)
// import '@ethersproject/shims';

// // Import the ethers library

// import {
//   Block,
//   BlockTag,
//   BlockWithTransactions,
//   EventType,
//   Filter,
//   Listener,
//   Log,
//   Provider,
//   TransactionReceipt,
//   TransactionRequest,
//   TransactionResponse,
// } from '@ethersproject/abstract-provider';
// import {
//   TypedDataDomain,
//   TypedDataField,
// } from '@ethersproject/abstract-signer';
// import { arrayify } from '@ethersproject/bytes';
// import { hashMessage } from '@ethersproject/hash';
// import { Deferrable } from '@ethersproject/properties';
// import { Network } from '@ethersproject/providers';
// import { Accounts, ContentType, HttpClient, InputBody } from '@moonup/moon-api';
// import { SupabaseClient } from '@supabase/supabase-js';
// import {
//   IEthereumProvider,
//   ProviderAccounts,
//   RequestArguments,
// } from 'eip1193-provider';
// import { BigNumber, BigNumberish, ethers, utils } from 'ethers';
// import { EventEmitter } from 'events';

// export interface TypedData {
//   domain: TypedDataDomain;
//   types: Record<string, Array<TypedDataField>>;
//   value: Record<string, string>;
// }

// export const getMessage = (params: string[]) => {
//   const message = params.filter((p) => !utils.isAddress(p))[0];
//   const hash = new Uint8Array(arrayify(hashMessage(message)));
//   return hash;
// };

// export const transactionRequestToInputBody = (
//   tx: TransactionRequest
// ): InputBody => {
//   return {
//     chain_id: BigNumber.from(tx.chainId).toString(),
//     data: (tx.data && tx.data?.toString()) || '',
//     to: tx.to,
//     gasPrice: BigNumber.from(tx.gasPrice).toString(),
//     gas: BigNumber.from(tx.gasLimit).toString(),
//     nonce: BigNumber.from(tx.nonce).toString(),
//     value:
//       tx.value !== undefined ? BigNumber.from(tx.value).toString() : undefined,
//     encoding: 'utf-8',
//   };
// };

// export const getSignTypedDataParamsData = (params: string[]) => {
//   const data = params.filter((p) => !utils.isAddress(p))[0];

//   if (typeof data === 'string') {
//     return JSON.parse(data) as TypedData;
//   }

//   return data;
// };

// export interface MoonProviderOptions {
//   chainId: number;
//   address?: string;
//   supabase: SupabaseClient;
// }

// export class MoonProvider extends Provider implements IEthereumProvider {
//   public events: EventEmitter = new EventEmitter();
//   public chainId: number;
//   public http: ethers.providers.JsonRpcProvider;
//   public address = '';
//   public supabase: SupabaseClient;
//   public accounts: Accounts;
//   public httpClient: HttpClient;

//   constructor(options: MoonProviderOptions) {
//     super();
//     this.supabase = options.supabase;
//     this.chainId = options.chainId;
//     this.address = options.address || '';
//     this.httpClient = new HttpClient({
//       baseUrl: 'https://beta.usemoon.ai',
//       baseApiParams: {
//         secure: true,
//         type: ContentType.Json,
//         format: 'json',
//       },
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       securityWorker: async (securityData: any) => {
//         return Promise.resolve({
//           headers: {
//             Authorization: `Bearer ${securityData.token}`,
//           },
//         });
//       },
//     });
//     this.accounts = new Accounts(this.httpClient);

//     this.http = new ethers.providers.JsonRpcProvider();
//     this.supabase.auth.getSession().then(({ data: { session } }) => {
//       this.httpClient.setSecurityData({
//         token: session?.access_token,
//       });
//     });

//     this.supabase.auth.onAuthStateChange((_event, session) => {
//       this.httpClient.setSecurityData({
//         token: session?.access_token,
//       });
//     });
//     // supabase session logic
//     this.setup();
//   }
//   enable(): Promise<ProviderAccounts> {
//     throw new Error('Method not implemented.');
//   }
//   private async setup() {
//     const { data, error } = await this.supabase
//       .from('chains')
//       .select('*')
//       .eq('chain_id', this.chainId)
//       .limit(1)
//       .single();

//     if (error) {
//       throw new Error(error.message);
//     }
//     const rpcUrls = data.rpc_urls as string[];
//     this.http = new ethers.providers.JsonRpcProvider(rpcUrls.at(0));
//   }

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   public async request(args: RequestArguments): Promise<any> {
//     console.log('uwu', args);
//     switch (args.method) {
//       case 'wallet_requestPermissions':
//         return args.params;
//       case 'eth_requestAccounts':
//         // return configured address
//         return this.address;
//       case 'eth_accounts':
//         // return configured address
//         return this.address;
//       case 'eth_call':
//         console.log('eth_call', args);
//         if (Array.isArray(args.params) && args.params.length > 0) {
//           const response = await this.http.call(args.params[0]);
//           return response;
//         }
//         throw new Error('request.params is undefined or not an array');
//       case 'eth_chainId':
//         // convert chainId to hex
//         return '0x' + this.chainId.toString(16);
//       case 'personal_sign':
//         if (Array.isArray(args.params) && args.params.length > 0) {
//           const message = getMessage(args?.params as string[]);
//           const hash = new Uint8Array(arrayify(hashMessage(message)));
//           const response = await this.accounts
//             .signMessage(this.address, {
//               data: hash.toString(),
//               encoding: 'utf-8',
//             })
//             .then((res) => res.data);
//           return response?.signed_message as ResponseType;
//         } else {
//           throw new Error('request.params is undefined or not an array');
//         }
//       case 'eth_signTypedData':
//         if (Array.isArray(args.params) && args.params.length > 0) {
//           const typedData = getSignTypedDataParamsData(
//             args?.params as string[]
//           );

//           const response = await this.accounts.signTypedData(this.address, {
//             data: JSON.stringify({
//               domain: typedData.domain,
//               types: typedData.types,
//               value: typedData.value,
//             }),
//           });
//           return response?.data?.signed_message || '';
//         } else {
//           throw new Error('request.params is undefined or not an array');
//         }

//       case 'eth_sendTransaction':
//         // eslint-disable-next-line no-case-declarations
//         const _params =
//           args?.params && Array.isArray(args?.params) && args?.params[0]
//             ? args?.params[0]
//             : undefined;
//         if (_params) {
//           const response = await this.accounts.signTransaction(
//             this.address,
//             transactionRequestToInputBody(_params)
//           );
//           // return response || '';
//           const rawTx =
//             response?.data?.transactions?.at(0)?.raw_transaction || '';
//           const broadCastResponse = await this.accounts.broadcastTx(
//             this.address,
//             {
//               rawTransaction: rawTx,
//               chainId: this.chainId.toString(),
//             }
//           );
//           return broadCastResponse?.data?.data || '';
//         }
//         throw new Error('eth_sendTransaction error');
//       case 'wallet_switchEthereumChain':
//         console.log('wallet_switchEthereumChain', args);
//         // eslint-disable-next-line no-case-declarations
//         // Remove the redeclaration of _params
//         // eslint-disable-next-line no-case-declarations
//         const params =
//           args?.params && Array.isArray(args?.params) && args?.params[0]
//             ? args?.params[0]
//             : undefined;
//         if (params) {
//           const chainId =
//             typeof params?.chainId === 'string' &&
//             params?.chainId?.startsWith('0x')
//               ? parseInt(params?.chainId, 16)
//               : params?.chainId;
//           console.log('chainId', chainId);
//           this.updateConfig({
//             chainId,
//             address: this.address,
//             supabase: this.supabase,
//           });
//           this.chainId = chainId;

//           this.events.emit('chainChanged', _params?.chainId);
//           return [`0x${this.chainId.toString(16)}`];
//         }
//         throw new Error('wallet_switchEthereumChain error');
//       // address change
//       case 'wallet_changeAccount':
//         // eslint-disable-next-line no-case-declarations
//         const accounts =
//           args?.params && Array.isArray(args?.params) && args?.params[0]
//             ? // eslint-disable-next-line no-case-declarations
//               args?.params[0]
//             : undefined;
//         this.address = accounts[0];
//         this.updateConfig({
//           chainId: this.chainId,
//           address: accounts[0],
//           supabase: this.supabase,
//         });
//         this.events.emit('accountsChanged', this.address);
//         return [this.address];
//       case 'eth_getTransactionCount':
//         if (Array.isArray(args.params) && args.params.length > 0) {
//           const response = await this.http.getTransactionCount(args.params[0]);
//           return response;
//         }
//         throw new Error('request.params is undefined or not an array');
//       case 'eth_getBalance':
//         if (Array.isArray(args.params) && args.params.length > 0) {
//           const response = await this.http.getBalance(args.params[0]);
//           return response;
//         }
//         throw new Error('request.params is undefined or not an array');
//       case 'eth_getCode':
//         if (Array.isArray(args.params) && args.params.length > 0) {
//           const response = await this.http.getCode(args.params[0]);
//           return response;
//         }
//         throw new Error('request.params is undefined or not an array');
//       case 'eth_getStorageAt':
//         if (Array.isArray(args.params) && args.params.length > 0) {
//           const response = await this.http.getStorageAt(
//             args.params[0],
//             args.params[1]
//           );
//           return response;
//         }
//         throw new Error('request.params is undefined or not an array');
//       case 'eth_getBlock':
//         if (Array.isArray(args.params) && args.params.length > 0) {
//           const response = await this.http.getBlock(args.params[0]);
//           return response;
//         }
//         throw new Error('request.params is undefined or not an array');
//       case 'eth_getBlockWithTransactions':
//         if (Array.isArray(args.params) && args.params.length > 0) {
//           const response = await this.http.getBlockWithTransactions(
//             args.params[0]
//           );
//           return response;
//         }
//         throw new Error('request.params is undefined or not an array');
//       case 'eth_getTransaction':
//         if (Array.isArray(args.params) && args.params.length > 0) {
//           const response = await this.http.getTransaction(args.params[0]);
//           return response;
//         }
//         throw new Error('request.params is undefined or not an array');

//       case 'eth_getTransactionReceipt':
//         if (Array.isArray(args.params) && args.params.length > 0) {
//           const response = await this.http.getTransactionReceipt(
//             args.params[0]
//           );
//           return response;
//         }
//         throw new Error('request.params is undefined or not an array');
//       case 'eth_getLogs':
//         if (Array.isArray(args.params) && args.params.length > 0) {
//           const response = await this.http.getLogs(args.params[0]);
//           return response;
//         }
//         throw new Error('request.params is undefined or not an array');

//       case 'eth_estimateGas':
//         if (Array.isArray(args.params) && args.params.length > 0) {
//           const response = await this.http.estimateGas(args.params[0]);
//           return response;
//         }
//         throw new Error('request.params is undefined or not an array');
//       case 'eth_sendRawTransaction':
//         if (Array.isArray(args.params) && args.params.length > 0) {
//           const response = await this.http.sendTransaction(args.params[0]);
//           return response;
//         }
//         throw new Error('request.params is undefined or not an array');
//       case 'eth_getNetwork': {
//         const network = await this.http.getNetwork();
//         return network;
//       }
//       case 'eth_getGasPrice': {
//         const price = await this.http.getGasPrice();
//         return price;
//       }
//       case 'eth_getBlockNumber': {
//         const blockResponse = await this.http.getBlockNumber();
//         return blockResponse;
//       }
//       case 'eth_resolveName':
//         if (Array.isArray(args.params) && args.params.length > 0) {
//           const response = await this.http.resolveName(args.params[0]);
//           return response;
//         }
//         throw new Error('request.params is undefined or not an array');
//       case 'eth_lookupAddress':
//         if (Array.isArray(args.params) && args.params.length > 0) {
//           const response = await this.http.lookupAddress(args.params[0]);
//           return response;
//         }
//         throw new Error('request.params is undefined or not an array');

//       default:
//         return await this.http.send(
//           args.method,
//           // eslint-disable-next-line @typescript-eslint/no-explicit-any
//           (args.params || []) as Array<any>
//         );
//     }
//   }
//   public async updateConfig(options: MoonProviderOptions) {
//     this.chainId = options.chainId;
//     this.address = options.address || '';
//     const { data, error } = await this.supabase
//       .from('chains')
//       .select('*')
//       .eq('chain_id', this.chainId)
//       .limit(1)
//       .single();

//     if (error) {
//       throw new Error(error.message);
//     }
//     const rpcUrls = data.rpc_urls as string[];
//     this.http = new ethers.providers.JsonRpcProvider(rpcUrls.at(0));
//     this.address = options.address ?? '';
//   }

//   public async connect() {
//     // const account = await this.signer.connect();
//     // this.account = account;
//     this.events.emit('connect');
//     // return account;
//   }

//   public async disconnect(): Promise<void> {
//     // await this.signer.disconnect();
//     this.events.emit('disconnect');
//     // this.account = undefined;
//   }

//   public sendAsync(
//     args: RequestArguments,
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     callback: (error: Error | null, response: any) => void
//   ): void {
//     this.request(args)
//       .then((response) => callback(null, response))
//       .catch((error) => callback(error, undefined));
//   }

//   public isMoonProvider(): boolean {
//     return true;
//   }

//   public getChainId(): number {
//     return this.chainId;
//   }

//   // eslint-disable-next-line @typescript-eslint/no-empty-function
//   public getSigner() {}

//   getNetwork(): Promise<Network> {
//     return this.http.getNetwork();
//   }
//   getBlockNumber(): Promise<number> {
//     return this.http.getBlockNumber();
//   }
//   getGasPrice(): Promise<BigNumber> {
//     return this.http.getGasPrice();
//   }
//   getBalance(
//     addressOrName: string | Promise<string>,
//     blockTag?: BlockTag | Promise<BlockTag> | undefined
//   ): Promise<BigNumber> {
//     return this.http.getBalance(addressOrName, blockTag);
//   }
//   getTransactionCount(
//     addressOrName: string | Promise<string>,
//     blockTag?: BlockTag | Promise<BlockTag> | undefined
//   ): Promise<number> {
//     return this.http.getTransactionCount(addressOrName, blockTag);
//   }
//   getCode(
//     addressOrName: string | Promise<string>,
//     blockTag?: BlockTag | Promise<BlockTag> | undefined
//   ): Promise<string> {
//     return this.http.getCode(addressOrName, blockTag);
//   }
//   getStorageAt(
//     addressOrName: string | Promise<string>,
//     position: BigNumberish | Promise<BigNumberish>,
//     blockTag?: BlockTag | Promise<BlockTag> | undefined
//   ): Promise<string> {
//     return this.http.getStorageAt(addressOrName, position, blockTag);
//   }
//   sendTransaction(
//     signedTransaction: string | Promise<string>
//   ): Promise<TransactionResponse> {
//     return this.http.sendTransaction(signedTransaction);
//   }
//   call(
//     transaction: Deferrable<TransactionRequest>,
//     blockTag?: BlockTag | Promise<BlockTag> | undefined
//   ): Promise<string> {
//     return this.http.call(transaction, blockTag);
//   }
//   estimateGas(transaction: Deferrable<TransactionRequest>): Promise<BigNumber> {
//     return this.http.estimateGas(transaction);
//   }
//   getBlock(blockHashOrBlockTag: BlockTag | Promise<BlockTag>): Promise<Block> {
//     return this.http.getBlock(blockHashOrBlockTag);
//   }
//   getBlockWithTransactions(
//     blockHashOrBlockTag: BlockTag | Promise<BlockTag>
//   ): Promise<BlockWithTransactions> {
//     return this.http.getBlockWithTransactions(blockHashOrBlockTag);
//   }
//   getTransaction(transactionHash: string): Promise<TransactionResponse> {
//     return this.http.getTransaction(transactionHash);
//   }
//   getTransactionReceipt(transactionHash: string): Promise<TransactionReceipt> {
//     return this.http.getTransactionReceipt(transactionHash);
//   }
//   getLogs(filter: Filter): Promise<Log[]> {
//     return this.http.getLogs(filter);
//   }
//   resolveName(name: string | Promise<string>): Promise<string | null> {
//     return this.http.resolveName(name);
//   }
//   lookupAddress(address: string | Promise<string>): Promise<string | null> {
//     return this.http.lookupAddress(address);
//   }
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   emit(eventName: EventType, ...args: any[]): boolean {
//     return this.http.emit(eventName, ...args);
//   }
//   listenerCount(eventName?: EventType | undefined): number {
//     return this.http.listenerCount(eventName);
//   }
//   listeners(eventName?: EventType | undefined): Listener[] {
//     return this.http.listeners(eventName);
//   }
//   removeAllListeners(eventName?: EventType | undefined): Provider {
//     return this.http.removeAllListeners(eventName);
//   }
//   waitForTransaction(
//     transactionHash: string,
//     confirmations?: number | undefined,
//     timeout?: number | undefined
//   ): Promise<TransactionReceipt> {
//     return this.http.waitForTransaction(
//       transactionHash,
//       confirmations,
//       timeout
//     );
//   }
//   on(eventName: EventType, listener: Listener): Provider {
//     return this.http.on(eventName, listener);
//   }
//   once(eventName: EventType, listener: Listener): Provider {
//     return this.http.once(eventName, listener);
//   }
//   off(eventName: EventType, listener?: Listener | undefined): Provider {
//     return this.http.off(eventName, listener);
//   }
// }
