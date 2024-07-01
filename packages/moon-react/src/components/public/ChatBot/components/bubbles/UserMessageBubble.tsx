import { ChatMessage } from "@/types";
import React from "react";

type UserMessageBubbleProps = {
  message: ChatMessage;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  contentProps?: React.HTMLAttributes<HTMLDivElement>;
};

const UserMessageBubble: React.FC<UserMessageBubbleProps> = ({
  message,
  containerProps,
  contentProps,
}) => (
  <div
    {...containerProps}
    className={`flex flex-col justify-start items-end gap-2 p-2 rounded m-1 bg-gray-200 text-black ${
      containerProps?.className || ""
    }`}
  >
    <div {...contentProps} className={`p-1 ${contentProps?.className || ""}`}>
      {message.content}
    </div>
  </div>
);

export default UserMessageBubble;
