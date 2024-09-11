import PQueue from 'p-queue';
//Interface For a block explorer
export interface BlockExplorerTransaction {
    blockNumber: string;
    timeStamp: string;
    hash: string;
    nonce: string;
    blockHash: string;
    transactionIndex: string;
    from: string;
    to: string;
    value: string;
    gas: string;
    gasPrice: string;
    isError: string;
    txreceipt_status: string;
    input: string;
    contractAddress: string;
    cumulativeGasUsed: string;
    gasUsed: string;
    confirmations: string;
    methodId: string;
    functionName: string;
}

export interface BlockExplorerERC20Transfer {
    blockHash: string;
    blockNumber: string;
    confirmations: string;
    contractAddress: string;
    cumulativeGasUsed: string;
    from: string;
    functionName: string;
    gas: string;
    gasPrice: string;
    gasUsed: string;
    hash: string;
    input: string;
    nonce: string;
    timeStamp: string;
    to: string;
    tokenDecimal: string;
    tokenName: string;
    tokenSymbol: string;
    transactionIndex: string;
    value: string;
}

/*
{"blockNumber":"23253292","timeStamp":"1663235747","hash":"0x6fed0f96e19c8d003843963ccc09b5a2cedc2a8945a34dc58349ed7d7eea7a02","nonce":"23","blockHash":"0x6e1a8f03ad105079e6dbbc4fc65221d0cda1c4f181cdb1bcfe0d98f25519f0da","from":"0x0000000000000000000000000000000000000000","contractAddress":"0x63d29f9c28ce781dacb284a99b1239a25e3e2159","to":"0xa20e8a921b969e690c1f7ef8dcc1ea88821cd4a1","tokenID":"570","tokenName":"Merge Bear","tokenSymbol":"MB","tokenDecimal":"0","transactionIndex":"0","gas":"183178","gasPrice":"1000000","gasUsed":"183178","cumulativeGasUsed":"183178","input":"deprecated","confirmations":"91669529"}
 */
export interface BlockExplorerERC721Transfer {
    blockNumber: string;
    timeStamp: string;
    hash: string;
    nonce: string;
    blockHash: string;
    from: string;
    contractAddress: string;
    to: string;
    tokenID: string;
    tokenName: string;
    tokenSymbol: string;
    tokenDecimal: string;
    transactionIndex: string;
    gas: string;
    gasPrice: string;
    gasUsed: string;
    cumulativeGasUsed: string;
    input: string;
    confirmations: string;
}

export enum ExplorerResultType {
    ERC20Transfers = "erc20Transfers",
    ERC721Transfers = "erc721Transfers",
    NormalTransactions = "normalTransactions",
}

export abstract class BlockExplorerInterface {
    protected blockExplorerAPIURL: string;
    protected lastCallTimestamp: number = 0;
    protected cacheValidTimestamp: Map<string, number> = new Map();
    protected minInterval: number = 1000; // Minimum interval between calls in milliseconds
    protected ongoingRequest: Promise<BlockExplorerTransaction[] | BlockExplorerERC20Transfer[]> | null = null;
    protected queue = new PQueue({
        interval: 5000, // 5000 ms = 5 seconds
        intervalCap: 1 // Only 1 operation per interval
    });

    constructor(
        blockExplorerAPIURL: string
    ) {
        this.blockExplorerAPIURL = blockExplorerAPIURL;
    }

    protected async fetchTransactions(address: string, apiUrl: string, type: ExplorerResultType): Promise<any[]> {
        return this.queue.add(async () => {
            this.cacheValidTimestamp.set(type, Date.now());
            this.lastCallTimestamp = Date.now();
            const response = await fetch(apiUrl);
            const data = await response.json();
            console.log("BlockExplorerInterface::fetchTransactions::data", data)
            if (data.status === "0") {
                return [];
            }
            this.ongoingRequest = null;
            return data.result;
        });
    }
    protected extractFunctionName(functionSignature: string): string {
        if (functionSignature === undefined) return '';
        const match = functionSignature.match(/^[^\(]+/);
        return match ? match[0] : '';
    }
    abstract getTransactionsForAddress(address: string): Promise<BlockExplorerTransaction[]>;
    abstract getERC20TransfersForAddress(address: string): Promise<BlockExplorerERC20Transfer[]>;
    abstract getERC721TransfersForAddress(address: string): Promise<BlockExplorerERC721Transfer[]>;
    abstract transformRawTransactionResponse(rawTransactions: any[]): any[];
}