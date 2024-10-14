// components/ThemeProvider.tsx
import { Theme } from '@/types';
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext<Theme | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};

/**
 * ThemeProvider component that provides a theme context to its children.
 *
 * @param {Object} props - The properties object.
 * @param {Theme} props.theme - The theme object to be provided to the context.
 * @param {React.ReactNode} props.children - The child components that will receive the theme context.
 *
 * @returns {JSX.Element} The ThemeProvider component with the provided theme context.
 */
export const ThemeProvider: React.FC<{
  theme: Theme;
  children: React.ReactNode;
}> = ({ theme, children }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);
