import EventEmitter from "events";
// import { chains } from "../config/chains";
import { BlockExplorerERC20Transfer, BlockExplorerERC721Transfer, BlockExplorerInterface, BlockExplorerTransaction, ExplorerResultType } from "./BlockExplorer/BlockExplorerInterface";

interface ChainBlockExplorers {
    [chainId: string]: BlockExplorerInterface;
}
//For a given wallet address get the block explorer transactions
class TransactionHistoryManager {
    private chainBlockExplorers: ChainBlockExplorers;
    public events = new EventEmitter();

    constructor() {
        this.chainBlockExplorers = {};
        // for (const chain of chains) {
        //     this.chainBlockExplorers[chain.chainId] = new chain.blockExplorer(chain.blockExplorerApiUrl);
        // }
    }

    //Get the transactions for a given wallet address
    async getTransactionsForAddressOnChain(address: string, chainId: string): Promise<BlockExplorerTransaction[]> {
        try {
            return await this.chainBlockExplorers[chainId].getTransactionsForAddress(address);
        } catch (e) {
            console.log("TransactionHistoryManager::getTransactionsForAddressOnChain::error", e)
            return [];
        }
    }

    async getERC20TransfersForAddressOnChain(address: string, chainId: string): Promise<BlockExplorerERC20Transfer[]> {
        try {
            return await this.chainBlockExplorers[chainId].getERC20TransfersForAddress(address);
        } catch (e) {
            console.log("TransactionHistoryManager::getERC20TransfersForAddressOnChain::error", e)
            return [];
        }
    }

    async getERC721TransfersForAddressOnChain(address: string, chainId: string): Promise<BlockExplorerERC721Transfer[]> {
        try {
            return await this.chainBlockExplorers[chainId].getERC721TransfersForAddress(address);
        } catch (e) {
            console.log("TransactionHistoryManager::getERC721TransfersForAddressOnChain::error", e)
            return [];
        }
    }
}

export const transactionHistoryManager = new TransactionHistoryManager();