import {
  AuthenticationResponseJSON,
  PublicKeyCredentialCreationOptionsJSON,
  PublicKeyCredentialRequestOptionsJSON,
  RegistrationResponseJSON,
} from '@simplewebauthn/typescript-types';
import { Session, SupabaseClient } from '@supabase/supabase-js';
import { SiweMessage } from 'siwe';

import { MoonSDK } from '../moon'; // Assuming MoonSDK is in a separate file

/**
 * AuthService class provides authentication functionality for the MoonSDK.
 *
 * This class handles various authentication methods including:
 * - Email and password sign-up and sign-in
 * - Anonymous sign-in
 * - OAuth sign-in (Google, GitHub, Discord)
 * - Passkey (WebAuthn) registration and login
 * - Sign-In with Ethereum (SIWE)
 * - Magic link authentication
 * - Embedded account creation
 *
 * It also manages the authentication state, session handling, and provides
 * methods for logging out and checking the current user session.
 *
 * The class integrates with Supabase for backend authentication services
 * and emits various events through the MoonSDK for different authentication
 * stages and error handling.
 */
export class AuthService {
  private moonSDK: MoonSDK;
  private supabase: SupabaseClient;
  public isAuthenticated: boolean;

  constructor(moonSDK: MoonSDK) {
    this.moonSDK = moonSDK;
    this.supabase = moonSDK.supabase;
    this.isAuthenticated = false;
  }

  /**
   * Connects to the authentication service using the provided access and refresh tokens.
   * If tokens are not provided, it attempts to retrieve the session from the authentication service.
   *
   * @param accessToken - Optional access token for authentication.
   * @param refreshToken - Optional refresh token for authentication.
   * @returns A promise that resolves when the connection is successful.
   * @throws An error if the connection fails.
   */
  public async connect(
    accessToken?: string,
    refreshToken?: string
  ): Promise<void> {
    try {
      console.log('connecting');
      console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);
      if (accessToken && refreshToken) {
        await this.supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });
        this.moonSDK.getMoonAPIService().setSecurityData(accessToken);
      } else {
        const { data, error } = await this.supabase.auth.getSession();
        if (error) {
          throw new Error(error.message);
        }
        this.moonSDK
          .getMoonAPIService()
          .setSecurityData(data.session?.access_token || '');
      }
      this.isAuthenticated = true;
      this.moonSDK.emit('connected');
    } catch (error) {
      this.moonSDK.emit('error', { method: 'connect', error });
      throw error;
    }
  }
  /**
   * Signs up a new user using their email and password.
   *
   * @param email - The email address of the user.
   * @param password - The password for the user's account.
   * @returns A promise that resolves to a `Session` object if the sign-up is successful, or `null` if it fails.
   * @throws Will throw an error if the sign-up process encounters an issue.
   */
  async signUpWithEmail(
    email: string,
    password: string
  ): Promise<Session | null> {
    try {
      const { data, error } = await this.supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      return data.session;
    } catch (error) {
      this.moonSDK.emit('error', { method: 'signUpWithEmail', error });
      throw error;
    }
  }

  /**
   * Signs in a user using their email and password.
   *
   * @param email - The email address of the user.
   * @param password - The password of the user.
   * @returns A promise that resolves to a Session object if the sign-in is successful, or null if it fails.
   * @throws Will throw an error if the sign-in process encounters an error.
   */
  async signInWithEmail(
    email: string,
    password: string
  ): Promise<Session | null> {
    try {
      const { data, error } = await this.supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      return data.session;
    } catch (error) {
      this.moonSDK.emit('error', { method: 'signInWithEmail', error });
      throw error;
    }
  }
  /**
   * Signs in a user anonymously using the Supabase authentication service.
   *
   * @returns {Promise<Session | null>} A promise that resolves to a Session object if the sign-in is successful, or null if it fails.
   *
   * @throws Will throw an error if the sign-in process encounters an error.
   *
   * @example
   * ```typescript
   * const session = await authService.signInAnonymously();
   * if (session) {
   *   console.log('Signed in anonymously:', session);
   * } else {
   *   console.log('Failed to sign in anonymously');
   * }
   * ```
   */
  async signInAnonymously(): Promise<Session | null> {
    try {
      const { data, error } = await this.supabase.auth.signInAnonymously();
      if (error) throw error;
      return data.session;
    } catch (error) {
      this.moonSDK.emit('error', { method: 'signInAnonymously', error });
      throw error;
    }
  }

  /**
   * Signs in a user using OAuth with the specified provider.
   *
   * @param provider - The OAuth provider to use for sign-in. Can be 'google', 'github', or 'discord'.
   * @returns A promise that resolves when the sign-in process is complete.
   * @throws Will throw an error if the sign-in process fails.
   *
   * @example
   * ```typescript
   * await authService.signInWithOAuth('google');
   * ```
   */
  async signInWithOAuth(
    provider: 'google' | 'github' | 'discord'
  ): Promise<void> {
    try {
      const { error } = await this.supabase.auth.signInWithOAuth({ provider });
      if (error) throw error;
      this.moonSDK.emit('oauthInitiated', provider);
    } catch (error) {
      this.moonSDK.emit('error', {
        method: 'signInWithOAuth',
        error,
        provider,
      });
      throw error;
    }
  }

  /**
   * Initiates the passkey registration process for a given email.
   *
   * This method sends a POST request to the WebAuthn registration endpoint
   * with the provided email. If the request is successful, it emits a
   * 'passkeyRegistrationInitiated' event with the email and returns the
   * PublicKeyCredentialCreationOptionsJSON. If an error occurs, it emits
   * an 'error' event with the method name, error details, and email.
   *
   * @param email - The email address to initiate the passkey registration for.
   * @returns A promise that resolves to PublicKeyCredentialCreationOptionsJSON.
   * @throws Will throw an error if the HTTP request fails.
   */
  async initiatePasskeyRegistration(
    email: string
  ): Promise<PublicKeyCredentialCreationOptionsJSON> {
    try {
      const response = await fetch(
        'https://dash.usemoon.ai/api/webauthn/register',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        }
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      this.moonSDK.emit('passkeyRegistrationInitiated', email);
      return data.options;
    } catch (error) {
      this.moonSDK.emit('error', {
        method: 'initiatePasskeyRegistration',
        error,
        email,
      });
      throw error;
    }
  }

  /**
   * Completes the passkey registration process by sending the provided credentials
   * to the server for verification.
   *
   * @param email - The email address associated with the user.
   * @param credential - The registration response JSON containing the credential information.
   * @param options - The public key credential creation options JSON.
   * @returns A promise that resolves when the registration is complete.
   * @throws Will throw an error if the HTTP request fails.
   *
   * @emits passkeyRegistrationCompleted - When the passkey registration is successfully completed.
   * @emits error - When an error occurs during the passkey registration process.
   */
  async completePasskeyRegistration(
    email: string,
    credential: RegistrationResponseJSON,
    options: PublicKeyCredentialCreationOptionsJSON
  ): Promise<void> {
    try {
      const response = await fetch(
        'https://dash.usemoon.ai/api/webauthn/register/verify',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...credential,
            email: email,
            user: {
              ...options.user,
            },
          }),
        }
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      this.moonSDK.emit('passkeyRegistrationCompleted', email);
    } catch (error) {
      this.moonSDK.emit('error', {
        method: 'completePasskeyRegistration',
        error,
        email,
      });
      throw error;
    }
  }

  /**
   * Initiates the passkey login process by sending a request to the server
   * with the provided email. Emits events based on the success or failure
   * of the operation.
   *
   * @param email - The email address of the user attempting to log in.
   * @returns A promise that resolves to the PublicKeyCredentialRequestOptionsJSON object.
   * @throws Will throw an error if the HTTP request fails.
   */
  async initiatePasskeyLogin(
    email: string
  ): Promise<PublicKeyCredentialRequestOptionsJSON> {
    try {
      const response = await fetch(
        'https://dash.usemoon.ai/api/webauthn/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        }
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      this.moonSDK.emit('passkeyLoginInitiated', email);
      return data.optionsAuth;
    } catch (error) {
      this.moonSDK.emit('error', {
        method: 'initiatePasskeyLogin',
        error,
        email,
      });
      throw error;
    }
  }

  /**
   * Completes the passkey login process by verifying the provided credentials.
   *
   * @param email - The email address associated with the user.
   * @param credential - The authentication response JSON containing the credentials.
   * @returns A promise that resolves to a `Session` object containing the access and refresh tokens.
   * @throws Will throw an error if the HTTP request fails or if the response is not ok.
   *
   * Emits:
   * - `passkeyLoginCompleted` with the email when the login is successful.
   * - `error` with the method name, error, and email if an error occurs.
   */
  async completePasskeyLogin(
    email: string,
    credential: AuthenticationResponseJSON
  ): Promise<Session> {
    try {
      const response = await fetch(
        'https://dash.usemoon.ai/api/webauthn/login/verify',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ credential, email }),
        }
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      this.connect(data.token.access_token, data.token.refresh_token);
      this.moonSDK.emit('passkeyLoginCompleted', email);
      return data.token;
    } catch (error) {
      this.moonSDK.emit('error', {
        method: 'completePasskeyLogin',
        error,
        email,
      });
      throw error;
    }
  }

  /**
   * Retrieves a Sign-In with Ethereum (SIWE) nonce for the given address.
   *
   * @param address - The Ethereum address for which to retrieve the nonce.
   * @returns A promise that resolves to the nonce string.
   * @throws Will throw an error if the HTTP request fails or if the response is not ok.
   *
   * @remarks
   * This method sends a POST request to the Moon API to get a nonce for the provided Ethereum address.
   * It emits an 'siweNonceReceived' event with the address upon successful retrieval of the nonce.
   * If an error occurs, it emits an 'error' event with the method name, error details, and address.
   */
  async getSIWENonce(address: string): Promise<string> {
    try {
      const response = await fetch(
        `https://beta.usemoon.ai/auth/ethereum/nonce`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ address }),
        }
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      this.moonSDK.emit('siweNonceReceived', address);
      return data.user[0].auth.genNonce;
    } catch (error) {
      this.moonSDK.emit('error', { method: 'getSIWENonce', error, address });
      throw error;
    }
  }

  /**
   * Verifies the SIWE (Sign-In with Ethereum) signature by sending a request to the authentication endpoint.
   *
   * @param address - The Ethereum address of the user.
   * @param signedMessage - The signed message from the user.
   * @param nonce - The nonce used in the SIWE message.
   * @param message - The SIWE message object.
   * @returns A promise that resolves to a Session object containing the access and refresh tokens.
   *
   * @throws Will throw an error if the HTTP request fails or if the response is not ok.
   */
  async verifySIWESignature(
    address: string,
    signedMessage: string,
    nonce: string,
    message: SiweMessage
  ): Promise<Session> {
    try {
      const response = await fetch(
        `https://beta.usemoon.ai/auth/ethereum/login`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            address,
            signedMessage,
            nonce,
            message: message.prepareMessage(),
          }),
        }
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      console.log(data);
      this.connect(data.token.access_token, data.token.refresh_token);
      this.moonSDK.emit('siweSignatureVerified', address);
      return data.token;
    } catch (error) {
      this.moonSDK.emit('error', {
        method: 'verifySIWESignature',
        error,
        address,
      });
      throw error;
    }
  }

  /**
   * Sends a magic link to the specified email address for authentication.
   *
   * @param email - The email address to send the magic link to.
   * @param redirectTo - The URL to redirect to after the user clicks the magic link.
   * @returns A promise that resolves when the magic link has been sent.
   * @throws Will throw an error if sending the magic link fails.
   *
   * @example
   * ```typescript
   * await authService.sendMagicLink('user@example.com', 'https://example.com/welcome');
   * ```
   */
  async sendMagicLink(email: string, redirectTo: string): Promise<void> {
    try {
      const { error } = await this.supabase.auth.signInWithOtp({
        email: email,
        options: {
          emailRedirectTo: redirectTo,
        },
      });
      if (error) throw error;
      this.moonSDK.emit('magicLinkSent', email);
    } catch (error) {
      this.moonSDK.emit('error', { method: 'sendMagicLink', error, email });
      throw error;
    }
  }

  /**
   * Retrieves the current user session from the Supabase authentication service.
   *
   * @returns {Promise<Session | null>} A promise that resolves to the current user session, or null if no session exists.
   * @throws Will throw an error if there is an issue retrieving the session.
   */
  async getUserSession(): Promise<Session | null> {
    try {
      const { data, error } = await this.supabase.auth.getSession();
      if (error) throw error;
      return data.session;
    } catch (error) {
      this.moonSDK.emit('error', { method: 'getUserSession', error });
      throw error;
    }
  }

  /**
   * Logs out the current user by signing out from the Supabase authentication service.
   *
   * @returns {Promise<void>} A promise that resolves when the logout process is complete.
   *
   * @throws Will emit an 'error' event and rethrow the error if the logout process fails.
   *
   * @emits 'disconnected' - When the user is successfully logged out.
   * @emits 'error' - When there is an error during the logout process.
   */
  async logout(): Promise<void> {
    try {
      await this.supabase.auth.signOut();
      this.isAuthenticated = false;
      this.moonSDK.emit('disconnected');
    } catch (error) {
      this.moonSDK.emit('error', { method: 'logout', error });
      throw error;
    }
  }

  /**
   * Creates an embedded account using the provided email, uuid, and domain.
   *
   * @param email - The email address associated with the new embedded account.
   * @param uuid - The unique identifier for the user.
   * @param domain - The domain from which the request is made.
   * @returns A promise that resolves to a Session object containing the access token and refresh token.
   * @throws Will throw an error if the user is not authenticated or if the HTTP request fails.
   *
   * @emits embeddedAccountCreated - Emitted when the embedded account is successfully created.
   * @emits error - Emitted when an error occurs during the creation of the embedded account.
   */
  async createEmbeddedAccount(
    email: string,
    uuid: string,
    domain: string
  ): Promise<Session> {
    try {
      const token = await this.getUserSession();
      if (!token?.access_token) throw new Error('User not authenticated');

      const response = await fetch('https://beta.usemoon.ai/client', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.access_token}`,
        },
        body: JSON.stringify({
          name: email,
          metadata: { from: domain, user: uuid },
        }),
      });
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      this.connect(data.token.access_token, data.token.refresh_token);
      this.moonSDK.emit('embeddedAccountCreated', { email, uuid, domain });
      return data.token;
    } catch (error) {
      this.moonSDK.emit('error', {
        method: 'createEmbeddedAccount',
        error,
        email,
        uuid,
        domain,
      });
      throw error;
    }
  }

  /**
   * Registers a callback function to be called whenever the authentication state changes.
   *
   * @param callback - A function that will be called with the authentication event and session.
   *                   The event is a string indicating the type of authentication change (e.g., 'SIGNED_IN', 'SIGNED_OUT').
   *                   The session is an object containing session details or null if there is no session.
   *
   * @remarks
   * The callback function will be invoked with the event and session parameters. If the event is 'SIGNED_IN',
   * the `isAuthenticated` property will be set to true and a 'connected' event will be emitted with the session.
   * If the event is 'SIGNED_OUT', the `isAuthenticated` property will be set to false and a 'disconnected' event
   * will be emitted.
   */
  onAuthStateChange(
    callback: (event: string, session: Session | null) => void
  ): void {
    this.supabase.auth.onAuthStateChange((event, session) => {
      callback(event, session);
      if (event === 'SIGNED_IN') {
        this.isAuthenticated = true;
        this.moonSDK.emit('connected', session);
      } else if (event === 'SIGNED_OUT') {
        this.isAuthenticated = false;
        this.moonSDK.emit('disconnected');
      }
    });
  }

  /**
   * Registers a callback function to be invoked when an error event occurs.
   *
   * @param callback - The function to be called when an error event is emitted.
   *                   It receives an `Error` object as its argument.
   */
  onError(callback: (error: Error) => void): void {
    this.moonSDK.on('error', ({ error }) => callback(error));
  }
}
