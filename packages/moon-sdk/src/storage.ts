import {
	MOON_SESSION_KEY,
	MoonAccount,
	MoonStorage,
	Storage,
} from '@moon/types/src/types';

export const useStorage = (storageType: Storage): MoonStorage => {
	let _storage: any;
	switch (storageType) {
		case Storage.LOCAL:
			_storage = window.localStorage;
		case Storage.SESSION:
			_storage = window.sessionStorage;
		default:
			_storage = window.localStorage;
	}

	const setItem = (account: MoonAccount): void => {
		_storage.setItem(MOON_SESSION_KEY, JSON.stringify(account));
		return;
	};
	const getItem = (): MoonAccount | null => {
		const key = _storage.getItem(MOON_SESSION_KEY);
		return JSON.parse(key) as MoonAccount;
	};

	const removeItem = (): void => {
		_storage.removeItem(MOON_SESSION_KEY);
	};

	return {
		type: storageType,
		key: MOON_SESSION_KEY,
		setItem,
		getItem,
		removeItem,
	};
};

export const getLocalAccounts = (storage: Storage): MoonAccount => {
	const moonAccount = useStorage(storage).getItem();
	if (!moonAccount) {
		return {} as MoonAccount;
	}

	// TODO: validate session/login/register session with server
	// return JSON.parse(moonAccount) as MoonAccount;
	return moonAccount;
};
