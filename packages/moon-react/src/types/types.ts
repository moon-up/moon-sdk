export type SocialOption = 'discord' | 'github' | 'twitter' | 'google';
export type SocialOptionArray = SocialOption[];

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

/**
 * Configuration options for the authentication modal.
 *
 * @typedef {Object} AuthModalConfig
 * @property {boolean} enabled - Indicates if the authentication modal is enabled.
 * @property {SocialOptionArray} socialLogins - Array of social login options.
 * @property {boolean} walletConnectEnabled - Indicates if wallet connect is enabled.
 * @property {boolean} anonymousLoginEnabled - Indicates if anonymous login is enabled.
 * @property {Object} appearance - Configuration for the appearance of the modal.
 * @property {Object} appearance.logo - Configuration for the logo.
 * @property {string} [appearance.logo.src] - Source URL of the logo image.
 * @property {string} [appearance.logo.height] - Height of the logo.
 * @property {string} [appearance.logo.width] - Width of the logo.
 * @property {'left' | 'right' | 'center'} [appearance.logo.position] - Position of the logo.
 * @property {string} [appearance.logo.className] - CSS class name for the logo.
 * @property {boolean} [appearance.logo.enabled] - Indicates if the logo is enabled.
 * @property {Object} [appearance.welcomeMessage] - Configuration for the welcome message.
 * @property {string} [appearance.welcomeMessage.title] - Title of the welcome message.
 * @property {string} [appearance.welcomeMessage.subtitle] - Subtitle of the welcome message.
 * @property {'above' | 'inside'} [appearance.welcomeMessage.position] - Position of the welcome message.
 * @property {string} [appearance.welcomeMessage.className] - CSS class name for the welcome message.
 * @property {boolean} [appearance.welcomeMessage.enabled] - Indicates if the welcome message is enabled.
 * @property {Object} [appearance.signupMessage] - Configuration for the signup message.
 * @property {string} [appearance.signupMessage.title] - Title of the signup message.
 * @property {string} [appearance.signupMessage.subtitle] - Subtitle of the signup message.
 * @property {Object} appearance.modal - Configuration for the modal.
 * @property {string} [appearance.modal.backdropColor] - Backdrop color of the modal.
 * @property {string} [appearance.modal.backgroundColor] - Background color of the modal.
 * @property {string} [appearance.modal.borderRadius] - Border radius of the modal.
 * @property {string} [appearance.modal.padding] - Padding of the modal.
 * @property {string} [appearance.modal.width] - Width of the modal.
 * @property {string} [appearance.modal.className] - CSS class name for the modal.
 * @property {Object} appearance.input - Configuration for the input fields.
 * @property {string} [appearance.input.borderRadius] - Border radius of the input fields.
 * @property {Object} appearance.input.placeholders - Placeholder texts for the input fields.
 * @property {string} appearance.input.placeholders.email - Placeholder text for the email input field.
 * @property {string} appearance.input.placeholders.password - Placeholder text for the password input field.
 * @property {string} [appearance.input.className] - CSS class name for the input fields.
 * @property {Object} appearance.button - Configuration for the buttons.
 * @property {string} [appearance.button.borderRadius] - Border radius of the buttons.
 * @property {string} [appearance.button.padding] - Padding of the buttons.
 * @property {string} [appearance.button.height] - Height of the buttons.
 * @property {string} [appearance.button.className] - CSS class name for the buttons.
 * @property {Object} [appearance.splashImage] - Configuration for the splash image.
 * @property {string} [appearance.splashImage.src] - Source URL of the splash image.
 * @property {string} [appearance.splashImage.height] - Height of the splash image.
 * @property {string} [appearance.splashImage.width] - Width of the splash image.
 * @property {string} [appearance.splashImage.className] - CSS class name for the splash image.
 * @property {boolean} [appearance.splashImage.enabled] - Indicates if the splash image is enabled.
 * @property {string} [appearance.font] - Font used in the modal.
 * @property {Object} theming - Configuration for the theming of the modal.
 * @property {string} theming.accentColor - Accent color used in the modal.
 * @property {string} theming.successColor - Color used for success messages.
 * @property {string} theming.errorColor - Color used for error messages.
 * @property {string} theming.infoColor - Color used for informational messages.
 * @property {string} theming.warningColor - Color used for warning messages.
 * @property {string} theming.backgroundColor - Background color of the modal.
 * @property {string} theming.backgroundColorSecondary - Secondary background color of the modal.
 * @property {string} theming.textColor - Text color used in the modal.
 * @property {string} theming.textColorSecondary - Secondary text color used in the modal.
 * @property {string} theming.buttonColor - Color used for buttons.
 * @property {string} theming.buttonColorSecondary - Secondary color used for buttons.
 */
export type AuthModalConfig = {
  enabled: boolean;
  socialLogins: SocialOptionArray;
  walletConnectEnabled: boolean;
  anonymousLoginEnabled: boolean;
  appearance: {
    logo?: {
      src?: string;
      height?: string;
      width?: string;
      position?: 'left' | 'right' | 'center';
      className?: string;
      enabled?: boolean;
    };
    welcomeMessage?: {
      title?: string;
      subtitle?: string;
      position?: 'above' | 'inside';
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
  status: 'success' | 'error';
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
