import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { UserTokenDBAdapter } from ".";
import { UserToken } from "../types";

export class SupabaseAdapter implements UserTokenDBAdapter {
  private supabase: SupabaseClient;

  constructor(supabaseUrl: string, supabaseKey: string) {
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  async getTokens(): Promise<UserToken[]> {
    const { data, error } = await this.supabase.from("user_tokens").select("*");
    if (error) throw new Error(error.message);
    return data;
  }

  async addToken(token: UserToken): Promise<void> {
    const { error } = await this.supabase.from("user_tokens").insert(token);
    if (error) throw new Error(error.message);
  }

  async removeToken(address: string): Promise<void> {
    const { error } = await this.supabase
      .from("user_tokens")
      .delete()
      .eq("address", address);
    if (error) throw new Error(error.message);
  }
}
