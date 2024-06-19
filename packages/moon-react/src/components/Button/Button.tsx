import React from "react";
import { useMoonSDK } from "../..";
import { AuthModalConfig } from "../../types";

interface ButtonProps {
  className?: string;
  onClick: () => void;
  color?:
    | "accentColor"
    | "successColor"
    | "errorColor"
    | "infoColor"
    | "warningColor";
  children: React.ReactNode;
}
function Button({
  onClick: handleClick,
  color = "accentColor",
  children,
  className,
}: ButtonProps) {
  const { authConfig } = useMoonSDK();
  return (
    <button
      onClick={handleClick}
      className={`w-full relative rounded-${authConfig.appearance.button.borderRadius} flex gap-10 p-2 text-lg bg-[${
        authConfig.theming[color]
      }] justify-center items-center border-2 border-[${authConfig.theming[color]}] hover:opacity-90 ${className}`}
    >

      {children}
    </button>
  );
}

export default Button;
