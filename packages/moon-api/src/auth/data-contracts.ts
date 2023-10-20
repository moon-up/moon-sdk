export interface RefreshTokenInput {
	refreshToken: string;
}
export interface RefreshTokenResponse {
	accessToken: string;
}

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

export interface MoonOauth2AuthorizeResponse {
	code: string;
	state: string;
	redirect_uri: string;
	client_id: string;
	scope: string;
}
export interface WebAuthnRegisterInput {}

export interface WebAuthnRegisterResponse {
	credential: string;
}

export interface WebAuthnLoginInput {}

export interface WebAuthnLoginResponse {
	challenge: string;
}

export interface WebAuthnLoginVerifyInput {}

export interface WebAuthnLoginVerifyResponse {
	token: string;
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
