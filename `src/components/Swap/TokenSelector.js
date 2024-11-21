import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TokenSelector = ({ onTokenSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const tokens = [
    { id: 'eth', name: 'Ethereum' },
    { id: 'usdc', name: 'USDC' },
    // Add more tokens as needed
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-blue-500 text-white p-3 rounded-lg flex items-center justify-between"
      >
        Select Token
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
            className="absolute w-full bg-white shadow-md rounded-lg mt-2"
          >
            {tokens.map((token) => (
                      <button
                        key={token.id}
                        onClick={() => {
                          onTokenSelect(token);
                          setIsOpen(false);
                        }}
                        className="w-full p-3 flex items-center justify-between border-b border-gray-100 last:border-b-0"
                        >
                          {token.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              );
            };

export default TokenSelector;
