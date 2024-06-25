import React from "react";
import { useState } from "react";
import { AuthModalConfig } from "@moon-react-types/index";
import { useMoonSDK } from "@hooks/index";
import { AuthModalContent, AuthModalOverlay, WalletConnectorsList, AuthOptions } from "@components/index";

type AuthModalProps = {
  children: React.ReactNode;
  config: AuthModalConfig;
};

export const AuthModal: React.FC<AuthModalProps> = ({ config, children }) => {
  const { enabled, appearance } = config;
  const [connectWallet, setConnectWallet] = useState(false);
  const { session } = useMoonSDK();

  if (!enabled) return <>{children}</>;
  if (session) return <>{children}</>;

  let logoPosition = "left-8";
  if (appearance.logo?.position == "center")
    logoPosition = "left-[50%] transform -translate-x-1/2";
  else if (appearance.logo?.position == "right") logoPosition = "right-8";

  return (
    <>
      <AuthModalOverlay onClick={() => {}} config={config} />
      <AuthModalContent config={config}>
        {config.appearance.logo?.enabled && (
          <img
            src={config.appearance.logo?.src}
            alt="logo"
            width={config.appearance.logo?.width}
            height={config.appearance.logo?.height}
            className={`fixed top-8 ${logoPosition}`}
          />
        )}
        {connectWallet ? (
          <WalletConnectorsList onBack={() => setConnectWallet(false)} />
        ) : (
          <AuthOptions
            config={config}
            onConnectWallet={() => setConnectWallet(true)}
          />
        )}
      </AuthModalContent>
    </>
  );
};