export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Chains {
  chain: string | null;
  chain_id: number | null;
  config: Json | null;
  created_at: string;
  ens: Json | null;
  explorers: Json | null;
  features: Json | null;
  icon: string | null;
  id: string;
  index: number | null;
  info_url: string | null;
  name: string | null;
  native_currency: Json | null;
  network_id: number | null;
  rpc_urls: Json | null;
  short_name: string | null;
  slip44: number | null;
  updated_at: string;
}
