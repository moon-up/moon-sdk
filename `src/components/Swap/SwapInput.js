import React from 'react';
import { motion } from 'framer-motion';

const SwapInput = ({ value, onChange }) => {
  return (
    <motion.input
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
      type="number"
      value={value}
      onChange={onChange}
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default SwapInput;
