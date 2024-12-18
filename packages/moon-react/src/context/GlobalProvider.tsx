import type { MoonSDKConfig } from "@moonup/moon-sdk";
import { QueryCache, QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

import type { ReactNode } from "react";
import React from "react";
import { AuthModal, DEFAULT_AUTH_CONFIG, defaultTheme } from "..";
import type { AuthModalConfig } from "../types/types";
import { MoonAuthProvider } from "./AuthProvider";
import { MoonSDKProvider } from "./MoonProvider";
import { ThemeProvider } from "./ThemeProvider";
import { WagmiWrapper } from "./WagmiProvider";
import type { Theme } from "../types/theme";

type GlobalStateProviderProps = {
	children: ReactNode;
	sdkConfig?: MoonSDKConfig;
	authConfig?: AuthModalConfig;
};
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			gcTime: 1000 * 60 * 60 * 24,
			staleTime: 1000 * 60 * 60 * 24,
		},
	},
	queryCache: new QueryCache({}),
});

const persister = createSyncStoragePersister({
	// make ssr friendly
	storage: window.localStorage,
});

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({
	children,
	sdkConfig,
	authConfig = DEFAULT_AUTH_CONFIG,
}) => {
	const theme: Theme = {
		...defaultTheme,
		...(authConfig.theming || {}),
	};

	return (
		<PersistQueryClientProvider
			client={queryClient}
			persistOptions={{ persister }}
		>
			<ThemeProvider theme={theme}>
				<MoonAuthProvider sdkConfig={sdkConfig}>
					<WagmiWrapper>
						<MoonSDKProvider authConfig={authConfig}>
							<AuthModal config={authConfig}>{children}</AuthModal>
						</MoonSDKProvider>
					</WagmiWrapper>
				</MoonAuthProvider>
			</ThemeProvider>
		</PersistQueryClientProvider>
	);
};
