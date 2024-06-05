// import { ChatOpenAI } from '@langchain/openai';
// import { createOpenAPIChain } from 'langchain/chains';
// import { useEffect, useState } from 'react';
// import { useMoonSDK } from '../hooks/moon';

// const SWAGGER_URLS = [
//   'https://beta.usemoon.ai/.well-known/swagger.json',
//   'https://beta.usemoon.ai/.well-known/Accounts.json',
//   'https://beta.usemoon.ai/.well-known/Aave.json',
//   'https://beta.usemoon.ai/.well-known/ai-plugin.json',
//   'https://beta.usemoon.ai/.well-known/bitcoincash.json',
//   'https://beta.usemoon.ai/.well-known/Bitcoin.json',
//   'https://beta.usemoon.ai/.well-known/ConveyorFinance.json',
//   'https://beta.usemoon.ai/.well-known/Cosmos.json',
//   'https://beta.usemoon.ai/.well-known/DogeCoin.json',
//   'https://beta.usemoon.ai/.well-known/ENS.json',
//   'https://beta.usemoon.ai/.well-known/eos.json',
//   'https://beta.usemoon.ai/.well-known/ERC1155.json',
//   'https://beta.usemoon.ai/.well-known/Erc20.json',
//   'https://beta.usemoon.ai/.well-known/Erc4337.json',
//   'https://beta.usemoon.ai/.well-known/Erc721.json',
//   'https://beta.usemoon.ai/.well-known/Litecoin.json',
//   'https://beta.usemoon.ai/.well-known/oneinch.json',
//   'https://beta.usemoon.ai/.well-known/onramper.json',
//   'https://beta.usemoon.ai/.well-known/openapi.json',
//   'https://beta.usemoon.ai/.well-known/payment.json',
//   'https://beta.usemoon.ai/.well-known/ripple.json',
//   'https://beta.usemoon.ai/.well-known/Solana.json',
//   'https://beta.usemoon.ai/.well-known/Tron.json',
//   'https://beta.usemoon.ai/.well-known/UniSwap.json',
//   'https://beta.usemoon.ai/.well-known/yearn.json',
// ];

// function Whisper() {
//   const [chain, setChain] = useState<any>(null);
//   const [results, setResults] = useState<any[]>([]);
//   const {
//     recording,
//     speaking,
//     transcribing,
//     transcript,
//     pauseRecording,
//     startRecording,
//     stopRecording,
//   } = useWhisper({
//     apiKey: process.env.REACT_APP_OPENAI_API_KEY,
//   });
//   useEffect(() => {
//     const initializeChat = async () => {
//       const chatModel = new ChatOpenAI({
//         modelName: 'gpt-4-1106-preview',
//         temperature: 0,
//         openAIApiKey: process.env.OPENAI_API_KEY,
//       });
//       const chain = await createOpenAPIChain('https://beta.usemoon.ai/.well-known/swagger.json', {
//         llm: chatModel,
//         headers: {
//           Authorization: `Bearer ${MOON_API_KEY}`,
//         },
//       });
//       setChain(chain);
//     };
//     initializeChat();
//   }, []);
//   const sendMessage = async () => {
//     if (chain) {
//       const result = await chain.run(transcript.text);
//       console.log(JSON.stringify(result, null, 2));
//       setResults((prevResults) => [...prevResults, result]);
//     }
//   };
//   return (
//     <div>
//       <p>Recording: {recording}</p>
//       <p>Speaking: {speaking}</p>
//       <p>Transcribing: {transcribing}</p>
//       <p>Transcribed Text: {transcript.text}</p>
//       <button onClick={() => startRecording()}>Start</button>
//       <button onClick={() => pauseRecording()}>Pause</button>
//       <button onClick={() => stopRecording()}>Stop</button>
//       <button onClick={sendMessage}>Send</button>
//       {results.map((result, index) => (
//         <p key={index}>{JSON.stringify(result)}</p>
//       ))}
//     </div>
//   );
// }

// export default Whisper;
