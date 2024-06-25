export type UserToken = {
  name: string;
  symbol: string;
  coinGeckoId: string;
  decimals: number;
  address: string;
  chainId: number;
  platforms?: {
    [key: string]: string;
  };
  icon?: string;
};
