import { IconChevronRight, IconWallet } from '@/assets/icons';
import {
  Button,
  EmailLogin,
  SignInAnonymously,
  SocialLogins,
} from '@/components';
import { AuthModalConfig } from '@/types';
import React from 'react';

/**
 * Props for the AuthOptions component.
 *
 * @interface AuthOptionsProps
 * @property {AuthModalConfig} config - Configuration for the authentication modal.
 * @property {Function} onConnectWallet - Callback function to handle wallet connection.
 * @property {Function} onSignupEmail - Callback function to handle email signup.
 */
export interface AuthOptionsProps {
  config: AuthModalConfig;
  onConnectWallet: any;
  onSignupEmail: any;
}

/**
 * AuthOptions component renders various authentication options based on the provided configuration.
 *
 * @param {AuthOptionsProps} props - The properties for the AuthOptions component.
 * @param {object} props.config - Configuration object for the authentication options.
 * @param {function} props.onConnectWallet - Callback function to handle wallet connection.
 * @param {function} props.onSignupEmail - Callback function to handle email signup.
 *
 * @returns {JSX.Element} The rendered AuthOptions component.
 *
 * @component
 * @example
 * const config = {
 *   appearance: { modal: { padding: '4' } },
 *   socialLogins: ['google', 'facebook'],
 *   walletConnectEnabled: true,
 *   anonymousLoginEnabled: true,
 * };
 * const handleConnectWallet = () => { ... };
 * const handleSignupEmail = () => { ... };
 *
 * <AuthOptions
 *   config={config}
 *   onConnectWallet={handleConnectWallet}
 *   onSignupEmail={handleSignupEmail}
 * />
 */
export const AuthOptions = ({
  config,
  onConnectWallet,
  onSignupEmail,
}: AuthOptionsProps) => (
  <div
    className={`p-${config.appearance.modal.padding} justify-center items-center flex flex-col gap-5`}
  >
    <EmailLogin config={config} />

    <div className="w-full border-b-[1px] border-text-secondary" />
    {config.socialLogins && config.socialLogins.length > 0 && (
      <div className="w-full overflow-x-scroll h-20 flex gap-4 justify-center scrollbar-hide">
        <SocialLogins socialLogins={config.socialLogins} />
      </div>
    )}
    {config.walletConnectEnabled && (
      <Button onClick={onConnectWallet} color="successColor">
        <IconWallet className="absolute left-5 w-[30px]" />
        Connect Wallet
        <IconChevronRight className="absolute right-2 w-[30px]" />
      </Button>
    )}
    {config.anonymousLoginEnabled && <SignInAnonymously />}
    <h3
      className="text-text-secondary hover:cursor-pointer hover:underline"
      onClick={onSignupEmail}
    >
      Sign Up
    </h3>
  </div>
);
