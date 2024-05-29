export const INJECTED_PROVIDER = /* js */ `
(function () {
    class MoonProvider {
        constructor () {
            this.isMetaMask = true;
            this.isMoonProvider = true;
            this.isConnected = true;
            this.isUnlocked = true;
            this.networkVersion = '0xa';
            this.selectedAddress = '';
            this.callbacks = {};
            this.callbackId = 0;
            //             on(event: "connect", listener: (info: ProviderInfo) => void): void;
            // on(event: "disconnect", listener: (error: ProviderRpcError) => void): void;
            // on(event: "message", listener: (message: ProviderMessage) => void): void;
            // on(event: "chainChanged", listener: (chainId: ProviderChainId) => void): void;
            // on(event: "accountsChanged", listener: (accounts: ProviderAccounts) => void): void;
            this.events = {
                'connect': [
                    this.onConnect
                ],
                'disconnect': [
                    this.onDisconnect
                ],
                'message': [
                    this.onMessage
                ],
                'chainChanged': [
                    this.onNetworkChanged
                ],
                'accountsChanged': [
                    this.onAccountsChanged
                ]

            };
        }

        postMessage(message) {
            console.log('postMessage', message);
            ReactNativeWebView.postMessage(JSON.stringify(message));
            return new Promise((resolve, reject) => {
                this.callbacks[message.id] = { resolve, reject };
            });
        }

        emit(event, data) {
            console.log('emit', event, data);
            if (this.events[event]) {
                this.events[event].forEach(cb => {
                    cb(data);
                });
            }
        }
        request(args) {
            console.log('request', args);
            const id = this.callbackId++;
            const req = {
                id: id,
                jsonrpc: "2.0",
                method: args.method,
                params: args.params || [],
            };
            switch (args.method) {
                case 'eth_requestAccounts':
                    this.emit('connect', { chainId: this.networkVersion, accounts: [this.selectedAddress] });
                    return Promise.resolve(this.selectedAddress);
                case 'eth_accounts':
                    return Promise.resolve(this.selectedAddress ? [this.selectedAddress] : []);
                case 'eth_chainId':
                    return Promise.resolve(this.networkVersion);
                case 'eth_coinbase':
                    return Promise.resolve(this.selectedAddress);
                case 'eth_uninstallFilter':
                    return Promise.resolve(true);
                default:
                    return this.postMessage(req);
            }
        }
        on(event, cb) {
            console.log('on', event, cb);
            if (!this.events[event]) {
                this.events[event] = [];
            }
            this.events[event].push(cb);
        }
        enable() {
            console.log('enable');
            return this.request({ method: 'eth_requestAccounts' });
        }
        sendAsync(args, cb) {
            console.log('sendAsync', args, cb);

            const id = this.callbackId++;
            const req = {
                id: id,
                jsonrpc: "2.0",
                method: args.method,
                params: args.params || [],
            };
            this.postMessage(req).then(result => {
                cb(null, result);
            }).catch(error => {
                cb(error);
            });
        }
        send(args) {
            console.log('send', args);
            return this.request(args);
        }
        onConnect(cb) {
            console.log('onConnect', cb);
        }
        onAccountsChanged(accounts) {
            console.log('onAccountsChanged', accounts);
            this.selectedAddress = accounts[0];

        }
        onNetworkChanged(network) {
            console.log('onNetworkChanged', network);
            // update chain id
            this.networkVersion = network;
        }
        onMessage(cb) {
            console.log('onMessage', cb);

        }
        onDisconnect(cb) {
            console.log('onDisconnect', cb);

        }
        removeListener(event, cb) {
            console.log('removeListener', event, cb);
            if (this.events[event]) {
                this.events[event] = this.events[event].filter(e => e !== cb);
            }
        }
        removeAllListeners(event) {
            console.log('removeAllListeners', event);
            this.events[event] = [];
        }


    }

    window.ethereum = new MoonProvider();
    window.web3 = new MoonProvider();


    function bridgeSend(data) {
        console.log('bridgeSend', data);
        ReactNativeWebView.postMessage(JSON.stringify(data));
    }
    var history = window.history;
    var pushState = history.pushState;
    history.pushState = function (state) {
        setTimeout(function () {
            bridgeSend({
                type: 'history-state-changed',
                navState: { url: location.href, title: document.title }
            });
        }, 100);
        return pushState.apply(history, arguments);
    };
    function onMessage(event) {
        console.log('onMessage', event.data);
        const data = JSON.parse(event.data);
        const id = data.id;
        console.log('id', id);
        const callback = window.ethereum.callbacks[id];
        console.log('callback', callback);
        if (callback) {
            if (data.error) {
                callback.reject(data.error);
            } else {
                callback.resolve(data.result);
            }
            delete window.ethereum.callbacks[id];
        }
    };

    // ReactNativeWebView.onMessage = onMessage;
    document.addEventListener('message', onMessage);
})();
`;
