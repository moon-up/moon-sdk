import { AUTH, MoonToken } from '@moonup/types/src/types';
const jwtSecurityWorker = (securityData: any) => {
	return {
		headers: {
			Authorization: `Bearer ${securityData.token}`,
		},
	};
};

const xApiKeySecurityWorker = (securityData: any) => {
	return {
		headers: {
			'x-api-key': `${securityData.token}`,
		},
	};
};

const oauth2SecurityWorker = (securityData: any) => {
	return {
		headers: {
			Authorization: `Bearer ${securityData.token}`,
		},
	};
};
export const useAuth = (config: MoonToken): MoonToken => {
	switch (config.type) {
		case AUTH.OAUTH2:
			return {
				type: AUTH.OAUTH2,
				MoonAccount: config.MoonAccount,
				securityWorker: oauth2SecurityWorker,
				CLIENT_ID: config.CLIENT_ID,
				CLIENT_SECRET: config.CLIENT_SECRET,
				REDIRECT_URI: config.REDIRECT_URI,
			};
		case AUTH.JWT:
			return {
				type: AUTH.JWT,
				MoonAccount: config.MoonAccount,
				securityWorker: xApiKeySecurityWorker,
			};
		case AUTH.X_API_KEY:
			return {
				type: AUTH.X_API_KEY,

				MoonAccount: config.MoonAccount,
				securityWorker: xApiKeySecurityWorker,
			};
		default:
			return {
				type: AUTH.JWT,
				MoonAccount: config.MoonAccount,
				securityWorker: jwtSecurityWorker,
			};
	}
};
