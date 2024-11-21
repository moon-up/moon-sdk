import React, { useState } from 'react';
import { motion } from 'framer-motion'
                        onClick={() => {
                          onTokenSelect(token);
                          setIsOpen(false);
                        }}
                        className="w-full p-3 border-b last:border-b-0 hover:bg-gray-100"
                      >
                        <span>{token.name}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              );
            };

export default TokenSelector;
