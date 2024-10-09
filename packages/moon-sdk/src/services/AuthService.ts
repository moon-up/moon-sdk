import {
  AuthenticationResponseJSON,
  PublicKeyCredentialCreationOptionsJSON,
  PublicKeyCredentialRequestOptionsJSON,
  RegistrationResponseJSON,
} from '@simplewebauthn/typescript-types';
import { Session, SupabaseClient } from '@supabase/supabase-js';
import { SiweMessage } from 'siwe';

import { MoonSDK } from '../moon'; // Assuming MoonSDK is in a separate file

export class AuthService {
  private moonSDK: MoonSDK;
  private supabase: SupabaseClient;
  public isAuthenticated: boolean;

  constructor(moonSDK: MoonSDK) {
    this.moonSDK = moonSDK;
    this.supabase = moonSDK.supabase;
    this.isAuthenticated = false;
  }

  public async connect(
    accessToken?: string,
    refreshToken?: string
  ): Promise<void> {
    try {
      if (accessToken && refreshToken) {
        await this.supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });
      } else {
        const { data, error } = await this.supabase.auth.getSession();
        if (error) {
          throw new Error(error.message);
        }
      }
      this.isAuthenticated = true;
      this.moonSDK.emit('connected');
    } catch (error) {
      this.moonSDK.emit('error', { method: 'connect', error });
      throw error;
    }
  }
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
      await this.moonSDK.connect(
        data.token.accessToken,
        data.token.refreshToken
      );
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
      await this.moonSDK.connect(
        data.token.accessToken,
        data.token.refreshToken
      );
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

  onError(callback: (error: Error) => void): void {
    this.moonSDK.on('error', ({ error }) => callback(error));
  }
}
