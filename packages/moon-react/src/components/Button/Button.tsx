import React from "react";
import { useMoonSDK } from "../..";

type ButtonProps = {
  color?:
    | "accentColor"
    | "successColor"
    | "errorColor"
    | "infoColor"
    | "warningColor";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  onClick: handleClick,
  color = "accentColor",
  children,
  className,
  ...rest
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
      className={`w-full relative flex gap-10 p-2 text-lg justify-center items-center border-2 disabled:cursor-not-allowed hover:opacity-90 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
