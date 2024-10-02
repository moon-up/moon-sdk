export type SocialOption = "discord" | "github" | "twitter" | "google";
export type SocialLogins = SocialOption[];

export interface InputBody {
  EOA?: boolean;
  approved?: boolean;
  broadcast?: boolean;
  chain_id?: string;
  contract_address?: string;
  data?: string;
  encoding?: string;
  gas?: string;
  gasPrice?: string;
  input?: string;
  nonce?: string;
  to?: string;
  token_id?: string;
  token_ids?: string;
  value?: string;
}

export type AuthModalConfig = {
  enabled: boolean;
  socialLogins: SocialLogins;
  walletConnectEnabled: boolean;
  anonymousLoginEnabled: boolean;
  appearance: {
    logo?: {
      src?: string;
      height?: string;
      width?: string;
      position?: "left" | "right" | "center";
      className?: string;
      enabled?: boolean;
    };
    welcomeMessage?: {
      title?: string;
      subtitle?: string;
      position?: "above" | "inside";
      className?: string;
      enabled?: boolean;
    };
    signupMessage?: {
      title?: string;
      subtitle?: string;
    };
    modal: {
      backdropColor?: string;
      backgroundColor?: string;
      borderRadius?: string;
      padding?: string;
      width?: string;
      className?: string;
    };
    input: {
      borderRadius?: string;
      placeholders: {
        email: string;
        password: string;
      };
      className?: string;
    };
    button: {
      borderRadius?: string;
      padding?: string;
      height?: string;
      className?: string;
    };
    splashImage?: {
      src?: string;
      height?: string;
      width?: string;
      className?: string;
      enabled?: boolean;
    };
    font?: string;
  };
  theming: {
    accentColor: string;
    successColor: string;
    errorColor: string;
    infoColor: string;
    warningColor: string;
    backgroundColor: string;
    backgroundColorSecondary: string;
    textColor: string;
    textColorSecondary: string;
    buttonColor: string;
    buttonColorSecondary: string;
  };
};

export type TransactionResult = {
  id: string;
  type: string;
  status: "success" | "error";
  data?: any;
  error?: string;
  timestamp: number;
};

export interface OdosToken {
  name: string;
  symbol: string;
  decimals: number;
  assetId: string;
  assetType: string;
  protocolId: string;
  isRebasing: boolean;
}
export type OdosTokenMap = Record<string, OdosToken>;

export type LifiChainData = {
  key: string;
  chainType: string;
  name: string;
  coin: string;
  id: number;
  mainnet: boolean;
  logoURI: string;
  tokenlistUrl: string;
  multicallAddress: string;
  metamask: {
    chainId: string;
    blockExplorerUrls: string[];
    chainName: string;
    nativeCurrency: {
      name: string;
      symbol: string;
      decimals: number;
    };
    rpcUrls: string[];
  };
  nativeToken: {
    address: string;
    chainId: number;
    symbol: string;
    decimals: number;
    name: string;
    coinKey: string;
    logoURI: string;
    priceUSD: string;
  };
  diamondAddress: string;
};

export type LiFiToken = {
  address: string;
  chainId: number;
  coinKey: string;
  decimals: number;
  logoURI: string;
  name: string;
  priceUSD: string;
  symbol: string;
};

export type LiFiTokenMap = Record<string, LiFiToken[]>;