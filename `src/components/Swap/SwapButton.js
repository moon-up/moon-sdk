import React from 'react';
import { motion } from 'framer-motion';

const SwapButton = ({ onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
      onClick={onClick}
    >
      Swap
    </motion.button>
  );
};

export default SwapButton;
