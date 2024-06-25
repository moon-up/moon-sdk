import React, { useContext, useEffect, useRef, useState } from "react";
import { useMoonSDK } from "../../..";
import Input from "../../Input/Input";
import Button from "../../Button/Button";

interface Message {
  author: "user" | "bot";
  content: string;
  transaction?: any;
  type?: "text" | "image" | "video" | "transaction" | "yeilds" | "walletInfo";
  isTyping?: boolean; // Add this field to indicate typing status
}

type ChatBotProps = {
  className?: string;
};

const ChatBot: React.FC = () => {
  const { chatOpen } = useMoonSDK();
  const containerRef = useRef<HTMLDivElement>(null);
  const messageBoxRef = useRef<HTMLDivElement>(null);
  const [showMessages, setShowMessages] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      author: "bot",
      content:
        "Hello! I'm Cod3x, your friendly AI assistant. How can I help you today?",
    },
  ]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowMessages(false); // Close the dropdown if click is outside
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]); // Empty array ensures that effect is only run on mount and unmount

  useEffect(() => {
    loadMessagesFromLocalStorage();
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTo(0, messageBoxRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    if (messages.length > 1 && !messages[messages.length - 1].isTyping) {
      saveMessagesToLocalStorage();
    }
  }, [messages]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const typeMessage = (
    message: string,
    messageIndex: number,
    userMessage: Message
  ) => {
    let typedContent = "";
    let charIndex = 0;
    let speed = 10;
    if (message.length > 50) {
      speed = 5;
    }
    const typingInterval = setInterval(() => {
      typedContent += message[charIndex];

      const newMessages = [...messages, userMessage];
      newMessages[messageIndex] = {
        ...newMessages[messageIndex],
        content: typedContent,
        isTyping: charIndex < message.length - 1,
      };
      setMessages(newMessages);
      charIndex++;

      if (charIndex === message.length) {
        clearInterval(typingInterval);
      }
    }, speed); // Adjust typing speed by changing the interval time
  };

  const clearMessages = () => {
    setMessages([]);
    localStorage.removeItem("messages");
  };

  const saveMessagesToLocalStorage = () => {
    console.log("saving messages to local storage", messages);
    localStorage.setItem("messages", JSON.stringify(messages));
  };

  const loadMessagesFromLocalStorage = () => {
    let messages = JSON.parse(localStorage.getItem("messages") || "[]");
    if (messages.length === 0) {
      messages.push({
        author: "bot",
        content:
          "Hello! I'm Cod3x, your friendly AI assistant. How can I help you today?",
      });
    }
    //remove any empty messages or null messages
    messages = messages.filter((msg: Message) => msg?.content);
    setMessages(messages);
  };

  const sendMessage = async () => {
    setShowMessages(true);
    setUserInput(""); // Clear the input field after sending message
    const userMessage: Message = { author: "user", content: userInput };
    //scroll to the bottom of the chat box
    messageBoxRef.current?.scrollTo(0, messageBoxRef.current?.scrollHeight);

    const botTypingMessage: Message = {
      author: "bot",
      content: "",
      isTyping: true,
    };
    setMessages([...messages, userMessage, botTypingMessage]);

    try {
      // const response = await axios.post(
      //   "https://api.conscience.ngrok.app/conscience/1/Cod3x/trigger",
      //   {
      //     text: userInput,
      //   }
      // );

      //convert to fetch call
      let response = await fetch(
        "https://api.conscience.ngrok.app/conscience/1/TestRAG/trigger",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: userInput }),
        }
      ).then((response) => response.json());

      console.log(response.data);
      try {
        let jsonData = JSON.parse(response.data);
        if (response.data.includes("abiFileName")) {
          console.log("Transaction data", jsonData);
          const isArray = Array.isArray(jsonData);

          if (isArray) {
            const transactionMessage: Message = {
              author: "bot",
              content: response.data,
              transaction: jsonData,
              isTyping: false,
              type: "transaction",
            };
            setMessages([...messages, userMessage, transactionMessage]);
          } else {
            typeMessage(
              `Failed to parse the transaction response: ${response.data}`,
              messages.length + 1,
              userMessage
            );
          }
        }
      } catch (e) {
        typeMessage(response.data, messages.length + 1, userMessage);
      }
    } catch (error) {
      console.error("Error fetching response:", error);
    }
    messageBoxRef.current?.scrollTo(0, messageBoxRef.current?.scrollHeight);
  };

  return (
    <div
      ref={containerRef}
      className={`fixed z-40 top-0 right-0 flex justify-center items-center flex-col h-full w-full max-w-[600px] backdrop-blur-md gap-2 transition-all ease-in duration-500 shadow-lg bg-background-secondary ${
        chatOpen ? "top-0 right-0" : "top-[120%] right-0"
      }`}
    >
      <div
        className="flex flex-col-reverse overflow-y-auto text-primary-text rounded-lg h-[90%] w-[95%] p-0 m-0"
        ref={messageBoxRef}
      >
        {[...messages].reverse().map((msg, index) => {
          if (msg?.type === "transaction") {
            const isArray = Array.isArray(msg.transaction);
            return (
              <div
                key={index}
                className="flex flex-col justify-start items-start gap-2 p-2 rounded bg-white text-black m-1 shadow"
              >
                <div className="w-full">
                  {isArray &&
                    msg?.transaction.map((tx: any) => (
                      <div
                        key={tx.name}
                        className="flex flex-col border-b border-gray-200 pb-2 w-full"
                      >
                        <div className="flex justify-between p-1">
                          <div className="font-bold text-orange-500">
                            Function
                          </div>
                          <div className="text-black">{tx?.FunctionName}</div>
                        </div>
                        <div className="flex justify-between p-1">
                          <div className="font-bold text-orange-500">
                            Address
                          </div>
                          <div className="text-black">
                            {tx?.ContractAddress}
                          </div>
                        </div>
                        <div className="flex justify-between p-1">
                          <div className="font-bold text-orange-500">
                            Success condition
                          </div>
                          <div className="text-black">
                            {tx?.SuccessCondition}
                          </div>
                        </div>
                        <Button onClick={() => console.log("clicked")}>
                          Execute
                        </Button>
                      </div>
                    ))}
                </div>
              </div>
            );
          }
          return (
            <div
              key={index}
              className={`flex flex-col justify-start items-start gap-2 p-2 rounded m-1 ${
                msg.author === "user"
                  ? "bg-gray-200 text-black"
                  : "bg-dark-navy text-white"
              }`}
            >
              <div className="p-1">
                {msg?.content}
                {msg?.isTyping && <span className="animate-pulse">...</span>}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center w-[95%] h-[10%] max-w-[90%] relative mb-4">
        <div
          className="absolute bottom-0 right-0 text-xs text-primary-text cursor-pointer hover:text-secondary"
          onClick={clearMessages}
        >
          Clear Message History
        </div>
        <Input
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
          className="absolute bottom-1/2 right-6 translate-x-1/2 translate-y-1/2 p-2 rounded bg-primary text-primary-text font-bold cursor-pointer border border-secondary hover:opacity-80"
          onClick={sendMessage}
          disabled={!userInput}
          onPointerLeave={() => setShowMessages(false)}
          onMouseLeave={() => setShowMessages(false)}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
