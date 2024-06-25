import React from "react";
import Button from "../Button/Button";
import SignInAnonymously from "../SignInAnonymously/SignInAnonymously";
import EmailLogin from "../EmailLogin/EmailLogin";
import SocialLogins from "../SocialLogins/SocialLogins";
import { AuthModalConfig } from "../../types/types";
import { IconChevronRight, IconWallet } from "@/assets/icons";

interface AuthOptionsProps {
  config: AuthModalConfig;
  onConnectWallet: any;
}

export const AuthOptions = ({ config, onConnectWallet }: AuthOptionsProps) => (
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
  </div>
);
