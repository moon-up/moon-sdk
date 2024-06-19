import React from "react";
import { AuthModalConfig } from "../../types";

interface ModalProps {
  children: React.ReactNode;
  config: AuthModalConfig;
}

interface ModalOverlayProps {
  config: AuthModalConfig;
  onClick: () => void;
}

export const ModalOverlay = ({ onClick, config }: ModalOverlayProps) => (
  <div
    className={`bg-[${config.theming.backgroundColor}] opacity-25 fixed inset-0 z-40 hover:opacity-100 cursor-pointer hover`}
    onClick={onClick}
  ></div>
);

export const ModalContent = ({ children, config }: ModalProps) => {
  const textInside = config.appearance.welcomeMessage?.position == "inside";
  const title = (
    <div
      className={`relative w-auto mt-4 mx-auto flex flex-col justify-center items-center ${
        !textInside && "mb-4"
      } `}
    >
      <div className={`text-2xl font-bold text-text-primary`}>
        {config.appearance.welcomeMessage?.title}
      </div>
      <div className={`text-lg text-text-secondary`}>
        {config.appearance.welcomeMessage?.subtitle}
      </div>
    </div>
  );

  return (
    <div className={`bg-[${config.theming.backgroundColor}] justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}>
      <div className="relative w-auto my-6 mx-auto flex flex-col justify-center items-center">
        {!textInside && title}
        <div className="text-white w-full flex items-center justify-center">
          <div
            className={`relative bg-[${config.theming.backgroundColorSecondary}] rounded-${config.appearance.modal.borderRadius} justify-center items-center w-${config.appearance.modal.width}`}
          >
            {textInside && title}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
