import type { ReactNode } from "react";
// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import { WagmiProvider, createConfig } from "wagmi";

import {
	coinbaseWallet,
	injected,
	metaMask,
	safe,
	walletConnect,
} from "@wagmi/connectors";
import { http } from "viem";
import { mainnet, optimism } from "viem/chains";

type WagmiWrapperProps = {
	children: ReactNode;
};

export const WagmiWrapper: React.FC<WagmiWrapperProps> = ({ children }) => {
	const config = createConfig({
		connectors: [
			injected(),
			metaMask(),
			walletConnect({
				projectId: "3fcc6bba6f1de962d911bb5b5c3dba68",
			}),
			safe(),
			coinbaseWallet(),
		],
		ssr: true,
		chains: [mainnet, optimism],
		transports: {
			[mainnet.id]: http("https://cloudflare-eth.com"),
			[optimism.id]: http("https://mainnet.optimism.io"),
		},
	});
	return (
		<WagmiProvider config={config} reconnectOnMount={true}>
			{children}
		</WagmiProvider>
	);
};
