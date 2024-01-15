import { MoonAccountInterface } from './account';
export enum Storage {
  LOCAL = 'local',
  SESSION = 'session',
}
export const MOON_SESSION_KEY = 'MoonSessionKey';
export class MoonStorage {
  type: Storage;
  key: string;

  constructor(type: Storage, key: string) {
    this.type = type;
    this.key = key;
  }

  setItem(account: MoonAccountInterface): void {
    let _storage: globalThis.Storage;
    switch (this.type) {
      case Storage.LOCAL:
        _storage = window.localStorage;
        break;
      case Storage.SESSION:
        _storage = window.sessionStorage;
        break;
      default:
        _storage = window.localStorage;
        break;
    }
    _storage.setItem(this.key, JSON.stringify(account));
  }

  getItem(): MoonAccountInterface | null {
    let _storage: globalThis.Storage;
    switch (this.type) {
      case Storage.LOCAL:
        _storage = window.localStorage;
        break;
      case Storage.SESSION:
        _storage = window.sessionStorage;
        break;
      default:
        _storage = window.localStorage;
        break;
    }
    const key = _storage.getItem(this.key);
    try {
      if (!key) {
        return null;
      }
      return JSON.parse(key || '{}') as MoonAccountInterface;
    } catch (error) {
      console.error('Error parsing JSON from storage:', error);
      return null;
    }
  }

  removeItem(): void {
    let _storage: globalThis.Storage;
    switch (this.type) {
      case Storage.LOCAL:
        _storage = window.localStorage;
        break;
      case Storage.SESSION:
        _storage = window.sessionStorage;
        break;
      default:
        _storage = window.localStorage;
        break;
    }
    _storage.removeItem(this.key);
  }
}
