export type UserToken = {
  type: "erc20" | "erc721" | "erc1155" | "native";
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
  wallet?: string;
};
