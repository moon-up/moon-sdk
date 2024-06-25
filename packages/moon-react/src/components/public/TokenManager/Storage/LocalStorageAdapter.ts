import { UserToken } from "../types";
import { UserTokenDBAdapter } from "./UserTokenDBAdapter";

export class LocalStorageAdapter implements UserTokenDBAdapter {
  private storageKey = "userTokens";

  async getTokens(): Promise<UserToken[]> {
    const tokens = localStorage.getItem(this.storageKey);
    return tokens ? JSON.parse(tokens) : [];
  }

  async addToken(token: UserToken): Promise<void> {
    const tokens = await this.getTokens();
    tokens.push(token);
    localStorage.setItem(this.storageKey, JSON.stringify(tokens));
  }

  async removeToken(address: string): Promise<void> {
    let tokens = await this.getTokens();
    tokens = tokens.filter((token) => token.address !== address);
    localStorage.setItem(this.storageKey, JSON.stringify(tokens));
  }
}
