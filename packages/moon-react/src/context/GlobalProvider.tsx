import type { MoonSDKConfig } from "@moonup/moon-sdk";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
};

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({
	children,
	sdkConfig,
	authConfig = DEFAULT_AUTH_CONFIG,
}) => {
	const [queryClient] = React.useState<QueryClient>(new QueryClient());
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={authConfig.theming}>
				<MoonAuthProvider sdkConfig={sdkConfig}>
					<WagmiWrapper>
						<MoonSDKProvider authConfig={authConfig}>
							<AuthModal config={authConfig}>{children}</AuthModal>
						</MoonSDKProvider>
					</WagmiWrapper>
				</MoonAuthProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
};
