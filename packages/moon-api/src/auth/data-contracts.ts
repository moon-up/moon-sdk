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
