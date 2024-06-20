import React from "react";
import { useMoonSDK } from "../..";

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
      style={{
        backgroundColor: authConfig.theming[color],
        color: authConfig.theming.textColor,
        borderColor: authConfig.theming[color],
        borderRadius: authConfig.appearance.button.borderRadius,
      }}
      className={`w-full relative flex gap-10 p-2 text-lg justify-center items-center border-2 hover:opacity-90 ${className}`}
    >

      {children}
    </button>
  );
}

export default Button;
