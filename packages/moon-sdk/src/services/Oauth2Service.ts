// services/OAuth2Service.ts

import { Session } from '@supabase/supabase-js';

import { MoonSDK } from '../moon'; // Adjust the import path as needed

export class OAuth2Service {
  private moonSDK: MoonSDK;
  private clientId: string;
  private baseUrl = 'https://beta.usemoon.ai/auth/oauth2';

  constructor(moonSDK: MoonSDK, clientId: string) {
    this.moonSDK = moonSDK;
    this.clientId = clientId;
  }

  private getRedirectUri(provider: string): string {
    return `${this.baseUrl}/${provider}?clientId=${this.clientId}`;
  }

  public initiateOAuth(
    provider: 'discord' | 'github' | 'google' | 'twitter'
  ): void {
    const uri = this.getRedirectUri(provider);
    window.location.href = uri;
  }

  public async exchangeCodeForToken(
    provider: string,
    code: string
  ): Promise<any> {
    const uri = `${this.baseUrl}/${provider}/${this.clientId}/token?code=${code}`;

    try {
      const response = await fetch(uri, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(
          `Server responded with ${response.status}: ${response.statusText}`
        );
      }

      const token = await response.json();

      if (!token.access_token || !token.refresh_token) {
        throw new Error('Invalid token data received');
      }

      await this.moonSDK.connect(token.access_token, token.refresh_token);

      this.moonSDK.emit('oauthCompleted', { provider, token });

      return token;
    } catch (error) {
      this.moonSDK.emit('error', {
        method: 'exchangeCodeForToken',
        error,
        provider,
      });
      throw error;
    }
  }

  public async performOAuth(
    provider: 'discord' | 'github' | 'google' | 'twitter'
  ): Promise<void> {
    this.initiateOAuth(provider);
  }

  public async handleOAuthCallback(
    provider: string,
    code: string
  ): Promise<Session> {
    return this.exchangeCodeForToken(provider, code);
  }
}
