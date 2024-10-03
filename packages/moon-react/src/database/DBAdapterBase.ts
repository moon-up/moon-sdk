import { UserToken } from "../components/public/TokenManager/types";

export type DbTokenPrice = {
  id: string;
  created_at: string;
  price: number;
  updated_at: string;
};
export type DbWalletAlias = {
  address: string;
  user_id: string;
  alias: string;
  created_at: string;
  updated_at: string;
};

export interface DBAdapterBase {
  getTokens(): Promise<UserToken[]>;
  addToken(token: UserToken): Promise<void>;
  updateToken(token: UserToken): Promise<void>;
  removeToken(address: string): Promise<void>;
  getTokenPrice(tokenId: string): Promise<DbTokenPrice>;
  saveTokenPrice(tokenId: string, price: number): Promise<void>;
  getUserWalletAliases(): Promise<DbWalletAlias[]>;
  upsertWalletAlias(alias: string, address: string): Promise<void>;
}
