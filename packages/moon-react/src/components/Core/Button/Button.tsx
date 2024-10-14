// components/Core/Button/Button.tsx
import { useTheme } from '@/context';
import { Theme } from '@/types';
import { HTMLMotionProps, motion } from 'framer-motion';

import React, { CSSProperties } from 'react';

export type ButtonProps = {
  color?: keyof Theme;
  variant?: 'filled' | 'outlined' | 'text';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  onClick,
  color = 'accentColor',
  variant = 'filled',
  children,
  className,
  ...rest
}) => {
  const theme = useTheme();

  const getStyles = () => {
    const baseStyles = `font-medium px-4 py-2 rounded-${theme.borderRadius} transition-all duration-200`;
    switch (variant) {
      case 'filled':
        return `${baseStyles} bg-${color} text-white hover:opacity-90`;
      case 'outlined':
        return `${baseStyles} border-2 border-${color} text-${color} hover:bg-${color} hover:text-white`;
      case 'text':
        return `${baseStyles} text-${color} hover:bg-${color} hover:bg-opacity-10`;
    }
  };
  const buttonStyle = getStyles();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${buttonStyle} ${className}`}
      onClick={onClick}
      style={{ fontFamily: theme.fontFamily } as CSSProperties}
      {...(rest as HTMLMotionProps<'button'>)}
    >
      {children}
    </motion.button>
  );
};
