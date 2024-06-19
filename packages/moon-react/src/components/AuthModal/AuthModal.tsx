import React from "react";
import { useState } from "react";
import { AuthModalConfig } from "../../types";
import { useMoonSDK } from "../../context";
import { useAccount, useConnect, useSignMessage } from "wagmi";
import { useConnectToMoon } from "../../hooks/useConnectToMoon";
import { useWalletConnectors } from "../../hooks/useWalletConnectors";
import WalletConnectorsList from "../WalletConnectorList/WalletConnectorList";

import moonLogoLight from "../../assets/moon-logo-light.png";
import { ModalContent, ModalOverlay } from "../Modal/Modal";
import AuthOptions from "../AuthOptions/AuthOptions";

type AuthModalProps = {
  children: React.ReactNode;
  config: AuthModalConfig;
};

const AuthModal: React.FC<AuthModalProps> = ({ config, children }) => {
  const {
    enabled,
    socialLogins,
    walletConnectEnabled,
    anonymousLoginEnabled,
    appearance,
    theming,
  } = config;
  const [connectWallet, setConnectWallet] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { session } = useMoonSDK();
  const [selectedTab, setSelectedTab] = useState(0);

  if (!enabled) return <>{children}</>;
  if (session) return <>{children}</>;

  let logoPosition = "left-8";
  if (appearance.logo?.position == "center")
    logoPosition = "left-[50%] transform -translate-x-1/2";
  else if (appearance.logo?.position == "right") logoPosition = "right-8";

  return (
    <>
      <ModalOverlay onClick={() => setShowModal(false)} config={config} />
      <ModalContent config={config}>
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
      </ModalContent>
    </>
  );
};

export default AuthModal;
