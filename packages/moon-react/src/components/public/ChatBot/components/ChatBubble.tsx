import React from "react";
import { ChatMessage } from "@/types";
import ProtocolInfoBubble from "./bubbles/ProtocolInfoBubble";
import PoolInfoBubble from "./bubbles/PoolInfoBubble";
import TokenInfoBubble from "./bubbles/TokenInfoBubble";
import WalletInfoBubble from "./bubbles/WalletInfoBubble";
import TransactionResultBubble from "./bubbles/TransactionResultBubble";
import PortfolioChangeBubble from "./bubbles/PortfolioChangeBubble";
import HistoricalTransactionBubble from "./bubbles/HistoricalTransactionBubble";
import HistoricalPerformanceBubble from "./bubbles/HistoricalPerformanceBubble";
import ChainInfoBubble from "./bubbles/ChainInfoBubble";
import UserMessageBubble from "./bubbles/UserMessageBubble";
import MultiStepTransactionBubble from "./bubbles/MultiStepTransactionBubble";
import MessageContainer from "./MessageContainer";

interface ChatBubbleProps {
  message: ChatMessage;
}

const bubbleComponents: { [key: string]: any } = {
  poolInfo: PoolInfoBubble,
  chainInfo: ChainInfoBubble,
  tokenInfo: TokenInfoBubble,
  walletInfo: WalletInfoBubble,
  transactionResult: TransactionResultBubble,
  portfolioChange: PortfolioChangeBubble,
  historicalTransaction: HistoricalTransactionBubble,
  historicalPerformance: HistoricalPerformanceBubble,
  protocolInfo: ProtocolInfoBubble,
  userMessage: UserMessageBubble,
  multiStepTransaction: MultiStepTransactionBubble,
};

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const BubbleComponent = bubbleComponents[message.type];

  if (!BubbleComponent) {
    return <div>Unsupported message type</div>;
  }

  return (
    <MessageContainer sender={message.sender} timestamp={message.timestamp}>
      <BubbleComponent message={message} />
    </MessageContainer>
  );
};

export default ChatBubble;
