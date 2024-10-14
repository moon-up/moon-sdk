// components/Auth/WebAuthnComponent/WebAuthnComponent.tsx

import { Button, Input } from '@/components';
import { useTheme } from '@/context';
import { useAuth } from '@/hooks';
import {
  startAuthentication,
  startRegistration,
} from '@simplewebauthn/browser';
import { motion } from 'framer-motion';
import React, { CSSProperties, useState } from 'react';

/**
 * WebAuthnComponent is a React functional component that provides
 * user authentication and registration using WebAuthn.
 *
 * @component
 * @example
 * return (
 *   <WebAuthnComponent />
 * )
 *
 * @returns {JSX.Element} The rendered component.
 *
 * @remarks
 * This component uses the `useAuth` hook to handle WebAuthn operations
 * such as initiating and completing login and registration. It also
 * utilizes the `useTheme` hook to apply theming styles.
 *
 * @function
 * @name WebAuthnComponent
 *
 * @hook
 * @name useAuth
 * @description Provides methods for WebAuthn operations.
 *
 * @hook
 * @name useTheme
 * @description Provides theming properties for styling the component.
 *
 * @state {string} email - The email input value.
 *
 * @async
 * @function
 * @name handleLogin
 * @description Initiates and completes the login process using WebAuthn.
 *
 * @async
 * @function
 * @name handleRegister
 * @description Initiates and completes the registration process using WebAuthn.
 */
export const WebAuthnComponent: React.FC = () => {
  const [email, setEmail] = useState('');
  // const [error, setError] = useState('');
  const {
    initiatePasskeyLogin,
    initiatePasskeyRegistration,
    completePasskeyLogin,
    completePasskeyRegistration,
  } = useAuth();
  const theme = useTheme();

  const handleLogin = async () => {
    try {
      const publicKey = await initiatePasskeyLogin(email);
      if (!publicKey) throw new Error('Failed to initiate login');
      const credential = await startAuthentication(publicKey);
      if (!credential) throw new Error('Failed to start authentication');
      const auth = await completePasskeyLogin(email, credential);
      if (!auth) throw new Error('Failed to complete login');
    } catch (err: unknown) {
      if (err instanceof Error) {
        // setError(err.message);
        console.error(err.message);
      } else {
        console.error('An unknown error occurred');
        // setError('An unknown error occurred');
      }
    }
  };

  const handleRegister = async () => {
    try {
      const pubKey = await initiatePasskeyRegistration(email);
      if (!pubKey) throw new Error('Failed to initiate registration');
      const credential = await startRegistration(pubKey);
      if (!credential) throw new Error('Failed to start registration');
      await completePasskeyRegistration(email, credential, pubKey);
    } catch (err: unknown) {
      if (err instanceof Error) {
        // setError(err.message);
        console.error(err.message);
      } else {
        console.error('An unknown error occurred');
        // setError('An unknown error occurred');
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`p-8 bg-${theme.backgroundColor} rounded-${theme.borderRadius} shadow-${theme.boxShadow} w-80`}
      style={{ fontFamily: theme.fontFamily } as CSSProperties}
    >
      <h2 className={`mb-4 text-xl font-semibold text-${theme.textColor}`}>
        Login with WebAuthn
      </h2>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Button onClick={handleLogin} className="mt-4">
        Login
      </Button>
      <Button onClick={handleRegister} color="successColor" className="mt-2">
        Register
      </Button>
    </motion.div>
  );
};
