import type { MoonSDKConfig } from "@moonup/moon-sdk";
import { QueryCache, QueryClient } from "@tanstack/react-query";
import {
	persistQueryClient,
	PersistQueryClientProvider,
} from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

import type { ReactNode } from "react";
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
	const [isReady, setIsReady] = React.useState(false);

	const persister = React.useMemo(
		() =>
			createSyncStoragePersister({
				storage:
					typeof window !== "undefined" ? window.localStorage : undefined,
			}),
		[],
	);
	const [queryClient] = React.useState(() => {
		const client = new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
					gcTime: 1000 * 60 * 60 * 24,
				},
			},
			queryCache: new QueryCache({}),
		});

		return client;
	});

	React.useEffect(() => {
		persistQueryClient({
			queryClient,
			persister,
		});
	}, [queryClient, persister]);

	return (
		<PersistQueryClientProvider
			client={queryClient}
			onSuccess={async () => {
				console.log("onSuccess");
				setIsReady(true);
			}}
			persistOptions={{
				persister: persister,
			}}
		>
			{isReady && (
				<ThemeProvider theme={authConfig.theming}>
					<MoonAuthProvider sdkConfig={sdkConfig}>
						<WagmiWrapper>
							<MoonSDKProvider authConfig={authConfig}>
								<AuthModal config={authConfig}>{children}</AuthModal>
							</MoonSDKProvider>
						</WagmiWrapper>
					</MoonAuthProvider>
				</ThemeProvider>
			)}
		</PersistQueryClientProvider>
	);
};
