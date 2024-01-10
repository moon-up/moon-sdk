import { createOpenAPIChain } from 'langchain/chains';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { useEffect, useState } from 'react';
import { useMoonSDK } from '../hooks/moon';

function ChatInterface() {
  const [message, setMessage] = useState('');
  const [chain, setChain] = useState<any>(null);
  const { moon } = useMoonSDK();
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const initializeChat = async () => {
      const chatModel = new ChatOpenAI({
        modelName: 'gpt-4-1106-preview',
        temperature: 0,
        openAIApiKey: process.env.REACT_APP_OPENAI_API_KEY,
      });
      const chain = await createOpenAPIChain(
        'https://vault-api.usemoon.ai/.well-known/swagger.json',
        {
          llm: chatModel,
          headers: {
            Authorization: `Bearer ${moon?.getMoonAccount().getToken()}`,
          },
        }
      );
      setChain(chain);
    };

    initializeChat();
  }, []);

  const sendMessage = async () => {
    if (chain) {
      const result = await chain.run(message);
      console.log(JSON.stringify(result, null, 2));
      setResults((prevResults) => [...prevResults, result]);
    }
  };

  return (
    <div>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
      {results.map((result, index) => (
        <p key={index}>{JSON.stringify(result)}</p>
      ))}
    </div>
  );
}

export default ChatInterface;
