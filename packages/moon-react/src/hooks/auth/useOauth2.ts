// useOAuth2.ts
import { useMoonSDK } from '@/hooks';
import { AuthSession as Session } from '@supabase/supabase-js';
import { useCallback, useState } from 'react';

export type OAuthProvider = 'discord' | 'github' | 'google' | 'twitter';

/**
 * Represents an OAuth token object.
 *
 * @interface OAuthToken
 *
 * @property {string} access_token - The access token provided by the OAuth provider.
 * @property {string} refresh_token - The refresh token provided by the OAuth provider.
 * @property {any} [key: string] - Any additional fields returned by the OAuth provider.
 */
export interface OAuthToken {
  access_token: string;
  refresh_token: string;
  [key: string]: any;
}

/**
 * Represents an error that occurs during an OAuth2 authentication process.
 *
 * @interface OAuthError
 * @property {string} method - The method where the error occurred.
 * @property {Error} error - The error object containing details about the error.
 * @property {string} provider - The OAuth2 provider where the error occurred.
 */
export interface OAuthError {
  method: string;
  error: Error;
  provider: string;
}

/**
 * Custom hook to handle OAuth2 authentication using MoonSDK.
 *
 * @returns {Object} An object containing various OAuth2 related methods and state.
 * @throws {Error} If MoonSDK is not initialized.
 *
 * @function
 * @name useOAuth2
 *
 * @property {boolean} isAuthenticated - State indicating if the user is authenticated.
 * @property {function} initiateOAuth - Function to initiate OAuth process with a given provider.
 * @property {function} exchangeCodeForToken - Function to exchange authorization code for an OAuth token.
 * @property {function} performOAuth - Function to perform OAuth process with a given provider.
 * @property {function} handleOAuthCallback - Function to handle OAuth callback and retrieve session.
 * @property {function} getSession - Function to get the current user session.
 * @property {function} logout - Function to log out the user.
 */
export const useOAuth2 = () => {
  const { moon } = useMoonSDK();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  if (!moon) throw new Error('MoonSDK not initialized');

  /**
   * Initiates the OAuth2 authentication process for the specified provider.
   *
   * @param provider - The OAuth provider to use for authentication.
   * @returns void
   */
  const initiateOAuth = useCallback(
    (provider: OAuthProvider): void => {
      moon.getOAuth2Service().initiateOAuth(provider);
    },
    [moon]
  );

  /**
   * Exchanges an authorization code for an OAuth token.
   *
   * @param provider - The OAuth provider (e.g., 'google', 'facebook').
   * @param code - The authorization code received from the OAuth provider.
   * @returns A promise that resolves to an `OAuthToken` object.
   * @throws Will throw an error if the token exchange fails.
   */
  const exchangeCodeForToken = useCallback(
    async (provider: OAuthProvider, code: string): Promise<OAuthToken> => {
      try {
        const token = await moon
          .getOAuth2Service()
          .exchangeCodeForToken(provider, code);
        setIsAuthenticated(true);
        return token;
      } catch (error) {
        throw error;
      }
    },
    [moon]
  );

  /**
   * Performs OAuth authentication using the specified provider.
   *
   * @param provider - The OAuth provider to use for authentication.
   * @returns A promise that resolves when the authentication process is complete.
   */
  const performOAuth = useCallback(
    async (provider: OAuthProvider): Promise<void> => {
      await moon.getOAuth2Service().performOAuth(provider);
    },
    [moon]
  );

  /**
   * Handles the OAuth callback by processing the provider and code, and returns a session.
   *
   * @param provider - The OAuth provider (e.g., 'google', 'facebook').
   * @param code - The authorization code received from the OAuth provider.
   * @returns A promise that resolves to a Session object.
   * @throws Will throw an error if the OAuth callback handling fails.
   */
  const handleOAuthCallback = useCallback(
    async (provider: OAuthProvider, code: string): Promise<OAuthToken> => {
      try {
        const session = await moon
          .getOAuth2Service()
          .handleOAuthCallback(provider, code);
        setIsAuthenticated(true);
        return session;
      } catch (error) {
        throw error;
      }
    },
    [moon]
  );

  const getSession = useCallback(async (): Promise<Session | null> => {
    return await moon.auth.getUserSession();
  }, [moon]);

  const logout = useCallback(async (): Promise<void> => {
    await moon.auth.logout();
    setIsAuthenticated(false);
  }, [moon]);

  // Event listeners
  useCallback(() => {
    const onOAuthCompleted = (data: {
      provider: string;
      token: OAuthToken;
    }) => {
      setIsAuthenticated(true);
      // Handle successful OAuth completion
      console.log('OAuth completed:', data);
    };

    const onError = (error: OAuthError) => {
      // Handle OAuth errors
      console.error('OAuth error:', error);
    };

    moon.on('oauthCompleted', onOAuthCompleted);
    moon.on('error', onError);

    return () => {
      moon.off('oauthCompleted', onOAuthCompleted);
      moon.off('error', onError);
    };
  }, [moon]);

  return {
    isAuthenticated,
    initiateOAuth,
    exchangeCodeForToken,
    performOAuth,
    handleOAuthCallback,
    getSession,
    logout,
  };
};
