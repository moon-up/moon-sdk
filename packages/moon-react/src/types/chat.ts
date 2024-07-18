// src/types/chatTypes.ts

export interface TransactionStep {
  title: string;
  description: string;
  successCondition: string;
  transaction: {
    to: string;
    from?: string;
    nonce?: number;
    gasLimit?: string;
    gasPrice?: string;
    data: string;
    value?: string;
    chainId?: number;
  };
}

export interface BaseChatMessage {
  id: string;
  timestamp: Date;
  sender: "user" | "system";
  type: ChatMessageType;
  content?: string;
}

export interface MultiStepTransactionMessage extends BaseChatMessage {
  type: "multiStepTransaction";
  steps: TransactionStep[];
}

export type ChatMessageType =
  | "protocolInfo"
  | "poolInfo"
  | "chainInfo"
  | "tokenInfo"
  | "walletInfo"
  | "transactionResult"
  | "portfolioChange"
  | "historicalTransaction"
  | "historicalPerformance"
  | "userMessage"
  | "multiStepTransaction";

export interface UserMessage extends BaseChatMessage {
  type: "userMessage";
  content: string;
}

export interface ProtocolInfo extends BaseChatMessage {
  type: "protocolInfo";
  name: string;
  description: string;
  tvl: number;
  apy: number;
}

export interface PoolInfo extends BaseChatMessage {
  type: "poolInfo";
  name: string;
  tokens: string[];
  totalLiquidity: number;
  apy: number;
}

export interface ChainInfo extends BaseChatMessage {
  type: "chainInfo";
  name: string;
  nativeCurrency: string;
  blockTime: number;
  gasPrice: number;
}

export interface TokenInfo extends BaseChatMessage {
  type: "tokenInfo";
  name: string;
  symbol: string;
  price: number;
  marketCap: number;
}

export interface WalletInfo extends BaseChatMessage {
  type: "walletInfo";
  address: string;
  balance: number;
  tokens: { symbol: string; balance: number }[];
}

export interface TransactionResultChat extends BaseChatMessage {
  type: "transactionResult";
  status: "success" | "failure";
  hash: string;
  from: string;
  to: string;
  amount: number;
  currency: string;
}

export interface PortfolioChange extends BaseChatMessage {
  type: "portfolioChange";
  changePercentage: number;
  newTotal: number;
}

export interface HistoricalTransaction extends BaseChatMessage {
  type: "historicalTransaction";
  transactions: {
    date: Date;
    type: string;
    amount: number;
    currency: string;
  }[];
}

export interface HistoricalPerformance extends BaseChatMessage {
  type: "historicalPerformance";
  token: string;
  data: { date: Date; price: number }[];
}

export type ChatMessage =
  | ProtocolInfo
  | PoolInfo
  | ChainInfo
  | TokenInfo
  | WalletInfo
  | TransactionResultChat
  | PortfolioChange
  | HistoricalTransaction
  | HistoricalPerformance
  | UserMessage
  | MultiStepTransactionMessage;
