import { AuthModalConfig } from "./types";
import moonLogoLight from "./assets/moon-logo-light.png";

export const DEFAULT_AUTH_CONFIG: AuthModalConfig = {
  enabled: true,
  socialLogins: ["discord", "github", "twitter", "google"],
  walletConnectEnabled: true,
  anonymousLoginEnabled: true,
  appearance: {
    logo: {
      //done
      src: moonLogoLight,
      height: "auto",
      width: "150px",
      position: "left",
      enabled: true,
    },
    welcomeMessage: {
      //done
      title: "Welcome back!",
      subtitle: "Sign in to your account to continue",
      position: "above",
      enabled: true,
    },
    modal: {
      //done
      borderRadius: "sm",
      padding: "8",
      width: "[400px]",
    },
    input: {
      //done
      borderRadius: "sm",
      placeholders: {
        email: "eg. ILoveMoon@gmail.com",
        password: "******",
      },
    },
    button: {
      borderRadius: "sm",
      padding: "2",
    },
    // splashImage: {
    //   src: string,
    //   height: number,
    //   width: number,
    //   className: string,
    //   enabled: boolean,
    // },
    // font: string,
  },
  theming: {
    accentColor: "#5B22FF",
    successColor: "#0ed145",
    errorColor: "#ff1744",
    infoColor: "#39a9db",
    warningColor: "#ff9100",
    backgroundColor: "#000000",
    backgroundColorSecondary: "#131313",
    textColor: "#ffffff",
    textColorSecondary: "#ffffff59",
    buttonColor: "#0066ff",
    buttonColorSecondary: "#0ed145",
  },
};
