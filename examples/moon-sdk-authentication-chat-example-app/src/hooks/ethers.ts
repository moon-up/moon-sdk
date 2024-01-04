import { MoonProvider, MoonProviderOptions } from '@moonup/ethers';
import { AUTH, MOON_SESSION_KEY, Storage } from '@moonup/moon-types';
import { useEffect, useState } from 'react';

interface MoonSDKHook {
	moonProvider: MoonProvider | null;
	initialize: () => Promise<void>;
	disconnect: () => Promise<void>;
}

export function useMoonEthers(): MoonSDKHook {
	const [moonProvider, setMoonProvider] = useState<MoonProvider | null>(null);

	const initialize = async () => {
		const options: MoonProviderOptions = {
			chainId: 1,
			MoonSDKConfig: {
				Storage: {
					key: MOON_SESSION_KEY,
					type: Storage.SESSION,
				},
				Auth: {
					AuthType: AUTH.JWT,
				},
			},
		};

		const moonInstance = new MoonProvider(options);
		setMoonProvider(moonInstance);
	};

	const disconnect = async () => {
		if (moonProvider) {
			await moonProvider.disconnect();
			setMoonProvider(null);
		}
	};

	useEffect(() => {
		initialize();
	}, []);

	return {
		moonProvider,
		initialize,
		disconnect,
		// Add other methods as needed
	};
}
