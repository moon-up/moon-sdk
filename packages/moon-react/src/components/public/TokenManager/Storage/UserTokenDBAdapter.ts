import { UserToken } from "../types";

export interface UserTokenDBAdapter {
  getTokens(): Promise<UserToken[]>;
  addToken(token: UserToken): Promise<void>;
  removeToken(address: string): Promise<void>;
}
