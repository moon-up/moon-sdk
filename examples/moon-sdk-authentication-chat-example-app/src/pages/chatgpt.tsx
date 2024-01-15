import { createOpenAPIChain } from 'langchain/chains';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { useEffect, useState } from 'react';
import { useMoonSDK } from '../hooks/moon';
const SWAGGER_URLS = [
  'https://vault-api.usemoon.ai/.well-known/swagger.json',
  'https://vault-api.usemoon.ai/.well-known/Accounts.json',
  'https://vault-api.usemoon.ai/.well-known/Aave.json',
  'https://vault-api.usemoon.ai/.well-known/bitcoincash.json',
  'https://vault-api.usemoon.ai/.well-known/Bitcoin.json',
  'https://vault-api.usemoon.ai/.well-known/ConveyorFinance.json',
  'https://vault-api.usemoon.ai/.well-known/Cosmos.json',
  'https://vault-api.usemoon.ai/.well-known/DogeCoin.json',
  'https://vault-api.usemoon.ai/.well-known/ENS.json',
  'https://vault-api.usemoon.ai/.well-known/eos.json',
  'https://vault-api.usemoon.ai/.well-known/ERC1155.json',
  'https://vault-api.usemoon.ai/.well-known/Erc20.json',
  'https://vault-api.usemoon.ai/.well-known/Erc4337.json',
  'https://vault-api.usemoon.ai/.well-known/Erc721.json',
  'https://vault-api.usemoon.ai/.well-known/Litecoin.json',
  'https://vault-api.usemoon.ai/.well-known/oneinch.json',
  'https://vault-api.usemoon.ai/.well-known/onramper.json',
  'https://vault-api.usemoon.ai/.well-known/openapi.json',
  'https://vault-api.usemoon.ai/.well-known/payment.json',
  'https://vault-api.usemoon.ai/.well-known/ripple.json',
  'https://vault-api.usemoon.ai/.well-known/Solana.json',
  'https://vault-api.usemoon.ai/.well-known/Tron.json',
  'https://vault-api.usemoon.ai/.well-known/UniSwap.json',
  'https://vault-api.usemoon.ai/.well-known/yearn.json',
];

function ChatInterface() {
  const [message, setMessage] = useState('');
  const [chain, setChain] = useState<any>(null);
  const [openAIApiKey, setOpenAIApiKey] = useState('temp');
  const [showKeyInput, setShowKeyInput] = useState(true);

  const { moon } = useMoonSDK();
  const [results, setResults] = useState<any[]>([]);
  const [swagger, setSwagger] = useState('https://vault-api.usemoon.ai/.well-known/swagger.json');

  const handleKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpenAIApiKey(event.target.value);
  };

  const handleOkClick = () => {
    setShowKeyInput(false);
  };

  useEffect(() => {
    const initializeChat = async () => {
      const chatModel = new ChatOpenAI({
        modelName: 'gpt-4-1106-preview',
        temperature: 0,
        openAIApiKey: process.env.REACT_APP_OPENAI_API_KEY || openAIApiKey || '',
      });
      const chain = await createOpenAPIChain(swagger, {
        llm: chatModel,
        headers: {
          Authorization: `Bearer ${moon?.getMoonAccount().getToken()}`,
        },
      });
      setChain(chain);
    };

    initializeChat();
  }, [swagger, moon, openAIApiKey]);

  const sendMessage = async () => {
    if (chain) {
      const result = await chain.run(message);
      console.log(JSON.stringify(result, null, 2));
      setResults((prevResults) => [...prevResults, result]);
    }
  };
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSwagger(event.target.value);
  };

  return (
    <div>
      <div>
        {showKeyInput && (
          <div>
            <p>OPENAPI KEY</p>
            <input type="text" value={openAIApiKey} onChange={handleKeyChange} />
            <button onClick={handleOkClick}>OK</button>
          </div>
        )}
      </div>
      <div>
        <select value={swagger} onChange={handleSelect}>
          {SWAGGER_URLS.map((url, index) => (
            <option key={index} value={url}>
              {url}
            </option>
          ))}
        </select>
      </div>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
      {results.map((result, index) => (
        <p key={index}>{JSON.stringify(result)}</p>
      ))}
    </div>
  );
}

export default ChatInterface;
