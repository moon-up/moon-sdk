import { ContentType, HttpClient, RequestParams } from '../lib/http-client';
import {
	ResetPasswordConfirmInput,
	ResetPasswordConfirmResponse,
	ResetPasswordInput,
	ResetPasswordResponse,
} from './data-contracts';
import {
	CreateOauth2ClientInput,
	CreateOauth2ClientResponse,
	Disable2faInput,
	Enable2faInput,
	MoonOauth2AuthorizeResponse,
	MoonOauth2QueryParamsInput,
	ProfileResponse,
	RefreshTokenInput,
	RefreshTokenResponse,
	Verify2faInput,
	Verify2faResponse,
} from './data-contracts';

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
		this.request<RefreshTokenResponse, any>({
			path: `/auth/refresh-token`,
			method: 'POST',
			body: data,
			type: ContentType.Json,
			format: 'json',
			...params,
		});

	profile = (params: RequestParams = {}) =>
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
		this.request<ProfileResponse, any>({
			path: `/auth/oauth/openai/oauth'`,
			method: 'GET',
			query: query,
			...params,
		});
	moonOauth2Authorize = (
		data: MoonOauth2QueryParamsInput,
		params: RequestParams = {}
	) => {
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
		data: MoonOauth2QueryParamsInput,
		params: RequestParams = {}
	) => {
		return this.request<MoonOauth2AuthorizeResponse, any>({
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
		this.request<ProfileResponse, any>({
			path: `/auth/oauth/google`,
			method: 'GET',
			query: query,
			...params,
		});
	//oauth/google/callback
	///oauth/google-alt'
	//'/oauth/google-alt/callback'
	// /email/signup'
	// /email/login'
	// /oauth/github'
	// '/oauth/github/callback',
	// '/oauth/discord',
	// '/oauth/discord/callback',
	// ('/webauthn
	// ('/webauthn/register',
	// /webauthn/login',
	// '/webauthn/login/verify',
	// '/webauthn/register/verify',
	// '/forgot-password',
	resetPassword = (data: ResetPasswordInput, params: RequestParams = {}) =>
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
		this.request<Disable2faInput, any>({
			path: `/auth/disable-2fa`,
			method: 'POST',
			body: data,
			type: ContentType.Json,
			format: 'json',
			...params,
		});
}
