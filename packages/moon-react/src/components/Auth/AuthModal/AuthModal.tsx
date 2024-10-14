import {
  AuthModalContent,
  AuthModalOverlay,
  AuthOptions,
  WalletConnectorsList,
} from '@/components';
import { useMoonSDK } from '@/hooks';
import { AuthModalConfig } from '@moon-react-types/index';
import React, { useState } from 'react';
import { SignupForm } from '../SignUp/SignupForm';

type AuthModalProps = {
  children: React.ReactNode;
  config: AuthModalConfig;
};

export const AuthModal: React.FC<AuthModalProps> = ({ config, children }) => {
  const { enabled, appearance } = config;
  const [_, setConnectWallet] = useState(false);
  const [screen, setScreen] = useState<'login' | 'walletConnect' | 'signup'>(
    'login'
  );
  const { session } = useMoonSDK();

  if (!enabled) return <>{children}</>;
  if (session) return <>{children}</>;

  let logoPosition = 'left-8';
  if (appearance.logo?.position == 'center')
    logoPosition = 'left-[50%] transform -translate-x-1/2';
  else if (appearance.logo?.position == 'right') logoPosition = 'right-8';

  return (
    <>
      <AuthModalOverlay onClick={() => {}} config={config} />
      <AuthModalContent config={config} isSignup={screen == 'signup'}>
        {config.appearance.logo?.enabled && (
          <img
            src={config.appearance.logo?.src}
            alt="logo"
            width={config.appearance.logo?.width}
            height={config.appearance.logo?.height}
            className={`fixed top-8 ${logoPosition}`}
          />
        )}
        {screen === 'login' && (
          <AuthOptions
            config={config}
            onConnectWallet={() => setScreen('walletConnect')}
            onSignupEmail={() => setScreen('signup')}
          />
        )}
        {screen === 'walletConnect' && (
          <WalletConnectorsList onBack={() => setConnectWallet(false)} />
        )}
        {screen === 'signup' && (
          <SignupForm
            onCancel={() => setScreen('login')}
            onSuccess={() => {
              setScreen('login');
            }}
            config={config}
          />
        )}
      </AuthModalContent>
    </>
  );
};
