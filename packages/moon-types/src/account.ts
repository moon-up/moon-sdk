import { EventEmitter } from 'events';

import { Chain, MOON_SUPPORTED_NETWORKS } from './chain';
import { MoonStorage } from './storage';
export interface MoonAccountInterface {
  token: string;
  refreshToken: string;
  email: string;
  expiry: number;
  wallet: string;
  network: Chain;
}
export class MoonAccount {
  token: string;
  refreshToken: string;
  email: string;
  expiry: number;
  wallet: string;
  network: Chain;
  storage: MoonStorage;
  isAuth = false;
  Events: EventEmitter;

  constructor(storage: MoonStorage) {
    this.storage = storage;
    this.Events = new EventEmitter();

    this.Events.on('updateToken', this.setToken.bind(this));
    this.Events.on('updateRefreshToken', this.setRefreshToken.bind(this));
    this.Events.on('updateEmail', this.setEmail.bind(this));
    this.Events.on('updateExpiry', this.setExpiry.bind(this));
    this.Events.on('updateWallet', this.setWallet.bind(this));
    this.Events.on('updateNetwork', this.setNetwork.bind(this));
    this.Events.on('logout', this.logout.bind(this));
    this.Events.on('login', this.login.bind(this));

    // set defaults
    this.token = '';
    this.refreshToken = '';
    this.email = '';
    this.expiry = 0;
    this.wallet = '';
    this.network = MOON_SUPPORTED_NETWORKS[0];
    this.login();
  }

  // get storage
  getStorage() {
    return this.storage;
  }

  setStorage(storage: MoonStorage) {
    this.storage = storage;
  }

  getIsAuth() {
    return this.isAuth;
  }

  setIsAuth(isAuth: boolean) {
    this.isAuth = isAuth;
  }

  emit(type: string, data: string) {
    this.Events.emit(type, data);
  }
  login() {
    const storedItem = this.storage.getItem();
    if (storedItem) {
      this.LoadFromJson(storedItem as MoonAccountInterface);
    }
  }
  logout() {
    this.token = '';
    this.refreshToken = '';
    this.email = '';
    this.expiry = 0;
    this.wallet = '';
    this.network = MOON_SUPPORTED_NETWORKS[0];
    this.storage.removeItem();
    this.isAuth = false;
  }
  LoadFromJson(json: MoonAccountInterface) {
    this.token = json.token;
    this.refreshToken = json.refreshToken;
    this.email = json.email;
    this.expiry = json.expiry;
    this.wallet = json.wallet;
    this.network = json.network;
    if (this.token && this.refreshToken && this.expiry) {
      this.isAuth = true;
    }
  }

  saveToStorage() {
    this.storage.setItem(this.ToJson());
  }

  ToJson(): MoonAccountInterface {
    return {
      token: this.token,
      refreshToken: this.refreshToken,
      email: this.email,
      expiry: this.expiry,
      wallet: this.wallet,
      network: this.network,
    };
  }

  // add setters and getters
  setToken(token: string) {
    this.token = token;
    this.saveToStorage();
    if (token) {
      this.isAuth = true;
    }
  }

  getToken() {
    return this.token;
  }

  setRefreshToken(refreshToken: string) {
    this.refreshToken = refreshToken;
    this.saveToStorage();
  }

  getRefreshToken() {
    return this.refreshToken;
  }

  setEmail(email: string) {
    this.email = email;
    this.saveToStorage();
  }

  getEmail() {
    return this.email;
  }

  setExpiry(expiry: number) {
    this.expiry = expiry;
    this.saveToStorage();
  }

  getExpiry() {
    return this.expiry;
  }

  setWallet(wallet: string) {
    this.wallet = wallet;
    this.saveToStorage();
  }

  getWallet() {
    return this.wallet;
  }

  setNetwork(network: Chain) {
    this.network = network;
    this.saveToStorage();
  }

  getNetwork() {
    return this.network;
  }
}
