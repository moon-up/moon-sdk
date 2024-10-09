import { ApiConfig } from '@moonup/moon-api';
import type { SupabaseClient } from '@supabase/supabase-js';

import { HttpClient } from '../../../../codex-sdk/packages/@cod3x/openapi/src/lib/http-client';
/**
 * Supported blockchain types in MoonSDK
 */

export type ChainType =
  | 'ethereum'
  | 'solana'
  | 'bitcoin'
  | 'cosmos'
  | 'eos'
  | 'litecoin'
  | 'ripple'
  | 'tron'
  | 'bitcoincash'
  | 'dogecoin';
/**
 * Configuration options for MoonSDK
 *
 */

export interface MoonSDKConfig {
  apiKey?: string;
  authInstance?: SupabaseClient;
  httpParams?: ApiConfig;
  httpInstance?: HttpClient;
  clientId?: string;
  supabaseUrl?: string;
  supabaseKey?: string;
  baseUrl?: string;
  solanaEndpoint?: string;
  supportedChains?: any[];
  cacheOptions?: {
    max: number;
    maxAge: number;
  };
  rateLimitOptions?: {
    tokensPerInterval: number;
    interval: string;
  };
  selectedChain?: any;
}
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
  rpc_urls: string[] | null;
  short_name: string | null;
  slip44: number | null;
  updated_at: string;
}
