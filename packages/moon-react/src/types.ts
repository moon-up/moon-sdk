export type SocialOption = "discord" | "github" | "twitter" | "google";
export type SocialLogins = SocialOption[];

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
