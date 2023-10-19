import { MOON_SUPPORTED_NETWORKS } from '@moon/types/src/chains';
import {
	AUTH,
	MOON_SESSION_KEY,
	MoonSDKConfig,
	Storage,
} from '@moon/types/src/types';
// base config
export const baseConfig: MoonSDKConfig = {
	Auth: {
		type: AUTH.JWT,
		MoonAccount: {
			token: '',
			email: '',
			expiry: 0,
			wallet: '',
			refreshToken: '',
			network: MOON_SUPPORTED_NETWORKS[0],
		},
		securityWorker: () => {},
	},
	Storage: {
		type: Storage.LOCAL,
		key: MOON_SESSION_KEY,
		setItem: () => {},
		removeItem: () => {},
		getItem: () => null,
	},
	Networks: MOON_SUPPORTED_NETWORKS,
};
