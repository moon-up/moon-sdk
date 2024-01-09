import type {
  VerifiedAuthenticationResponse,
  VerifiedRegistrationResponse,
} from '@simplewebauthn/server';
import type {
  AuthenticationResponseJSON,
  PublicKeyCredentialCreationOptionsJSON,
  PublicKeyCredentialRequestOptionsJSON,
  RegistrationResponseJSON,
} from '@simplewebauthn/typescript-types';
export interface RefreshTokenInput {
  refreshToken: string;
}
export interface RefreshTokenResponse {
  accessToken: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProfileInput {}
export interface ProfileResponse {
  id: number;
  username: string;
  email: string;
  displayName: string;
  register_timestamp: number;
  login_timestamp: number;
  createdAt: Date;
  updatedAt: Date;
  githubId?: string;
  appleId?: string;
  discordId?: string;
  googleId?: string;
}

export interface CreateOauth2ClientInput {
  name: string;
  redirect_uris: string[];
}

export interface CreateOauth2ClientResponse {
  client_id: string;
  client_secret: string;
}

export interface MoonOauth2QueryParamsInput {
  response_type: string;
  client_id: string;
  redirect_uri: string;
  scope: string;
  state: string;
}
export interface MoonOauth2AuthorizeInput {
  authorizationCode: string;
  expiresAt: Date;
  redirectUri: string;
  scope: string;
}

export interface MoonOauth2AuthorizeResponse {
  code: string;
  state: string;
  redirect_uri: string;
  client_id: string;
  scope: string;
}
export interface MoonOauth2ExchangeInput {
  grant_type: string;
  client_id: string;
  client_secret: string;
  code: string;
  redirect_uri: string;
}

export interface MoonOauth2ExchangeResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}

export interface GoogleCallbackInput {
  code: string;
  scope: string;
  authuser: string;
  hd: string;
  prompt: string;
}

export interface GoogleCallbackResponse {
  token: string;
  refreshToken: string;
}
export interface GoogleAltCallbackInput {
  code: string;
  scope: string;
  authuser: string;
  hd: string;
  prompt: string;
}

export interface GoogleAltCallbackResponse {
  token: string;
  refreshToken: string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DiscordCallbackInput {}

export interface DiscordCallbackResponse {
  token: string;
  refreshToken: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GithubCallbackInput {}

export interface GithubCallbackResponse {
  token: string;
  refreshToken: string;
}

export interface WebAuthnRegisterInput {
  username: string;
}

export interface WebAuthnRegisterResponse {
  message?: string;
  success?: boolean;
  register?: VerifiedRegistrationResponse;
  auth?: VerifiedAuthenticationResponse;
  options?: PublicKeyCredentialCreationOptionsJSON;
  optionsAuth?: PublicKeyCredentialRequestOptionsJSON;
}

export interface WebAuthNRegisterVerifyInput extends RegistrationResponseJSON {
  username: string;
}

export interface WebAuthNRegisterVerifyResponse {
  message: string;
}

export interface WebAuthnLoginInput {
  username: string;
}

export interface WebAuthnLoginResponse {
  message?: string;
  success?: boolean;
  register?: VerifiedRegistrationResponse;
  auth?: VerifiedAuthenticationResponse;
  options?: PublicKeyCredentialCreationOptionsJSON;
  optionsAuth?: PublicKeyCredentialRequestOptionsJSON;
}

export interface WebAuthnLoginVerifyInput extends AuthenticationResponseJSON {
  username: string;
}

export interface WebAuthnLoginVerifyResponse {
  token: string;
  refreshToken: string;
}

export interface EmailSignupInput {
  email: string;
  password: string;
}

export interface EmailSignupResponse {
  message: string;
}

export interface EmailLoginInput {
  email: string;
  password: string;
}

export interface EmailLoginResponse {
  token: string;
  refreshToken: string;
  expiry: number;
}

export interface ResetPasswordInput {
  email: string;
}

export interface ResetPasswordResponse {
  message: string;
}
export interface ResetPasswordConfirmInput {
  token: string;
  password: string;
}

export interface ResetPasswordConfirmResponse {
  message: string;
}

export interface Enable2faInput {
  userId: number;
}

export interface Enable2faResponse {
  message: string;
}

export interface Verify2faInput {
  userId: number;
  token: string;
}

export interface Verify2faResponse {
  message: string;
}

export interface Disable2faInput {
  userId: number;
  code: string;
}

export interface Disable2faResponse {
  message: string;
}
