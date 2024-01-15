import { HumanMessage, SystemMessage } from '@langchain/core/messages';
import { AccountResponse } from '@moonup/moon-api';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { useEffect, useState } from 'react';
import ReactSyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useMoonSDK } from '../hooks/moon';

interface Contract {
  prompt?: string;
  documentation?: string;
  abi: any[];
  code?: string;
  bytecode: string;
}

export const CodeEditorPage = () => {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [contract, setContract] = useState<Contract | null>(null);
  const [name, setName] = useState('');
  const { moon } = useMoonSDK();
  const [chain, setChain] = useState<ChatOpenAI | null>(null);
  const [openAIApiKey, setOpenAIApiKey] = useState('temp');
  const [showKeyInput, setShowKeyInput] = useState(true);
  const [accounts, setAccounts] = useState<string[]>([]);
  const [selectedWallet, setSelectedWallet] = useState<string>('');
  const [chainId, setChainId] = useState<string>('1891');
  const handleKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpenAIApiKey(event.target.value);
  };

  const handleOkClick = () => {
    setShowKeyInput(false);
  };
  const handleCompile = async () => {
    if (!moon) {
      return;
    }
    const response = await fetch('http://localhost:4000/compile', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        content: code,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
    console.log(response);
    if (response.success) {
      const contract: Contract = {
        abi: response.abi,
        bytecode: response.bytecode,
      };
      setContract(contract);
    }
  };
  const handleDeployContract = async () => {
    if (!moon) {
      return;
    }
    const response = await moon
      .getAccountsSDK()
      .deployContract(moon.getMoonAccount()?.getWallet() || '', {
        abi: JSON.stringify(contract?.abi),
        bytecode: contract?.bytecode || '',
        constructor_args: '',
        chain_id: chainId || '1891',
      });
    console.log(response);
  };
  useEffect(() => {
    const initializeChat = async () => {
      const chain = new ChatOpenAI({
        modelName: 'gpt-4-1106-preview',
        temperature: 0,
        openAIApiKey: process.env.REACT_APP_OPENAI_API_KEY || openAIApiKey || '',
      });

      setChain(chain);
    };
    const fetchAccounts = async () => {
      if (!moon) {
        return;
      }
      const accounts = await moon?.getAccountsSDK().listAccounts();
      console.log(accounts);
      const keys = (accounts?.data?.data as AccountResponse)?.keys || [];
      setAccounts((prevResults) => [...prevResults, ...keys]);
    };

    initializeChat();
    fetchAccounts();
  }, [moon, openAIApiKey]);

  const handleFetch = async () => {
    if (!chain) {
      return;
    }
    const result = await chain.invoke([
      new SystemMessage(
        `You are SmartContractGPT an expert in solidity and you're helping a junior developer with a problem. Use solidity version 0.8.20 and add inline documentation to the contract explaining what each function does. Write only valid and secure solidity code to spec of the problem. You will only use openzepplin libraries in your implementation.`
      ),

      new HumanMessage(
        `Create a solidity smart contract for ${name} that: ${input} using Using @openzepplin/contracts package. Use pragma solidity ^0.8.0; and add SPDX-License-Identifier: MIT at the start and add documentation of each function. Explain code at the end of file. Output response into 2 parts one a markdown block for solidity and the other part the documentation. Provide all necessary functions and overrides and modifiers and identifiers and variables. Make sure that it's secure and that it's valid solidity code.`
      ),
      new HumanMessage(
        `The contract name will be ${name} and you will follow this list of requirements ${input}}`
      ),
    ]);
    console.log(result);
    // expect a string with 2 markdown blocks one for solidity and one for documentation and extract the solidity code
    const code =
      result.content?.toString().match(/^```(?:solidity)?\n([\s\S]*?)\n```$/m)?.[1] || '';
    console.log(code);
    setCode(code);
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    moon?.updateWallet(event.target.value);
    setSelectedWallet(event.target.value);
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
        <select value={selectedWallet} onChange={handleSelect}>
          {accounts.map((account, index) => (
            <option key={index} value={account}>
              {account}
            </option>
          ))}
        </select>
      </div>
      <button id="fetch-code" onClick={handleFetch}>
        Fetch Code
      </button>

      <button id="fetch-code" onClick={handleCompile}>
        Compile
      </button>
      <ReactSyntaxHighlighter language="solidity" style={darcula}>
        {code}
      </ReactSyntaxHighlighter>
      <textarea id="input" onChange={(e) => setInput(e.target.value)}></textarea>
      <textarea id="name" onChange={(e) => setName(e.target.value)}></textarea>
      <button id="deploy-contract" onClick={handleDeployContract}>
        Deploy
      </button>
      <div id="contract">
        <h6>Smart contract:</h6>

        <ReactSyntaxHighlighter language="solidity" style={darcula}>
          {code}
        </ReactSyntaxHighlighter>
        <pre id="contract-abi"></pre>
        <button id="inspect-abi">Inspect ABI</button>
      </div>
    </div>
  );
};
