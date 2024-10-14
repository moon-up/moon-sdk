// useAuth.ts
import { useMoonSDK } from '@/hooks';
import {
  AuthenticationResponseJSON,
  PublicKeyCredentialCreationOptionsJSON,
  PublicKeyCredentialRequestOptionsJSON,
  RegistrationResponseJSON,
} from '@simplewebauthn/typescript-types';
import { AuthSession as Session } from '@supabase/supabase-js';
import { useCallback, useState } from 'react';
import { SiweMessage } from 'siwe';

/**
 * Custom hook to handle authentication using MoonSDK.
 *
 * @returns {object} - An object containing authentication methods and state.
 *
 * @throws {Error} - Throws an error if MoonSDK is not initialized.
 *
 * @property {boolean} isAuthenticated - State indicating if the user is authenticated.
 * @property {function} connect - Connects to the authentication service using access and refresh tokens.
 * @property {function} signUpWithEmail - Signs up a user using email and password.
 * @property {function} signInWithEmail - Signs in a user using email and password.
 * @property {function} signInAnonymously - Signs in a user anonymously.
 * @property {function} signInWithOAuth - Signs in a user using OAuth providers (google, github, discord).
 * @property {function} initiatePasskeyRegistration - Initiates passkey registration for a user.
 * @property {function} completePasskeyRegistration - Completes passkey registration for a user.
 * @property {function} initiatePasskeyLogin - Initiates passkey login for a user.
 * @property {function} completePasskeyLogin - Completes passkey login for a user.
 * @property {function} getSIWENonce - Retrieves a nonce for Sign-In with Ethereum (SIWE).
 * @property {function} verifySIWESignature - Verifies a SIWE signature.
 * @property {function} sendMagicLink - Sends a magic link to the user's email.
 * @property {function} getUserSession - Retrieves the current user session.
 * @property {function} logout - Logs out the current user.
 * @property {function} createEmbeddedAccount - Creates an embedded account for a user.
 * @property {function} getSession - Retrieves the current user session.
 */
export const useAuth = () => {
  const { moon } = useMoonSDK();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  if (!moon) throw new Error('MoonSDK not initialized');

  /**
   * Retrieves the current user session.
   *
   * This function uses the `moon.auth.getUserSession` method to fetch the user session.
   * It is memoized using `useCallback` to ensure that the function reference remains stable
   * across re-renders, only changing when the `moon` dependency changes.
   *
   * @returns {Promise<Session | null>} A promise that resolves to the current user session or null if no session exists.
   */
  const getSession = useCallback(async (): Promise<Session | null> => {
    return await moon.auth.getUserSession();
  }, [moon]);

  /**
   * Connects to the authentication service using the provided access and refresh tokens.
   *
   * @param {string} [accessToken] - The access token to use for authentication.
   * @param {string} [refreshToken] - The refresh token to use for authentication.
   * @returns {Promise<void>} A promise that resolves when the connection is established.
   */
  const connect = useCallback(
    async (accessToken?: string, refreshToken?: string): Promise<void> => {
      await moon.auth.connect(accessToken, refreshToken);
      setIsAuthenticated(true);
    },
    [moon]
  );

  /**
   * Signs up a user using their email and password.
   *
   * @param email - The email address of the user.
   * @param password - The password for the user's account.
   * @returns A promise that resolves to a Session object if the sign-up is successful, or null if it fails.
   */
  const signUpWithEmail = useCallback(
    async (email: string, password: string): Promise<Session | null> => {
      return await moon.auth.signUpWithEmail(email, password);
    },
    [moon]
  );

  /**
   * Signs in a user using their email and password.
   *
   * @param email - The email address of the user.
   * @param password - The password of the user.
   * @returns A promise that resolves to a `Session` object if the sign-in is successful, or `null` if it fails.
   */
  const signInWithEmail = useCallback(
    async (email: string, password: string): Promise<Session | null> => {
      const session = await moon.auth.signInWithEmail(email, password);
      setIsAuthenticated(!!session);
      return session;
    },
    [moon]
  );
  /**
   * Signs in a user anonymously using the moon authentication service.
   *
   * @returns {Promise<Session | null>} A promise that resolves to the session object if the sign-in is successful, or null if it fails.
   */
  const signInAnonymously = useCallback(async (): Promise<Session | null> => {
    const session = await moon.auth.signInAnonymously();
    setIsAuthenticated(!!session);
    return session;
  }, [moon]);

  /**
   * Signs in a user using OAuth with the specified provider.
   *
   * @param provider - The OAuth provider to use for signing in. Can be 'google', 'github', or 'discord'.
   * @returns A promise that resolves when the sign-in process is complete.
   */
  const signInWithOAuth = useCallback(
    async (provider: 'google' | 'github' | 'discord'): Promise<void> => {
      await moon.auth.signInWithOAuth(provider);
    },
    [moon]
  );

  /**
   * Initiates the passkey registration process for a given email.
   *
   * @param {string} email - The email address to register the passkey for.
   * @returns {Promise<PublicKeyCredentialCreationOptionsJSON>} A promise that resolves to the public key credential creation options.
   */
  const initiatePasskeyRegistration = useCallback(
    async (email: string): Promise<PublicKeyCredentialCreationOptionsJSON> => {
      return await moon.auth.initiatePasskeyRegistration(email);
    },
    [moon]
  );

  /**
   * Completes the passkey registration process for a given email.
   *
   * @param email - The email address associated with the registration.
   * @param credential - The registration response JSON containing the credential information.
   * @param options - The public key credential creation options JSON.
   * @returns A promise that resolves when the registration is complete.
   */
  const completePasskeyRegistration = useCallback(
    async (
      email: string,
      credential: RegistrationResponseJSON,
      options: PublicKeyCredentialCreationOptionsJSON
    ): Promise<void> => {
      await moon.auth.completePasskeyRegistration(email, credential, options);
    },
    [moon]
  );

  /**
   * Initiates the passkey login process for the given email.
   *
   * @param email - The email address of the user attempting to log in.
   * @returns A promise that resolves to a `PublicKeyCredentialRequestOptionsJSON` object.
   */
  const initiatePasskeyLogin = useCallback(
    async (email: string): Promise<PublicKeyCredentialRequestOptionsJSON> => {
      return await moon.auth.initiatePasskeyLogin(email);
    },
    [moon]
  );

  /**
   * Completes the passkey login process using the provided email and credential.
   *
   * @param email - The email address of the user attempting to log in.
   * @param credential - The authentication response JSON containing the credential information.
   * @returns A promise that resolves to a Session object upon successful authentication.
   */
  const completePasskeyLogin = useCallback(
    async (
      email: string,
      credential: AuthenticationResponseJSON
    ): Promise<Session> => {
      const session = await moon.auth.completePasskeyLogin(email, credential);
      setIsAuthenticated(true);
      return session;
    },
    [moon]
  );

  /**
   * Retrieves a Sign-In with Ethereum (SIWE) nonce for the specified address.
   *
   * @param {string} address - The Ethereum address for which to get the SIWE nonce.
   * @returns {Promise<string>} A promise that resolves to the SIWE nonce.
   */
  const getSIWENonce = useCallback(
    async (address: string): Promise<string> => {
      return await moon.auth.getSIWENonce(address);
    },
    [moon]
  );

  /**
   * Verifies the SIWE (Sign-In with Ethereum) signature and updates the authentication state.
   *
   * @param address - The Ethereum address of the user.
   * @param signedMessage - The signed message from the user.
   * @param nonce - The nonce used in the SIWE message.
   * @param message - The SIWE message object.
   * @returns A promise that resolves to a Session object upon successful verification.
   */
  const verifySIWESignature = useCallback(
    async (
      address: string,
      signedMessage: string,
      nonce: string,
      message: SiweMessage
    ): Promise<Session> => {
      const session = await moon.auth.verifySIWESignature(
        address,
        signedMessage,
        nonce,
        message
      );
      setIsAuthenticated(true);
      return session;
    },
    [moon]
  );

  /**
   * Sends a magic link to the specified email address for authentication.
   *
   * @param email - The email address to send the magic link to.
   * @param redirectTo - The URL to redirect to after the magic link is used.
   * @returns A promise that resolves when the magic link has been sent.
   */
  const sendMagicLink = useCallback(
    async (email: string, redirectTo: string): Promise<void> => {
      await moon.auth.sendMagicLink(email, redirectTo);
    },
    [moon]
  );

  const getUserSession = useCallback(async (): Promise<Session | null> => {
    return await moon.auth.getUserSession();
  }, [moon]);

  /**
   * Logs out the current user by calling the `moon.auth.logout` method and updates the authentication state.
   *
   * @returns {Promise<void>} A promise that resolves when the logout process is complete.
   */
  const logout = useCallback(async (): Promise<void> => {
    await moon.auth.logout();
    setIsAuthenticated(false);
  }, [moon]);

  /**
   * Creates an embedded account using the provided email, uuid, and domain.
   *
   * @param email - The email address to associate with the new account.
   * @param uuid - The unique identifier for the new account.
   * @param domain - The domain associated with the new account.
   * @returns A promise that resolves to a Session object upon successful account creation.
   */
  const createEmbeddedAccount = useCallback(
    async (email: string, uuid: string, domain: string): Promise<Session> => {
      const session = await moon.auth.createEmbeddedAccount(
        email,
        uuid,
        domain
      );
      setIsAuthenticated(true);
      return session;
    },
    [moon]
  );

  return {
    isAuthenticated,
    connect,
    signUpWithEmail,
    signInWithEmail,
    signInAnonymously,
    signInWithOAuth,
    initiatePasskeyRegistration,
    completePasskeyRegistration,
    initiatePasskeyLogin,
    completePasskeyLogin,
    getSIWENonce,
    verifySIWESignature,
    sendMagicLink,
    getUserSession,
    logout,
    createEmbeddedAccount,
    getSession,
  };
};
