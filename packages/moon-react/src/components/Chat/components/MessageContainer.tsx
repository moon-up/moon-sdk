// src/components/chat/MessageContainer.tsx

import React, { ReactNode } from "react";

interface MessageContainerProps {
  children: ReactNode;
  sender: "user" | "system";
  timestamp: Date;
}

const MessageContainer: React.FC<MessageContainerProps> = ({
  children,
  sender,
  timestamp,
}) => {
  const isUser = sender === "user";

  return (
    <div className={`w-[100%] ${isUser ? "ml-auto" : "mr-auto"} mb-4`}>
      <div
        className={`rounded-sm p-4 shadow-md ${
          isUser ? "bg-gray-600 text-white" : "bg-gray-200 text-black"
        }`}
      >
        {children}
      </div>
      <div
        className={`text-xs text-gray-500 mt-1 ${
          isUser ? "text-right" : "text-left"
        }`}
      >
        {timestamp.toLocaleString()}
      </div>
    </div>
  );
};

export default MessageContainer;
