import React, { useEffect, useRef, useState } from "react";
import { useMoonSDK, useMoonTokenManager } from "../../..";
import Input from "../../Input/Input";
import { ChatMessage } from "@/types";
import { testMessages } from "./testData/chatTestData";
import ChatBubble from "./components/ChatBubble";

type ChatBotProps = {
  className?: string;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  messageBoxProps?: React.HTMLAttributes<HTMLDivElement>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  sendButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  clearButtonProps?: React.HTMLAttributes<HTMLDivElement>;
};

const ChatBot: React.FC<ChatBotProps> = ({
  className,
  containerProps,
  messageBoxProps,
  inputProps,
  sendButtonProps,
  clearButtonProps,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const messageBoxRef = useRef<HTMLDivElement>(null);
  const [showMessages, setShowMessages] = useState(false);
  const { chatOpen, wallet, chain, wallets } = useMoonSDK();
  const { tokens } = useMoonTokenManager();

  console.log("showMessages", showMessages);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial",
      type: "userMessage",
      sender: "system",
      timestamp: new Date(),
      content:
        "Hello! I'm Cod3x, your friendly AI assistant. How can I help you today?",
    },
    ...testMessages,
  ]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowMessages(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  useEffect(() => {
    loadMessagesFromLocalStorage();
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTo(0, messageBoxRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    if (messages.length > 1) {
      saveMessagesToLocalStorage();
    }
  }, [messages]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const clearMessages = () => {
    setMessages([]);
    localStorage.removeItem("messages");
  };

  const saveMessagesToLocalStorage = () => {
    localStorage.setItem("messages", JSON.stringify(messages));
  };

  const loadMessagesFromLocalStorage = () => {
    let storedMessages = JSON.parse(localStorage.getItem("messages") || "[]");
    if (storedMessages.length === 0) {
      storedMessages = [messages[0]];
    }
    setMessages(storedMessages.filter((msg: ChatMessage) => msg?.content));
  };

  const sendMessage = async () => {
    setShowMessages(true);
    setUserInput("");
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "userMessage",
      sender: "user",
      timestamp: new Date(),
      content: userInput,
    };
    setMessages([...messages, userMessage]);

    try {
      let response = await fetch(
        "https://api.conscience.ngrok.app/conscience/1/Cod3xV2/trigger",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: `User Available Wallets: ${JSON.stringify(
              wallets
            )}\nUser tokens: ${JSON.stringify(
              tokens
            )}\nUser Selected Wallet: ${wallet}\n Selected Chain: ${JSON.stringify(
              chain
            )}\nUser Query:${userInput}`,
          }),
        }
      ).then((response) => response.json());

      let botMessage: ChatMessage;
      try {
        let jsonData = JSON.parse(response.data);
        if (response.data.includes("abiFileName")) {
          botMessage = {
            id: Date.now().toString(),
            type: "multiStepTransaction",
            sender: "system",
            timestamp: new Date(),
            content: response.data,
            steps: jsonData,
          };
        } else {
          throw new Error("Not a transaction");
        }
      } catch (e) {
        botMessage = {
          id: Date.now().toString(),
          type: "userMessage",
          sender: "system",
          timestamp: new Date(),
          content: response.data,
        };
      }
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
    messageBoxRef.current?.scrollTo(0, messageBoxRef.current?.scrollHeight);
  };

  return (
    <div
      ref={containerRef}
      {...containerProps}
      className={`fixed z-40 top-0 right-0 flex justify-center items-center flex-col h-full w-full max-w-[600px] backdrop-blur-md gap-2 transition-all ease-in duration-500 shadow-lg bg-background-secondary ${
        chatOpen ? "top-0 right-0" : "top-[120%] right-0"
      } ${className} ${containerProps?.className || ""}`}
    >
      <div
        ref={messageBoxRef}
        {...messageBoxProps}
        className={`flex flex-col-reverse overflow-y-auto text-primary-text rounded-lg h-[90%] w-[95%] p-0 m-0 ${
          messageBoxProps?.className || ""
        }`}
      >
        {[...messages].reverse().map((msg) => (
          <ChatBubble key={msg.id} message={msg} />
        ))}
      </div>
      <div className="flex justify-between items-center w-[95%] h-[10%] max-w-[90%] relative mb-4">
        <div
          {...clearButtonProps}
          onClick={clearMessages}
          className={`absolute bottom-0 right-0 text-xs text-primary-text cursor-pointer hover:text-secondary ${
            clearButtonProps?.className || ""
          }`}
        >
          Clear Message History
        </div>
        <Input
          {...inputProps}
          onFocus={() => setShowMessages(true)}
          onMouseEnter={() => setShowMessages(true)}
          type="text"
          placeholder="Message Cod3x"
          value={userInput}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />
        <button
          {...sendButtonProps}
          onClick={sendMessage}
          disabled={!userInput}
          onPointerLeave={() => setShowMessages(false)}
          onMouseLeave={() => setShowMessages(false)}
          className={`absolute bottom-1/2 right-6 translate-x-1/2 translate-y-1/2 p-2 rounded bg-primary text-primary-text font-bold cursor-pointer border border-secondary hover:opacity-80 ${
            sendButtonProps?.className || ""
          }`}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
