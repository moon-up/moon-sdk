import { SupabaseClient } from "@supabase/supabase-js";
import { UserTokenDBAdapter } from ".";
import { UserToken } from "../types";
import { v4 as uuidv4 } from "uuid";

type DbToken = {
  id?: string;
  user_id: string;
  name: string;
  symbol: string;
  coin_gecko_id: string;
  decimals: number;
  address: string;
  chain_id: number;
  logo_uri: string;
};
type DbTokenPrice = {
  id: string;
  created_at: string;
  price: number;
  updated_at: string;
};
export class SupabaseAdapter implements UserTokenDBAdapter {
  private supabase: SupabaseClient;

  constructor(supabase: SupabaseClient) {
    this.supabase = supabase;
  }

  async getUserId(): Promise<string> {
    const { data, error } = await this.supabase.auth.getUser();
    if (error) {
      throw new Error(error.message);
    }
    return data?.user?.id || "";
  }

  async getOneUserDbToken(
    userId: string,
    contractAddress: string,
    chainId: number
  ): Promise<DbToken> {
    const { data, error } = await this.supabase
      .from("user_tokens")
      .select("*")
      .eq("user_id", userId)
      .eq("address", contractAddress)
      .eq("chain_id", chainId)
      .limit(1);
    console.log("getOneUserDbToken", data, error);

    if (error) throw new Error(error.message);
    return data[0];
  }

  async getTokens(): Promise<UserToken[]> {
    let userId = await this.getUserId();
    const { data, error } = await this.supabase
      .from("user_tokens")
      .select("*")
      .eq("user_id", userId);
    console.log("getTokens", data, error);

    if (error) throw new Error(error.message);
    //convert db tokens to user tokens
    const userTokens = data?.map((token: DbToken) => {
      return {
        name: token.name,
        symbol: token.symbol,
        coinGeckoId: token.coin_gecko_id,
        decimals: token.decimals,
        address: token.address,
        chainId: token.chain_id,
        icon: token.logo_uri,
      };
    });
    return userTokens;
  }

  async updateToken(token: UserToken): Promise<void> {
    let userId = await this.getUserId();
    let existingToken = await this.getOneUserDbToken(
      userId || "",
      token.address,
      token.chainId
    );
    if (!existingToken) {
      throw new Error("updateToken::Token not found");
    }
    existingToken.name = token.name;
    existingToken.symbol = token.symbol;
    existingToken.coin_gecko_id = token.coinGeckoId;
    existingToken.decimals = token.decimals;
    existingToken.logo_uri = token.icon || "";
    existingToken.chain_id = token.chainId;
    existingToken.address = token.address;

    console.log("updateToken", existingToken);
    const { error } = await this.supabase
      .from("user_tokens")
      .update(existingToken)
      .eq("id", existingToken.id);
    if (error) throw new Error(error.message);
  }

  async addToken(token: UserToken): Promise<void> {
    let userId = await this.getUserId();

    const dbToken: DbToken = {
      id: uuidv4(), // Generate a new UUID
      user_id: userId || "",
      name: token.name,
      symbol: token.symbol,
      coin_gecko_id: token.coinGeckoId,
      decimals: token.decimals,
      address: token.address,
      chain_id: token.chainId,
      logo_uri: token.icon || "",
    };
    console.log("addToken", dbToken);
    const { error } = await this.supabase.from("user_tokens").insert(dbToken);
    if (error) throw new Error(error.message);
  }

  async removeToken(address: string): Promise<void> {
    const { error } = await this.supabase
      .from("user_tokens")
      .delete()
      .eq("address", address);
    if (error) throw new Error(error.message);
  }

  async getTokenPrice(tokenId: string): Promise<DbTokenPrice> {
    const { data, error } = await this.supabase
      .from("cg_token_price_cache")
      .select("*")
      .eq("id", tokenId)
      .limit(1)
      .single();
    console.log("getTokenPrice", data, error);

    if (error) throw new Error(error.message);
    // this.tokens = data;
    return data;
  }

  async saveTokenPrice(tokenId: string, price: number): Promise<void> {
    const { error, data } = await this.supabase
      .from("cg_token_price_cache")
      .upsert({
        id: tokenId,
        price: price,
        updated_at: new Date().toISOString(),
      });
    console.log("saveTokenPrice", data, error);

    if (error) throw new Error(error.message);
  }
}
