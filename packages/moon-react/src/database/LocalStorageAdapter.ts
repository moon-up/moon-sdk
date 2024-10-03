import { UserToken } from "../components/public/TokenManager/types";
import { DbTokenPrice, DBAdapterBase, DbWalletAlias } from "./DBAdapterBase";

export class LocalStorageAdapter implements DBAdapterBase {
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

  async getTokenPrice(tokenId: string): Promise<DbTokenPrice> {
    const prices = localStorage.getItem("tokenPrices");
    return prices ? JSON.parse(prices)[tokenId] : 0;
  }

  async saveTokenPrice(tokenId: string, price: number): Promise<void> {
    const prices = localStorage.getItem("tokenPrices");
    const newPrices = prices ? JSON.parse(prices) : {};
    newPrices[tokenId] = price;
    localStorage.setItem("tokenPrices", JSON.stringify(newPrices));
  }

  async updateToken(token: UserToken): Promise<void> {
    let tokens = await this.getTokens();
    tokens = tokens.map((t) => (t.address === token.address ? token : t));
    localStorage.setItem(this.storageKey, JSON.stringify(tokens));
  }
  async getUserWalletAliases(): Promise<DbWalletAlias[]> {
    throw new Error("Method not implemented.");
  }
  async upsertWalletAlias(alias: string, address: string): Promise<void> {
    console.log("upsertWalletAlias", alias, address);
    throw new Error("Method not implemented.");
  }
}
