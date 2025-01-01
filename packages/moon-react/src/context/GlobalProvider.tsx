import type { MoonSDKConfig } from "@moonup/moon-sdk";
import {
	QueryCache,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import type { ReactNode } from "react";
import React from "react";
import { AuthModal, DEFAULT_AUTH_CONFIG, defaultTheme } from "..";
import type { AuthModalConfig } from "../types/types";
import { MoonAuthProvider } from "./AuthProvider";
import { MoonSDKProvider } from "./MoonProvider";
import { ThemeProvider } from "./ThemeProvider";
import { config } from "./WagmiProvider";
import type { Theme } from "../types/theme";
import { WagmiProvider } from "wagmi";
import { Config, reconnect } from "@wagmi/core";

export type GlobalStateProviderProps = {
	children: ReactNode;
	sdkConfig?: MoonSDKConfig;
	authConfig?: AuthModalConfig;
};

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({
	children,
	sdkConfig,
	authConfig = DEFAULT_AUTH_CONFIG,
}) => {
	const theme: Theme = {
		...defaultTheme,
		...(authConfig.theming || {}),
	};
	const [queryClient] = React.useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						refetchOnWindowFocus: false,
						gcTime: 1000 * 60 * 60 * 24,
						staleTime: 1000 * 60 * 60 * 24,
					},
				},
				queryCache: new QueryCache({}),
			}),
	);

	React.useEffect(() => {
		setTimeout(() => {
			reconnect(config as Config);
		});
	}, [queryClient]);

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<MoonAuthProvider sdkConfig={sdkConfig}>
					<WagmiProvider config={config}>
						<MoonSDKProvider authConfig={authConfig}>
							<AuthModal config={authConfig}>{children}</AuthModal>
						</MoonSDKProvider>
					</WagmiProvider>
				</MoonAuthProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
};
