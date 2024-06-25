import React from "react";
import { AuthModalConfig } from "../../types/types";

interface ModalProps {
  children: React.ReactNode;
  config: AuthModalConfig;
}

interface ModalOverlayProps {
  config: AuthModalConfig;
  onClick: () => void;
}

export const AuthModalOverlay = ({ onClick, config }: ModalOverlayProps) => (
  <div
    className={`bg-[${config.theming.backgroundColor}] opacity-25 fixed inset-0 z-40 hover:opacity-100 cursor-pointer hover`}
    onClick={onClick}
  ></div>
);

export const AuthModalContent = ({ children, config }: ModalProps) => {
  const textInside = config.appearance.welcomeMessage?.position == "inside";
  const title = (
    <div
      className={`relative w-auto mt-4 mx-auto flex flex-col justify-center items-center ${
        !textInside && "mb-4"
      } `}
    >
      <div
        style={{ color: config.theming.textColor }}
        className={`text-2xl font-bold`}
      >
        {config.appearance.welcomeMessage?.title}
      </div>
      <div
        style={{ color: config.theming.textColorSecondary }}
        className={`text-lg`}
      >
        {config.appearance.welcomeMessage?.subtitle}
      </div>
    </div>
  );

  return (
    <div
      style={{ backgroundColor: config.theming.backgroundColor }}
      className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
    >
      <div className="relative w-auto my-6 mx-auto flex flex-col justify-center items-center">
        {!textInside && title}
        <div className="text-white w-full flex items-center justify-center">
          <div
            style={{
              backgroundColor: config.theming.backgroundColorSecondary,
              width: config.appearance.modal.width,
              borderRadius: config.appearance.modal.borderRadius,
            }}
            className={`relative justify-center items-center`}
          >
            {textInside && title}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
