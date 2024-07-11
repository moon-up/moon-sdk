export type UserToken = {
  name: string;
  symbol: string;
  coinGeckoId: string;
  decimals: number;
  address: string;
  chainId: number;
  balance?: string;
  icon?: string;
  platforms?: {
    [key: string]: string;
  };
  price?: number;
  isGasToken?: boolean;
};
