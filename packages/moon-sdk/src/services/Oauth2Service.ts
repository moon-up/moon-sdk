// services/OAuth2Service.ts

import { MoonSDK } from '../moon'; // Adjust the import path as needed

type OAuthProvider = 'discord' | 'github' | 'google' | 'twitter';

/**
 * Represents the response received after a successful OAuth2 token exchange.
 *
 * @interface TokenResponse
 * @property {string} access_token - The token used to access protected resources.
 * @property {string} refresh_token - The token used to obtain a new access token when the current one expires.
 */
interface TokenResponse {
  access_token: string;
  refresh_token: string;
}

/**
 * The `OAuth2Service` class provides methods to handle OAuth2 authentication processes.
 * It allows initiating the OAuth2 flow, exchanging authorization codes for tokens, and handling OAuth callbacks.
 *
 * @remarks
 * This service is designed to work with the MoonSDK and interacts with the OAuth2 endpoints of the Moon platform.
 *
 * @example
 * ```typescript
 * const oauthService = new OAuth2Service(moonSDK, 'your-client-id');
 * oauthService.performOAuth('google');
 * ```
 *
 * @public
 */
export class OAuth2Service {
  private readonly moonSDK: MoonSDK;
  private readonly clientId: string;
  private readonly baseUrl = 'https://beta.usemoon.ai/auth/oauth2';

  /**
   * Creates an instance of Oauth2Service.
   *
   * @param moonSDK - An instance of the MoonSDK.
   * @param clientId - The client ID for OAuth2 authentication.
   */
  constructor(moonSDK: MoonSDK, clientId: string) {
    this.moonSDK = moonSDK;
    this.clientId = clientId;
  }

  /**
   * Constructs the redirect URI for the given OAuth provider.
   *
   * @param provider - The OAuth provider for which the redirect URI is being generated.
   * @returns The constructed redirect URI.
   */
  private getRedirectUri(provider: OAuthProvider): string {
    return `${this.baseUrl}/${provider}?clientId=${this.clientId}`;
  }

  /**
   * Initiates the OAuth2 authentication process by redirecting the user to the provider's authorization endpoint.
   *
   * @param provider - The OAuth provider to use for authentication.
   */
  public initiateOAuth(provider: OAuthProvider): void {
    const uri = this.getRedirectUri(provider);
    window.location.href = uri;
  }

  /**
   * Exchanges an authorization code for an access token and refresh token.
   *
   * @param provider - The OAuth provider to use for the token exchange.
   * @param code - The authorization code received from the OAuth provider.
   * @returns A promise that resolves to a `TokenResponse` containing the access token and refresh token.
   * @throws Will throw an error if the server response is not ok or if the token data is invalid.
   *
   * @emits oauthCompleted - Emitted when the OAuth process is successfully completed.
   * @emits error - Emitted when an error occurs during the token exchange process.
   */
  public async exchangeCodeForToken(
    provider: OAuthProvider,
    code: string
  ): Promise<TokenResponse> {
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

      const { token } = await response.json();

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

  /**
   * Initiates the OAuth process for the specified provider.
   *
   * @param provider - The OAuth provider to use for authentication.
   * @returns A promise that resolves when the OAuth process is initiated.
   */
  public async performOAuth(provider: OAuthProvider): Promise<void> {
    this.initiateOAuth(provider);
  }

  /**
   * Handles the OAuth callback by exchanging the provided authorization code for an access token.
   *
   * @param provider - The OAuth provider from which the authorization code was received.
   * @param code - The authorization code received from the OAuth provider.
   * @returns A promise that resolves to a TokenResponse containing the access token and other related information.
   */
  public async handleOAuthCallback(
    provider: OAuthProvider,
    code: string
  ): Promise<TokenResponse> {
    return this.exchangeCodeForToken(provider, code);
  }
}
