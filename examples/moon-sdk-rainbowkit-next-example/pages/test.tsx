import { useEffect, useRef } from 'react';

const IframeModal = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src = 'http://localhost:3000';
    }
  }, []);

  const openModal = () => {
    if (iframeRef.current) {
      iframeRef.current.style.display = 'block';
    }
  };

  const closeModal = () => {
    if (iframeRef.current) {
      iframeRef.current.style.display = 'none';
    }
  };

  return (
    <div>
      <iframe ref={iframeRef} style={{ display: 'none' }} />
      <button onClick={openModal}>Open Modal</button>
      <button onClick={closeModal}>Close Modal</button>
    </div>
  );
};

export default IframeModal;

import { EventEmitter } from 'eventemitter3';

// By default post to any origin
const DEFAULT_TARGET_ORIGIN = '*';
// By default timeout is 60 seconds
const DEFAULT_TIMEOUT_MILLISECONDS = 240000;

const JSON_RPC_VERSION = '2.0';

// The interface for the source of the events, typically the window.
export interface MinimalEventSourceInterface {
  addEventListener(eventType: 'message', handler: (message: MessageEvent) => void): void;
}

// The interface for the target of our events, typically the parent window.
export interface MinimalEventTargetInterface {
  postMessage(message: any, targetOrigin?: string): void;
}

/**
 * Options for constructing the iframe ethereum provider.
 */
export interface IFrameEthereumProviderOptions {
  // The origin to communicate with. Default '*'
  targetOrigin?: string;
  // How long to time out waiting for responses. Default 60 seconds.
  timeoutMilliseconds?: number;

  // The event source. By default we use the window. This can be mocked for tests, or it can wrap
  // a different interface, e.g. workers.
  eventSource?: MinimalEventSourceInterface;

  // The event target. By default we use the window parent. This can be mocked for tests, or it can wrap
  // a different interface, e.g. workers.
  eventTarget?: MinimalEventTargetInterface;
}

/**
 * This is what we store in the state to keep track of pending promises.
 */
interface PromiseCompleter<TResult, TErrorData> {
  // A response was received (either error or result response).
  resolve(
    result: JsonRpcSucessfulResponseMessage<TResult> | JsonRpcErrorResponseMessage<TErrorData>
  ): void;

  // An error with executing the request was encountered.
  reject(error: Error): void;
}

type MessageId = number | string | null;

interface JsonRpcRequestMessage<TParams = any> {
  jsonrpc: '2.0';
  // Optional in the request.
  id?: MessageId;
  method: string;
  params?: TParams;
}

interface BaseJsonRpcResponseMessage {
  // Required but null if not identified in request
  id: MessageId;
  jsonrpc: '2.0';
}

interface JsonRpcSucessfulResponseMessage<TResult = any> extends BaseJsonRpcResponseMessage {
  result: TResult;
}

interface JsonRpcError<TData = any> {
  code: number;
  message: string;
  data?: TData;
}

interface JsonRpcErrorResponseMessage<TErrorData = any> extends BaseJsonRpcResponseMessage {
  error: JsonRpcError<TErrorData>;
}

type ReceivedMessageType =
  | JsonRpcRequestMessage
  | JsonRpcErrorResponseMessage
  | JsonRpcSucessfulResponseMessage;

/**
 * We return a random number between the 0 and the maximum safe integer so that we always generate a unique identifier,
 * across all communication channels.
 */
function getUniqueId(): number {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

export type IFrameEthereumProviderEventTypes =
  | 'connect'
  | 'close'
  | 'notification'
  | 'chainChanged'
  | 'networkChanged'
  | 'accountsChanged';

/**
 * Export the type information about the different events that are emitted.
 */
export interface IFrameEthereumProvider {
  on(event: 'connect', handler: () => void): this;

  on(event: 'close', handler: (code: number, reason: string) => void): this;

  on(event: 'notification', handler: (result: any) => void): this;

  on(event: 'chainChanged', handler: (chainId: string) => void): this;

  on(event: 'networkChanged', handler: (networkId: string) => void): this;

  on(event: 'accountsChanged', handler: (accounts: string[]) => void): this;
}

/**
 * Represents an error in an RPC returned from the event source. Always contains a code and a reason. The message
 * is constructed from both.
 */
export class RpcError extends Error {
  public readonly isRpcError: true = true;

  public readonly code: number;
  public readonly reason: string;

  constructor(code: number, reason: string) {
    super(`${code}: ${reason}`);

    this.code = code;
    this.reason = reason;
  }
}

/**
 * This is the primary artifact of this library.
 */
export class IFrameEthereumProvider extends EventEmitter<IFrameEthereumProviderEventTypes> {
  /**
   * Differentiate this provider from other providers by providing an isIFrame property that always returns true.
   */
  public get isIFrame(): true {
    return true;
  }

  /**
   * Always return this for currentProvider.
   */
  public get currentProvider(): IFrameEthereumProvider {
    return this;
  }

  private enabled: Promise<string[]> | null = null;
  private readonly targetOrigin: string;
  private readonly timeoutMilliseconds: number;
  private readonly eventSource: MinimalEventSourceInterface;
  private readonly eventTarget: MinimalEventTargetInterface;
  private readonly completers: {
    [id: string]: PromiseCompleter<any, any>;
  } = {};

  public constructor({
    targetOrigin = DEFAULT_TARGET_ORIGIN,
    timeoutMilliseconds = DEFAULT_TIMEOUT_MILLISECONDS,
    eventSource = window,
    eventTarget = window,
  }: IFrameEthereumProviderOptions = {}) {
    // Call super for `this` to be defined
    super();

    this.targetOrigin = targetOrigin;
    this.timeoutMilliseconds = timeoutMilliseconds;
    this.eventSource = eventSource;
    this.eventTarget = eventTarget;

    // Listen for messages from the event source.
    this.eventSource.addEventListener('message', this.handleEventSourceMessage);
  }

  /**
   * Helper method that handles transport and request wrapping
   * @param method method to execute
   * @param params params to pass the method
   * @param requestId jsonrpc request id
   */
  private async execute<TParams, TResult, TErrorData>(
    method: string,
    params?: TParams,
    requestId?: MessageId
  ): Promise<JsonRpcSucessfulResponseMessage<TResult> | JsonRpcErrorResponseMessage<TErrorData>> {
    const id = requestId ? requestId : getUniqueId();
    const payload: JsonRpcRequestMessage = {
      jsonrpc: JSON_RPC_VERSION,
      id,
      method,
      ...(typeof params === 'undefined' ? null : { params }),
    };

    const promise = new Promise<
      JsonRpcSucessfulResponseMessage<TResult> | JsonRpcErrorResponseMessage<TErrorData>
    >((resolve, reject) => (this.completers[id] = { resolve, reject }));

    // Send the JSON RPC to the event source.
    this.eventTarget.postMessage(payload, this.targetOrigin);

    // Delete the completer within the timeout and reject the promise.
    setTimeout(() => {
      if (this.completers[id]) {
        this.completers[id].reject(
          new Error(`RPC ID "${id}" timed out after ${this.timeoutMilliseconds} milliseconds`)
        );
        delete this.completers[id];
      }
    }, this.timeoutMilliseconds);

    return promise;
  }
  public async request<TParams = any[], TResult = any>(
    method: string,
    params?: TParams
  ): Promise<TResult> {
    const response = await this.execute<TParams, TResult, any>(method, params);

    if ('error' in response) {
      throw new RpcError(response.error.code, response.error.message);
    } else {
      return response.result;
    }
  }

  /**
   * Send the JSON RPC and return the result.
   * @param method method to send to the parent provider
   * @param params parameters to send
   */
  public async send<TParams = any[], TResult = any>(
    method: string,
    params?: TParams
  ): Promise<TResult> {
    const response = await this.execute<TParams, TResult, any>(method, params);

    if ('error' in response) {
      throw new RpcError(response.error.code, response.error.message);
    } else {
      return response.result;
    }
  }

  /**
   * Request the parent window to enable access to the user's web3 provider. Return accounts list immediately if already enabled.
   */
  public async enable(): Promise<string[]> {
    if (this.enabled === null) {
      const promise = (this.enabled = this.send('enable').catch((error) => {
        // Clear this.enabled if it's this promise so we try again next call.
        // this.enabled might be set from elsewhere if, e.g. the accounts changed event is emitted
        if (this.enabled === promise) {
          this.enabled = null;
        }
        // Rethrow the error.
        throw error;
      }));
    }

    return this.enabled;
  }

  /**
   * Backwards compatibility method for web3.
   * @param payload payload to send to the provider
   * @param callback callback to be called when the provider resolves
   */
  public async sendAsync(
    payload: { method: string; params?: any[]; id?: MessageId },
    callback: (
      error: string | null,
      result: { method: string; params?: any[]; result: any } | any
    ) => void
  ): Promise<void> {
    try {
      const result = await this.execute(payload.method, payload.params, payload.id);

      callback(null, result);
    } catch (error) {
      callback(error as string, null);
    }
  }

  /**
   * Handle a message on the event source.
   * @param event message event that will be processed by the provider
   */
  private handleEventSourceMessage = (event: MessageEvent) => {
    const data = event.data;

    // No data to parse, skip.
    if (!data) {
      return;
    }

    const message = data as ReceivedMessageType;

    // Always expect jsonrpc to be set to '2.0'
    if (message.jsonrpc !== JSON_RPC_VERSION) {
      return;
    }

    // If the message has an ID, it is possibly a response message
    if (typeof message.id !== 'undefined' && message.id !== null) {
      const completer = this.completers['' + message.id];
      console.log(event);

      // True if we haven't timed out and this is a response to a message we sent.
      if (completer) {
        // Handle pending promise
        if ('error' in message || 'result' in message) {
          completer.resolve(message);
        } else {
          console.log(message);
          completer.reject(new Error('Response from provider did not have error or result key'));
          // completer.resolve(message);
        }

        delete this.completers[message.id];
      }
    }

    // If the method is a request from the parent window, it is likely a subscription.
    if ('method' in message) {
      switch (message.method) {
        case 'notification':
          this.emitNotification(message.params);
          break;

        case 'connect':
          this.emitConnect();
          break;

        case 'close':
          this.emitClose(message.params[0], message.params[1]);
          break;

        case 'chainChanged':
          this.emitChainChanged(message.params[0]);
          break;

        case 'networkChanged':
          this.emitNetworkChanged(message.params[0]);
          break;

        case 'accountsChanged':
          this.emitAccountsChanged(message.params[0]);
          break;
      }
    }
  };

  private emitNotification(result: any) {
    this.emit('notification', result);
  }

  private emitConnect() {
    // If the provider isn't enabled but it emits a connect event, assume that it's enabled and initialize
    // with an empty list of accounts.
    if (this.enabled === null) {
      this.enabled = Promise.resolve([]);
    }
    this.emit('connect');
  }

  private emitClose(code: number, reason: string) {
    this.emit('close', code, reason);
  }

  private emitChainChanged(chainId: string) {
    this.emit('chainChanged', chainId);
  }

  private emitNetworkChanged(networkId: string) {
    this.emit('networkChanged', networkId);
  }

  private emitAccountsChanged(accounts: string[]) {
    this.enabled = Promise.resolve(accounts);
    this.emit('accountsChanged', accounts);
  }
}

import { Chain } from '@rainbow-me/rainbowkit';
import { Client, createWalletClient, custom, getAddress } from 'viem';
import { Address } from 'viem/accounts';
import { mainnet } from 'viem/chains';
import { createConnector, normalizeChainId } from 'wagmi';

// export type IFrameEthereumProviderOptions = ConstructorParameters<typeof IFrameEthereumProvider>[0];

// export class IFrameEthereumConnector extends Connector<
//   IFrameEthereumProvider,
//   IFrameEthereumProviderOptions
// > {
//   readonly id = 'ledgerLive';

//   readonly name = 'Ledger Live';

//   readonly ready = true;

//   providerInstance?: IFrameEthereumProvider;

//   async connect({ chainId }: { chainId?: number } = {}) {
//     try {
//       const provider = await this.getProvider();
//       if (!provider) throw new ConnectorNotFoundError();

//       if (provider.on) {
//         provider.on('accountsChanged', this.onAccountsChanged);
//         provider.on('chainChanged', this.onChainChanged);
//       }

//       this.emit('message', { type: 'connecting' });

//       const account = await this.getAccount();
//       // Switch to chain if provided
//       let id = await this.getChainId();
//       let unsupported = this.isChainUnsupported(id);
//       if (chainId && id !== chainId) {
//         const chain = await this.switchChain(chainId);
//         id = chain.id;
//         unsupported = this.isChainUnsupported(id);
//       }

//       return { account, chain: { id, unsupported }, provider };
//     } catch (error) {
//       if (this.isUserRejectedRequestError(error)) throw new UserRejectedRequestError(error);
//       if ((error as RpcError).code === -32002) throw new ResourceUnavailableError(error);
//       throw error;
//     }
//   }

//   async disconnect() {
//     const provider = await this.getProvider();
//     if (!provider?.removeListener) return;

//     provider.removeListener('accountsChanged', this.onAccountsChanged);
//     provider.removeListener('chainChanged', this.onChainChanged);
//   }

//   async getAccount() {
//     const provider = await this.getProvider();
//     if (!provider) throw new ConnectorNotFoundError();
//     const accounts = await provider.send('eth_requestAccounts');
//     // return checksum address
//     return getAddress(accounts[0] as string);
//   }

//   async getChainId() {
//     const provider = await this.getProvider();
//     if (!provider) throw new ConnectorNotFoundError();
//     return provider.send('eth_chainId').then(normalizeChainId);
//   }

//   async getProvider() {
//     if (!this.providerInstance) {
//       this.providerInstance = new IFrameEthereumProvider(this.options);
//     }
//     return this.providerInstance;
//   }

//   async getSigner() {
//     const [provider, account] = await Promise.all([this.getProvider(), this.getAccount()]);
//     return new providers.Web3Provider(provider as unknown as providers.ExternalProvider).getSigner(
//       account
//     );
//   }

//   async isAuthorized() {
//     try {
//       const provider = await this.getProvider();
//       if (!provider) throw new ConnectorNotFoundError();
//       const accounts = await provider.send('eth_accounts');
//       const account = accounts[0];
//       return !!account;
//     } catch {
//       return false;
//     }
//   }

//   override async switchChain(chainId: number): Promise<Chain> {
//     const provider = await this.getProvider();
//     if (!provider) throw new ConnectorNotFoundError();
//     const id = hexValue(chainId);

//     try {
//       await provider.send('wallet_switchEthereumChain', [{ chainId: id }]);

//       return (
//         this.chains.find((x) => x.id === chainId) ?? {
//           id: chainId,
//           name: `Chain ${id}`,
//           network: `${id}`,
//           nativeCurrency: { decimals: 18, name: 'Ether', symbol: 'ETH' },
//           rpcUrls: { default: { http: [''] }, public: { http: [''] } },
//         }
//       );
//     } catch (error) {
//       const chain = this.chains.find((x) => x.id === chainId);
//       if (!chain) throw new ChainNotConfiguredError({ chainId, connectorId: this.id });

//       // Indicates chain is not added to provider
//       if (
//         (error as ProviderRpcError).code === 4902 ||
//         // Unwrapping for MetaMask Mobile
//         // https://github.com/MetaMask/metamask-mobile/issues/2944#issuecomment-976988719
//         (error as RpcError<{ originalError?: { code: number } }>)?.data?.originalError?.code ===
//           4902
//       ) {
//         try {
//           await provider.send('wallet_addEthereumChain', [
//             {
//               chainId: id,
//               chainName: chain.name,
//               nativeCurrency: chain.nativeCurrency,
//               rpcUrls: [chain.rpcUrls.public ?? chain.rpcUrls.default],
//               blockExplorerUrls: this.getBlockExplorerUrls(chain),
//             },
//           ]);

//           return chain;
//         } catch (addError) {
//           if (this.isUserRejectedRequestError(addError)) throw new UserRejectedRequestError(error);
//           throw new AddChainError();
//         }
//       }

//       if (this.isUserRejectedRequestError(error)) throw new UserRejectedRequestError(error);
//       throw new SwitchChainError(error);
//     }
//   }

//   override async watchAsset({
//     address,
//     decimals = 18,
//     image,
//     symbol,
//   }: {
//     address: string;
//     decimals?: number;
//     image?: string;
//     symbol: string;
//   }) {
//     const provider = await this.getProvider();
//     if (!provider) throw new ConnectorNotFoundError();

//     return provider.send('wallet_watchAsset', [
//       {
//         type: 'ERC20',
//         options: {
//           address,
//           decimals,
//           image,
//           symbol,
//         },
//       },
//     ]);
//   }

//   protected onAccountsChanged = (accounts: string[]) => {
//     if (accounts.length === 0 || !accounts[0]) {
//       this.emit('disconnect');
//     } else {
//       this.emit('change', { account: getAddress(accounts[0]) });
//     }
//   };

//   protected onChainChanged = (chainId: number | string) => {
//     const id = normalizeChainId(chainId);
//     const unsupported = this.isChainUnsupported(id);
//     this.emit('change', { chain: { id, unsupported } });
//   };

//   // eslint-disable-next-line class-methods-use-this
//   protected isUserRejectedRequestError(error: unknown) {
//     return (error as ProviderRpcError).code === 4001;
//   }

//   protected onDisconnect = () => {
//     this.emit('disconnect');
//   };
// }

// // Usageconst iframeControl = new IframeControl();
// // iframeControl.openModal(); // To open the modal
// // // iframeControl.closeModal(); // To close the modal
// import React, { createContext, ReactNode, useContext, useState } from 'react';

// import { MoonProvider } from '@moonup/ethers';
// import { MoonSDK } from '@moonup/moon-sdk';
// import { Session, SupabaseClient } from '@supabase/supabase-js';
// import './index.css';

// export interface MoonSDKHook {
//   iframeRef: React.RefObject<HTMLIFrameElement>;
//   isLoaded: boolean;
// }

// const MoonSDKContext = createContext<MoonSDKHook | undefined>(undefined);
// // const moonInstance = new MoonSDK();

// export const MoonSDKProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const iframeRef = useRef(null);
//   const [isLoaded, setIsLoaded] = useState(false);

//   return (
//     <MoonSDKContext.Provider value={{ iframeRef, isLoaded }}>
//       <iframe ref={iframeRef} src="http://localhost:3001" style={{ display: 'none' }} />

//       {children}
//     </MoonSDKContext.Provider>
//   );
// };

// export const useMoonSDK = (): MoonSDKHook => {
//   const context = useContext(MoonSDKContext);
//   if (context === undefined) {
//     throw new Error('useMoonSDK must be used within a MoonSDKProvider');
//   }
//   return context;
// };

export interface iframeConnectorOptions {
  chains: Chain[];
  shimDisconnect?: boolean;
}

// export const createIframeConnector = () => {
//   return createConnector((config) => ({
//     id: 'iframe',
//     name: 'Iframe',
//     type: 'wallet',
//     icon: 'https://svgshare.com/i/iJK.svg',
//     connect: async (param: {
//       chainId?: number;
//       isReconnecting?: boolean;
//     }): Promise<{
//       accounts: readonly Address[];
//       chainId: number;
//     }> => {
//       console.log('uwu');
//       const provider = new IFrameEthereumProvider({
//         targetOrigin: '*',
//         timeoutMilliseconds: 240000,
//       });
//       const accounts = await provider.send('eth_requestAccounts');
//       const chainId = await provider.send('eth_chainId');
//       return { accounts, chainId };
//     },
//     disconnect: async (): Promise<void> => {
//       const provider = new IFrameEthereumProvider({
//         targetOrigin: '*',
//         timeoutMilliseconds: 240000,
//       });
//       provider.removeAllListeners();
//     },
//     getAccounts: async (): Promise<readonly Address[]> => {
//       const provider = new IFrameEthereumProvider({
//         targetOrigin: '*',
//         timeoutMilliseconds: 240000,
//       });
//       const accounts = await provider.send('eth_requestAccounts');
//       return accounts;
//     },
//     getChainId: async () => {
//       const provider = new IFrameEthereumProvider({
//         targetOrigin: '*',
//         timeoutMilliseconds: 240000,
//       });
//       return provider.send('eth_chainId');
//     },
//     getProvider: async () => {
//       return new IFrameEthereumProvider({
//         targetOrigin: '*',
//         timeoutMilliseconds: 240000,
//       });
//     },
//     getClient: async (parameters: { chainId?: number }): Promise<Client> => {
//       const iframe = new IFrameEthereumProvider({
//         targetOrigin: '*',
//         timeoutMilliseconds: 240000,
//       });
//       return createWalletClient({
//         chain: mainnet,
//         transport: custom(iframe),
//       });
//     },
//     isAuthorized: async () => {
//       const provider = new IFrameEthereumProvider({
//         targetOrigin: '*',
//         timeoutMilliseconds: 240000,
//       });
//       const accounts = await provider.send('eth_accounts');
//       return !!accounts[0];
//     },
//     setup: async (): Promise<void> => {
//       return Promise.resolve();
//     },
//     switchChain: async (parameters: { chainId: number }): Promise<Chain> => {
//       const provider = new IFrameEthereumProvider({
//         targetOrigin: '*',
//         timeoutMilliseconds: 240000,
//       });
//       if (accounts.length === 0 || !accounts[0]) {
//         provider.send('disconnect');
//       } else {
//         provider.send('change', { account: getAddress(accounts[0]) });
//       }
//     },

//     onChainChanged: (chainId: number | string) => {
//       const id = normalizeChainId(chainId);
//       // const unsupported = this.isChainUnsupported(id);
//       const provider = new IFrameEthereumProvider({
//         targetOrigin: '*',
//         timeoutMilliseconds: 240000,
//       });
//       provider.send('change', { chain: { id } });
//     },

//     onDisconnect: () => {
//       const provider = new IFrameEthereumProvider({
//         targetOrigin: '*',
//         timeoutMilliseconds: 240000,
//       });
//       provider.send('disconnect');
//     },
//   }));
// };
