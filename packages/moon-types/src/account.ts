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
  isAuth: boolean = false;

  constructor(storage: MoonStorage) {
    this.storage = storage;

    // set defaults
    this.token = '';
    this.refreshToken = '';
    this.email = '';
    this.expiry = 0;
    this.wallet = '';
    this.network = MOON_SUPPORTED_NETWORKS[0];
    const storedItem = this.storage.getItem();
    if (storedItem) {
      this.LoadFromJson(storedItem as MoonAccountInterface);
    }
  }
  LoadFromJson(json: MoonAccountInterface) {
    this.token = json.token;
    this.refreshToken = json.refreshToken;
    this.email = json.email;
    this.expiry = json.expiry;
    this.wallet = json.wallet;
    this.network = json.network;
    if (this.token && this.refreshToken && this.email && this.expiry) {
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
