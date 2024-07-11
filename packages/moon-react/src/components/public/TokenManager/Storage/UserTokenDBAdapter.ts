import { UserToken } from "../types";

type DbTokenPrice = {
  id: string;
  created_at: string;
  price: number;
  updated_at: string;
};

export interface UserTokenDBAdapter {
  getTokens(): Promise<UserToken[]>;
  addToken(token: UserToken): Promise<void>;
  removeToken(address: string): Promise<void>;
  getTokenPrice(tokenId: string): Promise<DbTokenPrice>;
  saveTokenPrice(tokenId: string, price: number): Promise<void>;
}
