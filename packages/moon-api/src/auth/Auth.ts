import {
  CreateOauth2ClientInput,
  CreateOauth2ClientResponse,
  Disable2faInput,
  DiscordCallbackInput,
  DiscordCallbackResponse,
  EmailLoginInput,
  EmailLoginResponse,
  EmailSignupInput,
  EmailSignupResponse,
  Enable2faInput,
  GithubCallbackInput,
  GithubCallbackResponse,
  GoogleAltCallbackInput,
  GoogleCallbackInput,
  GoogleCallbackResponse,
  MoonOauth2AuthorizeInput,
  MoonOauth2AuthorizeResponse,
  MoonOauth2ExchangeInput,
  MoonOauth2ExchangeResponse,
  MoonOauth2QueryParamsInput,
  ProfileResponse,
  RefreshTokenInput,
  RefreshTokenResponse,
  ResetPasswordConfirmInput,
  ResetPasswordConfirmResponse,
  ResetPasswordInput,
  ResetPasswordResponse,
  Verify2faInput,
  Verify2faResponse,
  WebAuthNRegisterVerifyInput,
  WebAuthNRegisterVerifyResponse,
  WebAuthnLoginInput,
  WebAuthnLoginResponse,
  WebAuthnLoginVerifyInput,
  WebAuthnLoginVerifyResponse,
  WebAuthnRegisterInput,
  WebAuthnRegisterResponse,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Auth<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Accounts
   * @name TransferEth
   * @request POST:/accounts/{accountName}/transfer-eth
   */
  refreshToken = (data: RefreshTokenInput, params: RequestParams = {}) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.request<RefreshTokenResponse, any>({
      path: `/auth/refresh-token`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  profile = (params: RequestParams = {}) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.request<ProfileResponse, any>({
      path: `/auth/profile`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  createOauth2Client(
    data: CreateOauth2ClientInput,
    params: RequestParams = {}
  ) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.request<CreateOauth2ClientResponse, any>({
      path: `/auth/oauth/openai/create`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  }
  moonOauth2 = (
    query: MoonOauth2QueryParamsInput,
    params: RequestParams = {}
  ) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.request<ProfileResponse, any>({
      path: `/auth/oauth/openai/oauth`,
      method: 'GET',
      query: query,
      ...params,
    });
  moonOauth2Authorize = (
    data: MoonOauth2AuthorizeInput,
    params: RequestParams = {}
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.request<MoonOauth2AuthorizeResponse, any>({
      path: `/auth/oauth/openai/authorize`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  };
  moonOauth2Exchange = (
    data: MoonOauth2ExchangeInput,
    params: RequestParams = {}
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.request<MoonOauth2ExchangeResponse, any>({
      path: `/auth/oauth/openai/exchange`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  };

  googleOauth2 = (
    query: MoonOauth2QueryParamsInput,
    params: RequestParams = {}
  ) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.request<ProfileResponse, any>({
      path: `/auth/oauth/google`,
      method: 'GET',
      query: query,
      ...params,
    });
  //oauth/google/callback
  googleOauth2Callback = (
    data: GoogleCallbackInput,
    params: RequestParams = {}
  ) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.request<GoogleCallbackResponse, any>({
      path: `/auth/oauth/google/callback`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  ///oauth/google-alt'
  googleAltOauth2 = (
    query: MoonOauth2QueryParamsInput,
    params: RequestParams = {}
  ) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.request<ProfileResponse, any>({
      path: `/auth/oauth/google-alt`,
      method: 'GET',
      query: query,
      ...params,
    });
  //'/oauth/google-alt/callback'
  googleAltOauth2Callback = (
    data: GoogleAltCallbackInput,
    params: RequestParams = {}
  ) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.request<GoogleCallbackResponse, any>({
      path: `/auth/oauth/google-alt/callback`,
      query: data,
      method: 'GET',
      ...params,
    });
  // /email/signup'
  emailSignup = (data: EmailSignupInput, params: RequestParams = {}) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.request<EmailSignupResponse, any>({
      path: `/auth/email/signup`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  // /email/login'
  emailLogin = (data: EmailLoginInput, params: RequestParams = {}) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.request<EmailLoginResponse, any>({
      path: `/auth/email/login`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  // /oauth/github'
  githubOauth2 = (
    query: MoonOauth2QueryParamsInput,
    params: RequestParams = {}
  ) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.request<ProfileResponse, any>({
      path: `/auth/oauth/github`,
      method: 'GET',
      query: query,
      ...params,
    });
  // '/oauth/github/callback',
  githubOauth2Callback = (
    query: GithubCallbackInput,
    params: RequestParams = {}
  ) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.request<GithubCallbackResponse, any>({
      path: `/auth/oauth/github/callback`,
      method: 'GET',
      query: query,
      ...params,
    });
  // '/oauth/discord',
  discordOAuth2 = (
    query: MoonOauth2QueryParamsInput,
    params: RequestParams = {}
  ) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.request<ProfileResponse, any>({
      path: `/auth/oauth/discord`,
      method: 'GET',
      query: query,
      ...params,
    });
  // '/oauth/discord/callback',
  discordOAuth2Callback = (
    query: DiscordCallbackInput,
    params: RequestParams = {}
  ) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.request<DiscordCallbackResponse, any>({
      path: `/auth/oauth/discord/callback`,
      method: 'GET',
      query: query,
      ...params,
    });
  // ('/webauthn
  webauthn = (data: RefreshTokenInput, params: RequestParams = {}) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.request<RefreshTokenResponse, any>({
      path: `/auth/webauthn`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  // ('/webauthn/register',
  webauthnRegister = (
    data: WebAuthnRegisterInput,
    params: RequestParams = {}
  ) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.request<WebAuthnRegisterResponse, any>({
      path: `/auth/webauthn/register`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  // /webauth/register/verify
  webauthnRegisterVerify = (
    data: WebAuthNRegisterVerifyInput,
    params: RequestParams = {}
  ) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.request<WebAuthNRegisterVerifyResponse, any>({
      path: `/auth/webauthn/register/verify`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  // /webauthn/login',
  webAuthnLogin = (data: WebAuthnLoginInput, params: RequestParams = {}) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.request<WebAuthnLoginResponse, any>({
      path: `/auth/webauthn/login`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  // '/webauthn/login/verify',
  webauthnLoginVerify = (
    data: WebAuthnLoginVerifyInput,
    params: RequestParams = {}
  ) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.request<WebAuthnLoginVerifyResponse, any>({
      path: `/auth/webauthn/login/verify`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  // '/forgot-password',
  resetPassword = (data: ResetPasswordInput, params: RequestParams = {}) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.request<ResetPasswordResponse, any>({
      path: `/auth/reset-password`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  // /reset-password/:token',
  resetPasswordVerify = (
    data: ResetPasswordConfirmInput,
    params: RequestParams = {}
  ) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.request<ResetPasswordConfirmResponse, any>({
      path: `/auth/reset-password/verify`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  // '/enable-2fa';
  enable2fa = (data: Enable2faInput, params: RequestParams = {}) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.request<Enable2faInput, any>({
      path: `/auth/enable-2fa`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  // /verify-2fa
  verify2fa = (data: Verify2faInput, params: RequestParams = {}) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.request<Verify2faResponse, any>({
      path: `/auth/verify-2fa`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });

  // '/disable-2fa',
  disable2fa = (data: Disable2faInput, params: RequestParams = {}) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.request<Disable2faInput, any>({
      path: `/auth/disable-2fa`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
