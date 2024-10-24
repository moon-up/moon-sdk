import type { Theme } from "@/types";
import type { MoonSDKConfig } from "@moonup/moon-sdk";
import type { ReactNode } from "react";
// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import { AuthModal, DEFAULT_AUTH_CONFIG } from "..";
import type { AuthModalConfig } from "../types/types";
import { MoonAuthProvider } from "./AuthProvider";
import { MoonSDKProvider } from "./MoonProvider";
import { ThemeProvider } from "./ThemeProvider";
import { WagmiWrapper } from "./WagmiProvider";

type GlobalStateProviderProps = {
	children: ReactNode;
	sdkConfig?: MoonSDKConfig;
	authConfig?: AuthModalConfig;
	theme: Theme;
};

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({
	children,
	sdkConfig,
	authConfig = DEFAULT_AUTH_CONFIG,
}) => {
	return (
		<ThemeProvider theme={authConfig.theming}>
			<MoonAuthProvider sdkConfig={sdkConfig}>
				<WagmiWrapper>
					<MoonSDKProvider authConfig={authConfig}>
						<AuthModal config={authConfig}>{children}</AuthModal>
					</MoonSDKProvider>
				</WagmiWrapper>
			</MoonAuthProvider>
		</ThemeProvider>
	);
};
