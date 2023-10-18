import { MOON_SESSION_KEY, MoonAccount, Storage } from './config';

export const useStorage = (storageType: Storage) => {
	let _storage: any;
	switch (storageType) {
		case Storage.LOCAL:
			_storage = window.localStorage;
		case Storage.SESSION:
			_storage = window.sessionStorage;
			return sessionStorage;
		default:
			_storage = window.localStorage;
	}

	const setItem = (key: string, value: string): void => {
		_storage.setItem(key, value);
	};
	const getItem = (key: string): string | null => {
		return _storage.getItem(key);
	};

	const removeItem = (key: string): void => {
		_storage.removeItem(key);
	};

	return {
		setItem,
		getItem,
		removeItem,
	};
};

export const getLocalAccounts = (storage: Storage): MoonAccount => {
	const moonAccount = useStorage(storage).getItem(MOON_SESSION_KEY);
	if (!moonAccount) {
		return {} as MoonAccount;
	}

	// TODO: validate session/login/register session with server
	return JSON.parse(moonAccount) as MoonAccount;
};
