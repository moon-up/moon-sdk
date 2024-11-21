import React from 'react';
import { motion } from 'framer-motion';
import SwapInput from './SwapInput';
import TokenSelector from './TokenSelector';
import SwapButton from './SwapButton';

const SwapContainer = () => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <div className="mb-4">
        <TokenSelector />
      </div>
      <div className="mb-4">
        <SwapInput />
      </div>
      <div className="mt-6">
        <SwapButton />
      </div>
    </motion.div>
  );
};

export default SwapContainer;
