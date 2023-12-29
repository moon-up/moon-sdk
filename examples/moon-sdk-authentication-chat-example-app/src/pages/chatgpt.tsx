import { createOpenAPIChain } from 'langchain/chains';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { useEffect, useState } from 'react';
import { useMoonSDK } from '../hooks/moon';

function ChatInterface() {
	const [message, setMessage] = useState('');
	const [chain, setChain] = useState<any>(null);
	const { moon } = useMoonSDK();

	useEffect(() => {
		const initializeChat = async () => {
			const chatModel = new ChatOpenAI({
				modelName: 'gpt-4-0613',
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
		}
	};

	return (
		<div>
			<input
				type="text"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<button onClick={sendMessage}>Send</button>
		</div>
	);
}

export default ChatInterface;
